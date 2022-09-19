import { withNodeKey } from '@bodiless/core';
import { addProps, flowHoc } from '@bodiless/fclasses';
import { asBodilessVideo } from '../EditableVideo';
import { asVideoToken } from '../VideoClean';

const Default = asVideoToken({
  Editors: {
    Video: asBodilessVideo(),
  },
  Spacing: {
    Video: 'w-full',
  },
  Content: {
    Video: addProps({ loop: true }),
  },
  Schema: {
    Video: withNodeKey('video'),
  },
  Meta: flowHoc.meta.term('Type')('Video'),
});

export default {
  Default,
};
