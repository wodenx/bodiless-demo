import React from 'react';
import { observer } from 'mobx-react';
import { useNode, withNode } from '@bodiless/core';

const NodeTreePrinter$ = observer(() => {
  const { node } = useNode();
  const path = node.path.join('$');
  const keys = node.keys.filter(k => k.startsWith(path));
  const chilluns = keys.map(key => (
    <div key={key}>
      {key.split('$').slice(1).join('$')}
      <pre className="pl-5">{JSON.stringify(node.peer(key).data)}</pre>
    </div>
  ));
  return (
    <>
      <h4>{node.path.join('$')}</h4>
      <div>{chilluns}</div>
    </>
  );
});

export const NodeTreePrinter = withNode(NodeTreePrinter$);
