import React from 'react';
import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import withBreadcrumbDemoVariations from './withBreadcrumbDemoVariations';

const DemoFlowContainer = flowHoc(
  withBreadcrumbDemoVariations,
  withNodeKey('defaultcontainer'),
)(FlowContainerClean);

const Variations = (props: any) => (
  <DemoFlowContainer />
);

export const Breadcrumb = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: Breadcrumb',
  },
  Content: {
    Title: replaceWith(() => <>Breadcrumb</>),
    Examples: replaceWith(Variations),
  },
});
