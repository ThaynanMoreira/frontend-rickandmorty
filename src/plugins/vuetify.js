import Vue from 'vue';
import Vuetify,
{ 
  VCardTitle, 
  VCardSubtitle, 
  VAvatar, 
  VImg, 
  VApp, 
  VBtn, 
  VCard, 
  VCardText, 
  VContainer, 
  VFlex, 
  VHover, 
  VIcon, 
  VLayout, 
  VTooltip,
  VCol,
  VProgressCircular,
  VContent,
  VRow
} from 'vuetify/lib';
import pt from 'vuetify/es5/locale/pt';

const preset = {
  breakpoint: {
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    },
  },
  icons: {
    iconfont: 'mdi',
    values: {},
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
}

const config = {
  preset,
  components: {
    VCardTitle, 
    VCardSubtitle, 
    VAvatar, 
    VImg,
    VApp,
    VBtn,
    VCard,
    VCardText,
    VContainer,
    VFlex,
    VHover,
    VIcon,
    VLayout,
    VCol,
    VProgressCircular,
    VRow,
    VTooltip,
    VContent,
  }
};

Vue.use(Vuetify, config);

export default new Vuetify(config);


export { config }
