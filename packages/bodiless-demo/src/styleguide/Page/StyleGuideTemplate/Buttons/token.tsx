import { as } from '@bodiless/fclasses';
import { vitalButtons } from '@bodiless/vital-buttons';
import { withCategory } from '../../TokenEditor';

const Primary = withCategory('Button Type')(as(vitalButtons.Primary));
const Secondary = withCategory('Button Type')(as(vitalButtons.Secondary));
const WhereToBuy = withCategory('Button Type')(as(vitalButtons.WhereToBuy));
const WhereToBuyWithoutIcon = withCategory('Button Type')(as(vitalButtons.WhereToBuyWithoutIcon));
const PrimarySelected = withCategory('Button State')(as(vitalButtons.PrimarySelected));
const SecondarySelected = withCategory('Button State')(as(vitalButtons.SecondarySelected));
/*
 *  WithDisabled is a valid token but it disables the button so Tokens switcher context menu
 *  will not come up.
 */
// const WithDisabled = withCategory('Button State')(as(vitalButtons.WithDisabled));
const WithArrow = withCategory('Button Style')(as(vitalButtons.WithArrow));

export {
  WhereToBuyWithoutIcon,
  WhereToBuy,
  PrimarySelected,
  SecondarySelected,
  // WithDisabled,
  WithArrow,
  Primary,
  Secondary,
};
