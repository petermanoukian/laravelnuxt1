import { u as useCatopenPagination, a as useSubcatopenpagination, _ as _sfc_main$1 } from "./useSubcatopenpagination-BK5YWJRR.js";
import { ref, withAsyncContext, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./1-CKepcKm6.js";
import { useRouter, useRoute } from "vue-router";
import { u as useNuxtApp, a as useRuntimeConfig } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "./Pagination-CRg8Wbcv.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "ufo";
import "@vue/devtools-api";
import "axios";
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
    const {
      cats,
      currentPage: currentCatPage,
      lastPage: lastCatPage,
      changePage: changeCatPage,
      pageNumbers: catPageNumbers,
      fetchCats
    } = useCatopenPagination();
    const catidx = route.params.catid;
    const cat = ref(null);
    const fetchCat = async () => {
      try {
        const response = await fetch(`${apiUrl}/cat/detail/${catidx}`);
        const data = await response.json();
        cat.value = data;
      } catch (error) {
        console.error("Error fetching item:", error.response ? error.response.data : error.message);
      }
    };
    const {
      subcats,
      currentPage: currentSubcatPage,
      lastPage: lastSubcatPage,
      changePage: changeSubcatPage,
      pageNumbers: subcatPageNumbers,
      fetchSubcats
    } = useSubcatopenpagination();
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
    watch(route, async (newRoute, oldRoute) => {
      fetchCats();
      fetchSubcats(catidx);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SubcatsOpen = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-xxl py-1" }, _attrs))}><div class="container mt-4"><h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Categories ${ssrInterpolate(unref(catidx))}</h1><div class="row g-4">`);
      if (cat.value && cat.value.name) {
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
      _push(`</div></div><div class="container mt-4"><h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">SubCategories</h1>`);
      if (unref(subcats) && unref(subcats).length > 0) {
        _push(`<div class="row g-4">`);
        _push(ssrRenderComponent(_component_SubcatsOpen, {
          subcats: unref(subcats),
          currentPage: unref(currentSubcatPage),
          lastPage: unref(lastSubcatPage),
          changePage: unref(changeSubcatPage),
          pageNumbers: unref(subcatPageNumbers),
          key: key.value.value,
          catid: unref(catidx)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/subcat/viewsubcatbycatid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BYoe6uhY.js.map
