import{u as $,_ as C}from"./CvLrqbvI.js";import{u as S,a as U,r as p,k as V,l as g,o as A,w as D,c as n,b as m,d as t,t as i,m as o,q as M,P as E,i as l}from"./C9yPyRDb.js";import{_ as j}from"./BJ19Ragc.js";import{u as q}from"./CiPlFD3g.js";import{S as H,M as L}from"./24J4yln6.js";const z={class:"bg-gray-100 font-family-karla flex"},F={class:"relative w-full flex flex-col h-screen overflow-y-hidden"},G={class:"w-full h-screen overflow-x-hidden border-t flex flex-col"},I={class:"w-full flex-grow p-6"},J={class:"text-2xl font-bold mb-4"},K={key:0},O={key:0},Q=["src","alt"],T={key:1},W={key:1},oe={__name:"index",setup(X){const{prods:f,currentPage:h,lastPage:_,changePage:b,pageNumbers:v,fetchProds:u}=$(),y=g(),w=S(),c=U(),s=c.params.catid,r=p(null),{$api:x}=V(),P=g().public.apiBaseUrl,k=async()=>{try{const e=await x.get(`${P}/admin/cat/detail/${s}`);r.value=e.data,console.log("line33"+e.data),console.log("line34"+e.data)}catch(e){alert(e),console.error("Error fetching item:",e.response?e.response.data:e.message)}},R=q();A(async()=>{await R.fetchUser(),await k(),await u(s)});const d=p(0),N=()=>{d.value+=1,w.replace({path:c.path}).then(()=>{console.log("Navigation ok, route replaced to "+c.path)}).catch(e=>{console.error("Navigation error:",e)}),console.log("end"),u(s)};return D(c,async(e,a)=>{console.log("Route changed from",a.path,"to",e.path),await fetchprods(s)}),(e,a)=>{const B=C;return l(),n("div",z,[m(H),t("div",F,[a[3]||(a[3]=t("header",{class:"w-full items-center bg-white py-2 px-6 hidden sm:flex"},[t("div",{class:"w-1/2"}),t("div",{class:"relative w-1/2 flex justify-end"}," View products by Category ")],-1)),m(L),t("div",G,[t("main",I,[t("h1",J,"View Products By category "+i(o(s)),1),r.value?(l(),n("div",K,[t("h1",null,"Category Detail "+i(r.value.name),1),r.value.img?(l(),n("p",O,[t("img",{src:`${o(y).public.BaseUrl}/images/cat/thumb/${r.value.img}`,alt:r.value.name,class:"mt-2 mb-2"},null,8,Q)])):(l(),n("p",T,a[0]||(a[0]=[t("img",{src:j,alt:"Default Picture",class:"mt-2 mb-2"},null,-1)])))])):(l(),n("div",W,a[1]||(a[1]=[t("p",null,"Loading category...",-1)]))),(l(),M(B,{prods:o(f),currentPage:o(h),lastPage:o(_),changePage:o(b),pageNumbers:o(v),key:d.value.value,catid:o(s)},null,8,["prods","currentPage","lastPage","changePage","pageNumbers","catid"])),t("p",null,"Current Route: "+i((e._.provides[E]||e.$route).path),1),t("button",{onClick:N,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"},"Refresh Route")]),a[2]||(a[2]=t("footer",{class:"w-full bg-white text-right p-4"},null,-1))])])])}}};export{oe as default};
