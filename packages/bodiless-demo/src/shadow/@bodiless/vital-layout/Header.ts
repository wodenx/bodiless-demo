import { as, replaceWith } from '@bodiless/fclasses';
import { asHeaderToken, vitalHeaderBase } from '@bodiless/vital-layout';
import { ButtonClean, vitalButtons } from '@bodiless/vital-buttons';
import { withNodeKey } from '@bodiless/core';
import { GitStar } from '../../../components/GitHubButtons';

const Default = asHeaderToken(vitalHeaderBase.Default, {
  Components: {
    WhereToBuy: replaceWith(GitStar),
    UtilityMenuWrapper: replaceWith(() => null),
    UtilityMenu: replaceWith(() => null),
    DesktopSearch: replaceWith(as(vitalButtons.Primary)(ButtonClean)),
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
