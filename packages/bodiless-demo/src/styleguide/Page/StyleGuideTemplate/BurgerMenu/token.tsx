import { as } from '@bodiless/fclasses';
import { vitalBurgerMenu } from '@bodiless/vital-navigation';
import { withCategory } from '../../TokenEditor';

const WithBurgerMenu = withCategory('BurgerMenu')(as(vitalBurgerMenu.Default));

export {
  WithBurgerMenu,
};
