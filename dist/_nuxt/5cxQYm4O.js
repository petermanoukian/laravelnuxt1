import{u as b,r as l,o as p,c as x,b as m,d as o,f as v,g as t,y as g,v as n,i as w}from"./C9yPyRDb.js";import{u as c}from"./CiPlFD3g.js";import{S as y,M as k}from"./24J4yln6.js";import"./BJ19Ragc.js";const h={class:"bg-gray-100 font-family-karla flex"},A={class:"relative w-full flex flex-col h-screen overflow-y-hidden"},M={class:"w-full h-screen overflow-x-hidden border-t flex flex-col"},S={class:"w-full flex-grow p-6"},V={class:"flex items-center justify-center bg-gray-100"},U={class:"max-w-md w-full bg-white p-8 shadow-md rounded-lg"},E={class:"mb-4"},B={class:"mb-4"},N={class:"mb-4"},j={class:"mb-4"},T={__name:"page4",setup(F){const u=c();b();const d=l(""),r=l(""),i=l(""),a=l("2"),f=async()=>{await u.register({name:d.value,email:r.value,levell:a.value,password:i.value})};return p(async()=>{await u.fetchUser()}),(L,e)=>(w(),x("div",h,[m(y),o("div",A,[e[13]||(e[13]=o("header",{class:"w-full items-center bg-white py-2 px-6 hidden sm:flex"},[o("div",{class:"w-1/2"}),o("div",{class:"relative w-1/2 flex justify-end"}," page 4 ")],-1)),m(k),o("div",M,[o("main",S,[e[11]||(e[11]=o("h1",{class:"text-3xl text-black pb-6"},"Full Admin",-1)),o("div",V,[o("div",U,[e[10]||(e[10]=o("h1",{class:"text-2xl font-bold mb-4"},"Add an Admin",-1)),o("form",{onSubmit:v(f,["prevent"])},[o("div",E,[e[5]||(e[5]=o("label",{for:"levell",class:"block text-sm font-medium text-gray-700"},"Level",-1)),t(o("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>a.value=s),class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},e[4]||(e[4]=[o("option",{value:"2"}," Limited Admin",-1),o("option",{value:"1"}," Full Admin",-1)]),512),[[g,a.value]])]),o("div",B,[e[6]||(e[6]=o("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Email",-1)),t(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>d.value=s),type:"text",placeholder:"Name",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[n,d.value]])]),o("div",N,[e[7]||(e[7]=o("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email",-1)),t(o("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>r.value=s),type:"email",placeholder:"Email",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[n,r.value]])]),o("div",j,[e[8]||(e[8]=o("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Password",-1)),t(o("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>i.value=s),type:"password",placeholder:"Password",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[n,i.value]])]),e[9]||(e[9]=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Add Admin",-1))],32)])])]),e[12]||(e[12]=o("footer",{class:"w-full bg-white text-right p-4"},null,-1))])])]))}};export{T as default};
