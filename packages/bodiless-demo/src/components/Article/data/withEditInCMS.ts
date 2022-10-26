import {
  useNode, withMenuOptions, TMenuOption, createMenuOptionGroup
} from '@bodiless/core';
import { ArticleMetadata, useIsLinked } from './withContentLibrary';

const useMenuOptions = () => {
  const { node } = useNode<ArticleMetadata>();
  console.log('node', node.data, node.path);
  const option: TMenuOption = {
    name: 'edit-in-cms',
    icon: 'edit',
    label: 'CMS',
    groupMerge: 'merge-up',
    handler: () => { window.open(node.data.editLink); },
    isHidden: !useIsLinked(),
  };
  return createMenuOptionGroup(option);
};

const withEditInCMS = withMenuOptions({
  name: 'edit-in-cms',
  peer: true,
  useMenuOptions,
});

export default withEditInCMS;
