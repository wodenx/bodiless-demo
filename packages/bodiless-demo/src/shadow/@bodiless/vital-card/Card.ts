import { H2, replaceWith } from '@bodiless/fclasses';
import { asCardToken, vitalCardBase } from '@bodiless/vital-card';
// import { vitalTypography } from '@bodiless/vital-elements';

const Basic = asCardToken(vitalCardBase.Basic, {
  Components: {
    TitleWrapper: replaceWith(H2),
  },
  Theme: {
    ImageWrapper: 'md:mx-16',
  },
});

const Hero = asCardToken(
  vitalCardBase.HeroBase,
  vitalCardBase.WithHorizontalContentCentered,
  vitalCardBase.WithHorizontalLeftOrientation,
  vitalCardBase.WithPrimaryButton,
);


export default {
  ...vitalCardBase,
  Hero,
  Basic,
};
