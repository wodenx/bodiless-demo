import {
  deserializeHtml, createLinkDeserializer, TagName, createDeserializer,
} from '@bodiless/richtext';
import { DefaultNormalHref } from '@bodiless/components';
// import { DOMParser } from 'xmldom';

const createStrongDeserializer = () => ({
  ...createDeserializer({
    nodeName: 'STRONG',
    tagName: TagName.Text,
  }),
  map: () => ({ Bold: true }),
});

const createSupDeserializer = () => ({
  ...createDeserializer({
    nodeName: 'SUP',
    tagName: TagName.Text,
  }),
  map: () => ({ SuperScript: true }),
});

const createHeader2Deserializer = () => ({
  ...createDeserializer({
    nodeName: 'H2',
    tagName: TagName.Element,
  }),
});

const createHeader3Deserializer = () => ({
  ...createDeserializer({
    nodeName: 'H3',
    tagName: TagName.Element,
  }),
});

export const deserializeBody = (html: string) => deserializeHtml(
  html.replace(/\n/g, ''),
  {
    Bold: createStrongDeserializer(),
    SuperScript: createSupDeserializer(),
    Link: createLinkDeserializer({
      normalizeHref: ((href: string) => (
        new DefaultNormalHref(href).toString()
      )) as any,
    }),
    H2: createHeader2Deserializer(),
    H3: createHeader3Deserializer(),
  },
  // @todo This seems not to be 100% compatible with browser DOMParser (no 'body' attribute)
  // Currently we don't need to parse HTML during build, only in edit env, but this
  // will need to be revisited
  // new DOMParser(),
);
