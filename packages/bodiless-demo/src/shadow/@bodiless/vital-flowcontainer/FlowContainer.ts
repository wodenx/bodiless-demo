import { on } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { vitalFlowContainerBase } from '@bodiless/vital-flowcontainer';
import { CardStatic, CardClean } from '@bodiless/vital-card';
import { StyledEditor, StyledEditorClean } from '../../../components/StyledEditor';
import { asGetStarted } from '../../../components/Card';
import { TitleTableClean, asSecondColumnHighlightedTitle, asThirdColumnHighlightedTitle } from '../../../components/Tables';
import { demoArticle } from '../../../components/Article';

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
      GetStarted: on(CardStatic)(asGetStarted),
      SecondHighlightedTable: on(TitleTableClean)(asSecondColumnHighlightedTitle),
      ThirdHighlightedTable: on(TitleTableClean)(asThirdColumnHighlightedTitle),
      ArticleFeature: on(CardClean)(demoArticle.Feature),
    },
  },
  ExtraPadding,
  // vitalFlowContainerBase.WithContentLibrary,
);

export default {
  ...vitalFlowContainerBase,
  Default,
};
