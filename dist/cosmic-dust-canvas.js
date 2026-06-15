import Le, { useRef as I, useEffect as ue } from "react";
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
  var r = Le, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, g, w) {
    var c, p = {}, P = null, x = null;
    w !== void 0 && (P = "" + w), g.key !== void 0 && (P = "" + g.key), g.ref !== void 0 && (x = g.ref);
    for (c in g) i.call(g, c) && !l.hasOwnProperty(c) && (p[c] = g[c]);
    if (d && d.defaultProps) for (c in g = d.defaultProps, g) p[c] === void 0 && (p[c] = g[c]);
    return { $$typeof: n, type: d, key: P, ref: x, props: p, _owner: s.current };
  }
  return U.Fragment = o, U.jsx = f, U.jsxs = f, U;
}
var N = {};
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
function yr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Le, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), A = Symbol.iterator, Y = "@@iterator";
    function j(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = A && e[A] || e[Y];
      return typeof t == "function" ? t : null;
    }
    var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
          a[u - 1] = arguments[u];
        _("error", e, a);
      }
    }
    function _(e, t, a) {
      {
        var u = M.ReactDebugCurrentFrame, m = u.getStackAddendum();
        m !== "" && (t += "%s", a = a.concat([m]));
        var y = a.map(function(h) {
          return String(h);
        });
        y.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var T = !1, Q = !1, Z = !1, X = !1, q = !1, le;
    le = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === l || q || e === s || e === w || e === c || X || e === x || T || Q || Z || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === p || e.$$typeof === f || e.$$typeof === d || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Ve(e, t, a) {
      var u = e.displayName;
      if (u)
        return u;
      var m = t.displayName || t.name || "";
      return m !== "" ? a + "(" + m + ")" : a;
    }
    function fe(e) {
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
        case i:
          return "Fragment";
        case o:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case w:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var t = e;
            return fe(t) + ".Consumer";
          case f:
            var a = e;
            return fe(a._context) + ".Provider";
          case g:
            return Ve(e, e.render, "ForwardRef");
          case p:
            var u = e.displayName || null;
            return u !== null ? u : k(e.type) || "Memo";
          case P: {
            var m = e, y = m._payload, h = m._init;
            try {
              return k(h(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, z = 0, de, ve, he, me, ge, ye, pe;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ue() {
      {
        if (z === 0) {
          de = console.log, ve = console.info, he = console.warn, me = console.error, ge = console.group, ye = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
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
    function Ne() {
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
              value: ye
            }),
            groupEnd: D({}, e, {
              value: pe
            })
          });
        }
        z < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = M.ReactCurrentDispatcher, re;
    function K(e, t, a) {
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
    var te = !1, B;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Xe();
    }
    function Re(e, t) {
      if (!e || te)
        return "";
      {
        var a = B.get(e);
        if (a !== void 0)
          return a;
      }
      var u;
      te = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ee.current, ee.current = null, Ue();
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
            } catch (S) {
              u = S;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (S) {
              u = S;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            u = S;
          }
          e();
        }
      } catch (S) {
        if (S && u && typeof S.stack == "string") {
          for (var v = S.stack.split(`
`), O = u.stack.split(`
`), E = v.length - 1, R = O.length - 1; E >= 1 && R >= 0 && v[E] !== O[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (v[E] !== O[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || v[E] !== O[R]) {
                    var C = `
` + v[E].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, C), C;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = y, Ne(), Error.prepareStackTrace = m;
      }
      var $ = e ? e.displayName || e.name : "", F = $ ? K($) : "";
      return typeof e == "function" && B.set(e, F), F;
    }
    function qe(e, t, a) {
      return Re(e, !1);
    }
    function Ke(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function G(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Ke(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case w:
          return K("Suspense");
        case c:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return qe(e.render);
          case p:
            return G(e.type, t, a);
          case P: {
            var u = e, m = u._payload, y = u._init;
            try {
              return G(y(m), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, be = {}, _e = M.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var t = e._owner, a = G(e.type, e._source, t ? t.type : null);
        _e.setExtraStackFrame(a);
      } else
        _e.setExtraStackFrame(null);
    }
    function Be(e, t, a, u, m) {
      {
        var y = Function.call.bind(V);
        for (var h in e)
          if (y(e, h)) {
            var v = void 0;
            try {
              if (typeof e[h] != "function") {
                var O = Error((u || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              v = e[h](t, h, u, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (J(m), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", a, h, typeof v), J(null)), v instanceof Error && !(v.message in be) && (be[v.message] = !0, J(m), b("Failed %s type: %s", a, v.message), J(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ne(e) {
      return Ge(e);
    }
    function Je(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
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
    var Oe = M.ReactCurrentOwner, Qe = {
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
        var a = function() {
          Se || (Se = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function nr(e, t) {
      {
        var a = function() {
          Te || (Te = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var ar = function(e, t, a, u, m, y, h) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
        props: h,
        // Record the component responsible for creating this element.
        _owner: y
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
    function or(e, t, a, u, m) {
      {
        var y, h = {}, v = null, O = null;
        a !== void 0 && (Pe(a), v = "" + a), er(t) && (Pe(t.key), v = "" + t.key), Ze(t) && (O = t.ref, rr(t, m));
        for (y in t)
          V.call(t, y) && !Qe.hasOwnProperty(y) && (h[y] = t[y]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (y in E)
            h[y] === void 0 && (h[y] = E[y]);
        }
        if (v || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && tr(h, R), O && nr(h, R);
        }
        return ar(e, v, O, m, u, Oe.current, h);
      }
    }
    var ae = M.ReactCurrentOwner, Ce = M.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var t = e._owner, a = G(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(a);
      } else
        Ce.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
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
    function ir(e) {
      return "";
    }
    var Me = {};
    function sr(e) {
      {
        var t = xe();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function je(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = sr(t);
        if (Me[a])
          return;
        Me[a] = !0;
        var u = "";
        e && e._owner && e._owner !== ae.current && (u = " It was passed a child from " + k(e._owner.type) + "."), L(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, u), L(null);
      }
    }
    function ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var a = 0; a < e.length; a++) {
            var u = e[a];
            ie(u) && je(u, t);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = j(e);
          if (typeof m == "function" && m !== e.entries)
            for (var y = m.call(e), h; !(h = y.next()).done; )
              ie(h.value) && je(h.value, t);
        }
      }
    }
    function ur(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === p))
          a = t.propTypes;
        else
          return;
        if (a) {
          var u = k(t);
          Be(a, e.props, "prop", u, e);
        } else if (t.PropTypes !== void 0 && !oe) {
          oe = !0;
          var m = k(t);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var u = t[a];
          if (u !== "children" && u !== "key") {
            L(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var Ie = {};
    function Ae(e, t, a, u, m, y) {
      {
        var h = ze(e);
        if (!h) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ir();
          O ? v += O : v += xe();
          var E;
          e === null ? E = "null" : ne(e) ? E = "array" : e !== void 0 && e.$$typeof === n ? (E = "<" + (k(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var R = or(e, t, a, m, y);
        if (R == null)
          return R;
        if (h) {
          var C = t.children;
          if (C !== void 0)
            if (u)
              if (ne(C)) {
                for (var $ = 0; $ < C.length; $++)
                  ke(C[$], e);
                Object.freeze && Object.freeze(C);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(C, e);
        }
        if (V.call(t, "key")) {
          var F = k(e), S = Object.keys(t).filter(function(mr) {
            return mr !== "key";
          }), se = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[F + se]) {
            var hr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, F, hr, F), Ie[F + se] = !0;
          }
        }
        return e === i ? cr(R) : ur(R), R;
      }
    }
    function lr(e, t, a) {
      return Ae(e, t, a, !0);
    }
    function fr(e, t, a) {
      return Ae(e, t, a, !1);
    }
    var dr = fr, vr = lr;
    N.Fragment = i, N.jsx = dr, N.jsxs = vr;
  }()), N;
}
process.env.NODE_ENV === "production" ? ce.exports = gr() : ce.exports = yr();
var $e = ce.exports;
const pr = "#ffffff", Er = 0.05, Rr = 0.01;
function We(r, n, o, i, s) {
  const l = o.length > 0 ? o : [pr], f = Math.min(i, s), d = Math.max(i, s), g = Math.random() * Math.PI * 2, w = 0.2 + Math.random() * 0.8, c = 0.4 + Math.random() * 0.6, p = Math.floor(Math.random() * l.length);
  return {
    x: Math.random() * r,
    y: Math.random() * n,
    baseVx: Math.cos(g) * w,
    baseVy: Math.sin(g) * w,
    size: f + Math.random() * (d - f),
    opacity: c,
    baseOpacity: c,
    twinklePhase: Math.random() * Math.PI * 2,
    color: l[p],
    colorIndex: p,
    colorPhase: Math.random(),
    // staggered start so the field doesn't cycle in lockstep
    springOffsetX: 0,
    springOffsetY: 0
  };
}
function br(r, n, o) {
  if (o <= 0) return;
  if (n.length < 2) {
    n.length === 1 && (r.color = n[0]);
    return;
  }
  r.colorPhase += o * Rr;
  const i = Math.floor(r.colorPhase);
  r.colorPhase -= i, r.colorIndex = (r.colorIndex + i) % n.length, r.color = n[r.colorIndex];
}
function _r(r, n) {
  if (n <= 0) {
    r.opacity = r.baseOpacity;
    return;
  }
  r.twinklePhase = (r.twinklePhase + Er) % (Math.PI * 2);
  const o = 1 - n * 0.5 * (1 - Math.sin(r.twinklePhase));
  r.opacity = Math.max(0, Math.min(1, r.baseOpacity * o));
}
function wr(r, n, o, i, s, l) {
  return Array.from(
    { length: r },
    () => We(n, o, i, s, l)
  );
}
function Pr(r, n, o, i) {
  r.x += r.baseVx * i, r.y += r.baseVy * i, r.x < -r.size ? r.x = n + r.size : r.x > n + r.size && (r.x = -r.size), r.y < -r.size ? r.y = o + r.size : r.y > o + r.size && (r.y = -r.size);
}
function Or(r, n, o, i) {
  r.arc(n, o, i, 0, Math.PI * 2);
}
function Sr(r, n, o, i) {
  const s = i / Math.SQRT2;
  r.rect(n - s, o - s, 2 * s, 2 * s);
}
function Tr(r, n, o, i) {
  for (let s = 0; s < 3; s++) {
    const l = -Math.PI / 2 + s * 2 * Math.PI / 3, f = n + i * Math.cos(l), d = o + i * Math.sin(l);
    s === 0 ? r.moveTo(f, d) : r.lineTo(f, d);
  }
  r.closePath();
}
function Cr(r, n, o, i) {
  const l = i * 0.5;
  for (let f = 0; f < 5 * 2; f++) {
    const d = f % 2 === 0 ? i : l, g = -Math.PI / 2 + f * Math.PI / 5, w = n + d * Math.cos(g), c = o + d * Math.sin(g);
    f === 0 ? r.moveTo(w, c) : r.lineTo(w, c);
  }
  r.closePath();
}
function xr(r, n, o, i, s) {
  switch (n) {
    case "square":
      return Sr(r, o, i, s);
    case "triangle":
      return Tr(r, o, i, s);
    case "star":
      return Cr(r, o, i, s);
    case "circle":
    default:
      return Or(r, o, i, s);
  }
}
const Mr = 2048, W = /* @__PURE__ */ new Map();
function jr(r, n) {
  const o = W.get(r);
  if (o) return o;
  const i = n();
  if (W.size >= Mr) {
    const s = W.keys().next().value;
    s !== void 0 && W.delete(s);
  }
  return W.set(r, i), i;
}
function Ye() {
  W.clear();
}
function kr(r, n, o, i, s) {
  return `${r}|${n}|${o}|${i}|${s}`;
}
function Ir(r, n, o, i, s = "circle") {
  const l = o + i;
  if (i > 0) {
    const f = o + i, d = r.createRadialGradient(l, l, o, l, l, f);
    d.addColorStop(0, n), d.addColorStop(1, "transparent"), r.fillStyle = d, r.beginPath(), r.arc(l, l, f, 0, Math.PI * 2), r.arc(l, l, o, 0, Math.PI * 2), r.fill("evenodd");
  }
  r.fillStyle = n, r.beginPath(), xr(r, s, l, l, o), r.fill();
}
function Ar(r, n, o, i, s = "circle") {
  return jr(kr(s, r, n, o, i), () => {
    const l = 2 * (n + o), f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(l * i)), f.height = f.width;
    const d = f.getContext("2d");
    return d && (d.scale(i, i), Ir(d, r, n, o, s)), f;
  });
}
const H = 120;
function Dr(r, n, o, i) {
  const s = n.x + n.springOffsetX, l = n.y + n.springOffsetY;
  if (o.renderParticle) {
    r.save(), r.globalAlpha = n.opacity, r.translate(s, l), o.renderParticle(r, n), r.restore();
    return;
  }
  const f = Ar(n.color, n.size, o.glowIntensity, i, o.shape), d = n.size + o.glowIntensity;
  r.globalAlpha = n.opacity, r.drawImage(f, s - d, l - d, d * 2, d * 2);
}
function Fr(r, n) {
  const o = I(n);
  o.current = n;
  const i = I([]), s = I({ x: -9999, y: -9999 }), l = I(0), f = I({ w: 0, h: 0 }), d = I(() => {
  }), g = I(() => {
  });
  ue(() => {
    const c = r.current;
    if (!c) return;
    const p = c.getContext("2d");
    if (!p) return;
    let P = window.devicePixelRatio || 1;
    const x = () => {
      const _ = c.parentElement;
      f.current.w = _ ? _.clientWidth : window.innerWidth, f.current.h = _ ? _.clientHeight : window.innerHeight, c.width = f.current.w, c.height = f.current.h;
    };
    x();
    const { count: A, colors: Y, minSize: j, maxSize: M } = o.current;
    i.current = wr(
      A,
      c.width,
      c.height,
      Y,
      j,
      M
    ), d.current = () => {
      const _ = c.width, T = c.height;
      x();
      const Q = c.width / _, Z = c.height / T;
      for (const q of i.current)
        q.x *= Q, q.y *= Z;
      const X = window.devicePixelRatio || 1;
      X !== P && (P = X, Ye());
    }, g.current = (_) => {
      const T = c.getBoundingClientRect();
      s.current = { x: _.clientX - T.left, y: _.clientY - T.top };
    }, window.addEventListener("resize", d.current), window.addEventListener("mousemove", g.current);
    const b = () => {
      const _ = o.current;
      p.clearRect(0, 0, c.width, c.height);
      for (const T of i.current)
        Pr(T, c.width, c.height, _.speed), _r(T, _.twinkle), br(T, _.colors, _.colorCycle), Yr(T, s.current, _), Dr(p, T, _, P);
      p.globalAlpha = 1, l.current = requestAnimationFrame(b);
    };
    return l.current = requestAnimationFrame(b), () => {
      cancelAnimationFrame(l.current), window.removeEventListener("resize", d.current), window.removeEventListener("mousemove", g.current);
    };
  }, [r]), ue(() => {
    const { count: c, colors: p, minSize: P, maxSize: x } = o.current, { w: A, h: Y } = f.current;
    if (A === 0 || Y === 0) return;
    const j = i.current;
    if (j.length !== c)
      if (c > j.length) {
        const M = Array.from(
          { length: c - j.length },
          () => We(A, Y, p, P, x)
        );
        i.current = [...j, ...M];
      } else
        i.current = j.slice(0, c);
  }, [n.count]);
  const w = n.colors.join("|");
  ue(() => {
    Ye();
  }, [w, n.minSize, n.maxSize, n.glowIntensity, n.shape]);
}
function Yr(r, n, o) {
  if (o.mouseEffect === "none") {
    r.springOffsetX *= 0.9, r.springOffsetY *= 0.9;
    return;
  }
  const i = r.x + r.springOffsetX - n.x, s = r.y + r.springOffsetY - n.y, l = Math.sqrt(i * i + s * s);
  if (l < o.mouseInfluenceRadius && l > 0) {
    const f = (o.mouseInfluenceRadius - l) / o.mouseInfluenceRadius, d = o.mouseEffect === "repel" ? 1 : -1;
    r.springOffsetX += i / l * f * 6 * d, r.springOffsetY += s / l * f * 6 * d;
  }
  r.springOffsetX *= 0.92, r.springOffsetY *= 0.92, r.springOffsetX = Math.max(-H, Math.min(H, r.springOffsetX)), r.springOffsetY = Math.max(-H, Math.min(H, r.springOffsetY));
}
const Lr = ["#ffffff", "#a78bfa", "#60a5fa"], $r = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none"
};
function Wr(r) {
  const n = I(null);
  return Fr(n, {
    count: r.count,
    colors: r.colors,
    minSize: r.minSize,
    maxSize: r.maxSize,
    speed: r.speed,
    glowIntensity: r.glowIntensity,
    mouseInfluenceRadius: r.mouseInfluenceRadius,
    mouseEffect: r.mouseEffect,
    shape: r.shape,
    twinkle: r.twinkle,
    colorCycle: r.colorCycle,
    renderParticle: r.renderParticle
  }), /* @__PURE__ */ $e.jsx(
    "canvas",
    {
      ref: n,
      className: r.className,
      style: { ...$r, ...r.style }
    }
  );
}
function Vr({
  count: r = 200,
  colors: n = Lr,
  minSize: o = 1,
  maxSize: i = 3,
  speed: s = 0.4,
  glowIntensity: l = 15,
  mouseInfluenceRadius: f = 120,
  mouseEffect: d = "repel",
  shape: g = "circle",
  twinkle: w = 0,
  colorCycle: c = 0,
  renderParticle: p,
  className: P,
  style: x
}) {
  return typeof window > "u" ? null : /* @__PURE__ */ $e.jsx(
    Wr,
    {
      count: r,
      colors: n,
      minSize: o,
      maxSize: i,
      speed: s,
      glowIntensity: l,
      mouseInfluenceRadius: f,
      mouseEffect: d,
      shape: g,
      twinkle: w,
      colorCycle: c,
      renderParticle: p,
      className: P,
      style: x
    }
  );
}
export {
  Vr as CosmicDustCanvas
};
//# sourceMappingURL=cosmic-dust-canvas.js.map
