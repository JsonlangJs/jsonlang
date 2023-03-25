import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  updateEdge,
  MiniMap,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import Layout from '@theme/Layout';
import Sidebar from './sidebar';
import JsonLangRunner from '@site/src/components/JsonLangRunner';
import { Number, Text, Json, Boolean, Rule } from './types';
import AddButton from './addbutton';

import './index.css';



const fitViewOptions = {
  padding: 3,
};

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
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [addnode, setAddnode] = useState(false);
  const [addChildeNode, setAddChildeNode] = useState(false);
  const [parentNode, setParentNode] = useState(null);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, type: 'step' }, eds)), []);


  const initialNodeType = {
    id : getId(),
    type : 'default',
    position : { x: 0, y: nodes.length*100},
    data: { label: 'New Node' },
    width: 150
  }


  useEffect(()=>{
    if (addChildeNode){
      setEdges((eds) => eds.concat({
        id: String(parseInt(Math.random(100000000)*1000000)),
        source: parentNode.id,
        target: nodes[nodes.length-1].id,
        label: '+',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      }));
      setAddChildeNode(false);
      setParentNode(null);
    }
  },[nodes])

//  useEffect(() => {
//     console.log('reactFlowInstance', reactFlowInstance ? reactFlowInstance.toObject() : {})
//   })

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

  const handleEdgeClick = (param, data) => {
    console.log(data);
    const findSourceNode = nodes.find((item)=>item.id===data.source);
    setNodes((nds) => nds.concat({...initialNodeType, 
      // position:{ x: findSourceNode.position.x, y: findSourceNode.position.y+100}, 
      data:{ parentId: data.target, ...initialNodeType.data }}));
    setParentNode(findSourceNode);
    setAddnode(true);
  }

  const handleNodeClick = (e, data) => {
    const filterNodeswithSameSource = nodes.filter((node)=>node?.data?.parentId===data?.id);
    setNodes((nds) => nds.concat({
      id : getId(),
      type : 'default',
      position : { x: data.position.x+filterNodeswithSameSource.length*160, y: data.position.y+100},
      data: { label: 'New Node', parentId: data.id },
      width: 150,
      draggable: false
    }));
    setAddChildeNode(true);
    setParentNode(data);
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
            onEdgeClick={handleEdgeClick}
            onNodeClick={handleNodeClick}
            fitView
            fitViewOptions={fitViewOptions}
          >
            {/* <AddButton /> */}
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