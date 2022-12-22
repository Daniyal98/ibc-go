(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{691:function(l,e,a){"use strict";a.r(e);var t=a(0),c=Object(t.a)({},(function(){var l=this,e=l.$createElement,a=l._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[a("h1",{attrs:{id:"integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[l._v("#")]),l._v(" Integration")]),l._v(" "),a("p",{attrs:{synopsis:""}},[l._v("Learn how to configure the Fee Middleware module with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains.")]),l._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[l._v("#")]),l._v(" Pre-requisite Readings")]),l._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/ibc/middleware/develop.html"}},[l._v("IBC middleware development")])],1),l._v(" "),a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/ibc/middleware/integration.html"}},[l._v("IBC middleware integration")])],1)]),l._v(" "),a("p",[l._v("The Fee Middleware module, as the name suggests, plays the role of an IBC middleware and as such must be configured by chain developers to route and handle IBC messages correctly.\nFor Cosmos SDK chains this setup is done via the "),a("code",[l._v("app/app.go")]),l._v(" file, where modules are constructed and configured in order to bootstrap the blockchain application.")]),l._v(" "),a("h2",{attrs:{id:"example-integration-of-the-fee-middleware-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-integration-of-the-fee-middleware-module"}},[l._v("#")]),l._v(" Example integration of the Fee Middleware module")]),l._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCgovLyBSZWdpc3RlciB0aGUgQXBwTW9kdWxlIGZvciB0aGUgZmVlIG1pZGRsZXdhcmUgbW9kdWxlCk1vZHVsZUJhc2ljcyA9IG1vZHVsZS5OZXdCYXNpY01hbmFnZXIoCiAgICAuLi4KICAgIGliY2ZlZS5BcHBNb2R1bGVCYXNpY3t9LAogICAgLi4uCikKCi4uLiAKCi8vIEFkZCBtb2R1bGUgYWNjb3VudCBwZXJtaXNzaW9ucyBmb3IgdGhlIGZlZSBtaWRkbGV3YXJlIG1vZHVsZQptYWNjUGVybXMgPSBtYXBbc3RyaW5nXVtdc3RyaW5newogICAgLi4uCiAgICBpYmNmZWV0eXBlcy5Nb2R1bGVOYW1lOiAgICAgICAgICAgIG5pbCwKfQoKLi4uCgovLyBBZGQgZmVlIG1pZGRsZXdhcmUgS2VlcGVyCnR5cGUgQXBwIHN0cnVjdCB7CiAgICAuLi4KCiAgICBJQkNGZWVLZWVwZXIgaWJjZmVla2VlcGVyLktlZXBlcgoKICAgIC4uLgp9CgouLi4KCi8vIENyZWF0ZSBzdG9yZSBrZXlzIAprZXlzIDo9IHNkay5OZXdLVlN0b3JlS2V5cygKICAgIC4uLgogICAgaWJjZmVldHlwZXMuU3RvcmVLZXksCiAgICAuLi4KKQoKLi4uIAoKYXBwLklCQ0ZlZUtlZXBlciA9IGliY2ZlZWtlZXBlci5OZXdLZWVwZXIoCglhcHBDb2RlYywga2V5c1tpYmNmZWV0eXBlcy5TdG9yZUtleV0sCglhcHAuSUJDS2VlcGVyLkNoYW5uZWxLZWVwZXIsIC8vIG1heSBiZSByZXBsYWNlZCB3aXRoIElCQyBtaWRkbGV3YXJlCglhcHAuSUJDS2VlcGVyLkNoYW5uZWxLZWVwZXIsCgkmYW1wO2FwcC5JQkNLZWVwZXIuUG9ydEtlZXBlciwgYXBwLkFjY291bnRLZWVwZXIsIGFwcC5CYW5rS2VlcGVyLAopCgoKLy8gU2VlIHRoZSBzZWN0aW9uIGJlbG93IGZvciBjb25maWd1cmluZyBhbiBhcHBsaWNhdGlvbiBzdGFjayB3aXRoIHRoZSBmZWUgbWlkZGxld2FyZSBtb2R1bGUKCi4uLgoKLy8gUmVnaXN0ZXIgZmVlIG1pZGRsZXdhcmUgQXBwTW9kdWxlCmFwcC5tb2R1bGVNYW5hZ2VyID0gbW9kdWxlLk5ld01hbmFnZXIoCiAgICAuLi4KICAgIGliY2ZlZS5OZXdBcHBNb2R1bGUoYXBwLklCQ0ZlZUtlZXBlciksCikKCi4uLgoKLy8gQWRkIGZlZSBtaWRkbGV3YXJlIHRvIGJlZ2luIGJsb2NrZXIgbG9naWMKYXBwLm1vZHVsZU1hbmFnZXIuU2V0T3JkZXJCZWdpbkJsb2NrZXJzKAogICAgLi4uCiAgICBpYmNmZWV0eXBlcy5Nb2R1bGVOYW1lLAogICAgLi4uCikKCi8vIEFkZCBmZWUgbWlkZGxld2FyZSB0byBlbmQgYmxvY2tlciBsb2dpYwphcHAubW9kdWxlTWFuYWdlci5TZXRPcmRlckVuZEJsb2NrZXJzKAogICAgLi4uCiAgICBpYmNmZWV0eXBlcy5Nb2R1bGVOYW1lLAogICAgLi4uCikKCi8vIEFkZCBmZWUgbWlkZGxld2FyZSB0byBpbml0IGdlbmVzaXMgbG9naWMKYXBwLm1vZHVsZU1hbmFnZXIuU2V0T3JkZXJJbml0R2VuZXNpcygKICAgIC4uLgogICAgaWJjZmVldHlwZXMuTW9kdWxlTmFtZSwKICAgIC4uLgopCg=="}}),l._v(" "),a("h2",{attrs:{id:"configuring-an-application-stack-with-fee-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-an-application-stack-with-fee-middleware"}},[l._v("#")]),l._v(" Configuring an application stack with Fee Middleware")]),l._v(" "),a("p",[l._v("As mentioned in "),a("RouterLink",{attrs:{to:"/ibc/middleware/develop.html"}},[l._v("IBC middleware development")]),l._v(" an application stack may be composed of many or no middlewares that nest a base application.\nThese layers form the complete set of application logic that enable developers to build composable and flexible IBC application stacks.\nFor example, an application stack may be just a single base application like "),a("code",[l._v("transfer")]),l._v(", however, the same application stack composed with "),a("code",[l._v("29-fee")]),l._v(" will nest the "),a("code",[l._v("transfer")]),l._v(" base application\nby wrapping it with the Fee Middleware module.")],1),l._v(" "),a("h3",{attrs:{id:"transfer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer"}},[l._v("#")]),l._v(" Transfer")]),l._v(" "),a("p",[l._v("See below for an example of how to create an application stack using "),a("code",[l._v("transfer")]),l._v(" and "),a("code",[l._v("29-fee")]),l._v(".\nThe following "),a("code",[l._v("transferStack")]),l._v(" is configured in "),a("code",[l._v("app/app.go")]),l._v(" and added to the IBC "),a("code",[l._v("Router")]),l._v(".\nThe in-line comments describe the execution flow of packets between the application stack and IBC core.")]),l._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlIFRyYW5zZmVyIFN0YWNrCi8vIFNlbmRQYWNrZXQsIHNpbmNlIGl0IGlzIG9yaWdpbmF0aW5nIGZyb20gdGhlIGFwcGxpY2F0aW9uIHRvIGNvcmUgSUJDOgovLyB0cmFuc2ZlcktlZXBlci5TZW5kUGFja2V0IC0mZ3Q7IGZlZS5TZW5kUGFja2V0IC0mZ3Q7IGNoYW5uZWwuU2VuZFBhY2tldAoKLy8gUmVjdlBhY2tldCwgbWVzc2FnZSB0aGF0IG9yaWdpbmF0ZXMgZnJvbSBjb3JlIElCQyBhbmQgZ29lcyBkb3duIHRvIGFwcCwgdGhlIGZsb3cgaXMgdGhlIG90aGVyIHdheQovLyBjaGFubmVsLlJlY3ZQYWNrZXQgLSZndDsgZmVlLk9uUmVjdlBhY2tldCAtJmd0OyB0cmFuc2Zlci5PblJlY3ZQYWNrZXQKCi8vIHRyYW5zZmVyIHN0YWNrIGNvbnRhaW5zIChmcm9tIHRvcCB0byBib3R0b20pOgovLyAtIElCQyBGZWUgTWlkZGxld2FyZQovLyAtIFRyYW5zZmVyCgovLyBjcmVhdGUgSUJDIG1vZHVsZSBmcm9tIGJvdHRvbSB0byB0b3Agb2Ygc3RhY2sKdmFyIHRyYW5zZmVyU3RhY2sgcG9ydHR5cGVzLklCQ01vZHVsZQp0cmFuc2ZlclN0YWNrID0gdHJhbnNmZXIuTmV3SUJDTW9kdWxlKGFwcC5UcmFuc2ZlcktlZXBlcikKdHJhbnNmZXJTdGFjayA9IGliY2ZlZS5OZXdJQkNNaWRkbGV3YXJlKHRyYW5zZmVyU3RhY2ssIGFwcC5JQkNGZWVLZWVwZXIpCgovLyBBZGQgdHJhbnNmZXIgc3RhY2sgdG8gSUJDIFJvdXRlcgppYmNSb3V0ZXIuQWRkUm91dGUoaWJjdHJhbnNmZXJ0eXBlcy5Nb2R1bGVOYW1lLCB0cmFuc2ZlclN0YWNrKQo="}}),l._v(" "),a("h3",{attrs:{id:"interchain-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interchain-accounts"}},[l._v("#")]),l._v(" Interchain Accounts")]),l._v(" "),a("p",[l._v("See below for an example of how to create an application stack using "),a("code",[l._v("27-interchain-accounts")]),l._v(" and "),a("code",[l._v("29-fee")]),l._v(".\nThe following "),a("code",[l._v("icaControllerStack")]),l._v(" and "),a("code",[l._v("icaHostStack")]),l._v(" are configured in "),a("code",[l._v("app/app.go")]),l._v(" and added to the IBC "),a("code",[l._v("Router")]),l._v(" with the associated authentication module.\nThe in-line comments describe the execution flow of packets between the application stack and IBC core.")]),l._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlIEludGVyY2hhaW4gQWNjb3VudHMgU3RhY2sKLy8gU2VuZFBhY2tldCwgc2luY2UgaXQgaXMgb3JpZ2luYXRpbmcgZnJvbSB0aGUgYXBwbGljYXRpb24gdG8gY29yZSBJQkM6Ci8vIGljYUF1dGhNb2R1bGVLZWVwZXIuU2VuZFR4IC0mZ3Q7IGljYUNvbnRyb2xsZXIuU2VuZFBhY2tldCAtJmd0OyBmZWUuU2VuZFBhY2tldCAtJmd0OyBjaGFubmVsLlNlbmRQYWNrZXQKCi8vIGluaXRpYWxpemUgSUNBIG1vZHVsZSB3aXRoIG1vY2sgbW9kdWxlIGFzIHRoZSBhdXRoZW50aWNhdGlvbiBtb2R1bGUgb24gdGhlIGNvbnRyb2xsZXIgc2lkZQp2YXIgaWNhQ29udHJvbGxlclN0YWNrIHBvcnR0eXBlcy5JQkNNb2R1bGUKaWNhQ29udHJvbGxlclN0YWNrID0gaWJjbW9jay5OZXdJQkNNb2R1bGUoJmFtcDttb2NrTW9kdWxlLCBpYmNtb2NrLk5ld01vY2tJQkNBcHAoJnF1b3Q7JnF1b3Q7LCBzY29wZWRJQ0FNb2NrS2VlcGVyKSkKYXBwLklDQUF1dGhNb2R1bGUgPSBpY2FDb250cm9sbGVyU3RhY2suKGliY21vY2suSUJDTW9kdWxlKQppY2FDb250cm9sbGVyU3RhY2sgPSBpY2Fjb250cm9sbGVyLk5ld0lCQ01pZGRsZXdhcmUoaWNhQ29udHJvbGxlclN0YWNrLCBhcHAuSUNBQ29udHJvbGxlcktlZXBlcikKaWNhQ29udHJvbGxlclN0YWNrID0gaWJjZmVlLk5ld0lCQ01pZGRsZXdhcmUoaWNhQ29udHJvbGxlclN0YWNrLCBhcHAuSUJDRmVlS2VlcGVyKQoKLy8gUmVjdlBhY2tldCwgbWVzc2FnZSB0aGF0IG9yaWdpbmF0ZXMgZnJvbSBjb3JlIElCQyBhbmQgZ29lcyBkb3duIHRvIGFwcCwgdGhlIGZsb3cgaXM6Ci8vIGNoYW5uZWwuUmVjdlBhY2tldCAtJmd0OyBmZWUuT25SZWN2UGFja2V0IC0mZ3Q7IGljYUhvc3QuT25SZWN2UGFja2V0Cgp2YXIgaWNhSG9zdFN0YWNrIHBvcnR0eXBlcy5JQkNNb2R1bGUKaWNhSG9zdFN0YWNrID0gaWNhaG9zdC5OZXdJQkNNb2R1bGUoYXBwLklDQUhvc3RLZWVwZXIpCmljYUhvc3RTdGFjayA9IGliY2ZlZS5OZXdJQkNNaWRkbGV3YXJlKGljYUhvc3RTdGFjaywgYXBwLklCQ0ZlZUtlZXBlcikKCi8vIEFkZCBhdXRoZW50aWNhdGlvbiBtb2R1bGUsIGNvbnRyb2xsZXIgYW5kIGhvc3QgdG8gSUJDIHJvdXRlcgppYmNSb3V0ZXIuCiAgICAvLyB0aGUgSUNBIENvbnRyb2xsZXIgbWlkZGxld2FyZSBuZWVkcyB0byBiZSBleHBsaWNpdGx5IGFkZGVkIHRvIHRoZSBJQkMgUm91dGVyIGJlY2F1c2UgdGhlCiAgICAvLyBJQ0EgY29udHJvbGxlciBtb2R1bGUgb3ducyB0aGUgcG9ydCBjYXBhYmlsaXR5IGZvciBJQ0EuIFRoZSBJQ0EgYXV0aGVudGljYXRpb24gbW9kdWxlCiAgICAvLyBvd25zIHRoZSBjaGFubmVsIGNhcGFiaWxpdHkuCiAgICBBZGRSb3V0ZShpYmNtb2NrLk1vZHVsZU5hbWUraWNhY29udHJvbGxlcnR5cGVzLlN1Yk1vZHVsZU5hbWUsIGljYUNvbnRyb2xsZXJTdGFjaykgLy8gaWNhIHdpdGggbW9jayBhdXRoIG1vZHVsZSBzdGFjayByb3V0ZSB0byBpY2EgKHRvcCBsZXZlbCBvZiBtaWRkbGV3YXJlIHN0YWNrKQogICAgQWRkUm91dGUoaWNhY29udHJvbGxlcnR5cGVzLlN1Yk1vZHVsZU5hbWUsIGljYUNvbnRyb2xsZXJTdGFjaykuCiAgICBBZGRSb3V0ZShpY2Fob3N0dHlwZXMuU3ViTW9kdWxlTmFtZSwgaWNhSG9zdFN0YWNrKS4K"}})],1)}),[],!1,null,null,null);e.default=c.exports}}]);