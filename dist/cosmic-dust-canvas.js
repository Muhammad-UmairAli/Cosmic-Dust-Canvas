import Me, { useRef as I, useEffect as ke } from "react";
var ie = { exports: {} }, N = {};
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
function hr() {
  if (Ae) return N;
  Ae = 1;
  var n = Me, v = Symbol.for("react.element"), h = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(_, g, u) {
    var c, O = {}, T = null, C = null;
    u !== void 0 && (T = "" + u), g.key !== void 0 && (T = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (c in g) l.call(g, c) && !m.hasOwnProperty(c) && (O[c] = g[c]);
    if (_ && _.defaultProps) for (c in g = _.defaultProps, g) O[c] === void 0 && (O[c] = g[c]);
    return { $$typeof: v, type: _, key: T, ref: C, props: O, _owner: b.current };
  }
  return N.Fragment = h, N.jsx = E, N.jsxs = E, N;
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
var Ie;
function gr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Me, v = Symbol.for("react.element"), h = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), _ = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), M = Symbol.iterator, P = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[P];
      return typeof r == "function" ? r : null;
    }
    var p = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function o(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        j("error", e, t);
      }
    }
    function j(e, r, t) {
      {
        var a = p.ReactDebugCurrentFrame, f = a.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var d = t.map(function(s) {
          return String(s);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var k = !1, F = !1, $ = !1, Ye = !1, Le = !1, oe;
    oe = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === m || Le || e === b || e === u || e === c || Ye || e === C || k || F || $ || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === O || e.$$typeof === E || e.$$typeof === _ || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && o("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return se(r) + ".Consumer";
          case E:
            var t = e;
            return se(t._context) + ".Provider";
          case g:
            return We(e, e.render, "ForwardRef");
          case O:
            var a = e.displayName || null;
            return a !== null ? a : A(e.type) || "Memo";
          case T: {
            var f = e, d = f._payload, s = f._init;
            try {
              return A(s(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, V = 0, ue, ce, fe, le, de, ve, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function $e() {
      {
        if (V === 0) {
          ue = console.log, ce = console.info, fe = console.warn, le = console.error, de = console.group, ve = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        V++;
      }
    }
    function Ve() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ue
            }),
            info: D({}, e, {
              value: ce
            }),
            warn: D({}, e, {
              value: fe
            }),
            error: D({}, e, {
              value: le
            }),
            group: D({}, e, {
              value: de
            }),
            groupCollapsed: D({}, e, {
              value: ve
            }),
            groupEnd: D({}, e, {
              value: he
            })
          });
        }
        V < 0 && o("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = p.ReactCurrentDispatcher, Z;
    function q(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (f) {
            var a = f.stack.trim().match(/\n( *(at )?)/);
            Z = a && a[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, B;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ue();
    }
    function me(e, r) {
      if (!e || Q)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      Q = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = H.current, H.current = null, $e();
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
            } catch (x) {
              a = x;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (x) {
              a = x;
            }
            e.call(s.prototype);
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
`), y = i.length - 1, R = w.length - 1; y >= 1 && R >= 0 && i[y] !== w[R]; )
            R--;
          for (; y >= 1 && R >= 0; y--, R--)
            if (i[y] !== w[R]) {
              if (y !== 1 || R !== 1)
                do
                  if (y--, R--, R < 0 || i[y] !== w[R]) {
                    var S = `
` + i[y].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, S), S;
                  }
                while (y >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Q = !1, H.current = d, Ve(), Error.prepareStackTrace = f;
      }
      var W = e ? e.displayName || e.name : "", Y = W ? q(W) : "";
      return typeof e == "function" && B.set(e, Y), Y;
    }
    function Ne(e, r, t) {
      return me(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Xe(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case u:
          return q("Suspense");
        case c:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ne(e.render);
          case O:
            return J(e.type, r, t);
          case T: {
            var a = e, f = a._payload, d = a._init;
            try {
              return J(d(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, pe = {}, ye = p.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, f) {
      {
        var d = Function.call.bind(U);
        for (var s in e)
          if (d(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var w = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              i = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              i = y;
            }
            i && !(i instanceof Error) && (K(f), o("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof i), K(null)), i instanceof Error && !(i.message in pe) && (pe[i.message] = !0, K(f), o("Failed %s type: %s", t, i.message), K(null));
          }
      }
    }
    var Be = Array.isArray;
    function ee(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Ke(e))
        return o("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Re(e);
    }
    var be = p.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, we;
    function He(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function er(e, r) {
      {
        var t = function() {
          _e || (_e = !0, o("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          we || (we = !0, o("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, a, f, d, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
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
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, t, a, f) {
      {
        var d, s = {}, i = null, w = null;
        t !== void 0 && (Ee(t), i = "" + t), Ze(r) && (Ee(r.key), i = "" + r.key), He(r) && (w = r.ref, Qe(r, f));
        for (d in r)
          U.call(r, d) && !Ge.hasOwnProperty(d) && (s[d] = r[d]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (d in y)
            s[d] === void 0 && (s[d] = y[d]);
        }
        if (i || w) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(s, R), w && rr(s, R);
        }
        return tr(e, i, w, f, a, be.current, s);
      }
    }
    var re = p.ReactCurrentOwner, Oe = p.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function xe() {
      {
        if (re.current) {
          var e = A(re.current.type);
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
    var Se = {};
    function ir(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var a = "";
        e && e._owner && e._owner !== re.current && (a = " It was passed a child from " + A(e._owner.type) + "."), z(e), o('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), z(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ne(a) && Te(a, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = L(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), s; !(s = d.next()).done; )
              ne(s.value) && Te(s.value, r);
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
          var a = A(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var f = A(r);
          o("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && o("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            z(e), o("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), o("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    var Pe = {};
    function je(e, r, t, a, f, d) {
      {
        var s = ze(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = ar();
          w ? i += w : i += xe();
          var y;
          e === null ? y = "null" : ee(e) ? y = "array" : e !== void 0 && e.$$typeof === v ? (y = "<" + (A(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, o("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, i);
        }
        var R = nr(e, r, t, f, d);
        if (R == null)
          return R;
        if (s) {
          var S = r.children;
          if (S !== void 0)
            if (a)
              if (ee(S)) {
                for (var W = 0; W < S.length; W++)
                  Ce(S[W], e);
                Object.freeze && Object.freeze(S);
              } else
                o("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(S, e);
        }
        if (U.call(r, "key")) {
          var Y = A(e), x = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), ae = x.length > 0 ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[Y + ae]) {
            var dr = x.length > 0 ? "{" + x.join(": ..., ") + ": ...}" : "{}";
            o(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, Y, dr, Y), Pe[Y + ae] = !0;
          }
        }
        return e === l ? sr(R) : or(R), R;
      }
    }
    function ur(e, r, t) {
      return je(e, r, t, !0);
    }
    function cr(e, r, t) {
      return je(e, r, t, !1);
    }
    var fr = cr, lr = ur;
    X.Fragment = l, X.jsx = fr, X.jsxs = lr;
  }()), X;
}
process.env.NODE_ENV === "production" ? ie.exports = hr() : ie.exports = gr();
var Fe = ie.exports;
const mr = "#ffffff";
function De(n, v, h, l, b) {
  const m = h.length > 0 ? h : [mr], E = Math.min(l, b), _ = Math.max(l, b), g = Math.random() * Math.PI * 2, u = 0.2 + Math.random() * 0.8;
  return {
    x: Math.random() * n,
    y: Math.random() * v,
    baseVx: Math.cos(g) * u,
    baseVy: Math.sin(g) * u,
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
    () => De(v, h, l, b, m)
  );
}
function yr(n, v, h, l) {
  n.x += n.baseVx * l, n.y += n.baseVy * l, n.x < -n.size ? n.x = v + n.size : n.x > v + n.size && (n.x = -n.size), n.y < -n.size ? n.y = h + n.size : n.y > h + n.size && (n.y = -n.size);
}
const G = 120;
function Rr(n, v) {
  const h = I(v);
  h.current = v;
  const l = I([]), b = I({ x: -9999, y: -9999 }), m = I(0), E = I({ w: 0, h: 0 }), _ = I(() => {
  }), g = I(() => {
  });
  ke(() => {
    const u = n.current;
    if (!u) return;
    const c = u.getContext("2d");
    if (!c) return;
    const O = () => {
      const p = u.parentElement;
      E.current.w = p ? p.clientWidth : window.innerWidth, E.current.h = p ? p.clientHeight : window.innerHeight, u.width = E.current.w, u.height = E.current.h;
    };
    O();
    const { count: T, colors: C, minSize: M, maxSize: P } = h.current;
    l.current = pr(
      T,
      u.width,
      u.height,
      C,
      M,
      P
    ), _.current = () => {
      const p = u.width, o = u.height;
      O();
      const j = u.width / p, k = u.height / o;
      for (const F of l.current)
        F.x *= j, F.y *= k;
    }, g.current = (p) => {
      const o = u.getBoundingClientRect();
      b.current = { x: p.clientX - o.left, y: p.clientY - o.top };
    }, window.addEventListener("resize", _.current), window.addEventListener("mousemove", g.current);
    const L = () => {
      const p = h.current;
      c.clearRect(0, 0, u.width, u.height);
      for (const o of l.current) {
        yr(o, u.width, u.height, p.speed), Er(o, b.current, p);
        const j = o.x + o.springOffsetX, k = o.y + o.springOffsetY;
        if (c.save(), c.globalAlpha = o.opacity, p.glowIntensity > 0) {
          const F = o.size + p.glowIntensity, $ = c.createRadialGradient(j, k, o.size, j, k, F);
          $.addColorStop(0, o.color), $.addColorStop(1, "transparent"), c.fillStyle = $, c.beginPath(), c.arc(j, k, F, 0, Math.PI * 2), c.arc(j, k, o.size, 0, Math.PI * 2), c.fill("evenodd");
        }
        c.fillStyle = o.color, c.beginPath(), c.arc(j, k, o.size, 0, Math.PI * 2), c.fill(), c.restore();
      }
      m.current = requestAnimationFrame(L);
    };
    return m.current = requestAnimationFrame(L), () => {
      cancelAnimationFrame(m.current), window.removeEventListener("resize", _.current), window.removeEventListener("mousemove", g.current);
    };
  }, [n]), ke(() => {
    const { count: u, colors: c, minSize: O, maxSize: T } = h.current, { w: C, h: M } = E.current;
    if (C === 0 || M === 0) return;
    const P = l.current;
    if (P.length !== u)
      if (u > P.length) {
        const L = Array.from(
          { length: u - P.length },
          () => De(C, M, c, O, T)
        );
        l.current = [...P, ...L];
      } else
        l.current = P.slice(0, u);
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
    n.springOffsetX += l / m * E * 6 * _, n.springOffsetY += b / m * E * 6 * _;
  }
  n.springOffsetX *= 0.92, n.springOffsetY *= 0.92, n.springOffsetX = Math.max(-G, Math.min(G, n.springOffsetX)), n.springOffsetY = Math.max(-G, Math.min(G, n.springOffsetY));
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
  const v = I(null);
  return Rr(v, {
    count: n.count,
    colors: n.colors,
    minSize: n.minSize,
    maxSize: n.maxSize,
    speed: n.speed,
    glowIntensity: n.glowIntensity,
    mouseInfluenceRadius: n.mouseInfluenceRadius,
    mouseEffect: n.mouseEffect
  }), /* @__PURE__ */ Fe.jsx(
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
  style: u
}) {
  return typeof window > "u" ? null : /* @__PURE__ */ Fe.jsx(
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
      style: u
    }
  );
}
export {
  xr as CosmicDustCanvas
};
//# sourceMappingURL=cosmic-dust-canvas.js.map
