import { graphql, useStaticQuery } from 'gatsby';
import { withDefaultContent } from '@bodiless/core';
import type { ArticleMetadata } from 'bodiless-demo';
import { ARTICLE_LIBRARY_NODEKEY } from 'bodiless-demo';
import { deserializeBody } from './deserializeRichText';

// NOTE: This query and related translations are defined at site level bc
// Gatsby will not, by default, extract queries from
// files in packages.  I think this has been addressed and can now be done with
// specially named packages (packages with gatsby in the name).
// @see https://github.com/gatsbyjs/gatsby/issues/12569
const query = graphql`
  query MyQuery {
    allNodeArticle {
      edges {
        node {
          id
          body {
            summary
            value
            processed
          }
          drupal_internal__vid
          drupal_internal__nid
          changed
          title
          relationships {
            field_image {
              localFile {
                publicURL
              }
            }
          }
          field_image {
            alt
            title
            width
            height
            drupal_internal__target_id
          }
        }
      }
    }
  }
`;

type DrupalArticleDataItem = {
  node: {
    id: string,
    drupal_internal__nid: string,
    drupal_internal__vid: string,
    changed: string,
    body: {
      summary: string,
      value: string,
      processed: html,
    },
    title: string,
    field_image: {
      alt: string,
      title: string,
      width: number,
      height: number,
    },
    relationships: {
      field_image: {
        localFile: {
          publicURL: string,
        },
      },
    },
  }
};

type DrupalArticleData = {
  allNodeArticle: {
    edges: DrupalArticleDataItem[],
  }
};

const parseArticleMetadata = (item: DrupalArticleDataItem): ArticleMetadata => {
  const drupalNode = item.node;
  return {
    id: drupalNode.id,
    revisionId: drupalNode.drupal_internal__vid,
    updateTime: drupalNode.changed,
  };
};

const parseArticleTitle = (item: DrupalArticleDataItem) => {
  const drupalNode = item.node;
  return {
    text: drupalNode.title,
  };
};

const parseArticleFieldImage = (item: DrupalArticleDataItem) => {
  const drupalNode = item.node;
  return {
    src: drupalNode.relationships.field_image.localFile.publicURL,
    alt: drupalNode.field_image.alt,
  };
};

const parseArticleBody = (item: DrupalArticleDataItem) => {
  const drupalNode = item.node;
  const body = drupalNode.body.processed;
  console.log('raw body',body);
  const deserialized = deserializeBody(body);
  console.log('deserialgized body', deserialized);
  return deserialized;
  // return {
  //   text: drupalNode.body.value,
  // };
  return 
};

// const useArticleData = (prefix = '') => (props: any) => ({
//   [`${prefix}title`]: useDrupalTitleData(props),
//   [`${prefix}image`]: useDrupalImageData('field_image')(props),
//   [`${prefix}subtitle`]: useDrupalSubtitleData(props),
//   [`${prefix}body`]: useDrupalBodyData(props),
//   [prefix.slice(0, -1)]: parseArticleMetadata(props),
// });

const useDrupalArticleData = (prefix?: string) => () => {
  const rawData: DrupalArticleData = useStaticQuery(query);
  const fullPrefix = prefix ? `${prefix}$` : '';
  const data = rawData.allNodeArticle.edges.reduce(
    (data, next, index) => ({
      ...data,
      [`${fullPrefix}${next.node.id}`]: parseArticleMetadata(next),
      [`${fullPrefix}${next.node.id}$title`]: parseArticleTitle(next),
      [`${fullPrefix}${next.node.id}$image`]: parseArticleFieldImage(next),
      [`${fullPrefix}${next.node.id}$body`]: parseArticleBody(next),
    }), {}
  );
  return data;
};

const withDrupalArticleData = withDefaultContent(useDrupalArticleData(ARTICLE_LIBRARY_NODEKEY));

export { withDrupalArticleData };
