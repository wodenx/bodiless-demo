import React from 'react';
import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import withListDemoVariations from './withListDemoVariations';

const DemoFlowContainer = flowHoc(
  withListDemoVariations,
  withNodeKey('defaultcontainer'),
)(FlowContainerClean);

const Variations = (props: any) => (
  <DemoFlowContainer />
);

export const List = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: List',
  },
  Content: {
    Title: replaceWith(() => <>List</>),
    Examples: replaceWith(Variations),
  },
});
