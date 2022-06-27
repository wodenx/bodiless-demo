import { as } from '@bodiless/fclasses';
import { vitalTypography } from '@bodiless/vital-elements';
import { withCategory } from '../../TokenEditor';

const H1 = withCategory('Headers')(as(vitalTypography.H1));
const H2 = withCategory('Headers')(as(vitalTypography.H2));
const H3 = withCategory('Headers')(as(vitalTypography.H3));
const H4 = withCategory('Headers')(as(vitalTypography.H4));
const H5 = withCategory('Headers')(as(vitalTypography.H5));
const Body = withCategory('Elements')(as(vitalTypography.Body));
const Link = withCategory('Elements')(as(vitalTypography.Link));
const Eyebrow = withCategory('Elements')(as(vitalTypography.Eyebrow));
const Rest = withCategory('Elements')(as(vitalTypography.Rest));

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  Body,
  Link,
  Eyebrow,
  Rest,
};
