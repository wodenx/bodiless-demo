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

export const useOverrides = () => ({
  name: 'cms-library',
  label: 'Articles',
  groupLabel: 'CMS',
  groupMerge: false,
  icon: 'account_balance',
  isHidden: false,
  // global: true,
  // local: false,
  // label: 'Drupal',
  // isHidden: !!node.data.revisionId,
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
