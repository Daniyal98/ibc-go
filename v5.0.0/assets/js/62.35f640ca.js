(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{622:function(e,l,c){"use strict";c.r(l);var t=c(0),a=Object(t.a)({},(function(){var e=this,l=e.$createElement,c=e._self._c||l;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"building-an-authentication-module"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#building-an-authentication-module"}},[e._v("#")]),e._v(" Building an authentication module")]),e._v(" "),c("p",{attrs:{synopsis:""}},[e._v("Authentication modules play the role of the "),c("code",[e._v("Base Application")]),e._v(" as described in "),c("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-030-middleware",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS30 IBC Middleware"),c("OutboundLink")],1),e._v(", and enable application developers to perform custom logic when working with the Interchain Accounts controller API.")]),e._v(" "),c("p",[e._v("The controller submodule is used for account registration and packet sending.\nIt executes only logic required of all controllers of interchain accounts.\nThe type of authentication used to manage the interchain accounts remains unspecified.\nThere may exist many different types of authentication which are desirable for different use cases.\nThus the purpose of the authentication module is to wrap the controller module with custom authentication logic.")]),e._v(" "),c("p",[e._v("In ibc-go, authentication modules are connected to the controller chain via a middleware stack.\nThe controller module is implemented as "),c("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-030-middleware",target:"_blank",rel:"noopener noreferrer"}},[e._v("middleware"),c("OutboundLink")],1),e._v(" and the authentication module is connected to the controller module as the base application of the middleware stack.\nTo implement an authentication module, the "),c("code",[e._v("IBCModule")]),e._v(" interface must be fulfilled.\nBy implementing the controller module as middleware, any amount of authentication modules can be created and connected to the controller module without writing redundant code.")]),e._v(" "),c("p",[e._v("The authentication module must:")]),e._v(" "),c("ul",[c("li",[e._v("Authenticate interchain account owners")]),e._v(" "),c("li",[e._v("Track the associated interchain account address for an owner")]),e._v(" "),c("li",[e._v("Claim the channel capability in "),c("code",[e._v("OnChanOpenInit")])]),e._v(" "),c("li",[e._v("Send packets on behalf of an owner (after authentication)")])]),e._v(" "),c("h3",{attrs:{id:"ibcmodule-implementation"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#ibcmodule-implementation"}},[e._v("#")]),e._v(" IBCModule implementation")]),e._v(" "),c("p",[e._v("The following "),c("code",[e._v("IBCModule")]),e._v(" callbacks must be implemented with appropriate custom logic:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gT25DaGFuT3BlbkluaXQgaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbk9wZW5Jbml0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgb3JkZXIgY2hhbm5lbHR5cGVzLk9yZGVyLAogICAgY29ubmVjdGlvbkhvcHMgW11zdHJpbmcsCiAgICBwb3J0SUQgc3RyaW5nLAogICAgY2hhbm5lbElEIHN0cmluZywKICAgIGNoYW5DYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgICB2ZXJzaW9uIHN0cmluZywKKSAoc3RyaW5nLCBlcnJvcikgewogICAgLy8gdGhlIGF1dGhlbnRpY2F0aW9uIG1vZHVsZSAqbXVzdCogY2xhaW0gdGhlIGNoYW5uZWwgY2FwYWJpbGl0eSBvbiBPbkNoYW5PcGVuSW5pdAogICAgaWYgZXJyIDo9IGltLmtlZXBlci5DbGFpbUNhcGFiaWxpdHkoY3R4LCBjaGFuQ2FwLCBob3N0LkNoYW5uZWxDYXBhYmlsaXR5UGF0aChwb3J0SUQsIGNoYW5uZWxJRCkpOyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gdmVyc2lvbiwgZXJyCiAgICB9CgogICAgLy8gcGVyZm9ybSBjdXN0b20gbG9naWMKCiAgICByZXR1cm4gdmVyc2lvbiwgbmlsCn0KCi8vIE9uQ2hhbk9wZW5BY2sgaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbk9wZW5BY2soCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAogICAgY291bnRlcnBhcnR5VmVyc2lvbiBzdHJpbmcsCikgZXJyb3IgewogICAgLy8gcGVyZm9ybSBjdXN0b20gbG9naWMKCiAgICByZXR1cm4gbmlsCn0KCi8vIE9uQ2hhbkNsb3NlQ29uZmlybSBpbXBsZW1lbnRzIHRoZSBJQkNNb2R1bGUgaW50ZXJmYWNlCmZ1bmMgKGltIElCQ01vZHVsZSkgT25DaGFuQ2xvc2VDb25maXJtKAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKKSBlcnJvciB7CiAgICAvLyBwZXJmb3JtIGN1c3RvbSBsb2dpYwoKICAgIHJldHVybiBuaWwKfQoKLy8gT25BY2tub3dsZWRnZW1lbnRQYWNrZXQgaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQWNrbm93bGVkZ2VtZW50UGFja2V0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsCiAgICBhY2tub3dsZWRnZW1lbnQgW11ieXRlLAogICAgcmVsYXllciBzZGsuQWNjQWRkcmVzcywKKSBlcnJvciB7CiAgICAvLyBwZXJmb3JtIGN1c3RvbSBsb2dpYwoKICAgIHJldHVybiBuaWwKfQoKLy8gT25UaW1lb3V0UGFja2V0IGltcGxlbWVudHMgdGhlIElCQ01vZHVsZSBpbnRlcmZhY2UuCmZ1bmMgKGltIElCQ01vZHVsZSkgT25UaW1lb3V0UGFja2V0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsCiAgICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAopIGVycm9yIHsKICAgIC8vIHBlcmZvcm0gY3VzdG9tIGxvZ2ljCgogICAgcmV0dXJuIG5pbAp9Cg=="}}),e._v(" "),c("p",[c("strong",[e._v("Note")]),e._v(": The channel capability must be claimed by the authentication module in "),c("code",[e._v("OnChanOpenInit")]),e._v(" otherwise the authentication module will not be able to send packets on the channel created for the associated interchain account.")]),e._v(" "),c("p",[e._v("The following functions must be defined to fulfill the "),c("code",[e._v("IBCModule")]),e._v(" interface, but they will never be called by the controller module so they may error or panic.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gT25DaGFuT3BlblRyeSBpbXBsZW1lbnRzIHRoZSBJQkNNb2R1bGUgaW50ZXJmYWNlCmZ1bmMgKGltIElCQ01vZHVsZSkgT25DaGFuT3BlblRyeSgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIG9yZGVyIGNoYW5uZWx0eXBlcy5PcmRlciwKICAgIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKICAgIGNoYW5DYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgICBjb3VudGVycGFydHlWZXJzaW9uIHN0cmluZywKKSAoc3RyaW5nLCBlcnJvcikgewogICAgcGFuaWMoJnF1b3Q7VU5JTVBMRU1FTlRFRCZxdW90OykKfQoKLy8gT25DaGFuT3BlbkNvbmZpcm0gaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbk9wZW5Db25maXJtKAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKKSBlcnJvciB7CiAgICBwYW5pYygmcXVvdDtVTklNUExFTUVOVEVEJnF1b3Q7KQp9CgovLyBPbkNoYW5DbG9zZUluaXQgaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbkNsb3NlSW5pdCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCBzdHJpbmcsCikgZXJyb3IgewogICAgcGFuaWMoJnF1b3Q7VU5JTVBMRU1FTlRFRCZxdW90OykKfQoKLy8gT25SZWN2UGFja2V0IGltcGxlbWVudHMgdGhlIElCQ01vZHVsZSBpbnRlcmZhY2UuIEEgc3VjY2Vzc2Z1bCBhY2tub3dsZWRnZW1lbnQKLy8gaXMgcmV0dXJuZWQgaWYgdGhlIHBhY2tldCBkYXRhIGlzIHN1Y2Nlc2Z1bGx5IGRlY29kZWQgYW5kIHRoZSByZWNlaXZlIGFwcGxpY2F0aW9uCi8vIGxvZ2ljIHJldHVybnMgd2l0aG91dCBlcnJvci4KZnVuYyAoaW0gSUJDTW9kdWxlKSBPblJlY3ZQYWNrZXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCikgaWJjZXhwb3J0ZWQuQWNrbm93bGVkZ2VtZW50IHsKICAgIHBhbmljKCZxdW90O1VOSU1QTEVNRU5URUQmcXVvdDspCn0K"}}),e._v(" "),c("h2",{attrs:{id:"registerinterchainaccount"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#registerinterchainaccount"}},[e._v("#")]),e._v(" "),c("code",[e._v("RegisterInterchainAccount")])]),e._v(" "),c("p",[e._v("The authentication module can begin registering interchain accounts by calling "),c("code",[e._v("RegisterInterchainAccount")]),e._v(":")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgZXJyIDo9IGtlZXBlci5pY2FDb250cm9sbGVyS2VlcGVyLlJlZ2lzdGVySW50ZXJjaGFpbkFjY291bnQoY3R4LCBjb25uZWN0aW9uSUQsIG93bmVyLlN0cmluZygpLCB2ZXJzaW9uKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCnJldHVybiBuaWwK"}}),e._v(" "),c("p",[e._v("The "),c("code",[e._v("version")]),e._v(" argument is used to support ICS29 fee middleware for relayer incentivization of ICS27 packets. Consumers of the "),c("code",[e._v("RegisterInterchainAccount")]),e._v(" are expected to build the appropriate JSON encoded version string themselves and pass it accordingly. If an empty string is passed in the "),c("code",[e._v("version")]),e._v(" argument, then the version will be initialized to a default value in the "),c("code",[e._v("OnChanOpenInit")]),e._v(" callback of the controller's handler, so that channel handshake can proceed.")]),e._v(" "),c("p",[e._v("The following code snippet illustrates how to construct an appropriate interchain accounts "),c("code",[e._v("Metadata")]),e._v(" and encode it as a JSON bytestring:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWNhTWV0YWRhdGEgOj0gaWNhdHlwZXMuTWV0YWRhdGF7CiAgICBWZXJzaW9uOiAgICAgICAgICAgICAgICBpY2F0eXBlcy5WZXJzaW9uLAogICAgQ29udHJvbGxlckNvbm5lY3Rpb25JZDogY29udHJvbGxlckNvbm5lY3Rpb25JRCwKICAgIEhvc3RDb25uZWN0aW9uSWQ6ICAgICAgIGhvc3RDb25uZWN0aW9uSUQsCiAgICBFbmNvZGluZzogICAgICAgICAgICAgICBpY2F0eXBlcy5FbmNvZGluZ1Byb3RvYnVmLAogICAgVHhUeXBlOiAgICAgICAgICAgICAgICAgaWNhdHlwZXMuVHhUeXBlU0RLTXVsdGlNc2csCn0KCmFwcFZlcnNpb24sIGVyciA6PSBpY2F0eXBlcy5Nb2R1bGVDZGMuTWFyc2hhbEpTT04oJmFtcDtpY2FNZXRhZGF0YSkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCmlmIGVyciA6PSBrZWVwZXIuaWNhQ29udHJvbGxlcktlZXBlci5SZWdpc3RlckludGVyY2hhaW5BY2NvdW50KGN0eCwgY29udHJvbGxlckNvbm5lY3Rpb25JRCwgb3duZXIuU3RyaW5nKCksIHN0cmluZyhhcHBWZXJzaW9uKSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9Cg=="}}),e._v(" "),c("p",[e._v("Similarly, if the application stack is configured to route through ICS29 fee middleware and a fee enabled channel is desired, construct the appropriate ICS29 "),c("code",[e._v("Metadata")]),e._v(" type:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWNhTWV0YWRhdGEgOj0gaWNhdHlwZXMuTWV0YWRhdGF7CiAgICBWZXJzaW9uOiAgICAgICAgICAgICAgICBpY2F0eXBlcy5WZXJzaW9uLAogICAgQ29udHJvbGxlckNvbm5lY3Rpb25JZDogY29udHJvbGxlckNvbm5lY3Rpb25JRCwKICAgIEhvc3RDb25uZWN0aW9uSWQ6ICAgICAgIGhvc3RDb25uZWN0aW9uSUQsCiAgICBFbmNvZGluZzogICAgICAgICAgICAgICBpY2F0eXBlcy5FbmNvZGluZ1Byb3RvYnVmLAogICAgVHhUeXBlOiAgICAgICAgICAgICAgICAgaWNhdHlwZXMuVHhUeXBlU0RLTXVsdGlNc2csCn0KCmFwcFZlcnNpb24sIGVyciA6PSBpY2F0eXBlcy5Nb2R1bGVDZGMuTWFyc2hhbEpTT04oJmFtcDtpY2FNZXRhZGF0YSkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCmZlZU1ldGFkYXRhIDo9IGZlZXR5cGVzLk1ldGFkYXRhewogICAgQXBwVmVyc2lvbjogc3RyaW5nKGFwcFZlcnNpb24pLAogICAgRmVlVmVyc2lvbjogZmVldHlwZXMuVmVyc2lvbiwKfQoKZmVlRW5hYmxlZFZlcnNpb24sIGVyciA6PSBmZWV0eXBlcy5Nb2R1bGVDZGMuTWFyc2hhbEpTT04oJmFtcDtmZWVNZXRhZGF0YSkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCmlmIGVyciA6PSBrZWVwZXIuaWNhQ29udHJvbGxlcktlZXBlci5SZWdpc3RlckludGVyY2hhaW5BY2NvdW50KGN0eCwgY29udHJvbGxlckNvbm5lY3Rpb25JRCwgb3duZXIuU3RyaW5nKCksIHN0cmluZyhmZWVFbmFibGVkVmVyc2lvbikpOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBlcnIKfQo="}}),e._v(" "),c("h2",{attrs:{id:"sendtx"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#sendtx"}},[e._v("#")]),e._v(" "),c("code",[e._v("SendTx")])]),e._v(" "),c("p",[e._v("The authentication module can attempt to send a packet by calling "),c("code",[e._v("SendTx")]),e._v(":")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ci8vIEF1dGhlbnRpY2F0ZSBvd25lcgovLyBwZXJmb3JtIGN1c3RvbSBsb2dpYwogICAgCi8vIENvbnN0cnVjdCBjb250cm9sbGVyIHBvcnRJRCBiYXNlZCBvbiBpbnRlcmNoYWluIGFjY291bnQgb3duZXIgYWRkcmVzcwpwb3J0SUQsIGVyciA6PSBpY2F0eXBlcy5OZXdDb250cm9sbGVyUG9ydElEKG93bmVyLlN0cmluZygpKQppZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBlcnIKfQoKY2hhbm5lbElELCBmb3VuZCA6PSBrZWVwZXIuaWNhQ29udHJvbGxlcktlZXBlci5HZXRBY3RpdmVDaGFubmVsSUQoY3R4LCBwb3J0SUQpCmlmICFmb3VuZCB7CiAgICByZXR1cm4gc2RrZXJyb3JzLldyYXBmKGljYXR5cGVzLkVyckFjdGl2ZUNoYW5uZWxOb3RGb3VuZCwgJnF1b3Q7ZmFpbGVkIHRvIHJldHJpZXZlIGFjdGl2ZSBjaGFubmVsIGZvciBwb3J0ICVzJnF1b3Q7LCBwb3J0SUQpCn0KICAgIAovLyBPYnRhaW4gdGhlIGNoYW5uZWwgY2FwYWJpbGl0eSwgY2xhaW1lZCBpbiBPbkNoYW5PcGVuSW5pdApjaGFuQ2FwLCBmb3VuZCA6PSBrZWVwZXIuc2NvcGVkS2VlcGVyLkdldENhcGFiaWxpdHkoY3R4LCBob3N0LkNoYW5uZWxDYXBhYmlsaXR5UGF0aChwb3J0SUQsIGNoYW5uZWxJRCkpCmlmICFmb3VuZCB7CiAgICByZXR1cm4gc2RrZXJyb3JzLldyYXAoY2hhbm5lbHR5cGVzLkVyckNoYW5uZWxDYXBhYmlsaXR5Tm90Rm91bmQsICZxdW90O21vZHVsZSBkb2VzIG5vdCBvd24gY2hhbm5lbCBjYXBhYmlsaXR5JnF1b3Q7KQp9CiAgICAKLy8gT2J0YWluIGRhdGEgdG8gYmUgc2VudCB0byB0aGUgaG9zdCBjaGFpbi4gCi8vIEluIHRoaXMgZXhhbXBsZSwgdGhlIG93bmVyIG9mIHRoZSBpbnRlcmNoYWluIGFjY291bnQgd291bGQgbGlrZSB0byBzZW5kIGEgYmFuayBNc2dTZW5kIHRvIHRoZSBob3N0IGNoYWluLiAKLy8gVGhlIGFwcHJvcHJpYXRlIHNlcmlhbGl6YXRpb24gZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZC4gVGhlIGhvc3QgY2hhaW4gbXVzdCBiZSBhYmxlIHRvIGRlc2VyaWFsaXplIHRoZSB0cmFuc2FjdGlvbi4gCi8vIElmIHRoZSBob3N0IGNoYWluIGlzIHVzaW5nIHRoZSBpYmMtZ28gaG9zdCBtb2R1bGUsIGBTZXJpYWxpemVDb3Ntb3NUeGAgc2hvdWxkIGJlIHVzZWQuIAptc2cgOj0gJmFtcDtiYW5rdHlwZXMuTXNnU2VuZHtGcm9tQWRkcmVzczogZnJvbUFkZHIsIFRvQWRkcmVzczogdG9BZGRyLCBBbW91bnQ6IGFtdH0KZGF0YSwgZXJyIDo9IGljYXR5cGVzLlNlcmlhbGl6ZUNvc21vc1R4KGtlZXBlci5jZGMsIFtdc2RrLk1zZ3ttc2d9KQppZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBlcnIKfQoKLy8gQ29uc3RydWN0IHBhY2tldCBkYXRhCnBhY2tldERhdGEgOj0gaWNhdHlwZXMuSW50ZXJjaGFpbkFjY291bnRQYWNrZXREYXRhewogICAgVHlwZTogaWNhdHlwZXMuRVhFQ1VURV9UWCwKICAgIERhdGE6IGRhdGEsCn0KCi8vIE9idGFpbiB0aW1lb3V0IHRpbWVzdGFtcAovLyBBbiBhcHByb3ByaWF0ZSB0aW1lb3V0IHRpbWVzdGFtcCBtdXN0IGJlIGRldGVybWluZWQgYmFzZWQgb24gdGhlIHVzYWdlIG9mIHRoZSBpbnRlcmNoYWluIGFjY291bnQuCi8vIElmIHRoZSBwYWNrZXQgdGltZXMgb3V0LCB0aGUgY2hhbm5lbCB3aWxsIGJlIGNsb3NlZCByZXF1aXJpbmcgYSBuZXcgY2hhbm5lbCB0byBiZSBjcmVhdGVkIAp0aW1lb3V0VGltZXN0YW1wIDo9IG9idGFpblRpbWVvdXRUaW1lc3RhbXAoKQoKLy8gU2VuZCB0aGUgaW50ZXJjaGFpbiBhY2NvdW50cyBwYWNrZXQsIHJldHVybmluZyB0aGUgcGFja2V0IHNlcXVlbmNlCnNlcSwgZXJyID0ga2VlcGVyLmljYUNvbnRyb2xsZXJLZWVwZXIuU2VuZFR4KGN0eCwgY2hhbkNhcCwgcG9ydElELCBwYWNrZXREYXRhLCB0aW1lb3V0VGltZXN0YW1wKQo="}}),e._v(" "),c("p",[e._v("The data within an "),c("code",[e._v("InterchainAccountPacketData")]),e._v(" must be serialized using a format supported by the host chain.\nIf the host chain is using the ibc-go host chain submodule, "),c("code",[e._v("SerializeCosmosTx")]),e._v(" should be used. If the "),c("code",[e._v("InterchainAccountPacketData.Data")]),e._v(" is serialized using a format not support by the host chain, the packet will not be successfully received.")]),e._v(" "),c("h2",{attrs:{id:"onacknowledgementpacket"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#onacknowledgementpacket"}},[e._v("#")]),e._v(" "),c("code",[e._v("OnAcknowledgementPacket")])]),e._v(" "),c("p",[e._v("Controller chains will be able to access the acknowledgement written into the host chain state once a relayer relays the acknowledgement.\nThe acknowledgement bytes will be passed to the auth module via the "),c("code",[e._v("OnAcknowledgementPacket")]),e._v(" callback.\nAuth modules are expected to know how to decode the acknowledgement.")]),e._v(" "),c("p",[e._v("If the controller chain is connected to a host chain using the host module on ibc-go, it may interpret the acknowledgement bytes as follows:")]),e._v(" "),c("p",[e._v("Begin by unmarshaling the acknowledgement into sdk.TxMsgData:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIGFjayBjaGFubmVsdHlwZXMuQWNrbm93bGVkZ2VtZW50CmlmIGVyciA6PSBjaGFubmVsdHlwZXMuU3ViTW9kdWxlQ2RjLlVubWFyc2hhbEpTT04oYWNrbm93bGVkZ2VtZW50LCAmYW1wO2Fjayk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9Cgp0eE1zZ0RhdGEgOj0gJmFtcDtzZGsuVHhNc2dEYXRhe30KaWYgZXJyIDo9IHByb3RvLlVubWFyc2hhbChhY2suR2V0UmVzdWx0KCksIHR4TXNnRGF0YSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9Cg=="}}),e._v(" "),c("p",[e._v("If the "),c("code",[e._v("txMsgData.Data")]),e._v(" field is non nil, the host chain is using SDK version <= v0.45.\nThe auth module should interpret the "),c("code",[e._v("txMsgData.Data")]),e._v(" as follows:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3dpdGNoIGxlbih0eE1zZ0RhdGEuRGF0YSkgewpjYXNlIDA6CiAgICAvLyBzZWUgZG9jdW1lbnRhdGlvbiBiZWxvdyBmb3IgU0RLIDAuNDYueCBvciBncmVhdGVyCmRlZmF1bHQ6CiAgICBmb3IgXywgbXNnRGF0YSA6PSByYW5nZSB0eE1zZ0RhdGEuRGF0YSB7CiAgICAgICAgaWYgZXJyIDo9IGhhbmRsZXIobXNnRGF0YSk7IGVyciAhPSBuaWwgewogICAgICAgICAgICByZXR1cm4gZXJyCiAgICAgICAgfQogICAgfQouLi4KfSAgICAgICAgICAgIAo="}}),e._v(" "),c("p",[e._v("A handler will be needed to interpret what actions to perform based on the message type sent.\nA router could be used, or more simply a switch statement.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBoYW5kbGVyKG1zZ0RhdGEgc2RrLk1zZ0RhdGEpIGVycm9yIHsKc3dpdGNoIG1zZ0RhdGEuTXNnVHlwZSB7CmNhc2Ugc2RrLk1zZ1R5cGVVUkwoJmFtcDtiYW5rdHlwZXMuTXNnU2VuZHt9KToKICAgIG1zZ1Jlc3BvbnNlIDo9ICZhbXA7YmFua3R5cGVzLk1zZ1NlbmRSZXNwb25zZXt9CiAgICBpZiBlcnIgOj0gcHJvdG8uVW5tYXJzaGFsKG1zZ0RhdGEuRGF0YSwgbXNnUmVzcG9uc2V9OyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlQmFua1NlbmRNc2cobXNnUmVzcG9uc2UpCgpjYXNlIHNkay5Nc2dUeXBlVVJMKCZhbXA7c3Rha2luZ3R5cGVzLk1zZ0RlbGVnYXRle30pOgogICAgbXNnUmVzcG9uc2UgOj0gJmFtcDtzdGFraW5ndHlwZXMuTXNnRGVsZWdhdGVSZXNwb25zZXt9CiAgICBpZiBlcnIgOj0gcHJvdG8uVW5tYXJzaGFsKG1zZ0RhdGEuRGF0YSwgbXNnUmVzcG9uc2V9OyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlU3Rha2luZ0RlbGVnYXRlTXNnKG1zZ1Jlc3BvbnNlKQoKY2FzZSBzZGsuTXNnVHlwZVVSTCgmYW1wO3RyYW5zZmVydHlwZXMuTXNnVHJhbnNmZXJ7fSk6CiAgICBtc2dSZXNwb25zZSA6PSAmYW1wO3RyYW5zZmVydHlwZXMuTXNnVHJhbnNmZXJSZXNwb25zZXt9CiAgICBpZiBlcnIgOj0gcHJvdG8uVW5tYXJzaGFsKG1zZ0RhdGEuRGF0YSwgbXNnUmVzcG9uc2V9OyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlSUJDVHJhbnNmZXJNc2cobXNnUmVzcG9uc2UpCiAKZGVmYXVsdDoKICAgIHJldHVybgp9Cg=="}}),e._v(" "),c("p",[e._v("If the "),c("code",[e._v("txMsgData.Data")]),e._v(" is empty, the host chain is using SDK version > v0.45.\nThe auth module should interpret the "),c("code",[e._v("txMsgData.Responses")]),e._v(" as follows:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCi8vIHN3aXRjaCBzdGF0ZW1lbnQgZnJvbSBhYm92ZQpjYXNlIDA6CiAgICBmb3IgXywgYW55IDo9IHJhbmdlIHR4TXNnRGF0YS5Nc2dSZXNwb25zZXMgewogICAgICAgIGlmIGVyciA6PSBoYW5kbGVBbnkoYW55KTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIHJldHVybiBlcnIKICAgICAgICB9CiAgICB9Cn0K"}}),e._v(" "),c("p",[e._v("A handler will be needed to interpret what actions to perform based on the type url of the Any.\nA router could be used, or more simply a switch statement.\nIt may be possible to deduplicate logic between "),c("code",[e._v("handler")]),e._v(" and "),c("code",[e._v("handleAny")]),e._v(".")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBoYW5kbGVBbnkoYW55ICpjb2RlY3R5cGVzLkFueSkgZXJyb3Igewpzd2l0Y2ggYW55LlR5cGVVUkwgewpjYXNlIGJhbmt0eXBlcy5Nc2dTZW5kOgogICAgbXNnUmVzcG9uc2UsIGVyciA6PSB1bnBhY2tCYW5rTXNnU2VuZFJlc3BvbnNlKGFueSkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICBoYW5kbGVCYW5rU2VuZE1zZyhtc2dSZXNwb25zZSkKCmNhc2Ugc3Rha2luZ3R5cGVzLk1zZ0RlbGVnYXRlOgogICAgbXNnUmVzcG9uc2UsIGVyciA6PSB1bnBhY2tTdGFraW5nRGVsZWdhdGVSZXNwb25zZShhbnkpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlU3Rha2luZ0RlbGVnYXRlTXNnKG1zZ1Jlc3BvbnNlKQoKICAgIGNhc2UgdHJhbnNmZXJ0eXBlcy5Nc2dUcmFuc2ZlcjoKICAgIG1zZ1Jlc3BvbnNlLCBlcnIgOj0gdW5wYWNrSUJDVHJhbnNmZXJNc2dSZXNwb25zZShhbnkpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlSUJDVHJhbnNmZXJNc2cobXNnUmVzcG9uc2UpCiAKZGVmYXVsdDoKICAgIHJldHVybgp9Cg=="}}),e._v(" "),c("h3",{attrs:{id:"integration-into-app-go-file"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#integration-into-app-go-file"}},[e._v("#")]),e._v(" Integration into "),c("code",[e._v("app.go")]),e._v(" file")]),e._v(" "),c("p",[e._v("To integrate the authentication module into your chain, please follow the steps outlined above in "),c("RouterLink",{attrs:{to:"/apps/interchain-accounts/integration.html#example-integration"}},[e._v("app.go integration")]),e._v(".")],1)],1)}),[],!1,null,null,null);l.default=a.exports}}]);