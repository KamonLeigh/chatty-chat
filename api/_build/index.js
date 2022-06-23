var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var import_react3 = require("react");

// app/util/supabase.js
var import_supabase_js = require("@supabase/supabase-js");
var isServer = typeof window === "undefined";
var supabaseUrl = isServer ? process.env.SUPABASE_URL : window.env.SUPABASE_URL;
var supabaseKey = isServer ? process.env.SUPABASE_KEY : window.env.SUPABASE_KEY;
var supabase_default = (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey);

// app/styles/app.css
var app_default = "/build/_assets/app-T3A3IBJ3.css";

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/root.jsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var loader = () => {
  console.log(process.env.SUPABASE_URL);
  return {
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY
    }
  };
};
function App() {
  const { env } = (0, import_react2.useLoaderData)();
  const fetcher = (0, import_react2.useFetcher)();
  (0, import_react3.useEffect)(() => {
    supabase_default.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        fetcher.submit({
          accessToken: session.access_token
        }, {
          method: "post",
          action: "/auth/login"
        });
      }
      if (event === "SIGNED_OUT") {
        fetcher.submit(null, {
          method: "post",
          action: "/auth/logout"
        });
      }
    });
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.env = ${JSON.stringify(env)}`
    }
  }), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/auth/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});

// app/util/cookie.js
var import_node = require("@remix-run/node");
var MAX_AGE = 60 * 60 * 8;
var { getSession, commitSession, destroySession } = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "sb:tokem",
    secrets: ["r3m1xr0ck5"],
    sameSite: "lax",
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1e3),
    domain: "",
    path: "/",
    httpOnly: true,
    secure: true
  }
});

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/auth/logout.js
var import_node2 = require("@remix-run/node");
var action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const cookie = await destroySession(session);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": cookie
    }
  });
};

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/auth/login.js
var login_exports = {};
__export(login_exports, {
  action: () => action2
});
var import_node3 = require("@remix-run/node");
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const accessToken = formData.get("accessToken");
  const session = await getSession();
  session.set("accessToken", accessToken);
  const cookie = await commitSession(session);
  return (0, import_node3.redirect)("/channels", {
    headers: {
      "Set-Cookie": cookie
    }
  });
};

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/channels.jsx
var channels_exports = {};
__export(channels_exports, {
  default: () => channels_default,
  loader: () => loader2
});
var import_react4 = require("@remix-run/react");

// app/util/withAuthRequired.js
var import_node4 = require("@remix-run/node");
var withAuthRequired_default = async (context) => {
  const session = await getSession(context.request.headers.get("Cookie"));
  const accessToken = session.get("accessToken");
  const { user } = await supabase_default.auth.api.getUser(accessToken);
  const result = {
    supabase: supabase_default,
    user,
    accessToken,
    redirect: null
  };
  if (!user) {
    result.redirect = (0, import_node4.redirect)("/login");
    return result;
  }
  supabase_default.auth.setAuth(accessToken);
  return result;
};

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/channels.jsx
var loader2 = async ({ request }) => {
  const { supabase, redirect: redirect4 } = await withAuthRequired_default({ request });
  if (redirect4)
    return redirect4;
  const { data: channels, error } = await supabase.from("channels").select("id, title");
  if (error) {
    console.log(error.message);
  }
  return { channels };
};
var channels_default = () => {
  const { channels } = (0, import_react4.useLoaderData)();
  const location = (0, import_react4.useLocation)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-screen flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-800 text-white w-40 p-8"
  }, channels.map((channel) => /* @__PURE__ */ React.createElement("p", {
    key: channel.id
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: `/channels/${channel.id}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400 mr-2"
  }, "#"), channel.title)))), /* @__PURE__ */ React.createElement("div", {
    className: "p-8 flex-1 flex flex-col"
  }, (location.pathname === "/channels" || location.pathname === "/channels/") && /* @__PURE__ */ React.createElement("p", {
    className: "flex-1 flex items-center justify-center text-center"
  }, "  Choose a channel!"), /* @__PURE__ */ React.createElement(import_react4.Outlet, null)));
};

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/channels/contact.jsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default
});
var contact_default = () => /* @__PURE__ */ React.createElement("h2", null, "I am the contact page ");

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/channels/$id.jsx
var id_exports = {};
__export(id_exports, {
  action: () => action3,
  default: () => id_default,
  loader: () => loader3
});
var import_react5 = require("@remix-run/react");
var import_react6 = require("react");
var loader3 = async ({ request, params: { id } }) => {
  const { supabase, redirect: redirect4, user } = await withAuthRequired_default({ request });
  if (redirect4)
    return redirect4;
  const { data: channel, error } = await supabase.from("channels").select("id, title, description, messages(id, content, likes, profiles(email, id, username))").match({ id }).order("created_at", { foreignTable: "messages" }).single();
  if (error) {
    console.log(error.message);
  }
  return { channel, user };
};
var action3 = async ({ request }) => {
  const { supabase, redirect: redirect4, user } = await withAuthRequired_default({ request });
  if (redirect4)
    return redirect4;
  const formData = await request.formData();
  const content = formData.get("content");
  const channelId = formData.get("channelId");
  const { error } = await supabase.from("messages").insert({ content, channel_id: channelId, user_id: user.id });
  if (error) {
    console.log(error.message);
  }
  formData.set("content", "");
  return null;
};
var id_default = ({ params }) => {
  const { channel, user } = (0, import_react5.useLoaderData)();
  const [messages, setMessages] = (0, import_react6.useState)([...channel.messages]);
  const fetcher = (0, import_react5.useFetcher)();
  const transition = (0, import_react5.useTransition)();
  const newMessageRef = (0, import_react6.useRef)();
  const messagesRef = (0, import_react6.useRef)();
  (0, import_react6.useEffect)(() => {
    var _a;
    if (transition.state !== "submitting") {
      (_a = newMessageRef.current) == null ? void 0 : _a.reset();
    }
  }, [transition.state]);
  (0, import_react6.useEffect)(() => {
    supabase_default.from(`messages:channel_id=eq.${channel.id}`).on("*", (payload) => {
      fetcher.load(`/channels/${channel.id}`);
    }).subscribe();
  }, []);
  (0, import_react6.useEffect)(() => {
    if (fetcher.data) {
      setMessages([...fetcher.data.channel.messages]);
    }
  }, [fetcher.data]);
  (0, import_react6.useEffect)(() => {
    setMessages([...channel.messages]);
  }, [channel]);
  (0, import_react6.useEffect)(() => {
    var _a;
    (_a = messagesRef.current) == null ? void 0 : _a.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [messages]);
  const handleIncrement = (id) => async () => {
    const { data, error } = await supabase_default.rpc("increment_likes", {
      message_id: id
    });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl uppercase mb-2"
  }, channel.title), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-600 border-b border-gray-300 pb-6"
  }, channel.description), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex flex-col p-2 overflow-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-auto",
    ref: messagesRef
  }, messages.length > 0 ? messages.map((message) => /* @__PURE__ */ React.createElement("p", {
    key: message.id,
    className: `p-2 ${user.id === message.profiles.id ? "text-right" : ""}`
  }, message.content, /* @__PURE__ */ React.createElement("span", {
    className: "block text-xs text-gray-500 px-2"
  }, message.profiles.username ?? message.profiles.email), /* @__PURE__ */ React.createElement("span", {
    className: "block text-xs text-gray-500 px-2"
  }, message.likes, " likes ", /* @__PURE__ */ React.createElement("button", {
    onClick: handleIncrement(message.id)
  }, "\u{1F44D}")))) : /* @__PURE__ */ React.createElement("p", {
    className: "font-bold text-center"
  }, "Be the first to send a message!"))), /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post",
    className: "flex",
    ref: newMessageRef
  }, /* @__PURE__ */ React.createElement("input", {
    name: "content",
    className: "border border-gray-200 px-2 flex-1"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "channelId",
    value: channel.id
  }), /* @__PURE__ */ React.createElement("button", {
    className: "px-4 py-2 ml-4 bg-blue-200"
  }, "Send")));
};

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/register.jsx
var register_exports = {};
__export(register_exports, {
  default: () => register_default
});
var import_react7 = require("@remix-run/react");
function register_default() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const { data, error } = await supabase_default.auth.signUp({
      email,
      password
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-screen flex flex-col items-center justify-center bg-gray-800 text-white"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl mb-4"
  }, "Register"), /* @__PURE__ */ React.createElement("form", {
    className: "flex flex-col mb-4",
    onSubmit: handleRegister
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    name: "email",
    className: "border border-gray-200 bg-transparent mb-4 px-2",
    placeholder: "jon@example.com"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, "password"), /* @__PURE__ */ React.createElement("input", {
    name: "password",
    type: "password",
    className: "border border-gray-200 bg-transparent mb-8 px-2",
    placeholder: "password"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "bg-gray-700 py-2"
  }, "Go!")), /* @__PURE__ */ React.createElement("p", null, "Already have an account?", /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/login"
  }, "Login")));
}

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/logout.jsx
var logout_exports2 = {};
__export(logout_exports2, {
  default: () => logout_default
});
var import_react8 = require("react");
var import_react9 = require("@remix-run/react");
var logout_default = () => {
  const fetcher = (0, import_react9.useFetcher)();
  (0, import_react8.useEffect)(() => {
    const logout = async () => {
      await supabase_default.auth.signOut();
      fetcher.submit(null, {
        method: "post",
        action: "/auth/logout"
      });
    };
    logout();
  }, []);
  return /* @__PURE__ */ React.createElement("p", null, "Logging out");
};

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react10 = require("@remix-run/react");
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-screen flex flex-col items-center justify-center bg-gray-800 text-white"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl"
  }, "Welcomr to the chat!"), /* @__PURE__ */ React.createElement(import_react10.Link, {
    to: "/channels"
  }, " Go to Channels"));
}

