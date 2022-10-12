import React, { useEffect } from 'react';
import type { HOC } from '@bodiless/fclasses';

const withRefreshContentOnLoad: HOC = Component => props => {
  useEffect(() => {
    const port = process.env.PORT || 8000;
    try {
      const refresh = new XMLHttpRequest();
      refresh.onreadystatechange = rsp => console.log('respose', rsp);
      refresh.open('POST',`http://localhost:${port}/___refresh`);
      refresh.send();
    } catch (e) {
      console.log('error', e);
    }
  }, []);
  return <Component {...props} />;
};

export default withRefreshContentOnLoad;
