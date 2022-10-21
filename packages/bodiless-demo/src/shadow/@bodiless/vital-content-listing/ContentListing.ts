import { vitalContentListingBase, asContentListingToken } from '@bodiless/vital-content-listing';
import { vitalFlowContainer } from '@bodiless/vital-flowcontainer';
import { as } from '@bodiless/fclasses';
import demoContentListingFlowContainer from './ContentListingFlowContainer';

const Article = asContentListingToken({
  ...vitalContentListingBase.Default,
  Components: {
    ...vitalContentListingBase.Default.Components,
    Content: as(
      demoContentListingFlowContainer.Article,
      // @todo this should be part of the default vitalContentListingFlowContainer
      vitalFlowContainer.WithTabletOneThirdConstraint,
    ),
  }
});

export default {
  ...vitalContentListingBase,
  Article,
};
