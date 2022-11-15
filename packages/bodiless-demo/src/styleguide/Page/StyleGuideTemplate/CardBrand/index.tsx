import React from 'react';
import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import withCardDemoVariation from './withCardDemoVariations';

const DemoFlowContainer = flowHoc(
  withCardDemoVariation,
  withNodeKey('defaultcontainer'),
)(FlowContainerClean);

const Variations = (props: any) => (
  <DemoFlowContainer />
);

export const CardBrand = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: Card Brand',
  },
  Content: {
    Title: replaceWith(() => <>Card: Brand</>),
    Examples: replaceWith(Variations),
  },
});
