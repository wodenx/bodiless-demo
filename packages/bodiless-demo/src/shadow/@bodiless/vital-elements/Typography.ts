import omit from 'lodash/omit';
import {
  asElementToken, vitalColor, vitalTextDecoration, vitalTypographyBase
} from '@bodiless/vital-elements';
import { as } from '@bodiless/fclasses';

const H1NoTheme = omit(vitalTypographyBase.H1, 'Theme');
const H2NoTheme = omit(vitalTypographyBase.H2, 'Theme');
const H3NoTheme = omit(vitalTypographyBase.H3, 'Theme');

export default {
  ...vitalTypographyBase,
  H1: asElementToken(H1NoTheme, {
    Theme: {
      _: as(
        vitalTextDecoration.Bold,
        vitalColor.TextPrimaryInteractive,
      ),
    },
  }),
  H2: asElementToken(H2NoTheme, {
    Theme: {
      _: as(
        vitalTextDecoration.Bold,
        vitalColor.TextPrimaryInteractive,
      ),
    },
  }),
  H3: asElementToken(H3NoTheme, {
    Theme: {
      _: as(
        vitalTextDecoration.Medium,
        vitalColor.TextPrimaryInteractive,
      ),
    },
  }),
};
