import React from 'react';
import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { withNodeKey } from '@bodiless/core';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import withBurgerMenuDemoVariations from './withBurgerMenuDemoVariations';

const DemoFlowContainer = flowHoc(
  withBurgerMenuDemoVariations,
  withNodeKey('defaultcontainer'),
)(FlowContainerClean);

const Variations = (props: any) => (
  <DemoFlowContainer />
);

export const BurgerMenu = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: {
    title: 'Styleguide: BurgerMenu',
  },
  Content: {
    Title: replaceWith(() => <>Burger Menu</>),
    Examples: replaceWith(Variations),
  },
});
