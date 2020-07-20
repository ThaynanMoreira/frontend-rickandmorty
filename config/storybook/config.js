import { configure, addDecorator } from '@storybook/vue'
// import Vue from 'vue';
import vuetifyConfig from '@/plugins/vuetify';     


addDecorator(() => ({
  // vuetify: new Vuetify(config),
  vuetify: vuetifyConfig,
  template: '<v-app><v-content><v-container><v-layout column><story/></v-layout></v-container></v-content></v-app>',
  style: '.theme--light.application { background-color: transparent; }'
}))
const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories () {
  console.log(req.keys())
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)