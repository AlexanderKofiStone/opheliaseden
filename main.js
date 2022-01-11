import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import slideFade from './directives/slideFade'
import slideUp from './directives/slideUp'
import flicker from './directives/flicker'
import fade from './directives/fade'
import hallucinate from './directives/hallucinate'

Vue.directive('slidefade', slideFade);
Vue.directive('slideup', slideUp);
Vue.directive('flicker', flicker);
Vue.directive('fade', fade);
Vue.directive('hallucinate', hallucinate);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
