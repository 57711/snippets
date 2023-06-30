const Vue = $('#app').__vue__.constructor.super;
const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
Vue.config.devtools = true;
devtools.emit('init', Vue);