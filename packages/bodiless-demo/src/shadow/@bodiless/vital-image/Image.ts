import { vitalImageBase, asImageToken } from '@bodiless/vital-image';

const Default = asImageToken(vitalImageBase.EditableTraced);

const vitalImage: typeof vitalImageBase = {
  ...vitalImageBase,
  Default,
};

export default vitalImage;
