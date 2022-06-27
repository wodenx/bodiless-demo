import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as
} from '@bodiless/fclasses';
import { ButtonClean, vitalButtons } from '@bodiless/vital-buttons';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const Component = as(vitalButtons.Default)(ButtonClean);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'Button',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    Button: withTokenEditorStyles,
  }),
);
