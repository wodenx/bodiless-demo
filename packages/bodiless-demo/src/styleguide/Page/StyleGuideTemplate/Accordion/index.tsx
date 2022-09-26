import React from 'react';
import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import withAccordionDemoVariations from './withAccordionDemoVariations';

const DemoFlowContainer = flowHoc(
  withAccordionDemoVariations,
  withNodeKey('defaultcontainer'),
)(FlowContainerClean);

const Variations = (props: any) => (
  <DemoFlowContainer />
);

export const Accordion = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: Accordion',
  },
  Content: {
    Title: replaceWith(() => <>Accordion</>),
    Examples: replaceWith(Variations),
  },
});
