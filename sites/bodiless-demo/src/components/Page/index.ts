import { Fragment } from 'react';
import { as } from '@bodiless/fclasses';
import { vitalPage } from '@bodiless/vital-templates';
import { asFluidToken } from '@bodiless/vital-elements';
import { withDrupalArticleData } from './withDrupalArticleData';
import withRefreshContentOnLoad from './withRefreshContentOnLoad';

// Note we define this component at site level because we need the
// StaticQuery in './withDrupalArticleData'.  See comment there.
const Default = asFluidToken({
  ...vitalPage.Default,
  Schema: {
    _: as(withDrupalArticleData, withRefreshContentOnLoad, vitalPage.Default.Schema._),
  },
});

export const DefaultPage = as(Default)(Fragment);
