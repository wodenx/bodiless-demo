import { graphql, useStaticQuery } from 'gatsby';
import { withDefaultContent } from '@bodiless/core';
import type { ArticleMetadata } from 'bodiless-demo';
import { ARTICLE_LIBRARY_NODEKEY } from 'bodiless-demo';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { deserializeBody } from './deserializeRichText.bl-edit';

// NOTE: This query and related translations are defined at site level bc
// Gatsby will not, by default, extract queries from
// files in packages.  I think this has been addressed and can now be done with
// specially named packages (packages with gatsby in the name).
// @see https://github.com/gatsbyjs/gatsby/issues/12569
const query = graphql`
query ContentfulQuery {
  allContentfulArticle {
    edges {
      node {
        body {
          raw
        }
        title
        summary {
          summary
        }
        id
        updatedAt
        contentful_id
        sys {
          revision
        }
        image {
          file {
            url
          }
          title
        }
        terms
      }
    }
  }
}
`;

type ContentfulArticleDataItem = {
  node: {
    id: string,
    contentful_id: string,
    sys: {
      revision: string,
    },
    updatedAt: string,
    body: {
      raw: any,
    },
    title: string,
    summary: {
      summary: string,
    }
    image: {
      file: {
        url: string,
      },
      title: string,
    },
    terms: string[],
  }
};

type ContentfulArticleData = {
  allContentfulArticle: {
    edges: ContentfulArticleDataItem[],
  }
};

const parseArticleMetadata = (item: ContentfulArticleDataItem): ArticleMetadata => {
  const contentfulNode = item.node;
  return {
    id: contentfulNode.id,
    revisionId: contentfulNode.sys.revision,
    updateTime: contentfulNode.updatedAt,
    editLink: `https://app.contentful.com/spaces/9jfq70qfast7/entries/${contentfulNode.contentful_id}`,
  };
};

const parseArticleTitle = (item: ContentfulArticleDataItem) => {
  const contentfulNode = item.node;
  return {
    text: contentfulNode.title,
  };
};

const parseArticleSummary = (item: ContentfulArticleDataItem) => {
  const contentfulNode = item.node;
  return {
    text: contentfulNode.summary.summary,
  };
};

const parseArticleFieldImage = (item: ContentfulArticleDataItem) => {
  const contentfulNode = item.node;
  return {
    src: `https:${contentfulNode.image.file.url}`,
    alt: contentfulNode.image.title,
  };
};

const parseArticleFieldTerms = (item: ContentfulArticleDataItem) => {
  const contentfulNode = item.node;
  const tags = (contentfulNode.terms ||[]).map(
    t => ({
      id: `__${t.toLowerCase()}`,
      name: t,
    }),
  );
  return { tags };
};

const parseArticleBody = (item: ContentfulArticleDataItem) => {
  const contentfulNode = item.node;
  const jsonBody = contentfulNode.body.raw;
  const rawBody = JSON.parse(jsonBody);
  const body = documentToHtmlString(rawBody);
  // NOTE: Here we only need to deserialize in edit env. Currently deserialization
  // fails during production build bc of incommpatible NodeJS DOMParser.  Need to investigate
  // further to support building from drupal in cases where we don't copy the deserialized
  // data during edit.
  const deserialized = process.env.NODE_ENV === 'production' ? [] : deserializeBody(body);
  return deserialized;
};

// const useArticleData = (prefix = '') => (props: any) => ({
//   [`${prefix}title`]: useDrupalTitleData(props),
//   [`${prefix}image`]: useDrupalImageData('field_image')(props),
//   [`${prefix}subtitle`]: useDrupalSubtitleData(props),
//   [`${prefix}body`]: useDrupalBodyData(props),
//   [prefix.slice(0, -1)]: parseArticleMetadata(props),
// });

const useContentfulArticleData = (prefix?: string) => () => {
  const rawData: ContentfulArticleData = useStaticQuery(query);
  const fullPrefix = prefix ? `${prefix}$` : '';
  const data = rawData.allContentfulArticle.edges.reduce(
    (data, next, index) => ({
      ...data,
      [`${fullPrefix}${next.node.id}`]: parseArticleMetadata(next),
      [`${fullPrefix}${next.node.id}$title`]: parseArticleTitle(next),
      [`${fullPrefix}${next.node.id}$image`]: parseArticleFieldImage(next),
      [`${fullPrefix}${next.node.id}$body`]: parseArticleBody(next),
      [`${fullPrefix}${next.node.id}$description`]: parseArticleSummary(next),
      [`${fullPrefix}${next.node.id}$_tags`]: parseArticleFieldTerms(next),
    }), {}
  );
  return data;
};

const withContentfulArticleData = withDefaultContent(
  useContentfulArticleData(ARTICLE_LIBRARY_NODEKEY)
);

export default withContentfulArticleData;
