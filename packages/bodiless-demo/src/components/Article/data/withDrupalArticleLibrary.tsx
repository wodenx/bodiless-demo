// import React from 'react';
import { flowHoc } from '@bodiless/fclasses';
// import { useEditContext } from '@bodiless/core';
import { withLocalContextMenu, withContextActivator, withActivatorWrapper } from '@bodiless/core';
import withContentLibrary from './withContentLibrary';
import withUpdateButton, { withUpdateNotifier } from './withUpdateButton';
import withEditInCMS from './withEditInCMS';

// const withContextLoggerr: HOC = Component => props => {
//   const c = useEditContext();
//   console.log(c);
//   console.log(c.getMenuOptions());
//   return <Component {...props} />;
// };

const withDrupalArticleLibrary = flowHoc(
  // withContextLoggerr,
  withActivatorWrapper('onClick', 'div'),
  withLocalContextMenu,
  withContextActivator('onClick'),
  withUpdateNotifier,
  withEditInCMS,
  withUpdateButton,
  withContentLibrary,
  // withNode,
  // withNodeKey(nodeKey),

);

export default withDrupalArticleLibrary;
