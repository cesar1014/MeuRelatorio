var bf = { exports: {} }, Ru = {};
var Mr;
function fy() {
  if (Mr) return Ru;
  Mr = 1;
  var v = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.fragment");
  function N(r, H, G) {
    var Z = null;
    if (G !== void 0 && (Z = "" + G), H.key !== void 0 && (Z = "" + H.key), "key" in H) {
      G = {};
      for (var el in H)
        el !== "key" && (G[el] = H[el]);
    } else G = H;
    return H = G.ref, {
      $$typeof: v,
      type: r,
      key: Z,
      ref: H !== void 0 ? H : null,
      props: G
    };
  }
  return Ru.Fragment = T, Ru.jsx = N, Ru.jsxs = N, Ru;
}
var Or;
function sy() {
  return Or || (Or = 1, bf.exports = fy()), bf.exports;
}
var A = sy(), Sf = { exports: {} }, V = {};
var Ur;
function oy() {
  if (Ur) return V;
  Ur = 1;
  var v = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), H = /* @__PURE__ */ Symbol.for("react.profiler"), G = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), el = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), sl = Symbol.iterator;
  function al(o) {
    return o === null || typeof o != "object" ? null : (o = sl && o[sl] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var Nl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ol = Object.assign, Cl = {};
  function ml(o, z, O) {
    this.props = o, this.context = z, this.refs = Cl, this.updater = O || Nl;
  }
  ml.prototype.isReactComponent = {}, ml.prototype.setState = function(o, z) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, z, "setState");
  }, ml.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function ft() {
  }
  ft.prototype = ml.prototype;
  function pl(o, z, O) {
    this.props = o, this.context = z, this.refs = Cl, this.updater = O || Nl;
  }
  var Ql = pl.prototype = new ft();
  Ql.constructor = pl, ol(Ql, ml.prototype), Ql.isPureReactComponent = !0;
  var St = Array.isArray;
  function Zl() {
  }
  var k = { H: null, A: null, T: null, S: null }, Vl = Object.prototype.hasOwnProperty;
  function st(o, z, O) {
    var C = O.ref;
    return {
      $$typeof: v,
      type: o,
      key: z,
      ref: C !== void 0 ? C : null,
      props: O
    };
  }
  function Xt(o, z) {
    return st(o.type, z, o.props);
  }
  function pt(o) {
    return typeof o == "object" && o !== null && o.$$typeof === v;
  }
  function Yl(o) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(O) {
      return z[O];
    });
  }
  var jl = /\/+/g;
  function zt(o, z) {
    return typeof o == "object" && o !== null && o.key != null ? Yl("" + o.key) : z.toString(36);
  }
  function hl(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Zl, Zl) : (o.status = "pending", o.then(
          function(z) {
            o.status === "pending" && (o.status = "fulfilled", o.value = z);
          },
          function(z) {
            o.status === "pending" && (o.status = "rejected", o.reason = z);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function b(o, z, O, C, X) {
    var W = typeof o;
    (W === "undefined" || W === "boolean") && (o = null);
    var il = !1;
    if (o === null) il = !0;
    else
      switch (W) {
        case "bigint":
        case "string":
        case "number":
          il = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case v:
            case T:
              il = !0;
              break;
            case w:
              return il = o._init, b(
                il(o._payload),
                z,
                O,
                C,
                X
              );
          }
      }
    if (il)
      return X = X(o), il = C === "" ? "." + zt(o, 0) : C, St(X) ? (O = "", il != null && (O = il.replace(jl, "$&/") + "/"), b(X, z, O, "", function(je) {
        return je;
      })) : X != null && (pt(X) && (X = Xt(
        X,
        O + (X.key == null || o && o.key === X.key ? "" : ("" + X.key).replace(
          jl,
          "$&/"
        ) + "/") + il
      )), z.push(X)), 1;
    il = 0;
    var Kl = C === "" ? "." : C + ":";
    if (St(o))
      for (var El = 0; El < o.length; El++)
        C = o[El], W = Kl + zt(C, El), il += b(
          C,
          z,
          O,
          W,
          X
        );
    else if (El = al(o), typeof El == "function")
      for (o = El.call(o), El = 0; !(C = o.next()).done; )
        C = C.value, W = Kl + zt(C, El++), il += b(
          C,
          z,
          O,
          W,
          X
        );
    else if (W === "object") {
      if (typeof o.then == "function")
        return b(
          hl(o),
          z,
          O,
          C,
          X
        );
      throw z = String(o), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return il;
  }
  function _(o, z, O) {
    if (o == null) return o;
    var C = [], X = 0;
    return b(o, C, "", "", function(W) {
      return z.call(O, W, X++);
    }), C;
  }
  function B(o) {
    if (o._status === -1) {
      var z = o._result;
      z = z(), z.then(
        function(O) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = O);
        },
        function(O) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = O);
        }
      ), o._status === -1 && (o._status = 0, o._result = z);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var rl = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  }, nl = {
    map: _,
    forEach: function(o, z, O) {
      _(
        o,
        function() {
          z.apply(this, arguments);
        },
        O
      );
    },
    count: function(o) {
      var z = 0;
      return _(o, function() {
        z++;
      }), z;
    },
    toArray: function(o) {
      return _(o, function(z) {
        return z;
      }) || [];
    },
    only: function(o) {
      if (!pt(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return V.Activity = D, V.Children = nl, V.Component = ml, V.Fragment = N, V.Profiler = H, V.PureComponent = pl, V.StrictMode = r, V.Suspense = U, V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, V.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return k.H.useMemoCache(o);
    }
  }, V.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, V.cacheSignal = function() {
    return null;
  }, V.cloneElement = function(o, z, O) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var C = ol({}, o.props), X = o.key;
    if (z != null)
      for (W in z.key !== void 0 && (X = "" + z.key), z)
        !Vl.call(z, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && z.ref === void 0 || (C[W] = z[W]);
    var W = arguments.length - 2;
    if (W === 1) C.children = O;
    else if (1 < W) {
      for (var il = Array(W), Kl = 0; Kl < W; Kl++)
        il[Kl] = arguments[Kl + 2];
      C.children = il;
    }
    return st(o.type, X, C);
  }, V.createContext = function(o) {
    return o = {
      $$typeof: Z,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: G,
      _context: o
    }, o;
  }, V.createElement = function(o, z, O) {
    var C, X = {}, W = null;
    if (z != null)
      for (C in z.key !== void 0 && (W = "" + z.key), z)
        Vl.call(z, C) && C !== "key" && C !== "__self" && C !== "__source" && (X[C] = z[C]);
    var il = arguments.length - 2;
    if (il === 1) X.children = O;
    else if (1 < il) {
      for (var Kl = Array(il), El = 0; El < il; El++)
        Kl[El] = arguments[El + 2];
      X.children = Kl;
    }
    if (o && o.defaultProps)
      for (C in il = o.defaultProps, il)
        X[C] === void 0 && (X[C] = il[C]);
    return st(o, W, X);
  }, V.createRef = function() {
    return { current: null };
  }, V.forwardRef = function(o) {
    return { $$typeof: el, render: o };
  }, V.isValidElement = pt, V.lazy = function(o) {
    return {
      $$typeof: w,
      _payload: { _status: -1, _result: o },
      _init: B
    };
  }, V.memo = function(o, z) {
    return {
      $$typeof: x,
      type: o,
      compare: z === void 0 ? null : z
    };
  }, V.startTransition = function(o) {
    var z = k.T, O = {};
    k.T = O;
    try {
      var C = o(), X = k.S;
      X !== null && X(O, C), typeof C == "object" && C !== null && typeof C.then == "function" && C.then(Zl, rl);
    } catch (W) {
      rl(W);
    } finally {
      z !== null && O.types !== null && (z.types = O.types), k.T = z;
    }
  }, V.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, V.use = function(o) {
    return k.H.use(o);
  }, V.useActionState = function(o, z, O) {
    return k.H.useActionState(o, z, O);
  }, V.useCallback = function(o, z) {
    return k.H.useCallback(o, z);
  }, V.useContext = function(o) {
    return k.H.useContext(o);
  }, V.useDebugValue = function() {
  }, V.useDeferredValue = function(o, z) {
    return k.H.useDeferredValue(o, z);
  }, V.useEffect = function(o, z) {
    return k.H.useEffect(o, z);
  }, V.useEffectEvent = function(o) {
    return k.H.useEffectEvent(o);
  }, V.useId = function() {
    return k.H.useId();
  }, V.useImperativeHandle = function(o, z, O) {
    return k.H.useImperativeHandle(o, z, O);
  }, V.useInsertionEffect = function(o, z) {
    return k.H.useInsertionEffect(o, z);
  }, V.useLayoutEffect = function(o, z) {
    return k.H.useLayoutEffect(o, z);
  }, V.useMemo = function(o, z) {
    return k.H.useMemo(o, z);
  }, V.useOptimistic = function(o, z) {
    return k.H.useOptimistic(o, z);
  }, V.useReducer = function(o, z, O) {
    return k.H.useReducer(o, z, O);
  }, V.useRef = function(o) {
    return k.H.useRef(o);
  }, V.useState = function(o) {
    return k.H.useState(o);
  }, V.useSyncExternalStore = function(o, z, O) {
    return k.H.useSyncExternalStore(
      o,
      z,
      O
    );
  }, V.useTransition = function() {
    return k.H.useTransition();
  }, V.version = "19.2.4", V;
}
var Dr;
function Nf() {
  return Dr || (Dr = 1, Sf.exports = oy()), Sf.exports;
}
var Q = Nf(), pf = { exports: {} }, Hu = {}, zf = { exports: {} }, Tf = {};
var Cr;
function ry() {
  return Cr || (Cr = 1, (function(v) {
    function T(b, _) {
      var B = b.length;
      b.push(_);
      l: for (; 0 < B; ) {
        var rl = B - 1 >>> 1, nl = b[rl];
        if (0 < H(nl, _))
          b[rl] = _, b[B] = nl, B = rl;
        else break l;
      }
    }
    function N(b) {
      return b.length === 0 ? null : b[0];
    }
    function r(b) {
      if (b.length === 0) return null;
      var _ = b[0], B = b.pop();
      if (B !== _) {
        b[0] = B;
        l: for (var rl = 0, nl = b.length, o = nl >>> 1; rl < o; ) {
          var z = 2 * (rl + 1) - 1, O = b[z], C = z + 1, X = b[C];
          if (0 > H(O, B))
            C < nl && 0 > H(X, O) ? (b[rl] = X, b[C] = B, rl = C) : (b[rl] = O, b[z] = B, rl = z);
          else if (C < nl && 0 > H(X, B))
            b[rl] = X, b[C] = B, rl = C;
          else break l;
        }
      }
      return _;
    }
    function H(b, _) {
      var B = b.sortIndex - _.sortIndex;
      return B !== 0 ? B : b.id - _.id;
    }
    if (v.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var G = performance;
      v.unstable_now = function() {
        return G.now();
      };
    } else {
      var Z = Date, el = Z.now();
      v.unstable_now = function() {
        return Z.now() - el;
      };
    }
    var U = [], x = [], w = 1, D = null, sl = 3, al = !1, Nl = !1, ol = !1, Cl = !1, ml = typeof setTimeout == "function" ? setTimeout : null, ft = typeof clearTimeout == "function" ? clearTimeout : null, pl = typeof setImmediate < "u" ? setImmediate : null;
    function Ql(b) {
      for (var _ = N(x); _ !== null; ) {
        if (_.callback === null) r(x);
        else if (_.startTime <= b)
          r(x), _.sortIndex = _.expirationTime, T(U, _);
        else break;
        _ = N(x);
      }
    }
    function St(b) {
      if (ol = !1, Ql(b), !Nl)
        if (N(U) !== null)
          Nl = !0, Zl || (Zl = !0, Yl());
        else {
          var _ = N(x);
          _ !== null && hl(St, _.startTime - b);
        }
    }
    var Zl = !1, k = -1, Vl = 5, st = -1;
    function Xt() {
      return Cl ? !0 : !(v.unstable_now() - st < Vl);
    }
    function pt() {
      if (Cl = !1, Zl) {
        var b = v.unstable_now();
        st = b;
        var _ = !0;
        try {
          l: {
            Nl = !1, ol && (ol = !1, ft(k), k = -1), al = !0;
            var B = sl;
            try {
              t: {
                for (Ql(b), D = N(U); D !== null && !(D.expirationTime > b && Xt()); ) {
                  var rl = D.callback;
                  if (typeof rl == "function") {
                    D.callback = null, sl = D.priorityLevel;
                    var nl = rl(
                      D.expirationTime <= b
                    );
                    if (b = v.unstable_now(), typeof nl == "function") {
                      D.callback = nl, Ql(b), _ = !0;
                      break t;
                    }
                    D === N(U) && r(U), Ql(b);
                  } else r(U);
                  D = N(U);
                }
                if (D !== null) _ = !0;
                else {
                  var o = N(x);
                  o !== null && hl(
                    St,
                    o.startTime - b
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              D = null, sl = B, al = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Yl() : Zl = !1;
        }
      }
    }
    var Yl;
    if (typeof pl == "function")
      Yl = function() {
        pl(pt);
      };
    else if (typeof MessageChannel < "u") {
      var jl = new MessageChannel(), zt = jl.port2;
      jl.port1.onmessage = pt, Yl = function() {
        zt.postMessage(null);
      };
    } else
      Yl = function() {
        ml(pt, 0);
      };
    function hl(b, _) {
      k = ml(function() {
        b(v.unstable_now());
      }, _);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, v.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Vl = 0 < b ? Math.floor(1e3 / b) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return sl;
    }, v.unstable_next = function(b) {
      switch (sl) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = sl;
      }
      var B = sl;
      sl = _;
      try {
        return b();
      } finally {
        sl = B;
      }
    }, v.unstable_requestPaint = function() {
      Cl = !0;
    }, v.unstable_runWithPriority = function(b, _) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var B = sl;
      sl = b;
      try {
        return _();
      } finally {
        sl = B;
      }
    }, v.unstable_scheduleCallback = function(b, _, B) {
      var rl = v.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? rl + B : rl) : B = rl, b) {
        case 1:
          var nl = -1;
          break;
        case 2:
          nl = 250;
          break;
        case 5:
          nl = 1073741823;
          break;
        case 4:
          nl = 1e4;
          break;
        default:
          nl = 5e3;
      }
      return nl = B + nl, b = {
        id: w++,
        callback: _,
        priorityLevel: b,
        startTime: B,
        expirationTime: nl,
        sortIndex: -1
      }, B > rl ? (b.sortIndex = B, T(x, b), N(U) === null && b === N(x) && (ol ? (ft(k), k = -1) : ol = !0, hl(St, B - rl))) : (b.sortIndex = nl, T(U, b), Nl || al || (Nl = !0, Zl || (Zl = !0, Yl()))), b;
    }, v.unstable_shouldYield = Xt, v.unstable_wrapCallback = function(b) {
      var _ = sl;
      return function() {
        var B = sl;
        sl = _;
        try {
          return b.apply(this, arguments);
        } finally {
          sl = B;
        }
      };
    };
  })(Tf)), Tf;
}
var jr;
function dy() {
  return jr || (jr = 1, zf.exports = ry()), zf.exports;
}
var Ef = { exports: {} }, Pl = {};
var Rr;
function my() {
  if (Rr) return Pl;
  Rr = 1;
  var v = Nf();
  function T(U) {
    var x = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      x += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        x += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + U + "; visit " + x + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function N() {
  }
  var r = {
    d: {
      f: N,
      r: function() {
        throw Error(T(522));
      },
      D: N,
      C: N,
      L: N,
      m: N,
      X: N,
      S: N,
      M: N
    },
    p: 0,
    findDOMNode: null
  }, H = /* @__PURE__ */ Symbol.for("react.portal");
  function G(U, x, w) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: H,
      key: D == null ? null : "" + D,
      children: U,
      containerInfo: x,
      implementation: w
    };
  }
  var Z = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function el(U, x) {
    if (U === "font") return "";
    if (typeof x == "string")
      return x === "use-credentials" ? x : "";
  }
  return Pl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Pl.createPortal = function(U, x) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!x || x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11)
      throw Error(T(299));
    return G(U, x, null, w);
  }, Pl.flushSync = function(U) {
    var x = Z.T, w = r.p;
    try {
      if (Z.T = null, r.p = 2, U) return U();
    } finally {
      Z.T = x, r.p = w, r.d.f();
    }
  }, Pl.preconnect = function(U, x) {
    typeof U == "string" && (x ? (x = x.crossOrigin, x = typeof x == "string" ? x === "use-credentials" ? x : "" : void 0) : x = null, r.d.C(U, x));
  }, Pl.prefetchDNS = function(U) {
    typeof U == "string" && r.d.D(U);
  }, Pl.preinit = function(U, x) {
    if (typeof U == "string" && x && typeof x.as == "string") {
      var w = x.as, D = el(w, x.crossOrigin), sl = typeof x.integrity == "string" ? x.integrity : void 0, al = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
      w === "style" ? r.d.S(
        U,
        typeof x.precedence == "string" ? x.precedence : void 0,
        {
          crossOrigin: D,
          integrity: sl,
          fetchPriority: al
        }
      ) : w === "script" && r.d.X(U, {
        crossOrigin: D,
        integrity: sl,
        fetchPriority: al,
        nonce: typeof x.nonce == "string" ? x.nonce : void 0
      });
    }
  }, Pl.preinitModule = function(U, x) {
    if (typeof U == "string")
      if (typeof x == "object" && x !== null) {
        if (x.as == null || x.as === "script") {
          var w = el(
            x.as,
            x.crossOrigin
          );
          r.d.M(U, {
            crossOrigin: w,
            integrity: typeof x.integrity == "string" ? x.integrity : void 0,
            nonce: typeof x.nonce == "string" ? x.nonce : void 0
          });
        }
      } else x == null && r.d.M(U);
  }, Pl.preload = function(U, x) {
    if (typeof U == "string" && typeof x == "object" && x !== null && typeof x.as == "string") {
      var w = x.as, D = el(w, x.crossOrigin);
      r.d.L(U, w, {
        crossOrigin: D,
        integrity: typeof x.integrity == "string" ? x.integrity : void 0,
        nonce: typeof x.nonce == "string" ? x.nonce : void 0,
        type: typeof x.type == "string" ? x.type : void 0,
        fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
        referrerPolicy: typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
        imageSrcSet: typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
        imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
        media: typeof x.media == "string" ? x.media : void 0
      });
    }
  }, Pl.preloadModule = function(U, x) {
    if (typeof U == "string")
      if (x) {
        var w = el(x.as, x.crossOrigin);
        r.d.m(U, {
          as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
          crossOrigin: w,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0
        });
      } else r.d.m(U);
  }, Pl.requestFormReset = function(U) {
    r.d.r(U);
  }, Pl.unstable_batchedUpdates = function(U, x) {
    return U(x);
  }, Pl.useFormState = function(U, x, w) {
    return Z.H.useFormState(U, x, w);
  }, Pl.useFormStatus = function() {
    return Z.H.useHostTransitionStatus();
  }, Pl.version = "19.2.4", Pl;
}
var Hr;
function yy() {
  if (Hr) return Ef.exports;
  Hr = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (T) {
        console.error(T);
      }
  }
  return v(), Ef.exports = my(), Ef.exports;
}
var Br;
function vy() {
  if (Br) return Hu;
  Br = 1;
  var v = dy(), T = Nf(), N = yy();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function H(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function G(l) {
    var t = l, e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function Z(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function el(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(l) {
    if (G(l) !== l)
      throw Error(r(188));
  }
  function x(l) {
    var t = l.alternate;
    if (!t) {
      if (t = G(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return U(u), l;
          if (n === a) return U(u), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            i = !0, e = u, a = n;
            break;
          }
          if (c === a) {
            i = !0, a = u, e = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              i = !0, e = n, a = u;
              break;
            }
            if (c === a) {
              i = !0, a = n, e = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (e.alternate !== a) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? l : t;
  }
  function w(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = w(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var D = Object.assign, sl = /* @__PURE__ */ Symbol.for("react.element"), al = /* @__PURE__ */ Symbol.for("react.transitional.element"), Nl = /* @__PURE__ */ Symbol.for("react.portal"), ol = /* @__PURE__ */ Symbol.for("react.fragment"), Cl = /* @__PURE__ */ Symbol.for("react.strict_mode"), ml = /* @__PURE__ */ Symbol.for("react.profiler"), ft = /* @__PURE__ */ Symbol.for("react.consumer"), pl = /* @__PURE__ */ Symbol.for("react.context"), Ql = /* @__PURE__ */ Symbol.for("react.forward_ref"), St = /* @__PURE__ */ Symbol.for("react.suspense"), Zl = /* @__PURE__ */ Symbol.for("react.suspense_list"), k = /* @__PURE__ */ Symbol.for("react.memo"), Vl = /* @__PURE__ */ Symbol.for("react.lazy"), st = /* @__PURE__ */ Symbol.for("react.activity"), Xt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), pt = Symbol.iterator;
  function Yl(l) {
    return l === null || typeof l != "object" ? null : (l = pt && l[pt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var jl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function zt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === jl ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ol:
        return "Fragment";
      case ml:
        return "Profiler";
      case Cl:
        return "StrictMode";
      case St:
        return "Suspense";
      case Zl:
        return "SuspenseList";
      case st:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Nl:
          return "Portal";
        case pl:
          return l.displayName || "Context";
        case ft:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ql:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case k:
          return t = l.displayName || null, t !== null ? t : zt(l.type) || "Memo";
        case Vl:
          t = l._payload, l = l._init;
          try {
            return zt(l(t));
          } catch {
          }
      }
    return null;
  }
  var hl = Array.isArray, b = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, rl = [], nl = -1;
  function o(l) {
    return { current: l };
  }
  function z(l) {
    0 > nl || (l.current = rl[nl], rl[nl] = null, nl--);
  }
  function O(l, t) {
    nl++, rl[nl] = l.current, l.current = t;
  }
  var C = o(null), X = o(null), W = o(null), il = o(null);
  function Kl(l, t) {
    switch (O(W, t), O(X, l), O(C, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? F0(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = F0(t), l = I0(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    z(C), O(C, l);
  }
  function El() {
    z(C), z(X), z(W);
  }
  function je(l) {
    l.memoizedState !== null && O(il, l);
    var t = C.current, e = I0(t, l.type);
    t !== e && (O(X, l), O(C, e));
  }
  function Ie(l) {
    X.current === l && (z(C), z(X)), il.current === l && (z(il), Uu._currentValue = B);
  }
  var La, Yu;
  function Bt(l) {
    if (La === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        La = t && t[1] || "", Yu = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + La + l + Yu;
  }
  var Qt = !1;
  function Xa(l, t) {
    if (!l || Qt) return "";
    Qt = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (g) {
                  h = g;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (g) {
            if (g && h && typeof g.stack == "string")
              return [g.stack, h.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var f = i.split(`
`), y = c.split(`
`);
        for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < y.length && !y[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === f.length || u === y.length)
          for (a = f.length - 1, u = y.length - 1; 1 <= a && 0 <= u && f[a] !== y[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (f[a] !== y[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || f[a] !== y[u]) {
                  var S = `
` + f[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      Qt = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? Bt(e) : "";
  }
  function M(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Bt(l.type);
      case 16:
        return Bt("Lazy");
      case 13:
        return l.child !== t && t !== null ? Bt("Suspense Fallback") : Bt("Suspense");
      case 19:
        return Bt("SuspenseList");
      case 0:
      case 15:
        return Xa(l.type, !1);
      case 11:
        return Xa(l.type.render, !1);
      case 1:
        return Xa(l.type, !0);
      case 31:
        return Bt("Activity");
      default:
        return "";
    }
  }
  function q(l) {
    try {
      var t = "", e = null;
      do
        t += M(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var K = Object.prototype.hasOwnProperty, zl = v.unstable_scheduleCallback, ul = v.unstable_cancelCallback, Fl = v.unstable_shouldYield, Tt = v.unstable_requestPaint, Il = v.unstable_now, Gu = v.unstable_getCurrentPriorityLevel, Mf = v.unstable_ImmediatePriority, Of = v.unstable_UserBlockingPriority, Lu = v.unstable_NormalPriority, Zr = v.unstable_LowPriority, Uf = v.unstable_IdlePriority, Vr = v.log, Kr = v.unstable_setDisableYieldValue, Qa = null, ot = null;
  function fe(l) {
    if (typeof Vr == "function" && Kr(l), ot && typeof ot.setStrictMode == "function")
      try {
        ot.setStrictMode(Qa, l);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : $r, Jr = Math.log, wr = Math.LN2;
  function $r(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Jr(l) / wr | 0) | 0;
  }
  var Xu = 256, Qu = 262144, Zu = 4194304;
  function Re(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Vu(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? u = Re(a) : (i &= c, i !== 0 ? u = Re(i) : e || (e = c & ~l, e !== 0 && (u = Re(e))))) : (c = a & ~n, c !== 0 ? u = Re(c) : i !== 0 ? u = Re(i) : e || (e = a & ~l, e !== 0 && (u = Re(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function Za(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Wr(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Df() {
    var l = Zu;
    return Zu <<= 1, (Zu & 62914560) === 0 && (Zu = 4194304), l;
  }
  function ni(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Va(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function kr(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var S = 31 - rt(e), E = 1 << S;
      c[S] = 0, f[S] = -1;
      var h = y[S];
      if (h !== null)
        for (y[S] = null, S = 0; S < h.length; S++) {
          var g = h[S];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~E;
    }
    a !== 0 && Cf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Cf(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - rt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function jf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - rt(e), u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u;
    }
  }
  function Rf(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : ii(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function ii(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ci(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Hf() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : zr(l.type));
  }
  function Bf(l, t) {
    var e = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = e;
    }
  }
  var se = Math.random().toString(36).slice(2), Jl = "__reactFiber$" + se, tt = "__reactProps$" + se, Pe = "__reactContainer$" + se, fi = "__reactEvents$" + se, Fr = "__reactListeners$" + se, Ir = "__reactHandles$" + se, qf = "__reactResources$" + se, Ka = "__reactMarker$" + se;
  function si(l) {
    delete l[Jl], delete l[tt], delete l[fi], delete l[Fr], delete l[Ir];
  }
  function la(l) {
    var t = l[Jl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[Pe] || e[Jl]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = nr(l); l !== null; ) {
            if (e = l[Jl]) return e;
            l = nr(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function ta(l) {
    if (l = l[Jl] || l[Pe]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ja(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function ea(l) {
    var t = l[qf];
    return t || (t = l[qf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ll(l) {
    l[Ka] = !0;
  }
  var Yf = /* @__PURE__ */ new Set(), Gf = {};
  function He(l, t) {
    aa(l, t), aa(l + "Capture", t);
  }
  function aa(l, t) {
    for (Gf[l] = t, l = 0; l < t.length; l++)
      Yf.add(t[l]);
  }
  var Pr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Lf = {}, Xf = {};
  function ld(l) {
    return K.call(Xf, l) ? !0 : K.call(Lf, l) ? !1 : Pr.test(l) ? Xf[l] = !0 : (Lf[l] = !0, !1);
  }
  function Ku(l, t, e) {
    if (ld(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Ju(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Zt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function Et(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Qf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function td(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          e = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function oi(l) {
    if (!l._valueTracker) {
      var t = Qf(l) ? "checked" : "value";
      l._valueTracker = td(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Zf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Qf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function wu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var ed = /[\n"\\]/g;
  function xt(l) {
    return l.replace(
      ed,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ri(l, t, e, a, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Et(t)) : l.value !== "" + Et(t) && (l.value = "" + Et(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? di(l, i, Et(t)) : e != null ? di(l, i, Et(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Et(c) : l.removeAttribute("name");
  }
  function Vf(l, t, e, a, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        oi(l);
        return;
      }
      e = e != null ? "" + Et(e) : "", t = t != null ? "" + Et(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), oi(l);
  }
  function di(l, t, e) {
    t === "number" && wu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function ua(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < e.length; u++)
        t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + Et(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          l[u].selected = !0, a && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Kf(l, t, e) {
    if (t != null && (t = "" + Et(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + Et(e) : "";
  }
  function Jf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(r(92));
        if (hl(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = Et(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), oi(l);
  }
  function na(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var ad = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || ad.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function $f(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t)
        a = t[u], t.hasOwnProperty(u) && e[u] !== a && wf(l, u, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && wf(l, n, t[n]);
  }
  function mi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ud = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), nd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $u(l) {
    return nd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Vt() {
  }
  var yi = null;
  function vi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ia = null, ca = null;
  function Wf(l) {
    var t = ta(l);
    if (t && (l = t.stateNode)) {
      var e = l[tt] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ri(
            l,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + xt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[tt] || null;
                if (!u) throw Error(r(90));
                ri(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              a = e[t], a.form === l.form && Zf(a);
          }
          break l;
        case "textarea":
          Kf(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && ua(l, !!e.multiple, t, !1);
      }
    }
  }
  var hi = !1;
  function kf(l, t, e) {
    if (hi) return l(t, e);
    hi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (hi = !1, (ia !== null || ca !== null) && (Bn(), ia && (t = ia, l = ca, ca = ia = null, Wf(t), l)))
        for (t = 0; t < l.length; t++) Wf(l[t]);
    }
  }
  function wa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[tt] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function")
      throw Error(
        r(231, t, typeof e)
      );
    return e;
  }
  var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gi = !1;
  if (Kt)
    try {
      var $a = {};
      Object.defineProperty($a, "passive", {
        get: function() {
          gi = !0;
        }
      }), window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
    } catch {
      gi = !1;
    }
  var oe = null, bi = null, Wu = null;
  function Ff() {
    if (Wu) return Wu;
    var l, t = bi, e = t.length, a, u = "value" in oe ? oe.value : oe.textContent, n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++) ;
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++) ;
    return Wu = u.slice(l, 1 < a ? 1 - a : void 0);
  }
  function ku(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Fu() {
    return !0;
  }
  function If() {
    return !1;
  }
  function et(l) {
    function t(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Fu : If, this.isPropagationStopped = If, this;
    }
    return D(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Fu);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Fu);
      },
      persist: function() {
      },
      isPersistent: Fu
    }), t;
  }
  var Be = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Iu = et(Be), Wa = D({}, Be, { view: 0, detail: 0 }), id = et(Wa), Si, pi, ka, Pu = D({}, Wa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ti,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ka && (ka && l.type === "mousemove" ? (Si = l.screenX - ka.screenX, pi = l.screenY - ka.screenY) : pi = Si = 0, ka = l), Si);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : pi;
    }
  }), Pf = et(Pu), cd = D({}, Pu, { dataTransfer: 0 }), fd = et(cd), sd = D({}, Wa, { relatedTarget: 0 }), zi = et(sd), od = D({}, Be, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rd = et(od), dd = D({}, Be, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), md = et(dd), yd = D({}, Be, { data: 0 }), ls = et(yd), vd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, hd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, gd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function bd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = gd[l]) ? !!t[l] : !1;
  }
  function Ti() {
    return bd;
  }
  var Sd = D({}, Wa, {
    key: function(l) {
      if (l.key) {
        var t = vd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = ku(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? hd[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ti,
    charCode: function(l) {
      return l.type === "keypress" ? ku(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? ku(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), pd = et(Sd), zd = D({}, Pu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ts = et(zd), Td = D({}, Wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ti
  }), Ed = et(Td), xd = D({}, Be, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ad = et(xd), _d = D({}, Pu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nd = et(_d), Md = D({}, Be, {
    newState: 0,
    oldState: 0
  }), Od = et(Md), Ud = [9, 13, 27, 32], Ei = Kt && "CompositionEvent" in window, Fa = null;
  Kt && "documentMode" in document && (Fa = document.documentMode);
  var Dd = Kt && "TextEvent" in window && !Fa, es = Kt && (!Ei || Fa && 8 < Fa && 11 >= Fa), as = " ", us = !1;
  function ns(l, t) {
    switch (l) {
      case "keyup":
        return Ud.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function is(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var fa = !1;
  function Cd(l, t) {
    switch (l) {
      case "compositionend":
        return is(t);
      case "keypress":
        return t.which !== 32 ? null : (us = !0, as);
      case "textInput":
        return l = t.data, l === as && us ? null : l;
      default:
        return null;
    }
  }
  function jd(l, t) {
    if (fa)
      return l === "compositionend" || !Ei && ns(l, t) ? (l = Ff(), Wu = bi = oe = null, fa = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return es && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Rd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function cs(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Rd[l.type] : t === "textarea";
  }
  function fs(l, t, e, a) {
    ia ? ca ? ca.push(a) : ca = [a] : ia = a, t = Zn(t, "onChange"), 0 < t.length && (e = new Iu(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var Ia = null, Pa = null;
  function Hd(l) {
    K0(l, 0);
  }
  function ln(l) {
    var t = Ja(l);
    if (Zf(t)) return l;
  }
  function ss(l, t) {
    if (l === "change") return t;
  }
  var os = !1;
  if (Kt) {
    var xi;
    if (Kt) {
      var Ai = "oninput" in document;
      if (!Ai) {
        var rs = document.createElement("div");
        rs.setAttribute("oninput", "return;"), Ai = typeof rs.oninput == "function";
      }
      xi = Ai;
    } else xi = !1;
    os = xi && (!document.documentMode || 9 < document.documentMode);
  }
  function ds() {
    Ia && (Ia.detachEvent("onpropertychange", ms), Pa = Ia = null);
  }
  function ms(l) {
    if (l.propertyName === "value" && ln(Pa)) {
      var t = [];
      fs(
        t,
        Pa,
        l,
        vi(l)
      ), kf(Hd, t);
    }
  }
  function Bd(l, t, e) {
    l === "focusin" ? (ds(), Ia = t, Pa = e, Ia.attachEvent("onpropertychange", ms)) : l === "focusout" && ds();
  }
  function qd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return ln(Pa);
  }
  function Yd(l, t) {
    if (l === "click") return ln(t);
  }
  function Gd(l, t) {
    if (l === "input" || l === "change")
      return ln(t);
  }
  function Ld(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var dt = typeof Object.is == "function" ? Object.is : Ld;
  function lu(l, t) {
    if (dt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!K.call(t, u) || !dt(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function ys(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function vs(l, t) {
    var e = ys(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t)
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ys(e);
    }
  }
  function hs(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function gs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = wu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = wu(l.document);
    }
    return t;
  }
  function _i(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Xd = Kt && "documentMode" in document && 11 >= document.documentMode, sa = null, Ni = null, tu = null, Mi = !1;
  function bs(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Mi || sa == null || sa !== wu(a) || (a = sa, "selectionStart" in a && _i(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), tu && lu(tu, a) || (tu = a, a = Zn(Ni, "onSelect"), 0 < a.length && (t = new Iu(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = sa)));
  }
  function qe(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var oa = {
    animationend: qe("Animation", "AnimationEnd"),
    animationiteration: qe("Animation", "AnimationIteration"),
    animationstart: qe("Animation", "AnimationStart"),
    transitionrun: qe("Transition", "TransitionRun"),
    transitionstart: qe("Transition", "TransitionStart"),
    transitioncancel: qe("Transition", "TransitionCancel"),
    transitionend: qe("Transition", "TransitionEnd")
  }, Oi = {}, Ss = {};
  Kt && (Ss = document.createElement("div").style, "AnimationEvent" in window || (delete oa.animationend.animation, delete oa.animationiteration.animation, delete oa.animationstart.animation), "TransitionEvent" in window || delete oa.transitionend.transition);
  function Ye(l) {
    if (Oi[l]) return Oi[l];
    if (!oa[l]) return l;
    var t = oa[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in Ss)
        return Oi[l] = t[e];
    return l;
  }
  var ps = Ye("animationend"), zs = Ye("animationiteration"), Ts = Ye("animationstart"), Qd = Ye("transitionrun"), Zd = Ye("transitionstart"), Vd = Ye("transitioncancel"), Es = Ye("transitionend"), xs = /* @__PURE__ */ new Map(), Ui = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ui.push("scrollEnd");
  function jt(l, t) {
    xs.set(l, t), He(t, [l]);
  }
  var tn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, At = [], ra = 0, Di = 0;
  function en() {
    for (var l = ra, t = Di = ra = 0; t < l; ) {
      var e = At[t];
      At[t++] = null;
      var a = At[t];
      At[t++] = null;
      var u = At[t];
      At[t++] = null;
      var n = At[t];
      if (At[t++] = null, a !== null && u !== null) {
        var i = a.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
      }
      n !== 0 && As(e, u, n);
    }
  }
  function an(l, t, e, a) {
    At[ra++] = l, At[ra++] = t, At[ra++] = e, At[ra++] = a, Di |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ci(l, t, e, a) {
    return an(l, t, e, a), un(l);
  }
  function Ge(l, t) {
    return an(l, null, null, t), un(l);
  }
  function As(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - rt(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function un(l) {
    if (50 < Eu)
      throw Eu = 0, Xc = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var da = {};
  function Kd(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function mt(l, t, e, a) {
    return new Kd(l, t, e, a);
  }
  function ji(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Jt(l, t) {
    var e = l.alternate;
    return e === null ? (e = mt(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function _s(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function nn(l, t, e, a, u, n) {
    var i = 0;
    if (a = l, typeof l == "function") ji(l) && (i = 1);
    else if (typeof l == "string")
      i = km(
        l,
        e,
        C.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case st:
          return l = mt(31, e, t, u), l.elementType = st, l.lanes = n, l;
        case ol:
          return Le(e.children, u, n, t);
        case Cl:
          i = 8, u |= 24;
          break;
        case ml:
          return l = mt(12, e, t, u | 2), l.elementType = ml, l.lanes = n, l;
        case St:
          return l = mt(13, e, t, u), l.elementType = St, l.lanes = n, l;
        case Zl:
          return l = mt(19, e, t, u), l.elementType = Zl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case pl:
                i = 10;
                break l;
              case ft:
                i = 9;
                break l;
              case Ql:
                i = 11;
                break l;
              case k:
                i = 14;
                break l;
              case Vl:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = mt(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Le(l, t, e, a) {
    return l = mt(7, l, a, t), l.lanes = e, l;
  }
  function Ri(l, t, e) {
    return l = mt(6, l, null, t), l.lanes = e, l;
  }
  function Ns(l) {
    var t = mt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Hi(l, t, e) {
    return t = mt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = e, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Ms = /* @__PURE__ */ new WeakMap();
  function _t(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Ms.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: q(t)
      }, Ms.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: q(t)
    };
  }
  var ma = [], ya = 0, cn = null, eu = 0, Nt = [], Mt = 0, re = null, qt = 1, Yt = "";
  function wt(l, t) {
    ma[ya++] = eu, ma[ya++] = cn, cn = l, eu = t;
  }
  function Os(l, t, e) {
    Nt[Mt++] = qt, Nt[Mt++] = Yt, Nt[Mt++] = re, re = l;
    var a = qt;
    l = Yt;
    var u = 32 - rt(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - rt(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, qt = 1 << 32 - rt(t) + u | e << u | a, Yt = n + l;
    } else
      qt = 1 << n | e << u | a, Yt = l;
  }
  function Bi(l) {
    l.return !== null && (wt(l, 1), Os(l, 1, 0));
  }
  function qi(l) {
    for (; l === cn; )
      cn = ma[--ya], ma[ya] = null, eu = ma[--ya], ma[ya] = null;
    for (; l === re; )
      re = Nt[--Mt], Nt[Mt] = null, Yt = Nt[--Mt], Nt[Mt] = null, qt = Nt[--Mt], Nt[Mt] = null;
  }
  function Us(l, t) {
    Nt[Mt++] = qt, Nt[Mt++] = Yt, Nt[Mt++] = re, qt = t.id, Yt = t.overflow, re = l;
  }
  var wl = null, xl = null, tl = !1, de = null, Ot = !1, Yi = Error(r(519));
  function me(l) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw au(_t(t, l)), Yi;
  }
  function Ds(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Jl] = l, t[tt] = a, e) {
      case "dialog":
        I("cancel", t), I("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Au.length; e++)
          I(Au[e], t);
        break;
      case "source":
        I("error", t);
        break;
      case "img":
      case "image":
      case "link":
        I("error", t), I("load", t);
        break;
      case "details":
        I("toggle", t);
        break;
      case "input":
        I("invalid", t), Vf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        I("invalid", t);
        break;
      case "textarea":
        I("invalid", t), Jf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || W0(t.textContent, e) ? (a.popover != null && (I("beforetoggle", t), I("toggle", t)), a.onScroll != null && I("scroll", t), a.onScrollEnd != null && I("scrollend", t), a.onClick != null && (t.onclick = Vt), t = !0) : t = !1, t || me(l, !0);
  }
  function Cs(l) {
    for (wl = l.return; wl; )
      switch (wl.tag) {
        case 5:
        case 31:
        case 13:
          Ot = !1;
          return;
        case 27:
        case 3:
          Ot = !0;
          return;
        default:
          wl = wl.return;
      }
  }
  function va(l) {
    if (l !== wl) return !1;
    if (!tl) return Cs(l), tl = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || ef(l.type, l.memoizedProps)), e = !e), e && xl && me(l), Cs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      xl = ur(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      xl = ur(l);
    } else
      t === 27 ? (t = xl, Ne(l.type) ? (l = ff, ff = null, xl = l) : xl = t) : xl = wl ? Dt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Xe() {
    xl = wl = null, tl = !1;
  }
  function Gi() {
    var l = de;
    return l !== null && (it === null ? it = l : it.push.apply(
      it,
      l
    ), de = null), l;
  }
  function au(l) {
    de === null ? de = [l] : de.push(l);
  }
  var Li = o(null), Qe = null, $t = null;
  function ye(l, t, e) {
    O(Li, t._currentValue), t._currentValue = e;
  }
  function Wt(l) {
    l._currentValue = Li.current, z(Li);
  }
  function Xi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Qi(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Xi(
                n.return,
                e,
                l
              ), a || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(r(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Xi(i, e, l), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ha(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          dt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === il.current) {
        if (i = u.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Uu) : l = [Uu]);
      }
      u = u.return;
    }
    l !== null && Qi(
      t,
      l,
      e,
      a
    ), t.flags |= 262144;
  }
  function fn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!dt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ze(l) {
    Qe = l, $t = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function $l(l) {
    return js(Qe, l);
  }
  function sn(l, t) {
    return Qe === null && Ze(l), js(l, t);
  }
  function js(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, $t === null) {
      if (l === null) throw Error(r(308));
      $t = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else $t = $t.next = t;
    return e;
  }
  var Jd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(e) {
        return e();
      });
    };
  }, wd = v.unstable_scheduleCallback, $d = v.unstable_NormalPriority, Rl = {
    $$typeof: pl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Zi() {
    return {
      controller: new Jd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function uu(l) {
    l.refCount--, l.refCount === 0 && wd($d, function() {
      l.controller.abort();
    });
  }
  var nu = null, Vi = 0, ga = 0, ba = null;
  function Wd(l, t) {
    if (nu === null) {
      var e = nu = [];
      Vi = 0, ga = wc(), ba = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Vi++, t.then(Rs, Rs), t;
  }
  function Rs() {
    if (--Vi === 0 && nu !== null) {
      ba !== null && (ba.status = "fulfilled");
      var l = nu;
      nu = null, ga = 0, ba = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function kd(l, t) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var u = 0; u < e.length; u++) (0, e[u])(t);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), a;
  }
  var Hs = b.S;
  b.S = function(l, t) {
    S0 = Il(), typeof t == "object" && t !== null && typeof t.then == "function" && Wd(l, t), Hs !== null && Hs(l, t);
  };
  var Ve = o(null);
  function Ki() {
    var l = Ve.current;
    return l !== null ? l : Tl.pooledCache;
  }
  function on(l, t) {
    t === null ? O(Ve, Ve.current) : O(Ve, t.pool);
  }
  function Bs() {
    var l = Ki();
    return l === null ? null : { parent: Rl._currentValue, pool: l };
  }
  var Sa = Error(r(460)), Ji = Error(r(474)), rn = Error(r(542)), dn = { then: function() {
  } };
  function qs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ys(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Vt, Vt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ls(l), l;
      default:
        if (typeof t.status == "string") t.then(Vt, Vt);
        else {
          if (l = Tl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ls(l), l;
        }
        throw Je = t, Sa;
    }
  }
  function Ke(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Je = e, Sa) : e;
    }
  }
  var Je = null;
  function Gs() {
    if (Je === null) throw Error(r(459));
    var l = Je;
    return Je = null, l;
  }
  function Ls(l) {
    if (l === Sa || l === rn)
      throw Error(r(483));
  }
  var pa = null, iu = 0;
  function mn(l) {
    var t = iu;
    return iu += 1, pa === null && (pa = []), Ys(pa, l, t);
  }
  function cu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function yn(l, t) {
    throw t.$$typeof === sl ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Xs(l) {
    function t(d, s) {
      if (l) {
        var m = d.deletions;
        m === null ? (d.deletions = [s], d.flags |= 16) : m.push(s);
      }
    }
    function e(d, s) {
      if (!l) return null;
      for (; s !== null; )
        t(d, s), s = s.sibling;
      return null;
    }
    function a(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function u(d, s) {
      return d = Jt(d, s), d.index = 0, d.sibling = null, d;
    }
    function n(d, s, m) {
      return d.index = m, l ? (m = d.alternate, m !== null ? (m = m.index, m < s ? (d.flags |= 67108866, s) : m) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s);
    }
    function i(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, s, m, p) {
      return s === null || s.tag !== 6 ? (s = Ri(m, d.mode, p), s.return = d, s) : (s = u(s, m), s.return = d, s);
    }
    function f(d, s, m, p) {
      var Y = m.type;
      return Y === ol ? S(
        d,
        s,
        m.props.children,
        p,
        m.key
      ) : s !== null && (s.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Vl && Ke(Y) === s.type) ? (s = u(s, m.props), cu(s, m), s.return = d, s) : (s = nn(
        m.type,
        m.key,
        m.props,
        null,
        d.mode,
        p
      ), cu(s, m), s.return = d, s);
    }
    function y(d, s, m, p) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== m.containerInfo || s.stateNode.implementation !== m.implementation ? (s = Hi(m, d.mode, p), s.return = d, s) : (s = u(s, m.children || []), s.return = d, s);
    }
    function S(d, s, m, p, Y) {
      return s === null || s.tag !== 7 ? (s = Le(
        m,
        d.mode,
        p,
        Y
      ), s.return = d, s) : (s = u(s, m), s.return = d, s);
    }
    function E(d, s, m) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Ri(
          "" + s,
          d.mode,
          m
        ), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case al:
            return m = nn(
              s.type,
              s.key,
              s.props,
              null,
              d.mode,
              m
            ), cu(m, s), m.return = d, m;
          case Nl:
            return s = Hi(
              s,
              d.mode,
              m
            ), s.return = d, s;
          case Vl:
            return s = Ke(s), E(d, s, m);
        }
        if (hl(s) || Yl(s))
          return s = Le(
            s,
            d.mode,
            m,
            null
          ), s.return = d, s;
        if (typeof s.then == "function")
          return E(d, mn(s), m);
        if (s.$$typeof === pl)
          return E(
            d,
            sn(d, s),
            m
          );
        yn(d, s);
      }
      return null;
    }
    function h(d, s, m, p) {
      var Y = s !== null ? s.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return Y !== null ? null : c(d, s, "" + m, p);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case al:
            return m.key === Y ? f(d, s, m, p) : null;
          case Nl:
            return m.key === Y ? y(d, s, m, p) : null;
          case Vl:
            return m = Ke(m), h(d, s, m, p);
        }
        if (hl(m) || Yl(m))
          return Y !== null ? null : S(d, s, m, p, null);
        if (typeof m.then == "function")
          return h(
            d,
            s,
            mn(m),
            p
          );
        if (m.$$typeof === pl)
          return h(
            d,
            s,
            sn(d, m),
            p
          );
        yn(d, m);
      }
      return null;
    }
    function g(d, s, m, p, Y) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return d = d.get(m) || null, c(s, d, "" + p, Y);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case al:
            return d = d.get(
              p.key === null ? m : p.key
            ) || null, f(s, d, p, Y);
          case Nl:
            return d = d.get(
              p.key === null ? m : p.key
            ) || null, y(s, d, p, Y);
          case Vl:
            return p = Ke(p), g(
              d,
              s,
              m,
              p,
              Y
            );
        }
        if (hl(p) || Yl(p))
          return d = d.get(m) || null, S(s, d, p, Y, null);
        if (typeof p.then == "function")
          return g(
            d,
            s,
            m,
            mn(p),
            Y
          );
        if (p.$$typeof === pl)
          return g(
            d,
            s,
            m,
            sn(s, p),
            Y
          );
        yn(s, p);
      }
      return null;
    }
    function j(d, s, m, p) {
      for (var Y = null, cl = null, R = s, $ = s = 0, ll = null; R !== null && $ < m.length; $++) {
        R.index > $ ? (ll = R, R = null) : ll = R.sibling;
        var fl = h(
          d,
          R,
          m[$],
          p
        );
        if (fl === null) {
          R === null && (R = ll);
          break;
        }
        l && R && fl.alternate === null && t(d, R), s = n(fl, s, $), cl === null ? Y = fl : cl.sibling = fl, cl = fl, R = ll;
      }
      if ($ === m.length)
        return e(d, R), tl && wt(d, $), Y;
      if (R === null) {
        for (; $ < m.length; $++)
          R = E(d, m[$], p), R !== null && (s = n(
            R,
            s,
            $
          ), cl === null ? Y = R : cl.sibling = R, cl = R);
        return tl && wt(d, $), Y;
      }
      for (R = a(R); $ < m.length; $++)
        ll = g(
          R,
          d,
          $,
          m[$],
          p
        ), ll !== null && (l && ll.alternate !== null && R.delete(
          ll.key === null ? $ : ll.key
        ), s = n(
          ll,
          s,
          $
        ), cl === null ? Y = ll : cl.sibling = ll, cl = ll);
      return l && R.forEach(function(Ce) {
        return t(d, Ce);
      }), tl && wt(d, $), Y;
    }
    function L(d, s, m, p) {
      if (m == null) throw Error(r(151));
      for (var Y = null, cl = null, R = s, $ = s = 0, ll = null, fl = m.next(); R !== null && !fl.done; $++, fl = m.next()) {
        R.index > $ ? (ll = R, R = null) : ll = R.sibling;
        var Ce = h(d, R, fl.value, p);
        if (Ce === null) {
          R === null && (R = ll);
          break;
        }
        l && R && Ce.alternate === null && t(d, R), s = n(Ce, s, $), cl === null ? Y = Ce : cl.sibling = Ce, cl = Ce, R = ll;
      }
      if (fl.done)
        return e(d, R), tl && wt(d, $), Y;
      if (R === null) {
        for (; !fl.done; $++, fl = m.next())
          fl = E(d, fl.value, p), fl !== null && (s = n(fl, s, $), cl === null ? Y = fl : cl.sibling = fl, cl = fl);
        return tl && wt(d, $), Y;
      }
      for (R = a(R); !fl.done; $++, fl = m.next())
        fl = g(R, d, $, fl.value, p), fl !== null && (l && fl.alternate !== null && R.delete(fl.key === null ? $ : fl.key), s = n(fl, s, $), cl === null ? Y = fl : cl.sibling = fl, cl = fl);
      return l && R.forEach(function(cy) {
        return t(d, cy);
      }), tl && wt(d, $), Y;
    }
    function Sl(d, s, m, p) {
      if (typeof m == "object" && m !== null && m.type === ol && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case al:
            l: {
              for (var Y = m.key; s !== null; ) {
                if (s.key === Y) {
                  if (Y = m.type, Y === ol) {
                    if (s.tag === 7) {
                      e(
                        d,
                        s.sibling
                      ), p = u(
                        s,
                        m.props.children
                      ), p.return = d, d = p;
                      break l;
                    }
                  } else if (s.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Vl && Ke(Y) === s.type) {
                    e(
                      d,
                      s.sibling
                    ), p = u(s, m.props), cu(p, m), p.return = d, d = p;
                    break l;
                  }
                  e(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              m.type === ol ? (p = Le(
                m.props.children,
                d.mode,
                p,
                m.key
              ), p.return = d, d = p) : (p = nn(
                m.type,
                m.key,
                m.props,
                null,
                d.mode,
                p
              ), cu(p, m), p.return = d, d = p);
            }
            return i(d);
          case Nl:
            l: {
              for (Y = m.key; s !== null; ) {
                if (s.key === Y)
                  if (s.tag === 4 && s.stateNode.containerInfo === m.containerInfo && s.stateNode.implementation === m.implementation) {
                    e(
                      d,
                      s.sibling
                    ), p = u(s, m.children || []), p.return = d, d = p;
                    break l;
                  } else {
                    e(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              p = Hi(m, d.mode, p), p.return = d, d = p;
            }
            return i(d);
          case Vl:
            return m = Ke(m), Sl(
              d,
              s,
              m,
              p
            );
        }
        if (hl(m))
          return j(
            d,
            s,
            m,
            p
          );
        if (Yl(m)) {
          if (Y = Yl(m), typeof Y != "function") throw Error(r(150));
          return m = Y.call(m), L(
            d,
            s,
            m,
            p
          );
        }
        if (typeof m.then == "function")
          return Sl(
            d,
            s,
            mn(m),
            p
          );
        if (m.$$typeof === pl)
          return Sl(
            d,
            s,
            sn(d, m),
            p
          );
        yn(d, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, s !== null && s.tag === 6 ? (e(d, s.sibling), p = u(s, m), p.return = d, d = p) : (e(d, s), p = Ri(m, d.mode, p), p.return = d, d = p), i(d)) : e(d, s);
    }
    return function(d, s, m, p) {
      try {
        iu = 0;
        var Y = Sl(
          d,
          s,
          m,
          p
        );
        return pa = null, Y;
      } catch (R) {
        if (R === Sa || R === rn) throw R;
        var cl = mt(29, R, null, d.mode);
        return cl.lanes = p, cl.return = d, cl;
      }
    };
  }
  var we = Xs(!0), Qs = Xs(!1), ve = !1;
  function wi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function $i(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function he(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ge(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (dl & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = un(l), As(l, null, e), t;
    }
    return an(l, a, t, e), un(l);
  }
  function fu(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, jf(l, e);
    }
  }
  function Wi(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, e = e.next;
        } while (e !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var ki = !1;
  function su() {
    if (ki) {
      var l = ba;
      if (l !== null) throw l;
    }
  }
  function ou(l, t, e, a) {
    ki = !1;
    var u = l.updateQueue;
    ve = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c, y = f.next;
      f.next = null, i === null ? n = y : i.next = y, i = f;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== i && (c === null ? S.firstBaseUpdate = y : c.next = y, S.lastBaseUpdate = f));
    }
    if (n !== null) {
      var E = u.baseState;
      i = 0, S = y = f = null, c = n;
      do {
        var h = c.lane & -536870913, g = h !== c.lane;
        if (g ? (P & h) === h : (a & h) === h) {
          h !== 0 && h === ga && (ki = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var j = l, L = c;
            h = t;
            var Sl = e;
            switch (L.tag) {
              case 1:
                if (j = L.payload, typeof j == "function") {
                  E = j.call(Sl, E, h);
                  break l;
                }
                E = j;
                break l;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                if (j = L.payload, h = typeof j == "function" ? j.call(Sl, E, h) : j, h == null) break l;
                E = D({}, E, h);
                break l;
              case 2:
                ve = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, g && (l.flags |= 8192), g = u.callbacks, g === null ? u.callbacks = [h] : g.push(h));
        } else
          g = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (y = S = g, f = E) : S = S.next = g, i |= h;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, u.lastBaseUpdate = g, u.shared.pending = null;
        }
      } while (!0);
      S === null && (f = E), u.baseState = f, u.firstBaseUpdate = y, u.lastBaseUpdate = S, n === null && (u.shared.lanes = 0), Te |= i, l.lanes = i, l.memoizedState = E;
    }
  }
  function Zs(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function Vs(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        Zs(e[l], t);
  }
  var za = o(null), vn = o(0);
  function Ks(l, t) {
    l = ue, O(vn, l), O(za, t), ue = l | t.baseLanes;
  }
  function Fi() {
    O(vn, ue), O(za, za.current);
  }
  function Ii() {
    ue = vn.current, z(za), z(vn);
  }
  var yt = o(null), Ut = null;
  function be(l) {
    var t = l.alternate;
    O(Ul, Ul.current & 1), O(yt, l), Ut === null && (t === null || za.current !== null || t.memoizedState !== null) && (Ut = l);
  }
  function Pi(l) {
    O(Ul, Ul.current), O(yt, l), Ut === null && (Ut = l);
  }
  function Js(l) {
    l.tag === 22 ? (O(Ul, Ul.current), O(yt, l), Ut === null && (Ut = l)) : Se();
  }
  function Se() {
    O(Ul, Ul.current), O(yt, yt.current);
  }
  function vt(l) {
    z(yt), Ut === l && (Ut = null), z(Ul);
  }
  var Ul = o(0);
  function hn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || nf(e) || cf(e)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var kt = 0, J = null, gl = null, Hl = null, gn = !1, Ta = !1, $e = !1, bn = 0, ru = 0, Ea = null, Fd = 0;
  function Ml() {
    throw Error(r(321));
  }
  function lc(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!dt(l[e], t[e])) return !1;
    return !0;
  }
  function tc(l, t, e, a, u, n) {
    return kt = n, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? Uo : hc, $e = !1, n = e(a, u), $e = !1, Ta && (n = $s(
      t,
      e,
      a,
      u
    )), ws(l), n;
  }
  function ws(l) {
    b.H = yu;
    var t = gl !== null && gl.next !== null;
    if (kt = 0, Hl = gl = J = null, gn = !1, ru = 0, Ea = null, t) throw Error(r(300));
    l === null || Bl || (l = l.dependencies, l !== null && fn(l) && (Bl = !0));
  }
  function $s(l, t, e, a) {
    J = l;
    var u = 0;
    do {
      if (Ta && (Ea = null), ru = 0, Ta = !1, 25 <= u) throw Error(r(301));
      if (u += 1, Hl = gl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = Do, n = t(e, a);
    } while (Ta);
    return n;
  }
  function Id() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? du(t) : t, l = l.useState()[0], (gl !== null ? gl.memoizedState : null) !== l && (J.flags |= 1024), t;
  }
  function ec() {
    var l = bn !== 0;
    return bn = 0, l;
  }
  function ac(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function uc(l) {
    if (gn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      gn = !1;
    }
    kt = 0, Hl = gl = J = null, Ta = !1, ru = bn = 0, Ea = null;
  }
  function lt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Hl === null ? J.memoizedState = Hl = l : Hl = Hl.next = l, Hl;
  }
  function Dl() {
    if (gl === null) {
      var l = J.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = gl.next;
    var t = Hl === null ? J.memoizedState : Hl.next;
    if (t !== null)
      Hl = t, gl = l;
    else {
      if (l === null)
        throw J.alternate === null ? Error(r(467)) : Error(r(310));
      gl = l, l = {
        memoizedState: gl.memoizedState,
        baseState: gl.baseState,
        baseQueue: gl.baseQueue,
        queue: gl.queue,
        next: null
      }, Hl === null ? J.memoizedState = Hl = l : Hl = Hl.next = l;
    }
    return Hl;
  }
  function Sn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function du(l) {
    var t = ru;
    return ru += 1, Ea === null && (Ea = []), l = Ys(Ea, l, t), t = J, (Hl === null ? t.memoizedState : Hl.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? Uo : hc), l;
  }
  function pn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return du(l);
      if (l.$$typeof === pl) return $l(l);
    }
    throw Error(r(438, String(l)));
  }
  function nc(l) {
    var t = null, e = J.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = J.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = Sn(), J.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = Xt;
    return t.index++, e;
  }
  function Ft(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function zn(l) {
    var t = Dl();
    return ic(t, gl, l);
  }
  function ic(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      t.baseQueue = u = n, a.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var c = i = null, f = null, y = t, S = !1;
      do {
        var E = y.lane & -536870913;
        if (E !== y.lane ? (P & E) === E : (kt & E) === E) {
          var h = y.revertLane;
          if (h === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), E === ga && (S = !0);
          else if ((kt & h) === h) {
            y = y.next, h === ga && (S = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, f === null ? (c = f = E, i = n) : f = f.next = E, J.lanes |= h, Te |= h;
          E = y.action, $e && e(n, E), n = y.hasEagerState ? y.eagerState : e(n, E);
        } else
          h = {
            lane: E,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, f === null ? (c = f = h, i = n) : f = f.next = h, J.lanes |= E, Te |= E;
        y = y.next;
      } while (y !== null && y !== t);
      if (f === null ? i = n : f.next = c, !dt(n, l.memoizedState) && (Bl = !0, S && (e = ba, e !== null)))
        throw e;
      l.memoizedState = n, l.baseState = i, l.baseQueue = f, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function cc(l) {
    var t = Dl(), e = t.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      dt(n, t.memoizedState) || (Bl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ws(l, t, e) {
    var a = J, u = Dl(), n = tl;
    if (n) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = t();
    var i = !dt(
      (gl || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Bl = !0), u = u.queue, oc(Is.bind(null, a, u, l), [
      l
    ]), u.getSnapshot !== t || i || Hl !== null && Hl.memoizedState.tag & 1) {
      if (a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        Fs.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), Tl === null) throw Error(r(349));
      n || (kt & 127) !== 0 || ks(a, t, e);
    }
    return e;
  }
  function ks(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = J.updateQueue, t === null ? (t = Sn(), J.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function Fs(l, t, e, a) {
    t.value = e, t.getSnapshot = a, Ps(t) && lo(l);
  }
  function Is(l, t, e) {
    return e(function() {
      Ps(t) && lo(l);
    });
  }
  function Ps(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !dt(l, e);
    } catch {
      return !0;
    }
  }
  function lo(l) {
    var t = Ge(l, 2);
    t !== null && ct(t, l, 2);
  }
  function fc(l) {
    var t = lt();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), $e) {
        fe(!0);
        try {
          e();
        } finally {
          fe(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ft,
      lastRenderedState: l
    }, t;
  }
  function to(l, t, e, a) {
    return l.baseState = e, ic(
      l,
      gl,
      typeof a == "function" ? a : Ft
    );
  }
  function Pd(l, t, e, a, u) {
    if (xn(l)) throw Error(r(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      b.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, eo(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function eo(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = b.T, i = {};
      b.T = i;
      try {
        var c = e(u, a), f = b.S;
        f !== null && f(i, c), ao(l, t, c);
      } catch (y) {
        sc(l, t, y);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), b.T = n;
      }
    } else
      try {
        n = e(u, a), ao(l, t, n);
      } catch (y) {
        sc(l, t, y);
      }
  }
  function ao(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        uo(l, t, a);
      },
      function(a) {
        return sc(l, t, a);
      }
    ) : uo(l, t, e);
  }
  function uo(l, t, e) {
    t.status = "fulfilled", t.value = e, no(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, eo(l, e)));
  }
  function sc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, no(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function no(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function io(l, t) {
    return t;
  }
  function co(l, t) {
    if (tl) {
      var e = Tl.formState;
      if (e !== null) {
        l: {
          var a = J;
          if (tl) {
            if (xl) {
              t: {
                for (var u = xl, n = Ot; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = Dt(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                xl = Dt(
                  u.nextSibling
                ), a = u.data === "F!";
                break l;
              }
            }
            me(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = lt(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: io,
      lastRenderedState: t
    }, e.queue = a, e = No.bind(
      null,
      J,
      a
    ), a.dispatch = e, a = fc(!1), n = vc.bind(
      null,
      J,
      !1,
      a.queue
    ), a = lt(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = u, e = Pd.bind(
      null,
      J,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function fo(l) {
    var t = Dl();
    return so(t, gl, l);
  }
  function so(l, t, e) {
    if (t = ic(
      l,
      t,
      io
    )[0], l = zn(Ft)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = du(t);
      } catch (i) {
        throw i === Sa ? rn : i;
      }
    else a = t;
    t = Dl();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && (J.flags |= 2048, xa(
      9,
      { destroy: void 0 },
      lm.bind(null, u, e),
      null
    )), [a, n, l];
  }
  function lm(l, t) {
    l.action = t;
  }
  function oo(l) {
    var t = Dl(), e = gl;
    if (e !== null)
      return so(t, e, l);
    Dl(), t = t.memoizedState, e = Dl();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function xa(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = J.updateQueue, t === null && (t = Sn(), J.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ro() {
    return Dl().memoizedState;
  }
  function Tn(l, t, e, a) {
    var u = lt();
    J.flags |= l, u.memoizedState = xa(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function En(l, t, e, a) {
    var u = Dl();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    gl !== null && a !== null && lc(a, gl.memoizedState.deps) ? u.memoizedState = xa(t, n, e, a) : (J.flags |= l, u.memoizedState = xa(
      1 | t,
      n,
      e,
      a
    ));
  }
  function mo(l, t) {
    Tn(8390656, 8, l, t);
  }
  function oc(l, t) {
    En(2048, 8, l, t);
  }
  function tm(l) {
    J.flags |= 4;
    var t = J.updateQueue;
    if (t === null)
      t = Sn(), J.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function yo(l) {
    var t = Dl().memoizedState;
    return tm({ ref: t, nextImpl: l }), function() {
      if ((dl & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function vo(l, t) {
    return En(4, 2, l, t);
  }
  function ho(l, t) {
    return En(4, 4, l, t);
  }
  function go(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function bo(l, t, e) {
    e = e != null ? e.concat([l]) : null, En(4, 4, go.bind(null, t, l), e);
  }
  function rc() {
  }
  function So(l, t) {
    var e = Dl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && lc(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function po(l, t) {
    var e = Dl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && lc(t, a[1]))
      return a[0];
    if (a = l(), $e) {
      fe(!0);
      try {
        l();
      } finally {
        fe(!1);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function dc(l, t, e) {
    return e === void 0 || (kt & 1073741824) !== 0 && (P & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = z0(), J.lanes |= l, Te |= l, e);
  }
  function zo(l, t, e, a) {
    return dt(e, t) ? e : za.current !== null ? (l = dc(l, e, a), dt(l, t) || (Bl = !0), l) : (kt & 42) === 0 || (kt & 1073741824) !== 0 && (P & 261930) === 0 ? (Bl = !0, l.memoizedState = e) : (l = z0(), J.lanes |= l, Te |= l, t);
  }
  function To(l, t, e, a, u) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T, c = {};
    b.T = c, vc(l, !1, t, e);
    try {
      var f = u(), y = b.S;
      if (y !== null && y(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var S = kd(
          f,
          a
        );
        mu(
          l,
          t,
          S,
          bt(l)
        );
      } else
        mu(
          l,
          t,
          a,
          bt(l)
        );
    } catch (E) {
      mu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        bt()
      );
    } finally {
      _.p = n, i !== null && c.types !== null && (i.types = c.types), b.T = i;
    }
  }
  function em() {
  }
  function mc(l, t, e, a) {
    if (l.tag !== 5) throw Error(r(476));
    var u = Eo(l).queue;
    To(
      l,
      u,
      t,
      B,
      e === null ? em : function() {
        return xo(l), e(a);
      }
    );
  }
  function Eo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: B
      },
      next: null
    };
    var e = {};
    return t.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function xo(l) {
    var t = Eo(l);
    t.next === null && (t = l.alternate.memoizedState), mu(
      l,
      t.next.queue,
      {},
      bt()
    );
  }
  function yc() {
    return $l(Uu);
  }
  function Ao() {
    return Dl().memoizedState;
  }
  function _o() {
    return Dl().memoizedState;
  }
  function am(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = bt();
          l = he(e);
          var a = ge(t, l, e);
          a !== null && (ct(a, t, e), fu(a, t, e)), t = { cache: Zi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function um(l, t, e) {
    var a = bt();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xn(l) ? Mo(t, e) : (e = Ci(l, t, e, a), e !== null && (ct(e, l, a), Oo(e, t, a)));
  }
  function No(l, t, e) {
    var a = bt();
    mu(l, t, e, a);
  }
  function mu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (xn(l)) Mo(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = c, dt(c, i))
            return an(l, t, u, 0), Tl === null && en(), !1;
        } catch {
        }
      if (e = Ci(l, t, u, a), e !== null)
        return ct(e, l, a), Oo(e, t, a), !0;
    }
    return !1;
  }
  function vc(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: wc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xn(l)) {
      if (t) throw Error(r(479));
    } else
      t = Ci(
        l,
        e,
        a,
        2
      ), t !== null && ct(t, l, 2);
  }
  function xn(l) {
    var t = l.alternate;
    return l === J || t !== null && t === J;
  }
  function Mo(l, t) {
    Ta = gn = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Oo(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, jf(l, e);
    }
  }
  var yu = {
    readContext: $l,
    use: pn,
    useCallback: Ml,
    useContext: Ml,
    useEffect: Ml,
    useImperativeHandle: Ml,
    useLayoutEffect: Ml,
    useInsertionEffect: Ml,
    useMemo: Ml,
    useReducer: Ml,
    useRef: Ml,
    useState: Ml,
    useDebugValue: Ml,
    useDeferredValue: Ml,
    useTransition: Ml,
    useSyncExternalStore: Ml,
    useId: Ml,
    useHostTransitionStatus: Ml,
    useFormState: Ml,
    useActionState: Ml,
    useOptimistic: Ml,
    useMemoCache: Ml,
    useCacheRefresh: Ml
  };
  yu.useEffectEvent = Ml;
  var Uo = {
    readContext: $l,
    use: pn,
    useCallback: function(l, t) {
      return lt().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: $l,
    useEffect: mo,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, Tn(
        4194308,
        4,
        go.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return Tn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Tn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = lt();
      t = t === void 0 ? null : t;
      var a = l();
      if ($e) {
        fe(!0);
        try {
          l();
        } finally {
          fe(!1);
        }
      }
      return e.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, e) {
      var a = lt();
      if (e !== void 0) {
        var u = e(t);
        if ($e) {
          fe(!0);
          try {
            e(t);
          } finally {
            fe(!1);
          }
        }
      } else u = t;
      return a.memoizedState = a.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, a.queue = l, l = l.dispatch = um.bind(
        null,
        J,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = lt();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = fc(l);
      var t = l.queue, e = No.bind(null, J, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: rc,
    useDeferredValue: function(l, t) {
      var e = lt();
      return dc(e, l, t);
    },
    useTransition: function() {
      var l = fc(!1);
      return l = To.bind(
        null,
        J,
        l.queue,
        !0,
        !1
      ), lt().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = J, u = lt();
      if (tl) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = t(), Tl === null)
          throw Error(r(349));
        (P & 127) !== 0 || ks(a, t, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: t };
      return u.queue = n, mo(Is.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        Fs.bind(
          null,
          a,
          n,
          e,
          t
        ),
        null
      ), e;
    },
    useId: function() {
      var l = lt(), t = Tl.identifierPrefix;
      if (tl) {
        var e = Yt, a = qt;
        e = (a & ~(1 << 32 - rt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = bn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = Fd++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: yc,
    useFormState: co,
    useActionState: co,
    useOptimistic: function(l) {
      var t = lt();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = vc.bind(
        null,
        J,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: nc,
    useCacheRefresh: function() {
      return lt().memoizedState = am.bind(
        null,
        J
      );
    },
    useEffectEvent: function(l) {
      var t = lt(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((dl & 2) !== 0)
          throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, hc = {
    readContext: $l,
    use: pn,
    useCallback: So,
    useContext: $l,
    useEffect: oc,
    useImperativeHandle: bo,
    useInsertionEffect: vo,
    useLayoutEffect: ho,
    useMemo: po,
    useReducer: zn,
    useRef: ro,
    useState: function() {
      return zn(Ft);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, t) {
      var e = Dl();
      return zo(
        e,
        gl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = zn(Ft)[0], t = Dl().memoizedState;
      return [
        typeof l == "boolean" ? l : du(l),
        t
      ];
    },
    useSyncExternalStore: Ws,
    useId: Ao,
    useHostTransitionStatus: yc,
    useFormState: fo,
    useActionState: fo,
    useOptimistic: function(l, t) {
      var e = Dl();
      return to(e, gl, l, t);
    },
    useMemoCache: nc,
    useCacheRefresh: _o
  };
  hc.useEffectEvent = yo;
  var Do = {
    readContext: $l,
    use: pn,
    useCallback: So,
    useContext: $l,
    useEffect: oc,
    useImperativeHandle: bo,
    useInsertionEffect: vo,
    useLayoutEffect: ho,
    useMemo: po,
    useReducer: cc,
    useRef: ro,
    useState: function() {
      return cc(Ft);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, t) {
      var e = Dl();
      return gl === null ? dc(e, l, t) : zo(
        e,
        gl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = cc(Ft)[0], t = Dl().memoizedState;
      return [
        typeof l == "boolean" ? l : du(l),
        t
      ];
    },
    useSyncExternalStore: Ws,
    useId: Ao,
    useHostTransitionStatus: yc,
    useFormState: oo,
    useActionState: oo,
    useOptimistic: function(l, t) {
      var e = Dl();
      return gl !== null ? to(e, gl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: nc,
    useCacheRefresh: _o
  };
  Do.useEffectEvent = yo;
  function gc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : D({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var bc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = bt(), u = he(a);
      u.payload = t, e != null && (u.callback = e), t = ge(l, u, a), t !== null && (ct(t, l, a), fu(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = bt(), u = he(a);
      u.tag = 1, u.payload = t, e != null && (u.callback = e), t = ge(l, u, a), t !== null && (ct(t, l, a), fu(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = bt(), a = he(e);
      a.tag = 2, t != null && (a.callback = t), t = ge(l, a, e), t !== null && (ct(t, l, e), fu(t, l, e));
    }
  };
  function Co(l, t, e, a, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !lu(e, a) || !lu(u, n) : !0;
  }
  function jo(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && bc.enqueueReplaceState(t, t.state, null);
  }
  function We(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = D({}, e));
      for (var u in l)
        e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Ro(l) {
    tn(l);
  }
  function Ho(l) {
    console.error(l);
  }
  function Bo(l) {
    tn(l);
  }
  function An(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function qo(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Sc(l, t, e) {
    return e = he(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      An(l, t);
    }, e;
  }
  function Yo(l) {
    return l = he(l), l.tag = 3, l;
  }
  function Go(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        qo(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      qo(t, e, a), typeof u != "function" && (Ee === null ? Ee = /* @__PURE__ */ new Set([this]) : Ee.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function nm(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && ha(
        t,
        e,
        u,
        !0
      ), e = yt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Ut === null ? qn() : e.alternate === null && Ol === 0 && (Ol = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === dn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Vc(l, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === dn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Vc(l, a, u)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return Vc(l, a, u), qn(), !1;
    }
    if (tl)
      return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Yi && (l = Error(r(422), { cause: a }), au(_t(l, e)))) : (a !== Yi && (t = Error(r(423), {
        cause: a
      }), au(
        _t(t, e)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = _t(a, e), u = Sc(
        l.stateNode,
        a,
        u
      ), Wi(l, u), Ol !== 4 && (Ol = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = _t(n, e), Tu === null ? Tu = [n] : Tu.push(n), Ol !== 4 && (Ol = 2), t === null) return !0;
    a = _t(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = Sc(e.stateNode, a, l), Wi(e, l), !1;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Ee === null || !Ee.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = Yo(u), Go(
              u,
              l,
              e,
              a
            ), Wi(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var pc = Error(r(461)), Bl = !1;
  function Wl(l, t, e, a) {
    t.child = l === null ? Qs(t, null, e, a) : we(
      t,
      l.child,
      e,
      a
    );
  }
  function Lo(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Ze(t), a = tc(
      l,
      t,
      e,
      i,
      n,
      u
    ), c = ec(), l !== null && !Bl ? (ac(l, t, u), It(l, t, u)) : (tl && c && Bi(t), t.flags |= 1, Wl(l, t, a, u), t.child);
  }
  function Xo(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !ji(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Qo(
        l,
        t,
        n,
        a,
        u
      )) : (l = nn(
        e.type,
        null,
        a,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Mc(l, u)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : lu, e(i, a) && l.ref === t.ref)
        return It(l, t, u);
    }
    return t.flags |= 1, l = Jt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Qo(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (lu(n, a) && l.ref === t.ref)
        if (Bl = !1, t.pendingProps = a = n, Mc(l, u))
          (l.flags & 131072) !== 0 && (Bl = !0);
        else
          return t.lanes = l.lanes, It(l, t, u);
    }
    return zc(
      l,
      t,
      e,
      a,
      u
    );
  }
  function Zo(l, t, e, a) {
    var u = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, t.child = null;
        return Vo(
          l,
          t,
          n,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && on(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ks(t, n) : Fi(), Js(t);
      else
        return a = t.lanes = 536870912, Vo(
          l,
          t,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (on(t, n.cachePool), Ks(t, n), Se(), t.memoizedState = null) : (l !== null && on(t, null), Fi(), Se());
    return Wl(l, t, u, e), t.child;
  }
  function vu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Vo(l, t, e, a, u) {
    var n = Ki();
    return n = n === null ? null : { parent: Rl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, l !== null && on(t, null), Fi(), Js(t), l !== null && ha(l, t, a, !0), t.childLanes = u, null;
  }
  function _n(l, t) {
    return t = Mn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ko(l, t, e) {
    return we(t, l.child, null, e), l = _n(t, t.pendingProps), l.flags |= 2, vt(t), t.memoizedState = null, l;
  }
  function im(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (tl) {
        if (a.mode === "hidden")
          return l = _n(t, a), t.lanes = 536870912, vu(null, l);
        if (Pi(t), (l = xl) ? (l = ar(
          l,
          Ot
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: re !== null ? { id: qt, overflow: Yt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ns(l), e.return = t, t.child = e, wl = t, xl = null)) : l = null, l === null) throw me(t);
        return t.lanes = 536870912, null;
      }
      return _n(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Pi(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Ko(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Bl || ha(l, t, e, !1), u = (e & l.childLanes) !== 0, Bl || u) {
        if (a = Tl, a !== null && (i = Rf(a, e), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Ge(l, i), ct(a, l, i), pc;
        qn(), t = Ko(
          l,
          t,
          e
        );
      } else
        l = n.treeContext, xl = Dt(i.nextSibling), wl = t, tl = !0, de = null, Ot = !1, l !== null && Us(t, l), t = _n(t, a), t.flags |= 4096;
      return t;
    }
    return l = Jt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Nn(l, t) {
    var e = t.ref;
    if (e === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(r(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function zc(l, t, e, a, u) {
    return Ze(t), e = tc(
      l,
      t,
      e,
      a,
      void 0,
      u
    ), a = ec(), l !== null && !Bl ? (ac(l, t, u), It(l, t, u)) : (tl && a && Bi(t), t.flags |= 1, Wl(l, t, e, u), t.child);
  }
  function Jo(l, t, e, a, u, n) {
    return Ze(t), t.updateQueue = null, e = $s(
      t,
      a,
      e,
      u
    ), ws(l), a = ec(), l !== null && !Bl ? (ac(l, t, n), It(l, t, n)) : (tl && a && Bi(t), t.flags |= 1, Wl(l, t, e, n), t.child);
  }
  function wo(l, t, e, a, u) {
    if (Ze(t), t.stateNode === null) {
      var n = da, i = e.contextType;
      typeof i == "object" && i !== null && (n = $l(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = bc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, wi(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? $l(i) : da, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (gc(
        t,
        e,
        i,
        a
      ), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && bc.enqueueReplaceState(n, n.state, null), ou(t, a, n, u), su(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, f = We(e, c);
      n.props = f;
      var y = n.context, S = e.contextType;
      i = da, typeof S == "object" && S !== null && (i = $l(S));
      var E = e.getDerivedStateFromProps;
      S = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && jo(
        t,
        n,
        a,
        i
      ), ve = !1;
      var h = t.memoizedState;
      n.state = h, ou(t, a, n, u), su(), y = t.memoizedState, c || h !== y || ve ? (typeof E == "function" && (gc(
        t,
        e,
        E,
        a
      ), y = t.memoizedState), (f = ve || Co(
        t,
        e,
        f,
        a,
        h,
        y,
        i
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = i, a = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, $i(l, t), i = t.memoizedProps, S = We(e, i), n.props = S, E = t.pendingProps, h = n.context, y = e.contextType, f = da, typeof y == "object" && y !== null && (f = $l(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== E || h !== f) && jo(
        t,
        n,
        a,
        f
      ), ve = !1, h = t.memoizedState, n.state = h, ou(t, a, n, u), su();
      var g = t.memoizedState;
      i !== E || h !== g || ve || l !== null && l.dependencies !== null && fn(l.dependencies) ? (typeof c == "function" && (gc(
        t,
        e,
        c,
        a
      ), g = t.memoizedState), (S = ve || Co(
        t,
        e,
        S,
        a,
        h,
        g,
        f
      ) || l !== null && l.dependencies !== null && fn(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        g,
        f
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = f, a = S) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, Nn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = we(
      t,
      l.child,
      null,
      u
    ), t.child = we(
      t,
      null,
      e,
      u
    )) : Wl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = It(
      l,
      t,
      u
    ), l;
  }
  function $o(l, t, e, a) {
    return Xe(), t.flags |= 256, Wl(l, t, e, a), t.child;
  }
  var Tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ec(l) {
    return { baseLanes: l, cachePool: Bs() };
  }
  function xc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= gt), l;
  }
  function Wo(l, t, e) {
    var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Ul.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (tl) {
        if (u ? be(t) : Se(), (l = xl) ? (l = ar(
          l,
          Ot
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: re !== null ? { id: qt, overflow: Yt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ns(l), e.return = t, t.child = e, wl = t, xl = null)) : l = null, l === null) throw me(t);
        return cf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, u ? (Se(), u = t.mode, c = Mn(
        { mode: "hidden", children: c },
        u
      ), a = Le(
        a,
        u,
        e,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = Ec(e), a.childLanes = xc(
        l,
        i,
        e
      ), t.memoizedState = Tc, vu(null, a)) : (be(t), Ac(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (be(t), t.flags &= -257, t = _c(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (Se(), t.child = l.child, t.flags |= 128, t = null) : (Se(), c = a.fallback, u = t.mode, a = Mn(
          { mode: "visible", children: a.children },
          u
        ), c = Le(
          c,
          u,
          e,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, we(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = Ec(e), a.childLanes = xc(
          l,
          i,
          e
        ), t.memoizedState = Tc, t = vu(null, a));
      else if (be(t), cf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(r(419)), a.stack = "", a.digest = i, au({ value: a, source: null, stack: null }), t = _c(
          l,
          t,
          e
        );
      } else if (Bl || ha(l, t, e, !1), i = (e & l.childLanes) !== 0, Bl || i) {
        if (i = Tl, i !== null && (a = Rf(i, e), a !== 0 && a !== f.retryLane))
          throw f.retryLane = a, Ge(l, a), ct(i, l, a), pc;
        nf(c) || qn(), t = _c(
          l,
          t,
          e
        );
      } else
        nf(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, xl = Dt(
          c.nextSibling
        ), wl = t, tl = !0, de = null, Ot = !1, l !== null && Us(t, l), t = Ac(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Se(), c = a.fallback, u = t.mode, f = l.child, y = f.sibling, a = Jt(f, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = f.subtreeFlags & 65011712, y !== null ? c = Jt(
      y,
      c
    ) : (c = Le(
      c,
      u,
      e,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, vu(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = Ec(e) : (u = c.cachePool, u !== null ? (f = Rl._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = Bs(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: u
    }), a.memoizedState = c, a.childLanes = xc(
      l,
      i,
      e
    ), t.memoizedState = Tc, vu(l.child, a)) : (be(t), e = l.child, l = e.sibling, e = Jt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Ac(l, t) {
    return t = Mn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function Mn(l, t) {
    return l = mt(22, l, null, t), l.lanes = 0, l;
  }
  function _c(l, t, e) {
    return we(t, l.child, null, e), l = Ac(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function ko(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Xi(l.return, t, e);
  }
  function Nc(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = u, i.treeForkCount = n);
  }
  function Fo(l, t, e) {
    var a = t.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var i = Ul.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, O(Ul, i), Wl(l, t, a, e), a = tl ? eu : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && ko(l, e, t);
        else if (l.tag === 19)
          ko(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null; )
          l = e.alternate, l !== null && hn(l) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Nc(
          t,
          !1,
          u,
          e,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && hn(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = e, e = u, u = l;
        }
        Nc(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "together":
        Nc(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function It(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), Te |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (ha(
          l,
          t,
          e,
          !1
        ), (e & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, e = Jt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = Jt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Mc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && fn(l)));
  }
  function cm(l, t, e) {
    switch (t.tag) {
      case 3:
        Kl(t, t.stateNode.containerInfo), ye(t, Rl, l.memoizedState.cache), Xe();
        break;
      case 27:
      case 5:
        je(t);
        break;
      case 4:
        Kl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ye(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Pi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (be(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Wo(l, t, e) : (be(t), l = It(
            l,
            t,
            e
          ), l !== null ? l.sibling : null);
        be(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (ha(
          l,
          t,
          e,
          !1
        ), a = (e & t.childLanes) !== 0), u) {
          if (a)
            return Fo(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), O(Ul, Ul.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Zo(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        ye(t, Rl, l.memoizedState.cache);
    }
    return It(l, t, e);
  }
  function Io(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Bl = !0;
      else {
        if (!Mc(l, e) && (t.flags & 128) === 0)
          return Bl = !1, cm(
            l,
            t,
            e
          );
        Bl = (l.flags & 131072) !== 0;
      }
    else
      Bl = !1, tl && (t.flags & 1048576) !== 0 && Os(t, eu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Ke(t.elementType), t.type = l, typeof l == "function")
            ji(l) ? (a = We(l, a), t.tag = 1, t = wo(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = zc(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Ql) {
                t.tag = 11, t = Lo(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (u === k) {
                t.tag = 14, t = Xo(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = zt(l) || l, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return zc(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 1:
        return a = t.type, u = We(
          a,
          t.pendingProps
        ), wo(
          l,
          t,
          a,
          u,
          e
        );
      case 3:
        l: {
          if (Kl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, $i(l, t), ou(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, ye(t, Rl, a), a !== n.cache && Qi(
            t,
            [Rl],
            e,
            !0
          ), su(), a = i.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = $o(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== u) {
              u = _t(
                Error(r(424)),
                t
              ), au(u), t = $o(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, xl = Dt(l.firstChild), wl = t, tl = !0, de = null, Ot = !0, e = Qs(
                t,
                null,
                a,
                e
              ), t.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Xe(), a === u) {
              t = It(
                l,
                t,
                e
              );
              break l;
            }
            Wl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Nn(l, t), l === null ? (e = sr(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : tl || (e = t.type, l = t.pendingProps, a = Vn(
          W.current
        ).createElement(e), a[Jl] = t, a[tt] = l, kl(a, e, l), Ll(a), t.stateNode = a) : t.memoizedState = sr(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return je(t), l === null && tl && (a = t.stateNode = ir(
          t.type,
          t.pendingProps,
          W.current
        ), wl = t, Ot = !0, u = xl, Ne(t.type) ? (ff = u, xl = Dt(a.firstChild)) : xl = u), Wl(
          l,
          t,
          t.pendingProps.children,
          e
        ), Nn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && tl && ((u = a = xl) && (a = qm(
          a,
          t.type,
          t.pendingProps,
          Ot
        ), a !== null ? (t.stateNode = a, wl = t, xl = Dt(a.firstChild), Ot = !1, u = !0) : u = !1), u || me(t)), je(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, ef(u, n) ? a = null : i !== null && ef(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = tc(
          l,
          t,
          Id,
          null,
          null,
          e
        ), Uu._currentValue = u), Nn(l, t), Wl(l, t, a, e), t.child;
      case 6:
        return l === null && tl && ((l = e = xl) && (e = Ym(
          e,
          t.pendingProps,
          Ot
        ), e !== null ? (t.stateNode = e, wl = t, xl = null, l = !0) : l = !1), l || me(t)), null;
      case 13:
        return Wo(l, t, e);
      case 4:
        return Kl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = we(
          t,
          null,
          a,
          e
        ) : Wl(l, t, a, e), t.child;
      case 11:
        return Lo(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Wl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Wl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Wl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, ye(t, t.type, a.value), Wl(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, Ze(t), u = $l(u), a = a(u), t.flags |= 1, Wl(l, t, a, e), t.child;
      case 14:
        return Xo(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return Qo(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return Fo(l, t, e);
      case 31:
        return im(l, t, e);
      case 22:
        return Zo(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return Ze(t), a = $l(Rl), l === null ? (u = Ki(), u === null && (u = Tl, n = Zi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, wi(t), ye(t, Rl, u)) : ((l.lanes & e) !== 0 && ($i(l, t), ou(t, null, null, e), su()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ye(t, Rl, a)) : (a = n.cache, ye(t, Rl, a), a !== u.cache && Qi(
          t,
          [Rl],
          e,
          !0
        ))), Wl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Pt(l) {
    l.flags |= 4;
  }
  function Oc(l, t, e, a, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (A0()) l.flags |= 8192;
        else
          throw Je = dn, Ji;
    } else l.flags &= -16777217;
  }
  function Po(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !yr(t))
      if (A0()) l.flags |= 8192;
      else
        throw Je = dn, Ji;
  }
  function On(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Df() : 536870912, l.lanes |= t, Ma |= t);
  }
  function hu(l, t) {
    if (!tl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), t = t.sibling;
          e === null ? l.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function Al(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function fm(l, t, e) {
    var a = t.pendingProps;
    switch (qi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Al(t), null;
      case 1:
        return Al(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Wt(Rl), El(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (va(t) ? Pt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Gi())), Al(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Pt(t), n !== null ? (Al(t), Po(t, n)) : (Al(t), Oc(
          t,
          u,
          null,
          a,
          e
        ))) : n ? n !== l.memoizedState ? (Pt(t), Al(t), Po(t, n)) : (Al(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Pt(t), Al(t), Oc(
          t,
          u,
          l,
          a,
          e
        )), null;
      case 27:
        if (Ie(t), e = W.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Al(t), null;
          }
          l = C.current, va(t) ? Ds(t) : (l = ir(u, a, e), t.stateNode = l, Pt(t));
        }
        return Al(t), null;
      case 5:
        if (Ie(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Al(t), null;
          }
          if (n = C.current, va(t))
            Ds(t);
          else {
            var i = Vn(
              W.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? i.createElement(u, { is: a.is }) : i.createElement(u);
                }
            }
            n[Jl] = t, n[tt] = a;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch (kl(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Pt(t);
          }
        }
        return Al(t), Oc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          e
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Pt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = W.current, va(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = wl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            l[Jl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || W0(l.nodeValue, e)), l || me(t, !0);
          } else
            l = Vn(l).createTextNode(
              a
            ), l[Jl] = t, t.stateNode = l;
        }
        return Al(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = va(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(r(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
              l[Jl] = t;
            } else
              Xe(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Al(t), l = !1;
          } else
            e = Gi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (vt(t), t) : (vt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Al(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = va(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(r(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[Jl] = t;
            } else
              Xe(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Al(t), u = !1;
          } else
            u = Gi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (vt(t), t) : (vt(t), null);
        }
        return vt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), On(t, t.updateQueue), Al(t), null);
      case 4:
        return El(), l === null && Fc(t.stateNode.containerInfo), Al(t), null;
      case 10:
        return Wt(t.type), Al(t), null;
      case 19:
        if (z(Ul), a = t.memoizedState, a === null) return Al(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) hu(a, !1);
          else {
            if (Ol !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = hn(l), n !== null) {
                  for (t.flags |= 128, hu(a, !1), l = n.updateQueue, t.updateQueue = l, On(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    _s(e, l), e = e.sibling;
                  return O(
                    Ul,
                    Ul.current & 1 | 2
                  ), tl && wt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && Il() > Rn && (t.flags |= 128, u = !0, hu(a, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = hn(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, On(t, l), hu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !tl)
                return Al(t), null;
            } else
              2 * Il() - a.renderingStartTime > Rn && e !== 536870912 && (t.flags |= 128, u = !0, hu(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Il(), l.sibling = null, e = Ul.current, O(
          Ul,
          u ? e & 1 | 2 : e & 1
        ), tl && wt(t, a.treeForkCount), l) : (Al(t), null);
      case 22:
      case 23:
        return vt(t), Ii(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Al(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Al(t), e = t.updateQueue, e !== null && On(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && z(Ve), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Wt(Rl), Al(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function sm(l, t) {
    switch (qi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Wt(Rl), El(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ie(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (vt(t), t.alternate === null)
            throw Error(r(340));
          Xe();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (vt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Xe();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return z(Ul), null;
      case 4:
        return El(), null;
      case 10:
        return Wt(t.type), null;
      case 22:
      case 23:
        return vt(t), Ii(), l !== null && z(Ve), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Wt(Rl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function l0(l, t) {
    switch (qi(t), t.tag) {
      case 3:
        Wt(Rl), El();
        break;
      case 26:
      case 27:
      case 5:
        Ie(t);
        break;
      case 4:
        El();
        break;
      case 31:
        t.memoizedState !== null && vt(t);
        break;
      case 13:
        vt(t);
        break;
      case 19:
        z(Ul);
        break;
      case 10:
        Wt(t.type);
        break;
      case 22:
      case 23:
        vt(t), Ii(), l !== null && z(Ve);
        break;
      case 24:
        Wt(Rl);
    }
  }
  function gu(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create, i = e.inst;
            a = n(), i.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      vl(t, t.return, c);
    }
  }
  function pe(l, t, e) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = t;
              var f = e, y = c;
              try {
                y();
              } catch (S) {
                vl(
                  u,
                  f,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      vl(t, t.return, S);
    }
  }
  function t0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Vs(t, e);
      } catch (a) {
        vl(l, l.return, a);
      }
    }
  }
  function e0(l, t, e) {
    e.props = We(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      vl(l, t, a);
    }
  }
  function bu(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
      }
    } catch (u) {
      vl(l, t, u);
    }
  }
  function Gt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          vl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          vl(l, t, u);
        }
      else e.current = null;
  }
  function a0(l) {
    var t = l.type, e = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      vl(l, l.return, u);
    }
  }
  function Uc(l, t, e) {
    try {
      var a = l.stateNode;
      Dm(a, l.type, e, t), a[tt] = t;
    } catch (u) {
      vl(l, l.return, u);
    }
  }
  function u0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ne(l.type) || l.tag === 4;
  }
  function Dc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || u0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ne(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Cc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Vt));
    else if (a !== 4 && (a === 27 && Ne(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Cc(l, t, e), l = l.sibling; l !== null; )
        Cc(l, t, e), l = l.sibling;
  }
  function Un(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Ne(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (Un(l, t, e), l = l.sibling; l !== null; )
        Un(l, t, e), l = l.sibling;
  }
  function n0(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      kl(t, a, e), t[Jl] = l, t[tt] = e;
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  var le = !1, ql = !1, jc = !1, i0 = typeof WeakSet == "function" ? WeakSet : Set, Xl = null;
  function om(l, t) {
    if (l = l.containerInfo, lf = Fn, l = gs(l), _i(l)) {
      if ("selectionStart" in l)
        var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0, c = -1, f = -1, y = 0, S = 0, E = l, h = null;
            t: for (; ; ) {
              for (var g; E !== e || u !== 0 && E.nodeType !== 3 || (c = i + u), E !== n || a !== 0 && E.nodeType !== 3 || (f = i + a), E.nodeType === 3 && (i += E.nodeValue.length), (g = E.firstChild) !== null; )
                h = E, E = g;
              for (; ; ) {
                if (E === l) break t;
                if (h === e && ++y === u && (c = i), h === n && ++S === a && (f = i), (g = E.nextSibling) !== null) break;
                E = h, h = E.parentNode;
              }
              E = g;
            }
            e = c === -1 || f === -1 ? null : { start: c, end: f };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (tf = { focusedElem: l, selectionRange: e }, Fn = !1, Xl = t; Xl !== null; )
      if (t = Xl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Xl = l;
      else
        for (; Xl !== null; ) {
          switch (t = Xl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (e = 0; e < l.length; e++)
                  u = l[e], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                try {
                  var j = We(
                    e.type,
                    u
                  );
                  l = a.getSnapshotBeforeUpdate(
                    j,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (L) {
                  vl(
                    e,
                    e.return,
                    L
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                  uf(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      uf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Xl = l;
            break;
          }
          Xl = t.return;
        }
  }
  function c0(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ee(l, e), a & 4 && gu(5, e);
        break;
      case 1:
        if (ee(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              vl(e, e.return, i);
            }
          else {
            var u = We(
              e.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                u,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              vl(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && t0(e), a & 512 && bu(e, e.return);
        break;
      case 3:
        if (ee(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Vs(l, t);
          } catch (i) {
            vl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && n0(e);
      case 26:
      case 5:
        ee(l, e), t === null && a & 4 && a0(e), a & 512 && bu(e, e.return);
        break;
      case 12:
        ee(l, e);
        break;
      case 31:
        ee(l, e), a & 4 && o0(l, e);
        break;
      case 13:
        ee(l, e), a & 4 && r0(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Sm.bind(
          null,
          e
        ), Gm(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || le, !a) {
          t = t !== null && t.memoizedState !== null || ql, u = le;
          var n = ql;
          le = a, (ql = t) && !n ? ae(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : ee(l, e), le = u, ql = n;
        }
        break;
      case 30:
        break;
      default:
        ee(l, e);
    }
  }
  function f0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, f0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && si(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var _l = null, at = !1;
  function te(l, t, e) {
    for (e = e.child; e !== null; )
      s0(l, t, e), e = e.sibling;
  }
  function s0(l, t, e) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
      try {
        ot.onCommitFiberUnmount(Qa, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        ql || Gt(e, t), te(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        ql || Gt(e, t);
        var a = _l, u = at;
        Ne(e.type) && (_l = e.stateNode, at = !1), te(
          l,
          t,
          e
        ), Nu(e.stateNode), _l = a, at = u;
        break;
      case 5:
        ql || Gt(e, t);
      case 6:
        if (a = _l, u = at, _l = null, te(
          l,
          t,
          e
        ), _l = a, at = u, _l !== null)
          if (at)
            try {
              (_l.nodeType === 9 ? _l.body : _l.nodeName === "HTML" ? _l.ownerDocument.body : _l).removeChild(e.stateNode);
            } catch (n) {
              vl(
                e,
                t,
                n
              );
            }
          else
            try {
              _l.removeChild(e.stateNode);
            } catch (n) {
              vl(
                e,
                t,
                n
              );
            }
        break;
      case 18:
        _l !== null && (at ? (l = _l, tr(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ba(l)) : tr(_l, e.stateNode));
        break;
      case 4:
        a = _l, u = at, _l = e.stateNode.containerInfo, at = !0, te(
          l,
          t,
          e
        ), _l = a, at = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pe(2, e, t), ql || pe(4, e, t), te(
          l,
          t,
          e
        );
        break;
      case 1:
        ql || (Gt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && e0(
          e,
          t,
          a
        )), te(
          l,
          t,
          e
        );
        break;
      case 21:
        te(
          l,
          t,
          e
        );
        break;
      case 22:
        ql = (a = ql) || e.memoizedState !== null, te(
          l,
          t,
          e
        ), ql = a;
        break;
      default:
        te(
          l,
          t,
          e
        );
    }
  }
  function o0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ba(l);
      } catch (e) {
        vl(t, t.return, e);
      }
    }
  }
  function r0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ba(l);
      } catch (e) {
        vl(t, t.return, e);
      }
  }
  function rm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new i0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new i0()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function Dn(l, t) {
    var e = rm(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = pm.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function ut(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Ne(c.type)) {
                _l = c.stateNode, at = !1;
                break l;
              }
              break;
            case 5:
              _l = c.stateNode, at = !1;
              break l;
            case 3:
            case 4:
              _l = c.stateNode.containerInfo, at = !0;
              break l;
          }
          c = c.return;
        }
        if (_l === null) throw Error(r(160));
        s0(n, i, u), _l = null, at = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        d0(t, l), t = t.sibling;
  }
  var Rt = null;
  function d0(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ut(t, l), nt(l), a & 4 && (pe(3, l, l.return), gu(3, l), pe(5, l, l.return));
        break;
      case 1:
        ut(t, l), nt(l), a & 512 && (ql || e === null || Gt(e, e.return)), a & 64 && le && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Rt;
        if (ut(t, l), nt(l), a & 512 && (ql || e === null || Gt(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ka] || n[Jl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), kl(n, a, e), n[Jl] = l, Ll(n), a = n;
                      break l;
                    case "link":
                      var i = dr(
                        "link",
                        "href",
                        u
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), kl(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = dr(
                        "meta",
                        "content",
                        u
                      ).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), kl(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  n[Jl] = l, Ll(n), a = n;
                }
                l.stateNode = a;
              } else
                mr(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = rr(
                u,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? mr(
              u,
              l.type,
              l.stateNode
            ) : rr(
              u,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && Uc(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        ut(t, l), nt(l), a & 512 && (ql || e === null || Gt(e, e.return)), e !== null && a & 4 && Uc(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (ut(t, l), nt(l), a & 512 && (ql || e === null || Gt(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            na(u, "");
          } catch (j) {
            vl(l, l.return, j);
          }
        }
        a & 4 && l.stateNode != null && (u = l.memoizedProps, Uc(
          l,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (jc = !0);
        break;
      case 6:
        if (ut(t, l), nt(l), a & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (j) {
            vl(l, l.return, j);
          }
        }
        break;
      case 3:
        if (wn = null, u = Rt, Rt = Kn(t.containerInfo), ut(t, l), Rt = u, nt(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ba(t.containerInfo);
          } catch (j) {
            vl(l, l.return, j);
          }
        jc && (jc = !1, m0(l));
        break;
      case 4:
        a = Rt, Rt = Kn(
          l.stateNode.containerInfo
        ), ut(t, l), nt(l), Rt = a;
        break;
      case 12:
        ut(t, l), nt(l);
        break;
      case 31:
        ut(t, l), nt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Dn(l, a)));
        break;
      case 13:
        ut(t, l), nt(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (jn = Il()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Dn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = e !== null && e.memoizedState !== null, y = le, S = ql;
        if (le = y || u, ql = S || f, ut(t, l), ql = S, le = y, nt(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || f || le || ql || ke(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                f = e = t;
                try {
                  if (n = f.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = f.stateNode;
                    var E = f.memoizedProps.style, h = E != null && E.hasOwnProperty("display") ? E.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (j) {
                  vl(f, f.return, j);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (j) {
                  vl(f, f.return, j);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                f = t;
                try {
                  var g = f.stateNode;
                  u ? er(g, !0) : er(f.stateNode, !1);
                } catch (j) {
                  vl(f, f.return, j);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), t = t.return;
            }
            e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Dn(l, e))));
        break;
      case 19:
        ut(t, l), nt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Dn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ut(t, l), nt(l);
    }
  }
  function nt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (u0(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Dc(l);
            Un(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (na(i, ""), e.flags &= -33);
            var c = Dc(l);
            Un(l, c, i);
            break;
          case 3:
          case 4:
            var f = e.stateNode.containerInfo, y = Dc(l);
            Cc(
              l,
              y,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (S) {
        vl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function m0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        m0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        c0(l, t.alternate, t), t = t.sibling;
  }
  function ke(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pe(4, t, t.return), ke(t);
          break;
        case 1:
          Gt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && e0(
            t,
            t.return,
            e
          ), ke(t);
          break;
        case 27:
          Nu(t.stateNode);
        case 26:
        case 5:
          Gt(t, t.return), ke(t);
          break;
        case 22:
          t.memoizedState === null && ke(t);
          break;
        case 30:
          ke(t);
          break;
        default:
          ke(t);
      }
      l = l.sibling;
    }
  }
  function ae(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, u = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ae(
            u,
            n,
            e
          ), gu(4, n);
          break;
        case 1:
          if (ae(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (y) {
              vl(a, a.return, y);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var c = a.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Zs(f[u], c);
            } catch (y) {
              vl(a, a.return, y);
            }
          }
          e && i & 64 && t0(n), bu(n, n.return);
          break;
        case 27:
          n0(n);
        case 26:
        case 5:
          ae(
            u,
            n,
            e
          ), e && a === null && i & 4 && a0(n), bu(n, n.return);
          break;
        case 12:
          ae(
            u,
            n,
            e
          );
          break;
        case 31:
          ae(
            u,
            n,
            e
          ), e && i & 4 && o0(u, n);
          break;
        case 13:
          ae(
            u,
            n,
            e
          ), e && i & 4 && r0(u, n);
          break;
        case 22:
          n.memoizedState === null && ae(
            u,
            n,
            e
          ), bu(n, n.return);
          break;
        case 30:
          break;
        default:
          ae(
            u,
            n,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Rc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && uu(e));
  }
  function Hc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && uu(l));
  }
  function Ht(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        y0(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function y0(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ht(
          l,
          t,
          e,
          a
        ), u & 2048 && gu(9, t);
        break;
      case 1:
        Ht(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        Ht(
          l,
          t,
          e,
          a
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && uu(l)));
        break;
      case 12:
        if (u & 2048) {
          Ht(
            l,
            t,
            e,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (f) {
            vl(t, t.return, f);
          }
        } else
          Ht(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        Ht(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        Ht(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Ht(
          l,
          t,
          e,
          a
        ) : Su(l, t) : n._visibility & 2 ? Ht(
          l,
          t,
          e,
          a
        ) : (n._visibility |= 2, Aa(
          l,
          t,
          e,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Rc(i, t);
        break;
      case 24:
        Ht(
          l,
          t,
          e,
          a
        ), u & 2048 && Hc(t.alternate, t);
        break;
      default:
        Ht(
          l,
          t,
          e,
          a
        );
    }
  }
  function Aa(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = e, f = a, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Aa(
            n,
            i,
            c,
            f,
            u
          ), gu(8, i);
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          i.memoizedState !== null ? S._visibility & 2 ? Aa(
            n,
            i,
            c,
            f,
            u
          ) : Su(
            n,
            i
          ) : (S._visibility |= 2, Aa(
            n,
            i,
            c,
            f,
            u
          )), u && y & 2048 && Rc(
            i.alternate,
            i
          );
          break;
        case 24:
          Aa(
            n,
            i,
            c,
            f,
            u
          ), u && y & 2048 && Hc(i.alternate, i);
          break;
        default:
          Aa(
            n,
            i,
            c,
            f,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Su(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, u = a.flags;
        switch (a.tag) {
          case 22:
            Su(e, a), u & 2048 && Rc(
              a.alternate,
              a
            );
            break;
          case 24:
            Su(e, a), u & 2048 && Hc(a.alternate, a);
            break;
          default:
            Su(e, a);
        }
        t = t.sibling;
      }
  }
  var pu = 8192;
  function _a(l, t, e) {
    if (l.subtreeFlags & pu)
      for (l = l.child; l !== null; )
        v0(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function v0(l, t, e) {
    switch (l.tag) {
      case 26:
        _a(
          l,
          t,
          e
        ), l.flags & pu && l.memoizedState !== null && Fm(
          e,
          Rt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        _a(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Rt;
        Rt = Kn(l.stateNode.containerInfo), _a(
          l,
          t,
          e
        ), Rt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = pu, pu = 16777216, _a(
          l,
          t,
          e
        ), pu = a) : _a(
          l,
          t,
          e
        ));
        break;
      default:
        _a(
          l,
          t,
          e
        );
    }
  }
  function h0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function zu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Xl = a, b0(
            a,
            l
          );
        }
      h0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        g0(l), l = l.sibling;
  }
  function g0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        zu(l), l.flags & 2048 && pe(9, l, l.return);
        break;
      case 3:
        zu(l);
        break;
      case 12:
        zu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Cn(l)) : zu(l);
        break;
      default:
        zu(l);
    }
  }
  function Cn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Xl = a, b0(
            a,
            l
          );
        }
      h0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          pe(8, t, t.return), Cn(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Cn(t));
          break;
        default:
          Cn(t);
      }
      l = l.sibling;
    }
  }
  function b0(l, t) {
    for (; Xl !== null; ) {
      var e = Xl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          pe(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          uu(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Xl = a;
      else
        l: for (e = l; Xl !== null; ) {
          a = Xl;
          var u = a.sibling, n = a.return;
          if (f0(a), a === e) {
            Xl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Xl = u;
            break l;
          }
          Xl = n;
        }
    }
  }
  var dm = {
    getCacheForType: function(l) {
      var t = $l(Rl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return $l(Rl).controller.signal;
    }
  }, mm = typeof WeakMap == "function" ? WeakMap : Map, dl = 0, Tl = null, F = null, P = 0, yl = 0, ht = null, ze = !1, Na = !1, Bc = !1, ue = 0, Ol = 0, Te = 0, Fe = 0, qc = 0, gt = 0, Ma = 0, Tu = null, it = null, Yc = !1, jn = 0, S0 = 0, Rn = 1 / 0, Hn = null, Ee = null, Gl = 0, xe = null, Oa = null, ne = 0, Gc = 0, Lc = null, p0 = null, Eu = 0, Xc = null;
  function bt() {
    return (dl & 2) !== 0 && P !== 0 ? P & -P : b.T !== null ? wc() : Hf();
  }
  function z0() {
    if (gt === 0)
      if ((P & 536870912) === 0 || tl) {
        var l = Qu;
        Qu <<= 1, (Qu & 3932160) === 0 && (Qu = 262144), gt = l;
      } else gt = 536870912;
    return l = yt.current, l !== null && (l.flags |= 32), gt;
  }
  function ct(l, t, e) {
    (l === Tl && (yl === 2 || yl === 9) || l.cancelPendingCommit !== null) && (Ua(l, 0), Ae(
      l,
      P,
      gt,
      !1
    )), Va(l, e), ((dl & 2) === 0 || l !== Tl) && (l === Tl && ((dl & 2) === 0 && (Fe |= e), Ol === 4 && Ae(
      l,
      P,
      gt,
      !1
    )), Lt(l));
  }
  function T0(l, t, e) {
    if ((dl & 6) !== 0) throw Error(r(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Za(l, t), u = a ? hm(l, t) : Zc(l, t, !0), n = a;
    do {
      if (u === 0) {
        Na && !a && Ae(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, n && !ym(e)) {
          u = Zc(l, t, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = Tu;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (Ua(c, i).flags |= 256), i = Zc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Bc && !f) {
                  c.errorRecoveryDisabledLanes |= n, Fe |= n, u = 4;
                  break l;
                }
                n = it, it = u, n !== null && (it === null ? it = n : it.push.apply(
                  it,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ua(l, 0), Ae(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = u, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ae(
                a,
                t,
                gt,
                !ze
              );
              break l;
            case 2:
              it = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (u = jn + 300 - Il(), 10 < u)) {
            if (Ae(
              a,
              t,
              gt,
              !ze
            ), Vu(a, 0, !0) !== 0) break l;
            ne = t, a.timeoutHandle = P0(
              E0.bind(
                null,
                a,
                e,
                it,
                Hn,
                Yc,
                t,
                gt,
                Fe,
                Ma,
                ze,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          E0(
            a,
            e,
            it,
            Hn,
            Yc,
            t,
            gt,
            Fe,
            Ma,
            ze,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Lt(l);
  }
  function E0(l, t, e, a, u, n, i, c, f, y, S, E, h, g) {
    if (l.timeoutHandle = -1, E = t.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Vt
      }, v0(
        t,
        n,
        E
      );
      var j = (n & 62914560) === n ? jn - Il() : (n & 4194048) === n ? S0 - Il() : 0;
      if (j = Im(
        E,
        j
      ), j !== null) {
        ne = n, l.cancelPendingCommit = j(
          D0.bind(
            null,
            l,
            t,
            n,
            e,
            a,
            u,
            i,
            c,
            f,
            S,
            E,
            null,
            h,
            g
          )
        ), Ae(l, n, i, !y);
        return;
      }
    }
    D0(
      l,
      t,
      n,
      e,
      a,
      u,
      i,
      c,
      f
    );
  }
  function ym(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!dt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null)
        e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ae(l, t, e, a) {
    t &= ~qc, t &= ~Fe, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - rt(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && Cf(l, e, t);
  }
  function Bn() {
    return (dl & 6) === 0 ? (xu(0), !1) : !0;
  }
  function Qc() {
    if (F !== null) {
      if (yl === 0)
        var l = F.return;
      else
        l = F, $t = Qe = null, uc(l), pa = null, iu = 0, l = F;
      for (; l !== null; )
        l0(l.alternate, l), l = l.return;
      F = null;
    }
  }
  function Ua(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Rm(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), ne = 0, Qc(), Tl = l, F = e = Jt(l.current, null), P = t, yl = 0, ht = null, ze = !1, Na = Za(l, t), Bc = !1, Ma = gt = qc = Fe = Te = Ol = 0, it = Tu = null, Yc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - rt(a), n = 1 << u;
        t |= l[u], a &= ~n;
      }
    return ue = t, en(), e;
  }
  function x0(l, t) {
    J = null, b.H = yu, t === Sa || t === rn ? (t = Gs(), yl = 3) : t === Ji ? (t = Gs(), yl = 4) : yl = t === pc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ht = t, F === null && (Ol = 1, An(
      l,
      _t(t, l.current)
    ));
  }
  function A0() {
    var l = yt.current;
    return l === null ? !0 : (P & 4194048) === P ? Ut === null : (P & 62914560) === P || (P & 536870912) !== 0 ? l === Ut : !1;
  }
  function _0() {
    var l = b.H;
    return b.H = yu, l === null ? yu : l;
  }
  function N0() {
    var l = b.A;
    return b.A = dm, l;
  }
  function qn() {
    Ol = 4, ze || (P & 4194048) !== P && yt.current !== null || (Na = !0), (Te & 134217727) === 0 && (Fe & 134217727) === 0 || Tl === null || Ae(
      Tl,
      P,
      gt,
      !1
    );
  }
  function Zc(l, t, e) {
    var a = dl;
    dl |= 2;
    var u = _0(), n = N0();
    (Tl !== l || P !== t) && (Hn = null, Ua(l, t)), t = !1;
    var i = Ol;
    l: do
      try {
        if (yl !== 0 && F !== null) {
          var c = F, f = ht;
          switch (yl) {
            case 8:
              Qc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = !0);
              var y = yl;
              if (yl = 0, ht = null, Da(l, c, f, y), e && Na) {
                i = 0;
                break l;
              }
              break;
            default:
              y = yl, yl = 0, ht = null, Da(l, c, f, y);
          }
        }
        vm(), i = Ol;
        break;
      } catch (S) {
        x0(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, $t = Qe = null, dl = a, b.H = u, b.A = n, F === null && (Tl = null, P = 0, en()), i;
  }
  function vm() {
    for (; F !== null; ) M0(F);
  }
  function hm(l, t) {
    var e = dl;
    dl |= 2;
    var a = _0(), u = N0();
    Tl !== l || P !== t ? (Hn = null, Rn = Il() + 500, Ua(l, t)) : Na = Za(
      l,
      t
    );
    l: do
      try {
        if (yl !== 0 && F !== null) {
          t = F;
          var n = ht;
          t: switch (yl) {
            case 1:
              yl = 0, ht = null, Da(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (qs(n)) {
                yl = 0, ht = null, O0(t);
                break;
              }
              t = function() {
                yl !== 2 && yl !== 9 || Tl !== l || (yl = 7), Lt(l);
              }, n.then(t, t);
              break l;
            case 3:
              yl = 7;
              break l;
            case 4:
              yl = 5;
              break l;
            case 7:
              qs(n) ? (yl = 0, ht = null, O0(t)) : (yl = 0, ht = null, Da(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (F.tag) {
                case 26:
                  i = F.memoizedState;
                case 5:
                case 27:
                  var c = F;
                  if (i ? yr(i) : c.stateNode.complete) {
                    yl = 0, ht = null;
                    var f = c.sibling;
                    if (f !== null) F = f;
                    else {
                      var y = c.return;
                      y !== null ? (F = y, Yn(y)) : F = null;
                    }
                    break t;
                  }
              }
              yl = 0, ht = null, Da(l, t, n, 5);
              break;
            case 6:
              yl = 0, ht = null, Da(l, t, n, 6);
              break;
            case 8:
              Qc(), Ol = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        gm();
        break;
      } catch (S) {
        x0(l, S);
      }
    while (!0);
    return $t = Qe = null, b.H = a, b.A = u, dl = e, F !== null ? 0 : (Tl = null, P = 0, en(), Ol);
  }
  function gm() {
    for (; F !== null && !Fl(); )
      M0(F);
  }
  function M0(l) {
    var t = Io(l.alternate, l, ue);
    l.memoizedProps = l.pendingProps, t === null ? Yn(l) : F = t;
  }
  function O0(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Jo(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          P
        );
        break;
      case 11:
        t = Jo(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          P
        );
        break;
      case 5:
        uc(t);
      default:
        l0(e, t), t = F = _s(t, ue), t = Io(e, t, ue);
    }
    l.memoizedProps = l.pendingProps, t === null ? Yn(l) : F = t;
  }
  function Da(l, t, e, a) {
    $t = Qe = null, uc(t), pa = null, iu = 0;
    var u = t.return;
    try {
      if (nm(
        l,
        u,
        t,
        e,
        P
      )) {
        Ol = 1, An(
          l,
          _t(e, l.current)
        ), F = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw F = u, n;
      Ol = 1, An(
        l,
        _t(e, l.current)
      ), F = null;
      return;
    }
    t.flags & 32768 ? (tl || a === 1 ? l = !0 : Na || (P & 536870912) !== 0 ? l = !1 : (ze = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), U0(t, l)) : Yn(t);
  }
  function Yn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        U0(
          t,
          ze
        );
        return;
      }
      l = t.return;
      var e = fm(
        t.alternate,
        t,
        ue
      );
      if (e !== null) {
        F = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        F = t;
        return;
      }
      F = t = l;
    } while (t !== null);
    Ol === 0 && (Ol = 5);
  }
  function U0(l, t) {
    do {
      var e = sm(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, F = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        F = l;
        return;
      }
      F = l = e;
    } while (l !== null);
    Ol = 6, F = null;
  }
  function D0(l, t, e, a, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do
      Gn();
    while (Gl !== 0);
    if ((dl & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (n = t.lanes | t.childLanes, n |= Di, kr(
        l,
        e,
        n,
        i,
        c,
        f
      ), l === Tl && (F = Tl = null, P = 0), Oa = t, xe = l, ne = e, Gc = n, Lc = u, p0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, zm(Lu, function() {
        return B0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, u = _.p, _.p = 2, i = dl, dl |= 4;
        try {
          om(l, t, e);
        } finally {
          dl = i, _.p = u, b.T = a;
        }
      }
      Gl = 1, C0(), j0(), R0();
    }
  }
  function C0() {
    if (Gl === 1) {
      Gl = 0;
      var l = xe, t = Oa, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = b.T, b.T = null;
        var a = _.p;
        _.p = 2;
        var u = dl;
        dl |= 4;
        try {
          d0(t, l);
          var n = tf, i = gs(l.containerInfo), c = n.focusedElem, f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && hs(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && _i(c)) {
              var y = f.start, S = f.end;
              if (S === void 0 && (S = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var E = c.ownerDocument || document, h = E && E.defaultView || window;
                if (h.getSelection) {
                  var g = h.getSelection(), j = c.textContent.length, L = Math.min(f.start, j), Sl = f.end === void 0 ? L : Math.min(f.end, j);
                  !g.extend && L > Sl && (i = Sl, Sl = L, L = i);
                  var d = vs(
                    c,
                    L
                  ), s = vs(
                    c,
                    Sl
                  );
                  if (d && s && (g.rangeCount !== 1 || g.anchorNode !== d.node || g.anchorOffset !== d.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var m = E.createRange();
                    m.setStart(d.node, d.offset), g.removeAllRanges(), L > Sl ? (g.addRange(m), g.extend(s.node, s.offset)) : (m.setEnd(s.node, s.offset), g.addRange(m));
                  }
                }
              }
            }
            for (E = [], g = c; g = g.parentNode; )
              g.nodeType === 1 && E.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
              var p = E[c];
              p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
            }
          }
          Fn = !!lf, tf = lf = null;
        } finally {
          dl = u, _.p = a, b.T = e;
        }
      }
      l.current = t, Gl = 2;
    }
  }
  function j0() {
    if (Gl === 2) {
      Gl = 0;
      var l = xe, t = Oa, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = b.T, b.T = null;
        var a = _.p;
        _.p = 2;
        var u = dl;
        dl |= 4;
        try {
          c0(l, t.alternate, t);
        } finally {
          dl = u, _.p = a, b.T = e;
        }
      }
      Gl = 3;
    }
  }
  function R0() {
    if (Gl === 4 || Gl === 3) {
      Gl = 0, Tt();
      var l = xe, t = Oa, e = ne, a = p0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Gl = 5 : (Gl = 0, Oa = xe = null, H0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (Ee = null), ci(e), t = t.stateNode, ot && typeof ot.onCommitFiberRoot == "function")
        try {
          ot.onCommitFiberRoot(
            Qa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = b.T, u = _.p, _.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, _.p = u;
        }
      }
      (ne & 3) !== 0 && Gn(), Lt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === Xc ? Eu++ : (Eu = 0, Xc = l) : Eu = 0, xu(0);
    }
  }
  function H0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, uu(t)));
  }
  function Gn() {
    return C0(), j0(), R0(), B0();
  }
  function B0() {
    if (Gl !== 5) return !1;
    var l = xe, t = Gc;
    Gc = 0;
    var e = ci(ne), a = b.T, u = _.p;
    try {
      _.p = 32 > e ? 32 : e, b.T = null, e = Lc, Lc = null;
      var n = xe, i = ne;
      if (Gl = 0, Oa = xe = null, ne = 0, (dl & 6) !== 0) throw Error(r(331));
      var c = dl;
      if (dl |= 4, g0(n.current), y0(
        n,
        n.current,
        i,
        e
      ), dl = c, xu(0, !1), ot && typeof ot.onPostCommitFiberRoot == "function")
        try {
          ot.onPostCommitFiberRoot(Qa, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = u, b.T = a, H0(l, t);
    }
  }
  function q0(l, t, e) {
    t = _t(e, t), t = Sc(l.stateNode, t, 2), l = ge(l, t, 2), l !== null && (Va(l, 2), Lt(l));
  }
  function vl(l, t, e) {
    if (l.tag === 3)
      q0(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          q0(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ee === null || !Ee.has(a))) {
            l = _t(e, l), e = Yo(2), a = ge(t, e, 2), a !== null && (Go(
              e,
              a,
              t,
              l
            ), Va(a, 2), Lt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new mm();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else
      u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (Bc = !0, u.add(e), l = bm.bind(null, l, t, e), t.then(l, l));
  }
  function bm(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, Tl === l && (P & e) === e && (Ol === 4 || Ol === 3 && (P & 62914560) === P && 300 > Il() - jn ? (dl & 2) === 0 && Ua(l, 0) : qc |= e, Ma === P && (Ma = 0)), Lt(l);
  }
  function Y0(l, t) {
    t === 0 && (t = Df()), l = Ge(l, t), l !== null && (Va(l, t), Lt(l));
  }
  function Sm(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Y0(l, e);
  }
  function pm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), Y0(l, e);
  }
  function zm(l, t) {
    return zl(l, t);
  }
  var Ln = null, Ca = null, Kc = !1, Xn = !1, Jc = !1, _e = 0;
  function Lt(l) {
    l !== Ca && l.next === null && (Ca === null ? Ln = Ca = l : Ca = Ca.next = l), Xn = !0, Kc || (Kc = !0, Em());
  }
  function xu(l, t) {
    if (!Jc && Xn) {
      Jc = !0;
      do
        for (var e = !1, a = Ln; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - rt(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Q0(a, n));
          } else
            n = P, n = Vu(
              a,
              a === Tl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Za(a, n) || (e = !0, Q0(a, n));
          a = a.next;
        }
      while (e);
      Jc = !1;
    }
  }
  function Tm() {
    G0();
  }
  function G0() {
    Xn = Kc = !1;
    var l = 0;
    _e !== 0 && jm() && (l = _e);
    for (var t = Il(), e = null, a = Ln; a !== null; ) {
      var u = a.next, n = L0(a, t);
      n === 0 ? (a.next = null, e === null ? Ln = u : e.next = u, u === null && (Ca = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Xn = !0)), a = u;
    }
    Gl !== 0 && Gl !== 5 || xu(l), _e !== 0 && (_e = 0);
  }
  function L0(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - rt(n), c = 1 << i, f = u[i];
      f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = Wr(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = Tl, e = P, e = Vu(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (yl === 2 || yl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && ul(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Za(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && ul(a), ci(e)) {
        case 2:
        case 8:
          e = Of;
          break;
        case 32:
          e = Lu;
          break;
        case 268435456:
          e = Uf;
          break;
        default:
          e = Lu;
      }
      return a = X0.bind(null, l), e = zl(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && ul(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function X0(l, t) {
    if (Gl !== 0 && Gl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Gn() && l.callbackNode !== e)
      return null;
    var a = P;
    return a = Vu(
      l,
      l === Tl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (T0(l, a, t), L0(l, Il()), l.callbackNode != null && l.callbackNode === e ? X0.bind(null, l) : null);
  }
  function Q0(l, t) {
    if (Gn()) return null;
    T0(l, t, !0);
  }
  function Em() {
    Hm(function() {
      (dl & 6) !== 0 ? zl(
        Mf,
        Tm
      ) : G0();
    });
  }
  function wc() {
    if (_e === 0) {
      var l = ga;
      l === 0 && (l = Xu, Xu <<= 1, (Xu & 261888) === 0 && (Xu = 256)), _e = l;
    }
    return _e;
  }
  function Z0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : $u("" + l);
  }
  function V0(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function xm(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Z0(
        (u[tt] || null).action
      ), i = a.submitter;
      i && (t = (t = i[tt] || null) ? Z0(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Iu(
        "action",
        "action",
        null,
        a,
        u
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (_e !== 0) {
                  var f = i ? V0(u, i) : new FormData(u);
                  mc(
                    e,
                    {
                      pending: !0,
                      data: f,
                      method: u.method,
                      action: n
                    },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), f = i ? V0(u, i) : new FormData(u), mc(
                  e,
                  {
                    pending: !0,
                    data: f,
                    method: u.method,
                    action: n
                  },
                  n,
                  f
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var $c = 0; $c < Ui.length; $c++) {
    var Wc = Ui[$c], Am = Wc.toLowerCase(), _m = Wc[0].toUpperCase() + Wc.slice(1);
    jt(
      Am,
      "on" + _m
    );
  }
  jt(ps, "onAnimationEnd"), jt(zs, "onAnimationIteration"), jt(Ts, "onAnimationStart"), jt("dblclick", "onDoubleClick"), jt("focusin", "onFocus"), jt("focusout", "onBlur"), jt(Qd, "onTransitionRun"), jt(Zd, "onTransitionStart"), jt(Vd, "onTransitionCancel"), jt(Es, "onTransitionEnd"), aa("onMouseEnter", ["mouseout", "mouseover"]), aa("onMouseLeave", ["mouseout", "mouseover"]), aa("onPointerEnter", ["pointerout", "pointerover"]), aa("onPointerLeave", ["pointerout", "pointerover"]), He(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), He(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), He("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), He(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), He(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), He(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Au = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Nm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Au)
  );
  function K0(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], f = c.instance, y = c.currentTarget;
            if (c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (S) {
              tn(S);
            }
            u.currentTarget = null, n = f;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], f = c.instance, y = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (S) {
              tn(S);
            }
            u.currentTarget = null, n = f;
          }
      }
    }
  }
  function I(l, t) {
    var e = t[fi];
    e === void 0 && (e = t[fi] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (J0(t, l, 2, !1), e.add(a));
  }
  function kc(l, t, e) {
    var a = 0;
    t && (a |= 4), J0(
      e,
      l,
      a,
      t
    );
  }
  var Qn = "_reactListening" + Math.random().toString(36).slice(2);
  function Fc(l) {
    if (!l[Qn]) {
      l[Qn] = !0, Yf.forEach(function(e) {
        e !== "selectionchange" && (Nm.has(e) || kc(e, !1, l), kc(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Qn] || (t[Qn] = !0, kc("selectionchange", !1, t));
    }
  }
  function J0(l, t, e, a) {
    switch (zr(t)) {
      case 2:
        var u = ty;
        break;
      case 8:
        u = ey;
        break;
      default:
        u = mf;
    }
    e = u.bind(
      null,
      t,
      e,
      l
    ), u = void 0, !gi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
      passive: u
    }) : l.addEventListener(t, e, !1);
  }
  function Ic(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = la(c), i === null) return;
            if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              a = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    kf(function() {
      var y = n, S = vi(e), E = [];
      l: {
        var h = xs.get(l);
        if (h !== void 0) {
          var g = Iu, j = l;
          switch (l) {
            case "keypress":
              if (ku(e) === 0) break l;
            case "keydown":
            case "keyup":
              g = pd;
              break;
            case "focusin":
              j = "focus", g = zi;
              break;
            case "focusout":
              j = "blur", g = zi;
              break;
            case "beforeblur":
            case "afterblur":
              g = zi;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Pf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = fd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Ed;
              break;
            case ps:
            case zs:
            case Ts:
              g = rd;
              break;
            case Es:
              g = Ad;
              break;
            case "scroll":
            case "scrollend":
              g = id;
              break;
            case "wheel":
              g = Nd;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = md;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = ts;
              break;
            case "toggle":
            case "beforetoggle":
              g = Od;
          }
          var L = (t & 4) !== 0, Sl = !L && (l === "scroll" || l === "scrollend"), d = L ? h !== null ? h + "Capture" : null : h;
          L = [];
          for (var s = y, m; s !== null; ) {
            var p = s;
            if (m = p.stateNode, p = p.tag, p !== 5 && p !== 26 && p !== 27 || m === null || d === null || (p = wa(s, d), p != null && L.push(
              _u(s, p, m)
            )), Sl) break;
            s = s.return;
          }
          0 < L.length && (h = new g(
            h,
            j,
            null,
            e,
            S
          ), E.push({ event: h, listeners: L }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", h && e !== yi && (j = e.relatedTarget || e.fromElement) && (la(j) || j[Pe]))
            break l;
          if ((g || h) && (h = S.window === S ? S : (h = S.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (j = e.relatedTarget || e.toElement, g = y, j = j ? la(j) : null, j !== null && (Sl = G(j), L = j.tag, j !== Sl || L !== 5 && L !== 27 && L !== 6) && (j = null)) : (g = null, j = y), g !== j)) {
            if (L = Pf, p = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (L = ts, p = "onPointerLeave", d = "onPointerEnter", s = "pointer"), Sl = g == null ? h : Ja(g), m = j == null ? h : Ja(j), h = new L(
              p,
              s + "leave",
              g,
              e,
              S
            ), h.target = Sl, h.relatedTarget = m, p = null, la(S) === y && (L = new L(
              d,
              s + "enter",
              j,
              e,
              S
            ), L.target = m, L.relatedTarget = Sl, p = L), Sl = p, g && j)
              t: {
                for (L = Mm, d = g, s = j, m = 0, p = d; p; p = L(p))
                  m++;
                p = 0;
                for (var Y = s; Y; Y = L(Y))
                  p++;
                for (; 0 < m - p; )
                  d = L(d), m--;
                for (; 0 < p - m; )
                  s = L(s), p--;
                for (; m--; ) {
                  if (d === s || s !== null && d === s.alternate) {
                    L = d;
                    break t;
                  }
                  d = L(d), s = L(s);
                }
                L = null;
              }
            else L = null;
            g !== null && w0(
              E,
              h,
              g,
              L,
              !1
            ), j !== null && Sl !== null && w0(
              E,
              Sl,
              j,
              L,
              !0
            );
          }
        }
        l: {
          if (h = y ? Ja(y) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file")
            var cl = ss;
          else if (cs(h))
            if (os)
              cl = Gd;
            else {
              cl = qd;
              var R = Bd;
            }
          else
            g = h.nodeName, !g || g.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? y && mi(y.elementType) && (cl = ss) : cl = Yd;
          if (cl && (cl = cl(l, y))) {
            fs(
              E,
              cl,
              e,
              S
            );
            break l;
          }
          R && R(l, h, y), l === "focusout" && y && h.type === "number" && y.memoizedProps.value != null && di(h, "number", h.value);
        }
        switch (R = y ? Ja(y) : window, l) {
          case "focusin":
            (cs(R) || R.contentEditable === "true") && (sa = R, Ni = y, tu = null);
            break;
          case "focusout":
            tu = Ni = sa = null;
            break;
          case "mousedown":
            Mi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mi = !1, bs(E, e, S);
            break;
          case "selectionchange":
            if (Xd) break;
          case "keydown":
          case "keyup":
            bs(E, e, S);
        }
        var $;
        if (Ei)
          l: {
            switch (l) {
              case "compositionstart":
                var ll = "onCompositionStart";
                break l;
              case "compositionend":
                ll = "onCompositionEnd";
                break l;
              case "compositionupdate":
                ll = "onCompositionUpdate";
                break l;
            }
            ll = void 0;
          }
        else
          fa ? ns(l, e) && (ll = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (ll = "onCompositionStart");
        ll && (es && e.locale !== "ko" && (fa || ll !== "onCompositionStart" ? ll === "onCompositionEnd" && fa && ($ = Ff()) : (oe = S, bi = "value" in oe ? oe.value : oe.textContent, fa = !0)), R = Zn(y, ll), 0 < R.length && (ll = new ls(
          ll,
          l,
          null,
          e,
          S
        ), E.push({ event: ll, listeners: R }), $ ? ll.data = $ : ($ = is(e), $ !== null && (ll.data = $)))), ($ = Dd ? Cd(l, e) : jd(l, e)) && (ll = Zn(y, "onBeforeInput"), 0 < ll.length && (R = new ls(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          S
        ), E.push({
          event: R,
          listeners: ll
        }), R.data = $)), xm(
          E,
          l,
          y,
          e,
          S
        );
      }
      K0(E, t);
    });
  }
  function _u(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function Zn(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = wa(l, e), u != null && a.unshift(
        _u(l, u, n)
      ), u = wa(l, t), u != null && a.push(
        _u(l, u, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Mm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function w0(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, f = c.alternate, y = c.stateNode;
      if (c = c.tag, f !== null && f === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (f = y, u ? (y = wa(e, n), y != null && i.unshift(
        _u(e, y, f)
      )) : u || (y = wa(e, n), y != null && i.push(
        _u(e, y, f)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Om = /\r\n?/g, Um = /\u0000|\uFFFD/g;
  function $0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Om, `
`).replace(Um, "");
  }
  function W0(l, t) {
    return t = $0(t), $0(l) === t;
  }
  function bl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || na(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && na(l, "" + a);
        break;
      case "className":
        Ju(l, "class", a);
        break;
      case "tabIndex":
        Ju(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ju(l, e, a);
        break;
      case "style":
        $f(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Ju(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = $u("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (t !== "input" && bl(l, t, "name", u.name, u, null), bl(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), bl(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), bl(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (bl(l, t, "encType", u.encType, u, null), bl(l, t, "method", u.method, u, null), bl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = $u("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Vt);
        break;
      case "onScroll":
        a != null && I("scroll", l);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        e = $u("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        I("beforetoggle", l), I("toggle", l), Ku(l, "popover", a);
        break;
      case "xlinkActuate":
        Zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Zt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Zt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Zt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Zt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ku(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = ud.get(e) || e, Ku(l, e, a));
    }
  }
  function Pc(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        $f(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? na(l, a) : (typeof a == "number" || typeof a == "bigint") && na(l, "" + a);
        break;
      case "onScroll":
        a != null && I("scroll", l);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Vt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Gf.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[tt] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Ku(l, e, a);
          }
    }
  }
  function kl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        I("error", l), I("load", l);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  bl(l, t, n, i, e, null);
              }
          }
        u && bl(l, t, "srcSet", e.srcSet, e, null), a && bl(l, t, "src", e.src, e, null);
        return;
      case "input":
        I("invalid", l);
        var c = n = i = u = null, f = null, y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var S = e[a];
            if (S != null)
              switch (a) {
                case "name":
                  u = S;
                  break;
                case "type":
                  i = S;
                  break;
                case "checked":
                  f = S;
                  break;
                case "defaultChecked":
                  y = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(r(137, t));
                  break;
                default:
                  bl(l, t, a, S, e, null);
              }
          }
        Vf(
          l,
          n,
          c,
          f,
          y,
          i,
          u,
          !1
        );
        return;
      case "select":
        I("invalid", l), a = i = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (c = e[u], c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                bl(l, t, u, c, e, null);
            }
        t = n, e = i, l.multiple = !!a, t != null ? ua(l, !!a, t, !1) : e != null && ua(l, !!a, e, !0);
        return;
      case "textarea":
        I("invalid", l), n = u = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                bl(l, t, i, c, e, null);
            }
        Jf(l, a, u, n);
        return;
      case "option":
        for (f in e)
          e.hasOwnProperty(f) && (a = e[f], a != null) && (f === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : bl(l, t, f, a, e, null));
        return;
      case "dialog":
        I("beforetoggle", l), I("toggle", l), I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Au.length; a++)
          I(Au[a], l);
        break;
      case "image":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", l), I("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && (a = e[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                bl(l, t, y, a, e, null);
            }
        return;
      default:
        if (mi(t)) {
          for (S in e)
            e.hasOwnProperty(S) && (a = e[S], a !== void 0 && Pc(
              l,
              t,
              S,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && bl(l, t, c, a, e, null));
  }
  function Dm(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, i = null, c = null, f = null, y = null, S = null;
        for (g in e) {
          var E = e[g];
          if (e.hasOwnProperty(g) && E != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = E;
              default:
                a.hasOwnProperty(g) || bl(l, t, g, null, a, E);
            }
        }
        for (var h in a) {
          var g = a[h];
          if (E = e[h], a.hasOwnProperty(h) && (g != null || E != null))
            switch (h) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                y = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(r(137, t));
                break;
              default:
                g !== E && bl(
                  l,
                  t,
                  h,
                  g,
                  a,
                  E
                );
            }
        }
        ri(
          l,
          i,
          c,
          f,
          y,
          S,
          n,
          u
        );
        return;
      case "select":
        g = i = c = h = null;
        for (n in e)
          if (f = e[n], e.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                a.hasOwnProperty(n) || bl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  f
                );
            }
        for (u in a)
          if (n = a[u], f = e[u], a.hasOwnProperty(u) && (n != null || f != null))
            switch (u) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && bl(
                  l,
                  t,
                  u,
                  n,
                  a,
                  f
                );
            }
        t = c, e = i, a = g, h != null ? ua(l, !!e, h, !1) : !!a != !!e && (t != null ? ua(l, !!e, t, !0) : ua(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        g = h = null;
        for (c in e)
          if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                bl(l, t, c, null, a, u);
            }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                h = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && bl(l, t, i, u, a, n);
            }
        Kf(l, h, g);
        return;
      case "option":
        for (var j in e)
          h = e[j], e.hasOwnProperty(j) && h != null && !a.hasOwnProperty(j) && (j === "selected" ? l.selected = !1 : bl(
            l,
            t,
            j,
            null,
            a,
            h
          ));
        for (f in a)
          h = a[f], g = e[f], a.hasOwnProperty(f) && h !== g && (h != null || g != null) && (f === "selected" ? l.selected = h && typeof h != "function" && typeof h != "symbol" : bl(
            l,
            t,
            f,
            h,
            a,
            g
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var L in e)
          h = e[L], e.hasOwnProperty(L) && h != null && !a.hasOwnProperty(L) && bl(l, t, L, null, a, h);
        for (y in a)
          if (h = a[y], g = e[y], a.hasOwnProperty(y) && h !== g && (h != null || g != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(r(137, t));
                break;
              default:
                bl(
                  l,
                  t,
                  y,
                  h,
                  a,
                  g
                );
            }
        return;
      default:
        if (mi(t)) {
          for (var Sl in e)
            h = e[Sl], e.hasOwnProperty(Sl) && h !== void 0 && !a.hasOwnProperty(Sl) && Pc(
              l,
              t,
              Sl,
              void 0,
              a,
              h
            );
          for (S in a)
            h = a[S], g = e[S], !a.hasOwnProperty(S) || h === g || h === void 0 && g === void 0 || Pc(
              l,
              t,
              S,
              h,
              a,
              g
            );
          return;
        }
    }
    for (var d in e)
      h = e[d], e.hasOwnProperty(d) && h != null && !a.hasOwnProperty(d) && bl(l, t, d, null, a, h);
    for (E in a)
      h = a[E], g = e[E], !a.hasOwnProperty(E) || h === g || h == null && g == null || bl(l, t, E, h, a, g);
  }
  function k0(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Cm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && k0(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var f = e[a], y = f.startTime;
            if (y > c) break;
            var S = f.transferSize, E = f.initiatorType;
            S && k0(E) && (f = f.responseEnd, i += S * (f < c ? 1 : (c - y) / (f - y)));
          }
          if (--a, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var lf = null, tf = null;
  function Vn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function F0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function I0(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function ef(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var af = null;
  function jm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === af ? !1 : (af = l, !0) : (af = null, !1);
  }
  var P0 = typeof setTimeout == "function" ? setTimeout : void 0, Rm = typeof clearTimeout == "function" ? clearTimeout : void 0, lr = typeof Promise == "function" ? Promise : void 0, Hm = typeof queueMicrotask == "function" ? queueMicrotask : typeof lr < "u" ? function(l) {
    return lr.resolve(null).then(l).catch(Bm);
  } : P0;
  function Bm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ne(l) {
    return l === "head";
  }
  function tr(l, t) {
    var e = t, a = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(u), Ba(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          Nu(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, Nu(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Ka] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && Nu(l.ownerDocument.body);
      e = u;
    } while (e);
    Ba(t);
  }
  function er(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a;
    } while (e);
  }
  function uf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          uf(e), si(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function qm(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Ka])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Dt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Ym(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Dt(l.nextSibling), l === null)) return null;
    return l;
  }
  function ar(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Dt(l.nextSibling), l === null)) return null;
    return l;
  }
  function nf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function cf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Gm(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Dt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var ff = null;
  function ur(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return Dt(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function nr(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else e !== "/$" && e !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ir(l, t, e) {
    switch (t = Vn(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function Nu(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    si(l);
  }
  var Ct = /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ new Set();
  function Kn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ie = _.d;
  _.d = {
    f: Lm,
    r: Xm,
    D: Qm,
    C: Zm,
    L: Vm,
    m: Km,
    X: wm,
    S: Jm,
    M: $m
  };
  function Lm() {
    var l = ie.f(), t = Bn();
    return l || t;
  }
  function Xm(l) {
    var t = ta(l);
    t !== null && t.tag === 5 && t.type === "form" ? xo(t) : ie.r(l);
  }
  var ja = typeof document > "u" ? null : document;
  function fr(l, t, e) {
    var a = ja;
    if (a && typeof t == "string" && t) {
      var u = xt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), cr.has(u) || (cr.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), kl(t, "link", l), Ll(t), a.head.appendChild(t)));
    }
  }
  function Qm(l) {
    ie.D(l), fr("dns-prefetch", l, null);
  }
  function Zm(l, t) {
    ie.C(l, t), fr("preconnect", l, t);
  }
  function Vm(l, t, e) {
    ie.L(l, t, e);
    var a = ja;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + xt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + xt(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + xt(
        e.imageSizes
      ) + '"]')) : u += '[href="' + xt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Ra(l);
          break;
        case "script":
          n = Ha(l);
      }
      Ct.has(n) || (l = D(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), Ct.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(Mu(n)) || t === "script" && a.querySelector(Ou(n)) || (t = a.createElement("link"), kl(t, "link", l), Ll(t), a.head.appendChild(t)));
    }
  }
  function Km(l, t) {
    ie.m(l, t);
    var e = ja;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + xt(a) + '"][href="' + xt(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ha(l);
      }
      if (!Ct.has(n) && (l = D({ rel: "modulepreload", href: l }, t), Ct.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Ou(n)))
              return;
        }
        a = e.createElement("link"), kl(a, "link", l), Ll(a), e.head.appendChild(a);
      }
    }
  }
  function Jm(l, t, e) {
    ie.S(l, t, e);
    var a = ja;
    if (a && l) {
      var u = ea(a).hoistableStyles, n = Ra(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          Mu(n)
        ))
          c.loading = 5;
        else {
          l = D(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = Ct.get(n)) && sf(l, e);
          var f = i = a.createElement("link");
          Ll(f), kl(f, "link", l), f._p = new Promise(function(y, S) {
            f.onload = y, f.onerror = S;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Jn(i, t, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(n, i);
      }
    }
  }
  function wm(l, t) {
    ie.X(l, t);
    var e = ja;
    if (e && l) {
      var a = ea(e).hoistableScripts, u = Ha(l), n = a.get(u);
      n || (n = e.querySelector(Ou(u)), n || (l = D({ src: l, async: !0 }, t), (t = Ct.get(u)) && of(l, t), n = e.createElement("script"), Ll(n), kl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function $m(l, t) {
    ie.M(l, t);
    var e = ja;
    if (e && l) {
      var a = ea(e).hoistableScripts, u = Ha(l), n = a.get(u);
      n || (n = e.querySelector(Ou(u)), n || (l = D({ src: l, async: !0, type: "module" }, t), (t = Ct.get(u)) && of(l, t), n = e.createElement("script"), Ll(n), kl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function sr(l, t, e, a) {
    var u = (u = W.current) ? Kn(u) : null;
    if (!u) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Ra(e.href), e = ea(
          u
        ).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Ra(e.href);
          var n = ea(
            u
          ).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = u.querySelector(
            Mu(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), Ct.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Ct.set(l, e), n || Wm(
            u,
            l,
            e,
            i.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return i;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ha(e), e = ea(
          u
        ).hoistableScripts, a = e.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function Ra(l) {
    return 'href="' + xt(l) + '"';
  }
  function Mu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function or(l) {
    return D({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Wm(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), kl(t, "link", e), Ll(t), l.head.appendChild(t));
  }
  function Ha(l) {
    return '[src="' + xt(l) + '"]';
  }
  function Ou(l) {
    return "script[async]" + l;
  }
  function rr(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + xt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Ll(a), a;
          var u = D({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Ll(a), kl(a, "style", u), Jn(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = Ra(e.href);
          var n = l.querySelector(
            Mu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Ll(n), n;
          a = or(e), (u = Ct.get(u)) && sf(a, u), n = (l.ownerDocument || l).createElement("link"), Ll(n);
          var i = n;
          return i._p = new Promise(function(c, f) {
            i.onload = c, i.onerror = f;
          }), kl(n, "link", a), t.state.loading |= 4, Jn(n, e.precedence, l), t.instance = n;
        case "script":
          return n = Ha(e.src), (u = l.querySelector(
            Ou(n)
          )) ? (t.instance = u, Ll(u), u) : (a = e, (u = Ct.get(n)) && (a = D({}, e), of(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Ll(u), kl(u, "link", a), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Jn(a, e.precedence, l));
    return t.instance;
  }
  function Jn(l, t, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function sf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function of(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var wn = null;
  function dr(l, t, e) {
    if (wn === null) {
      var a = /* @__PURE__ */ new Map(), u = wn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = wn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Ka] || n[Jl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function mr(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function km(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function yr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Fm(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Ra(a.href), n = t.querySelector(
          Mu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = $n.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, Ll(n);
          return;
        }
        n = t.ownerDocument || t, a = or(a), (u = Ct.get(u)) && sf(a, u), n = n.createElement("link"), Ll(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), kl(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = $n.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var rf = 0;
  function Im(l, t) {
    return l.stylesheets && l.count === 0 && kn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && kn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && rf === 0 && (rf = 62500 * Cm());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && kn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > rf ? 50 : 800) + t
      );
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function $n() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) kn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Wn = null;
  function kn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Wn = /* @__PURE__ */ new Map(), t.forEach(Pm, l), Wn = null, $n.call(l));
  }
  function Pm(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Wn.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Wn.set(l, e);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = $n.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Uu = {
    $$typeof: pl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0
  };
  function ly(l, t, e, a, u, n, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ni(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ni(0), this.hiddenUpdates = ni(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function vr(l, t, e, a, u, n, i, c, f, y, S, E) {
    return l = new ly(
      l,
      t,
      e,
      i,
      f,
      y,
      S,
      E,
      c
    ), t = 1, n === !0 && (t |= 24), n = mt(3, null, null, t), l.current = n, n.stateNode = l, t = Zi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, wi(n), l;
  }
  function hr(l) {
    return l ? (l = da, l) : da;
  }
  function gr(l, t, e, a, u, n) {
    u = hr(u), a.context === null ? a.context = u : a.pendingContext = u, a = he(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ge(l, a, t), e !== null && (ct(e, l, t), fu(e, l, t));
  }
  function br(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function df(l, t) {
    br(l, t), (l = l.alternate) && br(l, t);
  }
  function Sr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ge(l, 67108864);
      t !== null && ct(t, l, 67108864), df(l, 67108864);
    }
  }
  function pr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = bt();
      t = ii(t);
      var e = Ge(l, t);
      e !== null && ct(e, l, t), df(l, t);
    }
  }
  var Fn = !0;
  function ty(l, t, e, a) {
    var u = b.T;
    b.T = null;
    var n = _.p;
    try {
      _.p = 2, mf(l, t, e, a);
    } finally {
      _.p = n, b.T = u;
    }
  }
  function ey(l, t, e, a) {
    var u = b.T;
    b.T = null;
    var n = _.p;
    try {
      _.p = 8, mf(l, t, e, a);
    } finally {
      _.p = n, b.T = u;
    }
  }
  function mf(l, t, e, a) {
    if (Fn) {
      var u = yf(a);
      if (u === null)
        Ic(
          l,
          t,
          a,
          In,
          e
        ), Tr(l, a);
      else if (uy(
        u,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (Tr(l, a), t & 4 && -1 < ay.indexOf(l)) {
        for (; u !== null; ) {
          var n = ta(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = Re(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << 31 - rt(i);
                      c.entanglements[1] |= f, i &= ~f;
                    }
                    Lt(n), (dl & 6) === 0 && (Rn = Il() + 500, xu(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Ge(n, 2), c !== null && ct(c, n, 2), Bn(), df(n, 2);
            }
          if (n = yf(a), n === null && Ic(
            l,
            t,
            a,
            In,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else
        Ic(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function yf(l) {
    return l = vi(l), vf(l);
  }
  var In = null;
  function vf(l) {
    if (In = null, l = la(l), l !== null) {
      var t = G(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = Z(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = el(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return In = l, null;
  }
  function zr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Gu()) {
          case Mf:
            return 2;
          case Of:
            return 8;
          case Lu:
          case Zr:
            return 32;
          case Uf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hf = !1, Me = null, Oe = null, Ue = null, Du = /* @__PURE__ */ new Map(), Cu = /* @__PURE__ */ new Map(), De = [], ay = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Tr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Me = null;
        break;
      case "dragenter":
      case "dragleave":
        Oe = null;
        break;
      case "mouseover":
      case "mouseout":
        Ue = null;
        break;
      case "pointerover":
      case "pointerout":
        Du.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cu.delete(t.pointerId);
    }
  }
  function ju(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = ta(t), t !== null && Sr(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function uy(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return Me = ju(
          Me,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return Oe = ju(
          Oe,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return Ue = ju(
          Ue,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Du.set(
          n,
          ju(
            Du.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Cu.set(
          n,
          ju(
            Cu.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Er(l) {
    var t = la(l.target);
    if (t !== null) {
      var e = G(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = Z(e), t !== null) {
            l.blockedOn = t, Bf(l.priority, function() {
              pr(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = el(e), t !== null) {
            l.blockedOn = t, Bf(l.priority, function() {
              pr(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Pn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = yf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        yi = a, e.target.dispatchEvent(a), yi = null;
      } else
        return t = ta(e), t !== null && Sr(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function xr(l, t, e) {
    Pn(l) && e.delete(t);
  }
  function ny() {
    hf = !1, Me !== null && Pn(Me) && (Me = null), Oe !== null && Pn(Oe) && (Oe = null), Ue !== null && Pn(Ue) && (Ue = null), Du.forEach(xr), Cu.forEach(xr);
  }
  function li(l, t) {
    l.blockedOn === t && (l.blockedOn = null, hf || (hf = !0, v.unstable_scheduleCallback(
      v.unstable_NormalPriority,
      ny
    )));
  }
  var ti = null;
  function Ar(l) {
    ti !== l && (ti = l, v.unstable_scheduleCallback(
      v.unstable_NormalPriority,
      function() {
        ti === l && (ti = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], u = l[t + 2];
          if (typeof a != "function") {
            if (vf(a || e) === null)
              continue;
            break;
          }
          var n = ta(e);
          n !== null && (l.splice(t, 3), t -= 3, mc(
            n,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function Ba(l) {
    function t(f) {
      return li(f, l);
    }
    Me !== null && li(Me, l), Oe !== null && li(Oe, l), Ue !== null && li(Ue, l), Du.forEach(t), Cu.forEach(t);
    for (var e = 0; e < De.length; e++) {
      var a = De[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < De.length && (e = De[0], e.blockedOn === null); )
      Er(e), e.blockedOn === null && De.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], i = u[tt] || null;
        if (typeof n == "function")
          i || Ar(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[tt] || null)
              c = i.formAction;
            else if (vf(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Ar(e);
        }
      }
  }
  function _r() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function gf(l) {
    this._internalRoot = l;
  }
  ei.prototype.render = gf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var e = t.current, a = bt();
    gr(e, a, l, t, null, null);
  }, ei.prototype.unmount = gf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      gr(l.current, 2, null, l, null, null), Bn(), t[Pe] = null;
    }
  };
  function ei(l) {
    this._internalRoot = l;
  }
  ei.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Hf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < De.length && t !== 0 && t < De[e].priority; e++) ;
      De.splice(e, 0, l), e === 0 && Er(l);
    }
  };
  var Nr = T.version;
  if (Nr !== "19.2.4")
    throw Error(
      r(
        527,
        Nr,
        "19.2.4"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = x(t), l = l !== null ? w(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var iy = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ai.isDisabled && ai.supportsFiber)
      try {
        Qa = ai.inject(
          iy
        ), ot = ai;
      } catch {
      }
  }
  return Hu.createRoot = function(l, t) {
    if (!H(l)) throw Error(r(299));
    var e = !1, a = "", u = Ro, n = Ho, i = Bo;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = vr(
      l,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      u,
      n,
      i,
      _r
    ), l[Pe] = t.current, Fc(l), new gf(t);
  }, Hu.hydrateRoot = function(l, t, e) {
    if (!H(l)) throw Error(r(299));
    var a = !1, u = "", n = Ro, i = Ho, c = Bo, f = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (f = e.formState)), t = vr(
      l,
      1,
      !0,
      t,
      e ?? null,
      a,
      u,
      f,
      n,
      i,
      c,
      _r
    ), t.context = hr(null), e = t.current, a = bt(), a = ii(a), u = he(a), u.callback = null, ge(e, u, a), e = a, t.current.lanes = e, Va(t, e), Lt(t), l[Pe] = t.current, Fc(l), new ei(t);
  }, Hu.version = "19.2.4", Hu;
}
var qr;
function hy() {
  if (qr) return pf.exports;
  qr = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (T) {
        console.error(T);
      }
  }
  return v(), pf.exports = vy(), pf.exports;
}
var gy = hy();
const by = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sy = (v) => v.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (T, N, r) => r ? r.toUpperCase() : N.toLowerCase()
), Yr = (v) => {
  const T = Sy(v);
  return T.charAt(0).toUpperCase() + T.slice(1);
}, Xr = (...v) => v.filter((T, N, r) => !!T && T.trim() !== "" && r.indexOf(T) === N).join(" ").trim(), py = (v) => {
  for (const T in v)
    if (T.startsWith("aria-") || T === "role" || T === "title")
      return !0;
};
var zy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Ty = Q.forwardRef(
  ({
    color: v = "currentColor",
    size: T = 24,
    strokeWidth: N = 2,
    absoluteStrokeWidth: r,
    className: H = "",
    children: G,
    iconNode: Z,
    ...el
  }, U) => Q.createElement(
    "svg",
    {
      ref: U,
      ...zy,
      width: T,
      height: T,
      stroke: v,
      strokeWidth: r ? Number(N) * 24 / Number(T) : N,
      className: Xr("lucide", H),
      ...!G && !py(el) && { "aria-hidden": "true" },
      ...el
    },
    [
      ...Z.map(([x, w]) => Q.createElement(x, w)),
      ...Array.isArray(G) ? G : [G]
    ]
  )
);
const ce = (v, T) => {
  const N = Q.forwardRef(
    ({ className: r, ...H }, G) => Q.createElement(Ty, {
      ref: G,
      iconNode: T,
      className: Xr(
        `lucide-${by(Yr(v))}`,
        `lucide-${v}`,
        r
      ),
      ...H
    })
  );
  return N.displayName = Yr(v), N;
};
const Ey = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], xy = ce("chevron-down", Ey);
const Ay = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Gr = ce("circle-alert", Ay);
const _y = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
], Ny = ce("inbox", _y);
const My = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], Oy = ce("layers", My);
const Uy = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Dy = ce("plus", Uy);
const Cy = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], jy = ce("save", Cy);
const Ry = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Hy = ce("trash-2", Ry);
const By = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
], qy = ce("wallet", By);
const Yy = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Gy = ce("x", Yy);
function Ly(v) {
  return typeof v == "string" && v.startsWith("/api/");
}
async function qu(v, T = {}) {
  const N = await fetch(v, {
    credentials: "same-origin",
    ...T
  });
  if (N.status === 401)
    throw window.location.href = "/login", new Error("Sessão expirada. Faça login novamente.");
  if (!N.ok) {
    let H = "Erro inesperado.";
    try {
      H = (await N.json()).error || H;
    } catch {
      H = N.statusText || H;
    }
    const G = new Error(H);
    throw G.status = N.status, G;
  }
  if (N.status === 204) return null;
  const r = N.headers.get("content-type") || "";
  if (Ly(v) && !r.includes("application/json"))
    throw new Error("API indisponivel ou desatualizada. Reinicie o servidor.");
  return N.json();
}
function Xy() {
  return qu("/api/auth/status");
}
function Qy() {
  return qu("/api/topicos");
}
function Zy(v) {
  return qu("/api/topicos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(v)
  });
}
function Vy(v, T) {
  return qu(`/api/topicos/${encodeURIComponent(v)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(T)
  });
}
function Ky(v) {
  return qu(`/api/topicos/${encodeURIComponent(v)}`, {
    method: "DELETE"
  });
}
function Jy(v) {
  if (typeof v != "function") return () => {
  };
  const T = () => document.body.classList.contains("theme-dark"), N = () => v(T());
  N();
  const r = new MutationObserver(() => {
    N();
  });
  return r.observe(document.body, {
    attributes: !0,
    attributeFilter: ["class"]
  }), () => r.disconnect();
}
function wy({
  canManageConfig: v,
  isEditMode: T,
  onToggleEditMode: N,
  onOpenCreateModal: r,
  isDark: H
}) {
  const G = H ? "text-slate-300" : "text-slate-600", Z = H ? "text-slate-100" : "text-slate-900", el = H ? "border-slate-700/60 bg-slate-900/80 text-slate-200" : "border-slate-300/80 bg-white/90 text-slate-700", U = T ? "bg-indigo-500" : H ? "bg-slate-700" : "bg-slate-300";
  return /* @__PURE__ */ A.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ A.jsx("h3", { className: `text-4xl font-extrabold tracking-tight md:text-5xl ${Z}`, children: "Configurações" }),
      /* @__PURE__ */ A.jsx("p", { className: `max-w-4xl text-sm leading-relaxed md:text-[1.02rem] ${G}`, children: "Faça a gestão dos tópicos, orçamentos e permissões de lançamento. O total é recalculado em tempo real conforme o filtro e os campos editados." })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "flex justify-start md:justify-end", children: /* @__PURE__ */ A.jsxs("div", { className: "grid w-full max-w-[470px] grid-cols-1 gap-3 sm:grid-cols-2", children: [
      v && T ? /* @__PURE__ */ A.jsxs(
        "button",
        {
          type: "button",
          onClick: r,
          className: "group inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-indigo-300/25 bg-gradient-to-r from-indigo-600 to-blue-600 px-5 text-[1.02rem] font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] transition-all hover:from-indigo-500 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]",
          children: [
            /* @__PURE__ */ A.jsx(Dy, { size: 20, className: "transition-transform duration-300 group-hover:rotate-90" }),
            "Acrescentar Tópico"
          ]
        }
      ) : /* @__PURE__ */ A.jsx("div", { className: "hidden sm:block", "aria-hidden": "true" }),
      /* @__PURE__ */ A.jsxs(
        "div",
        {
          className: `inline-flex h-14 items-center justify-between rounded-2xl border px-5 shadow-lg backdrop-blur ${el}`,
          children: [
            /* @__PURE__ */ A.jsx("span", { className: `text-[1.02rem] font-semibold ${T ? "text-indigo-400" : G}`, children: "Modo Edição" }),
            /* @__PURE__ */ A.jsx(
              "button",
              {
                type: "button",
                role: "switch",
                "aria-checked": T,
                onClick: N,
                className: `relative inline-flex h-8 w-14 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-300 ${U}`,
                children: /* @__PURE__ */ A.jsx(
                  "span",
                  {
                    className: `pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow transition duration-300 ${T ? "translate-x-6" : "translate-x-0"}`
                  }
                )
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
function $y({ filterGroup: v, groups: T, onChangeFilter: N, isDark: r }) {
  const H = Q.useRef(null), G = () => {
    const Z = H.current;
    if (Z) {
      if (Z.focus(), typeof Z.showPicker == "function")
        try {
          Z.showPicker();
          return;
        } catch {
        }
      Z.click();
    }
  };
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: `col-span-1 flex min-h-[142px] flex-col justify-center rounded-2xl border p-5 shadow-xl backdrop-blur-xl md:col-span-2 md:p-6 ${r ? "border-slate-800/65 bg-slate-900/45" : "border-slate-200/90 bg-white/90"}`,
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: `mb-3 inline-flex w-fit items-center justify-start gap-2 text-xs font-bold uppercase tracking-[0.08em] ${r ? "text-slate-400" : "text-slate-500"}`,
            children: [
              /* @__PURE__ */ A.jsx(Oy, { size: 14 }),
              "Filtrar por Macro-Topico"
            ]
          }
        ),
        /* @__PURE__ */ A.jsxs("div", { className: "relative w-full max-w-[360px]", children: [
          /* @__PURE__ */ A.jsx(
            "select",
            {
              ref: H,
              value: v,
              onChange: (Z) => N(Z.target.value),
              className: `h-12 w-full appearance-none rounded-xl border px-4 py-3 text-[1.04rem] font-semibold leading-none outline-none transition-all ${r ? "border-slate-700/60 bg-slate-950/50 text-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40" : "border-slate-300 bg-white text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25"}`,
              children: T.map((Z) => /* @__PURE__ */ A.jsx("option", { value: Z.value, children: Z.label }, Z.value))
            }
          ),
          /* @__PURE__ */ A.jsx(
            "button",
            {
              type: "button",
              onClick: G,
              "aria-label": "Abrir lista de macro-topicos",
              className: "absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center",
              children: /* @__PURE__ */ A.jsx(
                xy,
                {
                  size: 16,
                  className: r ? "text-slate-500" : "text-slate-400"
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
function Wy({ totalBudget: v, formatCurrency: T, filterLabel: N, isDark: r }) {
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: `group relative col-span-1 flex min-h-[142px] flex-col justify-center overflow-hidden rounded-2xl border p-6 shadow-xl backdrop-blur-xl ${r ? "border-slate-800/60 bg-gradient-to-br from-slate-900/85 to-slate-900/45" : "border-slate-200 bg-gradient-to-br from-white to-slate-100"}`,
      children: [
        /* @__PURE__ */ A.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-all group-hover:bg-indigo-500/20" }),
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: `relative z-10 mb-2 inline-flex w-fit items-center justify-start gap-2 text-xs font-bold uppercase tracking-[0.08em] ${r ? "text-slate-400" : "text-slate-500"}`,
            children: [
              /* @__PURE__ */ A.jsx(qy, { size: 14, className: "text-indigo-400" }),
              "Orcamento Total (",
              N,
              ")"
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            className: `relative z-10 text-left text-[2.45rem] font-extrabold leading-none ${r ? "text-indigo-200" : "text-indigo-900"}`,
            children: T(v)
          }
        )
      ]
    }
  );
}
function ky({ filterLabel: v, isDark: T }) {
  return /* @__PURE__ */ A.jsx("tr", { children: /* @__PURE__ */ A.jsx("td", { colSpan: 6, className: "px-6 py-16 text-center", children: /* @__PURE__ */ A.jsxs("div", { className: `flex flex-col items-center justify-center ${T ? "text-slate-500" : "text-slate-400"}`, children: [
    /* @__PURE__ */ A.jsx(Ny, { size: 48, className: "mb-4 opacity-50" }),
    /* @__PURE__ */ A.jsx("p", { className: `text-lg font-semibold ${T ? "text-slate-200" : "text-slate-700"}`, children: "Nenhum tópico encontrado" }),
    /* @__PURE__ */ A.jsxs("p", { className: "mt-1 text-sm", children: [
      'Não existem tópicos para o filtro "',
      v,
      '".'
    ] })
  ] }) }) });
}
function Fy(v) {
  return String(v ?? "").trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function Iy(v) {
  const T = Fy(v);
  return T === "team hires" || T === "contratacoes da equipe";
}
function Lr({ checked: v, disabled: T, onClick: N, tone: r = "indigo", isDark: H }) {
  const G = r === "emerald" ? "bg-emerald-500" : "bg-indigo-500", Z = H ? "bg-slate-700" : "bg-slate-300";
  return /* @__PURE__ */ A.jsx(
    "button",
    {
      type: "button",
      disabled: T,
      onClick: N,
      className: `relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors ${v ? G : Z} ${T ? "cursor-default opacity-60" : "cursor-pointer"}`,
      children: /* @__PURE__ */ A.jsx(
        "span",
        {
          className: `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ${v ? "translate-x-5" : "translate-x-0"}`
        }
      )
    }
  );
}
function Py({
  topic: v,
  draft: T,
  isEditMode: N,
  canManageConfig: r,
  isDark: H,
  isSaving: G,
  isDeleting: Z,
  onFieldChange: el,
  onToggleField: U,
  onSave: x,
  onDelete: w,
  getGroupLabel: D,
  groupSuggestionsListId: sl
}) {
  const al = r && N, Nl = Iy(T?.grupo), ol = al ? H ? "text-slate-200 border border-slate-700/40 hover:border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/60 bg-slate-950/40" : "text-slate-900 border border-slate-300 hover:border-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 bg-white" : H ? "text-slate-300 border border-transparent bg-transparent cursor-default" : "text-slate-700 border border-transparent bg-transparent cursor-default";
  return /* @__PURE__ */ A.jsxs("tr", { className: `group/row transition-colors ${H ? "hover:bg-slate-800/30" : "hover:bg-slate-100/70"}`, children: [
    /* @__PURE__ */ A.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ A.jsx(
      "input",
      {
        type: "text",
        value: T.nome,
        readOnly: !al,
        onChange: (Cl) => el(v.id, "nome", Cl.target.value),
        className: `w-full rounded-md px-3 py-1.5 text-sm font-semibold outline-none transition-all ${ol}`
      }
    ) }),
    /* @__PURE__ */ A.jsx("td", { className: "px-6 py-4", children: al ? /* @__PURE__ */ A.jsx(
      "input",
      {
        type: "text",
        list: sl,
        value: T?.grupo ?? "",
        onChange: (Cl) => el(v.id, "grupo", Cl.target.value),
        className: `w-full rounded-md px-3 py-1.5 text-sm font-semibold outline-none transition-all ${ol}`,
        placeholder: "Informe o grupo"
      }
    ) : /* @__PURE__ */ A.jsx(
      "span",
      {
        className: `whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${H ? "border-slate-700/50 bg-slate-800/60 text-slate-300" : "border-slate-300 bg-slate-100 text-slate-700"}`,
        children: D(v.grupo)
      }
    ) }),
    /* @__PURE__ */ A.jsx("td", { className: "px-6 py-4 text-right", children: /* @__PURE__ */ A.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ A.jsx("span", { className: `text-xs font-semibold ${H ? "text-slate-500" : "text-slate-400"}`, children: "R$" }),
      /* @__PURE__ */ A.jsx(
        "input",
        {
          type: "number",
          min: "0",
          step: "0.01",
          value: T.orcamentoProgramaBRL,
          readOnly: !al,
          onChange: (Cl) => el(v.id, "orcamentoProgramaBRL", Cl.target.value),
          className: `w-32 rounded-md px-3 py-1.5 text-right font-mono text-sm outline-none transition-all ${ol}`
        }
      )
    ] }) }),
    /* @__PURE__ */ A.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ A.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ A.jsx(
      Lr,
      {
        checked: !!T.incluirNoResumo,
        disabled: !al,
        tone: "indigo",
        isDark: H,
        onClick: () => U(v.id, "incluirNoResumo")
      }
    ) }) }),
    /* @__PURE__ */ A.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ A.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ A.jsx(
      Lr,
      {
        checked: !!T.permitirLancamento,
        disabled: !al || Nl,
        tone: "emerald",
        isDark: H,
        onClick: () => U(v.id, "permitirLancamento")
      }
    ) }) }),
    /* @__PURE__ */ A.jsx("td", { className: "px-6 py-4 text-right", children: al ? /* @__PURE__ */ A.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ A.jsxs(
        "button",
        {
          type: "button",
          disabled: G,
          onClick: () => x(v.id),
          className: "inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60",
          title: "Salvar alterações",
          children: [
            /* @__PURE__ */ A.jsx(jy, { size: 16 }),
            /* @__PURE__ */ A.jsx("span", { children: G ? "Salvando..." : "Salvar" })
          ]
        }
      ),
      /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          disabled: Z,
          onClick: () => w(v.id),
          className: `inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${H ? "text-slate-400 hover:bg-rose-500/15 hover:text-rose-400" : "text-slate-500 hover:bg-rose-100 hover:text-rose-600"} disabled:cursor-not-allowed disabled:opacity-50`,
          title: "Remover tópico",
          children: /* @__PURE__ */ A.jsx(Hy, { size: 18 })
        }
      )
    ] }) : /* @__PURE__ */ A.jsx("span", { className: `text-xs font-semibold ${H ? "text-slate-500" : "text-slate-400"}`, children: r ? "Ative o modo edição" : "Somente leitura" }) })
  ] });
}
function lv({
  filteredTopics: v,
  drafts: T,
  filterLabel: N,
  isEditMode: r,
  canManageConfig: H,
  isDark: G,
  savingIds: Z,
  deletingIds: el,
  isSavingAllTopics: U,
  pendingTotalCount: x,
  pendingVisibleCount: w,
  getGroupLabel: D,
  groupSuggestions: sl,
  onFieldChange: al,
  onToggleField: Nl,
  onSaveAllTopics: ol,
  onSaveTopic: Cl,
  onDeleteTopic: ml
}) {
  const ft = Array.isArray(sl) ? sl : [];
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: `overflow-hidden rounded-2xl border shadow-2xl ${G ? "border-slate-800/60 bg-slate-900/45" : "border-slate-200 bg-white/95"}`,
      children: [
        H && r ? /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: `flex flex-col items-start justify-between gap-3 border-b px-5 py-4 sm:flex-row sm:items-center ${G ? "border-slate-800/60 bg-slate-950/35" : "border-slate-200 bg-slate-50"}`,
            children: [
              /* @__PURE__ */ A.jsxs("span", { className: `text-xs font-semibold uppercase tracking-[0.12em] ${G ? "text-slate-400" : "text-slate-500"}`, children: [
                "Alteracoes pendentes: ",
                x,
                w !== x ? ` (${w} no filtro)` : ""
              ] }),
              /* @__PURE__ */ A.jsx(
                "button",
                {
                  type: "button",
                  onClick: ol,
                  disabled: U || x === 0,
                  className: "inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60",
                  children: U ? "Salvando..." : x > 0 ? `Salvar tudo (${x})` : "Salvar tudo"
                }
              )
            ]
          }
        ) : null,
        /* @__PURE__ */ A.jsxs("div", { className: "overflow-x-auto", children: [
          /* @__PURE__ */ A.jsx("datalist", { id: "config-group-suggestions", children: ft.map((pl) => /* @__PURE__ */ A.jsx("option", { value: pl }, pl)) }),
          /* @__PURE__ */ A.jsxs("table", { className: "w-full border-collapse", children: [
            /* @__PURE__ */ A.jsx("thead", { children: /* @__PURE__ */ A.jsxs(
              "tr",
              {
                className: `border-b text-left text-xs font-bold uppercase tracking-[0.14em] ${G ? "border-slate-800/60 bg-slate-950/55 text-slate-400" : "border-slate-200 bg-slate-100 text-slate-500"}`,
                children: [
                  /* @__PURE__ */ A.jsx("th", { className: "whitespace-nowrap px-6 py-5", children: "Tópico" }),
                  /* @__PURE__ */ A.jsx("th", { className: "whitespace-nowrap px-6 py-5", children: "Grupo" }),
                  /* @__PURE__ */ A.jsx("th", { className: "whitespace-nowrap px-6 py-5 text-right", children: "Orçamento" }),
                  /* @__PURE__ */ A.jsx("th", { className: "whitespace-nowrap px-6 py-5 text-center", children: "No Resumo" }),
                  /* @__PURE__ */ A.jsx("th", { className: "whitespace-nowrap px-6 py-5 text-center", children: "Lançamento" }),
                  /* @__PURE__ */ A.jsx("th", { className: "whitespace-nowrap px-6 py-5 text-right", children: "Ações" })
                ]
              }
            ) }),
            /* @__PURE__ */ A.jsx("tbody", { className: G ? "divide-y divide-slate-800/55" : "divide-y divide-slate-200", children: v.length === 0 ? /* @__PURE__ */ A.jsx(ky, { filterLabel: N, isDark: G }) : v.map((pl) => /* @__PURE__ */ A.jsx(
              Py,
              {
                topic: pl,
                draft: T[pl.id],
                isEditMode: r,
                canManageConfig: H,
                isDark: G,
                isSaving: Z.has(pl.id),
                isDeleting: el.has(pl.id),
                getGroupLabel: D,
                groupSuggestionsListId: "config-group-suggestions",
                onFieldChange: al,
                onToggleField: Nl,
                onSave: Cl,
                onDelete: ml
              },
              pl.id
            )) })
          ] })
        ] })
      ]
    }
  );
}
const qa = "Todos", Qr = {
  "TEAM HIRES": "Contratações da Equipe",
  "COMMUNICATIONS & PUBLICATIONS": "Comunicação e Publicações",
  "THIRD PARTY SERVICES": "Serviços de Terceiros"
}, tv = new Map(
  Object.entries(Qr).flatMap(([v, T]) => {
    const N = String(v).trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), r = String(T).trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return [
      [N, T],
      [r, T]
    ];
  })
);
function Ga(v) {
  const T = String(v ?? "").trim();
  if (!T) return "Sem grupo";
  const N = T.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  return tv.get(N) || T;
}
function _f(v) {
  return String(v ?? "").trim();
}
function Bu(v) {
  return _f(v).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function Ya(v) {
  const T = Bu(v);
  return T === "team hires" || T === Bu(Qr["TEAM HIRES"]);
}
function ev(v) {
  return {
    id: String(v?.id ?? ""),
    nome: String(v?.nome ?? ""),
    grupo: Ga(v?.grupo),
    orcamentoProgramaBRL: Number(v?.orcamentoProgramaBRL ?? 0),
    incluirNoResumo: !!v?.incluirNoResumo,
    permitirLancamento: !!v?.permitirLancamento,
    permitirLancamentoEfetivo: !!v?.permitirLancamentoEfetivo
  };
}
function av(v) {
  const T = {};
  for (const N of v)
    T[N.id] = {
      nome: N.nome,
      grupo: Ga(N.grupo),
      orcamentoProgramaBRL: String(Number(N.orcamentoProgramaBRL ?? 0)),
      incluirNoResumo: !!N.incluirNoResumo,
      permitirLancamento: !!N.permitirLancamento
    };
  return T;
}
function ui(v) {
  const T = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(T) ? T : NaN;
}
function uv(v, T) {
  if (!v || !T) return !1;
  const N = String(v.nome ?? "").trim(), r = String(T.nome ?? "").trim(), H = Bu(Ga(v.grupo)), G = Bu(T.grupo), Z = Number(v.orcamentoProgramaBRL ?? 0), el = ui(T.orcamentoProgramaBRL), U = !Number.isFinite(el) || Math.abs(el - Z) > 1e-6, x = G !== H, w = !!T.incluirNoResumo != !!v.incluirNoResumo, D = !!T.permitirLancamento != !!v.permitirLancamento;
  return r !== N || x || U || w || D;
}
function nv(v) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(Number(v ?? 0));
}
function xf(v, T) {
  const N = new Set(v);
  return N.add(T), N;
}
function Af(v, T) {
  const N = new Set(v);
  return N.delete(T), N;
}
function iv({ onError: v }) {
  const [T, N] = Q.useState(() => document.body.classList.contains("theme-dark")), [r, H] = Q.useState(!0), [G, Z] = Q.useState(""), [el, U] = Q.useState(""), [x, w] = Q.useState(null), [D, sl] = Q.useState([]), [al, Nl] = Q.useState({}), [ol, Cl] = Q.useState(qa), [ml, ft] = Q.useState(!1), [pl, Ql] = Q.useState(/* @__PURE__ */ new Set()), [St, Zl] = Q.useState(/* @__PURE__ */ new Set()), [k, Vl] = Q.useState(!1), [st, Xt] = Q.useState(!1), [pt, Yl] = Q.useState(!1), [jl, zt] = Q.useState({
    nome: "",
    grupo: "COMMUNICATIONS & PUBLICATIONS",
    orcamentoProgramaBRL: "0",
    incluirNoResumo: !0,
    permitirLancamento: !0
  }), hl = !!x?.permissions?.canManageConfig, b = Q.useCallback(() => {
    window.dispatchEvent(new CustomEvent("config:topics-changed"));
  }, []), _ = Q.useCallback(
    (M) => {
      const q = String(M || "Falha ao processar requisição.");
      Z(q), typeof v == "function" && v(q);
    },
    [v]
  ), B = Q.useCallback(async () => {
    const M = await Qy(), q = Array.isArray(M) ? M.map(ev) : [];
    return sl(q), Nl(av(q)), q;
  }, []), rl = Q.useCallback(async () => {
    const M = await Xy();
    return M?.authenticated ? (w(M), M) : (window.location.href = "/login", null);
  }, []);
  Q.useEffect(() => {
    let M = !0;
    return (async () => {
      try {
        H(!0), await Promise.all([rl(), B()]);
      } catch (q) {
        if (!M) return;
        _(q?.message || "Falha ao carregar dados da configuracao.");
      } finally {
        M && H(!1);
      }
    })(), () => {
      M = !1;
    };
  }, [rl, B, _]), Q.useEffect(() => Jy(N), []), Q.useEffect(() => {
    hl || (ft(!1), Yl(!1));
  }, [hl]), Q.useEffect(() => {
    if (!G) return () => {
    };
    const M = setTimeout(() => Z(""), 3600);
    return () => clearTimeout(M);
  }, [G]), Q.useEffect(() => {
    if (!el) return () => {
    };
    const M = setTimeout(() => U(""), 2400);
    return () => clearTimeout(M);
  }, [el]);
  const nl = Q.useMemo(() => {
    const M = /* @__PURE__ */ new Map();
    for (const q of D) {
      const K = Ga(q.grupo);
      !K || K === "Sem grupo" || M.set(Bu(K), K);
    }
    return [
      { value: qa, label: "Todos os Macro-Tópicos" },
      ...[...M.values()].sort((q, K) => q.localeCompare(K)).map((q) => ({ value: q, label: q }))
    ];
  }, [D]), o = Q.useMemo(() => nl.filter((M) => M.value !== qa).map((M) => M.label), [nl]), z = Q.useMemo(() => ol === qa ? D : D.filter((M) => M.grupo === ol), [D, ol]), O = Q.useMemo(() => z.reduce((M, q) => {
    const K = al[q.id], zl = Number(q.orcamentoProgramaBRL ?? 0), ul = K ? ui(K.orcamentoProgramaBRL) : zl;
    return M + (Number.isFinite(ul) ? ul : zl);
  }, 0), [z, al]), C = nl.find((M) => M.value === ol)?.label || "Todos os Macro-Tópicos", X = Q.useMemo(() => D.filter((M) => uv(M, al[M.id])).map((M) => M.id), [al, D]), W = Q.useMemo(() => {
    const M = new Set(z.map((q) => q.id));
    return X.filter((q) => M.has(q));
  }, [X, z]), il = Q.useCallback((M, q, K) => {
    Nl((zl) => {
      const ul = {
        ...zl[M] || {}
      };
      if (q === "grupo") {
        const Fl = String(K ?? ""), Tt = Ya(Fl);
        return {
          ...zl,
          [M]: {
            ...ul,
            grupo: Fl,
            permitirLancamento: Tt ? !1 : !!ul.permitirLancamento
          }
        };
      }
      return {
        ...zl,
        [M]: {
          ...ul,
          [q]: K
        }
      };
    });
  }, []), Kl = Q.useCallback((M, q) => {
    Nl((K) => ({
      ...K,
      [M]: {
        ...K[M] || {},
        [q]: !K?.[M]?.[q]
      }
    }));
  }, []), El = Q.useCallback(
    async (M) => {
      if (!hl || !ml) return;
      const q = al[M];
      if (!q) return;
      const K = String(q.nome ?? "").trim();
      if (!K)
        throw new Error("Nome do topico e obrigatorio.");
      const zl = _f(q.grupo);
      if (!zl)
        throw new Error("Grupo do topico e obrigatorio.");
      const ul = ui(q.orcamentoProgramaBRL);
      if (!Number.isFinite(ul) || ul < 0)
        throw new Error("Orcamento invalido.");
      await Vy(M, {
        nome: K,
        grupo: zl,
        orcamentoProgramaBRL: ul,
        incluirNoResumo: !!q.incluirNoResumo,
        permitirLancamento: Ya(zl) ? !1 : !!q.permitirLancamento
      });
    },
    [hl, al, ml]
  ), je = Q.useCallback(
    async (M) => {
      if (!(!hl || !ml)) {
        Ql((q) => xf(q, M));
        try {
          await El(M), await B(), b(), U("Topico atualizado com sucesso.");
        } catch (q) {
          _(q?.message || "Falha ao atualizar topico.");
        } finally {
          Ql((q) => Af(q, M));
        }
      }
    },
    [hl, b, ml, B, _, El]
  ), Ie = Q.useCallback(
    async () => {
      if (!hl || !ml) return;
      if (X.length === 0) {
        U("Nenhuma alteracao pendente para salvar.");
        return;
      }
      const M = [...X], q = {};
      for (const K of M)
        al[K] && (q[K] = { ...al[K] });
      Vl(!0);
      try {
        const K = [];
        for (const Fl of M) {
          Ql((Tt) => xf(Tt, Fl));
          try {
            await El(Fl), K.push({ topicId: Fl, ok: !0 });
          } catch (Tt) {
            K.push({
              topicId: Fl,
              ok: !1,
              message: Tt?.message || "Falha ao salvar topico."
            });
          } finally {
            Ql((Tt) => Af(Tt, Fl));
          }
        }
        const zl = K.filter((Fl) => Fl.ok).length, ul = K.filter((Fl) => !Fl.ok);
        zl > 0 && (await B(), b(), ul.length > 0 && Nl((Fl) => {
          const Tt = { ...Fl };
          for (const Il of ul) {
            const Gu = q[Il.topicId];
            Gu && (Tt[Il.topicId] = Gu);
          }
          return Tt;
        })), ul.length === 0 ? U(zl === 1 ? "1 topico salvo com sucesso." : `${zl} topicos salvos com sucesso.`) : _(zl === 0 ? ul[0]?.message || "Falha ao salvar topicos." : `Salvos ${zl} topico(s); ${ul.length} com erro. Primeiro erro: ${ul[0]?.message || "Falha ao salvar."}`);
      } finally {
        Vl(!1);
      }
    },
    [hl, X, al, b, ml, B, _, El]
  ), La = Q.useCallback(
    async (M) => {
      if (!hl || !ml) return;
      const K = D.find((ul) => ul.id === M)?.nome || M;
      if (window.confirm(`Deseja remover o tópico "${K}"? Esta ação não pode ser desfeita.`)) {
        Zl((ul) => xf(ul, M));
        try {
          await Ky(M), await B(), b(), U("Tópico removido com sucesso.");
        } catch (ul) {
          _(ul?.message || "Falha ao remover tópico.");
        } finally {
          Zl((ul) => Af(ul, M));
        }
      }
    },
    [hl, b, ml, B, _, D]
  ), Yu = Q.useCallback(() => {
    if (!hl || !ml) {
      _("Ative o modo edição para acrescentar tópicos.");
      return;
    }
    const M = ol !== qa ? ol : D[0]?.grupo || "COMMUNICATIONS & PUBLICATIONS";
    zt({
      nome: "",
      grupo: Ga(M),
      orcamentoProgramaBRL: "0",
      incluirNoResumo: !0,
      permitirLancamento: !Ya(M)
    }), Yl(!0);
  }, [hl, ol, ml, _, D]), Bt = Q.useCallback(() => {
    Yl(!1);
  }, []), Qt = Q.useCallback((M, q) => {
    zt((K) => {
      if (M === "grupo") {
        const zl = !Ya(q);
        return {
          ...K,
          grupo: q,
          permitirLancamento: zl ? K.permitirLancamento : !1
        };
      }
      return {
        ...K,
        [M]: q
      };
    });
  }, []), Xa = Q.useCallback(
    async (M) => {
      if (M.preventDefault(), !hl || !ml) {
        _("Ative o modo edição para salvar tópicos.");
        return;
      }
      const q = String(jl.nome ?? "").trim(), K = _f(jl.grupo), zl = ui(jl.orcamentoProgramaBRL);
      if (!q) {
        _("Nome do tópico é obrigatório.");
        return;
      }
      if (!K) {
        _("Grupo do tópico é obrigatório.");
        return;
      }
      if (!Number.isFinite(zl) || zl < 0) {
        _("Orçamento inválido.");
        return;
      }
      Xt(!0);
      try {
        const ul = await Zy({
          nome: q,
          grupo: K,
          orcamentoProgramaBRL: zl,
          incluirNoResumo: !!jl.incluirNoResumo,
          permitirLancamento: Ya(K) ? !1 : !!jl.permitirLancamento
        });
        Cl(ul?.grupo || K), Yl(!1), await B(), b(), U("Tópico criado com sucesso.");
      } catch (ul) {
        _(ul?.message || "Falha ao criar tópico.");
      } finally {
        Xt(!1);
      }
    },
    [hl, b, ml, B, jl, _]
  );
  return r ? /* @__PURE__ */ A.jsx("div", { className: `config-react-scope rounded-2xl border p-6 ${T ? "border-slate-800/60 bg-slate-900/45 text-slate-300" : "border-slate-200 bg-white text-slate-700"}`, children: "Carregando configurações..." }) : /* @__PURE__ */ A.jsxs("div", { className: `config-react-scope space-y-6 ${T ? "text-slate-200" : "text-slate-900"}`, children: [
    /* @__PURE__ */ A.jsx(
      wy,
      {
        canManageConfig: hl,
        isEditMode: ml,
        onToggleEditMode: () => ft((M) => !M),
        onOpenCreateModal: Yu,
        isDark: T
      }
    ),
    G ? /* @__PURE__ */ A.jsxs(
      "div",
      {
        className: `flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${T ? "border-rose-500/40 bg-rose-500/10 text-rose-200" : "border-rose-300 bg-rose-50 text-rose-700"}`,
        children: [
          /* @__PURE__ */ A.jsx(Gr, { size: 16, className: "mt-0.5 shrink-0" }),
          /* @__PURE__ */ A.jsx("span", { children: G })
        ]
      }
    ) : null,
    el ? /* @__PURE__ */ A.jsx(
      "div",
      {
        className: `rounded-xl border px-4 py-3 text-sm ${T ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200" : "border-emerald-300 bg-emerald-50 text-emerald-700"}`,
        children: el
      }
    ) : null,
    pt ? /* @__PURE__ */ A.jsxs(
      "div",
      {
        className: `rounded-2xl border p-5 shadow-xl ${T ? "border-slate-800/60 bg-slate-900/45" : "border-slate-200 bg-white"}`,
        children: [
          /* @__PURE__ */ A.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
            /* @__PURE__ */ A.jsx("h4", { className: "text-lg font-bold", children: "Novo tópico" }),
            /* @__PURE__ */ A.jsx(
              "button",
              {
                type: "button",
                onClick: Bt,
                className: `inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${T ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200" : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"}`,
                children: /* @__PURE__ */ A.jsx(Gy, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("form", { className: "grid gap-3 md:grid-cols-2", onSubmit: Xa, children: [
            /* @__PURE__ */ A.jsxs("label", { className: "flex flex-col gap-1 text-sm font-semibold", children: [
              "Nome do tópico",
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "text",
                  value: jl.nome,
                  onChange: (M) => Qt("nome", M.target.value),
                  className: `rounded-lg border px-3 py-2 outline-none transition-all ${T ? "border-slate-700 bg-slate-950/45 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/60" : "border-slate-300 bg-white text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40"}`,
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ A.jsxs("label", { className: "flex flex-col gap-1 text-sm font-semibold", children: [
              "Grupo",
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "text",
                  value: jl.grupo,
                  onChange: (M) => Qt("grupo", M.target.value),
                  list: "config-group-suggestions",
                  placeholder: "Ex.: Comunicação e Publicações",
                  className: `rounded-lg border px-3 py-2 outline-none transition-all ${T ? "border-slate-700 bg-slate-950/45 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/60" : "border-slate-300 bg-white text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40"}`,
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ A.jsxs("label", { className: "flex flex-col gap-1 text-sm font-semibold", children: [
              "Orçamento (BRL)",
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "number",
                  min: "0",
                  step: "0.01",
                  value: jl.orcamentoProgramaBRL,
                  onChange: (M) => Qt("orcamentoProgramaBRL", M.target.value),
                  className: `rounded-lg border px-3 py-2 outline-none transition-all ${T ? "border-slate-700 bg-slate-950/45 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/60" : "border-slate-300 bg-white text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40"}`
                }
              )
            ] }),
            /* @__PURE__ */ A.jsxs("div", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2", children: [
              /* @__PURE__ */ A.jsxs("label", { className: "inline-flex items-center gap-2 text-sm font-semibold", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: jl.incluirNoResumo,
                    onChange: (M) => Qt("incluirNoResumo", M.target.checked)
                  }
                ),
                "Incluir no resumo"
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "inline-flex items-center gap-2 text-sm font-semibold", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: jl.permitirLancamento,
                    onChange: (M) => Qt("permitirLancamento", M.target.checked),
                    disabled: Ya(jl.grupo)
                  }
                ),
                "Lançamento ativo"
              ] })
            ] }),
            /* @__PURE__ */ A.jsxs("div", { className: "col-span-full flex justify-end gap-2 pt-1", children: [
              /* @__PURE__ */ A.jsx(
                "button",
                {
                  type: "button",
                  onClick: Bt,
                  className: `rounded-lg border px-4 py-2 text-sm font-semibold ${T ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`,
                  children: "Cancelar"
                }
              ),
              /* @__PURE__ */ A.jsx(
                "button",
                {
                  type: "submit",
                  disabled: st,
                  className: "rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60",
                  children: st ? "Salvando..." : "Criar tópico"
                }
              )
            ] })
          ] })
        ]
      }
    ) : null,
    /* @__PURE__ */ A.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ A.jsx(
        $y,
        {
          filterGroup: ol,
          groups: nl,
          onChangeFilter: Cl,
          isDark: T
        }
      ),
      /* @__PURE__ */ A.jsx(
        Wy,
        {
          totalBudget: O,
          formatCurrency: nv,
          filterLabel: ol === qa ? "Geral" : C,
          isDark: T
        }
      )
    ] }),
    /* @__PURE__ */ A.jsx(
      lv,
      {
        filteredTopics: z,
        drafts: al,
        filterLabel: C,
        isEditMode: ml,
        canManageConfig: hl,
        isDark: T,
        savingIds: pl,
        deletingIds: St,
        isSavingAllTopics: k,
        pendingTotalCount: X.length,
        pendingVisibleCount: W.length,
        getGroupLabel: Ga,
        groupSuggestions: o,
        onFieldChange: il,
        onToggleField: Kl,
        onSaveAllTopics: Ie,
        onSaveTopic: je,
        onDeleteTopic: La
      }
    ),
    /* @__PURE__ */ A.jsxs(
      "div",
      {
        className: `flex flex-col items-center justify-between gap-4 rounded-xl border px-4 py-3 text-xs font-semibold sm:flex-row ${T ? "border-slate-800/60 bg-slate-950/35 text-slate-400" : "border-slate-200 bg-slate-50 text-slate-500"}`,
        children: [
          /* @__PURE__ */ A.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-amber-500/90", children: [
            /* @__PURE__ */ A.jsx(Gr, { size: 14 }),
            /* @__PURE__ */ A.jsx("span", { children: "As alterações ficam pendentes até clicar em salvar." })
          ] }),
          /* @__PURE__ */ A.jsxs("span", { children: [
            "A mostrar ",
            z.length,
            " de ",
            D.length,
            " tópicos"
          ] })
        ]
      }
    )
  ] });
}
function cv(v = {}) {
  const T = v.root ?? document.getElementById("config-react-root");
  if (!T)
    throw new Error("Container da Config React nao encontrado.");
  const N = gy.createRoot(T);
  return N.render(/* @__PURE__ */ A.jsx(iv, { onError: v.onError })), () => {
    N.unmount();
  };
}
export {
  cv as mountConfigApp
};
