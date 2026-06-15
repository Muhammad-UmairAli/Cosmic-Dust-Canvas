import Le, { useRef as A, useEffect as ue } from "react";
var ce = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function gr() {
  if (De) return U;
  De = 1;
  var r = Le, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, g, _) {
    var f, E = {}, S = null, j = null;
    _ !== void 0 && (S = "" + _), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (j = g.ref);
    for (f in g) o.call(g, f) && !c.hasOwnProperty(f) && (E[f] = g[f]);
    if (d && d.defaultProps) for (f in g = d.defaultProps, g) E[f] === void 0 && (E[f] = g[f]);
    return { $$typeof: a, type: d, key: S, ref: j, props: E, _owner: s.current };
  }
  return U.Fragment = i, U.jsx = l, U.jsxs = l, U;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function pr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Le, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), I = Symbol.iterator, Y = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = I && e[I] || e[Y];
      return typeof t == "function" ? t : null;
    }
    var C = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
          n[u - 1] = arguments[u];
        w("error", e, n);
      }
    }
    function w(e, t, n) {
      {
        var u = C.ReactDebugCurrentFrame, m = u.getStackAddendum();
        m !== "" && (t += "%s", n = n.concat([m]));
        var p = n.map(function(h) {
          return String(h);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var x = !1, Q = !1, Z = !1, N = !1, q = !1, fe;
    fe = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === c || q || e === s || e === _ || e === f || N || e === j || x || Q || Z || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === l || e.$$typeof === d || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Ve(e, t, n) {
      var u = e.displayName;
      if (u)
        return u;
      var m = t.displayName || t.name || "";
      return m !== "" ? n + "(" + m + ")" : n;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case c:
          return "Profiler";
        case s:
          return "StrictMode";
        case _:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var t = e;
            return le(t) + ".Consumer";
          case l:
            var n = e;
            return le(n._context) + ".Provider";
          case g:
            return Ve(e, e.render, "ForwardRef");
          case E:
            var u = e.displayName || null;
            return u !== null ? u : k(e.type) || "Memo";
          case S: {
            var m = e, p = m._payload, h = m._init;
            try {
              return k(h(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, z = 0, de, ve, he, me, ge, pe, ye;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ue() {
      {
        if (z === 0) {
          de = console.log, ve = console.info, he = console.warn, me = console.error, ge = console.group, pe = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        z++;
      }
    }
    function Xe() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: de
            }),
            info: D({}, e, {
              value: ve
            }),
            warn: D({}, e, {
              value: he
            }),
            error: D({}, e, {
              value: me
            }),
            group: D({}, e, {
              value: ge
            }),
            groupCollapsed: D({}, e, {
              value: pe
            }),
            groupEnd: D({}, e, {
              value: ye
            })
          });
        }
        z < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = C.ReactCurrentDispatcher, re;
    function B(e, t, n) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (m) {
            var u = m.stack.trim().match(/\n( *(at )?)/);
            re = u && u[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, K;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ne();
    }
    function Ee(e, t) {
      if (!e || te)
        return "";
      {
        var n = K.get(e);
        if (n !== void 0)
          return n;
      }
      var u;
      te = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = ee.current, ee.current = null, Ue();
      try {
        if (t) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (O) {
              u = O;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (O) {
              u = O;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            u = O;
          }
          e();
        }
      } catch (O) {
        if (O && u && typeof O.stack == "string") {
          for (var v = O.stack.split(`
`), P = u.stack.split(`
`), y = v.length - 1, R = P.length - 1; y >= 1 && R >= 0 && v[y] !== P[R]; )
            R--;
          for (; y >= 1 && R >= 0; y--, R--)
            if (v[y] !== P[R]) {
              if (y !== 1 || R !== 1)
                do
                  if (y--, R--, R < 0 || v[y] !== P[R]) {
                    var T = `
` + v[y].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, T), T;
                  }
                while (y >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = p, Xe(), Error.prepareStackTrace = m;
      }
      var $ = e ? e.displayName || e.name : "", F = $ ? B($) : "";
      return typeof e == "function" && K.set(e, F), F;
    }
    function qe(e, t, n) {
      return Ee(e, !1);
    }
    function Be(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function G(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Be(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case _:
          return B("Suspense");
        case f:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return qe(e.render);
          case E:
            return G(e.type, t, n);
          case S: {
            var u = e, m = u._payload, p = u._init;
            try {
              return G(p(m), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, be = {}, _e = C.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var t = e._owner, n = G(e.type, e._source, t ? t.type : null);
        _e.setExtraStackFrame(n);
      } else
        _e.setExtraStackFrame(null);
    }
    function Ke(e, t, n, u, m) {
      {
        var p = Function.call.bind(V);
        for (var h in e)
          if (p(e, h)) {
            var v = void 0;
            try {
              if (typeof e[h] != "function") {
                var P = Error((u || "React class") + ": " + n + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              v = e[h](t, h, u, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              v = y;
            }
            v && !(v instanceof Error) && (J(m), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", n, h, typeof v), J(null)), v instanceof Error && !(v.message in be) && (be[v.message] = !0, J(m), b("Failed %s type: %s", n, v.message), J(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ne(e) {
      return Ge(e);
    }
    function Je(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function He(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Pe(e) {
      if (He(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), we(e);
    }
    var Oe = C.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Te;
    function Ze(e) {
      if (V.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (V.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, t) {
      typeof e.ref == "string" && Oe.current;
    }
    function tr(e, t) {
      {
        var n = function() {
          Se || (Se = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function nr(e, t) {
      {
        var n = function() {
          Te || (Te = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ar = function(e, t, n, u, m, p, h) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: h,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function ir(e, t, n, u, m) {
      {
        var p, h = {}, v = null, P = null;
        n !== void 0 && (Pe(n), v = "" + n), er(t) && (Pe(t.key), v = "" + t.key), Ze(t) && (P = t.ref, rr(t, m));
        for (p in t)
          V.call(t, p) && !Qe.hasOwnProperty(p) && (h[p] = t[p]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (p in y)
            h[p] === void 0 && (h[p] = y[p]);
        }
        if (v || P) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && tr(h, R), P && nr(h, R);
        }
        return ar(e, v, P, m, u, Oe.current, h);
      }
    }
    var ae = C.ReactCurrentOwner, Ce = C.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var t = e._owner, n = G(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function xe() {
      {
        if (ae.current) {
          var e = k(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var je = {};
    function sr(e) {
      {
        var t = xe();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Me(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = sr(t);
        if (je[n])
          return;
        je[n] = !0;
        var u = "";
        e && e._owner && e._owner !== ae.current && (u = " It was passed a child from " + k(e._owner.type) + "."), L(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, u), L(null);
      }
    }
    function ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var n = 0; n < e.length; n++) {
            var u = e[n];
            oe(u) && Me(u, t);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = M(e);
          if (typeof m == "function" && m !== e.entries)
            for (var p = m.call(e), h; !(h = p.next()).done; )
              oe(h.value) && Me(h.value, t);
        }
      }
    }
    function ur(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === E))
          n = t.propTypes;
        else
          return;
        if (n) {
          var u = k(t);
          Ke(n, e.props, "prop", u, e);
        } else if (t.PropTypes !== void 0 && !ie) {
          ie = !0;
          var m = k(t);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var u = t[n];
          if (u !== "children" && u !== "key") {
            L(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var Ae = {};
    function Ie(e, t, n, u, m, p) {
      {
        var h = ze(e);
        if (!h) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = or();
          P ? v += P : v += xe();
          var y;
          e === null ? y = "null" : ne(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (k(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, v);
        }
        var R = ir(e, t, n, m, p);
        if (R == null)
          return R;
        if (h) {
          var T = t.children;
          if (T !== void 0)
            if (u)
              if (ne(T)) {
                for (var $ = 0; $ < T.length; $++)
                  ke(T[$], e);
                Object.freeze && Object.freeze(T);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(T, e);
        }
        if (V.call(t, "key")) {
          var F = k(e), O = Object.keys(t).filter(function(mr) {
            return mr !== "key";
          }), se = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[F + se]) {
            var hr = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, F, hr, F), Ae[F + se] = !0;
          }
        }
        return e === o ? cr(R) : ur(R), R;
      }
    }
    function fr(e, t, n) {
      return Ie(e, t, n, !0);
    }
    function lr(e, t, n) {
      return Ie(e, t, n, !1);
    }
    var dr = lr, vr = fr;
    X.Fragment = o, X.jsx = dr, X.jsxs = vr;
  }()), X;
}
process.env.NODE_ENV === "production" ? ce.exports = gr() : ce.exports = pr();
var $e = ce.exports;
const yr = "#ffffff";
function We(r, a, i, o, s) {
  const c = i.length > 0 ? i : [yr], l = Math.min(o, s), d = Math.max(o, s), g = Math.random() * Math.PI * 2, _ = 0.2 + Math.random() * 0.8;
  return {
    x: Math.random() * r,
    y: Math.random() * a,
    baseVx: Math.cos(g) * _,
    baseVy: Math.sin(g) * _,
    size: l + Math.random() * (d - l),
    opacity: 0.4 + Math.random() * 0.6,
    color: c[Math.floor(Math.random() * c.length)],
    springOffsetX: 0,
    springOffsetY: 0
  };
}
function Rr(r, a, i, o, s, c) {
  return Array.from(
    { length: r },
    () => We(a, i, o, s, c)
  );
}
function Er(r, a, i, o) {
  r.x += r.baseVx * o, r.y += r.baseVy * o, r.x < -r.size ? r.x = a + r.size : r.x > a + r.size && (r.x = -r.size), r.y < -r.size ? r.y = i + r.size : r.y > i + r.size && (r.y = -r.size);
}
function br(r, a, i, o) {
  r.arc(a, i, o, 0, Math.PI * 2);
}
function _r(r, a, i, o) {
  const s = o / Math.SQRT2;
  r.rect(a - s, i - s, 2 * s, 2 * s);
}
function wr(r, a, i, o) {
  for (let s = 0; s < 3; s++) {
    const c = -Math.PI / 2 + s * 2 * Math.PI / 3, l = a + o * Math.cos(c), d = i + o * Math.sin(c);
    s === 0 ? r.moveTo(l, d) : r.lineTo(l, d);
  }
  r.closePath();
}
function Pr(r, a, i, o) {
  const c = o * 0.5;
  for (let l = 0; l < 5 * 2; l++) {
    const d = l % 2 === 0 ? o : c, g = -Math.PI / 2 + l * Math.PI / 5, _ = a + d * Math.cos(g), f = i + d * Math.sin(g);
    l === 0 ? r.moveTo(_, f) : r.lineTo(_, f);
  }
  r.closePath();
}
function Or(r, a, i, o, s) {
  switch (a) {
    case "square":
      return _r(r, i, o, s);
    case "triangle":
      return wr(r, i, o, s);
    case "star":
      return Pr(r, i, o, s);
    case "circle":
    default:
      return br(r, i, o, s);
  }
}
const Sr = 2048, W = /* @__PURE__ */ new Map();
function Tr(r, a) {
  const i = W.get(r);
  if (i) return i;
  const o = a();
  if (W.size >= Sr) {
    const s = W.keys().next().value;
    s !== void 0 && W.delete(s);
  }
  return W.set(r, o), o;
}
function Ye() {
  W.clear();
}
function Cr(r, a, i, o, s) {
  return `${r}|${a}|${i}|${o}|${s}`;
}
function xr(r, a, i, o, s = "circle") {
  const c = i + o;
  if (o > 0) {
    const l = i + o, d = r.createRadialGradient(c, c, i, c, c, l);
    d.addColorStop(0, a), d.addColorStop(1, "transparent"), r.fillStyle = d, r.beginPath(), r.arc(c, c, l, 0, Math.PI * 2), r.arc(c, c, i, 0, Math.PI * 2), r.fill("evenodd");
  }
  r.fillStyle = a, r.beginPath(), Or(r, s, c, c, i), r.fill();
}
function jr(r, a, i, o, s = "circle") {
  return Tr(Cr(s, r, a, i, o), () => {
    const c = 2 * (a + i), l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(c * o)), l.height = l.width;
    const d = l.getContext("2d");
    return d && (d.scale(o, o), xr(d, r, a, i, s)), l;
  });
}
const H = 120;
function Mr(r, a, i, o) {
  const s = a.x + a.springOffsetX, c = a.y + a.springOffsetY;
  if (i.renderParticle) {
    r.save(), r.globalAlpha = a.opacity, r.translate(s, c), i.renderParticle(r, a), r.restore();
    return;
  }
  const l = jr(a.color, a.size, i.glowIntensity, o, i.shape), d = a.size + i.glowIntensity;
  r.globalAlpha = a.opacity, r.drawImage(l, s - d, c - d, d * 2, d * 2);
}
function kr(r, a) {
  const i = A(a);
  i.current = a;
  const o = A([]), s = A({ x: -9999, y: -9999 }), c = A(0), l = A({ w: 0, h: 0 }), d = A(() => {
  }), g = A(() => {
  });
  ue(() => {
    const f = r.current;
    if (!f) return;
    const E = f.getContext("2d");
    if (!E) return;
    let S = window.devicePixelRatio || 1;
    const j = () => {
      const w = f.parentElement;
      l.current.w = w ? w.clientWidth : window.innerWidth, l.current.h = w ? w.clientHeight : window.innerHeight, f.width = l.current.w, f.height = l.current.h;
    };
    j();
    const { count: I, colors: Y, minSize: M, maxSize: C } = i.current;
    o.current = Rr(
      I,
      f.width,
      f.height,
      Y,
      M,
      C
    ), d.current = () => {
      const w = f.width, x = f.height;
      j();
      const Q = f.width / w, Z = f.height / x;
      for (const q of o.current)
        q.x *= Q, q.y *= Z;
      const N = window.devicePixelRatio || 1;
      N !== S && (S = N, Ye());
    }, g.current = (w) => {
      const x = f.getBoundingClientRect();
      s.current = { x: w.clientX - x.left, y: w.clientY - x.top };
    }, window.addEventListener("resize", d.current), window.addEventListener("mousemove", g.current);
    const b = () => {
      const w = i.current;
      E.clearRect(0, 0, f.width, f.height);
      for (const x of o.current)
        Er(x, f.width, f.height, w.speed), Ar(x, s.current, w), Mr(E, x, w, S);
      E.globalAlpha = 1, c.current = requestAnimationFrame(b);
    };
    return c.current = requestAnimationFrame(b), () => {
      cancelAnimationFrame(c.current), window.removeEventListener("resize", d.current), window.removeEventListener("mousemove", g.current);
    };
  }, [r]), ue(() => {
    const { count: f, colors: E, minSize: S, maxSize: j } = i.current, { w: I, h: Y } = l.current;
    if (I === 0 || Y === 0) return;
    const M = o.current;
    if (M.length !== f)
      if (f > M.length) {
        const C = Array.from(
          { length: f - M.length },
          () => We(I, Y, E, S, j)
        );
        o.current = [...M, ...C];
      } else
        o.current = M.slice(0, f);
  }, [a.count]);
  const _ = a.colors.join("|");
  ue(() => {
    Ye();
  }, [_, a.minSize, a.maxSize, a.glowIntensity, a.shape]);
}
function Ar(r, a, i) {
  if (i.mouseEffect === "none") {
    r.springOffsetX *= 0.9, r.springOffsetY *= 0.9;
    return;
  }
  const o = r.x + r.springOffsetX - a.x, s = r.y + r.springOffsetY - a.y, c = Math.sqrt(o * o + s * s);
  if (c < i.mouseInfluenceRadius && c > 0) {
    const l = (i.mouseInfluenceRadius - c) / i.mouseInfluenceRadius, d = i.mouseEffect === "repel" ? 1 : -1;
    r.springOffsetX += o / c * l * 6 * d, r.springOffsetY += s / c * l * 6 * d;
  }
  r.springOffsetX *= 0.92, r.springOffsetY *= 0.92, r.springOffsetX = Math.max(-H, Math.min(H, r.springOffsetX)), r.springOffsetY = Math.max(-H, Math.min(H, r.springOffsetY));
}
const Ir = ["#ffffff", "#a78bfa", "#60a5fa"], Dr = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none"
};
function Fr(r) {
  const a = A(null);
  return kr(a, {
    count: r.count,
    colors: r.colors,
    minSize: r.minSize,
    maxSize: r.maxSize,
    speed: r.speed,
    glowIntensity: r.glowIntensity,
    mouseInfluenceRadius: r.mouseInfluenceRadius,
    mouseEffect: r.mouseEffect,
    shape: r.shape,
    renderParticle: r.renderParticle
  }), /* @__PURE__ */ $e.jsx(
    "canvas",
    {
      ref: a,
      className: r.className,
      style: { ...Dr, ...r.style }
    }
  );
}
function Lr({
  count: r = 200,
  colors: a = Ir,
  minSize: i = 1,
  maxSize: o = 3,
  speed: s = 0.4,
  glowIntensity: c = 15,
  mouseInfluenceRadius: l = 120,
  mouseEffect: d = "repel",
  shape: g = "circle",
  renderParticle: _,
  className: f,
  style: E
}) {
  return typeof window > "u" ? null : /* @__PURE__ */ $e.jsx(
    Fr,
    {
      count: r,
      colors: a,
      minSize: i,
      maxSize: o,
      speed: s,
      glowIntensity: c,
      mouseInfluenceRadius: l,
      mouseEffect: d,
      shape: g,
      renderParticle: _,
      className: f,
      style: E
    }
  );
}
export {
  Lr as CosmicDustCanvas
};
//# sourceMappingURL=cosmic-dust-canvas.js.map