// route:/Users/ByronDunkley/Documents/projects/chatty-chat/app/routes/login.jsx
var login_exports2 = {};
__export(login_exports2, {
  default: () => login_default
});
var import_react11 = require("@remix-run/react");
function login_default() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const { data, error } = await supabase_default.auth.signIn({
      email,
      password
    });
    console.log(data);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-screen flex flex-col items-center justify-center bg-gray-800 text-white"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl mb-4"
  }, "Login"), /* @__PURE__ */ React.createElement("form", {
    className: "flex flex-col mb-4",
    onSubmit: handleLogin
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    name: "email",
    className: "border border-gray-200 bg-transparent mb-4 px-2",
    placeholder: "jon@example.com"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, "password"), /* @__PURE__ */ React.createElement("input", {
    name: "password",
    type: "password",
    className: "border border-gray-200 bg-transparent mb-8 px-2",
    placeholder: "password"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "bg-gray-700 py-2"
  }, "Go!")), /* @__PURE__ */ React.createElement("p", null, "Don't have an account?", /* @__PURE__ */ React.createElement(import_react11.Link, {
    to: "/register"
  }, "Register")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "aab6ef20", "entry": { "module": "/build/entry.client-UXL3WPGX.js", "imports": ["/build/_shared/chunk-QF57KEPB.js", "/build/_shared/chunk-FN7GJDOI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-B4YW3P54.js", "imports": ["/build/_shared/chunk-3PCSTUWG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-RKC56B7F.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "root", "path": "auth/logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-7H6MNAAO.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/channels": { "id": "routes/channels", "parentId": "root", "path": "channels", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/channels-7ZCT4WJW.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/channels/$id": { "id": "routes/channels/$id", "parentId": "routes/channels", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/channels/$id-NWDZU6RR.js", "imports": ["/build/_shared/chunk-3PCSTUWG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/channels/contact": { "id": "routes/channels/contact", "parentId": "routes/channels", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/channels/contact-V3KQ2SYH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-5GLFM57I.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-YBAGJKKE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-IVDRVTV2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register-BCSQZ3UD.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-AAB6EF20.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/logout": {
    id: "routes/auth/logout",
    parentId: "root",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/channels": {
    id: "routes/channels",
    parentId: "root",
    path: "channels",
    index: void 0,
    caseSensitive: void 0,
    module: channels_exports
  },
  "routes/channels/contact": {
    id: "routes/channels/contact",
    parentId: "routes/channels",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/channels/$id": {
    id: "routes/channels/$id",
    parentId: "routes/channels",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports2
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
