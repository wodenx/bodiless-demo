import {
  asLayoutToken, vitalFooter, vitalHeader, vitalLayoutBase
} from '@bodiless/vital-layout';

const Default = asLayoutToken(vitalLayoutBase.Base, {
  Components: {
    Header: vitalHeader.Default,
    Footer: vitalFooter.Default,
  },
});

export default {
  ...vitalLayoutBase,
  Default,
};
