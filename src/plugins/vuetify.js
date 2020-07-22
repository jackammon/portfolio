import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        dark: false,
        default: 'light',
        disable: false,
        themes: {
          light: {
            primary: '#FFFFF2',
            secondary: '#04395E',
            accent: '#FFE099',
            error: '#DE6449',
            info: '#2196F3',
            success: '#70A288',
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
});