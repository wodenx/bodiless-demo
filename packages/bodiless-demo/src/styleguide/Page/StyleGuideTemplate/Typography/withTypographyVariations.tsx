import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as, Div
} from '@bodiless/fclasses';
import { withEditorPlain } from '@bodiless/vital-editors';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const Component = as(withEditorPlain('text', 'Text'))(Div);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'Typography',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    Typography: withTokenEditorStyles,
  }),
);
