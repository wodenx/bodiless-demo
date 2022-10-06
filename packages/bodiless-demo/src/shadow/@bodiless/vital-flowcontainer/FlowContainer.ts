import { on } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { vitalFlowContainerBase } from '@bodiless/vital-flowcontainer';
import { CardStatic, CardClean } from '@bodiless/vital-card';
import { StyledEditor, StyledEditorClean } from '../../../components/StyledEditor';
import {
  asGetStarted, asVideoCard, asVideoVerticalCard, withGreyBackground, withGradientBackground
} from '../../../components/Card';
import { TitleTableClean, asSecondColumnHighlightedTitle, asThirdColumnHighlightedTitle } from '../../../components/Tables';
import { VideoClean, VideoTokens } from '../../../components/Video';

const ExtraPadding = asFluidToken(vitalFlowContainerBase.Default, {
  Spacing: {
    ComponentWrapper: 'my-8',
  },
});

const Default = asFluidToken(
  {
    ...vitalFlowContainerBase.Default,
    Components: {
      ...vitalFlowContainerBase.Default.Components,
      StyledEditorBorder: on(StyledEditorClean)(StyledEditor.Borders),
      GetStarted: on(CardStatic)(asGetStarted, withGreyBackground),
      GetStartedGradient: on(CardStatic)(asGetStarted, withGradientBackground),
      // Use CardClean not CardStatic to hydrate the card so that video auto-play will work.
      VideoCard: on(CardClean)(asVideoCard),
      VideoVerticalCard: on(CardClean)(asVideoVerticalCard),
      SecondHighlightedTable: on(TitleTableClean)(asSecondColumnHighlightedTitle),
      ThirdHighlightedTable: on(TitleTableClean)(asThirdColumnHighlightedTitle),
      Video: on(VideoClean)(VideoTokens.Default),
    },
  },
  ExtraPadding,
  vitalFlowContainerBase.WithContentLibrary,
);

export default {
  ...vitalFlowContainerBase,
  Default,
};
