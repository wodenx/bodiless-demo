import { on } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { vitalFlowContainerBase } from '@bodiless/vital-flowcontainer';
import { CardClean } from '@bodiless/vital-card';
import { StyledEditor, StyledEditorClean } from '../../../components/StyledEditor';
import { asGetStarted } from '../../../components/Card';

const ExtraPadding = asFluidToken(vitalFlowContainerBase.Default, {
  Spacing: {
    ComponentWrapper: 'my-12',
  },
});

const Default = asFluidToken(
  {
    ...vitalFlowContainerBase.Default,
    Components: {
      ...vitalFlowContainerBase.Default.Components,
      StyledEditorBorder: on(StyledEditorClean)(StyledEditor.Borders),
      GetStarted: on(CardClean)(asGetStarted),
    },
  },
  ExtraPadding,
);

export default {
  ...vitalFlowContainerBase,
  Default,
};
