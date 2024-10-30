import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pricingadminPlugin, PricingadminPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pricingadminPlugin)
  .addPage({
    element: <PricingadminPage />,
    title: 'Root Page',
    path: '/pricingadmin',
  })
  .render();
