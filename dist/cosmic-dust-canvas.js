import We, { useRef as I, useEffect as de } from "react";
var ve = { exports: {} }, q = {};
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
  if (Le) return q;
  Le = 1;
  var r = We, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, g, O) {
    var p, b = {}, x = null, m = null;
    O !== void 0 && (x = "" + O), g.key !== void 0 && (x = "" + g.key), g.ref !== void 0 && (m = g.ref);
    for (p in g) i.call(g, p) && !u.hasOwnProperty(p) && (b[p] = g[p]);
    if (f && f.defaultProps) for (p in g = f.defaultProps, g) b[p] === void 0 && (b[p] = g[p]);
    return { $$typeof: n, type: f, key: x, ref: m, props: b, _owner: s.current };
  }
  return q.Fragment = o, q.jsx = l, q.jsxs = l, q;
}
var B = {};
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
    var r = We, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), M = Symbol.iterator, D = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = M && e[M] || e[D];
      return typeof t == "function" ? t : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), c = 1; c < t; c++)
          a[c - 1] = arguments[c];
        A("error", e, a);
      }
    }
    function A(e, t, a) {
      {
        var c = k.ReactDebugCurrentFrame, h = c.getStackAddendum();
        h !== "" && (t += "%s", a = a.concat([h]));
        var y = a.map(function(v) {
          return String(v);
        });
        y.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var V = !1, K = !1, G = !1, J = !1, E = !1, R;
    R = Symbol.for("react.module.reference");
    function te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || E || e === s || e === O || e === p || J || e === m || V || K || G || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === b || e.$$typeof === l || e.$$typeof === f || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === R || e.getModuleId !== void 0));
    }
    function ne(e, t, a) {
      var c = e.displayName;
      if (c)
        return c;
      var h = t.displayName || t.name || "";
      return h !== "" ? a + "(" + h + ")" : a;
    }
    function U(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case O:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var t = e;
            return U(t) + ".Consumer";
          case l:
            var a = e;
            return U(a._context) + ".Provider";
          case g:
            return ne(e, e.render, "ForwardRef");
          case b:
            var c = e.displayName || null;
            return c !== null ? c : j(e.type) || "Memo";
          case x: {
            var h = e, y = h._payload, v = h._init;
            try {
              return j(v(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, X = 0, he, me, ge, ye, Ee, pe, Re;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function Ue() {
      {
        if (X === 0) {
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
        X++;
      }
    }
    function Xe() {
      {
        if (X--, X === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: he
            }),
            info: F({}, e, {
              value: me
            }),
            warn: F({}, e, {
              value: ge
            }),
            error: F({}, e, {
              value: ye
            }),
            group: F({}, e, {
              value: Ee
            }),
            groupCollapsed: F({}, e, {
              value: pe
            }),
            groupEnd: F({}, e, {
              value: Re
            })
          });
        }
        X < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = k.ReactCurrentDispatcher, oe;
    function H(e, t, a) {
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
    var ie = !1, Q;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Ne();
    }
    function be(e, t) {
      if (!e || ie)
        return "";
      {
        var a = Q.get(e);
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
`), w = d.length - 1, P = S.length - 1; w >= 1 && P >= 0 && d[w] !== S[P]; )
            P--;
          for (; w >= 1 && P >= 0; w--, P--)
            if (d[w] !== S[P]) {
              if (w !== 1 || P !== 1)
                do
                  if (w--, P--, P < 0 || d[w] !== S[P]) {
                    var C = `
` + d[w].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, C), C;
                  }
                while (w >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ae.current = y, Xe(), Error.prepareStackTrace = h;
      }
      var W = e ? e.displayName || e.name : "", L = W ? H(W) : "";
      return typeof e == "function" && Q.set(e, L), L;
    }
    function qe(e, t, a) {
      return be(e, !1);
    }
    function Be(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Z(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Be(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case O:
          return H("Suspense");
        case p:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return qe(e.render);
          case b:
            return Z(e.type, t, a);
          case x: {
            var c = e, h = c._payload, y = c._init;
            try {
              return Z(y(h), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, _e = {}, Pe = k.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var t = e._owner, a = Z(e.type, e._source, t ? t.type : null);
        Pe.setExtraStackFrame(a);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Ke(e, t, a, c, h) {
      {
        var y = Function.call.bind(N);
        for (var v in e)
          if (y(e, v)) {
            var d = void 0;
            try {
              if (typeof e[v] != "function") {
                var S = Error((c || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              d = e[v](t, v, c, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              d = w;
            }
            d && !(d instanceof Error) && (ee(h), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", a, v, typeof d), ee(null)), d instanceof Error && !(d.message in _e) && (_e[d.message] = !0, ee(h), _("Failed %s type: %s", a, d.message), ee(null));
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
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Oe(e);
    }
    var Te = k.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, xe;
    function Ze(e) {
      if (N.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (N.call(e, "key")) {
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
          Ce || (Ce = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          xe || (xe = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          N.call(t, y) && !Qe.hasOwnProperty(y) && (v[y] = t[y]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (y in w)
            v[y] === void 0 && (v[y] = w[y]);
        }
        if (d || S) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && tr(v, P), S && nr(v, P);
        }
        return ar(e, d, S, h, c, Te.current, v);
      }
    }
    var ce = k.ReactCurrentOwner, Me = k.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var t = e._owner, a = Z(e.type, e._source, t ? t.type : null);
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
          var e = j(ce.current.type);
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
        e && e._owner && e._owner !== ce.current && (c = " It was passed a child from " + j(e._owner.type) + "."), $(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, c), $(null);
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
          var h = Y(e);
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
        else if (typeof t == "object" && (t.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === b))
          a = t.propTypes;
        else
          return;
        if (a) {
          var c = j(t);
          Ke(a, e.props, "prop", c, e);
        } else if (t.PropTypes !== void 0 && !ue) {
          ue = !0;
          var h = j(t);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var c = t[a];
          if (c !== "children" && c !== "key") {
            $(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var De = {};
    function Fe(e, t, a, c, h, y) {
      {
        var v = te(e);
        if (!v) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = ir();
          S ? d += S : d += ke();
          var w;
          e === null ? w = "null" : se(e) ? w = "array" : e !== void 0 && e.$$typeof === n ? (w = "<" + (j(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, d);
        }
        var P = or(e, t, a, h, y);
        if (P == null)
          return P;
        if (v) {
          var C = t.children;
          if (C !== void 0)
            if (c)
              if (se(C)) {
                for (var W = 0; W < C.length; W++)
                  Ae(C[W], e);
                Object.freeze && Object.freeze(C);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(C, e);
        }
        if (N.call(t, "key")) {
          var L = j(e), T = Object.keys(t).filter(function(mr) {
            return mr !== "key";
          }), fe = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[L + fe]) {
            var hr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fe, L, hr, L), De[L + fe] = !0;
          }
        }
        return e === i ? ur(P) : cr(P), P;
      }
    }
    function lr(e, t, a) {
      return Fe(e, t, a, !0);
    }
    function fr(e, t, a) {
      return Fe(e, t, a, !1);
    }
    var dr = fr, vr = lr;
    B.Fragment = i, B.jsx = dr, B.jsxs = vr;
  }()), B;
}
process.env.NODE_ENV === "production" ? ve.exports = gr() : ve.exports = yr();
var ze = ve.exports;
const Er = "#ffffff", pr = 0.05, Rr = 0.01;
function Ve(r, n, o, i, s) {
  const u = o.length > 0 ? o : [Er], l = Math.min(i, s), f = Math.max(i, s), g = Math.random() * Math.PI * 2, O = 0.2 + Math.random() * 0.8, p = 0.4 + Math.random() * 0.6, b = Math.floor(Math.random() * u.length);
  return {
    x: Math.random() * r,
    y: Math.random() * n,
    baseVx: Math.cos(g) * O,
    baseVy: Math.sin(g) * O,
    size: l + Math.random() * (f - l),
    opacity: p,
    baseOpacity: p,
    twinklePhase: Math.random() * Math.PI * 2,
    color: u[b],
    colorIndex: b,
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
function _r(r, n, o, i, s, u) {
  return Array.from(
    { length: r },
    () => Ve(n, o, i, s, u)
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
    const u = -Math.PI / 2 + s * 2 * Math.PI / 3, l = n + i * Math.cos(u), f = o + i * Math.sin(u);
    s === 0 ? r.moveTo(l, f) : r.lineTo(l, f);
  }
  r.closePath();
}
function Cr(r, n, o, i) {
  const u = i * 0.5;
  for (let l = 0; l < 5 * 2; l++) {
    const f = l % 2 === 0 ? i : u, g = -Math.PI / 2 + l * Math.PI / 5, O = n + f * Math.cos(g), p = o + f * Math.sin(g);
    l === 0 ? r.moveTo(O, p) : r.lineTo(O, p);
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
const Mr = 2048, z = /* @__PURE__ */ new Map();
function kr(r, n) {
  const o = z.get(r);
  if (o) return o;
  const i = n();
  if (z.size >= Mr) {
    const s = z.keys().next().value;
    s !== void 0 && z.delete(s);
  }
  return z.set(r, i), i;
}
function $e() {
  z.clear();
}
function jr(r, n, o, i, s) {
  return `${r}|${n}|${o}|${i}|${s}`;
}
function Ir(r, n, o, i, s = "circle") {
  const u = o + i;
  if (i > 0) {
    const l = o + i, f = r.createRadialGradient(u, u, o, u, u, l);
    f.addColorStop(0, n), f.addColorStop(1, "transparent"), r.fillStyle = f, r.beginPath(), r.arc(u, u, l, 0, Math.PI * 2), r.arc(u, u, o, 0, Math.PI * 2), r.fill("evenodd");
  }
  r.fillStyle = n, r.beginPath(), xr(r, s, u, u, o), r.fill();
}
function Ar(r, n, o, i, s = "circle") {
  return kr(jr(s, r, n, o, i), () => {
    const u = 2 * (n + o), l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(u * i)), l.height = l.width;
    const f = l.getContext("2d");
    return f && (f.scale(i, i), Ir(f, r, n, o, s)), l;
  });
}
const re = 120;
function Dr(r, n, o, i) {
  const s = n.x + n.springOffsetX, u = n.y + n.springOffsetY;
  if (o.renderParticle) {
    r.save(), r.globalAlpha = n.opacity, r.translate(s, u), o.renderParticle(r, n), r.restore();
    return;
  }
  const l = Ar(n.color, n.size, o.glowIntensity, i, o.shape), f = n.size + o.glowIntensity;
  r.globalAlpha = n.opacity, r.drawImage(l, s - f, u - f, f * 2, f * 2);
}
function Fr(r, n) {
  const o = I(n);
  o.current = n;
  const i = I([]), s = I({ x: -9999, y: -9999 }), u = I(0), l = I({ w: 0, h: 0 }), f = I(() => {
  }), g = I(() => {
  }), O = I(() => {
  }), p = I(() => {
  }), b = I(() => {
  });
  de(() => {
    const m = r.current;
    if (!m) return;
    const M = m.getContext("2d");
    if (!M) return;
    let D = window.devicePixelRatio || 1;
    const Y = () => {
      const E = m.parentElement;
      l.current.w = E ? E.clientWidth : window.innerWidth, l.current.h = E ? E.clientHeight : window.innerHeight, m.width = l.current.w, m.height = l.current.h;
    };
    Y();
    const { count: k, colors: _, minSize: A, maxSize: V } = o.current;
    i.current = _r(
      k,
      m.width,
      m.height,
      _,
      A,
      V
    ), f.current = () => {
      const E = m.width, R = m.height;
      Y();
      const te = m.width / E, ne = m.height / R;
      for (const j of i.current)
        j.x *= te, j.y *= ne;
      const U = window.devicePixelRatio || 1;
      U !== D && (D = U, $e());
    }, g.current = (E) => {
      const R = m.getBoundingClientRect();
      s.current = { x: E.clientX - R.left, y: E.clientY - R.top };
    };
    const K = (E) => {
      const R = m.getBoundingClientRect();
      s.current = { x: E.clientX - R.left, y: E.clientY - R.top };
    };
    O.current = (E) => {
      const R = E.touches[0];
      R && K(R);
    }, p.current = (E) => {
      const R = E.touches[0];
      R && (K(R), o.current.mouseEffect !== "none" && E.preventDefault());
    }, b.current = () => {
      s.current = { x: -9999, y: -9999 };
    }, window.addEventListener("resize", f.current), window.addEventListener("mousemove", g.current);
    const G = o.current.touch;
    G && (window.addEventListener("touchstart", O.current, { passive: !0 }), window.addEventListener("touchmove", p.current, { passive: !1 }), window.addEventListener("touchend", b.current), window.addEventListener("touchcancel", b.current));
    const J = () => {
      const E = o.current;
      M.clearRect(0, 0, m.width, m.height);
      for (const R of i.current)
        Pr(R, m.width, m.height, E.speed), br(R, E.twinkle), wr(R, E.colors, E.colorCycle), Lr(R, s.current, E), Dr(M, R, E, D);
      M.globalAlpha = 1, u.current = requestAnimationFrame(J);
    };
    return u.current = requestAnimationFrame(J), () => {
      cancelAnimationFrame(u.current), window.removeEventListener("resize", f.current), window.removeEventListener("mousemove", g.current), G && (window.removeEventListener("touchstart", O.current), window.removeEventListener("touchmove", p.current), window.removeEventListener("touchend", b.current), window.removeEventListener("touchcancel", b.current));
    };
  }, [r]), de(() => {
    const { count: m, colors: M, minSize: D, maxSize: Y } = o.current, { w: k, h: _ } = l.current;
    if (k === 0 || _ === 0) return;
    const A = i.current;
    if (A.length !== m)
      if (m > A.length) {
        const V = Array.from(
          { length: m - A.length },
          () => Ve(k, _, M, D, Y)
        );
        i.current = [...A, ...V];
      } else
        i.current = A.slice(0, m);
  }, [n.count]);
  const x = n.colors.join("|");
  de(() => {
    $e();
  }, [x, n.minSize, n.maxSize, n.glowIntensity, n.shape]);
}
function Lr(r, n, o) {
  if (o.mouseEffect === "none") {
    r.springOffsetX *= 0.9, r.springOffsetY *= 0.9;
    return;
  }
  const i = r.x + r.springOffsetX - n.x, s = r.y + r.springOffsetY - n.y, u = Math.sqrt(i * i + s * s);
  if (u < o.mouseInfluenceRadius && u > 0) {
    const l = (o.mouseInfluenceRadius - u) / o.mouseInfluenceRadius, f = o.mouseEffect === "repel" ? 1 : -1;
    r.springOffsetX += i / u * l * 6 * f, r.springOffsetY += s / u * l * 6 * f;
  }
  r.springOffsetX *= 0.92, r.springOffsetY *= 0.92, r.springOffsetX = Math.max(-re, Math.min(re, r.springOffsetX)), r.springOffsetY = Math.max(-re, Math.min(re, r.springOffsetY));
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
  glowIntensity: u = 15,
  mouseInfluenceRadius: l = 120,
  mouseEffect: f = "repel",
  touch: g = !0,
  shape: O = "circle",
  twinkle: p = 0,
  colorCycle: b = 0,
  renderParticle: x,
  className: m,
  style: M
}) {
  return typeof window > "u" ? null : /* @__PURE__ */ ze.jsx(
    Wr,
    {
      count: r,
      colors: n,
      minSize: o,
      maxSize: i,
      speed: s,
      glowIntensity: u,
      mouseInfluenceRadius: l,
      mouseEffect: f,
      touch: g,
      shape: O,
      twinkle: p,
      colorCycle: b,
      renderParticle: x,
      className: m,
      style: M
    }
  );
}
export {
  Vr as CosmicDustCanvas
};
//# sourceMappingURL=cosmic-dust-canvas.js.map
