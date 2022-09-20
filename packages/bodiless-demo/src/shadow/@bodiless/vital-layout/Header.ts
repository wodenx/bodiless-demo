import { as, replaceWith } from '@bodiless/fclasses';
import { asHeaderToken, vitalHeaderBase } from '@bodiless/vital-layout';
import { ButtonClean, vitalButtons, asButtonToken } from '@bodiless/vital-buttons';
import { withNodeKey } from '@bodiless/core';
import { omit } from 'lodash';
import { withEditPageHref, withEditPageText } from './withEditPageHref';

const editPageButton = asButtonToken({
  ...omit(vitalButtons.Primary, 'Schema', 'Editors'),
  Theme: omit(vitalButtons.Primary.Theme, '_'),
  Content: {
    _: withEditPageHref,
    Body: withEditPageText,
  },
});

const Default = asHeaderToken(vitalHeaderBase.Default, {
  Components: {
    WhereToBuy: replaceWith(() => null),
    UtilityMenuWrapper: replaceWith(() => null),
    UtilityMenu: replaceWith(() => null),
    DesktopSearch: replaceWith(as(editPageButton)(ButtonClean)),
    SearchToggler: replaceWith(() => null),
  },
  Spacing: {
    DesktopSearch: 'mx-2',
  },
  Schema: {
    DesktopSearch: withNodeKey({ nodeKey: 'EditLink', nodeCollection: 'site' }),
  },
});

export default {
  ...vitalHeaderBase,
  Default,
};
