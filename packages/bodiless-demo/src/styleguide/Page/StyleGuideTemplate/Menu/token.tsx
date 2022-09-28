import { as, withDesign } from '@bodiless/fclasses';
import { vitalMenu } from '@bodiless/vital-navigation';
import { withCategory } from '../../TokenEditor';

const WithDefaultMenu = withCategory('Menu')(as(vitalMenu.Default));
const WithTopNavMenu = withCategory('Top Navigation')(as(vitalMenu.TopNav));
const WithFooterNavMenu = withCategory('Footer Navigation')(as(
  vitalMenu.Footer,
  withDesign({
    Nav: 'bg-demo-primary-interactive',
  }),
));
const WithUtilityNavMenu = withCategory('Utility Navigation')(as(vitalMenu.Utility));

export {
  WithDefaultMenu,
  WithTopNavMenu,
  WithFooterNavMenu,
  WithUtilityNavMenu,
};
