import React from 'react';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { on, replaceWith } from '@bodiless/fclasses';
import { vitalLayout, LayoutClean } from '@bodiless/vital-layout';

export const Layout = asStyleGuideTemplateToken(vitalStyleGuideTemplate.NoLayout, {
  Meta: {
    title: 'Styleguide: Layout',
  },
  Content: {
    Title: replaceWith(() => <>Layout</>),
    Examples: on(LayoutClean)(vitalLayout.StyleGuide),
  },
});
