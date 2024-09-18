import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useAuthStore } from "./auth-BCAkOG0G.js";
import { useRouter, useRoute } from "vue-router";
import { S as Sidebar, M as MobileHeader } from "./MobileHeader-DadXbsen.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "axios";
import "./1-CKepcKm6.js";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useRouter();
    const route = useRoute();
    const id1 = ref("");
    const name = ref("");
    const editerror = ref("");
    const editsuc = ref("");
    route.params.id;
    const tagg = ref(null);
    useNuxtApp();
    useRuntimeConfig().public.apiBaseUrl;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> Edit Tag </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6">`);
      if (tagg.value) {
        _push(`<div><div class="flex items-center justify-center bg-gray-100"><div class="fullwidth90 bg-white p-8 shadow-md rounded-lg"><h1 class="text-2xl font-bold mb-4">Edit Tag</h1><p class="mb-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/tagg/viewctagg",
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
        _push(`</p><form><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Full Name</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><input${ssrRenderAttr("value", id1.value)} type="text" readonly class="mt-1 block w-full px-3 py-2 mb-4 mt-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>`);
        if (editerror.value) {
          _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(editerror.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (editsuc.value) {
          _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(editsuc.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form></div></div></div>`);
      } else {
        _push(`<div><p>Loading...</p></div>`);
      }
      _push(`</main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tagg/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-Dj6ZErVg.js.map
