/* VimeoPlayer - v4.28.9 - 2024-02-22 - https://player.vimeo.com/NOTICE.txt */
const e = { MANIFEST: "manifest", SEGMENT: "segment" },
  t = {
    method: "GET",
    async: !0,
    retry: 0,
    throwHttpErrors: !0,
    headers: {},
    hooks: { beforeRequest: [], beforeRetry: [], afterResponse: [] },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    retryStatus: function (e) {
      return [408, 413, 429].includes(e) || (e >= 500 && e < 600);
    },
  };
function n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function r(e, t, r) {
  return t && n(e.prototype, t), r && n(e, r), e;
}
function i(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? s(Object(n), !0).forEach(function (t) {
          i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : s(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function a(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
function u(e) {
  return (u = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function c(e, t) {
  return (c =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function l() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch (Rl) {
    return !1;
  }
}
function d(e, t, n) {
  return (d = l()
    ? Reflect.construct
    : function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new (Function.bind.apply(e, r))();
        return n && c(i, n.prototype), i;
      }).apply(null, arguments);
}
function h(e) {
  var t = "function" == typeof Map ? new Map() : void 0;
  return (h = function (e) {
    if (
      null === e ||
      !(function (e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]");
      })(e)
    )
      return e;
    if ("function" != typeof e)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== t) {
      if (t.has(e)) return t.get(e);
      t.set(e, n);
    }
    function n() {
      return d(e, arguments, u(this).constructor);
    }
    return (
      (n.prototype = Object.create(e.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
      c(n, e)
    );
  })(e);
}
function f(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        s = Object.keys(e);
      for (r = 0; r < s.length; r++)
        (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (n = s[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function _(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function p(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return m(e);
    })(e) ||
    (function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    })(e) ||
    (function (e, t) {
      if (e) {
        if ("string" == typeof e) return m(e, void 0);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? m(e, void 0)
            : void 0
        );
      }
    })(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function m(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function v(e) {
  return e.filter((e, t, n) => n.indexOf(e) === t);
}
function g(e, t) {
  return e.reduce((e, n, r, i) => e.concat(t(n, r, i)), []);
}
function y(e) {
  return (t, ...n) => (
    n.forEach((n) => {
      for (const r in n) {
        const i = Object.getOwnPropertyDescriptor(n, r);
        Object.defineProperty(t, r, Object.assign(i, e));
      }
    }),
    t
  );
}
const E = y({ enumerable: !1, configurable: !0, writeable: !1 }),
  T = y({ enumerable: !1, configurable: !1, writeable: !1 }),
  S = y({ enumerable: !0, configurable: !0, writeable: !1 }),
  b = (e) => new Promise((t, n) => setTimeout(t, e));
function A(e) {
  e.substring(0, e.lastIndexOf("/") + 1);
}
const I = (e) =>
    new Promise((t, n) => {
      const r = document.createElement("script");
      (r.src = e),
        r.addEventListener("load", t),
        r.addEventListener("error", (e) => n(e.error)),
        document.head.appendChild(r);
    }),
  w = (e) => Math.pow(e, 2),
  R = (e) => Math.sqrt(e);
function k(e, ...t) {
  return t.reduce(
    (e, t) => (
      Object.keys(t || {}).forEach((n) => {
        const r = e[n],
          i = t[n];
        (r && void 0 === i) ||
          (Array.isArray(i)
            ? (e[n] = (r || []).concat(i))
            : ((e) => e && "object" == typeof e)(i)
            ? (e[n] = k({}, r, i))
            : (e[n] = i));
      }),
      e
    ),
    e
  );
}
function P() {
  let e,
    t,
    n = new Promise(function (n, r) {
      (e = n), (t = r);
    });
  return (n.resolve = e), (n.reject = t), n;
}
function D(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r++)
    if (t.start(r) <= e && t.end(r) >= e) {
      n = t.end(r);
      break;
    }
  return n - e;
}
function O(e, t) {
  if (!t || !t.length) return 0;
  if (1 === t.length && t.end(0) - t.start(0) < 1e-6) return 0;
  let n = 0;
  for (let r = t.length - 1; r >= 0 && t.end(r) > e; --r)
    n += t.end(r) - Math.max(t.start(r), e);
  return n;
}
function L() {
  return void 0 !== window.performance &&
    "function" == typeof window.performance.now
    ? window.performance.now()
    : Date.now();
}
function C(e) {
  return L() - e;
}
function M(e) {
  if ("object" != typeof e) return "";
  let t = [];
  for (let n in e)
    e.hasOwnProperty(n) &&
      t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t.length ? t.join("&") : "";
}
function N(e) {
  return "string" != typeof e
    ? {}
    : e
        .replace("?", "")
        .split("&")
        .reduce((e, t) => {
          if (t.length > 0) {
            const n = t.substring(0, t.indexOf("=")),
              r = t.substring(t.indexOf("=") + 1);
            e[n] = decodeURIComponent(r);
          }
          return e;
        }, {});
}
function x(e) {
  const t = document.createElement("a");
  return (t.href = e), t;
}
function U(e, t) {
  const n = M(t);
  let r = -1 === e.indexOf("?") ? "?" : "&";
  return `${e}${n ? `${r}${n}` : ""}`;
}
function F(e) {
  const t = e.split("://");
  if (2 !== t.length) return null;
  const n = t[1].split("/");
  if (n.length > 1) return n[0];
  const r = t[1].split("?");
  if (r.length > 1) return r[0];
  const i = t[1].split("#");
  return i.length > 1 ? i[0] : t[1];
}
const j =
  (e, t) =>
  (...n) => {
    [`%c${e}`, t].concat(n);
  };
function B(e, t) {
  (this.headers = {}),
    (this.perfTimings = {}),
    k(this, t),
    (this.ok = 2 == ((this.status / 100) | 0)),
    (this.body = e),
    (this.text = () => Promise.resolve(e)),
    (this.json = () => Promise.resolve(JSON.parse(e))),
    (this.blob = () => Promise.resolve(new Blob([e]))),
    (this.arrayBuffer = () => Promise.resolve(e)),
    (this.clone = () => new B(e, this)),
    (this.isVimeoResponse = !0);
}
let V = (function (e) {
    function t() {
      var t;
      return (
        ((t = e.call(this, "The operation was aborted.") || this).name =
          "AbortError"),
        t
      );
    }
    return a(t, e), t;
  })(h(Error)),
  H = (function (e) {
    function t(t) {
      var n;
      return (
        ((n = e.call(this, t.statusText) || this).name = "HTTPError"),
        (n.response = t),
        n
      );
    }
    return a(t, e), t;
  })(h(Error)),
  X = (function (e) {
    function t() {
      var t;
      return (
        ((t = e.call(this, "A network error occurred.") || this).name =
          "NetworkError"),
        t
      );
    }
    return a(t, e), t;
  })(h(Error)),
  q = (function (e) {
    function t(t) {
      var n;
      return (
        ((n = e.call(this, "Request timed out.") || this).name =
          "TimeoutError"),
        (n.timeoutMs = t),
        n
      );
    }
    return a(t, e), t;
  })(h(Error));
function G(e, t) {
  let { url: n, method: r, body: i, onDownloadProgress: s } = e,
    o = 100;
  return new Promise(function (a, u) {
    const c = t ? new t() : new XMLHttpRequest(),
      l = window.performance;
    c.open(r.toUpperCase(), n, e.async),
      e.timeout && (c.timeout = e.timeout),
      (c.onload = function () {
        if (
          0 === c.status &&
          (!c.responseURL || 0 !== c.responseURL.indexOf("file:"))
        )
          return;
        const e = {};
        c.getAllResponseHeaders().replace(
          /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
          (t, n, r) => {
            e[n] = e[n] ? `${e[n]},${r}` : r;
          }
        );
        let t = {};
        if (
          window.performance &&
          void 0 !== window.performance.getEntriesByType
        ) {
          const e = window.performance.getEntriesByType("resource");
          if (
            (e.length &&
              e.length >= o &&
              ("function" == typeof l.clearResourceTimings &&
                l.clearResourceTimings(),
              "function" == typeof l.setResourceTimingBufferSize &&
                (l.setResourceTimingBufferSize(500), (o = 500))),
            e.length)
          ) {
            const n = e
              .filter((e) => e.name === c.responseURL)
              .sort((e, t) => e.connectStart - t.connectStart);
            n.length && (t = n[n.length - 1].toJSON());
          }
        }
        a(
          new B(c.response, {
            headers: e,
            statusText: c.statusText,
            status: c.status,
            url: c.responseURL,
            perfTimings: t,
          })
        );
      }),
      (c.onabort = function () {
        u(new V());
      }),
      (c.onerror = function () {
        u(new X());
      }),
      (c.ontimeout = function () {
        u(new q(e.timeout));
      }),
      "function" == typeof s && c.addEventListener("progress", s);
    for (let t in e.headers) c.setRequestHeader(t, e.headers[t]);
    e.withCredentials && (c.withCredentials = !0),
      e.responseType && (c.responseType = e.responseType),
      (e.abort = c.abort.bind(c)),
      c.send(i || null);
  });
}
function W() {}
function K(e, t, n) {
  if (!e.s) {
    if (n instanceof Y) {
      if (!n.s) return void (n.o = K.bind(null, e, t));
      1 & t && (t = n.s), (n = n.v);
    }
    if (n && n.then) return void n.then(K.bind(null, e, t), K.bind(null, e, 2));
    (e.s = t), (e.v = n);
    const r = e.o;
    r && r(e);
  }
}
const Y = (function () {
  function e() {}
  return (
    (e.prototype.then = function (t, n) {
      const r = new e(),
        i = this.s;
      if (i) {
        const e = 1 & i ? t : n;
        if (e) {
          try {
            K(r, 1, e(this.v));
          } catch (Rl) {
            K(r, 2, Rl);
          }
          return r;
        }
        return this;
      }
      return (
        (this.o = function (e) {
          try {
            const i = e.v;
            1 & e.s ? K(r, 1, t ? t(i) : i) : n ? K(r, 1, n(i)) : K(r, 2, i);
          } catch (Rl) {
            K(r, 2, Rl);
          }
        }),
        r
      );
    }),
    e
  );
})();
function $(e) {
  return e instanceof Y && 1 & e.s;
}
function z(e) {
  const t = (function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      try {
        return Promise.resolve(e.apply(this, t));
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    };
  })(function (r) {
    return (function (e, t) {
      try {
        var n = e();
      } catch (Rl) {
        return t(Rl);
      }
      return n && n.then ? n.then(void 0, t) : n;
    })(r, function (i) {
      let s = !1;
      n++;
      const o = (function (t) {
        if (!e.retryAbortErrors && t instanceof V) return 0;
        if (t instanceof q) return 0;
        if (n >= e.retry) return 0;
        if (t instanceof H) {
          if (!e.retryStatus(t.response.status)) return 0;
          const n = t.response.headers["retry-after"];
          if (n && e.retryStatus(t.response.status)) {
            let e = Number(n);
            return isNaN(e) ? (e = Date.parse(n) - Date.now()) : (e *= 1e3), e;
          }
          if (413 === t.response.status) return 0;
        }
        return 0.3 * 2 ** (n - 1) * 1e3;
      })(i);
      return (function (a, u) {
        var c = (function () {
          if (0 !== o && n > 0)
            return (function (e, t, n) {
              return (
                (e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e
              );
            })(b(o), function () {
              const o = e.hooks.beforeRetry || [];
              return (function (e, t) {
                return e && e.then ? e.then(t) : t();
              })(
                (function (e, t, n) {
                  var r,
                    i,
                    s = -1;
                  return (
                    (function n(o) {
                      try {
                        for (; ++s < e.length; )
                          if ((o = t(s)) && o.then) {
                            if (!$(o))
                              return void o.then(
                                n,
                                i || (i = K.bind(null, (r = new Y()), 2))
                              );
                            o = o.v;
                          }
                        r ? K(r, 1, o) : (r = o);
                      } catch (Rl) {
                        K(r || (r = new Y()), 2, Rl);
                      }
                    })(),
                    r
                  );
                })(o, function (t) {
                  return (function (e, t) {
                    return e && e.then ? e.then(W) : Promise.resolve();
                  })((0, o[t])(e, i, n));
                }),
                function () {
                  return (s = !0), t(r);
                }
              );
            });
        })();
        return c && c.then ? c.then(u) : u(c);
      })(0, function (t) {
        if (s) return t;
        if (e.throwHttpErrors) throw i;
      });
    });
  });
  let n = 0;
  return t;
}
function Q(e, t, n) {
  return n
    ? t
      ? t(e)
      : e
    : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
function J(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    try {
      return Promise.resolve(e.apply(this, t));
    } catch (Rl) {
      return Promise.reject(Rl);
    }
  };
}
function Z(e, t, n) {
  if (!e.s) {
    if (n instanceof ee) {
      if (!n.s) return void (n.o = Z.bind(null, e, t));
      1 & t && (t = n.s), (n = n.v);
    }
    if (n && n.then) return void n.then(Z.bind(null, e, t), Z.bind(null, e, 2));
    (e.s = t), (e.v = n);
    const r = e.o;
    r && r(e);
  }
}
const ee = (function () {
  function e() {}
  return (
    (e.prototype.then = function (t, n) {
      const r = new e(),
        i = this.s;
      if (i) {
        const e = 1 & i ? t : n;
        if (e) {
          try {
            Z(r, 1, e(this.v));
          } catch (Rl) {
            Z(r, 2, Rl);
          }
          return r;
        }
        return this;
      }
      return (
        (this.o = function (e) {
          try {
            const i = e.v;
            1 & e.s ? Z(r, 1, t ? t(i) : i) : n ? Z(r, 1, n(i)) : Z(r, 2, i);
          } catch (Rl) {
            Z(r, 2, Rl);
          }
        }),
        r
      );
    }),
    e
  );
})();
function te(e) {
  return e instanceof ee && 1 & e.s;
}
function ne(e, t, n) {
  var r,
    i,
    s = -1;
  return (
    (function o(a) {
      try {
        for (; ++s < e.length && (!n || !n()); )
          if ((a = t(s)) && a.then) {
            if (!te(a))
              return void a.then(o, i || (i = Z.bind(null, (r = new ee()), 2)));
            a = a.v;
          }
        r ? Z(r, 1, a) : (r = a);
      } catch (Rl) {
        Z(r || (r = new ee()), 2, Rl);
      }
    })(),
    r
  );
}
function re(e, t) {
  return e && e.then ? e.then(t) : t(e);
}
const ie = ["get", "post", "put", "patch", "head", "delete"],
  se = {
    json: "application/json",
    text: "text/plain",
    arrayBuffer: "*/*",
    blob: "*/*",
  },
  oe = ["get"];
function ae(e, t) {
  const n = J(function () {
    let e = !1,
      n = !1;
    const r = t.hooks.beforeRequest || [];
    return re(
      ne(
        r,
        function (i) {
          return Q((0, r[i])(t), function (r) {
            return r instanceof ue
              ? ((t = r), void (n = !0))
              : (null == r ? void 0 : r.isVimeoResponse)
              ? ((e = !0), Promise.resolve(r).then(ce(t)))
              : void 0;
          });
        },
        function () {
          return n || e;
        }
      ),
      function (n) {
        return e ? n : G(t).then(ce(t));
      }
    );
  });
  t = new ue(e, t);
  const { method: r, json: i, jwt: s, searchParams: a } = t;
  if (
    (i && ((t.headers["Content-Type"] = se.json), (t.body = JSON.stringify(i))),
    s && (t.headers.Authorization = `jwt ${s}`),
    a)
  ) {
    const [e, n] = t.url.split("?");
    t.url = U(e, o(o({}, N(n)), a));
  }
  const u = -1 !== oe.indexOf(r.toLowerCase()) ? z(t)(n) : n();
  for (const o in se)
    u[o] = J(function () {
      return (
        (t.headers["Content-Type"] = se[o]),
        Q(u, function (e) {
          return e.clone()[o]();
        })
      );
    });
  return (function e(t, n) {
    const r = t.then.bind(t);
    return Object.assign(t, {
      abort: n,
      then: (...t) => e(r.apply(void 0, t), n),
    });
  })(u, () => t.abort());
}
function ue(e, n) {
  k(this, t, (e = "string" == typeof e ? { url: e } : e), n);
}
function ce(e) {
  const { validateStatus: t, throwHttpErrors: n, hooks: r } = e;
  return J(function (i) {
    const s = r.afterResponse || [];
    return re(
      ne(s, function (t) {
        return Q((0, s[t])(e, i.clone()), function (e) {
          e instanceof B && (i = e);
        });
      }),
      function () {
        if (!t || t(i.status)) return i;
        if (n) throw new H(i);
        return i;
      }
    );
  });
}
ie.forEach(function (e) {
  return (ae[e] = (t, n) => ae(t, o({ method: e }, n))), ae[e];
});
const { get: le, post: de, put: he, patch: fe, head: _e } = ae,
  pe = { ARRAY_BUFFER: "arraybuffer" };
var me = Object.freeze({
    __proto__: null,
    ContentTypes: e,
    defaults: t,
    requestMethods: ie,
    responseTypes: se,
    retryMethods: oe,
    request: ae,
    Request: ue,
    get: le,
    post: de,
    put: he,
    patch: fe,
    head: _e,
    Response: B,
    ResponseTypes: pe,
    AbortError: V,
    HTTPError: H,
    NetworkError: X,
    TimeoutError: q,
    xhr: G,
  }),
  ve = navigator.userAgent.toLowerCase();
const ge = ["googlebot", "google-inspectiontool"];
function ye(e) {
  e = e.toLowerCase();
  var t = new RegExp(e).test(ve);
  return "safari" === e ? t && new RegExp("version").test(ve) : t;
}
function Ee(e) {
  var t = document.createElement("div"),
    n = e.charAt(0).toUpperCase() + e.slice(1),
    r = (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ");
  for (var i in r) {
    var s = r[i];
    if (void 0 !== t.style[s]) return s;
  }
  return e;
}
var Te =
    !!ye("android") &&
    (parseFloat(ve.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
  Se = window.devicePixelRatio || 1,
  be =
    !(!ye("windows phone") && !ye("iemobile")) &&
    (parseFloat(
      ve.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")
    ) ||
      !0),
  Ae = !!ye("msie") && parseFloat(ve.replace(/^.*msie (\d+).*$/, "$1")),
  Ie =
    !!ye("trident") &&
    parseFloat(ve.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
  we =
    ye("ipad;") || ye("iphone;") || ye("ipod touch;")
      ? parseFloat(ve.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2"))
      : navigator.userAgent.includes("Mac") && "ontouchend" in document,
  Re = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
  ke = ye("opera") || ye("opr"),
  Pe =
    /^Mozilla\/5\.0 \(.* Mac OS X.*\(KHTML, like Gecko\)(?: Mobile\/[\S]*|)$/i.test(
      ve
    );
function De() {
  if (!ye("safari")) return [];
  var e = ve.split(" ").find(function (e) {
    return /version\//.test(e);
  });
  return e
    ? e
        .replace("version/", "")
        .split(".")
        .map(function (e) {
          return parseInt(e, 10);
        })
    : [];
}
var Oe =
    ye("safari") &&
    ye("apple") &&
    !ye("chrome") &&
    !ye("android") &&
    De()[0] >= 11,
  Le = {
    airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window,
    android: Te,
    appleMail: Pe,
    hasAutoplayPolicy:
      Te ||
      we ||
      Oe ||
      (function () {
        if (!ye("chrome")) return [];
        var e = ve.split(" ").find(function (e) {
          return we ? /CriOS\//.test(e) : /chrome\//.test(e);
        });
        return e
          ? e
              .replace("chrome/", "")
              .split(".")
              .map(function (e) {
                return parseInt(e, 10);
              })
          : [];
      })()[0] >= 66,
    iOS: we,
    iPadOS: Re,
    mobileAndroid: Te && ye("mobile"),
    browser: {
      bb10: ye("bb10"),
      chrome: ye("chrome"),
      firefox: ye("firefox"),
      ie: Ae || Ie,
      edge: ye("edge"),
      opera: ke,
      safari: ye("safari") && ye("apple") && !ye("chrome") && !ye("android"),
      chromium: "chrome" in window,
    },
    devicePixelRatio: Se,
    iPhone: ye("iphone;") || ye("ipod touch;") || ye("ipod;"),
    iPad: ye("ipad;"),
    iPadNonRetina: ye("ipad;") && Se < 2,
    mac: ye("mac os"),
    pointerEvents:
      window.navigator.pointerEnabled ||
      window.navigator.msPointerEnabled ||
      !1,
    passiveEvents: (function () {
      var e = !1;
      try {
        var t = Object.defineProperty({}, "passive", {
          get: function () {
            e = !0;
          },
        });
        window.addEventListener("testPassive", null, t),
          window.removeEventListener("testPassive", null, t);
      } catch (Rl) {}
      return e;
    })(),
    svg:
      !!document.createElementNS &&
      !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
        .createSVGRect,
    touch:
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch) ||
      ye("windows phone") ||
      window.navigator.maxTouchPoints > 1 ||
      window.navigator.msMaxTouchPoints ||
      !1,
    transformProperty: Ee("transform"),
    transitionProperty: Ee("transition"),
    webp: (function () {
      var e = document.createElement("canvas");
      return (
        !(!e.getContext || !e.getContext("2d")) &&
        0 === e.toDataURL("image/webp").indexOf("data:image/webp")
      );
    })(),
    windowsPhone: be,
    mediaCapabilities: "mediaCapabilities" in navigator,
    isGoogleBot: (() => {
      const e = ve.toLowerCase();
      return ge.some((t) => e.includes(t));
    })(),
    storageAccessAPI:
      "requestStorageAccess" in document && "hasStorageAccess" in document,
    videoContentPreload: !ye("iphone"),
    intersectionObserver: "IntersectionObserver" in window,
  },
  Ce = /mac os x 10_13/.test(ve),
  Me = Le.iOS && Le.iOS >= 11,
  Ne =
    "undefined" != typeof matchMedia &&
    ((matchMedia("(color-gamut: p3)").matches && screen.pixelDepth > 24) ||
      matchMedia("(dynamic-range: high), (video-dynamic-range: high)").matches);
function xe(e = "hvc1") {
  return "undefined" != typeof MediaSource
    ? MediaSource.isTypeSupported(`video/mp4; codecs="${e}"`)
    : Oe && (Ce || Me);
}
function Ue() {
  return (
    !(Le.iOS || Le.iPad || Le.browser.ie) &&
    (!ye("safari") ||
      De()[0] > 11 ||
      (11 === De()[0] && (De()[2] > 1 || De()[1] > 0)))
  );
}
(Le.hevc = xe()),
  (Le.hevcMain10 = xe("hvc1.2.4.H150.90")),
  (Le.hdr = Ne),
  (Le.dolbyVision = (function () {
    var e =
      "undefined" != typeof MediaSource &&
      MediaSource.isTypeSupported('video/mp4; codecs="dvh1"');
    if (!e) {
      var t = document.createElement("video");
      "canPlayType" in t &&
        (e = "probably" === t.canPlayType('video/mp4; codecs="dvh1"'));
    }
    if (Re || Le.iOS) {
      var n = De(),
        r = n[0],
        i = n[1];
      if (r < 14 || (14 === r && i < 1)) return !1;
    }
    return e;
  })()),
  (Le.vp9hdr =
    (window.matchMedia("(color-gamut: p3)").matches ||
      window.matchMedia("(color-gamut: rec2020)").matches) &&
    screen.colorDepth >= 48 &&
    (MediaSource.isTypeSupported(
      'video/webm; codecs="vp09.02.10.10.01.09.16.09.00"'
    ) ||
      MediaSource.isTypeSupported(
        'video/webm; codecs="vp09.02.10.10.01.09.16.09.01"'
      ) ||
      MediaSource.isTypeSupported(
        'video/webm; codecs="vp09.02.10.10.01.09.18.09.00"'
      ) ||
      MediaSource.isTypeSupported(
        'video/webm; codecs="vp09.02.10.10.01.09.18.09.01"'
      ))),
  (Le.av1 =
    "undefined" != typeof MediaSource &&
    MediaSource.isTypeSupported(
      'video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'
    )),
  (Le.webvr = !!(window.navigator && "getVRDisplays" in window.navigator)),
  (Le.webxr = !!(
    window.navigator &&
    "xr" in window.navigator &&
    "supportsSession" in window.navigator.xr
  )),
  (Le.spatialPlayback = Ue()),
  (Le.spatialHEVC = !Le.browser.safari && Ue() && xe()),
  (Le.stereoscopic = Le.spatialPlayback && Le.mobileAndroid);
var Fe = Array.isArray,
  je =
    "object" == typeof global && global && global.Object === Object && global,
  Be = "object" == typeof self && self && self.Object === Object && self,
  Ve = je || Be || Function("return this")(),
  He = Ve.Symbol,
  Xe = Object.prototype,
  qe = Xe.hasOwnProperty,
  Ge = Xe.toString,
  We = He ? He.toStringTag : void 0,
  Ke = Object.prototype.toString,
  Ye = He ? He.toStringTag : void 0;
function $e(e) {
  return null == e
    ? void 0 === e
      ? "[object Undefined]"
      : "[object Null]"
    : Ye && Ye in Object(e)
    ? (function (e) {
        var t = qe.call(e, We),
          n = e[We];
        try {
          e[We] = void 0;
          var r = !0;
        } catch (Rl) {}
        var i = Ge.call(e);
        return r && (t ? (e[We] = n) : delete e[We]), i;
      })(e)
    : (function (e) {
        return Ke.call(e);
      })(e);
}
function ze(e) {
  return null != e && "object" == typeof e;
}
function Qe(e) {
  return "symbol" == typeof e || (ze(e) && "[object Symbol]" == $e(e));
}
var Je = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Ze = /^\w*$/;
function et(e) {
  var t = typeof e;
  return null != e && ("object" == t || "function" == t);
}
function tt(e) {
  if (!et(e)) return !1;
  var t = $e(e);
  return (
    "[object Function]" == t ||
    "[object GeneratorFunction]" == t ||
    "[object AsyncFunction]" == t ||
    "[object Proxy]" == t
  );
}
var nt = Ve["__core-js_shared__"],
  rt = (function () {
    var e = /[^.]+$/.exec((nt && nt.keys && nt.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })(),
  it = Function.prototype.toString;
function st(e) {
  if (null != e) {
    try {
      return it.call(e);
    } catch (Rl) {}
    try {
      return e + "";
    } catch (Rl) {}
  }
  return "";
}
var ot = /^\[object .+?Constructor\]$/,
  at = Function.prototype,
  ut = Object.prototype,
  ct = at.toString,
  lt = ut.hasOwnProperty,
  dt = RegExp(
    "^" +
      ct
        .call(lt)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function ht(e, t) {
  var n = (function (e, t) {
    return null == e ? void 0 : e[t];
  })(e, t);
  return (function (e) {
    return (
      !(
        !et(e) ||
        (function (e) {
          return !!rt && rt in e;
        })(e)
      ) && (tt(e) ? dt : ot).test(st(e))
    );
  })(n)
    ? n
    : void 0;
}
var ft = ht(Object, "create"),
  _t = Object.prototype.hasOwnProperty,
  pt = Object.prototype.hasOwnProperty;
function mt(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function vt(e, t) {
  return e === t || (e != e && t != t);
}
function gt(e, t) {
  for (var n = e.length; n--; ) if (vt(e[n][0], t)) return n;
  return -1;
}
(mt.prototype.clear = function () {
  (this.__data__ = ft ? ft(null) : {}), (this.size = 0);
}),
  (mt.prototype.delete = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }),
  (mt.prototype.get = function (e) {
    var t = this.__data__;
    if (ft) {
      var n = t[e];
      return "__lodash_hash_undefined__" === n ? void 0 : n;
    }
    return _t.call(t, e) ? t[e] : void 0;
  }),
  (mt.prototype.has = function (e) {
    var t = this.__data__;
    return ft ? void 0 !== t[e] : pt.call(t, e);
  }),
  (mt.prototype.set = function (e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = ft && void 0 === t ? "__lodash_hash_undefined__" : t),
      this
    );
  });
var yt = Array.prototype.splice;
function Et(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
(Et.prototype.clear = function () {
  (this.__data__ = []), (this.size = 0);
}),
  (Et.prototype.delete = function (e) {
    var t = this.__data__,
      n = gt(t, e);
    return !(
      n < 0 || (n == t.length - 1 ? t.pop() : yt.call(t, n, 1), --this.size, 0)
    );
  }),
  (Et.prototype.get = function (e) {
    var t = this.__data__,
      n = gt(t, e);
    return n < 0 ? void 0 : t[n][1];
  }),
  (Et.prototype.has = function (e) {
    return gt(this.__data__, e) > -1;
  }),
  (Et.prototype.set = function (e, t) {
    var n = this.__data__,
      r = gt(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  });
var Tt = ht(Ve, "Map");
function St(e, t) {
  var n = e.__data__;
  return (function (e) {
    var t = typeof e;
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t
      ? "__proto__" !== e
      : null === e;
  })(t)
    ? n["string" == typeof t ? "string" : "hash"]
    : n.map;
}
function bt(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function At(e, t) {
  if ("function" != typeof e || (null != t && "function" != typeof t))
    throw new TypeError("Expected a function");
  var n = function n() {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      s = n.cache;
    if (s.has(i)) return s.get(i);
    var o = e.apply(this, r);
    return (n.cache = s.set(i, o) || s), o;
  };
  return (n.cache = new (At.Cache || bt)()), n;
}
(bt.prototype.clear = function () {
  (this.size = 0),
    (this.__data__ = {
      hash: new mt(),
      map: new (Tt || Et)(),
      string: new mt(),
    });
}),
  (bt.prototype.delete = function (e) {
    var t = St(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }),
  (bt.prototype.get = function (e) {
    return St(this, e).get(e);
  }),
  (bt.prototype.has = function (e) {
    return St(this, e).has(e);
  }),
  (bt.prototype.set = function (e, t) {
    var n = St(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }),
  (At.Cache = bt);
var It =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  wt = /\\(\\)?/g,
  Rt = (function (e) {
    var t = At(
        function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(It, function (e, n, r, i) {
              t.push(r ? i.replace(wt, "$1") : n || e);
            }),
            t
          );
        },
        function (e) {
          return 500 === n.size && n.clear(), e;
        }
      ),
      n = t.cache;
    return t;
  })(),
  kt = He ? He.prototype : void 0,
  Pt = kt ? kt.toString : void 0;
function Dt(e) {
  if ("string" == typeof e) return e;
  if (Fe(e))
    return (
      (function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
          i[n] = t(e[n], n, e);
        return i;
      })(e, Dt) + ""
    );
  if (Qe(e)) return Pt ? Pt.call(e) : "";
  var t = e + "";
  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
}
function Ot(e) {
  return null == e ? "" : Dt(e);
}
function Lt(e, t) {
  return Fe(e)
    ? e
    : (function (e, t) {
        if (Fe(e)) return !1;
        var n = typeof e;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != e &&
            !Qe(e)
          ) ||
          Ze.test(e) ||
          !Je.test(e) ||
          (null != t && e in Object(t))
        );
      })(e, t)
    ? [e]
    : Rt(Ot(e));
}
function Ct(e) {
  if ("string" == typeof e || Qe(e)) return e;
  var t = e + "";
  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
}
function Mt(e, t) {
  for (var n = 0, r = (t = Lt(t, e)).length; null != e && n < r; )
    e = e[Ct(t[n++])];
  return n && n == r ? e : void 0;
}
function Nt(e, t, n) {
  var r = null == e ? void 0 : Mt(e, t);
  return void 0 === r ? n : r;
}
var xt =
    "object" == typeof global && global && global.Object === Object && global,
  Ut = "object" == typeof self && self && self.Object === Object && self,
  Ft = (xt || Ut || Function("return this")()).Symbol,
  jt = Object.prototype,
  Bt = jt.hasOwnProperty,
  Vt = jt.toString,
  Ht = Ft ? Ft.toStringTag : void 0,
  Xt = Object.prototype.toString,
  qt = Ft ? Ft.toStringTag : void 0;
var Gt = (function (e, t) {
    return function (n) {
      return e(t(n));
    };
  })(Object.getPrototypeOf, Object),
  Wt = Function.prototype,
  Kt = Object.prototype,
  Yt = Wt.toString,
  $t = Kt.hasOwnProperty,
  zt = Yt.call(Object),
  Qt = (function (e) {
    var t,
      n = (
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof module
          ? module
          : Function("return this")()
      ).Symbol;
    return (
      "function" == typeof n
        ? n.observable
          ? (t = n.observable)
          : ((t = n("observable")), (n.observable = t))
        : (t = "@@observable"),
      t
    );
  })();
function Jt(e, t, n) {
  var r;
  if (
    ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
    void 0 !== n)
  ) {
    if ("function" != typeof n)
      throw new Error("Expected the enhancer to be a function.");
    return n(Jt)(e, t);
  }
  if ("function" != typeof e)
    throw new Error("Expected the reducer to be a function.");
  var i = e,
    s = t,
    o = [],
    a = o,
    u = !1;
  function c() {
    a === o && (a = o.slice());
  }
  function l() {
    return s;
  }
  function d(e) {
    if ("function" != typeof e)
      throw new Error("Expected listener to be a function.");
    var t = !0;
    return (
      c(),
      a.push(e),
      function () {
        if (t) {
          (t = !1), c();
          var n = a.indexOf(e);
          a.splice(n, 1);
        }
      }
    );
  }
  function h(e) {
    if (
      !(function (e) {
        if (
          !(function (e) {
            return null != e && "object" == typeof e;
          })(e) ||
          "[object Object]" !=
            (function (e) {
              return null == e
                ? void 0 === e
                  ? "[object Undefined]"
                  : "[object Null]"
                : qt && qt in Object(e)
                ? (function (e) {
                    var t = Bt.call(e, Ht),
                      n = e[Ht];
                    try {
                      e[Ht] = void 0;
                      var r = !0;
                    } catch (Rl) {}
                    var i = Vt.call(e);
                    return r && (t ? (e[Ht] = n) : delete e[Ht]), i;
                  })(e)
                : (function (e) {
                    return Xt.call(e);
                  })(e);
            })(e)
        )
          return !1;
        var t = Gt(e);
        if (null === t) return !0;
        var n = $t.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && Yt.call(n) == zt;
      })(e)
    )
      throw new Error(
        "Actions must be plain objects. Use custom middleware for async actions."
      );
    if (void 0 === e.type)
      throw new Error(
        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
      );
    if (u) throw new Error("Reducers may not dispatch actions.");
    try {
      (u = !0), (s = i(s, e));
    } finally {
      u = !1;
    }
    for (var t = (o = a), n = 0; n < t.length; n++) (0, t[n])();
    return e;
  }
  return (
    h({ type: "@@redux/INIT" }),
    ((r = {
      dispatch: h,
      subscribe: d,
      getState: l,
      replaceReducer: function (e) {
        if ("function" != typeof e)
          throw new Error("Expected the nextReducer to be a function.");
        (i = e), h({ type: "@@redux/INIT" });
      },
    })[Qt] = function () {
      var e,
        t = d;
      return (
        ((e = {
          subscribe: function (e) {
            if ("object" != typeof e)
              throw new TypeError("Expected the observer to be an object.");
            function n() {
              e.next && e.next(l());
            }
            return n(), { unsubscribe: t(n) };
          },
        })[Qt] = function () {
          return this;
        }),
        e
      );
    }),
    r
  );
}
function Zt() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return 0 === t.length
    ? function (e) {
        return e;
      }
    : 1 === t.length
    ? t[0]
    : t.reduce(function (e, t) {
        return function () {
          return e(t.apply(void 0, arguments));
        };
      });
}
var en =
  Object.assign ||
  function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  };
function tn() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (e) {
    return function (n, r, i) {
      var s,
        o = e(n, r, i),
        a = o.dispatch,
        u = {
          getState: o.getState,
          dispatch: function (e) {
            return a(e);
          },
        };
      return (
        (s = t.map(function (e) {
          return e(u);
        })),
        (a = Zt.apply(void 0, s)(o.dispatch)),
        en({}, o, { dispatch: a })
      );
    };
  };
}
var nn =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
function rn(e, t, n) {
  return (
    e(
      (n = {
        path: t,
        exports: {},
        require: function (e, t) {
          return (function () {
            throw new Error(
              "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
            );
          })(null == t && n.path);
        },
      }),
      n.exports
    ),
    n.exports
  );
}
var sn = rn(function (e, t) {
  e.exports = function (e) {
    var t = {};
    return (
      ((e = e || {}).prependOn = function (t, n) {
        return e.on(t, n, !0);
      }),
      (e.eventNames = function () {
        return Object.keys(t);
      }),
      (e.on = function (n, r, i) {
        for (var s = 0, o = (n = [].concat(n)).length; s < o; s++) {
          var a = n[s];
          if (!a) throw new Error("Tried to listen for an undefined event.");
          t[a] || (t[a] = []), i ? t[a].unshift(r) : t[a].push(r);
        }
        return e;
      }),
      (e.once = function (t, n, r) {
        function i() {
          n.apply(e.off(t, i), arguments);
        }
        return (i.handler = n), e.on(t, i, r);
      }),
      (e.off = function (n, r) {
        if (!n) return (t = {}), e;
        for (var i = 0, s = (n = [].concat(n)).length; i < s; i++) {
          var o = n[i];
          if (!o) throw new Error("Tried to remove an undefined event.");
          if (o in t)
            if (r) {
              var a = t[o].indexOf(r);
              if (-1 === a)
                for (var u = 0, c = t[o].length; u < c; u++)
                  if (t[o][u].handler === r) {
                    a = i;
                    break;
                  }
              if (-1 === a) return e;
              t[o].splice(a, 1);
            } else delete t[o];
        }
        return e;
      }),
      (e.fire = function (n) {
        if (!n) throw new Error("Tried to fire an undefined event.");
        if (n in t)
          for (var r = t[n].slice(0), i = 0, s = r.length; i < s; i++)
            if ((r[i].apply(e, r.slice.call(arguments, 1)), e.__isHalted)) {
              delete e.__isHalted;
              break;
            }
        return e;
      }),
      (e.halt = function () {
        return (e.__isHalted = !0), e;
      }),
      e
    );
  };
});
function on(e) {
  var t = (this.__data__ = new Et(e));
  this.size = t.size;
}
(on.prototype.clear = function () {
  (this.__data__ = new Et()), (this.size = 0);
}),
  (on.prototype.delete = function (e) {
    var t = this.__data__,
      n = t.delete(e);
    return (this.size = t.size), n;
  }),
  (on.prototype.get = function (e) {
    return this.__data__.get(e);
  }),
  (on.prototype.has = function (e) {
    return this.__data__.has(e);
  }),
  (on.prototype.set = function (e, t) {
    var n = this.__data__;
    if (n instanceof Et) {
      var r = n.__data__;
      if (!Tt || r.length < 199)
        return r.push([e, t]), (this.size = ++n.size), this;
      n = this.__data__ = new bt(r);
    }
    return n.set(e, t), (this.size = n.size), this;
  });
var an = (function () {
  try {
    var e = ht(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch (Rl) {}
})();
function un(e, t, n) {
  "__proto__" == t && an
    ? an(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var cn = Object.prototype.hasOwnProperty;
function ln(e, t, n) {
  var r = e[t];
  (cn.call(e, t) && vt(r, n) && (void 0 !== n || t in e)) || un(e, t, n);
}
function dn(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var a = t[s],
      u = r ? r(n[a], e[a], a, n, e) : void 0;
    void 0 === u && (u = e[a]), i ? un(n, a, u) : ln(n, a, u);
  }
  return n;
}
function hn(e) {
  return ze(e) && "[object Arguments]" == $e(e);
}
var fn = Object.prototype,
  _n = fn.hasOwnProperty,
  pn = fn.propertyIsEnumerable,
  mn = hn(
    (function () {
      return arguments;
    })()
  )
    ? hn
    : function (e) {
        return ze(e) && _n.call(e, "callee") && !pn.call(e, "callee");
      },
  vn = "object" == typeof exports && exports && !exports.nodeType && exports,
  gn = vn && "object" == typeof module && module && !module.nodeType && module,
  yn = gn && gn.exports === vn ? Ve.Buffer : void 0,
  En =
    (yn ? yn.isBuffer : void 0) ||
    function () {
      return !1;
    },
  Tn = /^(?:0|[1-9]\d*)$/;
function Sn(e, t) {
  var n = typeof e;
  return (
    !!(t = null == t ? 9007199254740991 : t) &&
    ("number" == n || ("symbol" != n && Tn.test(e))) &&
    e > -1 &&
    e % 1 == 0 &&
    e < t
  );
}
function bn(e) {
  return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
}
var An = {};
function In(e) {
  return function (t) {
    return e(t);
  };
}
(An["[object Float32Array]"] =
  An["[object Float64Array]"] =
  An["[object Int8Array]"] =
  An["[object Int16Array]"] =
  An["[object Int32Array]"] =
  An["[object Uint8Array]"] =
  An["[object Uint8ClampedArray]"] =
  An["[object Uint16Array]"] =
  An["[object Uint32Array]"] =
    !0),
  (An["[object Arguments]"] =
    An["[object Array]"] =
    An["[object ArrayBuffer]"] =
    An["[object Boolean]"] =
    An["[object DataView]"] =
    An["[object Date]"] =
    An["[object Error]"] =
    An["[object Function]"] =
    An["[object Map]"] =
    An["[object Number]"] =
    An["[object Object]"] =
    An["[object RegExp]"] =
    An["[object Set]"] =
    An["[object String]"] =
    An["[object WeakMap]"] =
      !1);
var wn = "object" == typeof exports && exports && !exports.nodeType && exports,
  Rn = wn && "object" == typeof module && module && !module.nodeType && module,
  kn = Rn && Rn.exports === wn && je.process,
  Pn = (function () {
    try {
      return (
        (Rn && Rn.require && Rn.require("util").types) ||
        (kn && kn.binding && kn.binding("util"))
      );
    } catch (Rl) {}
  })(),
  Dn = Pn && Pn.isTypedArray,
  On = Dn
    ? In(Dn)
    : function (e) {
        return ze(e) && bn(e.length) && !!An[$e(e)];
      },
  Ln = Object.prototype.hasOwnProperty;
function Cn(e, t) {
  var n = Fe(e),
    r = !n && mn(e),
    i = !n && !r && En(e),
    s = !n && !r && !i && On(e),
    o = n || r || i || s,
    a = o
      ? (function (e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        })(e.length, String)
      : [],
    u = a.length;
  for (var c in e)
    (!t && !Ln.call(e, c)) ||
      (o &&
        ("length" == c ||
          (i && ("offset" == c || "parent" == c)) ||
          (s && ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
          Sn(c, u))) ||
      a.push(c);
  return a;
}
var Mn = Object.prototype;
function Nn(e) {
  var t = e && e.constructor;
  return e === (("function" == typeof t && t.prototype) || Mn);
}
function xn(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var Un = xn(Object.keys, Object),
  Fn = Object.prototype.hasOwnProperty;
function jn(e) {
  if (!Nn(e)) return Un(e);
  var t = [];
  for (var n in Object(e)) Fn.call(e, n) && "constructor" != n && t.push(n);
  return t;
}
function Bn(e) {
  return null != e && bn(e.length) && !tt(e);
}
function Vn(e) {
  return Bn(e) ? Cn(e) : jn(e);
}
var Hn = Object.prototype.hasOwnProperty;
function Xn(e) {
  return Bn(e)
    ? Cn(e, !0)
    : (function (e) {
        if (!et(e))
          return (function (e) {
            var t = [];
            if (null != e) for (var n in Object(e)) t.push(n);
            return t;
          })(e);
        var t = Nn(e),
          n = [];
        for (var r in e)
          ("constructor" != r || (!t && Hn.call(e, r))) && n.push(r);
        return n;
      })(e);
}
var qn = "object" == typeof exports && exports && !exports.nodeType && exports,
  Gn = qn && "object" == typeof module && module && !module.nodeType && module,
  Wn = Gn && Gn.exports === qn ? Ve.Buffer : void 0,
  Kn = Wn ? Wn.allocUnsafe : void 0;
function Yn(e, t) {
  if (t) return e.slice();
  var n = e.length,
    r = Kn ? Kn(n) : new e.constructor(n);
  return e.copy(r), r;
}
function $n(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
function zn() {
  return [];
}
var Qn = Object.prototype.propertyIsEnumerable,
  Jn = Object.getOwnPropertySymbols,
  Zn = Jn
    ? function (e) {
        return null == e
          ? []
          : ((e = Object(e)),
            (function (e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, i = 0, s = [];
                ++n < r;

              ) {
                var o = e[n];
                t(o) && (s[i++] = o);
              }
              return s;
            })(Jn(e), function (t) {
              return Qn.call(e, t);
            }));
      }
    : zn;
function er(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
  return e;
}
var tr = xn(Object.getPrototypeOf, Object),
  nr = Object.getOwnPropertySymbols
    ? function (e) {
        for (var t = []; e; ) er(t, Zn(e)), (e = tr(e));
        return t;
      }
    : zn;
function rr(e, t, n) {
  var r = t(e);
  return Fe(e) ? r : er(r, n(e));
}
function ir(e) {
  return rr(e, Vn, Zn);
}
function sr(e) {
  return rr(e, Xn, nr);
}
var or = ht(Ve, "DataView"),
  ar = ht(Ve, "Promise"),
  ur = ht(Ve, "Set"),
  cr = ht(Ve, "WeakMap"),
  lr = st(or),
  dr = st(Tt),
  hr = st(ar),
  fr = st(ur),
  _r = st(cr),
  pr = $e;
((or && "[object DataView]" != pr(new or(new ArrayBuffer(1)))) ||
  (Tt && "[object Map]" != pr(new Tt())) ||
  (ar && "[object Promise]" != pr(ar.resolve())) ||
  (ur && "[object Set]" != pr(new ur())) ||
  (cr && "[object WeakMap]" != pr(new cr()))) &&
  (pr = function (e) {
    var t = $e(e),
      n = "[object Object]" == t ? e.constructor : void 0,
      r = n ? st(n) : "";
    if (r)
      switch (r) {
        case lr:
          return "[object DataView]";
        case dr:
          return "[object Map]";
        case hr:
          return "[object Promise]";
        case fr:
          return "[object Set]";
        case _r:
          return "[object WeakMap]";
      }
    return t;
  });
var mr = pr,
  vr = Object.prototype.hasOwnProperty,
  gr = Ve.Uint8Array;
function yr(e) {
  var t = new e.constructor(e.byteLength);
  return new gr(t).set(new gr(e)), t;
}
var Er = /\w*$/,
  Tr = He ? He.prototype : void 0,
  Sr = Tr ? Tr.valueOf : void 0;
function br(e, t) {
  var n = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Ar = Object.create,
  Ir = (function () {
    function e() {}
    return function (t) {
      if (!et(t)) return {};
      if (Ar) return Ar(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })();
function wr(e) {
  return "function" != typeof e.constructor || Nn(e) ? {} : Ir(tr(e));
}
var Rr = Pn && Pn.isMap,
  kr = Rr
    ? In(Rr)
    : function (e) {
        return ze(e) && "[object Map]" == mr(e);
      },
  Pr = Pn && Pn.isSet,
  Dr = Pr
    ? In(Pr)
    : function (e) {
        return ze(e) && "[object Set]" == mr(e);
      },
  Or = {};
function Lr(e, t, n, r, i, s) {
  var o,
    a = 1 & t,
    u = 2 & t,
    c = 4 & t;
  if ((n && (o = i ? n(e, r, i, s) : n(e)), void 0 !== o)) return o;
  if (!et(e)) return e;
  var l = Fe(e);
  if (l) {
    if (
      ((o = (function (e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            vr.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      })(e)),
      !a)
    )
      return $n(e, o);
  } else {
    var d = mr(e),
      h = "[object Function]" == d || "[object GeneratorFunction]" == d;
    if (En(e)) return Yn(e, a);
    if ("[object Object]" == d || "[object Arguments]" == d || (h && !i)) {
      if (((o = u || h ? {} : wr(e)), !a))
        return u
          ? (function (e, t) {
              return dn(e, nr(e), t);
            })(
              e,
              (function (e, t) {
                return e && dn(t, Xn(t), e);
              })(o, e)
            )
          : (function (e, t) {
              return dn(e, Zn(e), t);
            })(
              e,
              (function (e, t) {
                return e && dn(t, Vn(t), e);
              })(o, e)
            );
    } else {
      if (!Or[d]) return i ? e : {};
      o = (function (e, t, n) {
        var r = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return yr(e);
          case "[object Boolean]":
          case "[object Date]":
            return new r(+e);
          case "[object DataView]":
            return (function (e, t) {
              var n = t ? yr(e.buffer) : e.buffer;
              return new e.constructor(n, e.byteOffset, e.byteLength);
            })(e, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return br(e, n);
          case "[object Map]":
            return new r();
          case "[object Number]":
          case "[object String]":
            return new r(e);
          case "[object RegExp]":
            return (function (e) {
              var t = new e.constructor(e.source, Er.exec(e));
              return (t.lastIndex = e.lastIndex), t;
            })(e);
          case "[object Set]":
            return new r();
          case "[object Symbol]":
            return (function (e) {
              return Sr ? Object(Sr.call(e)) : {};
            })(e);
        }
      })(e, d, a);
    }
  }
  s || (s = new on());
  var f = s.get(e);
  if (f) return f;
  s.set(e, o),
    Dr(e)
      ? e.forEach(function (r) {
          o.add(Lr(r, t, n, r, e, s));
        })
      : kr(e) &&
        e.forEach(function (r, i) {
          o.set(i, Lr(r, t, n, i, e, s));
        });
  var _ = c ? (u ? sr : ir) : u ? keysIn : Vn,
    p = l ? void 0 : _(e);
  return (
    (function (e, t) {
      for (
        var n = -1, r = null == e ? 0 : e.length;
        ++n < r && !1 !== t(e[n], n);

      );
    })(p || e, function (r, i) {
      p && (r = e[(i = r)]), ln(o, i, Lr(r, t, n, i, e, s));
    }),
    o
  );
}
function Cr(e) {
  return Lr(e, 5);
}
function Mr(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function Nr(e) {
  return e;
}
(Or["[object Arguments]"] =
  Or["[object Array]"] =
  Or["[object ArrayBuffer]"] =
  Or["[object DataView]"] =
  Or["[object Boolean]"] =
  Or["[object Date]"] =
  Or["[object Float32Array]"] =
  Or["[object Float64Array]"] =
  Or["[object Int8Array]"] =
  Or["[object Int16Array]"] =
  Or["[object Int32Array]"] =
  Or["[object Map]"] =
  Or["[object Number]"] =
  Or["[object Object]"] =
  Or["[object RegExp]"] =
  Or["[object Set]"] =
  Or["[object String]"] =
  Or["[object Symbol]"] =
  Or["[object Uint8Array]"] =
  Or["[object Uint8ClampedArray]"] =
  Or["[object Uint16Array]"] =
  Or["[object Uint32Array]"] =
    !0),
  (Or["[object Error]"] =
    Or["[object Function]"] =
    Or["[object WeakMap]"] =
      !1);
var xr = Math.max;
function Ur(e, t, n) {
  return (
    (t = xr(void 0 === t ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, i = -1, s = xr(r.length - t, 0), o = Array(s);
        ++i < s;

      )
        o[i] = r[t + i];
      i = -1;
      for (var a = Array(t + 1); ++i < t; ) a[i] = r[i];
      return (a[t] = n(o)), Mr(e, this, a);
    }
  );
}
function Fr(e) {
  return function () {
    return e;
  };
}
var jr = an
    ? function (e, t) {
        return an(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Fr(t),
          writable: !0,
        });
      }
    : Nr,
  Br = Date.now,
  Vr = (function (e) {
    var t = 0,
      n = 0;
    return function () {
      var r = Br(),
        i = 16 - (r - n);
      if (((n = r), i > 0)) {
        if (++t >= 800) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  })(jr);
function Hr(e, t) {
  return Vr(Ur(e, t, Nr), e + "");
}
function Xr(e, t, n) {
  ((void 0 === n || vt(e[t], n)) && (void 0 !== n || t in e)) || un(e, t, n);
}
var qr = function (e, t, n) {
    for (var r = -1, i = Object(e), s = n(e), o = s.length; o--; ) {
      var a = s[++r];
      if (!1 === t(i[a], a, i)) break;
    }
    return e;
  },
  Gr = Function.prototype,
  Wr = Object.prototype,
  Kr = Gr.toString,
  Yr = Wr.hasOwnProperty,
  $r = Kr.call(Object);
function zr(e) {
  if (!ze(e) || "[object Object]" != $e(e)) return !1;
  var t = tr(e);
  if (null === t) return !0;
  var n = Yr.call(t, "constructor") && t.constructor;
  return "function" == typeof n && n instanceof n && Kr.call(n) == $r;
}
function Qr(e, t) {
  if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t)
    return e[t];
}
function Jr(e, t, n, r, i) {
  e !== t &&
    qr(
      t,
      function (s, o) {
        if ((i || (i = new on()), et(s)))
          !(function (e, t, n, r, i, s, o) {
            var a = Qr(e, n),
              u = Qr(t, n),
              c = o.get(u);
            if (c) Xr(e, n, c);
            else {
              var l = s ? s(a, u, n + "", e, t, o) : void 0,
                d = void 0 === l;
              if (d) {
                var h = Fe(u),
                  f = !h && En(u),
                  _ = !h && !f && On(u);
                (l = u),
                  h || f || _
                    ? Fe(a)
                      ? (l = a)
                      : (function (e) {
                          return ze(e) && Bn(e);
                        })(a)
                      ? (l = $n(a))
                      : f
                      ? ((d = !1), (l = Yn(u, !0)))
                      : _
                      ? ((d = !1), (l = br(u, !0)))
                      : (l = [])
                    : zr(u) || mn(u)
                    ? ((l = a),
                      mn(a)
                        ? (l = (function (e) {
                            return dn(e, Xn(e));
                          })(a))
                        : (et(a) && !tt(a)) || (l = wr(u)))
                    : (d = !1);
              }
              d && (o.set(u, l), i(l, u, r, s, o), o.delete(u)), Xr(e, n, l);
            }
          })(e, t, o, n, Jr, r, i);
        else {
          var a = r ? r(Qr(e, o), s, o + "", e, t, i) : void 0;
          void 0 === a && (a = s), Xr(e, o, a);
        }
      },
      Xn
    );
}
function Zr(e, t, n, r, i, s) {
  return (
    et(e) && et(t) && (s.set(t, e), Jr(e, t, void 0, Zr, s), s.delete(t)), e
  );
}
function ei(e) {
  return Hr(function (t, n) {
    var r = -1,
      i = n.length,
      s = i > 1 ? n[i - 1] : void 0,
      o = i > 2 ? n[2] : void 0;
    for (
      s = e.length > 3 && "function" == typeof s ? (i--, s) : void 0,
        o &&
          (function (e, t, n) {
            if (!et(n)) return !1;
            var r = typeof t;
            return (
              !!("number" == r
                ? Bn(n) && Sn(t, n.length)
                : "string" == r && (t in n)) && vt(n[t], e)
            );
          })(n[0], n[1], o) &&
          ((s = i < 3 ? void 0 : s), (i = 1)),
        t = Object(t);
      ++r < i;

    ) {
      var a = n[r];
      a && e(t, a, r, s);
    }
    return t;
  });
}
var ti = ei(function (e, t, n, r) {
    Jr(e, t, n, r);
  }),
  ni = Hr(function (e) {
    return e.push(void 0, Zr), Mr(ti, void 0, e);
  });
let ri = (function () {
  function e(e) {
    (this._available = !1), (this._active = !1), (this._video = e), sn(this);
  }
  r(e, null, [
    {
      key: "displayName",
      get: function () {
        return "ExternalDisplay";
      },
    },
    {
      key: "supported",
      get: function () {
        return !1;
      },
    },
    {
      key: "supportedVideoTypes",
      get: function () {
        return [];
      },
    },
  ]);
  var t = e.prototype;
  return (
    (t.showPicker = function () {}),
    (t.getFile = function () {
      const e = this.constructor.displayName.replace("ExternalDisplay", "");
      if (this._video.externalDisplayFiles[e])
        return this._video.externalDisplayFiles[e];
      const t = this.constructor.supportedVideoTypes,
        n = this._video.files
          .filter((e) => -1 !== t.indexOf(e.mime))
          .sort((e, n) =>
            e.mime === n.mime
              ? e.priority - n.priority
              : t.indexOf(e.mime) - t.indexOf(n.mime)
          );
      if (!n.length)
        throw new Error(
          `No files available for ${this.constructor.displayName} external display.`
        );
      return n[0];
    }),
    r(e, [
      {
        key: "active",
        get: function () {
          return this._active;
        },
      },
      {
        key: "available",
        get: function () {
          return this._available;
        },
      },
      {
        key: "element",
        get: function () {
          return document.createElement("div");
        },
      },
    ]),
    e
  );
})();
const ii = {
    ABORT: "abort",
    CAN_PLAY: "canplay",
    CAN_PLAY_THROUGH: "canplaythrough",
    DURATION_CHANGE: "durationchange",
    EMPTIED: "emptied",
    ENDED: "ended",
    ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
    LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
    ERROR: "error",
    LOADED_DATA: "loadeddata",
    LOADED_METADATA: "loadedmetadata",
    LOAD_START: "loadstart",
    PAUSE: "pause",
    PLAY: "play",
    PLAYING: "playing",
    PROGRESS: "progress",
    RATE_CHANGE: "ratechange",
    RESIZE: "resize",
    SEEKED: "seeked",
    SEEKING: "seeking",
    STALLED: "stalled",
    SUSPEND: "suspend",
    TIME_UPDATE: "timeupdate",
    VOLUME_CHANGE: "volumechange",
    WAITING: "waiting",
    WEBKIT_BEGIN_FULLSCREEN: "webkitbeginfullscreen",
    WEBKIT_END_FULLSCREEN: "webkitendfullscreen",
    WEBKIT_PRESENTATION_MODE_CHANGED: "webkitpresentationmodechanged",
  },
  si = { ADD_TRACK: "addtrack", REMOVE_TRACK: "removetrack", CHANGE: "change" },
  oi = {
    AVAILABLE: "externaldisplayavailable",
    UNAVAILABLE: "externaldisplayunavailable",
    ACTIVATED: "externaldisplayactivated",
    DEACTIVATED: "externaldisplaydeactivated",
  },
  ai = {
    AIRPLAY_AVAILABLE: "available",
    AIRPLAY_UNAVAILABLE: "unavailable",
    AIRPLAY_ACTIVATED: "activated",
    AIRPLAY_DEACTIVATED: "deactivated",
  },
  ui = {
    SCANNER_CHANGE: "scannerchange",
    SCANNER_ERROR: "scannererror",
    FILE_ERROR: "fileerror",
    FILE_SRC_UPDATE: "filesrcupdate",
    DOWNLOAD_START: "downloadstart",
    DOWNLOAD_END: "downloadend",
    DOWNLOAD_ERROR: "downloaderror",
    DOWNLOAD_TIMEOUT: "downloadtimeout",
    DRM_AUTH_FAILURE: "drmauthfailure",
    DRM_AUTH_SUCCESS: "drmauthsuccess",
    DRM_FAILURE: "drmfailure",
    DRM_KEY_SWITCH: "drmkeyswitch",
    DRM_OUTPUT_RESTRICTED: "drmoutputrestricted",
    EME_UNSUPPORTED: "emeunsupported",
    CURRENT_FILE_CHANGE: "currentfilechange",
    MEDIA_URL_EXPIRED: "mediaurlexpired",
    MEDIA_URL_BAD_REQUEST: "mediaurlbadrequest",
    STREAM_CHANGE: "streamchange",
    STREAM_CHANGE_START: "streamchangestart",
    STREAM_UPDATED: "streamupdated",
    STREAM_BUFFER_START: "streambufferstart",
    STREAM_BUFFER_END: "streambufferend",
    AVAILABLE_STREAMS_CHANGED: "availablestreamschanged",
    MEDIA_CAPABILITY_STREAMS_UNSUPPORTED: "mediacapabilitystreamsunsupported",
    DROPPED_FRAMES: "droppedframes",
    BANDWIDTH: "bandwidth",
    STREAM_TARGET_CHANGE: "streamtargetchange",
    CUE_POINT: "cuepoint",
    BUFFER_OCCUPANCY: "bufferoccupancy",
    MANIFEST_TIMEOUT: "manifesttimeout",
    MANIFEST_LOADED: "manifestloaded",
    STREAMS_LOADED: "streamsloaded",
    TEXT_SRC_UPDATE: "texttracksrcupdate",
    TEXT_TRACKS_AVAILABLE: "texttracksavailable",
    AV_DURATION_MISMATCH: "avdurationmismatch",
    BUFFER_STARTED: "bufferstarted",
    BUFFER_ENDED: "bufferended",
    QUOTA_EXCEEDED_ERROR: "quotaexceedederror",
    CHAPTER_CUES_UPDATED: "chaptercuesupdated",
    APPEND_BUFFER_END: "appendbufferend",
    DROPPED_FRAME_PERCENT_EXCEEDED: "droppedframepercentexceeded",
    LOAD_SEGMENT_FAILED: "loadsegmentfailed",
    AUDIO_TRACK_CHANGED: "audiotrackchanged",
  },
  ci = {
    STREAM_ONLINE: "livestreamonline",
    STREAM_OFFLINE: "livestreamoffline",
    BUFFER_GAP_JUMP: "livebuffergapjump",
    BUFFER_GAP_JUMP_PREVENT: "livebuffergapjumpprevent",
    STALL_JUMP: "livestalljump",
    LATENCY_UPDATED: "latencyupdated",
  },
  li = {
    CAMERA_UPDATE: "cameraupdate",
    CAMERA_CHANGE: "camerachange",
    MOTION_START: "motionstart",
    MOTION_END: "motionend",
    SPATIAL_UNSUPPORTED: "spatialunsupported",
    WEBVR_ENTER: "entervr",
    WEBVR_EXIT: "exitvr",
    WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
    AMBISONIC_UNSUPPORTED: "ambisonicunsupported",
  },
  di = {
    MEDIASESSION_PLAY: "mediasessionplay",
    MEDIASESSION_PAUSE: "mediasessionpause",
    MEDIASESSION_SEEK_FORWARD: "mediasessionseekforward",
    MEDIASESSION_SEEK_BACKWARD: "mediasessionseekbackward",
  },
  hi = {
    BRAIN_ML_MODEL_ERR: "brainmlmodelerr",
    BRAIN_ML_MODEL_NET_ERR: "brainmlmodelresperr",
    BRAIN_ML_MODEL_TIMEOUT: "brainmlmodeltimeout",
    BRAIN_ML_SWITCH_TO_SKYFIRE: "brainmlmodelswitchtoskyfire",
    BRAIN_ML_MODEL_INPUTS: "brainmlmodelinputs",
  },
  fi = Object.assign({}, ii, si, oi, ai, ui, li, ci, di, hi);
let _i = (function (e) {
  function t(t) {
    var n;
    return (
      ((n = e.call(this, t) || this)._videoElement =
        document.createElement("video")),
      n._videoElement.setAttribute("data-airplay", ""),
      n._videoElement.setAttribute("x-webkit-airplay", "allow"),
      n.addVideoEventListeners(),
      n
    );
  }
  a(t, e),
    r(t, null, [
      {
        key: "displayName",
        get: function () {
          return "AirPlayExternalDisplay";
        },
      },
      {
        key: "supported",
        get: function () {
          return "WebKitPlaybackTargetAvailabilityEvent" in window;
        },
      },
      {
        key: "supportedVideoTypes",
        get: function () {
          return ["application/vnd.apple.mpegurl", "video/mp4"];
        },
      },
    ]);
  var n = t.prototype;
  return (
    (n.addVideoEventListeners = function (e = this._videoElement) {
      e.addEventListener(ii.LOADED_METADATA, (e) => {
        this.fire(ii.LOADED_METADATA, e);
      }),
        e.addEventListener("webkitplaybacktargetavailabilitychanged", (e) => {
          switch (e.availability) {
            case "available":
              this._available ||
                ((this._available = !0), this.fire(ai.AIRPLAY_AVAILABLE));
              break;
            case "not-available":
              this._available &&
                ((this._available = !1), this.fire(ai.AIRPLAY_UNAVAILABLE));
          }
        }),
        e.addEventListener(
          "webkitcurrentplaybacktargetiswirelesschanged",
          (e) => {
            if (e.target.webkitCurrentPlaybackTargetIsWireless)
              return (this._active = !0), void this.fire(ai.AIRPLAY_ACTIVATED);
            (this._active = !1), this.fire(ai.AIRPLAY_DEACTIVATED);
          }
        );
    }),
    (n.showPicker = function () {
      this._videoElement.webkitShowPlaybackTargetPicker(),
        this.loadMetadata()
          .then(() => this._videoElement.webkitShowPlaybackTargetPicker())
          .catch(() => {});
    }),
    (n.loadMetadata = function () {
      return this._videoElement.readyState >= 1
        ? Promise.resolve()
        : new Promise((e, t) => {
            this._videoElement.addEventListener(ii.LOADED_METADATA, () => {
              e();
            }),
              (this._videoElement.src = this.getFile().src);
          });
    }),
    r(t, [
      {
        key: "element",
        get: function () {
          return this._videoElement;
        },
        set: function (e) {
          if (!(e instanceof HTMLVideoElement))
            throw new TypeError("The element for AirPlay must be a <video>.");
          e !== this._videoElement &&
            (this.addVideoEventListeners(e),
            (this._videoElement = e),
            this._videoElement.setAttribute("x-webkit-airplay", "allow"));
        },
      },
    ]),
    t
  );
})(ri);
const pi = (() => {
    const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./);
    return !!e && { major: parseInt(e[1], 10), minor: parseInt(e[2], 10) };
  })(),
  mi = function (e) {
    for (let t = 0, n = this.length; t < n; t++)
      if (this[t].id === `${e}`) return this[t];
    return null;
  };
function vi(e = []) {
  return (
    (e.item = function (e) {
      return this[e];
    }),
    (e.getTrackById = mi),
    e
  );
}
function gi() {
  return void 0 !== window.performance &&
    "function" == typeof window.performance.now
    ? window.performance.now()
    : Date.now();
}
function yi(e) {
  return gi() - e;
}
function Ei() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) =>
    (e ^ (((16 * Math.random()) >> e) / 4)).toString(16)
  );
}
function Ti(e) {
  const t = window.atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let i = 0; i < n; i++) r[i] = t.charCodeAt(i);
  return r;
}
function Si(e, t, n, r) {
  let i = 0,
    s = 0,
    o = 0,
    a = 0;
  const u = e,
    c = t,
    l = n / r;
  return (
    u / c >= l
      ? ((s = c), (i = (l * c).toFixed(2)))
      : ((i = u), (s = (u / l).toFixed(2))),
    (o = Math.max((u - i) / 2, 0)),
    (a = Math.max((c - s) / 2, 0)),
    { width: i, height: s, left: o, top: a }
  );
}
function bi(e) {
  const t = [
    document.fullscreenElement,
    document.webkitFullscreenElement,
    document.webkitCurrentFullScreenElement,
    document.mozFullScreenElement,
    document.msFullscreenElement,
  ].find((e) => void 0 !== e);
  return void 0 !== t ? !!t : e.webkitDisplayingFullscreen;
}
function Ai(e, t) {
  let n = e;
  return t && (n += `;codecs="${t}"`), n;
}
function Ii(e, t = 3) {
  if (((e = parseFloat(e)), isNaN(e))) return 0;
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
function wi(e, t) {
  return e && e.tests && e.tests[t] ? e.tests[t] : null;
}
function Ri(e) {
  return e && "ML" === e.displayName;
}
let ki = function (e, t) {
  (this.name = e), (this.message = t), Object.freeze(this);
};
const Pi = new WeakMap();
let Di = (function () {
  function e(e, t = {}) {
    const n = parseFloat(e);
    if (isNaN(n)) throw new TypeError("Time must be a number.");
    if (n < 0) throw new TypeError("Time must be a positive number.");
    (this.time = e), (this.data = t), (this.id = Ei());
    try {
      const n = "undefined" == typeof VTTCue ? TextTrackCue : VTTCue;
      (this.vttCue = new n(e, e + 0.25, JSON.stringify(t))),
        (this.vttCue.id = this.id);
    } catch (Rl) {
      throw new ki(
        "CuePointsNotSupported",
        "Cue points are not supported in this browser."
      );
    }
    Pi.set(this.vttCue, this), Object.freeze(this);
  }
  return (
    (e.fromVTTCue = function (t) {
      if (Pi.has(t)) return Pi.get(t);
      let n = {};
      try {
        n = JSON.parse(t.text);
      } catch (Rl) {}
      return new e(t.startTime, n);
    }),
    e
  );
})();
function Oi(e, t, n) {
  let r;
  try {
    document.removeChild({});
  } catch (Rl) {
    r = Object.create(Object.getPrototypeOf(Rl), {
      name: { value: t, configurable: !0, writable: !0 },
      code: { value: e, configurable: !0, writable: !0 },
      message: { value: n, configurable: !0, writable: !0 },
      toString: {
        value: () => `${t}: DOM Exception ${e}`,
        configurable: !0,
        writable: !0,
      },
    });
  }
  return Object.freeze(r);
}
const Li = (e, t) => {
  if (!e || void 0 === e[t]) throw Oi(1, "INDEX_SIZE_ERR");
  return e[t];
};
function Ci(e = [], t = []) {
  return Object.freeze({
    get length() {
      return e.length;
    },
    start: (t) => Li(e, t),
    end: (e) => Li(t, e),
    [Symbol.iterator]: () =>
      (function (e, t) {
        let n = 0;
        return {
          [Symbol.iterator]() {
            return this;
          },
          next: () =>
            n < e.length
              ? { done: !1, value: t ? [e[n], t[n++]] : e[n++] }
              : { done: !0 },
        };
      })(e, t),
  });
}
Ci.from = function (e) {
  if (!(e instanceof TimeRanges))
    throw new TypeError(
      "Can only create a TelecineTimeRange from a TimeRanges object."
    );
  const t = [],
    n = [];
  for (let r = 0, i = e.length; r < i; r++)
    t.push(e.start(r)), n.push(e.end(r));
  return Ci(t, n);
};
const Mi = "DRMFailure",
  Ni = "MediaUrlBadRequest",
  xi = "PlayInterrupted",
  Ui = "TextTracksNotSupported";
function Fi() {}
const ji = document.createElement("video"),
  Bi = {
    "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl",
    "video/mp4": 'video/mp4; codecs="avc1.64001E"',
    "video/webm": 'video/webm; codecs="vp8, vorbis"',
    "video/x-flv": 'video/x-flv; codecs="vp6"',
  },
  Vi = (function () {
    const e = "undefined" == typeof TextTrack ? {} : TextTrack;
    return {
      disabled: "DISABLED" in e ? e.DISABLED : "disabled",
      hidden: "HIDDEN" in e ? e.HIDDEN : "hidden",
      showing: "SHOWING" in e ? e.SHOWING : "showing",
    };
  })(),
  Hi = (function () {
    const e = document.createElement("track");
    return "track" in e && "oncuechange" in e.track;
  })(),
  Xi = new WeakMap();
let qi = (function () {
  function e(e, t = {}) {
    (this._element = e),
      (this._options = t),
      (this._telecineVideo = null),
      (this._currentFile = null),
      (this._externalDisplays = []),
      sn(this),
      this.on(ii.LOADED_METADATA, () => this._initMediaSessionHandlers()),
      this.on(ii.PLAY, () => this._initMediaSessionMetadata());
    let n = e.querySelector("video");
    n ||
      ((n = document.createElement("video")),
      (n.preload = "none"),
      this._element.appendChild(n)),
      n.setAttribute("tabindex", "-1"),
      (this._video = n),
      t.playRequest &&
        ((this._playRequest = t.playRequest), (this._playRequest.video = n)),
      t.htmlScanner && t.htmlScanner.controls && (this._video.controls = !0),
      (this._boundHandleVideoEvent = this.handleVideoEvent.bind(this)),
      (this._boundHandleAudioEvent = this.handleAudioEvent.bind(this)),
      this.addVideoEventListeners(),
      this.addAudioEventListeners(),
      (this._preload = "none"),
      (this._externalDisplayActivated = !1),
      (this._inFullscreen = !1),
      (this._lastCurrentTime = -1),
      (this._switchingVideo = !1);
  }
  r(e, null, [
    {
      key: "displayName",
      get: function () {
        return "HTMLScanner";
      },
    },
    {
      key: "supported",
      get: function () {
        return e.supportedVideoTypes.length > 0;
      },
    },
    {
      key: "supportedVideoTypes",
      get: function () {
        const e = [];
        if ("function" != typeof ji.canPlayType) return e;
        for (const t in Bi) {
          const n = Bi[t];
          (Le.android && "application/vnd.apple.mpegurl" === t) ||
            (Le.android &&
            !Le.mobileAndroid &&
            "video/mp4" === t &&
            Le.android instanceof String
              ? parseInt(Le.android.split(".")[0], 10) > 3 && e.push(t)
              : ji.canPlayType(n).replace(/^no$/, "") && e.push(t));
        }
        return e;
      },
    },
    {
      key: "supportedAudioTypes",
      get: function () {
        return [];
      },
    },
    {
      key: "supportedExternalDisplays",
      get: function () {
        return [_i];
      },
    },
    {
      key: "supportsSettingVolume",
      get: function () {
        if (Le.android || Le.iOS || Le.iPadOS) return !1;
        const e = ji.volume;
        return (ji.volume = 0.5 * e), ji.volume !== e;
      },
    },
    {
      key: "supportsTextTracks",
      get: function () {
        return (
          void 0 !== ji.textTracks && ji.textTracks instanceof TextTrackList
        );
      },
    },
    {
      key: "supportsVideoElementAudioTracks",
      get: function () {
        return (
          void 0 !== ji.audioTracks &&
          this.supportedVideoTypes.includes("application/vnd.apple.mpegurl")
        );
      },
    },
  ]);
  var t = e.prototype;
  return (
    (t.deactivate = function () {
      this._telecineVideo &&
        (this._telecineVideo.off("filesrcupdate"),
        this._telecineVideo.off("texttracksrcupdate")),
        this.removeVideoEventListeners(),
        this.removeAudioEventListeners(),
        this._switchingVideo || this.removeSnapshot(),
        (this._video.style.display = "none");
    }),
    (t.reactivate = function () {
      this.addVideoEventListeners(),
        this.addAudioEventListeners(),
        (this._video.style.display = "");
    }),
    (t.addVideoEventListeners = function (e = this._video) {
      Object.keys(ii).forEach((t) => {
        const n = ii[t];
        e.addEventListener(n, this._boundHandleVideoEvent);
      });
    }),
    (t.addAudioEventListeners = function (e = this._video) {
      var t;
      (null == e ? void 0 : e.audioTracks) &&
        "function" ==
          typeof (null == (t = e.audioTracks) ? void 0 : t.addEventListener) &&
        (e.audioTracks.addEventListener(
          si.ADD_TRACK,
          this._boundHandleAudioEvent
        ),
        e.audioTracks.addEventListener(
          si.REMOVE_TRACK,
          this._boundHandleAudioEvent
        ),
        e.audioTracks.addEventListener(si.CHANGE, this._boundHandleAudioEvent));
    }),
    (t.removeVideoEventListeners = function (e = this._video) {
      Object.keys(ii).forEach((t) => {
        const n = ii[t];
        e.removeEventListener(n, this._boundHandleVideoEvent);
      });
    }),
    (t.removeAudioEventListeners = function (e = this._video) {
      var t;
      (null == e ? void 0 : e.audioTracks) &&
        "function" ==
          typeof (null == (t = e.audioTracks)
            ? void 0
            : t.removeEventListener) &&
        (e.audioTracks.removeEventListener(
          si.ADD_TRACK,
          this._boundHandleAudioEvent
        ),
        e.audioTracks.removeEventListener(
          si.REMOVE_TRACK,
          this._boundHandleAudioEvent
        ),
        e.audioTracks.removeEventListener(
          si.CHANGE,
          this._boundHandleAudioEvent
        ));
    }),
    (t.play = function (e) {
      return this._playRequest.start(e).catch((e) => {
        throw (this._onPlayError(e), e);
      });
    }),
    (t._onPlayError = function (e) {
      this.fire(
        ii.ERROR,
        new ki(null == e ? void 0 : e.name, null == e ? void 0 : e.message)
      );
    }),
    (t.pause = function () {
      this._playRequest.cancel(), this._video.pause();
    }),
    (t.onpause = function () {}),
    (t.ontimeupdate = function () {
      this._lastCurrentTime = this.currentTime;
    }),
    (t.addTextTrack = function (e) {
      let t, n;
      e.src
        ? ((t = document.createElement("track")),
          (t.kind = e.kind),
          (t.src = e.src),
          (t.id = `telecine-track-${e.id}`),
          (t.srclang = e.language),
          (t.label = e.label),
          this._video.appendChild(t),
          (n = t.track))
        : ((n = this._video.addTextTrack(e.kind, e.label, e.language)),
          (this._textTracks = this._textTracks || {}),
          (this._textTracks[`telecine-track-${e.id}`] = n)),
        n.addEventListener("cuechange", () => e.dispatchEvent("cuechange")),
        this._video.addEventListener("timeupdate", () => {
          bi(this._video) && (e.mode = n.mode);
        });
      const r = () => {
          const t = Le.iOS && bi(this._video);
          !e._modeHasBeenSet || t ? (e.mode = n.mode) : (n.mode = Vi[e.mode]);
        },
        i = [];
      if (
        (t ? t.addEventListener("load", r) : r(),
        ["loadeddata", "seeking"].forEach((e) => {
          this._video.addEventListener(e, r), i.push([e, r]);
        }),
        e._modeHasBeenSet && (n.mode = Vi[e.mode]),
        !Hi)
      ) {
        let t = [];
        const r = () => {
          if (n && "disabled" !== Vi[n.mode]) {
            if (t.length !== n.activeCues.length)
              return (
                e.dispatchEvent("cuechange"),
                void (t = Array.from(n.activeCues))
              );
            for (let r = 0, i = n.activeCues.length; r < i; r++)
              if (n.activeCues[r].startTime !== t[r].startTime)
                return (
                  e.dispatchEvent("cuechange"),
                  void (t = Array.from(n.activeCues))
                );
          }
        };
        this._video.addEventListener("timeupdate", r),
          i.push(["timeupdate", r]);
      }
      return Xi.set(e, i), n;
    }),
    (t.removeTextTrack = function (e) {
      const t = this._video.querySelector(`#telecine-track-${e.id}`);
      t && this._video.removeChild(t);
      const n = Xi.get(e);
      Array.isArray(n) &&
        n.forEach(([e, t]) => {
          this._video.removeEventListener(e, t);
        });
    }),
    (t.getCuesForTrack = function (e) {
      const t = this.getTrackById(`telecine-track-${e.id}`);
      return t ? Array.from(t.cues) : [];
    }),
    (t.getActiveCuesForTrack = function (e) {
      const t = this.getTrackById(`telecine-track-${e.id}`);
      return t && t.activeCues ? Array.from(t.activeCues) : [];
    }),
    (t.setModeForTrack = function (e, t) {
      const n = this.getTrackById(`telecine-track-${e.id}`);
      return (
        n &&
          n.mode !== Vi[t] &&
          ((n.mode = Vi[t]),
          Hi || "disabled" === t || e.dispatchEvent("cuechange")),
        this
      );
    }),
    (t.setSrcForTrack = function (e, t) {
      const n = this._video.querySelector(`#telecine-track-${e.id}`);
      return n && null === n.track.cues && (n.src = t), this;
    }),
    (t.enableAudioTrack = function (e) {
      if (
        !this.constructor.supportsVideoElementAudioTracks ||
        !this.audioTracks
      )
        return null;
      if (!e) return null;
      if (!this.audioTracks.getTrackById(e)) return null;
      let t = null;
      for (let n = 0; n < this.audioTracks.length; n++) {
        const r = this.audioTracks[n].id === e;
        (this.audioTracks[n].enabled = r), r && (t = this.audioTracks[n]);
      }
      return t;
    }),
    (t._createChapterCue = function (e, t, n = null) {
      let r;
      this._chaptersTrack ||
        ((this._chaptersTrack = this._video.addTextTrack("chapters")),
        (this._chaptersTrack.mode = "hidden"));
      const i = e.timecode,
        s = n ? n.timecode : t,
        o = window.VTTCue || window.TextTrackCue;
      try {
        r = new o(i, s, e.title);
      } catch (Rl) {
        throw new ki(
          "ChaptersNotSupported",
          "Chapters are not supported in this browser."
        );
      }
      (r.size = (s - i) / t), (r.id = i), this._chaptersTrack.addCue(r);
    }),
    (t.addChapter = function (e, t) {
      const n = this.video.chapters,
        r = { timecode: e, title: t };
      n.push(r), n.sort((e, t) => e.timecode - t.timecode);
      const i = n[n.indexOf(r) + 1];
      this._createChapterCue(r, this.video.duration, i),
        this._updateChapterCues(this._chaptersTrack, this.video.duration);
    }),
    (t.removeChapter = function (e) {
      try {
        this._chaptersTrack.removeCue(e);
      } catch (Rl) {
        throw new ki(
          "ChaptersNotSupported",
          "Chapters are not supported in this browser."
        );
      }
      const t = this.video.chapters.find((t) => t.timecode === e.timecode);
      this.video.chapters.splice(t, 1),
        this._updateChapterCues(this._chaptersTrack, this.video.duration);
    }),
    (t._updateChapterCues = function (e, t) {
      for (let n = 0; n < e.cues.length; n++) {
        let r = e.cues[n],
          i = e.cues[n + 1];
        const s = i ? i.startTime : t;
        (r.endTime = s), (r.size = (s - r.startTime) / t);
      }
      this.fire(ui.CHAPTER_CUES_UPDATED);
    }),
    (t.addChapters = function (e, t) {
      0 !== e.length &&
        t &&
        (e = e.filter((e) => this._isValidChapter(e, t)))
          .sort((e, t) => e.timecode - t.timecode)
          .forEach((n, r) => this._createChapterCue(n, t, e[r + 1]));
    }),
    (t.addCuePoint = function (e, t = {}) {
      if (
        (this._cuePointTrack ||
          ((this._cuePointTrack = this._video.addTextTrack("metadata")),
          (this._cuePointTrack.mode = "hidden"),
          this._cuePointTrack.addEventListener("cuechange", (e) => {
            Array.from(e.target.activeCues).forEach((e) => {
              this.fire(ui.CUE_POINT, Di.fromVTTCue(e));
            });
          }),
          this._video.addEventListener("canplay", (e) => {
            this._cuePointTrack.mode = "hidden";
          })),
        (e = parseFloat(e)),
        isNaN(e))
      )
        throw new TypeError("Time must be a number.");
      if (e < 0 || e >= this.duration)
        throw new TypeError(
          "Time must be a positive number less than the duration of the video."
        );
      const n = new Di(e, t);
      return this._cuePointTrack.addCue(n.vttCue), n;
    }),
    (t.removeCuePoint = function (e) {
      if (!e)
        throw new ki(
          "InvalidCuePoint",
          "The specified cue point is not valid."
        );
      return this._cuePointTrack.removeCue(e.vttCue), !0;
    }),
    (t.removeAllCuePoints = function () {
      return (
        this._cuePointTrack &&
          this._cuePointTrack.length &&
          Array.from(this._cuePointTrack.cues).forEach((e) => {
            this._cuePointTrack.removeCue(e);
          }),
        !0
      );
    }),
    (t.requestPictureInPicture = function () {
      try {
        const e = this;
        return (function (t, n) {
          var r = (function () {
            if (e._video.readyState < 1)
              return (function (e, t) {
                return e && e.then ? e.then(Fi) : Promise.resolve();
              })(e._initPreload());
          })();
          return r && r.then ? r.then(n) : n();
        })(0, function () {
          switch (e.pictureInPictureSupportType) {
            case "pip-api":
              return e._video.requestPictureInPicture();
            case "webkit-presentation-mode":
              return e._video.webkitSetPresentationMode("picture-in-picture");
            default:
              throw new Error(
                "Picture-in-picture is not supported by this browser"
              );
          }
        });
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (t._initPreload = function () {
      return (
        (this.preload = "auto"),
        new Promise((e) => {
          this.once(ii.LOADED_METADATA, e);
        })
      );
    }),
    (t.exitPictureInPicture = function () {
      try {
        const e = this;
        switch (e.pictureInPictureSupportType) {
          case "pip-api":
            return document.exitPictureInPicture();
          case "webkit-presentation-mode":
            return e._video.webkitSetPresentationMode("inline");
          default:
            throw new Error(
              "Picture-in-picture is not supported by this browser"
            );
        }
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (t.onerror = function () {
      if (!this._video.error) return !1;
      switch (this._video.error.code) {
        case this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          return (
            this._fireVideoError(
              "MediaSrcNotSupportedError",
              "The media was not suitable."
            ),
            this._switchToNextFile(),
            !1
          );
        case this._video.error.MEDIA_ERR_DECODE:
          return -1 !== this._lastCurrentTime && Le.iOS
            ? (this._video.load(),
              (this.currentTime = this._lastCurrentTime),
              (this._lastCurrentTime = -1),
              !1)
            : (this._fireVideoError(
                "MediaDecodeError",
                "The media could not be decoded."
              ),
              this._switchToNextFile(),
              !1);
        case this._video.error.MEDIA_ERR_NETWORK:
          return (
            this._fireVideoError(
              "MediaNetworkError",
              "A network error ocurred while fetching the media."
            ),
            !1
          );
        case this._video.error.MEDIA_ERR_ABORTED:
          return (
            this._fireVideoError(
              "MediaAbortedError",
              "The user agent aborted the fetching of the media."
            ),
            !1
          );
        default:
          return (
            this._fireVideoError(
              "MediaUnknownError",
              "An unknown error occurred."
            ),
            !1
          );
      }
    }),
    (t._fireVideoError = function (e, t) {
      this.fire(ii.ERROR, new ki(e, t));
    }),
    (t.onended = function () {
      if (
        (this._video.paused || this._video.pause(),
        this.currentTime < this._video.duration)
      )
        return !1;
    }),
    (t.onwaiting = function () {
      return !1;
    }),
    (t.onwebkitbeginfullscreen = function () {
      this._inFullscreen = !0;
    }),
    (t.onwebkitendfullscreen = function () {
      this._inFullscreen = !1;
    }),
    (t.onwebkitpresentationmodechanged = function () {
      this.fire(
        this.pictureInPictureActive
          ? ii.ENTER_PICTURE_IN_PICTURE
          : ii.LEAVE_PICTURE_IN_PICTURE
      );
    }),
    (t.shouldHandleVideoEvent = function (e) {
      return !0;
    }),
    (t.handleVideoEvent = function (e) {
      e.target === this._video &&
        !1 !== this.shouldHandleVideoEvent(e) &&
        (("function" == typeof this[`on${e.type}`] &&
          !1 === this[`on${e.type}`](e)) ||
          this.fire(e.type));
    }),
    (t.handleAudioEvent = function () {
      this.fire(ui.AUDIO_TRACK_CHANGED);
    }),
    (t.swapVideo = function (e, t) {
      const n = e.paused;
      this.removeVideoEventListeners(e),
        this.removeAudioEventListeners(e),
        e.parentElement.replaceChild(t, e),
        e.pause(),
        (t.currentTime = e.currentTime),
        n || t.play(),
        this.addVideoEventListeners(t),
        this.addAudioEventListeners(t),
        (this._video = t);
    }),
    (t.onexternaldisplayactivated = function (e) {
      this._externalDisplayActivated ||
        (this._video !== e.element &&
          ((this._originalVideo = this._video),
          this.swapVideo(this._video, e.element)),
        (this._externalDisplayActivated = !0));
    }),
    (t.onexternaldisplaydeactivated = function (e) {
      this._externalDisplayActivated &&
        (this._originalVideo &&
          (this.swapVideo(e.element, this._originalVideo),
          (this._originalVideo = null)),
        (this._externalDisplayActivated = !1));
    }),
    (t.setVideoSrc = function (e) {
      this._video.src = e;
    }),
    (t.canSeekTo = function (e) {
      const t = this.duration;
      if ((t && e > t && (e = t), this._video.seekable.length > 0))
        for (let n = 0, r = this._video.seekable.length; n < r; n++)
          if (
            this._video.seekable.start(n) <= e &&
            this._video.seekable.end(n) >= e
          )
            return !0;
      return !1;
    }),
    (t.seekToTime = function (e) {
      return this.canSeekTo(e)
        ? ((this._video.currentTime = e),
          Promise.resolve(this._video.currentTime))
        : new Promise((t, n) => {
            const r = () => {
              this.canSeekTo(e) &&
                (Object.keys(ii).forEach((e) => {
                  const t = ii[e];
                  this._video.removeEventListener(t, r);
                }),
                (this._video.currentTime = e),
                t(this._video.currentTime));
            };
            Object.keys(ii).forEach((e) => {
              const t = ii[e];
              this._video.addEventListener(t, r);
            });
          });
    }),
    (t.takeSnapshot = function () {
      let e = this._element.querySelector("[telecine-snapshot]");
      e ||
        ((e = document.createElement("canvas")),
        e.setAttribute("telecine-snapshot", ""),
        this._element.appendChild(e)),
        e.setAttribute("width", `${this._element.clientWidth}px`),
        e.setAttribute("height", `${this._element.clientHeight}px`),
        (e.style.display = "");
      const {
        width: t,
        height: n,
        left: r,
        top: i,
      } = Si(
        this._video.clientWidth,
        this._video.clientHeight,
        this._video.videoWidth,
        this._video.videoHeight
      );
      e.style.cssText = `position:absolute;width:${t}px;height:${n}px;left:${r}px;top:${i}px`;
      const s = e.getContext("2d");
      e.width > 0 &&
        e.height > 0 &&
        s.drawImage(this._video, 0, 0, e.width, e.height);
    }),
    (t.removeSnapshot = function () {
      const e = this._element.querySelector("[telecine-snapshot]");
      e && (e.style.display = "none");
    }),
    (t.getTrackById = function (e) {
      if (this._textTracks && this._textTracks[e]) return this._textTracks[e];
      if ("function" == typeof this._video.textTracks.getTrackById)
        return this._video.textTracks.getTrackById(e);
      const t = document.getElementById(e);
      return t ? t.track : null;
    }),
    (t.initDrm = function () {
      const e = this._telecineVideo.drmHandler;
      e && e.init(this);
    }),
    (t.showExternalDisplayPicker = function (e) {
      if (!this._externalDisplays.length)
        throw new ki(
          "ExternalDisplayUnvailable",
          "No external displays are available."
        );
      if (!e) return void this._externalDisplays[0].showPicker();
      const t = this._externalDisplays.filter(
        (t) => t.constructor.displayName.replace("ExternalDisplay", "") === e
      )[0];
      if (!t)
        throw new ki(
          "InvalidExternalDisplay",
          "The specified external display is not available."
        );
      t.showPicker();
    }),
    (t._pickFile = function () {
      return this._files.length < 1
        ? null
        : this._files.slice(0).sort((e, t) => e.priority - t.priority)[0];
    }),
    (t._updateCurrentFile = function () {
      const e = this._pickFile();
      e
        ? (this.currentFile = e)
        : this.fire(ui.SCANNER_ERROR, { reason: "all files failed" });
    }),
    (t._isValidChapter = function (e, t) {
      return (
        void 0 !== e.timecode &&
        e.timecode >= 0 &&
        e.timecode <= t &&
        void 0 !== e.title
      );
    }),
    (t._switchToNextFile = function () {
      const e = this._files.indexOf(this._currentFile);
      this._files.splice(e, 1), this._updateCurrentFile();
    }),
    (t._initMediaSessionMetadata = function () {
      if (!("mediaSession" in navigator)) return;
      const e = {
        title: this._telecineVideo.title,
        artist: this._telecineVideo.subtitle,
        artwork: [],
      };
      this._telecineVideo.metadata.thumbnail &&
        e.artwork.push({ src: this._telecineVideo.metadata.thumbnail }),
        (navigator.mediaSession.metadata = new MediaMetadata(e));
    }),
    (t._initMediaSessionHandlers = function () {
      var e;
      "function" ==
        typeof (null == (e = navigator.mediaSession)
          ? void 0
          : e.setActionHandler) &&
        (navigator.mediaSession.setActionHandler("play", () => {
          this.play()
            .then(() => this.fire(di.MEDIASESSION_PLAY))
            .catch(this._onPlayError.bind(this));
        }),
        navigator.mediaSession.setActionHandler("pause", () => {
          this.pause(), this.fire(di.MEDIASESSION_PAUSE);
        }),
        navigator.mediaSession.setActionHandler("seekforward", () => {
          (this.currentTime = Math.min(this.duration, this.currentTime + 10)),
            this.fire(di.MEDIASESSION_SEEK_FORWARD);
        }),
        navigator.mediaSession.setActionHandler("seekbackward", () => {
          (this.currentTime = Math.max(0, this.currentTime - 10)),
            this.fire(di.MEDIASESSION_SEEK_BACKWARD);
        }));
    }),
    r(e, [
      {
        key: "audioTracks",
        get: function () {
          return this._video.audioTracks;
        },
      },
      {
        key: "chaptersTrack",
        get: function () {
          return this._chaptersTrack;
        },
      },
      {
        key: "manifest",
        get: function () {
          return this._manifest;
        },
      },
      {
        key: "manifestLoaded",
        get: function () {
          return !!this._manifest;
        },
      },
      {
        key: "buffered",
        get: function () {
          return Ci.from(this._video.buffered);
        },
      },
      {
        key: "cuePoints",
        get: function () {
          var e, t;
          return (null == (e = this._cuePointTrack) ? void 0 : e.cues) &&
            "function" ==
              typeof (null == (t = this._cuePointTrack)
                ? void 0
                : t.cues[Symbol.iterator])
            ? Array.from(this._cuePointTrack.cues).map((e) => Di.fromVTTCue(e))
            : [];
        },
      },
      {
        key: "currentFile",
        get: function () {
          return this._currentFile;
        },
        set: function (t) {
          const n = !this._video.paused,
            r = this.currentTime,
            i = !this._currentFile || t.video.id !== this._currentFile.video.id;
          if (
            (i || this.takeSnapshot(),
            (this._currentFile = t),
            i && (this._video.preload = this._preload),
            this.constructor === e &&
              this._video.readyState > 0 &&
              (this._video.currentTime = 0),
            (Le.iOS || Le.android) && this._currentFile.video.title)
          ) {
            let e = this._currentFile.video.title;
            this._currentFile.video.subtitle &&
              (e = `${e} ${this._currentFile.video.subtitle}`),
              this._video.setAttribute("title", e);
          } else this._video.removeAttribute("title");
          this.setVideoSrc(this._currentFile.src, i),
            this.fire(ui.CURRENT_FILE_CHANGE, t),
            Le.iOS && !i && this.play().catch(this._onPlayError.bind(this)),
            this.constructor !== e || i
              ? n && this.play().catch(this._onPlayError.bind(this))
              : (this.seekToTime(r)
                  .then(
                    (e) => (
                      n && this.play().catch(this._onPlayError.bind(this)), e
                    )
                  )
                  .catch(() => {}),
                this.once("canplay", () => this.removeSnapshot()),
                this.once("playing", () => this.removeSnapshot()));
        },
      },
      {
        key: "currentTime",
        get: function () {
          return this._video.currentTime;
        },
        set: function (e) {
          this.seekToTime(e);
        },
      },
      {
        key: "duration",
        get: function () {
          return this._video.duration;
        },
      },
      {
        key: "ended",
        get: function () {
          return this._video.ended;
        },
      },
      {
        key: "externalDisplayAvailable",
        get: function () {
          return this._externalDisplays.some((e) => e.available);
        },
      },
      {
        key: "externalDisplayActive",
        get: function () {
          return this._externalDisplays.some((e) => e.active);
        },
      },
      {
        key: "loop",
        get: function () {
          return this._video.loop;
        },
        set: function (e) {
          this._video.loop = e;
        },
      },
      {
        key: "isLowerProfileAvailable",
        get: function () {
          return null;
        },
      },
      {
        key: "muted",
        get: function () {
          return this._video.muted;
        },
        set: function (e) {
          this._video.muted = e;
        },
      },
      {
        key: "playsinline",
        get: function () {
          return this._video.playsinline;
        },
        set: function (e) {
          (this._video.playsinline = e),
            e
              ? this._video.setAttribute("playsinline", "")
              : this._video.removeAttribute("playsinline");
        },
      },
      {
        key: "paused",
        get: function () {
          return this._video.paused;
        },
      },
      {
        key: "defaultPlaybackRate",
        get: function () {
          return this._video.defaultPlaybackRate;
        },
        set: function (e) {
          this._video.defaultPlaybackRate = e;
        },
      },
      {
        key: "playbackRate",
        get: function () {
          return this._video.playbackRate;
        },
        set: function (e) {
          this._video.playbackRate = e;
        },
      },
      {
        key: "played",
        get: function () {
          return this._video.played;
        },
      },
      {
        key: "seekable",
        get: function () {
          return this._video.seekable;
        },
      },
      {
        key: "seeking",
        get: function () {
          return this._video.seeking;
        },
      },
      {
        key: "preload",
        get: function () {
          return this._preload;
        },
        set: function (e) {
          (this._video.preload = e), (this._preload = e);
        },
      },
      {
        key: "autoPictureInPicture",
        get: function () {
          return this._video.autoPictureInPicture;
        },
        set: function (e) {
          this._video.autoPictureInPicture = e;
        },
      },
      {
        key: "disablePictureInPicture",
        get: function () {
          return this._video.disablePictureInPicture;
        },
        set: function (e) {
          this._video.disablePictureInPicture = e;
        },
      },
      {
        key: "pictureInPictureActive",
        get: function () {
          return (
            "picture-in-picture" === this._video.webkitPresentationMode ||
            !!document.pictureInPictureElement
          );
        },
      },
      {
        key: "pictureInPictureEnabled",
        get: function () {
          if (this.disablePictureInPicture) return !1;
          switch (this.pictureInPictureSupportType) {
            case "pip-api":
              return document.pictureInPictureEnabled;
            case "webkit-presentation-mode":
              return !0;
            default:
              return !1;
          }
        },
      },
      {
        key: "pictureInPictureSupportType",
        get: function () {
          return "pictureInPictureEnabled" in document
            ? "pip-api"
            : !(
                "function" != typeof this._video.webkitSetPresentationMode ||
                !this._video.webkitSupportsPresentationMode(
                  "picture-in-picture"
                )
              ) && "webkit-presentation-mode";
        },
      },
      {
        key: "video",
        get: function () {
          return this._telecineVideo;
        },
        set: function (e) {
          if ((this.reactivate(), this._telecineVideo !== e)) {
            if (
              (this._telecineVideo &&
                (this._telecineVideo.off("filesrcupdate"),
                this._telecineVideo.off("texttracksrcupdate")),
              this.removeAllCuePoints(),
              (this._telecineVideo = e),
              (this._files = e.files.filter(
                (e) =>
                  -1 !== this.constructor.supportedVideoTypes.indexOf(e.mime)
              )),
              this._telecineVideo.on("filesrcupdate", (e) => {
                e === this._currentFile && this._updateCurrentFile();
              }),
              this._telecineVideo.on("texttracksrcupdate", (e) => {
                this.video.currentScanner &&
                  this.video.currentScanner.setSrcForTrack(e, e.src);
              }),
              this._options.externalDisplays &&
                this._options.externalDisplays.length)
            ) {
              this._externalDisplays = [];
              let t = this.constructor.supportedExternalDisplays;
              Array.isArray(t) || (t = []);
              const n = t.map((e) => e.displayName);
              this._options.externalDisplays
                .filter((e) => e.supported && -1 !== n.indexOf(e.displayName))
                .forEach((t) => {
                  const n = new t(e),
                    r = t.displayName.replace("ExternalDisplay", "");
                  n.on(ii.LOADED_METADATA, (e) =>
                    this.fire(ii.LOADED_METADATA, e)
                  ),
                    n.on("available", () =>
                      this.fire(oi.AVAILABLE, { type: r })
                    ),
                    n.on("unavailable", () =>
                      this.fire(oi.UNAVAILABLE, { type: r })
                    ),
                    n.on("activated", () => {
                      "function" == typeof this.onexternaldisplayactivated &&
                        this.onexternaldisplayactivated(n),
                        this.fire(oi.ACTIVATED, { type: r });
                    }),
                    n.on("deactivated", () => {
                      "function" == typeof this.onexternaldisplaydeactivated &&
                        this.onexternaldisplaydeactivated(n),
                        this.fire(oi.DEACTIVATED, { type: r });
                    }),
                    this._externalDisplays.push(n);
                });
            }
            this._updateCurrentFile(),
              Le.iOS &&
                this._externalDisplays.forEach((e) => {
                  "AirPlay" === e.constructor.displayName &&
                    (e.element = this._video);
                }),
              this.initDrm();
          }
        },
      },
      {
        key: "videoElement",
        get: function () {
          return this._video;
        },
      },
      {
        key: "videoWidth",
        get: function () {
          return this._video.videoWidth;
        },
      },
      {
        key: "videoHeight",
        get: function () {
          return this._video.videoHeight;
        },
      },
      {
        key: "volume",
        get: function () {
          return R(this._video.volume);
        },
        set: function (e) {
          this._video.volume = w(e);
        },
      },
      {
        key: "readyState",
        get: function () {
          return this._video.readyState;
        },
      },
      {
        key: "supportsPlaybackRate",
        get: function () {
          if (Le.android && pi && pi.major < 52) return !1;
          const e = ji.playbackRate;
          ji.playbackRate = 0.5 * e;
          const t = e !== ji.playbackRate;
          return (ji.playbackRate = e), t;
        },
      },
    ]),
    e
  );
})();
function Gi(e, t = []) {
  if (0 === e.length) return 0;
  let n = 0,
    r = 0;
  for (let i = 0; i < e.length; i++) {
    const s = t[i] || 1;
    (r += s), (n += e[i] * s);
  }
  return n / r;
}
function Wi(e) {
  e.sort((e, t) => e - t);
  const t = Math.floor(e.length / 2);
  return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2;
}
function Ki() {
  return "undefined" != typeof performance ? performance.now() : Date.now();
}
let Yi = (function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return a(t, e), t;
})(h(Error));
function $i() {}
const zi = [],
  Qi = [],
  Ji = [];
function Zi(e, t, n) {
  return n
    ? t
      ? t(e)
      : e
    : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
const es = [];
let ts = (function () {
    function t(e = {}) {
      const {
        retryCount: t = 3,
        parallel: n = 1,
        includeWithSpeeds: r = !0,
        timeout: i = 0,
        retryAbortErrors: s = !0,
      } = e;
      (this._queue = []),
        (this._activeRequests = new Set()),
        (this._retries = new WeakMap()),
        (this._retryCount = t),
        (this._running = !1),
        (this._processingQueue = !1),
        (this._parallel = n),
        (this._includeWithSpeeds = r),
        (this._timeout = i),
        (this._retryAbortErrors = s),
        this._initialize();
    }
    (t.getPercentileSpeed = function (e = 5, t = 0.8) {
      return (function (e, t) {
        if ((e.sort(), 0 === e.length)) return 0;
        if (t <= 0) return e[0];
        if (t >= 1) return e[e.length - 1];
        const n = e.length * t,
          r = Math.floor(n),
          i = r + 1,
          s = n % 1;
        return i >= e.length ? e[r] : e[r] * (1 - s) + e[i] * s;
      })(zi.slice(-e), t);
    }),
      (t.getAverageSpeed = function (e = 5, t = []) {
        return Gi(zi.slice(-e), t);
      }),
      (t.getHarmonicAverageSpeed = function (e = 5) {
        return (function (e) {
          if (0 === e.length) return 0;
          let t = 0;
          for (let n = 0; n < e.length; n++) t += 1 / e[n];
          return e.length / t;
        })(zi.slice(-e));
      }),
      (t.getVolatilityScaler = function (e = 5) {
        const t = zi.slice(-e);
        if (t.length < 3) return null;
        const n = Gi(t, []);
        return Math.min.apply(Math, p(t)) / n;
      }),
      (t.getMedianSpeed = function (e = 5) {
        return Wi(zi.slice(-e));
      }),
      (t.getResponseSpeeds = function () {
        return zi;
      }),
      (t.getProgressSpeeds = function () {
        return es;
      }),
      (t.getFailedSegments = function () {
        return Qi;
      }),
      (t.getSuccessfulSegments = function () {
        return Ji;
      });
    var n = t.prototype;
    return (
      (n.add = function (e, t) {
        return new Promise((n, r) => {
          const i = this._createSegmentInfo(e, n, r);
          this._addSegmentToQueue(i, t),
            this._running && !this._processingQueue && this._processQueue();
        });
      }),
      (n.start = function () {
        this._running || ((this._running = !0), this._processQueue());
      }),
      (n.stop = function () {
        this._running = !1;
      }),
      (n.abort = function (e = null) {
        this._queue
          .filter((t) => !e || e === t.stream)
          .forEach((e) => {
            e.reject(new Yi("Stream manually aborted")),
              this.fire("downloadabort", e.identifier);
          }),
          (this._queue = this._queue.filter((t) => e && e !== t.stream)),
          this._activeRequests.forEach((t) => {
            (e && e !== t.stream) || t.request.abort();
          });
      }),
      (n._insertAtPosition = function (e) {
        let t = 0;
        for (
          ;
          t < this._queue.length && !(this._queue[t].priority > e.priority);
          t++
        );
        this._queue.splice(t, 0, e);
      }),
      (n._initialize = function () {
        (this._pendingFetchMap = new WeakMap()),
          sn(this),
          window.addEventListener("online", () => {
            this.start(),
              this._waitUntilOnline &&
                (this._waitUntilOnline.resolve(),
                (this._waitUntilOnline = null));
          }),
          window.addEventListener("offline", () => {
            this.stop(), this.abort(), (this._waitUntilOnline = new P());
          });
      }),
      (n._addSegmentToQueue = function (e, t) {
        e.hasOwnProperty("priority")
          ? this._insertAtPosition(e)
          : this._queue[t ? "unshift" : "push"](e);
      }),
      (n._processQueue = function () {
        if (!this._running) return;
        this._processingQueue = !0;
        const e = this._parallel - this._activeRequests.size;
        for (let t = 0; t < e; t++) this._fetchOne();
      }),
      (n._createSegmentInfo = function (e, t, n) {
        let r = e;
        return (
          e.id && (r = e.id),
          o(o({}, e), {}, { identifier: r, resolve: t, reject: n })
        );
      }),
      (n._continueProcessingQueue = function () {
        0 !== this._activeRequests.size || 0 !== this._queue.length
          ? this._activeRequests.size < this._parallel && this._processQueue()
          : (this._processingQueue = !1);
      }),
      (n._fetchOne = function () {
        if (0 === this._queue.length) return void (this._processingQueue = !1);
        const t = this._queue.shift(),
          {
            url: n,
            byteRange: r,
            isInitSegmentRequest: i,
            identifier: s,
            timeout: o,
          } = t,
          a = {
            stream: t.stream,
            data: {
              url: n,
              isInitSegmentRequest: i,
              requestSendTime: Ki(),
              uuid: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                /[018]/g,
                (e) => (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
              ),
            },
          };
        let u = this._timeout;
        const c = parseInt(o, 10);
        c >= 0 && (u = c);
        const l = {
          url: n,
          type: e.SEGMENT,
          responseType: pe.ARRAY_BUFFER,
          retry: this._retryCount,
          hooks: { beforeRetry: [this._beforeRetry.bind(this)] },
          onDownloadProgress: this._makeOnDownloadProgress(s, a),
          headers: r && { Range: `bytes=${r}` },
          retryAbortErrors: this._retryAbortErrors,
          timeout: u,
        };
        this.fire("downloadstart", s),
          (a.request = ae(l)
            .then(this._makeOnRequestLoad(a, t))
            .catch(this._makeOnRequestError(a, t))),
          this._activeRequests.add(a);
      }),
      (n._beforeRetry = function () {
        try {
          const e = this;
          return (function (t) {
            var n = (function () {
              if (e._waitUntilOnline)
                return (function (e, t) {
                  return e && e.then ? e.then($i) : Promise.resolve();
                })(e._waitUntilOnline);
            })();
            if (n && n.then) return n.then($i);
          })();
        } catch (Rl) {
          return Promise.reject(Rl);
        }
      }),
      (n._makeOnDownloadProgress = function (e, t) {
        let n = 0,
          r = 0,
          i = Ki();
        return (s) => {
          if (s.lengthComputable) {
            const o = 8 * (s.loaded - r),
              a = Ki(),
              u = a - i,
              c = { startTime: i, length: u, bitrate: o / (u / 1e3), index: n };
            n > 0 && (es.length >= 100 && es.shift(), es.push(c)),
              (i = a),
              (r = s.loaded),
              (n += 1),
              this._pendingFetchMap.set(t, {
                bytesTotal: s.total,
                bytesLoaded: s.loaded,
                percent: s.loaded / s.total,
                identifier: e,
              }),
              this.fire("progress", e);
          }
        };
      }),
      (n._makeOnRequestLoad = function (e, t) {
        const n = this,
          r = Ki(),
          { identifier: i, resolve: s } = t;
        return (function (e) {
          return function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            try {
              return Promise.resolve(e.apply(this, t));
            } catch (Rl) {
              return Promise.reject(Rl);
            }
          };
        })(function (o) {
          let a = Ki() - r;
          return Zi(o.arrayBuffer(), function (r) {
            return (
              (e.data.duration = Ki() - e.data.requestSendTime),
              n._activeRequests.delete(e),
              n._pendingFetchMap.delete(e),
              n._saveResponseSpeeds(t, a, r.byteLength),
              n.fire("downloadend", i, { request: e, response: o }),
              Ji.push({
                url: e.data.url,
                status: 200,
                duration: e.data.duration,
              }),
              Zi(n._processBuffer(e, r), function (e) {
                s((r = e)), n._continueProcessingQueue();
              })
            );
          });
        });
      }),
      (n._saveResponseSpeeds = function (e, t, n) {
        const r = e.includeWithBandwidthChecks,
          i = t / 1e3;
        if (n > 8e3) {
          const t = 8 * n;
          let s = t / i;
          if (e.excludeConnectTime && t <= 16e5) {
            const e = (50 * Math.max(0, 1 - t / 16e5) + 150) / 1e3;
            s = t / Math.max(0.1, i - e);
          }
          zi.length > 100 && zi.shift(),
            this._includeWithSpeeds && r && zi.push(s);
        }
      }),
      (n._processBuffer = function (e, t) {
        return e.data.url && e.data.url.match(".ts$")
          ? this._feedMuxer(e, t)
          : Promise.resolve(new Uint8Array(t));
      }),
      (n._feedMuxer = function (e, t) {
        try {
          const n = this;
          return (function (e, t) {
            var r = (function () {
              if (!n._transmuxer)
                return Zi(n._loadMux(), function (e) {
                  n._transmuxer = new e({ keepOriginalTimestamps: !0 });
                });
            })();
            return r && r.then ? r.then(t) : t();
          })(0, function () {
            return new Promise((r) => {
              n._transmuxer.on("data", (t) => {
                n._transmuxer.off("data");
                let i = new Uint8Array(
                  t.initSegment.byteLength + t.data.byteLength
                );
                i.set(t.initSegment, 0),
                  i.set(t.data, t.initSegment.byteLength),
                  r(e.data.isInitSegmentRequest ? t.initSegment : i);
              }),
                n._transmuxer.push(new Uint8Array(t)),
                n._transmuxer.flush();
            });
          });
        } catch (Rl) {
          return Promise.reject(Rl);
        }
      }),
      (n._makeOnRequestError = function (e, t) {
        const { identifier: n, reject: r, size: i } = t;
        return (t) => {
          const s = Ki() - e.data.requestSendTime;
          if (((e.data.duration = s), t instanceof V))
            Qi.push({ url: e.data.url, status: "abort", duration: s }),
              this.fire("downloadabort", n);
          else if (t instanceof H)
            Qi.push({
              url: e.data.url,
              status: t.response.status,
              duration: s,
            }),
              this.fire("downloaderror", n, t.response.status);
          else if (t instanceof q) {
            if (
              (Qi.push({ url: e.data.url, status: "timeout", duration: s }),
              i > 0 && t.timeoutMs > 0)
            ) {
              let e = (8 * i) / (t.timeoutMs / 1e3);
              (e *= 0.5), zi.push(e);
            }
            this.fire("downloadtimeout", n, { timeoutMs: t.timeoutMs });
          }
          this._pendingFetchMap.delete(e),
            this._activeRequests.delete(e),
            r(t),
            this._continueProcessingQueue();
        };
      }),
      (n._loadMux = function () {
        return import("./mux-mp4.module.js").then(({ default: e }) => e);
      }),
      r(t, [
        {
          key: "parallel",
          get: function () {
            return this._parallel;
          },
          set: function (e) {
            this._parallel = e;
          },
        },
        {
          key: "pendingFetches",
          get: function () {
            const e = [];
            return (
              this._activeRequests.forEach((t) => {
                if (this._pendingFetchMap.get(t)) {
                  const n = this._pendingFetchMap.get(t);
                  (n.elapsedTime = Ki() - t.data.requestSendTime), e.push(n);
                }
              }),
              e
            );
          },
        },
      ]),
      t
    );
  })(),
  ns = (function () {
    function e(e) {
      sn(this),
        (this._sorcerer = e),
        (this._sourceBuffer = null),
        (this._activeStreamIndex = null),
        (this._needsStreamSwitch = !1),
        (this._needInitSegment = !0),
        (this._lastAppended = null),
        (this._toRemove = []),
        (this._streams = []),
        (this._quotaExceeded = !1),
        (this._quotaExceededTimer = null),
        (this._appendingFinalSegment = !1),
        (this._finalSegmentTime = void 0),
        (this._addingInitSegment = !1),
        (this._isFirstSegment = !0),
        (this._bufferState = {}),
        (this._boundHandleUpdateEnd = this._handleUpdateEnd.bind(this)),
        this._sorcerer.on("durationset", this._onDurationSet.bind(this));
    }
    var t = e.prototype;
    return (
      (t.addStream = function (e) {
        e.on("segmentadd", () => this._process());
        const t = this._streams.push(e) - 1;
        (e.index = t),
          null === this._activeStreamIndex &&
            (this._setActiveIndex(t), (this._needsStreamSwitch = !0));
      }),
      (t.streamIndexAtTime = function (e) {
        return this._bufferState[void 0]
          ? { stream: this.activeStreamIndex }
          : this._bufferState[Math.floor(e / 6)];
      }),
      (t.switchTo = function (e, t = !0, n = {}) {
        let r = e;
        "object" == typeof e && (r = e.index);
        let i = this._activeStreamIndex !== r;
        const s = i;
        if ((!i && this._needsStreamSwitch && (i = !0), i)) {
          this._needsStreamSwitch = !1;
          const e = this._activeStreamIndex,
            n = this._streams[e];
          this.fire("streamchangestart", e, r),
            n && s && t && n.abort(),
            (this._switchToIndex = r),
            this._setActiveIndex(r);
        }
        return (
          this._process(),
          new Promise((e) => {
            i
              ? (this._resolveSwitchComplete = () => {
                  this._switchToIndex === r &&
                    ((this._resolveSwitchComplete = null),
                    e(),
                    this.fire("streamchange", r, n));
                })
              : e();
          })
        );
      }),
      (t.isTimeInBuffer = function (e) {
        for (let t = 0; t < this._sourceBuffer.buffered.length; t++) {
          const n = this._sourceBuffer.buffered.start(t),
            r = this._sourceBuffer.buffered.end(t);
          if (n <= e && r >= e) return !0;
        }
        return !1;
      }),
      (t.hasAppendedFinalSegment = function () {
        return (
          void 0 !== this._finalSegmentTime &&
          this.isTimeInBuffer(this._finalSegmentTime)
        );
      }),
      (t.clear = function () {
        this._streams.forEach((e) => e.clear());
      }),
      (t.remove = function (e, t = this._sorcerer._mediaSource.duration) {
        return new Promise((n, r) => {
          this._toRemove.push([e, t, n]), this._process();
        });
      }),
      (t.removeEventListeners = function () {
        this._sourceBuffer &&
          this._sourceBuffer.removeEventListener(
            "updateend",
            this._boundHandleUpdateEnd
          );
      }),
      (t._onDurationSet = function () {
        const e = this._sorcerer._mediaSource.duration;
        let t = Math.floor(e / 6);
        t += 6 % e > 1 ? 1 : 0;
        for (let n = 0; n < t; n++)
          this._bufferState[n] = { stream: null, segment: n, type: "video" };
      }),
      (t._attachEvents = function () {
        this._sourceBuffer.addEventListener(
          "updateend",
          this._boundHandleUpdateEnd
        );
      }),
      (t._setActiveIndex = function (e) {
        (this._needInitSegment = !0),
          (this._activeStreamIndex = e),
          (this._sorcerer._frameDropper.streamIndex = e);
      }),
      (t._handleUpdateEnd = function () {
        this._checkEndOfStream(), this._updateBufferEnd(), this._process();
      }),
      (t._checkEndOfStream = function () {
        if (this._appendingFinalSegment && this.endTime)
          return (
            (this._appendingFinalSegment = !1),
            (this._finalSegmentTime = this.endTime),
            void this._sorcerer.checkEndOfStream()
          );
        !this.activeStream.hasNextSegment() &&
          this._finalSegmentTime > 0 &&
          "open" === this._sorcerer._mediaSource.readyState &&
          this._sorcerer.checkEndOfStream();
      }),
      (t._updateBufferEnd = function () {
        this._lastAppended &&
          (this.fire("appendbufferend", this._lastAppended),
          (this._lastAppended = null),
          this._resolveSwitchComplete && this._resolveSwitchComplete());
      }),
      (t._process = function () {
        if (this._sourceBuffer) {
          if (
            this.activeStream &&
            "closed" !== this._sorcerer._mediaSource.readyState &&
            !this._sourceBuffer.updating
          )
            if (this._toRemove.length) this._removeBuffer();
            else if (!this._quotaExceeded && !this._addingInitSegment)
              return this._needInitSegment
                ? ((this._needInitSegment = !1), void this._appendInitSegment())
                : void this._appendSegment();
        } else this.on("sourcebufferattach", this._process);
      }),
      (t._removeBuffer = function () {
        const [e, t, n] = this._toRemove.shift(),
          r = (e) => {
            this._sourceBuffer.removeEventListener("updateend", r),
              n(),
              clearTimeout(this._quotaExceededTimer),
              (this._quotaExceededTimer = setTimeout(() => {
                (this._quotaExceeded = !1), this._process();
              }, 5e3));
          };
        this._sourceBuffer.addEventListener("updateend", r),
          this._sourceBuffer.remove(e, t);
      }),
      (t._appendInitSegment = function () {
        (this._addingInitSegment = !0),
          this.activeStream
            .getInitSegment()
            .then(
              (e) => (
                (this._lastAppended = null),
                this._sourceBuffer.appendBuffer(e),
                (this._addingInitSegment = !1),
                e
              )
            )
            .catch((e) => {
              (this._needInitSegment = !0), (this._addingInitSegment = !1);
            });
      }),
      (t._appendSegment = function () {
        const e = this.activeStream.getNextSegment();
        if (null === e) return;
        const t = this.activeStream.getIdForSegment(e);
        this.activeStream.isFinal(e) && (this._appendingFinalSegment = !0),
          (this._lastAppended = t),
          this.fire("appendbufferstart", t);
        try {
          this._sourceBuffer.appendBuffer(e),
            (this._bufferState[t.segment] = t),
            this._isFirstSegment &&
              ((this._isFirstSegment = !1), this.fire("initialbufferstart"));
        } catch (Rl) {
          if ("QuotaExceededError" === Rl.name) {
            (this._quotaExceeded = !0),
              this.fire("quotaexceedederror", this._sourceBuffer.buffered);
            const t = 6;
            if (this._sorcerer._video.currentTime > t) {
              const e = 0,
                n = this._sorcerer._video.currentTime - t;
              this._sorcerer.removeBuffer(e, n);
            }
            this.activeStream._readyToAppend.unshift(e);
          }
        }
      }),
      r(e, [
        {
          key: "streams",
          get: function () {
            return this._streams;
          },
        },
        {
          key: "activeStreamIndex",
          get: function () {
            return this._activeStreamIndex;
          },
        },
        {
          key: "activeStream",
          get: function () {
            return this._streams[this._activeStreamIndex];
          },
        },
        {
          key: "sourceBuffer",
          get: function () {
            return this._sourceBuffer;
          },
          set: function (e) {
            (this._sourceBuffer = e),
              this._attachEvents(),
              this.fire("sourcebufferattach");
          },
        },
        {
          key: "endTime",
          get: function () {
            const e = this._sourceBuffer.buffered;
            if (e.length > 0) return e.end(e.length - 1);
          },
        },
      ]),
      e
    );
  })();
function rs() {}
let is = (function () {
    function e(e, t = "", n = new ts()) {
      sn(this),
        (this._readyToAppend = []),
        (this._initSegment = e),
        (this._needInitSegment = !0),
        (this._index = NaN),
        (this._codec = t),
        (this._fetcher = n),
        this._fetcher.start(),
        (this._bufferData = new WeakMap()),
        (this._segmentToId = {});
    }
    e.isValidSegmentUrl = function (e) {
      return (
        "string" == typeof e ||
        ("string" == typeof e.url && "string" == typeof e.byteRange)
      );
    };
    var t = e.prototype;
    return (
      (t.getIdForSegment = function (t) {
        return e.isValidSegmentUrl(t)
          ? this._segmentToId[t]
          : this._bufferData.get(t).id;
      }),
      (t.isFinal = function (e) {
        return this._bufferData.get(e).final;
      }),
      (t.addSegment = function (
        t,
        {
          identifier: n = null,
          isFinalSegment: r = !1,
          loadOnly: i = !1,
          priority: s = 0,
          includeWithBandwidthChecks: o = !0,
          excludeConnectTime: a = !1,
          timeout: u = null,
          size: c = null,
        } = {}
      ) {
        return (
          this._needInitSegment && this.getInitSegment(),
          e.isValidSegmentUrl(t)
            ? ((this._segmentToId[t] = n || t),
              this.fire("queued", this.getIdForSegment(t)),
              this._fetcher
                .add({
                  url: t.url || t,
                  byteRange: t.byteRange,
                  id: this.getIdForSegment(t),
                  stream: this,
                  includeWithBandwidthChecks: o,
                  excludeConnectTime: a,
                  isInitSegmentRequest: !1,
                  priority: s,
                  timeout: u,
                  size: c,
                })
                .then((e) => {
                  this._bufferData.set(e, { id: n || t, final: r }),
                    this._readyToAppend.push(e),
                    this.fire("bufferqueueadd", this.getIdForSegment(t)),
                    i || this.fire("segmentadd");
                }))
            : (this._bufferData.set(t, { id: n, final: r }),
              this._readyToAppend.push(t),
              this.fire("bufferqueueadd", n),
              Promise.resolve())
        );
      }),
      (t.clear = function () {
        this._readyToAppend = [];
      }),
      (t.abort = function () {
        try {
          const e = this;
          return (function (t, n) {
            var r = (function () {
              if (e._needInitSegment)
                return (function (e) {
                  if (e && e.then) return e.then(rs);
                })(
                  (function (t, n) {
                    try {
                      var r = (function (e, t) {
                        return e && e.then ? e.then(rs) : Promise.resolve();
                      })(e.getInitSegment());
                    } catch (Rl) {
                      return;
                    }
                    return r && r.then ? r.then(void 0, n) : r;
                  })(0, function (e) {})
                );
            })();
            return r && r.then ? r.then(n) : n();
          })(0, function () {
            e._fetcher.abort(e);
          });
        } catch (Rl) {
          return Promise.reject(Rl);
        }
      }),
      (t.hasNextSegment = function () {
        return this._readyToAppend.length > 0;
      }),
      (t.getNextSegment = function () {
        return 0 === this._readyToAppend.length
          ? null
          : this._readyToAppend.shift();
      }),
      (t.getInitSegment = function () {
        const t =
          "object" == typeof this._initSegment && "url" in this._initSegment
            ? this._initSegment.url
            : this._initSegment;
        return t
          ? ((this._needInitSegment = !1),
            e.isValidSegmentUrl(t)
              ? this._fetcher
                  .add({
                    url: t,
                    byteRange: this._initSegment.byteRange,
                    id: null,
                    stream: this,
                    isInitSegmentRequest: !0,
                    priority: 0,
                  })
                  .then((e) => ((this._initSegment = e), this._initSegment))
              : Promise.resolve(this._initSegment))
          : Promise.resolve(null);
      }),
      r(e, [
        {
          key: "codec",
          get: function () {
            return this._codec;
          },
          set: function (e) {
            this._codec = e;
          },
        },
        {
          key: "index",
          get: function () {
            return this._index;
          },
          set: function (e) {
            this._index = e;
          },
        },
        {
          key: "pendingFetches",
          get: function () {
            return this._fetcher.pendingFetches;
          },
        },
      ]),
      e
    );
  })(),
  ss = (function () {
    function e(e) {
      (this._video = e),
        (this._running = !1),
        (this._droppedFramesTimeout = null),
        (this._droppedFrameData = {}),
        (this._decodedFrameData = {}),
        (this._droppedFrames = 0),
        (this._decodedFrames = 0),
        (this._streamIndex = "default"),
        (this._attached = !1),
        (this.bound = {
          startCheckingDroppedFrames:
            this._startCheckingDroppedFrames.bind(this),
          stopCheckingDroppedFrames: this._stopCheckingDroppedFrames.bind(this),
          handleVisibilityChanged: this._handleVisibilityChanged.bind(this),
        });
    }
    var t = e.prototype;
    return (
      (t.init = function () {
        this._attachEvents();
      }),
      (t.start = function () {
        return this._startCheckingDroppedFrames(), this;
      }),
      (t.stop = function () {
        return this._stopCheckingDroppedFrames(), this;
      }),
      (t.destroy = function () {
        this._stopCheckingDroppedFrames(), this._removeEvents();
      }),
      (t.getDroppedFrameRate = function (e, t, n = "average") {
        const r = this._droppedFrameData[t];
        if (!r) return 0;
        if (r.length < e) return 0;
        const i = r.slice(-e);
        return "median" === n ? Wi(i) : Gi(i);
      }),
      (t.getDroppedFrameTotal = function () {
        return {
          dropped: this._getTotalDroppedFrames(),
          total: this._getTotalFrames(),
        };
      }),
      (t._attachEvents = function () {
        this._attached ||
          (this._video.addEventListener(
            "playing",
            this.bound.startCheckingDroppedFrames
          ),
          this._video.addEventListener(
            "pause",
            this.bound.stopCheckingDroppedFrames
          ),
          this._video.addEventListener(
            "ended",
            this.bound.stopCheckingDroppedFrames
          ),
          document.addEventListener(
            "visibilitychange",
            this.bound.handleVisibilityChanged
          ),
          (this._attached = !0));
      }),
      (t._removeEvents = function () {
        this._video.removeEventListener(
          "playing",
          this.bound.startCheckingDroppedFrames
        ),
          this._video.removeEventListener(
            "pause",
            this.bound.stopCheckingDroppedFrames
          ),
          this._video.removeEventListener(
            "ended",
            this.bound.stopCheckingDroppedFrames
          ),
          document.removeEventListener(
            "visibilitychange",
            this.bound.handleVisibilityChanged
          ),
          (this._attached = !1);
      }),
      (t._startCheckingDroppedFrames = function () {
        (this._running = !0), this._checkDroppedFrames();
      }),
      (t._stopCheckingDroppedFrames = function () {
        this._running = !1;
      }),
      (t._checkDroppedFrames = function () {
        if (!this._running || null === this._streamIndex) return;
        if (
          Le.browser.safari &&
          (document.hidden || "hidden" === document.visibilityState)
        )
          return;
        clearTimeout(this._droppedFramesTimeout);
        const e = this._getTotalDroppedFrames(),
          t = e - this._droppedFrames;
        this._droppedFrames = e;
        const n = this._getTotalDecodedFrames(),
          r = n - this._decodedFrames;
        (this._decodedFrames = n),
          this._droppedFrameData[this._streamIndex] ||
            (this._droppedFrameData[this._streamIndex] = []),
          this._decodedFrameData[this._streamIndex] ||
            (this._decodedFrameData[this._streamIndex] = []),
          this._droppedFrameData[this._streamIndex].length > 100 &&
            this._droppedFrameData[this._streamIndex].shift(),
          this._decodedFrameData[this._streamIndex].length > 100 &&
            this._decodedFrameData[this._streamIndex].shift(),
          this._droppedFrameData[this._streamIndex].push(t),
          this._decodedFrameData[this._streamIndex].push(r),
          (this._droppedFramesTimeout = setTimeout(() => {
            this._checkDroppedFrames();
          }, 1e3));
      }),
      (t._handleVisibilityChanged = function () {
        !Le.browser.safari ||
          (document.hidden && "hidden" === document.visibilityState) ||
          this._checkDroppedFrames();
      }),
      (t._getTotalDroppedFrames = function () {
        return "function" == typeof this._video.getVideoPlaybackQuality
          ? this._video.getVideoPlaybackQuality().droppedVideoFrames
          : this._video.webkitDroppedFrameCount || 0;
      }),
      (t._getTotalFrames = function () {
        return "function" == typeof this._video.getVideoPlaybackQuality
          ? this._video.getVideoPlaybackQuality().totalVideoFrames
          : this._video.webkitDecodedFrameCount || 0;
      }),
      (t._getTotalDecodedFrames = function () {
        if ("function" == typeof this._video.getVideoPlaybackQuality) {
          const e = this._video.getVideoPlaybackQuality();
          return (
            e.totalVideoFrames - e.droppedVideoFrames - e.corruptedVideoFrames
          );
        }
        return this._video.webkitDecodedFrameCount || 0;
      }),
      r(e, [
        {
          key: "streamIndex",
          get: function () {
            return this._streamIndex;
          },
          set: function (e) {
            this._streamIndex = e;
          },
        },
      ]),
      e
    );
  })(),
  os = (function () {
    function e(e, t = {}) {
      (this._video = e), (this._options = t), sn(this);
      const { fetcherTimeout: n = 0, fetcherRetryAbortErrors: r = !0 } =
        this._options;
      (this._frameDropper = new ss(e)),
        (this._mediaSource = new MediaSource()),
        (this._fetcher = new ts({
          parallel: 1,
          timeout: n,
          retryAbortErrors: r,
        })),
        (this._buffersForCodec = {}),
        (this._buffers = []),
        (this._readyPromiseResolve = null),
        (this._boundHandleSourceOpen = this._handleSourceOpen.bind(this)),
        this._attachEvents();
    }
    var t = e.prototype;
    return (
      (t.switchTo = function (e) {
        return 1 === this._buffers.length && this.video.switchTo(e);
      }),
      (t.getCurrentSpeed = function ({
        type: e = "average",
        howMany: t = 10,
        weights: n = [],
        percentile: r = null,
      } = {}) {
        return "harmonicAverage" === e
          ? ts.getHarmonicAverageSpeed(t)
          : "average" === e
          ? ts.getAverageSpeed(t, n)
          : "median" === e
          ? ts.getMedianSpeed(t)
          : ts.getPercentileSpeed(t, r);
      }),
      (t.getVolatilityScaler = function (e) {
        return ts.getVolatilityScaler(e);
      }),
      (t.getResponseSpeeds = function () {
        return ts.getResponseSpeeds();
      }),
      (t.getFailedSegments = function () {
        return ts.getFailedSegments();
      }),
      (t.getSuccessfulSegments = function () {
        return ts.getSuccessfulSegments();
      }),
      (t.getDroppedFrameRate = function (
        e,
        t = this.activeStreamIndex,
        n = "average"
      ) {
        return this._frameDropper.getDroppedFrameRate(e, t, n);
      }),
      (t.getDroppedFrameTotal = function () {
        return this._frameDropper.getDroppedFrameTotal();
      }),
      (t.clear = function () {
        this._buffers.forEach((e) => e.clear());
      }),
      (t.initFrameDropper = function () {
        this._frameDropper.init();
      }),
      (t.streamIndexAtTime = function (e, t) {
        return this._buffersForCodec[t].streamIndexAtTime(e)
          ? this._buffersForCodec[t].streamIndexAtTime(e).stream
          : null;
      }),
      (t.removeBuffer = function (e = 0, t = this._video.duration) {
        if (e >= (t = t || 0)) return Promise.resolve();
        const n = this._buffers.map((n) => n.remove(e, t));
        return Promise.all(n);
      }),
      (t.setLiveSeekableRange = function (e, t) {
        var n;
        "open" === this._mediaSource.readyState &&
          (null == (n = this._mediaSource) || n.setLiveSeekableRange(e, t));
      }),
      (t.addStream = function (e, t) {
        const n = this._getCodecType(e);
        if (!this._buffersForCodec[n]) {
          const t = new ns(this, n);
          (this._buffersForCodec[n] = t),
            this._buffers.push(t),
            this.readyPromise
              .then(() => {
                let r;
                try {
                  r = this._mediaSource.addSourceBuffer(e);
                } catch (Rl) {
                  if (22 !== Rl.code)
                    return void this.fire("srcnotsupported", Rl);
                  r = this._buffersForCodec[n];
                }
                if (this._options.duration) {
                  const e = 0.1;
                  r.appendWindowEnd = this._options.duration + e;
                }
                t.sourceBuffer = r;
              })
              .catch((e) => {}),
            [
              "appendbufferstart",
              "appendbufferend",
              "streamchange",
              "streamchangestart",
              "initialbufferstart",
              "quotaexceedederror",
            ].forEach((e) => {
              t.on(e, (t) => {
                this.fire(e, t);
              });
            });
        }
        const r = new is(t, e, this._fetcher);
        return (
          ["queued", "bufferqueueadd"].forEach((e) => {
            r.on(e, (t) => {
              this.fire(e, t);
            });
          }),
          this._buffersForCodec[n].addStream(r),
          r
        );
      }),
      (t.checkEndOfStream = function () {
        if (!this._buffers.every((e) => e.hasAppendedFinalSegment())) return;
        const e = () => {
          this._video.removeEventListener("timeupdate", e),
            this._buffers.every((e) =>
              e.isTimeInBuffer(this._video.currentTime)
            ) && this.endOfStream();
        };
        this._video.addEventListener("timeupdate", e);
      }),
      (t.abortFetches = function () {
        this._fetcher.abort();
      }),
      (t.endOfStream = function () {
        "open" === this._mediaSource.readyState &&
          (this._sourceBuffersAreUpdating() ||
            (this._mediaSource.endOfStream(), this.fire("endofstream")));
      }),
      (t.destroy = function () {
        this.clear(),
          this._removeEventListeners(),
          this.off(),
          this._frameDropper.destroy(),
          this._fetcher.abort(),
          this._video.src &&
            (this._video.removeAttribute("src"), this._video.load());
      }),
      (t._attachEvents = function () {
        (this.readyPromise = new Promise((e, t) => {
          (this._readyPromiseResolve = e),
            this._mediaSource.addEventListener(
              "sourceopen",
              this._boundHandleSourceOpen
            );
        })),
          [
            "downloadstart",
            "downloadend",
            "downloadabort",
            "downloaderror",
            "downloadtimeout",
            "progress",
          ].forEach((e) => {
            this._fetcher.on(e, (...t) => {
              this.fire.apply(this, [e].concat(t));
            });
          });
      }),
      (t._sourceBuffersAreUpdating = function () {
        for (let e = 0; e < this._mediaSource.sourceBuffers.length; e++)
          if (this._mediaSource.sourceBuffers[e].updating) return !0;
        return !1;
      }),
      (t._handleSourceOpen = function () {
        URL.revokeObjectURL(this._video.src),
          this._mediaSource.removeEventListener(
            "sourceopen",
            this._boundHandleSourceOpen
          ),
          this._options.duration &&
            ((this._mediaSource.duration = this._options.duration),
            this.fire("durationset")),
          this._readyPromiseResolve();
      }),
      (t._removeEventListeners = function () {
        this._buffers.forEach((e) => e.removeEventListeners());
      }),
      (t._getCodecType = function (e) {
        return 0 === e.indexOf("audio") ? "audio" : "video";
      }),
      r(e, [
        {
          key: "mediaSource",
          get: function () {
            return this._mediaSource;
          },
        },
        {
          key: "pendingFetches",
          get: function () {
            return this._fetcher.pendingFetches;
          },
        },
        {
          key: "streams",
          get: function () {
            return 1 === this._buffers.length && this.video.streams;
          },
        },
        {
          key: "activeStreamIndex",
          get: function () {
            return 1 === this._buffers.length && this.video.activeStreamIndex;
          },
        },
        {
          key: "video",
          get: function () {
            return !!this._buffersForCodec.video && this._buffersForCodec.video;
          },
        },
        {
          key: "audio",
          get: function () {
            return !!this._buffersForCodec.audio && this._buffersForCodec.audio;
          },
        },
      ]),
      e
    );
  })(),
  as = (function (e) {
    function t(t, n = {}) {
      var r;
      return (
        ((r = e.call(this, t) || this)._options = n),
        (r.blacklisted = []),
        (r.whitelisted = []),
        (r.MAX_LOADABLE_SEGMENTS_AUTO = 3),
        (r.MAX_LOADABLE_SEGMENTS_LOCKED = 15),
        (r.SEGMENT_DURATION = 6),
        r
      );
    }
    a(t, e),
      r(t, [
        {
          key: "displayName",
          get: function () {
            return "MediaSource";
          },
        },
      ]);
    var n = t.prototype;
    return (
      (n.isTimeInBuffer = function (e, t, n) {
        return this._timesAreInRange(e, e, t, n, 1);
      }),
      (n.getDistanceFromBuffer = function (e, t) {
        let n = e;
        for (let r = 0; r < t.length; r++)
          if (t.start(r) <= e && t.end(r) >= e) {
            n = t.end(r);
            break;
          }
        return n - e;
      }),
      (n.blacklist = function (e) {
        this.blacklisted[e] = 1;
      }),
      (n.lock = function (e = []) {
        this.whitelisted = e;
      }),
      (n.filterStreams = function (e, t, n, r = null) {
        const i = [];
        let s,
          o = !1;
        for (let a = 0; a < e.length; a++)
          if (s && s[0] === e[a].width && s[1] === e[a].height) i.push(e[a]);
          else {
            if (o) break;
            (this.blacklisted[a] && -1 === this.whitelisted.indexOf(a)) ||
              (this.whitelisted.length && -1 === this.whitelisted.indexOf(a)) ||
              (this.whitelisted.length
                ? i.push(e[a])
                : (this._getScaleFromDimensions(
                    t,
                    n,
                    e[a].width,
                    e[a].height,
                    r
                  ) >= (n < 1e3 / (window.devicePixelRatio || 1) ? 1.75 : 1) &&
                    (o = !0),
                  i.push(e[a]),
                  (s = [e[a].width, e[a].height])));
          }
        return i;
      }),
      (n.getCurrentSpeed = function () {
        let e = "average",
          t = 3,
          n = [1, 2, 5];
        return (
          this._options.tests &&
            this._options.tests.harmonic_average &&
            this._options.tests.harmonic_average.group &&
            ((e = "harmonicAverage"),
            (t = this._getMaxLoadableSegmentsAuto()),
            (n = [])),
          this.scanner.sorcerer.getCurrentSpeed({
            type: e,
            howMany: t,
            weights: n,
          })
        );
      }),
      (n.shouldUseSurroundSound = function (e, t) {
        return "240p" !== e[t].quality;
      }),
      (n.getAudioIndexFromVideo = function (e, t, n) {
        if (0 === t.length) return !1;
        if (!e[n]) return 0;
        const r = t.filter(({ channels: e }) => e > 2);
        if (r.length > 0 && this.shouldUseSurroundSound(e, n)) {
          const e = r[r.length - 1];
          return t.indexOf(e);
        }
        return t.length > 1 && 0 === n && e[n].height <= 360 && e.length > 1
          ? "mp4a.40.2" === t[0].codecs &&
            t[0].bitrate < 8e4 &&
            "240p" !== e[n].quality
            ? 1
            : 0
          : t.length - 1;
      }),
      (n._getVisibleDimensions = function (e, t, n, r) {
        const i = n / r,
          s = e - t * i,
          o = t - e / i;
        let a = e - s,
          u = t - o;
        return s > 0 && (u = t), o > 0 && (a = e), [a, u];
      }),
      (n._getScaleFromDimensions = function (e, t, n, r, i = null) {
        const s = this._getVisibleDimensions(e, t, n, r);
        let o = n * r;
        i && (o *= i);
        const a = window.devicePixelRatio || 1;
        return o / (s[0] * s[1] * a * a);
      }),
      (n._getMaxLoadableSegmentsAuto = function () {
        const e = wi(this._options, "lookahead_count");
        return e && e.group && e.data.count
          ? e.data.count
          : e && e.data.segment_lookahead_count
          ? e.data.segment_lookahead_count
          : this.MAX_LOADABLE_SEGMENTS_AUTO;
      }),
      (n._getSecondsToLoadAhead = function (e, t, n) {
        const r = n && n.bitrate > 11e6;
        return 1 === this.whitelisted.length
          ? r
            ? 30
            : this.MAX_LOADABLE_SEGMENTS_LOCKED * this.SEGMENT_DURATION
          : this._getMaxLoadableSegmentsAuto() * this.SEGMENT_DURATION;
      }),
      (n._timesAreInRange = function (e, t, n, r, i = 0) {
        if (!n) return !1;
        t = Math.min(t, r);
        for (let s = 0; s < n.length; s++) {
          const r = n.start(s),
            o = n.end(s),
            a = Ii(r) - i,
            u = Ii(o) + i;
          if (a <= e && u >= t) {
            if (t < r || e > o) continue;
            return !0;
          }
        }
        return !1;
      }),
      (n._hasSeparateStreams = function (e) {
        return e.video.length > 0 && e.audio.length > 0;
      }),
      (n._isSegmentInBuffer = function (e, t, n, r) {
        let i = 1;
        return (
          this._hasSeparateStreams(r) && (i = 0.05),
          this._timesAreInRange(e.start, e.end, t, n, i)
        );
      }),
      t
    );
  })(
    (function () {
      function e(e) {
        (this.scanner = e),
          (this.STREAM_TYPE_VIDEO = "video"),
          (this.STREAM_TYPE_AUDIO = "audio");
      }
      r(e, [
        {
          key: "displayName",
          get: function () {
            return "Brain";
          },
        },
      ]);
      var t = e.prototype;
      return (
        (t.destroy = function () {}),
        (t.shouldPowerUp = function (e, t) {
          return !1;
        }),
        (t.shouldPowerDown = function (e, t) {
          return !1;
        }),
        (t.canPowerUp = function (e, t) {
          return 1 !== e.length && t < e.length - 1;
        }),
        (t.canPowerDown = function (e, t) {
          return 1 !== e.length && t > 0;
        }),
        (t.filterStreams = function (e) {
          return e;
        }),
        e
      );
    })()
  );
let us = (function (e) {
    function t(t, n = {}) {
      var r;
      return (
        ((r = e.call(this, t, n) || this).BANDWIDTH_UPSWITCH_THRESHOLD = 0.85),
        (r.BANDWIDTH_DOWNSWITCH_THRESHOLD = 0.9),
        (r.DEFAULT_TIMEOUT = 8e3),
        (r.SEGMENT_RELATIVE_TIMEOUT_RATIO = 4 / 3),
        (r.MINIMUM_TIMEOUT = 1e3),
        (r.FRAME_DROP_WINDOW_SECONDS = 10),
        r
      );
    }
    a(t, e),
      r(t, [
        {
          key: "displayName",
          get: function () {
            return "Skyfire";
          },
        },
      ]);
    var n = t.prototype;
    return (
      (n.shouldPowerUp = function (e, t, n) {
        n &&
          this._options.startingBandwidthThreshold &&
          (this.BANDWIDTH_UPSWITCH_THRESHOLD =
            this._options.startingBandwidthThreshold);
        let r = e.indexOf(t);
        if ((-1 === r && (r = 0), !this.canPowerUp(e, r)))
          return Promise.resolve({ index: !1, reasonForSwitch: null });
        const i = this.getCurrentSpeed();
        if (!i) return Promise.resolve({ index: !1, reasonForSwitch: null });
        const s = this._getStreamFromSpeed(
          i,
          this.BANDWIDTH_UPSWITCH_THRESHOLD,
          e
        );
        return s === r ||
          (!n &&
            s > r &&
            D(this.scanner.currentTime, this.scanner._video.buffered) <
              1.5 * this.SEGMENT_DURATION)
          ? Promise.resolve({ index: !1, reasonForSwitch: null })
          : Promise.resolve({ index: s, reasonForSwitch: 3 });
      }),
      (n.shouldPowerDown = function (e, t) {
        const n = e.indexOf(t);
        if (-1 === n) {
          const t = this.isTimeInBuffer(
            this.scanner._video.duration,
            this.scanner._video.buffered,
            this.scanner._video.duration
          );
          return this.whitelisted.length || this.blacklisted.length || !t
            ? Promise.resolve({ index: e.length - 1, reasonForSwitch: 6 })
            : Promise.resolve({ index: !1, reasonForSwitch: null });
        }
        if (!this.canPowerDown(e, n))
          return Promise.resolve({ index: !1, reasonForSwitch: null });
        const r = this.getCurrentSpeed();
        if (!r) return Promise.resolve({ index: !1, reasonForSwitch: null });
        if (
          this.hasTooManyDroppedFrames(
            n,
            t,
            this._options.droppedFrameSwitchPercent
          )
        )
          return (
            this.blacklist(n),
            Promise.resolve({ index: n - 1, reasonForSwitch: 2 })
          );
        const i = this._getStreamFromSpeed(
          r,
          this.BANDWIDTH_DOWNSWITCH_THRESHOLD,
          e
        );
        return i === n
          ? Promise.resolve({ index: !1, reasonForSwitch: null })
          : Promise.resolve({ index: i, reasonForSwitch: 1 });
      }),
      (n.hasTooManyDroppedFrames = function (e, t, n) {
        return (
          (this.scanner.sorcerer.getDroppedFrameRate(
            this.FRAME_DROP_WINDOW_SECONDS,
            e,
            "median"
          ) /
            t.framerate) *
            100 >=
          n
        );
      }),
      (n.getTimeEstimateToLoad = function (e, t) {
        if (null === t) return 3;
        const n = t.segments[e],
          r = n.end - n.start,
          i = this.getCurrentSpeed();
        return ((r * (t.bitrate + t.audioBitrate)) / i) * 1.3;
      }),
      (n.canPlayFromTimeInStream = function (e, t) {
        if (
          !this.isTimeInBuffer(
            e,
            this.scanner._video.buffered,
            this.scanner._video.duration
          )
        )
          return !1;
        if (!t) return !1;
        const n = this.getSegmentsToLoad(!1, this.STREAM_TYPE_VIDEO, t);
        if (0 === n.length) return !0;
        const r = D(e, this.scanner._video.buffered);
        return this.getTimeEstimateToLoad(n[0], t) < r;
      }),
      (n.getSegmentsToLoad = function (e, t = this.STREAM_TYPE_VIDEO, n) {
        const r = this.scanner._video,
          i = this.scanner.currentTime,
          s = [],
          o = i + this._getSecondsToLoadAhead(i, r.duration, n),
          a = this.scanner.sorcerer[t].activeStreamIndex,
          u = this.scanner._streams[t][a];
        if (!u) return s;
        const c = this.scanner.sorcerer[t].sourceBuffer;
        let l = null;
        c && (l = c.buffered);
        for (let d = 0; d < u.segments.length; d++) {
          const t = u.segments[d];
          if (t.end < i || t.start > o) continue;
          const n = i >= t.start && i < t.end,
            r = this._isSegmentInBuffer(
              t,
              l,
              this.scanner._video.duration,
              this.scanner._streams
            );
          (!e && r) || (e && r && n) || ((n || o >= t.start) && s.push(d));
        }
        return s;
      }),
      (n.getSegmentRelativeTimeout = function (e, t, n) {
        var r;
        const i = null == t ? void 0 : t.bitrate,
          s = null == (r = e[0]) ? void 0 : r.bitrate;
        if (!i || !s || !n) return this.DEFAULT_TIMEOUT;
        if (i === s) return this.DEFAULT_TIMEOUT;
        const o = n * this.SEGMENT_RELATIVE_TIMEOUT_RATIO;
        return Math.max(
          this.MINIMUM_TIMEOUT,
          Math.min(this.DEFAULT_TIMEOUT, o)
        );
      }),
      (n._getStreamFromSpeed = function (e, t, n) {
        let r = 0;
        for (let i = r; i < n.length; i++)
          e * t > n[i].bitrate + n[i].audioBitrate && (r = i);
        return r;
      }),
      t
    );
  })(as),
  cs = (function (e) {
    function n(n, r = {}) {
      var i, s, o;
      return (
        ((o = e.call(this, n, r) || this)._mimirURL =
          r.tests.ml_brain.data.mimir_url),
        (o._geolocation = r.tests.ml_brain.data.geolocation),
        (o._segmentToStreamDecisionMap = {}),
        (o._pendingModelFetch = null),
        (o._prevBufferDurations = []),
        (o._prevSegmentDownloadTimes = []),
        (o._prevSegmentByteLengths = []),
        (o._prevDistancesFromBuffer = []),
        (o._prevSegmentStreamIndexes = []),
        (o._prevRemainingSegmentCounts = []),
        (o._prevTTFBs = []),
        (o._prevSegmentTimeouts = []),
        (o._prevSegmentRequestIDs = []),
        (o._prevModelInputs = null),
        (o._lastModelResponseTime = 0),
        (o._videoSegInProgress = null),
        (o._audioSegInProgress = null),
        (o._scrubInProgress = !1),
        (o._hasPreloaded = !1),
        (o._networkIssueCount = 0),
        (o._audioStreams = []),
        (o._videoBufferAppendCount = 0),
        (o._scannerEventsHandlers = [
          [ui.DOWNLOAD_START, o._handleDownloadStart.bind(_(o))],
          [ui.DOWNLOAD_END, o._handleDownloadEnd.bind(_(o))],
          [ui.APPEND_BUFFER_END, o._handleAppendBufferEnd.bind(_(o))],
          [ui.DOWNLOAD_TIMEOUT, o._handleDownloadTimeout.bind(_(o))],
        ]),
        (o._beforeRequestHooks = [o._beforeSegmentQualityFetch]),
        (o._afterResponseHooks = [o._afterSegmentQualityFetch]),
        o._scannerEventsHandlers.forEach((e) => {
          o.scanner.on(e[0], e[1]);
        }),
        (i = t.hooks.beforeRequest).push.apply(i, p(o._beforeRequestHooks)),
        (s = t.hooks.afterResponse).push.apply(s, p(o._afterResponseHooks)),
        o
      );
    }
    a(n, e),
      r(n, [
        {
          key: "displayName",
          get: function () {
            return "ML";
          },
        },
      ]);
    var i = n.prototype;
    return (
      (i.destroy = function () {
        this._scannerEventsHandlers.forEach((e) => {
          this.scanner.off(e[0], e[1]);
        }),
          this._beforeRequestHooks.forEach((e) => {
            const n = t.hooks.beforeRequest,
              r = n.indexOf(e);
            r >= 0 && n.splice(r, 1);
          }),
          this._afterResponseHooks.forEach((e) => {
            const n = t.hooks.afterResponse,
              r = n.indexOf(e);
            r >= 0 && n.splice(r, 1);
          });
      }),
      (i._handleDownloadStart = function ({ identifier: e }) {
        e.type === this.STREAM_TYPE_VIDEO &&
          (this._videoSegInProgress = {
            index: e.segment,
            streamIndex: e.stream,
            complete: null,
          }),
          e.type === this.STREAM_TYPE_AUDIO &&
            (this._audioSegInProgress = {
              index: e.segment,
              streamIndex: e.stream,
              complete: null,
            });
      }),
      (i._segmentInProgressMatchesIdentifer = function (
        e,
        t = this.STREAM_TYPE_VIDEO
      ) {
        return t === this.STREAM_TYPE_VIDEO
          ? null !== this._videoSegInProgress &&
              this._videoSegInProgress.index === e.segment &&
              this._videoSegInProgress.streamIndex === e.stream
          : t === this.STREAM_TYPE_AUDIO &&
              null !== this._audioSegInProgress &&
              this._audioSegInProgress.index === e.segment;
      }),
      (i._isSegmentInProgress = function () {
        return (
          null !== this._videoSegInProgress || null !== this._audioSegInProgress
        );
      }),
      (i._handleDownloadEnd = function ({
        identifier: e,
        data: { request: t, response: n },
      }) {
        const r = t.data.duration / 1e3,
          i = n.body.byteLength;
        let s = null;
        n.perfTimings &&
          (s = n.perfTimings.responseStart - n.perfTimings.connectStart),
          e.type === this.STREAM_TYPE_VIDEO &&
            this._segmentInProgressMatchesIdentifer(
              e,
              this.STREAM_TYPE_VIDEO
            ) &&
            ((this._videoSegInProgress.complete = {
              downloadTime: r,
              byteLength: i,
              ttfb: s,
              uuid: t.data.uuid,
            }),
            this._hasPreloaded ||
              (this._updateModelInputData({
                streamIndex: e.stream,
                segmentIndex: e.segment - 1,
                segmentDLTime: r,
                segmentLength: i,
                ttfb: s,
                didSegmentTimeout: !1,
              }),
              (this._hasPreloaded = !0))),
          e.type === this.STREAM_TYPE_AUDIO &&
            this._segmentInProgressMatchesIdentifer(
              e,
              this.STREAM_TYPE_AUDIO
            ) &&
            (this._audioSegInProgress.complete = {
              downloadTime: r,
              byteLength: i,
              ttfb: s,
              uuid: t.data.uuid,
            });
      }),
      (i._handleDownloadTimeout = function ({ identifier: e, data: t }) {
        const n = (t.timeoutMs || 8e3) / 1e3,
          r = e.segment,
          i = this.scanner._streams[e.type][e.stream].segments[r].size;
        delete this._segmentToStreamDecisionMap[r],
          this._updateModelInputData({
            streamIndex: e.stream,
            segmentIndex: r,
            segmentDLTime: n,
            segmentLength: i,
            ttfb: 0.1,
            didSegmentTimeout: !0,
          });
      }),
      (i._clearInProgress = function () {
        (this._videoSegInProgress = null), (this._audioSegInProgress = null);
      }),
      (i._handleAppendBufferEnd = function ({ identifier: e }) {
        if (
          (e.type === this.STREAM_TYPE_VIDEO &&
            (this._videoBufferAppendCount += 1),
          this._hasSeparateStreams(this.scanner._streams))
        ) {
          if (
            this._segmentInProgressMatchesIdentifer(
              e,
              this.STREAM_TYPE_VIDEO
            ) &&
            this._segmentInProgressMatchesIdentifer(
              e,
              this.STREAM_TYPE_AUDIO
            ) &&
            null !== this._videoSegInProgress.complete &&
            null !== this._audioSegInProgress.complete
          ) {
            const t = this._videoSegInProgress.complete,
              n = this._audioSegInProgress.complete,
              r = t.downloadTime + n.downloadTime,
              i = t.byteLength + n.byteLength,
              s = t.ttfb + n.ttfb;
            this._updateModelInputData({
              streamIndex: e.stream,
              segmentIndex: e.segment - 1,
              segmentDLTime: r,
              segmentLength: i,
              ttfb: s,
              segmentRequestID: t.uuid,
              didSegmentTimeout: !1,
            }),
              this._clearInProgress();
          }
        } else if (
          this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) &&
          null !== this._videoSegInProgress.complete
        ) {
          const t = this._videoSegInProgress.complete;
          this._updateModelInputData({
            streamIndex: e.stream,
            segmentIndex: e.segment - 1,
            segmentDLTime: t.downloadTime,
            segmentLength: t.byteLength,
            ttfb: t.ttfb,
            segmentRequestID: t.uuid,
            didSegmentTimeout: !1,
          }),
            this._clearInProgress();
        }
      }),
      (i._updateModelInputData = function (e) {
        const {
            streamIndex: t,
            segmentIndex: n,
            segmentDLTime: r,
            segmentLength: i,
            ttfb: s,
            segmentRequestID: o,
            didSegmentTimeout: a,
          } = e,
          u = this.scanner._streams.video[t],
          c = this.scanner.sorcerer.video.sourceBuffer;
        if (!c || !u) return;
        this._prevBufferDurations.push(this.getTotalBufferDuration()),
          this._prevDistancesFromBuffer.push(
            D(this.scanner.currentTime, c.buffered)
          ),
          this._prevSegmentStreamIndexes.push(t),
          this._prevSegmentDownloadTimes.push(r),
          this._prevSegmentByteLengths.push(i);
        const l = s + this._lastModelResponseTime;
        this._prevTTFBs.push(l),
          this._prevRemainingSegmentCounts.push(u.segments.length - n),
          this._prevSegmentRequestIDs.push(o),
          this._prevSegmentTimeouts.push(Number(a));
      }),
      (i.handleScrubEnd = function (e) {
        const t = this._prevSegmentDownloadTimes.length,
          n = t ? this._prevSegmentDownloadTimes[t - 1] : 0,
          r = this._prevSegmentByteLengths.length,
          i = r ? this._prevSegmentByteLengths[r - 1] : 0,
          s = this._prevTTFBs.length,
          o = s ? this._prevTTFBs[s - 1] : 0,
          a = this.scanner._streams.video[e],
          u = this._getFirstLookaheadSegmentNotInBuffer(a),
          c = u
            ? u.index
            : this._prevRemainingSegmentCounts[
                this._prevRemainingSegmentCounts.length - 1
              ],
          l = this._prevSegmentRequestIDs.length
            ? this._prevSegmentRequestIDs[
                this._prevSegmentRequestIDs.length - 1
              ]
            : "";
        this._updateModelInputData({
          streamIndex: e,
          segmentIndex: c,
          segmentDLTime: n,
          segmentLength: i,
          ttfb: o,
          segmentRequestID: l,
          didSegmentTimeout: !1,
        });
      }),
      (i.shouldPowerUp = function (e, t, n) {
        let r = e.indexOf(t);
        if ((-1 === r && (r = 0), 1 === this.whitelisted.length))
          return this.whitelisted[0] > r
            ? Promise.resolve(0)
            : Promise.resolve(!1);
        if (1 === this.scanner._streams.video.length)
          return Promise.resolve(!1);
        if (!this.canPowerUp(e, r)) return Promise.resolve(!1);
        if (this.scrubInProgress) return Promise.resolve(!1);
        const i = this._getFirstLookaheadSegmentNotInBuffer(t);
        if (null === i) return Promise.resolve(!1);
        const s = { index: i.index, streamIndex: i.streamIndex },
          o = i.index;
        if (
          null !== this._pendingModelFetch &&
          this._pendingModelFetch.index === s.index &&
          this._pendingModelFetch.streamIndex === s.streamIndex
        )
          return Promise.resolve(!1);
        if (!(o in this._segmentToStreamDecisionMap))
          return this._fetchSegmentQualityFromModel(s, e, t)
            .then((e) => e > r && e)
            .catch(console.error);
        const a = this._segmentToStreamDecisionMap[o];
        return a > r ? Promise.resolve(a) : Promise.resolve(!1);
      }),
      (i.shouldPowerDown = function (e, t) {
        const n = e.indexOf(t);
        if (-1 === n) {
          const t = this.isTimeInBuffer(
            this.scanner._video.duration,
            this.scanner._video.buffered,
            this.scanner._video.duration
          );
          return this.whitelisted.length || this.blacklisted.length || !t
            ? Promise.resolve(e.length - 1)
            : Promise.resolve(!1);
        }
        if (1 === this.whitelisted.length)
          return this.whitelisted[0] < n
            ? Promise.resolve(0)
            : Promise.resolve(!1);
        if (1 === this.scanner._streams.video.length)
          return Promise.resolve(!1);
        if (!this.canPowerDown(e, n)) return Promise.resolve(!1);
        if (this.scrubInProgress) return Promise.resolve(!1);
        const r = this._getFirstLookaheadSegmentNotInBuffer(t);
        if (null === r) return Promise.resolve(!1);
        const i = { index: r.index, streamIndex: r.streamIndex },
          s = r.index;
        if (
          null !== this._pendingModelFetch &&
          this._pendingModelFetch.index === i.index &&
          this._pendingModelFetch.streamIndex === i.streamIndex
        )
          return Promise.resolve(!1);
        if (!(s in this._segmentToStreamDecisionMap))
          return this._fetchSegmentQualityFromModel(i, e, t)
            .then((e) => e < n && e)
            .catch(console.error);
        const o = this._segmentToStreamDecisionMap[s];
        return o < n ? Promise.resolve(o) : Promise.resolve(!1);
      }),
      (i.getTotalBufferDuration = function () {
        const e = this.scanner.sorcerer.video.sourceBuffer;
        let t = 0;
        if (!e) return t;
        for (let n = 0; n < e.buffered.length; n++) {
          const r = e.buffered.start(n);
          t += e.buffered.end(n) - r;
        }
        return t;
      }),
      (i.canPlayFromTimeInStream = function (e, t) {
        return (
          !!this.isTimeInBuffer(
            e,
            this.scanner._video.buffered,
            this.scanner._video.duration
          ) && !!t
        );
      }),
      (i._normalizeModelInput = function (e, t = 0) {
        let n = e.slice(0);
        if (n.length < 8) {
          const e = 8 - n.length;
          for (let r = 0; r < e; r++) n.unshift(t);
          return n;
        }
        return n.slice(n.length - 8, n.length);
      }),
      (i._getModelInputs = function (e, t) {
        const n = {
            240: 1,
            360: 2,
            480: 3,
            540: 3,
            720: 4,
            1080: 5,
            1440: 6,
            2160: 7,
          },
          r = {
            240: 0,
            360: 1,
            480: 2,
            540: 2,
            720: 3,
            1080: 4,
            1440: 5,
            2160: 6,
          };
        let i = [0, 0, 0, 0, 0, 0, 0, 0],
          s = [0, 0, 0, 0, 0, 0, 0, 0],
          o = [0, 0, 0, 0, 0, 0, 0, 0];
        this._videoBufferAppendCount < 3 && (o[o.length - 1] = 1);
        for (let u = 0; u < t.length; u++) {
          const o = t[u],
            a = parseInt(o.quality, 10);
          a in n && (i[n[a]] = 1);
          const c = this.getAudioIndexFromVideo(t, this._audioStreams, u);
          let l = null;
          "number" == typeof c && (l = this._audioStreams[c]);
          for (let t = 0; t < o.segments.length; t++)
            if (t === e && a in r) {
              const e = o.segments[t].size;
              let n = 0;
              l && l.segments[t] && (n = l.segments[t].size), (s[r[a]] = e + n);
            }
        }
        const a = this._prevSegmentStreamIndexes.map((e) =>
          parseInt(this.scanner._streams.video[e].quality, 10)
        );
        return {
          availableQualities: i,
          nextChunkSizes: s,
          lastBufferSizes: this._normalizeModelInput(this._prevBufferDurations),
          lastChunkDownloadTimes: this._normalizeModelInput(
            this._prevSegmentDownloadTimes
          ),
          lastTtfb: this._normalizeModelInput(this._prevTTFBs, 0.1),
          lastChunkSizes: this._normalizeModelInput(
            this._prevSegmentByteLengths
          ),
          lastChunkQualities: this._normalizeModelInput(a),
          numRemainingChunks: this._normalizeModelInput(
            this._prevRemainingSegmentCounts
          ),
          lastPlaybackHeads: this._normalizeModelInput(
            this._prevDistancesFromBuffer
          ),
          geolocation: [[this._geolocation]],
          downloadTimeout: this._normalizeModelInput(this._prevSegmentTimeouts),
          videoStart: o,
        };
      }),
      (i._getStreamQualityFromModelOutput = function (e, t) {
        let n = -1,
          r = -1;
        for (let s = 0; s < e.length; s++) e[s] > r && ((r = e[s]), (n = s));
        let i = [];
        for (let s = 0; s < t.length; s++) 1 === t[s] && i.push(s);
        return { 1: 240, 2: 360, 3: 540, 4: 720, 5: 1080, 6: 1440, 7: 2160 }[
          i[n]
        ];
      }),
      (i._getStreamIndexFromQuality = function (e, t) {
        for (let n = 0; n < t.length; n++) {
          const r = parseInt(t[n].quality, 10);
          if (r === e) return n;
          if (480 === r && 540 === e) return n;
        }
        return 0;
      }),
      (i._beforeSegmentQualityFetch = function (e) {
        e.startTime = gi();
      }),
      (i._afterSegmentQualityFetch = function (e, t) {
        return (t.duration = yi(e.startTime)), t;
      }),
      (i._fetchSegmentQualityFromModel = function (e, t, n) {
        const r = this._getModelInputs(e.index, t);
        return (
          (this._pendingModelFetch = e),
          ae
            .post(this._mimirURL, { json: { inputs: r }, timeout: 2e3 })
            .then((n) => {
              this._lastModelResponseTime = n.perfTimings.duration;
              const i = JSON.parse(n.body),
                s = this._getStreamQualityFromModelOutput(
                  i.outputs[0],
                  r.availableQualities
                ),
                a = this._getStreamIndexFromQuality(s, t);
              if (
                ((this._segmentToStreamDecisionMap[e.index] = a),
                this._prevSegmentRequestIDs.length && this._prevModelInputs)
              ) {
                const e =
                  this._prevSegmentRequestIDs[
                    this._prevSegmentRequestIDs.length - 1
                  ];
                this.scanner.fire(
                  hi.BRAIN_ML_MODEL_INPUTS,
                  o(
                    {
                      chunkRequestID: e,
                      duration: n.duration,
                      geolocation: this._geolocation,
                    },
                    this._prevModelInputs
                  )
                );
              }
              return (
                (this._prevModelInputs = r), (this._pendingModelFetch = null), a
              );
            })
            .catch((t) => {
              if (t instanceof H) {
                const e = {
                  status: t.response.status,
                  resp: t.response.body,
                  url: this._mimirURL,
                };
                this.scanner.fire(hi.BRAIN_ML_MODEL_ERR, e),
                  this._networkIssueCount++;
              }
              if (t instanceof q) {
                const e = { url: this._mimirURL };
                this.scanner.fire(hi.BRAIN_ML_MODEL_TIMEOUT, e),
                  this._networkIssueCount++;
              }
              if (t instanceof X) {
                const e = { url: this._mimirURL };
                this.scanner.fire(hi.BRAIN_ML_MODEL_NET_ERR, e),
                  this._networkIssueCount++;
              }
              this._networkIssueCount >= 2 && this.scanner.resetBrain(!0);
              const n = e.streamIndex;
              return (
                (this._segmentToStreamDecisionMap[e.index] = n),
                (this._pendingModelFetch = null),
                n
              );
            })
        );
      }),
      (i._getFirstLookaheadSegmentNotInBuffer = function (e) {
        const t = this.scanner.sorcerer.video.sourceBuffer;
        let n = null;
        if ((t && (n = t.buffered), null === n)) return null;
        const r = this._getLookaheadSegments(e);
        for (let i = 0; i < r.length; i++) {
          const e = r[i].segment;
          if (
            !this._isSegmentInBuffer(
              e,
              n,
              this.scanner._video.duration,
              this.scanner._streams
            )
          )
            return r[i];
        }
        return null;
      }),
      (i._getLookaheadSegments = function (e, t = this.STREAM_TYPE_VIDEO) {
        const n = this.scanner._video,
          r = this.scanner.currentTime,
          i = r + this._getSecondsToLoadAhead(r, n.duration, e),
          s = [],
          o = this.scanner.sorcerer[t].activeStreamIndex,
          a = this.scanner._streams[t][o];
        if (!a) return s;
        for (let u = 0; u < a.segments.length; u++) {
          const e = a.segments[u];
          e.end < r ||
            e.start > i ||
            (((r >= e.start && r < e.end) || i >= e.start) &&
              s.push({ segment: e, index: u, streamIndex: o }));
        }
        return s;
      }),
      (i._clearSegmentsNotInBufferFromDecisionMap = function (e, t) {
        Object.keys(this._segmentToStreamDecisionMap)
          .filter((t) => -1 === e.indexOf(parseInt(t, 10)))
          .forEach((e) => {
            const n = this._segmentToStreamDecisionMap[e],
              r = this.scanner._streams.video[n].segments[e];
            this._isSegmentInBuffer(
              r,
              t,
              this.scanner._video.duration,
              this.scanner._streams
            ) || delete this._segmentToStreamDecisionMap[e];
          });
      }),
      (i.getSegmentsToLoad = function (e, t, n) {
        const r = this._getLookaheadSegments(n, t),
          i = this.scanner.sorcerer[t].sourceBuffer;
        let s = null;
        i && (s = i.buffered),
          this._clearSegmentsNotInBufferFromDecisionMap(
            r.map((e) => e.index),
            s
          );
        const o = [];
        for (let a = 0; a < r.length; a++) {
          const e = r[a].segment,
            t = r[a].index,
            n = this._isSegmentInBuffer(
              e,
              s,
              this.scanner._video.duration,
              this.scanner._streams
            ),
            i = t in this._segmentToStreamDecisionMap;
          n ||
            (!i &&
              1 !== this.whitelisted.length &&
              1 !== this.scanner._streams.video.length) ||
            o.push(t);
        }
        return o;
      }),
      r(n, [
        {
          key: "audioStreams",
          get: function () {
            return this._audioStreams;
          },
          set: function (e) {
            this._audioStreams = e;
          },
        },
        {
          key: "scrubInProgress",
          set: function (e) {
            this._scrubInProgress = e;
          },
          get: function () {
            return this._scrubInProgress;
          },
        },
      ]),
      n
    );
  })(as),
  ls = (function () {
    function e(e, t) {
      (this._video = e), (this._getCurrentStream = t);
    }
    var t = e.prototype;
    return (
      (t.start = function () {
        return (
          clearInterval(this._checkGapInterval),
          (this._checkGapInterval = setInterval(
            this._checkGap.bind(this),
            200
          )),
          this._checkGap()
        );
      }),
      (t.stop = function () {
        clearInterval(this._checkGapInterval);
      }),
      (t.onSegmentAppended = function () {
        this._checkGap();
      }),
      (t._checkGap = function () {
        const e = this._video.buffered,
          t = this._video.currentTime,
          n = this._getGapIndex(e, t);
        if (0 === this._video.readyState) return !1;
        if (this._video.paused) return !1;
        const r = this._video.duration;
        if (t >= r) return (this._video.currentTime = r - 0.1), !0;
        if (e.length <= n) return !1;
        const i = e.start(n);
        return !(
          i >= r ||
          i - t > 0.5 ||
          0 !== n ||
          (this.stop(),
          this._correctFirstSegmentStart("audio", i),
          this._correctFirstSegmentStart("video", i),
          (this._video.currentTime = i),
          0)
        );
      }),
      (t._getGapIndex = function (e, t) {
        if (!e || !e.length) return null;
        let n = 0;
        for (; n < e.length; n++) {
          const r = e.start(n),
            i = e.end(n);
          if (r > t && (0 === n || i - t <= 0.1)) break;
        }
        return n >= 0 ? n : null;
      }),
      (t._correctFirstSegmentStart = function (e, t) {
        const n = this._getCurrentStream(0, e);
        n && n.segments && n.segments[0] && (n.segments[0].start = t);
      }),
      e
    );
  })();
let ds = (function () {
  function e(e, t = {}) {
    (this._scanner = e),
      (this.sessionId = t.sessionId),
      (this.clipId = t.clipId);
  }
  var t = e.prototype;
  return (
    (t.getLogAsQueryParam = function (e, t) {
      return this._buildCMCDQueryParam(this._getLog(e, t));
    }),
    (t._getLog = function (e, t) {
      let n = {};
      return (
        Object.assign(n, this._getStaticSessionData()),
        Object.assign(n, this._getDynamicSessionData(e, t)),
        n
      );
    }),
    (t._buildCMCDQueryParam = function (e) {
      return M({ CMCD: this._getObjectAsAlphabetizedString(e) });
    }),
    (t._getStaticSessionData = function () {
      return {
        sid: `"${this.sessionId}"`,
        cid: `"${this.clipId}"`,
        st: this._getStreamType(),
        sf: this._getStreamingFormat(),
      };
    }),
    (t._getDynamicSessionData = function (e, t) {
      return {
        pr: this._scanner.playbackRate,
        br: this._scanner.getBitrateAtTime(this._scanner.currentTime, t) / 1e3,
        ot: this._getObjectType(t),
        bl: this._getBufferLength(e),
      };
    }),
    (t._getObjectType = function (e) {
      switch (e) {
        case "audio":
          return "a";
        case "video":
          return "v";
        default:
          return "av";
      }
    }),
    (t._getBufferLength = function (e) {
      return Math.round(1e3 * (parseFloat(e.end) - parseFloat(e.start)));
    }),
    (t._getStreamType = function () {
      switch (this._scanner.displayName) {
        case "HLSLiveScanner":
        case "NativeHLSLiveScanner":
          return "l";
        case "MediaSourceScanner":
        default:
          return "v";
      }
    }),
    (t._getStreamingFormat = function () {
      switch (this._scanner.displayName) {
        case "HLSLiveScanner":
        case "NativeHLSLiveScanner":
          return '"hls"';
        case "MediaSourceScanner":
        default:
          return '"dash"';
      }
    }),
    (t._getObjectAsAlphabetizedString = function (e) {
      let t = [],
        n = "";
      for (var r = 0, i = Object.entries(e); r < i.length; r++) {
        const [e, n] = i[r];
        t.push({ key: e, value: n });
      }
      return (
        t
          .sort(function (e, t) {
            return e.key.localeCompare(t.key);
          })
          .forEach(({ key: e, value: t }) => {
            n += `${e}=${t},`;
          }),
        n.replace(/,\s*$/, "")
      );
    }),
    e
  );
})();
function hs(e, t, n) {
  return n
    ? t
      ? t(e)
      : e
    : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
const fs = ["supported"];
function _s(e, t) {
  var n = e();
  return n && n.then ? n.then(t) : t(n);
}
const ps = new Map();
function ms(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    try {
      return Promise.resolve(e.apply(this, t));
    } catch (Rl) {
      return Promise.reject(Rl);
    }
  };
}
const vs = j("MediaCapabilities", "color: white; background-color: green"),
  gs = ms(function (e) {
    let t;
    const n = Ts(e);
    return (
      ps.get(n) ||
      _s(
        function () {
          if (Le.mediaCapabilities) {
            const r = e.codecs.replace(/,.+/, ""),
              i = {
                type: "media-source",
                video: {
                  contentType: `${e.mime_type}; codecs=${r}`,
                  width: e.width,
                  height: e.height,
                  bitrate: e.bitrate,
                  framerate: e.framerate,
                },
              };
            return hs(
              navigator.mediaCapabilities.decodingInfo(i),
              function (e) {
                (t = e), ps.set(n, t);
              }
            );
          }
        },
        function () {
          return t;
        }
      )
    );
  }),
  ys = ms(function (e = []) {
    let t = !1,
      n = e,
      r = [],
      i = [];
    return _s(
      function () {
        if (Le.mediaCapabilities)
          return (function () {
            if (0 !== e.length)
              return (function (s, o) {
                try {
                  var a = hs(
                    Promise.all(
                      e.map(function (e) {
                        return hs(gs(e));
                      })
                    ),
                    function (s) {
                      if (s) {
                        if (
                          ((n = (function (e, t) {
                            return e.filter(
                              (e, n) =>
                                fs.every((e) => t[n][e]) ||
                                (vs(
                                  `Stream ${e.quality} is not supported`,
                                  t[n]
                                ),
                                !1)
                            );
                          })(e, s)),
                          0 === n.length)
                        )
                          return (
                            vs(
                              "No compatible streams found. Returning all available streams as safeguard."
                            ),
                            (t = !0),
                            {
                              compatibleStreams: e,
                              incompatibleStreams: r,
                              incompatibleStreamsAttributes: i,
                            }
                          );
                        n.length < e.length
                          ? ((r = e.filter((e) => -1 === n.indexOf(e))),
                            (i = r.map(Es)),
                            vs(
                              "Some streams are not supported. Returning compatible streams."
                            ))
                          : vs("All streams are supported.");
                      }
                    }
                  );
                } catch (Rl) {
                  return o(Rl);
                }
                return a && a.then ? a.then(void 0, o) : a;
              })(0, function (e) {
                vs("Error checking stream capabilities", e);
              });
            vs("No streams to check for MediaCapabilities support");
          })();
        vs("MediaCapabilities API not supported");
      },
      function (e) {
        return t
          ? e
          : {
              compatibleStreams: n,
              incompatibleStreams: r,
              incompatibleStreamsAttributes: i,
            };
      }
    );
  });
function Es(e) {
  const t = Ts(e),
    n = ps.get(t);
  return n ? fs.filter((e) => !n[e]) : [];
}
function Ts(e) {
  return `${e.mime_type};${e.codecs};${e.width};${e.height};${e.bitrate};${e.framerate}`;
}
function Ss(e, t, n) {
  return n
    ? t
      ? t(e)
      : e
    : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
function bs(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    try {
      return Promise.resolve(e.apply(this, t));
    } catch (Rl) {
      return Promise.reject(Rl);
    }
  };
}
let As = (function (t) {
    function n(e, n = {}) {
      var r;
      return (
        (r = t.call(this, e, n) || this).reset(),
        (r.manifestLoadDurations = []),
        (r._preserveCurrentTime = !1),
        n.mediaSourceScanner &&
          (r._maxPreloadStreamIndex =
            n.mediaSourceScanner.maxPreloadStreamIndex),
        r
      );
    }
    a(n, t),
      r(n, null, [
        {
          key: "displayName",
          get: function () {
            return "MediaSourceScanner";
          },
        },
        {
          key: "supported",
          get: function () {
            return (
              "undefined" != typeof MediaSource && MediaSource.isTypeSupported
            );
          },
        },
        {
          key: "supportedVideoTypes",
          get: function () {
            return [
              "application/vnd.vimeo.dash+json",
              "video/vnd.mpeg.dash.mpd",
            ];
          },
        },
      ]);
    var i = n.prototype;
    return (
      (i.deactivate = function () {
        t.prototype.deactivate.call(this),
          this.sorcerer && this.sorcerer.destroy(),
          this.reset();
      }),
      (i.reset = function () {
        (this._waitingOnSet = new Set()),
          (this._streamsForSegment = {}),
          Le.browser.safari &&
            (this._gapJumper = new ls(
              this._video,
              this._getCurrentStream.bind(this)
            )),
          this.resetBrain(),
          this._setupCMCDLogger(),
          (this._ready = !1),
          (this._startedPlaying = !1),
          (this._manifest = null),
          (this._streams = {}),
          (this._streams.audio = []),
          (this._streams.video = []),
          (this._audioStreams = []),
          (this._onReady = null),
          (this._baseUrl = null),
          (this._lastTargetStreamId = null),
          (this._timeToSeekTo = null),
          (this._resolveSeek = null),
          (this._resolveStartPreload = null),
          (this._reloadingExistingVideo = !1),
          (this._lastStreamIndex = null),
          (this._checkSwitchUp = !1),
          (this._clearBufferAtTime = !1),
          (this._preloadStream = null),
          (this._removeBufferPromise = null),
          (this._ranIntoBuffer = !1),
          (this._restrictedStreamIndexes = []),
          (this._switching = {}),
          (this._lastDownloadBitrate = 0),
          (this._preloadSegmentStreamIndex = null),
          (this._preserveCurrentTime = !1),
          clearInterval(this._loadSegmentsInterval),
          clearTimeout(this._slowLoadSegmentTimeout);
      }),
      (i.resetBrain = function (e = !1) {
        const t = this._options.mediaSourceScanner || {};
        t.tests = this._options.tests;
        const n = Le.ie;
        if ((this._brain && this._brain.destroy(), e || n)) {
          const e = Ri(this._brain);
          return (
            (this._brain = new us(this, t)),
            void ((e || n) && this.fire(hi.BRAIN_ML_SWITCH_TO_SKYFIRE))
          );
        }
        this._brain = new us(this, t);
        const r = wi(t, "ml_brain");
        r && r.group && r.data.use_model && (this._brain = new cs(this, t));
      }),
      (i.preloadStream = function () {
        if (this._preloadStream) return this._preloadStream;
        let e = 0,
          t = 1;
        this._streams.audio.length && (t = 2);
        let n = this.sorcerer.video.activeStreamIndex;
        this._restrictedStreamIndexes.length &&
          (n = this._restrictedStreamIndexes[0]);
        let r = 0;
        const i = this._brain.getSegmentsToLoad(!1, "video", n);
        i.length > 0 && (r = i[0]);
        let s = () => {};
        const o = (e = !1) => {
            e && (n = this.sorcerer.video.activeStreamIndex),
              (this._preloadSegmentStreamIndex = n),
              this._restartLoadSegmentsIntervalWithBackoff(!0);
          },
          a = (n) => {
            (e += 1),
              e < t ||
                (n.segment === r && 0 === this._restrictedStreamIndexes.length
                  ? this._getStreamIndexToLoadAndSwitchReason(!0)
                      .then((t) => {
                        let { index: r, reasonForSwitch: i } = t,
                          a = { reasonForSwitch: i };
                        if (!1 !== r && r > n.stream) {
                          if (
                            (this.sorcerer.video.switchTo(r, !1, a),
                            this._streams.audio.length)
                          ) {
                            const e = this._brain.getAudioIndexFromVideo(
                              this._streams.video,
                              this._streams.audio,
                              r
                            );
                            this.sorcerer.audio.switchTo(e, !1);
                          }
                          return (e = 0), void o(!0);
                        }
                        s();
                      })
                      .catch(console.error)
                  : s());
          };
        return (
          (this._preloadStream = new Promise((e, t) => {
            (s = () => {
              const t = this._getCurrentStream(n).segments[0].end,
                r = this._getDuration(!0);
              if (
                (this.currentTime >= r && (this.currentTime = r),
                this.currentTime > t &&
                  (this.sorcerer.clear(), (this._waitingOnSet = new Set())),
                this.sorcerer.video.switchTo(n, !1),
                this._streams.audio.length)
              ) {
                const e = this._brain.getAudioIndexFromVideo(
                  this._streams.video,
                  this._streams.audio,
                  n
                );
                this.sorcerer.audio.switchTo(e, !1);
              }
              this.sorcerer.off("bufferqueueadd", a),
                (this._preloadSegmentStreamIndex = null),
                (this._ready = !0),
                e();
            }),
              this.sorcerer.on("bufferqueueadd", a),
              o();
          })),
          this._preloadStream
        );
      }),
      (i.loadManifest = function (t) {
        try {
          const n = this;
          return Ss(n.video.metadata.p2pReady, function () {
            const r = Date.now();
            return Le.browser.ie && t && -1 !== t.indexOf("archive_playlist")
              ? (setTimeout(() => {
                  n._fireVideoError(
                    "MediaUnknownError",
                    "An unknown error occurred."
                  );
                }, 250),
                new Promise(() => {}))
              : ae({ url: t, timeout: 1e4, type: e.MANIFEST })
                  .then(
                    (e) => (
                      e.url &&
                        e.url !== t &&
                        -1 !== e.url.indexOf("live-archive") &&
                        (n._baseUrl = e.url.split("/").slice(0, -2).join("/")),
                      n.manifestLoadDurations.push({
                        url: t,
                        status: e.status,
                        duration: Date.now() - r,
                      }),
                      n.fire(ui.MANIFEST_LOADED),
                      e.text()
                    )
                  )
                  .then(
                    bs(function (e) {
                      let r;
                      return (function (i, s) {
                        var o = (function () {
                          if (-1 !== t.indexOf(".mpd"))
                            return Ss(
                              n._loadMediaManifest(),
                              function ({ parseMPD: n }) {
                                r = n(e, t);
                              }
                            );
                          r = JSON.parse(e);
                        })();
                        return o && o.then ? o.then(s) : s();
                      })(0, function () {
                        return r;
                      });
                    })
                  )
                  .catch((e) => {
                    if (
                      (n.manifestLoadDurations.push({
                        url: t,
                        status: e.response && e.response.status,
                        duration: Date.now() - r,
                      }),
                      n.reset(),
                      e instanceof H && 410 === e.response.status)
                    )
                      return (
                        n.fire(ui.MEDIA_URL_EXPIRED), new Promise(() => {})
                      );
                    throw (
                      (e instanceof H && 400 === e.response.status
                        ? n.fire(ui.MEDIA_URL_BAD_REQUEST, e.response.url)
                        : e instanceof q && n.fire(ui.MANIFEST_TIMEOUT),
                      e)
                    );
                  });
          });
        } catch (Rl) {
          return Promise.reject(Rl);
        }
      }),
      (i.setVideoSrc = function (e, t, n = !0) {
        if (n && !t && this._onReady) {
          var r;
          if (
            ("metadata" === this._preload ||
              ("none" === this._preload && !this.paused)) &&
            !this._ready
          )
            return void this._onReady
              .then(() => {
                const t = this.paused;
                this.setVideoSrc(e, t, !1);
              })
              .catch(console.error);
          if (
            "sd-fallback" ===
            (null == (r = this._telecineVideo.drmHandler) ? void 0 : r.state)
          )
            return void this._onReady
              .then(() => {
                this.setVideoSrc(e, !0, !1);
              })
              .catch(console.error);
          if ("auto" === this._preload)
            return void this._onReady
              .then(() => {
                this.setVideoSrc(e, !1, !1);
              })
              .catch(console.error);
        }
        t && this.reset(), t || !this.paused || this.sorcerer || (t = !0);
        let i = this._initializeManifest;
        t && (i = this._initialize);
        const s = e.split("/");
        s.pop();
        const o = `${s.join("/")}/`;
        (this._reloadingExistingVideo = !t),
          (this._onReady = this._startPreload(e, this._preload)
            .then(this.loadManifest.bind(this))
            .then(
              (e) => (
                ("string" == typeof this._baseUrl &&
                  -1 !== this._baseUrl.indexOf("live-archive")) ||
                  (this._baseUrl = o),
                e
              )
            )
            .then(i.bind(this))),
          t &&
            "auto" === this._preload &&
            (this._onReady = this._addCallbackToPromise(
              this._onReady,
              this.preloadStream.bind(this),
              !1
            )),
          (this._onReady = this._addCatchToPromise(this._onReady));
      }),
      (i.getBitrateAtTime = function (e, t) {
        if (!this.sorcerer) return 0;
        const n = this.sorcerer.streamIndexAtTime(e, t);
        return this._streams[t][n] ? this._streams[t][n].bitrate : 0;
      }),
      (i.lockStreamIndexes = function () {
        const e = this._restrictedStreamIndexes.map((e) =>
            this._streams.video.indexOf(this._streams.video[e])
          ),
          t = !this.paused;
        if (
          (t && ((this._ignorePauseEvent = !0), this._video.pause()),
          (this._switching.video = !1),
          this._brain.lock(e),
          !this._startedPlaying && "auto" !== this._preload)
        )
          return;
        const n = Math.max(this.currentTime - 7, 0),
          r = Math.min(this.currentTime + 7, this._video.duration);
        this.sorcerer
          .removeBuffer(n, r)
          .then(() => {
            (!this._startedPlaying && "auto" === this._preload) || this.ended
              ? this._loadSegments()
              : (this.seekToTime(this.currentTime),
                t &&
                  this.paused &&
                  ((this._ignorePlayEvent = !0), this._video.play()));
          })
          .catch(console.error);
      }),
      (i.seekToTime = function (e) {
        if (e === this.currentTime) return Promise.resolve();
        const t = null === this._timeToSeekTo;
        if (
          (t ||
            (this._lastSeekReject &&
              (this._lastSeekReject(), (this._lastSeekReject = null)),
            (this._seekInProgressPromise = null),
            (this._timeToSeekTo = null),
            (this._resolveSeek = null)),
          (this._timeToSeekTo = e),
          this._handleScrubbing(),
          this._ready)
        )
          for (const n in this._streams)
            if (this._streams[n].length > 0) {
              const e = this.sorcerer[n].activeStreamIndex;
              this.sorcerer[n].streams[e].abort();
            }
        return (
          (this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e)),
          Promise.all([this._onReady, this._removeBufferPromise])
            .then(() => {
              this._loadSegments();
            })
            .catch(console.error),
          this._paused && 0 === e && this.fire(ii.SEEKING),
          t || this.play().catch(this._onPlayError.bind(this)),
          this._onReady.then(() => this._seekInProgressPromise).catch((e) => {})
        );
      }),
      (i.takeSnapshot = function () {
        this._switchingVideo && t.prototype.takeSnapshot.call(this);
      }),
      (i.initDrm = function () {}),
      (i.onstalled = function () {
        return !1;
      }),
      (i.onseeked = function (e) {
        this._startedPlaying && this._restartLoadSegmentsIntervalWithBackoff();
      }),
      (i.onended = function (e) {
        return t.prototype.onended.call(this, e), !0;
      }),
      (i.onseeking = function (e) {
        this._startedPlaying;
      }),
      (i._handleScrubbing = function () {
        this._scrubStart(),
          clearTimeout(this._scrubTimeout),
          (this._scrubTimeout = setTimeout(() => {
            this._scrubEnd();
          }, 200));
      }),
      (i._scrubStart = function () {
        this._scrubbing ||
          ((this._scrubbing = !0),
          Ri(this._brain) && (this._brain.scrubInProgress = !0));
      }),
      (i._scrubEnd = function () {
        if (((this._scrubbing = !1), Ri(this._brain))) {
          this._brain.scrubInProgress = !1;
          const e = this.sorcerer.video.activeStreamIndex;
          this._brain.handleScrubEnd(e), this._loadSegments();
        }
      }),
      (i.ontimeupdate = function (e) {
        if (!this.sorcerer) return !1;
        if (
          (t.prototype.ontimeupdate.call(this),
          this._gapJumper && this._gapJumper.stop(),
          0 === this.currentTime)
        )
          return this._startedPlaying;
        if (this._timeToSeekTo) return !1;
        if (
          (this._startedPlaying || (this._startedPlaying = !0),
          this._clearBufferAtTime &&
            this.currentTime >= this._clearBufferAtTime)
        ) {
          const e = 2;
          this.sorcerer.removeBuffer(0, this._clearBufferAtTime - e),
            (this._clearBufferAtTime = !1);
        }
        const n = this.sorcerer.getDroppedFrameTotal();
        this.fire(ui.DROPPED_FRAMES, n);
        const r = this.sorcerer.getResponseSpeeds(),
          i = this._streams.video[this.sorcerer.video.activeStreamIndex],
          s = this._options.tests && this._options.tests.download_bitrate;
        if ((!s || !s.group) && i && this._brain.getCurrentSpeed) {
          const e = {
            speed: this._brain.getCurrentSpeed(),
            bitrate: i.bitrate,
            speeds: r,
          };
          this.fire(ui.BANDWIDTH, e);
        }
        const o = this._video.buffered.length;
        if (!o) return !0;
        const a = this._video.buffered.end(o - 1);
        return (
          Math.ceil(a) === Math.ceil(this._video.duration) ||
          (Math.abs(this.currentTime - a) < 0.2
            ? (this._ranIntoBuffer ||
                (this.fire(ui.STREAM_BUFFER_START, {
                  hasLowerStreamIndex:
                    this.sorcerer.video.activeStreamIndex > 0,
                }),
                (this._ranIntoBuffer = !0)),
              !1)
            : void 0)
        );
      }),
      (i._isEnded = function () {
        return (
          !!this.ended ||
          Math.ceil(this.currentTime) === Math.ceil(this._video.duration)
        );
      }),
      (i._loadSegmentsIntervalTick = function () {
        if (!this.sorcerer) return !1;
        if (this._isEnded()) return !1;
        if (null !== this._preloadSegmentStreamIndex) {
          try {
            this._loadPreloadSegments();
          } catch (Rl) {
            return this._handleLoadSegmentFailures(Rl), !1;
          }
          return !0;
        }
        if (0 === this.currentTime && !this._ready) return this._startedPlaying;
        const e = this._loadSegments();
        return (
          e &&
            "function" == typeof e.catch &&
            e.catch(this._handleLoadSegmentFailures.bind(this)),
          !0
        );
      }),
      (i._handleLoadSegmentFailures = function (e) {
        e.code === DOMException.INVALID_STATE_ERR
          ? this.fire(ui.SCANNER_ERROR, { reason: e })
          : this.fire(
              ui.LOAD_SEGMENT_FAILED,
              new ki(`${ui.LOAD_SEGMENT_FAILED} - ${e.name}`, e.message)
            ),
          clearInterval(this._loadSegmentsInterval);
      }),
      (i.onprogress = function () {
        this._brain.canPlayFromTimeInStream(
          this.currentTime,
          this._getCurrentStream()
        ) &&
          this._ranIntoBuffer &&
          (this.fire(ui.STREAM_BUFFER_END), (this._ranIntoBuffer = !1));
      }),
      (i.onwaiting = function () {
        return !this._gapJumper || !this._gapJumper.start();
      }),
      (i.onerror = function () {
        return (
          !!this._video.error &&
          (this._video.error.code === this._video.error.MEDIA_ERR_DECODE
            ? (this.fire(ui.SCANNER_ERROR, {
                reason: "encountered media decode error",
              }),
              !1)
            : this._video.error.code ===
              this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED
            ? ((this._preserveCurrentTime = !0),
              this.fire(ui.SCANNER_ERROR, {
                reason: "encountered media source not supported error",
              }),
              !1)
            : t.prototype.onerror.call(this))
        );
      }),
      (i.pause = function () {
        t.prototype.pause.call(this);
      }),
      (i.play = function () {
        return (
          this._restartLoadSegmentsIntervalWithBackoff(),
          t.prototype.play.call(
            this,
            () => (
              this._resolveStartPreload && this._resolveStartPreload(),
              this._reloadingExistingVideo ||
                this._ready ||
                "auto" === this._preload ||
                (this._onReady = this._addCallbackToPromise(
                  this._onReady,
                  this.preloadStream.bind(this)
                )),
              this._onReady.then(() =>
                Promise.resolve(this._seekInProgressPromise)
              )
            )
          )
        );
      }),
      (i.onpause = function () {
        return this._ignorePauseEvent
          ? ((this._ignorePauseEvent = !1), !1)
          : (t.prototype.onpause.call(this), !0);
      }),
      (i.onplay = function () {
        return !this._ignorePlayEvent || ((this._ignorePlayEvent = !1), !1);
      }),
      (i._addCallbackToPromise = function (e, t, n = !0) {
        let r = e.then(t);
        return n && (r = this._addCatchToPromise(r)), r;
      }),
      (i._addCatchToPromise = function (e) {
        return e.catch(
          (e) => (
            this.fire(ui.FILE_ERROR, { reason: e }), new Promise((e, t) => {})
          )
        );
      }),
      (i._handleBufferForSeek = function () {
        this._ready &&
          this._streams.video[this.sorcerer.video.activeStreamIndex].bitrate /
            1e3 >
            12e3 &&
          (this._removeBufferPromise = this.sorcerer.removeBuffer());
      }),
      (i._startPreload = function (e, t) {
        return new Promise((n, r) => {
          "none" !== t || (this._reloadingExistingVideo && !this.paused)
            ? n(e)
            : (this._resolveStartPreload = () => {
                n(e), (this._resolveStartPreload = null);
              });
        });
      }),
      (i._getSeekReadyPromiseForTime = function (e = this._timeToSeekTo) {
        return new Promise((t, n) => {
          const r = this._startedPlaying && 0 === e,
            i = this._brain.canPlayFromTimeInStream(
              e,
              this._getCurrentStream()
            );
          r || i
            ? t(e)
            : (this._handleBufferForSeek(), (this._resolveSeek = t));
        }).then((e) => {
          (this._timeToSeekTo = null), (this._seekInProgressPromise = null);
          const t = new Promise((e, t) => {
            this._lastSeekReject = t;
            const n = () => {
              e(this._video.currentTime),
                this._video.removeEventListener("seeked", n);
            };
            this._video.addEventListener("seeked", n);
          });
          return (this._video.currentTime = e), t;
        });
      }),
      (i._handlePreloadChanged = function (e, t) {
        "auto" !== e &&
          "auto" === t &&
          (this._onReady = this._addCallbackToPromise(
            this._onReady,
            this.preloadStream.bind(this)
          )),
          e !== t &&
            "none" !== t &&
            this._resolveStartPreload &&
            this._resolveStartPreload();
      }),
      (i._avDurationDifference = function (e) {
        const t = e.audio.reduce((e, t) => e + t.duration, 0),
          n = e.video.reduce((e, t) => e + t.duration, 0),
          r = t / e.audio.length,
          i = n / e.video.length;
        return r + 4 < i ? i - r : 0;
      }),
      (i._manifestContainsSegmentSizes = function (e) {
        return e.video.every((e) => e.segments.every((e) => "size" in e));
      }),
      (i._initializeManifest = function (e) {
        const t = this;
        return new Promise(
          bs(function (n, r) {
            if (
              ((t._manifest = e),
              (t._streams.video = t._sortVideoStreams(e.video)),
              e.audio)
            ) {
              const n = t._avDurationDifference(e);
              if (n > 0)
                return (
                  t.fire(ui.AV_DURATION_MISMATCH, n),
                  t.fire(ui.SCANNER_ERROR, {
                    reason: "Encountered A/V duration mismatch",
                  }),
                  void r()
                );
              const i = e.audio.filter((e) => "opus" === e.codecs),
                s = e.audio.filter((e) => "opus" !== e.codecs),
                o =
                  Le.browser.safari ||
                  Le.iOS ||
                  Le.iPadOS ||
                  !MediaSource.isTypeSupported('audio/mp4; codecs="opus"') ||
                  !i.length
                    ? s
                    : i;
              t._streams.audio = t._sortAudioStreams(o);
            }
            for (let i = 0; i < t._streams.video.length; i++) {
              let n = 0;
              if (e.audio) {
                const e = t._brain.getAudioIndexFromVideo(
                    t._streams.video,
                    t._streams.audio,
                    i
                  ),
                  r = t._streams.audio[e];
                r && (n = r.bitrate);
              }
              t._streams.video[i].audioBitrate = n;
            }
            return (
              Ri(t._brain) &&
                t._streams.audio.length > 0 &&
                (t._brain.audioStreams = t._streams.audio),
              t._initDrm(
                t._streams.video,
                t._streams.audio,
                t._manifest.key_info
              ),
              t._manifestContainsSegmentSizes(e) || t.resetBrain(!0),
              t.fire(ui.STREAMS_LOADED, t._streams),
              Ss(
                ys(t._streams.video),
                function ({
                  compatibleStreams: e,
                  incompatibleStreams: r,
                  incompatibleStreamsAttributes: i,
                }) {
                  (t._streams.video = e),
                    r.length &&
                      (t.fire(ui.AVAILABLE_STREAMS_CHANGED),
                      t.fire(ui.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, {
                        incompatibleStreams: r,
                        incompatibleStreamsAttributes: i,
                      })),
                    n();
                }
              )
            );
          })
        );
      }),
      (i._setUpSorcerer = function (e, t) {
        this.sorcerer && this.sorcerer.destroy(),
          (this.sorcerer = new os(e, t)),
          (this._video.src = URL.createObjectURL(this.sorcerer.mediaSource)),
          (this.successfulSegments = this.sorcerer.getSuccessfulSegments()),
          (this.failedSegments = this.sorcerer.getFailedSegments()),
          this._restartLoadSegmentsIntervalWithBackoff();
      }),
      (i._restartLoadSegmentsIntervalWithBackoff = function (e = !1) {
        this._restartLoadSegmentsInterval(500),
          clearTimeout(this._slowLoadSegmentTimeout),
          (this._slowLoadSegmentTimeout = setTimeout(() => {
            this._restartLoadSegmentsInterval(5e3);
          }, 6e4)),
          e && this._loadSegmentsIntervalTick();
      }),
      (i._restartLoadSegmentsInterval = function (e) {
        clearInterval(this._loadSegmentsInterval),
          (this._loadSegmentsInterval = setInterval(() => {
            this._loadSegmentsIntervalTick();
          }, e));
      }),
      (i._getDuration = function (e = !1) {
        let t = e ? 1 / 0 : 0;
        for (const n in this._streams)
          this._streams[n].length &&
            (t = Math[e ? "min" : "max"](t, this._streams[n][0].duration));
        return t;
      }),
      (i._initialize = function (e) {
        return this._initializeManifest(e).then(() => {
          const t =
              this.video && this.video.metadata.percentShown
                ? this.video.metadata.percentShown
                : null,
            n =
              this._brain.filterStreams(
                this._streams.video,
                this._video.clientWidth,
                this._video.clientHeight,
                t
              ).length - 1;
          let r = this._streams.video[0];
          this._restrictedStreamIndexes.length &&
            (r = this._streams.video[this._restrictedStreamIndexes[0]]),
            void 0 !== this._maxPreloadStreamIndex &&
              n <=
                this._streams.video.indexOf(
                  e.video[this._maxPreloadStreamIndex]
                ) &&
              (r = this._streams.video[n]),
            this._setUpSorcerer(this._video, {
              duration: this._getDuration(),
              fetcherTimeout: 8e3,
              fetcherRetryAbortErrors: !1,
            }),
            this.sorcerer.on("srcnotsupported", () => {
              this.fire(ui.SCANNER_ERROR, {
                reason: "this codec is not supported for mediasource playback",
              });
            });
          const i = this._streams.video.indexOf(r);
          for (const e in this._streams)
            this._streams[e].forEach((t, n) => {
              let r = this._getSegmentUrl(n, "init", e);
              this._useRangeRequests(n, e) &&
                this._streams[e][n].init_segment_range &&
                (r = {
                  url: r,
                  byteRange: this._getRangeForSegment(n, "init", e),
                }),
                this.sorcerer.addStream(
                  `${t.mime_type}; codecs="${this._streams[e][n].codecs}"`,
                  r
                );
            });
          this.sorcerer.video.switchTo(i, !0, { reasonForSwitch: 7 }),
            this.sorcerer.on("queued", this._handleQueued.bind(this)),
            this.sorcerer.on("downloadabort", this._handleAborted.bind(this)),
            this.sorcerer.on(
              "appendbufferend",
              this._handleAppendBufferEnd.bind(this)
            ),
            this.sorcerer.on(
              "downloadstart",
              this._handleDownloadStart.bind(this)
            ),
            this.sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)),
            this.sorcerer.on(
              "downloaderror",
              this._handleDownloadError.bind(this)
            ),
            this.sorcerer.on(
              "downloadtimeout",
              this._handleDownloadTimeout.bind(this)
            ),
            this.sorcerer.on(
              "quotaexceedederror",
              this._handleQuotaExceededError.bind(this)
            ),
            this.sorcerer.video.on(
              "streamchange",
              this._handleStreamChange.bind(this)
            ),
            this.sorcerer.video.on(
              "streamchangestart",
              this._handleStreamChangeStart.bind(this)
            ),
            this.sorcerer.mediaSource.addEventListener("sourceended", () => {
              this.fire(ii.PROGRESS);
            });
        });
      }),
      (i._sortVideoStreams = function (e) {
        const t = e.slice(0);
        return (
          t.sort(function (e, t) {
            const n = e.width * e.height * e.bitrate,
              r = t.width * t.height * t.bitrate;
            return e.width === t.width && e.height === t.height
              ? e.framerate - t.framerate
              : n - r;
          }),
          t
        );
      }),
      (i._sortAudioStreams = function (e) {
        const t = e.slice(0);
        return (
          t.sort(function (e, t) {
            return e.bitrate * e.channels - t.bitrate * t.channels;
          }),
          t
        );
      }),
      (i._useRangeRequests = function (e, t) {
        return !!this._streams[t][e].segments[0].range;
      }),
      (i._getRangeForSegment = function (e, t, n) {
        return "init" === t
          ? this._streams[n][e].init_segment_range
          : this._streams[n][e].segments[t].range;
      }),
      (i._getSegmentPriority = function (e, t, n = "video") {
        return "init" === t ? 0 : this._streams[n][e].segments[t].start;
      }),
      (i._getSegmentUrl = function (e, t, n = "video", r = !1) {
        if (
          "init" === t &&
          !this._streams[n][e].init_segment_range &&
          -1 === this._streams[n][e].init_segment.indexOf(".")
        )
          return (function (e) {
            return Ti(e).buffer;
          })(this._streams[n][e].init_segment);
        let i = this._baseUrl;
        const s =
          this._manifest.base_url &&
          -1 !== this._manifest.base_url.indexOf("//");
        if (
          (s && (i = this._manifest.base_url),
          this._manifest.base_url && !s && (i += this._manifest.base_url),
          this._streams[n][e].base_url && (i += this._streams[n][e].base_url),
          this._useRangeRequests(e, n))
        )
          return i;
        if ("init" === t) return (i += this._streams[n][e].init_segment), i;
        const o = this._streams[n][e].segments[t];
        o.url && (i += o.url);
        const a = -1 !== i.indexOf("akamaized"),
          u = -1 === i.indexOf("?") ? "?" : "&";
        return (
          r &&
            this.CMCDLogger &&
            a &&
            (i += `${u}${this.CMCDLogger.getLogAsQueryParam(o, n)}`),
          i
        );
      }),
      (i._key = function (e, t, n) {
        return `${e}:${t}:${n}`;
      }),
      (i._isFinalSegment = function (e, t, n) {
        return t === this._streams[n][e].segments.length - 1;
      }),
      (i._getCurrentlyLoadingStreamsForSegment = function (e, t) {
        const n = [],
          r = this._streamsForSegment[e];
        if (!r) return n;
        for (let i = 0; i < r.length; i++)
          this._waitingOnSet.has(this._key(r[i], e, t)) && n.push(r[i]);
        return n;
      }),
      (i.getCurrentStream = function (e = "video") {
        return this._getCurrentStream(0, e);
      }),
      (i._getCurrentStream = function (e = 0, t = "video") {
        return (
          void 0 !== this.sorcerer && (e = this.sorcerer[t].activeStreamIndex),
          this._streams[t][e]
        );
      }),
      (i._getStreamIndexToLoadAndSwitchReason = function (e) {
        let t = this._streams.video;
        const n =
          this.video && this.video.metadata.percentShown
            ? this.video.metadata.percentShown
            : null;
        if (
          ((t = this._brain.filterStreams(
            t,
            this._video.clientWidth,
            this._video.clientHeight,
            n
          )),
          0 === t.length)
        )
          return Promise.resolve({ index: !1, reasonForSwitch: null });
        if (this._switching.video && !Ri(this._brain))
          return Promise.resolve({ index: !1, reasonForSwitch: null });
        const r = t[t.length - 1];
        if (r.id !== this._lastTargetStreamId) {
          this._lastTargetStreamId = r.id;
          const e = {
            index: this._streams.video.indexOf(r),
            streams: this._streams.video,
          };
          this.fire(ui.STREAM_TARGET_CHANGE, e);
        }
        const i = this._getCurrentStream();
        return this._brain
          .shouldPowerUp(t, i, e)
          .then((e) =>
            !1 === e.index
              ? this._brain
                  .shouldPowerDown(t, i)
                  .then((e) =>
                    !1 === e.index
                      ? { index: e.index, reasonForSwitch: e.reasonForSwitch }
                      : {
                          index: this._streams.video.indexOf(t[e.index]),
                          reasonForSwitch: e.reasonForSwitch,
                        }
                  )
              : {
                  index: this._streams.video.indexOf(t[e.index]),
                  reasonForSwitch: e.reasonForSwitch,
                }
          );
      }),
      (i._loadSegmentsForType = function (e = "video") {
        return this._getStreamIndexToLoadAndSwitchReason(!1)
          .then((t) => {
            let { index: n, reasonForSwitch: r } = t,
              i = { reasonForSwitch: r };
            "audio" === e &&
              (!1 === n && (n = this.sorcerer.video.activeStreamIndex),
              (n = this._brain.getAudioIndexFromVideo(
                this._streams.video,
                this._streams.audio,
                n
              )),
              this.sorcerer.audio.activeStreamIndex === n && (n = !1));
            let s = !1;
            !1 !== n &&
              ((s = n > this.sorcerer[e].activeStreamIndex),
              (this._switching[e] = !0),
              this.sorcerer[e]
                .switchTo(n, !0, i)
                .then(() => {
                  this._switching[e] = !1;
                })
                .catch(console.error));
            let o = s;
            const a = this._brain.getSegmentsToLoad(
                o,
                e,
                this._getCurrentStream()
              ),
              u = this.sorcerer[e].activeStreamIndex;
            for (let c = 0; c < a.length; c++) {
              const t = this._getSegmentUrl(u, a[c], e, !0),
                n = this._getCurrentlyLoadingStreamsForSegment(a[c], e);
              if (n.length > 1) continue;
              if (1 === n.length && u <= n[0]) continue;
              const r = this._isFinalSegment(u, a[c], e),
                i = { stream: u, segment: a[c], type: e },
                s = this.sorcerer[e].streams[u];
              let o = t;
              this._useRangeRequests(u, e) &&
                (o = {
                  url: o,
                  byteRange: this._getRangeForSegment(u, a[c], e),
                });
              const l = this._getSegmentPriority(u, a[c], e),
                d = "video" === e;
              let h = null;
              0 === u && "video" === e && (h = 16e3);
              let f = null;
              try {
                f = this._streams[e][u].segments[a[c]].size;
              } catch (Rl) {}
              s.addSegment(o, {
                identifier: i,
                isFinalSegment: r,
                priority: l,
                includeWithBandwidthChecks: d,
                timeout: h,
                size: f,
              }).catch((e) => {});
            }
          })
          .catch((e) => {
            throw e;
          });
      }),
      (i._loadPreloadSegments = function () {
        for (const e in this._streams) {
          if (0 === this._streams[e].length) continue;
          let t = 0;
          const n = this._brain.getSegmentsToLoad(
            !1,
            e,
            this._getCurrentStream()
          );
          n.length > 0 && (t = n[0]);
          let r = this._preloadSegmentStreamIndex;
          "audio" === e &&
            (r = this._brain.getAudioIndexFromVideo(
              this._streams.video,
              this._streams.audio,
              this._preloadSegmentStreamIndex
            ));
          const i = this._key(r, t, e);
          if (this._waitingOnSet.has(i)) continue;
          const s = this._getSegmentUrl(r, t, e),
            o = this._isFinalSegment(r, t, e),
            a = this.sorcerer[e].streams[r],
            u = { stream: r, segment: t, type: e },
            c = !0;
          let l = s;
          this._useRangeRequests(r, e) &&
            (l = { url: l, byteRange: this._getRangeForSegment(r, t, e) }),
            a
              .addSegment(l, {
                identifier: u,
                isFinalSegment: o,
                loadOnly: c,
                priority: 0,
              })
              .catch((e) => {});
        }
      }),
      (i._loadSegments = function () {
        return (
          this._onReady &&
          this._onReady.then((e) => {
            const t = [];
            for (const n in this._streams)
              this._streams[n].length > 0 &&
                t.push(this._loadSegmentsForType(n));
            return Promise.all(t);
          })
        );
      }),
      (i._handleQueued = function (e) {
        this._waitingOnSet.add(this._key(e.stream, e.segment, e.type)),
          this._streamsForSegment[e.segment] ||
            (this._streamsForSegment[e.segment] = []),
          -1 === this._streamsForSegment[e.segment].indexOf(e.stream) &&
            this._streamsForSegment[e.segment].push(e.stream);
      }),
      (i._clearWaitingOn = function (e) {
        (this._streamsForSegment[e.segment] || []).forEach((t) => {
          this._waitingOnSet.delete(this._key(t, e.segment, e.type));
        });
      }),
      (i._handleAborted = function (e) {
        this._streamsForSegment[e.segment] && this._clearWaitingOn(e);
      }),
      (i._handleAppendBufferEnd = function (e) {
        this.fire(ui.APPEND_BUFFER_END, { identifier: e }),
          this._restartLoadSegmentsIntervalWithBackoff(),
          this._checkSwitchUp &&
            e.stream === this._lastStreamIndex &&
            ((this._checkSwitchUp = !1),
            (this._clearBufferAtTime =
              this._streams.video[e.stream].segments[e.segment].start)),
          this._streamsForSegment[e.segment] && this._clearWaitingOn(e);
        const t = this._brain.canPlayFromTimeInStream(
          this._timeToSeekTo,
          this._getCurrentStream()
        );
        null !== this._timeToSeekTo &&
          this._resolveSeek &&
          t &&
          (this._resolveSeek(this._timeToSeekTo), (this._resolveSeek = null)),
          this._gapJumper && this._gapJumper.onSegmentAppended();
      }),
      (i._handleDownloadStart = function (e) {
        this.fire(ui.DOWNLOAD_START, { identifier: e });
      }),
      (i._handleDownloadEnd = function (e, t) {
        this.fire(ui.DOWNLOAD_END, { identifier: e, data: t });
      }),
      (i._handleDownloadError = function (e, t) {
        this._clearWaitingOn(e);
        let n = ui.DOWNLOAD_ERROR;
        410 === t && (n = ui.MEDIA_URL_EXPIRED),
          502 === t && this.video.metadata.drm && (n = ui.DRM_FAILURE),
          this.fire(n, { identifier: e, status: t });
      }),
      (i._handleDownloadTimeout = function (e, t) {
        this.fire(ui.DOWNLOAD_TIMEOUT, { identifier: e, data: t }),
          this._streamsForSegment[e.segment] && this._clearWaitingOn(e),
          "video" === e.type
            ? (this._switching.video = !1)
            : "audio" === e.type && (this._switching.audio = !1);
      }),
      (i._handleQuotaExceededError = function (e) {
        this.fire(ui.QUOTA_EXCEEDED_ERROR, { buffered: e });
      }),
      (i._handleStreamChangeStart = function (e, t) {
        const n = {
          previousStreamIndex: this._manifest.video.indexOf(
            this._streams.video[e]
          ),
          index: this._manifest.video.indexOf(this._streams.video[t]),
          streams: this._manifest.video,
        };
        this.fire(ui.STREAM_CHANGE_START, n);
      }),
      (i._handleStreamChange = function (e, t) {
        e > this._lastStreamIndex &&
          this.currentTime > 0 &&
          (this._checkSwitchUp = !0),
          (this._lastStreamIndex = e);
        const n = {
          index: this._manifest.video.indexOf(this._streams.video[e]),
          streams: this._manifest.video,
          metadata: t,
        };
        this.fire(ui.STREAM_CHANGE, n);
      }),
      (i._initDrm = function (e = [], t = [], n = {}) {
        const r = this._telecineVideo.drmHandler;
        if (!r) return;
        const i = {
          audio: t.map((e) => `${e.mime_type};codecs="${e.codecs}"`),
          video: e.map((e) => `${e.mime_type};codecs="${e.codecs}"`),
        };
        r.init(this, i, n), r.setFallbackCallback(() => this.pause());
      }),
      (i._setupCMCDLogger = function () {
        var e, t;
        (null == (e = this._options.tests) || null == (t = e.cmcd)
          ? void 0
          : t.group) &&
          (this.CMCDLogger = new ds(this, this._options.sessionMetadata));
      }),
      (i._loadMediaManifest = function () {
        return import("./media-manifest.module.js");
      }),
      r(n, [
        {
          key: "preload",
          get: function () {
            return this._preload;
          },
          set: function (e) {
            this._handlePreloadChanged(this._preload, e), (this._preload = e);
          },
        },
        {
          key: "videoElement",
          get: function () {
            return this._video;
          },
        },
        {
          key: "videoWidth",
          get: function () {
            const e = this._getCurrentStream();
            return e ? e.width : this._video.videoWidth;
          },
        },
        {
          key: "videoHeight",
          get: function () {
            const e = this._getCurrentStream();
            return e ? e.height : this._video.videoHeight;
          },
        },
        {
          key: "restrictedStreamIndexes",
          get: function () {
            return this._restrictedStreamIndexes;
          },
          set: function (e = []) {
            this._restrictedStreamIndexes.join(",") !== e.join(",") &&
              ((this._restrictedStreamIndexes = e),
              this._onReady
                .then(() => this.lockStreamIndexes())
                .catch(console.error));
          },
        },
        {
          key: "currentTime",
          get: function () {
            return null !== this._timeToSeekTo
              ? this._timeToSeekTo
              : this._video.currentTime;
          },
          set: function (e) {
            (this._startedPlaying || 0 !== e) && this.seekToTime(e);
          },
        },
        {
          key: "downloadSpeed",
          get: function () {
            return this._lastDownloadBitrate;
          },
        },
        {
          key: "brainDebug",
          get: function () {
            const e =
              this.sorcerer && this._brain && this._brain.getCurrentSpeed
                ? this._brain.getCurrentSpeed()
                : null;
            let t =
              this.sorcerer && this.sorcerer.getResponseSpeeds
                ? this.sorcerer.getResponseSpeeds()
                : null;
            return (
              (t = t ? t.slice(-20) : []),
              { currentSpeed: e, responseSpeeds: t }
            );
          },
        },
        {
          key: "isLowerProfileAvailable",
          get: function () {
            return this.sorcerer
              ? this.sorcerer.video.activeStreamIndex > 0
              : null;
          },
        },
        {
          key: "videoStreams",
          get: function () {
            return this._streams.video;
          },
        },
      ]),
      n
    );
  })(qi),
  Is = (function () {
    function e(e) {
      (this._scanner = e),
        (this._currentTime = 0),
        (this._latencyInterval = setInterval(
          this._onLatencyInterval.bind(this),
          500
        ));
    }
    var t = e.prototype;
    return (
      (t.destroy = function () {
        clearInterval(this._latencyInterval);
      }),
      (t._onLatencyInterval = function () {
        const e = this._scanner.videoElement,
          t = this._scanner.getCurrentStream();
        if (!e || !t) return;
        this._currentTime = e.currentTime;
        const n = this._computeLatency();
        null !== n &&
          ((this._latency = n),
          this._scanner.fire(ci.LATENCY_UPDATED, n),
          this._scanner.lowLatencyMode &&
            (Le.browser.ie ||
              Le.browser.safari ||
              (null !== this._scanner.presentationDelay &&
                (e.playbackRate = 1))));
      }),
      (t._estimateLiveEdge = function () {
        const e = this._scanner.getCurrentStream();
        if (!e) return null;
        const t = e.segments[0],
          n =
            this._scanner.videoElement.buffered.length &&
            (null == t ? void 0 : t.start);
        return t && e.hasProgramDateTime && n
          ? n + (Date.now() - t.programDateTime) / 1e3
          : e.edge + e.age;
      }),
      (t._computeLatency = function () {
        const e = this._estimateLiveEdge();
        return null === e || 0 === this._currentTime
          ? null
          : e - this._currentTime;
      }),
      (t._getForwardBufferLength = function () {
        const e = this._scanner.videoElement,
          t = this._scanner.getCurrentStream();
        if (!e || !t) return 0;
        const n = e.buffered.length;
        return n ? e.buffered.end(n - 1) : t.edge - this._currentTime;
      }),
      r(e, [
        {
          key: "latency",
          get: function () {
            return this._latency;
          },
        },
        {
          key: "liveSyncPosition",
          get: function () {
            const e = this._estimateLiveEdge(),
              t = this._scanner.presentationDelay,
              n = this._scanner.getCurrentStream();
            return null === e || null === t || null === n
              ? 0
              : e - t - this.edgeStalled;
          },
        },
        {
          key: "edgeStalled",
          get: function () {
            const e = this._scanner.getCurrentStream();
            if (!e) return 0;
            const t =
              3 *
              ((this._scanner.lowLatencyMode && e.partTargetDuration) ||
                e.targetDuration);
            return Math.max(e.age - t, 0);
          },
        },
      ]),
      e
    );
  })();
const ws = [1, 2, 5];
let Rs = (function (e) {
  function t(t, n = {}) {
    var r;
    return (
      ((r = e.call(this, t, n) || this)._UPSHIFT_BANDWIDTH_THRESHOLD = 0.4),
      (r._DOWNSHIFT_BANDWIDTH_THRESHOLD = 0.6),
      (r.consecutiveStreamIndex = {}),
      (r.isNewPlayback = !0),
      r
    );
  }
  a(t, e),
    r(t, [
      {
        key: "displayName",
        get: function () {
          return "Live";
        },
      },
    ]);
  var n = t.prototype;
  return (
    (n.optimalStream = function (e, t) {
      var n, r;
      this.isNewPlayback &&
        (null == (r = this.scanner.sorcerer)
          ? void 0
          : r.getResponseSpeeds().length) >= 2 &&
        (this.isNewPlayback = !1);
      if (1 === e.length) return { index: 0, reasonForSwitch: 6 };
      if (this.isNewPlayback) {
        let t = 0,
          n = 0,
          r = this.scanner.videoElement.clientHeight,
          i = [];
        for (let s = 0; s < e.length; s++) {
          let o = e[s].height;
          i.push(o), o < r && o > n && ((t = s), (n = e[s].height));
        }
        return (t = Math.max(0, t - 1)), { index: t, reasonForSwitch: 4 };
      }
      const i = this.getCurrentSpeed();
      let s = t,
        o = t;
      for (let f = 0; f < e.length; f++)
        i * this._UPSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (s = f),
          i * this._DOWNSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (o = f);
      const a = t < s ? s : o;
      this._clearConsecutiveStreamIndexes(a), this.consecutiveStreamIndex[a]++;
      const u = this.scanner.lowLatencyMode ? 0.5 : 1.5,
        c = this.scanner.segmentLength * u,
        l = this.scanner.videoElement,
        d = l.buffered,
        h =
          null == (n = this._options.mediaSourceScanner)
            ? void 0
            : n.droppedFrameSwitchPercent;
      return d && 0 !== d.length
        ? d.end(d.length - 1) - l.currentTime < c
          ? { index: 0 !== t ? t - 1 : 0, reasonForSwitch: 1 }
          : t > 0 &&
            !isNaN(h) &&
            this.hasTooManyDroppedFrames(t, this.scanner.getCurrentStream(), h)
          ? (this.blacklist(t),
            this.scanner.fire(ui.DROPPED_FRAME_PERCENT_EXCEEDED),
            { index: t - 1, reasonForSwitch: 2 })
          : this.consecutiveStreamIndex[a] > 2 && a !== t
          ? { index: a, reasonForSwitch: 3 }
          : { index: t, reasonForSwitch: null }
        : { index: 0, reasonForSwitch: 5 };
    }),
    (n.getCurrentSpeed = function () {
      var e;
      return null == (e = this.scanner.sorcerer)
        ? void 0
        : e.getCurrentSpeed({ type: "average", howMany: 5, weights: ws });
    }),
    (n._clearConsecutiveStreamIndexes = function (e) {
      this.consecutiveStreamIndex[e] || (this.consecutiveStreamIndex[e] = 0);
      for (const t in this.consecutiveStreamIndex)
        this.consecutiveStreamIndex.hasOwnProperty(t) &&
          parseInt(t, 10) !== e &&
          (this.consecutiveStreamIndex[t] = 0);
    }),
    (n.getAvailabilityStart = function (e) {
      return this._getSegmentAvailabilityStart(e.edge);
    }),
    (n.getAvailabilityEnd = function (e) {
      return this._getSegmentAvailabilityEnd(e.edge);
    }),
    (n.canPlayFromTimeInStream = function (e, t) {
      return (
        !!t &&
        this.isTimeInBuffer(
          e,
          this.scanner._video.buffered,
          this.scanner._video.duration
        )
      );
    }),
    (n.getSegmentsToLoad = function (e, t, n) {
      var r, i, s;
      const {
          currentTime: o,
          liveTailTime: a,
          sorcerer: u,
          bufferTarget: c,
          atLiveEdge: l,
        } = this.scanner,
        d =
          null == (r = u[t]) || null == (i = r.sourceBuffer)
            ? void 0
            : i.buffered,
        h = (null == d ? void 0 : d.length) ? d.start(d.length - 1) : 0,
        f = O(Math.max(o, h), d);
      if (!e && f >= c) return [];
      const _ = Math.max(o, a),
        p = l ? n.edge : _ + this.scanner.bufferTarget,
        m = this._getSegmentAvailabilityStart(p),
        v = this._getSegmentAvailabilityEnd(p),
        g =
          this.scanner.lowLatencyMode &&
          (null == (s = n.parts) ? void 0 : s.length),
        y = (g ? n.parts : n.segments).filter(
          (t) =>
            !!t.uri &&
            (e || !this.scanner.isSegmentAdded(t)) &&
            !(t.end < m || t.start > v)
        );
      return (
        g &&
          y.forEach((e, t) => {
            for (; (e = e.dependentOn); )
              y.includes(e) ||
                this.scanner.isStreamSegmentAdded(e) ||
                y.splice(t, 0, e);
          }),
        u[t].activeStreamIndex,
        y
      );
    }),
    (n._getSegmentAvailabilityStart = function (e) {
      const t = e - this._getPresentationDelay();
      return Math.max(0, t);
    }),
    (n._getSegmentAvailabilityEnd = function (e) {
      const t = this._getPresentationDelay(),
        n = this.scanner.bufferTarget,
        r = e - Math.max(0, t - n);
      return Math.max(0, r);
    }),
    (n._getPresentationDelay = function () {
      return (
        this.scanner.presentationDelay ||
        this.scanner.manifest.presentationDelay
      );
    }),
    t
  );
})(us);
const ks = ["disabled", "hidden", "showing"],
  Ps = ["subtitles", "captions", "descriptions", "chapters", "metadata"],
  Ds = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"],
  Os = new WeakMap(),
  Ls = new WeakMap();
let Cs = (function () {
  function e(
    { kind: e, src: t = null, label: n = "", language: r = "", id: i = Ei() },
    s
  ) {
    if (-1 === Ps.indexOf(e)) throw Oi(12, "SYNTAX_ERR", "Syntax Error");
    sn(this),
      Object.defineProperties(this, {
        kind: { value: e, enumerable: !0 },
        label: { value: n, enumerable: !0 },
        language: { value: r, enumerable: !0 },
        id: { value: `${i}`, enumerable: !0 },
        rtl: { value: -1 !== Ds.indexOf(r.substr(0, 2)), enumerable: !0 },
      }),
      (this.video = s),
      (this.src = t),
      (this._modeHasBeenSet = !1),
      Os.set(this, "disabled");
  }
  return (
    (e.prototype.dispatchEvent = function (e) {
      this.fire(e, { target: this });
    }),
    r(e, [
      {
        key: "mode",
        get: function () {
          return Os.get(this);
        },
        set: function (e) {
          if (ks.indexOf(e) > -1) {
            if (((this._modeHasBeenSet = !0), Os.get(this) === e)) return;
            Os.set(this, e),
              this.video.currentScanner &&
                this.video.currentScanner.setModeForTrack(this, e),
              this.dispatchEvent("modechange");
          }
        },
      },
      {
        key: "src",
        get: function () {
          return Ls.get(this);
        },
        set: function (e) {
          Ls.set(this, e), this.video.fire(ui.TEXT_SRC_UPDATE, this);
        },
      },
      {
        key: "cues",
        get: function () {
          return this.video.currentScanner
            ? this.video.currentScanner.getCuesForTrack(this)
            : [];
        },
      },
      {
        key: "activeCues",
        get: function () {
          return this.video.currentScanner
            ? this.video.currentScanner.getActiveCuesForTrack(this)
            : [];
        },
      },
      {
        key: "trackElement",
        get: function () {
          return document.getElementById(`telecine-track-${this.id}`);
        },
      },
    ]),
    e
  );
})();
function Ms(e) {
  var t = /^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/.exec(e);
  if (!t) return -1;
  var n = parseInt(t[4], 10) / 1e3;
  return (
    (n += parseInt(t[3], 10)),
    t[2] && (n += 60 * parseInt(t[2], 10)),
    t[1] && (n += 60 * parseInt(t[1], 10) * 60),
    n
  );
}
function Ns(e, t, n) {
  return n
    ? t
      ? t(e)
      : e
    : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
function xs(e, t) {
  try {
    var n = e();
  } catch (Rl) {
    return t(Rl);
  }
  return n && n.then ? n.then(void 0, t) : n;
}
function Us(e, t) {
  return e && e.then ? e.then(t) : t(e);
}
function Fs() {}
const js = Le.browser.ie || Le.browser.edge ? 0.5 : 0.2;
function Bs(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    try {
      return Promise.resolve(e.apply(this, t));
    } catch (Rl) {
      return Promise.reject(Rl);
    }
  };
}
function Vs(e, t) {
  var n = e();
  return n && n.then ? n.then(t) : t(n);
}
function Hs(e, t) {
  if (!t) return e && e.then ? e.then(Fs) : Promise.resolve();
}
let Xs = (function (e) {
  function t(t, n = {}) {
    var r, i, s, o;
    ((o = e.call(this, t, n) || this)._playInitiated = !1),
      (o._captionsEnabled = !1),
      (o._atLiveEdge = !0),
      (o._atLiveTail = !1),
      (o._STREAM_SWITCH_CHECK_INTERVAL = 2e3),
      (o._DOWN_SHIFT_CHECK_INTERVAL = 1e4),
      o.reset();
    const a = n.lowLatencyMode ? 5 : 12;
    return (
      (o.bufferTarget = n.bufferTarget || a),
      (o.presentationDelay = n.presentationDelay || a),
      (o.lowLatencyMode = n.lowLatencyMode),
      (o.dvrEnabled = null !== (r = n.dvrEnabled) && void 0 !== r && r),
      (o._timeoutTest =
        null == (i = o._options.tests) || null == (s = i.llhls_timeout)
          ? void 0
          : s.group),
      window.addEventListener("online", () => {
        o.play();
      }),
      o
    );
  }
  a(t, e),
    r(t, null, [
      {
        key: "displayName",
        get: function () {
          return "HLSLiveScanner";
        },
      },
      {
        key: "supported",
        get: function () {
          return (
            "undefined" != typeof MediaSource && MediaSource.isTypeSupported
          );
        },
      },
      {
        key: "supportedVideoTypes",
        get: function () {
          return ["application/x-mpegURL"];
        },
      },
    ]);
  var n = t.prototype;
  return (
    (n.deactivate = function () {
      e.prototype.deactivate.call(this), this.reset();
    }),
    (n.reset = function () {
      var e, t, n;
      null == (e = this._sorcerer) || e.destroy(),
        null == (t = this._manifestLoader) || t.stop(),
        null == (n = this._latencyController) || n.destroy(),
        (this._videoReady = new P()),
        (this._sorcerer = null),
        (this._streams = {}),
        (this._streams.video = []),
        (this._streams.audio = []),
        (this._lastStreamIndex = 0),
        (this._isOnline = !1),
        (this._hasLiveEventEnded = !1),
        (this._timeSinceLastStreamSwitchCheck = 0),
        (this._timeSinceLastDownShift = Number.NEGATIVE_INFINITY),
        (this._lastStallCurrentTime = -1),
        (this._timeToSeekTo = null),
        (this._resolveSeek = null),
        (this._abr = new Rs(this, this._options)),
        (this._latencyController = new Is(this)),
        (this._restrictedStreamIndexes = []),
        (this._switching = {}),
        (this._segmentsAdded = {}),
        (this._captionsAdded = {});
    }),
    (n.endLive = function () {
      var t;
      (this._isOnline = !1),
        (this._hasLiveEventEnded = !0),
        (this.dvrEnabled && !this.atLiveEdge) ||
          (null == (t = this._manifestLoader) || t.stop(),
          this._sorcerer &&
            (this._sorcerer.abortFetches(), this._sorcerer.endOfStream()),
          this.dvrEnabled || e.prototype.deactivate.call(this),
          this.fire(ii.ENDED));
    }),
    (n._signalOnline = function () {
      this._isOnline || ((this._isOnline = !0), this.fire(ci.STREAM_ONLINE));
    }),
    (n._signalOffline = function () {
      this._isOnline && ((this._isOnline = !1), this.fire(ci.STREAM_OFFLINE));
    }),
    (n._toggleConnection = function (e) {
      e ? this._signalOnline() : this._signalOffline();
    }),
    (n._loadManifest = function (e) {
      try {
        const t = this;
        if (t._hasLiveEventEnded) return;
        t._manifestLoader &&
          (t._manifestLoader.stop(), t._manifestLoader.off());
        let n = [t._loadMediaManifest()];
        return (
          t.video.metadata.p2pReady && n.push(t.video.metadata.p2pReady),
          Ns(Promise.allSettled(n), function ([n]) {
            const {
              M3U8Loader: r,
              PLAYLIST_UPDATE: i,
              PLAYLIST_ERROR: s,
              convertTsCodecs: o,
            } = n.value;
            return (
              (t._manifestLoader = new r()),
              (t._manifestLoader.lowLatencyMode = t.lowLatencyMode),
              (t._manifestLoader.dvrEnabled = t.dvrEnabled),
              t._manifestLoader.on(i, t._onPlaylistUpdate.bind(t)),
              t._manifestLoader.on(s, (e) => {
                t._signalOffline();
              }),
              Us(
                xs(
                  function () {
                    const n = t.video.metadata.playlistRefreshUrl;
                    return Ns(t._manifestLoader.start(e, n), function (e) {
                      (t._manifest = e), t._signalOnline();
                    });
                  },
                  function (e) {
                    throw (t._signalOffline(), t.endLive(), e);
                  }
                ),
                function (e) {
                  (t._streams.video = qs(
                    (function (e) {
                      return e.filter(
                        (t) =>
                          t.codecs.split(".")[0] === e[0].codecs.split(".")[0]
                      );
                    })(
                      (function (e) {
                        const t = e.slice(0);
                        return (
                          t.sort(function (e, t) {
                            const n = e.width * e.height * e.bitrate,
                              r = t.width * t.height * t.bitrate;
                            return e.width === t.width && e.height === t.height
                              ? e.framerate - t.framerate
                              : n - r;
                          }),
                          t
                        );
                      })(t._manifest.video)
                    )
                  )),
                    (t._streams.audio = qs(
                      v(g(t._streams.video, ({ audio: e }) => e))
                    ));
                  const { index: n, reasonForSwitch: r } = t._getStream(
                    "video",
                    !0
                  );
                  let i = { reasonForSwitch: r };
                  return Ns(
                    t._manifestLoader.switchTo("video", n),
                    function () {
                      let e,
                        r = [];
                      if (t._streams.audio.length) {
                        let { index: n } = t._getStream("audio", !0);
                        (e = n), r.push(t._manifestLoader.switchTo("audio", e));
                      }
                      if (
                        t.manifest.captions &&
                        t.manifest.captions.length > 0
                      ) {
                        const { index: e } = t._getStream("subtitles", !0);
                        r.push(t._manifestLoader.switchTo("subtitles", e));
                      }
                      return Ns(Promise.all(r), function () {
                        var r, s;
                        null == (r = t._sorcerer) || r.destroy(),
                          (t._sorcerer = new os(t._video, {
                            fetcherRetryAbortErrors: !1,
                            fetcherTimeout: 8e3,
                          })),
                          t._sorcerer.initFrameDropper(),
                          t._streams.video.forEach((e) => {
                            t._sorcerer.addStream(
                              o(
                                Ai(
                                  t._manifestLoader.activeStream("video")
                                    .mimeType,
                                  e.codecs
                                )
                              ),
                              e.initSegment
                            );
                          }),
                          t._streams.audio.forEach((e) => {
                            t._sorcerer.addStream(
                              o(
                                Ai(
                                  t._manifestLoader.activeStream("audio")
                                    .mimeType,
                                  e.codecs
                                )
                              ),
                              e.initSegment
                            );
                          }),
                          t.fire(ui.STREAMS_LOADED, t._streams),
                          t.manifest.captions &&
                            t.manifest.captions.length > 0 &&
                            (t.manifest.captions.forEach(
                              t._loadTextTrack.bind(t)
                            ),
                            t.fire(ui.TEXT_TRACKS_AVAILABLE)),
                          t._setUpMediaSorcererEvents(),
                          t._sorcerer.video.switchTo(n, !1, i),
                          t._streams.audio.length &&
                            (null == (s = t._sorcerer.audio) ||
                              s.switchTo(e, !1));
                      });
                    }
                  );
                }
              )
            );
          })
        );
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._refreshManifest = function () {
      try {
        const e = this;
        return (function (e) {
          if (e && e.then) return e.then(Fs);
        })(
          xs(
            function () {
              return Ns(e._manifestLoader.update(), function () {
                e._signalOnline();
              });
            },
            function () {
              e._signalOffline();
            }
          )
        );
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._setUpMediaSorcererEvents = function () {
      this._sorcerer.video.on(
        "streamchange",
        this._handleStreamChange.bind(this)
      ),
        this._sorcerer.video.on(
          "streamchangestart",
          this._handleStreamChangeStart.bind(this)
        ),
        this._sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)),
        this._sorcerer.on(
          "downloadtimeout",
          this._handleDownloadTimeout.bind(this)
        ),
        this._sorcerer.on(
          "downloadabort",
          this._handleDownloadAbort.bind(this)
        ),
        this._sorcerer.on(
          "appendbufferend",
          this._handleBufferAppend.bind(this)
        );
    }),
    (n._handleDownloadEnd = function (e, t) {
      if (e && e.isInitSegmentRequest) return;
      const n = this._getCurrentStream();
      (t.extraContext = {
        liveAvail: {
          start: this._abr.getAvailabilityStart(n),
          end: this._abr.getAvailabilityEnd(n),
        },
      }),
        this.fire(ui.DOWNLOAD_END, { identifier: e, data: t });
    }),
    (n._handleDownloadTimeout = function (e, t) {
      (e && e.isInitSegmentRequest) ||
        (this._key(e),
        this._clearSegment(e),
        (this._switching[e.type] = !1),
        this.fire(ui.DOWNLOAD_TIMEOUT, { identifier: e, data: t }));
    }),
    (n._handleDownloadAbort = function (e) {
      (e && e.isInitSegmentRequest) || (this._key(e), this._clearSegment(e));
    }),
    (n._handleStreamChangeStart = function (e, t) {
      const n = {
        previousStreamIndex: this._streams.video.indexOf(
          this._streams.video[e]
        ),
        index: this._streams.video.indexOf(this._streams.video[t]),
        streams: this._streams.video,
      };
      this.fire(ui.STREAM_CHANGE_START, n);
    }),
    (n._handleStreamChange = function (e, t = {}) {
      this.fire(ui.STREAM_CHANGE, {
        index: e,
        streams: this._streams.video,
        metadata: t,
      });
    }),
    (n._handleBufferAppend = function (e) {
      const { type: t, stream: n } = e,
        r = this.sorcerer[t].sourceBuffer.buffered,
        i = this._getSegmentById(e);
      i &&
        r.length &&
        (this._streams[t][n].playlist.timeOffset =
          r.end(r.length - 1) - (i.end - i.timeOffset)),
        null !== this._timeToSeekTo &&
          this._resolveSeek &&
          (this._timeToSeekTo < this.liveTailTime &&
            (this._timeToSeekTo = this.liveTailTime),
          this._abr.canPlayFromTimeInStream(
            this._timeToSeekTo,
            this._getCurrentStream()
          ) &&
            (this._resolveSeek(this._timeToSeekTo),
            (this._resolveSeek = null)));
    }),
    (n._key = function ({ type: e, segment: t, part: n }) {
      return `${e}_${t}_${n}`;
    }),
    (n._getSegmentById = function ({
      type: e,
      stream: t,
      segment: n,
      part: r,
    }) {
      const i = this._streams[e][t].getSegmentBySN(n);
      return (null == i ? void 0 : i.getPart(r)) || i;
    }),
    (n._clearSegment = function (e) {
      if (e.part > 0) {
        const t = o(o({}, e), {}, { part: e.part - 1 });
        this._clearSegment(t);
      }
      const t = this._key(e);
      delete this._segmentsAdded[t];
    }),
    (n.isSegmentAdded = function (e) {
      return !!this._segmentsAdded[this._key(e)];
    }),
    (n.isStreamSegmentAdded = function (e) {
      const t = this._key(e),
        n = this._sorcerer[e.type].activeStreamIndex;
      return !!this._segmentsAdded[t] && this._segmentsAdded[t].stream === n;
    }),
    (n._onPlaylistUpdate = function (e, t) {
      try {
        var n;
        const i = this,
          { type: s } = e;
        var r;
        return (
          null == (n = i._sorcerer) ||
            n.setLiveSeekableRange(i.liveTailTime, i.liveEdgeTime),
          i.fire(ui.STREAM_UPDATED, e),
          "subtitles" === s
            ? void (
                i._captionsEnabled &&
                (null == (r = i.manifest.captions) ? void 0 : r.length) > 0 &&
                i._addTextTrackCue()
              )
            : (t || i._loadSegmentsForType(s),
              i._toggleConnection(i._hasNewSegments(s) || !i._atDurationEnd()),
              i._checkForPlaybackGap(),
              (i.lowLatencyMode || i.video.metadata.p2pReady) &&
                i._checkForPlaybackStall(),
              Ns())
        );
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._loadTextTrack = function ({ label: e, language: t }, n) {
      if (!this._captionsTrack) {
        const r = new Cs(
          { label: e, id: n, kind: "captions", language: t },
          this._telecineVideo
        );
        (this._telecineVideo.textTracks = vi([r])),
          (this._captionsTrack = this.addTextTrack(r));
      }
    }),
    (n._addTextTrackCue = function () {
      try {
        const e = this;
        return Ns(e._videoReady, function () {
          e.manifest.captions &&
            e.manifest.captions[0].segments
              .filter(
                (t) =>
                  t.end >= e.currentTime &&
                  t.start <= e.currentTime + e.bufferTarget
              )
              .forEach(
                Bs(function (t) {
                  const n = `${t.type}_${t.mediaSequenceNumber}`;
                  if (!e._captionsAdded[n])
                    return (
                      (e._captionsAdded[n] = !0),
                      Ns(ae(t.url).text(), function (t) {
                        const n = (function (e) {
                            var t = 0,
                              n = e.split(/(?:(?:\r\n|\n){2,})/),
                              r = [],
                              i = null;
                            do {
                              0 === t &&
                                /^\uFEFF?WEBVTT(?: .*)?/.test(n[t]) &&
                                t++,
                                (i =
                                  /^(?:(.*)(?:\r\n|\n))?([\d:,.]+) --> ([\d:,.]+)(.*)?(?:\r\n|\n)([\s\S]*)/.exec(
                                    n[t]
                                  )) &&
                                  r.push({
                                    startTime: Ms(i[2]),
                                    endTime: Ms(i[3]),
                                    text: i[5],
                                  }),
                                t++;
                            } while (t < n.length);
                            return r;
                          })(t),
                          r = (function (e) {
                            const t = e.match(/=MPEGTS:(\d+),/);
                            return ((t && t[1]) || 0) / 9e4;
                          })(t);
                        n.forEach((t) => {
                          (t.startTime = r + t.startTime),
                            (t.endTime = r + t.endTime);
                          const n = new (window.VTTCue || window.TextTrackCue)(
                            t.startTime,
                            t.endTime,
                            t.text
                          );
                          e._captionsTrack.addCue(n);
                        });
                      })
                    );
                })
              );
        });
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._hasNewSegments = function (e) {
      var t;
      const n = this._getCurrentStream(e),
        r = 3 * (this.lowLatencyMode ? 3 : 1);
      return (null == (t = n.playlist) ? void 0 : t.misses) < r;
    }),
    (n._loadSegments = function () {
      try {
        const e = this;
        return Ns(e._videoReady, function () {
          for (const t in e._streams)
            e._streams[t].length > 0 && e._loadSegmentsForType(t);
        });
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._loadSegmentsForType = function (e) {
      try {
        const t = this;
        return Ns(t._videoReady, function () {
          const { index: n, reasonForSwitch: r } = t._getStream(e);
          let i;
          return Vs(
            function () {
              if (n >= 0 && n !== t.sorcerer[e].activeStreamIndex)
                return (
                  (i = n > t.sorcerer[e].activeStreamIndex),
                  (t._switching[e] = !0),
                  Ns(t._manifestLoader.switchTo(e, n), function () {
                    let i = { reasonForSwitch: r };
                    t.sorcerer[e]
                      .switchTo(n, !0, i)
                      .then(() => {
                        t._switching[e] = !1;
                      })
                      .catch(console.error);
                  })
                );
            },
            function () {
              return Ns(b(0), function () {
                const n = t.lowLatencyMode && void 0 !== i,
                  r = t._sorcerer[e].activeStreamIndex,
                  s = t._getCurrentStream(e, r),
                  o = t._abr.getSegmentsToLoad(n, e, s),
                  a = t._getSegmentTimeoutMs();
                o.forEach((n) => {
                  const i = t._key(n),
                    o = {
                      type: e,
                      stream: r,
                      segment: n.segment,
                      part: n.part,
                    },
                    u = "video" === e && !n.hint;
                  let c = a;
                  if (n.hint && t._playInitiated && n.start > t.currentTime) {
                    const e = 1e3 * (n.start - t.currentTime);
                    c = Math.min(8e3, e + a);
                  }
                  const l = (s.bitrate / 8) * n.duration,
                    d = t.sorcerer[e].streams[r],
                    h = t._preventExpiredSegmentUsage(n);
                  d
                    .addSegment(h, {
                      identifier: o,
                      includeWithBandwidthChecks: u,
                      priority: n.programDateTime,
                      excludeConnectTime: t.lowLatencyMode,
                      timeout: t._timeoutTest || t.lowLatencyMode ? c : 8e3,
                      size: t._timeoutTest || t.lowLatencyMode ? l : void 0,
                    })
                    .catch((e) => {
                      e instanceof Yi || e instanceof V || t._clearSegment(o);
                    }),
                    (t._segmentsAdded[i] = o);
                });
              });
            }
          );
        });
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._preventExpiredSegmentUsage = function (e) {
      var t;
      let n = null == e ? void 0 : e.url;
      const r = null == (t = this._manifestLoader) ? void 0 : t.baseUrl;
      return r && n && !n.startsWith(r) && (n = `${r}${e.uri}`), n;
    }),
    (n._getStream = function (e, t = !1) {
      var n, r;
      if (this._switching[e]) return { index: -1, reasonForSwitch: null };
      if ("subtitles" === e) {
        const e = this._manifestLoader.activeStream("video");
        return {
          index: e.subtitles[e.currentRenditions.subtitles].index,
          reasonForSwitch: null,
        };
      }
      if ("audio" === e) {
        const e = this._manifestLoader.activeStream("video");
        return {
          index: e.audio[e.currentRenditions.audio].index,
          reasonForSwitch: null,
        };
      }
      if (
        !t &&
        yi(this._timeSinceLastStreamSwitchCheck) <
          this._STREAM_SWITCH_CHECK_INTERVAL
      )
        return { index: this._lastStreamIndex, reasonForSwitch: null };
      this._timeSinceLastStreamSwitchCheck = gi();
      const i =
          null == (n = this.video) || null == (r = n.metadata)
            ? void 0
            : r.percentShown,
        s = this._abr.filterStreams(
          this._streams.video,
          this._video.clientWidth,
          this._video.clientHeight,
          i
        );
      if (0 === s.length)
        return { index: this._lastStreamIndex, reasonForSwitch: null };
      const { index: o, reasonForSwitch: a } = this._abr.optimalStream(
          s,
          this._lastStreamIndex
        ),
        u = s[o],
        c = this._streams.video.indexOf(u);
      if (c >= 0 && (t || c !== this._lastStreamIndex)) {
        if (
          c > this._lastStreamIndex &&
          yi(this._timeSinceLastDownShift) < this._DOWN_SHIFT_CHECK_INTERVAL
        )
          return { index: this._lastStreamIndex, reasonForSwitch: a };
        c < this._lastStreamIndex && (this._timeSinceLastDownShift = gi());
        const e = { index: c, streams: this._streams.video };
        return (
          this.fire(ui.STREAM_TARGET_CHANGE, e),
          (this._lastStreamIndex = c),
          { index: c, reasonForSwitch: a }
        );
      }
      return { index: this._lastStreamIndex, reasonForSwitch: a };
    }),
    (n.getCurrentStream = function (e = "video") {
      return this._getCurrentStream(e);
    }),
    (n._getCurrentStream = function (e = "video", t = 0) {
      return (
        void 0 !== this._sorcerer &&
          null !== this._sorcerer &&
          (t = this._sorcerer[e].activeStreamIndex),
        this._streams[e][t]
      );
    }),
    (n._checkForPlaybackStall = function () {
      if (
        this._video.currentTime === this._lastStallCurrentTime &&
        gi() - this._lastStallCheckTime >= 1e3 &&
        this._shouldBeMakingProgress()
      ) {
        const e =
          "Jumping forward 0.1s" +
          ` because of stall at time of ${this._video.currentTime}`;
        this.fire(ci.STALL_JUMP, { msg: e }), (this._video.currentTime += 0.1);
      }
      (this._lastStallCurrentTime = this._video.currentTime),
        (this._lastStallCheckTime = gi());
    }),
    (n._shouldBeMakingProgress = function () {
      return (
        0 !== this._video.readyState &&
        !!this._video.buffered.length &&
        !this._video.paused &&
        this._hasContentFor(this._video.buffered, this._video.currentTime)
      );
    }),
    (n._hasContentFor = function (e, t) {
      for (let n = 0; n < e.length; n++)
        if (!(t < e.start(n) - 0.1 || t > e.end(n) - 0.5)) return !0;
      return !1;
    }),
    (n._checkForPlaybackGap = function () {
      const e = this.buffered;
      if (!e.length) return;
      const t = e.length,
        n = this._video.currentTime;
      let r, i, s;
      try {
        r = (function (e, t) {
          if (!e || !e.length) return null;
          if (1 === e.length && e.end(0) - e.start(0) < 1e-6) return null;
          let n;
          for (let r = 0; r < e.length; r++)
            if (e.start(r) > t && (0 === r || e.end(r - 1) - t <= 0.5)) {
              n = r;
              break;
            }
          return n >= 0 ? n : null;
        })(e, n);
      } catch (Rl) {
        throw (DOMException, Rl);
      }
      if (null === r) return;
      if (0 === this._video.readyState) return;
      if (this._video.paused) return;
      if (t <= r) return;
      try {
        (i = e.start(r)), (s = e.end(t - 1));
      } catch (Rl) {
        throw (DOMException, Rl);
      }
      const o = i - n,
        a = s - i,
        u = this.lowLatencyMode ? 1 : 2;
      if (a > 0 && a <= this.segmentLength * u) {
        const e =
          "Preventing jump too close to buffered end time." +
          ` Would have jumped to: ${i}.` +
          ` Last buffered end time ${s}.`;
        this.fire(ci.BUFFER_GAP_JUMP_PREVENT, { msg: e });
      } else {
        if (0 === r) {
          const e =
            `Jumping forward ${o}` +
            ` seconds because of gap before start time of ${i}`;
          this.fire(ci.BUFFER_GAP_JUMP, { msg: e });
        } else {
          const t =
            `Jumping forward ${o} seconds because of gap starting at` +
            ` ${e.end(r - 1)} and ending at ${i}`;
          this.fire(ci.BUFFER_GAP_JUMP, { msg: t });
        }
        this._video.currentTime = i + 0.1;
      }
    }),
    (n._atDurationEnd = function () {
      const e = this.buffered;
      return !!(
        e &&
        e.length &&
        this._video.currentTime + js > e.end(e.length - 1)
      );
    }),
    (n.setVideoSrc = function (e) {
      try {
        const t = this;
        return Ns(t._startPreload(t._preload), function () {
          return Ns(t._loadManifest(e), function () {
            (t._video.src = URL.createObjectURL(t._sorcerer.mediaSource)),
              t._videoReady.resolve();
          });
        });
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._startPreload = function (e) {
      try {
        const t = this;
        return (
          (t._preloadReady = new P()),
          ("none" === e && t.paused) || t._preloadReady.resolve(),
          t._preloadReady
        );
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n.getBitrateAtTime = function (e, t) {
      if (!this._sorcerer) return 0;
      const n = this._sorcerer.streamIndexAtTime(e, t);
      return this._streams[t][n] ? this._streams[t][n].bandwidth : 0;
    }),
    (n.onprogress = function () {
      this._checkForPlaybackGap();
    }),
    (n.ondurationchange = function () {
      this._checkForPlaybackGap();
    }),
    (n.ontimeupdate = function () {
      if (!this._sorcerer) return;
      if ((e.prototype.ontimeupdate.call(this), null !== this._timeToSeekTo))
        return;
      (this.atLiveTail = this._isNearLiveTail(this._video.currentTime)),
        this._shouldSnapToLiveEdge(this._video.currentTime)
          ? (this.atLiveEdge = !0)
          : (this._video.playbackRate < 1 ||
              this._hasDriftedBehindLiveEdge()) &&
            (this.atLiveEdge = !1),
        this.fire(ui.DROPPED_FRAMES, this._sorcerer.getDroppedFrameTotal());
      const t = this._getCurrentStream();
      if (t) {
        const e = {
          speed: this._abr.getCurrentSpeed(),
          bitrate: t.bitrate,
          speeds: this._sorcerer.getResponseSpeeds(),
        };
        this.fire(ui.BANDWIDTH, e);
      }
      !this._isOnline && this._atDurationEnd() && this.fire(ci.STREAM_OFFLINE),
        !this.lowLatencyMode &&
          yi(this._timeSinceLastStreamSwitchCheck) >
            this._STREAM_SWITCH_CHECK_INTERVAL &&
          this._loadSegments();
    }),
    (n._shouldSnapToLiveEdge = function (e) {
      return e >= this.liveEdgeTime - 1 * this.segmentLength;
    }),
    (n._hasDriftedBehindLiveEdge = function (e) {
      return e >= this.liveEdgeTime - 2 * this.segmentLength;
    }),
    (n._isNearLiveTail = function (e) {
      return e <= this.liveTailTime + 2 * this.segmentLength;
    }),
    (n._getSeekReadyPromiseForTime = function (e = this._timeToSeekTo) {
      return new Promise((t, n) => {
        this._abr.canPlayFromTimeInStream(e, this._getCurrentStream())
          ? t(e)
          : (this._resolveSeek = t);
      }).then(
        (e) => (
          (this._timeToSeekTo = null),
          (this._seekInProgressPromise = null),
          (this._video.currentTime = e),
          new Promise((e, t) => {
            this._lastSeekReject = t;
            const n = () => {
              e(this._video.currentTime),
                this._video.removeEventListener("seeked", n);
            };
            this._video.addEventListener("seeked", n);
          })
        )
      );
    }),
    (n.seekToTime = function (e) {
      if (!this.dvrEnabled || e === this.currentTime) return Promise.resolve();
      const t = null === this._timeToSeekTo;
      let n;
      if (
        (t ||
          (this._lastSeekReject &&
            (this._lastSeekReject(), (this._lastSeekReject = null)),
          (this._seekInProgressPromise = null),
          (this._timeToSeekTo = null),
          (this._resolveSeek = null)),
        (this._timeToSeekTo = e),
        !this._abr.canPlayFromTimeInStream(e, this._getCurrentStream()))
      )
        try {
          this._segmentsAdded = {};
          for (const e in this._streams)
            if (this._streams[e].length > 0) {
              const t = this.sorcerer[e].activeStreamIndex;
              this.sorcerer[e].streams[t].abort();
            }
          n = this._sorcerer.removeBuffer();
        } catch (r) {}
      return (
        (this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e)),
        Promise.all([this._videoReady, n])
          .then(
            () => (
              this._loadSegments(),
              t || this.play().catch(this._onPlayError.bind(this)),
              this._seekInProgressPromise
            )
          )
          .catch((e) => {})
      );
    }),
    (n.onpause = function () {
      var t;
      e.prototype.onpause.call(this),
        this.dvrEnabled
          ? (this.atLiveEdge = !1)
          : (null == (t = this._manifestLoader) || t.stop(),
            this._sorcerer &&
              (this._sorcerer.abortFetches(),
              (this._segmentsAdded = {}),
              this._sorcerer.removeBuffer().catch(() => {})));
    }),
    (n.onplay = function () {
      this.dvrEnabled || (this._playInitiated && this._refreshManifest());
    }),
    (n.pause = function () {
      this.dvrEnabled && (this._atLiveEdge = !1), e.prototype.pause.call(this);
    }),
    (n.play = function () {
      const t = this;
      return e.prototype.play.call(
        this,
        Bs(function () {
          return (
            t._preloadReady.resolve(),
            null !== t._timeToSeekTo
              ? Promise.resolve(t._seekInProgressPromise)
              : Vs(
                  function () {
                    if (t._playInitiated && !t.dvrEnabled)
                      return (
                        (t._segmentsAdded = {}),
                        Us(
                          xs(
                            function () {
                              return Hs(t._sorcerer.removeBuffer());
                            },
                            function (e) {}
                          ),
                          function () {
                            return Hs(t._refreshManifest());
                          }
                        )
                      );
                  },
                  function () {
                    return Ns(t._videoReady, function () {
                      return (
                        t._loadSegments(),
                        Ns(t._bufferAvailable(), function () {
                          const e = Math.max(
                            t._latencyController.liveSyncPosition,
                            t._video.buffered.start(0)
                          );
                          return (
                            t._atLiveEdge
                              ? (t.currentTime = e)
                              : (t.currentTime = t._video.currentTime),
                            (t._playInitiated = !0),
                            Promise.resolve()
                          );
                        })
                      );
                    });
                  }
                )
          );
        })
      );
    }),
    (n._bufferAvailable = function () {
      return new Promise((e) => {
        const t = () => {
          this.buffered.length &&
            (this._sorcerer.off("appendbufferend", t), e());
        };
        this._sorcerer.on("appendbufferend", t), t();
      });
    }),
    (n._getSegmentTimeoutMs = function () {
      return this._abr.getSegmentRelativeTimeout(
        this._streams.video,
        this._getCurrentStream("video"),
        1e3 * this.segmentLength
      );
    }),
    (n._loadMediaManifest = function () {
      return import("./media-manifest.module.js");
    }),
    (n.setCaptionsState = function (e) {
      this._captionsEnabled = e;
    }),
    r(t, [
      {
        key: "preload",
        get: function () {
          return this._preload;
        },
        set: function (e) {
          this._preload !== e && "none" !== e && this._preloadReady.resolve(),
            (this._preload = e);
        },
      },
      {
        key: "supportsPlaybackRate",
        get: function () {
          return e.prototype.supportsPlaybackRate && this.dvrEnabled;
        },
      },
      {
        key: "latency",
        get: function () {
          var e;
          return null == (e = this._latencyController) ? void 0 : e.latency;
        },
      },
      {
        key: "lowLatencyMode",
        get: function () {
          return this._lowLatencyMode;
        },
        set: function (e) {
          (this._lowLatencyMode = e),
            this._manifestLoader && (this._manifestLoader.lowLatencyMode = e);
        },
      },
      {
        key: "downloadSpeed",
        get: function () {
          return this._abr.getCurrentSpeed();
        },
      },
      {
        key: "restrictedStreamIndexes",
        get: function () {
          return this._restrictedStreamIndexes;
        },
        set: function (e) {
          this._restrictedStreamIndexes.join(",") !== e.join(",") &&
            ((this._restrictedStreamIndexes = e),
            this._abr.lock(this._restrictedStreamIndexes));
        },
      },
      {
        key: "videoWidth",
        get: function () {
          return this._stream ? this._stream.width : this._video.videoWidth;
        },
      },
      {
        key: "videoHeight",
        get: function () {
          return this._stream ? this._stream.height : this._video.videoHeight;
        },
      },
      {
        key: "currentTime",
        get: function () {
          return null !== this._timeToSeekTo
            ? this._timeToSeekTo
            : this._video.currentTime;
        },
        set: function (e) {
          this._video.readyState <= 0 ||
            (this.dvrEnabled && this._playInitiated
              ? this._shouldSnapToLiveEdge(e)
                ? ((this.atLiveEdge = !0), this.seekToTime(this.liveEdgeTime))
                : ((this.atLiveEdge = !1),
                  this.seekToTime(Math.max(e, this.liveTailTime)))
              : (this._video.currentTime = e));
        },
      },
      {
        key: "liveEdgeTime",
        get: function () {
          return this._latencyController.liveSyncPosition;
        },
      },
      {
        key: "atLiveEdge",
        get: function () {
          return this._atLiveEdge;
        },
        set: function (e) {
          this.dvrEnabled &&
            ((this._atLiveEdge = e),
            this._video.playbackRate > 1 &&
              e &&
              (this._video.playbackRate = 1));
        },
      },
      {
        key: "atLiveTail",
        get: function () {
          return this._atLiveTail;
        },
        set: function (e) {
          this.dvrEnabled &&
            ((this._atLiveTail = e),
            this._video.playbackRate < 1 &&
              e &&
              (this._video.playbackRate = 1));
        },
      },
      {
        key: "liveTailTime",
        get: function () {
          var e, t, n, r;
          const i =
            null !==
              (e =
                null == (t = this._getCurrentStream()) ||
                null == (n = t.segments) ||
                null == (r = n[0])
                  ? void 0
                  : r.start) && void 0 !== e
              ? e
              : 0;
          return Math.max(i, 0);
        },
      },
      {
        key: "ended",
        get: function () {
          return this._hasLiveEventEnded;
        },
      },
      {
        key: "isLowerProfileAvailable",
        get: function () {
          return this._sorcerer
            ? this._sorcerer.video.activeStreamIndex > 0
            : null;
        },
      },
      {
        key: "sorcerer",
        get: function () {
          return this._sorcerer;
        },
      },
      {
        key: "segmentLength",
        get: function () {
          var e, t, n, r;
          return (
            (this.lowLatencyMode &&
              (null == (e = this._manifestLoader) ||
              null == (t = e.activeStream("video"))
                ? void 0
                : t.partTargetDuration)) ||
            (null == (n = this._manifestLoader) ||
            null == (r = n.activeStream("video"))
              ? void 0
              : r.targetDuration)
          );
        },
      },
    ]),
    t
  );
})(qi);
function qs(e) {
  return (
    e.forEach((e, t) => {
      e.index = t;
    }),
    e
  );
}
const Gs = document.createElement("video"),
  Ws = { "application/x-mpegURL": "application/x-mpegURL" };
let Ks = (function (e) {
    function t(t, n = {}) {
      var r, i, s;
      return (
        ((s = e.call(this, t, n) || this)._apiManifestUrl = null),
        (s._playInitiated = !1),
        (s._atLiveEdge = !0),
        (s._atLiveTail = !1),
        (s._secondsBehindPlaylistStart = 0),
        (s._playlistOffsetSet = !1),
        s.reset(),
        (s.dvrEnabled = null !== (r = n.dvrEnabled) && void 0 !== r && r),
        (s.liveEventStartTimeEpoch =
          null !== (i = n.liveEventStartTime) && void 0 !== i ? i : 0),
        window.addEventListener("online", () => {
          s.play();
        }),
        s
      );
    }
    a(t, e),
      r(t, null, [
        {
          key: "displayName",
          get: function () {
            return "NativeHLSLiveScanner";
          },
        },
        {
          key: "supported",
          get: function () {
            return t.supportedVideoTypes.length > 0;
          },
        },
        {
          key: "supportedVideoTypes",
          get: function () {
            const e = [];
            if ("function" != typeof Gs.canPlayType) return e;
            for (const t in Ws) {
              const n = Ws[t];
              Gs.canPlayType(n).replace(/^no$/, "") && e.push(t);
            }
            return e;
          },
        },
      ]);
    var n = t.prototype;
    return (
      (n.deactivate = function () {
        e.prototype.deactivate.call(this), this.reset();
      }),
      (n.reset = function () {
        this._manifestRefreshTimeout &&
          clearTimeout(this._manifestRefreshTimeout),
          (this._onReady = null),
          (this._manifestRefreshTimeout = null),
          (this._isOnline = !1),
          (this._hasLiveEventEnded = !1),
          (this._hlsAvailabilityCheckTimeout = null),
          (this._bufferedIndex = 0),
          (this._manifestRefreshTimeout = null),
          (this._secondsBehindPlaylistStart = 0),
          (this._playlistOffsetSet = !1),
          (this._abr = new Rs(this, this._options)),
          (this._restrictedStreamIndexes = []);
      }),
      (n.endLive = function () {
        (this._isOnline = !1),
          (this._hasLiveEventEnded = !0),
          clearTimeout(this._manifestRefreshTimeout),
          this._video.pause(),
          (function (e) {
            setTimeout(e, 0);
          })(() => {
            e.prototype.deactivate.call(this), this.fire(ii.ENDED);
          });
      }),
      (n._setUpRefreshTimer = function () {
        const e = N(this.video.metadata.playlistRefreshUrl.split("?")[1]);
        e.expires &&
          (this._manifestRefreshTimeout = setTimeout(() => {
            this._refreshLiveApiPlaylistUrl();
          }, 1e3 * (e.expires - 10)));
      }),
      (n._refreshLiveApiPlaylistUrl = function (e = 0) {
        const t = this.video.metadata.playlistRefreshUrl;
        return ae(t)
          .json()
          .then((n) => {
            if (!("url" in n))
              throw new Error(
                `Error parsing 'url' key from player live API refresh endpoint: ${t} ${n}`
              );
            return this._loadNativeHlsManifest(n.url.hls)
              .then(() => (this.play(), this._checkHlsAvailability(5e3), null))
              .catch(() => this._refreshLiveApiPlaylistUrl(++e));
          })
          .catch(() => {
            if (e >= 3)
              throw new Error(`Manifest failed to load after ${e} attempts.`);
            return ++e, this._refreshLiveApiPlaylistUrl(e);
          });
      }),
      (n._setUpLiveEventListeners = function () {
        this.on(ci.STREAM_OFFLINE, () => {
          this._isOnline = !1;
        });
      }),
      (n._setUpNativeHls = function (e) {
        return (
          this._setUpLiveEventListeners(),
          (this._isOnline = !0),
          this.fire(ci.STREAM_ONLINE),
          this._checkHlsAvailability(5e3),
          Promise.resolve(e)
        );
      }),
      (n._loadNativeHlsManifest = function (e) {
        return (
          (this._apiManifestUrl = e),
          /json=1/.test(e)
            ? ae(e)
                .json()
                .then((e) => {
                  if (!("url" in e))
                    throw new Error(
                      `Error parsing 'url' key from Live API manifest endpoint: ${this._apiManifestUrl} ${e}`
                    );
                  (this._video.src = e.url), this._setUpRefreshTimer();
                })
                .catch((e) => {
                  const t = this.video.metadata.playlistRefreshUrl;
                  return ae(t)
                    .json()
                    .then((e) => {
                      if (!("url" in e))
                        throw new Error(
                          `Error parsing 'url' key from player live API refresh endpoint: ${t} ${e}`
                        );
                      (this._apiManifestUrl = e.url.ios),
                        (this._video.src = e.url.ios),
                        this._setUpRefreshTimer();
                    });
                })
            : ((this._video.src = e),
              this._setUpRefreshTimer(),
              Promise.resolve())
        );
      }),
      (n._checkHlsAvailability = function (e) {
        ("number" == typeof Le.iOS && Le.iOS < 9) ||
          this._hlsAvailabilityCheckTimeout ||
          (this._hlsAvailabilityCheckTimeout = setTimeout(() => {
            if (!this._isOnline) return;
            const e = new XMLHttpRequest();
            (e.onload = () => {
              410 !== e.status
                ? (200 !== e.status && this.fire(ci.STREAM_OFFLINE),
                  e.response.match(/^#EXTM3U\n#EXT-X-VERSION:3\n$/) &&
                    this.fire(ci.STREAM_OFFLINE))
                : this._refreshLiveApiPlaylistUrl();
            }),
              (e.onerror = () => {
                this.fire(ci.STREAM_OFFLINE);
              }),
              /json=1/.test(this._apiManifestUrl)
                ? ae(this._apiManifestUrl)
                    .json()
                    .then((t) => {
                      "url" in t || this.fire(ci.STREAM_OFFLINE),
                        e.open("GET", t.url),
                        e.send();
                    })
                    .catch(() => {
                      e.open("GET", this._apiManifestUrl), e.send();
                    })
                : (e.open("GET", this._apiManifestUrl), e.send());
          }, e));
      }),
      (n._shouldSnapToLiveEdge = function (e) {
        return e >= this.liveEdgeTime - 3;
      }),
      (n._hasDriftedBehindLiveEdge = function (e) {
        return e >= this.liveEdgeTime - 6;
      }),
      (n._isNearLiveTail = function (e) {
        return e <= this.liveTailTime + 6;
      }),
      (n.setVideoSrc = function (e) {
        this._onReady = this._setUpNativeHls(e).then(
          () => ((this._apiManifestUrl = e), this._loadNativeHlsManifest(e))
        );
      }),
      (n.ontimeupdate = function () {
        e.prototype.ontimeupdate.call(this),
          (this.atLiveTail = this._isNearLiveTail(this._video.currentTime)),
          this._shouldSnapToLiveEdge(this._video.currentTime)
            ? (this.atLiveEdge = !0)
            : (this._video.playbackRate < 1 ||
                this._hasDriftedBehindLiveEdge()) &&
              (this.atLiveEdge = !1);
      }),
      (n.onplaying = function () {
        this._playInitiated = !0;
      }),
      (n.oncanplay = function () {
        if (!this._playInitiated) {
          const e = this._video.seekable.length;
          e > 0 && (this._video.currentTime = this._video.seekable.end(e - 1));
        }
        if (!this._playlistOffsetSet) {
          this._playlistOffsetSet = !0;
          const e = this._video.getStartDate().getTime() / 1e3;
          this._secondsBehindPlaylistStart = e - this.liveEventStartTimeEpoch;
        }
      }),
      (n.onprogress = function () {
        this._hlsAvailabilityCheckTimeout &&
          (clearTimeout(this._hlsAvailabilityCheckTimeout),
          (this._hlsAvailabilityCheckTimeout = null));
      }),
      (n.onstalled = function () {
        this._checkHlsAvailability(1e4);
      }),
      (n.onerror = function () {
        return this._video.error.code ===
          this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED
          ? (ae(this._apiManifestUrl)
              .then(() => {
                e.prototype.onerror.call(this);
              })
              .catch((t) => {
                t instanceof X
                  ? this.fire(
                      ii.ERROR,
                      new ki(
                        "MediaNetworkError",
                        "A network error ocurred while fetching the media."
                      )
                    )
                  : e.prototype.onerror.call(this);
              }),
            !1)
          : e.prototype.onerror.call(this);
      }),
      (n.onwaiting = function () {
        this._checkHlsAvailability(1e4);
      }),
      (n.pause = function () {
        this.dvrEnabled && (this.atLiveEdge = !1), e.prototype.pause.call(this);
      }),
      (n.play = function () {
        return e.prototype.play.call(this, () => this._onReady);
      }),
      r(t, [
        {
          key: "currentTime",
          get: function () {
            return this._secondsBehindPlaylistStart + this._video.currentTime;
          },
          set: function (e) {
            if (this.liveEdgeTime) {
              const t = e >= this.liveEdgeTime - 3;
              this.atLiveEdge = t;
            }
            this._video.currentTime = e - this._secondsBehindPlaylistStart;
          },
        },
        {
          key: "liveEdgeTime",
          get: function () {
            const e = this._video.seekable.length;
            return e > 0
              ? this._secondsBehindPlaylistStart +
                  this._video.seekable.end(e - 1)
              : 0;
          },
        },
        {
          key: "atLiveEdge",
          get: function () {
            return this._atLiveEdge;
          },
          set: function (e) {
            this.dvrEnabled &&
              ((this._atLiveEdge = e),
              this._video.playbackRate > 1 &&
                e &&
                (this._video.playbackRate = 1));
          },
        },
        {
          key: "atLiveTail",
          get: function () {
            return this._atLiveTail;
          },
          set: function (e) {
            this.dvrEnabled &&
              ((this._atLiveTail = e),
              this._video.playbackRate < 1 &&
                e &&
                (this._video.playbackRate = 1));
          },
        },
        {
          key: "liveTailTime",
          get: function () {
            return this._video.seekable.length > 0
              ? this._secondsBehindPlaylistStart + this._video.seekable.start(0)
              : 0;
          },
        },
        {
          key: "ended",
          get: function () {
            return this._hasLiveEventEnded;
          },
        },
        {
          key: "supportsPlaybackRate",
          get: function () {
            return e.prototype.supportsPlaybackRate && this.dvrEnabled;
          },
        },
      ]),
      t
    );
  })(qi),
  Ys = (function () {
    function e(e, t = {}) {
      (this._telecine = e), (this._element = e._element), (this._options = t);
    }
    r(e, null, [
      {
        key: "displayName",
        get: function () {
          return "Effect";
        },
      },
      {
        key: "supported",
        get: function () {
          return !1;
        },
      },
      {
        key: "supportedScanners",
        get: function () {
          return [];
        },
      },
    ]);
    var t = e.prototype;
    return (
      (t.activate = function () {
        throw new ki(
          "NotImplemented",
          "The effect must implement the activate method."
        );
      }),
      (t.deactivate = function () {
        throw new ki(
          "NotImplemented",
          "The effect must implement the deactivate method."
        );
      }),
      e
    );
  })();
const $s = new WeakMap(),
  zs = new WeakMap();
let Qs = (function () {
    function e(
      { src: e, mime: t, id: n = Ei(), priority: r = 0, metadata: i = {} },
      s
    ) {
      if (!e) throw new TypeError("Must provide a src for the file.");
      if (!t) throw new TypeError("Must provide a mime type for the file.");
      Object.defineProperties(this, {
        mime: { value: t, enumerable: !0 },
        id: { value: `${n}`, enumerable: !0 },
        metadata: { value: i, enumerable: !0 },
      }),
        (this.video = s),
        (this.priority = r),
        (this.src = e);
    }
    return (
      r(e, [
        {
          key: "priority",
          get: function () {
            return $s.get(this);
          },
          set: function (e) {
            if (
              !(
                "number" == typeof (e = parseInt(e, 10)) &&
                isFinite(e) &&
                Math.floor(e) === e &&
                e >= 0
              )
            )
              throw new TypeError(
                "The file priority must be an integer greater than or equal to 0."
              );
            $s.set(this, e);
          },
        },
        {
          key: "src",
          get: function () {
            return zs.get(this);
          },
          set: function (e) {
            zs.set(this, e), this.video.fire(ui.FILE_SRC_UPDATE, this);
          },
        },
        {
          key: "restrictedStreamIndexes",
          get: function () {
            if (
              !Object.getOwnPropertyDescriptor(
                Object.getPrototypeOf(this.video.currentScanner),
                "restrictedStreamIndexes"
              )
            )
              throw new ReferenceError(
                "The current scanner does not support streams."
              );
            return this.video.currentScanner.restrictedStreamIndexes;
          },
          set: function (e = []) {
            if (!Array.isArray(e))
              throw new TypeError("Indexes must be an array.");
            if (
              !Object.getOwnPropertyDescriptor(
                Object.getPrototypeOf(this.video.currentScanner),
                "restrictedStreamIndexes"
              )
            )
              throw new ReferenceError(
                "The current scanner does not support streams."
              );
            this.video.currentScanner.restrictedStreamIndexes = e;
          },
        },
      ]),
      e
    );
  })(),
  Js = (function () {
    function e(
      {
        enabled: e = !1,
        id: t = Ei(),
        kind: n = "",
        label: r = "",
        language: i = "",
      },
      s
    ) {
      (this._enabled = e),
        sn(this),
        Object.defineProperties(this, {
          kind: { value: n, enumerable: !0 },
          label: { value: r, enumerable: !0 },
          language: { value: i, enumerable: !0 },
          id: { value: `${t}`, enumerable: !0 },
        }),
        (this.video = s);
    }
    return (
      (e.prototype.dispatchEvent = function (e) {
        this.fire(e, { target: this });
      }),
      r(e, [
        {
          key: "enabled",
          get: function () {
            return this._enabled;
          },
          set: function (e) {
            this._enabled = e;
          },
        },
        {
          key: "active",
          get: function () {
            return this._enabled;
          },
        },
      ]),
      e
    );
  })();
function Zs() {
  return !!(
    (window.MediaKeys &&
      window.navigator &&
      window.navigator.requestMediaKeySystemAccess &&
      window.MediaKeySystemAccess &&
      window.MediaKeySystemAccess.prototype.getConfiguration) ||
    window.WebKitMediaKeys
  );
}
function eo(e, t, n) {
  "string" == typeof t &&
    (t = (function (e) {
      const t = new ArrayBuffer(2 * e.length),
        n = new Uint16Array(t);
      for (let r = 0, i = e.length; r < i; r++) n[r] = e.charCodeAt(r);
      return n;
    })(t));
  let r = 0;
  const i = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + n.byteLength),
    s = new DataView(i);
  new Uint8Array(i, r, e.byteLength).set(e),
    (r += e.byteLength),
    s.setUint32(r, t.byteLength, !0),
    (r += 4);
  const o = new Uint8Array(i, r, t.byteLength);
  return (
    o.set(t),
    (r += o.byteLength),
    s.setUint32(r, n.byteLength, !0),
    (r += 4),
    new Uint8Array(i, r, n.byteLength).set(n),
    new Uint8Array(i, 0, i.byteLength)
  );
}
function to(e, t = !0) {
  const n = t ? e.buffer : e,
    r = String.fromCharCode.apply(null, new Uint16Array(n)),
    i = new DOMParser().parseFromString(r, "application/xml"),
    s = {},
    o = i.getElementsByTagName("HttpHeader");
  for (let a = 0; a < o.length; ++a) {
    const e = o[a].querySelector("name"),
      t = o[a].querySelector("value");
    s[e.textContent] = t.textContent;
  }
  return [s, (e = Ti(i.querySelector("Challenge").textContent))];
}
function no(e, t, n, r) {
  const i = r.audio || [],
    s = r.video || [],
    o = [
      { video: "HW_SECURE_ALL", audio: "SW_SECURE_CRYPTO" },
      { video: "HW_SECURE_DECODE", audio: "SW_SECURE_CRYPTO" },
      { video: "HW_SECURE_CRYPTO", audio: "SW_SECURE_CRYPTO" },
      { video: "SW_SECURE_DECODE", audio: "SW_SECURE_CRYPTO" },
      { video: "SW_SECURE_CRYPTO", audio: "SW_SECURE_CRYPTO" },
    ].map((e) => {
      const t = { persistentState: "optional", sessionTypes: ["temporary"] };
      return (
        s.length &&
          (t.videoCapabilities = s.map((t) => ({
            contentType: t,
            robustness: e.video,
          }))),
        i.length &&
          (t.audioCapabilities = i.map((t) => ({
            contentType: t,
            robustness: e.audio,
          }))),
        t
      );
    }),
    a = Object.keys(e).map((r) => {
      const i = e[r].id;
      if (t || n) {
        let e = null;
        const n = t ? window.WebKitMediaKeys : window.MSMediaKeys;
        try {
          e = new n(i);
        } catch (Rl) {}
        return Promise.resolve({ name: i, keySystem: e });
      }
      return navigator
        .requestMediaKeySystemAccess(i, o)
        .then((e) => e.createMediaKeys())
        .catch((e) => {})
        .then((e) => ({ name: i, keySystem: e }));
    });
  return Promise.all(a);
}
function ro(e, t) {
  let n = null;
  return (
    Object.keys(e).forEach((r) => {
      t.name === e[r].id && (n = e[r]);
    }),
    n
  );
}
let io = (function () {
    function e(e, t) {
      (this._cdms = e.cdms),
        (this._lrToken = e.lr_token),
        (this._userId = e.user),
        (this._assetId = e.asset),
        (this._useHls = t),
        (this._licenseUrl = null),
        (this._keySession = null),
        (this._preferredKeySystem = null),
        (this._encryptedEventName = null),
        (this._boundGenerateRequest = this._generateRequest.bind(this));
    }
    var t = e.prototype;
    return (
      (t.init = function (e, t = {}) {
        return (
          (this._video = e._video),
          (this._scanner = e),
          Zs()
            ? ((this._licenseRequestMetadata = (function (e, t) {
                const n = {},
                  r = `${window.screen.availWidth}x${window.screen.availHeight}`,
                  i = window.devicePixelRatio;
                return (
                  (n.merchant = "vimeo"),
                  (n.sessionId = JSON.stringify({
                    ua: navigator.userAgent,
                    token: e,
                    resolution: r,
                    pixelRatio: i,
                  })),
                  (n.userId = t),
                  n
                );
              })(this._lrToken, this._userId)),
              no(this._cdms, this._useHls, !1, t).then((e) => {
                if (
                  (e.forEach((e) => {
                    e.keySystem && (this._preferredKeySystem = e);
                  }),
                  !this._preferredKeySystem)
                )
                  return this._scanner.fire(ui.EME_UNSUPPORTED), !1;
                const t = ro(this._cdms, this._preferredKeySystem);
                return (
                  (this._encryptedEventName = "encrypted"),
                  (this._licenseUrl = t.license_url),
                  this._useHls &&
                    ((this._certificateUrl = t.certificate_url),
                    (this._encryptedEventName = "webkitneedkey")),
                  this._video.addEventListener(
                    this._encryptedEventName,
                    this._boundGenerateRequest
                  ),
                  this._useHls
                    ? (this._video.webkitSetMediaKeys(
                        this._preferredKeySystem.keySystem
                      ),
                      !0)
                    : this._video.mediaKeys
                    ? ((this._keySession =
                        this._video.mediaKeys.createSession()),
                      this._keySession.addEventListener("message", (e) =>
                        this._getLicense(e)
                      ),
                      !0)
                    : ((this._keySession =
                        this._preferredKeySystem.keySystem.createSession()),
                      this._keySession.addEventListener("message", (e) =>
                        this._getLicense(e)
                      ),
                      this._video.setMediaKeys(
                        this._preferredKeySystem.keySystem
                      ),
                      !0)
                );
              }))
            : (this._scanner.fire(ui.EME_UNSUPPORTED), !1)
        );
      }),
      (t.destroy = function () {
        this._keySession &&
          this._keySession.sessionId &&
          this._keySession.close(),
          this._video.removeEventListener(
            this._encryptedEventName,
            this._boundGenerateRequest
          );
      }),
      (t._generateRequest = function (e) {
        return "com.apple.fps.1_0" === this._preferredKeySystem.name
          ? (this._loadFairPlayCertificate()
              .then((t) => {
                this._contentId = `assetId=${this._assetId}`;
                const n = eo(e.initData, this._contentId, t);
                return (
                  (this._keySession =
                    this._preferredKeySystem.keySystem.createSession(
                      "video/mp4",
                      n
                    )),
                  this._keySession.addEventListener("webkitkeymessage", (e) =>
                    this._getLicense(e)
                  ),
                  t
                );
              })
              .catch((e) => {
                this._scanner.fire(e.error, e.payload);
              }),
            !0)
          : !this._keySession.sessionId &&
              !this._activeKeySession &&
              ((this._activeKeySession = this._keySession
                .generateRequest(e.initDataType, e.initData)
                .catch(() => {
                  this._scanner.fire(ui.DRM_FAILURE);
                })),
              !0);
      }),
      (t._getLicense = function (e) {
        return new Promise((t, n) => {
          this._activeKeySession = null;
          const r = new XMLHttpRequest();
          (r.keySession = e.target),
            (r.responseType = "arraybuffer"),
            r.open("POST", this._licenseUrl),
            r.setRequestHeader(
              "dt-custom-data",
              window.btoa(JSON.stringify(this._licenseRequestMetadata))
            );
          let i = e.message;
          if ("com.microsoft.playready" === this._preferredKeySystem.name) {
            const t = to(e.message, !1),
              n = t[0];
            Object.keys(n).forEach((e) => {
              r.setRequestHeader([e], n[e]);
            }),
              (i = t[1]);
          }
          if ("com.apple.fps.1_0" === this._preferredKeySystem.name) {
            let e = btoa(String.fromCharCode.apply(null, i));
            (e = encodeURIComponent(e)),
              (i = `spc=${e}&${this._contentId}`),
              r.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
              );
          }
          (r.onload = () => {
            if (403 !== r.status)
              if (r.status >= 400) n({ error: ui.DRM_FAILURE });
              else
                try {
                  this._scanner.fire(ui.DRM_AUTH_SUCCESS);
                  const e = new Uint8Array(r.response);
                  let n = e.buffer;
                  "com.apple.fps.1_0" === this._preferredKeySystem.name &&
                    (n = (function (e) {
                      let t = window.atob(e.trim());
                      return (
                        "<ckc>" === t.substr(0, 5) &&
                          "</ckc>" === t.substr(-6) &&
                          (t = t.slice(5, -6)),
                        new Uint8Array(
                          atob(t)
                            .split("")
                            .map((e) => e.charCodeAt(0))
                        )
                      );
                    })(btoa(String.fromCharCode.apply(null, e)))),
                    r.keySession.update(n),
                    t();
                } catch (Rl) {
                  n(`Error updating key session: ${Rl}`);
                }
            else {
              const e = JSON.parse(r.getResponseHeader("x-dt-error-message"));
              n({
                error: ui.DRM_AUTH_FAILURE,
                payload: { text: e.error, code: e.error_code },
              });
            }
          }),
            (r.onerror = n),
            r.send(i);
        }).catch((e) => {
          this._scanner.fire(e.error, e.payload);
        });
      }),
      (t._loadFairPlayCertificate = function () {
        return new Promise((e, t) => {
          const n = new XMLHttpRequest();
          (n.responseType = "arraybuffer"),
            n.open("GET", this._certificateUrl),
            n.setRequestHeader(
              "dt-custom-data",
              window.btoa(JSON.stringify(this._licenseRequestMetadata))
            ),
            (n.onload = () => {
              if (403 !== n.status)
                if (n.status >= 400) t({ error: ui.DRM_FAILURE });
                else
                  try {
                    e(new Uint8Array(n.response));
                  } catch (Rl) {
                    t(Rl);
                  }
              else {
                const e = JSON.parse(n.getResponseHeader("x-dt-error-message"));
                t({
                  error: ui.DRM_AUTH_FAILURE,
                  payload: { text: e.error, code: e.error_code },
                });
              }
            }),
            (n.onerror = t),
            n.send();
        });
      }),
      e
    );
  })(),
  so = (function () {
    function e() {
      (this._cdmList = {}),
        (this._preferredKeySystems = {}),
        (this._licenseTokenUrls = {}),
        (this._licenseUrls = {}),
        (this._certificateUrls = {}),
        (this._keySessions = {}),
        (this._keyChainState = "default"),
        (this._keyTypes = {
          KEYCHAIN_DEFAULT: "default",
          KEYCHAIN_SD_FALLBACK: "sd-fallback",
        });
    }
    var t = e.prototype;
    return (
      (t.getAllKeySessions = function () {
        return Object.values(this._keySessions) || [];
      }),
      (t.getCdms = function (e) {
        return this._cdmList[e];
      }),
      (t.getAllPreferredKeySystems = function () {
        return this._preferredKeySystems;
      }),
      (t.addCdms = function (e, t) {
        this._cdmList[t] = e;
      }),
      (t.addKeySession = function (e, t) {
        this._keySessions[t] = e;
      }),
      (t.addLicenseTokenUrl = function (e, t) {
        this._licenseTokenUrls[t] = e;
      }),
      (t.addLicenseUrl = function (e, t) {
        this._licenseUrls[t] = e;
      }),
      (t.addPreferedKeySystem = function (e, t) {
        this._preferredKeySystems[t] = e;
      }),
      (t.closeAllKeySessions = function () {
        for (let e in this._keySessions)
          this._keySessions[e] &&
            this._keySessions[e].sessionId &&
            this._keySessions[e].close();
      }),
      r(e, [
        {
          key: "state",
          get: function () {
            return this._keyChainState;
          },
          set: function (e) {
            Object.values(this._keyTypes).indexOf(e) < 0 ||
              (this._keyChainState = e);
          },
        },
        {
          key: "activeKeySession",
          get: function () {
            return this._keySessions[this._keyChainState];
          },
        },
        {
          key: "activeKeySystem",
          get: function () {
            return this._preferredKeySystems[this._keyChainState];
          },
        },
        {
          key: "keyTypes",
          get: function () {
            return this._keyTypes;
          },
        },
        {
          key: "activeLicenseTokenUrl",
          get: function () {
            return this._licenseTokenUrls[this._keyChainState];
          },
        },
        {
          key: "activeLicenseUrl",
          get: function () {
            return this._licenseUrls[this._keyChainState];
          },
        },
      ]),
      e
    );
  })(),
  oo = (function () {
    function e(e, t) {
      (this._hasFallbackAssets = !!e.fallback_asset),
        (this._useHls = t),
        (this._fallbackCallback = () => null),
        (this._currentTime = 0),
        (this._encryptedEventName = null),
        (this._boundGenerateRequest = this._generateRequest.bind(this)),
        (this._boundOnKeyStatus = this._onKeyStatus.bind(this)),
        (this._keyChain = new so()),
        (this._keyTypes = this._keyChain.keyTypes),
        (this._keyChain.state = this._keyTypes.KEYCHAIN_DEFAULT),
        this._keyChain.addCdms(e.cdms, this._keyTypes.KEYCHAIN_DEFAULT),
        this._hasFallbackAssets &&
          this._keyChain.addCdms(
            e.fallback_cdms,
            this._keyTypes.KEYCHAIN_SD_FALLBACK
          );
    }
    var t = e.prototype;
    return (
      (t.init = function (e, t = {}, n = {}) {
        return (
          (this._video = e._video),
          (this._scanner = e),
          (this._useMs = !!window.MSMediaKeys),
          Zs() || this._useMs
            ? this._keyChain.state === this._keyTypes.KEYCHAIN_SD_FALLBACK
              ? this.setUpKeySystem(
                  t,
                  n,
                  this._keyTypes.KEYCHAIN_SD_FALLBACK
                ).then(() => {
                  (this._scanner.currentTime = this._currentTime),
                    this._scanner.play();
                })
              : this.setUpKeySystem(t, n).then(() =>
                  this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK)
                )
            : (this._scanner.fire(ui.EME_UNSUPPORTED), Promise.reject())
        );
      }),
      (t.setUpKeySystem = function (e, t, n = this._keyTypes.KEYCHAIN_DEFAULT) {
        return new Promise((r, i) => {
          const s = this._keyChain.getCdms(n);
          return (
            s || i(),
            no(s, this._useHls, this._useMs, e)
              .then((e) => {
                this._keyChain.addPreferedKeySystem(
                  e.find((e) => e.keySystem),
                  n
                );
                const r =
                  this._keyChain.activeKeySystem &&
                  ro(s, this._keyChain.activeKeySystem);
                if (!r)
                  throw (
                    (this._scanner.fire(ui.EME_UNSUPPORTED),
                    new Error("No valid key system was found."))
                  );
                this._keyChain.addLicenseTokenUrl(r.license_url, n);
                const i = t && t.inits && t.inits[r.id];
                return (
                  i || this._addEncryptedHandler(r, n),
                  this._setMediaKeys(n).then(() => {
                    const e = this._keyChain.state === n;
                    return i && e && this._generateRequest(i.cenc, n);
                  })
                );
              })
              .then(r)
          );
        });
      }),
      (t.destroy = function () {
        this._keyChain && this._keyChain.closeAllKeySessions(),
          this._video &&
            this._video.removeEventListener(
              this._encryptedEventName,
              this._boundGenerateRequest
            );
      }),
      (t._switchKeyChainState = function (e) {
        return new Promise((t) => {
          (this._keyChain.state = e),
            this._keyChain.activeKeySession.addEventListener("message", (e) =>
              this._getLicense(e)
            ),
            t();
        });
      }),
      (t._addEncryptedHandler = function (e, t) {
        (this._encryptedEventName = "encrypted"),
          this._keyChain.addLicenseUrl(e.license_url, t),
          this._useHls
            ? ((this._certificateUrl = e.certificate_url),
              (this._encryptedEventName = "webkitneedkey"))
            : this._useMs && (this._encryptedEventName = "msneedkey"),
          this._video.addEventListener(
            this._encryptedEventName,
            this._boundGenerateRequest
          );
      }),
      (t._setMediaKeys = function (e) {
        return new Promise((t) => {
          if (this._useMs) {
            const e = () => {
              this._video.msSetMediaKeys(
                this._keyChain.activeKeySystem.keySystem
              ),
                this._video.removeEventListener("loadedmetadata", e),
                t();
            };
            this._video.readyState >= 1
              ? e()
              : this._video.addEventListener("loadedmetadata", e);
          } else {
            if (this._useHls)
              this._video.webkitSetMediaKeys(
                this._keyChain.activeKeySystem.keySystem
              );
            else {
              const t =
                this._video.mediaKeys ||
                this._keyChain.activeKeySystem.keySystem;
              this._keyChain.addKeySession(this._createSession(t), e),
                e === this._keyChain.state &&
                  this._keyChain.activeKeySession.addEventListener(
                    "message",
                    (e) => this._getLicense(e)
                  ),
                this._video.mediaKeys ||
                  this._video.setMediaKeys(
                    this._keyChain.activeKeySystem.keySystem
                  );
            }
            t();
          }
        });
      }),
      (t._createSession = function (e, t, n) {
        const r = e.createSession(t, n);
        if (!r) throw new Error("Could not create key session");
        return r;
      }),
      (t._generateRequest = function (e, t) {
        t = t || this._keyChain.state;
        const n = new Error("A decryption key error was encountered");
        return "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name
          ? (this._loadFairPlayCertificate(this._certificateUrl)
              .then((r) => {
                this._contentId = (function (e) {
                  var t = (function (e) {
                      const t = new Uint16Array(e.buffer);
                      return String.fromCharCode.apply(null, t);
                    })(e),
                    n = document.createElement("a");
                  return (n.href = t), n.hostname;
                })(e.initData);
                const i = eo(e.initData, this._contentId, r);
                return (
                  this._keyChain.addKeySession(
                    this._createSession(
                      this._keyChain.activeKeySystem.keySystem,
                      "video/mp4",
                      i
                    ),
                    t
                  ),
                  (this._keyChain.activeKeySession.contentId = this._contentId),
                  this._keyChain.activeKeySession.addEventListener(
                    "webkitkeymessage",
                    (e) => this._getLicense(e)
                  ),
                  this._keyChain.activeKeySession.addEventListener(
                    "webkitkeyerror",
                    (e) => {
                      throw n;
                    }
                  ),
                  r
                );
              })
              .catch((e) => {
                this._scanner.fire(e.error, e.payload);
              }),
            !0)
          : "com.microsoft.playready" === this._keyChain.activeKeySystem.name
          ? (this._keyChain.addKeySession(
              this._createSession(this._video.msKeys, "video/mp4", e.initData),
              t
            ),
            this._keyChain.activeKeySession.addEventListener(
              "mskeymessage",
              (e) => this._getLicense(e)
            ),
            this._keyChain.activeKeySession.addEventListener(
              "mskeyerror",
              (e) => {
                throw n;
              }
            ),
            !0)
          : !this._keyChain.activeKeySession.sessionId &&
            !this._activeKeySession &&
            (this._keyChain.activeKeySession.addEventListener(
              "keystatuseschange",
              this._boundOnKeyStatus
            ),
            (this._activeKeySession = this._keyChain.activeKeySession
              .generateRequest(e.initDataType, e.initData)
              .catch(() => {
                this._scanner.fire(ui.DRM_FAILURE);
              })),
            !0);
      }),
      (t._onKeyStatus = function () {
        let e = !1;
        const t = Array.from(
          this._keyChain.activeKeySession.keyStatuses.values()
        );
        if (
          (t.forEach((t, n) => {
            switch (t) {
              case "expired":
                e = !0;
            }
          }),
          t.every((e) => "output-restricted" === e))
        ) {
          if (this._hasFallbackAssets)
            return (
              (this._currentTime = this._scanner.currentTime),
              void this._switchKeyChainState(
                this._keyTypes.KEYCHAIN_SD_FALLBACK
              )
                .then(() => {
                  this._fallbackCallback(),
                    this._scanner.fire(
                      ui.DRM_KEY_SWITCH,
                      this._keyTypes.KEYCHAIN_SD_FALLBACK
                    );
                })
                .catch((e) => {
                  this._scanner.fire(ui.DRM_OUTPUT_RESTRICTED);
                })
            );
          this._scanner.fire(ui.DRM_OUTPUT_RESTRICTED);
        }
        e && this._keyChain.activeKeySession.close();
      }),
      (t._getLicense = function (e) {
        return this._getLicenseUrl(this._keyChain.activeLicenseTokenUrl).then(
          (t) =>
            new Promise((n, r) => {
              this._keyChain.addLicenseUrl(t, this._keyChain.state),
                (this._activeKeySession = null);
              const i = new XMLHttpRequest();
              (i.keySession = e.target),
                i.open("POST", this._keyChain.activeLicenseUrl),
                (i.responseType = "arraybuffer");
              let s = e.message;
              if (
                "com.microsoft.playready" ===
                this._keyChain.activeKeySystem.name
              ) {
                const t = to(e.message),
                  n = t[0];
                Object.keys(n).forEach((e) => {
                  i.setRequestHeader(e, n[e]);
                }),
                  (s = t[1]);
              }
              "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name &&
                ((s = new Uint8Array(s)),
                i.setRequestHeader("Content-type", "application/octet-stream")),
                (i.onload = () => {
                  if (403 !== i.status)
                    if (i.status >= 400) r(new ki(ui.DRM_FAILURE));
                    else
                      try {
                        this._scanner.fire(ui.DRM_AUTH_SUCCESS);
                        const e = new Uint8Array(i.response);
                        i.keySession.update(e), n();
                      } catch (Rl) {
                        r(
                          new ki(
                            ui.DRM_FAILURE,
                            `Error updating key session: ${Rl}`
                          )
                        );
                      }
                  else r(new ki(ui.DRM_AUTH_FAILURE));
                }),
                (i.onerror = r),
                i.send(s);
            }).catch((e) => {
              this._scanner.fire(e.name, {
                text: e.message || "License request failed.",
              });
            })
        );
      }),
      (t._getLicenseUrl = function (e) {
        return new Promise((t, n) => {
          const r = new XMLHttpRequest();
          r.open("GET", e),
            (r.onload = () => {
              if (r.status >= 400) n(new ki(ui.DRM_FAILURE));
              else
                try {
                  try {
                    const e = JSON.parse(r.response),
                      { licenseAcquisitionUrl: n, token: i } = e;
                    if (!n && !i) throw new Error();
                    t(`${n}?ExpressPlayToken=${i}`);
                  } catch (e) {
                    t(r.response);
                  }
                } catch (Rl) {
                  n(
                    new ki(
                      ui.DRM_FAILURE,
                      `Error retrieving License Acquisition URL (LA_URL): ${Rl}`
                    )
                  );
                }
            }),
            (r.onerror = n),
            r.send();
        });
      }),
      (t._loadFairPlayCertificate = function (e) {
        return new Promise((t, n) => {
          const r = new XMLHttpRequest();
          r.open("GET", e),
            (r.responseType = "arraybuffer"),
            r.setRequestHeader("Pragma", "Cache-Control: no-cache"),
            r.setRequestHeader("Cache-Control", "max-age=0"),
            (r.onload = () => {
              if (403 !== r.status)
                if (r.status >= 400) n({ error: ui.DRM_FAILURE });
                else
                  try {
                    t(new Uint8Array(r.response));
                  } catch (Rl) {
                    n(Rl);
                  }
              else n({ error: ui.DRM_AUTH_FAILURE });
            }),
            (r.onerror = n),
            r.send();
        });
      }),
      (t.setFallbackCallback = function (e) {
        this._fallbackCallback = () => e();
      }),
      r(e, [
        {
          key: "state",
          get: function () {
            return this._keyChain.state;
          },
        },
        {
          key: "hasFallbackAssets",
          get: function () {
            return this._hasFallbackAssets;
          },
        },
      ]),
      e
    );
  })();
const ao = new WeakMap();
let uo = (function () {
    function e({
      files: e,
      id: t = Ei(),
      title: n = null,
      subtitle: r = null,
      metadata: i = {},
      textTracks: s = vi(),
      audioTracks: o = vi(),
      externalDisplayFiles: a = {},
      chapters: u = [],
      duration: c,
    }) {
      if (!e || !Array.isArray(e))
        throw new TypeError("Must provide files for the video.");
      sn(this);
      const l = (function (e = []) {
          return (e.getFileById = mi), e;
        })(
          e.map((e) =>
            e instanceof Qs ? ((e.video = this), e) : new Qs(e, this)
          )
        ),
        d = vi(
          s.map((e) =>
            e instanceof Cs ? ((e.video = this), e) : new Cs(e, this)
          )
        );
      (this._audioTracksFromConfig = o),
        Object.keys(a).forEach((e) => {
          !a[e] || a[e] instanceof Qs || (a[e] = new Qs(a[e], this));
        }),
        Object.defineProperties(this, {
          id: { value: `${t}`, enumerable: !0 },
          title: { value: n, enumerable: !0 },
          subtitle: { value: r, enumerable: !0 },
          metadata: { value: i, enumerable: !0 },
          files: { value: l, enumerable: !0 },
          textTracks: { value: d, enumerable: !0, writable: !0 },
          chapters: { value: u, enumerable: !0 },
          duration: { value: c, enumerable: !0 },
          externalDisplayFiles: { value: a, enumerable: !0 },
        }),
        i.drm &&
          (i.drm.fastly
            ? (this._drmHandler = new oo(i.drm, i.useHls))
            : (this._drmHandler = new io(i.drm, i.useHls)));
    }
    return (
      (e.prototype.deactivate = function () {
        this._drmHandler && this._drmHandler.destroy(),
          this.textTracks.forEach((e) =>
            this.currentScanner.removeTextTrack(e)
          );
      }),
      r(e, [
        {
          key: "drmHandler",
          get: function () {
            return this._drmHandler || null;
          },
        },
        {
          key: "currentFile",
          get: function () {
            return this.currentScanner.currentFile;
          },
          set: function (e) {
            this.currentScanner.currentFile = e;
          },
        },
        {
          key: "currentScanner",
          get: function () {
            return ao.get(this);
          },
          set: function (e) {
            this.currentScanner &&
              this.currentScanner.constructor.supportsTextTracks &&
              this.textTracks.forEach((e) =>
                this.currentScanner.removeTextTrack(e)
              ),
              e.constructor.supportsTextTracks &&
                this.textTracks.forEach((t) => e.addTextTrack(t)),
              ao.set(this, e);
          },
        },
        {
          key: "chapters",
          get: function () {
            return this.chapters;
          },
        },
        {
          key: "audioTracks",
          get: function () {
            return vi(
              (this.currentScanner.constructor.supportsVideoElementAudioTracks
                ? Array.from(this.currentScanner.audioTracks)
                : this._audioTracksFromConfig
              ).map((e) =>
                e instanceof Js ? ((e.video = this), e) : new Js(e, this)
              )
            );
          },
        },
      ]),
      e
    );
  })(),
  co = (function () {
    function e(e, t = {}) {
      (this._telecine = e),
        (this._options = t),
        (this._bufferInterval = null),
        (this._lastBufferCheckVideoTime = this._options.embedTime
          ? this._options.embedTime
          : 0),
        (this._isBuffering = !1),
        (this._isSeeking = !1),
        (this._userPlayState = !1),
        (this.playInitiated = !1),
        (this._isLiveStreamOnline = !1),
        (this._checkInterval = 250),
        sn(this),
        (this._boundEndBuffering = this._endBuffering.bind(this)),
        (this._boundOnPause = this._onPause.bind(this)),
        (this._boundOnSeeking = this._onSeeking.bind(this)),
        (this._boundOnSeeked = this._onSeeked.bind(this)),
        (this._boundOnLiveOnline = this._onLiveOnline.bind(this)),
        (this._boundOnLiveOffline = this._onLiveOffline.bind(this)),
        this._toggleEvents(this._telecine.on),
        this._options.noInterval || this._setUpRebufferMonitor();
    }
    var t = e.prototype;
    return (
      (t.destroy = function () {
        clearInterval(this._bufferInterval),
          this._toggleEvents(this._telecine.off),
          this._endBuffering();
      }),
      (t._toggleEvents = function (e) {
        e(ii.PAUSE, this._boundOnPause),
          e(ii.PLAYING, this._boundEndBuffering),
          e(ii.SEEKING, this._boundOnSeeking),
          e(ii.SEEKED, this._boundOnSeeked),
          e(ci.STREAM_ONLINE, this._boundOnLiveOnline),
          e(ci.STREAM_OFFLINE, this._boundOnLiveOffline);
      }),
      (t._onPause = function () {
        this.userPlayState = !1;
      }),
      (t._endBuffering = function () {
        this._isBuffering &&
          ((this._isBuffering = !1), this.fire(ui.BUFFER_ENDED));
      }),
      (t._onSeeking = function () {
        this._isSeeking = !0;
      }),
      (t._onSeeked = function () {
        this._isSeeking = !1;
      }),
      (t._onLiveOnline = function () {
        this._isLiveStreamOnline = !0;
      }),
      (t._onLiveOffline = function () {
        this._isLiveStreamOnline = !1;
      }),
      (t._setUpRebufferMonitor = function () {
        clearInterval(this._bufferInterval),
          (this._bufferInterval = setInterval(
            this.runIntervalCheck.bind(this),
            this._checkInterval
          ));
      }),
      (t.runIntervalCheck = function () {
        if (!this._telecine.video) return;
        const e = this._telecine.video.currentScanner;
        if (!e) return;
        const t = this._telecine.isLive(),
          n = e.currentTime,
          r = this._checkInterval / 2 / 1e3;
        if (
          this.playInitiated &&
          (!this._isSeeking || t) &&
          (!this._telecine.paused || this.userPlayState) &&
          !this._isBuffering &&
          n < this._lastBufferCheckVideoTime + r
        ) {
          if (t && !this._isLiveStreamOnline) return;
          const e = this._telecine.buffered;
          for (let t = 0; t < e.length; t++)
            if (n >= e.start(t) && n + 0.2 <= e.end(t)) return;
          if (n + r >= this._telecine.duration) return;
          (this._isBuffering = !0), this.fire(ui.BUFFER_STARTED);
        }
        ((this.playInitiated &&
          this._isBuffering &&
          n > this._lastBufferCheckVideoTime + r) ||
          (t && !this._isLiveStreamOnline && this._isBuffering)) &&
          ((this._isBuffering = !1), this.fire(ui.BUFFER_ENDED)),
          (this._lastBufferCheckVideoTime = n);
      }),
      r(e, [
        {
          key: "userPlayState",
          get: function () {
            return this._userPlayState;
          },
          set: function (e) {
            (this._userPlayState = e), e || this._endBuffering();
          },
        },
      ]),
      e
    );
  })();
function lo() {
  let e, t;
  function n() {
    if (!t) return Promise.reject();
    e.preload = "";
    let n = e.play();
    return (
      void 0 === n &&
        (n = new Promise((t) => {
          e.addEventListener("playing", t);
        })),
      n
    );
  }
  function r() {
    t && (t.resolve(), (t = null));
  }
  function i(e) {
    t && (t.reject(e), (t = null));
  }
  return {
    set video(t) {
      e = t;
    },
    get video() {
      return e;
    },
    get active() {
      return !!t;
    },
    start: function (s = Promise.resolve.bind(Promise)) {
      return (
        t || (t = new P()),
        e.src ? document.createElement("video").load() : e.load(),
        s().then(n).then(r).catch(i),
        t
      );
    },
    cancel: function () {
      t &&
        (t.reject(
          new ki(
            "PlayInterrupted",
            "The play() request was interrupted by a call to pause()"
          )
        ),
        (t = null));
    },
  };
}
let ho = (function () {
    function e(e, t, n = {}) {
      (this._element = e),
        (this._scanners = t),
        (this._options = n),
        (this._video = null),
        (this._textTracks = vi()),
        (this._properties = {}),
        (this._currentScanner = new qi(e)),
        (this._options.playRequest = new lo()),
        (this._blacklistedScanners = []),
        (this._activeEffects = []),
        (this._previousScanner = null),
        (this._switchingVideo = !1),
        (this._snapshotDisplayed = !1),
        sn(this);
    }
    var t = e.prototype;
    return (
      (t.supportsEffect = function (e) {
        return (
          !!e.supported &&
          e.supportedScanners.some(
            (e) => this._getScannerName(this._currentScanner) === e.displayName
          )
        );
      }),
      (t.getEffectByName = function (e) {
        let t = null;
        return (
          this._activeEffects.forEach((n) => {
            e === this._getEffectName(n) && (t = n);
          }),
          t
        );
      }),
      (t.activateEffect = function (e, t) {
        const n = new e(this, t);
        return n.activate(), this._activeEffects.push(n), n;
      }),
      (t.deactivateEffect = function (e) {
        return this._activeEffects.some(
          (t, n) =>
            t.constructor === e &&
            (t.deactivate(), this._activeEffects.splice(n, 1), !0)
        );
      }),
      (t.deactivateEffects = function () {
        this._activeEffects.forEach((e) =>
          this.deactivateEffect(e.constructor)
        );
      }),
      (t.play = function () {
        if (!this._video || this._video.files.length < 1)
          throw new ki("NoFiles", "There are no files to play.");
        this._rebufferMonitor.playInitiated ||
          (this._rebufferMonitor.playInitiated = !0),
          (this._rebufferMonitor.userPlayState = !0);
        const e = this._currentScanner.play();
        return (this._properties.paused = !1), e;
      }),
      (t.pause = function () {
        if (!this._video || this._video.files.length < 1)
          throw new ki("NoFiles", "There are no files to play.");
        return (
          (this._rebufferMonitor.userPlayState = !1),
          this._currentScanner.pause(),
          (this._properties.paused = !0),
          this
        );
      }),
      (t.isLive = function () {
        return this.currentScannerName.includes("Live");
      }),
      (t.endLive = function () {
        this._currentScanner.endLive();
      }),
      (t.getBitrateAtTime = function (e, t = "video") {
        return ("MediaSourceScanner" !==
          this._getScannerName(this._currentScanner) &&
          "HLSLiveScanner" !== this._getScannerName(this._currentScanner)) ||
          ("audio" === t && this._currentScanner._streams[t].length <= 1)
          ? 0
          : this._currentScanner.getBitrateAtTime(e, t);
      }),
      (t.getCurrentStream = function (e = "video") {
        var t, n;
        return null == (t = (n = this._currentScanner).getCurrentStream)
          ? void 0
          : t.call(n, e);
      }),
      (t.showExternalDisplayPicker = function (e) {
        this._currentScanner.showExternalDisplayPicker(e);
      }),
      (t.requestPictureInPicture = function () {
        return this._currentScanner.requestPictureInPicture();
      }),
      (t.exitPictureInPicture = function () {
        return this._currentScanner.exitPictureInPicture();
      }),
      (t.addChapter = function (e, t) {
        this._currentScanner.addChapter(e, t);
      }),
      (t.removeChapter = function (e) {
        this._currentScanner.removeChapter(e);
      }),
      (t.addCuePoint = function (e, t) {
        return this._currentScanner.addCuePoint(e, t);
      }),
      (t.removeCuePoint = function (e) {
        return this._currentScanner.removeCuePoint(e);
      }),
      (t.removeAllCuePoints = function () {
        return this._currentScanner.removeAllCuePoints();
      }),
      (t.enableAudioTrack = function (e) {
        return this._currentScanner.enableAudioTrack(e);
      }),
      (t.addVideoEventListeners = function () {
        return this._currentScanner.addVideoEventListeners();
      }),
      (t.removeVideoEventListeners = function () {
        return this._currentScanner.removeVideoEventListeners();
      }),
      (t._findScanner = function ({ textTrackSupport: e = !1 } = {}) {
        const t = this._video.files.sort((e, t) => e.priority - t.priority),
          n = this._scanners;
        for (const r in t) {
          let i = t[r];
          for (const t in n) {
            let r = n[t];
            if (
              r.supported &&
              (!e || r.supportsTextTracks) &&
              -1 ===
                this._blacklistedScanners.indexOf(this._getScannerName(r)) &&
              r.supportedVideoTypes.some((e) => i.mime === e)
            )
              return r;
          }
        }
        return null;
      }),
      (t.reactivate = function () {
        var e;
        (null == (e = this._currentScanner) ? void 0 : e.reactivate) &&
          this._currentScanner.reactivate(),
          this.play();
      }),
      (t.checkRebuffer = function (e, t) {
        this._rebufferMonitor &&
          ((this._rebufferMonitor.playInitiated = e),
          (this._rebufferMonitor.userPlayState = t),
          this._rebufferMonitor.runIntervalCheck());
      }),
      (t._initScanner = function (e, t) {
        if (
          this._currentScanner.constructor === e &&
          this._currentScanner.video === t
        )
          return;
        const n = !this.isLive() && this._currentScanner._preserveCurrentTime;
        this._switchingVideo
          ? ((this._previousScanner = this._currentScanner),
            (this._previousScanner._switchingVideo = !0),
            this._snapshotDisplayed ||
              (this._previousScanner.takeSnapshot(),
              (this._snapshotDisplayed = !0)),
            this._previousScanner.deactivate())
          : this._currentScanner.deactivate();
        const r = new e(this._element, this._options);
        Object.keys(fi).forEach((e) => {
          const t = fi[e];
          r.on(t, (e) => this._handleEvent(t, e, r));
        }),
          (this._currentScanner = r),
          (t.currentScanner = r),
          (this._currentScanner.video = t);
        const i = Object.keys(this._properties);
        for (let s = 0; s < i.length; s++) {
          const e = i[s];
          "paused" !== e
            ? ("currentTime" !== e || n) &&
              (this._currentScanner[e] = this._properties[e])
            : !1 === this._properties.paused && this._currentScanner.play();
        }
        this._currentScanner.addChapters(t.chapters, t.duration),
          this.fire(
            ui.SCANNER_CHANGE,
            this._getScannerName(this._currentScanner)
          ),
          this._currentScanner.on(["canplay", "playing"], () => {
            this._previousScanner &&
              ((this._previousScanner._switchingVideo = !1),
              this._previousScanner.removeSnapshot(),
              (this._previousScanner = null),
              (this._snapshotDisplayed = !1));
          });
      }),
      (t._updateScanner = function () {
        if (null === this._video) return;
        const e = this._findScanner({
          textTrackSupport: this._video.textTracks.length > 0,
        });
        e
          ? this._initScanner(e, this._video)
          : this._fireVideoError(
              "FilesNotPlayable",
              "None of the files could be played in this browser."
            );
      }),
      (t._resetScanner = function () {
        this._currentScanner.deactivate(),
          (this._currentScanner = new qi(this._element));
      }),
      (t._handleEvent = function (e, t, n) {
        if (n === this._currentScanner) {
          switch (e) {
            case ii.ERROR:
              return void (t instanceof ki && this.fire(ii.ERROR, t));
            case ui.SCANNER_ERROR:
              this._fireVideoError(
                "ScannerError",
                `The current scanner can no longer be used because ${t.reason}`
              ),
                this._blacklistedScanners.push(
                  this._getScannerName(this._currentScanner)
                ),
                this._updateScanner([]);
              break;
            case ui.FILE_ERROR:
              this._fireVideoError(
                "FileError",
                `The current file can no longer be used because ${t.reason}`
              ),
                this._currentScanner._switchToNextFile();
              break;
            case ui.DOWNLOAD_ERROR:
              this._fireVideoError("DownloadError", t),
                this._currentScanner._switchToNextFile();
              break;
            case ui.EME_UNSUPPORTED:
              this._fireVideoError("DRMFailure", {
                text: null,
                code: "emeunsupported",
              });
              break;
            case ui.DRM_FAILURE:
            case ui.DRM_AUTH_FAILURE:
              this._fireVideoError("DRMFailure", {
                text: t.text,
                code: t.code,
              });
              break;
            case ui.DRM_OUTPUT_RESTRICTED:
              this._fireVideoError("DRMFailure", {
                text: null,
                code: "outputrestricted",
              });
              break;
            case ui.DRM_AUTH_SUCCESS:
              this.fire(ui.DRM_AUTH_SUCCESS);
              break;
            case ii.TIME_UPDATE:
              this._properties.currentTime = this._currentScanner.currentTime;
              break;
            case ui.MEDIA_URL_EXPIRED:
              this._fireVideoError("MediaUrlExpired", t);
              break;
            case ui.MEDIA_URL_BAD_REQUEST:
              this._fireVideoError("MediaUrlBadRequest", t);
              break;
            case hi.BRAIN_ML_MODEL_ERR:
              this._fireVideoError("MimirError", t);
              break;
            case hi.BRAIN_ML_MODEL_NET_ERR:
              this._fireVideoError("MimirNetworkError", t);
              break;
            case hi.BRAIN_ML_MODEL_TIMEOUT:
              this._fireVideoError("MimirNetworkTimeout", t);
              break;
            case li.SPATIAL_UNSUPPORTED:
              this.getEffectByName("ThreeSixtyEffect").deactivate();
              break;
            case ii.ENDED:
              const e = !this._options.dvrEnabled || this.atLiveEdge;
              this._properties.paused = e;
              break;
            case ii.WAITING:
              this.fire(ii.WAITING);
          }
          this._activeEffects.forEach((t) => {
            "function" == typeof t[`on${e}`] && t[`on${e}`]();
          }),
            this.fire(e, t);
        }
      }),
      (t._fireVideoError = function (e, t) {
        this.fire(ii.ERROR, new ki(e, t));
      }),
      (t._getScannerName = function (e) {
        return e instanceof qi
          ? e.constructor.displayName
          : e.prototype.constructor.displayName;
      }),
      (t._setUpRebufferMonitor = function () {
        this._rebufferMonitor && this._rebufferMonitor.destroy(),
          (this._rebufferMonitor = new co(this, this._options)),
          this._rebufferMonitor.on(ui.BUFFER_STARTED, () => {
            this.fire(ui.BUFFER_STARTED);
          }),
          this._rebufferMonitor.on(ui.BUFFER_ENDED, () => {
            this.fire(ui.BUFFER_ENDED);
          });
      }),
      (t._getEffectName = function (e) {
        return e instanceof Ys
          ? e.constructor.displayName
          : e.prototype.constructor.displayName;
      }),
      (t._setCaptionsState = function (e) {
        "HLSLiveScanner" === this._getScannerName(this._currentScanner) &&
          this._currentScanner.setCaptionsState(e);
      }),
      r(e, [
        {
          key: "element",
          get: function () {
            return this._element;
          },
        },
        {
          key: "videoElement",
          get: function () {
            return this._currentScanner.videoElement;
          },
        },
        {
          key: "manifest",
          get: function () {
            return this._currentScanner.manifest || { video: [] };
          },
        },
        {
          key: "supportsSettingVolume",
          get: function () {
            return this._scanners.some(
              (e) => e.supported && e.supportsSettingVolume
            );
          },
        },
        {
          key: "supportsPlaybackRate",
          get: function () {
            return this._currentScanner.supportsPlaybackRate;
          },
        },
        {
          key: "supportsTextTracks",
          get: function () {
            return this._scanners.some(
              (e) => e.supported && e.supportsTextTracks
            );
          },
        },
        {
          key: "supportsVideoElementAudioTracks",
          get: function () {
            return this._currentScanner.constructor
              .supportsVideoElementAudioTracks;
          },
        },
        {
          key: "activeEffects",
          get: function () {
            return this._activeEffects;
          },
        },
        {
          key: "latency",
          get: function () {
            return this._currentScanner.latency;
          },
        },
        {
          key: "downloadSpeed",
          get: function () {
            return this._currentScanner.downloadSpeed || 0;
          },
        },
        {
          key: "pictureInPictureActive",
          get: function () {
            return this._currentScanner.pictureInPictureActive;
          },
        },
        {
          key: "pictureInPictureEnabled",
          get: function () {
            return this._currentScanner.pictureInPictureEnabled;
          },
        },
        {
          key: "isLowerProfileAvailable",
          get: function () {
            return this._currentScanner.isLowerProfileAvailable;
          },
        },
        {
          key: "buffered",
          get: function () {
            return this._currentScanner.buffered;
          },
        },
        {
          key: "bufferTarget",
          get: function () {
            return this._currentScanner.bufferTarget;
          },
          set: function (e) {
            (this._properties.bufferTarget = e),
              (this._currentScanner.bufferTarget = e);
          },
        },
        {
          key: "presentationDelay",
          get: function () {
            return this._currentScanner.presentationDelay;
          },
          set: function (e) {
            (this._properties.presentationDelay = e),
              (this._currentScanner.presentationDelay = e);
          },
        },
        {
          key: "lowLatencyMode",
          get: function () {
            return this._currentScanner.lowLatencyMode;
          },
          set: function (e) {
            (this._properties.lowLatencyMode = e),
              (this._currentScanner.lowLatencyMode = e);
          },
        },
        {
          key: "manifestLoadDurations",
          get: function () {
            return this._currentScanner.manifestLoadDurations
              ? this._currentScanner.manifestLoadDurations
              : [];
          },
        },
        {
          key: "successfulSegments",
          get: function () {
            return this._currentScanner.successfulSegments
              ? this._currentScanner.successfulSegments
              : [];
          },
        },
        {
          key: "failedSegments",
          get: function () {
            return this._currentScanner.failedSegments
              ? this._currentScanner.failedSegments
              : [];
          },
        },
        {
          key: "cuePoints",
          get: function () {
            return this._currentScanner.cuePoints;
          },
        },
        {
          key: "currentChapterID",
          get: function () {
            if (
              this._currentScanner &&
              this._currentScanner.chaptersTrack &&
              this._currentScanner.chaptersTrack.activeCues.length
            ) {
              const { activeCues: e } = this._currentScanner.chaptersTrack;
              return e[e.length - 1].id;
            }
            return null;
          },
        },
        {
          key: "chapters",
          get: function () {
            return this._currentScanner.chaptersTrack
              ? this._currentScanner.chaptersTrack.cues
              : [];
          },
        },
        {
          key: "chaptersTrack",
          get: function () {
            return this._currentScanner.chaptersTrack;
          },
        },
        {
          key: "currentFile",
          get: function () {
            return this._currentScanner.currentFile;
          },
          set: function (e) {
            if (
              ("string" == typeof e &&
                (e = this._files.filter((t) => t.id === e)[0]),
              !e)
            )
              throw new ki("FileNotValid", "The file is not valid.");
            this._currentScanner.currentFile = e;
          },
        },
        {
          key: "currentScannerName",
          get: function () {
            return this._getScannerName(this._currentScanner);
          },
        },
        {
          key: "currentScanner",
          get: function () {
            return this._currentScanner;
          },
        },
        {
          key: "currentTime",
          get: function () {
            return this._currentScanner.currentTime;
          },
          set: function (e) {
            (this._properties.currentTime = e),
              (this._currentScanner.currentTime = e);
          },
        },
        {
          key: "liveEdgeTime",
          get: function () {
            const e = this._currentScanner.liveEdgeTime;
            return null == e
              ? this._previousLiveEdgeTime
              : ((this._previousLiveEdgeTime = e), e);
          },
        },
        {
          key: "atLiveEdge",
          get: function () {
            var e;
            return null !== (e = this._currentScanner.atLiveEdge) &&
              void 0 !== e
              ? e
              : this.isLive();
          },
        },
        {
          key: "liveTailTime",
          get: function () {
            const e = this._currentScanner.liveTailTime;
            return null == e
              ? this._previousLiveTailTime
              : ((this._previousLiveTailTime = e), e);
          },
        },
        {
          key: "atLiveTail",
          get: function () {
            var e;
            return (
              null !== (e = this._currentScanner.atLiveTail) &&
              void 0 !== e &&
              e
            );
          },
        },
        {
          key: "duration",
          get: function () {
            return this._currentScanner.duration;
          },
        },
        {
          key: "ended",
          get: function () {
            return this._currentScanner.ended;
          },
        },
        {
          key: "externalDisplayAvailable",
          get: function () {
            return this._currentScanner.externalDisplayAvailable;
          },
        },
        {
          key: "externalDisplayActive",
          get: function () {
            return this._currentScanner.externalDisplayActive;
          },
        },
        {
          key: "loop",
          get: function () {
            return this._currentScanner.loop;
          },
          set: function (e) {
            (this._properties.loop = e), (this._currentScanner.loop = e);
          },
        },
        {
          key: "muted",
          get: function () {
            return this._currentScanner.muted;
          },
          set: function (e) {
            (this._properties.muted = !!e), (this._currentScanner.muted = !!e);
          },
        },
        {
          key: "playsinline",
          get: function () {
            return this._currentScanner.playsinline;
          },
          set: function (e) {
            (this._properties.playsinline = !!e),
              (this._currentScanner.playsinline = !!e);
          },
        },
        {
          key: "paused",
          get: function () {
            return this._currentScanner.paused;
          },
        },
        {
          key: "played",
          get: function () {
            return this._currentScanner.played;
          },
        },
        {
          key: "seekable",
          get: function () {
            return this._currentScanner.seekable;
          },
        },
        {
          key: "seeking",
          get: function () {
            return this._currentScanner.seeking;
          },
        },
        {
          key: "defaultPlaybackRate",
          get: function () {
            return this._currentScanner.defaultPlaybackRate;
          },
          set: function (e) {
            (this._properties.defaultPlaybackRate = e),
              (this._currentScanner.defaultPlaybackRate = e);
          },
        },
        {
          key: "playbackRate",
          get: function () {
            return this._currentScanner.playbackRate;
          },
          set: function (e) {
            (this._properties.playbackRate = e),
              (this._currentScanner.playbackRate = e);
          },
        },
        {
          key: "preload",
          get: function () {
            return this._currentScanner.preload;
          },
          set: function (e) {
            (this._properties.preload = e), (this._currentScanner.preload = e);
          },
        },
        {
          key: "autoPictureInPicture",
          get: function () {
            return this._currentScanner.autoPictureInPicture;
          },
          set: function (e) {
            (this._properties.autoPictureInPicture = !!e),
              (this._currentScanner.autoPictureInPicture = !!e);
          },
        },
        {
          key: "disablePictureInPicture",
          get: function () {
            return this._currentScanner.disablePictureInPicture;
          },
          set: function (e) {
            (this._properties.disablePictureInPicture = !!e),
              (this._currentScanner.disablePictureInPicture = !!e);
          },
        },
        {
          key: "video",
          get: function () {
            return this._video;
          },
          set: function (e) {
            this._video && this._video.deactivate(),
              (this._blacklistedScanners = []),
              this._setUpRebufferMonitor(),
              null === e
                ? ((this._video = null), this._resetScanner())
                : ((this._video = new uo(e)), this._updateScanner());
          },
        },
        {
          key: "videoWidth",
          get: function () {
            return this._currentScanner.videoWidth;
          },
        },
        {
          key: "videoHeight",
          get: function () {
            return this._currentScanner.videoHeight;
          },
        },
        {
          key: "volume",
          get: function () {
            return this._currentScanner.volume;
          },
          set: function (e) {
            if (e < 0 || e > 1)
              throw new ki(
                "IndexSizeError",
                `Failed to set the 'volume' property: The volume provided (${e}) is outside of the range [0, 1].`
              );
            (this._properties.volume = e), (this._currentScanner.volume = e);
          },
        },
        {
          key: "videoElementAudioTracks",
          get: function () {
            return this._currentScanner.audioTracks;
          },
        },
        {
          key: "brainDebug",
          get: function () {
            return this._currentScanner.brainDebug;
          },
        },
      ]),
      e
    );
  })(),
  fo = (function (e) {
    function t(t, n = {}) {
      var r;
      return (
        ((r = e.call(this, t, n) || this)._activated = !1),
        (r._video = r._telecine._currentScanner._video),
        r
      );
    }
    a(t, e),
      r(t, null, [
        {
          key: "displayName",
          get: function () {
            return "CanvasEffect";
          },
        },
        {
          key: "supported",
          get: function () {
            return !0;
          },
        },
        {
          key: "supportedScanners",
          get: function () {
            return [qi, As];
          },
        },
      ]);
    var n = t.prototype;
    return (
      (n.activate = function () {
        (this._activated = !0),
          (this._canvas = document.createElement("canvas")),
          (this._canvas.className = "vp-canvas-effect"),
          (this._canvas.style.cssText =
            "\n            position: absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n        "),
          (this._ctx = this._canvas.getContext("2d", { alpha: !1 })),
          this._element.appendChild(this._canvas),
          this._startRendering();
      }),
      (n.deactivate = function () {
        this._canvas && this._element.removeChild(this._canvas),
          this._stopRendering(),
          (this._activated = !1);
      }),
      (n._startRendering = function () {
        this._requestFrame();
      }),
      (n._requestFrame = function () {
        this._animationFrame = window.requestAnimationFrame(
          this._renderFrame.bind(this)
        );
      }),
      (n._renderFrame = function () {
        const e = this._video,
          t = this._canvas;
        (t.width = e.clientWidth), (t.height = e.clientHeight);
        const n = Math.floor(this._videoContentWidth()),
          r = Math.floor(this._videoContentHeight()),
          i = Math.floor((e.clientWidth - n) / 2),
          s = Math.floor((e.clientHeight - r) / 2);
        (this._ctx.fillStyle = "#000"),
          this._ctx.fillRect(0, 0, t.width, t.height),
          this._ctx.drawImage(e, i, s, n, r),
          this._requestFrame();
      }),
      (n._videoRatio = function () {
        return this._video.videoHeight / this._video.videoWidth;
      }),
      (n._videoContentWidth = function () {
        return Math.min(
          this._video.clientHeight / this._videoRatio(),
          this._video.clientWidth
        );
      }),
      (n._videoContentHeight = function () {
        return Math.min(
          this._video.clientWidth * this._videoRatio(),
          this._video.clientHeight
        );
      }),
      (n._stopRendering = function () {
        this._animationFrame &&
          (window.cancelAnimationFrame(this._animationFrame),
          (this._animationFrame = null));
      }),
      t
    );
  })(Ys),
  _o = (function () {
    function e() {}
    return (
      r(e, null, [
        {
          key: "Equirect",
          get: function () {
            return "equirectangular";
          },
        },
      ]),
      e
    );
  })(),
  po = (function () {
    function e() {}
    return (
      r(e, null, [
        {
          key: "Mono",
          get: function () {
            return "mono";
          },
        },
        {
          key: "TopBottom",
          get: function () {
            return "top-bottom";
          },
        },
      ]),
      e
    );
  })(),
  mo = (function () {
    function e(e, t, n) {
      switch (
        ((this.isStereo = t !== po.Mono),
        (this._leftEye = null),
        (this._rightEye = null),
        e)
      ) {
        case _o.Equirect:
          this.createEquirectProjection(n, t);
          break;
        default:
          this.createEquirectProjection(n, po.Mono);
      }
    }
    var t = e.prototype;
    return (
      (t.createEquirectProjection = function (e, t) {
        switch (t) {
          case po.Mono:
            this._leftEye = this._createEquirectangularSphereMesh(e);
            break;
          case po.TopBottom:
            (this._leftEye = this._createEquirectangularSphereMesh(e)),
              (this._rightEye = this._createEquirectangularSphereMesh(e)),
              this._leftEye.layers.set(1),
              this._rightEye.layers.set(2),
              this._chopGeometryUvs(this._leftEye.geometry, 0.5, 0),
              this._chopGeometryUvs(this._rightEye.geometry, 0.5, 0.5);
        }
      }),
      (t._createEquirectangularSphereMesh = function (t, n, r, i) {
        const s = new THREE.SphereBufferGeometry(
          n || e.SPHERE_RADIUS,
          r || e.TESSELATION_WIDTH,
          i || e.TESSELATION_HEIGHT
        );
        s.scale(-1, 1, 1);
        const o = new THREE.MeshBasicMaterial({ map: t });
        return new THREE.Mesh(s, o);
      }),
      (t._chopGeometryUvs = function (e, t, n, r = 1) {
        for (let i = 0; i < e.attributes.uv.array.length; i += 2)
          (e.attributes.uv.array[i + r] *= t),
            (e.attributes.uv.array[i + r] += n);
      }),
      r(
        e,
        [
          {
            key: "left",
            get: function () {
              return this._leftEye;
            },
          },
          {
            key: "right",
            get: function () {
              return this._rightEye;
            },
          },
        ],
        [
          {
            key: "TESSELATION_WIDTH",
            get: function () {
              return 120;
            },
          },
          {
            key: "TESSELATION_HEIGHT",
            get: function () {
              return 80;
            },
          },
          {
            key: "SPHERE_RADIUS",
            get: function () {
              return 500;
            },
          },
        ]
      ),
      e
    );
  })(),
  vo = (function () {
    function e(e) {
      this._renderer = e;
    }
    var t = e.prototype;
    return (
      (t.hasVRHeadset = function () {
        return Le.webvr
          ? navigator
              .getVRDisplays()
              .then((e) =>
                e.length > 0 ? (this._renderer.vr.setDevice(e[0]), e[0]) : null
              )
          : null;
      }),
      (t.enter = function () {
        return (
          this._renderer.vr.getDevice() &&
          this._renderer.vr
            .getDevice()
            .requestPresent([{ source: this._renderer.domElement }])
        );
      }),
      (t.exit = function () {
        return (
          this._renderer.vr.getDevice() &&
          this._renderer.vr.getDevice().exitPresent()
        );
      }),
      r(e, [
        {
          key: "supported",
          get: function () {
            return Le.webvr;
          },
        },
        {
          key: "device",
          get: function () {
            return this._renderer && this._renderer.vr.getDevice()
              ? this._renderer.vr.getDevice()
              : null;
          },
        },
        {
          key: "isPresenting",
          get: function () {
            return (
              !(!this._renderer || !this._renderer.vr.getDevice()) &&
              this._renderer.vr.getDevice().isPresenting
            );
          },
        },
      ]),
      e
    );
  })(),
  go = (function (e) {
    function t(t, n = {}) {
      var r;
      return (
        ((r = e.call(this, t, n) || this)._activated = !1),
        (r._camera = null),
        (r._scene = null),
        (r._renderer = null),
        (r.isUserInteracting = !1),
        (r._onMouseDownMouseX = 0),
        (r._onMouseDownMouseY = 0),
        (r._coordinates = { lat: 0, long: 0 }),
        (r._previousCoordinates = { lat: 0, long: 0 }),
        (r._onMouseDownCoordinates = { lat: 0, long: 0 }),
        (r._previousCameraProps = r.cameraProps),
        (r._phi = 0),
        (r._theta = 0),
        (r._rotation = 0),
        (r._video = r._telecine._currentScanner._video),
        (r._videoRefreshLoop = null),
        (r._gyroVector = { x: 0, y: 0 }),
        (r._offset = { lat: 0, long: 0 }),
        (r._writeSpeeds = { videoFps: r._options.fps, motionRenderSpeed: 60 }),
        (r._maxTimeBetweenWrites = 1e3 / r._writeSpeeds.videoFps),
        (r._motionTimeouts = []),
        (r._movingAutomatically = !1),
        (r._deviceMotionHasOccurred = !1),
        (r._updateFromGyroscopePending = !1),
        (r._keysPressed = { up: !1, down: !1, left: !1, right: !1 }),
        r
      );
    }
    a(t, e),
      r(
        t,
        [
          {
            key: "isUserInteracting",
            set: function (e) {
              e !== this._isUserInteracting &&
                ((this._isUserInteracting = e),
                e
                  ? this._options.isMobile ||
                    this._telecine.fire(li.MOTION_START)
                  : this._options.isMobile ||
                    this._telecine.fire(li.MOTION_END));
            },
            get: function () {
              return this._isUserInteracting;
            },
          },
        ],
        [
          {
            key: "displayName",
            get: function () {
              return "ThreeSixtyEffect";
            },
          },
          {
            key: "supported",
            get: function () {
              try {
                const e = document.createElement("canvas");
                return (
                  !!window.WebGLRenderingContext &&
                  (e.getContext("webgl") || e.getContext("experimental-webgl"))
                );
              } catch (Rl) {
                return (
                  this._telecine._currentScanner.fire(li.SPATIAL_UNSUPPORTED),
                  !1
                );
              }
            },
          },
          {
            key: "supportedScanners",
            get: function () {
              return [qi, As];
            },
          },
        ]
      ),
      (t.frustumSurfaceArea = function (e, t, n) {
        const r =
          2 * mo.SPHERE_RADIUS * 2 * Math.sin((Math.PI / 180) * (e / 2));
        return (
          (r * ((r * t) / n)) / (4 * Math.PI * Math.pow(mo.SPHERE_RADIUS, 2))
        );
      });
    var n = t.prototype;
    return (
      (n.activate = function () {
        return new Promise((e, t) => {
          if (window.THREE) return void e();
          const n = document.createElement("script");
          (n.src = this._options.threeUrl),
            document.body.appendChild(n),
            (n.onload = () => {
              e();
            });
        }).then(() => this._initialize());
      }),
      (n._initialize = function () {
        (this._activated = !0),
          (this._camera = new THREE.PerspectiveCamera(
            this._options.fieldOfView,
            this._video.clientWidth / this._video.clientHeight,
            1,
            2 * mo.SPHERE_RADIUS
          )),
          (this._camera.target = new THREE.Vector3(0, 0, 0)),
          this._camera.layers.enable(1),
          this._initializeAutoMovement(this._options.directorTimeline),
          (this._scene = new THREE.Scene()),
          (this._texture = new THREE.VideoTexture(this._video)),
          (this._texture.generateMipmaps = !1),
          (this._texture.minFilter = THREE.NearestFilter),
          (this._texture.maxFilter = THREE.NearestFilter),
          (this._texture.format = THREE.RGBFormat),
          (this._projector = new mo(
            this._options.projection,
            this._options.stereoMode,
            this._texture
          )),
          this._projector.isStereo && this._scene.add(this._projector.right),
          this._scene.add(this._projector.left),
          (this._renderer = new THREE.WebGLRenderer()),
          (this._renderer.vr.enabled = !0),
          this._renderer.setPixelRatio(window.devicePixelRatio),
          (this._output = document.createElement("div")),
          this._output.appendChild(this._renderer.domElement),
          this._element.appendChild(this._output),
          this._hideOutput(),
          this._telecine._currentScanner._video.setAttribute(
            "crossorigin",
            "anonymous"
          ),
          this._startRendering(),
          this._telecine._currentScanner.paused || this._showOutput(),
          (this._webvr = new vo(this._renderer)),
          this._webvr.supported &&
            this._webvr
              .hasVRHeadset()
              .then((e) => {
                setTimeout(() => {
                  this._telecine.fire(
                    li.WEBVR_HARDWARE_AVAILABLE,
                    this._webvr.device
                  );
                }, 100);
              })
              .catch((e) => {});
      }),
      (n.toggleVR = function () {
        if (this._webvr.isPresenting)
          this._webvr
            .exit()
            .then(() => {
              this.adjustRenderSize();
            })
            .catch((e) => {});
        else {
          if (this._telecine._currentScanner.paused) return;
          this._webvr
            .enter()
            .then(() => {
              this.adjustRenderSize();
            })
            .catch((e) => {});
        }
      }),
      (n.onplay = function () {
        this._activated && (this._showOutput(), this.adjustRenderSize());
      }),
      (n.deactivate = function () {
        this._output && this._element.removeChild(this._output),
          this._stopRendering(),
          (this._activated = !1);
      }),
      (n.snapToCenter = function () {
        this._motionTimeouts.forEach((e) => clearTimeout(e));
        const e =
            ((this._coordinates.long >= 180 ? 360 : 0) -
              this._coordinates.long) /
            11,
          t = (0 - this._coordinates.lat) / 11;
        this._rotation = 0;
        for (let n = 0; n < 50; n++)
          this._motionTimeouts.push(
            setTimeout(() => {
              0 === n &&
                ((this._movingAutomatically = !0),
                this._options.isMobile ||
                  (this._maxTimeBetweenWrites =
                    1e3 / this._writeSpeeds.motionRenderSpeed)),
                49 === n &&
                  ((this._movingAutomatically = !1),
                  this._options.isMobile ||
                    (this._maxTimeBetweenWrites =
                      1e3 / this._writeSpeeds.videoFps)),
                this._updateViewpoint(
                  this._coordinates.lat + t / Math.pow(1.1, n),
                  this._coordinates.long + e / Math.pow(1.1, n)
                ),
                (this._offset.lat =
                  THREE.Math.radToDeg(this._gyroVector.x) +
                  this._coordinates.lat +
                  t / Math.pow(1.1, n)),
                (this._offset.long =
                  THREE.Math.radToDeg(this._gyroVector.y) +
                  this._coordinates.long +
                  t / Math.pow(1.1, n));
            }, n * this._maxTimeBetweenWrites)
          );
      }),
      (n.isStereo = function () {
        return !!this._projector && this._projector.isStereo;
      }),
      (n._initializeAutoMovement = function (e) {
        e &&
          e[0] &&
          void 0 !== e[0].p &&
          "undefined" !== e[0].y &&
          this._updateViewpoint(e[0].p, e[0].y);
      }),
      (n._updateViewpoint = function (e, t) {
        (this._previousCoordinates.long = this._coordinates.long),
          (this._previousCoordinates.lat = this._coordinates.lat),
          (e %= 360),
          (this._coordinates.lat = Math.max(-85, Math.min(85, e))),
          (t = (t %= 360) >= 0 ? t : 360 + t),
          (this._coordinates.long = t);
      }),
      (n.makeContact = function (e) {
        (this.isUserInteracting = !0),
          this._motionTimeouts.forEach((e) => clearTimeout(e)),
          (this._movingAutomatically = !1),
          (this._contactPoint = { x: e.x, y: e.y }),
          (this._onMouseDownCoordinates.long = this._coordinates.long),
          (this._onMouseDownCoordinates.lat = this._coordinates.lat),
          (this._motionStart = {
            long: this._coordinates.long,
            lat: this._coordinates.lat,
          }),
          this._options.isMobile ||
            (this._maxTimeBetweenWrites =
              1e3 / this._writeSpeeds.motionRenderSpeed);
      }),
      (n.move = function (e) {
        (this._offset.lat =
          THREE.Math.radToDeg(this._gyroVector.x) +
          this._previousCoordinates.lat),
          (this._offset.long =
            THREE.Math.radToDeg(this._gyroVector.y) +
            this._previousCoordinates.long);
        const t = this._motionStart.lat - 0.2 * (this._contactPoint.y - e.y),
          n = 0.2 * (this._contactPoint.x - e.x) + this._motionStart.long;
        this._updateViewpoint(t, n);
      }),
      (n.moveWheel = function (e) {
        (this._offset.lat =
          THREE.Math.radToDeg(this._gyroVector.x) +
          this._previousCoordinates.lat),
          (this._offset.long =
            THREE.Math.radToDeg(this._gyroVector.y) +
            this._previousCoordinates.long);
        const t = this._coordinates.lat - 0.1 * e.y,
          n = this._coordinates.long + 0.1 * e.x;
        this._updateViewpoint(t, n);
      }),
      (n.moveDevice = function (e, t, n, r) {
        this._updateFromGyroscopePending = !0;
        const i = new THREE.Quaternion();
        let s = window.orientation;
        null === s &&
          (s = this._video.clientWidth > this._video.clientHeight ? 90 : 0),
          (e = e ? THREE.Math.degToRad(e) : 0),
          (t = t ? THREE.Math.degToRad(t) : 0),
          (n = n ? THREE.Math.degToRad(n) : 0);
        const o = s ? THREE.Math.degToRad(s) : 0,
          a = new THREE.Vector3(0, 0, 1),
          u = new THREE.Euler(),
          c = new THREE.Quaternion(),
          l = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
        u.set(t, e, -n, "YXZ"),
          i.setFromEuler(u),
          i.multiply(l),
          i.multiply(c.setFromAxisAngle(a, -o)),
          (this._gyroVector = new THREE.Euler().setFromQuaternion(i, "YXZ")),
          (this._rotation = this._gyroVector.z),
          this.isUserInteracting ||
            this._movingAutomatically ||
            this._updateViewpoint(
              THREE.Math.radToDeg(this._gyroVector.x) - this._offset.lat,
              -THREE.Math.radToDeg(this._gyroVector.y) + this._offset.long
            ),
          this._deviceMotionHasOccurred ||
            (this.snapToCenter(),
            this._telecine.fire(li.MOTION_START),
            (this._deviceMotionHasOccurred = !0));
      }),
      (n.releaseContact = function (e) {
        if (
          ((this._offset.lat =
            THREE.Math.radToDeg(this._gyroVector.x) - this._coordinates.lat),
          (this._offset.long =
            THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long),
          (this.isUserInteracting = !1),
          this._motionStart && !e)
        ) {
          const e = Math.hypot(
            this._coordinates.long - this._motionStart.long,
            this._coordinates.lat - this._motionStart.lat
          );
          this._moveDueToMomentum(e);
        }
      }),
      (n.abandonMotion = function () {
        (this.isUserInteracting = !1), (this._motionStart = null);
      }),
      (n.keyPress = function (e) {
        this._options.keyboardDisabled ||
          (this._keyIsDown() ||
            ((this.isUserInteracting = !0),
            this._motionTimeouts &&
              this._motionTimeouts.forEach((e) => clearTimeout(e))),
          this._keysPressed[e] || (this._keysPressed[e] = !0));
      }),
      (n.keyUp = function (e) {
        (this._keysPressed[e] = !1),
          this._keyIsDown() ||
            ((this.isUserInteracting = !1), this._moveDueToMomentum(1 / 0));
      }),
      (n._moveFromKeyPress = function () {
        Object.keys(this._keysPressed).forEach((e) => {
          if (this._keysPressed[e])
            switch (e) {
              case "up":
                this._updateViewpoint(
                  this._coordinates.lat + 2,
                  this._coordinates.long
                );
                break;
              case "down":
                this._updateViewpoint(
                  this._coordinates.lat - 2,
                  this._coordinates.long
                );
                break;
              case "left":
                this._updateViewpoint(
                  this._coordinates.lat,
                  this._coordinates.long - 2
                );
                break;
              case "right":
                this._updateViewpoint(
                  this._coordinates.lat,
                  this._coordinates.long + 2
                );
            }
        });
      }),
      (n._keyIsDown = function () {
        return Object.keys(this._keysPressed)
          .map((e) => this._keysPressed[e])
          .some((e) => e);
      }),
      (n._moveDueToMomentum = function (e) {
        if (e >= 20) {
          const t = {
            long: this._coordinates.long - this._previousCoordinates.long,
            lat: this._coordinates.lat - this._previousCoordinates.lat,
          };
          e === 1 / 0 && ((t.long /= 2), (t.lat /= 2));
          for (let e = 1; e < 50; e++)
            this._motionTimeouts.push(
              setTimeout(() => {
                1 === e && (this._movingAutomatically = !0),
                  49 === e &&
                    ((this._movingAutomatically = !1),
                    (this._maxTimeBetweenWrites =
                      1e3 / this._writeSpeeds.videoFps));
                const n = 2 / Math.pow(e, 1.5);
                (this._offset.lat =
                  THREE.Math.radToDeg(this._gyroVector.x) +
                  this._coordinates.lat +
                  t.lat),
                  (this._offset.long =
                    THREE.Math.radToDeg(this._gyroVector.y) +
                    this._coordinates.long +
                    t.long),
                  this._updateViewpoint(
                    this._coordinates.lat + t.lat * n,
                    this._coordinates.long + t.long * n
                  );
              }, e * this._maxTimeBetweenWrites)
            );
        }
      }),
      (n.onseeked = function () {
        this._activated && this._update();
      }),
      (n.onresize = function () {
        this.adjustRenderSize(), (this.isUserInteracting = !1);
      }),
      (n._update = function () {
        if (!this.isVRPresenting) {
          (this._phi = THREE.Math.degToRad(90 + this._coordinates.lat)),
            (this._theta = THREE.Math.degToRad(this._coordinates.long)),
            this._camera.position.set(
              Math.sin(this._phi) * Math.cos(this._theta),
              Math.cos(this._phi),
              Math.sin(this._phi) * Math.sin(this._theta)
            ),
            this._camera.lookAt(this._camera.target),
            (this._camera.rotation.z += this._rotation);
          const e = this.cameraProps;
          this._telecine.fire(li.CAMERA_UPDATE, e),
            (this._previousCameraProps.yaw === e.yaw &&
              this._previousCameraProps.pitch === e.pitch &&
              this._previousCameraProps.roll === e.roll &&
              this._previousCameraProps.fov === e.fov) ||
              ((this._previousCameraProps = e),
              this._telecine.fire(li.CAMERA_CHANGE, e));
        }
        this._renderer.render(this._scene, this._camera);
      }),
      (n.adjustRenderSize = function () {
        if (this.isVRPresenting)
          (this._camera.aspect =
            this._video.clientWidth / this._video.clientHeight),
            this._camera.updateProjectionMatrix(),
            this._renderer.setSize(
              this._video.clientWidth,
              this._video.clientHeight
            );
        else {
          this._video.clientWidth > this._video.clientHeight
            ? (this._camera.aspect = Math.max(
                1,
                Math.min(2, this._video.clientWidth / this._video.clientHeight)
              ))
            : (this._camera.aspect = Math.max(
                1 / 3,
                Math.min(3, this._video.clientWidth / this._video.clientHeight)
              )),
            this._camera.updateProjectionMatrix();
          const e = Si(
            this._video.clientWidth,
            this._video.clientHeight,
            this._camera.aspect,
            1
          );
          this._renderer.setSize(e.width, e.height),
            (this._output.style.paddingTop = `${e.top}px`);
        }
      }),
      (n._startRendering = function () {
        this._renderer.setAnimationLoop(() => {
          this._keyIsDown() && this._moveFromKeyPress(), this._update();
        });
      }),
      (n._stopRendering = function () {
        this._renderer.setAnimationLoop(null);
      }),
      (n._showOutput = function () {
        this._styleOutput({ backgroundColor: "#000", display: "block" });
      }),
      (n._hideOutput = function () {
        this._styleOutput({ backgroundColor: "#000", display: "none" });
      }),
      (n._styleOutput = function ({ backgroundColor: e, display: t } = {}) {
        this._output.style.cssText = `position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:${e};width:100%;height:100%;text-align:center;display:${t}`;
      }),
      r(t, [
        {
          key: "currentCoordinates",
          get: function () {
            return this._coordinates;
          },
          set: function ([e, t]) {
            if (e > 90 || e < -90)
              throw new RangeError(
                "Latitude should be a float between -90 and 90."
              );
            if (t < 0 || t > 360)
              throw new RangeError(
                "Longitude should be a float between 0 and 360."
              );
            this._updateViewpoint(e, t), this._update();
          },
        },
        {
          key: "cameraProps",
          get: function () {
            return {
              yaw: this._coordinates.long,
              pitch: this._coordinates.lat,
              roll: this.roll,
              fov: this.fieldOfView,
            };
          },
          set: function (e) {
            (e = o(o({}, this.cameraProps), e)),
              (this.fieldOfView = e.fov),
              (this.roll = e.roll),
              (this.currentCoordinates = [e.pitch, e.yaw]);
          },
        },
        {
          key: "roll",
          get: function () {
            return (180 * this._rotation) / Math.PI;
          },
          set: function (e) {
            if (e < -180 || e > 180)
              throw new RangeError(
                "Roll should be a float between -180 and 180."
              );
            this._rotation = THREE.Math.degToRad(e);
          },
        },
        {
          key: "isVRPresenting",
          get: function () {
            return this._webvr && this._webvr.isPresenting;
          },
        },
        {
          key: "fieldOfView",
          get: function () {
            return this._camera ? this._camera.fov : this._options.fieldOfView;
          },
          set: function (e) {
            (this._camera.fov = e),
              this._camera.updateProjectionMatrix(),
              this._renderer.render(this._scene, this._camera);
          },
        },
        {
          key: "hasVRHeadset",
          get: function () {
            return this._webvr && !!this._webvr.device;
          },
        },
      ]),
      t
    );
  })(Ys),
  yo = (function (e) {
    function t(t, n = {}) {
      var r;
      return (
        ((r = e.call(this, t, n) || this).connected = !1),
        (r._context = null),
        (r._source = null),
        (r._mirror = null),
        (r._rotator = null),
        (r._decoder = null),
        r
      );
    }
    a(t, e),
      r(t, null, [
        {
          key: "displayName",
          get: function () {
            return "AmbisonicEffect";
          },
        },
        {
          key: "supported",
          get: function () {
            return void 0 !== window.AudioContext;
          },
        },
        {
          key: "supportedScanners",
          get: function () {
            return [qi, As];
          },
        },
      ]);
    var n = t.prototype;
    return (
      (n.activate = function () {
        return (
          (this._context = new AudioContext()),
          new Promise((e, t) => {
            if ("undefined" != typeof ambisonics) return void e();
            const n = document.createElement("script");
            (n.src = this._options.ambisonicsUrl),
              document.body.appendChild(n),
              (n.onload = () => e()),
              (n.onerror = () => t());
          })
            .then(() => this.toggleAmbisonics())
            .catch(() => {
              this._telecine._currentScanner.fire(li.AMBISONIC_UNSUPPORTED);
            })
        );
      }),
      (n.deactivate = function () {
        this._disconnect(!0);
      }),
      (n.toggleAmbisonics = function () {
        var e, t;
        (null !==
          (e =
            null == (t = this._telecine.getCurrentStream("audio"))
              ? void 0
              : t.ambisonic_order) && void 0 !== e
          ? e
          : 0) < 1
          ? this._disconnect()
          : this._connect();
      }),
      (n._connect = function () {
        var e, t;
        if (!this._context) return;
        const n =
          null !==
            (e =
              null == (t = this._telecine.getCurrentStream("audio"))
                ? void 0
                : t.ambisonic_order) && void 0 !== e
            ? e
            : 0;
        if (this.connected || n < 1) return;
        const r = this._telecine._currentScanner._video;
        (this._source = this._context.createMediaElementSource(r)),
          (this._mirror = new ambisonics.sceneMirror(this._context, n)),
          (this._rotator = new ambisonics.sceneRotator(this._context, n)),
          (this._decoder = new ambisonics.binDecoder(this._context, n)),
          this._source.connect(this._mirror.in),
          this._mirror.out.connect(this._rotator.in),
          this._rotator.out.connect(this._decoder.in),
          this._decoder.out.connect(this._context.destination),
          this._mirror.mirror(1),
          (this.connected = !0);
      }),
      (n._disconnect = function (e = !1) {
        this._source && this._source.disconnect(),
          e && this._context && (this._context.close(), (this._context = null)),
          (this._source = null),
          (this._mirror = null),
          (this._rotator = null),
          (this._decoder = null),
          (this.connected = !1);
      }),
      (n.updateRotation = function (e, t, n) {
        this._rotator &&
          (this._rotator.yaw !== e ||
            this._rotator.pitch !== t ||
            this._rotator.roll !== n) &&
          ((this._rotator.yaw = e),
          (this._rotator.pitch = t),
          (this._rotator.roll = n),
          this._rotator.updateRotMtx());
      }),
      t
    );
  })(Ys);
const Eo = {
    h264: "video/mp4",
    hls: "application/vnd.apple.mpegurl",
    hlsLive: "application/x-mpegURL",
    dash: "application/vnd.vimeo.dash+json",
    dashMpd: "video/vnd.mpeg.dash.mpd",
    vp6: "video/x-flv",
    vp8: "video/webm",
    webm: "video/webm",
    hds: "application/f4m",
  },
  To = {
    "application/vnd.apple.mpegurl": "hls",
    "application/vnd.vimeo.dash+json": "dash",
    "video/vnd.mpeg.dash.mpd": "dash",
    "video/mp4": "progressive",
    "video/webm": "progressive",
    "video/x-flv": "progressive",
    "application/x-mpegURL": "hlslive",
  };
var So = /^\s+|\s+$/g,
  bo = /^[-+]0x[0-9a-f]+$/i,
  Ao = /^0b[01]+$/i,
  Io = /^0o[0-7]+$/i,
  wo = parseInt;
function Ro(e) {
  if ("number" == typeof e) return e;
  if (Qe(e)) return NaN;
  if (et(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = et(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(So, "");
  var n = Ao.test(e);
  return n || Io.test(e) ? wo(e.slice(2), n ? 2 : 8) : bo.test(e) ? NaN : +e;
}
var ko = Ve.isFinite,
  Po = Math.min,
  Do = (function (e) {
    var t = Math.round;
    return function (e, n) {
      if (
        ((e = Ro(e)),
        (n =
          null == n
            ? 0
            : Po(
                (function (e) {
                  var t = (function (e) {
                      return e
                        ? (e = Ro(e)) === 1 / 0 || e === -1 / 0
                          ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                          : e == e
                          ? e
                          : 0
                        : 0 === e
                        ? e
                        : 0;
                    })(e),
                    n = t % 1;
                  return t == t ? (n ? t - n : t) : 0;
                })(n),
                292
              )) && ko(e))
      ) {
        var r = (Ot(e) + "e").split("e");
        return +(
          (r = (Ot(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] +
          "e" +
          (+r[1] - n)
        );
      }
      return t(e);
    };
  })();
function Oo(e) {
  return !isNaN(e);
}
function Lo(e) {
  return Do(e, 3);
}
let Co = 0;
function Mo(e = "b") {
  return `${e}${++Co}`;
}
Mo(), Mo();
const No = Mo(),
  xo = Mo(),
  Uo = Mo(),
  Fo = Mo(),
  jo = Mo(),
  Bo = Mo(),
  Vo = Mo(),
  Ho = Mo(),
  Xo = Mo(),
  qo = Mo(),
  Go = Mo(),
  Wo = Mo(),
  Ko = Mo(),
  Yo = Mo(),
  $o = Mo(),
  zo = Mo(),
  Qo = Mo();
var Jo = Object.freeze({
    __proto__: null,
    CONFIG_CHANGED: Vo,
    TELECINE_READY: Ho,
    TELECINE_VIDEO_INIT: Xo,
    PLAY_INITIATED: qo,
    QUALITY_CHANGED: Go,
    FORCED_QUALITY: Wo,
    CUE_CHANGED: Ko,
    CAPTIONS_CHANGED: Yo,
    SPATIAL_PLAYBACK_TOGGLED: $o,
    PICTURE_IN_PICTURE_AVAILABLE_SAFARI: zo,
    HLS_QUALITY_CHANGED: Qo,
  }),
  Zo = Object.freeze({
    __proto__: null,
    EVENT_PENDING: "liveeventpending",
    EVENT_ACTIVE: "liveeventactive",
    EVENT_STARTING: "liveeventstarting",
    EVENT_STARTED: "liveeventstarted",
    EVENT_ENDED: "liveeventended",
    ARCHIVE_STARTED: "livearchivestarted",
    ARCHIVE_DONE: "livearchivedone",
    ARCHIVE_ERROR: "livearchiveerror",
    SETTINGS_UPDATED: "livesettingsupdated",
    LOW_LATENCY_FALLBACK: "lowlatencyfallback",
    LIVE_STATS_SUCCESS: "livestatssuccess",
    LIVE_STATS_FAILURE: "livestatsfailure",
  });
o(o(o(o(o(o(o(o(o({}, ii), ui), ci), Zo), li), oi), di), hi), Jo);
const ea = o(o({}, ci), Zo);
function ta(e) {
  var t;
  return "done" === (null == e || null == (t = e.archive) ? void 0 : t.status);
}
function na(e) {
  return "pending" === (null == e ? void 0 : e.status);
}
function ra(e) {
  return "started" === (null == e ? void 0 : e.status);
}
function ia(e) {
  return "ended" === (null == e ? void 0 : e.status);
}
function sa(e) {
  return oa(e, "/playlist/refresh");
}
function oa(e, t) {
  var n;
  const r = null == (n = e.request.files.hls) ? void 0 : n.default_cdn,
    { signature: i, timestamp: s, expires: o } = e.request;
  return `${`https://${e.player_url}/live/${e.video.id}`}${t}${`?signature=${i}&time=${s}&expires=${o}&cdn=${r}`}`;
}
var aa = Object.prototype.hasOwnProperty;
function ua(e) {
  if (null == e) return !0;
  if (
    Bn(e) &&
    (Fe(e) ||
      "string" == typeof e ||
      "function" == typeof e.splice ||
      En(e) ||
      On(e) ||
      mn(e))
  )
    return !e.length;
  var t = mr(e);
  if ("[object Map]" == t || "[object Set]" == t) return !e.size;
  if (Nn(e)) return !jn(e).length;
  for (var n in e) if (aa.call(e, n)) return !1;
  return !0;
}
function ca(e) {
  const t = this;
  let n = {};
  const r = {
    get attributes() {
      return Object.assign({}, t);
    },
    get previousAttributes() {
      return n;
    },
    clear() {
      i();
      var e = t.attributes;
      for (var n in e) delete t[n];
    },
    set(e) {
      for (var n in (i(), (e = Cr(e)))) t[n] = e[n];
    },
    clone: () => new ca(t.attributes),
    toJSON: () => Cr(t.attributes),
  };
  function i() {
    ua(t.attributes) || (n = Cr(t.attributes));
  }
  return r.set(e), E(t, r);
}
function la(e, t) {
  const n = new ca(ni(e, t));
  let r = !1;
  return T(n, {
    reset: function (e) {
      return (
        n.clear(),
        (function (e) {
          (r = !0), n.set(e), ni(n, t);
        })(e),
        n
      );
    },
    isNewVideo: function () {
      const e = n.previousAttributes;
      return (
        !r ||
        e.video.id !== n.video.id ||
        e.video.version.current !== n.video.version.current ||
        (e.video.live_event &&
          !ta(e.video.live_event) &&
          (!n.video.live_event || ta(n.video.live_event)))
      );
    },
  });
}
function da(e) {
  return e.quality || e.metadata.quality;
}
function ha(e, t) {
  e.embed.settings.audio_tracks || (t = null);
  const n = e.request.files,
    r = va(n),
    i = ba(e),
    s =
      e.request.cookie.quality ||
      i ||
      (function (e) {
        const t = va(e.request.files);
        let n = t.some(Ta);
        Le.mobileAndroid && (n = !1);
        let r = "720p";
        if (n) {
          const e = t.map(da);
          -1 !== e.indexOf("1080p") &&
            -1 === e.indexOf("720p") &&
            (r = "1080p");
        }
        return e.request.cookie.hd || e.video.default_to_hd ? r : "360p";
      })(e);
  let o = (function ({
    files: e = [],
    preference: t = "360p",
    priorityOffset: n = 0,
  }) {
    (e = Array.from(e)).sort(Ia());
    const r = e.map(da);
    if (t) {
      -1 === r.indexOf(t) && (r.push(t), r.sort((e, t) => Sa(t) - Sa(e)));
      const e = r.indexOf(t),
        n = r.splice(0, e);
      n.reverse(), r.push.apply(r, p(n));
    }
    return e.map((e) => ({
      id: e.id,
      src: e.url,
      mime: e.mime,
      priority: r.indexOf(e.quality) + 1 + n,
      metadata: {
        profile: e.profile,
        cdn: e.cdn,
        origin: e.origin,
        quality: e.quality,
        fps: e.fps,
      },
    }));
  })({ files: r, preference: s, priorityOffset: 3 });
  return (
    (n.hls &&
      ((o = o.concat(pa(e, !1, t))), e.request.drm && Le.browser.safari)) ||
      (n.dash && (o = o.concat(ma(e, !1, t)))),
    o
  );
}
function fa(e, t = !1, n = !1) {
  let r = e.url;
  if (("avc_url" in e && (r = e.avc_url), n)) return r;
  const i = Le.hevc && (!t || Le.spatialHEVC),
    s = Le.hdr && Le.hevcMain10 && (!t || Le.spatialHEVC);
  return (
    Le.dolbyVision && "hevc_dvh1_url" in e
      ? (r = e.hevc_dvh1_url)
      : s && "hevc_hdr_url" in e
      ? (r = e.hevc_hdr_url)
      : i && "hevc_sdr_url" in e
      ? (r = e.hevc_sdr_url)
      : Le.av1 && "av1_url" in e && (r = e.av1_url),
    r
  );
}
function _a(e) {
  return e.fallback_url;
}
function pa(e, t = !1, n = null) {
  var r;
  const i = e.request.files,
    s = i.hls.default_cdn,
    o = e.request.drm,
    a = i.hls.cdns[s],
    u = (null == a || null == (r = a.alternatives) ? void 0 : r[n]) || a,
    c = t ? _a(u) : fa(u, e.video.spatial, o);
  return {
    id: `hls-${s}-${e.video.id}`,
    src: c,
    mime: Eo.hls,
    priority: 3,
    metadata: { cdn: s, origin: i.hls.cdns[s].origin, quality: "sd" },
  };
}
function ma(e, t = !1, n = null) {
  const r = e.request.files;
  return ua(r.dash)
    ? []
    : Object.keys(r.dash.cdns).map((i) => {
        var s;
        const o = r.dash.cdns[i],
          a = (null == o || null == (s = o.alternatives) ? void 0 : s[n]) || o,
          u = t ? _a(a) : fa(a, e.video.spatial);
        return {
          id: `dash-${i}-${e.video.id}`,
          src: u,
          mime: e.request.drm ? Eo.dashMpd : Eo.dash,
          priority: i === r.dash.default_cdn ? 1 : 2,
          metadata: { cdn: i, origin: r.dash.cdns[i].origin, quality: "sd" },
        };
      });
}
function va(e) {
  if (ua(e.progressive)) return [];
  let t = e.progressive;
  return "progressive_avc" in e && (t = e.progressive_avc), t.filter(ya(t));
}
function ga(e) {
  if ("number" == typeof e) return e;
  const t = e.split("-");
  return 5 === t.length ? t[0] : parseInt(t[0], 10);
}
function ya(e) {
  const t = e.filter(Ea).map(da);
  return (e) => -1 === t.indexOf(da(e)) || Ea(e);
}
function Ea(e) {
  let t = e.fps;
  return "metadata" in e && (t = e.metadata.fps), t > 30;
}
function Ta(e) {
  return Sa(e) >= 720;
}
function Sa(e) {
  return "string" != typeof e && (e = da(e)), parseInt(e, 10);
}
function ba(e) {
  const t = va(e.request.files).map((e) => e.quality);
  return Aa(e, e.embed.quality, t);
}
function Aa(e, t, n = []) {
  return e.embed.on_site ||
    Le.android ||
    Le.iOS ||
    Le.windowsPhone ||
    !t ||
    (n.length && -1 === n.indexOf(t))
    ? null
    : t;
}
function Ia(e = "desc") {
  return (t, n) => {
    const r = Sa(t),
      i = wa(t),
      s = Sa(n),
      o = wa(n);
    return "asc" === e ? r - s || i - o : s - r || o - i;
  };
}
function wa(e) {
  return "object" != typeof e
    ? 0
    : "fps" in e
    ? e.fps
    : "metadata" in e && "fps" in e.metadata
    ? e.metadata.fps
    : 0;
}
function Ra(e) {
  const t = e.video.live_event,
    n = e.request.files;
  if (!ua(n.hls)) {
    var r;
    const i = n.hls.default_cdn,
      s =
        n.hls.cdns[i].json_url ||
        (null == (r = t.playback) ? void 0 : r.hls_noredirect),
      o = e.request.flags.live_dash ? 2 : 1;
    return {
      id: `hls-${i}-${e.video.id}`,
      src: s,
      mime: Eo.hlsLive,
      priority: o,
      metadata: { cdn: i, origin: n.hls.cdns[i].origin, quality: "sd" },
    };
  }
  return null;
}
function ka(e, t) {
  let n = [];
  if (t.video) {
    const i = t.video.currentFile.mime;
    if (i === Eo.hlsLive)
      return t.manifest.video.map((e) =>
        o(o({}, e), {}, { quality: `${e.height}p` })
      );
    if ([Eo.dash, Eo.dashMpd].includes(i)) {
      var r;
      const i = !!t.video.drmHandler,
        s = i && "sd-fallback" === t.video.drmHandler.state;
      (n = (function (e, t = !1, n = !1) {
        if (!e) return [];
        let r = e.streams;
        "streams_avc" in e && (r = e.streams_avc);
        const i = t ? Le.spatialHEVC && Le.hevc : Le.hevc,
          s = t ? Le.spatialHEVC && Le.hdr : Le.hdr;
        return (
          Le.dolbyVision && "streams_hevc_dvh1" in e
            ? (r = e.streams_hevc_dvh1)
            : s && "streams_hevc_hdr" in e
            ? (r = e.streams_hevc_hdr)
            : i && "streams_hevc_sdr" in e
            ? (r = e.streams_hevc_sdr)
            : Le.av1 && "streams_av1" in e && (r = e.streams_av1),
          n && "streams_fallback" in e && (r = e.streams_fallback),
          r
        );
      })(e.request.files.dash, e.video.spatial, s)),
        !i &&
          (null == t || null == (r = t.currentScanner)
            ? void 0
            : r.manifestLoaded) &&
          (n = (function (e, t) {
            const n = t.map((e) => e.id);
            return e.filter((e) => {
              const t = ga(e.id);
              return n.includes(e.id) || n.includes(t);
            });
          })(n, t.currentScanner.videoStreams));
    } else n = t.video.files.filter((e) => "progressive" === To[e.mime]);
  }
  return n.filter(ya(n)).sort(Ia());
}
function Pa(e) {
  let t = da(e);
  const n = {
    "1440p": "2K",
    "2160p": "4K",
    "2700p": "5K",
    "3240p": "6K",
    "3780p": "7K",
    "4320p": "8K",
  };
  for (const r in n) t = t.replace(r, n[r]);
  return t;
}
function Da(e) {
  return Le.spatialPlayback && e.video.spatial ? 35 : 75;
}
function Oa(e) {
  return e.request.text_tracks.map((e) => ({
    id: e.id,
    src: e.url,
    kind: e.kind,
    label: e.label,
    language: e.lang,
  }));
}
let La = {
    captureException(e) {},
    captureMessage(e) {},
    captureBreadcrumb() {},
  },
  Ca = La;
var Ma = {
  set: function (e) {
    Ca = Object.assign({}, La, e);
  },
  captureException: function (e, t) {
    return Ca.captureException(e, t);
  },
  captureMessage: function (e, t) {
    return Ca.captureMessage(e, t);
  },
  captureBreadcrumb: function (e, t, n = "backbone", r = "info") {
    return Ca.captureBreadcrumb(e, t, n, r);
  },
};
function Na(e, t, n) {
  const r = !0 === Le.iOS,
    i = e.embed.playsinline && (Le.mobileAndroid || Le.iOS >= 10 || r);
  let s = !1,
    o = !1,
    a = !1,
    u = !0,
    c = "auto";
  function l(e) {
    var t, r, i, s, o, a;
    const { embed: u } = e;
    (n.disablePictureInPicture = !(
      null ===
        (t =
          null !== (r = u.pip) && void 0 !== r
            ? r
            : null == (i = u.settings)
            ? void 0
            : i.pip) ||
      void 0 === t ||
      t
    )),
      (n.autoPictureInPicture =
        null ===
          (s =
            null !== (o = u.auto_pip) && void 0 !== o
              ? o
              : null == (a = u.settings)
              ? void 0
              : a.auto_pip) ||
        void 0 === s ||
        s);
  }
  function d(e) {
    if (!u && n.buffered && n.buffered.length > 0) {
      e = e || n.currentTime;
      const r = (function (e, t) {
          var n = e.length - 1;
          if (e.length > 1)
            for (var r = 0, i = e.length; r < i; r++)
              if (e.start(r) <= t && e.end(r) >= t) {
                n = r;
                break;
              }
          return n;
        })(n.buffered, e),
        i = n.buffered.end(r),
        o = i / n.duration,
        u = n.duration;
      if (
        (t.fire(ii.PROGRESS, { loaded: i, duration: u, loadProgress: o }),
        a && s && i === n.duration)
      )
        return void (s && n.paused && n.play().catch(Ma.captureException));
    }
  }
  function h(t) {
    if ("auto" === t)
      return void (n.video.currentFile.restrictedStreamIndexes = []);
    const r = ka(e, n)
      .reverse()
      .map((e) => e.quality)
      .indexOf(t);
    -1 !== r &&
      (Ma.captureBreadcrumb(`Switched to ${t}`, {}, "video"),
      (n.video.currentFile.restrictedStreamIndexes = [r]));
  }
  function f(r) {
    const i = ka(e, n).map((e) => e.quality),
      s = Aa(e, e.embed.quality, i);
    s && t.fire(Wo, s), h(s || "auto");
  }
  return (
    t.on(Xo, function () {
      var t;
      (n.playsinline = i),
        (n.muted = e.embed.muted),
        (n.lowLatencyMode =
          null == (t = e.video.live_event) ? void 0 : t.low_latency);
    }),
    t.on(xo, function () {
      (u = !0), n.paused || n.pause(), (o = !1), (s = !1), (n.currentTime = 0);
    }),
    t.on(Uo, function () {
      n.paused || n.pause(), (n.video = null);
    }),
    n.on(ii.PLAY, function () {
      (u = !1), t.fire(ii.PLAY, n.currentTime);
    }),
    n.on(ii.PAUSE, function () {
      (s = !1), t.fire(ii.PAUSE, n.currentTime, n.ended);
    }),
    n.on(ii.PLAYING, function (e) {
      d();
    }),
    n.on(ii.TIME_UPDATE, function () {
      if (u) return;
      const {
          currentTime: e,
          liveEdgeTime: r,
          atLiveEdge: i,
          liveTailTime: s,
          atLiveTail: o,
          duration: a,
          playbackRate: c,
        } = n,
        l = e / a;
      t.fire(ii.TIME_UPDATE, {
        currentTime: e,
        liveEdgeTime: r,
        atLiveEdge: i,
        liveTailTime: s,
        atLiveTail: o,
        duration: a,
        playbackRate: c,
        timeProgress: l,
      });
    }),
    n.on(ii.ENDED, function (e) {
      n.loop
        ? n.play().catch(Ma.captureException)
        : ((s = !1), t.fire(ii.ENDED, e));
    }),
    n.on(ii.LOADED_METADATA, function (t) {
      const r = n.duration;
      if (isFinite(r) && r > 0) {
        if (r < e.video.duration - 1 || r > e.video.duration + 1) return;
        e.video.duration = r;
      }
      (e.video.video_width = n.videoWidth),
        (e.video.video_height = n.videoHeight);
    }),
    n.on(ii.DURATION_CHANGE, function (t) {
      const r = n.duration;
      isFinite(r) &&
        ((e.video.duration > 0 &&
          (r < e.video.duration - 1 || r > e.video.duration + 1)) ||
          (e.video.duration = r));
    }),
    n.on(ii.PROGRESS, d),
    n.on(ui.BUFFER_STARTED, () => {
      a = !0;
    }),
    n.on(ui.BUFFER_ENDED, () => {
      a = !1;
    }),
    t.on(No, function (t) {
      (n.isLive() && 0 === n.liveEdgeTime) ||
        ((t = (function (e, t, n) {
          return (
            void 0 === n && ((n = t), (t = void 0)),
            void 0 !== n && (n = (n = Ro(n)) == n ? n : 0),
            void 0 !== t && (t = (t = Ro(t)) == t ? t : 0),
            (function (e, t, n) {
              return (
                e == e &&
                  (void 0 !== n && (e = e <= n ? e : n),
                  void 0 !== t && (e = e >= t ? e : t)),
                e
              );
            })(Ro(e), t, n)
          );
        })(
          t,
          Lo(n.isLive() ? n.liveTailTime : 0),
          Lo(n.isLive() ? n.liveEdgeTime : n.duration || e.video.duration)
        )),
        (n.currentTime = t));
    }),
    n.on(ii.SEEKING, function () {
      const e = n.currentTime,
        r = n.duration,
        i = e / r;
      t.fire(ii.SEEKING, { currentTime: e, duration: r, timeProgress: i });
    }),
    n.on(ii.SEEKED, function () {
      d();
      const e = n.currentTime,
        r = n.duration,
        i = e / r;
      t.fire(ii.SEEKED, { currentTime: e, duration: r, timeProgress: i });
    }),
    n.on(ui.CURRENT_FILE_CHANGE, function (r) {
      Ma.captureBreadcrumb(
        "Current file changed",
        { id: r.id, mime: r.mime, src: r.src, metadata: r.metadata },
        "video"
      ),
        r.metadata.quality,
        [Eo.dash, Eo.dashMpd].includes(r.mime) && f(),
        [Eo.hlsLive].includes(r.mime)
          ? n.once(ui.STREAMS_LOADED, () => {
              f();
            })
          : (function (n) {
              const r = ba(e);
              r && t.fire(Wo, r);
            })();
    }),
    n.on(ii.RESIZE, function () {
      n.video.currentFile.mime === Eo.hls &&
        n.videoHeight &&
        t.fire(Qo, { height: n.videoHeight });
    }),
    l(e),
    t.on(Vo, (e, t) => {
      var n, r;
      (null == t || null == (n = t.embed.settings) ? void 0 : n.pip) !==
        (null == (r = e.embed.settings) ? void 0 : r.pip) && l(e);
    }),
    {
      play: function () {
        return (s = !0), o || (t.fire(qo), (o = !0)), n.play();
      },
      pause: function () {
        (s = !1), n.pause();
      },
      get quality() {
        return c;
      },
      set quality(r) {
        !(function (r) {
          const i = n.video.currentFile.mime;
          if ([Eo.dash, Eo.dashMpd, Eo.hlsLive].includes(i)) h(r);
          else {
            const t = ka(e, n).filter((e) => e.metadata.quality === r);
            t.length > 0 && ((u = !0), (n.video.currentFile = t[0]));
          }
          (c = r), t.fire(Go, r);
        })(r);
      },
    }
  );
}
function xa(e, t, n) {
  let r = null;
  Le.spatialPlayback &&
    (t.on(Xo, function () {
      r && (n.deactivateEffect(go), (r = null), t.fire($o, r));
      const i = e.video.spatial;
      i &&
        (e.request.drm ||
          (n.supportsEffect(go) &&
            ((r = n.activateEffect(go, {
              threeUrl: e.request.urls.three_js,
              fps: e.video.fps,
              fieldOfView: i.fov,
              directorTimeline: i.director_timeline,
              projection: i.projection,
              stereoMode: i.stereo_mode,
              initialView: i.initial_view,
              isMobile: Le.android,
              dimensions: e.embed.on_site
                ? { width: 1080, height: 540 }
                : { width: 640, height: 360 },
              keyboardDisabled: !e.embed.keyboard,
            })),
            t.fire($o, r))));
    }),
    n.on(li.SPATIAL_UNSUPPORTED, function () {
      r && (n.deactivateEffect(go), (r = null), t.fire($o, r));
    }));
}
function Ua(e, t, n) {
  let r = null;
  t.on(Xo, function () {
    r && (n.deactivateEffect(fo), (r = null)),
      e.video.canvas &&
        (e.request.drm || (n.supportsEffect(fo) && (r = n.activateEffect(fo))));
  });
}
var Fa = ei(function (e, t, n) {
  Jr(e, t, n);
});
function ja(e, t, n) {
  return n
    ? t
      ? t(e)
      : e
    : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
let Ba = (function () {
  function e(e, t, n) {
    sn(this),
      (this._liveEventHasID = new P()),
      (this._liveEvent = Cr(e)),
      (this._sessionUrl = e.session_url || e.sessionUrl),
      (this._sessionRefreshUrl = t),
      (this._appPollUrl = n),
      (this._forcedPoll = !1),
      (this._disabled = !1),
      (this._dvrEnabled = e.dvr),
      this._setupPolling();
  }
  var n = e.prototype;
  return (
    (n.disable = function () {
      this._disabled = !0;
    }),
    (n.forcePolling = function () {
      this.isForcePolling || ((this._forcedPoll = !0), this._setupPolling());
    }),
    (n.unforcePolling = function () {
      this._forcedPoll = !1;
    }),
    (n._setupPolling = function () {
      !1 !== this._liveEvent.polling &&
        (this._liveEvent.id && this._liveEventHasID.resolve(),
        this._shouldPollApp()
          ? this._pollApp()
          : this._shouldPoll() && this._pollLiveApi());
    }),
    (n._shouldPoll = function () {
      var e;
      return !(
        (ia(this._liveEvent) &&
          "started" !==
            (null == (e = this._liveEvent.archive) ? void 0 : e.status)) ||
        (!this.isForcePolling && ra(this._liveEvent))
      );
    }),
    (n._shouldPollApp = function () {
      return (
        !this._sessionUrl ||
        !(!na(this._liveEvent) || null !== this._liveEvent.id)
      );
    }),
    (n._refreshSessionUrl = function () {
      try {
        const e = this;
        return ja(ae(e._sessionRefreshUrl).json(), function (t) {
          return (e._sessionUrl = t.url), t.url;
        });
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._pollLiveApi = function () {
      try {
        const e = this;
        if (e._disabled) return;
        let n,
          r = {};
        return (
          Le.browser.ie &&
            (r = { Pragma: "no-cache", "Cache-Control": "no-cache" }),
          (function (e, t) {
            return e && e.then ? e.then(t) : t();
          })(
            (function (i, s) {
              try {
                var o = ja(
                  ae({
                    url: e._sessionUrl,
                    retry: 3,
                    retryStatus: (e) => [410].includes(e) || t.retryStatus(e),
                    hooks: { beforeRetry: [e._beforeRetry.bind(e)] },
                    headers: r,
                  }).json(),
                  function (e) {
                    n = e;
                  }
                );
              } catch (Rl) {
                return s();
              }
              return o && o.then ? o.then(void 0, s) : o;
            })(0, function () {
              throw new Error(`Hit max retries polling ${e._sessionUrl}`);
            }),
            function (t) {
              if (
                (e._dvrEnabled && (n.dvr = e._dvrEnabled),
                n.status !== e._liveEvent.status)
              ) {
                if (ia(n) && "provision_expire" === n.terminate_reason)
                  return (
                    (e._sessionUrl = null),
                    (e._liveEvent.id = null),
                    void setTimeout(e._setupPolling.bind(e), 5e3)
                  );
                const t = {
                  active: ea.EVENT_ACTIVE,
                  pending: ea.EVENT_PENDING,
                  started: ea.EVENT_STARTED,
                  ended: ea.EVENT_ENDED,
                }[n.status];
                try {
                  e.fire(t, n);
                } catch (r) {
                  throw new Error(`Error firing live event status change ${r}`);
                }
              }
              if (
                n.archive &&
                (!e._liveEvent.archive ||
                  n.archive.status !== e._liveEvent.archive.status)
              ) {
                const t = {
                  started: ea.ARCHIVE_STARTED,
                  done: ea.ARCHIVE_DONE,
                  error: ea.ARCHIVE_ERROR,
                }[n.archive.status];
                e.fire(t, n);
              }
              (e._liveEvent = Fa(e._liveEvent, n)),
                e._shouldPoll() && setTimeout(e._pollLiveApi.bind(e), 5e3);
            }
          )
        );
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._beforeRetry = function (e, t) {
      try {
        return ja(this._refreshSessionUrl(), function (t) {
          e.url = t;
        });
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    (n._pollApp = function () {
      try {
        const e = this;
        if (e._disabled) return;
        return ja(ae(e._appPollUrl).json(), function (t) {
          let n = !1;
          return (function (r, i) {
            var s = (function () {
              if (null !== t.ingest.session_id)
                return (
                  e._liveEventHasID.resolve(),
                  (e._liveEvent.id = t.ingest.session_id),
                  ja(e._refreshSessionUrl(), function () {
                    e._pollLiveApi(), (n = !0);
                  })
                );
            })();
            return s && s.then ? s.then(i) : i(s);
          })(0, function (t) {
            if (n) return t;
            setTimeout(e._pollApp.bind(e), 5e3);
          });
        });
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    }),
    r(e, [
      {
        key: "isForcePolling",
        get: function () {
          return this._forcedPoll;
        },
      },
      {
        key: "liveEventIDReady",
        get: function () {
          return this._liveEventHasID;
        },
      },
    ]),
    e
  );
})();
function Va() {}
function Ha(e, t, n) {
  const r = (function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      try {
        return Promise.resolve(e.apply(this, t));
      } catch (Rl) {
        return Promise.reject(Rl);
      }
    };
  })(function () {
    return (function (e, t) {
      return e && e.then ? e.then(Va) : Promise.resolve();
    })({ hive: () => {}, kollective: () => {} }[e.video.ecdn.ecdn_provider]());
  });
  let i,
    s,
    o,
    a = !1,
    u = 0,
    c = 0;
  function l() {
    s && (s.disable(), (s = null));
  }
  function d() {
    n.endLive();
  }
  return (
    t.on(Vo, function () {
      (i && !e.isNewVideo()) ||
        ((i = !0),
        l(),
        e.video.live_event &&
          !ta(e.video.live_event) &&
          ((function (n) {
            (s = new Ba(
              n,
              (function (e) {
                return oa(e, "/session/refresh");
              })(e),
              (function (e) {
                return `https://${e.vimeo_url}/live_event/status?clip_id=${e.video.id}`;
              })(e)
            )),
              s.on(ea.EVENT_ENDED, d),
              Object.keys(ea).forEach((e) => {
                const n = ea[e];
                s.on(n, (e) => {
                  t.fire(n, e);
                });
              });
          })(e.video.live_event),
          (function () {
            (u = 0), (c = 0);
            let e = !1;
            n.once(ii.PLAYING, () => (e = !0));
            let r = L();
            clearInterval(o),
              (o = setInterval(() => {
                n.paused || (u += C(r) / 1e3),
                  e && a && (c += C(r) / 1e3),
                  (function (e) {
                    if (n.lowLatencyMode && e > 12 && n.latency > 10 && a) {
                      const e =
                        "Rebuffer ratio > 12% and latency > 10s, fallback to normal HLS w/ target latency of 12s.";
                      t.fire(ea.LOW_LATENCY_FALLBACK, { msg: e }),
                        (n.lowLatencyMode = !1),
                        (n.presentationDelay = 12),
                        (n.bufferTarget = 12);
                    }
                  })((c / u) * 100),
                  (r = L());
              }, 500));
          })()),
        e.video.ecdn && r());
    }),
    t.on(Uo, function () {
      l();
    }),
    n.on(ea.STREAM_ONLINE, function () {
      s.isForcePolling && s.unforcePolling();
    }),
    n.on(ea.STREAM_OFFLINE, function () {
      s.isForcePolling || s.forcePolling();
    }),
    n.on(ui.BUFFER_STARTED, function () {
      a = !0;
    }),
    n.on(ui.BUFFER_ENDED, function () {
      a = !1;
    }),
    { get p2pReady() {} }
  );
}
function Xa(e, t, n) {
  if (n) return t ? t(e()) : e();
  try {
    var r = Promise.resolve(e());
    return t ? r.then(t) : r;
  } catch (Rl) {
    return Promise.reject(Rl);
  }
}
function qa(e, t) {
  var n = e();
  return n && n.then ? n.then(t) : t(n);
}
function Ga(e, t) {
  try {
    var n = e();
  } catch (Rl) {
    return t(Rl);
  }
  return n && n.then ? n.then(void 0, t) : n;
}
function Wa(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    try {
      return Promise.resolve(e.apply(this, t));
    } catch (Rl) {
      return Promise.reject(Rl);
    }
  };
}
function Ka(e, t, n) {
  var r;
  const i = Wa(function () {
      return Ga(
        function () {
          return Xa(m, function (t) {
            return t(n, e);
          });
        },
        function (e) {
          throw (
            (Ma.captureException(e),
            new Error("Failed to create Hive Module", e))
          );
        }
      );
    }),
    s = Wa(function () {
      return Ga(
        function () {
          return Xa(p, function (e) {
            return e(n);
          });
        },
        function (e) {
          return Ma.captureException(e), null;
        }
      );
    }),
    o = Wa(function () {
      return qa(
        function () {
          if (!u)
            return Xa(s, function (e) {
              u = e;
            });
        },
        function () {
          var t;
          return null == (t = u) ? void 0 : t.setUp(e.video.ecdn);
        }
      );
    }),
    a = Wa(function () {
      return Ga(
        function () {
          return qa(
            function () {
              if (!c)
                return Xa(i, function (e) {
                  c = e;
                });
            },
            function () {
              var e;
              return null == (e = c) ? void 0 : e.setUp(d);
            }
          );
        },
        function (e) {
          var t;
          return null == (t = c) || t.stop(), null;
        }
      );
    });
  let u,
    c,
    l = !1,
    d = !1,
    h = !1;
  const f = null == (r = e.video.ecdn) ? void 0 : r.ecdn_provider;
  let _;
  function p() {
    return import("./kollective.module.js").then(({ default: e }) => e);
  }
  function m() {
    return import("./hive.module.js").then(({ default: e }) => e);
  }
  function v() {
    try {
      u && (u.destroy(), (u = null)), c && (c.destroy(), (c = null));
    } catch (e) {}
  }
  return (
    t.on(Vo, function () {
      var t;
      e.isNewVideo() && (l = !1),
        !0 !== e.preload || !1 !== h || "kollective" !== f
          ? l ||
            ("pending" !==
            (null == (t = e.video.live_event) ? void 0 : t.status)
              ? ((l = !0), v(), f && (_ = { hive: a, kollective: o }[f]()))
              : (d = !0))
          : (h = !0);
    }),
    t.on(Uo, v),
    {
      get p2pReady() {
        return _;
      },
    }
  );
}
function Ya(e, t, n) {
  let r = null;
  function i() {
    n.deactivateEffect(yo), (r = null);
  }
  t.on(qo, function () {
    var t;
    r && i(),
      (null == (t = e.video.channel_layout)
        ? void 0
        : t.startsWith("ambisonic")) &&
        n.supportsEffect(yo) &&
        (r = n.activateEffect(yo, {
          ambisonicsUrl: e.request.urls.ambisonics_js,
        }));
  }),
    n.on(li.CAMERA_UPDATE, function ({ yaw: e, pitch: t, roll: n }) {
      r && r.updateRotation(e, t, n);
    }),
    n.on(li.AMBISONIC_UNSUPPORTED, function () {
      r && i();
    }),
    n.on(ui.STREAM_CHANGE, function () {
      r && r.toggleAmbisonics();
    });
}
function $a(e, t = []) {
  if (!e || "null" === e || 0 === t.length) return { track: null };
  const [n, r] = e.split("."),
    [i] = n.split(/[-_]/),
    s = n !== i,
    o = t
      .filter((e) => (s && e.language === n) || e.language === i)
      .sort((e, t) => {
        const s =
          2 * (e.language === i && e.kind === r) +
          2 * (e.language === n) +
          1 * (e.kind === r);
        return (
          2 * (t.language === i && t.kind === r) +
          2 * (t.language === n) +
          1 * (t.kind === r) -
          s
        );
      });
  return o.length > 0
    ? { track: o[0], exactMatch: o[0].language === n && o[0].kind === r }
    : { track: null };
}
function za(e) {
  const t = e.split(/\n/g);
  let n = [],
    r = [];
  return (
    t.forEach((e) => {
      let t = e.match(/<[a-zA-Z]+ ?.*?>/g) || [],
        i = e.match(/<\/[a-zA-Z]+ ?.*?>/g) || [];
      const s = r.map(({ startTag: e }) => e);
      (r = []),
        (t = s.concat(t)),
        t.forEach((e) => {
          let [t] = e.replace(/<|>/g, "").split(" ");
          const n = i.indexOf(`</${t}>`);
          -1 !== n
            ? i.splice(n, 1)
            : r.push({ startTag: e, closeTag: `</${t}>` });
        });
      const o = r
          .map(({ closeTag: e }) => e)
          .reverse()
          .join(""),
        a = `${s.join("")}${e}${o}`;
      n.push(a);
    }),
    n.join("<br>")
  );
}
function Qa(e) {
  return e ? e.split(/\n/g).join("↵") : e;
}
function Ja(e, t, n, r) {
  let i;
  function s() {
    return t.pictureInPictureActive ? "showing" : "hidden";
  }
  function o() {
    if (0 !== t.video.textTracks.length) {
      if (
        (t.video.textTracks.forEach((e) => {
          e.on("cuechange", a), e.on("modechange", u);
        }),
        t.video.textTracks.language)
      ) {
        const [n] = t.video.textTracks.language.split(/[-_]/),
          [r] = t.video.textTracks.language.split(/[-_]/);
        if (n !== r) {
          const n = `${t.video.textTracks.language}.subtitles`,
            { track: r } = $a(n, t.video.textTracks);
          if (r) return void e.fire(Fo, n);
        }
      }
      e.fire(jo);
    } else e.fire(jo);
  }
  function a(t) {
    const n = t.target,
      r = n.activeCues,
      i = [];
    let s;
    for (var o = 0, a = r.length; o < a; o++)
      "" !== r[o].text.replace(/^\s+|\s+$/gm, "") &&
        ((s = document.createElement("span")),
        s.appendChild(r[o].getCueAsHTML()),
        i.push({ html: za(s.innerHTML), text: Qa(r[o].text) }));
    e.fire(Ko, n, i);
  }
  function u(t) {
    const r = t.target,
      i = n.querySelector("video");
    Le.iOS &&
      (function (e) {
        const t = [
          document.fullscreenElement,
          document.webkitFullscreenElement,
          document.webkitCurrentFullScreenElement,
          document.mozFullScreenElement,
          document.msFullscreenElement,
        ].find((e) => void 0 !== e);
        return void 0 !== t ? !!t : e.webkitDisplayingFullscreen;
      })(i) &&
      "showing" === r.mode &&
      e.fire(Yo, r);
  }
  e.on(Xo, o),
    e.on(Fo, function (n) {
      if (i && i.id === n) return;
      let r = t.video.textTracks.getTrackById(n),
        o = !0;
      r || ({ track: r, exactMatch: o } = $a(n, t.video.textTracks)),
        r !== i &&
          setTimeout(() => {
            t.video &&
              t.video.textTracks.forEach((e) => {
                e.mode = e === r ? s() : "disabled";
              }),
              e.fire(Yo, r, !o),
              (i = r);
          }, 0);
    }),
    e.on(jo, function () {
      setTimeout(() => {
        t.video &&
          t.video.textTracks.forEach((e) => {
            e.mode = "disabled";
          }),
          e.fire(Ko),
          i && ((i = null), e.fire(Yo, null));
      }, 0);
    }),
    e.on(ui.TEXT_TRACKS_AVAILABLE, o),
    e.on(
      [ii.ENTER_PICTURE_IN_PICTURE, ii.LEAVE_PICTURE_IN_PICTURE],
      function () {
        !(function (e) {
          i && i.mode !== e && (i.mode = e);
        })(s());
      }
    );
}
const Za = ["main", "translation"];
function eu(e, t) {
  return Array.from(e).map((e) => o(o({}, e), {}, { enabled: e.id === t }));
}
function tu(e) {
  return Array.from(e).find((e) => e.enabled);
}
function nu(e, t = {}) {
  if (!(null == e ? void 0 : e.length)) return [];
  const n = t.language,
    r = t.kind;
  let i = null == t ? void 0 : t.id;
  if (i) return eu(e, i);
  if (r && n) {
    const t = e.find((e) => e.language === n && e.kind === r);
    if (((i = null == t ? void 0 : t.id), i)) return eu(e, i);
  }
  if (n) {
    const t = e.find((e) => e.language === n && Za.includes(e.kind));
    if (((i = null == t ? void 0 : t.id), i)) return eu(e, i);
  }
  const s = e.find((e) => "main" === e.kind);
  return (i = null == s ? void 0 : s.id), eu(e, i);
}
function ru(e, t, n) {
  let r, i, s, o, a, u;
  function c() {
    var t;
    const n = e.video.live_event,
      i = null == n ? void 0 : n.dvr;
    if (
      na(n) ||
      (function (e) {
        return "active" === (null == e ? void 0 : e.status);
      })(n) ||
      (ia(n) && !ta(n))
    )
      return void (r.video = null);
    if (ra(n) && r.video && !e.isNewVideo()) return;
    const s = (function (e) {
        return nu(e.request.audio_tracks, {
          language: e.request.cookie.audio_language,
          kind: e.request.cookie.audio_kind,
        });
      })(e),
      o = null == (t = tu(s)) ? void 0 : t.id,
      u = ra(n)
        ? (function (e) {
            const t = [],
              n = Ra(e);
            n && t.push(n);
            const r = (function (e) {
              var t;
              const n = e.video.live_event,
                r = e.request.files;
              if (ua(r.dash)) return null;
              const i = r.dash.default_cdn,
                s =
                  r.dash.cdns[i].url ||
                  (null == (t = n.playback) ? void 0 : t.dash_noredirect),
                o = e.request.flags.live_dash ? 2 : 1;
              return {
                id: `dash-${i}-${e.video.id}`,
                src: s,
                mime: Eo.dashMpd,
                priority: o,
                metadata: {
                  cdn: i,
                  origin: r.dash.cdns[i].origin,
                  quality: "sd",
                },
              };
            })(e);
            return r && t.push(r), t;
          })(e)
        : ha(e, o),
      c = Oa(e);
    !r.video || e.isNewVideo() || a || (i && !ta(n))
      ? d({
          files: u,
          textTracks: c,
          audioTracks: s,
          switchingVideo: i,
          startTime: i && r.currentTime,
        })
      : l(u, c);
  }
  function l(e, t) {
    e.forEach((e) => {
      const t = r.video.files.getFileById(e.id);
      t && t.src !== e.src && (t.src = e.src);
    }),
      t.forEach((e) => {
        const t = r.video.textTracks.getTrackById(e.id);
        t && t.src !== e.src && (t.src = e.src);
      });
  }
  function d({
    files: i,
    textTracks: a,
    audioTracks: c = [],
    switchingVideo: l = !1,
    startTime: d,
  }) {
    var h, f;
    const _ = e.video.live_event,
      p = n.getBoundingClientRect(),
      m = ra(_)
        ? Ra(e)
        : (function (e) {
            const t = e.request.files;
            if (!ua(t.hls)) {
              const e = t.hls.default_cdn,
                n = t.hls.cdns[e],
                r = n.captions || n.url;
              return r
                ? {
                    src: r,
                    mime: Eo.hls,
                    metadata: { cdn: e, origin: n.origin, quality: "sd" },
                  }
                : null;
            }
            return null;
          })(e);
    var v;
    u || (u = (null == (v = r.played) ? void 0 : v.length) > 0);
    const g =
      !r.paused || (null == (h = r._rebufferMonitor) ? void 0 : h._isBuffering);
    (r._switchingVideo = l),
      (r.video = {
        id: e.video.id,
        title: e.video.title,
        subtitle: `from ${e.video.owner.name}`,
        files: i,
        textTracks: a,
        audioTracks: c,
        chapters: Nt(e, "embed.chapters", []),
        duration: e.video.duration,
        externalDisplayFiles: { AirPlay: m },
        metadata: {
          playlistRefreshUrl: sa(e),
          thumbnail: U(e.video.thumbs.base, { w: "640" }),
          useHls: e.request.drm && Le.browser.safari,
          drm: e.request.drm,
          p2pReady:
            e.video.ecdn &&
            (null !== (f = s.p2pReady) && void 0 !== f ? f : o.p2pReady),
          percentShown: go.frustumSurfaceArea(
            e.video.spatial.fov,
            p.width,
            p.height
          ),
        },
      }),
      l ? r.checkRebuffer(u, g) : t.fire(Xo),
      "number" == typeof d && (r.currentTime = d);
  }
  return (
    (function () {
      var t, i, s, o;
      r = new ho(n, [As, Xs, Ks, qi], {
        externalDisplays: [_i],
        mediaSourceScanner: { droppedFrameSwitchPercent: Da(e) },
        tests: e.request.ab_tests,
        fileCodecs: e.request.file_codecs,
        bufferTarget: e.video.buffer_target,
        presentationDelay: e.video.presentation_delay,
        lowLatencyMode:
          null == (t = e.video.live_event) ? void 0 : t.low_latency,
        dvrEnabled: null == (i = e.video.live_event) ? void 0 : i.dvr,
        liveEventStartTime:
          null == (s = e.video.live_event) || null == (o = s.ingest)
            ? void 0
            : o.start_time,
        sessionMetadata: { clipId: e.video.id, sessionId: e.request.session },
      });
    })(),
    Object.values(ii)
      .filter(
        (e) => ![ii.TIME_UPDATE, ii.PROGRESS, ii.SUSPEND, ii.ERROR].includes(e)
      )
      .forEach((e) => {
        r.on(e, (t = "") => {
          Ma.captureBreadcrumb(e, t, "video event");
        });
      }),
    r.on(ui.STREAMS_LOADED, function (t) {
      t.video.forEach((t) => {
        const n = (function (e, t) {
          return t.find((t) => ga(t.id) === String(e) || ga(t.id) === ga(e));
        })(t.id, ka(e, r));
        n
          ? ((t.profile = n.profile), (t.quality = n.quality), (t.fps = n.fps))
          : ((t.profile = null),
            (t.quality = `${t.height}p`),
            (t.fps = t.framerate));
      });
    }),
    r.on(ui.STREAM_CHANGE, function ({ index: e, streams: n, metadata: r }) {
      const i = n[e];
      Ma.captureBreadcrumb("Stream changed", i, "video"),
        t.fire(ui.STREAM_CHANGE, i, e, n, r);
    }),
    r.on(ui.STREAM_TARGET_CHANGE, function ({ index: e, streams: n }) {
      const r = n[e];
      t.fire(ui.STREAM_TARGET_CHANGE, r, e, n);
    }),
    r.on(ui.DRM_KEY_SWITCH, function () {
      if (!e.request.drm.fallback_asset) return;
      const t = Oa(e);
      l(
        (function (e) {
          const t = e.request.files;
          let n = [];
          const r = e.request.drm && Le.browser.safari;
          return (
            ((t.hls && (Le.iPhone || Le.iPad)) || r) &&
              (n = n.concat(pa(e, !0))),
            t.dash && !r && (n = n.concat(ma(e, !0))),
            n
          );
        })(e),
        t
      );
    }),
    (function (e, t, n) {
      [
        oi.ACTIVATED,
        oi.AVAILABLE,
        oi.DEACTIVATED,
        oi.UNAVAILABLE,
        ci.STREAM_OFFLINE,
        ci.STREAM_ONLINE,
        ci.BUFFER_GAP_JUMP,
        ci.BUFFER_GAP_JUMP_PREVENT,
        ci.STALL_JUMP,
        ci.LATENCY_UPDATED,
        di.MEDIASESSION_PAUSE,
        di.MEDIASESSION_PLAY,
        di.MEDIASESSION_SEEK_BACKWARD,
        di.MEDIASESSION_SEEK_FORWARD,
        ui.AUDIO_TRACK_CHANGED,
        ui.AV_DURATION_MISMATCH,
        ui.BANDWIDTH,
        ui.BUFFER_ENDED,
        ui.BUFFER_OCCUPANCY,
        ui.BUFFER_STARTED,
        ui.CHAPTER_CUES_UPDATED,
        ui.CUE_POINT,
        ui.CURRENT_FILE_CHANGE,
        ui.DOWNLOAD_END,
        ui.DOWNLOAD_TIMEOUT,
        ui.DRM_AUTH_SUCCESS,
        ui.DRM_KEY_SWITCH,
        ui.DROPPED_FRAMES,
        ui.MANIFEST_LOADED,
        ui.MANIFEST_TIMEOUT,
        ui.QUOTA_EXCEEDED_ERROR,
        ui.SCANNER_CHANGE,
        ui.STREAM_CHANGE_START,
        ui.STREAM_BUFFER_END,
        ui.STREAM_BUFFER_START,
        ui.AVAILABLE_STREAMS_CHANGED,
        ui.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED,
        ui.TEXT_TRACKS_AVAILABLE,
        ui.DROPPED_FRAME_PERCENT_EXCEEDED,
        ui.LOAD_SEGMENT_FAILED,
        li.CAMERA_UPDATE,
        li.CAMERA_CHANGE,
        li.MOTION_END,
        li.MOTION_START,
        li.SPATIAL_UNSUPPORTED,
        li.WEBVR_ENTER,
        li.WEBVR_EXIT,
        li.WEBVR_HARDWARE_AVAILABLE,
        hi.BRAIN_ML_SWITCH_TO_SKYFIRE,
        hi.BRAIN_ML_MODEL_INPUTS,
        ii.DURATION_CHANGE,
        ii.ERROR,
        ii.LOAD_START,
        ii.LOADED_DATA,
        ii.LOADED_METADATA,
        ii.PLAYING,
        ii.RATE_CHANGE,
        ii.RESIZE,
        ii.STALLED,
        ii.VOLUME_CHANGE,
        ii.WAITING,
        ii.ENTER_PICTURE_IN_PICTURE,
        ii.LEAVE_PICTURE_IN_PICTURE,
        ii.WEBKIT_BEGIN_FULLSCREEN,
        ii.WEBKIT_END_FULLSCREEN,
      ].forEach((n) => {
        e(n, (...e) => {
          t.apply(void 0, [n].concat(e));
        });
      });
    })(r.on, t.fire),
    t.fire(Ho),
    new Ja(t, r, n, e),
    new xa(e, t, r),
    new Ua(e, t, r),
    new Ya(e, t, r),
    (s = new Ha(e, t, r)),
    (i = new Na(e, t, r)),
    (o = new Ka(e, t, r)),
    t.on(Vo, c),
    t.on(Bo, function (n) {
      var i, s;
      if (
        !(null == (i = e.embed) || null == (s = i.settings)
          ? void 0
          : s.audio_tracks)
      )
        return;
      if (r.supportsVideoElementAudioTracks)
        return void r.enableAudioTrack(null == n ? void 0 : n.id);
      const o = nu(e.request.audio_tracks, n),
        a = tu(o);
      d({
        files: ha(e, null == a ? void 0 : a.id),
        textTracks: r.video.textTracks,
        audioTracks: o,
        switchingVideo: !0,
        startTime: r.currentTime,
      }),
        t.fire(ui.AUDIO_TRACK_CHANGED);
    }),
    Le.browser.safari &&
      window.addEventListener("pageshow", (e) => {
        e.persisted && ((a = !0), c());
      }),
    S({ telecine: r }, i)
  );
}
function iu(e, t, n) {
  (this.constructorName = "BackboneError"),
    (this.message = e),
    (this.name = t),
    (this.source = n);
}
iu.prototype = new Error();
var su = {
  embed: {},
  request: {
    cookie: {},
    files: {},
    flags: {},
    urls: {},
    text_tracks: [],
    file_codecs: {},
  },
  video: { owner: {}, thumbs: {}, version: {} },
  user: {},
};
function ou(e, t) {
  let n;
  const r = sn();
  let i,
    s,
    o = null,
    a = new la(t, su);
  function u(e, t) {
    return r.fire(Vo, e, t), e;
  }
  const c = {
    play: () => i.play(),
    pause: () => i.pause(),
    get currentTime() {
      return s.currentTime > 0.1 ? Lo(s.currentTime) : 0;
    },
    set currentTime(e) {
      if (((e = parseFloat(e)), isNaN(e) || e < 0))
        throw new iu(
          "Seconds must be a positive number less than the duration of the video.",
          "RangeError",
          "setCurrentTime"
        );
      r.fire(No, e);
    },
    get liveEdgeTime() {
      return s.liveEdgeTime;
    },
    get atLiveEdge() {
      return s.atLiveEdge;
    },
    get liveTailTime() {
      return s.liveTailTime;
    },
    get atLiveTail() {
      return s.atLiveTail;
    },
    get duration() {
      return Lo(a.video.duration);
    },
    get enabledTextTrack() {
      return o;
    },
    loadVideo(e) {
      const t = Cr(a);
      return a.reset(e), (a = u(a, t)), this;
    },
    reactivate() {
      var e;
      return (null == (e = s) ? void 0 : e.reactivate) && s.reactivate(), this;
    },
    unload() {
      return r.fire(xo), this;
    },
    destroy() {
      return r.fire(Uo), this;
    },
    on(e, t) {
      return r.on(e, t), this;
    },
    once(e, t) {
      return r.once(e, t), this;
    },
    off(e, t) {
      return r.off(e, t), this;
    },
    get events() {
      return r;
    },
    hasTextTrack(e) {
      let t,
        n,
        r = this.textTracks;
      if (Oo(e)) n = r.getTrackById(e);
      else {
        let n = e.split(".")[0];
        t = r.some((e) => e.language.toLowerCase() === n.toLowerCase());
      }
      return !(!n && !t);
    },
    enableTextTrack(e, t = null) {
      let n,
        i,
        a = this.textTracks;
      if (Oo(e)) o = a.getTrackById(e);
      else {
        if ((([n, i = t] = e.split(".")), !this.hasTextTrack(e)))
          throw new iu(
            `There are no tracks for “${n.toUpperCase()}”.`,
            "InvalidTrackLanguageError",
            "enableTextTrack"
          );
        o = $a(i ? `${n}.${i}` : n, a).track;
      }
      if (!o || (i && o.kind !== i))
        throw new iu(
          `There are no ${i} tracks for “${n.toUpperCase()}”.`,
          "InvalidTrackError",
          "enableTextTrack"
        );
      s._setCaptionsState(!0), r.fire(Fo, o.id);
    },
    disableTextTrack() {
      (o = null), s._setCaptionsState(!1), r.fire(jo);
    },
    enableAudioTrack(e) {
      r.fire(Bo, e);
    },
    get qualities() {
      return (function (e) {
        var t;
        const n = e.representations.map((t) => {
            const n = da(t);
            return { id: n, label: Pa(t), active: e.quality === n };
          }),
          r = null == (t = e.video) ? void 0 : t.currentFile.mime;
        return (
          [Eo.dash, Eo.dashMpd, Eo.hlsLive, Eo.hls].includes(r) &&
            n.unshift({
              id: "auto",
              label: "Auto",
              active: !e.quality || "auto" === e.quality,
            }),
          n
        );
      })(this);
    },
    get quality() {
      return i.quality;
    },
    set quality(e) {
      i.quality = e;
    },
    get playbackRate() {
      return s ? s.playbackRate : 1;
    },
    set playbackRate(e) {
      (s.playbackRate = e), (s.defaultPlaybackRate = e);
    },
    get textTracks() {
      return s.video ? s.video.textTracks : [];
    },
    get representations() {
      return ka(a, s);
    },
    get volume() {
      return s ? s.volume : Lo(a.request.cookie.volume);
    },
    set volume(e) {
      if (((e = parseFloat(e)), isNaN(e) || e < 0 || e > 1))
        throw new iu(
          "Volume should be a number between 0 and 1.",
          "RangeError",
          "setVolume"
        );
      s.volume = e;
    },
    get videoId() {
      return a.video.id;
    },
    get videoWidth() {
      return s.videoWidth || a.video.width;
    },
    get videoHeight() {
      return s.videoHeight || a.video.height;
    },
    get readyState() {
      return s.videoElement.readyState;
    },
    get telecine() {
      return s;
    },
    get pictureInPictureEnabled() {
      const e = Le.spatialPlayback && a.video.spatial,
        t = (Le.iOS >= 17 || Le.browser.safari) && this.readyState < 2;
      return (
        t && s.once(ii.LOADED_DATA, () => r.fire(zo)),
        !t && !e && s.pictureInPictureEnabled
      );
    },
    get audioTracks() {
      var e, t;
      return (
        (null == (e = s) || null == (t = e.video) ? void 0 : t.audioTracks) ||
        []
      );
    },
  };
  return (
    (a = u(a)),
    (i = new ru(a, r, e)),
    (s = i.telecine),
    (n = Object.create(s)),
    S(n, c)
  );
}
function au(e) {
  return (
    "string" == typeof e || (!Fe(e) && ze(e) && "[object String]" == $e(e))
  );
}
function uu(e) {
  return Math.round((parseInt(e, 16) / 255) * 100) / 100;
}
function cu(...e) {
  if (1 === e.length && e[0] instanceof cu) {
    var t = e[0];
    return (
      (this.red = t.red),
      (this.green = t.green),
      (this.blue = t.blue),
      (this.alpha = t.alpha),
      (this.hue = t.hue),
      (this.saturation = t.saturation),
      (this.lightness = t.lightness),
      this
    );
  }
  if (1 === e.length) {
    if ("string" == typeof e[0] && e[0].indexOf("rgb") >= 0)
      return (
        (this.rgba = (function (e) {
          var t =
            /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)/.exec(
              e
            );
          if (!t) throw new Error("Invalid rgb value");
          return {
            red: parseInt(t[1], 10),
            green: parseInt(t[2], 10),
            blue: parseInt(t[3], 10),
            alpha: parseFloat(t[5]) || 1,
          };
        })(e[0])),
        this
      );
    if (
      !(function (e) {
        return (
          "string" == typeof (e = e.replace("#", "")) &&
          [3, 4, 6, 8].includes(e.length) &&
          !isNaN(parseInt(e, 16))
        );
      })(`${e[0]}`)
    )
      throw new Error("Invalid hex value");
    const { hex: t, alpha: n } = (function (e) {
      let t = 1;
      return (
        4 === (e = e.replace("#", "")).length &&
          ((t = uu(e.slice(3) + e.slice(3))), (e = e.slice(0, 3))),
        8 === e.length && ((t = uu(e.slice(6, 8))), (e = e.slice(0, 6))),
        { hex: e, alpha: t }
      );
    })(`${e[0]}`);
    return (this.hex = t), (this.alpha = n), this;
  }
  if (3 === e.length || 4 === e.length) {
    for (var n = 0; n < 3; n++)
      if (
        isNaN(parseInt(e[n], 10)) ||
        parseInt(e[n], 10) < 0 ||
        parseInt(e[n], 10) > 255
      )
        throw new Error("Invalid rgb value");
    if ((e[3] && parseFloat(e[3]) < 0) || parseFloat(e[3]) > 1)
      throw new Error("Invalid alpha value");
    return (
      (this.rgba = {
        red: e[0],
        green: e[1],
        blue: e[2],
        alpha: parseFloat(e[3]) || 1,
      }),
      this
    );
  }
  throw new Error("Invalid color");
}
function lu() {
  return void 0 !== window.performance &&
    "function" == typeof window.performance.now
    ? window.performance.now()
    : Date.now();
}
function du(e) {
  return lu() - e;
}
function hu() {
  let e = 0,
    t = null,
    n = 0,
    r = !1;
  function i() {
    return e / 1e3;
  }
  return {
    trackBufferStart: function (e, i) {
      (t = lu()), n++, (r = !0), e(i);
    },
    trackBufferEnd: function (n, i = {}) {
      if (!r) return;
      const s = du(t);
      (e += s), (i.buffer_duration = s / 1e3), (r = !1), n(i);
    },
    trackVideoExit: function (n) {
      r && !n && (e += du(t));
    },
    resetLastBufferTime: function () {
      t = null;
    },
    getBufferRatio: function (e) {
      const t = (i() / e) * 100;
      return isNaN(t) ? 0 : Math.round(100 * t) / 100;
    },
    getBufferCount: function () {
      return n;
    },
    getTotalBufferDuration: i,
    isVideoBuffering: function () {
      return r;
    },
  };
}
(cu.prototype = {
  get complement() {
    var e = this.clone();
    return (
      (e.rgb = {
        red: 255 - this.red,
        green: 255 - this.green,
        blue: 255 - this.blue,
      }),
      e
    );
  },
  get hex() {
    return cu.rgbToHex(this.red, this.green, this.blue);
  },
  get hexWithAlpha() {
    const e = ("0" + Math.round(255 * this.alpha).toString(16)).slice(-2);
    return cu.rgbToHex(this.red, this.green, this.blue) + e;
  },
  set hex(e) {
    return (this.rgba = cu.hexToRgb(e)), this;
  },
  get hsl() {
    return (
      "hsl(" +
      this.hue +
      "," +
      this.saturation +
      "%," +
      Math.round(this.lightness) +
      "%)"
    );
  },
  set hsl(e) {
    (this.hue = e.hue),
      (this.saturation = e.saturation),
      (this.lightness = e.lightness);
    var t = cu.hslToRgb(e.hue, e.saturation, e.lightness);
    return (
      (this.red = t.red),
      (this.green = t.green),
      (this.blue = t.blue),
      (this.alpha = t.alpha),
      this
    );
  },
  get luminance() {
    function e(e) {
      return e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
    }
    return (
      0.2126 * e(this.red / 255) +
      0.7152 * e(this.green / 255) +
      0.0722 * e(this.blue / 255)
    );
  },
  get rgb() {
    return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
  },
  set rgb(e) {
    return (this.rgba = e), this;
  },
  get rgba() {
    return (
      "rgba(" +
      this.red +
      "," +
      this.green +
      "," +
      this.blue +
      "," +
      this.alpha +
      ")"
    );
  },
  set rgba(e) {
    (this.red = e.red),
      (this.green = e.green),
      (this.blue = e.blue),
      (this.alpha = e.alpha || 1);
    var t = cu.rgbToHsl(e.red, e.green, e.blue);
    return (
      (this.hue = t.hue),
      (this.saturation = t.saturation),
      (this.lightness = t.lightness),
      this
    );
  },
  get yiq() {
    return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3;
  },
  clone: function () {
    return new cu(this);
  },
  lighten: function (e, t, n) {
    if (
      ((this.hsl = {
        hue: this.hue,
        saturation: this.saturation,
        lightness: this.lightness + e,
      }),
      t && n)
    )
      for (
        var r = n.contrast(this).ratio;
        r < t &&
        (this.lighten(5),
        (r = n.contrast(this).ratio),
        !(this.lightness >= 100));

      );
    return this;
  },
  darken: function (e, t, n) {
    if (
      ((this.hsl = {
        hue: this.hue,
        saturation: this.saturation,
        lightness: this.lightness - e,
      }),
      t && n)
    )
      for (
        var r = n.contrast(this).ratio;
        r < t &&
        (this.darken(5), (r = n.contrast(this).ratio), !(this.lightness <= 0));

      );
    return this;
  },
  overlayOn: function (e) {
    if (this.alpha >= 1) return this;
    var t = this.clone();
    return (
      (t.rgba = {
        red: t.red * this.alpha + e.red * e.alpha * (1 - this.alpha),
        green: t.green * this.alpha + e.green * e.alpha * (1 - this.alpha),
        blue: t.blue * this.alpha + e.blue * e.alpha * (1 - this.alpha),
        alpha: t.alpha + e.alpha * (1 - this.alpha),
      }),
      t
    );
  },
  contrast: function (e) {
    var t = this.alpha;
    if (t >= 1) {
      e.alpha < 1 && (e = e.overlayOn(this));
      var n = this.luminance + 0.05,
        r = e.luminance + 0.05,
        i = n / r;
      return (
        r > n && (i = 1 / i),
        { ratio: (i = Math.round(10 * i) / 10), error: 0, min: i, max: i }
      );
    }
    var s = this.overlayOn(cu.white).contrast(e).ratio,
      o = this.overlayOn(cu.black).contrast(e).ratio,
      a = Math.max(s, o),
      u = {
        red: Math.min(Math.max(0, (e.red - this.red * t) / (1 - t)), 255),
        green: Math.min(Math.max(0, (e.green - this.green * t) / (1 - t)), 255),
        blue: Math.min(Math.max(0, (e.blue - this.blue * t) / (1 - t)), 255),
      },
      c = this.clone();
    c.rgb = u;
    var l = this.overlayOn(c).contrast(e).ratio;
    return {
      ratio: Math.round(((l + a) / 2) * 10) / 10,
      error: Math.round(((a - l) / 2) * 10) / 10,
      min: l,
      max: a,
      closest: c,
      farthest: o === a ? cu.white : cu.black,
    };
  },
  wcagAACompliant: function (e) {
    return this.contrast(e).ratio >= 4.5;
  },
  wcagAAACompliant: function (e) {
    return this.contrast(e).ratio >= 7;
  },
  yiqContrastColor: function () {
    return this.yiq >= 120 ? new cu(0, 0, 0) : new cu(255, 255, 255);
  },
}),
  (cu.hexToRgb = function (e) {
    var t;
    return (
      3 === (e = String(e)).length || 4 === e.length
        ? (t = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(e)) &&
          ((t[1] += t[1]), (t[2] += t[2]), (t[3] += t[3]))
        : (t = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(e)),
      t
        ? {
            red: parseInt(t[1], 16),
            green: parseInt(t[2], 16),
            blue: parseInt(t[3], 16),
            alpha: 1,
          }
        : null
    );
  }),
  (cu.rgbToHex = function (e, t, n) {
    return (
      "#" +
      ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(n))
        .toString(16)
        .slice(1)
    );
  }),
  (cu.rgbToHsl = function (e, t, n) {
    (e /= 255), (t /= 255), (n /= 255);
    var r,
      i = Math.max(e, t, n),
      s = Math.min(e, t, n),
      o = (i + s) / 2,
      a = o;
    if (i === s) return { hue: 0, saturation: 0, lightness: 100 * a };
    var u = i - s;
    return (
      (r = a > 0.5 ? u / (2 - i - s) : u / (i + s)),
      i === e
        ? (o = (t - n) / u + (t < n ? 6 : 0))
        : i === t
        ? (o = (n - e) / u + 2)
        : i === n && (o = (e - t) / u + 4),
      (o /= 6),
      {
        hue: Math.round(360 * o),
        saturation: Math.round(100 * r),
        lightness: Math.round(100 * a),
      }
    );
  }),
  (cu.hslToRgb = function (e, t, n) {
    function r(e, t, n) {
      return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        6 * n < 1
          ? e + 6 * (t - e) * n
          : 2 * n < 1
          ? t
          : 3 * n < 2
          ? e + 6 * (2 / 3 - n) * (t - e)
          : e
      );
    }
    if (((e /= 360), (n /= 100), 0 == (t /= 100)))
      return {
        red: Math.floor(255 * n),
        green: Math.floor(255 * n),
        blue: Math.floor(255 * n),
      };
    var i = n < 0.5 ? n * (1 + t) : n + t - t * n,
      s = 2 * n - i;
    return {
      red: Math.floor(255 * r(s, i, e + 1 / 3)),
      green: Math.floor(255 * r(s, i, e)),
      blue: Math.floor(255 * r(s, i, e - 1 / 3)),
    };
  }),
  (cu.hslToHex = function (e, t, n) {
    var r = cu.hslToRgb(e, t, n);
    return cu.rgbToHex(r.red, r.green, r.blue);
  }),
  (cu.white = new cu("fff")),
  (cu.black = new cu("000"));
const fu = {
  VIDEO_BUFFER_END: "video-buffer-end",
  VIDEO_BUFFER_START: "video-buffer-start",
  VIDEO_ENDED: "video-ended",
  VIDEO_EXIT: "video-exit",
  VIDEO_LOAD_FAILURE: "video-load-failure",
  VIDEO_MINUTE_WATCHED: "video-minute-watched",
  VIDEO_PAUSED: "video-paused",
  VIDEO_PLAYED: "video-played",
  VIDEO_PLAYBACK_ERROR: "video-playback-error",
  VIDEO_READY: "video-ready",
  VIDEO_START_ATTEMPT: "video-start-attempt",
  VIDEO_START_FAILURE: "video-start-failure",
  VIDEO_START_TIME: "video-start-time",
  VIDEO_SEEK: "video-seek",
  VIDEO_SEEKED: "video-seeked",
  CHUNK_DOWNLOADED: "chunk_downloaded",
};
function _u(e) {
  function t(e, t, n = !0, r = "POST") {
    return new Promise((i, s) => {
      "POST" === r && navigator.sendBeacon
        ? i({ status: navigator.sendBeacon(e, t) })
        : ae({
            url: e,
            body: t,
            method: r,
            async: n,
            headers: { "Content-Type": "text/plain; charset=UTF-8" },
          })
            .then((e) => {
              i({ response: e, status: e.status });
            })
            .catch(s);
    });
  }
  return {
    log: function (n, r = !0, i = !0) {
      i && (n.event_time = n.event_time || lu());
      const s = [n];
      return t(e, JSON.stringify(s), r);
    },
    logRequestPromiseWithUrl: t,
  };
}
function pu(e) {
  let t = 0,
    n = 0,
    r = 0,
    i = 0,
    s = !1,
    o = -1,
    a = null,
    u = null,
    c = null,
    l = { satisfied: 0, tolerable: 0, frustrated: 0 },
    d = null;
  function h() {
    const t = e.getBoundingClientRect(),
      n = e.videoWidth,
      r = e.videoHeight;
    if (0 === n && 0 === r) return;
    let i = "satisfied";
    if (
      (t.width > n &&
        t.height > r &&
        (n / t.width < 0.4
          ? (i = "satisfied")
          : n / t.width < 1
          ? (i = "tolerable")
          : n / t.width > 1 && (i = "frustrated")),
      u)
    ) {
      const e = du(u);
      l[c] += e;
    }
    (c = i), (u = lu());
  }
  function f() {
    return s ? 0 : 1;
  }
  function _() {
    return -1 === o ? null : o > 8e3 || -1 === o ? 0 : o > 2e3 ? 0.5 : 1;
  }
  function p() {
    return d
      ? ((i = r / du(d)),
        t >= 4 || i >= 0.12 ? 0 : t < 4 && 0 !== t ? (i < 0.12 ? 0.5 : 0) : 1)
      : null;
  }
  function m() {
    if (-1 === o) return null;
    switch ((h(), Object.keys(l).reduce((e, t) => (l[e] > l[t] ? e : t)))) {
      case "satisfied":
        return 1;
      case "tolerable":
        return 0.5;
      case "frustrated":
        return 0;
    }
    return null;
  }
  return (
    e.addEventListener("playing", () => {
      -1 === o && (a = lu());
    }),
    e.addEventListener("progress", () => {
      -1 === o && ((d = lu()), (o = du(a))), h();
    }),
    {
      startupTimeScore: _,
      rebufferScore: p,
      failureScore: f,
      videoQualityScore: m,
      overallScore: function () {
        return Math.min(f(), _(), p(), m());
      },
      trackBufferStart: function () {
        -1 !== o && (t++, (n = lu()));
      },
      trackBufferEnd: function () {
        -1 !== o && (r += du(n));
      },
      onError: function (e) {
        e.final && (s = !0);
      },
    }
  );
}
function mu(e, t = 3) {
  if (((e = parseFloat(e)), isNaN(e))) return 0;
  var n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
function vu(e, t) {
  let n,
    r,
    i,
    s,
    o,
    a,
    u,
    c,
    l,
    d,
    h,
    f,
    _,
    p,
    m = 0;
  function v() {
    (n = 0),
      (r = 0),
      (i = 0),
      (s = 0),
      (o = 0),
      (a = null),
      (u = 0),
      (c = !1),
      (l = !1),
      (d = null),
      (h = !1),
      (f = new pu(e)),
      (_ = new hu()),
      (p = {
        bufferTracker: _,
        videoBufferCheck: () => {
          setInterval(() => {
            let t = e.currentTime;
            l &&
              !h &&
              !e.paused &&
              !p.bufferTracker.isVideoBuffering() &&
              t < o + 0.125 &&
              p.bufferTracker.trackBufferStart(y),
              l &&
                !e.paused &&
                p.bufferTracker.isVideoBuffering() &&
                t > o + 0.125 &&
                (p.bufferTracker.trackBufferEnd(E),
                p.bufferTracker.resetLastBufferTime()),
              (o = t);
          }, 250);
        },
        addEventData: (e) => null,
        playbackSessionTimer: () => {
          let t = lu();
          setInterval(() => {
            ((!e.paused && c) || h || p.bufferTracker.isVideoBuffering()) &&
              (u += du(t) / 1e3),
              (t = lu());
          }, 500);
        },
        customMinuteTracker: { shouldCount: () => !1, onCount: () => {} },
      });
  }
  function g(e, n = {}) {
    0 === m && ((n = Object.assign(n, p.addEventData(e))), t(e, n));
  }
  function y(e = {}) {
    f.trackBufferStart(), g(fu.VIDEO_BUFFER_START, e);
  }
  function E(e = {}) {
    f.trackBufferEnd(), g(fu.VIDEO_BUFFER_END, e);
  }
  return (
    v(),
    g(fu.VIDEO_READY),
    (function () {
      let t = Math.floor(60 * Math.random());
      setInterval(() => {
        var o, a, u;
        function l(e, n) {
          return 0 === e ? n === t : n >= 60;
        }
        !e.paused &&
          c &&
          (n++,
          (null == (o = p.customMinuteTracker) || null == o.shouldCount
            ? void 0
            : o.shouldCount()) && r++,
          l(i, n) && ((n = 0), i++, g(fu.VIDEO_MINUTE_WATCHED)),
          l(s, r) &&
            (null == (a = p.customMinuteTracker) || null == a.shouldCount
              ? void 0
              : a.shouldCount()) &&
            ((r = 0),
            s++,
            null == (u = p.customMinuteTracker) ||
              null == u.onCount ||
              u.onCount(s)));
      }, 1e3);
    })(),
    window.addEventListener(
      "pagehide",
      (t) => {
        p.bufferTracker.trackVideoExit(e.paused);
        const n = {
          startup: f.startupTimeScore(),
          rebuffer: f.rebufferScore(),
          failure: f.failureScore(),
          quality: f.videoQualityScore(),
          overall: f.overallScore(),
        };
        d && g(fu.VIDEO_EXIT, { vxs: n });
      },
      !1
    ),
    e.addEventListener("playing", () => {
      (c = !0), h || (l && g(fu.VIDEO_PLAYED));
    }),
    e.addEventListener("timeupdate", () => {
      if (l) return;
      let e = { startup_duration: d ? mu(du(d) / 1e3, 2) : null };
      g(fu.VIDEO_START_TIME, e), (l = !0);
    }),
    e.addEventListener("pause", () => {
      (c = !1), g(fu.VIDEO_PAUSED);
    }),
    e.addEventListener("seeking", () => {
      h || ((a = lu()), (h = !0), (c = !1), g(fu.VIDEO_SEEK));
    }),
    e.addEventListener("seeked", () => {
      (h = !1),
        e.paused || (c = !0),
        g(fu.VIDEO_SEEKED, { seek_duration: du(a) / 1e3 }),
        (a = null);
    }),
    e.addEventListener("ended", () => {
      g(fu.VIDEO_ENDED);
    }),
    e.addEventListener("waiting", () => {
      c = !1;
    }),
    e.addEventListener("canplay", () => {
      h ||
        (p.bufferTracker.isVideoBuffering() &&
          !c &&
          (p.bufferTracker.trackBufferEnd(E),
          p.bufferTracker.resetLastBufferTime()));
    }),
    {
      globalProperties: function () {
        return {
          autoplay: e.autoplay,
          buffer_count: p.bufferTracker.getBufferCount(),
          total_buffer_duration: p.bufferTracker.getTotalBufferDuration(),
          buffer_ratio: p.bufferTracker.getBufferRatio(u),
          client_time: lu(),
          is_buffering: p.bufferTracker.isVideoBuffering(),
          looping: e.loop,
          minutes_watched: i,
          network_state: e.networkState,
          playback_rate: e.playbackRate,
          player_width: e.getBoundingClientRect().width,
          player_height: e.getBoundingClientRect().height,
          session_playback_duration: mu(u, 2),
          video_time: e.currentTime,
          video_height: e.videoHeight,
          video_width: e.videoWidth,
          volume: mu(e.volume, 2),
        };
      },
      logStartRequest: function () {
        (d = lu()), g(fu.VIDEO_START_ATTEMPT);
      },
      customizeHooks: function (e) {
        p = Object.assign(p, e);
      },
      initHooks: function () {
        p.videoBufferCheck(), p.playbackSessionTimer();
      },
      logBufferStart: y,
      logBufferEnd: E,
      setDisplayContext: function (e) {
        m = e;
      },
      handleExternalError: function (e, t) {
        (c = !1),
          f.onError(t),
          g(
            l
              ? fu.VIDEO_PLAYBACK_ERROR
              : l
              ? fu.VIDEO_START_FAILURE
              : fu.VIDEO_LOAD_FAILURE,
            e
          );
      },
      reset: v,
    }
  );
}
var gu = function () {
    return Ve.Date.now();
  },
  yu = Math.max,
  Eu = Math.min;
function Tu(e, t, n) {
  var r,
    i,
    s,
    o,
    a,
    u,
    c = 0,
    l = !1,
    d = !1,
    h = !0;
  if ("function" != typeof e) throw new TypeError("Expected a function");
  function f(t) {
    var n = r,
      s = i;
    return (r = i = void 0), (c = t), (o = e.apply(s, n));
  }
  function _(e) {
    return (c = e), (a = setTimeout(m, t)), l ? f(e) : o;
  }
  function p(e) {
    var n = e - u;
    return void 0 === u || n >= t || n < 0 || (d && e - c >= s);
  }
  function m() {
    var e = gu();
    if (p(e)) return v(e);
    a = setTimeout(
      m,
      (function (e) {
        var n = t - (e - u);
        return d ? Eu(n, s - (e - c)) : n;
      })(e)
    );
  }
  function v(e) {
    return (a = void 0), h && r ? f(e) : ((r = i = void 0), o);
  }
  function g() {
    var e = gu(),
      n = p(e);
    if (((r = arguments), (i = this), (u = e), n)) {
      if (void 0 === a) return _(u);
      if (d) return clearTimeout(a), (a = setTimeout(m, t)), f(u);
    }
    return void 0 === a && (a = setTimeout(m, t)), o;
  }
  return (
    (t = Ro(t) || 0),
    et(n) &&
      ((l = !!n.leading),
      (s = (d = "maxWait" in n) ? yu(Ro(n.maxWait) || 0, t) : s),
      (h = "trailing" in n ? !!n.trailing : h)),
    (g.cancel = function () {
      void 0 !== a && clearTimeout(a), (c = 0), (r = u = i = a = void 0);
    }),
    (g.flush = function () {
      return void 0 === a ? o : v(gu());
    }),
    g
  );
}
const Su = { SETUP_DONE: "SETUP_DONE", NOT_SETUP: "NOT_SETUP" };
let bu = (function () {
  function e() {
    (this.version = "1.2.36"),
      (this.remotePlayer = null),
      (this.remotePlayerController = null),
      (this.CastContextEventType = null),
      (this.RemotePlayerEventType = null),
      (this.CastState = Su),
      (this.SessionState = null),
      (this.PlayerState = null),
      (this.currentLoadRequestId = null),
      (this.currentLoadRequestPromise = null);
  }
  var t = e.prototype;
  return (
    (t.init = function ({
      receiverApplicationId: e = "",
      resumeSavedSession: t = !0,
      language: n = null,
      autoJoinPolicy: r = "TAB_AND_ORIGIN_SCOPED",
    } = {}) {
      if (!this.isGCastApiAvailable)
        throw new Error("CAF is not available. Call setup() first.");
      if ("string" != typeof e || "" === e.trim())
        throw new Error("Parameter 'receiverApplicationId' must be valid.");
      switch (r) {
        case chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED:
        case chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED:
        case chrome.cast.AutoJoinPolicy.PAGE_SCOPED:
          break;
        default:
          r = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
      }
      return (
        (this.CastContextEventType = cast.framework.CastContextEventType),
        (this.RemotePlayerEventType = cast.framework.RemotePlayerEventType),
        (this.CastState = Object.assign(
          this.CastState,
          cast.framework.CastState
        )),
        (this.SessionState = cast.framework.SessionState),
        (this.PlayerState = chrome.cast.media.PlayerState),
        cast.framework.CastContext.getInstance().setOptions({
          receiverApplicationId: e.trim(),
          resumeSavedSession: t,
          language: n,
          autoJoinPolicy: r,
        }),
        this.isInitialized
          ? this.remotePlayerController
          : this.initRemotePlayer()
      );
    }),
    (t.initRemotePlayer = function () {
      if (!this.isGCastApiAvailable)
        throw new ReferenceError("CAF is not available. Call setup() first.");
      return (
        (this.remotePlayer = new cast.framework.RemotePlayer()),
        (this.remotePlayerController =
          new cast.framework.RemotePlayerController(this.remotePlayer)),
        this.remotePlayerController
      );
    }),
    (t.setup = function ({ loadLibrary: e = !0 } = {}) {
      return new Promise((t, n) => {
        if (this.isGCastApiAvailable)
          return (this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy), void t(!0);
        window.__onGCastApiAvailable = (e, r) => {
          if (r) {
            const e = new Error(r);
            n(e);
          } else if (chrome.cast)
            (this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy), t(e);
          else {
            const e = new ReferenceError(
              "Cast is not available on this browser."
            );
            n(e);
          }
        };
        try {
          if (!1 === e)
            throw new ReferenceError(
              "Cast is not available. Make sure the library has been loaded."
            );
          this.loadLibrary() || t(!1);
        } catch (r) {
          const e = new Error(r);
          n(e);
        }
      });
    }),
    (t.loadLibrary = function () {
      if (this.isGCastApiAvailable) return !0;
      if (
        null !== window.chrome &&
        void 0 !== window.chrome &&
        "Google Inc." === window.navigator.vendor
      ) {
        let e = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js";
        if (
          !(document.querySelectorAll('script[src^="' + e + '"]').length > 0)
        ) {
          e += "?loadCastFramework=1";
          const t = document.createElement("script");
          return (
            (t.src = e),
            (t.async = !0),
            (t.defer = !0),
            document.head.appendChild(t),
            !0
          );
        }
      }
      return !1;
    }),
    (t.loadMedia = function ({
      contentId: e,
      contentType: t,
      currentTime: n = 0,
      duration: r = 0,
      requestCustomData: i = null,
      mediaCustomData: s = null,
      autoRequest: o = !1,
      tracks: a = [],
      ottCastOptions: u,
    }) {
      return e
        ? this.isSessionEstablished
          ? this.loadMediaOnSession(this.currentSession, {
              contentId: e,
              contentType: t,
              currentTime: n,
              duration: r,
              requestCustomData: i,
              mediaCustomData: s,
              tracks: a,
              ottCastOptions: u,
            })
          : !0 !== o
          ? Promise.reject(
              new TypeError(
                "Option 'autoRequest' must be true when session is not connected."
              )
            )
          : this.requestSession().then((o) =>
              this.loadMediaOnSession(o, {
                contentId: e,
                contentType: t,
                currentTime: n,
                duration: r,
                requestCustomData: i,
                mediaCustomData: s,
                tracks: a,
                ottCastOptions: u,
              })
            )
        : Promise.reject(new TypeError("Option 'contentId' must be valid."));
    }),
    (t.loadMediaOnSession = function (
      e,
      {
        contentId: t,
        contentType: n,
        currentTime: r = 0,
        duration: i,
        requestCustomData: s = null,
        mediaCustomData: o = null,
        tracks: a = [],
        ottCastOptions: u,
      }
    ) {
      if (e && e instanceof cast.framework.CastSession) {
        const c = e.getSessionState();
        if (
          c !== this.SessionState.SESSION_STARTING &&
          c !== this.SessionState.SESSION_STARTED &&
          c !== this.SessionState.SESSION_RESUMED
        )
          return Promise.reject(
            new ReferenceError("Session must be established.")
          );
        const l = this.createLoadRequest(t, n, r, i, s, o, a, u);
        return (
          (null !== this.currentLoadRequestId &&
            this.currentLoadRequestId === l.requestId) ||
            ((this.currentLoadRequestId = l.requestId),
            (this.currentLoadingMediaPromise = e.loadMedia(l).finally(() => {
              (this.currentLoadRequestId = null),
                (this.currentLoadingMediaPromise = null);
            }))),
          this.currentLoadingMediaPromise
        );
      }
      return Promise.reject(
        new ReferenceError("Session must be cast.framework.CastSession.")
      );
    }),
    (t.requestSession = function () {
      return this.isSessionEstablished
        ? Promise.resolve(this.currentSession)
        : this.castContext
        ? this.castContext.requestSession().then(() => this.currentSession)
        : Promise.reject(
            new Error("CastContext is not available. Call setup() first.")
          );
    }),
    (t.sendMessage = function ({
      namespace: e,
      data: t = {},
      autoRequest: n = !1,
    }) {
      return this.isSessionEstablished
        ? this.sendMessageOnSession(this.currentSession, {
            namespace: e,
            data: t,
          })
        : !0 !== n
        ? Promise.reject(
            new TypeError(
              "Option 'autoRequest' must be true when session is not connected."
            )
          )
        : this.requestSession().then((n) =>
            this.sendMessageOnSession(n, { namespace: e, data: t })
          );
    }),
    (t.sendMessageOnSession = function (e, { namespace: t, data: n = {} }) {
      if (e || !(e instanceof cast.framework.CastSession)) {
        const r = e.getSessionState();
        return r !== this.SessionState.SESSION_STARTING &&
          r !== this.SessionState.SESSION_STARTED &&
          r !== this.SessionState.SESSION_RESUMED
          ? Promise.reject(new ReferenceError("Session must be established."))
          : e.sendMessage(t, n);
      }
      return Promise.reject(
        new ReferenceError("Session must be cast.framework.CastSession.")
      );
    }),
    (t.createCastButton = function (e) {
      const t = document.createElement("button", "google-cast-button");
      return (
        e &&
          e.style &&
          (null === e.style["--disconnected-color"] &&
            (e.style["--disconnected-color"] = "#00ADEF"),
          null === e.style["--connected-color"] &&
            (e.style["--connected-color"] = "#E5E500")),
        e &&
          Object.keys(e).forEach((n) => {
            if ("string" == typeof e[n]) t.setAttribute(n, e[n]);
            else if ("style" === n && "object" == typeof e[n]) {
              let r = "";
              Object.keys(e[n]).forEach((t) => {
                r += t + ":" + e[n][t] + ";";
              }),
                t.setAttribute(n, r);
            }
          }),
        t
      );
    }),
    (t.createLoadRequest = function (e, t, n, r, i, s, o, a) {
      const u = a
        ? new chrome.cast.media.MediaInfo(a.contentId)
        : new chrome.cast.media.MediaInfo(e.toString(), t);
      (u.customData = s), (u.duration = r);
      const c = {
        subtitles: chrome.cast.media.TextTrackType.SUBTITLES,
        captions: chrome.cast.media.TextTrackType.CAPTIONS,
      };
      u.tracks = o.map((e) => {
        const t = new chrome.cast.media.Track(
          e.id,
          chrome.cast.media.TrackType.TEXT
        );
        return (
          (t.trackContentId = e.url),
          (t.trackContentType = "text/vtt"),
          (t.subtype = c[e.kind]),
          (t.name = e.label),
          (t.language = e.lang),
          t
        );
      });
      const l = new chrome.cast.media.LoadRequest(u);
      return (
        (l.customData = a ? a.customData : i),
        (l.currentTime = n || 0),
        a &&
          ((l.credentials = a.credentials),
          (l.credentialsType = a.credentialsType)),
        l
      );
    }),
    r(e, [
      {
        key: "isGCastApiAvailable",
        get: function () {
          return !!(
            "undefined" != typeof cast &&
            cast &&
            cast.framework &&
            cast.framework.VERSION
          );
        },
      },
      {
        key: "castState",
        get: function () {
          return this.castContext
            ? this.castContext.getCastState()
            : this.isGCastApiAvailable
            ? this.CastState.SETUP_DONE
            : this.CastState.NOT_SETUP;
        },
      },
      {
        key: "versionGCastApi",
        get: function () {
          return this.isGCastApiAvailable ? cast.framework.VERSION : null;
        },
      },
      {
        key: "castContext",
        get: function () {
          return this.isGCastApiAvailable
            ? cast.framework.CastContext.getInstance()
            : null;
        },
      },
      {
        key: "currentSession",
        get: function () {
          return this.castContext ? this.castContext.getCurrentSession() : null;
        },
      },
      {
        key: "currentSessionObj",
        get: function () {
          const e = this.currentSession;
          return e ? e.getSessionObj() : null;
        },
      },
      {
        key: "isInitialized",
        get: function () {
          return !(!this.isGCastApiAvailable || !this.remotePlayerController);
        },
      },
      {
        key: "isSessionEstablished",
        get: function () {
          const e = this.currentSessionObj;
          return !!e && e.status === chrome.cast.SessionStatus.CONNECTED;
        },
      },
      {
        key: "isCastConnected",
        get: function () {
          return this.castState === this.CastState.CONNECTED;
        },
      },
    ]),
    e
  );
})();
var Au,
  Iu = 0,
  wu = 0,
  Ru = {},
  ku = {};
function Pu(e, t, n) {
  return "_root" == t
    ? n
    : e !== n
    ? (function (e) {
        return (
          Au ||
          (Au = e.matches
            ? e.matches
            : e.webkitMatchesSelector
            ? e.webkitMatchesSelector
            : e.mozMatchesSelector
            ? e.mozMatchesSelector
            : e.msMatchesSelector
            ? e.msMatchesSelector
            : e.oMatchesSelector
            ? e.oMatchesSelector
            : Cu.matchesSelector)
        );
      })(e).call(e, t)
      ? e
      : e.parentNode
      ? (Iu++, Pu(e.parentNode, t, n))
      : void 0
    : void 0;
}
function Du(e, t, n, r) {
  Ru[e.id] || (Ru[e.id] = {}),
    Ru[e.id][t] || (Ru[e.id][t] = {}),
    Ru[e.id][t][n] || (Ru[e.id][t][n] = []),
    Ru[e.id][t][n].push(r);
}
function Ou(e, t, n, r) {
  if (Ru[e.id])
    if (t)
      if (r || n)
        if (r) {
          if (Ru[e.id][t][n])
            for (var i = 0; i < Ru[e.id][t][n].length; i++)
              if (Ru[e.id][t][n][i] === r) {
                Ru[e.id][t][n].splice(i, 1);
                break;
              }
        } else delete Ru[e.id][t][n];
      else Ru[e.id][t] = {};
    else
      for (var s in Ru[e.id]) Ru[e.id].hasOwnProperty(s) && (Ru[e.id][s] = {});
}
function Lu(e, t, n, r) {
  if (this.element) {
    e instanceof Array || (e = [e]),
      n || "function" != typeof t || ((n = t), (t = "_root"));
    var i,
      s = this.id;
    for (i = 0; i < e.length; i++)
      r
        ? Ou(this, e[i], t, n)
        : ((Ru[s] && Ru[s][e[i]]) || Cu.addEvent(this, e[i], o(e[i])),
          Du(this, e[i], t, n));
    return this;
  }
  function o(e) {
    return function (t) {
      !(function (e, t, n) {
        if (Ru[e][n]) {
          var r,
            i,
            s = t.target || t.srcElement,
            o = {},
            a = 0,
            u = 0;
          for (r in ((Iu = 0), Ru[e][n]))
            Ru[e][n].hasOwnProperty(r) &&
              (i = Pu(s, r, ku[e].element)) &&
              Cu.matchesEvent(n, ku[e].element, i, "_root" == r, t) &&
              (Iu++, (Ru[e][n][r].match = i), (o[Iu] = Ru[e][n][r]));
          for (
            t.stopPropagation = function () {
              t.cancelBubble = !0;
            },
              a = 0;
            a <= Iu;
            a++
          )
            if (o[a])
              for (u = 0; u < o[a].length; u++) {
                if (!1 === o[a][u].call(o[a].match, t))
                  return void Cu.cancel(t);
                if (t.cancelBubble) return;
              }
        }
      })(s, t, e);
    };
  }
}
function Cu(e, t) {
  if (!(this instanceof Cu)) {
    for (var n in ku) if (ku[n].element === e) return ku[n];
    return wu++, (ku[wu] = new Cu(e, wu)), ku[wu];
  }
  (this.element = e), (this.id = t);
}
(Cu.prototype.on = function (e, t, n) {
  return Lu.call(this, e, t, n);
}),
  (Cu.prototype.off = function (e, t, n) {
    return Lu.call(this, e, t, n, !0);
  }),
  (Cu.matchesSelector = function () {}),
  (Cu.cancel = function (e) {
    e.preventDefault(), e.stopPropagation();
  }),
  (Cu.addEvent = function (e, t, n) {
    var r = "blur" == t || "focus" == t,
      i = Le.passiveEvents ? { capture: r, passive: !1 } : r;
    e.element.addEventListener(t, n, i);
  }),
  (Cu.matchesEvent = function () {
    return !0;
  });
const Mu = Cu.addEvent,
  Nu = void 0 === window.PointerEvent && void 0 !== window.MSPointerEvent,
  xu = {
    pointerdown: "MSPointerDown",
    pointerup: "MSPointerUp",
    pointercancel: "MSPointerCancel",
    pointermove: "MSPointerMove",
    pointerenter: "MSPointerEnter",
    pointerleave: "MSPointerLeave",
    pointerover: "MSPointerOver",
    pointerout: "MSPointerOut",
  },
  Uu = "onmspointerenter" in document,
  Fu = "onmspointerleave" in document;
function ju(e, t) {
  return null == e || e != e ? t : e;
}
(Cu.addEvent = function (e, t, n) {
  Nu && xu[t] && (t = xu[t]),
    "transitionend" === t &&
      (Mu(e, "webkitTransitionEnd", n), Mu(e, "otransitionend", n)),
    "mouseenter" === t && (t = "mouseover"),
    "mouseleave" === t && (t = "mouseout"),
    "MSPointerEnter" !== t || Uu || (t = "MSPointerOver"),
    "MSPointerLeave" !== t || Fu || (t = "MSPointerOut"),
    Mu(e, t, n);
}),
  (Cu.matchesEvent = function (e, t, n, r, i) {
    return (
      !(
        "mouseenter" === e ||
        "mouseleave" === e ||
        (!Uu && "MSPointerEnter" === e) ||
        (!Fu && "MSPointerLeave" === e)
      ) ||
      (function (e, t, n, r) {
        return (
          !r.relatedTarget ||
          ((!n || e === t) &&
            t !== r.relatedTarget &&
            !t.contains(r.relatedTarget))
        );
      })(t, n, r, i)
    );
  });
var Bu = rn(function (e, t) {
    function n(e, t) {
      return e === t;
    }
    function r(e, t, n) {
      if (null === t || null === n || t.length !== n.length) return !1;
      for (var r = t.length, i = 0; i < r; i++) if (!e(t[i], n[i])) return !1;
      return !0;
    }
    function i(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
        i = null,
        s = null;
      return function () {
        return (
          r(t, i, arguments) || (s = e.apply(null, arguments)),
          (i = arguments),
          s
        );
      };
    }
    function s(e) {
      var t = Array.isArray(e[0]) ? e[0] : e;
      if (
        !t.every(function (e) {
          return "function" == typeof e;
        })
      ) {
        var n = t
          .map(function (e) {
            return typeof e;
          })
          .join(", ");
        throw new Error(
          "Selector creators expect all input-selectors to be functions, instead received the following types: [" +
            n +
            "]"
        );
      }
      return t;
    }
    function o(e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return function () {
        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
          r[o] = arguments[o];
        var a = 0,
          u = r.pop(),
          c = s(r),
          l = e.apply(
            void 0,
            [
              function () {
                return a++, u.apply(null, arguments);
              },
            ].concat(n)
          ),
          d = i(function () {
            for (var e = [], t = c.length, n = 0; n < t; n++)
              e.push(c[n].apply(null, arguments));
            return l.apply(null, e);
          });
        return (
          (d.resultFunc = u),
          (d.recomputations = function () {
            return a;
          }),
          (d.resetRecomputations = function () {
            return (a = 0);
          }),
          d
        );
      };
    }
    (t.__esModule = !0),
      (t.defaultMemoize = i),
      (t.createSelectorCreator = o),
      (t.createStructuredSelector = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        if ("object" != typeof e)
          throw new Error(
            "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " +
              typeof e
          );
        var n = Object.keys(e);
        return t(
          n.map(function (t) {
            return e[t];
          }),
          function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return t.reduce(function (e, t, r) {
              return (e[n[r]] = t), e;
            }, {});
          }
        );
      });
    var a = (t.createSelector = o(i));
  }),
  Vu = (function () {
    if ("undefined" != typeof Map) return Map;
    function e(e, t) {
      var n = -1;
      return (
        e.some(function (e, r) {
          return e[0] === t && ((n = r), !0);
        }),
        n
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (t) {
          var n = e(this.__entries__, t),
            r = this.__entries__[n];
          return r && r[1];
        }),
        (t.prototype.set = function (t, n) {
          var r = e(this.__entries__, t);
          ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n]);
        }),
        (t.prototype.delete = function (t) {
          var n = this.__entries__,
            r = e(n, t);
          ~r && n.splice(r, 1);
        }),
        (t.prototype.has = function (t) {
          return !!~e(this.__entries__, t);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (e, t) {
          void 0 === t && (t = null);
          for (var n = 0, r = this.__entries__; n < r.length; n++) {
            var i = r[n];
            e.call(t, i[1], i[0]);
          }
        }),
        t
      );
    })();
  })(),
  Hu =
    "undefined" != typeof window &&
    "undefined" != typeof document &&
    window.document === document,
  Xu =
    "undefined" != typeof global && global.Math === Math
      ? global
      : "undefined" != typeof self && self.Math === Math
      ? self
      : "undefined" != typeof window && window.Math === Math
      ? window
      : Function("return this")(),
  qu =
    "function" == typeof requestAnimationFrame
      ? requestAnimationFrame.bind(Xu)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        },
  Gu = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  Wu = "undefined" != typeof MutationObserver,
  Ku = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = (function (e, t) {
          var n = !1,
            r = !1,
            i = 0;
          function s() {
            n && ((n = !1), e()), r && a();
          }
          function o() {
            qu(s);
          }
          function a() {
            var e = Date.now();
            if (n) {
              if (e - i < 2) return;
              r = !0;
            } else (n = !0), (r = !1), setTimeout(o, 20);
            i = e;
          }
          return a;
        })(this.refresh.bind(this)));
    }
    return (
      (e.prototype.addObserver = function (e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (e) {
        var t = this.observers_,
          n = t.indexOf(e);
        ~n && t.splice(n, 1),
          !t.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        this.updateObservers_() && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var e = this.observers_.filter(function (e) {
          return e.gatherActive(), e.hasActive();
        });
        return (
          e.forEach(function (e) {
            return e.broadcastActive();
          }),
          e.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        Hu &&
          !this.connected_ &&
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          Wu
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        Hu &&
          this.connected_ &&
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (e) {
        var t = e.propertyName,
          n = void 0 === t ? "" : t;
        Gu.some(function (e) {
          return !!~n.indexOf(e);
        }) && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  Yu = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  $u = function (e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || Xu;
  },
  zu = tc(0, 0, 0, 0);
function Qu(e) {
  return parseFloat(e) || 0;
}
function Ju(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (t, n) {
    return t + Qu(e["border-" + n + "-width"]);
  }, 0);
}
var Zu =
  "undefined" != typeof SVGGraphicsElement
    ? function (e) {
        return e instanceof $u(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof $u(e).SVGElement && "function" == typeof e.getBBox;
      };
function ec(e) {
  return Hu
    ? Zu(e)
      ? (function (e) {
          var t = e.getBBox();
          return tc(0, 0, t.width, t.height);
        })(e)
      : (function (e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return zu;
          var r = $u(e).getComputedStyle(e),
            i = (function (e) {
              for (
                var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
                n < r.length;
                n++
              ) {
                var i = r[n],
                  s = e["padding-" + i];
                t[i] = Qu(s);
              }
              return t;
            })(r),
            s = i.left + i.right,
            o = i.top + i.bottom,
            a = Qu(r.width),
            u = Qu(r.height);
          if (
            ("border-box" === r.boxSizing &&
              (Math.round(a + s) !== t && (a -= Ju(r, "left", "right") + s),
              Math.round(u + o) !== n && (u -= Ju(r, "top", "bottom") + o)),
            !(function (e) {
              return e === $u(e).document.documentElement;
            })(e))
          ) {
            var c = Math.round(a + s) - t,
              l = Math.round(u + o) - n;
            1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(l) && (u -= l);
          }
          return tc(i.left, i.top, a, u);
        })(e)
    : zu;
}
function tc(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var nc = (function () {
    function e(e) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = tc(0, 0, 0, 0)),
        (this.target = e);
    }
    return (
      (e.prototype.isActive = function () {
        var e = ec(this.target);
        return (
          (this.contentRect_ = e),
          e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var e = this.contentRect_;
        return (
          (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e
        );
      }),
      e
    );
  })(),
  rc = function (e, t) {
    var n = (function (e) {
      var t = e.x,
        n = e.y,
        r = e.width,
        i = e.height,
        s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
        o = Object.create(s.prototype);
      return (
        Yu(o, {
          x: t,
          y: n,
          width: r,
          height: i,
          top: n,
          right: t + r,
          bottom: i + n,
          left: t,
        }),
        o
      );
    })(t);
    Yu(this, { target: e, contentRect: n });
  },
  ic = (function () {
    function e(e, t, n) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Vu()),
        "function" != typeof e)
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n);
    }
    return (
      (e.prototype.observe = function (e) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
          if (!(e instanceof $u(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) ||
            (t.set(e, new nc(e)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (e) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
          if (!(e instanceof $u(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) &&
            (t.delete(e), t.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var e = this;
        this.clearActive(),
          this.observations_.forEach(function (t) {
            t.isActive() && e.activeObservations_.push(t);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var e = this.callbackCtx_,
            t = this.activeObservations_.map(function (e) {
              return new rc(e.target, e.broadcastRect());
            });
          this.callback_.call(e, t, e), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  sc = "undefined" != typeof WeakMap ? new WeakMap() : new Vu(),
  oc = function e(t) {
    if (!(this instanceof e))
      throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    var n = Ku.getInstance(),
      r = new ic(t, n, this);
    sc.set(this, r);
  };
["observe", "unobserve", "disconnect"].forEach(function (e) {
  oc.prototype[e] = function () {
    var t;
    return (t = sc.get(this))[e].apply(t, arguments);
  };
});
var ac = void 0 !== Xu.ResizeObserver ? Xu.ResizeObserver : oc;
function uc(e, t, n) {
  var r = !0,
    i = !0;
  if ("function" != typeof e) throw new TypeError("Expected a function");
  return (
    et(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    Tu(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
function cc(e, t, n) {
  (this.constructorName = "MessageApiError"),
    (this.message = e),
    (this.name = t),
    (this.source = n);
}
function lc(e) {
  return e;
}
function dc(e) {
  if (!e || "" === e) return {};
  if ("object" == typeof e) return e;
  try {
    return JSON.parse(e);
  } catch (t) {
    return {};
  }
}
function hc(e) {}
cc.prototype = new Error();
let fc = {
    captureException(e) {},
    captureMessage(e) {},
    captureBreadcrumb() {},
  },
  _c = fc;
var pc = {
  set: function (e) {
    _c = Object.assign({}, fc, e);
  },
  captureException: function (e, t) {
    return _c.captureException(e, t);
  },
  captureMessage: function (e, t) {
    return _c.captureMessage(e, t);
  },
  captureBreadcrumb: function (e, t, n = "backbone", r = "info") {
    return _c.captureBreadcrumb(e, t, n, r);
  },
};
function mc(e) {
  const t = (function (e) {
      let t = document.referrer || e;
      try {
        t = decodeURIComponent(t);
      } catch (Rl) {
        t = unescape(t);
      }
      return t;
    })(e),
    n = {},
    r = {},
    i = { parseMessage: dc, buildMessage: lc, logError: hc };
  let s = {};
  const o = {
    get methods() {
      return n;
    },
    extendMethods(...e) {
      S.apply(void 0, [n].concat(e));
    },
    get listeners() {
      return s;
    },
    set listeners(e) {
      s = e;
    },
    emit(e, ...t) {
      if (a.apply(void 0, [e].concat(t))) {
        const n = { event: e };
        t && t[0] && (n.data = t[0]), u(n);
      }
    },
    filter(e, t) {
      t || "function" != typeof e || ((t = e), (e = null)),
        e
          ? (function (e, t) {
              (r.event = r.event || {}),
                (r.event[e] = r.event[e] || []),
                r.event[e].push(t);
            })(e, t)
          : (function (e) {
              (r.global = r.global || []), r.global.push(e);
            })(t);
    },
    hooks: (...e) => S.apply(void 0, [i].concat(e)),
  };
  function a(...e) {
    if (r) {
      let t, n;
      if (r.global && r.global.length)
        for (t = 0; t < r.global.length; t++)
          if (((n = r.global[t]), !n.apply(n, e))) return !1;
      let i = e[0];
      if (r.event && r.event[i] && r.event[i].length)
        for (t = 0; t < r.event[i].length; t++)
          if (((n = r.event[i][t]), !n.apply(n, e))) return !1;
    }
    return !0;
  }
  function u(e) {
    if (
      window.postMessage &&
      window.parent.postMessage &&
      ((e = i.buildMessage(e)), window.parent != window)
    )
      try {
        const n = t && "null" !== t ? t : "*";
        window.parent.postMessage(e, n);
      } catch (n) {}
  }
  return (
    window.addEventListener(
      "message",
      function (e) {
        if (e.source !== window.parent) return;
        let t = i.parseMessage(e.data),
          { method: r, value: s } = t;
        if (!(void 0 === r || "string" != typeof r || r.indexOf("_") > -1))
          try {
            let o = (function (e, t) {
              if (!e) return null;
              let n = Object.getOwnPropertyDescriptor(t, e);
              if (n && "function" == typeof n.value) return n.value;
              if (n && "function" == typeof n.get) return n.get;
              const r = e.substr(0, 3),
                i = e.substr(3, 1).toLowerCase() + e.substr(4);
              return (
                (n = Object.getOwnPropertyDescriptor(t, i)),
                "get" === r && n && "function" == typeof n.get
                  ? n.get
                  : "set" === r && n && "function" == typeof n.set
                  ? n.set
                  : null
              );
            })(r, n);
            if (!o)
              throw new cc(
                `“${e}” is not a valid method. Valid methods are: ${(function (
                  e
                ) {
                  return Object.keys(e)
                    .reduce((t, n) => {
                      const r = Object.getOwnPropertyDescriptor(e, n);
                      return "function" == typeof r.value
                        ? (t.push(n), t)
                        : ("function" == typeof r.get &&
                            t.push(
                              "get" + n.charAt(0).toUpperCase() + n.slice(1)
                            ),
                          "function" == typeof r.set &&
                            t.push(
                              "set" + n.charAt(0).toUpperCase() + n.slice(1)
                            ),
                          t);
                    }, [])
                    .sort();
                })(n).join(", ")}.`,
                "TypeError",
                r
              );
            pc.captureBreadcrumb("API message received", t, "api"),
              Promise.resolve(o.call(e, s))
                .then((e) => u({ method: r, value: null == e ? s : e }))
                .catch(i.logError);
          } catch (o) {
            i.logError(o);
          }
      },
      !1
    ),
    o
  );
}
var vc = self !== top,
  gc = (function () {
    var e = document.createElement("video"),
      t = {
        request: [
          "requestFullscreen",
          "webkitRequestFullscreen",
          "webkitRequestFullScreen",
          "mozRequestFullScreen",
          "msRequestFullscreen",
        ],
        exit: [
          "exitFullscreen",
          "webkitCancelFullScreen",
          "webkitExitFullscreen",
          "mozCancelFullScreen",
          "msExitFullscreen",
        ],
        enabled: [
          "fullscreenEnabled",
          "webkitFullscreenEnabled",
          "mozFullScreenEnabled",
          "msFullscreenEnabled",
        ],
        element: [
          "fullscreenElement",
          "webkitFullscreenElement",
          "webkitCurrentFullScreenElement",
          "mozFullScreenElement",
          "msFullscreenElement",
        ],
        change: [
          "fullscreenchange",
          "webkitfullscreenchange",
          "mozfullscreenchange",
          "MSFullscreenChange",
        ],
        error: [
          "fullscreenerror",
          "webkitfullscreenerror",
          "mozfullscreenerror",
          "MSFullscreenError",
        ],
      },
      n = {};
    for (var r in t)
      for (var i = 0, s = t[r].length; i < s; i++)
        if (
          t[r][i] in e ||
          t[r][i] in document ||
          "on" + t[r][i].toLowerCase() in document
        ) {
          n[r] = t[r][i];
          break;
        }
    return n;
  })(),
  yc = { ENTER: "enter", EXIT: "exit", CHANGE: "change", ERROR: "error" },
  Ec = [],
  Tc = {};
function Sc() {
  var e = Array.prototype.slice.apply(arguments),
    t = e.shift();
  Tc[t].forEach(function (t) {
    "function" == typeof t && t.apply(t, e);
  });
}
function bc(e) {
  return function (t, n) {
    -1 !== Ec.indexOf(t) && e.call(this, t, n);
  };
}
function Ac(e) {
  var t = null;
  if ("VIDEO" === e.tagName) t = e;
  else {
    var n = e.getElementsByTagName("video");
    n[0] && (t = n[0]);
  }
  return t;
}
Object.keys(yc).forEach(function (e) {
  Ec.push(yc[e]), (Tc[yc[e]] = []);
});
var Ic = null,
  wc = function () {},
  Rc = [];
function kc(e) {
  var t = Ac(e);
  if (t && t.webkitEnterFullscreen) {
    try {
      t.readyState < t.HAVE_METADATA
        ? (t.addEventListener(
            "loadedmetadata",
            function n() {
              t.removeEventListener("loadedmetadata", n, !1);
              try {
                t.webkitEnterFullscreen();
              } catch (r) {
                return Oc("cannot_enter_fullscreen", e);
              }
            },
            !1
          ),
          t.load())
        : t.webkitEnterFullscreen(),
        (Ic = t);
    } catch (n) {
      return Oc("not_supported", e);
    }
    return !0;
  }
  return Oc(void 0 === gc.request ? "not_supported" : "not_enabled", e);
}
var Pc = function (e) {
    var t = Rc[Rc.length - 1];
    t &&
      ((e !== t.element && e !== Ic) || !t.hasEntered) &&
      ("VIDEO" === e.tagName && (Ic = e),
      1 === Rc.length && Lc.onenter(Lc.element),
      t.enter.call(t.element, e || t.element),
      (t.hasEntered = !0),
      Sc(yc.ENTER, Lc.element));
  },
  Dc = function () {
    Ic = null;
    var e = Rc.pop();
    e &&
      (e.exit.call(e.element),
      Sc(yc.EXIT, e.element),
      Lc.element ||
        (Rc.forEach(function (e) {
          e.exit.call(e.element), Sc(yc.EXIT, e.element);
        }),
        (Rc = []),
        Lc.onexit()));
  },
  Oc = function (e, t) {
    if (Rc.length > 0) {
      var n = Rc.pop();
      (t = t || n.element),
        n.error.call(t, e),
        Lc.onerror(t, e),
        Sc(yc.ERROR, t, e);
    }
  },
  Lc = {
    request: function (e, t, n, r) {
      if (
        ((e = e || document.body),
        Rc.push({ element: e, enter: t || wc, exit: n || wc, error: r || wc }),
        void 0 === gc.request)
      )
        return kc(e);
      if (vc && !1 === document[gc.enabled]) return kc(e);
      try {
        e[gc.request]();
      } catch (i) {
        Oc("not_enabled", e);
      }
    },
    exit: function () {
      !document[gc.exit] && Lc.element
        ? Lc.element[gc.exit]()
        : document[gc.exit]();
    },
    toggle: function (e, t, n, r) {
      Lc.element ? Lc.exit() : Lc.request(e, t, n, r);
    },
    videoEnabled: function (e) {
      if (Lc.enabled) return !0;
      var t = Ac((e = e || document.body));
      return (
        !(!t || void 0 === t.webkitSupportsFullscreen) &&
        (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
      );
    },
    on: bc(function (e, t) {
      Tc[e].push(t);
    }),
    off: bc(function (e, t) {
      var n = Tc[e].indexOf(t);
      n > -1 && Tc[e].splice(n, 1);
    }),
    onenter: wc,
    onexit: wc,
    onchange: wc,
    onerror: wc,
  };
try {
  Object.defineProperties(Lc, {
    element: {
      enumerable: !0,
      get: function () {
        return Ic && Ic.webkitDisplayingFullscreen
          ? Ic
          : document[gc.element] || null;
      },
    },
    enabled: {
      enumerable: !0,
      get: function () {
        return document[gc.enabled] || !1;
      },
    },
  });
} catch (xf) {
  (Lc.element = null), (Lc.enabled = !1);
}
gc.change &&
  document.addEventListener(
    gc.change,
    function (e) {
      if ((Lc.onchange(Lc.element), Sc(yc.CHANGE, Lc.element), Lc.element)) {
        var t = Rc[Rc.length - 2];
        t && t.element === Lc.element ? Dc() : Pc(Lc.element);
      } else Dc();
    },
    !1
  ),
  document.addEventListener(
    "webkitbeginfullscreen",
    function (e) {
      var t = !0;
      if (Rc.length > 0)
        for (var n = 0, r = Rc.length; n < r; n++)
          if (Ac(Rc[n].element) === e.srcElement) {
            t = !1;
            break;
          }
      t && Rc.push({ element: e.srcElement, enter: wc, exit: wc, error: wc }),
        Lc.onchange(e.srcElement),
        Sc(yc.CHANGE, Lc.srcElement),
        Pc(e.srcElement);
    },
    !0
  ),
  document.addEventListener(
    "webkitendfullscreen",
    function (e) {
      Lc.onchange(e.srcElement), Sc(yc.CHANGE, e.srcElement), Dc(e.srcElement);
    },
    !0
  ),
  gc.error &&
    document.addEventListener(
      gc.error,
      function (e) {
        Oc("not_allowed");
      },
      !1
    );
var Cc = rn(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Tracker = void 0);
  var n = (function () {
    function e() {}
    return (
      (e.getAttributeTypeMap = function () {
        return e.attributeTypeMap;
      }),
      (e.attributeTypeMap = [
        { name: "name", baseName: "name", type: "string" },
        { name: "version", baseName: "version", type: "string" },
      ]),
      e
    );
  })();
  t.Tracker = n;
});
let Mc;
const Nc = new Uint8Array(16);
function xc() {
  if (
    !Mc &&
    ((Mc =
      "undefined" != typeof crypto &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !Mc)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return Mc(Nc);
}
var Uc =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Fc(e) {
  return "string" == typeof e && Uc.test(e);
}
const jc = [];
for (let Uf = 0; Uf < 256; ++Uf) jc.push((Uf + 256).toString(16).slice(1));
function Bc(e, t = 0) {
  return (
    jc[e[t + 0]] +
    jc[e[t + 1]] +
    jc[e[t + 2]] +
    jc[e[t + 3]] +
    "-" +
    jc[e[t + 4]] +
    jc[e[t + 5]] +
    "-" +
    jc[e[t + 6]] +
    jc[e[t + 7]] +
    "-" +
    jc[e[t + 8]] +
    jc[e[t + 9]] +
    "-" +
    jc[e[t + 10]] +
    jc[e[t + 11]] +
    jc[e[t + 12]] +
    jc[e[t + 13]] +
    jc[e[t + 14]] +
    jc[e[t + 15]]
  ).toLowerCase();
}
let Vc,
  Hc,
  Xc = 0,
  qc = 0;
function Gc(e) {
  if (!Fc(e)) throw TypeError("Invalid UUID");
  let t;
  const n = new Uint8Array(16);
  return (
    (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
    (n[1] = (t >>> 16) & 255),
    (n[2] = (t >>> 8) & 255),
    (n[3] = 255 & t),
    (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
    (n[5] = 255 & t),
    (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
    (n[7] = 255 & t),
    (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
    (n[9] = 255 & t),
    (n[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
    (n[11] = (t / 4294967296) & 255),
    (n[12] = (t >>> 24) & 255),
    (n[13] = (t >>> 16) & 255),
    (n[14] = (t >>> 8) & 255),
    (n[15] = 255 & t),
    n
  );
}
function Wc(e, t, n) {
  function r(e, r, i, s) {
    var o;
    if (
      ("string" == typeof e &&
        (e = (function (e) {
          e = unescape(encodeURIComponent(e));
          const t = [];
          for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
          return t;
        })(e)),
      "string" == typeof r && (r = Gc(r)),
      16 !== (null === (o = r) || void 0 === o ? void 0 : o.length))
    )
      throw TypeError(
        "Namespace must be array-like (16 iterable integer values, 0-255)"
      );
    let a = new Uint8Array(16 + e.length);
    if (
      (a.set(r),
      a.set(e, r.length),
      (a = n(a)),
      (a[6] = (15 & a[6]) | t),
      (a[8] = (63 & a[8]) | 128),
      i)
    ) {
      s = s || 0;
      for (let e = 0; e < 16; ++e) i[s + e] = a[e];
      return i;
    }
    return Bc(a);
  }
  try {
    r.name = e;
  } catch (xf) {}
  return (
    (r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
    (r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
    r
  );
}
function Kc(e) {
  return 14 + (((e + 64) >>> 9) << 4) + 1;
}
function Yc(e, t) {
  const n = (65535 & e) + (65535 & t);
  return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
}
function $c(e, t, n, r, i, s) {
  return Yc(
    (function (e, t) {
      return (e << t) | (e >>> (32 - t));
    })(Yc(Yc(t, e), Yc(r, s)), i),
    n
  );
}
function zc(e, t, n, r, i, s, o) {
  return $c((t & n) | (~t & r), e, t, i, s, o);
}
function Qc(e, t, n, r, i, s, o) {
  return $c((t & r) | (n & ~r), e, t, i, s, o);
}
function Jc(e, t, n, r, i, s, o) {
  return $c(t ^ n ^ r, e, t, i, s, o);
}
function Zc(e, t, n, r, i, s, o) {
  return $c(n ^ (t | ~r), e, t, i, s, o);
}
const el = Wc("v3", 48, function (e) {
  if ("string" == typeof e) {
    const t = unescape(encodeURIComponent(e));
    e = new Uint8Array(t.length);
    for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
  }
  return (function (e) {
    const t = [],
      n = 32 * e.length;
    for (let r = 0; r < n; r += 8) {
      const n = (e[r >> 5] >>> r % 32) & 255,
        i = parseInt(
          "0123456789abcdef".charAt((n >>> 4) & 15) +
            "0123456789abcdef".charAt(15 & n),
          16
        );
      t.push(i);
    }
    return t;
  })(
    (function (e, t) {
      (e[t >> 5] |= 128 << t % 32), (e[Kc(t) - 1] = t);
      let n = 1732584193,
        r = -271733879,
        i = -1732584194,
        s = 271733878;
      for (let o = 0; o < e.length; o += 16) {
        const t = n,
          a = r,
          u = i,
          c = s;
        (n = zc(n, r, i, s, e[o], 7, -680876936)),
          (s = zc(s, n, r, i, e[o + 1], 12, -389564586)),
          (i = zc(i, s, n, r, e[o + 2], 17, 606105819)),
          (r = zc(r, i, s, n, e[o + 3], 22, -1044525330)),
          (n = zc(n, r, i, s, e[o + 4], 7, -176418897)),
          (s = zc(s, n, r, i, e[o + 5], 12, 1200080426)),
          (i = zc(i, s, n, r, e[o + 6], 17, -1473231341)),
          (r = zc(r, i, s, n, e[o + 7], 22, -45705983)),
          (n = zc(n, r, i, s, e[o + 8], 7, 1770035416)),
          (s = zc(s, n, r, i, e[o + 9], 12, -1958414417)),
          (i = zc(i, s, n, r, e[o + 10], 17, -42063)),
          (r = zc(r, i, s, n, e[o + 11], 22, -1990404162)),
          (n = zc(n, r, i, s, e[o + 12], 7, 1804603682)),
          (s = zc(s, n, r, i, e[o + 13], 12, -40341101)),
          (i = zc(i, s, n, r, e[o + 14], 17, -1502002290)),
          (r = zc(r, i, s, n, e[o + 15], 22, 1236535329)),
          (n = Qc(n, r, i, s, e[o + 1], 5, -165796510)),
          (s = Qc(s, n, r, i, e[o + 6], 9, -1069501632)),
          (i = Qc(i, s, n, r, e[o + 11], 14, 643717713)),
          (r = Qc(r, i, s, n, e[o], 20, -373897302)),
          (n = Qc(n, r, i, s, e[o + 5], 5, -701558691)),
          (s = Qc(s, n, r, i, e[o + 10], 9, 38016083)),
          (i = Qc(i, s, n, r, e[o + 15], 14, -660478335)),
          (r = Qc(r, i, s, n, e[o + 4], 20, -405537848)),
          (n = Qc(n, r, i, s, e[o + 9], 5, 568446438)),
          (s = Qc(s, n, r, i, e[o + 14], 9, -1019803690)),
          (i = Qc(i, s, n, r, e[o + 3], 14, -187363961)),
          (r = Qc(r, i, s, n, e[o + 8], 20, 1163531501)),
          (n = Qc(n, r, i, s, e[o + 13], 5, -1444681467)),
          (s = Qc(s, n, r, i, e[o + 2], 9, -51403784)),
          (i = Qc(i, s, n, r, e[o + 7], 14, 1735328473)),
          (r = Qc(r, i, s, n, e[o + 12], 20, -1926607734)),
          (n = Jc(n, r, i, s, e[o + 5], 4, -378558)),
          (s = Jc(s, n, r, i, e[o + 8], 11, -2022574463)),
          (i = Jc(i, s, n, r, e[o + 11], 16, 1839030562)),
          (r = Jc(r, i, s, n, e[o + 14], 23, -35309556)),
          (n = Jc(n, r, i, s, e[o + 1], 4, -1530992060)),
          (s = Jc(s, n, r, i, e[o + 4], 11, 1272893353)),
          (i = Jc(i, s, n, r, e[o + 7], 16, -155497632)),
          (r = Jc(r, i, s, n, e[o + 10], 23, -1094730640)),
          (n = Jc(n, r, i, s, e[o + 13], 4, 681279174)),
          (s = Jc(s, n, r, i, e[o], 11, -358537222)),
          (i = Jc(i, s, n, r, e[o + 3], 16, -722521979)),
          (r = Jc(r, i, s, n, e[o + 6], 23, 76029189)),
          (n = Jc(n, r, i, s, e[o + 9], 4, -640364487)),
          (s = Jc(s, n, r, i, e[o + 12], 11, -421815835)),
          (i = Jc(i, s, n, r, e[o + 15], 16, 530742520)),
          (r = Jc(r, i, s, n, e[o + 2], 23, -995338651)),
          (n = Zc(n, r, i, s, e[o], 6, -198630844)),
          (s = Zc(s, n, r, i, e[o + 7], 10, 1126891415)),
          (i = Zc(i, s, n, r, e[o + 14], 15, -1416354905)),
          (r = Zc(r, i, s, n, e[o + 5], 21, -57434055)),
          (n = Zc(n, r, i, s, e[o + 12], 6, 1700485571)),
          (s = Zc(s, n, r, i, e[o + 3], 10, -1894986606)),
          (i = Zc(i, s, n, r, e[o + 10], 15, -1051523)),
          (r = Zc(r, i, s, n, e[o + 1], 21, -2054922799)),
          (n = Zc(n, r, i, s, e[o + 8], 6, 1873313359)),
          (s = Zc(s, n, r, i, e[o + 15], 10, -30611744)),
          (i = Zc(i, s, n, r, e[o + 6], 15, -1560198380)),
          (r = Zc(r, i, s, n, e[o + 13], 21, 1309151649)),
          (n = Zc(n, r, i, s, e[o + 4], 6, -145523070)),
          (s = Zc(s, n, r, i, e[o + 11], 10, -1120210379)),
          (i = Zc(i, s, n, r, e[o + 2], 15, 718787259)),
          (r = Zc(r, i, s, n, e[o + 9], 21, -343485551)),
          (n = Yc(n, t)),
          (r = Yc(r, a)),
          (i = Yc(i, u)),
          (s = Yc(s, c));
      }
      return [n, r, i, s];
    })(
      (function (e) {
        if (0 === e.length) return [];
        const t = 8 * e.length,
          n = new Uint32Array(Kc(t));
        for (let r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32;
        return n;
      })(e),
      8 * e.length
    )
  );
});
var tl = {
  randomUUID:
    "undefined" != typeof crypto &&
    crypto.randomUUID &&
    crypto.randomUUID.bind(crypto),
};
function nl(e, t, n, r) {
  switch (e) {
    case 0:
      return (t & n) ^ (~t & r);
    case 1:
      return t ^ n ^ r;
    case 2:
      return (t & n) ^ (t & r) ^ (n & r);
    case 3:
      return t ^ n ^ r;
  }
}
function rl(e, t) {
  return (e << t) | (e >>> (32 - t));
}
const il = Wc("v5", 80, function (e) {
  const t = [1518500249, 1859775393, 2400959708, 3395469782],
    n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if ("string" == typeof e) {
    const t = unescape(encodeURIComponent(e));
    e = [];
    for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
  } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
  e.push(128);
  const r = e.length / 4 + 2,
    i = Math.ceil(r / 16),
    s = new Array(i);
  for (let o = 0; o < i; ++o) {
    const t = new Uint32Array(16);
    for (let n = 0; n < 16; ++n)
      t[n] =
        (e[64 * o + 4 * n] << 24) |
        (e[64 * o + 4 * n + 1] << 16) |
        (e[64 * o + 4 * n + 2] << 8) |
        e[64 * o + 4 * n + 3];
    s[o] = t;
  }
  (s[i - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
    (s[i - 1][14] = Math.floor(s[i - 1][14])),
    (s[i - 1][15] = (8 * (e.length - 1)) & 4294967295);
  for (let o = 0; o < i; ++o) {
    const e = new Uint32Array(80);
    for (let t = 0; t < 16; ++t) e[t] = s[o][t];
    for (let t = 16; t < 80; ++t)
      e[t] = rl(e[t - 3] ^ e[t - 8] ^ e[t - 14] ^ e[t - 16], 1);
    let r = n[0],
      i = n[1],
      a = n[2],
      u = n[3],
      c = n[4];
    for (let n = 0; n < 80; ++n) {
      const s = Math.floor(n / 20),
        o = (rl(r, 5) + nl(s, i, a, u) + c + t[s] + e[n]) >>> 0;
      (c = u), (u = a), (a = rl(i, 30) >>> 0), (i = r), (r = o);
    }
    (n[0] = (n[0] + r) >>> 0),
      (n[1] = (n[1] + i) >>> 0),
      (n[2] = (n[2] + a) >>> 0),
      (n[3] = (n[3] + u) >>> 0),
      (n[4] = (n[4] + c) >>> 0);
  }
  return [
    (n[0] >> 24) & 255,
    (n[0] >> 16) & 255,
    (n[0] >> 8) & 255,
    255 & n[0],
    (n[1] >> 24) & 255,
    (n[1] >> 16) & 255,
    (n[1] >> 8) & 255,
    255 & n[1],
    (n[2] >> 24) & 255,
    (n[2] >> 16) & 255,
    (n[2] >> 8) & 255,
    255 & n[2],
    (n[3] >> 24) & 255,
    (n[3] >> 16) & 255,
    (n[3] >> 8) & 255,
    255 & n[3],
    (n[4] >> 24) & 255,
    (n[4] >> 16) & 255,
    (n[4] >> 8) & 255,
    255 & n[4],
  ];
});
var sl = (function (e) {
    return (e && e.default) || e;
  })(
    Object.freeze({
      __proto__: null,
      v1: function (e, t, n) {
        let r = (t && n) || 0;
        const i = t || new Array(16);
        let s = (e = e || {}).node || Vc,
          o = void 0 !== e.clockseq ? e.clockseq : Hc;
        if (null == s || null == o) {
          const t = e.random || (e.rng || xc)();
          null == s && (s = Vc = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
            null == o && (o = Hc = 16383 & ((t[6] << 8) | t[7]));
        }
        let a = void 0 !== e.msecs ? e.msecs : Date.now(),
          u = void 0 !== e.nsecs ? e.nsecs : qc + 1;
        const c = a - Xc + (u - qc) / 1e4;
        if (
          (c < 0 && void 0 === e.clockseq && (o = (o + 1) & 16383),
          (c < 0 || a > Xc) && void 0 === e.nsecs && (u = 0),
          u >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (Xc = a), (qc = u), (Hc = o), (a += 122192928e5);
        const l = (1e4 * (268435455 & a) + u) % 4294967296;
        (i[r++] = (l >>> 24) & 255),
          (i[r++] = (l >>> 16) & 255),
          (i[r++] = (l >>> 8) & 255),
          (i[r++] = 255 & l);
        const d = ((a / 4294967296) * 1e4) & 268435455;
        (i[r++] = (d >>> 8) & 255),
          (i[r++] = 255 & d),
          (i[r++] = ((d >>> 24) & 15) | 16),
          (i[r++] = (d >>> 16) & 255),
          (i[r++] = (o >>> 8) | 128),
          (i[r++] = 255 & o);
        for (let h = 0; h < 6; ++h) i[r + h] = s[h];
        return t || Bc(i);
      },
      v3: el,
      v4: function (e, t, n) {
        if (tl.randomUUID && !t && !e) return tl.randomUUID();
        const r = (e = e || {}).random || (e.rng || xc)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = r[e];
          return t;
        }
        return Bc(r);
      },
      v5: il,
      NIL: "00000000-0000-0000-0000-000000000000",
      version: function (e) {
        if (!Fc(e)) throw TypeError("Invalid UUID");
        return parseInt(e.slice(14, 15), 16);
      },
      validate: Fc,
      stringify: function (e, t = 0) {
        const n = Bc(e, t);
        if (!Fc(n)) throw TypeError("Stringified UUID is invalid");
        return n;
      },
      parse: Gc,
    })
  ),
  ol = rn(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Envelope = void 0);
    var n = (function () {
      function e(e, t) {
        (this.event = e),
          (this.eid = (0, sl.v4)()),
          (this.ts_ms = Date.now()),
          (this.created_at = Date.now()),
          (this._tracker = new Cc.Tracker()),
          (this._globalBPO = t);
      }
      return (
        Object.defineProperty(e.prototype, "tracker", {
          get: function () {
            return this._tracker;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "global", {
          get: function () {
            return this._globalBPO;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.getAttributeTypeMap = function () {
          return e.attributeTypeMap;
        }),
        (e.attributeTypeMap = [
          { name: "eid", baseName: "eid", type: "string" },
          { name: "ts_ms", baseName: "ts_ms", type: "number" },
          { name: "created_at", baseName: "created_at", type: "number" },
          { name: "event", baseName: "event", type: "Event" },
          { name: "global", baseName: "global", type: "Event" },
          { name: "tracker", baseName: "tracker", type: "Tracker" },
        ]),
        e
      );
    })();
    t.Envelope = n;
  }),
  al = rn(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Event = void 0);
    var n = (function () {
      function e(e, t, n) {
        (this.name = e),
          (this.ts_ms = Date.now()),
          (this.version = t),
          (this.fields = n);
      }
      return (
        (e.getAttributeTypeMap = function () {
          return e.attributeTypeMap;
        }),
        (e.attributeTypeMap = [
          { name: "name", baseName: "name", type: "string" },
          { name: "ts_ms", baseName: "ts_ms", type: "number" },
          { name: "version", baseName: "version", type: "number" },
          { name: "fields", baseName: "fields", type: "object" },
        ]),
        e
      );
    })();
    t.Event = n;
  }),
  ul = rn(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.EventContext = void 0);
    var n = (function () {
      function e(e, t, n) {
        (this.name = e),
          (this.ts_ms = Date.now()),
          (this.version = t),
          (this.fields = n);
      }
      return (
        (e.getAttributeTypeMap = function () {
          return e.attributeTypeMap;
        }),
        (e.attributeTypeMap = [
          { name: "name", baseName: "name", type: "string" },
          { name: "ts_ms", baseName: "ts_ms", type: "number" },
          { name: "version", baseName: "version", type: "number" },
          { name: "fields", baseName: "fields", type: "object" },
        ]),
        e
      );
    })();
    t.EventContext = n;
  }),
  cl = rn(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GlobalContext = void 0);
    t.GlobalContext = function (e, t, n) {
      (this.name = e),
        (this.ts_ms = Date.now()),
        (this.version = t),
        (this.fields = n);
    };
  }),
  ll = rn(function (e, t) {
    var n =
        (nn && nn.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              (i &&
                ("get" in i ? t.__esModule : !i.writable && !i.configurable)) ||
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i);
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n]);
            }),
      r =
        (nn && nn.__exportStar) ||
        function (e, t) {
          for (var r in e)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(t, r) ||
              n(t, e, r);
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ObjectSerializer = void 0),
      r(ol, t),
      r(al, t),
      r(ul, t),
      r(Cc, t),
      r(cl, t);
    var i = al,
      s = ul,
      o = Cc,
      a = [
        "string",
        "boolean",
        "double",
        "integer",
        "long",
        "float",
        "number",
        "any",
      ],
      u = {},
      c = {
        Envelope: ol.Envelope,
        Event: i.Event,
        Tracker: o.Tracker,
        EventContext: s.EventContext,
      },
      l = (function () {
        function e() {}
        return (
          (e.findCorrectType = function (e, t) {
            if (null == e) return t;
            if (-1 !== a.indexOf(t.toLowerCase())) return t;
            if ("Date" === t) return t;
            if (u[t]) return t;
            if (!c[t]) return t;
            var n = c[t].discriminator;
            if (null == n) return t;
            if (e[n]) {
              var r = e[n];
              return c[r] ? r : t;
            }
            return t;
          }),
          (e.serialize = function (t, n) {
            if (null == t) return t;
            if (-1 !== a.indexOf(n.toLowerCase())) return t;
            if (0 === n.lastIndexOf("Array<", 0)) {
              var r = n.replace("Array<", "");
              r = r.substring(0, r.length - 1);
              var i = [];
              for (var s in t) {
                var o = t[s];
                i.push(e.serialize(o, r));
              }
              return i;
            }
            if ("Date" === n) return t.toISOString();
            if (u[n]) return t;
            if (!c[n]) return t;
            n = this.findCorrectType(t, n);
            var l = c[n].getAttributeTypeMap(),
              d = {};
            for (var s in l) {
              var h = l[s];
              d[h.baseName] = e.serialize(t[h.name], h.type);
            }
            return d;
          }),
          (e.deserialize = function (t, n) {
            if (((n = e.findCorrectType(t, n)), null == t)) return t;
            if (-1 !== a.indexOf(n.toLowerCase())) return t;
            if (0 === n.lastIndexOf("Array<", 0)) {
              var r = n.replace("Array<", "");
              r = r.substring(0, r.length - 1);
              var i = [];
              for (var s in t) {
                var o = t[s];
                i.push(e.deserialize(o, r));
              }
              return i;
            }
            if ("Date" === n) return new Date(t);
            if (u[n]) return t;
            if (!c[n]) return t;
            var l = new c[n](),
              d = c[n].getAttributeTypeMap();
            for (var s in d) {
              var h = d[s];
              l[h.name] = e.deserialize(t[h.baseName], h.type);
            }
            return l;
          }),
          e
        );
      })();
    t.ObjectSerializer = l;
  }),
  dl = rn(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.formatRequestEvent = t.parseJwt = t.getCookie = void 0),
      (t.getCookie = function (e) {
        if ("undefined" == typeof document) return null;
        var t = document.cookie.match(new RegExp("(;\\s)?".concat(e, "=")));
        if (!t || 0 == t.length || void 0 === t.index) return null;
        var n = document.cookie.indexOf(";", t.index + 1),
          r = t.index + t[0].length,
          i =
            -1 === n
              ? document.cookie.substr(r)
              : document.cookie.substring(r, n);
        return decodeURIComponent(i);
      }),
      (t.parseJwt = function (e) {
        var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
          n = decodeURIComponent(
            atob(t)
              .split("")
              .map(function (e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
        return JSON.parse(n);
      }),
      (t.formatRequestEvent = function (e) {
        var t = e.split(".");
        if (t.length <= 2) return e;
        var n = t.pop();
        return "".concat(t.join("_"), ".").concat(n);
      });
  }),
  hl = rn(function (e, t) {
    var n,
      r =
        (nn && nn.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, s) {
            function o(e) {
              try {
                u(r.next(e));
              } catch (Rl) {
                s(Rl);
              }
            }
            function a(e) {
              try {
                u(r.throw(e));
              } catch (Rl) {
                s(Rl);
              }
            }
            function u(e) {
              e.done
                ? i(e.value)
                : (function (e) {
                    return e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        });
                  })(e.value).then(o, a);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
      i =
        (nn && nn.__generator) ||
        function (e, t) {
          var n,
            r,
            i,
            s,
            o = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (s = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function a(a) {
            return function (u) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s && ((s = 0), a[0] && (o = 0)), o; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, a[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                      case 0:
                      case 1:
                        i = a;
                        break;
                      case 4:
                        return o.label++, { value: a[1], done: !1 };
                      case 5:
                        o.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                          (6 === a[0] || 2 === a[0])
                        ) {
                          o = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          o.label = a[1];
                          break;
                        }
                        if (6 === a[0] && o.label < i[1]) {
                          (o.label = i[1]), (i = a);
                          break;
                        }
                        if (i && o.label < i[2]) {
                          (o.label = i[2]), o.ops.push(a);
                          break;
                        }
                        i[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    a = t.call(e, o);
                  } catch (Rl) {
                    (a = [6, Rl]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, u]);
            };
          }
        },
      s =
        (nn && nn.__values) ||
        function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      o =
        (nn && nn.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            s = n.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = s.next()).done; )
              o.push(r.value);
          } catch (a) {
            i = { error: a };
          } finally {
            try {
              r && !r.done && (n = s.return) && n.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BigPictureClient = t.Configuration = t.Service = void 0),
      (function (e) {
        (e.FRESNEL_PROD = "https://fresnel-events.vimeocdn.com"),
          (e.FRESNEL_DEV = "https://fresnel-event-staging.vimeows.com");
      })((n = t.Service || (t.Service = {})));
    var a = function (e, t, n) {
      void 0 === t && (t = null),
        void 0 === n && (n = null),
        (this.service = e),
        (this.globalBPO = t),
        (this.contexts = n);
    };
    t.Configuration = a;
    var u = (function () {
      function e() {}
      return (
        Object.defineProperty(e, "isInitalized", {
          get: function () {
            return Boolean(e.conf.globalBPO);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.configure = function (t) {
          (e.conf = t),
            e.WAIT_QUEUE.length > 0 &&
              (e.WAIT_QUEUE.map(function (t) {
                return e.sendEvent(t);
              }),
              (e.WAIT_QUEUE = []));
        }),
        (e.updateObject = function (t, n) {
          return r(this, void 0, void 0, function () {
            var r, a, u, c, l, d, h;
            return i(this, function (i) {
              try {
                for (
                  r = s(Object.entries(t)), a = r.next();
                  !a.done;
                  a = r.next()
                )
                  if (((u = o(a.value, 2)), (c = u[0]), (l = u[1]), c in n)) {
                    if (l instanceof Object)
                      return n[c] instanceof Object
                        ? (e.updateObject(l, n[c]), [2])
                        : ((n[c] = l), [2]);
                    n[c] = l;
                  }
              } catch (f) {
                d = { error: f };
              } finally {
                try {
                  a && !a.done && (h = r.return) && h.call(r);
                } finally {
                  if (d) throw d.error;
                }
              }
              return [2];
            });
          });
        }),
        (e.updateContext = function (t) {
          return r(this, void 0, void 0, function () {
            return i(this, function (n) {
              return (
                "global" == t.context &&
                  e.conf.globalBPO &&
                  e.updateObject(t.fields, e.conf.globalBPO.fields),
                [2]
              );
            });
          });
        }),
        (e.sendEvent = function (t, n) {
          return r(this, void 0, void 0, function () {
            var r, s, o, a, u;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  if (null == t)
                    throw new Error(
                      "Required parameter event was null or undefined when calling sendEvent."
                    );
                  return e.isInitalized
                    ? ((r = JSON.stringify(
                        ll.ObjectSerializer.serialize(
                          [new ol.Envelope(t, this.conf.globalBPO)],
                          "Array<Envelope>"
                        )
                      )),
                      (s = (0, dl.formatRequestEvent)(t.name)),
                      (o = ""
                        .concat(this.conf.service, "/add/")
                        .concat(encodeURIComponent(s))),
                      navigator.sendBeacon && !n
                        ? [3, 2]
                        : ((a = {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              "User-Agent": navigator.userAgent,
                              Origin: location.origin,
                              Referer: document.referrer,
                            },
                            body: r,
                          }),
                          n && (a.headers.Authorization = n),
                          [4, fetch(o, a)]))
                    : (e.WAIT_QUEUE.push(t), e.waitAndFlushQueue(), [2]);
                case 1:
                  return i.sent(), [3, 3];
                case 2:
                  (u = new Blob([r])),
                    navigator.sendBeacon(o, u),
                    (i.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        }),
        (e.sendEventWithContexts = function (t, n) {
          return r(this, void 0, void 0, function () {
            var r, a, u, c, l, d, h, f, _, p, m, v, g, y, E;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  if (null == t)
                    throw new Error(
                      "Required parameter event was null or undefined when calling sendEvent."
                    );
                  if (!e.isInitalized)
                    return e.WAIT_QUEUE.push(t), e.waitAndFlushQueue(), [2];
                  (r = new ol.Envelope(t, this.conf.globalBPO)),
                    ((a = ll.ObjectSerializer.serialize(
                      [r],
                      "Array<Envelope>"
                    ))[0].contexts = {});
                  try {
                    for (
                      u = s(Object.entries(n)), c = u.next();
                      !c.done;
                      c = u.next()
                    )
                      (l = o(c.value, 2)),
                        (d = l[0]),
                        (h = l[1]),
                        (f = ll.ObjectSerializer.serialize(h, "EventContext")),
                        (a[0].contexts[d] = f);
                  } catch (T) {
                    y = { error: T };
                  } finally {
                    try {
                      c && !c.done && (E = u.return) && E.call(u);
                    } finally {
                      if (y) throw y.error;
                    }
                  }
                  return (
                    (_ = JSON.stringify(a)),
                    (p = (0, dl.formatRequestEvent)(t.name)),
                    (m = ""
                      .concat(this.conf.service, "/add/")
                      .concat(encodeURIComponent(p))),
                    navigator.sendBeacon
                      ? [3, 2]
                      : ((v = {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            "User-Agent": navigator.userAgent,
                            Origin: location.origin,
                            Referer: document.referrer,
                          },
                          body: _,
                        }),
                        [4, fetch(m, v)])
                  );
                case 1:
                  return i.sent(), [3, 3];
                case 2:
                  (g = new Blob([_])),
                    navigator.sendBeacon(m, g),
                    (i.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        }),
        (e.waitAndFlushQueue = function () {
          e.flushQueueTimeoutHandler ||
            (e.flushQueueTimeoutHandler = setTimeout(function () {
              e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE = []);
            }, e.FLUSH_QUEUE_TIMEOUT));
        }),
        (e.FLUSH_QUEUE_TIMEOUT = 1e4),
        (e.conf = new a(n.FRESNEL_PROD)),
        (e.WAIT_QUEUE = []),
        e
      );
    })();
    t.BigPictureClient = u;
  }),
  fl = rn(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
  }),
  _l = rn(function (e, t) {
    var n =
        (nn && nn.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              (i &&
                ("get" in i ? t.__esModule : !i.writable && !i.configurable)) ||
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i);
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n]);
            }),
      r =
        (nn && nn.__exportStar) ||
        function (e, t) {
          for (var r in e)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(t, r) ||
              n(t, e, r);
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(hl, t),
      r(ll, t),
      r(fl, t);
  }),
  pl = Object.prototype.hasOwnProperty,
  ml = ei(function (e, t) {
    if (Nn(t) || Bn(t)) dn(t, Vn(t), e);
    else for (var n in t) pl.call(t, n) && ln(e, n, t[n]);
  }),
  vl = rn(function (e) {
    !(function () {
      var t =
          "undefined" != typeof window && window === this
            ? this
            : void 0 !== nn && null != nn
            ? nn
            : this,
        n =
          "function" == typeof Object.defineProperties
            ? Object.defineProperty
            : function (e, t, n) {
                e != Array.prototype &&
                  e != Object.prototype &&
                  (e[t] = n.value);
              };
      function r() {
        (r = function () {}), t.Symbol || (t.Symbol = s);
      }
      var i = 0;
      function s(e) {
        return "jscomp_symbol_" + (e || "") + i++;
      }
      function o() {
        r();
        var e = t.Symbol.iterator;
        e || (e = t.Symbol.iterator = t.Symbol("iterator")),
          "function" != typeof Array.prototype[e] &&
            n(Array.prototype, e, {
              configurable: !0,
              writable: !0,
              value: function () {
                return a(this);
              },
            }),
          (o = function () {});
      }
      function a(e) {
        var n = 0;
        return (function (e) {
          return (
            o(),
            ((e = { next: e })[t.Symbol.iterator] = function () {
              return this;
            }),
            e
          );
        })(function () {
          return n < e.length ? { done: !1, value: e[n++] } : { done: !0 };
        });
      }
      function u(e) {
        o();
        var t = e[Symbol.iterator];
        return t ? t.call(e) : a(e);
      }
      function c(e) {
        if (!(e instanceof Array)) {
          e = u(e);
          for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
          e = n;
        }
        return e;
      }
      var l = 0,
        d = "img script iframe link audio video source".split(" ");
      function h(e, t) {
        for (var n = (e = u(e)).next(); !n.done; n = e.next())
          if (
            ((n = n.value),
            t.includes(n.nodeName.toLowerCase()) || h(n.children, t))
          )
            return !0;
        return !1;
      }
      function f(e, t) {
        if (2 < e.length) return performance.now();
        for (var n = [], r = (t = u(t)).next(); !r.done; r = t.next())
          (r = r.value),
            n.push({ timestamp: r.start, type: "requestStart" }),
            n.push({ timestamp: r.end, type: "requestEnd" });
        for (r = (t = u(e)).next(); !r.done; r = t.next())
          n.push({ timestamp: r.value, type: "requestStart" });
        for (
          n.sort(function (e, t) {
            return e.timestamp - t.timestamp;
          }),
            e = e.length,
            t = n.length - 1;
          0 <= t;
          t--
        )
          switch (((r = n[t]), r.type)) {
            case "requestStart":
              e--;
              break;
            case "requestEnd":
              if (2 < ++e) return r.timestamp;
              break;
            default:
              throw Error("Internal Error: This should never happen");
          }
        return 0;
      }
      function _(e) {
        (e = e || {}),
          (this.w = !!e.useMutationObserver),
          (this.u = e.minValue || null),
          (e = window.__tti && window.__tti.e);
        var t = window.__tti && window.__tti.o;
        (this.a = e
          ? e.map(function (e) {
              return { start: e.startTime, end: e.startTime + e.duration };
            })
          : []),
          t && t.disconnect(),
          (this.b = []),
          (this.f = new Map()),
          (this.j = null),
          (this.v = -1 / 0),
          (this.i = !1),
          (this.h = this.c = this.s = null),
          (function (e, t) {
            var n = XMLHttpRequest.prototype.send,
              r = l++;
            XMLHttpRequest.prototype.send = function (i) {
              for (var s = [], o = 0; o < arguments.length; ++o)
                s[o - 0] = arguments[o];
              var a = this;
              return (
                e(r),
                this.addEventListener("readystatechange", function () {
                  4 === a.readyState && t(r);
                }),
                n.apply(this, s)
              );
            };
          })(this.m.bind(this), this.l.bind(this)),
          (function (e, t) {
            var n = fetch;
            fetch = function (r) {
              for (var i = [], s = 0; s < arguments.length; ++s)
                i[s - 0] = arguments[s];
              return new Promise(function (r, s) {
                var o = l++;
                e(o),
                  n.apply(null, [].concat(c(i))).then(
                    function (e) {
                      t(o), r(e);
                    },
                    function (e) {
                      t(e), s(e);
                    }
                  );
              });
            };
          })(this.m.bind(this), this.l.bind(this)),
          (function (e) {
            (e.c = new PerformanceObserver(function (t) {
              for (
                var n = (t = u(t.getEntries())).next();
                !n.done;
                n = t.next()
              )
                if (
                  ("resource" === (n = n.value).entryType &&
                    (e.b.push({ start: n.fetchStart, end: n.responseEnd }),
                    m(e, f(e.g, e.b) + 5e3)),
                  "longtask" === n.entryType)
                ) {
                  var r = n.startTime + n.duration;
                  e.a.push({ start: n.startTime, end: r }), m(e, r + 5e3);
                }
            })),
              e.c.observe({ entryTypes: ["longtask", "resource"] });
          })(this),
          this.w &&
            (this.h = (function (e) {
              var t = new MutationObserver(function (t) {
                for (var n = (t = u(t)).next(); !n.done; n = t.next())
                  (("childList" == (n = n.value).type && h(n.addedNodes, d)) ||
                    ("attributes" == n.type &&
                      d.includes(n.target.tagName.toLowerCase()))) &&
                    e(n);
              });
              return (
                t.observe(document, {
                  attributes: !0,
                  childList: !0,
                  subtree: !0,
                  attributeFilter: ["href", "src"],
                }),
                t
              );
            })(this.B.bind(this)));
      }
      function p(e) {
        e.i = !0;
        var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
          n = f(e.g, e.b);
        m(e, Math.max(n + 5e3, t));
      }
      function m(e, t) {
        !e.i ||
          e.v > t ||
          (clearTimeout(e.j),
          (e.j = setTimeout(function () {
            var t = performance.timing.navigationStart,
              n = f(e.g, e.b);
            if (
              ((t =
                (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) ||
                performance.timing.domContentLoadedEventEnd - t),
              e.u)
            )
              var r = e.u;
            else
              r = performance.timing.domContentLoadedEventEnd
                ? (r = performance.timing).domContentLoadedEventEnd -
                  r.navigationStart
                : null;
            var i = performance.now();
            null === r && m(e, Math.max(n + 5e3, i + 1e3));
            var s = e.a;
            (n =
              5e3 > i - n || 5e3 > i - (n = s.length ? s[s.length - 1].end : t)
                ? null
                : Math.max(n, r)) &&
              (e.s(n),
              clearTimeout(e.j),
              (e.i = !1),
              e.c && e.c.disconnect(),
              e.h && e.h.disconnect()),
              m(e, performance.now() + 1e3);
          }, t - performance.now())),
          (e.v = t));
      }
      (_.prototype.getFirstConsistentlyInteractive = function () {
        var e = this;
        return new Promise(function (t) {
          (e.s = t),
            "complete" == document.readyState
              ? p(e)
              : window.addEventListener("load", function () {
                  p(e);
                });
        });
      }),
        (_.prototype.m = function (e) {
          this.f.set(e, performance.now());
        }),
        (_.prototype.l = function (e) {
          this.f.delete(e);
        }),
        (_.prototype.B = function () {
          m(this, performance.now() + 5e3);
        }),
        t.Object.defineProperties(_.prototype, {
          g: {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return [].concat(c(this.f.values()));
            },
          },
        });
      var v = {
        getFirstConsistentlyInteractive: function (e) {
          return (
            (e = e || {}),
            "PerformanceLongTaskTiming" in window
              ? new _(e).getFirstConsistentlyInteractive()
              : Promise.resolve(null)
          );
        },
      };
      e.exports ? (e.exports = v) : (window.ttiPolyfill = v);
    })();
  });
const gl = (function (e) {
    return (t, ...n) => (
      n.forEach((n) => {
        for (const r in n) {
          const i = Object.getOwnPropertyDescriptor(n, r);
          Object.defineProperty(t, r, Object.assign(i, e));
        }
      }),
      t
    );
  })({ enumerable: !0, configurable: !0, writeable: !1 }),
  yl = {
    AD_BUFFERING: "ad-buffering",
    AD_COMPLETE: "ad-complete",
    AD_CLICK: "ad-click",
    AD_SKIPPED: "ad-skipped",
    ALL_ADS_COMPLETED: "all-ads-completed",
    AD_ERROR: "ad-error",
    AD_STARTED: "ad-started",
    ADS_MANAGER_LOADED: "ads-manager-loaded",
    CONTENT_PAUSE_REQUESTED: "content-pause-requested",
    CONTENT_RESUME_REQUESTED: "content-resume-requested",
  };
function El(e, t) {
  const n = sn();
  let r, i, s, o, a;
  function u(e) {
    var s = new r.AdsRenderingSettings();
    (s.restoreCustomPlaybackStateOnAdBreakComplete = !0),
      (s.uiElements = []),
      (i = e.getAdsManager(t.videoPlayer, s)),
      n.fire(yl.ADS_MANAGER_LOADED),
      i.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v),
      i.addEventListener(r.AdEvent.Type.CONTENT_PAUSE_REQUESTED, c),
      i.addEventListener(r.AdEvent.Type.CONTENT_RESUME_REQUESTED, l),
      i.addEventListener(r.AdEvent.Type.AD_BUFFERING, d),
      i.addEventListener(r.AdEvent.Type.STARTED, h),
      i.addEventListener(r.AdEvent.Type.COMPLETE, f),
      i.addEventListener(r.AdEvent.Type.CLICK, _),
      i.addEventListener(r.AdEvent.Type.SKIPPED, p),
      i.addEventListener(r.AdEvent.Type.ALL_ADS_COMPLETED, m);
  }
  function c(e) {
    n.fire(yl.CONTENT_PAUSE_REQUESTED, e);
  }
  function l(e) {
    n.fire(yl.CONTENT_RESUME_REQUESTED, e);
  }
  function d(e) {
    n.fire(yl.AD_BUFFERING, e);
  }
  function h(e) {
    n.fire(yl.AD_STARTED, e);
  }
  function f(e) {
    n.fire(yl.AD_COMPLETE, e);
  }
  function _(e) {
    i.pause(), n.fire(yl.AD_CLICK, e);
  }
  function p(e) {
    n.fire(yl.AD_SKIPPED, e);
  }
  function m(e) {
    n.fire(yl.ALL_ADS_COMPLETED, e);
  }
  function v(e) {
    n.fire(yl.AD_ERROR, e.getError()), i && i.destroy();
  }
  const g = {
    start: (e, t) => (
      a.initialize(), i.init(e, t, r.ViewMode.NORMAL), i.start()
    ),
    stop: () => i.stop(),
    pause: () => i.pause(),
    play: () => i.resume(),
    skip: () => i.skip(),
    resize: (e, t, n) =>
      n
        ? i.resize(e, t, r.ViewMode.FULLSCREEN)
        : i.resize(e, t, r.ViewMode.NORMAL),
    destroy() {
      n.off(), i.destroy(), s.destroy(), a.destroy();
    },
    get volume() {
      return R(i.getVolume());
    },
    set volume(e) {
      i.setVolume(w(e));
    },
    get adsManager() {
      return i;
    },
    get adsLoader() {
      return s;
    },
    get remainingTime() {
      return i.getRemainingTime();
    },
    setContentComplete() {
      s.contentComplete();
    },
    on(e, t) {
      return n.on(e, t), this;
    },
    off(e, t) {
      return n.off(e, t), this;
    },
  };
  return (
    (function (e, t, n) {
      if (document.getElementById("vp-ima-sdk")) n();
      else {
        var r = document.createElement("script");
        (r.id = "vp-ima-sdk"),
          (r.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js"),
          (r.onreadystatechange = r.onload =
            () => {
              n && n();
            }),
          document.getElementsByTagName("body")[0].appendChild(r);
      }
    })(0, 0, function () {
      r = google.ima;
      let n = Le.iOS ? t.videoPlayer.videoElement : t.videoPlayer;
      (a = new r.AdDisplayContainer(e, n)),
        (s = new r.AdsLoader(a)),
        s.addEventListener(r.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, u),
        s.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v),
        (o = new r.AdsRequest()),
        t.adUrl && (o.adTagUrl = t.adUrl),
        (o.linearAdSlotWidth = t.width.linear),
        (o.linearAdSlotHeight = t.height.linear),
        (o.nonLinearAdSlotWidth = t.width.nonlinear),
        (o.nonLinearAdSlotHeight = t.height.nonlinear),
        s.requestAds(o);
    }),
    gl(this, g)
  );
}
function Tl(e, t, n, r) {
  if (!et(e)) return e;
  for (
    var i = -1, s = (t = Lt(t, e)).length, o = s - 1, a = e;
    null != a && ++i < s;

  ) {
    var u = Ct(t[i]),
      c = n;
    if (i != o) {
      var l = a[u];
      void 0 === (c = r ? r(l, u, a) : void 0) &&
        (c = et(l) ? l : Sn(t[i + 1]) ? [] : {});
    }
    ln(a, u, c), (a = a[u]);
  }
  return e;
}
function Sl(e, t) {
  return null != e && t in Object(e);
}
function bl(e, t) {
  return (function (e, t, n) {
    for (var r = -1, i = t.length, s = {}; ++r < i; ) {
      var o = t[r],
        a = Mt(e, o);
      n(0, o) && Tl(s, Lt(o, e), a);
    }
    return s;
  })(e, t, function (t, n) {
    return (function (e, t) {
      return (
        null != e &&
        (function (e, t, n) {
          for (var r = -1, i = (t = Lt(t, e)).length, s = !1; ++r < i; ) {
            var o = Ct(t[r]);
            if (!(s = null != e && n(e, o))) break;
            e = e[o];
          }
          return s || ++r != i
            ? s
            : !!(i = null == e ? 0 : e.length) &&
                bn(i) &&
                Sn(o, i) &&
                (Fe(e) || mn(e));
        })(e, t, Sl)
      );
    })(e, n);
  });
}
var Al = He ? He.isConcatSpreadable : void 0;
function Il(e) {
  return Fe(e) || mn(e) || !!(Al && e && e[Al]);
}
function wl(e) {
  return null != e && e.length
    ? (function e(t, n, r, i, s) {
        var o = -1,
          a = t.length;
        for (r || (r = Il), s || (s = []); ++o < a; ) {
          var u = t[o];
          n > 0 && r(u)
            ? n > 1
              ? e(u, n - 1, r, i, s)
              : er(s, u)
            : i || (s[s.length] = u);
        }
        return s;
      })(e, 1)
    : [];
}
var Rl,
  kl,
  Pl,
  Dl,
  Ol = (function (e) {
    return Vr(Ur(e, void 0, wl), e + "");
  })(function (e, t) {
    return null == e ? {} : bl(e, t);
  }),
  Ll = function (e, t) {
    return {
      name: e,
      value: void 0 === t ? -1 : t,
      delta: 0,
      entries: [],
      id: "v2-"
        .concat(Date.now(), "-")
        .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
    };
  },
  Cl = function (e, t) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
        var n = new PerformanceObserver(function (e) {
          return e.getEntries().map(t);
        });
        return n.observe({ type: e, buffered: !0 }), n;
      }
    } catch (e) {}
  },
  Ml = function (e, t) {
    var n = function n(r) {
      ("pagehide" !== r.type && "hidden" !== document.visibilityState) ||
        (e(r),
        t &&
          (removeEventListener("visibilitychange", n, !0),
          removeEventListener("pagehide", n, !0)));
    };
    addEventListener("visibilitychange", n, !0),
      addEventListener("pagehide", n, !0);
  },
  Nl = function (e) {
    addEventListener(
      "pageshow",
      function (t) {
        t.persisted && e(t);
      },
      !0
    );
  },
  xl = function (e, t, n) {
    var r;
    return function (i) {
      t.value >= 0 &&
        (i || n) &&
        ((t.delta = t.value - (r || 0)),
        (t.delta || void 0 === r) && ((r = t.value), e(t)));
    };
  },
  Ul = -1,
  Fl = function () {
    return "hidden" === document.visibilityState ? 0 : 1 / 0;
  },
  jl = function () {
    Ml(function (e) {
      var t = e.timeStamp;
      Ul = t;
    }, !0);
  },
  Bl = function () {
    return (
      Ul < 0 &&
        ((Ul = Fl()),
        jl(),
        Nl(function () {
          setTimeout(function () {
            (Ul = Fl()), jl();
          }, 0);
        })),
      {
        get firstHiddenTime() {
          return Ul;
        },
      }
    );
  },
  Vl = function (e, t) {
    var n,
      r = Bl(),
      i = Ll("FCP"),
      s = function (e) {
        "first-contentful-paint" === e.name &&
          (a && a.disconnect(),
          e.startTime < r.firstHiddenTime &&
            ((i.value = e.startTime), i.entries.push(e), n(!0)));
      },
      o =
        window.performance &&
        performance.getEntriesByName &&
        performance.getEntriesByName("first-contentful-paint")[0],
      a = o ? null : Cl("paint", s);
    (o || a) &&
      ((n = xl(e, i, t)),
      o && s(o),
      Nl(function (r) {
        (i = Ll("FCP")),
          (n = xl(e, i, t)),
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              (i.value = performance.now() - r.timeStamp), n(!0);
            });
          });
      }));
  },
  Hl = !1,
  Xl = -1,
  ql = function (e, t) {
    Hl ||
      (Vl(function (e) {
        Xl = e.value;
      }),
      (Hl = !0));
    var n,
      r = function (t) {
        Xl > -1 && e(t);
      },
      i = Ll("CLS", 0),
      s = 0,
      o = [],
      a = function (e) {
        if (!e.hadRecentInput) {
          var t = o[0],
            r = o[o.length - 1];
          s &&
          e.startTime - r.startTime < 1e3 &&
          e.startTime - t.startTime < 5e3
            ? ((s += e.value), o.push(e))
            : ((s = e.value), (o = [e])),
            s > i.value && ((i.value = s), (i.entries = o), n());
        }
      },
      u = Cl("layout-shift", a);
    u &&
      ((n = xl(r, i, t)),
      Ml(function () {
        u.takeRecords().map(a), n(!0);
      }),
      Nl(function () {
        (s = 0), (Xl = -1), (i = Ll("CLS", 0)), (n = xl(r, i, t));
      }));
  },
  Gl = { passive: !0, capture: !0 },
  Wl = new Date(),
  Kl = function (e, t) {
    Rl ||
      ((Rl = t), (kl = e), (Pl = new Date()), zl(removeEventListener), Yl());
  },
  Yl = function () {
    if (kl >= 0 && kl < Pl - Wl) {
      var e = {
        entryType: "first-input",
        name: Rl.type,
        target: Rl.target,
        cancelable: Rl.cancelable,
        startTime: Rl.timeStamp,
        processingStart: Rl.timeStamp + kl,
      };
      Dl.forEach(function (t) {
        t(e);
      }),
        (Dl = []);
    }
  },
  $l = function (e) {
    if (e.cancelable) {
      var t =
        (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
      "pointerdown" == e.type
        ? (function (e, t) {
            var n = function () {
                Kl(e, t), i();
              },
              r = function () {
                i();
              },
              i = function () {
                removeEventListener("pointerup", n, Gl),
                  removeEventListener("pointercancel", r, Gl);
              };
            addEventListener("pointerup", n, Gl),
              addEventListener("pointercancel", r, Gl);
          })(t, e)
        : Kl(t, e);
    }
  },
  zl = function (e) {
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) {
      return e(t, $l, Gl);
    });
  },
  Ql = function (e, t) {
    var n,
      r = Bl(),
      i = Ll("FID"),
      s = function (e) {
        e.startTime < r.firstHiddenTime &&
          ((i.value = e.processingStart - e.startTime),
          i.entries.push(e),
          n(!0));
      },
      o = Cl("first-input", s);
    (n = xl(e, i, t)),
      o &&
        Ml(function () {
          o.takeRecords().map(s), o.disconnect();
        }, !0),
      o &&
        Nl(function () {
          var r;
          (i = Ll("FID")),
            (n = xl(e, i, t)),
            (Dl = []),
            (kl = -1),
            (Rl = null),
            zl(addEventListener),
            (r = s),
            Dl.push(r),
            Yl();
        });
  },
  Jl = {},
  Zl = function (e, t) {
    var n,
      r = Bl(),
      i = Ll("LCP"),
      s = function (e) {
        var t = e.startTime;
        t < r.firstHiddenTime && ((i.value = t), i.entries.push(e), n());
      },
      o = Cl("largest-contentful-paint", s);
    if (o) {
      n = xl(e, i, t);
      var a = function () {
        Jl[i.id] ||
          (o.takeRecords().map(s), o.disconnect(), (Jl[i.id] = !0), n(!0));
      };
      ["keydown", "click"].forEach(function (e) {
        addEventListener(e, a, { once: !0, capture: !0 });
      }),
        Ml(a, !0),
        Nl(function (r) {
          (i = Ll("LCP")),
            (n = xl(e, i, t)),
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                (i.value = performance.now() - r.timeStamp),
                  (Jl[i.id] = !0),
                  n(!0);
              });
            });
        });
    }
  },
  ed = (function (e) {
    return function (t) {
      return null == e ? void 0 : e[t];
    };
  })({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }),
  td = /[&<>"']/g,
  nd = RegExp(td.source);
function rd(e) {
  return (e = Ot(e)) && nd.test(e) ? e.replace(td, ed) : e;
}
var id,
  sd,
  od,
  ad,
  ud,
  cd,
  ld,
  dd = {},
  hd = [],
  fd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function _d(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function pd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function md(e, t, n) {
  var r,
    i,
    s,
    o = {};
  for (s in t)
    "key" == s ? (r = t[s]) : "ref" == s ? (i = t[s]) : (o[s] = t[s]);
  if (
    (arguments.length > 2 &&
      (o.children = arguments.length > 3 ? id.call(arguments, 2) : n),
    "function" == typeof e && null != e.defaultProps)
  )
    for (s in e.defaultProps) void 0 === o[s] && (o[s] = e.defaultProps[s]);
  return vd(e, o, r, i, null);
}
function vd(e, t, n, r, i) {
  var s = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == i ? ++od : i,
  };
  return null == i && null != sd.vnode && sd.vnode(s), s;
}
function gd(e) {
  return e.children;
}
function yd(e, t) {
  (this.props = e), (this.context = t);
}
function Ed(e, t) {
  if (null == t) return e.__ ? Ed(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
  return "function" == typeof e.type ? Ed(e) : null;
}
function Td(e) {
  var t, n;
  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Td(e);
  }
}
function Sd(e) {
  ((!e.__d && (e.__d = !0) && ad.push(e) && !bd.__r++) ||
    cd !== sd.debounceRendering) &&
    ((cd = sd.debounceRendering) || ud)(bd);
}
function bd() {
  for (var e; (bd.__r = ad.length); )
    (e = ad.sort(function (e, t) {
      return e.__v.__b - t.__v.__b;
    })),
      (ad = []),
      e.some(function (e) {
        var t, n, r, i, s, o;
        e.__d &&
          ((s = (i = (t = e).__v).__e),
          (o = t.__P) &&
            ((n = []),
            ((r = _d({}, i)).__v = i.__v + 1),
            Ld(
              o,
              i,
              r,
              t.__n,
              void 0 !== o.ownerSVGElement,
              null != i.__h ? [s] : null,
              n,
              null == s ? Ed(i) : s,
              i.__h
            ),
            Cd(n, i),
            i.__e != s && Td(i)));
      });
}
function Ad(e, t, n, r, i, s, o, a, u, c) {
  var l,
    d,
    h,
    f,
    _,
    p,
    m,
    v = (r && r.__k) || hd,
    g = v.length;
  for (n.__k = [], l = 0; l < t.length; l++)
    if (
      null !=
      (f = n.__k[l] =
        null == (f = t[l]) || "boolean" == typeof f
          ? null
          : "string" == typeof f || "number" == typeof f || "bigint" == typeof f
          ? vd(null, f, null, null, f)
          : Array.isArray(f)
          ? vd(gd, { children: f }, null, null, null)
          : f.__b > 0
          ? vd(f.type, f.props, f.key, null, f.__v)
          : f)
    ) {
      if (
        ((f.__ = n),
        (f.__b = n.__b + 1),
        null === (h = v[l]) || (h && f.key == h.key && f.type === h.type))
      )
        v[l] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((h = v[d]) && f.key == h.key && f.type === h.type) {
            v[d] = void 0;
            break;
          }
          h = null;
        }
      Ld(e, f, (h = h || dd), i, s, o, a, u, c),
        (_ = f.__e),
        (d = f.ref) &&
          h.ref != d &&
          (m || (m = []),
          h.ref && m.push(h.ref, null, f),
          m.push(d, f.__c || _, f)),
        null != _
          ? (null == p && (p = _),
            "function" == typeof f.type && f.__k === h.__k
              ? (f.__d = u = Id(f, u, e))
              : (u = Rd(e, f, h, v, _, u)),
            "function" == typeof n.type && (n.__d = u))
          : u && h.__e == u && u.parentNode != e && (u = Ed(h));
    }
  for (n.__e = p, l = g; l--; )
    null != v[l] &&
      ("function" == typeof n.type &&
        null != v[l].__e &&
        v[l].__e == n.__d &&
        (n.__d = Ed(r, l + 1)),
      xd(v[l], v[l]));
  if (m) for (l = 0; l < m.length; l++) Nd(m[l], m[++l], m[++l]);
}
function Id(e, t, n) {
  for (var r, i = e.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) &&
      ((r.__ = e),
      (t =
        "function" == typeof r.type ? Id(r, t, n) : Rd(n, r, r, i, r.__e, t)));
  return t;
}
function wd(e, t) {
  return (
    (t = t || []),
    null == e ||
      "boolean" == typeof e ||
      (Array.isArray(e)
        ? e.some(function (e) {
            wd(e, t);
          })
        : t.push(e)),
    t
  );
}
function Rd(e, t, n, r, i, s) {
  var o, a, u;
  if (void 0 !== t.__d) (o = t.__d), (t.__d = void 0);
  else if (null == n || i != s || null == i.parentNode)
    e: if (null == s || s.parentNode !== e) e.appendChild(i), (o = null);
    else {
      for (a = s, u = 0; (a = a.nextSibling) && u < r.length; u += 2)
        if (a == i) break e;
      e.insertBefore(i, s), (o = s);
    }
  return void 0 !== o ? o : i.nextSibling;
}
function kd(e, t, n) {
  "-" === t[0]
    ? e.setProperty(t, n)
    : (e[t] =
        null == n ? "" : "number" != typeof n || fd.test(t) ? n : n + "px");
}
function Pd(e, t, n, r, i) {
  var s;
  e: if ("style" === t)
    if ("string" == typeof n) e.style.cssText = n;
    else {
      if (("string" == typeof r && (e.style.cssText = r = ""), r))
        for (t in r) (n && t in n) || kd(e.style, t, "");
      if (n) for (t in n) (r && n[t] === r[t]) || kd(e.style, t, n[t]);
    }
  else if ("o" === t[0] && "n" === t[1])
    (s = t !== (t = t.replace(/Capture$/, ""))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + s] = n),
      n
        ? r || e.addEventListener(t, s ? Od : Dd, s)
        : e.removeEventListener(t, s ? Od : Dd, s);
  else if ("dangerouslySetInnerHTML" !== t) {
    if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
    else if (
      "href" !== t &&
      "list" !== t &&
      "form" !== t &&
      "tabIndex" !== t &&
      "download" !== t &&
      t in e
    )
      try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (e) {}
    "function" == typeof n ||
      (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1]))
        ? e.setAttribute(t, n)
        : e.removeAttribute(t));
  }
}
function Dd(e) {
  this.l[e.type + !1](sd.event ? sd.event(e) : e);
}
function Od(e) {
  this.l[e.type + !0](sd.event ? sd.event(e) : e);
}
function Ld(e, t, n, r, i, s, o, a, u) {
  var c,
    l,
    d,
    h,
    f,
    _,
    p,
    m,
    v,
    g,
    y,
    E = t.type;
  if (void 0 !== t.constructor) return null;
  null != n.__h &&
    ((u = n.__h), (a = t.__e = n.__e), (t.__h = null), (s = [a])),
    (c = sd.__b) && c(t);
  try {
    e: if ("function" == typeof E) {
      if (
        ((m = t.props),
        (v = (c = E.contextType) && r[c.__c]),
        (g = c ? (v ? v.props.value : c.__) : r),
        n.__c
          ? (p = (l = t.__c = n.__c).__ = l.__E)
          : ("prototype" in E && E.prototype.render
              ? (t.__c = l = new E(m, g))
              : ((t.__c = l = new yd(m, g)),
                (l.constructor = E),
                (l.render = Ud)),
            v && v.sub(l),
            (l.props = m),
            l.state || (l.state = {}),
            (l.context = g),
            (l.__n = r),
            (d = l.__d = !0),
            (l.__h = [])),
        null == l.__s && (l.__s = l.state),
        null != E.getDerivedStateFromProps &&
          (l.__s == l.state && (l.__s = _d({}, l.__s)),
          _d(l.__s, E.getDerivedStateFromProps(m, l.__s))),
        (h = l.props),
        (f = l.state),
        d)
      )
        null == E.getDerivedStateFromProps &&
          null != l.componentWillMount &&
          l.componentWillMount(),
          null != l.componentDidMount && l.__h.push(l.componentDidMount);
      else {
        if (
          (null == E.getDerivedStateFromProps &&
            m !== h &&
            null != l.componentWillReceiveProps &&
            l.componentWillReceiveProps(m, g),
          (!l.__e &&
            null != l.shouldComponentUpdate &&
            !1 === l.shouldComponentUpdate(m, l.__s, g)) ||
            t.__v === n.__v)
        ) {
          (l.props = m),
            (l.state = l.__s),
            t.__v !== n.__v && (l.__d = !1),
            (l.__v = t),
            (t.__e = n.__e),
            (t.__k = n.__k),
            t.__k.forEach(function (e) {
              e && (e.__ = t);
            }),
            l.__h.length && o.push(l);
          break e;
        }
        null != l.componentWillUpdate && l.componentWillUpdate(m, l.__s, g),
          null != l.componentDidUpdate &&
            l.__h.push(function () {
              l.componentDidUpdate(h, f, _);
            });
      }
      (l.context = g),
        (l.props = m),
        (l.state = l.__s),
        (c = sd.__r) && c(t),
        (l.__d = !1),
        (l.__v = t),
        (l.__P = e),
        (c = l.render(l.props, l.state, l.context)),
        (l.state = l.__s),
        null != l.getChildContext && (r = _d(_d({}, r), l.getChildContext())),
        d ||
          null == l.getSnapshotBeforeUpdate ||
          (_ = l.getSnapshotBeforeUpdate(h, f)),
        (y =
          null != c && c.type === gd && null == c.key ? c.props.children : c),
        Ad(e, Array.isArray(y) ? y : [y], t, n, r, i, s, o, a, u),
        (l.base = t.__e),
        (t.__h = null),
        l.__h.length && o.push(l),
        p && (l.__E = l.__ = null),
        (l.__e = !1);
    } else
      null == s && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = Md(n.__e, t, n, r, i, s, o, u));
    (c = sd.diffed) && c(t);
  } catch (e) {
    (t.__v = null),
      (u || null != s) &&
        ((t.__e = a), (t.__h = !!u), (s[s.indexOf(a)] = null)),
      sd.__e(e, t, n);
  }
}
function Cd(e, t) {
  sd.__c && sd.__c(t, e),
    e.some(function (t) {
      try {
        (e = t.__h),
          (t.__h = []),
          e.some(function (e) {
            e.call(t);
          });
      } catch (e) {
        sd.__e(e, t.__v);
      }
    });
}
function Md(e, t, n, r, i, s, o, a) {
  var u,
    c,
    l,
    d = n.props,
    h = t.props,
    f = t.type,
    _ = 0;
  if (("svg" === f && (i = !0), null != s))
    for (; _ < s.length; _++)
      if (
        (u = s[_]) &&
        "setAttribute" in u == !!f &&
        (f ? u.localName === f : 3 === u.nodeType)
      ) {
        (e = u), (s[_] = null);
        break;
      }
  if (null == e) {
    if (null === f) return document.createTextNode(h);
    (e = i
      ? document.createElementNS("http://www.w3.org/2000/svg", f)
      : document.createElement(f, h.is && h)),
      (s = null),
      (a = !1);
  }
  if (null === f) d === h || (a && e.data === h) || (e.data = h);
  else {
    if (
      ((s = s && id.call(e.childNodes)),
      (c = (d = n.props || dd).dangerouslySetInnerHTML),
      (l = h.dangerouslySetInnerHTML),
      !a)
    ) {
      if (null != s)
        for (d = {}, _ = 0; _ < e.attributes.length; _++)
          d[e.attributes[_].name] = e.attributes[_].value;
      (l || c) &&
        ((l && ((c && l.__html == c.__html) || l.__html === e.innerHTML)) ||
          (e.innerHTML = (l && l.__html) || ""));
    }
    if (
      ((function (e, t, n, r, i) {
        var s;
        for (s in n)
          "children" === s || "key" === s || s in t || Pd(e, s, null, n[s], r);
        for (s in t)
          (i && "function" != typeof t[s]) ||
            "children" === s ||
            "key" === s ||
            "value" === s ||
            "checked" === s ||
            n[s] === t[s] ||
            Pd(e, s, t[s], n[s], r);
      })(e, h, d, i, a),
      l)
    )
      t.__k = [];
    else if (
      ((_ = t.props.children),
      Ad(
        e,
        Array.isArray(_) ? _ : [_],
        t,
        n,
        r,
        i && "foreignObject" !== f,
        s,
        o,
        s ? s[0] : n.__k && Ed(n, 0),
        a
      ),
      null != s)
    )
      for (_ = s.length; _--; ) null != s[_] && pd(s[_]);
    a ||
      ("value" in h &&
        void 0 !== (_ = h.value) &&
        (_ !== e.value ||
          ("progress" === f && !_) ||
          ("option" === f && _ !== d.value)) &&
        Pd(e, "value", _, d.value, !1),
      "checked" in h &&
        void 0 !== (_ = h.checked) &&
        _ !== e.checked &&
        Pd(e, "checked", _, d.checked, !1));
  }
  return e;
}
function Nd(e, t, n) {
  try {
    "function" == typeof e ? e(t) : (e.current = t);
  } catch (e) {
    sd.__e(e, n);
  }
}
function xd(e, t, n) {
  var r, i;
  if (
    (sd.unmount && sd.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || Nd(r, null, t)),
    null != (r = e.__c))
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (e) {
        sd.__e(e, t);
      }
    r.base = r.__P = null;
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++)
      r[i] && xd(r[i], t, "function" != typeof e.type);
  n || null == e.__e || pd(e.__e), (e.__e = e.__d = void 0);
}
function Ud(e, t, n) {
  return this.constructor(e, n);
}
function Fd(e, t, n) {
  var r, i, s;
  sd.__ && sd.__(e, t),
    (i = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
    (s = []),
    Ld(
      t,
      (e = ((!r && n) || t).__k = md(gd, null, [e])),
      i || dd,
      dd,
      void 0 !== t.ownerSVGElement,
      !r && n ? [n] : i ? null : t.firstChild ? id.call(t.childNodes) : null,
      s,
      !r && n ? n : i ? i.__e : t.firstChild,
      r
    ),
    Cd(s, e);
}
function jd(e, t) {
  Fd(e, t, jd);
}
function Bd(e, t, n) {
  var r,
    i,
    s,
    o = _d({}, e.props);
  for (s in t)
    "key" == s ? (r = t[s]) : "ref" == s ? (i = t[s]) : (o[s] = t[s]);
  return (
    arguments.length > 2 &&
      (o.children = arguments.length > 3 ? id.call(arguments, 2) : n),
    vd(e.type, o, r || e.key, i || e.ref, null)
  );
}
function Vd(e, t) {
  var n = {
    __c: (t = "__cC" + ld++),
    __: e,
    Consumer: function (e, t) {
      return e.children(t);
    },
    Provider: function (e) {
      var n, r;
      return (
        this.getChildContext ||
          ((n = []),
          ((r = {})[t] = this),
          (this.getChildContext = function () {
            return r;
          }),
          (this.shouldComponentUpdate = function (e) {
            this.props.value !== e.value && n.some(Sd);
          }),
          (this.sub = function (e) {
            n.push(e);
            var t = e.componentWillUnmount;
            e.componentWillUnmount = function () {
              n.splice(n.indexOf(e), 1), t && t.call(e);
            };
          })),
        e.children
      );
    },
  };
  return (n.Provider.__ = n.Consumer.contextType = n);
}
(id = hd.slice),
  (sd = {
    __e: function (e, t) {
      for (var n, r, i; (t = t.__); )
        if ((n = t.__c) && !n.__)
          try {
            if (
              ((r = n.constructor) &&
                null != r.getDerivedStateFromError &&
                (n.setState(r.getDerivedStateFromError(e)), (i = n.__d)),
              null != n.componentDidCatch &&
                (n.componentDidCatch(e), (i = n.__d)),
              i)
            )
              return (n.__E = n);
          } catch (t) {
            e = t;
          }
      throw e;
    },
  }),
  (od = 0),
  (yd.prototype.setState = function (e, t) {
    var n;
    (n =
      null != this.__s && this.__s !== this.state
        ? this.__s
        : (this.__s = _d({}, this.state))),
      "function" == typeof e && (e = e(_d({}, n), this.props)),
      e && _d(n, e),
      null != e && this.__v && (t && this.__h.push(t), Sd(this));
  }),
  (yd.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), Sd(this));
  }),
  (yd.prototype.render = gd),
  (ad = []),
  (ud =
    "function" == typeof Promise
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (bd.__r = 0),
  (ld = 0);
var Hd,
  Xd,
  qd,
  Gd = 0,
  Wd = [],
  Kd = sd.__b,
  Yd = sd.__r,
  $d = sd.diffed,
  zd = sd.__c,
  Qd = sd.unmount;
function Jd(e, t) {
  sd.__h && sd.__h(Xd, e, Gd || t), (Gd = 0);
  var n = Xd.__H || (Xd.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Zd(e) {
  return (Gd = 1), eh(ph, e);
}
function eh(e, t, n) {
  var r = Jd(Hd++, 2);
  return (
    (r.t = e),
    r.__c ||
      ((r.__ = [
        n ? n(t) : ph(void 0, t),
        function (e) {
          var t = r.t(r.__[0], e);
          r.__[0] !== t && ((r.__ = [t, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = Xd)),
    r.__
  );
}
function th(e, t) {
  var n = Jd(Hd++, 3);
  !sd.__s && _h(n.__H, t) && ((n.__ = e), (n.__H = t), Xd.__H.__h.push(n));
}
function nh(e, t) {
  var n = Jd(Hd++, 4);
  !sd.__s && _h(n.__H, t) && ((n.__ = e), (n.__H = t), Xd.__h.push(n));
}
function rh(e) {
  return (
    (Gd = 5),
    sh(function () {
      return { current: e };
    }, [])
  );
}
function ih(e, t, n) {
  (Gd = 6),
    nh(
      function () {
        "function" == typeof e ? e(t()) : e && (e.current = t());
      },
      null == n ? n : n.concat(e)
    );
}
function sh(e, t) {
  var n = Jd(Hd++, 7);
  return _h(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
}
function oh(e, t) {
  return (
    (Gd = 8),
    sh(function () {
      return e;
    }, t)
  );
}
function ah(e) {
  var t = Xd.context[e.__c],
    n = Jd(Hd++, 9);
  return (
    (n.c = e),
    t ? (null == n.__ && ((n.__ = !0), t.sub(Xd)), t.props.value) : e.__
  );
}
function uh(e, t) {
  sd.useDebugValue && sd.useDebugValue(t ? t(e) : e);
}
function ch(e) {
  var t = Jd(Hd++, 10),
    n = Zd();
  return (
    (t.__ = e),
    Xd.componentDidCatch ||
      (Xd.componentDidCatch = function (e) {
        t.__ && t.__(e), n[1](e);
      }),
    [
      n[0],
      function () {
        n[1](void 0);
      },
    ]
  );
}
function lh() {
  for (var e; (e = Wd.shift()); )
    if (e.__P)
      try {
        e.__H.__h.forEach(hh), e.__H.__h.forEach(fh), (e.__H.__h = []);
      } catch (Nl) {
        (e.__H.__h = []), sd.__e(Nl, e.__v);
      }
}
(sd.__b = function (e) {
  (Xd = null), Kd && Kd(e);
}),
  (sd.__r = function (e) {
    Yd && Yd(e), (Hd = 0);
    var t = (Xd = e.__c).__H;
    t && (t.__h.forEach(hh), t.__h.forEach(fh), (t.__h = []));
  }),
  (sd.diffed = function (e) {
    $d && $d(e);
    var t = e.__c;
    t &&
      t.__H &&
      t.__H.__h.length &&
      ((1 !== Wd.push(t) && qd === sd.requestAnimationFrame) ||
        (
          (qd = sd.requestAnimationFrame) ||
          function (e) {
            var t,
              n = function () {
                clearTimeout(r), dh && cancelAnimationFrame(t), setTimeout(e);
              },
              r = setTimeout(n, 100);
            dh && (t = requestAnimationFrame(n));
          }
        )(lh)),
      (Xd = null);
  }),
  (sd.__c = function (e, t) {
    t.some(function (e) {
      try {
        e.__h.forEach(hh),
          (e.__h = e.__h.filter(function (e) {
            return !e.__ || fh(e);
          }));
      } catch (Ll) {
        t.some(function (e) {
          e.__h && (e.__h = []);
        }),
          (t = []),
          sd.__e(Ll, e.__v);
      }
    }),
      zd && zd(e, t);
  }),
  (sd.unmount = function (e) {
    Qd && Qd(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (e) {
        try {
          hh(e);
        } catch (e) {
          t = e;
        }
      }),
      t && sd.__e(t, n.__v));
  });
var dh = "function" == typeof requestAnimationFrame;
function hh(e) {
  var t = Xd,
    n = e.__c;
  "function" == typeof n && ((e.__c = void 0), n()), (Xd = t);
}
function fh(e) {
  var t = Xd;
  (e.__c = e.__()), (Xd = t);
}
function _h(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (t, n) {
      return t !== e[n];
    })
  );
}
function ph(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function mh(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function vh(e, t) {
  for (var n in e) if ("__source" !== n && !(n in t)) return !0;
  for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
  return !1;
}
function gh(e) {
  this.props = e;
}
((gh.prototype = new yd()).isPureReactComponent = !0),
  (gh.prototype.shouldComponentUpdate = function (e, t) {
    return vh(this.props, e) || vh(this.state, t);
  });
var yh = sd.__b;
sd.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    yh && yh(e);
};
var Eh =
  ("undefined" != typeof Symbol &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function Th(e) {
  function t(t, n) {
    var r = mh({}, t);
    return (
      delete r.ref,
      e(
        r,
        (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null
      )
    );
  }
  return (
    (t.$$typeof = Eh),
    (t.render = t),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
    t
  );
}
var Sh = function (e, t) {
    return null == e ? null : wd(wd(e).map(t));
  },
  bh = {
    map: Sh,
    forEach: Sh,
    count: function (e) {
      return e ? wd(e).length : 0;
    },
    only: function (e) {
      var t = wd(e);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: wd,
  },
  Ah = sd.__e;
sd.__e = function (e, t, n) {
  if (e.then)
    for (var r, i = t; (i = i.__); )
      if ((r = i.__c) && r.__c)
        return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
  Ah(e, t, n);
};
var Ih = sd.unmount;
function wh() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function Rh(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function kh() {
  (this.u = null), (this.o = null);
}
(sd.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Ih && Ih(e);
}),
  ((wh.prototype = new yd()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = Rh(r.__v),
      s = !1,
      o = function () {
        s || ((s = !0), (n.__R = null), i ? i(a) : a());
      };
    n.__R = o;
    var a = function () {
        if (!--r.__u) {
          if (r.state.__e) {
            var e = r.state.__e;
            r.__v.__k[0] = (function e(t, n, r) {
              return (
                t &&
                  ((t.__v = null),
                  (t.__k =
                    t.__k &&
                    t.__k.map(function (t) {
                      return e(t, n, r);
                    })),
                  t.__c &&
                    t.__c.__P === n &&
                    (t.__e && r.insertBefore(t.__e, t.__d),
                    (t.__c.__e = !0),
                    (t.__c.__P = r))),
                t
              );
            })(e, e.__c.__P, e.__c.__O);
          }
          var t;
          for (r.setState({ __e: (r.__b = null) }); (t = r.t.pop()); )
            t.forceUpdate();
        }
      },
      u = !0 === t.__h;
    r.__u++ || u || r.setState({ __e: (r.__b = r.__v.__k[0]) }), e.then(o, o);
  }),
  (wh.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (wh.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = (function e(t, n, r) {
          return (
            t &&
              (t.__c &&
                t.__c.__H &&
                (t.__c.__H.__.forEach(function (e) {
                  "function" == typeof e.__c && e.__c();
                }),
                (t.__c.__H = null)),
              null != (t = mh({}, t)).__c &&
                (t.__c.__P === r && (t.__c.__P = n), (t.__c = null)),
              (t.__k =
                t.__k &&
                t.__k.map(function (t) {
                  return e(t, n, r);
                }))),
            t
          );
        })(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var i = t.__e && md(gd, null, e.fallback);
    return i && (i.__h = null), [md(gd, null, t.__e ? null : e.children), i];
  });
var Ph = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
function Dh(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function Oh(e) {
  var t = this,
    n = e.i;
  (t.componentWillUnmount = function () {
    Fd(null, t.l), (t.l = null), (t.i = null);
  }),
    t.i && t.i !== n && t.componentWillUnmount(),
    e.__v
      ? (t.l ||
          ((t.i = n),
          (t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (e) {
              this.childNodes.push(e), t.i.appendChild(e);
            },
            insertBefore: function (e, n) {
              this.childNodes.push(e), t.i.appendChild(e);
            },
            removeChild: function (e) {
              this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
                t.i.removeChild(e);
            },
          })),
        Fd(md(Dh, { context: t.context }, e.__v), t.l))
      : t.l && t.componentWillUnmount();
}
function Lh(e, t) {
  return md(Oh, { __v: e, i: t });
}
((kh.prototype = new yd()).__e = function (e) {
  var t = this,
    n = Rh(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (i) {
      var s = function () {
        t.props.revealOrder ? (r.push(i), Ph(t, e, r)) : i();
      };
      n ? n(s) : s();
    }
  );
}),
  (kh.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = wd(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (kh.prototype.componentDidUpdate = kh.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        Ph(e, n, t);
      });
    });
var Ch =
    ("undefined" != typeof Symbol &&
      Symbol.for &&
      Symbol.for("react.element")) ||
    60103,
  Mh =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Nh = "undefined" != typeof document,
  xh = function (e) {
    return (
      "undefined" != typeof Symbol && "symbol" == typeof Symbol()
        ? /fil|che|rad/i
        : /fil|che|ra/i
    ).test(e);
  };
(yd.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(yd.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var Uh = sd.event;
function Fh() {}
function jh() {
  return this.cancelBubble;
}
function Bh() {
  return this.defaultPrevented;
}
sd.event = function (e) {
  return (
    Uh && (e = Uh(e)),
    (e.persist = Fh),
    (e.isPropagationStopped = jh),
    (e.isDefaultPrevented = Bh),
    (e.nativeEvent = e)
  );
};
var Vh,
  Hh = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Xh = sd.vnode;
sd.vnode = function (e) {
  var t = e.type,
    n = e.props,
    r = n;
  if ("string" == typeof t) {
    var i = -1 === t.indexOf("-");
    for (var s in ((r = {}), n)) {
      var o = n[s];
      (Nh && "children" === s && "noscript" === t) ||
        ("value" === s && "defaultValue" in n && null == o) ||
        ("defaultValue" === s && "value" in n && null == n.value
          ? (s = "value")
          : "download" === s && !0 === o
          ? (o = "")
          : /ondoubleclick/i.test(s)
          ? (s = "ondblclick")
          : /^onchange(textarea|input)/i.test(s + t) && !xh(n.type)
          ? (s = "oninput")
          : /^onfocus$/i.test(s)
          ? (s = "onfocusin")
          : /^onblur$/i.test(s)
          ? (s = "onfocusout")
          : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)
          ? (s = s.toLowerCase())
          : i && Mh.test(s)
          ? (s = s.replace(/[A-Z0-9]/, "-$&").toLowerCase())
          : null === o && (o = void 0),
        (r[s] = o));
    }
    "select" == t &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = wd(n.children).forEach(function (e) {
        e.props.selected = -1 != r.value.indexOf(e.props.value);
      })),
      "select" == t &&
        null != r.defaultValue &&
        (r.value = wd(n.children).forEach(function (e) {
          e.props.selected = r.multiple
            ? -1 != r.defaultValue.indexOf(e.props.value)
            : r.defaultValue == e.props.value;
        })),
      (e.props = r),
      n.class != n.className &&
        ((Hh.enumerable = "className" in n),
        null != n.className && (r.class = n.className),
        Object.defineProperty(r, "className", Hh));
  }
  (e.$$typeof = Ch), Xh && Xh(e);
};
var qh = sd.__r;
function Gh(e) {
  return !!e && e.$$typeof === Ch;
}
sd.__r = function (e) {
  qh && qh(e), (Vh = e.__c);
};
var Wh = {
  useState: Zd,
  useReducer: eh,
  useEffect: th,
  useLayoutEffect: nh,
  useRef: rh,
  useImperativeHandle: ih,
  useMemo: sh,
  useCallback: oh,
  useContext: ah,
  useDebugValue: uh,
  version: "17.0.2",
  Children: bh,
  render: function (e, t, n) {
    return (
      null == t.__k && (t.textContent = ""),
      Fd(e, t),
      "function" == typeof n && n(),
      e ? e.__c : null
    );
  },
  hydrate: function (e, t, n) {
    return jd(e, t), "function" == typeof n && n(), e ? e.__c : null;
  },
  unmountComponentAtNode: function (e) {
    return !!e.__k && (Fd(null, e), !0);
  },
  createPortal: Lh,
  createElement: md,
  createContext: Vd,
  createFactory: function (e) {
    return md.bind(null, e);
  },
  cloneElement: function (e) {
    return Gh(e) ? Bd.apply(null, arguments) : e;
  },
  createRef: function () {
    return { current: null };
  },
  Fragment: gd,
  isValidElement: Gh,
  findDOMNode: function (e) {
    return (e && (e.base || (1 === e.nodeType && e))) || null;
  },
  Component: yd,
  PureComponent: gh,
  memo: function (e, t) {
    function n(e) {
      var n = this.props.ref,
        r = n == e.ref;
      return (
        !r && n && (n.call ? n(null) : (n.current = null)),
        t ? !t(this.props, e) || !r : vh(this.props, e)
      );
    }
    function r(t) {
      return (this.shouldComponentUpdate = n), md(e, t);
    }
    return (
      (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (r.prototype.isReactComponent = !0),
      (r.__f = !0),
      r
    );
  },
  forwardRef: Th,
  flushSync: function (e, t) {
    return e(t);
  },
  unstable_batchedUpdates: function (e, t) {
    return e(t);
  },
  StrictMode: gd,
  Suspense: wh,
  SuspenseList: kh,
  lazy: function (e) {
    var t, n, r;
    function i(i) {
      if (
        (t ||
          (t = e()).then(
            function (e) {
              n = e.default || e;
            },
            function (e) {
              r = e;
            }
          ),
        r)
      )
        throw r;
      if (!n) throw t;
      return md(n, i);
    }
    return (i.displayName = "Lazy"), (i.__f = !0), i;
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return Vh.__n[e.__c].props.value;
        },
      },
    },
  },
};
const Kh =
  "undefined" == typeof window ||
  !window.navigator ||
  /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
    ? th
    : nh;
function Yh(e) {
  const t =
      "function" == typeof e
        ? (function (e) {
            let t;
            const n = new Set(),
              r = (e, r) => {
                const i = "function" == typeof e ? e(t) : e;
                if (i !== t) {
                  const e = t;
                  (t = r ? i : Object.assign({}, t, i)),
                    n.forEach((n) => n(t, e));
                }
              },
              i = () => t,
              s = {
                setState: r,
                getState: i,
                subscribe: (e, r, s) =>
                  r || s
                    ? ((e, r = i, s = Object.is) => {
                        let o = r(t);
                        function a() {
                          const n = r(t);
                          if (!s(o, n)) {
                            const t = o;
                            e((o = n), t);
                          }
                        }
                        return n.add(a), () => n.delete(a);
                      })(e, r, s)
                    : (n.add(e), () => n.delete(e)),
                destroy: () => n.clear(),
              };
            return (t = e(r, i, s)), s;
          })(e)
        : e,
    n = (e = t.getState, n = Object.is) => {
      const [, r] = eh((e) => e + 1, 0),
        i = t.getState(),
        s = rh(i),
        o = rh(e),
        a = rh(n),
        u = rh(!1),
        c = rh();
      let l;
      void 0 === c.current && (c.current = e(i));
      let d = !1;
      (s.current !== i || o.current !== e || a.current !== n || u.current) &&
        ((l = e(i)), (d = !n(c.current, l))),
        Kh(() => {
          d && (c.current = l),
            (s.current = i),
            (o.current = e),
            (a.current = n),
            (u.current = !1);
        });
      const h = rh(i);
      Kh(() => {
        const e = () => {
            try {
              const e = t.getState(),
                n = o.current(e);
              a.current(c.current, n) ||
                ((s.current = e), (c.current = n), r());
            } catch (e) {
              (u.current = !0), r();
            }
          },
          n = t.subscribe(e);
        return t.getState() !== h.current && e(), n;
      }, []);
      const f = d ? l : c.current;
      return uh(f), f;
    };
  return (
    Object.assign(n, t),
    (n[Symbol.iterator] = function () {
      const e = [n, t];
      return {
        next() {
          const t = e.length <= 0;
          return { value: e.shift(), done: t };
        },
      };
    }),
    n
  );
}
function $h() {
  const e = Vd(void 0);
  return {
    Provider: ({ initialStore: t, createStore: n, children: r }) => {
      const i = rh();
      return (
        i.current || (t && (n || (n = () => t)), (i.current = n())),
        md(e.Provider, { value: i.current }, r)
      );
    },
    useStore: (t, n = Object.is) => {
      const r = ah(e);
      if (!r)
        throw new Error(
          "Seems like you have not used zustand provider as an ancestor."
        );
      return r(t, n);
    },
    useStoreApi: () => {
      const t = ah(e);
      if (!t)
        throw new Error(
          "Seems like you have not used zustand provider as an ancestor."
        );
      return sh(
        () => ({
          getState: t.getState,
          setState: t.setState,
          subscribe: t.subscribe,
          destroy: t.destroy,
        }),
        [t]
      );
    },
  };
}
const zh = (e) => (t, n, r) => {
  const i = r.subscribe;
  return (
    (r.subscribe = (e, t, n) => {
      let s = e;
      if (t) {
        const i = (null == n ? void 0 : n.equalityFn) || Object.is;
        let o = e(r.getState());
        (s = (n) => {
          const r = e(n);
          if (!i(o, r)) {
            const e = o;
            t((o = r), e);
          }
        }),
          (null == n ? void 0 : n.fireImmediately) && t(o, o);
      }
      return i(s);
    }),
    e(t, n, r)
  );
};
var Qh;
!(function (e) {
  (e[(e.APPEAR = 0)] = "APPEAR"),
    (e[(e.APPEARING = 1)] = "APPEARING"),
    (e[(e.APPEARED = 2)] = "APPEARED"),
    (e[(e.ENTER = 3)] = "ENTER"),
    (e[(e.ENTERING = 4)] = "ENTERING"),
    (e[(e.ENTERED = 5)] = "ENTERED"),
    (e[(e.EXIT = 6)] = "EXIT"),
    (e[(e.EXITING = 7)] = "EXITING"),
    (e[(e.EXITED = 8)] = "EXITED");
})(Qh || (Qh = {}));
var Jh,
  Zh = function () {},
  ef = setTimeout(Zh),
  tf = function (e) {
    var t = e.children,
      n = e.in,
      r = void 0 !== n && n,
      i = e.appear,
      s = void 0 !== i && i,
      o = e.enter,
      a = void 0 === o || o,
      u = e.exit,
      c = void 0 === u || u,
      l = e.duration,
      d = void 0 === l ? 500 : l,
      h = e.alwaysMounted,
      f = void 0 !== h && h,
      _ = e.onEnter,
      p = void 0 === _ ? Zh : _,
      m = e.onEntering,
      v = void 0 === m ? Zh : m,
      g = e.onEntered,
      y = void 0 === g ? Zh : g,
      E = e.onExit,
      T = void 0 === E ? Zh : E,
      S = e.onExiting,
      b = void 0 === S ? Zh : S,
      A = e.onExited,
      I = void 0 === A ? Zh : A,
      w = rh(ef),
      R = !1,
      k = Zd(function () {
        return (R = !0), r ? (s ? Qh.APPEAR : Qh.APPEARED) : Qh.EXITED;
      }),
      P = k[0],
      D = k[1];
    th(
      function () {
        switch (P) {
          case Qh.APPEAR:
            p(), D(Qh.APPEARING);
            break;
          case Qh.APPEARING:
            v(),
              (w.current = setTimeout(function () {
                D(Qh.APPEARED);
              }, d));
            break;
          case Qh.APPEARED:
            y();
            break;
          case Qh.ENTER:
            p(), D(Qh.ENTERING);
            break;
          case Qh.ENTERING:
            v(),
              (w.current = setTimeout(function () {
                D(Qh.ENTERED);
              }, d));
            break;
          case Qh.ENTERED:
            y();
            break;
          case Qh.EXIT:
            T(), D(Qh.EXITING);
            break;
          case Qh.EXITING:
            b(),
              (w.current = setTimeout(function () {
                D(Qh.EXITED);
              }, d));
            break;
          case Qh.EXITED:
            I();
        }
        return function () {
          clearTimeout(w.current);
        };
      },
      [P]
    ),
      nh(
        function () {
          if (!R)
            switch (!0) {
              case !(!r || !a):
                D(Qh.ENTER);
                break;
              case !(!r || a):
                D(Qh.ENTERED);
                break;
              case !(r || !c):
                D(Qh.EXIT);
                break;
              case !(r || c):
                D(Qh.EXITED);
            }
        },
        [r]
      );
    var O = sh(
      function () {
        return {
          appear: P === Qh.APPEAR,
          appearActive: P === Qh.APPEARING,
          appearDone: P === Qh.APPEARED,
          enter: P === Qh.ENTER,
          enterActive: P === Qh.ENTERING,
          enterDone: P === Qh.ENTERED,
          exit: P === Qh.EXIT,
          exitActive: P === Qh.EXITING,
          exitDone: P === Qh.EXITED,
        };
      },
      [P]
    );
    return (f || P !== Qh.EXITED) && t(O);
  };
function nf() {
  return (nf =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
!(function (e) {
  (e.APPEAR = "-appear"),
    (e.APPEAR_ACTIVE = "-appear-active"),
    (e.APPEAR_DONE = "-appear-done"),
    (e.ENTER = "-enter"),
    (e.ENTER_ACTIVE = "-enter-active"),
    (e.ENTER_DONE = "-enter-done"),
    (e.EXIT = "-exit"),
    (e.EXIT_ACTIVE = "-exit-active"),
    (e.EXIT_DONE = "-exit-done");
})(Jh || (Jh = {}));
var rf = ["children", "styles"],
  sf = function (e) {
    var t = e.children,
      n = e.styles,
      r = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++)
          t.indexOf((n = s[r])) >= 0 || (i[n] = e[n]);
        return i;
      })(e, rf);
    return md(tf, r, function (e) {
      var r = t.props.style,
        i = sh(
          function () {
            return nf(
              {},
              (function (e, t) {
                switch (!0) {
                  case e.appear:
                    return t.appear;
                  case e.appearActive:
                    return nf({}, t.appear, t.appearActive);
                  case e.appearDone:
                    return t.appearDone;
                  case e.enter:
                    return t.enter;
                  case e.enterActive:
                    return nf({}, t.enter, t.enterActive);
                  case e.enterDone:
                    return t.enterDone;
                  case e.exit:
                    return t.exit;
                  case e.exitActive:
                    return nf({}, t.exit, t.exitActive);
                  case e.exitDone:
                    return t.exitDone;
                  default:
                    return {};
                }
              })(e, n),
              r
            );
          },
          [r, n, e]
        );
      return Bd(t, { style: i });
    });
  },
  of = 0;
function af(e, t, n, r, i) {
  var s,
    o,
    a = {};
  for (o in t) "ref" == o ? (s = t[o]) : (a[o] = t[o]);
  var u = {
    type: e,
    props: a,
    key: n,
    ref: s,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --of,
    __source: r,
    __self: i,
  };
  if ("function" == typeof e && (s = e.defaultProps))
    for (o in s) void 0 === a[o] && (a[o] = s[o]);
  return sd.vnode && sd.vnode(u), u;
}
function uf(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.__data__ = new bt(); ++t < n; ) this.add(e[t]);
}
function cf(e, t) {
  for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
function lf(e, t) {
  return e.has(t);
}
function df(e, t, n, r, i, s) {
  var o = 1 & n,
    a = e.length,
    u = t.length;
  if (a != u && !(o && u > a)) return !1;
  var c = s.get(e);
  if (c && s.get(t)) return c == t;
  var l = -1,
    d = !0,
    h = 2 & n ? new uf() : void 0;
  for (s.set(e, t), s.set(t, e); ++l < a; ) {
    var f = e[l],
      _ = t[l];
    if (r) var p = o ? r(_, f, l, t, e, s) : r(f, _, l, e, t, s);
    if (void 0 !== p) {
      if (p) continue;
      d = !1;
      break;
    }
    if (h) {
      if (
        !cf(t, function (e, t) {
          if (!lf(h, t) && (f === e || i(f, e, n, r, s))) return h.push(t);
        })
      ) {
        d = !1;
        break;
      }
    } else if (f !== _ && !i(f, _, n, r, s)) {
      d = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), d;
}
function hf(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (e, r) {
      n[++t] = [r, e];
    }),
    n
  );
}
function ff(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (e) {
      n[++t] = e;
    }),
    n
  );
}
(uf.prototype.add = uf.prototype.push =
  function (e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this;
  }),
  (uf.prototype.has = function (e) {
    return this.__data__.has(e);
  });
var _f = He ? He.prototype : void 0,
  pf = _f ? _f.valueOf : void 0,
  mf = Object.prototype.hasOwnProperty,
  vf = Object.prototype.hasOwnProperty;
function gf(e, t, n, r, i) {
  return (
    e === t ||
    (null == e || null == t || (!ze(e) && !ze(t))
      ? e != e && t != t
      : (function (e, t, n, r, i, s) {
          var o = Fe(e),
            a = Fe(t),
            u = o ? "[object Array]" : mr(e),
            c = a ? "[object Array]" : mr(t),
            l =
              "[object Object]" ==
              (u = "[object Arguments]" == u ? "[object Object]" : u),
            d =
              "[object Object]" ==
              (c = "[object Arguments]" == c ? "[object Object]" : c),
            h = u == c;
          if (h && En(e)) {
            if (!En(t)) return !1;
            (o = !0), (l = !1);
          }
          if (h && !l)
            return (
              s || (s = new on()),
              o || On(e)
                ? df(e, t, n, r, i, s)
                : (function (e, t, n, r, i, s, o) {
                    switch (n) {
                      case "[object DataView]":
                        if (
                          e.byteLength != t.byteLength ||
                          e.byteOffset != t.byteOffset
                        )
                          return !1;
                        (e = e.buffer), (t = t.buffer);
                      case "[object ArrayBuffer]":
                        return !(
                          e.byteLength != t.byteLength ||
                          !s(new gr(e), new gr(t))
                        );
                      case "[object Boolean]":
                      case "[object Date]":
                      case "[object Number]":
                        return vt(+e, +t);
                      case "[object Error]":
                        return e.name == t.name && e.message == t.message;
                      case "[object RegExp]":
                      case "[object String]":
                        return e == t + "";
                      case "[object Map]":
                        var a = hf;
                      case "[object Set]":
                        var u = 1 & r;
                        if ((a || (a = ff), e.size != t.size && !u)) return !1;
                        var c = o.get(e);
                        if (c) return c == t;
                        (r |= 2), o.set(e, t);
                        var l = df(a(e), a(t), r, i, s, o);
                        return o.delete(e), l;
                      case "[object Symbol]":
                        if (pf) return pf.call(e) == pf.call(t);
                    }
                    return !1;
                  })(e, t, u, n, r, i, s)
            );
          if (!(1 & n)) {
            var f = l && vf.call(e, "__wrapped__"),
              _ = d && vf.call(t, "__wrapped__");
            if (f || _) {
              var p = f ? e.value() : e,
                m = _ ? t.value() : t;
              return s || (s = new on()), i(p, m, n, r, s);
            }
          }
          return (
            !!h &&
            (s || (s = new on()),
            (function (e, t, n, r, i, s) {
              var o = 1 & n,
                a = ir(e),
                u = a.length;
              if (u != ir(t).length && !o) return !1;
              for (var c = u; c--; ) {
                var l = a[c];
                if (!(o ? l in t : mf.call(t, l))) return !1;
              }
              var d = s.get(e);
              if (d && s.get(t)) return d == t;
              var h = !0;
              s.set(e, t), s.set(t, e);
              for (var f = o; ++c < u; ) {
                var _ = e[(l = a[c])],
                  p = t[l];
                if (r) var m = o ? r(p, _, l, t, e, s) : r(_, p, l, e, t, s);
                if (!(void 0 === m ? _ === p || i(_, p, n, r, s) : m)) {
                  h = !1;
                  break;
                }
                f || (f = "constructor" == l);
              }
              if (h && !f) {
                var v = e.constructor,
                  g = t.constructor;
                v != g &&
                  "constructor" in e &&
                  "constructor" in t &&
                  !(
                    "function" == typeof v &&
                    v instanceof v &&
                    "function" == typeof g &&
                    g instanceof g
                  ) &&
                  (h = !1);
              }
              return s.delete(e), s.delete(t), h;
            })(e, t, n, r, i, s))
          );
        })(e, t, n, r, gf, i))
  );
}
function yf(e, t) {
  return gf(e, t);
}
var Ef = [],
  Tf = [];
function Sf(e, t) {
  if (e && "undefined" != typeof document) {
    var n,
      r = !0 === t.prepend ? "prepend" : "append",
      i = !0 === t.singleTag,
      s =
        "string" == typeof t.container
          ? document.querySelector(t.container)
          : document.getElementsByTagName("head")[0];
    if (i) {
      var o = Ef.indexOf(s);
      -1 === o && ((o = Ef.push(s) - 1), (Tf[o] = {})),
        (n = Tf[o] && Tf[o][r] ? Tf[o][r] : (Tf[o][r] = a()));
    } else n = a();
    65279 === e.charCodeAt(0) && (e = e.substring(1)),
      n.styleSheet
        ? (n.styleSheet.cssText += e)
        : n.appendChild(document.createTextNode(e));
  }
  function a() {
    var e = document.createElement("style");
    if ((e.setAttribute("type", "text/css"), t.attributes))
      for (var n = Object.keys(t.attributes), i = 0; i < n.length; i++)
        e.setAttribute(n[i], t.attributes[n[i]]);
    var o = "prepend" === r ? "afterbegin" : "beforeend";
    return s.insertAdjacentElement(o, e), e;
  }
}
var bf = rn(function (e, t) {
  /*! For license information please see hls-parser.min.js.LICENSE.txt */
  self,
    (e.exports = (function () {
      return (
        (e = {
          851: (e, t, n) => {
            var r = n(771),
              i = r.getOptions,
              s = r.setOptions,
              o = n(463),
              a = n(367),
              u = n(890);
            e.exports = {
              parse: o,
              stringify: a,
              types: u,
              getOptions: i,
              setOptions: s,
            };
          },
          463: (e, t, n) => {
            function r(e, t) {
              var n;
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                  Array.isArray(e) ||
                  (n = s(e)) ||
                  (t && e && "number" == typeof e.length)
                ) {
                  n && (e = n);
                  var r = 0,
                    i = function () {};
                  return {
                    s: i,
                    n: function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: i,
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var o,
                a = !0,
                u = !1;
              return {
                s: function () {
                  n = e[Symbol.iterator]();
                },
                n: function () {
                  var e = n.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (u = !0), (o = e);
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (u) throw o;
                  }
                },
              };
            }
            function i(e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var n = [],
                      r = !0,
                      i = !1,
                      s = void 0;
                    try {
                      for (
                        var o, a = e[Symbol.iterator]();
                        !(r = (o = a.next()).done) &&
                        (n.push(o.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (e) {
                      (i = !0), (s = e);
                    } finally {
                      try {
                        r || null == a.return || a.return();
                      } finally {
                        if (i) throw s;
                      }
                    }
                    return n;
                  }
                })(e, t) ||
                s(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function s(e, t) {
              if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? o(e, t)
                    : void 0
                );
              }
            }
            function o(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
              return r;
            }
            var a = n(771),
              u = n(890),
              c = u.Rendition,
              l = u.Variant,
              d = u.SessionData,
              h = u.Key,
              f = u.MediaInitializationSection,
              _ = u.DateRange,
              p = u.SpliceInfo,
              m = u.MasterPlaylist,
              v = u.MediaPlaylist,
              g = u.Segment,
              y = u.PartialSegment,
              E = u.RenditionReport;
            function T(e) {
              return a.trim(e, '"');
            }
            function S(e) {
              var t = a.splitAt(e, ",");
              return {
                duration: a.toNumber(t[0]),
                title: decodeURIComponent(escape(t[1])),
              };
            }
            function b(e) {
              var t = a.splitAt(e, "@");
              return {
                length: a.toNumber(t[0]),
                offset: t[1] ? a.toNumber(t[1]) : -1,
              };
            }
            function A(e, t) {
              t.IV && e.compatibleVersion < 2 && (e.compatibleVersion = 2),
                (t.KEYFORMAT || t.KEYFORMATVERSIONS) &&
                  e.compatibleVersion < 5 &&
                  (e.compatibleVersion = 5);
            }
            function I(e) {
              var t = a.splitByCommaWithPreservingQuotes(e),
                n = {};
              return (
                t.forEach(function (e) {
                  var t,
                    r,
                    s = i(a.splitAt(e, "="), 2),
                    o = s[0],
                    u = s[1],
                    c = T(u);
                  switch (o) {
                    case "URI":
                      n[o] = c;
                      break;
                    case "START-DATE":
                    case "END-DATE":
                      n[o] = new Date(c);
                      break;
                    case "IV":
                      n[o] =
                        ((t = c),
                        16 !== (r = a.hexToByteSequence(t)).length &&
                          a.INVALIDPLAYLIST(
                            "IV must be a 128-bit unsigned integer"
                          ),
                        r);
                      break;
                    case "BYTERANGE":
                      n[o] = b(c);
                      break;
                    case "RESOLUTION":
                      n[o] = (function (e) {
                        var t = a.splitAt(e, "x");
                        return {
                          width: a.toNumber(t[0]),
                          height: a.toNumber(t[1]),
                        };
                      })(c);
                      break;
                    case "END-ON-NEXT":
                    case "DEFAULT":
                    case "AUTOSELECT":
                    case "FORCED":
                    case "PRECISE":
                    case "CAN-BLOCK-RELOAD":
                    case "INDEPENDENT":
                    case "GAP":
                      n[o] = "YES" === c;
                      break;
                    case "DURATION":
                    case "PLANNED-DURATION":
                    case "BANDWIDTH":
                    case "AVERAGE-BANDWIDTH":
                    case "FRAME-RATE":
                    case "TIME-OFFSET":
                    case "CAN-SKIP-UNTIL":
                    case "HOLD-BACK":
                    case "PART-HOLD-BACK":
                    case "PART-TARGET":
                    case "BYTERANGE-START":
                    case "BYTERANGE-LENGTH":
                    case "LAST-MSN":
                    case "LAST-PART":
                    case "SKIPPED-SEGMENTS":
                      n[o] = a.toNumber(c);
                      break;
                    default:
                      o.startsWith("SCTE35-")
                        ? (n[o] = a.hexToByteSequence(c))
                        : o.startsWith("X-")
                        ? (n[o] = (function (e) {
                            return e.startsWith('"')
                              ? T(e)
                              : e.startsWith("0x") || e.startsWith("0X")
                              ? a.hexToByteSequence(e)
                              : a.toNumber(e);
                          })(u))
                        : (n[o] = c);
                  }
                }),
                n
              );
            }
            function w() {
              a.INVALIDPLAYLIST(
                "The file contains both media and master playlist tags."
              );
            }
            function R(e, t, n) {
              var i,
                s =
                  ((i = t.attributes),
                  new c({
                    type: i.TYPE,
                    uri: i.URI,
                    groupId: i["GROUP-ID"],
                    language: i.LANGUAGE,
                    assocLanguage: i["ASSOC-LANGUAGE"],
                    name: i.NAME,
                    isDefault: i.DEFAULT,
                    autoselect: i.AUTOSELECT,
                    forced: i.FORCED,
                    instreamId: i["INSTREAM-ID"],
                    characteristics: i.CHARACTERISTICS,
                    channels: i.CHANNELS,
                  })),
                o = e[a.camelify(n)],
                u = (function (e, t) {
                  var n,
                    i = !1,
                    s = r(e);
                  try {
                    for (s.s(); !(n = s.n()).done; ) {
                      var o = n.value;
                      if (o.name === t.name)
                        return "All EXT-X-MEDIA tags in the same Group MUST have different NAME attributes.";
                      o.isDefault && (i = !0);
                    }
                  } catch (e) {
                    s.e(e);
                  } finally {
                    s.f();
                  }
                  return i && t.isDefault
                    ? "EXT-X-MEDIA A Group MUST NOT have more than one member with a DEFAULT attribute of YES."
                    : "";
                })(o, s);
              u && a.INVALIDPLAYLIST(u),
                o.push(s),
                s.isDefault &&
                  (e.currentRenditions[a.camelify(n)] = o.length - 1);
            }
            function k(e, t, n, i, s) {
              var o,
                u = new l({
                  uri: n,
                  bandwidth: t.BANDWIDTH,
                  averageBandwidth: t["AVERAGE-BANDWIDTH"],
                  codecs: t.CODECS,
                  resolution: t.RESOLUTION,
                  frameRate: t["FRAME-RATE"],
                  hdcpLevel: t["HDCP-LEVEL"],
                }),
                c = r(e);
              try {
                for (c.s(); !(o = c.n()).done; ) {
                  var d = o.value;
                  if ("EXT-X-MEDIA" === d.name) {
                    var h = d.attributes,
                      f = h.TYPE;
                    if (
                      ((f && h["GROUP-ID"]) ||
                        a.INVALIDPLAYLIST(
                          "EXT-X-MEDIA TYPE attribute is REQUIRED."
                        ),
                      t[f] === h["GROUP-ID"] &&
                        (R(u, d, f), "CLOSED-CAPTIONS" === f))
                    ) {
                      var _,
                        p = r(u.closedCaptions);
                      try {
                        for (p.s(); !(_ = p.n()).done; ) {
                          var m = _.value.instreamId;
                          if (
                            m &&
                            m.startsWith("SERVICE") &&
                            s.compatibleVersion < 7
                          ) {
                            s.compatibleVersion = 7;
                            break;
                          }
                        }
                      } catch (e) {
                        p.e(e);
                      } finally {
                        p.f();
                      }
                    }
                  }
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
              return (
                (function (e, t, n) {
                  ["AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(
                    function (r) {
                      "CLOSED-CAPTIONS" === r && "NONE" === e[r]
                        ? ((n.isClosedCaptionsNone = !0),
                          (t.closedCaptions = []))
                        : e[r] &&
                          !t[a.camelify(r)].find(function (t) {
                            return t.groupId === e[r];
                          }) &&
                          a.INVALIDPLAYLIST(
                            ""
                              .concat(
                                r,
                                " attribute MUST match the value of the GROUP-ID attribute of an EXT-X-MEDIA tag whose TYPE attribute is "
                              )
                              .concat(r, ".")
                          );
                    }
                  );
                })(t, u, s),
                (u.isIFrameOnly = i),
                u
              );
            }
            function P(e, t) {
              if (e.method !== t.method) return !1;
              if (e.uri !== t.uri) return !1;
              if (e.iv) {
                if (!t.iv) return !1;
                if (e.iv.length !== t.iv.length) return !1;
                for (var n = 0; n < e.iv.length; n++)
                  if (e.iv[n] !== t.iv[n]) return !1;
              } else if (t.iv) return !1;
              return (
                e.format === t.format && e.formatVersion === t.formatVersion
              );
            }
            function D(e, t, n, r, i, s, o) {
              for (
                var u = new g({
                    uri: t,
                    mediaSequenceNumber: i,
                    discontinuitySequence: s,
                  }),
                  c = !1,
                  l = !1,
                  d = function (t) {
                    var n = e[t],
                      r = n.name,
                      i = n.value,
                      s = n.attributes;
                    if ("EXTINF" === r)
                      !Number.isInteger(i.duration) &&
                        o.compatibleVersion < 3 &&
                        (o.compatibleVersion = 3),
                        Math.round(i.duration) > o.targetDuration &&
                          a.INVALIDPLAYLIST(
                            "EXTINF duration, when rounded to the nearest integer, MUST be less than or equal to the target duration"
                          ),
                        (u.duration = i.duration),
                        (u.title = i.title);
                    else if ("EXT-X-BYTERANGE" === r)
                      o.compatibleVersion < 4 && (o.compatibleVersion = 4),
                        (u.byterange = i);
                    else if ("EXT-X-DISCONTINUITY" === r)
                      u.parts.length > 0 &&
                        a.INVALIDPLAYLIST(
                          "EXT-X-DISCONTINUITY must appear before the first EXT-X-PART tag of the Parent Segment."
                        ),
                        (u.discontinuity = !0);
                    else if ("EXT-X-KEY" === r)
                      u.parts.length > 0 &&
                        a.INVALIDPLAYLIST(
                          "EXT-X-KEY must appear before the first EXT-X-PART tag of the Parent Segment."
                        ),
                        A(o, s),
                        (u.key = new h({
                          method: s.METHOD,
                          uri: s.URI,
                          iv: s.IV,
                          format: s.KEYFORMAT,
                          formatVersion: s.KEYFORMATVERSIONS,
                        }));
                    else if ("EXT-X-MAP" === r)
                      u.parts.length > 0 &&
                        a.INVALIDPLAYLIST(
                          "EXT-X-MAP must appear before the first EXT-X-PART tag of the Parent Segment."
                        ),
                        o.compatibleVersion < 5 && (o.compatibleVersion = 5),
                        (o.hasMap = !0),
                        (u.map = new f({ uri: s.URI, byterange: s.BYTERANGE }));
                    else if ("EXT-X-PROGRAM-DATE-TIME" === r)
                      u.programDateTime = i;
                    else if ("EXT-X-DATERANGE" === r) {
                      var d = {};
                      Object.keys(s).forEach(function (e) {
                        (e.startsWith("SCTE35-") || e.startsWith("X-")) &&
                          (d[e] = s[e]);
                      }),
                        (u.dateRange = new _({
                          id: s.ID,
                          classId: s.CLASS,
                          start: s["START-DATE"],
                          end: s["END-DATE"],
                          duration: s.DURATION,
                          plannedDuration: s["PLANNED-DURATION"],
                          endOnNext: s["END-ON-NEXT"],
                          attributes: d,
                        }));
                    } else if ("EXT-X-CUE-OUT" === r)
                      u.markers.push(new p({ type: "OUT", duration: i }));
                    else if ("EXT-X-CUE-IN" === r)
                      u.markers.push(new p({ type: "IN" }));
                    else if (
                      "EXT-X-CUE-OUT-CONT" === r ||
                      "EXT-X-CUE" === r ||
                      "EXT-OATCLS-SCTE35" === r ||
                      "EXT-X-ASSET" === r ||
                      "EXT-X-SCTE35" === r
                    )
                      u.markers.push(
                        new p({ type: "RAW", tagName: r, value: i })
                      );
                    else if ("EXT-X-PRELOAD-HINT" !== r || s.TYPE)
                      if ("EXT-X-PRELOAD-HINT" === r && "PART" === s.TYPE && l)
                        a.INVALIDPLAYLIST(
                          "Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist."
                        );
                      else if (
                        ("EXT-X-PART" !== r && "EXT-X-PRELOAD-HINT" !== r) ||
                        s.URI
                      ) {
                        if ("EXT-X-PRELOAD-HINT" === r && "MAP" === s.TYPE)
                          c &&
                            a.INVALIDPLAYLIST(
                              "Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist."
                            ),
                            (c = !0),
                            (o.hasMap = !0),
                            (u.map = new f({
                              hint: !0,
                              uri: s.URI,
                              byterange: {
                                length: s["BYTERANGE-LENGTH"],
                                offset: s["BYTERANGE-START"] || 0,
                              },
                            }));
                        else if (
                          "EXT-X-PART" === r ||
                          ("EXT-X-PRELOAD-HINT" === r && "PART" === s.TYPE)
                        ) {
                          "EXT-X-PART" !== r ||
                            s.DURATION ||
                            a.INVALIDPLAYLIST(
                              "EXT-X-PART: DURATION attribute is mandatory"
                            ),
                            "EXT-X-PRELOAD-HINT" === r && (l = !0);
                          var m = new y({
                            hint: "EXT-X-PRELOAD-HINT" === r,
                            uri: s.URI,
                            byterange:
                              "EXT-X-PART" === r
                                ? s.BYTERANGE
                                : {
                                    length: s["BYTERANGE-LENGTH"],
                                    offset: s["BYTERANGE-START"] || 0,
                                  },
                            duration: s.DURATION,
                            independent: s.INDEPENDENT,
                            gap: s.GAP,
                          });
                          u.parts.push(m);
                        }
                      } else
                        a.INVALIDPLAYLIST(
                          "EXT-X-PART / EXT-X-PRELOAD-HINT: URI attribute is mandatory"
                        );
                    else
                      a.INVALIDPLAYLIST(
                        "EXT-X-PRELOAD-HINT: TYPE attribute is mandatory"
                      );
                  },
                  m = n;
                m <= r;
                m++
              )
                d(m);
              return u;
            }
            function O(e, t, n, r, i) {
              var s = t.discontinuity,
                o = t.key,
                u = t.map,
                c = t.byterange,
                l = t.uri;
              if (
                (s && (t.discontinuitySequence = n + 1),
                o || (t.key = r),
                u || (t.map = i),
                c && -1 === c.offset)
              ) {
                var d = e.segments;
                if (d.length > 0) {
                  var h = d[d.length - 1];
                  h.byterange && h.uri === l
                    ? (c.offset = h.byterange.offset + h.byterange.length)
                    : a.INVALIDPLAYLIST(
                        "If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST be a sub-range of the same media resource"
                      );
                } else
                  a.INVALIDPLAYLIST(
                    "If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST appear in the Playlist file"
                  );
              }
              return (
                e.segments.push(t), [t.discontinuitySequence, t.key, t.map]
              );
            }
            function L(e, t) {
              var n = i(
                  (function (e) {
                    var t = e.indexOf(":");
                    return -1 === t
                      ? [e.slice(1).trim(), null]
                      : [e.slice(1, t).trim(), e.slice(t + 1).trim()];
                  })(e),
                  2
                ),
                r = n[0],
                s = n[1],
                o = (function (e) {
                  switch (e) {
                    case "EXTM3U":
                    case "EXT-X-VERSION":
                      return "Basic";
                    case "EXTINF":
                    case "EXT-X-BYTERANGE":
                    case "EXT-X-DISCONTINUITY":
                    case "EXT-X-KEY":
                    case "EXT-X-MAP":
                    case "EXT-X-PROGRAM-DATE-TIME":
                    case "EXT-X-DATERANGE":
                    case "EXT-X-CUE-OUT":
                    case "EXT-X-CUE-IN":
                    case "EXT-X-CUE-OUT-CONT":
                    case "EXT-X-CUE":
                    case "EXT-OATCLS-SCTE35":
                    case "EXT-X-ASSET":
                    case "EXT-X-SCTE35":
                    case "EXT-X-PART":
                    case "EXT-X-PRELOAD-HINT":
                      return "Segment";
                    case "EXT-X-TARGETDURATION":
                    case "EXT-X-MEDIA-SEQUENCE":
                    case "EXT-X-DISCONTINUITY-SEQUENCE":
                    case "EXT-X-ENDLIST":
                    case "EXT-X-PLAYLIST-TYPE":
                    case "EXT-X-I-FRAMES-ONLY":
                    case "EXT-X-SERVER-CONTROL":
                    case "EXT-X-PART-INF":
                    case "EXT-X-RENDITION-REPORT":
                    case "EXT-X-SKIP":
                      return "MediaPlaylist";
                    case "EXT-X-MEDIA":
                    case "EXT-X-STREAM-INF":
                    case "EXT-X-I-FRAME-STREAM-INF":
                    case "EXT-X-SESSION-DATA":
                    case "EXT-X-SESSION-KEY":
                      return "MasterPlaylist";
                    case "EXT-X-INDEPENDENT-SEGMENTS":
                    case "EXT-X-START":
                      return "MediaorMasterPlaylist";
                    default:
                      return "Unknown";
                  }
                })(r);
              if (
                ((function (e, t) {
                  if ("Segment" === e || "MediaPlaylist" === e)
                    return void 0 === t.isMasterPlaylist
                      ? void (t.isMasterPlaylist = !1)
                      : void (t.isMasterPlaylist && w());
                  if ("MasterPlaylist" === e) {
                    if (void 0 === t.isMasterPlaylist)
                      return void (t.isMasterPlaylist = !0);
                    !1 === t.isMasterPlaylist && w();
                  }
                })(o, t),
                "Unknown" === o)
              )
                return null;
              "MediaPlaylist" === o &&
                "EXT-X-RENDITION-REPORT" !== r &&
                (t.hash[r] &&
                  a.INVALIDPLAYLIST(
                    "There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist"
                  ),
                (t.hash[r] = !0));
              var u = i(
                (function (e, t) {
                  switch (e) {
                    case "EXTM3U":
                    case "EXT-X-DISCONTINUITY":
                    case "EXT-X-ENDLIST":
                    case "EXT-X-I-FRAMES-ONLY":
                    case "EXT-X-INDEPENDENT-SEGMENTS":
                    case "EXT-X-CUE-IN":
                      return [null, null];
                    case "EXT-X-VERSION":
                    case "EXT-X-TARGETDURATION":
                    case "EXT-X-MEDIA-SEQUENCE":
                    case "EXT-X-DISCONTINUITY-SEQUENCE":
                    case "EXT-X-CUE-OUT":
                      return [a.toNumber(t), null];
                    case "EXT-X-KEY":
                    case "EXT-X-MAP":
                    case "EXT-X-DATERANGE":
                    case "EXT-X-MEDIA":
                    case "EXT-X-STREAM-INF":
                    case "EXT-X-I-FRAME-STREAM-INF":
                    case "EXT-X-SESSION-DATA":
                    case "EXT-X-SESSION-KEY":
                    case "EXT-X-START":
                    case "EXT-X-SERVER-CONTROL":
                    case "EXT-X-PART-INF":
                    case "EXT-X-PART":
                    case "EXT-X-PRELOAD-HINT":
                    case "EXT-X-RENDITION-REPORT":
                    case "EXT-X-SKIP":
                      return [null, I(t)];
                    case "EXTINF":
                      return [S(t), null];
                    case "EXT-X-BYTERANGE":
                      return [b(t), null];
                    case "EXT-X-PROGRAM-DATE-TIME":
                      return [new Date(t), null];
                    case "EXT-X-PLAYLIST-TYPE":
                    default:
                      return [t, null];
                  }
                })(r, s),
                2
              );
              return { name: r, category: o, value: u[0], attributes: u[1] };
            }
            e.exports = function (e) {
              var t = {
                  version: void 0,
                  isMasterPlaylist: void 0,
                  hasMap: !1,
                  targetDuration: 0,
                  compatibleVersion: 1,
                  isClosedCaptionsNone: !1,
                  hash: {},
                },
                n = (function (e, t) {
                  var n;
                  return (
                    t.isMasterPlaylist
                      ? (n = (function (e, t) {
                          var n,
                            s = new m(),
                            o = r(e.entries());
                          try {
                            for (o.s(); !(n = o.n()).done; ) {
                              var u = i(n.value, 2),
                                c = u[0],
                                l = u[1],
                                f = l.name,
                                _ = l.value,
                                p = l.attributes;
                              if ("EXT-X-VERSION" === f) s.version = _;
                              else if ("EXT-X-STREAM-INF" === f) {
                                var v = e[c + 1];
                                ("string" != typeof v ||
                                  v.startsWith("#EXT")) &&
                                  a.INVALIDPLAYLIST(
                                    "EXT-X-STREAM-INF must be followed by a URI line"
                                  );
                                var g = k(e, p, v, !1, t);
                                g && s.variants.push(g);
                              } else if ("EXT-X-I-FRAME-STREAM-INF" === f) {
                                var y = k(e, p, p.URI, !0, t);
                                y && s.variants.push(y);
                              } else
                                "EXT-X-SESSION-DATA" === f
                                  ? (function () {
                                      var e = new d({
                                        id: p["DATA-ID"],
                                        value: p.VALUE,
                                        uri: p.URI,
                                        language: p.LANGUAGE,
                                      });
                                      s.sessionDataList.find(function (t) {
                                        return (
                                          t.id === e.id &&
                                          t.language === e.language
                                        );
                                      }) &&
                                        a.INVALIDPLAYLIST(
                                          "A Playlist MUST NOT contain more than one EXT-X-SESSION-DATA tag with the same DATA-ID attribute and the same LANGUAGE attribute."
                                        ),
                                        s.sessionDataList.push(e);
                                    })()
                                  : "EXT-X-SESSION-KEY" === f
                                  ? (function () {
                                      "NONE" === p.METHOD &&
                                        a.INVALIDPLAYLIST(
                                          "EXT-X-SESSION-KEY: The value of the METHOD attribute MUST NOT be NONE"
                                        );
                                      var e = new h({
                                        method: p.METHOD,
                                        uri: p.URI,
                                        iv: p.IV,
                                        format: p.KEYFORMAT,
                                        formatVersion: p.KEYFORMATVERSIONS,
                                      });
                                      s.sessionKeyList.find(function (t) {
                                        return P(t, e);
                                      }) &&
                                        a.INVALIDPLAYLIST(
                                          "A Master Playlist MUST NOT contain more than one EXT-X-SESSION-KEY tag with the same METHOD, URI, IV, KEYFORMAT, and KEYFORMATVERSIONS attribute values."
                                        ),
                                        A(t, p),
                                        s.sessionKeyList.push(e);
                                    })()
                                  : "EXT-X-INDEPENDENT-SEGMENTS" === f
                                  ? (s.independentSegments &&
                                      a.INVALIDPLAYLIST(
                                        "EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"
                                      ),
                                    (s.independentSegments = !0))
                                  : "EXT-X-START" === f &&
                                    (s.start &&
                                      a.INVALIDPLAYLIST(
                                        "EXT-X-START tag MUST NOT appear more than once in a Playlist"
                                      ),
                                    "number" != typeof p["TIME-OFFSET"] &&
                                      a.INVALIDPLAYLIST(
                                        "EXT-X-START: TIME-OFFSET attribute is REQUIRED"
                                      ),
                                    (s.start = {
                                      offset: p["TIME-OFFSET"],
                                      precise: p.PRECISE || !1,
                                    }));
                            }
                          } catch (e) {
                            o.e(e);
                          } finally {
                            o.f();
                          }
                          if (t.isClosedCaptionsNone) {
                            var E,
                              T = r(s.variants);
                            try {
                              for (T.s(); !(E = T.n()).done; )
                                E.value.closedCaptions.length > 0 &&
                                  a.INVALIDPLAYLIST(
                                    "If there is a variant with CLOSED-CAPTIONS attribute of NONE, all EXT-X-STREAM-INF tags MUST have this attribute with a value of NONE"
                                  );
                            } catch (e) {
                              T.e(e);
                            } finally {
                              T.f();
                            }
                          }
                          return s;
                        })(e, t))
                      : !(n = (function (e, t) {
                          var n,
                            s = new v(),
                            o = -1,
                            u = 0,
                            c = !1,
                            l = 0,
                            d = null,
                            h = null,
                            f = !1,
                            _ = r(e.entries());
                          try {
                            for (_.s(); !(n = _.n()).done; ) {
                              var p = i(n.value, 2),
                                m = p[0],
                                g = p[1],
                                y = g.name,
                                T = g.value,
                                S = g.attributes;
                              if ("Segment" !== g.category) {
                                if ("EXT-X-VERSION" === y)
                                  void 0 === s.version
                                    ? (s.version = T)
                                    : a.INVALIDPLAYLIST(
                                        "A Playlist file MUST NOT contain more than one EXT-X-VERSION tag."
                                      );
                                else if ("EXT-X-TARGETDURATION" === y)
                                  s.targetDuration = t.targetDuration = T;
                                else if ("EXT-X-MEDIA-SEQUENCE" === y)
                                  s.segments.length > 0 &&
                                    a.INVALIDPLAYLIST(
                                      "The EXT-X-MEDIA-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."
                                    ),
                                    (s.mediaSequenceBase = u = T);
                                else if ("EXT-X-DISCONTINUITY-SEQUENCE" === y)
                                  s.segments.length > 0 &&
                                    a.INVALIDPLAYLIST(
                                      "The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."
                                    ),
                                    c &&
                                      a.INVALIDPLAYLIST(
                                        "The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before any EXT-X-DISCONTINUITY tag."
                                      ),
                                    (s.discontinuitySequenceBase = l = T);
                                else if ("EXT-X-ENDLIST" === y) s.endlist = !0;
                                else if ("EXT-X-PLAYLIST-TYPE" === y)
                                  s.playlistType = T;
                                else if ("EXT-X-I-FRAMES-ONLY" === y)
                                  t.compatibleVersion < 4 &&
                                    (t.compatibleVersion = 4),
                                    (s.isIFrame = !0);
                                else if ("EXT-X-INDEPENDENT-SEGMENTS" === y)
                                  s.independentSegments &&
                                    a.INVALIDPLAYLIST(
                                      "EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"
                                    ),
                                    (s.independentSegments = !0);
                                else if ("EXT-X-START" === y)
                                  s.start &&
                                    a.INVALIDPLAYLIST(
                                      "EXT-X-START tag MUST NOT appear more than once in a Playlist"
                                    ),
                                    "number" != typeof S["TIME-OFFSET"] &&
                                      a.INVALIDPLAYLIST(
                                        "EXT-X-START: TIME-OFFSET attribute is REQUIRED"
                                      ),
                                    (s.start = {
                                      offset: S["TIME-OFFSET"],
                                      precise: S.PRECISE || !1,
                                    });
                                else if ("EXT-X-SERVER-CONTROL" === y)
                                  S["CAN-BLOCK-RELOAD"] ||
                                    a.INVALIDPLAYLIST(
                                      "EXT-X-SERVER-CONTROL: CAN-BLOCK-RELOAD=YES is mandatory for Low-Latency HLS"
                                    ),
                                    (s.lowLatencyCompatibility = {
                                      canBlockReload: S["CAN-BLOCK-RELOAD"],
                                      canSkipUntil: S["CAN-SKIP-UNTIL"],
                                      holdBack: S["HOLD-BACK"],
                                      partHoldBack: S["PART-HOLD-BACK"],
                                    });
                                else if ("EXT-X-PART-INF" === y)
                                  S["PART-TARGET"] ||
                                    a.INVALIDPLAYLIST(
                                      "EXT-X-PART-INF: PART-TARGET attribute is mandatory"
                                    ),
                                    (s.partTargetDuration = S["PART-TARGET"]);
                                else if ("EXT-X-RENDITION-REPORT" === y)
                                  S.URI ||
                                    a.INVALIDPLAYLIST(
                                      "EXT-X-RENDITION-REPORT: URI attribute is mandatory"
                                    ),
                                    0 === S.URI.search(/^[a-z]+:/) &&
                                      a.INVALIDPLAYLIST(
                                        "EXT-X-RENDITION-REPORT: URI must be relative to the playlist uri"
                                      ),
                                    s.renditionReports.push(
                                      new E({
                                        uri: S.URI,
                                        lastMSN: S["LAST-MSN"],
                                        lastPart: S["LAST-PART"],
                                      })
                                    );
                                else if ("EXT-X-SKIP" === y)
                                  S["SKIPPED-SEGMENTS"] ||
                                    a.INVALIDPLAYLIST(
                                      "EXT-X-SKIP: SKIPPED-SEGMENTS attribute is mandatory"
                                    ),
                                    t.compatibleVersion < 9 &&
                                      (t.compatibleVersion = 9),
                                    (s.skip = S["SKIPPED-SEGMENTS"]),
                                    (u += s.skip);
                                else if ("string" == typeof g) {
                                  -1 === o &&
                                    a.INVALIDPLAYLIST(
                                      "A URI line is not preceded by any segment tags"
                                    ),
                                    s.targetDuration ||
                                      a.INVALIDPLAYLIST(
                                        "The EXT-X-TARGETDURATION tag is REQUIRED"
                                      );
                                  var b = D(e, g, o, m - 1, u++, l, t);
                                  if (b) {
                                    var A = i(O(s, b, l, d, h), 3);
                                    (l = A[0]),
                                      (d = A[1]),
                                      (h = A[2]),
                                      !f && b.parts.length > 0 && (f = !0);
                                  }
                                  o = -1;
                                }
                              } else
                                -1 === o && (o = m),
                                  "EXT-X-DISCONTINUITY" === y && (c = !0);
                            }
                          } catch (e) {
                            _.e(e);
                          } finally {
                            _.f();
                          }
                          if (-1 !== o) {
                            var I = D(e, "", o, e.length - 1, u++, l, t);
                            if (I) {
                              var w = I.parts;
                              w.length > 0 &&
                                !s.endlist &&
                                !w[w.length - 1].hint &&
                                a.INVALIDPLAYLIST(
                                  "If the Playlist contains EXT-X-PART tags and does not contain an EXT-X-ENDLIST tag, the Playlist must contain an EXT-X-PRELOAD-HINT tag with a TYPE=PART attribute"
                                ),
                                O(s, I, d, h),
                                !f && I.parts.length > 0 && (f = !0);
                            }
                          }
                          return (
                            (function (e) {
                              for (
                                var t = new Map(),
                                  n = new Map(),
                                  i = !1,
                                  s = !1,
                                  o = e.length - 1;
                                o >= 0;
                                o--
                              ) {
                                var u = e[o],
                                  c = u.programDateTime,
                                  l = u.dateRange;
                                if ((c && (s = !0), l && l.start)) {
                                  (i = !0),
                                    l.endOnNext &&
                                      (l.end || l.duration) &&
                                      a.INVALIDPLAYLIST(
                                        "An EXT-X-DATERANGE tag with an END-ON-NEXT=YES attribute MUST NOT contain DURATION or END-DATE attributes."
                                      );
                                  var d = l.start.getTime(),
                                    h = l.duration || 0;
                                  l.end &&
                                    l.duration &&
                                    d + 1e3 * h !== l.end.getTime() &&
                                    a.INVALIDPLAYLIST(
                                      "END-DATE MUST be equal to the value of the START-DATE attribute plus the value of the DURATION"
                                    ),
                                    l.endOnNext && (l.end = t.get(l.classId)),
                                    t.set(l.classId, l.start);
                                  var f = l.end
                                      ? l.end.getTime()
                                      : l.start.getTime() +
                                        1e3 * (l.duration || 0),
                                    _ = n.get(l.classId);
                                  if (_) {
                                    var p,
                                      m = r(_);
                                    try {
                                      for (m.s(); !(p = m.n()).done; ) {
                                        var v = p.value;
                                        ((v.start <= d && v.end > d) ||
                                          (v.start >= d && v.start < f)) &&
                                          a.INVALIDPLAYLIST(
                                            "DATERANGE tags with the same CLASS should not overlap"
                                          );
                                      }
                                    } catch (e) {
                                      m.e(e);
                                    } finally {
                                      m.f();
                                    }
                                    _.push({ start: d, end: f });
                                  } else
                                    n.set(l.classId, [{ start: d, end: f }]);
                                }
                              }
                              i &&
                                !s &&
                                a.INVALIDPLAYLIST(
                                  "If a Playlist contains an EXT-X-DATERANGE tag, it MUST also contain at least one EXT-X-PROGRAM-DATE-TIME tag."
                                );
                            })(s.segments),
                            s.lowLatencyCompatibility &&
                              (function (e, t) {
                                var n = e.lowLatencyCompatibility,
                                  s = e.targetDuration,
                                  o = e.partTargetDuration,
                                  u = e.segments,
                                  c = e.renditionReports,
                                  l = n.canSkipUntil,
                                  d = n.holdBack,
                                  h = n.partHoldBack;
                                if (
                                  (l < 6 * s &&
                                    a.INVALIDPLAYLIST(
                                      "The Skip Boundary must be at least six times the EXT-X-TARGETDURATION."
                                    ),
                                  d < 3 * s &&
                                    a.INVALIDPLAYLIST(
                                      "HOLD-BACK must be at least three times the EXT-X-TARGETDURATION."
                                    ),
                                  t)
                                ) {
                                  void 0 === o &&
                                    a.INVALIDPLAYLIST(
                                      "EXT-X-PART-INF is required if a Playlist contains one or more EXT-X-PART tags"
                                    ),
                                    void 0 === h &&
                                      a.INVALIDPLAYLIST(
                                        "EXT-X-PART: PART-HOLD-BACK attribute is mandatory"
                                      ),
                                    h < o &&
                                      a.INVALIDPLAYLIST(
                                        "PART-HOLD-BACK must be at least PART-TARGET"
                                      );
                                  var f,
                                    _ = r(u.entries());
                                  try {
                                    for (_.s(); !(f = _.n()).done; ) {
                                      var p = i(f.value, 2),
                                        m = p[0],
                                        v = p[1].parts;
                                      v.length > 0 &&
                                        m < u.length - 3 &&
                                        a.INVALIDPLAYLIST(
                                          "Remove EXT-X-PART tags from the Playlist after they are greater than three target durations from the end of the Playlist."
                                        );
                                      var g,
                                        y = r(v.entries());
                                      try {
                                        for (y.s(); !(g = y.n()).done; ) {
                                          var E = i(g.value, 2),
                                            T = E[0],
                                            S = E[1].duration;
                                          void 0 !== S &&
                                            (S > o &&
                                              a.INVALIDPLAYLIST(
                                                "PART-TARGET is the maximum duration of any Partial Segment"
                                              ),
                                            T < v.length - 1 &&
                                              S < 0.85 * o &&
                                              a.INVALIDPLAYLIST(
                                                "All Partial Segments except the last part of a segment must have a duration of at least 85% of PART-TARGET"
                                              ));
                                        }
                                      } catch (e) {
                                        y.e(e);
                                      } finally {
                                        y.f();
                                      }
                                    }
                                  } catch (e) {
                                    _.e(e);
                                  } finally {
                                    _.f();
                                  }
                                }
                                var b,
                                  A = r(c);
                                try {
                                  for (A.s(); !(b = A.n()).done; ) {
                                    var I = b.value,
                                      w = u[u.length - 1];
                                    I.lastMSN ||
                                      (I.lastMSN = w.mediaSequenceNumber),
                                      !I.lastPart &&
                                        w.parts.length > 0 &&
                                        (I.lastPart = w.parts.length - 1);
                                  }
                                } catch (e) {
                                  A.e(e);
                                } finally {
                                  A.f();
                                }
                              })(s, f),
                            s
                          );
                        })(e, t)).isIFrame &&
                        t.hasMap &&
                        t.compatibleVersion < 6 &&
                        (t.compatibleVersion = 6),
                    t.compatibleVersion > 1 &&
                      (!n.version || n.version < t.compatibleVersion) &&
                      a.INVALIDPLAYLIST(
                        "EXT-X-VERSION needs to be ".concat(
                          t.compatibleVersion,
                          " or higher."
                        )
                      ),
                    n
                  );
                })(
                  (function (e, t) {
                    var n = [];
                    return (
                      e.split("\n").forEach(function (e) {
                        var r = e.trim();
                        if (r)
                          if (r.startsWith("#")) {
                            if (r.startsWith("#EXT")) {
                              var i = L(r, t);
                              return void (i && n.push(i));
                            }
                          } else n.push(r);
                      }),
                      (0 !== n.length && "EXTM3U" === n[0].name) ||
                        a.INVALIDPLAYLIST(
                          "The EXTM3U tag MUST be the first line."
                        ),
                      n
                    );
                  })(e, t),
                  t
                );
              return (n.source = e), n;
            };
          },
          367: (e, t, n) => {
            function r(e) {
              return (r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            function i(e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var n = [],
                      r = !0,
                      i = !1,
                      s = void 0;
                    try {
                      for (
                        var o, a = e[Symbol.iterator]();
                        !(r = (o = a.next()).done) &&
                        (n.push(o.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (e) {
                      (i = !0), (s = e);
                    } finally {
                      try {
                        r || null == a.return || a.return();
                      } finally {
                        if (i) throw s;
                      }
                    }
                    return n;
                  }
                })(e, t) ||
                o(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function s(e, t) {
              var n;
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                  Array.isArray(e) ||
                  (n = o(e)) ||
                  (t && e && "number" == typeof e.length)
                ) {
                  n && (e = n);
                  var r = 0,
                    i = function () {};
                  return {
                    s: i,
                    n: function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: i,
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var s,
                a = !0,
                u = !1;
              return {
                s: function () {
                  n = e[Symbol.iterator]();
                },
                n: function () {
                  var e = n.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (u = !0), (s = e);
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (u) throw s;
                  }
                },
              };
            }
            function o(e, t) {
              if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(e, t)
                    : void 0
                );
              }
            }
            function a(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
              return r;
            }
            function u(e, t, n) {
              return (u =
                "undefined" != typeof Reflect && Reflect.get
                  ? Reflect.get
                  : function (e, t, n) {
                      var r = (function (e, t) {
                        for (
                          ;
                          !Object.prototype.hasOwnProperty.call(e, t) &&
                          null !== (e = _(e));

                        );
                        return e;
                      })(e, t);
                      if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                      }
                    })(e, t, n || e);
            }
            function c(e, t) {
              return !t || ("object" !== r(t) && "function" != typeof t)
                ? (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(e)
                : t;
            }
            function l(e) {
              var t = "function" == typeof Map ? new Map() : void 0;
              return (l = function (e) {
                if (
                  null === e ||
                  ((n = e),
                  -1 === Function.toString.call(n).indexOf("[native code]"))
                )
                  return e;
                var n;
                if ("function" != typeof e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, r);
                }
                function r() {
                  return d(e, arguments, _(this).constructor);
                }
                return (
                  (r.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: r,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  f(r, e)
                );
              })(e);
            }
            function d(e, t, n) {
              return (d = h()
                ? Reflect.construct
                : function (e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var i = new (Function.bind.apply(e, r))();
                    return n && f(i, n.prototype), i;
                  }).apply(null, arguments);
            }
            function h() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            }
            function f(e, t) {
              return (f =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function _(e) {
              return (_ = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            var p = n(771),
              m = [
                "#EXTINF",
                "#EXT-X-BYTERANGE",
                "#EXT-X-DISCONTINUITY",
                "#EXT-X-STREAM-INF",
                "#EXT-X-CUE-OUT",
                "#EXT-X-CUE-IN",
                "#EXT-X-KEY",
                "#EXT-X-MAP",
              ],
              v = ["#EXT-X-MEDIA"],
              g = (function (e) {
                !(function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && f(e, t);
                })(s, e);
                var t,
                  n,
                  r,
                  i =
                    ((t = s),
                    (n = h()),
                    function () {
                      var e,
                        r = _(t);
                      if (n) {
                        var i = _(this).constructor;
                        e = Reflect.construct(r, arguments, i);
                      } else e = r.apply(this, arguments);
                      return c(this, e);
                    });
                function s(e) {
                  var t;
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, s),
                    ((t = i.call(this)).baseUri = e),
                    t
                  );
                }
                return (
                  (r = [
                    {
                      key: "push",
                      value: function () {
                        for (
                          var e = this,
                            t = arguments.length,
                            n = new Array(t),
                            r = 0;
                          r < t;
                          r++
                        )
                          n[r] = arguments[r];
                        for (
                          var i = function () {
                              var t = a[o];
                              if (!t.startsWith("#"))
                                return (
                                  u(_(s.prototype), "push", e).call(e, t),
                                  "continue"
                                );
                              if (
                                m.some(function (e) {
                                  return t.startsWith(e);
                                })
                              )
                                return (
                                  u(_(s.prototype), "push", e).call(e, t),
                                  "continue"
                                );
                              if (e.includes(t)) {
                                if (
                                  v.some(function (e) {
                                    return t.startsWith(e);
                                  })
                                )
                                  return "continue";
                                p.INVALIDPLAYLIST(
                                  "Redundant item (".concat(t, ")")
                                );
                              }
                              u(_(s.prototype), "push", e).call(e, t);
                            },
                            o = 0,
                            a = n;
                          o < a.length;
                          o++
                        )
                          i();
                      },
                    },
                  ]) &&
                    (function (e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r);
                      }
                    })(s.prototype, r),
                  s
                );
              })(l(Array));
            function y(e, t) {
              var n = 1e3;
              t && (n = Math.pow(10, t));
              var r = Math.round(e * n) / n;
              return t ? r.toFixed(t) : r;
            }
            function E(e) {
              var t = e.toString(10),
                n = t.indexOf(".");
              return -1 === n ? 0 : t.length - n - 1;
            }
            function T(e) {
              var t = ['DATA-ID="'.concat(e.id, '"')];
              return (
                e.language && t.push('LANGUAGE="'.concat(e.language, '"')),
                e.value
                  ? t.push('VALUE="'.concat(e.value, '"'))
                  : e.uri && t.push('URI="'.concat(e.uri, '"')),
                "#EXT-X-SESSION-DATA:".concat(t.join(","))
              );
            }
            function S(e, t) {
              var n = t ? "#EXT-X-SESSION-KEY" : "#EXT-X-KEY",
                r = ["METHOD=".concat(e.method)];
              return (
                e.uri && r.push('URI="'.concat(e.uri, '"')),
                e.iv &&
                  (16 !== e.iv.length &&
                    p.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"),
                  r.push("IV=".concat(p.byteSequenceToHex(e.iv)))),
                e.format && r.push('KEYFORMAT="'.concat(e.format, '"')),
                e.formatVersion &&
                  r.push('KEYFORMATVERSIONS="'.concat(e.formatVersion, '"')),
                "".concat(n, ":").concat(r.join(","))
              );
            }
            function b(e, t) {
              var n = t.isIFrameOnly
                  ? "#EXT-X-I-FRAME-STREAM-INF"
                  : "#EXT-X-STREAM-INF",
                r = ["BANDWIDTH=".concat(t.bandwidth)];
              if (
                (t.averageBandwidth &&
                  r.push("AVERAGE-BANDWIDTH=".concat(t.averageBandwidth)),
                t.isIFrameOnly && r.push('URI="'.concat(t.uri, '"')),
                t.codecs && r.push('CODECS="'.concat(t.codecs, '"')),
                t.resolution &&
                  r.push(
                    "RESOLUTION="
                      .concat(t.resolution.width, "x")
                      .concat(t.resolution.height)
                  ),
                t.frameRate && r.push("FRAME-RATE=".concat(y(t.frameRate, 3))),
                t.hdcpLevel && r.push("HDCP-LEVEL=".concat(t.hdcpLevel)),
                t.audio.length > 0)
              ) {
                r.push('AUDIO="'.concat(t.audio[0].groupId, '"'));
                var i,
                  o = s(t.audio);
                try {
                  for (o.s(); !(i = o.n()).done; ) {
                    var a = i.value;
                    e.push(A(a));
                  }
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
              }
              if (t.video.length > 0) {
                r.push('VIDEO="'.concat(t.video[0].groupId, '"'));
                var u,
                  c = s(t.video);
                try {
                  for (c.s(); !(u = c.n()).done; ) {
                    var l = u.value;
                    e.push(A(l));
                  }
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
              }
              if (t.subtitles.length > 0) {
                r.push('SUBTITLES="'.concat(t.subtitles[0].groupId, '"'));
                var d,
                  h = s(t.subtitles);
                try {
                  for (h.s(); !(d = h.n()).done; ) {
                    var f = d.value;
                    e.push(A(f));
                  }
                } catch (e) {
                  h.e(e);
                } finally {
                  h.f();
                }
              }
              if (
                p.getOptions().allowClosedCaptionsNone &&
                0 === t.closedCaptions.length
              )
                r.push("CLOSED-CAPTIONS=NONE");
              else if (t.closedCaptions.length > 0) {
                r.push(
                  'CLOSED-CAPTIONS="'.concat(t.closedCaptions[0].groupId, '"')
                );
                var _,
                  m = s(t.closedCaptions);
                try {
                  for (m.s(); !(_ = m.n()).done; ) {
                    var v = _.value;
                    e.push(A(v));
                  }
                } catch (e) {
                  m.e(e);
                } finally {
                  m.f();
                }
              }
              e.push("".concat(n, ":").concat(r.join(","))),
                t.isIFrameOnly || e.push("".concat(t.uri));
            }
            function A(e) {
              var t = [
                "TYPE=".concat(e.type),
                'GROUP-ID="'.concat(e.groupId, '"'),
                'NAME="'.concat(e.name, '"'),
              ];
              return (
                void 0 !== e.isDefault &&
                  t.push("DEFAULT=".concat(e.isDefault ? "YES" : "NO")),
                void 0 !== e.autoselect &&
                  t.push("AUTOSELECT=".concat(e.autoselect ? "YES" : "NO")),
                void 0 !== e.forced &&
                  t.push("FORCED=".concat(e.forced ? "YES" : "NO")),
                e.language && t.push('LANGUAGE="'.concat(e.language, '"')),
                e.assocLanguage &&
                  t.push('ASSOC-LANGUAGE="'.concat(e.assocLanguage, '"')),
                e.instreamId &&
                  t.push('INSTREAM-ID="'.concat(e.instreamId, '"')),
                e.characteristics &&
                  t.push('CHARACTERISTICS="'.concat(e.characteristics, '"')),
                e.channels && t.push('CHANNELS="'.concat(e.channels, '"')),
                e.uri && t.push('URI="'.concat(e.uri, '"')),
                "#EXT-X-MEDIA:".concat(t.join(","))
              );
            }
            function I(e, t, n, r) {
              var i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 1,
                s = !1;
              if (
                (t.byterange &&
                  e.push("#EXT-X-BYTERANGE:".concat(R(t.byterange))),
                t.discontinuity && e.push("#EXT-X-DISCONTINUITY"),
                t.key)
              ) {
                var o = S(t.key);
                o !== n && (e.push(o), (n = o));
              }
              if (t.map) {
                var a = w(t.map);
                a !== r && (e.push(a), (r = a));
              }
              if (
                (t.programDateTime &&
                  e.push(
                    "#EXT-X-PROGRAM-DATE-TIME:".concat(
                      p.formatDate(t.programDateTime)
                    )
                  ),
                t.dateRange && e.push(k(t.dateRange)),
                t.markers.length > 0 && P(e, t.markers),
                t.parts.length > 0 && (s = D(e, t.parts)),
                s)
              )
                return [n, r];
              var u =
                i < 3 ? Math.round(t.duration) : y(t.duration, E(t.duration));
              return (
                e.push(
                  "#EXTINF:"
                    .concat(u, ",")
                    .concat(unescape(encodeURIComponent(t.title || "")))
                ),
                Array.prototype.push.call(e, "".concat(t.uri)),
                [n, r]
              );
            }
            function w(e) {
              var t = ['URI="'.concat(e.uri, '"')];
              return (
                e.byterange &&
                  t.push('BYTERANGE="'.concat(R(e.byterange), '"')),
                "#EXT-X-MAP:".concat(t.join(","))
              );
            }
            function R(e) {
              var t = e.offset,
                n = e.length;
              return "".concat(n, "@").concat(t);
            }
            function k(e) {
              var t = ['ID="'.concat(e.id, '"')];
              return (
                e.start &&
                  t.push('START-DATE="'.concat(p.formatDate(e.start), '"')),
                e.end && t.push('END-DATE="'.concat(e.end, '"')),
                e.duration && t.push("DURATION=".concat(e.duration)),
                e.plannedDuration &&
                  t.push("PLANNED-DURATION=".concat(e.plannedDuration)),
                e.classId && t.push('CLASS="'.concat(e.classId, '"')),
                e.endOnNext && t.push("END-ON-NEXT=YES"),
                Object.keys(e.attributes).forEach(function (n) {
                  n.startsWith("X-")
                    ? "number" == typeof e.attributes[n]
                      ? t.push("".concat(n, "=").concat(e.attributes[n]))
                      : t.push("".concat(n, '="').concat(e.attributes[n], '"'))
                    : n.startsWith("SCTE35-") &&
                      t.push(
                        ""
                          .concat(n, "=")
                          .concat(p.byteSequenceToHex(e.attributes[n]))
                      );
                }),
                "#EXT-X-DATERANGE:".concat(t.join(","))
              );
            }
            function P(e, t) {
              var n,
                r = s(t);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var i = n.value;
                  if ("OUT" === i.type)
                    e.push("#EXT-X-CUE-OUT:".concat(i.duration));
                  else if ("IN" === i.type) e.push("#EXT-X-CUE-IN");
                  else if ("RAW" === i.type) {
                    var o = i.value ? ":".concat(i.value) : "";
                    e.push("#".concat(i.tagName).concat(o));
                  }
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
            }
            function D(e, t) {
              var n,
                r = !1,
                i = s(t);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var o = n.value;
                  if (o.hint) {
                    var a = [];
                    if (
                      (a.push("TYPE=PART"),
                      a.push('URI="'.concat(o.uri, '"')),
                      o.byterange)
                    ) {
                      var u = o.byterange,
                        c = u.offset,
                        l = u.length;
                      a.push("BYTERANGE-START=".concat(c)),
                        l && a.push("BYTERANGE-LENGTH=".concat(l));
                    }
                    e.push("#EXT-X-PRELOAD-HINT:".concat(a.join(","))),
                      (r = !0);
                  } else {
                    var d = [];
                    d.push("DURATION=".concat(o.duration)),
                      d.push('URI="'.concat(o.uri, '"')),
                      o.byterange &&
                        d.push("BYTERANGE=".concat(R(o.byterange))),
                      o.independent && d.push("INDEPENDENT=YES"),
                      o.gap && d.push("GAP=YES"),
                      e.push("#EXT-X-PART:".concat(d.join(",")));
                  }
                }
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
              return r;
            }
            e.exports = function (e) {
              p.PARAMCHECK(e),
                p.ASSERT("Not a playlist", "playlist" === e.type);
              var t = new g(e.uri);
              return (
                t.push("#EXTM3U"),
                e.version && t.push("#EXT-X-VERSION:".concat(e.version)),
                e.independentSegments && t.push("#EXT-X-INDEPENDENT-SEGMENTS"),
                e.start &&
                  t.push(
                    "#EXT-X-START:TIME-OFFSET="
                      .concat(y(e.start.offset))
                      .concat(e.start.precise ? ",PRECISE=YES" : "")
                  ),
                e.isMasterPlaylist
                  ? (function (e, t) {
                      var n,
                        r = s(t.sessionDataList);
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          var i = n.value;
                          e.push(T(i));
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                      var o,
                        a = s(t.sessionKeyList);
                      try {
                        for (a.s(); !(o = a.n()).done; ) {
                          var u = o.value;
                          e.push(S(u, !0));
                        }
                      } catch (e) {
                        a.e(e);
                      } finally {
                        a.f();
                      }
                      var c,
                        l = s(t.variants);
                      try {
                        for (l.s(); !(c = l.n()).done; ) b(e, c.value);
                      } catch (e) {
                        l.e(e);
                      } finally {
                        l.f();
                      }
                    })(t, e)
                  : (function (e, t) {
                      var n = "",
                        r = "";
                      if (
                        (t.targetDuration &&
                          e.push(
                            "#EXT-X-TARGETDURATION:".concat(t.targetDuration)
                          ),
                        t.lowLatencyCompatibility)
                      ) {
                        var o = t.lowLatencyCompatibility,
                          a = o.canBlockReload,
                          u = o.canSkipUntil,
                          c = o.holdBack,
                          l = o.partHoldBack,
                          d = [];
                        d.push("CAN-BLOCK-RELOAD=".concat(a ? "YES" : "NO")),
                          void 0 !== u && d.push("CAN-SKIP-UNTIL=".concat(u)),
                          void 0 !== c && d.push("HOLD-BACK=".concat(c)),
                          void 0 !== l && d.push("PART-HOLD-BACK=".concat(l)),
                          e.push("#EXT-X-SERVER-CONTROL:".concat(d.join(",")));
                      }
                      t.partTargetDuration &&
                        e.push(
                          "#EXT-X-PART-INF:PART-TARGET=".concat(
                            t.partTargetDuration
                          )
                        ),
                        t.mediaSequenceBase &&
                          e.push(
                            "#EXT-X-MEDIA-SEQUENCE:".concat(t.mediaSequenceBase)
                          ),
                        t.discontinuitySequenceBase &&
                          e.push(
                            "#EXT-X-DISCONTINUITY-SEQUENCE:".concat(
                              t.discontinuitySequenceBase
                            )
                          ),
                        t.playlistType &&
                          e.push(
                            "#EXT-X-PLAYLIST-TYPE:".concat(t.playlistType)
                          ),
                        t.isIFrame && e.push("#EXT-X-I-FRAMES-ONLY"),
                        t.skip > 0 &&
                          e.push(
                            "#EXT-X-SKIP:SKIPPED-SEGMENTS=".concat(t.skip)
                          );
                      var h,
                        f = s(t.segments);
                      try {
                        for (f.s(); !(h = f.n()).done; ) {
                          var _ = i(I(e, h.value, n, r, t.version), 2);
                          (n = _[0]), (r = _[1]);
                        }
                      } catch (e) {
                        f.e(e);
                      } finally {
                        f.f();
                      }
                      t.endlist && e.push("#EXT-X-ENDLIST");
                      var p,
                        m = s(t.renditionReports);
                      try {
                        for (m.s(); !(p = m.n()).done; ) {
                          var v = p.value,
                            g = [];
                          g.push('URI="'.concat(v.uri, '"')),
                            g.push("LAST-MSN=".concat(v.lastMSN)),
                            void 0 !== v.lastPart &&
                              g.push("LAST-PART=".concat(v.lastPart)),
                            e.push(
                              "#EXT-X-RENDITION-REPORT:".concat(g.join(","))
                            );
                        }
                      } catch (e) {
                        m.e(e);
                      } finally {
                        m.f();
                      }
                    })(t, e),
                t.join("\n")
              );
            };
          },
          890: (e, t, n) => {
            function r(e) {
              return (r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            function i(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t &&
                  (function (e, t) {
                    (
                      Object.setPrototypeOf ||
                      function (e, t) {
                        return (e.__proto__ = t), e;
                      }
                    )(e, t);
                  })(e, t);
            }
            function s(e) {
              var t = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })();
              return function () {
                var n,
                  r = a(e);
                if (t) {
                  var i = a(this).constructor;
                  n = Reflect.construct(r, arguments, i);
                } else n = r.apply(this, arguments);
                return o(this, n);
              };
            }
            function o(e, t) {
              return !t || ("object" !== r(t) && "function" != typeof t)
                ? (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(e)
                : t;
            }
            function a(e) {
              return (a = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            function u(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            var c = n(771),
              l = function e(t) {
                u(this, e), c.PARAMCHECK(t), (this.type = t);
              },
              d = (function (e) {
                i(n, e);
                var t = s(n);
                function n(e) {
                  var r,
                    i = e.isMasterPlaylist,
                    s = e.uri,
                    o = e.version,
                    a = e.independentSegments,
                    l = void 0 !== a && a,
                    d = e.start,
                    h = e.source;
                  return (
                    u(this, n),
                    (r = t.call(this, "playlist")),
                    c.PARAMCHECK(i),
                    (r.isMasterPlaylist = i),
                    (r.uri = s),
                    (r.version = o),
                    (r.independentSegments = l),
                    (r.start = d),
                    (r.source = h),
                    r
                  );
                }
                return n;
              })(l),
              h = (function (e) {
                i(n, e);
                var t = s(n);
                function n() {
                  var e,
                    r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  u(this, n), (r.isMasterPlaylist = !0), (e = t.call(this, r));
                  var i = r.variants,
                    s = void 0 === i ? [] : i,
                    o = r.currentVariant,
                    a = r.sessionDataList,
                    c = void 0 === a ? [] : a,
                    l = r.sessionKeyList,
                    d = void 0 === l ? [] : l;
                  return (
                    (e.variants = s),
                    (e.currentVariant = o),
                    (e.sessionDataList = c),
                    (e.sessionKeyList = d),
                    e
                  );
                }
                return n;
              })(d),
              f = (function (e) {
                i(n, e);
                var t = s(n);
                function n() {
                  var e,
                    r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  u(this, n), (r.isMasterPlaylist = !1), (e = t.call(this, r));
                  var i = r.targetDuration,
                    s = r.mediaSequenceBase,
                    o = void 0 === s ? 0 : s,
                    a = r.discontinuitySequenceBase,
                    c = void 0 === a ? 0 : a,
                    l = r.endlist,
                    d = void 0 !== l && l,
                    h = r.playlistType,
                    f = r.isIFrame,
                    _ = r.segments,
                    p = void 0 === _ ? [] : _,
                    m = r.lowLatencyCompatibility,
                    v = r.partTargetDuration,
                    g = r.renditionReports,
                    y = void 0 === g ? [] : g,
                    E = r.skip,
                    T = void 0 === E ? 0 : E,
                    S = r.hash;
                  return (
                    (e.targetDuration = i),
                    (e.mediaSequenceBase = o),
                    (e.discontinuitySequenceBase = c),
                    (e.endlist = d),
                    (e.playlistType = h),
                    (e.isIFrame = f),
                    (e.segments = p),
                    (e.lowLatencyCompatibility = m),
                    (e.partTargetDuration = v),
                    (e.renditionReports = y),
                    (e.skip = T),
                    (e.hash = S),
                    e
                  );
                }
                return n;
              })(d),
              _ = (function (e) {
                i(n, e);
                var t = s(n);
                function n(e) {
                  var r,
                    i = e.uri,
                    s = e.mimeType,
                    o = e.data,
                    a = e.duration,
                    c = e.title,
                    l = e.byterange,
                    d = e.discontinuity,
                    h = e.mediaSequenceNumber,
                    f = void 0 === h ? 0 : h,
                    _ = e.discontinuitySequence,
                    p = void 0 === _ ? 0 : _,
                    m = e.key,
                    v = e.map,
                    g = e.programDateTime,
                    y = e.dateRange,
                    E = e.markers,
                    T = void 0 === E ? [] : E,
                    S = e.parts,
                    b = void 0 === S ? [] : S;
                  return (
                    u(this, n),
                    ((r = t.call(this, "segment")).uri = i),
                    (r.mimeType = s),
                    (r.data = o),
                    (r.duration = a),
                    (r.title = c),
                    (r.byterange = l),
                    (r.discontinuity = d),
                    (r.mediaSequenceNumber = f),
                    (r.discontinuitySequence = p),
                    (r.key = m),
                    (r.map = v),
                    (r.programDateTime = g),
                    (r.dateRange = y),
                    (r.markers = T),
                    (r.parts = b),
                    r
                  );
                }
                return n;
              })(l),
              p = (function (e) {
                i(n, e);
                var t = s(n);
                function n(e) {
                  var r,
                    i = e.hint,
                    s = void 0 !== i && i,
                    o = e.uri,
                    a = e.duration,
                    l = e.independent,
                    d = e.byterange,
                    h = e.gap;
                  return (
                    u(this, n),
                    (r = t.call(this, "part")),
                    c.PARAMCHECK(o),
                    (r.hint = s),
                    (r.uri = o),
                    (r.duration = a),
                    (r.independent = l),
                    (r.duration = a),
                    (r.byterange = d),
                    (r.gap = h),
                    r
                  );
                }
                return n;
              })(l);
            e.exports = {
              Rendition: function e(t) {
                var n = t.type,
                  r = t.uri,
                  i = t.groupId,
                  s = t.language,
                  o = t.assocLanguage,
                  a = t.name,
                  l = t.isDefault,
                  d = t.autoselect,
                  h = t.forced,
                  f = t.instreamId,
                  _ = t.characteristics,
                  p = t.channels;
                u(this, e),
                  c.PARAMCHECK(n, i, a),
                  c.CONDITIONALASSERT(
                    ["SUBTITLES" === n, r],
                    ["CLOSED-CAPTIONS" === n, f],
                    ["CLOSED-CAPTIONS" === n, !r],
                    [h, "SUBTITLES" === n]
                  ),
                  (this.type = n),
                  (this.uri = r),
                  (this.groupId = i),
                  (this.language = s),
                  (this.assocLanguage = o),
                  (this.name = a),
                  (this.isDefault = l),
                  (this.autoselect = d),
                  (this.forced = h),
                  (this.instreamId = f),
                  (this.characteristics = _),
                  (this.channels = p);
              },
              Variant: function e(t) {
                var n = t.uri,
                  r = t.isIFrameOnly,
                  i = void 0 !== r && r,
                  s = t.bandwidth,
                  o = t.averageBandwidth,
                  a = t.codecs,
                  l = t.resolution,
                  d = t.frameRate,
                  h = t.hdcpLevel,
                  f = t.audio,
                  _ = void 0 === f ? [] : f,
                  p = t.video,
                  m = void 0 === p ? [] : p,
                  v = t.subtitles,
                  g = void 0 === v ? [] : v,
                  y = t.closedCaptions,
                  E = void 0 === y ? [] : y,
                  T = t.currentRenditions,
                  S =
                    void 0 === T
                      ? { audio: 0, video: 0, subtitles: 0, closedCaptions: 0 }
                      : T;
                u(this, e),
                  c.PARAMCHECK(n, s),
                  (this.uri = n),
                  (this.isIFrameOnly = i),
                  (this.bandwidth = s),
                  (this.averageBandwidth = o),
                  (this.codecs = a),
                  (this.resolution = l),
                  (this.frameRate = d),
                  (this.hdcpLevel = h),
                  (this.audio = _),
                  (this.video = m),
                  (this.subtitles = g),
                  (this.closedCaptions = E),
                  (this.currentRenditions = S);
              },
              SessionData: function e(t) {
                var n = t.id,
                  r = t.value,
                  i = t.uri,
                  s = t.language;
                u(this, e),
                  c.PARAMCHECK(n, r || i),
                  c.ASSERT(
                    "SessionData cannot have both value and uri, shoud be either.",
                    !(r && i)
                  ),
                  (this.id = n),
                  (this.value = r),
                  (this.uri = i),
                  (this.language = s);
              },
              Key: function e(t) {
                var n = t.method,
                  r = t.uri,
                  i = t.iv,
                  s = t.format,
                  o = t.formatVersion;
                u(this, e),
                  c.PARAMCHECK(n),
                  c.CONDITIONALPARAMCHECK(["NONE" !== n, r]),
                  c.CONDITIONALASSERT(["NONE" === n, !(r || i || s || o)]),
                  (this.method = n),
                  (this.uri = r),
                  (this.iv = i),
                  (this.format = s),
                  (this.formatVersion = o);
              },
              MediaInitializationSection: function e(t) {
                var n = t.hint,
                  r = void 0 !== n && n,
                  i = t.uri,
                  s = t.mimeType,
                  o = t.byterange;
                u(this, e),
                  c.PARAMCHECK(i),
                  (this.hint = r),
                  (this.uri = i),
                  (this.mimeType = s),
                  (this.byterange = o);
              },
              DateRange: function e(t) {
                var n = t.id,
                  r = t.classId,
                  i = t.start,
                  s = t.end,
                  o = t.duration,
                  a = t.plannedDuration,
                  l = t.endOnNext,
                  d = t.attributes,
                  h = void 0 === d ? {} : d;
                u(this, e),
                  c.PARAMCHECK(n),
                  c.CONDITIONALPARAMCHECK([!0 === l, r]),
                  c.CONDITIONALASSERT(
                    [s, i],
                    [s, i <= s],
                    [o, o >= 0],
                    [a, a >= 0]
                  ),
                  (this.id = n),
                  (this.classId = r),
                  (this.start = i),
                  (this.end = s),
                  (this.duration = o),
                  (this.plannedDuration = a),
                  (this.endOnNext = l),
                  (this.attributes = h);
              },
              SpliceInfo: function e(t) {
                var n = t.type,
                  r = t.duration,
                  i = t.tagName,
                  s = t.value;
                u(this, e),
                  c.PARAMCHECK(n),
                  c.CONDITIONALPARAMCHECK(["OUT" === n, r]),
                  c.CONDITIONALPARAMCHECK(["RAW" === n, i]),
                  (this.type = n),
                  (this.duration = r),
                  (this.tagName = i),
                  (this.value = s);
              },
              Playlist: d,
              MasterPlaylist: h,
              MediaPlaylist: f,
              Segment: _,
              PartialSegment: p,
              RenditionReport: function e(t) {
                var n = t.uri,
                  r = t.lastMSN,
                  i = t.lastPart;
                u(this, e),
                  c.PARAMCHECK(n),
                  (this.uri = n),
                  (this.lastMSN = r),
                  (this.lastPart = i);
              },
            };
          },
          771: (e) => {
            function t(e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var n = [],
                      r = !0,
                      i = !1,
                      s = void 0;
                    try {
                      for (
                        var o, a = e[Symbol.iterator]();
                        !(r = (o = a.next()).done) &&
                        (n.push(o.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (e) {
                      (i = !0), (s = e);
                    } finally {
                      try {
                        r || null == a.return || a.return();
                      } finally {
                        if (i) throw s;
                      }
                    }
                    return n;
                  }
                })(e, t) ||
                r(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function n(e, t) {
              var n;
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                  Array.isArray(e) ||
                  (n = r(e)) ||
                  (t && e && "number" == typeof e.length)
                ) {
                  n && (e = n);
                  var i = 0,
                    s = function () {};
                  return {
                    s,
                    n: function () {
                      return i >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[i++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: s,
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var o,
                a = !0,
                u = !1;
              return {
                s: function () {
                  n = e[Symbol.iterator]();
                },
                n: function () {
                  var e = n.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (u = !0), (o = e);
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (u) throw o;
                  }
                },
              };
            }
            function r(e, t) {
              if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? i(e, t)
                    : void 0
                );
              }
            }
            function i(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
              return r;
            }
            var s = {};
            function o(e) {
              if (s.strictMode) throw e;
              s.silent;
            }
            function a(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 10;
              if ("number" == typeof e) return e;
              var n =
                10 === t ? Number.parseFloat(e, t) : Number.parseInt(e, t);
              return Number.isNaN(n) ? 0 : n;
            }
            e.exports = {
              THROW: o,
              ASSERT: function (e) {
                for (
                  var r = arguments.length,
                    i = new Array(r > 1 ? r - 1 : 0),
                    s = 1;
                  s < r;
                  s++
                )
                  i[s - 1] = arguments[s];
                var a,
                  u = n(i.entries());
                try {
                  for (u.s(); !(a = u.n()).done; ) {
                    var c = t(a.value, 2),
                      l = c[0],
                      d = c[1];
                    d ||
                      o(
                        new Error("".concat(e, " : Failed at [").concat(l, "]"))
                      );
                  }
                } catch (e) {
                  u.e(e);
                } finally {
                  u.f();
                }
              },
              CONDITIONALASSERT: function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                var s,
                  a = n(r.entries());
                try {
                  for (a.s(); !(s = a.n()).done; ) {
                    var u = t(s.value, 2),
                      c = u[0],
                      l = t(u[1], 2),
                      d = l[0],
                      h = l[1];
                    d &&
                      (h ||
                        o(
                          new Error(
                            "Conditional Assert : Failed at [".concat(c, "]")
                          )
                        ));
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
              },
              PARAMCHECK: function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                var s,
                  a = n(r.entries());
                try {
                  for (a.s(); !(s = a.n()).done; ) {
                    var u = t(s.value, 2),
                      c = u[0],
                      l = u[1];
                    void 0 === l &&
                      o(new Error("Param Check : Failed at [".concat(c, "]")));
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
              },
              CONDITIONALPARAMCHECK: function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                var s,
                  a = n(r.entries());
                try {
                  for (a.s(); !(s = a.n()).done; ) {
                    var u = t(s.value, 2),
                      c = u[0],
                      l = t(u[1], 2),
                      d = l[0],
                      h = l[1];
                    d &&
                      void 0 === h &&
                      o(
                        new Error(
                          "Conditional Param Check : Failed at [".concat(c, "]")
                        )
                      );
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
              },
              INVALIDPLAYLIST: function (e) {
                o(new Error("Invalid Playlist : ".concat(e)));
              },
              toNumber: a,
              hexToByteSequence: function (e) {
                (e.startsWith("0x") || e.startsWith("0X")) && (e = e.slice(2));
                for (var t = [], n = 0; n < e.length; n += 2)
                  t.push(a(e.slice(n, n + 2), 16));
                return Buffer.from(t);
              },
              byteSequenceToHex: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : e.length;
                n <= t &&
                  o(
                    new Error(
                      "end must be larger than start : start="
                        .concat(t, ", end=")
                        .concat(n)
                    )
                  );
                for (var r = [], i = t; i < n; i++)
                  r.push(
                    "0"
                      .concat((255 & e[i]).toString(16).toUpperCase())
                      .slice(-2)
                  );
                return "0x".concat(r.join(""));
              },
              tryCatch: function (e, t) {
                try {
                  return e();
                } catch (e) {
                  return t(e);
                }
              },
              splitAt: function (e, t) {
                for (
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    r = -1,
                    i = 0,
                    s = 0;
                  i < e.length;
                  i++
                )
                  if (e[i] === t) {
                    if (s++ === n) return [e.slice(0, i), e.slice(i + 1)];
                    r = i;
                  }
                return -1 !== r ? [e.slice(0, r), e.slice(r + 1)] : [e];
              },
              trim: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : " ";
                return e
                  ? ((e = e.trim()),
                    " " === t ||
                      (e.startsWith(t) && (e = e.slice(1)),
                      e.endsWith(t) && (e = e.slice(0, -1))),
                    e)
                  : e;
              },
              splitByCommaWithPreservingQuotes: function (e) {
                for (
                  var t = [], n = !0, r = 0, i = [], s = 0;
                  s < e.length;
                  s++
                ) {
                  var o = e[s];
                  n && "," === o
                    ? (t.push(e.slice(r, s).trim()), (r = s + 1))
                    : ('"' !== o && "'" !== o) ||
                      (n
                        ? (i.push(o), (n = !1))
                        : o === i[i.length - 1]
                        ? (i.pop(), (n = !0))
                        : i.push(o));
                }
                return t.push(e.slice(r).trim()), t;
              },
              camelify: function (e) {
                var t,
                  r = [],
                  i = !1,
                  s = n(e);
                try {
                  for (s.s(); !(t = s.n()).done; ) {
                    var o = t.value;
                    "-" !== o && "_" !== o
                      ? i
                        ? (r.push(o.toUpperCase()), (i = !1))
                        : r.push(o.toLowerCase())
                      : (i = !0);
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
                return r.join("");
              },
              formatDate: function (e) {
                var t = e.getUTCFullYear(),
                  n = ("0" + (e.getUTCMonth() + 1)).slice(-2),
                  r = ("0" + e.getUTCDate()).slice(-2),
                  i = ("0" + e.getUTCHours()).slice(-2),
                  s = ("0" + e.getUTCMinutes()).slice(-2),
                  o = ("0" + e.getUTCSeconds()).slice(-2),
                  a = ("00" + e.getUTCMilliseconds()).slice(-3);
                return ""
                  .concat(t, "-")
                  .concat(n, "-")
                  .concat(r, "T")
                  .concat(i, ":")
                  .concat(s, ":")
                  .concat(o, ".")
                  .concat(a, "Z");
              },
              hasOwnProp: function (e, t) {
                return Object.hasOwnProperty.call(e, t);
              },
              setOptions: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                s = Object.assign(s, e);
              },
              getOptions: function () {
                return Object.assign({}, s);
              },
            };
          },
        }),
        (t = {}),
        (function n(r) {
          if (t[r]) return t[r].exports;
          var i = (t[r] = { exports: {} });
          return e[r](i, i.exports, n), i.exports;
        })(851)
      );
      var e, t;
    })());
});
function Af() {
  return (Af =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var If,
  wf = ["bottom", "height", "left", "right", "top", "width"],
  Rf = new Map(),
  kf = "undefined" != typeof window ? Wh.useLayoutEffect : Wh.useEffect;
function Pf(e, t) {
  void 0 === t && (t = { width: 0, height: 0 });
  var n = Wh.useState(e.current),
    r = n[0],
    i = n[1],
    s = Wh.useReducer(Df, t),
    o = s[0],
    a = s[1],
    u = Wh.useRef(!1);
  return (
    kf(function () {
      e.current !== r && i(e.current);
    }),
    kf(
      function () {
        if (r && !u.current) {
          u.current = !0;
          var e = r.getBoundingClientRect();
          a({ rect: e });
        }
      },
      [r]
    ),
    Wh.useEffect(
      function () {
        if (r) {
          var e = (function (e, t) {
            return {
              observe: function () {
                var n = 0 === Rf.size;
                Rf.has(e)
                  ? Rf.get(e).callbacks.push(t)
                  : Rf.set(e, {
                      rect: void 0,
                      hasRectChanged: !1,
                      callbacks: [t],
                    }),
                  n &&
                    (function e() {
                      var t = [];
                      Rf.forEach(function (e, n) {
                        var r = n.getBoundingClientRect();
                        (function (e, t) {
                          return (
                            void 0 === e && (e = {}),
                            void 0 === t && (t = {}),
                            wf.some(function (n) {
                              return e[n] !== t[n];
                            })
                          );
                        })(r, e.rect) && ((e.rect = r), t.push(e));
                      }),
                        t.forEach(function (e) {
                          e.callbacks.forEach(function (t) {
                            return t(e.rect);
                          });
                        }),
                        (If = window.requestAnimationFrame(e));
                    })();
              },
              unobserve: function () {
                var n = Rf.get(e);
                if (n) {
                  var r = n.callbacks.indexOf(t);
                  r >= 0 && n.callbacks.splice(r, 1),
                    n.callbacks.length || Rf.delete(e),
                    Rf.size || cancelAnimationFrame(If);
                }
              },
            };
          })(r, function (e) {
            a({ rect: e });
          });
          return (
            e.observe(),
            function () {
              e.unobserve();
            }
          );
        }
      },
      [r]
    ),
    o
  );
}
function Df(e, t) {
  var n = t.rect;
  return e.height !== n.height || e.width !== n.width ? n : e;
}
var Of = function () {
    return 50;
  },
  Lf = function (e) {
    return e;
  },
  Cf = function (e, t) {
    return e[t ? "offsetWidth" : "offsetHeight"];
  },
  Mf = function (e) {
    for (
      var t = Math.max(e.start - e.overscan, 0),
        n = Math.min(e.end + e.overscan, e.size - 1),
        r = [],
        i = t;
      i <= n;
      i++
    )
      r.push(i);
    return r;
  };
function Nf(e) {
  var t,
    n = e.size,
    r = void 0 === n ? 0 : n,
    i = e.estimateSize,
    s = void 0 === i ? Of : i,
    o = e.overscan,
    a = void 0 === o ? 1 : o,
    u = e.paddingStart,
    c = void 0 === u ? 0 : u,
    l = e.paddingEnd,
    d = void 0 === l ? 0 : l,
    h = e.parentRef,
    f = e.horizontal,
    _ = e.scrollToFn,
    p = e.useObserver,
    m = e.initialRect,
    v = e.onScrollElement,
    g = e.scrollOffsetFn,
    y = e.keyExtractor,
    E = void 0 === y ? Lf : y,
    T = e.measureSize,
    S = void 0 === T ? Cf : T,
    b = e.rangeExtractor,
    A = void 0 === b ? Mf : b,
    I = f ? "width" : "height",
    w = f ? "scrollLeft" : "scrollTop",
    R = Wh.useRef({ scrollOffset: 0, measurements: [] }),
    k = Wh.useState(0),
    P = k[0],
    D = k[1];
  R.current.scrollOffset = P;
  var O = (p || Pf)(h, m)[I];
  R.current.outerSize = O;
  var L = Wh.useCallback(
      function (e) {
        h.current && (h.current[w] = e);
      },
      [h, w]
    ),
    C = _ || L;
  _ = Wh.useCallback(
    function (e) {
      C(e, L);
    },
    [L, C]
  );
  var M = Wh.useState({}),
    N = M[0],
    x = M[1],
    U = Wh.useCallback(function () {
      return x({});
    }, []),
    F = Wh.useRef([]),
    j = Wh.useMemo(
      function () {
        var e = F.current.length > 0 ? Math.min.apply(Math, F.current) : 0;
        F.current = [];
        for (var t = R.current.measurements.slice(0, e), n = e; n < r; n++) {
          var i = E(n),
            o = N[i],
            a = t[n - 1] ? t[n - 1].end : c,
            u = "number" == typeof o ? o : s(n),
            l = a + u;
          t[n] = { index: n, start: a, size: u, end: l, key: i };
        }
        return t;
      },
      [s, N, c, r, E]
    ),
    B = ((null == (t = j[r - 1]) ? void 0 : t.end) || c) + d;
  (R.current.measurements = j), (R.current.totalSize = B);
  var V = v ? v.current : h.current,
    H = Wh.useRef(g);
  (H.current = g),
    kf(
      function () {
        if (V) {
          var e = function (e) {
            var t = H.current ? H.current(e) : V[w];
            D(t);
          };
          return (
            e(),
            V.addEventListener("scroll", e, { capture: !1, passive: !0 }),
            function () {
              V.removeEventListener("scroll", e);
            }
          );
        }
        D(0);
      },
      [V, w]
    );
  var X = (function (e) {
      for (
        var t = e.measurements,
          n = e.outerSize,
          r = e.scrollOffset,
          i = t.length - 1,
          s = (function (e, t, n, r) {
            for (; e <= t; ) {
              var i = ((e + t) / 2) | 0,
                s = n(i);
              if (s < r) e = i + 1;
              else {
                if (!(s > r)) return i;
                t = i - 1;
              }
            }
            return e > 0 ? e - 1 : 0;
          })(
            0,
            i,
            function (e) {
              return t[e].start;
            },
            r
          ),
          o = s;
        o < i && t[o].end < r + n;

      )
        o++;
      return { start: s, end: o };
    })(R.current),
    q = X.start,
    G = X.end,
    W = Wh.useMemo(
      function () {
        return A({ start: q, end: G, overscan: a, size: j.length });
      },
      [q, G, a, j.length, A]
    ),
    K = Wh.useRef(S);
  K.current = S;
  var Y = Wh.useMemo(
      function () {
        for (
          var e = [],
            t = function (t, n) {
              var r = W[t],
                i = Af(
                  Af({}, j[r]),
                  {},
                  {
                    measureRef: function (e) {
                      if (e) {
                        var t = K.current(e, f);
                        if (t !== i.size) {
                          var n = R.current.scrollOffset;
                          i.start < n && L(n + (t - i.size)),
                            F.current.push(r),
                            x(function (e) {
                              var n;
                              return Af(
                                Af({}, e),
                                {},
                                (((n = {})[i.key] = t), n)
                              );
                            });
                        }
                      }
                    },
                  }
                );
              e.push(i);
            },
            n = 0,
            r = W.length;
          n < r;
          n++
        )
          t(n);
        return e;
      },
      [W, L, f, j]
    ),
    $ = Wh.useRef(!1);
  kf(
    function () {
      $.current && x({}), ($.current = !0);
    },
    [s]
  );
  var z = Wh.useCallback(
      function (e, t) {
        var n = (void 0 === t ? {} : t).align,
          r = void 0 === n ? "start" : n,
          i = R.current,
          s = i.scrollOffset,
          o = i.outerSize;
        "auto" === r && (r = e <= s ? "start" : e >= s + o ? "end" : "start"),
          "start" === r
            ? _(e)
            : "end" === r
            ? _(e - o)
            : "center" === r && _(e - o / 2);
      },
      [_]
    ),
    Q = Wh.useCallback(
      function (e, t) {
        var n = void 0 === t ? {} : t,
          i = n.align,
          s = void 0 === i ? "auto" : i,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(n, ["align"]),
          a = R.current,
          u = a.measurements,
          c = a.scrollOffset,
          l = a.outerSize,
          d = u[Math.max(0, Math.min(e, r - 1))];
        if (d) {
          if ("auto" === s)
            if (d.end >= c + l) s = "end";
            else {
              if (!(d.start <= c)) return;
              s = "start";
            }
          var h =
            "center" === s
              ? d.start + d.size / 2
              : "end" === s
              ? d.end
              : d.start;
          z(h, Af({ align: s }, o));
        }
      },
      [z, r]
    ),
    J = Wh.useCallback(
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        Q.apply(void 0, t),
          requestAnimationFrame(function () {
            Q.apply(void 0, t);
          });
      },
      [Q]
    );
  return {
    virtualItems: Y,
    totalSize: B,
    scrollToOffset: z,
    scrollToIndex: J,
    measure: U,
  };
}
export {
  mc as $,
  Ui as A,
  hi as B,
  cu as C,
  Ni as D,
  oi as E,
  Wo as F,
  Mi as G,
  Qo as H,
  b as I,
  At as J,
  tt as K,
  _u as L,
  di as M,
  ju as N,
  Bu as O,
  qo as P,
  Go as Q,
  ua as R,
  $o as S,
  ui as T,
  rn as U,
  ii as V,
  uc as W,
  ac as X,
  cc as Y,
  _l as Z,
  p as _,
  U as a,
  Lc as a0,
  zr as a1,
  fu as a2,
  vl as a3,
  vu as a4,
  O as a5,
  hu as a6,
  Ia as a7,
  F as a8,
  ml as a9,
  ah as aA,
  oh as aB,
  gd as aC,
  Th as aD,
  rh as aE,
  Bd as aF,
  ih as aG,
  $h as aH,
  Yh as aI,
  zh as aJ,
  de as aK,
  ch as aL,
  Lh as aM,
  Sf as aN,
  Fd as aO,
  me as aP,
  bf as aQ,
  v as aR,
  g as aS,
  _ as aT,
  H as aU,
  t as aV,
  V as aW,
  sh as aX,
  Nf as aY,
  El as aa,
  yl as ab,
  Ol as ac,
  Ql as ad,
  ql as ae,
  Zl as af,
  Ma as ag,
  Jt as ah,
  tn as ai,
  Zt as aj,
  ou as ak,
  A as al,
  pc as am,
  Cu as an,
  rd as ao,
  ci as ap,
  I as aq,
  D as ar,
  af as as,
  sf as at,
  yf as au,
  th as av,
  f as aw,
  md as ax,
  Vd as ay,
  Zd as az,
  j as b,
  Cr as c,
  N as d,
  e,
  o as f,
  Nt as g,
  r as h,
  au as i,
  Tu as j,
  sn as k,
  a as l,
  Fa as m,
  bu as n,
  Yo as o,
  x as p,
  Ko as q,
  ae as r,
  Le as s,
  zo as t,
  Ho as u,
  Xo as v,
  ea as w,
  G as x,
  li as y,
  xi as z,
};
