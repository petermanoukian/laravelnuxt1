import{x as X,u as Y,a as Z,r as o,o as ee,w as h,c as a,b as v,d as l,e as H,f as te,m as b,j as U,t as r,g as I,v as j,h as D,_ as le,i as n,k as se,l as oe}from"./C9yPyRDb.js";import{u as ae,S as ne,_ as ue,a as de}from"./CFdL0KWG.js";import{u as ie}from"./CiPlFD3g.js";import{S as re,M as ce}from"./24J4yln6.js";import{u as me}from"./Deokamks.js";import{u as pe}from"./XE02ktGW.js";import{s as E}from"./DqSMVnBG.js";import"./BJ19Ragc.js";const fe={class:"bg-gray-100 font-family-karla flex"},ve={class:"relative w-full flex flex-col h-screen overflow-y-hidden"},be={class:"w-full h-screen overflow-x-hidden border-t flex flex-col"},ye={class:"w-full flex-grow p-6"},ge={class:"flex items-center justify-center bg-gray-100"},xe={class:"fullwidth90 bg-white p-8 shadow-md rounded-lg"},_e={class:"mb-4"},he={class:"mb-4"},we={key:0},Ce={key:1},ke={key:2},Se={key:3},Ne={class:"mb-4"},Ve={key:0},Ue={key:1},De={key:2},Me={key:3},$e={class:"mb-4"},Ae={class:"mb-4"},Te={class:"mb-4"},Be=["innerHTML"],Le={class:"mb-4"},Pe={key:0,class:"mt-2 text-sm text-red-600"},He={key:0,class:"mt-2 text-sm text-red-600"},Ie={key:1,class:"mt-2 text-sm text-red-600"},je={__name:"index",setup(Ee){const{cats:w,fetchCatsCommon:F}=me(),{subcats:C,fetchSubcatsCommon:N}=pe(),R=ie(),q=Y(),K=Z(),y=o(""),d=o(""),m=o(""),k=o(""),p=o(""),g=o(null),x=o(""),_=o(""),S=o(""),c=o(null),i=o(null),M=o(0),$=K.params.catid;$&&(d.value=$);const W=()=>{m.value=null,i.value=null},z=async()=>{const{$api:t}=se(),e=oe().public.apiBaseUrl,s=new FormData;s.append("name",y.value),s.append("catid",d.value),s.append("subid",m.value),s.append("des",k.value),s.append("dess",p.value),g.value&&s.append("pic",g.value);try{const f=await t.post(`${e}/admin/prod/add`,s);console.log(" added successfully:",f.data),S.value="product added "+y.value+" ... you will be redircted in a monent ..."}catch(f){f.response&&f.response.status===422?_.value=f.response.data.message:_.value="An unexpected error occurred."}setTimeout(O,1200),setTimeout(()=>{q.push("/admin/prod/viewprod")},300)};let A=o(null);ee(async()=>{await R.fetchUser(),await F(),await N(),B();const t=$refs.multiselectcat;t&&t.$on("input",T),G();const e=$refs.multiselectcatsub;e&&e.$on("input",V),A.value=ae({content:p.value,extensions:[ne],onUpdate:({editor:s})=>{p.value=s.getHTML()}})});const T=t=>{d.value=t?t.id:null,M.value+=1},V=t=>{m.value=t?t.id:null},B=()=>{if(d.value&&w.value.length){const t=Number(d.value),e=w.value.find(s=>s.id===t);c.value=e||null}},G=()=>{if(m.value&&C.value.length){const t=Number(m.value),e=C.value.find(s=>s.id===t);i.value=e||null}};h(M,t=>{t>1&&W()}),h(w,C,B),h(c,t=>{console.log("selectedCat changed:",t),T(t)}),h(i,t=>{console.log("selectedCat changed:",t),V(t)});const J=t=>{const e=t.target.files[0];e&&!e.type.startsWith("image/")?(x.value="Please upload a valid image file.",g.value=null):(x.value="",g.value=e)},O=async()=>{y.value="",d.value="",m.value="",g.value=null,k.vale=null,p.value=null,x.value="",_.value="",S.value="";const t=document.querySelectorAll('input[type="file"]');t.length>0&&(t[0].value="")};return h(d,t=>{N(t)}),(t,e)=>{var L,P;const s=le,f=de,Q=ue;return n(),a("div",fe,[v(re),l("div",ve,[e[16]||(e[16]=l("header",{class:"w-full items-center bg-white py-2 px-6 hidden sm:flex"},[l("div",{class:"w-1/2"}),l("div",{class:"relative w-1/2 flex justify-end"}," Add Product By Category ")],-1)),v(ce),l("div",be,[l("main",ye,[l("div",ge,[l("div",xe,[e[14]||(e[14]=l("h1",{class:"text-2xl font-bold mb-4"},"Add Product By Category ",-1)),l("p",_e,[v(s,{to:"/admin/prod/viewprod",class:"widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},{default:H(()=>e[6]||(e[6]=[l("i",{class:"fas fa-align-left mr-3"},null,-1),U("View Products")])),_:1})]),l("form",{onSubmit:te(z,["prevent"])},[l("div",he,[e[7]||(e[7]=l("label",{for:"catid",class:"block text-sm font-medium text-gray-700"},"Category",-1)),v(b(E),{ref:"multiselectcat",modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=u=>c.value=u),options:b(w),label:"name","track-by":"id",placeholder:"Choose category",searchable:!0,"close-on-select":!0,"allow-empty":!1,class:"mt-1 block w-full",onChange:e[1]||(e[1]=u=>b(N)(d.value))},null,8,["modelValue","options"]),U(" catid "+r(d.value)+" ",1),c.value?(n(),a("p",we,r(c.value.id),1)):(n(),a("p",Ce,"Nothing cat")),(L=c.value)!=null&&L.id?(n(),a("p",ke,"Selected Category ID: "+r(c.value.id),1)):(n(),a("p",Se,"No category selected"))]),l("div",Ne,[e[8]||(e[8]=l("label",{for:"subid",class:"block text-sm font-medium text-gray-700"},"SubCategory",-1)),v(b(E),{ref:"multiselectsubcat",modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=u=>i.value=u),options:b(C),label:"name","track-by":"id",placeholder:"Choose subcategory",searchable:!0,"close-on-select":!0,"allow-empty":!1,class:"mt-1 block w-full",onChange:V},null,8,["modelValue","options","onChange"]),U(" subid "+r(m.value)+" ",1),i.value?(n(),a("p",Ve,r(i.value.id),1)):(n(),a("p",Ue,"Nothin sub")),(P=i.value)!=null&&P.id?(n(),a("p",De,"Selected Category ID: "+r(i.value.id),1)):(n(),a("p",Me,"No subcategory selected"))]),l("div",$e,[e[9]||(e[9]=l("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Name",-1)),I(l("input",{"onUpdate:modelValue":e[3]||(e[3]=u=>y.value=u),type:"text",placeholder:"Name",required:"",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"},null,512),[[j,y.value]])]),l("div",Ae,[e[10]||(e[10]=l("label",{for:"des",class:"block text-sm font-medium text-gray-700"}," Short Description",-1)),I(l("textarea",{"onUpdate:modelValue":e[4]||(e[4]=u=>k.value=u),type:"text",class:"mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md"},null,512),[[j,k.value]])]),l("div",Te,[e[11]||(e[11]=l("label",{for:"dess",class:"block text-sm font-medium text-gray-700"}," Long Description",-1)),v(Q,null,{default:H(()=>[v(f,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=u=>p.value=u),class:"textarealongborder",editor:b(A)},null,8,["modelValue","editor"])]),_:1}),l("div",{class:"formatted-result",innerHTML:p.value},null,8,Be)]),l("div",Le,[e[12]||(e[12]=l("label",{for:"pic",class:"block text-sm font-medium text-gray-700"},"Picture",-1)),l("input",{type:"file",onChange:J,class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",accept:"image/*"},null,32),x.value?(n(),a("p",Pe,r(x.value),1)):D("",!0)]),e[13]||(e[13]=l("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Add",-1)),_.value?(n(),a("p",He,r(_.value),1)):D("",!0),S.value?(n(),a("p",Ie,r(S.value),1)):D("",!0)],32)])])]),e[15]||(e[15]=l("footer",{class:"w-full bg-white text-right p-4"},null,-1))])])])}}},Oe=X(je,[["__scopeId","data-v-bfadcf64"]]);export{Oe as default};
