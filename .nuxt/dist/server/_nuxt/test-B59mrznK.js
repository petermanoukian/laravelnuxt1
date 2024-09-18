import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { b as _export_sfc } from "../server.mjs";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@vue/devtools-api";
import "axios";
const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))} data-v-a25687ce><aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl" data-v-a25687ce><div class="p-6" data-v-a25687ce><a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300" data-v-a25687ce>Admin</a><button class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center" data-v-a25687ce><i class="fas fa-plus mr-3" data-v-a25687ce></i> New Report </button></div><nav class="text-white text-base font-semibold pt-3" data-v-a25687ce><a href="index.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" data-v-a25687ce><i class="fas fa-tachometer-alt mr-3" data-v-a25687ce></i> Dashboard </a><a href="blank.html" class="flex items-center active-nav-link text-white py-4 pl-6 nav-item" data-v-a25687ce><i class="fas fa-sticky-note mr-3" data-v-a25687ce></i> Blank Page </a><a href="tables.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" data-v-a25687ce><i class="fas fa-table mr-3" data-v-a25687ce></i> Tables </a><a href="forms.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" data-v-a25687ce><i class="fas fa-align-left mr-3" data-v-a25687ce></i> Forms </a><a href="tabs.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" data-v-a25687ce><i class="fas fa-tablet-alt mr-3" data-v-a25687ce></i> Tabbed Content </a><a href="calendar.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" data-v-a25687ce><i class="fas fa-calendar mr-3" data-v-a25687ce></i> Calendar </a></nav><a href="#" class="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4" data-v-a25687ce><i class="fas fa-arrow-circle-up mr-3" data-v-a25687ce></i> Upgrade to Pro! </a></aside><div class="relative w-full flex flex-col h-screen overflow-y-hidden" data-v-a25687ce><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex" data-v-a25687ce><div class="w-1/2" data-v-a25687ce></div><div class="relative w-1/2 flex justify-end" data-v-a25687ce></div></header><header class="w-full bg-sidebar py-5 px-6 sm:hidden" data-v-a25687ce><nav class="flex flex-col pt-4" data-v-a25687ce><a href="index.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-a25687ce><i class="fas fa-tachometer-alt mr-3" data-v-a25687ce></i> Dashboard </a><a href="blank.html" class="flex items-center active-nav-link text-white py-2 pl-4 nav-item" data-v-a25687ce><i class="fas fa-sticky-note mr-3" data-v-a25687ce></i> Blank Page </a><a href="tables.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-a25687ce><i class="fas fa-table mr-3" data-v-a25687ce></i> Tables </a><a href="forms.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-a25687ce><i class="fas fa-align-left mr-3" data-v-a25687ce></i> Forms </a><a href="tabs.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-a25687ce><i class="fas fa-tablet-alt mr-3" data-v-a25687ce></i> Tabbed Content </a><a href="calendar.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-a25687ce><i class="fas fa-calendar mr-3" data-v-a25687ce></i> Calendar </a><a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-a25687ce><i class="fas fa-cogs mr-3" data-v-a25687ce></i> Support </a><a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-a25687ce><i class="fas fa-user mr-3" data-v-a25687ce></i> My Account </a><a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-a25687ce><i class="fas fa-sign-out-alt mr-3" data-v-a25687ce></i> Sign Out </a><button class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center" data-v-a25687ce><i class="fas fa-arrow-circle-up mr-3" data-v-a25687ce></i> Upgrade to Pro! </button></nav></header><div class="w-full h-screen overflow-x-hidden border-t flex flex-col" data-v-a25687ce><main class="w-full flex-grow p-6" data-v-a25687ce><h1 class="text-3xl text-black pb-6" data-v-a25687ce>Blank Page</h1></main><footer class="w-full bg-white text-right p-4" data-v-a25687ce></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a25687ce"]]);
export {
  test as default
};
//# sourceMappingURL=test-B59mrznK.js.map
