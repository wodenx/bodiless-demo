import { withTokenEditorFlowContainerItem } from '@bodiless/tokens';
import type { TokenEditorComponentDef } from '@bodiless/tokens';
import {
  withDesign, HOC, flowHoc, as
} from '@bodiless/fclasses';
import { vitalYouTube, YouTubeClean } from '@bodiless/vital-youtube';
import * as styleTokens from './token';
import { tokenPanelStyles, withTokenEditorStyles } from '../../TokenEditor';

const tokens: TokenEditorComponentDef['tokens'] = {
  ...styleTokens,
};

const Component = as(vitalYouTube.Base, vitalYouTube.WithResponsive16By9Embed)(YouTubeClean);

const def = {
  Component,
  tokens: tokens as { [key: string]: HOC },
  name: 'Video',
};

// @ts-ignore
export default flowHoc(
  withTokenEditorFlowContainerItem(def, tokenPanelStyles),
  withDesign({
    Video: withTokenEditorStyles,
  }),
);
