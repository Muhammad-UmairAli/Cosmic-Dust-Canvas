import Me, { useRef as I, useEffect as dr } from "react";
var oe = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function vr() {
  if (Ae) return U;
  Ae = 1;
  var n = Me, l = Symbol.for("react.element"), d = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(R, i, c) {
    var E, x = {}, P = null, Y = null;
    c !== void 0 && (P = "" + c), i.key !== void 0 && (P = "" + i.key), i.ref !== void 0 && (Y = i.ref);
    for (E in i) h.call(i, E) && !p.hasOwnProperty(E) && (x[E] = i[E]);
    if (R && R.defaultProps) for (E in i = R.defaultProps, i) x[E] === void 0 && (x[E] = i[E]);
    return { $$typeof: l, type: R, key: P, ref: Y, props: x, _owner: _.current };
  }
  return U.Fragment = d, U.jsx = y, U.jsxs = y, U;
}
var V = {};
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
function hr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Me, l = Symbol.for("react.element"), d = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), R = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), N = Symbol.iterator, K = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[K];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        w("error", e, t);
      }
    }
    function w(e, r, t) {
      {
        var a = j.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(s) {
          return String(s);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var v = !1, S = !1, k = !1, A = !1, Ie = !1, se;
    se = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === p || Ie || e === _ || e === c || e === E || A || e === Y || v || S || k || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === x || e.$$typeof === y || e.$$typeof === R || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case d:
          return "Portal";
        case p:
          return "Profiler";
        case _:
          return "StrictMode";
        case c:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ue(r) + ".Consumer";
          case y:
            var t = e;
            return ue(t._context) + ".Provider";
          case i:
            return Le(e, e.render, "ForwardRef");
          case x:
            var a = e.displayName || null;
            return a !== null ? a : F(e.type) || "Memo";
          case P: {
            var u = e, f = u._payload, s = u._init;
            try {
              return F(s(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, $ = 0, fe, ce, le, de, ve, he, ge;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function We() {
      {
        if ($ === 0) {
          fe = console.log, ce = console.info, le = console.warn, de = console.error, ve = console.group, he = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        $++;
      }
    }
    function $e() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: fe
            }),
            info: M({}, e, {
              value: ce
            }),
            warn: M({}, e, {
              value: le
            }),
            error: M({}, e, {
              value: de
            }),
            group: M({}, e, {
              value: ve
            }),
            groupCollapsed: M({}, e, {
              value: he
            }),
            groupEnd: M({}, e, {
              value: ge
            })
          });
        }
        $ < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = j.ReactCurrentDispatcher, Q;
    function X(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            Q = a && a[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, B;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      B = new ze();
    }
    function me(e, r) {
      if (!e || ee)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ee = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = Z.current, Z.current = null, We();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (C) {
              a = C;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (C) {
              a = C;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            a = C;
          }
          e();
        }
      } catch (C) {
        if (C && a && typeof C.stack == "string") {
          for (var o = C.stack.split(`
`), O = a.stack.split(`
`), g = o.length - 1, m = O.length - 1; g >= 1 && m >= 0 && o[g] !== O[m]; )
            m--;
          for (; g >= 1 && m >= 0; g--, m--)
            if (o[g] !== O[m]) {
              if (g !== 1 || m !== 1)
                do
                  if (g--, m--, m < 0 || o[g] !== O[m]) {
                    var T = `
` + o[g].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, T), T;
                  }
                while (g >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = f, $e(), Error.prepareStackTrace = u;
      }
      var W = e ? e.displayName || e.name : "", D = W ? X(W) : "";
      return typeof e == "function" && B.set(e, D), D;
    }
    function Ue(e, r, t) {
      return me(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ve(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case c:
          return X("Suspense");
        case E:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Ue(e.render);
          case x:
            return q(e.type, r, t);
          case P: {
            var a = e, u = a._payload, f = a._init;
            try {
              return q(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, ye = {}, Re = j.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function Ne(e, r, t, a, u) {
      {
        var f = Function.call.bind(z);
        for (var s in e)
          if (f(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var O = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              o = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              o = g;
            }
            o && !(o instanceof Error) && (G(u), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof o), G(null)), o instanceof Error && !(o.message in ye) && (ye[o.message] = !0, G(u), b("Failed %s type: %s", t, o.message), G(null));
          }
      }
    }
    var Xe = Array.isArray;
    function re(e) {
      return Xe(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function _e(e) {
      if (qe(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), Ee(e);
    }
    var be = j.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Oe;
    function Je(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function Ze(e, r) {
      {
        var t = function() {
          we || (we = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, a, u, f, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, t, a, u) {
      {
        var f, s = {}, o = null, O = null;
        t !== void 0 && (_e(t), o = "" + t), Ke(r) && (_e(r.key), o = "" + r.key), Je(r) && (O = r.ref, He(r, u));
        for (f in r)
          z.call(r, f) && !Ge.hasOwnProperty(f) && (s[f] = r[f]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (f in g)
            s[f] === void 0 && (s[f] = g[f]);
        }
        if (o || O) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(s, m), O && Qe(s, m);
        }
        return er(e, o, O, u, a, be.current, s);
      }
    }
    var te = j.ReactCurrentOwner, Ce = j.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Te() {
      {
        if (te.current) {
          var e = F(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var xe = {};
    function nr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== te.current && (a = " It was passed a child from " + F(e._owner.type) + "."), L(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), L(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ae(a) && Se(a, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = H(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), s; !(s = f.next()).done; )
              ae(s.value) && Se(s.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = F(r);
          Ne(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var u = F(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            L(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var je = {};
    function ke(e, r, t, a, u, f) {
      {
        var s = Ye(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = tr();
          O ? o += O : o += Te();
          var g;
          e === null ? g = "null" : re(e) ? g = "array" : e !== void 0 && e.$$typeof === l ? (g = "<" + (F(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, o);
        }
        var m = rr(e, r, t, u, f);
        if (m == null)
          return m;
        if (s) {
          var T = r.children;
          if (T !== void 0)
            if (a)
              if (re(T)) {
                for (var W = 0; W < T.length; W++)
                  Pe(T[W], e);
                Object.freeze && Object.freeze(T);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(T, e);
        }
        if (z.call(r, "key")) {
          var D = F(e), C = Object.keys(r).filter(function(lr) {
            return lr !== "key";
          }), ie = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[D + ie]) {
            var cr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ie, D, cr, D), je[D + ie] = !0;
          }
        }
        return e === h ? ir(m) : ar(m), m;
      }
    }
    function or(e, r, t) {
      return ke(e, r, t, !0);
    }
    function sr(e, r, t) {
      return ke(e, r, t, !1);
    }
    var ur = sr, fr = or;
    V.Fragment = h, V.jsx = ur, V.jsxs = fr;
  }()), V;
}
process.env.NODE_ENV === "production" ? oe.exports = vr() : oe.exports = hr();
var De = oe.exports;
const gr = "#ffffff";
function pr(n, l, d, h, _, p) {
  const y = d.length > 0 ? d : [gr], R = Math.min(h, _), i = Math.max(h, _), c = Math.random() * Math.PI * 2, E = (0.2 + Math.random() * 0.8) * p;
  return {
    x: Math.random() * n,
    y: Math.random() * l,
    vx: Math.cos(c) * E,
    vy: Math.sin(c) * E,
    size: R + Math.random() * (i - R),
    opacity: 0.4 + Math.random() * 0.6,
    color: y[Math.floor(Math.random() * y.length)],
    springOffsetX: 0,
    springOffsetY: 0
  };
}
function mr(n, l, d, h, _, p, y) {
  return Array.from(
    { length: n },
    () => pr(l, d, h, _, p, y)
  );
}
function yr(n, l, d) {
  n.x += n.vx, n.y += n.vy, n.x < -n.size ? n.x = l + n.size : n.x > l + n.size && (n.x = -n.size), n.y < -n.size ? n.y = d + n.size : n.y > d + n.size && (n.y = -n.size);
}
const J = 60;
function Rr(n, l) {
  const d = I(l);
  d.current = l;
  const h = I([]), _ = I({ x: -9999, y: -9999 }), p = I(0), y = I(() => {
  }), R = I(() => {
  });
  dr(() => {
    const i = n.current;
    if (!i) return;
    const c = i.getContext("2d");
    if (!c) return;
    const E = () => {
      const w = i.parentElement, v = w ? w.clientWidth : window.innerWidth, S = w ? w.clientHeight : window.innerHeight;
      i.width = v, i.height = S;
    };
    E();
    const { count: x, colors: P, minSize: Y, maxSize: N, speed: K } = d.current;
    h.current = mr(x, i.width, i.height, P, Y, N, K);
    const H = /* @__PURE__ */ new Map(), j = (w, v, S, k) => {
      const A = c.createRadialGradient(v, S, 0, v, S, k);
      return A.addColorStop(0, w), A.addColorStop(1, "transparent"), A;
    };
    y.current = () => {
      const w = i.width, v = i.height;
      E(), H.clear();
      const S = i.width / w, k = i.height / v;
      for (const A of h.current)
        A.x *= S, A.y *= k;
    }, R.current = (w) => {
      const v = i.getBoundingClientRect();
      _.current = { x: w.clientX - v.left, y: w.clientY - v.top };
    }, window.addEventListener("resize", y.current), window.addEventListener("mousemove", R.current);
    const b = () => {
      const w = d.current;
      c.clearRect(0, 0, i.width, i.height);
      for (const v of h.current) {
        yr(v, i.width, i.height), Er(v, _.current, w);
        const S = v.x + v.springOffsetX, k = v.y + v.springOffsetY;
        c.save(), c.globalAlpha = v.opacity, c.shadowBlur = w.glowIntensity, c.shadowColor = v.color, c.fillStyle = j(v.color, S, k, v.size), c.beginPath(), c.arc(S, k, v.size, 0, Math.PI * 2), c.fill(), c.restore();
      }
      p.current = requestAnimationFrame(b);
    };
    return p.current = requestAnimationFrame(b), () => {
      cancelAnimationFrame(p.current), window.removeEventListener("resize", y.current), window.removeEventListener("mousemove", R.current);
    };
  }, [n]);
}
function Er(n, l, d) {
  if (d.mouseEffect === "none") {
    n.springOffsetX *= 0.9, n.springOffsetY *= 0.9;
    return;
  }
  const h = n.x + n.springOffsetX - l.x, _ = n.y + n.springOffsetY - l.y, p = Math.sqrt(h * h + _ * _);
  if (p < d.mouseInfluenceRadius && p > 0) {
    const y = (d.mouseInfluenceRadius - p) / d.mouseInfluenceRadius, R = d.mouseEffect === "repel" ? 1 : -1;
    n.springOffsetX += h / p * y * 3 * R, n.springOffsetY += _ / p * y * 3 * R;
  }
  n.springOffsetX *= 0.92, n.springOffsetY *= 0.92, n.springOffsetX = Math.max(-J, Math.min(J, n.springOffsetX)), n.springOffsetY = Math.max(-J, Math.min(J, n.springOffsetY));
}
const _r = ["#ffffff", "#a78bfa", "#60a5fa"], br = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none"
};
function wr(n) {
  const l = I(null);
  return Rr(l, {
    count: n.count,
    colors: n.colors,
    minSize: n.minSize,
    maxSize: n.maxSize,
    speed: n.speed,
    glowIntensity: n.glowIntensity,
    mouseInfluenceRadius: n.mouseInfluenceRadius,
    mouseEffect: n.mouseEffect
  }), /* @__PURE__ */ De.jsx(
    "canvas",
    {
      ref: l,
      className: n.className,
      style: { ...br, ...n.style }
    }
  );
}
function Cr({
  count: n = 200,
  colors: l = _r,
  minSize: d = 1,
  maxSize: h = 3,
  speed: _ = 0.4,
  glowIntensity: p = 15,
  mouseInfluenceRadius: y = 120,
  mouseEffect: R = "repel",
  className: i,
  style: c
}) {
  return typeof window > "u" ? null : /* @__PURE__ */ De.jsx(
    wr,
    {
      count: n,
      colors: l,
      minSize: d,
      maxSize: h,
      speed: _,
      glowIntensity: p,
      mouseInfluenceRadius: y,
      mouseEffect: R,
      className: i,
      style: c
    }
  );
}
export {
  Cr as CosmicDustCanvas
};
//# sourceMappingURL=cosmic-dust-canvas.js.map
