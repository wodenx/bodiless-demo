import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as, Img
} from '@bodiless/fclasses';
import { vitalImage } from '@bodiless/vital-image';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const Component = as(vitalImage.Default)(Img);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'Image',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    Image: withTokenEditorStyles,
  }),
);
