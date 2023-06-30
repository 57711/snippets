// const vueInstance = $("#app").__vue__;
const vueInstance = $("#root").__vue_app__;
window.Store = vueInstance.$store;
window.Vue = vueInstance;
