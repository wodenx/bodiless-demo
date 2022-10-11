import type { ArticleMetadata } from './data/withContentLibrary';
import { ARTICLE_LIBRARY_NODEKEY } from './data/withContentLibrary';
import React from 'react';
import { NodeTreePrinter } from '../NodeTreePrinter';
import { asBodilessLink } from '@bodiless/components';

const Link = asBodilessLink('link')('a');

const ArticleClean = () => (
  <div>
    <Link>Foo</Link>
    <NodeTreePrinter />
  </div>
);

}

export { ArticleClean, ArticleMetadata, ARTICLE_LIBRARY_NODEKEY };
