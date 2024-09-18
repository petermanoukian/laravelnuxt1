import { _ as _sfc_main$1 } from './Prodsopen-DAYz8xl5.mjs';
import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'file://C:/My-Documents/build4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file://C:/My-Documents/build4/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { useRouter, useRoute } from 'file://C:/My-Documents/build4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useNuxtApp, a as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { u as useProdopenpagination } from './useProdopenpagination-BgsRXDej.mjs';
import { u as useProdsearchopenpagination } from './useProdsearchopenpagination-B5R2kyEW.mjs';
import './Pagination-CRg8Wbcv.mjs';
import '../_/renderer.mjs';
import 'file://C:/My-Documents/build4/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/My-Documents/build4/node_modules/h3/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/devalue/index.js';
import 'file://C:/My-Documents/build4/node_modules/ufo/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/My-Documents/build4/node_modules/ofetch/dist/node.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const route = useRoute();
    const config = useRuntimeConfig();
    useNuxtApp();
    const apiUrl = useRuntimeConfig().public.apiBaseUrl;
    const { prods, currentPage, lastPage, changePage, pageNumbers, fetchProds } = useProdopenpagination();
    useProdsearchopenpagination();
    const catidx = route.params.catid;
    const cat = ref(null);
    const fetchCat = async () => {
      try {
        const response = await fetch(`${apiUrl}/cat/detail/${catidx}`);
        const data = await response.json();
        cat.value = data;
        JSON.stringify(cat.value);
      } catch (error) {
        console.error("Error fetching item:", error.response ? error.response.data : error.message);
      }
    };
    [__temp, __restore] = withAsyncContext(() => fetchCat()), await __temp, __restore();
    if (cat.value) {
      useHead({
        title: cat.value.name,
        meta: [
          {
            name: "description",
            content: cat.value.name + " Nuxt3 Laravel 11 MySQl API Products Page"
          },
          {
            name: "keywords",
            content: cat.value.name + ", Nuxt3 Laravel 11 MySQl API Web Development Armenia, Web Developer Lebanon"
          },
          {
            property: "og:title",
            content: cat.value.name
          },
          {
            property: "og:description",
            content: cat.value.name + " Nuxt3 Laravel 11 MySQl API Products Page"
          }
        ]
      });
    }
    const key = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Prodsopen = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-xxl py-1" }, _attrs))}><div class="container"><h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Products</h1>`);
      if (cat.value.value) {
        _push(`<div><h3>Category: ${ssrInterpolate(cat.value.name)}</h3>`);
        if (cat.value.img) {
          _push(`<p><img${ssrRenderAttr("src", `${unref(config).public.BaseUrl}/images/cat/${cat.value.img}`)}${ssrRenderAttr("alt", cat.value.name)} class="mt-2 mb-2 maxwidth96height300"></p>`);
        } else {
          _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-2 mb-2"></p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(prods) && unref(prods).length > 0) {
        _push(`<div class="row g-4">`);
        _push(ssrRenderComponent(_component_Prodsopen, {
          prods: unref(prods),
          currentPage: unref(currentPage),
          lastPage: unref(lastPage),
          changePage: unref(changePage),
          pageNumbers: unref(pageNumbers),
          key: key.value.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="row g-4"> Nothing found </div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prod/viewprodbycatid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CFdmivlh.mjs.map
