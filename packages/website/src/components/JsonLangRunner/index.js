import React from 'react';
import * as monaco from 'monaco-editor';
import Editor, { loader } from "@monaco-editor/react";
import { JsonLang } from '@jsonlang/core';
import { MathRules } from '@jsonlang/math';
import { LogicRules } from '@jsonlang/logic';
import { ArrayRules } from '@jsonlang/array';
import { ObjectRules } from '@jsonlang/object';

loader.config({ monaco });

import styles from './styles.module.css';
import getExample from './examples';
import { useColorMode } from '@docusaurus/theme-common';

const jsonLang = new JsonLang();

jsonLang.import(MathRules, LogicRules, ArrayRules, ObjectRules);

const definition = { 
  identifier: { name: 'Test', shortcut: 't' },
  inputs: { type: 'any' },
  output: { type: 'string' }
};

jsonLang.registerOne(definition, { sync: (input) => {
  return `${input} Test`
} });

export default function JsonLangRunner({ example, height }) {
  const { colorMode } = useColorMode();
  const [result, setResult] = React.useState('');
  const [code, setCode] = React.useState(
    getExample(example)[0]
  );

  const [objData, setData] = React.useState(
    getExample(example)[1]
  );

  React.useEffect(() => {
    run();
  })

  function run() {
    let jsonCode, jsonData;

    try {
      jsonCode = JSON.parse(code);
      jsonData = JSON.parse(objData);
    } catch {
      jsonCode = jsonData = null
    }

    if (jsonCode && jsonData) {
      try {
        const res = jsonLang.execute(jsonCode, jsonData, { sync: true });
        setResult(typeof res == 'object'? JSON.stringify(res) : res);
      } catch (error) {
        setResult(error.message);
      }
    }
  }

  function handleCodeChange(value) {
    setCode(value);
  }

  function handleDataChange(value) {
    setData(value);
  }

  function handleCodeValidation(markers) {
  }

  return ([
    <div className={styles.gridContainer} key="JsonLang">
      <div className={styles.gridItem}>
      <label key="JsonLangLabel" className={styles.label}>Rules</label>
      <Editor
        theme={colorMode === 'dark' ? "light":"vs-dark"}
        height={height}
        defaultLanguage="json"
        defaultValue={code}
        onChange={handleCodeChange}
        onValidate={handleCodeValidation}
        key="JsonLangCode"
      />
      </div>
      <div className={styles.gridItem}>
      <label key="DataLabel" className={styles.label}>Data</label>
      <Editor
        theme={colorMode === 'dark' ? "light":"vs-dark"}
        height={height}
        defaultLanguage="json"
        defaultValue={objData}
        onChange={handleDataChange}
        key="JsonLangData"
      />
      </div>
    </div>,
    <div key="Result">
      <label key="ResultLabel" className={styles.label}>Result</label>
      <textarea key="ResultValue" defaultValue={result} disabled={true} className={styles.resultBase + " " + styles.result}></textarea>
    </div>
  ]);
}
