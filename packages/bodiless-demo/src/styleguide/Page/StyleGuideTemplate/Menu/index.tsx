import React from 'react';
import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import withMenuDemoVariations from './withMenuDemoVariations';

const DemoFlowContainer = flowHoc(
  withMenuDemoVariations,
  withNodeKey('defaultcontainer'),
)(FlowContainerClean);

const Variations = (props: any) => (
  <DemoFlowContainer />
);

export const Menu = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: Menu',
  },
  Content: {
    Title: replaceWith(() => <>Menu</>),
    Examples: replaceWith(Variations),
  },
});
