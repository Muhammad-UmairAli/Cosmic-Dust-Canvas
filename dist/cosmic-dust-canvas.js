import Fe, { useRef as A, useEffect as je } from "react";
var ae = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function hr() {
  if (ke) return U;
  ke = 1;
  var n = Fe, v = Symbol.for("react.element"), h = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(_, g, s) {
    var f, O = {}, T = null, C = null;
    s !== void 0 && (T = "" + s), g.key !== void 0 && (T = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (f in g) l.call(g, f) && !m.hasOwnProperty(f) && (O[f] = g[f]);
    if (_ && _.defaultProps) for (f in g = _.defaultProps, g) O[f] === void 0 && (O[f] = g[f]);
    return { $$typeof: v, type: _, key: T, ref: C, props: O, _owner: b.current };
  }
  return U.Fragment = h, U.jsx = E, U.jsxs = E, U;
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
var Ae;
function gr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Fe, v = Symbol.for("react.element"), h = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), _ = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), F = Symbol.iterator, P = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[P];
      return typeof r == "function" ? r : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        D("error", e, t);
      }
    }
    function D(e, r, t) {
      {
        var a = y.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(o) {
          return String(o);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var M = !1, j = !1, Ie = !1, Ye = !1, Le = !1, ie;
    ie = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === m || Le || e === b || e === s || e === f || Ye || e === C || M || j || Ie || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === O || e.$$typeof === E || e.$$typeof === _ || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case h:
          return "Portal";
        case m:
          return "Profiler";
        case b:
          return "StrictMode";
        case s:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return oe(r) + ".Consumer";
          case E:
            var t = e;
            return oe(t._context) + ".Provider";
          case g:
            return We(e, e.render, "ForwardRef");
          case O:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case T: {
            var c = e, d = c._payload, o = c._init;
            try {
              return k(o(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, $ = 0, se, ue, ce, fe, le, de, ve;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function $e() {
      {
        if ($ === 0) {
          se = console.log, ue = console.info, ce = console.warn, fe = console.error, le = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
    function Ve() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: se
            }),
            info: I({}, e, {
              value: ue
            }),
            warn: I({}, e, {
              value: ce
            }),
            error: I({}, e, {
              value: fe
            }),
            group: I({}, e, {
              value: le
            }),
            groupCollapsed: I({}, e, {
              value: de
            }),
            groupEnd: I({}, e, {
              value: ve
            })
          });
        }
        $ < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = y.ReactCurrentDispatcher, H;
    function X(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            H = a && a[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, B;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ue();
    }
    function ge(e, r) {
      if (!e || Z)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      Z = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = G.current, G.current = null, $e();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (x) {
              a = x;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (x) {
              a = x;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            a = x;
          }
          e();
        }
      } catch (x) {
        if (x && a && typeof x.stack == "string") {
          for (var i = x.stack.split(`
`), w = a.stack.split(`
`), p = i.length - 1, R = w.length - 1; p >= 1 && R >= 0 && i[p] !== w[R]; )
            R--;
          for (; p >= 1 && R >= 0; p--, R--)
            if (i[p] !== w[R]) {
              if (p !== 1 || R !== 1)
                do
                  if (p--, R--, R < 0 || i[p] !== w[R]) {
                    var S = `
` + i[p].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, S), S;
                  }
                while (p >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = d, Ve(), Error.prepareStackTrace = c;
      }
      var W = e ? e.displayName || e.name : "", Y = W ? X(W) : "";
      return typeof e == "function" && B.set(e, Y), Y;
    }
    function Ne(e, r, t) {
      return ge(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Xe(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case s:
          return X("Suspense");
        case f:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ne(e.render);
          case O:
            return q(e.type, r, t);
          case T: {
            var a = e, c = a._payload, d = a._init;
            try {
              return q(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, me = {}, pe = y.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, a, c) {
      {
        var d = Function.call.bind(V);
        for (var o in e)
          if (d(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var w = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              i = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              i = p;
            }
            i && !(i instanceof Error) && (J(c), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof i), J(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, J(c), u("Failed %s type: %s", t, i.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function Q(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Re(e) {
      if (Ke(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ye(e);
    }
    var Ee = y.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, _e;
    function He(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function er(e, r) {
      {
        var t = function() {
          be || (be = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, a, c, d, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, t, a, c) {
      {
        var d, o = {}, i = null, w = null;
        t !== void 0 && (Re(t), i = "" + t), Ze(r) && (Re(r.key), i = "" + r.key), He(r) && (w = r.ref, Qe(r, c));
        for (d in r)
          V.call(r, d) && !Ge.hasOwnProperty(d) && (o[d] = r[d]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (d in p)
            o[d] === void 0 && (o[d] = p[d]);
        }
        if (i || w) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(o, R), w && rr(o, R);
        }
        return tr(e, i, w, c, a, Ee.current, o);
      }
    }
    var ee = y.ReactCurrentOwner, we = y.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function Oe() {
      {
        if (ee.current) {
          var e = k(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var xe = {};
    function ir(e) {
      {
        var r = Oe();
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
        var t = ir(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ee.current && (a = " It was passed a child from " + k(e._owner.type) + "."), z(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), z(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            te(a) && Se(a, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = L(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), o; !(o = d.next()).done; )
              te(o.value) && Se(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = k(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var c = k(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            z(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    var Ce = {};
    function Pe(e, r, t, a, c, d) {
      {
        var o = ze(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = ar();
          w ? i += w : i += Oe();
          var p;
          e === null ? p = "null" : Q(e) ? p = "array" : e !== void 0 && e.$$typeof === v ? (p = "<" + (k(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var R = nr(e, r, t, c, d);
        if (R == null)
          return R;
        if (o) {
          var S = r.children;
          if (S !== void 0)
            if (a)
              if (Q(S)) {
                for (var W = 0; W < S.length; W++)
                  Te(S[W], e);
                Object.freeze && Object.freeze(S);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(S, e);
        }
        if (V.call(r, "key")) {
          var Y = k(e), x = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), ne = x.length > 0 ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[Y + ne]) {
            var dr = x.length > 0 ? "{" + x.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, Y, dr, Y), Ce[Y + ne] = !0;
          }
        }
        return e === l ? sr(R) : or(R), R;
      }
    }
    function ur(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var fr = cr, lr = ur;
    N.Fragment = l, N.jsx = fr, N.jsxs = lr;
  }()), N;
}
process.env.NODE_ENV === "production" ? ae.exports = hr() : ae.exports = gr();
var De = ae.exports;
const mr = "#ffffff";
function Me(n, v, h, l, b) {
  const m = h.length > 0 ? h : [mr], E = Math.min(l, b), _ = Math.max(l, b), g = Math.random() * Math.PI * 2, s = 0.2 + Math.random() * 0.8;
  return {
    x: Math.random() * n,
    y: Math.random() * v,
    baseVx: Math.cos(g) * s,
    baseVy: Math.sin(g) * s,
    size: E + Math.random() * (_ - E),
    opacity: 0.4 + Math.random() * 0.6,
    color: m[Math.floor(Math.random() * m.length)],
    springOffsetX: 0,
    springOffsetY: 0
  };
}
function pr(n, v, h, l, b, m) {
  return Array.from(
    { length: n },
    () => Me(v, h, l, b, m)
  );
}
function yr(n, v, h, l) {
  n.x += n.baseVx * l, n.y += n.baseVy * l, n.x < -n.size ? n.x = v + n.size : n.x > v + n.size && (n.x = -n.size), n.y < -n.size ? n.y = h + n.size : n.y > h + n.size && (n.y = -n.size);
}
const K = 60;
function Rr(n, v) {
  const h = A(v);
  h.current = v;
  const l = A([]), b = A({ x: -9999, y: -9999 }), m = A(0), E = A({ w: 0, h: 0 }), _ = A(() => {
  }), g = A(() => {
  });
  je(() => {
    const s = n.current;
    if (!s) return;
    const f = s.getContext("2d");
    if (!f) return;
    const O = () => {
      const y = s.parentElement;
      E.current.w = y ? y.clientWidth : window.innerWidth, E.current.h = y ? y.clientHeight : window.innerHeight, s.width = E.current.w, s.height = E.current.h;
    };
    O();
    const { count: T, colors: C, minSize: F, maxSize: P } = h.current;
    l.current = pr(
      T,
      s.width,
      s.height,
      C,
      F,
      P
    ), _.current = () => {
      const y = s.width, u = s.height;
      O();
      const D = s.width / y, M = s.height / u;
      for (const j of l.current)
        j.x *= D, j.y *= M;
    }, g.current = (y) => {
      const u = s.getBoundingClientRect();
      b.current = { x: y.clientX - u.left, y: y.clientY - u.top };
    }, window.addEventListener("resize", _.current), window.addEventListener("mousemove", g.current);
    const L = () => {
      const y = h.current;
      f.clearRect(0, 0, s.width, s.height);
      for (const u of l.current) {
        yr(u, s.width, s.height, y.speed), Er(u, b.current, y);
        const D = u.x + u.springOffsetX, M = u.y + u.springOffsetY;
        f.save(), f.globalAlpha = u.opacity, f.shadowBlur = y.glowIntensity, f.shadowColor = u.color;
        const j = f.createRadialGradient(D, M, 0, D, M, u.size);
        j.addColorStop(0, u.color), j.addColorStop(1, "transparent"), f.fillStyle = j, f.beginPath(), f.arc(D, M, u.size, 0, Math.PI * 2), f.fill(), f.restore();
      }
      m.current = requestAnimationFrame(L);
    };
    return m.current = requestAnimationFrame(L), () => {
      cancelAnimationFrame(m.current), window.removeEventListener("resize", _.current), window.removeEventListener("mousemove", g.current);
    };
  }, [n]), je(() => {
    const { count: s, colors: f, minSize: O, maxSize: T } = h.current, { w: C, h: F } = E.current;
    if (C === 0 || F === 0) return;
    const P = l.current;
    if (P.length !== s)
      if (s > P.length) {
        const L = Array.from(
          { length: s - P.length },
          () => Me(C, F, f, O, T)
        );
        l.current = [...P, ...L];
      } else
        l.current = P.slice(0, s);
  }, [v.count]);
}
function Er(n, v, h) {
  if (h.mouseEffect === "none") {
    n.springOffsetX *= 0.9, n.springOffsetY *= 0.9;
    return;
  }
  const l = n.x + n.springOffsetX - v.x, b = n.y + n.springOffsetY - v.y, m = Math.sqrt(l * l + b * b);
  if (m < h.mouseInfluenceRadius && m > 0) {
    const E = (h.mouseInfluenceRadius - m) / h.mouseInfluenceRadius, _ = h.mouseEffect === "repel" ? 1 : -1;
    n.springOffsetX += l / m * E * 3 * _, n.springOffsetY += b / m * E * 3 * _;
  }
  n.springOffsetX *= 0.92, n.springOffsetY *= 0.92, n.springOffsetX = Math.max(-K, Math.min(K, n.springOffsetX)), n.springOffsetY = Math.max(-K, Math.min(K, n.springOffsetY));
}
const br = ["#ffffff", "#a78bfa", "#60a5fa"], _r = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none"
};
function wr(n) {
  const v = A(null);
  return Rr(v, {
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
      ref: v,
      className: n.className,
      style: { ..._r, ...n.style }
    }
  );
}
function xr({
  count: n = 200,
  colors: v = br,
  minSize: h = 1,
  maxSize: l = 3,
  speed: b = 0.4,
  glowIntensity: m = 15,
  mouseInfluenceRadius: E = 120,
  mouseEffect: _ = "repel",
  className: g,
  style: s
}) {
  return typeof window > "u" ? null : /* @__PURE__ */ De.jsx(
    wr,
    {
      count: n,
      colors: v,
      minSize: h,
      maxSize: l,
      speed: b,
      glowIntensity: m,
      mouseInfluenceRadius: E,
      mouseEffect: _,
      className: g,
      style: s
    }
  );
}
export {
  xr as CosmicDustCanvas
};
//# sourceMappingURL=cosmic-dust-canvas.js.map
