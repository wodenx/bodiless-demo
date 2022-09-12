import React from 'react';

import { HOC } from '@bodiless/fclasses';
import { useNode } from '@bodiless/core';

export const EDIT_HOST = process.env.BL_EDIT_HOST || 'edit.main-bvxea6i-4qnlbnsncvzug.ca-1.platformsh.site';
// @todo this should chage to our friendly url.
export const STATIC_HOST = process.env.BL_STATIC_HOST || 'neon-caramel-1c470e.netlify.app';

export const withEditPageHref: HOC = Component => props => {
  const { node } = useNode();
  const { pagePath } = node;
  const href = process.env.NODE_ENV === 'production'
    ? `https://${EDIT_HOST}${pagePath}`
    : `https://${STATIC_HOST}${pagePath}`;

  return <Component {...props} href={href} />;
};

export const withEditPageText: HOC = Component => props => {
  const text = process.env.NODE_ENV === 'production'
    ? 'Edit this page' : 'Back to site';
  return <Component {...props}>{text}</Component>;
};
