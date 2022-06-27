import React from 'react';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { flowHoc, on, replaceWith } from '@bodiless/fclasses';
import { vitalLayout, LayoutClean } from '@bodiless/vital-layout';

export const Layout = asStyleGuideTemplateToken(vitalStyleGuideTemplate.NoLayout, {
  Meta: flowHoc.meta.term('Token')('Layout'),
  Content: {
    Title: replaceWith(() => <>Layout</>),
    Examples: on(LayoutClean)(vitalLayout.StyleGuide),
  },
});
