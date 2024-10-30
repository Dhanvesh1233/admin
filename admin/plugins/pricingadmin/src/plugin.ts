import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pricingadminPlugin = createPlugin({
  id: 'pricingadmin',
  routes: {
    root: rootRouteRef,
  },
});

export const PricingadminPage = pricingadminPlugin.provide(
  createRoutableExtension({
    name: 'PricingadminPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
