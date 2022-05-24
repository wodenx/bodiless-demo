import { replaceWith } from '@bodiless/fclasses';
import {
  asFooterToken, vitalFooterBase,
} from '@bodiless/vital-layout';
import { GitDiscuss } from '../../../components/GitHubButtons';

const Default = asFooterToken({
  ...vitalFooterBase.Default,
  Components: {
    Rewards: replaceWith(GitDiscuss),
    SocialLinksWrapper: replaceWith(() => null),
    SocialLinks: replaceWith(() => null),
  },
});

export default {
  ...vitalFooterBase,
  Default,
};
