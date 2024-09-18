import { _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'file://C:/My-Documents/build4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file://C:/My-Documents/build4/node_modules/vue/server-renderer/index.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'file://C:/My-Documents/build4/node_modules/vue-router/dist/vue-router.node.mjs';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import 'file://C:/My-Documents/build4/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/My-Documents/build4/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/My-Documents/build4/node_modules/h3/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/devalue/index.js';
import 'file://C:/My-Documents/build4/node_modules/ufo/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/My-Documents/build4/node_modules/destr/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/hookable/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/klona/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/scule/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/defu/dist/defu.mjs';
import 'file://C:/My-Documents/build4/node_modules/ohash/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/unstorage/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/My-Documents/build4/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/My-Documents/build4/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/My-Documents/build4/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/My-Documents/build4/node_modules/pathe/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/unhead/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/unctx/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/axios/index.js';
import './1-CKepcKm6.mjs';

const _sfc_main = {
  __name: "addtagg",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useRouter();
    useRoute();
    const name = ref("");
    const adderror = ref("");
    const addsuc = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> Add Category </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><div class="flex items-center justify-center bg-gray-100"><div class="fullwidth90 bg-white p-8 shadow-md rounded-lg"><h1 class="text-2xl font-bold mb-4">Add Category </h1><p class="mb-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/tagg/viewtagg",
        class: "widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3"${_scopeId}></i>View Tags`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Tags")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Full Name</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add </button>`);
      if (adderror.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(adderror.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (addsuc.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(addsuc.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tagg/addtagg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=addtagg-BHcyLuJ8.mjs.map
