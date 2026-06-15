import Le, { useRef as D, useEffect as ue } from "react";
var ce = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function mr() {
  if (Fe) return B;
  Fe = 1;
  var t = Le, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(p, m, x) {
    var f, b = {}, P = null, j = null;
    x !== void 0 && (P = "" + x), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (j = m.ref);
    for (f in m) i.call(m, f) && !g.hasOwnProperty(f) && (b[f] = m[f]);
    if (p && p.defaultProps) for (f in m = p.defaultProps, m) b[f] === void 0 && (b[f] = m[f]);
    return { $$typeof: o, type: p, key: P, ref: j, props: b, _owner: u.current };
  }
  return B.Fragment = s, B.jsx = v, B.jsxs = v, B;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function pr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Le, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), F = Symbol.iterator, L = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[L];
      return typeof r == "function" ? r : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        w("error", e, n);
      }
    }
    function w(e, r, n) {
      {
        var a = C.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (r += "%s", n = n.concat([d]));
        var h = n.map(function(l) {
          return String(l);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var _ = !1, U = !1, X = !1, $ = !1, M = !1, fe;
    fe = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === g || M || e === u || e === x || e === f || $ || e === j || _ || U || X || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === b || e.$$typeof === v || e.$$typeof === p || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Ve(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var d = r.displayName || r.name || "";
      return d !== "" ? n + "(" + d + ")" : n;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case g:
          return "Profiler";
        case u:
          return "StrictMode";
        case x:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return le(r) + ".Consumer";
          case v:
            var n = e;
            return le(n._context) + ".Provider";
          case m:
            return Ve(e, e.render, "ForwardRef");
          case b:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case P: {
            var d = e, h = d._payload, l = d._init;
            try {
              return k(l(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, N = 0, de, ve, he, ge, me, pe, ye;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ue() {
      {
        if (N === 0) {
          de = console.log, ve = console.info, he = console.warn, ge = console.error, me = console.group, pe = console.groupCollapsed, ye = console.groupEnd;
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
        N++;
      }
    }
    function Xe() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: de
            }),
            info: I({}, e, {
              value: ve
            }),
            warn: I({}, e, {
              value: he
            }),
            error: I({}, e, {
              value: ge
            }),
            group: I({}, e, {
              value: me
            }),
            groupCollapsed: I({}, e, {
              value: pe
            }),
            groupEnd: I({}, e, {
              value: ye
            })
          });
        }
        N < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = C.ReactCurrentDispatcher, re;
    function G(e, r, n) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            re = a && a[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, J;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ne();
    }
    function Ee(e, r) {
      if (!e || te)
        return "";
      {
        var n = J.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      te = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = ee.current, ee.current = null, Ue();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (S) {
              a = S;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (S) {
              a = S;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            a = S;
          }
          e();
        }
      } catch (S) {
        if (S && a && typeof S.stack == "string") {
          for (var c = S.stack.split(`
`), O = a.stack.split(`
`), y = c.length - 1, R = O.length - 1; y >= 1 && R >= 0 && c[y] !== O[R]; )
            R--;
          for (; y >= 1 && R >= 0; y--, R--)
            if (c[y] !== O[R]) {
              if (y !== 1 || R !== 1)
                do
                  if (y--, R--, R < 0 || c[y] !== O[R]) {
                    var T = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, T), T;
                  }
                while (y >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = h, Xe(), Error.prepareStackTrace = d;
      }
      var z = e ? e.displayName || e.name : "", Y = z ? G(z) : "";
      return typeof e == "function" && J.set(e, Y), Y;
    }
    function qe(e, r, n) {
      return Ee(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Be(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case x:
          return G("Suspense");
        case f:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return qe(e.render);
          case b:
            return H(e.type, r, n);
          case P: {
            var a = e, d = a._payload, h = a._init;
            try {
              return H(h(d), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, be = {}, _e = C.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(n);
      } else
        _e.setExtraStackFrame(null);
    }
    function Ke(e, r, n, a, d) {
      {
        var h = Function.call.bind(q);
        for (var l in e)
          if (h(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var O = Error((a || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              c = e[l](r, l, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (Z(d), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, l, typeof c), Z(null)), c instanceof Error && !(c.message in be) && (be[c.message] = !0, Z(d), E("Failed %s type: %s", n, c.message), Z(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ne(e) {
      return Ge(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
    function Oe(e) {
      if (He(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), we(e);
    }
    var Se = C.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, Pe;
    function Qe(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      typeof e.ref == "string" && Se.current;
    }
    function tr(e, r) {
      {
        var n = function() {
          xe || (xe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var n = function() {
          Pe || (Pe = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, n, a, d, h, l) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: l,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ir(e, r, n, a, d) {
      {
        var h, l = {}, c = null, O = null;
        n !== void 0 && (Oe(n), c = "" + n), er(r) && (Oe(r.key), c = "" + r.key), Qe(r) && (O = r.ref, rr(r, d));
        for (h in r)
          q.call(r, h) && !Ze.hasOwnProperty(h) && (l[h] = r[h]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (h in y)
            l[h] === void 0 && (l[h] = y[h]);
        }
        if (c || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && tr(l, R), O && nr(l, R);
        }
        return ar(e, c, O, d, a, Se.current, l);
      }
    }
    var ae = C.ReactCurrentOwner, Te = C.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(n);
      } else
        Te.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ce() {
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
        var r = Ce();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = sr(r);
        if (je[n])
          return;
        je[n] = !0;
        var a = "";
        e && e._owner && e._owner !== ae.current && (a = " It was passed a child from " + k(e._owner.type) + "."), W(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), W(null);
      }
    }
    function Me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            oe(a) && Ae(a, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = A(e);
          if (typeof d == "function" && d !== e.entries)
            for (var h = d.call(e), l; !(l = h.next()).done; )
              oe(l.value) && Ae(l.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = k(r);
          Ke(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var d = k(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            W(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var ke = {};
    function De(e, r, n, a, d, h) {
      {
        var l = ze(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = or();
          O ? c += O : c += Ce();
          var y;
          e === null ? y = "null" : ne(e) ? y = "array" : e !== void 0 && e.$$typeof === o ? (y = "<" + (k(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var R = ir(e, r, n, d, h);
        if (R == null)
          return R;
        if (l) {
          var T = r.children;
          if (T !== void 0)
            if (a)
              if (ne(T)) {
                for (var z = 0; z < T.length; z++)
                  Me(T[z], e);
                Object.freeze && Object.freeze(T);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(T, e);
        }
        if (q.call(r, "key")) {
          var Y = k(e), S = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), se = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[Y + se]) {
            var hr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, Y, hr, Y), ke[Y + se] = !0;
          }
        }
        return e === i ? cr(R) : ur(R), R;
      }
    }
    function fr(e, r, n) {
      return De(e, r, n, !0);
    }
    function lr(e, r, n) {
      return De(e, r, n, !1);
    }
    var dr = lr, vr = fr;
    K.Fragment = i, K.jsx = dr, K.jsxs = vr;
  }()), K;
}
process.env.NODE_ENV === "production" ? ce.exports = mr() : ce.exports = pr();
var $e = ce.exports;
const yr = "#ffffff";
function We(t, o, s, i, u) {
  const g = s.length > 0 ? s : [yr], v = Math.min(i, u), p = Math.max(i, u), m = Math.random() * Math.PI * 2, x = 0.2 + Math.random() * 0.8;
  return {
    x: Math.random() * t,
    y: Math.random() * o,
    baseVx: Math.cos(m) * x,
    baseVy: Math.sin(m) * x,
    size: v + Math.random() * (p - v),
    opacity: 0.4 + Math.random() * 0.6,
    color: g[Math.floor(Math.random() * g.length)],
    springOffsetX: 0,
    springOffsetY: 0
  };
}
function Rr(t, o, s, i, u, g) {
  return Array.from(
    { length: t },
    () => We(o, s, i, u, g)
  );
}
function Er(t, o, s, i) {
  t.x += t.baseVx * i, t.y += t.baseVy * i, t.x < -t.size ? t.x = o + t.size : t.x > o + t.size && (t.x = -t.size), t.y < -t.size ? t.y = s + t.size : t.y > s + t.size && (t.y = -t.size);
}
const br = 2048, V = /* @__PURE__ */ new Map();
function _r(t, o) {
  const s = V.get(t);
  if (s) return s;
  const i = o();
  if (V.size >= br) {
    const u = V.keys().next().value;
    u !== void 0 && V.delete(u);
  }
  return V.set(t, i), i;
}
function Ye() {
  V.clear();
}
function wr(t, o, s, i, u) {
  return `${t}|${o}|${s}|${i}|${u}`;
}
function Or(t, o, s, i) {
  const u = s + i;
  if (i > 0) {
    const g = s + i, v = t.createRadialGradient(u, u, s, u, u, g);
    v.addColorStop(0, o), v.addColorStop(1, "transparent"), t.fillStyle = v, t.beginPath(), t.arc(u, u, g, 0, Math.PI * 2), t.arc(u, u, s, 0, Math.PI * 2), t.fill("evenodd");
  }
  t.fillStyle = o, t.beginPath(), t.arc(u, u, s, 0, Math.PI * 2), t.fill();
}
function Sr(t, o, s, i, u = "circle") {
  return _r(wr(u, t, o, s, i), () => {
    const g = 2 * (o + s), v = document.createElement("canvas");
    v.width = Math.max(1, Math.round(g * i)), v.height = v.width;
    const p = v.getContext("2d");
    return p && (p.scale(i, i), Or(p, t, o, s)), v;
  });
}
const Q = 120;
function xr(t, o) {
  const s = D(o);
  s.current = o;
  const i = D([]), u = D({ x: -9999, y: -9999 }), g = D(0), v = D({ w: 0, h: 0 }), p = D(() => {
  }), m = D(() => {
  });
  ue(() => {
    const f = t.current;
    if (!f) return;
    const b = f.getContext("2d");
    if (!b) return;
    let P = window.devicePixelRatio || 1;
    const j = () => {
      const w = f.parentElement;
      v.current.w = w ? w.clientWidth : window.innerWidth, v.current.h = w ? w.clientHeight : window.innerHeight, f.width = v.current.w, f.height = v.current.h;
    };
    j();
    const { count: F, colors: L, minSize: A, maxSize: C } = s.current;
    i.current = Rr(
      F,
      f.width,
      f.height,
      L,
      A,
      C
    ), p.current = () => {
      const w = f.width, _ = f.height;
      j();
      const U = f.width / w, X = f.height / _;
      for (const M of i.current)
        M.x *= U, M.y *= X;
      const $ = window.devicePixelRatio || 1;
      $ !== P && (P = $, Ye());
    }, m.current = (w) => {
      const _ = f.getBoundingClientRect();
      u.current = { x: w.clientX - _.left, y: w.clientY - _.top };
    }, window.addEventListener("resize", p.current), window.addEventListener("mousemove", m.current);
    const E = () => {
      const w = s.current;
      b.clearRect(0, 0, f.width, f.height);
      for (const _ of i.current) {
        Er(_, f.width, f.height, w.speed), Pr(_, u.current, w);
        const U = _.x + _.springOffsetX, X = _.y + _.springOffsetY, $ = Sr(_.color, _.size, w.glowIntensity, P), M = _.size + w.glowIntensity;
        b.globalAlpha = _.opacity, b.drawImage($, U - M, X - M, M * 2, M * 2);
      }
      b.globalAlpha = 1, g.current = requestAnimationFrame(E);
    };
    return g.current = requestAnimationFrame(E), () => {
      cancelAnimationFrame(g.current), window.removeEventListener("resize", p.current), window.removeEventListener("mousemove", m.current);
    };
  }, [t]), ue(() => {
    const { count: f, colors: b, minSize: P, maxSize: j } = s.current, { w: F, h: L } = v.current;
    if (F === 0 || L === 0) return;
    const A = i.current;
    if (A.length !== f)
      if (f > A.length) {
        const C = Array.from(
          { length: f - A.length },
          () => We(F, L, b, P, j)
        );
        i.current = [...A, ...C];
      } else
        i.current = A.slice(0, f);
  }, [o.count]);
  const x = o.colors.join("|");
  ue(() => {
    Ye();
  }, [x, o.minSize, o.maxSize, o.glowIntensity]);
}
function Pr(t, o, s) {
  if (s.mouseEffect === "none") {
    t.springOffsetX *= 0.9, t.springOffsetY *= 0.9;
    return;
  }
  const i = t.x + t.springOffsetX - o.x, u = t.y + t.springOffsetY - o.y, g = Math.sqrt(i * i + u * u);
  if (g < s.mouseInfluenceRadius && g > 0) {
    const v = (s.mouseInfluenceRadius - g) / s.mouseInfluenceRadius, p = s.mouseEffect === "repel" ? 1 : -1;
    t.springOffsetX += i / g * v * 6 * p, t.springOffsetY += u / g * v * 6 * p;
  }
  t.springOffsetX *= 0.92, t.springOffsetY *= 0.92, t.springOffsetX = Math.max(-Q, Math.min(Q, t.springOffsetX)), t.springOffsetY = Math.max(-Q, Math.min(Q, t.springOffsetY));
}
const Tr = ["#ffffff", "#a78bfa", "#60a5fa"], Cr = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none"
};
function jr(t) {
  const o = D(null);
  return xr(o, {
    count: t.count,
    colors: t.colors,
    minSize: t.minSize,
    maxSize: t.maxSize,
    speed: t.speed,
    glowIntensity: t.glowIntensity,
    mouseInfluenceRadius: t.mouseInfluenceRadius,
    mouseEffect: t.mouseEffect
  }), /* @__PURE__ */ $e.jsx(
    "canvas",
    {
      ref: o,
      className: t.className,
      style: { ...Cr, ...t.style }
    }
  );
}
function Mr({
  count: t = 200,
  colors: o = Tr,
  minSize: s = 1,
  maxSize: i = 3,
  speed: u = 0.4,
  glowIntensity: g = 15,
  mouseInfluenceRadius: v = 120,
  mouseEffect: p = "repel",
  className: m,
  style: x
}) {
  return typeof window > "u" ? null : /* @__PURE__ */ $e.jsx(
    jr,
    {
      count: t,
      colors: o,
      minSize: s,
      maxSize: i,
      speed: u,
      glowIntensity: g,
      mouseInfluenceRadius: v,
      mouseEffect: p,
      className: m,
      style: x
    }
  );
}
export {
  Mr as CosmicDustCanvas
};
//# sourceMappingURL=cosmic-dust-canvas.js.map
