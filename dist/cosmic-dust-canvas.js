import De, { useRef as k, useEffect as ke } from "react";
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
  var n = De, v = Symbol.for("react.element"), h = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(_, g, s) {
    var d, O = {}, T = null, C = null;
    s !== void 0 && (T = "" + s), g.key !== void 0 && (T = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (d in g) f.call(g, d) && !m.hasOwnProperty(d) && (O[d] = g[d]);
    if (_ && _.defaultProps) for (d in g = _.defaultProps, g) O[d] === void 0 && (O[d] = g[d]);
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
var Fe;
function gr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = De, v = Symbol.for("react.element"), h = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), _ = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), A = Symbol.iterator, P = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[P];
      return typeof r == "function" ? r : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        F("error", e, t);
      }
    }
    function F(e, r, t) {
      {
        var a = y.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var D = !1, M = !1, $ = !1, Ye = !1, Le = !1, oe;
    oe = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === m || Le || e === b || e === s || e === d || Ye || e === C || D || M || $ || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === O || e.$$typeof === E || e.$$typeof === _ || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case h:
          return "Portal";
        case m:
          return "Profiler";
        case b:
          return "StrictMode";
        case s:
          return "Suspense";
        case d:
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
            return a !== null ? a : j(e.type) || "Memo";
          case T: {
            var c = e, l = c._payload, o = c._init;
            try {
              return j(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, V = 0, ue, ce, fe, le, de, ve, he;
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
            log: I({}, e, {
              value: ue
            }),
            info: I({}, e, {
              value: ce
            }),
            warn: I({}, e, {
              value: fe
            }),
            error: I({}, e, {
              value: le
            }),
            group: I({}, e, {
              value: de
            }),
            groupCollapsed: I({}, e, {
              value: ve
            }),
            groupEnd: I({}, e, {
              value: he
            })
          });
        }
        V < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = y.ReactCurrentDispatcher, Z;
    function q(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
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
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = H.current, H.current = null, $e();
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
        Q = !1, H.current = l, Ve(), Error.prepareStackTrace = c;
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
        case s:
          return q("Suspense");
        case d:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ne(e.render);
          case O:
            return J(e.type, r, t);
          case T: {
            var a = e, c = a._payload, l = a._init;
            try {
              return J(l(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, pe = {}, ye = y.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, c) {
      {
        var l = Function.call.bind(U);
        for (var o in e)
          if (l(e, o)) {
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
            i && !(i instanceof Error) && (K(c), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof i), K(null)), i instanceof Error && !(i.message in pe) && (pe[i.message] = !0, K(c), u("Failed %s type: %s", t, i.message), K(null));
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
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Re(e);
    }
    var be = y.ReactCurrentOwner, Ge = {
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
          _e || (_e = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          we || (we = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, a, c, l, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
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
        var l, o = {}, i = null, w = null;
        t !== void 0 && (Ee(t), i = "" + t), Ze(r) && (Ee(r.key), i = "" + r.key), He(r) && (w = r.ref, Qe(r, c));
        for (l in r)
          U.call(r, l) && !Ge.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (l in p)
            o[l] === void 0 && (o[l] = p[l]);
        }
        if (i || w) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(o, R), w && rr(o, R);
        }
        return tr(e, i, w, c, a, be.current, o);
      }
    }
    var re = y.ReactCurrentOwner, Oe = y.ReactDebugCurrentFrame;
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
          var e = j(re.current.type);
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
        e && e._owner && e._owner !== re.current && (a = " It was passed a child from " + j(e._owner.type) + "."), z(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), z(null);
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
          var c = L(e);
          if (typeof c == "function" && c !== e.entries)
            for (var l = c.call(e), o; !(o = l.next()).done; )
              ne(o.value) && Te(o.value, r);
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
          var a = j(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var c = j(r);
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
    var Pe = {};
    function je(e, r, t, a, c, l) {
      {
        var o = ze(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = ar();
          w ? i += w : i += xe();
          var p;
          e === null ? p = "null" : ee(e) ? p = "array" : e !== void 0 && e.$$typeof === v ? (p = "<" + (j(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var R = nr(e, r, t, c, l);
        if (R == null)
          return R;
        if (o) {
          var S = r.children;
          if (S !== void 0)
            if (a)
              if (ee(S)) {
                for (var W = 0; W < S.length; W++)
                  Ce(S[W], e);
                Object.freeze && Object.freeze(S);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(S, e);
        }
        if (U.call(r, "key")) {
          var Y = j(e), x = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), ae = x.length > 0 ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[Y + ae]) {
            var dr = x.length > 0 ? "{" + x.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, Y, dr, Y), Pe[Y + ae] = !0;
          }
        }
        return e === f ? sr(R) : or(R), R;
      }
    }
    function ur(e, r, t) {
      return je(e, r, t, !0);
    }
    function cr(e, r, t) {
      return je(e, r, t, !1);
    }
    var fr = cr, lr = ur;
    X.Fragment = f, X.jsx = fr, X.jsxs = lr;
  }()), X;
}
process.env.NODE_ENV === "production" ? ie.exports = hr() : ie.exports = gr();
var Me = ie.exports;
const mr = "#ffffff";
function Ie(n, v, h, f, b) {
  const m = h.length > 0 ? h : [mr], E = Math.min(f, b), _ = Math.max(f, b), g = Math.random() * Math.PI * 2, s = 0.2 + Math.random() * 0.8;
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
function pr(n, v, h, f, b, m) {
  return Array.from(
    { length: n },
    () => Ie(v, h, f, b, m)
  );
}
function yr(n, v, h, f) {
  n.x += n.baseVx * f, n.y += n.baseVy * f, n.x < -n.size ? n.x = v + n.size : n.x > v + n.size && (n.x = -n.size), n.y < -n.size ? n.y = h + n.size : n.y > h + n.size && (n.y = -n.size);
}
const G = 120;
function Rr(n, v) {
  const h = k(v);
  h.current = v;
  const f = k([]), b = k({ x: -9999, y: -9999 }), m = k(0), E = k({ w: 0, h: 0 }), _ = k(() => {
  }), g = k(() => {
  });
  ke(() => {
    const s = n.current;
    if (!s) return;
    const d = s.getContext("2d");
    if (!d) return;
    const O = () => {
      const y = s.parentElement;
      E.current.w = y ? y.clientWidth : window.innerWidth, E.current.h = y ? y.clientHeight : window.innerHeight, s.width = E.current.w, s.height = E.current.h;
    };
    O();
    const { count: T, colors: C, minSize: A, maxSize: P } = h.current;
    f.current = pr(
      T,
      s.width,
      s.height,
      C,
      A,
      P
    ), _.current = () => {
      const y = s.width, u = s.height;
      O();
      const F = s.width / y, D = s.height / u;
      for (const M of f.current)
        M.x *= F, M.y *= D;
    }, g.current = (y) => {
      const u = s.getBoundingClientRect();
      b.current = { x: y.clientX - u.left, y: y.clientY - u.top };
    }, window.addEventListener("resize", _.current), window.addEventListener("mousemove", g.current);
    const L = () => {
      const y = h.current;
      d.clearRect(0, 0, s.width, s.height);
      for (const u of f.current) {
        yr(u, s.width, s.height, y.speed), Er(u, b.current, y);
        const F = u.x + u.springOffsetX, D = u.y + u.springOffsetY, M = u.size + y.glowIntensity, $ = d.createRadialGradient(F, D, 0, F, D, M);
        $.addColorStop(0, u.color), $.addColorStop(1, "transparent"), d.save(), d.globalAlpha = u.opacity, d.fillStyle = $, d.beginPath(), d.arc(F, D, M, 0, Math.PI * 2), d.fill(), d.restore();
      }
      m.current = requestAnimationFrame(L);
    };
    return m.current = requestAnimationFrame(L), () => {
      cancelAnimationFrame(m.current), window.removeEventListener("resize", _.current), window.removeEventListener("mousemove", g.current);
    };
  }, [n]), ke(() => {
    const { count: s, colors: d, minSize: O, maxSize: T } = h.current, { w: C, h: A } = E.current;
    if (C === 0 || A === 0) return;
    const P = f.current;
    if (P.length !== s)
      if (s > P.length) {
        const L = Array.from(
          { length: s - P.length },
          () => Ie(C, A, d, O, T)
        );
        f.current = [...P, ...L];
      } else
        f.current = P.slice(0, s);
  }, [v.count]);
}
function Er(n, v, h) {
  if (h.mouseEffect === "none") {
    n.springOffsetX *= 0.9, n.springOffsetY *= 0.9;
    return;
  }
  const f = n.x + n.springOffsetX - v.x, b = n.y + n.springOffsetY - v.y, m = Math.sqrt(f * f + b * b);
  if (m < h.mouseInfluenceRadius && m > 0) {
    const E = (h.mouseInfluenceRadius - m) / h.mouseInfluenceRadius, _ = h.mouseEffect === "repel" ? 1 : -1;
    n.springOffsetX += f / m * E * 6 * _, n.springOffsetY += b / m * E * 6 * _;
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
  const v = k(null);
  return Rr(v, {
    count: n.count,
    colors: n.colors,
    minSize: n.minSize,
    maxSize: n.maxSize,
    speed: n.speed,
    glowIntensity: n.glowIntensity,
    mouseInfluenceRadius: n.mouseInfluenceRadius,
    mouseEffect: n.mouseEffect
  }), /* @__PURE__ */ Me.jsx(
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
  maxSize: f = 3,
  speed: b = 0.4,
  glowIntensity: m = 15,
  mouseInfluenceRadius: E = 120,
  mouseEffect: _ = "repel",
  className: g,
  style: s
}) {
  return typeof window > "u" ? null : /* @__PURE__ */ Me.jsx(
    wr,
    {
      count: n,
      colors: v,
      minSize: h,
      maxSize: f,
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
