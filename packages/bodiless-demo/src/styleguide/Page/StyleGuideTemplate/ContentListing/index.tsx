import React from 'react';
import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import withContentListingDemoVariations from './withContentListingDemoVariations';

const DemoFlowContainer = flowHoc(
  withContentListingDemoVariations,
  withNodeKey('defaultcontainer'),
)(FlowContainerClean);

const Variations = (props: any) => (
  <DemoFlowContainer />
);

export const ContentListingStyleGuide = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: Content Listing',
  },
  Content: {
    Title: replaceWith(() => <>Content Listing</>),
    Examples: replaceWith(Variations),
  },
});
