import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "ng-coon-castle",
  outDir: './dist/static',
  routes: {
    '/': { type: 'default' },
    '/home': { type: 'default' },
    '/cattery': { type: 'default' },
    '/maine': { type: 'default' },
    '/contact': { type: 'default' }
  }
};