/*
import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

*/

import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /.story\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
