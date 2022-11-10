import React from 'react';
import { JsonLang } from 'jsonlang-js';

const jsonLang = new JsonLang();


const getGroupedRules = () => {
  const rules = jsonLang.getRulesIds();
  const groupedRules = {};
  const sortedRules = rules.sort((r) => r.group);
  let group = sortedRules[0].group;
  groupedRules[group] = [];

  sortedRules.forEach((rule) =>{
    if (rule.group !== group) {
      group = rule.group; 
      groupedRules[group] = [rule];
    }
    else {
      groupedRules[group].push(rule);
    }
  })

  return groupedRules;
}

export default () => {
  const onDragStart = (event, nodeType, key) => {
    event.dataTransfer.setData('application/reactflow/type', nodeType);
    event.dataTransfer.setData('application/reactflow/key', key);
    event.dataTransfer.effectAllowed = 'move';
  };

  const listRules = () => {
    const groupedRules = getGroupedRules();
    const htmlGroups = [];

    for (const group in groupedRules) {
      const htmlRules = [];
      htmlGroups.push(<div className="groupTitle" key={group+"-desc"}>{group}</div>);

      groupedRules[group].forEach((rule) =>{
        const ruleName = `${rule.name}${rule.shortcut? ` (${rule.shortcut})`:''}`;

        htmlRules.push(
          <div key={group+rule.name} className="rule dndnode" onDragStart={(event) => onDragStart(event, 'rule', ruleName)} draggable>
            {ruleName}
          </div>
        );
      });

      htmlGroups.push(
        <div className="group" key={group}>
          {htmlRules}
        </div>
      )
    }

    htmlGroups.push(
      <div className="group" key="values">
        {['number', 'text', 'json', 'boolean'].map(i => 
          <div key={'values'+i} className="rule dndnode" onDragStart={(event) => onDragStart(event, i, i)} draggable>
            {i}
          </div>
        )}
      </div>
    )

    return htmlGroups;
  }

  return (
    <section>
      <div className="description">Rules</div>
      {listRules()}
    </section>
  );
};
