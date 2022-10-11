import {
  ContentNode, OptionGroupDefinition, MenuOptionsDefinition,
  useNode, useContextMenuForm, createMenuOptionGroup, withMenuOptions,
} from '@bodiless/core';
import { ReactNode } from 'react';
import { flow } from 'lodash';
import { observer } from 'mobx-react';
import { copyNode } from '@bodiless/layouts/lib/utils/NodeTools';
import { HOC } from '@bodiless/fclasses';

export type UpdateButtonOptions<P = any, D = any> = {
  useLibraryNode: (props: P) => { node: ContentNode<D> },
  useFormOptions?: (props: P) => {
    // @TODO Export Form Options from contextMenuForm.tsx
    renderForm?: (props: any) => ReactNode,
    hasSubmit?: boolean,
  },
  useOverrides?: (props: any) => Partial<OptionGroupDefinition>,
} & Omit<MenuOptionsDefinition<P>, 'useMenuOptions'>;

const withUpdateButton = <P extends object, D extends object>(
  options: UpdateButtonOptions<P, D>,
): HOC => Component => {
    const {
      useLibraryNode,
      useFormOptions = () => ({}),
      useOverrides = () => ({}),
    } = options;
    const useMenuOptions = (props: P) => {
      const { node: targetNode } = useNode<D>();
      const { node: libraryNode } = useLibraryNode(props);
      const form = useContextMenuForm({
        ...useFormOptions(props),
        submitValues: () => copyNode(libraryNode, targetNode, true),
      });
      const baseOption: OptionGroupDefinition = {
        name: 'content-library-update',
        label: 'Update',
        groupLabel: 'Content',
        groupMerge: 'merge',
        icon: 'refresh',
        local: true,
        global: false,
        formTitle: 'Content Library',
        formDescription: 'Update to latest version.',
        isHidden: !libraryNode,
      };
      const finalOption = {
        ...baseOption,
        ...useOverrides(props),
        handler: () => form,
      };
      return createMenuOptionGroup(finalOption);
    };

    const {
      name = 'Content Library', id, type, peer = false,
    } = options;
    return flow(
      withMenuOptions({
        useMenuOptions, name, peer, id, type,
      }),
      observer,
    )(Component);
  };

export default withUpdateButton;
