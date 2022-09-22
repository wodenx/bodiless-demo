import { graphql } from 'gatsby';
import { vitalPage, StyleGuideTemplateClean } from '@bodiless/vital-templates';
import { as } from '@bodiless/fclasses';

// Break styleguides to try deploy.
// Gatsby cloud logs error with
// "Can't resolve 'bodiless-demo' in '/usr/src/app/www/sites/bodiless-demo/src/templates'""
// import { VitalTestStyleGuidePage } from 'bodiless-demo';

const StyleGuidePage = as(vitalPage.Default)(StyleGuideTemplateClean);

export default StyleGuidePage;

// The allSite query is extraneous and exists only to prevent
// a webpack linting error produced by default gatsby config(the $slug variable
// is used in the fragments, but the graphql doesn't pick that up and
// raises an unused parameter error).
// @todo Fix unnecessary query.
export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
    ...DefaultContentQuery
    allSite(filter: {pathPrefix: {eq: $slug}}) {
      edges {
        node {
          buildTime
        }
      }
    }
  }
`;
