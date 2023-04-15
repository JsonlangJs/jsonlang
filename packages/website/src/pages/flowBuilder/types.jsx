import React, { memo } from 'react';
import { Handle } from 'reactflow';

const Number = (({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: 'rgb(17 139 233)' }}
        isConnectable={isConnectable}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <div> Number </div>
      <input className="nodrag" type="number" onChange={data.onChange} defaultValue={data.color} />
    </>
  );
});

const Text = (({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: 'rgb(17 139 233)' }}
        isConnectable={isConnectable}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <div> Text </div>
      <input className="nodrag" type="text" onChange={data.onChange} defaultValue={data.color} />
    </>
  );
});

const Json = (({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: 'rgb(17 139 233)' }}
        isConnectable={isConnectable}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <div> Json </div>
      <input className="nodrag" type="text" onChange={data.onChange} defaultValue={data.color} />
    </>
  );
});

const Boolean = (({ data, isConnectable }) => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue((event.target).value);
  };

  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: 'rgb(17 139 233)' }}
        isConnectable={isConnectable}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <label> Boolean </label>
      <div>
        <input type="radio" value={true} name="gender" checked={value === "true"} onChange={handleChange} />true
        <input type="radio" value={false} name="gender" checked={value === "false"} onChange={handleChange} />false
      </div>
    </>
  );
});

const Rule = (({ data, isConnectable }) => {

  return (
    <>
      <label> {data.label} </label>
      <Handle
        type="target"
        position="top"
        style={{ background: 'rgb(17 139 233)' }}
        isConnectable={isConnectable}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <Handle
        type="source"
        position="bottom"
        id="target"
        style={{ background: 'rgb(17 139 233)' }}
        isConnectable={isConnectable}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
    </>
  );
});


const ChildRule = (({ data, isConnectable }) => {

  return (
    <>
      <label> {data.label} </label>
    </>
  );
});

export {
  Number,
  Text,
  Json,
  Boolean,
  Rule,
  ChildRule,
}
