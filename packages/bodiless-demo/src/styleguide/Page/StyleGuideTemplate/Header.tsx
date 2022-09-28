import React from 'react';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { on, replaceWith } from '@bodiless/fclasses';
import { vitalHeader, HeaderClean } from '@bodiless/vital-layout';

export const Header = asStyleGuideTemplateToken(vitalStyleGuideTemplate.NoLayout, {
  Meta: {
    title: 'Styleguide: Header',
  },
  Content: {
    Title: replaceWith(() => <>Header</>),
    Examples: on(HeaderClean)(vitalHeader.Default),
  },
});
