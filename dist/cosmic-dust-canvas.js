import We, { useRef as A, useEffect as de } from "react";
var ve = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function gr() {
  if (Le) return B;
  Le = 1;
  var r = We, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, m, O) {
    var E, w = {}, M = null, P = null;
    O !== void 0 && (M = "" + O), m.key !== void 0 && (M = "" + m.key), m.ref !== void 0 && (P = m.ref);
    for (E in m) i.call(m, E) && !l.hasOwnProperty(E) && (w[E] = m[E]);
    if (f && f.defaultProps) for (E in m = f.defaultProps, m) w[E] === void 0 && (w[E] = m[E]);
    return { $$typeof: n, type: f, key: M, ref: P, props: w, _owner: s.current };
  }
  return B.Fragment = o, B.jsx = u, B.jsxs = u, B;
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
var Ye;
function yr() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = We, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), C = Symbol.iterator, k = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = C && e[C] || e[k];
      return typeof t == "function" ? t : null;
    }
    var j = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), c = 1; c < t; c++)
          a[c - 1] = arguments[c];
        F("error", e, a);
      }
    }
    function F(e, t, a) {
      {
        var c = j.ReactDebugCurrentFrame, h = c.getStackAddendum();
        h !== "" && (t += "%s", a = a.concat([h]));
        var y = a.map(function(v) {
          return String(v);
        });
        y.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var X = !1, G = !1, J = !1, H = !1, g = !1, p;
    p = Symbol.for("react.module.reference");
    function D(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === l || g || e === s || e === O || e === E || H || e === P || X || G || J || typeof e == "object" && e !== null && (e.$$typeof === M || e.$$typeof === w || e.$$typeof === u || e.$$typeof === f || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === p || e.getModuleId !== void 0));
    }
    function L(e, t, a) {
      var c = e.displayName;
      if (c)
        return c;
      var h = t.displayName || t.name || "";
      return h !== "" ? a + "(" + h + ")" : a;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function I(e) {
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
        case O:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var t = e;
            return Q(t) + ".Consumer";
          case u:
            var a = e;
            return Q(a._context) + ".Provider";
          case m:
            return L(e, e.render, "ForwardRef");
          case w:
            var c = e.displayName || null;
            return c !== null ? c : I(e.type) || "Memo";
          case M: {
            var h = e, y = h._payload, v = h._init;
            try {
              return I(v(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, N = 0, he, me, ge, ye, Ee, pe, Re;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function Ue() {
      {
        if (N === 0) {
          he = console.log, me = console.info, ge = console.warn, ye = console.error, Ee = console.group, pe = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: we,
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
            log: Y({}, e, {
              value: he
            }),
            info: Y({}, e, {
              value: me
            }),
            warn: Y({}, e, {
              value: ge
            }),
            error: Y({}, e, {
              value: ye
            }),
            group: Y({}, e, {
              value: Ee
            }),
            groupCollapsed: Y({}, e, {
              value: pe
            }),
            groupEnd: Y({}, e, {
              value: Re
            })
          });
        }
        N < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = j.ReactCurrentDispatcher, oe;
    function Z(e, t, a) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (h) {
            var c = h.stack.trim().match(/\n( *(at )?)/);
            oe = c && c[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ie = !1, ee;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new Ne();
    }
    function be(e, t) {
      if (!e || ie)
        return "";
      {
        var a = ee.get(e);
        if (a !== void 0)
          return a;
      }
      var c;
      ie = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ae.current, ae.current = null, Ue();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (T) {
              c = T;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (T) {
              c = T;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            c = T;
          }
          e();
        }
      } catch (T) {
        if (T && c && typeof T.stack == "string") {
          for (var d = T.stack.split(`
`), S = c.stack.split(`
`), R = d.length - 1, _ = S.length - 1; R >= 1 && _ >= 0 && d[R] !== S[_]; )
            _--;
          for (; R >= 1 && _ >= 0; R--, _--)
            if (d[R] !== S[_]) {
              if (R !== 1 || _ !== 1)
                do
                  if (R--, _--, _ < 0 || d[R] !== S[_]) {
                    var x = `
` + d[R].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, x), x;
                  }
                while (R >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ae.current = y, Xe(), Error.prepareStackTrace = h;
      }
      var V = e ? e.displayName || e.name : "", $ = V ? Z(V) : "";
      return typeof e == "function" && ee.set(e, $), $;
    }
    function qe(e, t, a) {
      return be(e, !1);
    }
    function Be(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function re(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Be(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case O:
          return Z("Suspense");
        case E:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return qe(e.render);
          case w:
            return re(e.type, t, a);
          case M: {
            var c = e, h = c._payload, y = c._init;
            try {
              return re(y(h), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, _e = {}, Pe = j.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var t = e._owner, a = re(e.type, e._source, t ? t.type : null);
        Pe.setExtraStackFrame(a);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Ke(e, t, a, c, h) {
      {
        var y = Function.call.bind(q);
        for (var v in e)
          if (y(e, v)) {
            var d = void 0;
            try {
              if (typeof e[v] != "function") {
                var S = Error((c || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              d = e[v](t, v, c, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              d = R;
            }
            d && !(d instanceof Error) && (te(h), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", a, v, typeof d), te(null)), d instanceof Error && !(d.message in _e) && (_e[d.message] = !0, te(h), b("Failed %s type: %s", a, d.message), te(null));
          }
      }
    }
    var Ge = Array.isArray;
    function se(e) {
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
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Se(e) {
      if (He(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Oe(e);
    }
    var Te = j.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, xe;
    function Ze(e) {
      if (q.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, t) {
      typeof e.ref == "string" && Te.current;
    }
    function tr(e, t) {
      {
        var a = function() {
          Ce || (Ce = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          xe || (xe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var ar = function(e, t, a, c, h, y, v) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
        props: v,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function or(e, t, a, c, h) {
      {
        var y, v = {}, d = null, S = null;
        a !== void 0 && (Se(a), d = "" + a), er(t) && (Se(t.key), d = "" + t.key), Ze(t) && (S = t.ref, rr(t, h));
        for (y in t)
          q.call(t, y) && !Qe.hasOwnProperty(y) && (v[y] = t[y]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (y in R)
            v[y] === void 0 && (v[y] = R[y]);
        }
        if (d || S) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && tr(v, _), S && nr(v, _);
        }
        return ar(e, d, S, h, c, Te.current, v);
      }
    }
    var ce = j.ReactCurrentOwner, Me = j.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var t = e._owner, a = re(e.type, e._source, t ? t.type : null);
        Me.setExtraStackFrame(a);
      } else
        Me.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function ke() {
      {
        if (ce.current) {
          var e = I(ce.current.type);
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
    var je = {};
    function sr(e) {
      {
        var t = ke();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function Ie(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = sr(t);
        if (je[a])
          return;
        je[a] = !0;
        var c = "";
        e && e._owner && e._owner !== ce.current && (c = " It was passed a child from " + I(e._owner.type) + "."), z(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, c), z(null);
      }
    }
    function Ae(e, t) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var a = 0; a < e.length; a++) {
            var c = e[a];
            le(c) && Ie(c, t);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = W(e);
          if (typeof h == "function" && h !== e.entries)
            for (var y = h.call(e), v; !(v = y.next()).done; )
              le(v.value) && Ie(v.value, t);
        }
      }
    }
    function cr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          a = t.propTypes;
        else
          return;
        if (a) {
          var c = I(t);
          Ke(a, e.props, "prop", c, e);
        } else if (t.PropTypes !== void 0 && !ue) {
          ue = !0;
          var h = I(t);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var c = t[a];
          if (c !== "children" && c !== "key") {
            z(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    var De = {};
    function Fe(e, t, a, c, h, y) {
      {
        var v = D(e);
        if (!v) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = ir();
          S ? d += S : d += ke();
          var R;
          e === null ? R = "null" : se(e) ? R = "array" : e !== void 0 && e.$$typeof === n ? (R = "<" + (I(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, d);
        }
        var _ = or(e, t, a, h, y);
        if (_ == null)
          return _;
        if (v) {
          var x = t.children;
          if (x !== void 0)
            if (c)
              if (se(x)) {
                for (var V = 0; V < x.length; V++)
                  Ae(x[V], e);
                Object.freeze && Object.freeze(x);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(x, e);
        }
        if (q.call(t, "key")) {
          var $ = I(e), T = Object.keys(t).filter(function(mr) {
            return mr !== "key";
          }), fe = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[$ + fe]) {
            var hr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fe, $, hr, $), De[$ + fe] = !0;
          }
        }
        return e === i ? ur(_) : cr(_), _;
      }
    }
    function lr(e, t, a) {
      return Fe(e, t, a, !0);
    }
    function fr(e, t, a) {
      return Fe(e, t, a, !1);
    }
    var dr = fr, vr = lr;
    K.Fragment = i, K.jsx = dr, K.jsxs = vr;
  }()), K;
}
process.env.NODE_ENV === "production" ? ve.exports = gr() : ve.exports = yr();
var ze = ve.exports;
const Er = "#ffffff", pr = 0.05, Rr = 0.01;
function Ve(r, n, o, i, s) {
  const l = o.length > 0 ? o : [Er], u = Math.min(i, s), f = Math.max(i, s), m = Math.random() * Math.PI * 2, O = 0.2 + Math.random() * 0.8, E = 0.4 + Math.random() * 0.6, w = Math.floor(Math.random() * l.length);
  return {
    x: Math.random() * r,
    y: Math.random() * n,
    baseVx: Math.cos(m) * O,
    baseVy: Math.sin(m) * O,
    size: u + Math.random() * (f - u),
    opacity: E,
    baseOpacity: E,
    twinklePhase: Math.random() * Math.PI * 2,
    color: l[w],
    colorIndex: w,
    colorPhase: Math.random(),
    // staggered start so the field doesn't cycle in lockstep
    springOffsetX: 0,
    springOffsetY: 0
  };
}
function wr(r, n, o) {
  if (o <= 0) return;
  if (n.length < 2) {
    n.length === 1 && (r.color = n[0]);
    return;
  }
  r.colorPhase += o * Rr;
  const i = Math.floor(r.colorPhase);
  r.colorPhase -= i, r.colorIndex = (r.colorIndex + i) % n.length, r.color = n[r.colorIndex];
}
function br(r, n) {
  if (n <= 0) {
    r.opacity = r.baseOpacity;
    return;
  }
  r.twinklePhase = (r.twinklePhase + pr) % (Math.PI * 2);
  const o = 1 - n * 0.5 * (1 - Math.sin(r.twinklePhase));
  r.opacity = Math.max(0, Math.min(1, r.baseOpacity * o));
}
function _r(r, n, o, i, s, l) {
  return Array.from(
    { length: r },
    () => Ve(n, o, i, s, l)
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
    const l = -Math.PI / 2 + s * 2 * Math.PI / 3, u = n + i * Math.cos(l), f = o + i * Math.sin(l);
    s === 0 ? r.moveTo(u, f) : r.lineTo(u, f);
  }
  r.closePath();
}
function Cr(r, n, o, i) {
  const l = i * 0.5;
  for (let u = 0; u < 5 * 2; u++) {
    const f = u % 2 === 0 ? i : l, m = -Math.PI / 2 + u * Math.PI / 5, O = n + f * Math.cos(m), E = o + f * Math.sin(m);
    u === 0 ? r.moveTo(O, E) : r.lineTo(O, E);
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
const Mr = 2048, U = /* @__PURE__ */ new Map();
function kr(r, n) {
  const o = U.get(r);
  if (o) return o;
  const i = n();
  if (U.size >= Mr) {
    const s = U.keys().next().value;
    s !== void 0 && U.delete(s);
  }
  return U.set(r, i), i;
}
function $e() {
  U.clear();
}
function jr(r, n, o, i, s) {
  return `${r}|${n}|${o}|${i}|${s}`;
}
function Ir(r, n, o, i, s = "circle") {
  const l = o + i;
  if (i > 0) {
    const u = o + i, f = r.createRadialGradient(l, l, o, l, l, u);
    f.addColorStop(0, n), f.addColorStop(1, "transparent"), r.fillStyle = f, r.beginPath(), r.arc(l, l, u, 0, Math.PI * 2), r.arc(l, l, o, 0, Math.PI * 2), r.fill("evenodd");
  }
  r.fillStyle = n, r.beginPath(), xr(r, s, l, l, o), r.fill();
}
function Ar(r, n, o, i, s = "circle") {
  return kr(jr(s, r, n, o, i), () => {
    const l = 2 * (n + o), u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(l * i)), u.height = u.width;
    const f = u.getContext("2d");
    return f && (f.scale(i, i), Ir(f, r, n, o, s)), u;
  });
}
const ne = 120;
function Dr(r, n, o, i) {
  const s = n.x + n.springOffsetX, l = n.y + n.springOffsetY;
  if (o.renderParticle) {
    r.save(), r.globalAlpha = n.opacity, r.translate(s, l), o.renderParticle(r, n), r.restore();
    return;
  }
  const u = Ar(n.color, n.size, o.glowIntensity, i, o.shape), f = n.size + o.glowIntensity;
  r.globalAlpha = n.opacity, r.drawImage(u, s - f, l - f, f * 2, f * 2);
}
function Fr(r, n) {
  const o = A(n);
  o.current = n;
  const i = A([]), s = A({ x: -9999, y: -9999 }), l = A(0), u = A({ w: 0, h: 0 }), f = A(() => {
  }), m = A(() => {
  }), O = A(() => {
  }), E = A(() => {
  }), w = A(() => {
  });
  de(() => {
    const P = r.current;
    if (!P) return;
    const C = P.getContext("2d");
    if (!C) return;
    let k = window.devicePixelRatio || 1;
    const W = () => {
      const g = P.parentElement, p = g ? g.clientWidth : window.innerWidth, D = g ? g.clientHeight : window.innerHeight;
      u.current.w = p, u.current.h = D, P.width = Math.round(p * k), P.height = Math.round(D * k), C.setTransform(k, 0, 0, k, 0, 0);
    };
    W();
    const { count: j, colors: b, minSize: F, maxSize: X } = o.current;
    i.current = _r(
      j,
      u.current.w,
      u.current.h,
      b,
      F,
      X
    ), f.current = () => {
      const g = u.current.w, p = u.current.h, D = window.devicePixelRatio || 1;
      D !== k && (k = D, $e()), W();
      const L = g > 0 ? u.current.w / g : 1, Q = p > 0 ? u.current.h / p : 1;
      for (const I of i.current)
        I.x *= L, I.y *= Q;
    }, m.current = (g) => {
      const p = P.getBoundingClientRect();
      s.current = { x: g.clientX - p.left, y: g.clientY - p.top };
    };
    const G = (g) => {
      const p = P.getBoundingClientRect();
      s.current = { x: g.clientX - p.left, y: g.clientY - p.top };
    };
    O.current = (g) => {
      const p = g.touches[0];
      p && G(p);
    }, E.current = (g) => {
      const p = g.touches[0];
      p && (G(p), o.current.mouseEffect !== "none" && g.preventDefault());
    }, w.current = () => {
      s.current = { x: -9999, y: -9999 };
    }, window.addEventListener("resize", f.current), window.addEventListener("mousemove", m.current);
    const J = o.current.touch;
    J && (window.addEventListener("touchstart", O.current, { passive: !0 }), window.addEventListener("touchmove", E.current, { passive: !1 }), window.addEventListener("touchend", w.current), window.addEventListener("touchcancel", w.current));
    const H = () => {
      const g = o.current, { w: p, h: D } = u.current;
      C.clearRect(0, 0, p, D);
      for (const L of i.current)
        Pr(L, p, D, g.speed), br(L, g.twinkle), wr(L, g.colors, g.colorCycle), Lr(L, s.current, g), Dr(C, L, g, k);
      C.globalAlpha = 1, l.current = requestAnimationFrame(H);
    };
    return l.current = requestAnimationFrame(H), () => {
      cancelAnimationFrame(l.current), window.removeEventListener("resize", f.current), window.removeEventListener("mousemove", m.current), J && (window.removeEventListener("touchstart", O.current), window.removeEventListener("touchmove", E.current), window.removeEventListener("touchend", w.current), window.removeEventListener("touchcancel", w.current));
    };
  }, [r]), de(() => {
    const { count: P, colors: C, minSize: k, maxSize: W } = o.current, { w: j, h: b } = u.current;
    if (j === 0 || b === 0) return;
    const F = i.current;
    if (F.length !== P)
      if (P > F.length) {
        const X = Array.from(
          { length: P - F.length },
          () => Ve(j, b, C, k, W)
        );
        i.current = [...F, ...X];
      } else
        i.current = F.slice(0, P);
  }, [n.count]);
  const M = n.colors.join("|");
  de(() => {
    $e();
  }, [M, n.minSize, n.maxSize, n.glowIntensity, n.shape]);
}
function Lr(r, n, o) {
  if (o.mouseEffect === "none") {
    r.springOffsetX *= 0.9, r.springOffsetY *= 0.9;
    return;
  }
  const i = r.x + r.springOffsetX - n.x, s = r.y + r.springOffsetY - n.y, l = Math.sqrt(i * i + s * s);
  if (l < o.mouseInfluenceRadius && l > 0) {
    const u = (o.mouseInfluenceRadius - l) / o.mouseInfluenceRadius, f = o.mouseEffect === "repel" ? 1 : -1;
    r.springOffsetX += i / l * u * 6 * f, r.springOffsetY += s / l * u * 6 * f;
  }
  r.springOffsetX *= 0.92, r.springOffsetY *= 0.92, r.springOffsetX = Math.max(-ne, Math.min(ne, r.springOffsetX)), r.springOffsetY = Math.max(-ne, Math.min(ne, r.springOffsetY));
}
const Yr = ["#ffffff", "#a78bfa", "#60a5fa"], $r = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none"
};
function Wr(r) {
  const n = A(null);
  return Fr(n, {
    count: r.count,
    colors: r.colors,
    minSize: r.minSize,
    maxSize: r.maxSize,
    speed: r.speed,
    glowIntensity: r.glowIntensity,
    mouseInfluenceRadius: r.mouseInfluenceRadius,
    mouseEffect: r.mouseEffect,
    touch: r.touch,
    shape: r.shape,
    twinkle: r.twinkle,
    colorCycle: r.colorCycle,
    renderParticle: r.renderParticle
  }), /* @__PURE__ */ ze.jsx(
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
  colors: n = Yr,
  minSize: o = 1,
  maxSize: i = 3,
  speed: s = 0.4,
  glowIntensity: l = 0,
  mouseInfluenceRadius: u = 120,
  mouseEffect: f = "repel",
  touch: m = !0,
  shape: O = "circle",
  twinkle: E = 0,
  colorCycle: w = 0,
  renderParticle: M,
  className: P,
  style: C
}) {
  return typeof window > "u" ? null : /* @__PURE__ */ ze.jsx(
    Wr,
    {
      count: r,
      colors: n,
      minSize: o,
      maxSize: i,
      speed: s,
      glowIntensity: l,
      mouseInfluenceRadius: u,
      mouseEffect: f,
      touch: m,
      shape: O,
      twinkle: E,
      colorCycle: w,
      renderParticle: M,
      className: P,
      style: C
    }
  );
}
export {
  Vr as CosmicDustCanvas
};
//# sourceMappingURL=cosmic-dust-canvas.js.map
