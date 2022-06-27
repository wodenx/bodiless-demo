import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as
} from '@bodiless/fclasses';
import { TableClean, vitalTable } from '@bodiless/vital-table';
import * as styleTokens from './token';

import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const Component = as(vitalTable.Default)(TableClean);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'Table',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    Table: withTokenEditorStyles,
  }),
);
