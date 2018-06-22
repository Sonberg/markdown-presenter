import Vue from 'vue';
import Vuex from 'vuex';
import VueShortkey from 'vue-shortkey';
import Vue2TouchEvents from 'vue2-touch-events';

Vue.use(VueShortkey)
Vue.use(Vue2TouchEvents);
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    presentation: "@background: linear-gradient(25deg, rgba(38,124,223,1) 00%, rgba(87,85,217,1) 100%)\n@color: white\n@font-size: 26px\n@animation-type: bounce\n@progress-type: dott\n@progress-color: white\n@navigation-hide: true\n\n# Javascript\n\n---\n\n# Java\n\n---\n\n# Kotln\n\n---\n\n# Ruby\n\n---\n\n# C#\n\n---\n\n# Swift\n\n---\n\n# Obj-C\n\n---\n\n# Webassably\n\n---\n\n# Basic\n\n---\n\n# Python\n\n---\n\n# C++\n\n---\n\n# SQL\n\n---\n\n# PHP\n\n---\n\n# Scala\n\n---\n\n# Css\n\n---\n\n# HTML\n\n---\n\n# Haskel\n\n---\n\n# Lips\n\n---\n\n# Bash\n\n---\n\n# Erlang\n\n---\n\n# Go\n"
  },
  mutations: {
    setPresentation(ctx, val) {
      ctx.presentation = val;
    }
  },
  actions: {

  },
  getters: {
    presentation: state => state.presentation
  }
})
