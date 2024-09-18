import { b as _export_sfc, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-DgvVPRmG.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'file://C:/My-Documents/build4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file://C:/My-Documents/build4/node_modules/vue/server-renderer/index.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'file://C:/My-Documents/build4/node_modules/vue-router/dist/vue-router.node.mjs';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import { u as useCat } from './useCat-IH5I_E1g.mjs';
import { u as useSubcat } from './useSubcat-DziHAppG.mjs';
import { u as useTagg } from './useTagg-CFGFZvBJ.mjs';
import { s as script } from '../_/vue-multiselect.esm.mjs';
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
import 'file://C:/My-Documents/build4/node_modules/@tiptap/pm/state/dist/index.js';
import 'file://C:/My-Documents/build4/node_modules/@tiptap/pm/model/dist/index.js';
import 'file://C:/My-Documents/build4/node_modules/@tiptap/pm/transform/dist/index.js';
import 'file://C:/My-Documents/build4/node_modules/@tiptap/pm/commands/dist/index.js';
import 'file://C:/My-Documents/build4/node_modules/@tiptap/pm/schema-list/dist/index.js';
import 'file://C:/My-Documents/build4/node_modules/@tiptap/pm/dropcursor/dist/index.js';
import 'file://C:/My-Documents/build4/node_modules/@tiptap/pm/gapcursor/dist/index.js';
import 'file://C:/My-Documents/build4/node_modules/@tiptap/pm/history/dist/index.js';
import './1-CKepcKm6.mjs';

const _sfc_main = {
  __name: "addproduct",
  __ssrInlineRender: true,
  setup(__props) {
    const { cats, fetchCatsCommon } = useCat();
    const { subcats, fetchSubcatsCommon } = useSubcat();
    const { taggs, fetchTaggsCommon } = useTagg();
    useAuthStore();
    useRouter();
    useRoute();
    const name = ref("");
    const catid = ref("");
    const subid = ref("");
    const des = ref("");
    ref("");
    ref(null);
    const fileError = ref("");
    const taggid = ref([]);
    const selectedTags = ref([]);
    const selectedCat = ref(null);
    const selectedSubCat = ref(null);
    const firsloader = ref(0);
    const adderror = ref("");
    const addsuc = ref("");
    const clearsubcat = () => {
      subid.value = null;
      selectedSubCat.value = null;
    };
    ref(null);
    const handleSelectCat = (selected) => {
      catid.value = selected ? selected.id : null;
      firsloader.value += 1;
    };
    const handleSelectSubCat = (selected) => {
      subid.value = selected ? selected.id : null;
    };
    const updateSelectedCategory = () => {
      if (catid.value && cats.value.length) {
        const catidNumber = Number(catid.value);
        const selectedCategory = cats.value.find((cat) => cat.id === catidNumber);
        selectedCat.value = selectedCategory || null;
      }
    };
    const updateSelectedSubCategory = () => {
      if (subid.value && subcats.value.length) {
        const subcatidNumber = Number(subid.value);
        const selectedSubCategory = subcats.value.find((sub) => sub.id === subcatidNumber);
        selectedSubCat.value = selectedSubCategory || null;
      }
    };
    watch(firsloader, (newfirsloader) => {
      if (newfirsloader > 1) {
        clearsubcat();
      }
    });
    watch(cats, subcats, updateSelectedCategory, updateSelectedSubCategory);
    watch(selectedCat, (newValue) => {
      console.log("selectedCat changed:", newValue);
      handleSelectCat(newValue);
    });
    watch(selectedSubCat, (newValue2) => {
      console.log("selectedCat changed:", newValue2);
      handleSelectSubCat(newValue2);
    });
    watch(selectedTags, (newTags) => {
      taggid.value = newTags.map((tag) => tag.id);
    });
    watch(catid, (newCatid) => {
      fetchSubcatsCommon(newCatid);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_client_only = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))} data-v-203ab3cb>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden" data-v-203ab3cb><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex" data-v-203ab3cb><div class="w-1/2" data-v-203ab3cb></div><div class="relative w-1/2 flex justify-end" data-v-203ab3cb> Add Product </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col" data-v-203ab3cb><main class="w-full flex-grow p-6" data-v-203ab3cb><div class="flex items-center justify-center bg-gray-100" data-v-203ab3cb><div class="fullwidth90 bg-white p-8 shadow-md rounded-lg" data-v-203ab3cb><h1 class="text-2xl font-bold mb-4" data-v-203ab3cb>Add Product</h1><p class="mb-4" data-v-203ab3cb>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/prod/viewprod",
        class: "widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-203ab3cb${_scopeId}></i>View Products`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form data-v-203ab3cb><div class="mb-4" data-v-203ab3cb><label for="catid" class="block text-sm font-medium text-gray-700" data-v-203ab3cb>Category</label>`);
      _push(ssrRenderComponent(unref(script), {
        ref: "multiselectcat",
        modelValue: selectedCat.value,
        "onUpdate:modelValue": ($event) => selectedCat.value = $event,
        options: unref(cats),
        label: "name",
        "track-by": "id",
        placeholder: "Choose category",
        searchable: true,
        "close-on-select": true,
        "allow-empty": false,
        class: "mt-1 block w-full",
        onChange: ($event) => unref(fetchSubcatsCommon)(catid.value)
      }, null, _parent));
      _push(` catid ${ssrInterpolate(catid.value)} `);
      if (selectedCat.value) {
        _push(`<span data-v-203ab3cb>${ssrInterpolate(selectedCat.value.id)}</span>`);
      } else {
        _push(`<span data-v-203ab3cb> Nothing cat </span>`);
      }
      if ((_a = selectedCat.value) == null ? void 0 : _a.id) {
        _push(`<span data-v-203ab3cb> Selected Category ID: ${ssrInterpolate(selectedCat.value.id)}</span>`);
      } else {
        _push(`<span data-v-203ab3cb> No category selected</span>`);
      }
      _push(`</div><div class="mb-4" data-v-203ab3cb><label for="subid" class="block text-sm font-medium text-gray-700" data-v-203ab3cb>SubCategory</label>`);
      _push(ssrRenderComponent(unref(script), {
        ref: "multiselectsubcat",
        modelValue: selectedSubCat.value,
        "onUpdate:modelValue": ($event) => selectedSubCat.value = $event,
        options: unref(subcats),
        label: "name",
        "track-by": "id",
        placeholder: "Choose subcategory",
        searchable: true,
        "close-on-select": true,
        "allow-empty": false,
        class: "mt-1 block w-full",
        onChange: handleSelectSubCat
      }, null, _parent));
      _push(` subid ${ssrInterpolate(subid.value)} `);
      if (selectedSubCat.value) {
        _push(`<span data-v-203ab3cb>${ssrInterpolate(selectedSubCat.value.id)}</span>`);
      } else {
        _push(`<span data-v-203ab3cb> Nothin sub </span>`);
      }
      if ((_b = selectedSubCat.value) == null ? void 0 : _b.id) {
        _push(`<span data-v-203ab3cb> Selected Category ID: ${ssrInterpolate(selectedSubCat.value.id)}</span>`);
      } else {
        _push(`<span data-v-203ab3cb> No subcategory selected</span>`);
      }
      _push(`</div><div class="mb-4" data-v-203ab3cb><label for="taggid" class="block text-sm font-medium text-gray-700" data-v-203ab3cb>Tags </label>`);
      _push(ssrRenderComponent(unref(script), {
        modelValue: selectedTags.value,
        "onUpdate:modelValue": ($event) => selectedTags.value = $event,
        options: unref(taggs),
        label: "name",
        "track-by": "id",
        placeholder: "Choose tags",
        searchable: true,
        "close-on-select": true,
        "allow-empty": true,
        class: "mt-1 block w-full",
        multiple: true
      }, null, _parent));
      _push(`<br data-v-203ab3cb> TAGS ${ssrInterpolate(taggid.value)} <br data-v-203ab3cb> TAGID ${ssrInterpolate(selectedTags.value)} <br data-v-203ab3cb></div><div class="mb-4" data-v-203ab3cb><label for="name" class="block text-sm font-medium text-gray-700" data-v-203ab3cb> Name</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" data-v-203ab3cb></div><div class="mb-4" data-v-203ab3cb><label for="des" class="block text-sm font-medium text-gray-700" data-v-203ab3cb> Short Description</label><textarea type="text" class="mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md" data-v-203ab3cb>${ssrInterpolate(des.value)}</textarea></div><div class="mb-4" data-v-203ab3cb><label for="dess" class="block text-sm font-medium text-gray-700" data-v-203ab3cb> Long Description</label>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div><div class="mb-4" data-v-203ab3cb><label for="pic" class="block text-sm font-medium text-gray-700" data-v-203ab3cb>Picture</label><input type="file" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*" data-v-203ab3cb>`);
      if (fileError.value) {
        _push(`<p class="mt-2 text-sm text-red-600" data-v-203ab3cb>${ssrInterpolate(fileError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-v-203ab3cb>Add</button>`);
      if (adderror.value) {
        _push(`<p class="mt-2 text-sm text-red-600" data-v-203ab3cb>${ssrInterpolate(adderror.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (addsuc.value) {
        _push(`<p class="mt-2 text-sm text-red-600" data-v-203ab3cb>${ssrInterpolate(addsuc.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></main><footer class="w-full bg-white text-right p-4" data-v-203ab3cb></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/prod/addproduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addproduct = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-203ab3cb"]]);

export { addproduct as default };
//# sourceMappingURL=addproduct-C9MC6DYP.mjs.map
