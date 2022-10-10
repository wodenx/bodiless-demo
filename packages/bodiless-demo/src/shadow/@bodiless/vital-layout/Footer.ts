import { replaceWith, Div, on } from '@bodiless/fclasses';
import {
  asFooterToken, CopyrightRowClean, vitalCopyrightRow, vitalFooterBase
} from '@bodiless/vital-layout';
import { vitalMenu } from '@bodiless/vital-navigation';
import { GitButtons } from '../../../components/GitHubButtons';

const Default = asFooterToken({
  ...vitalFooterBase.Base,
  Components: {
    FooterMenu: vitalMenu.Footer,
    Column1Wrapper: replaceWith(Div),
    RewardsWrapper: replaceWith(Div),
    // Rewards: replaceWith(GitButtons),
    CopyrightRow: replaceWith(() => null),
    CopyrightRowOutsideColumns: on(CopyrightRowClean)(
      vitalCopyrightRow.CopyrightNoSocialLinks,
    ),
  },
  Layout: {
    Wrapper: 'w-full',
    Container: 'flex flex-row flex-wrap',
    Column1Wrapper: 'w-full md:w-1/3',
    Column2Wrapper: 'w-full md:w-2/3',
  },
  Spacing: {
    ...vitalFooterBase.Base.Spacing,
    Column1Wrapper: 'py-9',
    CopyrightRowOutsideColumns: 'w-full',
  },
});

export default {
  ...vitalFooterBase,
  Default,
};
