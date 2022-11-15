import { as } from '@bodiless/fclasses';
import { vitalCardStatic } from '@bodiless/vital-card';
import { withCategory } from '../../TokenEditor';
import {
  asGetStarted, withGreyBackground, withGradientBackground, withSecondaryEyebrow
} from '../../../../components/Card';

const WithGrayBackground = withCategory('Appearance')(as(asGetStarted, withGreyBackground));
const WithGrayGradient = withCategory('Appearance')(as(asGetStarted, withGradientBackground));
const WithSecondaryEyebrow = withCategory('Structure')(as(vitalCardStatic.Product, withSecondaryEyebrow));

export {
  WithGrayBackground,
  WithGrayGradient,
  WithSecondaryEyebrow,
};
