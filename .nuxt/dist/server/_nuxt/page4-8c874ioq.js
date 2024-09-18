import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr } from "vue/server-renderer";
import { u as useAuthStore } from "./auth-BCAkOG0G.js";
import { S as Sidebar, M as MobileHeader } from "./MobileHeader-DadXbsen.js";
import { useRouter } from "vue-router";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
  __name: "page4",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useRouter();
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const levell = ref("2");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> page 4 </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><h1 class="text-3xl text-black pb-6">Full Admin</h1><div class="flex items-center justify-center bg-gray-100"><div class="max-w-md w-full bg-white p-8 shadow-md rounded-lg"><h1 class="text-2xl font-bold mb-4">Add an Admin</h1><form><div class="mb-4"><label for="levell" class="block text-sm font-medium text-gray-700">Level</label><select class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(levell.value) ? ssrLooseContain(levell.value, "2") : ssrLooseEqual(levell.value, "2")) ? " selected" : ""}> Limited Admin</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(levell.value) ? ssrLooseContain(levell.value, "1") : ssrLooseEqual(levell.value, "1")) ? " selected" : ""}> Full Admin</option></select></div><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Email</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><div class="mb-4"><label for="email" class="block text-sm font-medium text-gray-700">Email</label><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Password</label><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Admin</button></form></div></div></main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/page4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=page4-8c874ioq.js.map
