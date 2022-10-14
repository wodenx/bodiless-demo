import { on } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { vitalFlowContainerBase, FlowContainerClean } from '@bodiless/vital-flowcontainer';
import { CardStatic, CardClean } from '@bodiless/vital-card';
import { StyledEditor, StyledEditorClean } from '../../../components/StyledEditor';
import { asGetStarted, asVideoCard } from '../../../components/Card';
import { TitleTableClean, asSecondColumnHighlightedTitle, asThirdColumnHighlightedTitle } from '../../../components/Tables';
import { demoArticle } from '../../../components/Article';
import { VideoClean, VideoTokens } from '../../../components/Video';

const ExtraPadding = asFluidToken(vitalFlowContainerBase.Default, {
  Spacing: {
    ComponentWrapper: 'my-8',
  },
});

const ContentRegion = asFluidToken({
  ...vitalFlowContainerBase.ContentRegion,
  Components: {
    ...vitalFlowContainerBase.ContentRegion.Components,
    ArticlePromo: on(CardClean)(demoArticle.Promo),
  },
});

const Default = asFluidToken(
  {
    ...vitalFlowContainerBase.Default,
    Components: {
      ...vitalFlowContainerBase.Default.Components,
      StyledEditorBorder: on(StyledEditorClean)(StyledEditor.Borders),
      GetStarted: on(CardStatic)(asGetStarted),
      // Use CardClean not CardStatic to hydrate the card so that video auto-play will work.
      VideoCard: on(CardClean)(asVideoCard),
      SecondHighlightedTable: on(TitleTableClean)(asSecondColumnHighlightedTitle),
      ThirdHighlightedTable: on(TitleTableClean)(asThirdColumnHighlightedTitle),
      ArticleFeature: on(CardClean)(demoArticle.Feature),
      ArticleFeatureRight: on(CardClean)(demoArticle.FeatureRight),
      ArticlePromo: on(CardClean)(demoArticle.Promo),
      Video: on(VideoClean)(VideoTokens.Default),
      ContentRegion: on(FlowContainerClean)(ContentRegion),
    },
  },
  ExtraPadding,
  // vitalFlowContainerBase.WithContentLibrary,
);

export default {
  ...vitalFlowContainerBase,
  Default,
  ContentRegion,
};
