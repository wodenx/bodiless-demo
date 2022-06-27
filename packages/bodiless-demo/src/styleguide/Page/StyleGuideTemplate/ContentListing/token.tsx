import { as } from '@bodiless/fclasses';
import { vitalContentListing } from '@bodiless/vital-content-listing';
import { withCategory } from '../../TokenEditor';

const WithMultipleAllowedTags = withCategory('Filter Type')(as(vitalContentListing.WithMultipleAllowedTags));

export {
  WithMultipleAllowedTags
};
