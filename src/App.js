import React from 'react';
import './App.css';

const TreeNode = ({ node, position }) => {
  return (
    <div className={`node ${position}`}>
      <div className="box">
        <div className="title">{node.title}</div>
      </div>
      {node.child && (
        <div className="child-container">
          {node.child.map((childNode, index) => (
            <TreeNode key={index} node={childNode} position={position} />
          ))}
        </div>
      )}
      {node.curve && <div className="curve"></div>}
    </div>
  );
};

const Tree = ({ data }) => {
  return (
    <div className="tree-container">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} position="center" />
      ))}
    </div>
  );
};

function App() {
  const data = [
    {
      "title": "Tree Start"
    },
    {
      "title": "Step 1"
    },
    {
      "title": "Step 2",
      "child": [
        {
          "title": "Sub Tree",
          "curve": true,
          "child": [
            {
              "title": "Step 1"
            }
          ]
        },
        {
          "title": "Sub Tree",
          "curve": true,
          "child": [
            {
              "title": "Step 1"
            }
          ]
        }
      ]
    }
  ];
  return (
    <div className="App">
      <Tree data={data} />
    </div>
  );
}

export default App;
