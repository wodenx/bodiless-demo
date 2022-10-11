import React from 'react';
import { flowHoc, HOC } from '@bodiless/fclasses';
import { useEditContext } from '@bodiless/core';
import withContentLibrary from './withContentLibrary';
// import withUpdateButton, { withUpdateNotifier } from './withUpdateButton';

const withContextLoggerr: HOC = Component => props => {
  const c = useEditContext();
  console.log(c);
  console.log(c.getMenuOptions());
  return <Component {...props} />;
}

const withDrupalArticleLibrary = flowHoc(
  // withContextLoggerr,
  // withUpdateNotifier,
  // withUpdateButton,
  withContentLibrary,
  // withNode,
  // withNodeKey(nodeKey),

);

export default withDrupalArticleLibrary;
