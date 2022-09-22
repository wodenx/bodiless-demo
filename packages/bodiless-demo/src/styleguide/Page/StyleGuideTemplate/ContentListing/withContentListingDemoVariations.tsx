import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import { withNode, withNodeKey } from '@bodiless/core';
import {
  withDesign, HOC, flowHoc, as
} from '@bodiless/fclasses';
import { ContentListingClean, vitalContentListing } from '@bodiless/vital-content-listing';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const Component = as(
  vitalContentListing.Default,
  vitalContentListing.WithFilterSelector,
  withNode,
  withNodeKey('default'),
)(ContentListingClean);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'ContentListing',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    ContentListing: withTokenEditorStyles,
  }),
);
