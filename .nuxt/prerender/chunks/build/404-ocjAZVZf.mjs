import { b as _export_sfc, _ as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/My-Documents/build4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/My-Documents/build4/node_modules/vue/server-renderer/index.mjs';
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
import 'file://C:/My-Documents/build4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/My-Documents/build4/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/My-Documents/build4/node_modules/axios/index.js';

const _sfc_main = {
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-page" }, _attrs))} data-v-343c9c37><h1 data-v-343c9c37>This Motherfucker Page is not found</h1><p data-v-343c9c37>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Go back to homepage`);
          } else {
            return [
              createTextVNode("Go back to homepage")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-343c9c37"]]);

export { _404 as default };
//# sourceMappingURL=404-ocjAZVZf.mjs.map
