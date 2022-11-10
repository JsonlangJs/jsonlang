import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  updateEdge,
  MiniMap
} from 'reactflow';
import 'reactflow/dist/style.css';
import Layout from '@theme/Layout';
import Sidebar from './sidebar';
import JsonLangRunner from '@site/src/components/JsonLangRunner';
import { Number, Text, Json, Boolean, Rule } from './types';

import './index.css';

const initialNodes = [];

const nodeTypes = {
  number: Number,
  text: Text,
  json: Json,
  boolean: Boolean,
  rule: Rule,
};

let id = 0;
const getId = () => `dndnode_${id++}`;


export default () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

 useEffect(() => {
    console.log('reactFlowInstance', reactFlowInstance ? reactFlowInstance.toObject() : {})
  })

  // useEffect(() => {
  //   setNodes((nds) =>
  //     nds.map((node) => {
  //       if (node.id === '1') {
  //         // it's important that you create a new object here
  //         // in order to notify react flow about the change
  //         node.data = {
  //           ...node.data,
  //           label: nodeName,
  //         };
  //       }

  //       return node;
  //     })
  //   );
  // }, [nodeName, setNodes]);

  const onEdgeUpdate = useCallback(
    (oldEdge, newConnection) => setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    []
  );

  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, type: 'step' }, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow/type');
      const key = event.dataTransfer.getData('application/reactflow/key');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
  
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: key },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const test = () => {
    console.log('test');
  }

  return (
    <Layout title="Flow" description="Flow" key="Flow">
      <div className="dndflow">
      <ReactFlowProvider>
        <Sidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onEdgeUpdate={onEdgeUpdate}
            deleteKeyCode='Delete'
            onNodeClick={test}
            fitView
          >
            <Background variant="lines" />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  </Layout>
  );
};