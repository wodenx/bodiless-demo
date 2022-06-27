import React from 'react';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { flowHoc, on, replaceWith } from '@bodiless/fclasses';
import { vitalHeader, HeaderClean } from '@bodiless/vital-layout';

export const Header = asStyleGuideTemplateToken(vitalStyleGuideTemplate.NoLayout, {
  Meta: flowHoc.meta.term('Token')('Header'),
  Content: {
    Title: replaceWith(() => <>Header</>),
    Examples: on(HeaderClean)(vitalHeader.Default),
  },
});
