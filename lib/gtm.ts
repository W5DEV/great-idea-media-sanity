/* eslint-disable @typescript-eslint/no-explicit-any */
type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = 'G-V1NEBK43ZT';

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  } else {
    // eslint-disable-next-line no-console
    console.log({
      event: 'pageview',
      page: url,
    });
  }
};
