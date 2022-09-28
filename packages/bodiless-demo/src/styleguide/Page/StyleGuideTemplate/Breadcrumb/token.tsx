import { as } from '@bodiless/fclasses';
import { vitalBreadcrumbs } from '@bodiless/vital-navigation';
import { withCategory } from '../../TokenEditor';

const WithBreadcrumbs = withCategory('Breadcrumb')(as(vitalBreadcrumbs.Default));

export {
  WithBreadcrumbs,
};
