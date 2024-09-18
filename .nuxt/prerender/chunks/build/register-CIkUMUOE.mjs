import { ref, watch, computed, mergeProps, useSSRContext } from 'file://C:/My-Documents/build4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate } from 'file://C:/My-Documents/build4/node_modules/vue/server-renderer/index.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'file://C:/My-Documents/build4/node_modules/vue-router/dist/vue-router.node.mjs';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import './server.mjs';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    useRouter();
    const route = useRoute();
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const pic = ref(null);
    const levell = ref("2");
    const passwordError = ref("");
    const emailError = ref("");
    const fileError = ref("");
    const resetForm = async () => {
      name.value = "";
      email.value = "";
      password.value = "";
      levell.value = "2";
      passwordError.value = "";
      emailError.value = "";
      fileError.value = "";
      await authStore.resetRegistrationState();
      passwordError.value = "";
      emailError.value = "";
      const fileInputs = (void 0).querySelectorAll('input[type="file"]');
      if (fileInputs.length > 0) {
        fileInputs[0].value = "";
      }
      pic.value = null;
      const form = (void 0).getElementById("reg");
      if (form) {
        form.reset();
      }
    };
    const validateEmail = (email2) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email2);
    };
    watch(password, (newVal) => {
      if (newVal.length < 7) {
        passwordError.value = "Password must be at least 7 characters long.";
      } else {
        passwordError.value = "";
      }
    });
    watch(email, (newVal) => {
      if (!validateEmail(newVal)) {
        emailError.value = "Please enter a valid email address.";
      } else {
        emailError.value = "";
      }
    });
    watch(route, () => {
      resetForm();
    });
    const regError = computed(() => authStore.regError);
    const regSuccess = computed(() => authStore.regSuccess);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> Add an Admin </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><h1 class="text-3xl text-black pb-6">Full Admin</h1><div class="flex items-center justify-center bg-gray-100"><div class="max-w-md w-full bg-white p-8 shadow-md rounded-lg"><h1 class="text-2xl font-bold mb-4">Add an Admin</h1><form id="reg" name="reg"><div class="mb-4"><label for="levell" class="block text-sm font-medium text-gray-700">Level</label><select required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"><option value="2"${ssrIncludeBooleanAttr(Array.isArray(levell.value) ? ssrLooseContain(levell.value, "2") : ssrLooseEqual(levell.value, "2")) ? " selected" : ""}> Limited Admin</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(levell.value) ? ssrLooseContain(levell.value, "1") : ssrLooseEqual(levell.value, "1")) ? " selected" : ""}> Full Admin</option></select></div><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Full Name</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><div class="mb-4"><label for="email" class="block text-sm font-medium text-gray-700">Email</label><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">`);
      if (emailError.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(emailError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Password</label><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">`);
      if (passwordError.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(passwordError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label for="pic" class="block text-sm font-medium text-gray-700">Picture</label><input type="file" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*">`);
      if (fileError.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(fileError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Admin</button>`);
      if (regError.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(regError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (regSuccess.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(regSuccess.value)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-CIkUMUOE.mjs.map
