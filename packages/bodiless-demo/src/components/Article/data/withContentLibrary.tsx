import React from 'react';
import { useNode, ContentNode } from '@bodiless/core';
import { withContentLibrary as withContentLibraryBase } from '@bodiless/layouts';
import { ComponentSelector } from '@bodiless/layouts-ui';
import { HOC } from '@bodiless/fclasses';

export type ArticleMetadata = {
  id: string,
  revisionId: string,
  updateTime: string,
};

export const ARTICLE_LIBRARY_NODEKEY = '___drupal';

export const useLibraryNode = () => {
  const { node } = useNode();
  const libraryNode = node.peer(`Page$${ARTICLE_LIBRARY_NODEKEY}`);
  console.log(libraryNode.path.join('$'), libraryNode.keys.filter(k => k.includes(ARTICLE_LIBRARY_NODEKEY)));
  return { node: libraryNode };
};

// We display nothing bc the title says it all
const ArticleDisplay = () => <></>;

export const useIsLinked = (): Boolean => {
  const { node } = useNode<ArticleMetadata>();
  return !!node.data.revisionId;
}

export const useOverrides = () => ({
  name: 'cms-library',
  label: 'Articles',
  groupLabel: 'Content',
  groupMerge: 'none' as 'none',
  icon: 'web_stories',
  isHidden: useIsLinked(),
  formTitle: 'CMS Articles',
  formDescription: 'This is a list of articles available in the CMS.  Select one to link its content to this component.',
});

const useMeta = (node: ContentNode<any>) => {
  const titleNode = node.child<any>('title');
  const { data } = titleNode;
  return {
    title: data.text || 'No title',
  };
};

const options = {
  DisplayComponent: ArticleDisplay,
  Selector: ComponentSelector,
  useLibraryNode,
  useMeta,
  useOverrides,
  // peer: true,
};

const withContentLibrary = withContentLibraryBase(options) as HOC;

export default withContentLibrary;
