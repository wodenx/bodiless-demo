import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import { withNode, withNodeKey } from '@bodiless/core';
import {
  withDesign, HOC, flowHoc, as, on
} from '@bodiless/fclasses';
import { ContentListingClean, vitalContentListing } from '@bodiless/vital-content-listing';
import { CardStatic, vitalCardStatic } from '@bodiless/vital-card';
import { asFluidToken } from '@bodiless/vital-elements';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const demoContentListing = asFluidToken(
  vitalContentListing.Default,
  vitalContentListing.WithFilterSelector,
  {
    Components: {
      FilterableContent: on(CardStatic)(
        vitalCardStatic.Default,
        vitalCardStatic.WithVerticalOrientation,
        vitalCardStatic.WithNoDescription,
      ),
    },
  }
);

const Component = as(
  demoContentListing,
  withNode,
  withNodeKey('default'),
)(ContentListingClean);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'StyleGuideContentListing',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    StyleGuideContentListing: withTokenEditorStyles,
  }),
);
