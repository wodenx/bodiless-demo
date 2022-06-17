import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { asCardToken, vitalCard } from '@bodiless/vital-card';

const asGetStarted = asCardToken(
  vitalCard.Default,
  vitalCard.WithPrimaryButton,
  vitalCard.WithNoEyebrow,
  {
    Components: {
      DescriptionWrapper: replaceWith(() => null),
      ImageWrapper: replaceWith(() => null),
      Image: replaceWith(() => null),
    },
    Layout: {
      ContentWrapper: 'flex flex-col self-center',
    },
    Spacing: {
      Wrapper: 'py-16',
    },
    Theme: {
      TitleWrapper: 'text-center',
      Wrapper: 'bg-demo-table-light rounded-md',
    },
    Meta: flowHoc.meta.term('Sub Type')('Get Started'),
  }
);

export {
  asGetStarted,
};
