// node_modules/tw-elements/dist/js/tw-elements.es.min.js
var Hh = Object.defineProperty;
var Vh = (s, t, e) => t in s ? Hh(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var yt = (s, t, e) => (Vh(s, typeof t != "symbol" ? t + "" : t, e), e);
var Tn = (() => {
  const s = {};
  let t = 1;
  return {
    set(e, i, n) {
      typeof e[i] > "u" && (e[i] = {
        key: i,
        id: t
      }, t++), s[e[i].id] = n;
    },
    get(e, i) {
      if (!e || typeof e[i] > "u")
        return null;
      const n = e[i];
      return n.key === i ? s[n.id] : null;
    },
    delete(e, i) {
      if (typeof e[i] > "u")
        return;
      const n = e[i];
      n.key === i && (delete s[n.id], delete e[i]);
    }
  };
})();
var y = {
  setData(s, t, e) {
    Tn.set(s, t, e);
  },
  getData(s, t) {
    return Tn.get(s, t);
  },
  removeData(s, t) {
    Tn.delete(s, t);
  }
};
var Wh = 1e6;
var Fh = 1e3;
var xo = "transitionend";
var Yh = (s) => s == null ? `${s}` : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
var rt = (s) => {
  do
    s += Math.floor(Math.random() * Wh);
  while (document.getElementById(s));
  return s;
};
var Ul = (s) => {
  let t = s.getAttribute("data-te-target");
  if (!t || t === "#") {
    let e = s.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? e.trim() : null;
  }
  return t;
};
var qo = (s) => {
  const t = Ul(s);
  return t && document.querySelector(t) ? t : null;
};
var Jt = (s) => {
  const t = Ul(s);
  return t ? document.querySelector(t) : null;
};
var jh = (s) => {
  if (!s)
    return 0;
  let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(s);
  const i = Number.parseFloat(t), n = Number.parseFloat(e);
  return !i && !n ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * Fh);
};
var Xl = (s) => {
  s.dispatchEvent(new Event(xo));
};
var je = (s) => !s || typeof s != "object" ? false : (typeof s.jquery < "u" && (s = s[0]), typeof s.nodeType < "u");
var te = (s) => je(s) ? s.jquery ? s[0] : s : typeof s == "string" && s.length > 0 ? document.querySelector(s) : null;
var D = (s, t, e) => {
  Object.keys(e).forEach((i) => {
    const n = e[i], o = t[i], r = o && je(o) ? "element" : Yh(o);
    if (!new RegExp(n).test(r))
      throw new Error(
        `${s.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
      );
  });
};
var Nt = (s) => {
  if (!s || s.getClientRects().length === 0)
    return false;
  if (s.style && s.parentNode && s.parentNode.style) {
    const t = getComputedStyle(s), e = getComputedStyle(s.parentNode);
    return getComputedStyle(s).getPropertyValue("visibility") === "visible" || t.display !== "none" && e.display !== "none" && t.visibility !== "hidden";
  }
  return false;
};
var ge = (s) => !s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains("disabled") ? true : typeof s.disabled < "u" ? s.disabled : s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false";
var Gl = (s) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof s.getRootNode == "function") {
    const t = s.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return s instanceof ShadowRoot ? s : s.parentNode ? Gl(s.parentNode) : null;
};
var tn = () => function() {
};
var Je = (s) => {
  s.offsetHeight;
};
var ql = () => {
  const { jQuery: s } = window;
  return s && !document.body.hasAttribute("data-te-no-jquery") ? s : null;
};
var En = [];
var Zl = (s) => {
  document.readyState === "loading" ? (En.length || document.addEventListener("DOMContentLoaded", () => {
    En.forEach((t) => t());
  }), En.push(s)) : s();
};
var F = () => document.documentElement.dir === "rtl";
var Kh = (s) => Array.from(s);
var $ = (s) => document.createElement(s);
var me = (s) => {
  typeof s == "function" && s();
};
var Ql = (s, t, e = true) => {
  if (!e) {
    me(s);
    return;
  }
  const i = 5, n = jh(t) + i;
  let o = false;
  const r = ({ target: a }) => {
    a === t && (o = true, t.removeEventListener(xo, r), me(s));
  };
  t.addEventListener(xo, r), setTimeout(() => {
    o || Xl(t);
  }, n);
};
var Jl = (s, t, e, i) => {
  let n = s.indexOf(t);
  if (n === -1)
    return s[!e && i ? s.length - 1 : 0];
  const o = s.length;
  return n += e ? 1 : -1, i && (n = (n + o) % o), s[Math.max(0, Math.min(n, o - 1))];
};
var zh = /[^.]*(?=\..*)\.|.*/;
var Uh = /\..*/;
var Xh = /::\d+$/;
var Cn = {};
var xr = 1;
var Gh = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
};
var qh = /^(mouseenter|mouseleave)/i;
var tc = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function ec(s, t) {
  return t && `${t}::${xr++}` || s.uidEvent || xr++;
}
function ic(s) {
  const t = ec(s);
  return s.uidEvent = t, Cn[t] = Cn[t] || {}, Cn[t];
}
function Zh(s, t) {
  return function e(i) {
    return i.delegateTarget = s, e.oneOff && c.off(s, i.type, t), t.apply(s, [i]);
  };
}
function Qh(s, t, e) {
  return function i(n) {
    const o = s.querySelectorAll(t);
    for (let { target: r } = n; r && r !== this; r = r.parentNode)
      for (let a = o.length; a--; "")
        if (o[a] === r)
          return n.delegateTarget = r, i.oneOff && c.off(s, n.type, e), e.apply(r, [n]);
    return null;
  };
}
function sc(s, t, e = null) {
  const i = Object.keys(s);
  for (let n = 0, o = i.length; n < o; n++) {
    const r = s[i[n]];
    if (r.originalHandler === t && r.delegationSelector === e)
      return r;
  }
  return null;
}
function nc(s, t, e) {
  const i = typeof t == "string", n = i ? e : t;
  let o = oc(s);
  return tc.has(o) || (o = s), [i, n, o];
}
function Or(s, t, e, i, n) {
  if (typeof t != "string" || !s)
    return;
  if (e || (e = i, i = null), qh.test(t)) {
    const g = (m) => function(b) {
      if (!b.relatedTarget || b.relatedTarget !== b.delegateTarget && !b.delegateTarget.contains(b.relatedTarget))
        return m.call(this, b);
    };
    i ? i = g(i) : e = g(e);
  }
  const [o, r, a] = nc(
    t,
    e,
    i
  ), l = ic(s), p = l[a] || (l[a] = {}), u = sc(
    p,
    r,
    o ? e : null
  );
  if (u) {
    u.oneOff = u.oneOff && n;
    return;
  }
  const _ = ec(
    r,
    t.replace(zh, "")
  ), f = o ? Qh(s, e, i) : Zh(s, e);
  f.delegationSelector = o ? e : null, f.originalHandler = r, f.oneOff = n, f.uidEvent = _, p[_] = f, s.addEventListener(a, f, o);
}
function Oo(s, t, e, i, n) {
  const o = sc(t[e], i, n);
  o && (s.removeEventListener(e, o, !!n), delete t[e][o.uidEvent]);
}
function Jh(s, t, e, i) {
  const n = t[e] || {};
  Object.keys(n).forEach((o) => {
    if (o.includes(i)) {
      const r = n[o];
      Oo(
        s,
        t,
        e,
        r.originalHandler,
        r.delegationSelector
      );
    }
  });
}
function oc(s) {
  return s = s.replace(Uh, ""), Gh[s] || s;
}
var c = {
  on(s, t, e, i) {
    Or(s, t, e, i, false);
  },
  one(s, t, e, i) {
    Or(s, t, e, i, true);
  },
  off(s, t, e, i) {
    if (typeof t != "string" || !s)
      return;
    const [n, o, r] = nc(
      t,
      e,
      i
    ), a = r !== t, l = ic(s), p = t.startsWith(".");
    if (typeof o < "u") {
      if (!l || !l[r])
        return;
      Oo(
        s,
        l,
        r,
        o,
        n ? e : null
      );
      return;
    }
    p && Object.keys(l).forEach((_) => {
      Jh(
        s,
        l,
        _,
        t.slice(1)
      );
    });
    const u = l[r] || {};
    Object.keys(u).forEach((_) => {
      const f = _.replace(Xh, "");
      if (!a || t.includes(f)) {
        const g = u[_];
        Oo(
          s,
          l,
          r,
          g.originalHandler,
          g.delegationSelector
        );
      }
    });
  },
  trigger(s, t, e) {
    if (typeof t != "string" || !s)
      return null;
    const i = ql(), n = oc(t), o = t !== n, r = tc.has(n);
    let a, l = true, p = true, u = false, _ = null;
    return o && i && (a = i.Event(t, e), i(s).trigger(a), l = !a.isPropagationStopped(), p = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), r ? (_ = document.createEvent("HTMLEvents"), _.initEvent(n, l, true)) : _ = new CustomEvent(t, {
      bubbles: l,
      cancelable: true
    }), typeof e < "u" && Object.keys(e).forEach((f) => {
      Object.defineProperty(_, f, {
        get() {
          return e[f];
        }
      });
    }), u && _.preventDefault(), p && s.dispatchEvent(_), _.defaultPrevented && typeof a < "u" && a.preventDefault(), _;
  }
};
var re = {
  on(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      c.on(s, n[o], e, i);
  },
  off(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      c.off(s, n[o], e, i);
  }
};
var td = "5.1.3";
var gt = class {
  constructor(t) {
    t = te(t), t && (this._element = t, y.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    y.removeData(this._element, this.constructor.DATA_KEY), c.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, e, i = true) {
    Ql(t, e, i);
  }
  /** Static */
  static getInstance(t) {
    return y.getData(te(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return td;
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  static get DATA_KEY() {
    return `te.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
};
var ed = "button";
var id = "active";
var rc = class _rc extends gt {
  // Getters
  static get NAME() {
    return ed;
  }
  // Public
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(id)
    );
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _rc.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
};
var Q = "top";
var dt = "bottom";
var ut = "right";
var J = "left";
var Hi = "auto";
var ti = [Q, dt, ut, J];
var Te = "start";
var Ke = "end";
var ac = "clippingParents";
var Zo = "viewport";
var $e = "popper";
var lc = "reference";
var So = ti.reduce(function(s, t) {
  return s.concat([t + "-" + Te, t + "-" + Ke]);
}, []);
var Qo = [].concat(ti, [Hi]).reduce(function(s, t) {
  return s.concat([t, t + "-" + Te, t + "-" + Ke]);
}, []);
var cc = "beforeRead";
var hc = "read";
var dc = "afterRead";
var uc = "beforeMain";
var pc = "main";
var _c = "afterMain";
var fc = "beforeWrite";
var mc = "write";
var gc = "afterWrite";
var en = [cc, hc, dc, uc, pc, _c, fc, mc, gc];
function Mt(s) {
  return s ? (s.nodeName || "").toLowerCase() : null;
}
function pt(s) {
  if (s == null)
    return window;
  if (s.toString() !== "[object Window]") {
    var t = s.ownerDocument;
    return t && t.defaultView || window;
  }
  return s;
}
function Ee(s) {
  var t = pt(s).Element;
  return s instanceof t || s instanceof Element;
}
function ht(s) {
  var t = pt(s).HTMLElement;
  return s instanceof t || s instanceof HTMLElement;
}
function Jo(s) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = pt(s).ShadowRoot;
  return s instanceof t || s instanceof ShadowRoot;
}
function sd(s) {
  var t = s.state;
  Object.keys(t.elements).forEach(function(e) {
    var i = t.styles[e] || {}, n = t.attributes[e] || {}, o = t.elements[e];
    !ht(o) || !Mt(o) || (Object.assign(o.style, i), Object.keys(n).forEach(function(r) {
      var a = n[r];
      a === false ? o.removeAttribute(r) : o.setAttribute(r, a === true ? "" : a);
    }));
  });
}
function nd(s) {
  var t = s.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var n = t.elements[i], o = t.attributes[i] || {}, r = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]), a = r.reduce(function(l, p) {
        return l[p] = "", l;
      }, {});
      !ht(n) || !Mt(n) || (Object.assign(n.style, a), Object.keys(o).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
var tr = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: sd,
  effect: nd,
  requires: ["computeStyles"]
};
function Tt(s) {
  return s.split("-")[0];
}
var be = Math.max;
var sn = Math.min;
var ze = Math.round;
function Io() {
  var s = navigator.userAgentData;
  return s != null && s.brands && Array.isArray(s.brands) ? s.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function bc() {
  return !/^((?!chrome|android).)*safari/i.test(Io());
}
function Ue(s, t, e) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  var i = s.getBoundingClientRect(), n = 1, o = 1;
  t && ht(s) && (n = s.offsetWidth > 0 && ze(i.width) / s.offsetWidth || 1, o = s.offsetHeight > 0 && ze(i.height) / s.offsetHeight || 1);
  var r = Ee(s) ? pt(s) : window, a = r.visualViewport, l = !bc() && e, p = (i.left + (l && a ? a.offsetLeft : 0)) / n, u = (i.top + (l && a ? a.offsetTop : 0)) / o, _ = i.width / n, f = i.height / o;
  return {
    width: _,
    height: f,
    top: u,
    right: p + _,
    bottom: u + f,
    left: p,
    x: p,
    y: u
  };
}
function er(s) {
  var t = Ue(s), e = s.offsetWidth, i = s.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: s.offsetLeft,
    y: s.offsetTop,
    width: e,
    height: i
  };
}
function vc(s, t) {
  var e = t.getRootNode && t.getRootNode();
  if (s.contains(t))
    return true;
  if (e && Jo(e)) {
    var i = t;
    do {
      if (i && s.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
function Ct(s) {
  return pt(s).getComputedStyle(s);
}
function od(s) {
  return ["table", "td", "th"].indexOf(Mt(s)) >= 0;
}
function ee(s) {
  return ((Ee(s) ? s.ownerDocument : (
    // $FlowFixMe[prop-missing]
    s.document
  )) || window.document).documentElement;
}
function rn(s) {
  return Mt(s) === "html" ? s : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    s.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    s.parentNode || // DOM Element detected
    (Jo(s) ? s.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ee(s)
  );
}
function Sr(s) {
  return !ht(s) || // https://github.com/popperjs/popper-core/issues/837
  Ct(s).position === "fixed" ? null : s.offsetParent;
}
function rd(s) {
  var t = /firefox/i.test(Io()), e = /Trident/i.test(Io());
  if (e && ht(s)) {
    var i = Ct(s);
    if (i.position === "fixed")
      return null;
  }
  var n = rn(s);
  for (Jo(n) && (n = n.host); ht(n) && ["html", "body"].indexOf(Mt(n)) < 0; ) {
    var o = Ct(n);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function Vi(s) {
  for (var t = pt(s), e = Sr(s); e && od(e) && Ct(e).position === "static"; )
    e = Sr(e);
  return e && (Mt(e) === "html" || Mt(e) === "body" && Ct(e).position === "static") ? t : e || rd(s) || t;
}
function ir(s) {
  return ["top", "bottom"].indexOf(s) >= 0 ? "x" : "y";
}
function Si(s, t, e) {
  return be(s, sn(t, e));
}
function ad(s, t, e) {
  var i = Si(s, t, e);
  return i > e ? e : i;
}
function Tc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ec(s) {
  return Object.assign({}, Tc(), s);
}
function Cc(s, t) {
  return t.reduce(function(e, i) {
    return e[i] = s, e;
  }, {});
}
var ld = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, Ec(typeof t != "number" ? t : Cc(t, ti));
};
function cd(s) {
  var t, e = s.state, i = s.name, n = s.options, o = e.elements.arrow, r = e.modifiersData.popperOffsets, a = Tt(e.placement), l = ir(a), p = [J, ut].indexOf(a) >= 0, u = p ? "height" : "width";
  if (!(!o || !r)) {
    var _ = ld(n.padding, e), f = er(o), g = l === "y" ? Q : J, m = l === "y" ? dt : ut, b = e.rects.reference[u] + e.rects.reference[l] - r[l] - e.rects.popper[u], v = r[l] - e.rects.reference[l], C = Vi(o), w = C ? l === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, E = b / 2 - v / 2, T = _[g], A = w - f[u] - _[m], k = w / 2 - f[u] / 2 + E, I = Si(T, k, A), O = l;
    e.modifiersData[i] = (t = {}, t[O] = I, t.centerOffset = I - k, t);
  }
}
function hd(s) {
  var t = s.state, e = s.options, i = e.element, n = i === void 0 ? "[data-popper-arrow]" : i;
  if (n != null && !(typeof n == "string" && (n = t.elements.popper.querySelector(n), !n))) {
    if ({}.NODE_ENV !== "production" && (ht(n) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !vc(t.elements.popper, n)) {
      ({}).NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = n;
  }
}
var Ac = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: cd,
  effect: hd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Xe(s) {
  return s.split("-")[1];
}
var dd = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ud(s, t) {
  var e = s.x, i = s.y, n = t.devicePixelRatio || 1;
  return {
    x: ze(e * n) / n || 0,
    y: ze(i * n) / n || 0
  };
}
function Ir(s) {
  var t, e = s.popper, i = s.popperRect, n = s.placement, o = s.variation, r = s.offsets, a = s.position, l = s.gpuAcceleration, p = s.adaptive, u = s.roundOffsets, _ = s.isFixed, f = r.x, g = f === void 0 ? 0 : f, m = r.y, b = m === void 0 ? 0 : m, v = typeof u == "function" ? u({
    x: g,
    y: b
  }) : {
    x: g,
    y: b
  };
  g = v.x, b = v.y;
  var C = r.hasOwnProperty("x"), w = r.hasOwnProperty("y"), E = J, T = Q, A = window;
  if (p) {
    var k = Vi(e), I = "clientHeight", O = "clientWidth";
    if (k === pt(e) && (k = ee(e), Ct(k).position !== "static" && a === "absolute" && (I = "scrollHeight", O = "scrollWidth")), k = k, n === Q || (n === J || n === ut) && o === Ke) {
      T = dt;
      var x = _ && k === A && A.visualViewport ? A.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[I]
      );
      b -= x - i.height, b *= l ? 1 : -1;
    }
    if (n === J || (n === Q || n === dt) && o === Ke) {
      E = ut;
      var L = _ && k === A && A.visualViewport ? A.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[O]
      );
      g -= L - i.width, g *= l ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: a
  }, p && dd), N = u === true ? ud({
    x: g,
    y: b
  }, pt(e)) : {
    x: g,
    y: b
  };
  if (g = N.x, b = N.y, l) {
    var P;
    return Object.assign({}, S, (P = {}, P[T] = w ? "0" : "", P[E] = C ? "0" : "", P.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", P));
  }
  return Object.assign({}, S, (t = {}, t[T] = w ? b + "px" : "", t[E] = C ? g + "px" : "", t.transform = "", t));
}
function pd(s) {
  var t = s.state, e = s.options, i = e.gpuAcceleration, n = i === void 0 ? true : i, o = e.adaptive, r = o === void 0 ? true : o, a = e.roundOffsets, l = a === void 0 ? true : a;
  if ({}.NODE_ENV !== "production") {
    var p = Ct(t.elements.popper).transitionProperty || "";
    r && ["transform", "top", "right", "bottom", "left"].some(function(_) {
      return p.indexOf(_) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: Tt(t.placement),
    variation: Xe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ir(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ir(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var sr = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: pd,
  data: {}
};
var ts = {
  passive: true
};
function _d(s) {
  var t = s.state, e = s.instance, i = s.options, n = i.scroll, o = n === void 0 ? true : n, r = i.resize, a = r === void 0 ? true : r, l = pt(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(u) {
    u.addEventListener("scroll", e.update, ts);
  }), a && l.addEventListener("resize", e.update, ts), function() {
    o && p.forEach(function(u) {
      u.removeEventListener("scroll", e.update, ts);
    }), a && l.removeEventListener("resize", e.update, ts);
  };
}
var nr = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: _d,
  data: {}
};
var fd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ms(s) {
  return s.replace(/left|right|bottom|top/g, function(t) {
    return fd[t];
  });
}
var md = {
  start: "end",
  end: "start"
};
function Dr(s) {
  return s.replace(/start|end/g, function(t) {
    return md[t];
  });
}
function or(s) {
  var t = pt(s), e = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: i
  };
}
function rr(s) {
  return Ue(ee(s)).left + or(s).scrollLeft;
}
function gd(s, t) {
  var e = pt(s), i = ee(s), n = e.visualViewport, o = i.clientWidth, r = i.clientHeight, a = 0, l = 0;
  if (n) {
    o = n.width, r = n.height;
    var p = bc();
    (p || !p && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: o,
    height: r,
    x: a + rr(s),
    y: l
  };
}
function bd(s) {
  var t, e = ee(s), i = or(s), n = (t = s.ownerDocument) == null ? void 0 : t.body, o = be(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = be(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -i.scrollLeft + rr(s), l = -i.scrollTop;
  return Ct(n || e).direction === "rtl" && (a += be(e.clientWidth, n ? n.clientWidth : 0) - o), {
    width: o,
    height: r,
    x: a,
    y: l
  };
}
function ar(s) {
  var t = Ct(s), e = t.overflow, i = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + n + i);
}
function yc(s) {
  return ["html", "body", "#document"].indexOf(Mt(s)) >= 0 ? s.ownerDocument.body : ht(s) && ar(s) ? s : yc(rn(s));
}
function Ii(s, t) {
  var e;
  t === void 0 && (t = []);
  var i = yc(s), n = i === ((e = s.ownerDocument) == null ? void 0 : e.body), o = pt(i), r = n ? [o].concat(o.visualViewport || [], ar(i) ? i : []) : i, a = t.concat(r);
  return n ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Ii(rn(r)))
  );
}
function Do(s) {
  return Object.assign({}, s, {
    left: s.x,
    top: s.y,
    right: s.x + s.width,
    bottom: s.y + s.height
  });
}
function vd(s, t) {
  var e = Ue(s, false, t === "fixed");
  return e.top = e.top + s.clientTop, e.left = e.left + s.clientLeft, e.bottom = e.top + s.clientHeight, e.right = e.left + s.clientWidth, e.width = s.clientWidth, e.height = s.clientHeight, e.x = e.left, e.y = e.top, e;
}
function $r(s, t, e) {
  return t === Zo ? Do(gd(s, e)) : Ee(t) ? vd(t, e) : Do(bd(ee(s)));
}
function Td(s) {
  var t = Ii(rn(s)), e = ["absolute", "fixed"].indexOf(Ct(s).position) >= 0, i = e && ht(s) ? Vi(s) : s;
  return Ee(i) ? t.filter(function(n) {
    return Ee(n) && vc(n, i) && Mt(n) !== "body";
  }) : [];
}
function Ed(s, t, e, i) {
  var n = t === "clippingParents" ? Td(s) : [].concat(t), o = [].concat(n, [e]), r = o[0], a = o.reduce(function(l, p) {
    var u = $r(s, p, i);
    return l.top = be(u.top, l.top), l.right = sn(u.right, l.right), l.bottom = sn(u.bottom, l.bottom), l.left = be(u.left, l.left), l;
  }, $r(s, r, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function wc(s) {
  var t = s.reference, e = s.element, i = s.placement, n = i ? Tt(i) : null, o = i ? Xe(i) : null, r = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
  switch (n) {
    case Q:
      l = {
        x: r,
        y: t.y - e.height
      };
      break;
    case dt:
      l = {
        x: r,
        y: t.y + t.height
      };
      break;
    case ut:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case J:
      l = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var p = n ? ir(n) : null;
  if (p != null) {
    var u = p === "y" ? "height" : "width";
    switch (o) {
      case Te:
        l[p] = l[p] - (t[u] / 2 - e[u] / 2);
        break;
      case Ke:
        l[p] = l[p] + (t[u] / 2 - e[u] / 2);
        break;
    }
  }
  return l;
}
function Ge(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = i === void 0 ? s.placement : i, o = e.strategy, r = o === void 0 ? s.strategy : o, a = e.boundary, l = a === void 0 ? ac : a, p = e.rootBoundary, u = p === void 0 ? Zo : p, _ = e.elementContext, f = _ === void 0 ? $e : _, g = e.altBoundary, m = g === void 0 ? false : g, b = e.padding, v = b === void 0 ? 0 : b, C = Ec(typeof v != "number" ? v : Cc(v, ti)), w = f === $e ? lc : $e, E = s.rects.popper, T = s.elements[m ? w : f], A = Ed(Ee(T) ? T : T.contextElement || ee(s.elements.popper), l, u, r), k = Ue(s.elements.reference), I = wc({
    reference: k,
    element: E,
    strategy: "absolute",
    placement: n
  }), O = Do(Object.assign({}, E, I)), x = f === $e ? O : k, L = {
    top: A.top - x.top + C.top,
    bottom: x.bottom - A.bottom + C.bottom,
    left: A.left - x.left + C.left,
    right: x.right - A.right + C.right
  }, S = s.modifiersData.offset;
  if (f === $e && S) {
    var N = S[n];
    Object.keys(L).forEach(function(P) {
      var tt = [ut, dt].indexOf(P) >= 0 ? 1 : -1, et = [Q, dt].indexOf(P) >= 0 ? "y" : "x";
      L[P] += N[et] * tt;
    });
  }
  return L;
}
function Cd(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = e.boundary, o = e.rootBoundary, r = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, p = l === void 0 ? Qo : l, u = Xe(i), _ = u ? a ? So : So.filter(function(m) {
    return Xe(m) === u;
  }) : ti, f = _.filter(function(m) {
    return p.indexOf(m) >= 0;
  });
  f.length === 0 && (f = _, {}.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var g = f.reduce(function(m, b) {
    return m[b] = Ge(s, {
      placement: b,
      boundary: n,
      rootBoundary: o,
      padding: r
    })[Tt(b)], m;
  }, {});
  return Object.keys(g).sort(function(m, b) {
    return g[m] - g[b];
  });
}
function Ad(s) {
  if (Tt(s) === Hi)
    return [];
  var t = Ms(s);
  return [Dr(s), t, Dr(t)];
}
function yd(s) {
  var t = s.state, e = s.options, i = s.name;
  if (!t.modifiersData[i]._skip) {
    for (var n = e.mainAxis, o = n === void 0 ? true : n, r = e.altAxis, a = r === void 0 ? true : r, l = e.fallbackPlacements, p = e.padding, u = e.boundary, _ = e.rootBoundary, f = e.altBoundary, g = e.flipVariations, m = g === void 0 ? true : g, b = e.allowedAutoPlacements, v = t.options.placement, C = Tt(v), w = C === v, E = l || (w || !m ? [Ms(v)] : Ad(v)), T = [v].concat(E).reduce(function(ye, Ht) {
      return ye.concat(Tt(Ht) === Hi ? Cd(t, {
        placement: Ht,
        boundary: u,
        rootBoundary: _,
        padding: p,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : Ht);
    }, []), A = t.rects.reference, k = t.rects.popper, I = /* @__PURE__ */ new Map(), O = true, x = T[0], L = 0; L < T.length; L++) {
      var S = T[L], N = Tt(S), P = Xe(S) === Te, tt = [Q, dt].indexOf(N) >= 0, et = tt ? "width" : "height", U = Ge(t, {
        placement: S,
        boundary: u,
        rootBoundary: _,
        altBoundary: f,
        padding: p
      }), bt = tt ? P ? ut : J : P ? dt : Q;
      A[et] > k[et] && (bt = Ms(bt));
      var Gi = Ms(bt), se = [];
      if (o && se.push(U[N] <= 0), a && se.push(U[bt] <= 0, U[Gi] <= 0), se.every(function(ye) {
        return ye;
      })) {
        x = S, O = false;
        break;
      }
      I.set(S, se);
    }
    if (O)
      for (var qi = m ? 3 : 1, mn = function(Ht) {
        var ri = T.find(function(Qi) {
          var ne = I.get(Qi);
          if (ne)
            return ne.slice(0, Ht).every(function(gn) {
              return gn;
            });
        });
        if (ri)
          return x = ri, "break";
      }, oi = qi; oi > 0; oi--) {
        var Zi = mn(oi);
        if (Zi === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[i]._skip = true, t.placement = x, t.reset = true);
  }
}
var kc = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: yd,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function Lr(s, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: s.top - t.height - e.y,
    right: s.right - t.width + e.x,
    bottom: s.bottom - t.height + e.y,
    left: s.left - t.width - e.x
  };
}
function Nr(s) {
  return [Q, ut, dt, J].some(function(t) {
    return s[t] >= 0;
  });
}
function wd(s) {
  var t = s.state, e = s.name, i = t.rects.reference, n = t.rects.popper, o = t.modifiersData.preventOverflow, r = Ge(t, {
    elementContext: "reference"
  }), a = Ge(t, {
    altBoundary: true
  }), l = Lr(r, i), p = Lr(a, n, o), u = Nr(l), _ = Nr(p);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: p,
    isReferenceHidden: u,
    hasPopperEscaped: _
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": _
  });
}
var xc = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: wd
};
function kd(s, t, e) {
  var i = Tt(s), n = [J, Q].indexOf(i) >= 0 ? -1 : 1, o = typeof e == "function" ? e(Object.assign({}, t, {
    placement: s
  })) : e, r = o[0], a = o[1];
  return r = r || 0, a = (a || 0) * n, [J, ut].indexOf(i) >= 0 ? {
    x: a,
    y: r
  } : {
    x: r,
    y: a
  };
}
function xd(s) {
  var t = s.state, e = s.options, i = s.name, n = e.offset, o = n === void 0 ? [0, 0] : n, r = Qo.reduce(function(u, _) {
    return u[_] = kd(_, t.rects, o), u;
  }, {}), a = r[t.placement], l = a.x, p = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += p), t.modifiersData[i] = r;
}
var Oc = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: xd
};
function Od(s) {
  var t = s.state, e = s.name;
  t.modifiersData[e] = wc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var lr = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: Od,
  data: {}
};
function Sd(s) {
  return s === "x" ? "y" : "x";
}
function Id(s) {
  var t = s.state, e = s.options, i = s.name, n = e.mainAxis, o = n === void 0 ? true : n, r = e.altAxis, a = r === void 0 ? false : r, l = e.boundary, p = e.rootBoundary, u = e.altBoundary, _ = e.padding, f = e.tether, g = f === void 0 ? true : f, m = e.tetherOffset, b = m === void 0 ? 0 : m, v = Ge(t, {
    boundary: l,
    rootBoundary: p,
    padding: _,
    altBoundary: u
  }), C = Tt(t.placement), w = Xe(t.placement), E = !w, T = ir(C), A = Sd(T), k = t.modifiersData.popperOffsets, I = t.rects.reference, O = t.rects.popper, x = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, L = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (k) {
    if (o) {
      var P, tt = T === "y" ? Q : J, et = T === "y" ? dt : ut, U = T === "y" ? "height" : "width", bt = k[T], Gi = bt + v[tt], se = bt - v[et], qi = g ? -O[U] / 2 : 0, mn = w === Te ? I[U] : O[U], oi = w === Te ? -O[U] : -I[U], Zi = t.elements.arrow, ye = g && Zi ? er(Zi) : {
        width: 0,
        height: 0
      }, Ht = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Tc(), ri = Ht[tt], Qi = Ht[et], ne = Si(0, I[U], ye[U]), gn = E ? I[U] / 2 - qi - ne - ri - L.mainAxis : mn - ne - ri - L.mainAxis, Lh = E ? -I[U] / 2 + qi + ne + Qi + L.mainAxis : oi + ne + Qi + L.mainAxis, bn = t.elements.arrow && Vi(t.elements.arrow), Nh = bn ? T === "y" ? bn.clientTop || 0 : bn.clientLeft || 0 : 0, br = (P = S == null ? void 0 : S[T]) != null ? P : 0, Mh = bt + gn - br - Nh, Rh = bt + Lh - br, vr = Si(g ? sn(Gi, Mh) : Gi, bt, g ? be(se, Rh) : se);
      k[T] = vr, N[T] = vr - bt;
    }
    if (a) {
      var Tr, Ph = T === "x" ? Q : J, Bh = T === "x" ? dt : ut, oe = k[A], Ji = A === "y" ? "height" : "width", Er = oe + v[Ph], Cr = oe - v[Bh], vn = [Q, J].indexOf(C) !== -1, Ar = (Tr = S == null ? void 0 : S[A]) != null ? Tr : 0, yr = vn ? Er : oe - I[Ji] - O[Ji] - Ar + L.altAxis, wr = vn ? oe + I[Ji] + O[Ji] - Ar - L.altAxis : Cr, kr = g && vn ? ad(yr, oe, wr) : Si(g ? yr : Er, oe, g ? wr : Cr);
      k[A] = kr, N[A] = kr - oe;
    }
    t.modifiersData[i] = N;
  }
}
var Sc = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Id,
  requiresIfExists: ["offset"]
};
function Dd(s) {
  return {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  };
}
function $d(s) {
  return s === pt(s) || !ht(s) ? or(s) : Dd(s);
}
function Ld(s) {
  var t = s.getBoundingClientRect(), e = ze(t.width) / s.offsetWidth || 1, i = ze(t.height) / s.offsetHeight || 1;
  return e !== 1 || i !== 1;
}
function Nd(s, t, e) {
  e === void 0 && (e = false);
  var i = ht(t), n = ht(t) && Ld(t), o = ee(t), r = Ue(s, n, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (i || !i && !e) && ((Mt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ar(o)) && (a = $d(t)), ht(t) ? (l = Ue(t, true), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = rr(o))), {
    x: r.left + a.scrollLeft - l.x,
    y: r.top + a.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function Md(s) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), i = [];
  s.forEach(function(o) {
    t.set(o.name, o);
  });
  function n(o) {
    e.add(o.name);
    var r = [].concat(o.requires || [], o.requiresIfExists || []);
    r.forEach(function(a) {
      if (!e.has(a)) {
        var l = t.get(a);
        l && n(l);
      }
    }), i.push(o);
  }
  return s.forEach(function(o) {
    e.has(o.name) || n(o);
  }), i;
}
function Rd(s) {
  var t = Md(s);
  return en.reduce(function(e, i) {
    return e.concat(t.filter(function(n) {
      return n.phase === i;
    }));
  }, []);
}
function Pd(s) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(s());
      });
    })), t;
  };
}
function Vt(s) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    e[i - 1] = arguments[i];
  return [].concat(e).reduce(function(n, o) {
    return n.replace(/%s/, o);
  }, s);
}
var ae = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var Bd = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var Mr = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Hd(s) {
  s.forEach(function(t) {
    [].concat(Object.keys(t), Mr).filter(function(e, i, n) {
      return n.indexOf(e) === i;
    }).forEach(function(e) {
      switch (e) {
        case "name":
          typeof t.name != "string" && console.error(Vt(ae, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Vt(ae, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          en.indexOf(t.phase) < 0 && console.error(Vt(ae, t.name, '"phase"', "either " + en.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Vt(ae, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Vt(ae, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Vt(ae, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Vt(ae, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Mr.map(function(i) {
            return '"' + i + '"';
          }).join(", ") + '; but "' + e + '" was provided.');
      }
      t.requires && t.requires.forEach(function(i) {
        s.find(function(n) {
          return n.name === i;
        }) == null && console.error(Vt(Bd, String(t.name), i, i));
      });
    });
  });
}
function Vd(s, t) {
  var e = /* @__PURE__ */ new Set();
  return s.filter(function(i) {
    var n = t(i);
    if (!e.has(n))
      return e.add(n), true;
  });
}
function Wd(s) {
  var t = s.reduce(function(e, i) {
    var n = e[i.name];
    return e[i.name] = n ? Object.assign({}, n, i, {
      options: Object.assign({}, n.options, i.options),
      data: Object.assign({}, n.data, i.data)
    }) : i, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var Rr = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var Fd = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var Pr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Br() {
  for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
    t[e] = arguments[e];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function an(s) {
  s === void 0 && (s = {});
  var t = s, e = t.defaultModifiers, i = e === void 0 ? [] : e, n = t.defaultOptions, o = n === void 0 ? Pr : n;
  return function(a, l, p) {
    p === void 0 && (p = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Pr, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, _ = [], f = false, g = {
      state: u,
      setOptions: function(C) {
        var w = typeof C == "function" ? C(u.options) : C;
        b(), u.options = Object.assign({}, o, u.options, w), u.scrollParents = {
          reference: Ee(a) ? Ii(a) : a.contextElement ? Ii(a.contextElement) : [],
          popper: Ii(l)
        };
        var E = Rd(Wd([].concat(i, u.options.modifiers)));
        if (u.orderedModifiers = E.filter(function(S) {
          return S.enabled;
        }), {}.NODE_ENV !== "production") {
          var T = Vd([].concat(E, u.options.modifiers), function(S) {
            var N = S.name;
            return N;
          });
          if (Hd(T), Tt(u.options.placement) === Hi) {
            var A = u.orderedModifiers.find(function(S) {
              var N = S.name;
              return N === "flip";
            });
            A || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = Ct(l), I = k.marginTop, O = k.marginRight, x = k.marginBottom, L = k.marginLeft;
          [I, O, x, L].some(function(S) {
            return parseFloat(S);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return m(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = u.elements, w = C.reference, E = C.popper;
          if (!Br(w, E)) {
            ({}).NODE_ENV !== "production" && console.error(Rr);
            return;
          }
          u.rects = {
            reference: Nd(w, Vi(E), u.options.strategy === "fixed"),
            popper: er(E)
          }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(S) {
            return u.modifiersData[S.name] = Object.assign({}, S.data);
          });
          for (var T = 0, A = 0; A < u.orderedModifiers.length; A++) {
            if ({}.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(Fd);
              break;
            }
            if (u.reset === true) {
              u.reset = false, A = -1;
              continue;
            }
            var k = u.orderedModifiers[A], I = k.fn, O = k.options, x = O === void 0 ? {} : O, L = k.name;
            typeof I == "function" && (u = I({
              state: u,
              options: x,
              name: L,
              instance: g
            }) || u);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Pd(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        b(), f = true;
      }
    };
    if (!Br(a, l))
      return {}.NODE_ENV !== "production" && console.error(Rr), g;
    g.setOptions(p).then(function(v) {
      !f && p.onFirstUpdate && p.onFirstUpdate(v);
    });
    function m() {
      u.orderedModifiers.forEach(function(v) {
        var C = v.name, w = v.options, E = w === void 0 ? {} : w, T = v.effect;
        if (typeof T == "function") {
          var A = T({
            state: u,
            name: C,
            instance: g,
            options: E
          }), k = function() {
          };
          _.push(A || k);
        }
      });
    }
    function b() {
      _.forEach(function(v) {
        return v();
      }), _ = [];
    }
    return g;
  };
}
var Yd = an();
var jd = [nr, lr, sr, tr];
var Kd = an({
  defaultModifiers: jd
});
var zd = [nr, lr, sr, tr, Oc, kc, Sc, Ac, xc];
var Ce = an({
  defaultModifiers: zd
});
var Ic = Object.freeze(Object.defineProperty({
  __proto__: null,
  afterMain: _c,
  afterRead: dc,
  afterWrite: gc,
  applyStyles: tr,
  arrow: Ac,
  auto: Hi,
  basePlacements: ti,
  beforeMain: uc,
  beforeRead: cc,
  beforeWrite: fc,
  bottom: dt,
  clippingParents: ac,
  computeStyles: sr,
  createPopper: Ce,
  createPopperBase: Yd,
  createPopperLite: Kd,
  detectOverflow: Ge,
  end: Ke,
  eventListeners: nr,
  flip: kc,
  hide: xc,
  left: J,
  main: pc,
  modifierPhases: en,
  offset: Oc,
  placements: Qo,
  popper: $e,
  popperGenerator: an,
  popperOffsets: lr,
  preventOverflow: Sc,
  read: hc,
  reference: lc,
  right: ut,
  start: Te,
  top: Q,
  variationPlacements: So,
  viewport: Zo,
  write: mc
}, Symbol.toStringTag, { value: "Module" }));
function An(s) {
  return s === "true" ? true : s === "false" ? false : s === Number(s).toString() ? Number(s) : s === "" || s === "null" ? null : s;
}
function yn(s) {
  return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
var h = {
  setDataAttribute(s, t, e) {
    s.setAttribute(`data-te-${yn(t)}`, e);
  },
  removeDataAttribute(s, t) {
    s.removeAttribute(`data-te-${yn(t)}`);
  },
  getDataAttributes(s) {
    if (!s)
      return {};
    const t = {};
    return Object.keys(s.dataset).filter((e) => e.startsWith("te")).forEach((e) => {
      if (e.startsWith("teClass"))
        return;
      let i = e.replace(/^te/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = An(s.dataset[e]);
    }), t;
  },
  getDataClassAttributes(s) {
    if (!s)
      return {};
    const t = {
      ...s.dataset
    };
    return Object.keys(t).filter((e) => e.startsWith("teClass")).forEach((e) => {
      let i = e.replace(/^teClass/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = An(t[e]);
    }), t;
  },
  getDataAttribute(s, t) {
    return An(
      s.getAttribute(`data-te-${yn(t)}`)
    );
  },
  offset(s) {
    const t = s.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position(s) {
    return {
      top: s.offsetTop,
      left: s.offsetLeft
    };
  },
  style(s, t) {
    Object.assign(s.style, t);
  },
  toggleClass(s, t) {
    s && wn(t).forEach((e) => {
      s.classList.contains(e) ? s.classList.remove(e) : s.classList.add(e);
    });
  },
  addClass(s, t) {
    wn(t).forEach(
      (e) => !s.classList.contains(e) && s.classList.add(e)
    );
  },
  addStyle(s, t) {
    Object.keys(t).forEach((e) => {
      s.style[e] = t[e];
    });
  },
  removeClass(s, t) {
    wn(t).forEach(
      (e) => s.classList.contains(e) && s.classList.remove(e)
    );
  },
  hasClass(s, t) {
    return s.classList.contains(t);
  },
  maxOffset(s) {
    const t = s.getBoundingClientRect();
    return {
      top: t.top + Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.scrollY
      ),
      left: t.left + Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft,
        window.scrollX
      )
    };
  }
};
function wn(s) {
  return typeof s == "string" ? s.split(" ") : Array.isArray(s) ? s : false;
}
var Ud = 3;
var d = {
  closest(s, t) {
    return s.closest(t);
  },
  matches(s, t) {
    return s.matches(t);
  },
  find(s, t = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(t, s)
    );
  },
  findOne(s, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, s);
  },
  children(s, t) {
    return [].concat(...s.children).filter((i) => i.matches(t));
  },
  parents(s, t) {
    const e = [];
    let i = s.parentNode;
    for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== Ud; )
      this.matches(i, t) && e.push(i), i = i.parentNode;
    return e;
  },
  prev(s, t) {
    let e = s.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  next(s, t) {
    let e = s.nextElementSibling;
    for (; e; ) {
      if (this.matches(e, t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(s) {
    const t = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
    return this.find(t, s).filter(
      (e) => !ge(e) && Nt(e)
    );
  }
};
var kn = "dropdown";
var Xd = "te.dropdown";
var Ae = `.${Xd}`;
var cr = ".data-api";
var Rs = "Escape";
var Hr = "Space";
var Vr = "Tab";
var $o = "ArrowUp";
var Ps = "ArrowDown";
var Gd = 2;
var qd = new RegExp(
  `${$o}|${Ps}|${Rs}`
);
var Zd = `hide${Ae}`;
var Qd = `hidden${Ae}`;
var Jd = `show${Ae}`;
var tu = `shown${Ae}`;
var eu = `click${Ae}${cr}`;
var Wr = `keydown${Ae}${cr}`;
var iu = `keyup${Ae}${cr}`;
var Wt = "show";
var su = "dropup";
var nu = "dropend";
var ou = "dropstart";
var ru = "[data-te-navbar-ref]";
var es = "[data-te-dropdown-toggle-ref]";
var xn = "[data-te-dropdown-menu-ref]";
var au = "[data-te-navbar-nav-ref]";
var lu = "[data-te-dropdown-menu-ref] [data-te-dropdown-item-ref]:not(.disabled):not(:disabled)";
var cu = F() ? "top-end" : "top-start";
var hu = F() ? "top-start" : "top-end";
var du = F() ? "bottom-end" : "bottom-start";
var uu = F() ? "bottom-start" : "bottom-end";
var pu = F() ? "left-start" : "right-start";
var _u = F() ? "right-start" : "left-start";
var fu = [{ opacity: "0" }, { opacity: "1" }];
var mu = [{ opacity: "1" }, { opacity: "0" }];
var is = {
  duration: 550,
  iterations: 1,
  easing: "ease",
  fill: "both"
};
var gu = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: true,
  dropdownAnimation: "on"
};
var bu = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)",
  dropdownAnimation: "string"
};
var Dt = class _Dt extends gt {
  constructor(t, e) {
    super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._fadeOutAnimate = null;
    const i = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this._animationCanPlay = this._config.dropdownAnimation === "on" && !i, this._didInit = false, this._init();
  }
  // Getters
  static get Default() {
    return gu;
  }
  static get DefaultType() {
    return bu;
  }
  static get NAME() {
    return kn;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (ge(this._element) || this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    if (c.trigger(
      this._element,
      Jd,
      t
    ).defaultPrevented)
      return;
    const i = _Dt.getParentFromElement(this._element);
    this._inNavbar ? h.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i), "ontouchstart" in document.documentElement && !i.closest(au) && [].concat(...document.body.children).forEach((n) => c.on(n, "mouseover", tn)), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.setAttribute(`data-te-dropdown-${Wt}`, ""), this._animationCanPlay && this._menu.animate(fu, is), this._element.setAttribute(`data-te-dropdown-${Wt}`, ""), setTimeout(
      () => {
        c.trigger(this._element, tu, t);
      },
      this._animationCanPlay ? is.duration : 0
    );
  }
  hide() {
    if (ge(this._element) || !this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _init() {
    this._didInit || (c.on(
      document,
      Wr,
      es,
      _Dt.dataApiKeydownHandler
    ), c.on(
      document,
      Wr,
      xn,
      _Dt.dataApiKeydownHandler
    ), c.on(document, eu, _Dt.clearMenus), c.on(document, iu, _Dt.clearMenus), this._didInit = true);
  }
  _completeHide(t) {
    this._fadeOutAnimate && this._fadeOutAnimate.playState === "running" || c.trigger(
      this._element,
      Zd,
      t
    ).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((i) => c.off(i, "mouseover", tn)), this._animationCanPlay && (this._fadeOutAnimate = this._menu.animate(
      mu,
      is
    )), setTimeout(
      () => {
        this._popper && this._popper.destroy(), this._menu.removeAttribute(`data-te-dropdown-${Wt}`), this._element.removeAttribute(`data-te-dropdown-${Wt}`), this._element.setAttribute("aria-expanded", "false"), h.removeDataAttribute(this._menu, "popper"), c.trigger(this._element, Qd, t);
      },
      this._animationCanPlay ? is.duration : 0
    ));
  }
  _getConfig(t) {
    if (t = {
      ...this.constructor.Default,
      ...h.getDataAttributes(this._element),
      ...t
    }, D(kn, t, this.constructor.DefaultType), typeof t.reference == "object" && !je(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(
        `${kn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper(t) {
    if (typeof Ic > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let e = this._element;
    this._config.reference === "parent" ? e = t : je(this._config.reference) ? e = te(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
    const i = this._getPopperConfig(), n = i.modifiers.find(
      (o) => o.name === "applyStyles" && o.enabled === false
    );
    this._popper = Ce(
      e,
      this._menu,
      i
    ), n && h.setDataAttribute(this._menu, "popper", "static");
  }
  _isShown(t = this._element) {
    return t.dataset[`teDropdown${Wt.charAt(0).toUpperCase() + Wt.slice(1)}`] === "";
  }
  _getMenuElement() {
    return d.next(this._element, xn)[0];
  }
  _getPlacement() {
    const t = this._element.parentNode;
    if (t.dataset.teDropdownPosition === nu)
      return pu;
    if (t.dataset.teDropdownPosition === ou)
      return _u;
    const e = t.dataset.teDropdownAlignment === "end";
    return t.dataset.teDropdownPosition === su ? e ? hu : cu : e ? uu : du;
  }
  _detectNavbar() {
    return this._element.closest(ru) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }
      ]
    };
    return this._config.display === "static" && (t.modifiers = [
      {
        name: "applyStyles",
        enabled: false
      }
    ]), {
      ...t,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
    };
  }
  _selectMenuItem({ key: t, target: e }) {
    const i = d.find(
      lu,
      this._menu
    ).filter(Nt);
    i.length && Jl(
      i,
      e,
      t === Ps,
      !i.includes(e)
    ).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Dt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t && (t.button === Gd || t.type === "keyup" && t.key !== Vr))
      return;
    const e = d.find(es);
    for (let i = 0, n = e.length; i < n; i++) {
      const o = _Dt.getInstance(e[i]);
      if (!o || o._config.autoClose === false || !o._isShown())
        continue;
      const r = {
        relatedTarget: o._element
      };
      if (t) {
        const a = t.composedPath(), l = a.includes(o._menu);
        if (a.includes(o._element) || o._config.autoClose === "inside" && !l || o._config.autoClose === "outside" && l || o._menu.contains(t.target) && (t.type === "keyup" && t.key === Vr || /input|select|option|textarea|form/i.test(t.target.tagName)))
          continue;
        t.type === "click" && (r.clickEvent = t);
      }
      o._completeHide(r);
    }
  }
  static getParentFromElement(t) {
    return Jt(t) || t.parentNode;
  }
  static dataApiKeydownHandler(t) {
    if (/input|textarea/i.test(t.target.tagName) ? t.key === Hr || t.key !== Rs && (t.key !== Ps && t.key !== $o || t.target.closest(xn)) : !qd.test(t.key))
      return;
    const e = this.dataset[`teDropdown${Wt.charAt(0).toUpperCase() + Wt.slice(1)}`] === "";
    if (!e && t.key === Rs || (t.preventDefault(), t.stopPropagation(), ge(this)))
      return;
    const i = this.matches(es) ? this : d.prev(this, es)[0], n = _Dt.getOrCreateInstance(i);
    if (t.key === Rs) {
      n.hide();
      return;
    }
    if (t.key === $o || t.key === Ps) {
      e || n.show(), n._selectMenuItem(t);
      return;
    }
    (!e || t.key === Hr) && _Dt.clearMenus();
  }
};
var On = "collapse";
var Dc = "te.collapse";
var ln = `.${Dc}`;
var Fr = {
  toggle: true,
  parent: null
};
var vu = {
  toggle: "boolean",
  parent: "(null|element)"
};
var Tu = `show${ln}`;
var Eu = `shown${ln}`;
var Cu = `hide${ln}`;
var Au = `hidden${ln}`;
var Sn = "data-te-collapse-show";
var Yr = "data-te-collapse-collapsed";
var ss = "data-te-collapse-collapsing";
var yu = "data-te-collapse-horizontal";
var Me = "data-te-collapse-item";
var jr = `:scope [${Me}] [${Me}]`;
var wu = "width";
var ku = "height";
var xu = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]";
var Kr = "[data-te-collapse-init]";
var Ou = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
};
var Su = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
var Zt = class _Zt extends gt {
  constructor(t, e, i) {
    super(t), this._isTransitioning = false, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._triggerArray = [];
    const n = d.find(Kr);
    for (let o = 0, r = n.length; o < r; o++) {
      const a = n[o], l = qo(a), p = d.find(l).filter(
        (u) => u === this._element
      );
      l !== null && p.length && (this._selector = l, this._triggerArray.push(a));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Fr;
  }
  static get NAME() {
    return On;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [], e;
    if (this._config.parent) {
      const u = d.find(
        jr,
        this._config.parent
      );
      t = d.find(
        xu,
        this._config.parent
      ).filter((_) => !u.includes(_));
    }
    const i = d.findOne(this._selector);
    if (t.length) {
      const u = t.find((_) => i !== _);
      if (e = u ? _Zt.getInstance(u) : null, e && e._isTransitioning)
        return;
    }
    if (c.trigger(this._element, Tu).defaultPrevented)
      return;
    t.forEach((u) => {
      i !== u && _Zt.getOrCreateInstance(u, { toggle: false }).hide(), e || y.setData(u, Dc, null);
    });
    const o = this._getDimension(), r = o === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    h.removeClass(this._element, this._classes.visible), h.removeClass(this._element, this._classes.hidden), h.addClass(this._element, r), this._element.removeAttribute(Me), this._element.setAttribute(ss, ""), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
    const a = () => {
      this._isTransitioning = false, h.removeClass(this._element, this._classes.hidden), h.removeClass(this._element, r), h.addClass(this._element, this._classes.visible), this._element.removeAttribute(ss), this._element.setAttribute(Me, ""), this._element.setAttribute(Sn, ""), this._element.style[o] = "", c.trigger(this._element, Eu);
    }, p = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(a, this._element, true), this._element.style[o] = `${this._element[p]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || c.trigger(this._element, Cu).defaultPrevented)
      return;
    const e = this._getDimension(), i = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Je(this._element), h.addClass(this._element, i), h.removeClass(this._element, this._classes.visible), h.removeClass(this._element, this._classes.hidden), this._element.setAttribute(ss, ""), this._element.removeAttribute(Me), this._element.removeAttribute(Sn);
    const n = this._triggerArray.length;
    for (let r = 0; r < n; r++) {
      const a = this._triggerArray[r], l = Jt(a);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], false);
    }
    this._isTransitioning = true;
    const o = () => {
      this._isTransitioning = false, h.removeClass(this._element, i), h.addClass(this._element, this._classes.visible), h.addClass(this._element, this._classes.hidden), this._element.removeAttribute(ss), this._element.setAttribute(Me, ""), c.trigger(this._element, Au);
    };
    this._element.style[e] = "", this._queueCallback(o, this._element, true);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(Sn);
  }
  // Private
  _getConfig(t) {
    return t = {
      ...Fr,
      ...h.getDataAttributes(this._element),
      ...t
    }, t.toggle = !!t.toggle, t.parent = te(t.parent), D(On, t, vu), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Ou,
      ...e,
      ...t
    }, D(On, t, Su), t;
  }
  _getDimension() {
    return this._element.hasAttribute(yu) ? wu : ku;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = d.find(
      jr,
      this._config.parent
    );
    d.find(Kr, this._config.parent).filter((e) => !t.includes(e)).forEach((e) => {
      const i = Jt(e);
      i && this._addAriaAndCollapsedClass([e], this._isShown(i));
    });
  }
  _addAriaAndCollapsedClass(t, e) {
    t.length && t.forEach((i) => {
      e ? i.removeAttribute(Yr) : i.setAttribute(`${Yr}`, ""), i.setAttribute("aria-expanded", e);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = {};
      typeof t == "string" && /show|hide/.test(t) && (e.toggle = false);
      const i = _Zt.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t]();
      }
    });
  }
};
var zr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
var Ur = ".sticky-top";
var qe = class {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(
      this._element,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      zr,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      Ur,
      "marginRight",
      (e) => e - t
    );
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, i) {
    const n = this.getWidth(), o = (r) => {
      if (r !== this._element && window.innerWidth > r.clientWidth + n)
        return;
      this._saveInitialAttribute(r, e);
      const a = window.getComputedStyle(r)[e];
      r.style[e] = `${i(
        Number.parseFloat(a)
      )}px`;
    };
    this._applyManipulationCallback(t, o);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(zr, "paddingRight"), this._resetElementAttributes(Ur, "marginRight");
  }
  _saveInitialAttribute(t, e) {
    const i = t.style[e];
    i && h.setDataAttribute(t, e, i);
  }
  _resetElementAttributes(t, e) {
    const i = (n) => {
      const o = h.getDataAttribute(n, e);
      typeof o > "u" ? n.style.removeProperty(e) : (h.removeDataAttribute(n, e), n.style[e] = o);
    };
    this._applyManipulationCallback(t, i);
  }
  _applyManipulationCallback(t, e) {
    je(t) ? e(t) : d.find(t, this._element).forEach(e);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
};
var Iu = {
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: "body",
  // give the choice to place backdrop under different elements
  clickCallback: null,
  backdropClasses: null
};
var Du = {
  isVisible: "boolean",
  isAnimated: "boolean",
  rootElement: "(element|string)",
  clickCallback: "(function|null)",
  backdropClasses: "(array|null)"
};
var $c = "backdrop";
var Xr = `mousedown.te.${$c}`;
var hr = class {
  constructor(t) {
    this._config = this._getConfig(t), this._isAppended = false, this._element = null;
  }
  show(t) {
    if (!this._config.isVisible) {
      me(t);
      return;
    }
    this._append(), this._config.isAnimated && Je(this._getElement());
    const e = this._config.backdropClasses || [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "fixed",
      "top-0",
      "left-0",
      "z-[1040]",
      "bg-black",
      "w-screen",
      "h-screen"
    ];
    h.removeClass(this._getElement(), "opacity-0"), h.addClass(this._getElement(), e), this._element.setAttribute("data-te-backdrop-show", ""), this._emulateAnimation(() => {
      me(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      me(t);
      return;
    }
    this._element.removeAttribute("data-te-backdrop-show"), this._getElement().classList.add("opacity-0"), this._getElement().classList.remove("opacity-50"), this._emulateAnimation(() => {
      this.dispose(), me(t);
    });
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add("opacity-50"), this._element = t;
    }
    return this._element;
  }
  _getConfig(t) {
    return t = {
      ...Iu,
      ...typeof t == "object" ? t : {}
    }, t.rootElement = te(t.rootElement), D($c, t, Du), t;
  }
  _append() {
    this._isAppended || (this._config.rootElement.append(this._getElement()), c.on(this._getElement(), Xr, () => {
      me(this._config.clickCallback);
    }), this._isAppended = true);
  }
  dispose() {
    this._isAppended && (c.off(this._element, Xr), this._element.remove(), this._isAppended = false);
  }
  _emulateAnimation(t) {
    Ql(
      t,
      this._getElement(),
      this._config.isAnimated
    );
  }
};
var Wi = class {
  constructor(t, e = {}, i) {
    this._element = t, this._toggler = i, this._event = e.event || "blur", this._condition = e.condition || (() => true), this._selector = e.selector || 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])', this._onlyVisible = e.onlyVisible || false, this._focusableElements = [], this._firstElement = null, this._lastElement = null, this.handler = (n) => {
      this._condition(n) && !n.shiftKey && n.target === this._lastElement ? (n.preventDefault(), this._firstElement.focus()) : this._condition(n) && n.shiftKey && n.target === this._firstElement && (n.preventDefault(), this._lastElement.focus());
    };
  }
  trap() {
    this._setElements(), this._init(), this._setFocusTrap();
  }
  disable() {
    this._focusableElements.forEach((t) => {
      t.removeEventListener(this._event, this.handler);
    }), this._toggler && this._toggler.focus();
  }
  update() {
    this._setElements(), this._setFocusTrap();
  }
  _init() {
    const t = (e) => {
      !this._firstElement || e.key !== "Tab" || this._focusableElements.includes(e.target) || (e.preventDefault(), this._firstElement.focus(), window.removeEventListener("keydown", t));
    };
    window.addEventListener("keydown", t);
  }
  _filterVisible(t) {
    return t.filter((e) => {
      if (!Nt(e))
        return false;
      const i = d.parents(e, "*");
      for (let n = 0; n < i.length; n++) {
        const o = window.getComputedStyle(i[n]);
        if (o && (o.display === "none" || o.visibility === "hidden"))
          return false;
      }
      return true;
    });
  }
  _setElements() {
    this._focusableElements = d.focusableChildren(this._element), this._onlyVisible && (this._focusableElements = this._filterVisible(this._focusableElements)), this._firstElement = this._focusableElements[0], this._lastElement = this._focusableElements[this._focusableElements.length - 1];
  }
  _setFocusTrap() {
    this._focusableElements.forEach((t, e) => {
      e === this._focusableElements.length - 1 || e === 0 ? t.addEventListener(this._event, this.handler) : t.removeEventListener(this._event, this.handler);
    });
  }
};
var Gr = [];
var cn = (s, t = "hide") => {
  const e = `click.dismiss${s.EVENT_KEY}`, i = s.NAME;
  Gr.includes(i) || (Gr.push(i), c.on(
    document,
    e,
    `[data-te-${i}-dismiss]`,
    function(n) {
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), ge(this))
        return;
      const o = Jt(this) || this.closest(`.${i}`) || this.closest(`[data-te-${i}-init]`);
      if (!o)
        return;
      s.getOrCreateInstance(o)[t]();
    }
  ));
};
var qr = "offcanvas";
var $u = "te.offcanvas";
var ei = `.${$u}`;
var Lu = ".data-api";
var Nu = `load${ei}${Lu}`;
var Mu = "Escape";
var Zr = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var Ru = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
};
var Qr = "show";
var Pu = "[data-te-offcanvas-init][data-te-offcanvas-show]";
var Bu = `show${ei}`;
var Hu = `shown${ei}`;
var Vu = `hide${ei}`;
var Wu = `hidden${ei}`;
var Fu = `keydown.dismiss${ei}`;
var Bs = class _Bs extends gt {
  constructor(t, e) {
    super(t), this._config = this._getConfig(e), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners(), this._didInit = false, this._init();
  }
  // Getters
  static get NAME() {
    return qr;
  }
  static get Default() {
    return Zr;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || c.trigger(this._element, Bu, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new qe().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`data-te-offcanvas-${Qr}`, "");
    const i = () => {
      this._config.scroll || this._focustrap.trap(), c.trigger(this._element, Hu, { relatedTarget: t });
    };
    this._queueCallback(i, this._element, true);
  }
  hide() {
    if (!this._isShown || c.trigger(this._element, Vu).defaultPrevented)
      return;
    this._focustrap.disable(), this._element.blur(), this._isShown = false, this._element.removeAttribute(`data-te-offcanvas-${Qr}`), this._backdrop.hide();
    const e = () => {
      this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new qe().reset(), c.trigger(this._element, Wu);
    };
    this._queueCallback(e, this._element, true);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (c.on(
      window,
      Nu,
      () => d.find(Pu).forEach(
        (t) => _Bs.getOrCreateInstance(t).show()
      )
    ), this._didInit = true, cn(_Bs));
  }
  _getConfig(t) {
    return t = {
      ...Zr,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, D(qr, t, Ru), t;
  }
  _initializeBackDrop() {
    return new hr({
      isVisible: this._config.backdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }
  _initializeFocusTrap() {
    return new Wi(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _addEventListeners() {
    c.on(this._element, Fu, (t) => {
      this._config.keyboard && t.key === Mu && this.hide();
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Bs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
var In = "alert";
var Yu = "te.alert";
var Lc = `.${Yu}`;
var ju = `close${Lc}`;
var Ku = `closed${Lc}`;
var ai = "data-te-alert-show";
var zu = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
};
var Jr = {
  animation: true,
  autohide: true,
  delay: 1e3
};
var Uu = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
};
var Xu = {
  fadeIn: "string",
  fadeOut: "string"
};
var Lo = class _Lo extends gt {
  constructor(t, e, i) {
    super(t), this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._didInit = false, this._init();
  }
  // Getters
  static get DefaultType() {
    return zu;
  }
  static get Default() {
    return Jr;
  }
  static get NAME() {
    return In;
  }
  // Public
  close() {
    if (c.trigger(this._element, ju).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, h.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(ai), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(ai) && (h.removeClass(this._element, "hidden"), h.addClass(this._element, "block"), Nt(this._element))) {
        const t = (e) => {
          h.removeClass(this._element, "hidden"), h.addClass(this._element, "block"), c.off(e.target, "animationend", t);
        };
        this._element.setAttribute(ai, ""), c.on(this._element, "animationend", t);
      }
      this._config.animation && (h.removeClass(this._element, this._classes.fadeOut), h.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(ai)) {
      this._element.removeAttribute(ai);
      const t = (e) => {
        h.addClass(this._element, "hidden"), h.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), c.off(e.target, "animationend", t);
      };
      c.on(this._element, "animationend", t), h.removeClass(this._element, this._classes.fadeIn), h.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (cn(_Lo, "close"), this._didInit = true);
  }
  _getConfig(t) {
    return t = {
      ...Jr,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, D(In, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Uu,
      ...e,
      ...t
    }, D(In, t, Xu), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), c.trigger(this._element, Ku), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Lo.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
var Dn = "carousel";
var Gu = "te.carousel";
var _t = `.${Gu}`;
var Nc = ".data-api";
var qu = "ArrowLeft";
var Zu = "ArrowRight";
var Qu = 500;
var Ju = 40;
var ta = {
  interval: 5e3,
  keyboard: true,
  ride: false,
  pause: "hover",
  wrap: true,
  touch: true
};
var tp = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  ride: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
};
var ep = {
  pointer: "touch-pan-y",
  block: "!block",
  visible: "data-[te-carousel-fade]:opacity-100 data-[te-carousel-fade]:z-[1]",
  invisible: "data-[te-carousel-fade]:z-0 data-[te-carousel-fade]:opacity-0 data-[te-carousel-fade]:duration-[600ms] data-[te-carousel-fade]:delay-600",
  slideRight: "translate-x-full",
  slideLeft: "-translate-x-full"
};
var ip = {
  pointer: "string",
  block: "string",
  visible: "string",
  invisible: "string",
  slideRight: "string",
  slideLeft: "string"
};
var le = "next";
var ce = "prev";
var _e = "left";
var mi = "right";
var sp = {
  [qu]: mi,
  [Zu]: _e
};
var np = `slide${_t}`;
var $n = `slid${_t}`;
var op = `keydown${_t}`;
var rp = `mouseenter${_t}`;
var ap = `mouseleave${_t}`;
var lp = `touchstart${_t}`;
var cp = `touchmove${_t}`;
var hp = `touchend${_t}`;
var dp = `pointerdown${_t}`;
var up = `pointerup${_t}`;
var pp = `dragstart${_t}`;
var _p = `load${_t}${Nc}`;
var fp = `click${_t}${Nc}`;
var ea = "data-te-carousel-init";
var he = "data-te-carousel-active";
var mp = "data-te-carousel-item-end";
var Ln = "data-te-carousel-item-start";
var gp = "data-te-carousel-item-next";
var bp = "data-te-carousel-item-prev";
var vp = "data-te-carousel-pointer-event";
var Tp = "[data-te-carousel-init]";
var Mc = "[data-te-carousel-active]";
var dr = "[data-te-carousel-item]";
var we = `${Mc}${dr}`;
var Ep = `${dr} img`;
var Cp = "[data-te-carousel-item-next], [data-te-carousel-item-prev]";
var Ap = "[data-te-carousel-indicators]";
var yp = "[data-te-target]";
var wp = "[data-te-slide], [data-te-slide-to]";
var kp = "touch";
var xp = "pen";
var Ut = class _Ut extends gt {
  constructor(t, e, i) {
    super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._indicatorsElement = d.findOne(
      Ap,
      this._element
    ), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!window.PointerEvent, this._setActiveElementClass(), this._addEventListeners(), this._didInit = false, this._init(), this._config.ride === "carousel" && this.cycle();
  }
  // Getters
  static get Default() {
    return ta;
  }
  static get NAME() {
    return Dn;
  }
  // Public
  next() {
    this._slide(le);
  }
  nextWhenVisible() {
    !document.hidden && Nt(this._element) && this.next();
  }
  prev() {
    this._slide(ce);
  }
  pause(t) {
    t || (this._isPaused = true), d.findOne(Cp, this._element) && (Xl(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
  }
  cycle(t) {
    t || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval(
      (document.visibilityState ? this.nextWhenVisible : this.next).bind(
        this
      ),
      this._config.interval
    ));
  }
  to(t) {
    this._activeElement = d.findOne(
      we,
      this._element
    );
    const e = this._getItemIndex(this._activeElement);
    if (t > this._items.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      c.one(this._element, $n, () => this.to(t));
      return;
    }
    if (e === t) {
      this.pause(), this.cycle();
      return;
    }
    const i = t > e ? le : ce;
    this._slide(i, this._items[t]);
  }
  // Private
  _init() {
    this._didInit || (c.on(
      document,
      fp,
      wp,
      _Ut.dataApiClickHandler
    ), c.on(window, _p, () => {
      const t = d.find(Tp);
      for (let e = 0, i = t.length; e < i; e++)
        _Ut.carouselInterface(
          t[e],
          _Ut.getInstance(t[e])
        );
    }), this._didInit = true);
  }
  _getConfig(t) {
    return t = {
      ...ta,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, D(Dn, t, tp), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...ep,
      ...e,
      ...t
    }, D(Dn, t, ip), t;
  }
  _enableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        c.one(this._element, $n, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  _applyInitialClasses() {
    const t = d.findOne(
      we,
      this._element
    );
    t.classList.add(
      this._classes.block,
      ...this._classes.visible.split(" ")
    ), this._setActiveIndicatorElement(t);
  }
  _handleSwipe() {
    const t = Math.abs(this.touchDeltaX);
    if (t <= Ju)
      return;
    const e = t / this.touchDeltaX;
    this.touchDeltaX = 0, e && this._slide(e > 0 ? mi : _e);
  }
  _setActiveElementClass() {
    this._activeElement = d.findOne(
      we,
      this._element
    ), h.addClass(this._activeElement, "hidden");
  }
  _addEventListeners() {
    this._config.keyboard && c.on(
      this._element,
      op,
      (t) => this._keydown(t)
    ), this._config.pause === "hover" && (c.on(
      this._element,
      rp,
      (t) => this.pause(t)
    ), c.on(
      this._element,
      ap,
      (t) => this._enableCycle(t)
    )), this._config.touch && this._touchSupported && this._addTouchEventListeners(), this._applyInitialClasses();
  }
  _addTouchEventListeners() {
    const t = (o) => this._pointerEvent && (o.pointerType === xp || o.pointerType === kp), e = (o) => {
      t(o) ? this.touchStartX = o.clientX : this._pointerEvent || (this.touchStartX = o.touches[0].clientX);
    }, i = (o) => {
      this.touchDeltaX = o.touches && o.touches.length > 1 ? 0 : o.touches[0].clientX - this.touchStartX;
    }, n = (o) => {
      t(o) && (this.touchDeltaX = o.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(
        (r) => this._enableCycle(r),
        Qu + this._config.interval
      ));
    };
    d.find(Ep, this._element).forEach(
      (o) => {
        c.on(
          o,
          pp,
          (r) => r.preventDefault()
        );
      }
    ), this._pointerEvent ? (c.on(
      this._element,
      dp,
      (o) => e(o)
    ), c.on(this._element, up, (o) => n(o)), this._element.classList.add(this._classes.pointer), this._element.setAttribute(`${vp}`, "")) : (c.on(this._element, lp, (o) => e(o)), c.on(this._element, cp, (o) => i(o)), c.on(this._element, hp, (o) => n(o)));
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = sp[t.key];
    e && (t.preventDefault(), this._slide(e));
  }
  _getItemIndex(t) {
    return this._items = t && t.parentNode ? d.find(dr, t.parentNode) : [], this._items.indexOf(t);
  }
  _getItemByOrder(t, e) {
    const i = t === le;
    return Jl(
      this._items,
      e,
      i,
      this._config.wrap
    );
  }
  _triggerSlideEvent(t, e) {
    const i = this._getItemIndex(t), n = this._getItemIndex(
      d.findOne(we, this._element)
    );
    return c.trigger(this._element, np, {
      relatedTarget: t,
      direction: e,
      from: n,
      to: i
    });
  }
  _setActiveIndicatorElement(t) {
    if (this._indicatorsElement) {
      const e = d.findOne(
        Mc,
        this._indicatorsElement
      );
      e.removeAttribute(he), e.removeAttribute("aria-current"), e.classList.remove("!opacity-100");
      const i = d.find(
        yp,
        this._indicatorsElement
      );
      for (let n = 0; n < i.length; n++)
        if (Number.parseInt(
          i[n].getAttribute("data-te-slide-to"),
          10
        ) === this._getItemIndex(t)) {
          i[n].setAttribute(`${he}`, ""), i[n].setAttribute("aria-current", "true"), i[n].classList.add("!opacity-100");
          break;
        }
    }
  }
  _updateInterval() {
    const t = this._activeElement || d.findOne(we, this._element);
    if (!t)
      return;
    const e = Number.parseInt(
      t.getAttribute("data-te-interval"),
      10
    );
    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
  }
  _slide(t, e) {
    const i = this._directionToOrder(t), n = d.findOne(
      we,
      this._element
    ), o = this._getItemIndex(n), r = e || this._getItemByOrder(i, n), a = this._getItemIndex(r), l = !!this._interval, p = i === le, u = p ? Ln : mp, _ = p ? gp : bp, f = this._orderToDirection(i), g = u === Ln ? this._classes.slideLeft : this._classes.slideRight, m = u !== Ln ? this._classes.slideLeft : this._classes.slideRight;
    if (r && r.hasAttribute(he)) {
      this._isSliding = false;
      return;
    }
    if (this._isSliding || this._triggerSlideEvent(r, f).defaultPrevented || !n || !r)
      return;
    this._isSliding = true, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
    const v = () => {
      c.trigger(this._element, $n, {
        relatedTarget: r,
        direction: f,
        from: o,
        to: a
      });
    };
    if (this._element.hasAttribute(ea)) {
      r.setAttribute(`${_}`, ""), r.classList.add(this._classes.block, m), Je(r), n.setAttribute(`${u}`, ""), n.classList.add(
        g,
        ...this._classes.invisible.split(" ")
      ), n.classList.remove(...this._classes.visible.split(" ")), r.setAttribute(`${u}`, ""), r.classList.add(...this._classes.visible.split(" ")), r.classList.remove(
        this._classes.slideRight,
        this._classes.slideLeft
      );
      const C = () => {
        r.removeAttribute(u), r.removeAttribute(_), r.setAttribute(`${he}`, ""), n.removeAttribute(he), n.classList.remove(
          g,
          ...this._classes.invisible.split(" "),
          this._classes.block
        ), n.removeAttribute(_), n.removeAttribute(u), this._isSliding = false, setTimeout(v, 0);
      };
      this._queueCallback(C, n, true);
    } else
      n.removeAttribute(he), n.classList.remove(this._classes.block), r.setAttribute(`${he}`, ""), r.classList.add(this._classes.block), this._isSliding = false, v();
    l && this.cycle();
  }
  _directionToOrder(t) {
    return [mi, _e].includes(t) ? F() ? t === _e ? ce : le : t === _e ? le : ce : t;
  }
  _orderToDirection(t) {
    return [le, ce].includes(t) ? F() ? t === ce ? _e : mi : t === ce ? mi : _e : t;
  }
  // Static
  static carouselInterface(t, e) {
    const i = _Ut.getOrCreateInstance(t, e);
    let { _config: n } = i;
    typeof e == "object" && (n = {
      ...n,
      ...e
    });
    const o = typeof e == "string" ? e : e.slide;
    if (typeof e == "number") {
      i.to(e);
      return;
    }
    if (typeof o == "string") {
      if (typeof i[o] > "u")
        throw new TypeError(`No method named "${o}"`);
      i[o]();
    } else
      n.interval && n.ride === true && i.pause();
  }
  static jQueryInterface(t) {
    return this.each(function() {
      _Ut.carouselInterface(this, t);
    });
  }
  static dataApiClickHandler(t) {
    const e = Jt(this);
    if (!e || !e.hasAttribute(ea))
      return;
    const i = {
      ...h.getDataAttributes(e),
      ...h.getDataAttributes(this)
    }, n = this.getAttribute("data-te-slide-to");
    n && (i.interval = false), _Ut.carouselInterface(e, i), n && _Ut.getInstance(e).to(n), t.preventDefault();
  }
};
var Nn = "modal";
var Op = "te.modal";
var At = `.${Op}`;
var ia = "Escape";
var sa = {
  backdrop: true,
  keyboard: true,
  focus: true,
  modalNonInvasive: false
};
var Sp = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean",
  modalNonInvasive: "boolean"
};
var Ip = {
  show: "transform-none",
  static: "scale-[1.02]",
  staticProperties: "transition-scale duration-300 ease-in-out"
};
var Dp = {
  show: "string",
  static: "string",
  staticProperties: "string"
};
var $p = `hide${At}`;
var Lp = `hidePrevented${At}`;
var Np = `hidden${At}`;
var Mp = `show${At}`;
var Rp = `shown${At}`;
var na = `resize${At}`;
var oa = `click.dismiss${At}`;
var ra = `keydown.dismiss${At}`;
var Pp = `mouseup.dismiss${At}`;
var aa = `mousedown.dismiss${At}`;
var la = "data-te-modal-open";
var ca = "data-te-open";
var li = "[data-te-modal-dialog-ref]";
var Bp = "[data-te-modal-body-ref]";
var No = class _No extends gt {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._dialog = d.findOne(li, this._element), this._backdrop = this._config.modalNonInvasive ? null : this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollBar = new qe(), this._didInit = false, this._init();
  }
  // Getters
  static get Default() {
    return sa;
  }
  static get NAME() {
    return Nn;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || c.trigger(this._element, Mp, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), !this._config.modalNonInvasive && this._scrollBar.hide(), document.body.setAttribute(la, "true"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), c.on(this._dialog, aa, () => {
      c.one(this._element, Pp, (i) => {
        i.target === this._element && (this._ignoreBackdropClick = true);
      });
    }), this._showElement(t), !this._config.modalNonInvasive && this._showBackdrop());
  }
  hide() {
    if (!this._isShown || this._isTransitioning || c.trigger(this._element, $p).defaultPrevented)
      return;
    this._isShown = false;
    const e = this._isAnimated();
    e && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.disable(), d.findOne(li, this._element).classList.remove(this._classes.show), c.off(this._element, oa), c.off(this._dialog, aa), this._queueCallback(() => this._hideModal(), this._element, e), this._element.removeAttribute(ca);
  }
  dispose() {
    [window, this._dialog].forEach(
      (t) => c.off(t, At)
    ), this._backdrop && this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _init() {
    this._didInit || (cn(_No), this._didInit = true);
  }
  _initializeBackDrop() {
    return new hr({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Wi(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _getConfig(t) {
    return t = {
      ...sa,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, D(Nn, t, Sp), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Ip,
      ...e,
      ...t
    }, D(Nn, t, Dp), t;
  }
  _showElement(t) {
    const e = this._isAnimated(), i = d.findOne(Bp, this._dialog);
    (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.append(this._element), this._element.style.display = "block", this._element.classList.remove("hidden"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`${ca}`, "true"), this._element.scrollTop = 0;
    const n = d.findOne(li, this._element);
    n.classList.add(this._classes.show), n.classList.remove("opacity-0"), n.classList.add("opacity-100"), i && (i.scrollTop = 0), e && Je(this._element);
    const o = () => {
      this._config.focus && this._focustrap.trap(), this._isTransitioning = false, c.trigger(this._element, Rp, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._dialog, e);
  }
  _setEscapeEvent() {
    this._isShown ? c.on(document, ra, (t) => {
      this._config.keyboard && t.key === ia ? (t.preventDefault(), this.hide()) : !this._config.keyboard && t.key === ia && this._triggerBackdropTransition();
    }) : c.off(this._element, ra);
  }
  _setResizeEvent() {
    this._isShown ? c.on(window, na, () => this._adjustDialog()) : c.off(window, na);
  }
  _hideModal() {
    const t = d.findOne(li, this._element);
    t.classList.remove(this._classes.show), t.classList.remove("opacity-100"), t.classList.add("opacity-0"), setTimeout(() => {
      this._element.style.display = "none";
    }, 300), this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop && this._backdrop.hide(() => {
      document.body.removeAttribute(la), this._resetAdjustments(), !this._config.modalNonInvasive && this._scrollBar.reset(), c.trigger(this._element, Np);
    });
  }
  _showBackdrop(t) {
    c.on(this._element, oa, (e) => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = false;
        return;
      }
      e.target === e.currentTarget && (this._config.backdrop === true ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
    }), this._backdrop && this._backdrop.show(t);
  }
  _isAnimated() {
    return !!d.findOne(li, this._element);
  }
  _triggerBackdropTransition() {
    if (c.trigger(this._element, Lp).defaultPrevented)
      return;
    const { classList: e, scrollHeight: i, style: n } = this._element, o = i > document.documentElement.clientHeight;
    !o && n.overflowY === "hidden" || e.contains(this._classes.static) || (o || (n.overflowY = "hidden"), e.add(...this._classes.static.split(" ")), e.add(...this._classes.staticProperties.split(" ")), this._queueCallback(() => {
      e.remove(this._classes.static), setTimeout(() => {
        e.remove(...this._classes.staticProperties.split(" "));
      }, 300), o || this._queueCallback(() => {
        n.overflowY = "";
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
    (!i && t && !F() || i && !t && F()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !F() || !i && t && F()) && (this._element.style.paddingRight = `${e}px`);
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = _No.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
};
var Hp = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]);
var Vp = /^aria-[\w-]*$/i;
var Wp = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
var Fp = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
var Yp = (s, t) => {
  const e = s.nodeName.toLowerCase();
  if (t.includes(e))
    return Hp.has(e) ? !!(Wp.test(s.nodeValue) || Fp.test(s.nodeValue)) : true;
  const i = t.filter(
    (n) => n instanceof RegExp
  );
  for (let n = 0, o = i.length; n < o; n++)
    if (i[n].test(e))
      return true;
  return false;
};
var jp = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", Vp],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function ha(s, t, e) {
  if (!s.length)
    return s;
  if (e && typeof e == "function")
    return e(s);
  const n = new window.DOMParser().parseFromString(s, "text/html"), o = [].concat(...n.body.querySelectorAll("*"));
  for (let r = 0, a = o.length; r < a; r++) {
    const l = o[r], p = l.nodeName.toLowerCase();
    if (!Object.keys(t).includes(p)) {
      l.remove();
      continue;
    }
    const u = [].concat(...l.attributes), _ = [].concat(
      t["*"] || [],
      t[p] || []
    );
    u.forEach((f) => {
      Yp(f, _) || l.removeAttribute(f.nodeName);
    });
  }
  return n.body.innerHTML;
}
var da = "tooltip";
var Kp = "te.tooltip";
var wt = `.${Kp}`;
var zp = "te-tooltip";
var Up = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
var Xp = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
};
var Gp = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: F() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: F() ? "right" : "left"
};
var qp = {
  animation: true,
  template: '<div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip"><div data-te-tooltip-inner-ref class="tooltip-inner max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: false,
  selector: false,
  placement: "top",
  offset: [0, 0],
  container: false,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: true,
  sanitizeFn: null,
  allowList: jp,
  popperConfig: { hide: true }
};
var Zp = {
  HIDE: `hide${wt}`,
  HIDDEN: `hidden${wt}`,
  SHOW: `show${wt}`,
  SHOWN: `shown${wt}`,
  INSERTED: `inserted${wt}`,
  CLICK: `click${wt}`,
  FOCUSIN: `focusin${wt}`,
  FOCUSOUT: `focusout${wt}`,
  MOUSEENTER: `mouseenter${wt}`,
  MOUSELEAVE: `mouseleave${wt}`
};
var Qp = "fade";
var Jp = "modal";
var Mn = "show";
var ci = "show";
var Rn = "out";
var ua = ".tooltip-inner";
var pa = `.${Jp}`;
var _a = "hide.te.modal";
var hi = "hover";
var Pn = "focus";
var t_ = "click";
var e_ = "manual";
var ii = class _ii extends gt {
  constructor(t, e) {
    if (typeof Ic > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
  }
  // Getters
  static get Default() {
    return qp;
  }
  static get NAME() {
    return da;
  }
  static get Event() {
    return Zp;
  }
  static get DefaultType() {
    return Xp;
  }
  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle(t) {
    if (this._isEnabled)
      if (t) {
        const e = this._initializeOnDelegatedTarget(t);
        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains(Mn)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
  }
  dispose() {
    clearTimeout(this._timeout), c.off(
      this._element.closest(pa),
      _a,
      this._hideModalHandler
    ), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this.isWithContent() && this._isEnabled))
      return;
    const t = c.trigger(
      this._element,
      this.constructor.Event.SHOW
    ), e = Gl(this._element), i = e === null ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
    if (t.defaultPrevented || !i)
      return;
    this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(ua).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
    const n = this.getTipElement(), o = rt(this.constructor.NAME);
    n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && setTimeout(() => {
      this.tip.classList.add("opacity-100"), this.tip.classList.remove("opacity-0");
    }, 100);
    const r = typeof this._config.placement == "function" ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r);
    this._addAttachmentClass(a);
    const { container: l } = this._config;
    if (y.setData(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), c.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Ce(
      this._element,
      n,
      this._getPopperConfig(a)
    ), n.getAttribute("id").includes("tooltip"))
      switch (r) {
        case "bottom":
          n.classList.add("py-[0.4rem]");
          break;
        case "left":
          n.classList.add("px-[0.4rem]");
          break;
        case "right":
          n.classList.add("px-[0.4rem]");
          break;
        default:
          n.classList.add("py-[0.4rem]");
          break;
      }
    const u = this._resolvePossibleFunction(this._config.customClass);
    u && n.classList.add(...u.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((g) => {
      c.on(g, "mouseover", tn);
    });
    const _ = () => {
      const g = this._hoverState;
      this._hoverState = null, c.trigger(this._element, this.constructor.Event.SHOWN), g === Rn && this._leave(null, this);
    }, f = this.tip.classList.contains("transition-opacity");
    this._queueCallback(_, this.tip, f);
  }
  hide() {
    if (!this._popper)
      return;
    const t = this.getTipElement(), e = () => {
      this._isWithActiveTrigger() || (this._hoverState !== ci && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), c.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
    };
    if (c.trigger(
      this._element,
      this.constructor.Event.HIDE
    ).defaultPrevented)
      return;
    t.classList.add("opacity-0"), t.classList.remove("opacity-100"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((o) => c.off(o, "mouseover", tn)), this._activeTrigger[t_] = false, this._activeTrigger[Pn] = false, this._activeTrigger[hi] = false;
    const n = this.tip.classList.contains("opacity-0");
    this._queueCallback(e, this.tip, n), this._hoverState = "";
  }
  update() {
    this._popper !== null && this._popper.update();
  }
  // Protected
  isWithContent() {
    return !!this.getTitle();
  }
  getTipElement() {
    if (this.tip)
      return this.tip;
    const t = document.createElement("div");
    t.innerHTML = this._config.template;
    const e = t.children[0];
    return this.setContent(e), e.classList.remove(Qp, Mn), this.tip = e, this.tip;
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), ua);
  }
  _sanitizeAndSetContent(t, e, i) {
    const n = d.findOne(i, t);
    if (!e && n) {
      n.remove();
      return;
    }
    this.setElementContent(n, e);
  }
  setElementContent(t, e) {
    if (t !== null) {
      if (je(e)) {
        e = te(e), this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent;
        return;
      }
      this._config.html ? (this._config.sanitize && (e = ha(
        e,
        this._config.allowList,
        this._config.sanitizeFn
      )), t.innerHTML = e) : t.textContent = e;
    }
  }
  getTitle() {
    const t = this._element.getAttribute("data-te-original-title") || this._config.title;
    return this._resolvePossibleFunction(t);
  }
  updateAttachment(t) {
    return t === "right" ? "end" : t === "left" ? "start" : t;
  }
  // Private
  _initializeOnDelegatedTarget(t, e) {
    return e || this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        },
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        },
        {
          name: "onChange",
          enabled: true,
          phase: "afterWrite",
          fn: (i) => this._handlePopperPlacementChange(i)
        }
      ],
      onFirstUpdate: (i) => {
        i.options.placement !== i.placement && this._handlePopperPlacementChange(i);
      }
    };
    return {
      ...e,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
    };
  }
  _addAttachmentClass(t) {
    this.getTipElement().classList.add(
      `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
    );
  }
  _getAttachment(t) {
    return Gp[t.toUpperCase()];
  }
  _setListeners() {
    this._config.trigger.split(" ").forEach((e) => {
      if (e === "click")
        c.on(
          this._element,
          this.constructor.Event.CLICK,
          this._config.selector,
          (i) => this.toggle(i)
        );
      else if (e !== e_) {
        const i = e === hi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, n = e === hi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        c.on(
          this._element,
          i,
          this._config.selector,
          (o) => this._enter(o)
        ), c.on(
          this._element,
          n,
          this._config.selector,
          (o) => this._leave(o)
        );
      }
    }), this._hideModalHandler = () => {
      this._element && this.hide();
    }, c.on(
      this._element.closest(pa),
      _a,
      this._hideModalHandler
    ), this._config.selector ? this._config = {
      ...this._config,
      trigger: "manual",
      selector: ""
    } : this._fixTitle();
  }
  _fixTitle() {
    const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute(
      "data-te-original-title"
    );
    (t || e !== "string") && (this._element.setAttribute("data-te-original-title", t || ""), t && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
  }
  _enter(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusin" ? Pn : hi] = true), e.getTipElement().classList.contains(Mn) || e._hoverState === ci) {
      e._hoverState = ci;
      return;
    }
    if (clearTimeout(e._timeout), e._hoverState = ci, !e._config.delay || !e._config.delay.show) {
      e.show();
      return;
    }
    e._timeout = setTimeout(() => {
      e._hoverState === ci && e.show();
    }, e._config.delay.show);
  }
  _leave(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusout" ? Pn : hi] = e._element.contains(t.relatedTarget)), !e._isWithActiveTrigger()) {
      if (clearTimeout(e._timeout), e._hoverState = Rn, !e._config.delay || !e._config.delay.hide) {
        e.hide();
        return;
      }
      e._timeout = setTimeout(() => {
        e._hoverState === Rn && e.hide();
      }, e._config.delay.hide);
    }
  }
  _isWithActiveTrigger() {
    for (const t in this._activeTrigger)
      if (this._activeTrigger[t])
        return true;
    return false;
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return Object.keys(e).forEach((i) => {
      Up.has(i) && delete e[i];
    }), t = {
      ...this.constructor.Default,
      ...e,
      ...typeof t == "object" && t ? t : {}
    }, t.container = t.container === false ? document.body : te(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), D(da, t, this.constructor.DefaultType), t.sanitize && (t.template = ha(
      t.template,
      t.allowList,
      t.sanitizeFn
    )), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const e in this._config)
      this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
    return t;
  }
  _cleanTipClass() {
    const t = this.getTipElement(), e = new RegExp(
      `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
      "g"
    ), i = t.getAttribute("class").match(e);
    i !== null && i.length > 0 && i.map((n) => n.trim()).forEach((n) => t.classList.remove(n));
  }
  _getBasicClassPrefix() {
    return zp;
  }
  _handlePopperPlacementChange(t) {
    const { state: e } = t;
    e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _ii.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var i_ = "popover";
var s_ = "te.popover";
var kt = `.${s_}`;
var n_ = "te-popover";
var o_ = {
  ...ii.Default,
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: '<div class="opacity-0 transition-opacity duration-150 ease-in-out absolute top-0 left-0 z-[1070] block max-w-[267px] break-words bg-white bg-clip-padding border border-neutral-100 rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:bg-neutral-700 dark:border-0 dark:text-white data-[popper-reference-hidden]:hidden" role="tooltip"><h3 class="popover-header py-2 px-4 mb-0 border-b-2 border-neutral-100 rounded-t-lg font-medium empty:hidden dark:border-neutral-500"></h3><div class="popover-body p-4 text-[#212529] dark:text-white"></div></div>'
};
var r_ = {
  ...ii.DefaultType,
  content: "(string|element|function)"
};
var a_ = {
  HIDE: `hide${kt}`,
  HIDDEN: `hidden${kt}`,
  SHOW: `show${kt}`,
  SHOWN: `shown${kt}`,
  INSERTED: `inserted${kt}`,
  CLICK: `click${kt}`,
  FOCUSIN: `focusin${kt}`,
  FOCUSOUT: `focusout${kt}`,
  MOUSEENTER: `mouseenter${kt}`,
  MOUSELEAVE: `mouseleave${kt}`
};
var l_ = ".popover-header";
var c_ = ".popover-body";
var Rc = class _Rc extends ii {
  // Getters
  static get Default() {
    return o_;
  }
  static get NAME() {
    return i_;
  }
  static get Event() {
    return a_;
  }
  static get DefaultType() {
    return r_;
  }
  // Overrides
  isWithContent() {
    return this.getTitle() || this._getContent();
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), l_), this._sanitizeAndSetContent(t, this._getContent(), c_);
  }
  // Private
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  _getBasicClassPrefix() {
    return n_;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Rc.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var Bn = "scrollspy";
var h_ = "te.scrollspy";
var ur = `.${h_}`;
var fa = {
  offset: 10,
  method: "auto",
  target: ""
};
var d_ = {
  offset: "number",
  method: "string",
  target: "(string|element)"
};
var u_ = {
  active: "!text-primary dark:!text-primary-400 font-semibold border-l-[0.125rem] border-solid border-primary dark:border-primary-400"
};
var p_ = {
  active: "string"
};
var __ = `activate${ur}`;
var f_ = `scroll${ur}`;
var Hn = "data-te-nav-link-active";
var Pc = "[data-te-dropdown-item-ref]";
var m_ = "[data-te-nav-list-ref]";
var Mo = "[data-te-nav-link-ref]";
var g_ = "[data-te-nav-item-ref]";
var Bc = "[data-te-list-group-item-ref]";
var Vn = `${Mo}, ${Bc}, ${Pc}`;
var b_ = "[data-te-dropdown-ref]";
var v_ = "[data-te-dropdown-toggle-ref]";
var T_ = "maxOffset";
var ma = "position";
var Hc = class _Hc extends gt {
  constructor(t, e, i) {
    super(t), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, c.on(this._scrollElement, f_, () => this._process()), this.refresh(), this._process();
  }
  // Getters
  static get Default() {
    return fa;
  }
  static get NAME() {
    return Bn;
  }
  // Public
  refresh() {
    const t = this._scrollElement === this._scrollElement.window ? T_ : ma, e = this._config.method === "auto" ? t : this._config.method, i = e === ma ? this._getScrollTop() : 0;
    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), d.find(
      Vn,
      this._config.target
    ).map((o) => {
      const r = qo(o), a = r ? d.findOne(r) : null;
      if (a) {
        const l = a.getBoundingClientRect();
        if (l.width || l.height)
          return [
            h[e](a).top + i,
            r
          ];
      }
      return null;
    }).filter((o) => o).sort((o, r) => o[0] - r[0]).forEach((o) => {
      this._offsets.push(o[0]), this._targets.push(o[1]);
    });
  }
  dispose() {
    c.off(this._scrollElement, ur), super.dispose();
  }
  // Private
  _getConfig(t) {
    return t = {
      ...fa,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, t.target = te(t.target) || document.documentElement, D(Bn, t, d_), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...u_,
      ...e,
      ...t
    }, D(Bn, t, p_), t;
  }
  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }
  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  }
  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }
  _process() {
    const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
    if (this._scrollHeight !== e && this.refresh(), t >= i) {
      const n = this._targets[this._targets.length - 1];
      this._activeTarget !== n && this._activate(n);
      return;
    }
    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null, this._clear();
      return;
    }
    for (let n = this._offsets.length; n--; )
      this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (typeof this._offsets[n + 1] > "u" || t < this._offsets[n + 1]) && this._activate(this._targets[n]);
  }
  _activate(t) {
    this._activeTarget = t, this._clear();
    const e = Vn.split(",").map(
      (n) => `${n}[data-te-target="${t}"],${n}[href="${t}"]`
    ), i = d.findOne(e.join(","), this._config.target);
    i.classList.add(...this._classes.active.split(" ")), i.setAttribute(Hn, ""), i.getAttribute(Pc) ? d.findOne(
      v_,
      i.closest(b_)
    ).classList.add(...this._classes.active.split(" ")) : d.parents(i, m_).forEach(
      (n) => {
        d.prev(
          n,
          `${Mo}, ${Bc}`
        ).forEach((o) => {
          o.classList.add(...this._classes.active.split(" ")), o.setAttribute(Hn, "");
        }), d.prev(n, g_).forEach(
          (o) => {
            d.children(o, Mo).forEach(
              (r) => r.classList.add(...this._classes.active.split(" "))
            );
          }
        );
      }
    ), c.trigger(this._scrollElement, __, {
      relatedTarget: t
    });
  }
  _clear() {
    d.find(Vn, this._config.target).filter(
      (t) => t.classList.contains(...this._classes.active.split(" "))
    ).forEach((t) => {
      t.classList.remove(...this._classes.active.split(" ")), t.removeAttribute(Hn);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Hc.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var ga = "tab";
var E_ = "te.tab";
var hn = `.${E_}`;
var C_ = `hide${hn}`;
var A_ = `hidden${hn}`;
var y_ = `show${hn}`;
var w_ = `shown${hn}`;
var k_ = "data-te-dropdown-menu-ref";
var Le = "data-te-tab-active";
var Hs = "data-te-nav-active";
var x_ = "[data-te-dropdown-ref]";
var O_ = "[data-te-nav-ref]";
var ba = `[${Le}]`;
var S_ = `[${Hs}]`;
var va = ":scope > li > .active";
var I_ = "[data-te-dropdown-toggle-ref]";
var D_ = ":scope > [data-te-dropdown-menu-ref] [data-te-dropdown-show]";
var $_ = {
  show: "opacity-100",
  hide: "opacity-0"
};
var L_ = {
  show: "string",
  hide: "string"
};
var Vc = class _Vc extends gt {
  constructor(t, e) {
    super(t), this._classes = this._getClasses(e);
  }
  // Getters
  static get NAME() {
    return ga;
  }
  // Public
  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.getAttribute(Hs) === "")
      return;
    let t;
    const e = Jt(this._element), i = this._element.closest(O_), n = d.findOne(
      S_,
      i
    );
    if (i) {
      const l = i.nodeName === "UL" || i.nodeName === "OL" ? va : ba;
      t = d.find(l, i), t = t[t.length - 1];
    }
    const o = t ? c.trigger(t, C_, {
      relatedTarget: this._element
    }) : null;
    if (c.trigger(this._element, y_, {
      relatedTarget: t
    }).defaultPrevented || o !== null && o.defaultPrevented)
      return;
    this._activate(
      this._element,
      i,
      null,
      n,
      this._element
    );
    const a = () => {
      c.trigger(t, A_, {
        relatedTarget: this._element
      }), c.trigger(this._element, w_, {
        relatedTarget: t
      });
    };
    e ? this._activate(
      e,
      e.parentNode,
      a,
      n,
      this._element
    ) : a();
  }
  // Private
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...$_,
      ...e,
      ...t
    }, D(ga, t, L_), t;
  }
  _activate(t, e, i, n, o) {
    const a = (e && (e.nodeName === "UL" || e.nodeName === "OL") ? d.find(va, e) : d.children(e, ba))[0], l = i && a && a.hasAttribute(Le), p = () => this._transitionComplete(
      t,
      a,
      i,
      n,
      o
    );
    a && l ? (h.removeClass(a, this._classes.show), h.addClass(a, this._classes.hide), this._queueCallback(p, t, true)) : p();
  }
  _transitionComplete(t, e, i, n, o) {
    if (e && n) {
      e.removeAttribute(Le), n.removeAttribute(Hs);
      const a = d.findOne(
        D_,
        e.parentNode
      );
      a && a.removeAttribute(Le), e.getAttribute("role") === "tab" && e.setAttribute("aria-selected", false);
    }
    t.setAttribute(Le, ""), o.setAttribute(Hs, ""), t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", true), Je(t), t.classList.contains(this._classes.hide) && (h.removeClass(t, this._classes.hide), h.addClass(t, this._classes.show));
    let r = t.parentNode;
    if (r && r.nodeName === "LI" && (r = r.parentNode), r && r.hasAttribute(k_)) {
      const a = t.closest(x_);
      a && d.find(I_, a).forEach(
        (l) => l.setAttribute(Le, "")
      ), t.setAttribute("aria-expanded", true);
    }
    i && i();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Vc.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var Wn = "toast";
var N_ = "te.toast";
var ie = `.${N_}`;
var M_ = `mouseover${ie}`;
var R_ = `mouseout${ie}`;
var P_ = `focusin${ie}`;
var B_ = `focusout${ie}`;
var H_ = `hide${ie}`;
var V_ = `hidden${ie}`;
var W_ = `show${ie}`;
var F_ = `shown${ie}`;
var Ta = "data-te-toast-hide";
var Fn = "data-te-toast-show";
var ns = "data-te-toast-showing";
var Y_ = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
};
var Ea = {
  animation: true,
  autohide: true,
  delay: 5e3
};
var j_ = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
};
var K_ = {
  fadeIn: "string",
  fadeOut: "string"
};
var Ro = class _Ro extends gt {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners(), this._didInit = false, this._init();
  }
  // Getters
  static get DefaultType() {
    return Y_;
  }
  static get Default() {
    return Ea;
  }
  static get NAME() {
    return Wn;
  }
  // Public
  show() {
    if (c.trigger(this._element, W_).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && (h.removeClass(this._element, this._classes.fadeOut), h.addClass(this._element, this._classes.fadeIn));
    const e = () => {
      this._element.removeAttribute(ns), c.trigger(this._element, F_), this._maybeScheduleHide();
    };
    this._element.removeAttribute(Ta), Je(this._element), this._element.setAttribute(Fn, ""), this._element.setAttribute(ns, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this._element || this._element.dataset.teToastShow === void 0 || c.trigger(this._element, H_).defaultPrevented)
      return;
    const e = () => {
      let i = 0;
      this._config.animation && (i = 300, h.removeClass(this._element, this._classes.fadeIn), h.addClass(this._element, this._classes.fadeOut)), setTimeout(() => {
        this._element.setAttribute(Ta, ""), this._element.removeAttribute(ns), this._element.removeAttribute(Fn), c.trigger(this._element, V_);
      }, i);
    };
    this._element.setAttribute(ns, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this._element.dataset.teToastShow !== void 0 && this._element.removeAttribute(Fn), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (cn(_Ro), this._didInit = true);
  }
  _getConfig(t) {
    return t = {
      ...Ea,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, D(Wn, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...j_,
      ...e,
      ...t
    }, D(Wn, t, K_), t;
  }
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, e) {
    switch (t.type) {
      case "mouseover":
      case "mouseout":
        this._hasMouseInteraction = e;
        break;
      case "focusin":
      case "focusout":
        this._hasKeyboardInteraction = e;
        break;
    }
    if (e) {
      this._clearTimeout();
      return;
    }
    const i = t.relatedTarget;
    this._element === i || this._element.contains(i) || this._maybeScheduleHide();
  }
  _setListeners() {
    c.on(
      this._element,
      M_,
      (t) => this._onInteraction(t, true)
    ), c.on(
      this._element,
      R_,
      (t) => this._onInteraction(t, false)
    ), c.on(
      this._element,
      P_,
      (t) => this._onInteraction(t, true)
    ), c.on(
      this._element,
      B_,
      (t) => this._onInteraction(t, false)
    );
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Ro.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
(() => {
  var s = { 454: (i, n, o) => {
    o.d(n, { Z: () => l });
    var r = o(645), a = o.n(r)()(function(p) {
      return p[1];
    });
    a.push([i.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const l = a;
  }, 645: (i) => {
    i.exports = function(n) {
      var o = [];
      return o.toString = function() {
        return this.map(function(r) {
          var a = n(r);
          return r[2] ? "@media ".concat(r[2], " {").concat(a, "}") : a;
        }).join("");
      }, o.i = function(r, a, l) {
        typeof r == "string" && (r = [[null, r, ""]]);
        var p = {};
        if (l)
          for (var u = 0; u < this.length; u++) {
            var _ = this[u][0];
            _ != null && (p[_] = true);
          }
        for (var f = 0; f < r.length; f++) {
          var g = [].concat(r[f]);
          l && p[g[0]] || (a && (g[2] ? g[2] = "".concat(a, " and ").concat(g[2]) : g[2] = a), o.push(g));
        }
      }, o;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var i = new window.CustomEvent("test", { cancelable: true });
          if (i.preventDefault(), i.defaultPrevented !== true)
            throw new Error("Could not prevent default");
        } catch {
          var n = function(r, a) {
            var l, p;
            return (a = a || {}).bubbles = !!a.bubbles, a.cancelable = !!a.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(r, a.bubbles, a.cancelable, a.detail), p = l.preventDefault, l.preventDefault = function() {
              p.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return true;
                } });
              } catch {
                this.defaultPrevented = true;
              }
            }, l;
          };
          n.prototype = window.Event.prototype, window.CustomEvent = n;
        }
    })();
  }, 379: (i, n, o) => {
    var r, a = function() {
      var E = {};
      return function(T) {
        if (E[T] === void 0) {
          var A = document.querySelector(T);
          if (window.HTMLIFrameElement && A instanceof window.HTMLIFrameElement)
            try {
              A = A.contentDocument.head;
            } catch {
              A = null;
            }
          E[T] = A;
        }
        return E[T];
      };
    }(), l = [];
    function p(E) {
      for (var T = -1, A = 0; A < l.length; A++)
        if (l[A].identifier === E) {
          T = A;
          break;
        }
      return T;
    }
    function u(E, T) {
      for (var A = {}, k = [], I = 0; I < E.length; I++) {
        var O = E[I], x = T.base ? O[0] + T.base : O[0], L = A[x] || 0, S = "".concat(x, " ").concat(L);
        A[x] = L + 1;
        var N = p(S), P = { css: O[1], media: O[2], sourceMap: O[3] };
        N !== -1 ? (l[N].references++, l[N].updater(P)) : l.push({ identifier: S, updater: w(P, T), references: 1 }), k.push(S);
      }
      return k;
    }
    function _(E) {
      var T = document.createElement("style"), A = E.attributes || {};
      if (A.nonce === void 0) {
        var k = o.nc;
        k && (A.nonce = k);
      }
      if (Object.keys(A).forEach(function(O) {
        T.setAttribute(O, A[O]);
      }), typeof E.insert == "function")
        E.insert(T);
      else {
        var I = a(E.insert || "head");
        if (!I)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        I.appendChild(T);
      }
      return T;
    }
    var f, g = (f = [], function(E, T) {
      return f[E] = T, f.filter(Boolean).join(`
`);
    });
    function m(E, T, A, k) {
      var I = A ? "" : k.media ? "@media ".concat(k.media, " {").concat(k.css, "}") : k.css;
      if (E.styleSheet)
        E.styleSheet.cssText = g(T, I);
      else {
        var O = document.createTextNode(I), x = E.childNodes;
        x[T] && E.removeChild(x[T]), x.length ? E.insertBefore(O, x[T]) : E.appendChild(O);
      }
    }
    function b(E, T, A) {
      var k = A.css, I = A.media, O = A.sourceMap;
      if (I ? E.setAttribute("media", I) : E.removeAttribute("media"), O && typeof btoa < "u" && (k += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O)))), " */")), E.styleSheet)
        E.styleSheet.cssText = k;
      else {
        for (; E.firstChild; )
          E.removeChild(E.firstChild);
        E.appendChild(document.createTextNode(k));
      }
    }
    var v = null, C = 0;
    function w(E, T) {
      var A, k, I;
      if (T.singleton) {
        var O = C++;
        A = v || (v = _(T)), k = m.bind(null, A, O, false), I = m.bind(null, A, O, true);
      } else
        A = _(T), k = b.bind(null, A, T), I = function() {
          (function(x) {
            if (x.parentNode === null)
              return false;
            x.parentNode.removeChild(x);
          })(A);
        };
      return k(E), function(x) {
        if (x) {
          if (x.css === E.css && x.media === E.media && x.sourceMap === E.sourceMap)
            return;
          k(E = x);
        } else
          I();
      };
    }
    i.exports = function(E, T) {
      (T = T || {}).singleton || typeof T.singleton == "boolean" || (T.singleton = (r === void 0 && (r = !!(window && document && document.all && !window.atob)), r));
      var A = u(E = E || [], T);
      return function(k) {
        if (k = k || [], Object.prototype.toString.call(k) === "[object Array]") {
          for (var I = 0; I < A.length; I++) {
            var O = p(A[I]);
            l[O].references--;
          }
          for (var x = u(k, T), L = 0; L < A.length; L++) {
            var S = p(A[L]);
            l[S].references === 0 && (l[S].updater(), l.splice(S, 1));
          }
          A = x;
        }
      };
    };
  } }, t = {};
  function e(i) {
    var n = t[i];
    if (n !== void 0)
      return n.exports;
    var o = t[i] = { id: i, exports: {} };
    return s[i](o, o.exports, e), o.exports;
  }
  e.n = (i) => {
    var n = i && i.__esModule ? () => i.default : () => i;
    return e.d(n, { a: n }), n;
  }, e.d = (i, n) => {
    for (var o in n)
      e.o(n, o) && !e.o(i, o) && Object.defineProperty(i, o, { enumerable: true, get: n[o] });
  }, e.o = (i, n) => Object.prototype.hasOwnProperty.call(i, n), (() => {
    var i = e(379), n = e.n(i), o = e(454);
    function r(l) {
      if (!l.hasAttribute("autocompleted")) {
        l.setAttribute("autocompleted", "");
        var p = new window.CustomEvent("onautocomplete", { bubbles: true, cancelable: true, detail: null });
        l.dispatchEvent(p) || (l.value = "");
      }
    }
    function a(l) {
      l.hasAttribute("autocompleted") && (l.removeAttribute("autocompleted"), l.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: true, cancelable: false, detail: null })));
    }
    n()(o.Z, { insert: "head", singleton: false }), o.Z.locals, e(810), document.addEventListener("animationstart", function(l) {
      l.animationName === "onautofillstart" ? r(l.target) : a(l.target);
    }, true), document.addEventListener("input", function(l) {
      l.inputType !== "insertReplacementText" && "data" in l ? a(l.target) : r(l.target);
    }, true);
  })();
})();
var Yn = "input";
var os = "te.input";
var Wc = "data-te-input-wrapper-init";
var Fc = "data-te-input-notch-ref";
var Yc = "data-te-input-notch-leading-ref";
var jc = "data-te-input-notch-middle-ref";
var z_ = "data-te-input-notch-trailing-ref";
var U_ = "data-te-input-helper-ref";
var X_ = "data-te-input-placeholder-active";
var Ft = "data-te-input-state-active";
var Ca = "data-te-input-focused";
var Aa = "data-te-input-form-counter";
var de = `[${Wc}] input`;
var ue = `[${Wc}] textarea`;
var ke = `[${Fc}]`;
var ya = `[${Yc}]`;
var wa = `[${jc}]`;
var G_ = `[${U_}]`;
var q_ = {
  inputFormWhite: false
};
var Z_ = {
  inputFormWhite: "(boolean)"
};
var Kc = {
  notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0",
  notchLeadingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchLeadingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent",
  notchMiddleNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchMiddleWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0",
  notchTrailingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchTrailingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  counter: "text-right leading-[1.6]"
};
var Q_ = {
  notch: "string",
  notchLeading: "string",
  notchLeadingNormal: "string",
  notchLeadingWhite: "string",
  notchMiddle: "string",
  notchMiddleNormal: "string",
  notchMiddleWhite: "string",
  notchTrailing: "string",
  notchTrailingNormal: "string",
  notchTrailingWhite: "string",
  counter: "string"
};
var V = class _V {
  constructor(t, e, i) {
    this._config = this._getConfig(e, t), this._element = t, this._classes = this._getClasses(i), this._label = null, this._labelWidth = 0, this._labelMarginLeft = 0, this._notchLeading = null, this._notchMiddle = null, this._notchTrailing = null, this._initiated = false, this._helper = null, this._counter = false, this._counterElement = null, this._maxLength = 0, this._leadingIcon = null, this._element && (y.setData(t, os, this), this.init());
  }
  // Getters
  static get NAME() {
    return Yn;
  }
  get input() {
    return d.findOne("input", this._element) || d.findOne("textarea", this._element);
  }
  // Public
  init() {
    this._initiated || (this._getLabelData(), this._applyDivs(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter(), this._getEvents(), this._initiated = true);
  }
  update() {
    this._getLabelData(), this._getNotchData(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter();
  }
  forceActive() {
    this.input.setAttribute(Ft, ""), d.findOne(ke, this.input.parentNode).setAttribute(
      Ft,
      ""
    );
  }
  forceInactive() {
    this.input.removeAttribute(Ft), d.findOne(
      ke,
      this.input.parentNode
    ).removeAttribute(Ft);
  }
  dispose() {
    this._removeBorder(), y.removeData(this._element, os), this._element = null;
  }
  // Private
  _getConfig(t, e) {
    return t = {
      ...q_,
      ...h.getDataAttributes(e),
      ...typeof t == "object" ? t : {}
    }, D(Yn, t, Z_), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Kc,
      ...e,
      ...t
    }, D(Yn, t, Q_), t;
  }
  _getLabelData() {
    this._label = d.findOne("label", this._element), this._label === null ? this._showPlaceholder() : (this._getLabelWidth(), this._getLabelPositionInInputGroup(), this._toggleDefaultDatePlaceholder());
  }
  _getHelper() {
    this._helper = d.findOne(G_, this._element);
  }
  _getCounter() {
    this._counter = h.getDataAttribute(
      this.input,
      "inputShowcounter"
    ), this._counter && (this._maxLength = this.input.maxLength, this._showCounter());
  }
  _getEvents() {
    c.on(
      document,
      "focus",
      de,
      _V.activate(new _V())
    ), c.on(
      document,
      "input",
      de,
      _V.activate(new _V())
    ), c.on(
      document,
      "blur",
      de,
      _V.deactivate(new _V())
    ), c.on(
      document,
      "focus",
      ue,
      _V.activate(new _V())
    ), c.on(
      document,
      "input",
      ue,
      _V.activate(new _V())
    ), c.on(
      document,
      "blur",
      ue,
      _V.deactivate(new _V())
    ), c.on(window, "shown.te.modal", (t) => {
      d.find(de, t.target).forEach(
        (e) => {
          const i = _V.getInstance(e.parentNode);
          i && i.update();
        }
      ), d.find(ue, t.target).forEach(
        (e) => {
          const i = _V.getInstance(e.parentNode);
          i && i.update();
        }
      );
    }), c.on(window, "shown.te.dropdown", (t) => {
      const e = t.target.parentNode.querySelector(
        "[data-te-dropdown-menu-ref]"
      );
      e && (d.find(de, e).forEach(
        (i) => {
          const n = _V.getInstance(i.parentNode);
          n && n.update();
        }
      ), d.find(ue, e).forEach(
        (i) => {
          const n = _V.getInstance(i.parentNode);
          n && n.update();
        }
      ));
    }), c.on(window, "shown.te.tab", (t) => {
      let e;
      t.target.href ? e = t.target.href.split("#")[1] : e = h.getDataAttribute(t.target, "target").split(
        "#"
      )[1];
      const i = d.findOne(`#${e}`);
      d.find(de, i).forEach((n) => {
        const o = _V.getInstance(n.parentNode);
        o && o.update();
      }), d.find(ue, i).forEach(
        (n) => {
          const o = _V.getInstance(n.parentNode);
          o && o.update();
        }
      );
    }), c.on(window, "reset", (t) => {
      d.find(de, t.target).forEach(
        (e) => {
          const i = _V.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      ), d.find(ue, t.target).forEach(
        (e) => {
          const i = _V.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      );
    }), c.on(window, "onautocomplete", (t) => {
      const e = _V.getInstance(t.target.parentNode);
      !e || !t.cancelable || e.forceActive();
    });
  }
  _showCounter() {
    if (d.find(
      `[${Aa}]`,
      this._element
    ).length > 0)
      return;
    this._counterElement = document.createElement("div"), h.addClass(this._counterElement, this._classes.counter), this._counterElement.setAttribute(Aa, "");
    const e = this.input.value.length;
    this._counterElement.innerHTML = `${e} / ${this._maxLength}`, this._helper.appendChild(this._counterElement), this._bindCounter();
  }
  _bindCounter() {
    c.on(this.input, "input", () => {
      const t = this.input.value.length;
      this._counterElement.innerHTML = `${t} / ${this._maxLength}`;
    });
  }
  _toggleDefaultDatePlaceholder(t = this.input) {
    if (!(t.getAttribute("type") === "date"))
      return;
    !(document.activeElement === t) && !t.value ? t.style.opacity = 0 : t.style.opacity = 1;
  }
  _showPlaceholder() {
    this.input.setAttribute(X_, "");
  }
  _getNotchData() {
    this._notchMiddle = d.findOne(
      wa,
      this._element
    ), this._notchLeading = d.findOne(
      ya,
      this._element
    );
  }
  _getLabelWidth() {
    this._labelWidth = this._label.clientWidth * 0.8 + 8;
  }
  _getLabelPositionInInputGroup() {
    if (this._labelMarginLeft = 0, !this._element.hasAttribute("data-te-input-group-ref"))
      return;
    const t = this.input, e = d.prev(
      t,
      "[data-te-input-group-text-ref]"
    )[0];
    e === void 0 ? this._labelMarginLeft = 0 : this._labelMarginLeft = e.offsetWidth - 1;
  }
  _applyDivs() {
    const t = this._config.inputFormWhite ? this._classes.notchLeadingWhite : this._classes.notchLeadingNormal, e = this._config.inputFormWhite ? this._classes.notchMiddleWhite : this._classes.notchMiddleNormal, i = this._config.inputFormWhite ? this._classes.notchTrailingWhite : this._classes.notchTrailingNormal, n = d.find(ke, this._element), o = $("div");
    h.addClass(o, this._classes.notch), o.setAttribute(Fc, ""), this._notchLeading = $("div"), h.addClass(
      this._notchLeading,
      `${this._classes.notchLeading} ${t}`
    ), this._notchLeading.setAttribute(Yc, ""), this._notchMiddle = $("div"), h.addClass(
      this._notchMiddle,
      `${this._classes.notchMiddle} ${e}`
    ), this._notchMiddle.setAttribute(jc, ""), this._notchTrailing = $("div"), h.addClass(
      this._notchTrailing,
      `${this._classes.notchTrailing} ${i}`
    ), this._notchTrailing.setAttribute(z_, ""), !(n.length >= 1) && (o.append(this._notchLeading), o.append(this._notchMiddle), o.append(this._notchTrailing), this._element.append(o));
  }
  _applyNotch() {
    this._notchMiddle.style.width = `${this._labelWidth}px`, this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`, this._label !== null && (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
  }
  _removeBorder() {
    const t = d.findOne(ke, this._element);
    t && t.remove();
  }
  _activate(t) {
    Zl(() => {
      this._getElements(t);
      const e = t ? t.target : this.input, i = d.findOne(
        ke,
        this._element
      );
      t && t.type === "focus" && i && i.setAttribute(Ca, ""), e.value !== "" && (e.setAttribute(Ft, ""), i && i.setAttribute(Ft, "")), this._toggleDefaultDatePlaceholder(e);
    });
  }
  _getElements(t) {
    if (t && (this._element = t.target.parentNode, this._label = d.findOne("label", this._element)), t && this._label) {
      const e = this._labelWidth;
      this._getLabelData(), e !== this._labelWidth && (this._notchMiddle = d.findOne(
        wa,
        t.target.parentNode
      ), this._notchLeading = d.findOne(
        ya,
        t.target.parentNode
      ), this._applyNotch());
    }
  }
  _deactivate(t) {
    const e = t ? t.target : this.input, i = d.findOne(
      ke,
      e.parentNode
    );
    i.removeAttribute(Ca), e.value === "" && (e.removeAttribute(Ft), i.removeAttribute(Ft)), this._toggleDefaultDatePlaceholder(e);
  }
  static activate(t) {
    return function(e) {
      t._activate(e);
    };
  }
  static deactivate(t) {
    return function(e) {
      t._deactivate(e);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, os);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new _V(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, os);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var ka = "animation";
var jn = "te.animation";
var J_ = {
  animation: "string",
  animationStart: "string",
  animationShowOnLoad: "boolean",
  onStart: "(null|function)",
  onEnd: "(null|function)",
  onHide: "(null|function)",
  onShow: "(null|function)",
  animationOnScroll: "(string)",
  animationWindowHeight: "number",
  animationOffset: "(number|string)",
  animationDelay: "(number|string)",
  animationReverse: "boolean",
  animationInterval: "(number|string)",
  animationRepeat: "(number|boolean)",
  animationReset: "boolean"
};
var tf = {
  animation: "fade",
  animationStart: "onClick",
  animationShowOnLoad: true,
  onStart: null,
  onEnd: null,
  onHide: null,
  onShow: null,
  animationOnScroll: "once",
  animationWindowHeight: 0,
  animationOffset: 0,
  animationDelay: 0,
  animationReverse: false,
  animationInterval: 0,
  animationRepeat: false,
  animationReset: false
};
var pr = class _pr {
  constructor(t, e) {
    this._element = t, this._animateElement = this._getAnimateElement(), this._isFirstScroll = true, this._repeatAnimateOnScroll = true, this._options = this._getConfig(e), this._element && (y.setData(t, jn, this), this._init());
  }
  // Getters
  static get NAME() {
    return ka;
  }
  // Public
  init() {
    this._init();
  }
  startAnimation() {
    this._startAnimation();
  }
  stopAnimation() {
    this._clearAnimationClass();
  }
  changeAnimationType(t) {
    this._options.animation = t;
  }
  dispose() {
    c.off(this._element, "mousedown"), c.off(this._animateElement, "animationend"), c.off(window, "scroll"), c.off(this._element, "mouseover"), y.removeData(this._element, jn), this._element = null, this._animateElement = null, this._isFirstScroll = null, this._repeatAnimateOnScroll = null, this._options = null;
  }
  // Private
  _init() {
    switch (this._options.animationStart) {
      case "onHover":
        this._bindHoverEvents();
        break;
      case "onLoad":
        this._startAnimation();
        break;
      case "onScroll":
        this._bindScrollEvents();
        break;
      case "onClick":
        this._bindClickEvents();
        break;
    }
    this._bindTriggerOnEndCallback(), this._options.animationReset && this._bindResetAnimationAfterFinish();
  }
  _getAnimateElement() {
    const t = h.getDataAttribute(
      this._element,
      "animation-target"
    );
    return t ? d.find(t)[0] : this._element;
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._animateElement);
    return t = {
      ...tf,
      ...e,
      ...t
    }, D(ka, t, J_), t;
  }
  _animateOnScroll() {
    const t = h.offset(this._animateElement).top, e = this._animateElement.offsetHeight, i = window.innerHeight, n = t + this._options.animationOffset <= i && t + this._options.animationOffset + e >= 0, o = this._animateElement.style.visibility === "visible";
    switch (true) {
      case (n && this._isFirstScroll):
        this._isFirstScroll = false, this._startAnimation();
        break;
      case (!n && this._isFirstScroll):
        this._isFirstScroll = false, this._hideAnimateElement();
        break;
      case (n && !o && this._repeatAnimateOnScroll):
        this._options.animationOnScroll !== "repeat" && (this._repeatAnimateOnScroll = false), this._callback(this._options.onShow), this._showAnimateElement(), this._startAnimation();
        break;
      case (!n && o && this._repeatAnimateOnScroll):
        this._hideAnimateElement(), this._clearAnimationClass(), this._callback(this._options.onHide);
        break;
    }
  }
  _addAnimatedClass() {
    h.addClass(
      this._animateElement,
      `animate-${this._options.animation}`
    );
  }
  _clearAnimationClass() {
    this._animateElement.classList.remove(`animate-${this._options.animation}`);
  }
  _startAnimation() {
    this._callback(this._options.onStart), this._addAnimatedClass(), this._options.animationRepeat && !this._options.animationInterval && this._setAnimationRepeat(), this._options.animationReverse && this._setAnimationReverse(), this._options.animationDelay && this._setAnimationDelay(), this._options.animationDuration && this._setAnimationDuration(), this._options.animationInterval && this._setAnimationInterval();
  }
  _setAnimationReverse() {
    h.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === true ? "infinite" : "2",
      animationDirection: "alternate"
    });
  }
  _setAnimationDuration() {
    h.style(this._animateElement, {
      animationDuration: `${this._options.animationDuration}ms`
    });
  }
  _setAnimationDelay() {
    h.style(this._animateElement, {
      animationDelay: `${this._options.animationDelay}ms`
    });
  }
  _setAnimationRepeat() {
    h.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === true ? "infinite" : this._options.animationRepeat
    });
  }
  _setAnimationInterval() {
    c.on(this._animateElement, "click", () => {
      this._clearAnimationClass(), setTimeout(() => {
        this._addAnimatedClass();
      }, this._options.animationInterval);
    });
  }
  _hideAnimateElement() {
    h.style(this._animateElement, { visibility: "hidden" });
  }
  _showAnimateElement() {
    h.style(this._animateElement, { visibility: "visible" });
  }
  _bindResetAnimationAfterFinish() {
    c.on(this._animateElement, "animationend", () => {
      this._clearAnimationClass();
    });
  }
  _bindTriggerOnEndCallback() {
    c.on(this._animateElement, "animationend", () => {
      this._callback(this._options.onEnd);
    });
  }
  _bindScrollEvents() {
    this._options.animationShowOnLoad || this._animateOnScroll(), c.on(window, "scroll", () => {
      this._animateOnScroll();
    });
  }
  _bindClickEvents() {
    c.on(this._element, "mousedown", () => {
      this._startAnimation();
    });
  }
  _bindHoverEvents() {
    c.one(this._element, "mouseover", () => {
      this._startAnimation();
    }), c.one(this._animateElement, "animationend", () => {
      setTimeout(() => {
        this._bindHoverEvents();
      }, 100);
    });
  }
  _callback(t) {
    t instanceof Function && t();
  }
  // Static
  static autoInit(t) {
    t._init();
  }
  static jQueryInterface(t) {
    new _pr(this[0], t).init();
  }
  static getInstance(t) {
    return y.getData(t, jn);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Kn = "ripple";
var rs = "te.ripple";
var ef = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%";
var sf = ["[data-te-ripple-init]"];
var as = [0, 0, 0];
var nf = [
  { name: "primary", gradientColor: "#3B71CA" },
  { name: "secondary", gradientColor: "#9FA6B2" },
  { name: "success", gradientColor: "#14A44D" },
  { name: "danger", gradientColor: "#DC4C64" },
  { name: "warning", gradientColor: "#E4A11B" },
  { name: "info", gradientColor: "#54B4D3" },
  { name: "light", gradientColor: "#fbfbfb" },
  { name: "dark", gradientColor: "#262626" }
];
var xa = 0.5;
var of = {
  rippleCentered: false,
  rippleColor: "",
  rippleColorDark: "",
  rippleDuration: "500ms",
  rippleRadius: 0,
  rippleUnbound: false
};
var rf = {
  rippleCentered: "boolean",
  rippleColor: "string",
  rippleColorDark: "string",
  rippleDuration: "string",
  rippleRadius: "number",
  rippleUnbound: "boolean"
};
var af = {
  ripple: "relative overflow-hidden inline-block align-bottom",
  rippleWave: "rounded-[50%] opacity-50 pointer-events-none absolute touch-none scale-0 transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999]",
  unbound: "overflow-visible"
};
var lf = {
  ripple: "string",
  rippleWave: "string",
  unbound: "string"
};
var Ze = class _Ze {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._element && (y.setData(t, rs, this), h.addClass(this._element, this._classes.ripple)), this._clickHandler = this._createRipple.bind(this), this._rippleTimer = null, this._isMinWidthSet = false, this._initialClasses = null, this.init();
  }
  // Getters
  static get NAME() {
    return Kn;
  }
  // Public
  init() {
    this._addClickEvent(this._element);
  }
  dispose() {
    y.removeData(this._element, rs), c.off(this._element, "click", this._clickHandler), this._element = null, this._options = null;
  }
  // Private
  _autoInit(t) {
    sf.forEach((e) => {
      d.closest(t.target, e) && (this._element = d.closest(t.target, e));
    }), this._element.style.minWidth || (h.style(this._element, {
      "min-width": getComputedStyle(this._element).width
    }), this._isMinWidthSet = true), this._options = this._getConfig(), this._classes = this._getClasses(), this._initialClasses = [...this._element.classList], h.addClass(this._element, this._classes.ripple), this._createRipple(t);
  }
  _addClickEvent(t) {
    c.on(t, "mousedown", this._clickHandler);
  }
  _createRipple(t) {
    this._element.className.indexOf(this._classes.ripple) < 0 && h.addClass(this._element, this._classes.ripple);
    const { layerX: e, layerY: i } = t, n = t.offsetX || e, o = t.offsetY || i, r = this._element.offsetHeight, a = this._element.offsetWidth, l = this._durationToMsNumber(this._options.rippleDuration), p = {
      offsetX: this._options.rippleCentered ? r / 2 : n,
      offsetY: this._options.rippleCentered ? a / 2 : o,
      height: r,
      width: a
    }, u = this._getDiameter(p), _ = this._options.rippleRadius || u / 2, f = {
      delay: l * xa,
      duration: l - l * xa
    }, g = {
      left: this._options.rippleCentered ? `${a / 2 - _}px` : `${n - _}px`,
      top: this._options.rippleCentered ? `${r / 2 - _}px` : `${o - _}px`,
      height: `${this._options.rippleRadius * 2 || u}px`,
      width: `${this._options.rippleRadius * 2 || u}px`,
      transitionDelay: `0s, ${f.delay}ms`,
      transitionDuration: `${l}ms, ${f.duration}ms`
    }, m = $("div");
    this._createHTMLRipple({
      wrapper: this._element,
      ripple: m,
      styles: g
    }), this._removeHTMLRipple({ ripple: m, duration: l });
  }
  _createHTMLRipple({ wrapper: t, ripple: e, styles: i }) {
    Object.keys(i).forEach(
      (n) => e.style[n] = i[n]
    ), h.addClass(e, this._classes.rippleWave), e.setAttribute("data-te-ripple-ref", ""), this._addColor(e, t), this._toggleUnbound(t), this._appendRipple(e, t);
  }
  _removeHTMLRipple({ ripple: t, duration: e }) {
    this._rippleTimer && (clearTimeout(this._rippleTimer), this._rippleTimer = null), t && setTimeout(() => {
      t.classList.add("!opacity-0");
    }, 10), this._rippleTimer = setTimeout(() => {
      if (t && (t.remove(), this._element)) {
        d.find("[data-te-ripple-ref]", this._element).forEach(
          (n) => {
            n.remove();
          }
        ), this._isMinWidthSet && (h.style(this._element, { "min-width": "" }), this._isMinWidthSet = false);
        const i = this._initialClasses ? this._addedNewRippleClasses(
          this._classes.ripple,
          this._initialClasses
        ) : this._classes.ripple.split(" ");
        h.removeClass(this._element, i);
      }
    }, e);
  }
  _addedNewRippleClasses(t, e) {
    return t.split(" ").filter(
      (i) => e.findIndex((n) => i === n) === -1
    );
  }
  _durationToMsNumber(t) {
    return Number(t.replace("ms", "").replace("s", "000"));
  }
  _getConfig(t = {}) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...of,
      ...e,
      ...t
    }, D(Kn, t, rf), t;
  }
  _getClasses(t = {}) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...af,
      ...e,
      ...t
    }, D(Kn, t, lf), t;
  }
  _getDiameter({ offsetX: t, offsetY: e, height: i, width: n }) {
    const o = e <= i / 2, r = t <= n / 2, a = (f, g) => Math.sqrt(f ** 2 + g ** 2), l = e === i / 2 && t === n / 2, p = {
      first: o === true && r === false,
      second: o === true && r === true,
      third: o === false && r === true,
      fourth: o === false && r === false
    }, u = {
      topLeft: a(t, e),
      topRight: a(n - t, e),
      bottomLeft: a(t, i - e),
      bottomRight: a(n - t, i - e)
    };
    let _ = 0;
    return l || p.fourth ? _ = u.topLeft : p.third ? _ = u.topRight : p.second ? _ = u.bottomRight : p.first && (_ = u.bottomLeft), _ * 2;
  }
  _appendRipple(t, e) {
    e.appendChild(t), setTimeout(() => {
      h.addClass(t, "opacity-0 scale-100");
    }, 50);
  }
  _toggleUnbound(t) {
    this._options.rippleUnbound === true ? h.addClass(t, this._classes.unbound) : h.removeClass(t, this._classes.unbound);
  }
  _addColor(t) {
    let e = this._options.rippleColor || "rgb(0,0,0)";
    (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (e = this._options.rippleColorDark || this._options.rippleColor);
    const i = nf.find(
      (r) => r.name === e.toLowerCase()
    ), n = i ? this._colorToRGB(i.gradientColor).join(",") : this._colorToRGB(e).join(","), o = ef.split("{{color}}").join(`${n}`);
    t.style.backgroundImage = `radial-gradient(circle, ${o})`;
  }
  _colorToRGB(t) {
    function e(o) {
      return o.length < 7 && (o = `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}`), [
        parseInt(o.substr(1, 2), 16),
        parseInt(o.substr(3, 2), 16),
        parseInt(o.substr(5, 2), 16)
      ];
    }
    function i(o) {
      const r = document.body.appendChild(
        document.createElement("fictum")
      ), a = "rgb(1, 2, 3)";
      return r.style.color = a, r.style.color !== a || (r.style.color = o, r.style.color === a || r.style.color === "") ? as : (o = getComputedStyle(r).color, document.body.removeChild(r), o);
    }
    function n(o) {
      return o = o.match(/[.\d]+/g).map((r) => +Number(r)), o.length = 3, o;
    }
    return t.toLowerCase() === "transparent" ? as : t[0] === "#" ? e(t) : (t.indexOf("rgb") === -1 && (t = i(t)), t.indexOf("rgb") === 0 ? n(t) : as);
  }
  // Static
  static autoInitial(t) {
    return function(e) {
      t._autoInit(e);
    };
  }
  static jQueryInterface(t) {
    return this.each(function() {
      return y.getData(this, rs) ? null : new _Ze(this, t);
    });
  }
  static getInstance(t) {
    return y.getData(t, rs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
function Z(s) {
  return s.getDate();
}
function Vs(s) {
  return s.getDay();
}
function Y(s) {
  return s.getMonth();
}
function B(s) {
  return s.getFullYear();
}
function cf(s, t, e) {
  const i = e.startDay, n = i > 0 ? 7 - i : 0, r = new Date(s, t).getDay() + n;
  return r >= 7 ? r - 7 : r;
}
function Po(s) {
  return hf(s).getDate();
}
function hf(s) {
  return Et(s.getFullYear(), s.getMonth() + 1, 0);
}
function Be() {
  return /* @__PURE__ */ new Date();
}
function it(s, t) {
  return nt(s, t * 12);
}
function nt(s, t) {
  const e = Et(
    s.getFullYear(),
    s.getMonth() + t,
    s.getDate()
  ), i = Z(s), n = Z(e);
  return i !== n && e.setDate(0), e;
}
function xe(s, t) {
  return Et(s.getFullYear(), s.getMonth(), s.getDate() + t);
}
function Et(s, t, e) {
  const i = new Date(s, t, e);
  return s >= 0 && s < 100 && i.setFullYear(i.getFullYear() - 1900), i;
}
function Oa(s) {
  const t = s.split("-"), e = t[0], i = t[1], n = t[2];
  return Et(e, i, n);
}
function df(s) {
  return !Number.isNaN(s.getTime());
}
function Re(s, t) {
  return B(s) - B(t) || Y(s) - Y(t) || Z(s) - Z(t);
}
function fe(s, t) {
  return s.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), s.getTime() === t.getTime();
}
function Ws(s, t) {
  const i = B(s) - pf();
  return uf(i, t);
}
function uf(s, t) {
  return (s % t + t) % t;
}
function pf(s, t, e) {
  let i = 0;
  return e ? i = B(e) - s + 1 : t && (i = B(t)), i;
}
function nn(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date();
  r.setHours(0, 0, 0, 0);
  const a = t && Re(s, t) <= -1, l = e && Re(s, e) >= 1, p = n && Re(s, r) <= -1, u = o && Re(s, r) >= 1, _ = i && i(s) === false;
  return a || l || _ || p || u;
}
function zc(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date(), a = i && B(i), l = i && Y(i), p = e && B(e), u = e && Y(e), _ = B(r), f = Y(r), g = l && a && (t > a || t === a && s > l), m = u && p && (t < p || t === p && s < u), b = n && (t < _ || t === _ && s < f), v = o && (t > _ || t === _ && s > f);
  return g || m || b || v;
}
function Bo(s, t, e, i, n) {
  const o = t && B(t), r = e && B(e), a = B(/* @__PURE__ */ new Date()), l = r && s > r, p = o && s < o, u = i && s < a, _ = n && s > a;
  return l || p || u || _;
}
function _f(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && o && Re(o, l) < 0 || s) && (o = l), o && Di(
    t,
    o,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function ff(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && n && Re(n, l) < 0 || s) && (n = l), n && Di(
    t,
    n,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function Di(s, t, e, i, n, o, r, a) {
  return e === "days" ? B(s) === B(t) && Y(s) === Y(t) : e === "months" ? B(s) === B(t) : e === "years" ? B(t) >= a && B(t) <= r : false;
}
var mf = "data-te-datepicker-modal-container-ref";
var gf = "data-te-datepicker-dropdown-container-ref";
var bf = "data-te-dropdown-backdrop-ref";
var vf = "data-te-datepicker-date-text-ref";
var Sa = "data-te-datepicker-view-ref";
var Tf = "data-te-datepicker-previous-button-ref";
var Ef = "data-te-datepicker-next-button-ref";
var Cf = "data-te-datepicker-ok-button-ref";
var Af = "data-te-datepicker-cancel-button-ref";
var yf = "data-te-datepicker-clear-button-ref";
var wf = "data-te-datepicker-view-change-button-ref";
function kf(s, t, e, i, n, o, r, a, l, p) {
  const u = Y(s), _ = B(s), f = Z(s), g = Vs(s), m = $("div"), b = `
        ${Ia(
    s,
    u,
    _,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    p
  )}
    `, v = `
      ${Of(f, g, u, n, p)}
      ${Ia(
    s,
    u,
    _,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    p
  )}
    `;
  return n.inline ? (h.addClass(m, p.datepickerDropdownContainer), m.setAttribute(gf, l), m.innerHTML = b) : (h.addClass(m, p.modalContainer), m.setAttribute(mf, l), m.innerHTML = v), m;
}
function xf(s) {
  const t = $("div");
  return h.addClass(t, s), t.setAttribute(bf, ""), t;
}
function Of(s, t, e, i, n) {
  return `
      <div class="${n.datepickerHeader}" data-te-datepicker-header>
        <div class="${n.datepickerTitle}">
          <span class="${n.datepickerTitleText}">${i.title}</span>
        </div>
        <div class="${n.datepickerDate}">
          <span class="${n.datepickerDateText}" ${vf} >${i.weekdaysShort[t]}, ${i.monthsShort[e]} ${s}</span>
        </div>
      </div>
    `;
}
function Ia(s, t, e, i, n, o, r, a, l, p, u) {
  let _;
  return r.inline ? _ = `
    <div class="${u.datepickerMain}">
      ${$a(t, e, r, u)}
      <div class="${u.datepickerView}" ${Sa} tabindex="0">
        ${Da(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    p,
    u
  )}
      </div>
    </div>
  ` : _ = `
    <div class="${u.datepickerMain}">
      ${$a(t, e, r, u)}
      <div class="${u.datepickerView}" ${Sa} tabindex="0">
        ${Da(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    p,
    u
  )}
      </div>
      ${Sf(r, u)}
    </div>
  `, _;
}
function Da(s, t, e, i, n, o, r, a, l, p) {
  let u;
  return o.view === "days" ? u = Fs(s, e, o, p) : o.view === "months" ? u = Ys(
    t,
    i,
    n,
    o,
    r,
    p
  ) : u = js(
    s,
    i,
    o,
    a,
    l,
    p
  ), u;
}
function $a(s, t, e, i) {
  return `
    <div class="${i.datepickerDateControls}">
      <button class="${i.datepickerViewChangeButton}" aria-label="${e.switchToMultiYearViewLabel}" ${wf}>
        ${e.monthsFull[s]} ${t} ${$t(
    e,
    i
  )}
      </button>
      <div class="${i.datepickerArrowControls}">
        <button class="${i.datepickerPreviousButton}" aria-label="${e.prevMonthLabel}" ${Tf}>${e.changeMonthIconTemplate}</button>
        <button class="${i.datepickerNextButton}" aria-label="${e.nextMonthLabel}" ${Ef}>${e.changeMonthIconTemplate}</button>
      </div>
    </div>
    `;
}
function $t(s, t) {
  return `
  <span class="${t.datepickerViewChangeIcon}">
  ${s.viewChangeIconTemplate}
  </span>
  `;
}
function Sf(s, t) {
  const e = `<button class="${t.datepickerFooterBtn}" aria-label="${s.okBtnLabel}" ${Cf}>${s.okBtnText}</button>`, i = `<button class="${t.datepickerFooterBtn}" aria-label="${s.cancelBtnLabel}" ${Af}>${s.cancelBtnText}</button>`, n = `<button class="${t.datepickerFooterBtn} ${t.datepickerClearBtn}" aria-label="${s.clearBtnLabel}" ${yf}>${s.clearBtnText}</button>`;
  return `
        <div class="${t.datepickerFooter}">
          
        ${s.removeClearBtn ? "" : n}
        ${s.removeCancelBtn ? "" : i}
        ${s.removeOkBtn ? "" : e}
        </div>
      `;
}
function Fs(s, t, e, i) {
  const n = If(s, t, e), r = `
      <tr>
        ${e.weekdaysNarrow.map((l, p) => `<th class="${i.datepickerDayHeading}" scope="col" aria-label="${e.weekdaysFull[p]}">${l}</th>`).join("")}
      </tr>
    `, a = n.map((l) => `
        <tr>
          ${l.map((p) => `
              <td
              class="${i.datepickerCell} ${i.datepickerCellSmall}"
              data-te-date="${B(p.date)}-${Y(
    p.date
  )}-${Z(p.date)}"
              aria-label="${p.date}"
              aria-selected="${p.isSelected}"
              ${p.isSelected ? "data-te-datepicker-cell-selected" : ""}
              ${!p.currentMonth || p.disabled ? "data-te-datepicker-cell-disabled" : ""}
              ${p.isToday ? "data-te-datepicker-cell-current" : ""}
              >
                <div
                  class="${i.datepickerCellContent} ${i.datepickerCellContentSmall}"
                  style="${p.currentMonth ? "display: block" : "display: none"}"
                  >
                  ${p.dayNumber}
                  </div>
              </td>
            `).join("")}
        </tr>
      `).join("");
  return `
      <table class="${i.datepickerTable}">
        <thead>
          ${r}
        </thead>
        <tbody>
         ${a}
        </tbody>
      </table>
    `;
}
function If(s, t, e) {
  const i = [], n = Y(s), o = Y(nt(s, -1)), r = Y(nt(s, 1)), a = B(s), l = cf(a, n, e), p = Po(s), u = Po(nt(s, -1)), _ = 7;
  let f = 1, g = false;
  for (let m = 1; m < _; m++) {
    const b = [];
    if (m === 1) {
      const v = u - l + 1;
      for (let w = v; w <= u; w++) {
        const E = Et(a, o, w);
        b.push({
          date: E,
          currentMonth: g,
          isSelected: t && fe(E, t),
          isToday: fe(E, Be()),
          dayNumber: Z(E)
        });
      }
      g = true;
      const C = _ - b.length;
      for (let w = 0; w < C; w++) {
        const E = Et(a, n, f);
        b.push({
          date: E,
          currentMonth: g,
          isSelected: t && fe(E, t),
          isToday: fe(E, Be()),
          dayNumber: Z(E),
          disabled: nn(
            E,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), f++;
      }
    } else
      for (let v = 1; v < 8; v++) {
        f > p && (f = 1, g = false);
        const C = Et(
          a,
          g ? n : r,
          f
        );
        b.push({
          date: C,
          currentMonth: g,
          isSelected: t && fe(C, t),
          isToday: fe(C, Be()),
          dayNumber: Z(C),
          disabled: nn(
            C,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), f++;
      }
    i.push(b);
  }
  return i;
}
function Ys(s, t, e, i, n, o) {
  const r = Df(i, n), a = Y(Be()), l = B(Be()), p = `
      ${r.map((u) => `
          <tr>
            ${u.map((_) => {
    const f = i.monthsShort.indexOf(_);
    return `
                <td class="${o.datepickerCell} ${o.datepickerCellLarge}"
                ${zc(
      f,
      s,
      i.min,
      i.max,
      i.disablePast,
      i.disableFuture
    ) ? "data-te-datepicker-cell-disabled" : ""}
                
                data-te-month="${f}" data-te-year="${s}" aria-label="${_}, ${s}"
                ${f === e && s === t ? "data-te-datepicker-cell-selected" : ""}
                ${f === a && s === l ? "data-te-datepicker-cell-current" : ""}" data-te-month="${f}" data-te-year="${s}" aria-label="${_}, ${s}">
                  <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${_}</div>
                </td>
              `;
  }).join("")}
          </tr>
        `).join("")}
    `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
         ${p}
        </tbody>
      </table>
    `;
}
function Df(s, t) {
  const e = [];
  let i = [];
  for (let n = 0; n < s.monthsShort.length; n++)
    if (i.push(s.monthsShort[n]), i.length === t) {
      const o = i;
      e.push(o), i = [];
    }
  return e;
}
function js(s, t, e, i, n, o) {
  const r = $f(s, i, n), a = B(Be()), l = `
    ${r.map((p) => `
        <tr>
          ${p.map((u) => `
              <td class="${o.datepickerCell} ${o.datepickerCellLarge}"  aria-label="${u}" data-te-year="${u}"
              ${Bo(
    u,
    e.min,
    e.max,
    e.disablePast,
    e.disableFuture
  ) ? "data-te-datepicker-cell-disabled" : ""}
              ${u === t ? "data-te-datepicker-cell-selected" : ""}
              ${u === a ? "data-te-datepicker-cell-current" : ""}
              >
                <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${u}</div>
              </td>
            `).join("")}
        </tr>
      `).join("")}
  `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
        ${l}
        </tbody>
      </table>
    `;
}
function $f(s, t, e) {
  const i = [], n = B(s), o = Ws(s, t), r = n - o;
  let a = [];
  for (let l = 0; l < t; l++)
    if (a.push(r + l), a.length === e) {
      const p = a;
      i.push(p), a = [];
    }
  return i;
}
function Lf(s, t) {
  return `
    <button id="${s}" type="button" class="${t}" data-te-datepicker-toggle-button-ref data-te-datepicker-toggle-ref>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
      </svg>  
    </button>
  `;
}
var He = 37;
var at = 38;
var Ve = 39;
var z = 40;
var We = 36;
var Fe = 35;
var zn = 33;
var Un = 34;
var ct = 13;
var Ks = 32;
var Fi = 27;
var Pi = 9;
var Nf = 8;
var Mf = 46;
var vt = 24;
var ls = 4;
var cs = 4;
var Xn = "datepicker";
var zs = "te.datepicker";
var dn = `.${zs}`;
var Rf = ".data-api";
var Pf = `close${dn}`;
var Bf = `open${dn}`;
var Hf = `dateChange${dn}`;
var hs = `click${dn}${Rf}`;
var Uc = "data-te-datepicker-modal-container-ref";
var Xc = "data-te-datepicker-dropdown-container-ref";
var ds = "[data-te-datepicker-toggle-ref]";
var Vf = `[${Uc}]`;
var Wf = `[${Xc}]`;
var Ff = "[data-te-datepicker-view-change-button-ref]";
var Yf = "[data-te-datepicker-previous-button-ref]";
var jf = "[data-te-datepicker-next-button-ref]";
var Kf = "[data-te-datepicker-ok-button-ref]";
var zf = "[data-te-datepicker-cancel-button-ref]";
var Uf = "[data-te-datepicker-clear-button-ref]";
var Xf = "[data-te-datepicker-view-ref]";
var Gf = "[data-te-datepicker-toggle-button-ref]";
var qf = "[data-te-datepicker-date-text-ref]";
var Zf = "[data-te-dropdown-backdrop-ref]";
var Qf = "animate-[fade-in_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none";
var Jf = "animate-[fade-out_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none";
var tm = "animate-[fade-in_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none";
var em = "animate-[fade-out_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none";
var im = "flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[328px] h-[512px] bg-white rounded-[0.6rem] shadow-lg z-[1066] xs:max-md:landscape:w-[475px] xs:max-md:landscape:h-[360px] xs:max-md:landscape:flex-row dark:bg-zinc-700";
var sm = "w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-black/40 z-[1065]";
var nm = "relative h-full";
var om = "xs:max-md:landscape:h-full h-[120px] px-6 bg-primary flex flex-col rounded-t-lg dark:bg-zinc-800";
var rm = "h-8 flex flex-col justify-end";
var am = "text-[10px] font-normal uppercase tracking-[1.7px] text-white";
var lm = "xs:max-md:landscape:mt-24 h-[72px] flex flex-col justify-end";
var cm = "text-[34px] font-normal text-white";
var hm = "outline-none px-3";
var dm = "px-3 pt-2.5 pb-0 flex justify-between text-black/[64]";
var um = "flex items-center outline-none p-2.5 text-neutral-500 font-medium text-[0.9rem] rounded-xl shadow-none bg-transparent m-0 border-none hover:bg-neutral-200 focus:bg-neutral-200  dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10";
var pm = "mt-2.5";
var _m = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent mr-6 hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-auto";
var fm = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:rotate-180 [&>svg]:mx-auto";
var mm = "h-14 flex absolute w-full bottom-0 justify-end items-center px-3";
var gm = "outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded-[10px] mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10";
var bm = "mr-auto";
var vm = "w-10 h-10 text-center text-[12px] font-normal dark:text-white";
var Tm = "text-center data-[te-datepicker-cell-disabled]:text-neutral-300 data-[te-datepicker-cell-disabled]:cursor-default data-[te-datepicker-cell-disabled]:pointer-events-none data-[te-datepicker-cell-disabled]:hover:cursor-default hover:cursor-pointer group";
var Em = "w-10 h-10 xs:max-md:landscape:w-8 xs:max-md:landscape:h-8";
var Cm = "w-[76px] h-[42px]";
var Am = "mx-auto group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-neutral-300 group-[[data-te-datepicker-cell-selected]]:bg-primary group-[[data-te-datepicker-cell-selected]]:text-white group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-neutral-100 group-[[data-te-datepicker-cell-focused]]:data-[te-datepicker-cell-selected]:bg-primary group-[[data-te-datepicker-cell-current]]:border-solid group-[[data-te-datepicker-cell-current]]:border-black group-[[data-te-datepicker-cell-current]]:border dark:group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-white/10 dark:group-[[data-te-datepicker-cell-current]]:border-white dark:text-white dark:group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-white/10 dark:group-[[data-te-datepicker-cell-disabled]]:text-neutral-500";
var ym = "w-9 h-9 leading-9 rounded-[50%] text-[13px]";
var wm = "w-[72px] h-10 leading-10 py-[1px] px-0.5 rounded-[999px]";
var km = "mx-auto w-[304px]";
var xm = "flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200";
var Om = "inline-block pointer-events-none ml-[3px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-neutral-500 dark:[&>svg]:fill-white";
var Sm = "w-[328px] h-[380px] bg-white rounded-lg shadow-[0px_2px_15px_-3px_rgba(0,0,0,.07),_0px_10px_20px_-2px_rgba(0,0,0,.04)] z-[1066] dark:bg-zinc-700";
var Im = {
  title: "Select date",
  container: "body",
  disablePast: false,
  disableFuture: false,
  monthsFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  weekdaysFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysNarrow: ["S", "M", "T", "W", "T", "F", "S"],
  okBtnText: "Ok",
  clearBtnText: "Clear",
  cancelBtnText: "Cancel",
  okBtnLabel: "Confirm selection",
  clearBtnLabel: "Clear selection",
  cancelBtnLabel: "Cancel selection",
  nextMonthLabel: "Next month",
  prevMonthLabel: "Previous month",
  nextYearLabel: "Next year",
  prevYearLabel: "Previous year",
  changeMonthIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  `,
  nextMultiYearLabel: "Next 24 years",
  prevMultiYearLabel: "Previous 24 years",
  switchToMultiYearViewLabel: "Choose year and month",
  switchToMonthViewLabel: "Choose date",
  switchToDayViewLabel: "Choose date",
  startDate: null,
  startDay: 0,
  format: "dd/mm/yyyy",
  view: "days",
  viewChangeIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  `,
  min: null,
  max: null,
  filter: null,
  inline: false,
  toggleButton: true,
  disableToggleButton: false,
  disableInput: false,
  animations: true,
  confirmDateOnSelect: false,
  removeOkBtn: false,
  removeCancelBtn: false,
  removeClearBtn: false
};
var Dm = {
  title: "string",
  container: "string",
  disablePast: "boolean",
  disableFuture: "boolean",
  monthsFull: "array",
  monthsShort: "array",
  weekdaysFull: "array",
  weekdaysShort: "array",
  weekdaysNarrow: "array",
  okBtnText: "string",
  clearBtnText: "string",
  cancelBtnText: "string",
  okBtnLabel: "string",
  clearBtnLabel: "string",
  cancelBtnLabel: "string",
  nextMonthLabel: "string",
  prevMonthLabel: "string",
  nextYearLabel: "string",
  prevYearLabel: "string",
  nextMultiYearLabel: "string",
  prevMultiYearLabel: "string",
  changeMonthIconTemplate: "string",
  switchToMultiYearViewLabel: "string",
  switchToMonthViewLabel: "string",
  switchToDayViewLabel: "string",
  startDate: "(null|string|date)",
  startDay: "number",
  format: "string",
  view: "string",
  viewChangeIconTemplate: "string",
  min: "(null|string|date)",
  max: "(null|string|date)",
  filter: "(null|function)",
  inline: "boolean",
  toggleButton: "boolean",
  disableToggleButton: "boolean",
  disableInput: "boolean",
  animations: "boolean",
  confirmDateOnSelect: "boolean",
  removeOkBtn: "boolean",
  removeCancelBtn: "boolean",
  removeClearBtn: "boolean"
};
var $m = {
  fadeIn: Qf,
  fadeOut: Jf,
  fadeInShort: tm,
  fadeOutShort: em,
  modalContainer: im,
  datepickerBackdrop: sm,
  datepickerMain: nm,
  datepickerHeader: om,
  datepickerTitle: rm,
  datepickerTitleText: am,
  datepickerDate: lm,
  datepickerDateText: cm,
  datepickerView: hm,
  datepickerDateControls: dm,
  datepickerViewChangeButton: um,
  datepickerViewChangeIcon: Om,
  datepickerArrowControls: pm,
  datepickerPreviousButton: _m,
  datepickerNextButton: fm,
  datepickerFooter: mm,
  datepickerFooterBtn: gm,
  datepickerClearBtn: bm,
  datepickerDayHeading: vm,
  datepickerCell: Tm,
  datepickerCellSmall: Em,
  datepickerCellLarge: Cm,
  datepickerCellContent: Am,
  datepickerCellContentSmall: ym,
  datepickerCellContentLarge: wm,
  datepickerTable: km,
  datepickerToggleButton: xm,
  datepickerDropdownContainer: Sm
};
var Lm = {
  fadeIn: "string",
  fadeOut: "string",
  fadeInShort: "string",
  fadeOutShort: "string",
  modalContainer: "string",
  datepickerBackdrop: "string",
  datepickerMain: "string",
  datepickerHeader: "string",
  datepickerTitle: "string",
  datepickerTitleText: "string",
  datepickerDate: "string",
  datepickerDateText: "string",
  datepickerView: "string",
  datepickerDateControls: "string",
  datepickerViewChangeButton: "string",
  datepickerArrowControls: "string",
  datepickerPreviousButton: "string",
  datepickerNextButton: "string",
  datepickerFooter: "string",
  datepickerFooterBtn: "string",
  datepickerClearBtn: "string",
  datepickerDayHeading: "string",
  datepickerCell: "string",
  datepickerCellSmall: "string",
  datepickerCellLarge: "string",
  datepickerCellContent: "string",
  datepickerCellContentSmall: "string",
  datepickerCellContentLarge: "string",
  datepickerTable: "string",
  datepickerToggleButton: "string",
  datepickerDropdownContainer: "string"
};
var Nm = class {
  constructor(t, e, i) {
    this._element = t, this._input = d.findOne("input", this._element), this._options = this._getConfig(e), this._classes = this._getClasses(i), this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = this._options.view, this._popper = null, this._focusTrap = null, this._isOpen = false, this._toggleButtonId = rt("datepicker-toggle-"), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this._scrollBar = new qe(), this._element && y.setData(t, zs, this), this._init(), this.toggleButton && this._options.disableToggle && (this.toggleButton.disabled = "true"), this._options.disableInput && (this._input.disabled = "true");
  }
  // Getters
  static get NAME() {
    return Xn;
  }
  get container() {
    return d.findOne(
      `[${Uc}='${this._toggleButtonId}']`
    ) || d.findOne(
      `[${Xc}='${this._toggleButtonId}']`
    );
  }
  get options() {
    return this._options;
  }
  get activeCell() {
    let t;
    return this._view === "days" && (t = this._getActiveDayCell()), this._view === "months" && (t = this._getActiveMonthCell()), this._view === "years" && (t = this._getActiveYearCell()), t;
  }
  get activeDay() {
    return Z(this._activeDate);
  }
  get activeMonth() {
    return Y(this._activeDate);
  }
  get activeYear() {
    return B(this._activeDate);
  }
  get firstYearInView() {
    return this.activeYear - Ws(this._activeDate, vt);
  }
  get lastYearInView() {
    return this.firstYearInView + vt - 1;
  }
  get viewChangeButton() {
    return d.findOne(Ff, this.container);
  }
  get previousButton() {
    return d.findOne(Yf, this.container);
  }
  get nextButton() {
    return d.findOne(jf, this.container);
  }
  get okButton() {
    return d.findOne(Kf, this.container);
  }
  get cancelButton() {
    return d.findOne(zf, this.container);
  }
  get clearButton() {
    return d.findOne(Uf, this.container);
  }
  get datesContainer() {
    return d.findOne(Xf, this.container);
  }
  get toggleButton() {
    return d.findOne(Gf, this._element);
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    if (t = {
      ...Im,
      ...e,
      ...t
    }, D(Xn, t, Dm), t.max && typeof t.max == "string" && (t.max = new Date(t.max)), t.min && typeof t.min == "string" && (t.min = new Date(t.min)), t.startDay && t.startDay !== 0) {
      const i = this._getNewDaysOrderArray(t);
      t.weekdaysNarrow = i;
    }
    return t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...$m,
      ...e,
      ...t
    }, D(Xn, t, Lm), t;
  }
  _getContainer() {
    return d.findOne(this._options.container);
  }
  _getNewDaysOrderArray(t) {
    const e = t.startDay, i = t.weekdaysNarrow;
    return i.slice(e).concat(i.slice(0, e));
  }
  _init() {
    !this.toggleButton && this._options.toggleButton && (this._appendToggleButton(), (this._input.readOnly || this._input.disabled) && (this.toggleButton.style.pointerEvents = "none")), this._listenToUserInput(), this._listenToToggleClick(), this._listenToToggleKeydown();
  }
  _appendToggleButton() {
    const t = Lf(
      this._toggleButtonId,
      this._classes.datepickerToggleButton
    );
    this._element.insertAdjacentHTML("beforeend", t);
  }
  open() {
    if (this._input.readOnly || this._input.disabled)
      return;
    const t = c.trigger(this._element, Bf);
    if (this._isOpen || t.defaultPrevented)
      return;
    this._setInitialDate();
    const e = xf(this._classes.datepickerBackdrop), i = kf(
      this._activeDate,
      this._selectedDate,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      cs,
      vt,
      ls,
      this._toggleButtonId,
      this._classes
    );
    this._options.inline ? this._openDropdown(i) : (this._openModal(e, i), this._scrollBar.hide()), this._animations && (h.addClass(this.container, this._classes.fadeIn), h.addClass(e, this._classes.fadeInShort)), this._setFocusTrap(this.container), this._listenToDateSelection(), this._addControlsListeners(), this._updateControlsDisabledState(), this._listenToEscapeClick(), this._listenToKeyboardNavigation(), this._listenToDatesContainerFocus(), this._listenToDatesContainerBlur(), this._asyncFocusDatesContainer(), this._updateViewControlsAndAttributes(this._view), this._isOpen = true, setTimeout(() => {
      this._listenToOutsideClick();
    }, 0);
  }
  _openDropdown(t) {
    this._popper = Ce(this._input, t, {
      placement: "bottom-start"
    }), this._getContainer().appendChild(t);
  }
  _openModal(t, e) {
    const i = this._getContainer();
    i.appendChild(t), i.appendChild(e);
  }
  _setFocusTrap(t) {
    this._focusTrap = new Wi(t, {
      event: "keydown",
      condition: (e) => e.key === "Tab"
    }), this._focusTrap.trap();
  }
  _listenToUserInput() {
    c.on(this._input, "input", (t) => {
      this._handleUserInput(t.target.value);
    });
  }
  _listenToToggleClick() {
    c.on(
      this._element,
      hs,
      ds,
      (t) => {
        t.preventDefault(), this.open();
      }
    );
  }
  _listenToToggleKeydown() {
    c.on(
      this._element,
      "keydown",
      ds,
      (t) => {
        t.keyCode === ct && !this._isOpen && this.open();
      }
    );
  }
  _listenToDateSelection() {
    c.on(this.datesContainer, "click", (t) => {
      this._handleDateSelection(t);
    });
  }
  _handleDateSelection(t) {
    const e = t.target.nodeName === "DIV" ? t.target.parentNode.dataset : t.target.dataset, i = t.target.nodeName === "DIV" ? t.target.parentNode : t.target;
    if (e.teDate && this._pickDay(e.teDate, i), e.teMonth && e.teYear) {
      const n = parseInt(e.teMonth, 10), o = parseInt(e.teYear, 10);
      this._pickMonth(n, o);
    }
    if (e.teYear && !e.teMonth) {
      const n = parseInt(e.teYear, 10);
      this._pickYear(n);
    }
    this._options.inline || this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _updateHeaderDate(t, e, i) {
    const n = d.findOne(
      qf,
      this.container
    ), o = Y(t), r = Z(t), a = Vs(t);
    n.innerHTML = `${i[a]}, ${e[o]} ${r}`;
  }
  _addControlsListeners() {
    c.on(this.nextButton, "click", () => {
      this._view === "days" ? this.nextMonth() : this._view === "years" ? this.nextYears() : this.nextYear(), this._updateControlsDisabledState();
    }), c.on(this.previousButton, "click", () => {
      this._view === "days" ? this.previousMonth() : this._view === "years" ? this.previousYears() : this.previousYear(), this._updateControlsDisabledState();
    }), c.on(this.viewChangeButton, "click", () => {
      this._view === "days" ? this._changeView("years") : (this._view === "years" || this._view === "months") && this._changeView("days");
    }), this._options.inline || this._listenToFooterButtonsClick();
  }
  _listenToFooterButtonsClick() {
    c.on(this.okButton, "click", () => this.handleOk()), c.on(this.cancelButton, "click", () => this.handleCancel()), c.on(this.clearButton, "click", () => this.handleClear());
  }
  _listenToOutsideClick() {
    c.on(document, hs, (t) => {
      const e = t.target === this.container, i = this.container && this.container.contains(t.target);
      !e && !i && this.close();
    });
  }
  _listenToEscapeClick() {
    c.on(document, "keydown", (t) => {
      t.keyCode === Fi && this._isOpen && this.close();
    });
  }
  _listenToKeyboardNavigation() {
    c.on(this.datesContainer, "keydown", (t) => {
      this._handleKeydown(t);
    });
  }
  _listenToDatesContainerFocus() {
    c.on(this.datesContainer, "focus", () => {
      this._focusActiveCell(this.activeCell);
    });
  }
  _listenToDatesContainerBlur() {
    c.on(this.datesContainer, "blur", () => {
      this._removeCurrentFocusStyles();
    });
  }
  _handleKeydown(t) {
    this._view === "days" && this._handleDaysViewKeydown(t), this._view === "months" && this._handleMonthsViewKeydown(t), this._view === "years" && this._handleYearsViewKeydown(t);
  }
  _handleDaysViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case He:
        this._activeDate = xe(this._activeDate, F() ? 1 : -1);
        break;
      case Ve:
        this._activeDate = xe(this._activeDate, F() ? -1 : 1);
        break;
      case at:
        this._activeDate = xe(this._activeDate, -7);
        break;
      case z:
        this._activeDate = xe(this._activeDate, 7);
        break;
      case We:
        this._activeDate = xe(
          this._activeDate,
          1 - Z(this._activeDate)
        );
        break;
      case Fe:
        this._activeDate = xe(
          this._activeDate,
          Po(this._activeDate) - Z(this._activeDate)
        );
        break;
      case zn:
        this._activeDate = nt(this._activeDate, -1);
        break;
      case Un:
        this._activeDate = nt(this._activeDate, 1);
        break;
      case ct:
      case Ks:
        this._selectDate(this._activeDate), this._handleDateSelection(t), t.preventDefault();
        return;
      default:
        return;
    }
    Di(
      e,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max
    ) || this._changeView("days"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _asyncFocusDatesContainer() {
    setTimeout(() => {
      this.datesContainer.focus();
    }, 0);
  }
  _focusActiveCell(t) {
    t && t.setAttribute("data-te-datepicker-cell-focused", "");
  }
  _removeHighlightFromCell(t) {
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  _getActiveDayCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = Oa(i.dataset.teDate);
      return fe(n, this._activeDate);
    });
  }
  _handleMonthsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case He:
        this._activeDate = nt(this._activeDate, F() ? 1 : -1);
        break;
      case Ve:
        this._activeDate = nt(this._activeDate, F() ? -1 : 1);
        break;
      case at:
        this._activeDate = nt(this._activeDate, -4);
        break;
      case z:
        this._activeDate = nt(this._activeDate, 4);
        break;
      case We:
        this._activeDate = nt(this._activeDate, -this.activeMonth);
        break;
      case Fe:
        this._activeDate = nt(this._activeDate, 11 - this.activeMonth);
        break;
      case zn:
        this._activeDate = it(this._activeDate, -1);
        break;
      case Un:
        this._activeDate = it(this._activeDate, 1);
        break;
      case ct:
      case Ks:
        this._selectMonth(this.activeMonth);
        return;
      default:
        return;
    }
    Di(
      e,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max
    ) || this._changeView("months"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveMonthCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = parseInt(i.dataset.teYear, 10), o = parseInt(i.dataset.teMonth, 10);
      return n === this.activeYear && o === this.activeMonth;
    });
  }
  _handleYearsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell, n = 4, o = 24;
    switch (t.keyCode) {
      case He:
        this._activeDate = it(this._activeDate, F() ? 1 : -1);
        break;
      case Ve:
        this._activeDate = it(this._activeDate, F() ? -1 : 1);
        break;
      case at:
        this._activeDate = it(this._activeDate, -n);
        break;
      case z:
        this._activeDate = it(this._activeDate, n);
        break;
      case We:
        this._activeDate = it(
          this._activeDate,
          -Ws(this._activeDate, o)
        );
        break;
      case Fe:
        this._activeDate = it(
          this._activeDate,
          o - Ws(this._activeDate, o) - 1
        );
        break;
      case zn:
        this._activeDate = it(this._activeDate, -o);
        break;
      case Un:
        this._activeDate = it(this._activeDate, o);
        break;
      case ct:
      case Ks:
        this._selectYear(this.activeYear);
        return;
      default:
        return;
    }
    Di(
      e,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max
    ) || this._changeView("years"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveYearCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => parseInt(i.dataset.teYear, 10) === this.activeYear);
  }
  _setInitialDate() {
    this._input.value ? this._handleUserInput(this._input.value) : this._options.startDate ? this._activeDate = new Date(this._options.startDate) : this._activeDate = /* @__PURE__ */ new Date();
  }
  close() {
    const t = c.trigger(this._element, Pf);
    !this._isOpen || t.defaultPrevented || (this._removeDatepickerListeners(), this._animations && h.addClass(this.container, this._classes.fadeOut), this._options.inline ? this._closeDropdown() : this._closeModal(), this._isOpen = false, this._view = this._options.view, this.toggleButton ? this.toggleButton.focus() : this._input.focus());
  }
  _closeDropdown() {
    const t = d.findOne(Wf), e = this._getContainer();
    window.matchMedia("(prefers-reduced-motion: reduce)").matches && (t && e.removeChild(t), this._popper && this._popper.destroy()), t.addEventListener("animationend", () => {
      t && e.removeChild(t), this._popper && this._popper.destroy();
    }), this._removeFocusTrap();
  }
  _closeModal() {
    const t = d.findOne(Zf), e = d.findOne(Vf);
    !e || !t || (this._animations ? (h.addClass(t, this._classes.fadeOutShort), t.addEventListener("animationend", () => {
      this._removePicker(t, e), this._scrollBar.reset();
    })) : (this._removePicker(t, e), this._scrollBar.reset()));
  }
  _removePicker(t, e) {
    const i = this._getContainer();
    i.removeChild(t), i.removeChild(e);
  }
  _removeFocusTrap() {
    this._focusTrap && (this._focusTrap.disable(), this._focusTrap = null);
  }
  _removeDatepickerListeners() {
    c.off(this.nextButton, "click"), c.off(this.previousButton, "click"), c.off(this.viewChangeButton, "click"), c.off(this.okButton, "click"), c.off(this.cancelButton, "click"), c.off(this.clearButton, "click"), c.off(this.datesContainer, "click"), c.off(this.datesContainer, "keydown"), c.off(this.datesContainer, "focus"), c.off(this.datesContainer, "blur"), c.off(document, hs);
  }
  dispose() {
    this._isOpen && this.close(), this._removeInputAndToggleListeners();
    const t = d.findOne(
      `#${this._toggleButtonId}`
    );
    t && this._element.removeChild(t), y.removeData(this._element, zs), this._element = null, this._input = null, this._options = null, this._activeDate = null, this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = null, this._popper = null, this._focusTrap = null;
  }
  _removeInputAndToggleListeners() {
    c.off(this._input, "input"), c.off(
      this._element,
      hs,
      ds
    ), c.off(this._element, "keydown", ds);
  }
  handleOk() {
    this._confirmSelection(this._headerDate), this.close();
  }
  _selectDate(t, e = this.activeCell) {
    const { min: i, max: n, filter: o, disablePast: r, disableFuture: a } = this._options;
    nn(t, i, n, o, r, a) || (this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._selectedDate = t, this._selectedYear = B(t), this._selectedMonth = Y(t), this._headerDate = t, (this._options.inline || this.options.confirmDateOnSelect) && (this._confirmSelection(t), this.close()));
  }
  _selectYear(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerYear = t, this._asyncChangeView("months");
  }
  _selectMonth(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerMonth = t, this._asyncChangeView("days");
  }
  _removeSelectedStyles(t) {
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _addSelectedStyles(t) {
    t && t.setAttribute("data-te-datepicker-cell-selected", "");
  }
  _confirmSelection(t) {
    if (t) {
      const e = this.formatDate(t);
      this._input.value = e, c.trigger(this._element, Hf, { date: t }), c.trigger(this._input, "input");
    }
  }
  handleCancel() {
    this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this.close();
  }
  handleClear() {
    this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null, this._removeCurrentSelectionStyles(), this._input.value = "", this._setInitialDate(), this._changeView("days"), this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _removeCurrentSelectionStyles() {
    const t = d.findOne(
      "[data-te-datepicker-cell-selected]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _removeCurrentFocusStyles() {
    const t = d.findOne(
      "[data-te-datepicker-cell-focused]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  formatDate(t) {
    const e = Z(t), i = this._addLeadingZero(Z(t)), n = this._options.weekdaysShort[Vs(t)], o = this._options.weekdaysFull[Vs(t)], r = Y(t) + 1, a = this._addLeadingZero(Y(t) + 1), l = this._options.monthsShort[Y(t)], p = this._options.monthsFull[Y(t)], u = B(t).toString().length === 2 ? B(t) : B(t).toString().slice(2, 4), _ = B(t), f = this._options.format.split(
      /(d{1,4}|m{1,4}|y{4}|yy|!.)/g
    );
    let g = "";
    return f.forEach((m) => {
      switch (m) {
        case "dddd":
          m = m.replace(m, o);
          break;
        case "ddd":
          m = m.replace(m, n);
          break;
        case "dd":
          m = m.replace(m, i);
          break;
        case "d":
          m = m.replace(m, e);
          break;
        case "mmmm":
          m = m.replace(m, p);
          break;
        case "mmm":
          m = m.replace(m, l);
          break;
        case "mm":
          m = m.replace(m, a);
          break;
        case "m":
          m = m.replace(m, r);
          break;
        case "yyyy":
          m = m.replace(m, _);
          break;
        case "yy":
          m = m.replace(m, u);
          break;
      }
      g += m;
    }), g;
  }
  _addLeadingZero(t) {
    return parseInt(t, 10) < 10 ? `0${t}` : t;
  }
  _pickDay(t, e) {
    const i = Oa(t), { min: n, max: o, filter: r, disablePast: a, disableFuture: l } = this._options;
    nn(i, n, o, r, a, l) || (this._activeDate = i, this._selectDate(i, e));
  }
  _pickYear(t) {
    const { min: e, max: i, disablePast: n, disableFuture: o } = this._options;
    if (Bo(t, e, i, n, o))
      return;
    const r = Et(t, this.activeMonth, this.activeDay);
    this._activeDate = r, this._selectedDate = r, this._selectYear(t);
  }
  _pickMonth(t, e) {
    const { min: i, max: n, disablePast: o, disableFuture: r } = this._options;
    if (zc(t, e, i, n, o, r) || Bo(e, i, n, o, r))
      return;
    const a = Et(e, t, this.activeDay);
    this._activeDate = a, this._selectMonth(t);
  }
  nextMonth() {
    const t = nt(this._activeDate, 1), e = Fs(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this._activeDate = t, this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += $t(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousMonth() {
    const t = nt(this._activeDate, -1);
    this._activeDate = t;
    const e = Fs(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += $t(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  nextYear() {
    const t = it(this._activeDate, 1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += $t(
      this._options,
      this._classes
    );
    const e = Ys(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      cs,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  previousYear() {
    const t = it(this._activeDate, -1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += $t(
      this._options,
      this._classes
    );
    const e = Ys(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      cs,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  nextYears() {
    const t = it(this._activeDate, 24);
    this._activeDate = t;
    const e = js(
      t,
      this._selectedYear,
      this._options,
      vt,
      ls,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += $t(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousYears() {
    const t = it(this._activeDate, -24);
    this._activeDate = t;
    const e = js(
      t,
      this._selectedYear,
      this._options,
      vt,
      ls,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += $t(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  _asyncChangeView(t) {
    setTimeout(() => {
      this._changeView(t);
    }, 0);
  }
  _changeView(t) {
    this._view = t, this.datesContainer.blur(), t === "days" && (this.datesContainer.innerHTML = Fs(
      this._activeDate,
      this._headerDate,
      this._options,
      this._classes
    )), t === "months" && (this.datesContainer.innerHTML = Ys(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      cs,
      this._classes
    )), t === "years" && (this.datesContainer.innerHTML = js(
      this._activeDate,
      this._selectedYear,
      this._options,
      vt,
      ls,
      this._classes
    )), this.datesContainer.focus(), this._updateViewControlsAndAttributes(t), this._updateControlsDisabledState();
  }
  _updateViewControlsAndAttributes(t) {
    t === "days" && (this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += $t(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMultiYearViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMonthLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextMonthLabel)), t === "months" && (this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += $t(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToDayViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevYearLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextYearLabel)), t === "years" && (this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += $t(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMonthViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMultiYearLabel
    ), this.nextButton.setAttribute(
      "aria-label",
      this._options.nextMultiYearLabel
    ));
  }
  _updateControlsDisabledState() {
    _f(
      this._options.disableFuture,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.nextButton.disabled = true : this.nextButton.disabled = false, ff(
      this._options.disablePast,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.previousButton.disabled = true : this.previousButton.disabled = false;
  }
  _handleUserInput(t) {
    const e = this._getDelimeters(this._options.format), i = this._parseDate(t, this._options.format, e);
    df(i) ? (this._activeDate = i, this._selectedDate = i, this._selectedYear = B(i), this._selectedMonth = Y(i), this._headerDate = i) : (this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null);
  }
  _getDelimeters(t) {
    return t.match(/[^(dmy)]{1,}/g);
  }
  _parseDate(t, e, i) {
    let n;
    i[0] !== i[1] ? n = i[0] + i[1] : n = i[0];
    const o = new RegExp(`[${n}]`), r = t.split(o), a = e.split(o), l = e.indexOf("mmm") !== -1, p = [];
    for (let b = 0; b < a.length; b++)
      a[b].indexOf("yy") !== -1 && (p[0] = { value: r[b], format: a[b] }), a[b].indexOf("m") !== -1 && (p[1] = { value: r[b], format: a[b] }), a[b].indexOf("d") !== -1 && a[b].length <= 2 && (p[2] = { value: r[b], format: a[b] });
    let u;
    e.indexOf("mmmm") !== -1 ? u = this._options.monthsFull : u = this._options.monthsShort;
    const _ = Number(p[0].value), f = l ? this.getMonthNumberByMonthName(p[1].value, u) : Number(p[1].value) - 1, g = Number(p[2].value);
    return Et(_, f, g);
  }
  getMonthNumberByMonthName(t, e) {
    return e.findIndex((i) => i === t);
  }
  static getInstance(t) {
    return y.getData(t, zs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Mm = ({
  format24: s,
  okLabel: t,
  cancelLabel: e,
  headID: i,
  footerID: n,
  bodyID: o,
  pickerID: r,
  clearLabel: a,
  inline: l,
  showClearBtn: p,
  amLabel: u,
  pmLabel: _
}, f) => {
  const g = `<div id='${r}' class='${f.timepickerWrapper}' data-te-timepicker-wrapper>
      <div class="${f.timepickerContainer}">
        <div class="${f.timepickerElements}" data-te-timepicker-elements-wrapper>
        <div id='${i}' class='${f.timepickerHead}' style='padding-right:${s ? 50 : 10}px'>
        <div class='${f.timepickerHeadContent}'>
            <div class="${f.timepickerCurrentWrapper}">
              <span class="${f.timepickerCurrentButtonWrapper}">
                <button type='button' class='${f.timepickerCurrentButton}' tabindex="0" data-te-timepicker-active data-te-timepicker-current data-te-timepicker-hour data-te-ripple-init>21</button>
              </span>
              <button type='button' class='${f.timepickerDot}' disabled>:</button>
            <span class="${f.timepickerCurrentButtonWrapper}">
              <button type='button' class='${f.timepickerCurrentButton}' tabindex="0" data-te-timepicker-current data-te-timepicker-minute data-te-ripple-init>21</button>
            </span>
            </div>
            ${s ? "" : `<div class="${f.timepickerModeWrapper}">
                  <button type='button' class="${f.timepickerModeAm}" tabindex="0" data-te-timepicker-am data-te-timepicker-hour-mode data-te-ripple-init>${u}</button>
                  <button class="${f.timepickerModePm}" tabindex="0" data-te-timepicker-pm data-te-timepicker-hour-mode data-te-ripple-init>${_}</button>
                </div>`}
        </div>
      </div>
      ${l ? "" : `<div id='${o}' class='${f.timepickerClockWrapper}' data-te-timepicker-clock-wrapper>
            <div class='${f.timepickerClock}' data-te-timepicker-clock>
              <span class='${f.timepickerMiddleDot}' data-te-timepicker-middle-dot></span>
              <div class='${f.timepickerHandPointer}' data-te-timepicker-hand-pointer>
                <div class='${f.timepickerPointerCircle}' data-te-timepicker-circle></div>
              </div>
              ${s ? '<div class="' + f.timepickerClockInner + '" data-te-timepicker-clock-inner></div>' : ""}
            </div>
          </div>`}
    </div>
    <div id='${n}' class='${f.timepickerFooterWrapper}'>
      <div class="${f.timepickerFooter}">
        ${p ? `<button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-clear tabindex="0" data-te-ripple-init>${a}</button>` : ""}
        <button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-cancel tabindex="0" data-te-ripple-init>${e}</button>
        <button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
      </div>
    </div>
  </div>
</div>`, m = `<div id='${r}' class='${f.timepickerInlineWrapper}' data-te-timepicker-wrapper>
        <div class="${f.timepickerInlineContainer}">
          <div class="${f.timepickerInlineElements}" data-te-timepicker-elements-wrapper>
          <div id='${i}' class='${f.timepickerInlineHead}'
          style='padding-right:10px'>
          <div class='${f.timepickerInlineHeadContent}'>
              <div class="${f.timepickerCurrentWrapper}">
                <span class="${f.timepickerInlineHourWrapper}" data-te-timepicker-inline-hour-icons>
                  <span class="${f.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-hour>
                    <span class="${f.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>   
                    </span>
                  </span>
                  <button type='button' class='${f.timepickerInlineCurrentButton}' data-te-timepicker-hour data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                  <span class="${f.timepickerInlineIconDown}" data-te-timepicker-icon-inline-hour data-te-timepicker-icon-down>
                    <span class="${f.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>  
                    </span>
                  </span>
                </span>
                <button type='button' class='${f.timepickerInlineDot}' data-te-timepicker-current-inline disabled>:</button>
              <span class="${f.timepickerCurrentMinuteWrapper}">
                <span class="${f.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-minute>
                  <span class="${f.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </span>
                </span>
                <button type='button' class='${f.timepickerInlineCurrentButton}' data-te-timepicker-minute data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                <span class="${f.timepickerInlineIconDown}" data-te-timepicker-icon-inline-minute data-te-timepicker-icon-down>
                  <span class="${f.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> 
                  </span>
                </span>
              </span>
              </div>
              ${s ? "" : `<div class="${f.timepickerInlineModeWrapper}">
                      <button type='button' class="${f.timepickerInlineModeAm}" data-te-timepicker-am data-te-timepicker-hour-mode tabindex="0" data-te-ripple-init>${u}</button>
                      <button class="${f.timepickerInlineModePm}" data-te-timepicker-hour-mode data-te-timepicker-pm tabindex="0" data-te-ripple-init>${_}</button>
                      <button type='button' class='${f.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
                    </div>`}
              ${s ? `<button class='${f.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>` : ""}
          </div>
        </div>
      </div>
    </div>
</div>`;
  return l ? m : g;
};
var Rm = (s, t, e) => {
  const { iconSVG: i } = s;
  return `
  <button id="${t}" tabindex="0" type="button" class="${e.timepickerToggleButton}" data-te-toggle="timepicker" data-te-timepicker-toggle-button data-te-timepicker-icon>
    ${i}
  </button>
`;
};
var un = "data-te-timepicker-disabled";
var us = "data-te-timepicker-active";
var ve = (s) => {
  if (s === "")
    return;
  let t, e, i, n;
  return Gc(s) ? (t = s.getHours(), n = t, e = s.getMinutes(), t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM"), e = e < 10 ? `0${e}` : e) : ([t, e, i] = R(s, false), n = t, t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM")), {
    hours: t,
    minutes: e,
    amOrPm: i
  };
};
var Gc = (s) => s && Object.prototype.toString.call(s) === "[object Date]" && !Number.isNaN(s);
var La = (s) => {
  if (s === "")
    return;
  let t, e;
  return Gc(s) ? (t = s.getHours(), e = s.getMinutes()) : [t, e] = R(s, false), e = Number(e) < 10 ? `0${Number(e)}` : e, {
    hours: t,
    minutes: e
  };
};
var Pm = (s, t, e) => c.on(document, s, t, ({ target: i }) => {
  if (i.hasAttribute(us))
    return;
  document.querySelectorAll(t).forEach((o) => {
    o.hasAttribute(us) && (h.removeClass(o, e.opacity), o.removeAttribute(us));
  }), h.addClass(i, e.opacity), i.setAttribute(us, "");
});
var Na = ({ clientX: s, clientY: t, touches: e }, i, n = false) => {
  const { left: o, top: r } = i.getBoundingClientRect();
  let a = {};
  return !n || !e ? a = {
    x: s - o,
    y: t - r
  } : n && Object.keys(e).length > 0 && (a = {
    x: e[0].clientX - o,
    y: e[0].clientY - r
  }), a;
};
var ps = () => navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);
var R = (s, t = true) => t ? s.value.replace(/:/gi, " ").split(" ") : s.replace(/:/gi, " ").split(" ");
var qc = (s, t) => {
  const [e, i, n] = R(s, false), [o, r, a] = R(t, false);
  return n === "PM" && a === "AM" || n === a && e > o || i > r;
};
var Zc = () => {
  const s = /* @__PURE__ */ new Date(), t = s.getHours(), e = s.getMinutes();
  return `${t}:${e < 10 ? `0${e}` : e}`;
};
var Xt = (s, t, e) => {
  if (!t)
    return s;
  let i = Zc();
  return e && (i = `${ve(i).hours}:${ve(i).minutes} ${ve(i).amOrPm}`), (s !== "" && qc(i, s) || s === "") && (s = i), s;
};
var Gt = (s, t, e) => {
  if (!t)
    return s;
  let i = Zc();
  return e && (i = `${ve(i).hours}:${ve(i).minutes} ${ve(i).amOrPm}`), (s !== "" && !qc(i, s) || s === "") && (s = i), s;
};
var Bm = ({ format12: s, maxTime: t, minTime: e, disablePast: i, disableFuture: n }, o, r) => {
  const a = R(o)[1];
  e = Xt(e, i, s), t = Gt(t, n, s);
  const [l, p, u] = R(t, false), [_, f, g] = R(e, false);
  if (u !== void 0 || g !== void 0)
    return [r, a];
  if (!(l !== "" && _ === "" && Number(r) > Number(l)) && !(l === "" && _ !== "" && p === void 0 && f !== "" && Number(r) < Number(_)))
    return [r, a];
};
var Ma = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, (n.textContent === "00" || Number(n.textContent === "12" && i ? "0" : n.textContent) > t) && (h.addClass(n, e.tipsDisabled), n.setAttribute(un, ""));
  });
};
var Ra = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, n.textContent !== "00" && Number(n.textContent === "12" && i ? "0" : n.textContent) < Number(t) && (h.addClass(n, e.tipsDisabled), n.setAttribute(un, ""));
  });
};
var Qc = (s, t, e, i) => {
  if (t === "12" || t === "24")
    return;
  const n = e ? 12 : 24;
  return i === "max" ? (Number(s) === n ? 0 : Number(s)) > Number(t) : (Number(s) === n ? 0 : Number(s)) < Number(t);
};
var Hm = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (Qc(i, e, o, "max") || Number(r.textContent) > t && Number(i) === Number(e)) && (h.addClass(r, n.tipsDisabled), r.setAttribute(un, ""));
  });
};
var Vm = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (Qc(i, e, o, "min") || Number(r.textContent) < t && Number(i) === Number(e)) && (h.addClass(r, n.tipsDisabled), r.setAttribute(un, ""));
  });
};
var Wm = (s) => s.startsWith("0") ? Number(s.slice(1)) : Number(s);
var $i = "timepicker";
var M = `data-te-${$i}`;
var Pa = "[data-te-toggle]";
var Us = `te.${$i}`;
var Rt = `.${Us}`;
var Pt = ".data-api";
var Ba = `click${Rt}${Pt}`;
var _s = `keydown${Rt}${Pt}`;
var Ha = `mousedown${Rt}${Pt}`;
var Va = `mouseup${Rt}${Pt}`;
var Wa = `mousemove${Rt}${Pt}`;
var Fa = `mouseleave${Rt}${Pt}`;
var Ya = `mouseover${Rt}${Pt}`;
var ja = `touchmove${Rt}${Pt}`;
var Ka = `touchend${Rt}${Pt}`;
var za = `touchstart${Rt}${Pt}`;
var Fm = `[${M}-am]`;
var Ym = `[${M}-pm]`;
var jm = `[${M}-format24]`;
var fs = `[${M}-current]`;
var ms = `[${M}-hour-mode]`;
var Km = `[${M}-toggle-button]`;
var Gn = `${M}-cancel`;
var Ua = `${M}-clear`;
var qn = `${M}-submit`;
var zm = `${M}-icon`;
var Zn = `${M}-icon-up`;
var Qn = `${M}-icon-down`;
var Um = `${M}-icon-inline-hour`;
var Xm = `${M}-icon-inline-minute`;
var Xa = `${M}-inline-hour-icons`;
var Gm = `${M}-current-inline`;
var qm = "readonly";
var Zm = `${M}-invalid-feedback`;
var Jn = `${M}-is-invalid`;
var Yt = `${M}-disabled`;
var H = `${M}-active`;
var Qm = `${M}-input`;
var pe = `${M}-clock`;
var di = `${M}-clock-inner`;
var to = `${M}-wrapper`;
var Ga = `${M}-clock-wrapper`;
var gs = `${M}-hour`;
var eo = `${M}-minute`;
var bs = `${M}-tips-element`;
var K = `${M}-tips-hours`;
var X = `${M}-tips-minutes`;
var lt = `${M}-tips-inner`;
var vs = `${M}-tips-inner-element`;
var qa = `${M}-middle-dot`;
var io = `${M}-hand-pointer`;
var so = `${M}-circle`;
var Za = `${M}-modal`;
var Jm = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`;
var tg = {
  appendValidationInfo: true,
  bodyID: "",
  cancelLabel: "Cancel",
  clearLabel: "Clear",
  closeModalOnBackdropClick: true,
  closeModalOnMinutesClick: false,
  container: "body",
  defaultTime: "",
  disabled: false,
  disablePast: false,
  disableFuture: false,
  enableValidation: true,
  focusInputAfterApprove: false,
  footerID: "",
  format12: true,
  format24: false,
  headID: "",
  increment: false,
  inline: false,
  invalidLabel: "Invalid Time Format",
  maxTime: "",
  minTime: "",
  modalID: "",
  okLabel: "Ok",
  overflowHidden: true,
  pickerID: "",
  readOnly: false,
  showClearBtn: true,
  switchHoursToMinutesOnClick: true,
  iconSVG: Jm,
  withIcon: true,
  pmLabel: "PM",
  amLabel: "AM",
  animations: true
};
var eg = {
  appendValidationInfo: "boolean",
  bodyID: "string",
  cancelLabel: "string",
  clearLabel: "string",
  closeModalOnBackdropClick: "boolean",
  closeModalOnMinutesClick: "boolean",
  container: "string",
  disabled: "boolean",
  disablePast: "boolean",
  disableFuture: "boolean",
  enableValidation: "boolean",
  footerID: "string",
  format12: "boolean",
  format24: "boolean",
  headID: "string",
  increment: "boolean",
  inline: "boolean",
  invalidLabel: "string",
  modalID: "string",
  okLabel: "string",
  overflowHidden: "boolean",
  pickerID: "string",
  readOnly: "boolean",
  showClearBtn: "boolean",
  switchHoursToMinutesOnClick: "boolean",
  defaultTime: "(string|date|number)",
  iconSVG: "string",
  withIcon: "boolean",
  pmLabel: "string",
  amLabel: "string",
  animations: "boolean"
};
var ig = {
  tips: "absolute rounded-[100%] w-[32px] h-[32px] text-center cursor-pointer text-[1.1rem] rounded-[100%] bg-transparent flex justify-center items-center font-light focus:outline-none selection:bg-transparent",
  tipsActive: "text-white bg-[#3b71ca] font-normal",
  tipsDisabled: "text-[#b3afaf] pointer-events-none bg-transparent",
  transform: "transition-[transform,height] ease-in-out duration-[400ms]",
  modal: "z-[1065]",
  clockAnimation: "animate-[show-up-clock_350ms_linear]",
  opacity: "!opacity-100",
  timepickerWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col fixed",
  timepickerContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] min-[320px]:max-[825px]:landscape:rounded-lg",
  timepickerElements: "flex flex-col min-w-[310px] min-h-[325px] bg-white rounded-t-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape:min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg pr-[24px] pl-[50px] py-[10px] min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center",
  timepickerHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly",
  timepickerCurrentWrapper: "[direction:ltr] rtl:[direction:rtl]",
  timepickerCurrentButtonWrapper: "relative h-full",
  timepickerCurrentButton: "text-[3.75rem] font-light leading-[1.2] tracking-[-0.00833em] text-white opacity-[.54] border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none ",
  timepickerDot: "font-light leading-[1.2] tracking-[-0.00833em] text-[3.75rem] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal",
  timepickerModeWrapper: "flex flex-col justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerModeAm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerModePm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerClockWrapper: "min-w-[310px] max-w-[325px] min-h-[305px] overflow-x-hidden h-full flex justify-center flex-col items-center dark:bg-zinc-500",
  timepickerClock: "relative rounded-[100%] w-[260px] h-[260px] cursor-default my-0 mx-auto bg-[#00000012] dark:bg-zinc-600/50",
  timepickerMiddleDot: "top-1/2 left-1/2 w-[6px] h-[6px] -translate-y-1/2 -translate-x-1/2 rounded-[50%] bg-[#3b71ca] absolute",
  timepickerHandPointer: "bg-[#3b71ca] bottom-1/2 h-2/5 left-[calc(50%-1px)] rtl:!left-auto origin-[center_bottom_0] rtl:!origin-[50%_50%_0] w-[2px] absolute",
  timepickerPointerCircle: "-top-[21px] -left-[15px] w-[4px] border-[14px] border-solid border-[#3b71ca] h-[4px] box-content rounded-[100%] absolute",
  timepickerClockInner: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-[100%]",
  timepickerFooterWrapper: "rounded-b-lg flex justify-between items-center w-full h-[56px] px-[12px] bg-white dark:bg-zinc-500",
  timepickerFooter: "w-full flex justify-between",
  timepickerFooterButton: "text-[0.8rem] min-w-[64px] box-border font-medium leading-[40px] rounded-[10px] tracking-[0.1rem] uppercase text-[#3b71ca] dark:text-white border-none bg-transparent transition-[background-color,box-shadow,border] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0ms] outline-none py-0 px-[10px] h-[40px] mb-[10px] hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none",
  timepickerInlineWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col rounded-lg",
  timepickerInlineContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
  timepickerInlineElements: "flex flex-col min-h-[auto] min-w-[310px] bg-white rounded-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:rounded-bl-lg min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape::min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerInlineHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center p-0 rounded-b-lg",
  timepickerInlineHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly items-center",
  timepickerInlineHourWrapper: "relative h-full !opacity-100",
  timepickerCurrentMinuteWrapper: "relative h-full",
  timepickerInlineIconUp: "absolute text-white -top-[35px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineIconSvg: "h-4 w-4",
  timepickerInlineCurrentButton: "font-light leading-[1.2] tracking-[-0.00833em] text-white border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal !opacity-100 cursor-pointer focus:bg-[#00000026] hover:outline-none focus:outline-none text-[2.5rem] hover:bg-[unset]",
  timepickerInlineIconDown: "absolute text-white -bottom-[47px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineDot: "font-light leading-[1.2] tracking-[-0.00833em] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal text-[2.5rem]",
  timepickerInlineModeWrapper: "flex justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerInlineModeAm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer mr-2 ml-6",
  timepickerInlineModePm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer",
  timepickerInlineSubmitButton: "hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none text-[0.8rem] box-border font-medium leading-[40px] tracking-[.1rem] uppercase border-none bg-transparent [transition:background-color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,box-shadow_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,border_250ms_cubic-bezier(0.4,0,0.2,1)_0ms] outline-none rounded-[100%] h-[48px] min-w-[48px] inline-block ml-[30px] text-white py-1 px-2 mb-0",
  timepickerToggleButton: "h-4 w-4 ml-auto absolute outline-none border-none bg-transparent right-1.5 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer hover:text-[#3b71ca] focus:text-[#3b71ca] dark:hover:text-[#3b71ca] dark:focus:text-[#3b71ca] dark:text-white"
};
var sg = {
  tips: "string",
  tipsActive: "string",
  tipsDisabled: "string",
  transform: "string",
  modal: "string",
  clockAnimation: "string",
  opacity: "string",
  timepickerWrapper: "string",
  timepickerContainer: "string",
  timepickerElements: "string",
  timepickerHead: "string",
  timepickerHeadContent: "string",
  timepickerCurrentWrapper: "string",
  timepickerCurrentButtonWrapper: "string",
  timepickerCurrentButton: "string",
  timepickerDot: "string",
  timepickerModeWrapper: "string",
  timepickerModeAm: "string",
  timepickerModePm: "string",
  timepickerClockWrapper: "string",
  timepickerClock: "string",
  timepickerMiddleDot: "string",
  timepickerHandPointer: "string",
  timepickerPointerCircle: "string",
  timepickerClockInner: "string",
  timepickerFooterWrapper: "string",
  timepickerFooterButton: "string",
  timepickerInlineWrapper: "string",
  timepickerInlineContainer: "string",
  timepickerInlineElements: "string",
  timepickerInlineHead: "string",
  timepickerInlineHeadContent: "string",
  timepickerInlineHourWrapper: "string",
  timepickerCurrentMinuteWrapper: "string",
  timepickerInlineIconUp: "string",
  timepickerInlineIconSvg: "string",
  timepickerInlineCurrentButton: "string",
  timepickerInlineIconDown: "string",
  timepickerInlineDot: "string",
  timepickerInlineModeWrapper: "string",
  timepickerInlineModeAm: "string",
  timepickerInlineModePm: "string",
  timepickerInlineSubmitButton: "string",
  timepickerToggleButton: "string"
};
var ng = class {
  constructor(t, e = {}, i) {
    yt(this, "_toggleAmPm", (t2) => {
      t2 === "PM" ? (this._isPmEnabled = true, this._isAmEnabled = false) : t2 === "AM" && (this._isPmEnabled = false, this._isAmEnabled = true);
    });
    yt(this, "_toggleBackgroundColorCircle", (t2) => {
      if (this._modal.querySelector(`${t2}[${H}]`) !== null) {
        h.addStyle(this._circle, {
          backgroundColor: "#1976d2"
        });
        return;
      }
      h.addStyle(this._circle, {
        backgroundColor: "transparent"
      });
    });
    yt(this, "_toggleClassActive", (t2, { textContent: e2 }, i2) => {
      const n = [...t2].find(
        (o) => Number(o) === Number(e2)
      );
      return i2.forEach((o) => {
        if (!o.hasAttribute(Yt)) {
          if (o.textContent === n) {
            h.addClass(o, this._classes.tipsActive), o.setAttribute(H, "");
            return;
          }
          h.removeClass(o, this._classes.tipsActive), o.removeAttribute(H);
        }
      });
    });
    yt(this, "_makeMinutesDegrees", (t2, e2) => {
      const { increment: i2 } = this._options;
      return t2 < 0 ? (e2 = Math.round(360 + t2 / 6) % 60, t2 = 360 + Math.round(t2 / 6) * 6) : (e2 = Math.round(t2 / 6) % 60, t2 = Math.round(t2 / 6) * 6), i2 && (t2 = Math.round(t2 / 30) * 30, e2 = Math.round(t2 / 6) * 6 / 6, e2 === 60 && (e2 = "00")), t2 >= 360 && (t2 = 0), {
        degrees: t2,
        minute: e2,
        addDegrees: i2 ? 30 : 6
      };
    });
    yt(this, "_makeHourDegrees", (t2, e2, i2) => {
      if (t2)
        return this._hasTargetInnerClass(t2) ? e2 < 0 ? (i2 = Math.round(360 + e2 / 30) % 24, e2 = 360 + e2) : (i2 = Math.round(e2 / 30) + 12, i2 === 12 && (i2 = "00")) : e2 < 0 ? (i2 = Math.round(360 + e2 / 30) % 12, e2 = 360 + e2) : (i2 = Math.round(e2 / 30) % 12, (i2 === 0 || i2 > 12) && (i2 = 12)), e2 >= 360 && (e2 = 0), {
          degrees: e2,
          hour: i2,
          addDegrees: 30
        };
    });
    yt(this, "_makeInnerHoursDegrees", (t2, e2) => (t2 < 0 ? (e2 = Math.round(360 + t2 / 30) % 24, t2 = 360 + t2) : (e2 = Math.round(t2 / 30) + 12, e2 === 12 && (e2 = "00")), {
      degrees: t2,
      hour: e2,
      addDegrees: 30
    }));
    yt(this, "_getAppendClock", (t2 = [], e2 = `[${pe}]`, i2) => {
      let { minTime: n, maxTime: o } = this._options;
      const { inline: r, format12: a, disablePast: l, disableFuture: p } = this._options;
      n = Xt(n, l, a), o = Gt(o, p, a);
      const [u, _, f] = R(
        o,
        false
      ), [g, m, b] = R(
        n,
        false
      );
      !r && a && this._isInvalidTimeFormat && !this._AM.hasAttribute(H) && (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, ""));
      const v = d.findOne(e2), C = 360 / t2.length;
      function w(k) {
        return k * (Math.PI / 180);
      }
      if (v === null)
        return;
      const E = (v.offsetWidth - 32) / 2, T = (v.offsetHeight - 32) / 2, A = E - 4;
      setTimeout(() => {
        let k;
        a && (k = d.findOne(
          `${ms}[${H}]`
        ).textContent), this._handleDisablingTipsMinTime(
          k,
          b,
          m,
          g
        ), this._handleDisablingTipsMaxTime(
          k,
          f,
          _,
          u
        );
      }, 0), [...t2].forEach((k, I) => {
        const O = w(I * C), x = $("span"), L = $("span");
        L.innerHTML = k, h.addClass(x, this._classes.tips), x.setAttribute(i2, "");
        const S = x.offsetWidth, N = x.offsetHeight;
        return h.addStyle(x, {
          left: `${E + Math.sin(O) * A - S}px`,
          bottom: `${T + Math.cos(O) * A - N}px`
        }), t2.includes("05") && x.setAttribute(X, ""), t2.includes("13") ? L.setAttribute(vs, "") : L.setAttribute(bs, ""), x.appendChild(L), v.appendChild(x);
      });
    });
    this._element = t, this._element && y.setData(t, Us, this), this._document = document, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._currentTime = null, this._toggleButtonId = rt("timepicker-toggle-"), this.hoursArray = [
      "12",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ], this.innerHours = [
      "00",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ], this.minutesArray = [
      "00",
      "05",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55"
    ], this.input = d.findOne("input", this._element), this.dataWithIcon = t.dataset.withIcon, this.dataToggle = t.dataset.toggle, this.customIcon = d.findOne(
      Km,
      this._element
    ), this._checkToggleButton(), this.inputFormatShow = d.findOne(
      jm,
      this._element
    ), this.inputFormat = this.inputFormatShow === null ? "" : Object.values(this.inputFormatShow.dataset)[0], this.elementToggle = d.findOne(
      Pa,
      this._element
    ), this.toggleElement = Object.values(
      t.querySelector(Pa).dataset
    )[0], this._hour = null, this._minutes = null, this._AM = null, this._PM = null, this._wrapper = null, this._modal = null, this._hand = null, this._circle = null, this._focusTrap = null, this._popper = null, this._interval = null, this._timeoutInterval = null, this._inputValue = this._options.defaultTime !== "" ? this._options.defaultTime : this.input.value, this._options.format24 && (this._options.format12 = false, this._currentTime = La(this._inputValue)), this._options.format12 && (this._options.format24 = false, this._currentTime = ve(this._inputValue)), this._options.readOnly && this.input.setAttribute(qm, true), this.inputFormat === "true" && this.inputFormat !== "" && (this._options.format12 = false, this._options.format24 = true, this._currentTime = La(this._inputValue)), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this.init(), this._isHours = true, this._isMinutes = false, this._isInvalidTimeFormat = false, this._isMouseMove = false, this._isInner = false, this._isAmEnabled = false, this._isPmEnabled = false, this._options.format12 && !this._options.defaultTime && (this._isPmEnabled = true), this._objWithDataOnChange = { degrees: null }, this._scrollBar = new qe();
  }
  // Getters
  static get NAME() {
    return $i;
  }
  // Public
  init() {
    const { format12: t, format24: e, enableValidation: i } = this._options;
    let n, o, r;
    if (this.input.setAttribute(Qm, ""), this._currentTime !== void 0) {
      const { hours: a, minutes: l, amOrPm: p } = this._currentTime;
      n = Number(a) < 10 ? 0 : "", o = `${n}${Number(a)}:${l}`, r = p, t ? this.input.value = `${o} ${r}` : e && (this.input.value = `${o}`);
    } else
      n = "", o = "", r = "", this.input.value = "";
    this.input.value.length > 0 && this.input.value !== "" && (this.input.setAttribute(H, ""), c.trigger(this.input, "input")), !(this._options === null && this._element === null) && (i && this._getValidate("keydown change blur focus"), this._handleOpen(), this._listenToToggleKeydown());
  }
  dispose() {
    this._removeModal(), this._element !== null && y.removeData(this._element, Us), setTimeout(() => {
      this._element = null, this._options = null, this.input = null, this._focusTrap = null;
    }, 350), c.off(
      this._document,
      "click",
      `[data-te-toggle='${this.toggleElement}']`
    ), c.off(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`
    );
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  // private
  _checkToggleButton() {
    this.customIcon === null && (this.dataWithIcon !== void 0 && (this._options.withIcon = null, this.dataWithIcon === "true" && this._appendToggleButton(this._options)), this._options.withIcon && this._appendToggleButton(this._options));
  }
  _appendToggleButton() {
    const t = Rm(
      this._options,
      this._toggleButtonId,
      this._classes
    );
    this.input.insertAdjacentHTML("afterend", t);
  }
  _getDomElements() {
    this._hour = d.findOne(`[${gs}]`), this._minutes = d.findOne(`[${eo}]`), this._AM = d.findOne(Fm), this._PM = d.findOne(Ym), this._wrapper = d.findOne(`[${to}]`), this._modal = d.findOne(`[${Za}]`), this._hand = d.findOne(`[${io}]`), this._circle = d.findOne(`[${so}]`), this._clock = d.findOne(`[${pe}]`), this._clockInner = d.findOne(
      `[${di}]`
    );
  }
  _handlerMaxMinHoursOptions(t, e, i, n, o, r) {
    if (!e && !i)
      return true;
    const { format24: a, format12: l, disablePast: p, disableFuture: u } = this._options, { _isAmEnabled: _, _isPmEnabled: f } = this, g = r.keyCode, m = r.target.hasAttribute(di) || r.target.hasAttribute(lt) || r.target.hasAttribute(vs);
    i = Xt(i, p, l), e = Gt(e, u, l), typeof e != "number" && (e = R(e, false)[0]);
    const b = e !== "" ? e * 30 : "", v = i !== "" ? i * 30 : "";
    t < 0 && (t = 360 + t), t = t === 360 ? 0 : t;
    const C = () => {
      const I = document.querySelectorAll(
        `[${bs}]`
      ), O = document.querySelectorAll(
        `[${vs}]`
      ), x = Wm(this._hour.innerText);
      let L, S, N;
      return g === at ? S = 1 : g === z && (S = -1), x === 12 && g === at ? N = 1 : x === 0 && g === at ? N = 13 : x === 0 && g === z ? N = 23 : x === 13 && g === z ? N = 0 : x === 1 && g === z ? N = 12 : N = x + S, I.forEach((P) => {
        Number(P.textContent) === N && (L = P);
      }), O.forEach((P) => {
        Number(P.textContent) === N && (L = P);
      }), !L.parentElement.hasAttribute(Yt);
    }, w = () => {
      const I = i !== "" && i > 12 ? (i - 12) * 30 : "", O = e !== "" && e > 12 ? (e - 12) * 30 : "";
      if (!(I && t < I || O && t > O || e && e < 12))
        return true;
    };
    if (a && r.type !== "keydown" && m)
      return w();
    if (r.type === "keydown")
      return C();
    const E = !o || o === "PM" && f || i !== "" && o === "AM" && _, T = !n || n === "PM" && f || e !== "" && n === "AM" && _, A = () => {
      const I = v === 360 && l ? 0 : v;
      if (i) {
        if (o === "PM" && _ || E && t < I)
          return;
      } else
        return true;
      return true;
    }, k = () => {
      const I = b === 360 && l ? 0 : b;
      if (e) {
        if (n === "AM" && f || T && t > I)
          return;
      } else
        return true;
      return true;
    };
    return A() && k();
  }
  _handleKeyboard() {
    c.on(this._document, _s, "", (t) => {
      let e, i, n;
      const {
        increment: o,
        maxTime: r,
        minTime: a,
        format12: l,
        disablePast: p,
        disableFuture: u
      } = this._options;
      let _ = R(a, false)[0], f = R(r, false)[0];
      const g = R(a, false)[2], m = R(r, false)[2];
      _ = Xt(_, p, l), f = Gt(f, u, l), typeof f != "number" && (f = R(f, false)[0]);
      const b = d.findOne(`[${X}]`) === null, v = d.findOne(`[${lt}]`) !== null, C = Number(this._hand.style.transform.replace(/[^\d-]/g, "")), w = d.find(
        `[${X}]`,
        this._modal
      ), E = d.find(
        `[${K}]`,
        this._modal
      ), T = d.find(
        `[${lt}]`,
        this._modal
      );
      let A = this._makeHourDegrees(t.target, C, e).hour;
      const { degrees: k, addDegrees: I } = this._makeHourDegrees(
        t.target,
        C,
        e
      );
      let { minute: O, degrees: x } = this._makeMinutesDegrees(C, i);
      const L = this._makeMinutesDegrees(
        C,
        i
      ).addDegrees;
      let { hour: S } = this._makeInnerHoursDegrees(
        C,
        n
      );
      if (t.keyCode === Fi) {
        const N = d.findOne(
          `[${Gn}]`,
          this._modal
        );
        c.trigger(N, "click");
      } else if (b) {
        if (v && (t.keyCode === Ve && (this._isInner = false, h.addStyle(this._hand, {
          height: "calc(40% + 1px)"
        }), this._hour.textContent = this._setHourOrMinute(
          A > 12 ? 1 : A
        ), this._toggleClassActive(this.hoursArray, this._hour, E), this._toggleClassActive(this.innerHours, this._hour, T)), t.keyCode === He && (this._isInner = true, h.addStyle(this._hand, {
          height: "21.5%"
        }), this._hour.textContent = this._setHourOrMinute(
          S >= 24 || S === "00" ? 0 : S
        ), this._toggleClassActive(this.innerHours, this._hour, T), this._toggleClassActive(
          this.hoursArray,
          this._hour - 1,
          E
        ))), t.keyCode === at) {
          if (!this._handlerMaxMinHoursOptions(
            k + 30,
            f,
            _,
            m,
            g,
            t
          ))
            return;
          h.addStyle(this._hand, {
            transform: `rotateZ(${k + I}deg)`
          }), this._isInner ? (S += 1, S === 24 ? S = 0 : (S === 25 || S === "001") && (S = 13), this._hour.textContent = this._setHourOrMinute(S), this._toggleClassActive(this.innerHours, this._hour, T)) : (A += 1, this._hour.textContent = this._setHourOrMinute(
            A > 12 ? 1 : A
          ), this._toggleClassActive(this.hoursArray, this._hour, E));
        }
        if (t.keyCode === z) {
          if (!this._handlerMaxMinHoursOptions(
            k - 30,
            f,
            _,
            m,
            g,
            t
          ))
            return;
          h.addStyle(this._hand, {
            transform: `rotateZ(${k - I}deg)`
          }), this._isInner ? (S -= 1, S === 12 ? S = 0 : S === -1 && (S = 23), this._hour.textContent = this._setHourOrMinute(S), this._toggleClassActive(this.innerHours, this._hour, T)) : (A -= 1, this._hour.textContent = this._setHourOrMinute(
            A === 0 ? 12 : A
          ), this._toggleClassActive(this.hoursArray, this._hour, E));
        }
      } else
        t.keyCode === at && (x += L, h.addStyle(this._hand, {
          transform: `rotateZ(${x}deg)`
        }), O += 1, o && (O += 4, O === "0014" && (O = 5)), this._minutes.textContent = this._setHourOrMinute(
          O > 59 ? 0 : O
        ), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          w
        ), this._toggleBackgroundColorCircle(
          `[${X}]`
        )), t.keyCode === z && (x -= L, h.addStyle(this._hand, {
          transform: `rotateZ(${x}deg)`
        }), o ? O -= 5 : O -= 1, O === -1 ? O = 59 : O === -5 && (O = 55), this._minutes.textContent = this._setHourOrMinute(O), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          w
        ), this._toggleBackgroundColorCircle(
          `[${X}]`
        ));
    });
  }
  _setActiveClassToTipsOnOpen(t, ...e) {
    if (!this._isInvalidTimeFormat)
      if (this._options.format24) {
        const i = d.find(
          `[${K}]`,
          this._modal
        ), n = d.find(
          `[${lt}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t), this._addActiveClassToTip(n, t);
      } else {
        [...e].filter((n) => (n === "PM" ? (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, "")) : n === "AM" ? (h.addClass(this._AM, this._classes.opacity), this._AM.setAttribute(H, "")) : (h.removeClass(this._AM, this._classes.opacity), h.removeClass(this._PM, this._classes.opacity), this._AM.removeAttribute(H), this._PM.removeAttribute(H)), n));
        const i = d.find(
          `[${K}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t);
      }
  }
  _setTipsAndTimesDependOnInputValue(t, e) {
    const { inline: i, format12: n } = this._options;
    if (this._isInvalidTimeFormat)
      this._hour.textContent = "12", this._minutes.textContent = "00", i || h.addStyle(this._hand, {
        transform: "rotateZ(0deg)"
      }), n && (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, ""));
    else {
      const o = t > 12 ? t * 30 - 360 : t * 30;
      this._hour.textContent = t, this._minutes.textContent = e, i || (h.addStyle(this._hand, {
        transform: `rotateZ(${o}deg)`
      }), h.addStyle(this._circle, {
        backgroundColor: "#1976d2"
      }), (Number(t) > 12 || t === "00") && h.addStyle(this._hand, {
        height: "21.5%"
      }));
    }
  }
  _listenToToggleKeydown() {
    c.on(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`,
      (t) => {
        t.keyCode === ct && (t.preventDefault(), c.trigger(this.elementToggle, "click"));
      }
    );
  }
  _handleOpen() {
    const t = this._getContainer();
    re.on(
      this._element,
      "click",
      `[data-te-toggle='${this.toggleElement}']`,
      (e) => {
        if (this._options === null)
          return;
        const i = h.getDataAttribute(this.input, "toggle") !== null ? 200 : 0;
        setTimeout(() => {
          h.addStyle(this.elementToggle, {
            pointerEvents: "none"
          }), this.elementToggle.blur();
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const { modalID: o, inline: r, format12: a } = this._options, [l, p, u] = n, _ = $("div");
          if ((Number(l) > 12 || l === "00") && (this._isInner = true), this.input.blur(), e.target.blur(), _.innerHTML = Mm(this._options, this._classes), h.addClass(_, this._classes.modal), _.setAttribute(Za, ""), _.setAttribute("role", "dialog"), _.setAttribute("tabIndex", "-1"), _.setAttribute("id", o), r ? (this._popper = Ce(this.input, _, {
            placement: "bottom-start"
          }), t.appendChild(_)) : (t.appendChild(_), this._scrollBar.hide()), this._getDomElements(), this._animations ? this._toggleBackdropAnimation() : h.addClass(this._wrapper, this._classes.opacity), this._setActiveClassToTipsOnOpen(l, p, u), this._appendTimes(), this._setActiveClassToTipsOnOpen(l, p, u), this._setTipsAndTimesDependOnInputValue(l, p), this.input.value === "") {
            const f = d.find(
              `[${K}]`,
              this._modal
            );
            a && (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, "")), this._hour.textContent = "12", this._minutes.textContent = "00", this._addActiveClassToTip(
              f,
              Number(this._hour.textContent)
            );
          }
          if (this._handleSwitchTimeMode(), this._handleOkButton(), this._handleClose(), r)
            this._handleHoverInlineBtn(), this._handleDocumentClickInline(), this._handleInlineClicks();
          else {
            this._handleSwitchHourMinute(), this._handleClockClick(), this._handleKeyboard();
            const f = document.querySelector(
              `${fs}[${H}]`
            );
            h.addClass(f, this._classes.opacity), h.addStyle(this._hour, {
              pointerEvents: "none"
            }), h.addStyle(this._minutes, {
              pointerEvents: ""
            });
          }
          this._focusTrap = new Wi(this._wrapper, {
            event: "keydown",
            condition: ({ key: f }) => f === "Tab"
          }), this._focusTrap.trap();
        }, i);
      }
    );
  }
  _handleInlineClicks() {
    let t, e;
    const i = (g) => {
      let m = g;
      return m > 59 ? m = 0 : m < 0 && (m = 59), m;
    }, n = (g) => {
      let m = g;
      return this._options.format24 ? (m > 24 ? m = 1 : m < 0 && (m = 23), m > 23 && (m = 0)) : (m > 12 ? m = 1 : m < 1 && (m = 12), m > 12 && (m = 1)), m;
    }, o = (g) => {
      const m = n(g);
      this._hour.textContent = this._setHourOrMinute(m);
    }, r = (g) => {
      const m = i(g);
      this._minutes.textContent = this._setHourOrMinute(m);
    }, a = () => {
      t = n(t) + 1, o(t);
    }, l = () => {
      e = i(e) + 1, r(e);
    }, p = () => {
      t = n(t) - 1, o(t);
    }, u = () => {
      e = i(e) - 1, r(e);
    }, _ = () => {
      clearInterval(this._interval), clearTimeout(this._timeoutInterval);
    }, f = (g) => {
      _(), this._timeoutInterval = setTimeout(() => {
        this._interval = setInterval(g, 100);
      }, 500);
    };
    re.on(
      this._modal,
      "click mousedown mouseup touchstart touchend contextmenu",
      `[${Zn}], [${Qn}]`,
      (g) => {
        t = Number(this._hour.textContent), e = Number(this._minutes.textContent);
        const { target: m, type: b } = g, v = b === "mousedown" || b === "touchstart";
        m.closest(`[${Zn}]`) ? m.closest(`[${Zn}]`).parentNode.hasAttribute(Xa) ? v ? f(a) : b === "mouseup" || b === "touchend" || b === "contextmenu" ? _() : a() : v ? f(l) : b === "mouseup" || b === "touchend" || b === "contextmenu" ? _() : l() : m.closest(`[${Qn}]`) && (m.closest(`[${Qn}]`).parentNode.hasAttribute(Xa) ? v ? f(p) : b === "mouseup" || b === "touchend" ? _() : p() : v ? f(u) : b === "mouseup" || b === "touchend" ? _() : u());
      }
    ), c.on(window, _s, (g) => {
      const m = g.code, b = document.activeElement.hasAttribute(gs), v = document.activeElement.hasAttribute(
        eo
      ), C = document.activeElement === document.body;
      switch (t = Number(this._hour.textContent), e = Number(this._minutes.textContent), m) {
        case "ArrowUp":
          g.preventDefault(), C || b ? (this._hour.focus(), a()) : v && l();
          break;
        case "ArrowDown":
          g.preventDefault(), C || b ? (this._hour.focus(), p()) : v && u();
          break;
      }
    });
  }
  _handleClose() {
    c.on(
      this._modal,
      "click",
      `[${to}], [${Gn}], [${Ua}]`,
      ({ target: t }) => {
        const { closeModalOnBackdropClick: e } = this._options, i = () => {
          var n;
          h.addStyle(this.elementToggle, {
            pointerEvents: "auto"
          }), this._animations && this._toggleBackdropAnimation(true), this._removeModal(), (n = this._focusTrap) == null || n.disable(), this._focusTrap = null, this.elementToggle ? this.elementToggle.focus() : this.input && this.input.focus();
        };
        if (t.hasAttribute(Ua)) {
          this._toggleAmPm("PM"), this.input.value = "", this.input.removeAttribute(H);
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const [o, r, a] = n;
          this._setTipsAndTimesDependOnInputValue("12", "00"), this._setActiveClassToTipsOnOpen(o, r, a), this._hour.click();
        } else
          (t.hasAttribute(Gn) || t.hasAttribute(qn) || t.hasAttribute(to) && e) && i();
      }
    );
  }
  showValueInput() {
    return this.input.value;
  }
  _handleOkButton() {
    re.on(
      this._modal,
      "click",
      `[${qn}]`,
      () => {
        let { maxTime: t, minTime: e } = this._options;
        const {
          format12: i,
          format24: n,
          readOnly: o,
          focusInputAfterApprove: r,
          disablePast: a,
          disableFuture: l
        } = this._options, p = this._document.querySelector(
          `${ms}[${H}]`
        ), u = `${this._hour.textContent}:${this._minutes.textContent}`, _ = Number(this._hour.textContent), f = _ === 12 && i ? 0 : _, g = Number(this._minutes.textContent);
        e = Xt(e, a, i), t = Gt(t, l, i);
        let [m, b, v] = R(
          t,
          false
        ), [C, w, E] = R(
          e,
          false
        );
        C = C === "12" && i ? "00" : C, m = m === "12" && i ? "00" : m;
        const T = f < Number(C), A = f > Number(m);
        let k = true;
        p && (k = v === p.textContent);
        let I = true;
        p && (I = E === p.textContent);
        const O = g > b && f === Number(m), x = g < w && f === Number(C);
        if (this.input.setAttribute(H, ""), h.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), t !== "") {
          if (k && (A || O))
            return;
          if (v === "AM" && p.textContent === "PM")
            return;
        }
        e !== "" && (I && (T || x) || E === "PM" && p.textContent === "AM") || Bm(
          this._options,
          this.input,
          this._hour.textContent
        ) !== void 0 && (this._isInvalidTimeFormat && this.input.removeAttribute(Jn), !o && r && this.input.focus(), h.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), n ? this.input.value = u : p === null ? this.input.value = `${u} PM` : this.input.value = `${u} ${p.textContent}`, this._animations && this._toggleBackdropAnimation(true), this._removeModal(), c.trigger(this.input, "input.te.timepicker"), c.trigger(this.input, "input"));
      }
    );
  }
  _handleHoverInlineBtn() {
    re.on(
      this._modal,
      "mouseover mouseleave",
      `[${Gm}]`,
      ({ type: t, target: e }) => {
        const i = d.find(
          `[${Um}]`,
          this._modal
        ), n = d.find(
          `[${Xm}]`,
          this._modal
        ), o = (l, p) => l.forEach((u) => {
          if (p) {
            h.addClass(u, this._classes.opacity), u.setAttribute(H, "");
            return;
          }
          h.removeClass(u, this._classes.opacity), u.removeAttribute(H);
        }), a = e.hasAttribute(gs) ? i : n;
        o(a, t === "mouseover");
      }
    );
  }
  _handleDocumentClickInline() {
    c.on(document, Ba, ({ target: t }) => {
      if (this._modal && !this._modal.contains(t) && !t.hasAttribute(zm)) {
        if (clearInterval(this._interval), h.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), this._removeModal(), !this._animations)
          return;
        this._toggleBackdropAnimation(true);
      }
    });
  }
  _handleSwitchHourMinute() {
    Pm(
      "click",
      fs,
      this._classes
    ), c.on(
      this._modal,
      "click",
      fs,
      () => {
        const { format24: t } = this._options, e = d.find(
          fs,
          this._modal
        ), i = d.find(
          `[${X}]`,
          this._modal
        ), n = d.find(
          `[${K}]`,
          this._modal
        ), o = d.find(
          `[${lt}]`,
          this._modal
        ), r = Number(this._hour.textContent), a = Number(this._minutes.textContent), l = (p, u) => {
          n.forEach((f) => f.remove()), i.forEach((f) => f.remove()), h.addClass(this._hand, this._classes.transform), setTimeout(() => {
            h.removeClass(this._hand, this._classes.transform);
          }, 401), this._getAppendClock(p, `[${pe}]`, u);
          const _ = () => {
            const f = d.find(
              `[${K}]`,
              this._modal
            ), g = d.find(
              `[${X}]`,
              this._modal
            );
            this._addActiveClassToTip(f, r), this._addActiveClassToTip(g, a);
          };
          if (!t)
            setTimeout(() => {
              _();
            }, 401);
          else {
            const f = d.find(
              `[${lt}]`,
              this._modal
            );
            setTimeout(() => {
              this._addActiveClassToTip(f, r), _();
            }, 401);
          }
        };
        e.forEach((p) => {
          p.hasAttribute(H) && (p.hasAttribute(eo) ? (h.addClass(this._hand, this._classes.transform), h.addStyle(this._hand, {
            transform: `rotateZ(${this._minutes.textContent * 6}deg)`,
            height: "calc(40% + 1px)"
          }), t && o.length > 0 && o.forEach((u) => u.remove()), l(
            this.minutesArray,
            X
          ), this._hour.style.pointerEvents = "", this._minutes.style.pointerEvents = "none") : p.hasAttribute(gs) && (h.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30}deg)`
          }), Number(this._hour.textContent) > 12 ? (h.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30 - 360}deg)`,
            height: "21.5%"
          }), Number(this._hour.textContent) > 12 && h.addStyle(this._hand, {
            height: "21.5%"
          })) : h.addStyle(this._hand, {
            height: "calc(40% + 1px)"
          }), t && this._getAppendClock(
            this.innerHours,
            `[${di}]`,
            lt
          ), o.length > 0 && o.forEach((u) => u.remove()), l(
            this.hoursArray,
            K
          ), h.addStyle(this._hour, {
            pointerEvents: "none"
          }), h.addStyle(this._minutes, {
            pointerEvents: ""
          })));
        });
      }
    );
  }
  _handleDisablingTipsMaxTime(t, e, i, n) {
    if (!this._options.maxTime && !this._options.disableFuture)
      return;
    const o = d.find(
      `[${K}]`
    ), r = d.find(
      `[${lt}]`
    ), a = d.find(
      `[${X}]`
    );
    if (!e || e === t) {
      Ma(
        r,
        n,
        this._classes,
        this._options.format12
      ), Ma(
        o,
        n,
        this._classes,
        this._options.format12
      ), Hm(
        a,
        i,
        n,
        this._hour.textContent,
        this._classes,
        this._options.format12
      );
      return;
    }
    e === "AM" && t === "PM" && (o.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(Yt, "");
    }), a.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(Yt, "");
    }));
  }
  _handleDisablingTipsMinTime(t, e, i, n) {
    if (!this._options.minTime && !this._options.disablePast)
      return;
    const o = d.find(
      `[${K}]`
    ), r = d.find(
      `[${lt}]`
    ), a = d.find(
      `[${X}]`
    );
    !e || e === t ? (Ra(
      o,
      n,
      this._classes,
      this._options.format12
    ), Ra(
      r,
      n,
      this._classes,
      this._options.format12
    ), Vm(
      a,
      i,
      n,
      this._hour.textContent,
      this._classes,
      this._options.format12
    )) : e === "PM" && t === "AM" && (o.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(Yt, "");
    }), a.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(Yt, "");
    }));
  }
  _handleSwitchTimeMode() {
    c.on(
      document,
      "click",
      ms,
      ({ target: t }) => {
        let { maxTime: e, minTime: i } = this._options;
        const { disablePast: n, disableFuture: o, format12: r } = this._options;
        i = Xt(i, n, r), e = Gt(e, o, r);
        const [a, l, p] = R(
          e,
          false
        ), [u, _, f] = R(
          i,
          false
        ), g = d.find(
          `[${K}]`
        ), m = d.find(
          `[${X}]`
        );
        (() => {
          g.forEach((v) => {
            h.removeClass(v, this._classes.tipsDisabled), v.removeAttribute(Yt);
          }), m.forEach((v) => {
            h.removeClass(v, this._classes.tipsDisabled), v.removeAttribute(Yt);
          });
        })(), this._handleDisablingTipsMinTime(
          t.textContent,
          f,
          _,
          u
        ), this._handleDisablingTipsMaxTime(
          t.textContent,
          p,
          l,
          a
        ), this._toggleAmPm(t.textContent), t.hasAttribute(H) || (d.find(
          ms
        ).forEach((C) => {
          C.hasAttribute(H) && (h.removeClass(C, this._classes.opacity), C.removeAttribute(H));
        }), h.addClass(t, this._classes.opacity), t.setAttribute(H, ""));
      }
    );
  }
  _handleClockClick() {
    let { maxTime: t, minTime: e } = this._options;
    const { disablePast: i, disableFuture: n, format12: o } = this._options;
    e = Xt(e, i, o), t = Gt(t, n, o);
    const r = R(t, false)[2], a = R(e, false)[2], l = R(t, false)[0], p = R(e, false)[0], u = d.findOne(
      `[${Ga}]`
    );
    re.on(
      document,
      `${Ha} ${Va} ${Wa} ${Fa} ${Ya} ${za} ${ja} ${Ka}`,
      "",
      (_) => {
        ps() || _.preventDefault();
        const { type: f, target: g } = _, { closeModalOnMinutesClick: m, switchHoursToMinutesOnClick: b } = this._options, v = d.findOne(
          `[${X}]`,
          this._modal
        ) !== null, C = d.findOne(
          `[${K}]`,
          this._modal
        ) !== null, w = d.findOne(
          `[${lt}]`,
          this._modal
        ) !== null, E = d.find(
          `[${X}]`,
          this._modal
        ), T = Na(_, u), A = u.offsetWidth / 2;
        let k = Math.atan2(T.y - A, T.x - A);
        if (ps()) {
          const L = Na(_, u, true);
          k = Math.atan2(L.y - A, L.x - A);
        }
        let I = null, O = null, x = null;
        if (f === "mousedown" || f === "mousemove" || f === "touchmove" || f === "touchstart")
          (f === "mousedown" || f === "touchstart" || f === "touchmove") && (this._hasTargetInnerClass(g) || g.hasAttribute(Ga) || g.hasAttribute(pe) || g.hasAttribute(X) || g.hasAttribute(K) || g.hasAttribute(so) || g.hasAttribute(io) || g.hasAttribute(qa) || g.hasAttribute(bs)) && (this._isMouseMove = true, ps() && _.touches && (I = _.touches[0].clientX, O = _.touches[0].clientY, x = document.elementFromPoint(I, O)));
        else if (f === "mouseup" || f === "touchend") {
          if (this._isMouseMove = false, this._hasTargetInnerClass(g) || g.hasAttribute(pe) || g.hasAttribute(K) || g.hasAttribute(so) || g.hasAttribute(io) || g.hasAttribute(qa) || g.hasAttribute(bs)) {
            if ((C || w) && b) {
              const L = Number(this._hour.textContent) > l || Number(this._hour.textContent) < p;
              if (this._options.format24 && l !== "" && p !== "" && L)
                return;
              if (this._options.format24 && p !== "" && Number(this._hour.textContent) < p)
                return;
            }
            c.trigger(this._minutes, "click");
          }
          if (v && m) {
            const L = d.findOne(
              `[${qn}]`,
              this._modal
            );
            c.trigger(L, "click");
          }
        }
        if (v) {
          let L;
          const S = Math.trunc(k * 180 / Math.PI) + 90, { degrees: N, minute: P } = this._makeMinutesDegrees(S, L);
          if (this._handlerMaxMinMinutesOptions(N, P) === void 0)
            return;
          const { degrees: tt, minute: et } = this._handlerMaxMinMinutesOptions(N, P);
          if (this._isMouseMove) {
            if (h.addStyle(this._hand, {
              transform: `rotateZ(${tt}deg)`
            }), et === void 0)
              return;
            const U = () => et >= 10 || et === "00" ? et : `0${et}`;
            this._minutes.textContent = U(), this._toggleClassActive(
              this.minutesArray,
              this._minutes,
              E
            ), this._toggleBackgroundColorCircle(
              `[${X}]`
            ), this._objWithDataOnChange.degreesMinutes = tt, this._objWithDataOnChange.minutes = et;
          }
        }
        if (C || w) {
          let L, S = Math.trunc(k * 180 / Math.PI) + 90;
          if (S = Math.round(S / 30) * 30, h.addStyle(this._circle, {
            backgroundColor: "#1976d2"
          }), this._makeHourDegrees(g, S, L) === void 0)
            return;
          const N = () => {
            if (ps() && S && x) {
              const { degrees: P, hour: tt } = this._makeHourDegrees(x, S, L);
              return this._handleMoveHand(
                x,
                tt,
                P
              );
            } else {
              const { degrees: P, hour: tt } = this._makeHourDegrees(g, S, L);
              return this._handleMoveHand(g, tt, P);
            }
          };
          this._objWithDataOnChange.degreesHours = S, this._handlerMaxMinHoursOptions(
            S,
            l,
            p,
            r,
            a,
            _
          ) && N();
        }
        _.stopPropagation();
      }
    );
  }
  _hasTargetInnerClass(t) {
    return t.hasAttribute(di) || t.hasAttribute(lt) || t.hasAttribute(vs);
  }
  _handleMoveHand(t, e, i) {
    const n = d.find(
      `[${K}]`,
      this._modal
    ), o = d.find(
      `[${lt}]`,
      this._modal
    );
    this._isMouseMove && (this._hasTargetInnerClass(t) ? h.addStyle(this._hand, {
      height: "21.5%"
    }) : h.addStyle(this._hand, {
      height: "calc(40% + 1px)"
    }), h.addStyle(this._hand, {
      transform: `rotateZ(${i}deg)`
    }), this._hour.textContent = e >= 10 || e === "00" ? e : `0${e}`, this._toggleClassActive(this.hoursArray, this._hour, n), this._toggleClassActive(this.innerHours, this._hour, o), this._objWithDataOnChange.hour = e >= 10 || e === "00" ? e : `0${e}`);
  }
  _handlerMaxMinMinutesOptions(t, e) {
    let { maxTime: i, minTime: n } = this._options;
    const { format12: o, increment: r, disablePast: a, disableFuture: l } = this._options;
    n = Xt(n, a, o), i = Gt(i, l, o);
    const p = R(i, false)[1], u = R(n, false)[1], _ = R(i, false)[0], f = R(n, false)[0], g = f === "12" && o ? "0" : f, m = _ === "12" && o ? "0" : _, b = R(i, false)[2], v = R(n, false)[2], C = p !== "" ? p * 6 : "", w = u !== "" ? u * 6 : "", E = Number(this._hour.textContent), T = E === 12 && o ? 0 : E;
    if (!b && !v) {
      if (i !== "" && n !== "") {
        if (Number(m) === T && t > C || Number(g) === T && t < w)
          return t;
      } else if (n !== "" && T <= Number(g)) {
        if (t <= w - 6)
          return t;
      } else if (i !== "" && T >= Number(m) && t >= C + 6)
        return t;
    } else {
      if (n !== "") {
        if (v === "PM" && this._isAmEnabled)
          return;
        if (v === "PM" && this._isPmEnabled) {
          if (T < Number(g))
            return;
          if (T <= Number(g) && t <= w - 6)
            return t;
        } else if (v === "AM" && this._isAmEnabled) {
          if (T < Number(g))
            return;
          if (T <= Number(g) && t <= w - 6)
            return t;
        }
      }
      if (i !== "") {
        if (b === "AM" && this._isPmEnabled)
          return;
        if (b === "PM" && this._isPmEnabled) {
          if (T >= Number(m) && t >= C + 6)
            return t;
        } else if (b === "AM" && this._isAmEnabled && T >= Number(m) && t >= C + 6)
          return t;
      }
    }
    return r && (t = Math.round(t / 30) * 30), t < 0 ? t = 360 + t : t >= 360 && (t = 0), {
      degrees: t,
      minute: e
    };
  }
  _removeModal() {
    this._animations ? setTimeout(() => {
      this._removeModalElements(), this._scrollBar.reset();
    }, 300) : (this._removeModalElements(), this._scrollBar.reset()), re.off(
      this._document,
      `${Ba} ${_s} ${Ha} ${Va} ${Wa} ${Fa} ${Ya} ${za} ${ja} ${Ka}`
    ), c.off(window, _s);
  }
  _removeModalElements() {
    this._modal && this._modal.remove();
  }
  _toggleBackdropAnimation(t = false) {
    t ? this._wrapper.classList.add("animate-[fade-out_350ms_ease-in-out]") : (this._wrapper.classList.add("animate-[fade-in_350ms_ease-in-out]"), this._options.inline || h.addClass(this._clock, this._classes.clockAnimation)), setTimeout(() => {
      this._wrapper.classList.remove(
        "animate-[fade-out_350ms_ease-in-out]",
        "animate-[fade-in_350ms_ease-in-out]"
      );
    }, 351);
  }
  _addActiveClassToTip(t, e) {
    t.forEach((i) => {
      Number(i.textContent) === Number(e) && (h.addClass(i, this._classes.tipsActive), i.setAttribute(H, ""));
    });
  }
  _setHourOrMinute(t) {
    return t < 10 ? `0${t}` : t;
  }
  _appendTimes() {
    const { format24: t } = this._options;
    if (t) {
      this._getAppendClock(
        this.hoursArray,
        `[${pe}]`,
        K
      ), this._getAppendClock(
        this.innerHours,
        `[${di}]`,
        lt
      );
      return;
    }
    this._getAppendClock(
      this.hoursArray,
      `[${pe}]`,
      K
    );
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...tg,
      ...e,
      ...t
    }, D($i, t, eg), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...ig,
      ...e,
      ...t
    }, D($i, t, sg), t;
  }
  _getContainer() {
    return d.findOne(this._options.container);
  }
  _getValidate(t) {
    const { format24: e, format12: i, appendValidationInfo: n } = this._options;
    re.on(this.input, t, ({ target: o }) => {
      if (this._options === null || this.input.value === "")
        return;
      const r = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/, a = /^([01]\d|2[0-3])(:[0-5]\d)$/, l = r.test(o.value);
      if (a.test(o.value) !== true && e || l !== true && i) {
        n && this.input.setAttribute(Jn, ""), h.addStyle(o, { marginBottom: 0 }), this._isInvalidTimeFormat = true;
        return;
      }
      this.input.removeAttribute(Jn), this._isInvalidTimeFormat = false;
      const u = d.findOne(
        `[${Zm}]`
      );
      u !== null && u.remove();
    });
  }
  // Static
  static getInstance(t) {
    return y.getData(t, Us);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var og = {
  threshold: 10,
  direction: "all"
};
var rg = class {
  constructor(t, e) {
    this._element = t, this._startPosition = null, this._options = {
      ...og,
      ...e
    };
  }
  handleTouchStart(t) {
    this._startPosition = this._getCoordinates(t);
  }
  handleTouchMove(t) {
    if (!this._startPosition)
      return;
    const e = this._getCoordinates(t), i = {
      x: e.x - this._startPosition.x,
      y: e.y - this._startPosition.y
    }, n = this._getDirection(i);
    if (this._options.direction === "all") {
      if (n.y.value < this._options.threshold && n.x.value < this._options.threshold)
        return;
      const r = n.y.value > n.x.value ? n.y.direction : n.x.direction;
      c.trigger(this._element, `swipe${r}`), c.trigger(this._element, "swipe", { direction: r }), this._startPosition = null;
      return;
    }
    const o = this._options.direction === "left" || this._options === "right" ? "x" : "y";
    n[o].direction === this._options.direction && n[o].value > this._options.threshold && (c.trigger(this._element, `swipe${n[o].direction}`), this._startPosition = null);
  }
  handleTouchEnd() {
    this._startPosition = null;
  }
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection(t) {
    return {
      x: {
        direction: t.x < 0 ? "left" : "right",
        value: Math.abs(t.x)
      },
      y: {
        direction: t.y < 0 ? "up" : "down",
        value: Math.abs(t.y)
      }
    };
  }
};
var ag = class {
  constructor(t, e = "swipe", i = {}) {
    this._element = t, this._event = e, this.swipe = new rg(t, i), this._touchStartHandler = this._handleTouchStart.bind(this), this._touchMoveHandler = this._handleTouchMove.bind(this), this._touchEndHandler = this._handleTouchEnd.bind(this);
  }
  dispose() {
    this._element.removeEventListener("touchstart", this._touchStartHandler), this._element.removeEventListener("touchmove", this._touchMoveHandler), window.removeEventListener("touchend", this._touchEndHandler);
  }
  init() {
    this._element.addEventListener(
      "touchstart",
      (t) => this._handleTouchStart(t)
    ), this._element.addEventListener(
      "touchmove",
      (t) => this._handleTouchMove(t)
    ), window.addEventListener("touchend", (t) => this._handleTouchEnd(t));
  }
  _handleTouchStart(t) {
    this[this._event].handleTouchStart(t);
  }
  _handleTouchMove(t) {
    this[this._event].handleTouchMove(t);
  }
  _handleTouchEnd(t) {
    this[this._event].handleTouchEnd(t);
  }
};
var Qa = "sidenav";
var Ts = "te.sidenav";
var lg = "data-te-sidenav-rotate-icon-ref";
var no = "[data-te-sidenav-toggle-ref]";
var cg = "[data-te-collapse-init]";
var hg = '[data-te-sidenav-slim="true"]';
var dg = '[data-te-sidenav-slim="false"]';
var ug = "[data-te-sidenav-menu-ref]";
var Oe = "[data-te-sidenav-collapse-ref]";
var ui = "[data-te-sidenav-link-ref]";
var pg = F() ? 100 : -100;
var _g = F() ? -100 : 100;
var fg = {
  sidenavAccordion: "(boolean)",
  sidenavBackdrop: "(boolean)",
  sidenavBackdropClass: "(null|string)",
  sidenavCloseOnEsc: "(boolean)",
  sidenavColor: "(string)",
  sidenavContent: "(null|string)",
  sidenavExpandable: "(boolean)",
  sidenavExpandOnHover: "(boolean)",
  sidenavFocusTrap: "(boolean)",
  sidenavHidden: "(boolean)",
  sidenavMode: "(string)",
  sidenavModeBreakpointOver: "(null|string|number)",
  sidenavModeBreakpointSide: "(null|string|number)",
  sidenavModeBreakpointPush: "(null|string|number)",
  sidenavBreakpointSm: "(number)",
  sidenavBreakpointMd: "(number)",
  sidenavBreakpointLg: "(number)",
  sidenavBreakpointXl: "(number)",
  sidenavBreakpoint2xl: "(number)",
  sidenavScrollContainer: "(null|string)",
  sidenavSlim: "(boolean)",
  sidenavSlimCollapsed: "(boolean)",
  sidenavSlimWidth: "(number)",
  sidenavPosition: "(string)",
  sidenavRight: "(boolean)",
  sidenavTransitionDuration: "(number)",
  sidenavWidth: "(number)"
};
var mg = {
  sidenavAccordion: false,
  sidenavBackdrop: true,
  sidenavBackdropClass: null,
  sidenavCloseOnEsc: true,
  sidenavColor: "primary",
  sidenavContent: null,
  sidenavExpandable: true,
  sidenavExpandOnHover: false,
  sidenavFocusTrap: true,
  sidenavHidden: true,
  sidenavMode: "over",
  sidenavModeBreakpointOver: null,
  sidenavModeBreakpointSide: null,
  sidenavModeBreakpointPush: null,
  sidenavBreakpointSm: 640,
  sidenavBreakpointMd: 768,
  sidenavBreakpointLg: 1024,
  sidenavBreakpointXl: 1280,
  sidenavBreakpoint2xl: 1536,
  sidenavScrollContainer: null,
  sidenavSlim: false,
  sidenavSlimCollapsed: false,
  sidenavSlimWidth: 77,
  sidenavPosition: "fixed",
  sidenavRight: false,
  sidenavTransitionDuration: 300,
  sidenavWidth: 240
};
var gi = class _gi {
  constructor(t, e = {}) {
    yt(this, "_addBackdropOnInit", () => {
      this._options.sidenavHidden || (this._backdrop.show(), c.off(this._element, "transitionend", this._addBackdropOnInit));
    });
    this._element = t, this._options = e, this._ID = rt(""), this._content = null, this._initialContentStyle = null, this._slimCollapsed = false, this._activeNode = null, this._tempSlim = false, this._backdrop = this._initializeBackDrop(), this._focusTrap = null, this._perfectScrollbar = null, this._touch = null, this._setModeFromBreakpoints(), this.escHandler = (i) => {
      i.keyCode === Fi && this.toggler && Nt(this.toggler) && (this._update(false), c.off(window, "keydown", this.escHandler));
    }, this.hashHandler = () => {
      this._setActiveElements();
    }, t && (y.setData(t, Ts, this), this._setup()), this.options.sidenavBackdrop && !this.options.sidenavHidden && this.options.sidenavMode === "over" && c.on(this._element, "transitionend", this._addBackdropOnInit), this._didInit = false, this._init();
  }
  // Getters
  static get NAME() {
    return Qa;
  }
  get container() {
    if (this.options.sidenavPosition === "fixed")
      return d.findOne("body");
    const t = (e) => !e.parentNode || e.parentNode === document ? e : e.parentNode.style.position === "relative" || e.parentNode.classList.contains("relative") ? e.parentNode : t(e.parentNode);
    return t(this._element);
  }
  get isVisible() {
    let t = 0, e = window.innerWidth;
    if (this.options.sidenavPosition !== "fixed") {
      const n = this.container.getBoundingClientRect();
      t = n.x, e = n.x + n.width;
    }
    const { x: i } = this._element.getBoundingClientRect();
    return this.options.sidenavRight ? Math.abs(i - e) > 10 : Math.abs(i - t) < 10;
  }
  get links() {
    return d.find(ui, this._element);
  }
  get navigation() {
    return d.find(ug, this._element);
  }
  get options() {
    const t = {
      ...mg,
      ...h.getDataAttributes(this._element),
      ...this._options
    };
    return D(Qa, t, fg), t;
  }
  get sidenavStyle() {
    return {
      width: `${this.width}px`,
      height: this.options.sidenavPosition === "fixed" ? "100vh" : "100%",
      position: this.options.sidenavPosition,
      transition: `all ${this.transitionDuration} linear`
    };
  }
  get toggler() {
    return d.find(no).find(
      (e) => {
        const i = h.getDataAttribute(e, "target");
        return d.findOne(i) === this._element;
      }
    );
  }
  get transitionDuration() {
    return `${this.options.sidenavTransitionDuration / 1e3}s`;
  }
  get translation() {
    return this.options.sidenavRight ? _g : pg;
  }
  get width() {
    return this._slimCollapsed ? this.options.sidenavSlimWidth : this.options.sidenavWidth;
  }
  get isBackdropVisible() {
    return !!this._backdrop._element;
  }
  // Public
  changeMode(t) {
    this._setMode(t);
  }
  dispose() {
    c.off(window, "keydown", this.escHandler), this.options.sidenavBackdrop && this._backdrop.dispose(), c.off(window, "hashchange", this.hashHandler), this._touch.dispose(), y.removeData(this._element, Ts), this._element = null;
  }
  hide() {
    this._emitEvents(false), this._update(false), this._options.sidenavBackdrop && this.isBackdropVisible && this._backdrop.hide();
  }
  show() {
    this._emitEvents(true), this._update(true), this._options.sidenavBackdrop && this._options.sidenavMode === "over" && this._backdrop.show();
  }
  toggle() {
    this._emitEvents(!this.isVisible), this._update(!this.isVisible);
  }
  toggleSlim() {
    this._setSlim(!this._slimCollapsed);
  }
  update(t) {
    this._options = t, this._setup();
  }
  getBreakpoint(t) {
    return this._transformBreakpointValuesToObject()[t];
  }
  // Private
  _init() {
    this._didInit || (c.on(
      document,
      "click",
      no,
      _gi.toggleSidenav()
    ), this._didInit = true);
  }
  _transformBreakpointValuesToObject() {
    return {
      sm: this.options.sidenavBreakpointSm,
      md: this.options.sidenavBreakpointMd,
      lg: this.options.sidenavBreakpointLg,
      xl: this.options.sidenavBreakpointXl,
      "2xl": this.options.sidenavBreakpoint2xl
    };
  }
  _setModeFromBreakpoints() {
    const t = window.innerWidth, e = this._transformBreakpointValuesToObject();
    if (t === void 0 || !e)
      return;
    const i = typeof this.options.sidenavModeBreakpointOver == "number" ? t - this.options.sidenavModeBreakpointOver : t - e[this.options.sidenavModeBreakpointOver], n = typeof this.options.sidenavModeBreakpointSide == "number" ? t - this.options.sidenavModeBreakpointSide : t - e[this.options.sidenavModeBreakpointSide], o = typeof this.options.sidenavModeBreakpointPush == "number" ? t - this.options.sidenavModeBreakpointPush : t - e[this.options.sidenavModeBreakpointPush], r = (l, p) => l - p < 0 ? -1 : p - l < 0 ? 1 : 0, a = [i, n, o].filter((l) => l != null && l >= 0).sort(r)[0];
    i > 0 && i === a ? (this._options.sidenavMode = "over", this._options.sidenavHidden = true) : n > 0 && n === a ? this._options.sidenavMode = "side" : o > 0 && o === a && (this._options.sidenavMode = "push");
  }
  _collapseItems() {
    this.navigation.forEach((t) => {
      d.find(Oe, t).forEach((i) => {
        Zt.getInstance(i).hide();
      });
    });
  }
  _getOffsetValue(t, { index: e, property: i, offsets: n }) {
    const o = this._getPxValue(
      this._initialContentStyle[e][n[i].property]
    ), r = t ? n[i].value : 0;
    return o + r;
  }
  _getProperty(...t) {
    return t.map((e, i) => i === 0 ? e : e[0].toUpperCase().concat(e.slice(1))).join("");
  }
  _getPxValue(t) {
    return t ? parseFloat(t) : 0;
  }
  _handleSwipe(t, e) {
    e && this._slimCollapsed && this.options.sidenavSlim && this.options.sidenavExpandable ? this.toggleSlim() : e || (this._slimCollapsed || !this.options.sidenavSlim || !this.options.sidenavExpandable ? this.toggler && Nt(this.toggler) && this.toggle() : this.toggleSlim());
  }
  _isActive(t, e) {
    return e ? e === t : t.attributes.href ? new URL(t, window.location.href).href === window.location.href : false;
  }
  _isAllToBeCollapsed() {
    return d.find(
      cg,
      this._element
    ).filter(
      (i) => i.getAttribute("aria-expanded") === "true"
    ).length === 0;
  }
  _isAllCollapsed() {
    return d.find(Oe, this._element).filter(
      (t) => Nt(t)
    ).length === 0;
  }
  _initializeBackDrop() {
    if (!this.options.sidenavBackdrop)
      return;
    const t = this.options.sidenavBackdropClass ? this.options.sidenavBackdropClass.split(" ") : this.options.sidenavPosition ? [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      this.options.sidenavPosition,
      "top-0",
      "left-0",
      "z-50",
      "bg-black/10",
      "dark:bg-black-60",
      "w-full",
      "h-full",
      this._element.id
    ] : null;
    return new hr({
      isVisible: this.options.sidenavBackdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      backdropClasses: t,
      clickCallback: () => this.hide()
    });
  }
  _updateBackdrop(t) {
    if (this.options.sidenavMode === "over") {
      t ? this._backdrop.show() : this.isBackdropVisible && this._backdrop.hide();
      return;
    }
    this.isBackdropVisible && this._backdrop.hide();
  }
  _setup() {
    this._setupTouch(), this.options.sidenavFocusTrap && this._setupFocusTrap(), this._setupCollapse(), this.options.sidenavSlim && this._setupSlim(), this._setupInitialStyling(), this._setupScrolling(), this.options.sidenavContent && this._setupContent(), this._setupActiveState(), this._setupRippleEffect(), this.options.sidenavHidden || this._updateOffsets(true, true), this.options.sidenavMode === "over" && this._setTabindex(true);
  }
  _setupActiveState() {
    this._setActiveElements(), this.links.forEach((t) => {
      c.on(t, "click", () => this._setActiveElements(t)), c.on(t, "keydown", (e) => {
        e.keyCode === ct && this._setActiveElements(t);
      });
    }), c.on(window, "hashchange", this.hashHandler);
  }
  _setupCollapse() {
    this.navigation.forEach((t, e) => {
      d.find(Oe, t).forEach(
        (n, o) => this._setupCollapseList({ list: n, index: o, menu: t, menuIndex: e })
      );
    });
  }
  _generateCollpaseID(t, e) {
    return `sidenav-collapse-${this._ID}-${e}-${t}`;
  }
  _setupCollapseList({ list: t, index: e, menu: i, menuIndex: n }) {
    const o = this._generateCollpaseID(e, n);
    t.setAttribute("id", o), t.setAttribute("data-te-collapse-item", "");
    const [r] = d.prev(t, ui);
    h.setDataAttribute(r, "collapse-init", ""), r.setAttribute("href", `#${o}`), r.setAttribute("role", "button");
    const a = Zt.getInstance(t) || new Zt(t, {
      toggle: false,
      parent: this.options.sidenavAccordion ? i : t
    });
    (t.dataset.teSidenavStateShow === "" || t.dataset.teCollapseShow === "") && this._rotateArrow(r, false), c.on(r, "click", (l) => {
      this._toggleCategory(l, a, t), this._tempSlim && this._isAllToBeCollapsed() && (this._setSlim(true), this._tempSlim = false), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), c.on(
      t,
      "show.te.collapse",
      () => this._rotateArrow(r, false)
    ), c.on(
      t,
      "hide.te.collapse",
      () => this._rotateArrow(r, true)
    ), c.on(t, "shown.te.collapse", () => {
      this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), c.on(t, "hidden.te.collapse", () => {
      this._tempSlim && this._isAllCollapsed() && (this._setSlim(true), this._tempSlim = false), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    });
  }
  _setupContent() {
    this._content = d.find(this.options.sidenavContent), this._content.forEach((t) => {
      const e = [
        "!p",
        "!m",
        "!px",
        "!pl",
        "!pr",
        "!mx",
        "!ml",
        "!mr",
        "!-p",
        "!-m",
        "!-px",
        "!-pl",
        "!-pr",
        "!-mx",
        "!-ml",
        "!-mr"
      ];
      [...t.classList].filter(
        (n) => e.findIndex((o) => n.includes(o)) >= 0
      ).forEach((n) => t.classList.remove(n));
    }), this._initialContentStyle = this._content.map((t) => {
      const { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r } = window.getComputedStyle(t);
      return { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r };
    });
  }
  _setupFocusTrap() {
    this._focusTrap = new Wi(
      this._element,
      {
        event: "keydown",
        condition: (t) => t.keyCode === Pi,
        onlyVisible: true
      },
      this.toggler
    );
  }
  _setupInitialStyling() {
    this._setColor(), h.style(this._element, this.sidenavStyle);
  }
  _setupScrolling() {
    let t = this._element;
    if (this.options.sidenavScrollContainer) {
      t = d.findOne(
        this.options.sidenavScrollContainer,
        this._element
      );
      const i = Kh(t.parentNode.children).filter(
        (n) => n !== t
      ).reduce((n, o) => n + o.clientHeight, 0);
      h.style(t, {
        maxHeight: `calc(100% - ${i}px)`,
        position: "relative"
      });
    }
    this._perfectScrollbar = new mh(t, {
      suppressScrollX: true,
      handlers: ["click-rail", "drag-thumb", "wheel", "touch"]
    });
  }
  _setupSlim() {
    this._slimCollapsed = this.options.sidenavSlimCollapsed, this._toggleSlimDisplay(this._slimCollapsed), this.options.sidenavExpandOnHover && (this._element.addEventListener("mouseenter", () => {
      this._slimCollapsed && this._setSlim(false);
    }), this._element.addEventListener("mouseleave", () => {
      this._slimCollapsed || this._setSlim(true);
    }));
  }
  _setupRippleEffect() {
    this.links.forEach((t) => {
      let e = Ze.getInstance(t), i = this.options.sidenavColor;
      if (e && e._options.sidenavColor !== this.options.sidenavColor)
        e.dispose();
      else if (e)
        return;
      (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (i = "white"), e = new Ze(t, { rippleColor: i });
    });
  }
  _setupTouch() {
    this._touch = new ag(this._element, "swipe", { threshold: 20 }), this._touch.init(), c.on(
      this._element,
      "swipeleft",
      (t) => this._handleSwipe(t, this.options.sidenavRight)
    ), c.on(
      this._element,
      "swiperight",
      (t) => this._handleSwipe(t, !this.options.sidenavRight)
    );
  }
  _setActive(t, e) {
    t.setAttribute("data-te-sidebar-state-active", ""), this._activeNode && t.removeAttribute("data-te-sidebar-state-active"), this._activeNode = t;
    const [i] = d.parents(
      this._activeNode,
      Oe
    );
    if (!i) {
      this._setActiveCategory();
      return;
    }
    const [n] = d.prev(i, ui);
    this._setActiveCategory(n), !e && !this._slimCollapsed && Zt.getInstance(i).show();
  }
  _setActiveCategory(t) {
    this.navigation.forEach((e) => {
      d.find(Oe, e).forEach((n) => {
        const [o] = d.prev(n, ui);
        o !== t ? o.removeAttribute("data-te-sidenav-state-active") : o.setAttribute("data-te-sidenav-state-active", "");
      });
    });
  }
  _setActiveElements(t) {
    this.navigation.forEach((e) => {
      d.find(ui, e).filter((n) => d.next(n, Oe).length === 0).forEach((n) => {
        this._isActive(n, t) && n !== this._activeNode && this._setActive(n, t);
      });
    }), t && this._updateFocus(this.isVisible);
  }
  _setColor() {
    const t = [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "light",
      "dark"
    ], { sidenavColor: e } = this.options, i = t.includes(e) ? e : "primary";
    t.forEach((n) => {
      this._element.classList.remove(`sidenav-${n}`);
    }), h.addClass(this._element, `sidenav-${i}`);
  }
  _setContentOffsets(t, e, i) {
    this._content.forEach((n, o) => {
      const r = this._getOffsetValue(t, {
        index: o,
        property: "padding",
        offsets: e
      }), a = this._getOffsetValue(t, {
        index: o,
        property: "margin",
        offsets: e
      }), l = {};
      if (i || (l.transition = `all ${this.transitionDuration} linear`), l[e.padding.property] = `${r}px`, l[e.margin.property] = `${a}px`, h.style(n, l), !!t) {
        if (i) {
          h.style(n, {
            transition: this._initialContentStyle[o].transition
          });
          return;
        }
        c.on(n, "transitionend", () => {
          h.style(n, {
            transition: this._initialContentStyle[o].transition
          });
        });
      }
    });
  }
  _setMode(t) {
    this.options.sidenavMode !== t && (this._options.sidenavMode = t, this._update(this.isVisible));
  }
  _setSlim(t) {
    const e = t ? ["collapse", "collapsed"] : ["expand", "expanded"];
    this._triggerEvents(...e), t && this._collapseItems(), this._slimCollapsed = t, this._toggleSlimDisplay(t), h.style(this._element, { width: `${this.width}px` }), this._updateOffsets(this.isVisible);
  }
  _setTabindex(t) {
    this.links.forEach((e) => {
      e.tabIndex = t ? 0 : -1;
    });
  }
  _emitEvents(t) {
    const e = t ? ["show", "shown"] : ["hide", "hidden"];
    this._triggerEvents(...e);
  }
  _rotateArrow(t, e) {
    const [i] = d.children(t, `[${lg}]`);
    i && (e ? h.removeClass(i, "rotate-180") : h.addClass(i, "rotate-180"));
  }
  _toggleCategory(t, e) {
    t.preventDefault(), e.toggle(), this._slimCollapsed && this.options.sidenavExpandable && (this._tempSlim = true, this._setSlim(false));
  }
  _toggleSlimDisplay(t) {
    const e = d.find(
      hg,
      this._element
    ), i = d.find(
      dg,
      this._element
    ), n = () => {
      e.forEach((o) => {
        h.style(o, {
          display: this._slimCollapsed ? "unset" : "none"
        });
      }), i.forEach((o) => {
        h.style(o, {
          display: this._slimCollapsed ? "none" : "unset"
        });
      });
    };
    t ? setTimeout(
      () => n(),
      this.options.sidenavTransitionDuration
    ) : n();
  }
  async _triggerEvents(t, e) {
    c.trigger(this._element, `${t}.te.sidenav`), e && await setTimeout(() => {
      c.trigger(this._element, `${e}.te.sidenav`);
    }, this.options.sidenavTransitionDuration + 5);
  }
  _isiPhone() {
    return /iPhone|iPod/i.test(navigator.userAgent);
  }
  _update(t) {
    t && this._isiPhone() && h.addClass(this._element, "ps--scrolling-y"), this.toggler && this._updateTogglerAria(t), this._updateDisplay(t), this.options.sidenavBackdrop && this._updateBackdrop(t), this._updateOffsets(t), t && this.options.sidenavCloseOnEsc && this.options.sidenavMode !== "side" && c.on(window, "keydown", this.escHandler), this.options.sidenavFocusTrap && this._updateFocus(t);
  }
  _updateDisplay(t) {
    const e = t ? 0 : this.translation;
    h.style(this._element, {
      transform: `translateX(${e}%)`
    });
  }
  _updateFocus(t) {
    if (this._setTabindex(t), this.options.sidenavMode === "over" && this.options.sidenavFocusTrap) {
      if (t) {
        this._focusTrap.trap();
        return;
      }
      this._focusTrap.disable();
    }
    this._focusTrap.disable();
  }
  _updateOffsets(t, e = false) {
    const [i, n] = this.options.sidenavRight ? ["right", "left"] : ["left", "right"], o = {
      property: this._getProperty("padding", i),
      value: this.options.sidenavMode === "over" ? 0 : this.width
    }, r = {
      property: this._getProperty("margin", n),
      value: this.options.sidenavMode === "push" ? -1 * this.width : 0
    };
    c.trigger(this._element, "update.te.sidenav", {
      margin: r,
      padding: o
    }), this._content && (this._content.className = "", this._setContentOffsets(t, { padding: o, margin: r }, e));
  }
  _updateTogglerAria(t) {
    this.toggler.setAttribute("aria-expanded", t);
  }
  // Static
  static toggleSidenav() {
    return function(t) {
      const e = d.closest(t.target, no), i = h.getDataAttributes(e).target;
      d.find(i).forEach((n) => {
        (_gi.getInstance(n) || new _gi(n)).toggle();
      });
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, Ts);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new _gi(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, Ts);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Ho = "stepper";
var Xs = "te.stepper";
var pn = `.${Xs}`;
var Yi = `data-te-${Ho}`;
var bi = "horizontal";
var xt = "vertical";
var gg = {
  stepperType: "string",
  stepperLinear: "boolean",
  stepperNoEditable: "boolean",
  stepperActive: "string",
  stepperCompleted: "string",
  stepperInvalid: "string",
  stepperDisabled: "string",
  stepperVerticalBreakpoint: "number",
  stepperMobileBreakpoint: "number",
  stepperMobileBarBreakpoint: "number"
};
var bg = {
  stepperType: bi,
  stepperLinear: false,
  stepperNoEditable: false,
  stepperActive: "",
  stepperCompleted: "",
  stepperInvalid: "",
  stepperDisabled: "",
  stepperVerticalBreakpoint: 0,
  stepperMobileBreakpoint: 0,
  stepperMobileBarBreakpoint: 4
};
var Ja = `mousedown${pn}`;
var tl = `keydown${pn}`;
var vg = `keyup${pn}`;
var el = `resize${pn}`;
var jt = `[${Yi}-step-ref]`;
var G = `[${Yi}-head-ref]`;
var il = `[${Yi}-head-text-ref]`;
var Es = `[${Yi}-head-icon-ref]`;
var st = `[${Yi}-content-ref]`;
var XC = class {
  constructor(t, e) {
    this._element = t, this._options = this._getConfig(e), this._elementHeight = 0, this._steps = d.find(`${jt}`, this._element), this._currentView = "", this._activeStepIndex = 0, this._verticalStepperStyles = [], this._element && (y.setData(t, Xs, this), this._init());
  }
  // Getters
  static get NAME() {
    return Ho;
  }
  get activeStep() {
    return this._steps[this._activeStepIndex];
  }
  get activeStepIndex() {
    return this._activeStepIndex;
  }
  // Public
  dispose() {
    this._steps.forEach((t) => {
      c.off(t, Ja), c.off(t, tl);
    }), c.off(window, el), y.removeData(this._element, Xs), this._element = null;
  }
  changeStep(t) {
    this._toggleStep(t);
  }
  nextStep() {
    this._toggleStep(this._activeStepIndex + 1);
  }
  previousStep() {
    this._toggleStep(this._activeStepIndex - 1);
  }
  // Private
  _init() {
    const t = d.find(`${jt}`, this._element)[this._activeStepIndex].setAttribute("data-te", "active-step"), e = d.find(
      `${il}`,
      this._element
    ), i = d.find(
      `${Es}`,
      this._element
    );
    switch (t ? (this._activeStepIndex = this._steps.indexOf(t), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    ), e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700")) : (e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    )), this._bindMouseDown(), this._bindKeysNavigation(), this._options.stepperType) {
      case xt:
        this._toggleVertical();
        break;
      default:
        this._toggleHorizontal();
        break;
    }
    (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView(), this._bindResize();
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...bg,
      ...e,
      ...t
    }, D(Ho, t, gg), t;
  }
  _bindMouseDown() {
    this._steps.forEach((t) => {
      const e = d.findOne(`${G}`, t);
      c.on(e, Ja, (i) => {
        const n = d.parents(i.target, `${jt}`)[0], o = this._steps.indexOf(n);
        i.preventDefault(), this._toggleStep(o);
      });
    });
  }
  _bindResize() {
    c.on(window, el, () => {
      this._currentView === xt && this._setSingleStepHeight(this.activeStep), this._currentView === bi && this._setHeight(this.activeStep), (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView();
    });
  }
  _toggleStepperView() {
    const t = this._options.stepperVerticalBreakpoint < window.innerWidth, e = this._options.stepperVerticalBreakpoint > window.innerWidth, i = this._options.stepperMobileBreakpoint > window.innerWidth;
    t && this._currentView !== bi && this._toggleHorizontal(), e && !i && this._currentView !== xt && (this._steps.forEach((n) => {
      const o = d.findOne(`${st}`, n);
      this._resetStepperHeight(), this._showElement(o);
    }), this._toggleVertical());
  }
  _toggleStep(t) {
    this._activeStepIndex !== t && (this._options.stepperNoEditable && this._toggleDisabled(), this._showElement(
      d.findOne(`${st}`, this._steps[t])
    ), this._toggleActive(t), t > this._activeStepIndex && this._toggleCompleted(this._activeStepIndex), this._currentView === bi ? this._animateHorizontalStep(t) : (this._animateVerticalStep(t), this._setSingleStepHeight(this._steps[t])), this._toggleStepTabIndex(
      d.findOne(`${G}`, this.activeStep),
      d.findOne(`${G}`, this._steps[t])
    ), this._activeStepIndex = t, this._steps[this._activeStepIndex].setAttribute("data-te", "active-step"), this._steps.forEach((e, i) => {
      e[this._activeStepIndex] !== i && e.removeAttribute("data-te");
    }));
  }
  _resetStepperHeight() {
    this._element.style.height = "";
  }
  _setStepsHeight() {
    this._steps.forEach((t) => {
      const e = d.findOne(`${st}`, t), i = window.getComputedStyle(e);
      this._verticalStepperStyles.push({
        paddingTop: parseFloat(i.paddingTop),
        paddingBottom: parseFloat(i.paddingBottom)
      });
      const n = e.scrollHeight;
      e.style.height = `${n}px`;
    });
  }
  _setSingleStepHeight(t) {
    const e = d.findOne(`${st}`, t), i = this.activeStep === t, n = this._steps.indexOf(t);
    let o;
    i ? (e.style.height = "", o = e.scrollHeight) : o = e.scrollHeight + this._verticalStepperStyles[n].paddingTop + this._verticalStepperStyles[n].paddingBottom, e.style.height = `${o}px`;
  }
  _toggleVertical() {
    this._currentView = xt, this._setStepsHeight(), this._hideInactiveSteps();
  }
  _toggleHorizontal() {
    this._currentView = bi, this._setHeight(this.activeStep), this._hideInactiveSteps();
  }
  _toggleStepperClass() {
    d.findOne(
      "[data-te-stepper-type]",
      this._element
    ) !== null && this._steps.forEach((e) => {
      d.findOne(`${st}`, e).classList.remove("!my-0"), d.findOne(`${st}`, e).classList.remove("!py-0"), d.findOne(`${st}`, e).classList.remove("!h-0");
    });
  }
  _toggleStepClass(t, e, i) {
    i && this._steps[t].classList[e](i);
  }
  _bindKeysNavigation() {
    this._toggleStepTabIndex(
      false,
      d.findOne(`${G}`, this.activeStep)
    ), this._steps.forEach((t) => {
      const e = d.findOne(`${G}`, t);
      c.on(e, tl, (i) => {
        const n = d.parents(
          i.currentTarget,
          `${jt}`
        )[0], o = d.next(n, `${jt}`)[0], r = d.prev(n, `${jt}`)[0], a = d.findOne(
          `${G}`,
          n
        ), l = d.findOne(
          `${G}`,
          this.activeStep
        );
        let p = null, u = null;
        if (o && (p = d.findOne(`${G}`, o)), r && (u = d.findOne(`${G}`, r)), i.keyCode === He && this._currentView !== xt && (u ? (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus()) : p && (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus())), i.keyCode === Ve && this._currentView !== xt && (p ? (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus()) : u && (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus())), i.keyCode === z && this._currentView === xt && (i.preventDefault(), p && (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus())), i.keyCode === at && this._currentView === xt && (i.preventDefault(), u && (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus())), i.keyCode === We) {
          const _ = d.findOne(
            `${G}`,
            this._steps[0]
          );
          this._toggleStepTabIndex(a, _), this._toggleOutlineStyles(a, _), _.focus();
        }
        if (i.keyCode === Fe) {
          const _ = this._steps[this._steps.length - 1], f = d.findOne(`${G}`, _);
          this._toggleStepTabIndex(a, f), this._toggleOutlineStyles(a, f), f.focus();
        }
        (i.keyCode === ct || i.keyCode === Ks) && (i.preventDefault(), this.changeStep(this._steps.indexOf(n))), i.keyCode === Pi && (this._toggleStepTabIndex(a, l), this._toggleOutlineStyles(a, false), l.focus());
      }), c.on(e, vg, (i) => {
        const n = d.parents(
          i.currentTarget,
          `${jt}`
        )[0], o = d.findOne(
          `${G}`,
          n
        ), r = d.findOne(
          `${G}`,
          this.activeStep
        );
        i.keyCode === Pi && (this._toggleStepTabIndex(o, r), this._toggleOutlineStyles(false, r), r.focus());
      });
    });
  }
  _toggleStepTabIndex(t, e) {
    t && t.setAttribute("tabIndex", -1), e && e.setAttribute("tabIndex", 0);
  }
  _toggleOutlineStyles(t, e) {
    t && (t.style.outline = ""), e && (e.style.outline = "revert");
  }
  _toggleDisabled() {
    const t = d.find(`${G}`, this._element), e = d.find(
      `${Es}`,
      this._element
    );
    t[this._activeStepIndex].classList.add("color-[#858585]"), t[this._activeStepIndex].classList.add("cursor-default"), e[this._activeStepIndex].classList.add("!bg-[#858585]"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperDisabled
    );
  }
  _toggleActive(t) {
    const e = d.find(
      `${il}`,
      this._element
    ), i = d.find(
      `${Es}`,
      this._element
    );
    e[t].classList.add("font-medium"), i[t].classList.add("!bg-primary-100"), i[t].classList.add("!text-primary-700"), i[t].classList.remove("!bg-success-100"), i[t].classList.remove("!text-success-700"), e[this._activeStepIndex].classList.remove("font-medium"), i[this._activeStepIndex].classList.remove("!bg-primary-100"), i[this._activeStepIndex].classList.remove(
      "!text-primary-700"
    ), this._toggleStepClass(t, "add", this._options.stepperActive), this._toggleStepClass(
      this._activeStepIndex,
      "remove",
      this._options.stepperActive
    );
  }
  _toggleCompleted(t) {
    const e = d.find(
      `${Es}`,
      this._element
    );
    e[t].classList.add("!bg-success-100"), e[t].classList.add("!text-success-700"), e[t].classList.remove("!bg-danger-100"), e[t].classList.remove("!text-danger-700"), this._toggleStepClass(t, "add", this._options.stepperCompleted), this._toggleStepClass(t, "remove", this._options.stepperInvalid);
  }
  _hideInactiveSteps() {
    this._steps.forEach((t) => {
      t.getAttribute("data-te") || this._hideElement(d.findOne(`${st}`, t));
    });
  }
  _setHeight(t) {
    const e = d.findOne(`${st}`, t), i = getComputedStyle(e), n = d.findOne(`${G}`, t), o = getComputedStyle(n), r = e.offsetHeight + parseFloat(i.marginTop) + parseFloat(i.marginBottom), a = n.offsetHeight + parseFloat(o.marginTop) + parseFloat(o.marginBottom);
    this._element.style.height = `${a + r}px`;
  }
  _hideElement(t) {
    !d.parents(
      t,
      `${jt}`
    )[0].getAttribute("data-te") && this._currentView !== xt || (t.classList.add("!my-0"), t.classList.add("!py-0"), t.classList.add("!h-0"));
  }
  _showElement(t) {
    this._currentView === xt ? (t.classList.remove("!my-0"), t.classList.remove("!py-0"), t.classList.remove("!h-0")) : t.style.display = "block";
  }
  _animateHorizontalStep(t) {
    const e = t > this._activeStepIndex, i = d.findOne(
      `${st}`,
      this._steps[t]
    ), n = d.findOne(
      `${st}`,
      this.activeStep
    );
    let o, r;
    this._steps.forEach((u, _) => {
      const f = d.findOne(`${st}`, u);
      _ !== t && _ !== this._activeStepIndex && this._hideElement(f);
    });
    const a = "translate-x-[150%]", l = "-translate-x-[150%]", p = "translate-0";
    e ? (r = l, o = p, i.classList.remove("translate-x-[150%]"), i.classList.remove("-translate-x-[150%]")) : (r = a, o = p, i.classList.remove("-translate-x-[150%]"), i.classList.remove("translate-x-[150%]")), n.classList.add(r), i.classList.add(o), this._setHeight(this._steps[t]);
  }
  _animateVerticalStep(t) {
    const e = d.findOne(
      `${st}`,
      this._steps[t]
    ), i = d.findOne(
      `${st}`,
      this.activeStep
    );
    this._hideElement(i), this._showElement(e);
  }
  static getInstance(t) {
    return y.getData(t, Xs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var sl = "data-te-input-state-active";
var Cs = "data-te-input-selected";
var nl = "data-te-input-multiple-active";
var ol = "[data-te-form-check-input]";
var rl = class {
  constructor(t, e, i, n, o, r, a, l, p, u, _) {
    this.id = t, this.nativeOption = e, this.multiple = i, this.value = n, this.label = o, this.selected = r, this.disabled = a, this.hidden = l, this.secondaryText = p, this.groupId = u, this.icon = _, this.node = null, this.active = false;
  }
  select() {
    this.multiple ? this._selectMultiple() : this._selectSingle();
  }
  _selectSingle() {
    this.selected || (this.node.setAttribute(Cs, ""), this.node.setAttribute("aria-selected", true), this.selected = true, this.nativeOption && (this.nativeOption.selected = true));
  }
  _selectMultiple() {
    if (!this.selected) {
      const t = d.findOne(
        ol,
        this.node
      );
      t.checked = true, this.node.setAttribute(Cs, ""), this.node.setAttribute("aria-selected", true), this.selected = true, this.nativeOption && (this.nativeOption.selected = true);
    }
  }
  deselect() {
    this.multiple ? this._deselectMultiple() : this._deselectSingle();
  }
  _deselectSingle() {
    this.selected && (this.node.removeAttribute(Cs), this.node.setAttribute("aria-selected", false), this.selected = false, this.nativeOption && (this.nativeOption.selected = false));
  }
  _deselectMultiple() {
    if (this.selected) {
      const t = d.findOne(
        ol,
        this.node
      );
      t.checked = false, this.node.removeAttribute(Cs), this.node.setAttribute("aria-selected", false), this.selected = false, this.nativeOption && (this.nativeOption.selected = false);
    }
  }
  setNode(t) {
    this.node = t;
  }
  setActiveStyles() {
    if (!this.active) {
      if (this.multiple) {
        this.node.setAttribute(nl, "");
        return;
      }
      this.active = true, this.node.setAttribute(sl, "");
    }
  }
  removeActiveStyles() {
    this.active && (this.active = false, this.node.removeAttribute(sl)), this.multiple && this.node.removeAttribute(nl);
  }
};
var Tg = class {
  constructor(t = false) {
    this._multiple = t, this._selections = [];
  }
  select(t) {
    this._multiple ? this._selections.push(t) : this._selections = [t];
  }
  deselect(t) {
    if (this._multiple) {
      const e = this._selections.findIndex(
        (i) => t === i
      );
      this._selections.splice(e, 1);
    } else
      this._selections = [];
  }
  clear() {
    this._selections = [];
  }
  get selection() {
    return this._selections[0];
  }
  get selections() {
    return this._selections;
  }
  get label() {
    return this._selections[0] && this.selection.label;
  }
  get labels() {
    return this._selections.map((t) => t.label).join(", ");
  }
  get value() {
    return this.selections[0] && this.selection.value;
  }
  get values() {
    return this._selections.map((t) => t.value);
  }
};
function Vo(s) {
  return s.filter((t) => !t.disabled).every((t) => t.selected);
}
var Eg = "data-te-select-form-outline-ref";
var Cg = "data-te-select-wrapper-ref";
var Ag = "data-te-select-input-ref";
var yg = "data-te-select-clear-btn-ref";
var wg = "data-te-select-dropdown-container-ref";
var kg = "data-te-select-dropdown-ref";
var xg = "data-te-select-options-wrapper-ref";
var Og = "data-te-select-options-list-ref";
var Sg = "data-te-select-input-filter-ref";
var Jc = "data-te-select-option-ref";
var Ig = "data-te-select-option-all-ref";
var Dg = "data-te-select-option-text-ref";
var $g = "data-te-form-check-input";
var Lg = "data-te-select-option-group-ref";
var Ng = "data-te-select-option-group-label-ref";
var th = "data-te-select-selected";
var Mg = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`;
var Rg = (s) => {
  s.code === "Tab" || s.code === "Esc" || s.preventDefault();
};
function As(s, t, e, i, n) {
  t.selectSize === "default" && h.addClass(s, e), t.selectSize === "sm" && h.addClass(s, i), t.selectSize === "lg" && h.addClass(s, n);
}
function Pg(s, t, e, i, n) {
  const o = document.createElement("div");
  o.setAttribute("id", s), o.setAttribute(Cg, "");
  const r = $("div");
  r.setAttribute(Eg, ""), h.addClass(r, i.formOutline);
  const a = $("input"), l = t.selectFilter ? "combobox" : "listbox", p = t.multiple ? "true" : "false", u = t.disabled ? "true" : "false";
  a.setAttribute(Ag, ""), h.addClass(a, i.selectInput), As(
    a,
    t,
    i.selectInputSizeDefault,
    i.selectInputSizeSm,
    i.selectInputSizeLg
  ), t.selectFormWhite && h.addClass(a, i.selectInputWhite), a.setAttribute("type", "text"), a.setAttribute("role", l), a.setAttribute("aria-multiselectable", p), a.setAttribute("aria-disabled", u), a.setAttribute("aria-haspopup", "true"), a.setAttribute("aria-expanded", false), a.name = n, t.tabIndex && a.setAttribute("tabIndex", t.tabIndex), t.disabled && a.setAttribute("disabled", ""), t.selectPlaceholder !== "" && a.setAttribute("placeholder", t.selectPlaceholder), t.selectValidation ? (h.addStyle(a, {
    "pointer-events": "none",
    "caret-color": "transparent"
  }), h.addStyle(r, { cursor: "pointer" })) : a.setAttribute("readonly", "true"), t.selectValidation && (a.setAttribute("required", "true"), a.setAttribute("aria-required", "true"), a.addEventListener("keydown", Rg));
  const _ = $("div");
  h.addClass(_, i.selectValidationValid);
  const f = document.createTextNode(
    `${t.selectValidFeedback}`
  );
  _.appendChild(f);
  const g = $("div");
  h.addClass(g, i.selectValidationInvalid);
  const m = document.createTextNode(
    `${t.selectInvalidFeedback}`
  );
  g.appendChild(m);
  const b = $("span");
  b.setAttribute(yg, ""), h.addClass(b, i.selectClearBtn), As(
    b,
    t,
    i.selectClearBtnDefault,
    i.selectClearBtnSm,
    i.selectClearBtnLg
  ), t.selectFormWhite && h.addClass(b, i.selectClearBtnWhite);
  const v = document.createTextNode("✕");
  b.appendChild(v), b.setAttribute("tabindex", "0");
  const C = $("span");
  return h.addClass(C, i.selectArrow), As(
    C,
    t,
    i.selectArrowDefault,
    i.selectArrowSm,
    i.selectArrowLg
  ), t.selectFormWhite && h.addClass(C, i.selectArrowWhite), C.innerHTML = Mg, r.appendChild(a), e && (h.addClass(e, i.selectLabel), As(
    e,
    t,
    i.selectLabelSizeDefault,
    i.selectLabelSizeSm,
    i.selectLabelSizeLg
  ), t.selectFormWhite && h.addClass(e, i.selectLabelWhite), r.appendChild(e)), t.selectValidation && (r.appendChild(_), r.appendChild(g)), t.selectClearButton && r.appendChild(b), r.appendChild(C), o.appendChild(r), o;
}
function al(s, t, e, i, n, o, r, a) {
  const l = document.createElement("div");
  l.setAttribute(wg, ""), h.addClass(l, a.selectDropdownContainer), l.setAttribute("id", `${s}`), l.style.width = `${e}px`;
  const p = document.createElement("div");
  p.setAttribute("tabindex", 0), p.setAttribute(kg, ""), h.addClass(p, a.dropdown);
  const u = $("div");
  u.setAttribute(xg, ""), h.addClass(u, a.optionsWrapper), h.addClass(u, a.optionsWrapperScrollbar), u.style.maxHeight = `${i}px`;
  const _ = eh(
    o,
    n,
    t,
    a
  );
  return u.appendChild(_), t.selectFilter && p.appendChild(
    Bg(t.selectSearchPlaceholder, a)
  ), p.appendChild(u), r && p.appendChild(r), l.appendChild(p), l;
}
function eh(s, t, e, i) {
  const n = $("div");
  n.setAttribute(Og, ""), h.addClass(n, i.optionsList);
  let o;
  return e.multiple ? o = Vg(
    s,
    t,
    e,
    i
  ) : o = Hg(s, e, i), o.forEach((r) => {
    n.appendChild(r);
  }), n;
}
function Bg(s, t) {
  const e = $("div");
  h.addClass(e, t.inputGroup);
  const i = $("input");
  return i.setAttribute(Sg, ""), h.addClass(i, t.selectFilterInput), i.placeholder = s, i.setAttribute("role", "searchbox"), i.setAttribute("type", "text"), e.appendChild(i), e;
}
function Hg(s, t, e) {
  return ih(s, t, e);
}
function Vg(s, t, e, i) {
  let n = null;
  e.selectAll && (n = Wg(
    t,
    s,
    e,
    i
  ));
  const o = ih(s, e, i);
  return n ? [n, ...o] : o;
}
function ih(s, t, e) {
  const i = [];
  return s.forEach((n) => {
    if (Object.prototype.hasOwnProperty.call(
      n,
      "options"
    )) {
      const r = Kg(n, t, e);
      i.push(r);
    } else
      i.push(sh(n, t, e));
  }), i;
}
function Wg(s, t, e, i) {
  const n = Vo(t), o = $("div");
  return o.setAttribute(Jc, ""), h.addClass(o, i.selectOption), o.setAttribute(Ig, ""), h.addStyle(o, {
    height: `${e.selectOptionHeight}px`
  }), o.setAttribute("role", "option"), o.setAttribute("aria-selected", n), n && o.setAttribute(th, ""), o.appendChild(nh(s, e, i)), s.setNode(o), o;
}
function sh(s, t, e) {
  if (s.node)
    return s.node;
  const i = $("div");
  return i.setAttribute(Jc, ""), h.addClass(i, e.selectOption), h.addStyle(i, {
    height: `${t.selectOptionHeight}px`
  }), h.setDataAttribute(i, "id", s.id), i.setAttribute("role", "option"), i.setAttribute("aria-selected", s.selected), i.setAttribute("aria-disabled", s.disabled), s.selected && i.setAttribute(th, ""), s.disabled && i.setAttribute("data-te-select-option-disabled", true), s.hidden && h.addClass(i, "hidden"), i.appendChild(nh(s, t, e)), s.icon && i.appendChild(jg(s, e)), s.setNode(i), i;
}
function nh(s, t, e) {
  const i = $("span");
  i.setAttribute(Dg, ""), h.addClass(i, e.selectOptionText);
  const n = document.createTextNode(s.label);
  return t.multiple && i.appendChild(Yg(s, e)), i.appendChild(n), (s.secondaryText || typeof s.secondaryText == "number") && i.appendChild(
    Fg(s.secondaryText, e)
  ), i;
}
function Fg(s, t) {
  const e = $("span");
  h.addClass(e, t.selectOptionSecondaryText);
  const i = document.createTextNode(s);
  return e.appendChild(i), e;
}
function Yg(s, t) {
  const e = $("input");
  e.setAttribute("type", "checkbox"), h.addClass(e, t.formCheckInput), e.setAttribute($g, "");
  const i = $("label");
  return s.selected && e.setAttribute("checked", true), s.disabled && e.setAttribute("disabled", true), e.appendChild(i), e;
}
function jg(s, t) {
  const e = $("span"), i = $("img");
  return h.addClass(i, t.selectOptionIcon), i.src = s.icon, e.appendChild(i), e;
}
function Kg(s, t, e) {
  const i = $("div");
  i.setAttribute(Lg, ""), h.addClass(i, e.selectOptionGroup), i.setAttribute("role", "group"), i.setAttribute("id", s.id), s.hidden && h.addClass(i, "hidden");
  const n = $("label");
  return n.setAttribute(Ng, ""), h.addClass(n, e.selectOptionGroupLabel), h.addStyle(n, { height: `${t.selectOptionHeight}px` }), n.setAttribute("for", s.id), n.textContent = s.label, i.appendChild(n), s.options.forEach((o) => {
    i.appendChild(sh(o, t, e));
  }), i;
}
function zg(s, t) {
  const e = $("div");
  return e.innerHTML = s, h.addClass(e, t.selectLabel), h.addClass(e, t.selectFakeValue), e;
}
var oo = "select";
var vi = "te.select";
var ji = `.${vi}`;
var Ug = `close${ji}`;
var Xg = `open${ji}`;
var ll = `optionSelect${ji}`;
var cl = `optionDeselect${ji}`;
var Gg = `valueChange${ji}`;
var qg = "change";
var hl = "data-te-select-init";
var oh = "data-te-select-no-results-ref";
var dl = "data-te-select-open";
var q = "data-te-input-state-active";
var Kt = "data-te-input-focused";
var ro = "data-te-input-disabled";
var Zg = "data-te-select-option-group-label-ref";
var Qg = "data-te-select-option-all-ref";
var pi = "data-te-select-selected";
var Jg = "[data-te-select-label-ref]";
var ul = "[data-te-select-input-ref]";
var tb = "[data-te-select-input-filter-ref]";
var eb = "[data-te-select-dropdown-ref]";
var ib = "[data-te-select-options-wrapper-ref]";
var pl = "[data-te-select-options-list-ref]";
var sb = "[data-te-select-option-ref]";
var nb = "[data-te-select-clear-btn-ref]";
var ob = "[data-te-select-custom-content-ref]";
var rb = `[${oh}]`;
var _l = "[data-te-select-form-outline-ref]";
var ab = "[data-te-select-toggle]";
var ao = "[data-te-input-notch-ref]";
var lb = 200;
var cb = {
  selectAutoSelect: false,
  selectContainer: "body",
  selectClearButton: false,
  disabled: false,
  selectDisplayedLabels: 5,
  selectFormWhite: false,
  multiple: false,
  selectOptionsSelectedLabel: "options selected",
  selectOptionHeight: 38,
  selectAll: true,
  selectAllLabel: "Select all",
  selectSearchPlaceholder: "Search...",
  selectSize: "default",
  selectVisibleOptions: 5,
  selectFilter: false,
  selectFilterDebounce: 300,
  selectNoResultText: "No results",
  selectValidation: false,
  selectValidFeedback: "Valid",
  selectInvalidFeedback: "Invalid",
  selectPlaceholder: ""
};
var hb = {
  selectAutoSelect: "boolean",
  selectContainer: "string",
  selectClearButton: "boolean",
  disabled: "boolean",
  selectDisplayedLabels: "number",
  selectFormWhite: "boolean",
  multiple: "boolean",
  selectOptionsSelectedLabel: "string",
  selectOptionHeight: "number",
  selectAll: "boolean",
  selectAllLabel: "string",
  selectSearchPlaceholder: "string",
  selectSize: "string",
  selectVisibleOptions: "number",
  selectFilter: "boolean",
  selectFilterDebounce: "number",
  selectNoResultText: "string",
  selectValidation: "boolean",
  selectValidFeedback: "string",
  selectInvalidFeedback: "string",
  selectPlaceholder: "string"
};
var db = {
  dropdown: "relative outline-none min-w-[100px] m-0 scale-[0.8] opacity-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none data-[te-select-open]:scale-100 data-[te-select-open]:opacity-100 dark:bg-zinc-700",
  formCheckInput: "relative float-left mt-[0.15rem] mr-[8px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent",
  formOutline: "relative",
  initialized: "hidden",
  inputGroup: "flex items-center whitespace-nowrap p-2.5 text-center text-base font-normal leading-[1.6] text-gray-700 dark:bg-zinc-800 dark:text-gray-200 dark:placeholder:text-gray-200",
  noResult: "flex items-center px-4",
  optionsList: "list-none m-0 p-0",
  optionsWrapper: "overflow-y-auto",
  optionsWrapperScrollbar: "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded",
  selectArrow: "absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5",
  selectArrowWhite: "text-gray-50 peer-focus:!text-white peer-data-[te-input-focused]:!text-white",
  selectArrowDefault: "top-2",
  selectArrowLg: "top-[13px]",
  selectArrowSm: "top-1",
  selectClearBtn: "absolute top-2 right-9 text-black cursor-pointer focus:text-primary outline-none dark:text-gray-200",
  selectClearBtnWhite: "!text-gray-50",
  selectClearBtnDefault: "top-2 text-base",
  selectClearBtnLg: "top-[11px] text-base",
  selectClearBtnSm: "top-1 text-[0.8rem]",
  selectDropdownContainer: "z-[1070]",
  selectFakeValue: "transform-none hidden data-[te-input-state-active]:block",
  selectFilterInput: "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out motion-reduce:transition-none focus:border-primary focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-200",
  selectInput: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600",
  selectInputWhite: "!text-gray-50",
  selectInputSizeDefault: "py-[0.32rem] px-3 leading-[1.6]",
  selectInputSizeLg: "py-[0.32rem] px-3 leading-[2.15]",
  selectInputSizeSm: "py-[0.33rem] px-3 text-xs leading-[1.5]",
  selectLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200 data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary",
  selectLabelWhite: "!text-gray-50",
  selectLabelSizeDefault: "pt-[0.37rem] leading-[1.6] peer-focus:-translate-y-[0.9rem] peer-data-[te-input-state-active]:-translate-y-[0.9rem] data-[te-input-state-active]:-translate-y-[0.9rem]",
  selectLabelSizeLg: "pt-[0.37rem] leading-[2.15] peer-focus:-translate-y-[1.15rem] peer-data-[te-input-state-active]:-translate-y-[1.15rem] data-[te-input-state-active]:-translate-y-[1.15rem]",
  selectLabelSizeSm: "pt-[0.37rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem] peer-data-[te-input-state-active]:-translate-y-[0.75rem] data-[te-input-state-active]:-translate-y-[0.75rem]",
  selectOption: "flex flex-row items-center justify-between w-full px-4 truncate text-gray-700 bg-transparent select-none cursor-pointer data-[te-input-multiple-active]:bg-black/5 hover:[&:not([data-te-select-option-disabled])]:bg-black/5 data-[te-input-state-active]:bg-black/5 data-[te-select-option-selected]:data-[te-input-state-active]:bg-black/5 data-[te-select-selected]:data-[te-select-option-disabled]:cursor-default data-[te-select-selected]:data-[te-select-option-disabled]:text-gray-400 data-[te-select-selected]:data-[te-select-option-disabled]:bg-transparent data-[te-select-option-selected]:bg-black/[0.02] data-[te-select-option-disabled]:text-gray-400 data-[te-select-option-disabled]:cursor-default group-data-[te-select-option-group-ref]/opt:pl-7 dark:text-gray-200 dark:hover:[&:not([data-te-select-option-disabled])]:bg-white/30 dark:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-selected]:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-disabled]:text-gray-400 dark:data-[te-input-multiple-active]:bg-white/30",
  selectOptionGroup: "group/opt",
  selectOptionGroupLabel: "flex flex-row items-center w-full px-4 truncate bg-transparent text-black/50 select-none dark:text-gray-300",
  selectOptionIcon: "w-7 h-7 rounded-full",
  selectOptionSecondaryText: "block text-[0.8rem] text-gray-500 dark:text-gray-300",
  selectOptionText: "group",
  selectValidationValid: "hidden absolute -mt-3 w-auto text-sm text-green-600 cursor-pointer group-data-[te-was-validated]/validation:peer-valid:block",
  selectValidationInvalid: "hidden absolute -mt-3 w-auto text-sm text-[rgb(220,76,100)] cursor-pointer group-data-[te-was-validated]/validation:peer-invalid:block"
};
var ub = {
  dropdown: "string",
  formCheckInput: "string",
  formOutline: "string",
  initialized: "string",
  inputGroup: "string",
  noResult: "string",
  optionsList: "string",
  optionsWrapper: "string",
  optionsWrapperScrollbar: "string",
  selectArrow: "string",
  selectArrowDefault: "string",
  selectArrowLg: "string",
  selectArrowSm: "string",
  selectClearBtn: "string",
  selectClearBtnDefault: "string",
  selectClearBtnLg: "string",
  selectClearBtnSm: "string",
  selectDropdownContainer: "string",
  selectFakeValue: "string",
  selectFilterInput: "string",
  selectInput: "string",
  selectInputSizeDefault: "string",
  selectInputSizeLg: "string",
  selectInputSizeSm: "string",
  selectLabel: "string",
  selectLabelSizeDefault: "string",
  selectLabelSizeLg: "string",
  selectLabelSizeSm: "string",
  selectOption: "string",
  selectOptionGroup: "string",
  selectOptionGroupLabel: "string",
  selectOptionIcon: "string",
  selectOptionSecondaryText: "string",
  selectOptionText: "string"
};
var _r = class __r {
  constructor(t, e, i) {
    this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._config.selectPlaceholder && !this._config.multiple && this._addPlaceholderOption(), this._optionsToRender = this._getOptionsToRender(t), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._filteredOptionsList = null, this._selectionModel = new Tg(this.multiple), this._activeOptionIndex = -1, this._activeOption = null, this._wrapperId = rt("select-wrapper-"), this._dropdownContainerId = rt("select-dropdown-container-"), this._selectAllId = rt("select-all-"), this._debounceTimeoutId = null, this._dropdownHeight = this._config.selectOptionHeight * this._config.selectVisibleOptions, this._popper = null, this._input = null, this._label = d.next(this._element, Jg)[0], this._notch = null, this._fakeValue = null, this._isFakeValueActive = false, this._customContent = d.next(
      t,
      ob
    )[0], this._toggleButton = null, this._elementToggle = null, this._wrapper = null, this._inputEl = null, this._dropdownContainer = null, this._container = null, this._selectAllOption = null, this._init(), this._mutationObserver = null, this._isOpen = false, this._addMutationObserver(), this._element && y.setData(t, vi, this);
  }
  static get NAME() {
    return oo;
  }
  get filterInput() {
    return d.findOne(
      tb,
      this._dropdownContainer
    );
  }
  get dropdown() {
    return d.findOne(eb, this._dropdownContainer);
  }
  get optionsList() {
    return d.findOne(
      pl,
      this._dropdownContainer
    );
  }
  get optionsWrapper() {
    return d.findOne(
      ib,
      this._dropdownContainer
    );
  }
  get clearButton() {
    return d.findOne(nb, this._wrapper);
  }
  get options() {
    return this._filteredOptionsList ? this._filteredOptionsList : this._plainOptions;
  }
  get value() {
    return this.multiple ? this._selectionModel.values : this._selectionModel.value;
  }
  get multiple() {
    return this._config.multiple;
  }
  get hasSelectAll() {
    return this.multiple && this._config.selectAll;
  }
  get hasSelection() {
    return this._selectionModel.selection || this._selectionModel.selections.length > 0;
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...cb,
      ...e,
      ...t
    }, this._element.hasAttribute("multiple") && (t.multiple = true), this._element.hasAttribute("disabled") && (t.disabled = true), this._element.tabIndex && (t.tabIndex = this._element.getAttribute("tabIndex")), D(oo, t, hb), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...db,
      ...e,
      ...t
    }, D(oo, t, ub), t;
  }
  _addPlaceholderOption() {
    const t = new Option("", "", true, true);
    t.hidden = true, t.selected = true, this._element.prepend(t);
  }
  _getOptionsToRender(t) {
    const e = [];
    return t.childNodes.forEach((n) => {
      if (n.nodeName === "OPTGROUP") {
        const o = {
          id: rt("group-"),
          label: n.label,
          disabled: n.hasAttribute("disabled"),
          hidden: n.hasAttribute("hidden"),
          options: []
        };
        n.childNodes.forEach((a) => {
          a.nodeName === "OPTION" && o.options.push(
            this._createOptionObject(a, o)
          );
        }), e.push(o);
      } else
        n.nodeName === "OPTION" && e.push(this._createOptionObject(n));
    }), e;
  }
  _getPlainOptions(t) {
    if (!d.findOne("optgroup", this._element))
      return t;
    const i = [];
    return t.forEach((n) => {
      Object.prototype.hasOwnProperty.call(
        n,
        "options"
      ) ? n.options.forEach((r) => {
        i.push(r);
      }) : i.push(n);
    }), i;
  }
  _createOptionObject(t, e = {}) {
    const i = rt("option-"), n = e.id ? e.id : null, o = e.disabled ? e.disabled : false, r = t.selected || t.hasAttribute(pi), a = t.hasAttribute("disabled") || o, l = t.hasAttribute("hidden") || e && e.hidden, p = this.multiple, u = t.value, _ = t.label, f = h.getDataAttribute(
      t,
      "selectSecondaryText"
    ), g = h.getDataAttribute(t, "select-icon");
    return new rl(
      i,
      t,
      p,
      u,
      _,
      r,
      a,
      l,
      f,
      n,
      g
    );
  }
  _getNavigationOptions() {
    const t = this.options.filter((e) => !e.hidden);
    return this.hasSelectAll ? [this._selectAllOption, ...t] : t;
  }
  _init() {
    this._renderMaterialWrapper(), this._wrapper = d.findOne(`#${this._wrapperId}`), this._input = d.findOne(ul, this._wrapper), this._config.disabled && this._input.setAttribute(ro, "");
    const t = this._config.selectContainer;
    t === "body" ? this._container = document.body : this._container = d.findOne(t), this._initOutlineInput(), this._setDefaultSelections(), this._updateInputValue(), this._appendFakeValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._bindComponentEvents(), this.hasSelectAll && (this._selectAllOption = this._createSelectAllOption()), this._dropdownContainer = al(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    ), this._setFirstActiveOption(), this._listenToFocusChange();
  }
  _renderMaterialWrapper() {
    const t = Pg(
      this._wrapperId,
      this._config,
      this._label,
      this._classes,
      this._element.name
    );
    this._element.parentNode.insertBefore(t, this._element), h.addClass(this._element, this._classes.initialized), t.appendChild(this._element);
  }
  _initOutlineInput() {
    const t = d.findOne(
      _l,
      this._wrapper
    );
    new V(
      t,
      {
        inputFormWhite: this._config.selectFormWhite
      },
      this._classes
    ).init(), this._notch = d.findOne(ao, this._wrapper);
  }
  _bindComponentEvents() {
    this._listenToComponentKeydown(), this._listenToWrapperClick(), this._listenToClearBtnClick(), this._listenToClearBtnKeydown();
  }
  _setDefaultSelections() {
    this.options.forEach((t) => {
      t.selected && this._selectionModel.select(t);
    });
  }
  _listenToComponentKeydown() {
    c.on(this._wrapper, "keydown", this._handleKeydown.bind(this));
  }
  _handleKeydown(t) {
    this._isOpen && !this._config.selectFilter ? this._handleOpenKeydown(t) : this._handleClosedKeydown(t);
  }
  _handleOpenKeydown(t) {
    const e = t.keyCode, i = e === Fi || e === at && t.altKey || e === Pi;
    if (e === Pi && this._config.selectAutoSelect && !this.multiple && this._handleAutoSelection(this._activeOption), i) {
      this.close(), this._input.focus();
      return;
    }
    switch (e) {
      case z:
        this._setNextOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case at:
        this._setPreviousOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case We:
        this._setFirstOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case Fe:
        this._setLastOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case ct:
        t.preventDefault(), this._activeOption && (this.hasSelectAll && this._activeOptionIndex === 0 ? this._handleSelectAll() : this._handleSelection(this._activeOption));
        return;
      default:
        return;
    }
    t.preventDefault();
  }
  _handleClosedKeydown(t) {
    const e = t.keyCode;
    if (e === ct && t.preventDefault(), (e === ct || e === z && t.altKey || e === z && this.multiple) && this.open(), this.multiple)
      switch (e) {
        case z:
          this.open();
          break;
        case at:
          this.open();
          break;
        default:
          return;
      }
    else
      switch (e) {
        case z:
          this._setNextOptionActive(), this._handleSelection(this._activeOption);
          break;
        case at:
          this._setPreviousOptionActive(), this._handleSelection(this._activeOption);
          break;
        case We:
          this._setFirstOptionActive(), this._handleSelection(this._activeOption);
          break;
        case Fe:
          this._setLastOptionActive(), this._handleSelection(this._activeOption);
          break;
        default:
          return;
      }
    t.preventDefault();
  }
  _scrollToOption(t) {
    if (!t)
      return;
    let e;
    const i = this.options.filter((u) => !u.hidden);
    this.hasSelectAll ? e = i.indexOf(t) + 1 : e = i.indexOf(t);
    const n = this._getNumberOfGroupsBeforeOption(e), o = e + n, r = this.optionsWrapper, a = r.offsetHeight, l = this._config.selectOptionHeight, p = r.scrollTop;
    if (e > -1) {
      const u = o * l, _ = u + l > p + a;
      u < p ? r.scrollTop = u : _ ? r.scrollTop = u - a + l : r.scrollTop = p;
    }
  }
  _getNumberOfGroupsBeforeOption(t) {
    const e = this.options.filter((r) => !r.hidden), i = this._optionsToRender.filter((r) => !r.hidden), n = this.hasSelectAll ? t - 1 : t;
    let o = 0;
    for (let r = 0; r <= n; r++)
      e[r].groupId && i[o] && i[o].id && e[r].groupId === i[o].id && o++;
    return o;
  }
  _setNextOptionActive() {
    let t = this._activeOptionIndex + 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t += 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setPreviousOptionActive() {
    let t = this._activeOptionIndex - 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t -= 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setFirstOptionActive() {
    const e = this._getNavigationOptions();
    this._updateActiveOption(e[0], 0);
  }
  _setLastOptionActive() {
    const t = this._getNavigationOptions(), e = t.length - 1;
    this._updateActiveOption(t[e], e);
  }
  _updateActiveOption(t, e) {
    const i = this._activeOption;
    i && i.removeActiveStyles(), t.setActiveStyles(), this._activeOptionIndex = e, this._activeOption = t;
  }
  _listenToWrapperClick() {
    c.on(this._wrapper, "click", () => {
      this.toggle();
    });
  }
  _listenToClearBtnClick() {
    c.on(this.clearButton, "click", (t) => {
      t.preventDefault(), t.stopPropagation(), this._handleClear();
    });
  }
  _listenToClearBtnKeydown() {
    c.on(this.clearButton, "keydown", (t) => {
      t.keyCode === ct && (this._handleClear(), t.preventDefault(), t.stopPropagation());
    });
  }
  _handleClear() {
    if (this.multiple)
      this._selectionModel.clear(), this._deselectAllOptions(this.options), this.hasSelectAll && this._updateSelectAllState();
    else {
      const t = this._selectionModel.selection;
      this._selectionModel.clear(), t.deselect();
    }
    this._fakeValue.innerHTML = "", this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(null), this._emitNativeChangeEvent();
  }
  _listenToOptionsClick() {
    c.on(this.optionsWrapper, "click", (t) => {
      if (t.target.hasAttribute(
        Zg
      ))
        return;
      const i = t.target.nodeName === "DIV" ? t.target : d.closest(t.target, sb);
      if (i.hasAttribute(Qg)) {
        this._handleSelectAll();
        return;
      }
      const o = i.dataset.teId, r = this.options.find((a) => a.id === o);
      r && !r.disabled && this._handleSelection(r);
    });
  }
  _handleSelectAll() {
    this._selectAllOption.selected ? (this._deselectAllOptions(this.options), this._selectAllOption.deselect()) : (this._selectAllOptions(this.options), this._selectAllOption.select()), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _selectAllOptions(t) {
    t.forEach((e) => {
      !e.selected && !e.disabled && (this._selectionModel.select(e), e.select());
    });
  }
  _deselectAllOptions(t) {
    t.forEach((e) => {
      e.selected && !e.disabled && (this._selectionModel.deselect(e), e.deselect());
    });
  }
  _handleSelection(t) {
    this.multiple ? (this._handleMultiSelection(t), this.hasSelectAll && this._updateSelectAllState()) : this._handleSingleSelection(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleAutoSelection(t) {
    this._singleOptionSelect(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleSingleSelection(t) {
    this._singleOptionSelect(t), this.close(), this._input.focus();
  }
  _singleOptionSelect(t) {
    const e = this._selectionModel.selections[0];
    e && e !== t && (this._selectionModel.deselect(e), e.deselect(), e.node.setAttribute(pi, false), c.trigger(this._element, cl, {
      value: e.value
    })), (!e || e && t !== e) && (this._selectionModel.select(t), t.select(), t.node.setAttribute(pi, true), c.trigger(this._element, ll, {
      value: t.value
    }), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent());
  }
  _handleMultiSelection(t) {
    t.selected ? (this._selectionModel.deselect(t), t.deselect(), t.node.setAttribute(pi, false), c.trigger(this._element, cl, {
      value: t.value
    })) : (this._selectionModel.select(t), t.select(), t.node.setAttribute(pi, true), c.trigger(this._element, ll, {
      value: t.value
    })), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _emitValueChangeEvent(t) {
    c.trigger(this._element, Gg, { value: t });
  }
  _emitNativeChangeEvent() {
    c.trigger(this._element, qg);
  }
  _updateInputValue() {
    const t = this.multiple ? this._selectionModel.labels : this._selectionModel.label;
    let e;
    this.multiple && this._config.selectDisplayedLabels !== -1 && this._selectionModel.selections.length > this._config.selectDisplayedLabels ? e = `${this._selectionModel.selections.length} ${this._config.selectOptionsSelectedLabel}` : e = t, !this.multiple && !this._isSelectionValid(this._selectionModel.selection) ? this._input.value = "" : this._isLabelEmpty(this._selectionModel.selection) ? this._input.value = " " : e ? this._input.value = e : this.multiple || !this._optionsToRender[0] ? this._input.value = "" : this._input.value = this._optionsToRender[0].label;
  }
  _isSelectionValid(t) {
    return !(t && (t.disabled || t.value === ""));
  }
  _isLabelEmpty(t) {
    return !!(t && t.label === "");
  }
  _appendFakeValue() {
    if (!this._selectionModel.selection || this._selectionModel._multiple)
      return;
    const t = this._selectionModel.selection.label;
    this._fakeValue = zg(t, this._classes), d.findOne(
      _l,
      this._wrapper
    ).appendChild(this._fakeValue);
  }
  _updateLabelPosition() {
    const t = this._element.hasAttribute(hl), e = this._input.value !== "";
    this._label && (t && (e || this._isOpen || this._isFakeValueActive) ? (this._label.setAttribute(q, ""), this._notch.setAttribute(q, "")) : (this._label.removeAttribute(q), this._notch.removeAttribute(q, "")));
  }
  _updateLabelPositionWhileClosing() {
    this._label && (this._input.value !== "" || this._isFakeValueActive ? (this._label.setAttribute(q, ""), this._notch.setAttribute(q, "")) : (this._label.removeAttribute(q), this._notch.removeAttribute(q)));
  }
  _updateFakeLabelPosition() {
    this._fakeValue && (this._input.value === "" && this._fakeValue.innerHTML !== "" && !this._config.selectPlaceholder ? (this._isFakeValueActive = true, this._fakeValue.setAttribute(q, "")) : (this._isFakeValueActive = false, this._fakeValue.removeAttribute(q)));
  }
  _updateClearButtonVisibility() {
    if (!this.clearButton)
      return;
    this._selectionModel.selection || this._selectionModel.selections.length > 0 ? h.addStyle(this.clearButton, { display: "block" }) : h.addStyle(this.clearButton, { display: "none" });
  }
  _updateSelectAllState() {
    const t = this._selectAllOption.selected, e = Vo(this.options);
    !e && t ? this._selectAllOption.deselect() : e && !t && this._selectAllOption.select();
  }
  toggle() {
    this._isOpen ? this.close() : this.open();
  }
  open() {
    const t = this._config.disabled, e = c.trigger(this._element, Xg);
    this._isOpen || t || e.defaultPrevented || (this._openDropdown(), this._updateDropdownWidth(), this._setFirstActiveOption(), this._scrollToOption(this._activeOption), this._config.selectFilter && (setTimeout(() => {
      this.filterInput.focus();
    }, 0), this._listenToSelectSearch(), this._listenToDropdownKeydown()), this._listenToOptionsClick(), this._listenToOutsideClick(), this._listenToWindowResize(), this._isOpen = true, this._updateLabelPosition(), this._setInputActiveStyles());
  }
  _openDropdown() {
    this._popper = Ce(this._input, this._dropdownContainer, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 1]
          }
        }
      ]
    }), this._container.appendChild(this._dropdownContainer), setTimeout(() => {
      this.dropdown.setAttribute(dl, "");
    }, 0);
  }
  _updateDropdownWidth() {
    const t = this._input.offsetWidth;
    h.addStyle(this._dropdownContainer, { width: `${t}px` });
  }
  _setFirstActiveOption() {
    const t = this._getNavigationOptions(), e = this._activeOption;
    e && e.removeActiveStyles();
    const i = this.multiple ? this._selectionModel.selections[0] : this._selectionModel.selection;
    i ? (this._activeOption = i, i.setActiveStyles(), this._activeOptionIndex = t.findIndex(
      (n) => n === i
    )) : (this._activeOption = null, this._activeOptionIndex = -1);
  }
  _setInputActiveStyles() {
    this._input.setAttribute(Kt, ""), d.findOne(ao, this._wrapper).setAttribute(
      Kt,
      ""
    );
  }
  _listenToWindowResize() {
    c.on(window, "resize", this._handleWindowResize.bind(this));
  }
  _handleWindowResize() {
    this._dropdownContainer && this._updateDropdownWidth();
  }
  _listenToSelectSearch() {
    this.filterInput.addEventListener("input", (t) => {
      const e = t.target.value, i = this._config.selectFilterDebounce;
      this._debounceFilter(e, i);
    });
  }
  _debounceFilter(t, e) {
    this._debounceTimeoutId && clearTimeout(this._debounceTimeoutId), this._debounceTimeoutId = setTimeout(() => {
      this._filterOptions(t);
    }, e);
  }
  _filterOptions(t) {
    const e = [];
    this._optionsToRender.forEach((o) => {
      const r = Object.prototype.hasOwnProperty.call(
        o,
        "options"
      ), a = !r && o.label.toLowerCase().includes(t.toLowerCase()), l = {};
      r && (l.label = o.label, l.options = this._filter(t, o.options), l.options.length > 0 && e.push(l)), a && e.push(o);
    });
    const i = this._config.selectNoResultText !== "", n = e.length !== 0;
    if (n)
      this._updateOptionsListTemplate(e), this._popper.forceUpdate(), this._filteredOptionsList = this._getPlainOptions(e), this.hasSelectAll && this._updateSelectAllState(), this._setFirstActiveOption();
    else if (!n && i) {
      const o = this._getNoResultTemplate();
      this.optionsWrapper.innerHTML = o;
    }
  }
  _updateOptionsListTemplate(t) {
    const e = d.findOne(pl, this._dropdownContainer) || d.findOne(rb, this._dropdownContainer), i = eh(
      t,
      this._selectAllOption,
      this._config,
      this._classes
    );
    this.optionsWrapper.removeChild(e), this.optionsWrapper.appendChild(i);
  }
  _getNoResultTemplate() {
    return `<div class="${this._classes.noResult}" ${oh} style="height: ${this._config.selectOptionHeight}px">${this._config.selectNoResultText}</div>`;
  }
  _filter(t, e) {
    const i = t.toLowerCase();
    return e.filter(
      (n) => n.label.toLowerCase().includes(i)
    );
  }
  _listenToDropdownKeydown() {
    c.on(
      this.dropdown,
      "keydown",
      this._handleOpenKeydown.bind(this)
    );
  }
  _listenToOutsideClick() {
    this._outsideClick = this._handleOutSideClick.bind(this), c.on(document, "click", this._outsideClick);
  }
  _listenToFocusChange(t = true) {
    if (t === false) {
      c.off(
        this._input,
        "focus",
        () => this._notch.setAttribute(Kt, "")
      ), c.off(
        this._input,
        "blur",
        () => this._notch.removeAttribute(Kt)
      );
      return;
    }
    c.on(
      this._input,
      "focus",
      () => this._notch.setAttribute(Kt, "")
    ), c.on(
      this._input,
      "blur",
      () => this._notch.removeAttribute(Kt)
    );
  }
  _handleOutSideClick(t) {
    const e = this._wrapper && this._wrapper.contains(t.target), i = t.target === this._dropdownContainer, n = this._dropdownContainer && this._dropdownContainer.contains(t.target);
    let o;
    this._toggleButton || (this._elementToggle = d.find(ab)), this._elementToggle && this._elementToggle.forEach((r) => {
      const a = h.getDataAttribute(
        r,
        "select-toggle"
      );
      (a === this._element.id || this._element.classList.contains(a)) && (this._toggleButton = r, o = this._toggleButton.contains(t.target));
    }), !e && !i && !n && !o && this.close();
  }
  close() {
    const t = c.trigger(this._element, Ug);
    !this._isOpen || t.defaultPrevented || (this._config.selectFilter && this.hasSelectAll && (this._resetFilterState(), this._updateOptionsListTemplate(this._optionsToRender), this._config.multiple && this._updateSelectAllState()), this._removeDropdownEvents(), this.dropdown.removeAttribute(dl), setTimeout(() => {
      this._input.removeAttribute(Kt), this._input.blur(), d.findOne(ao, this._wrapper).removeAttribute(
        Kt
      ), this._label && !this.hasSelection && (this._label.removeAttribute(q), this._notch.setAttribute(q, ""), this._input.removeAttribute(q), this._notch.removeAttribute(q)), this._updateLabelPositionWhileClosing();
    }, 0), setTimeout(() => {
      this._container && this._dropdownContainer.parentNode === this._container && this._container.removeChild(this._dropdownContainer), this._popper.destroy(), this._isOpen = false, c.off(this.dropdown, "transitionend");
    }, lb));
  }
  _resetFilterState() {
    this.filterInput.value = "", this._filteredOptionsList = null;
  }
  _removeDropdownEvents() {
    c.off(document, "click", this._outsideClick), this._config.selectFilter && c.off(this.dropdown, "keydown"), c.off(this.optionsWrapper, "click");
  }
  _addMutationObserver() {
    this._mutationObserver = new MutationObserver(() => {
      this._wrapper && (this._updateSelections(), this._updateDisabledState());
    }), this._observeMutationObserver();
  }
  _updateSelections() {
    this._optionsToRender = this._getOptionsToRender(this._element), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._selectionModel.clear(), this._setDefaultSelections(), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this.hasSelectAll && this._updateSelectAllState();
    const t = this._config.filter && this.filterInput && this.filterInput.value;
    this._isOpen && !t ? (this._updateOptionsListTemplate(this._optionsToRender), this._setFirstActiveOption()) : this._isOpen && t ? (this._filterOptions(this.filterInput.value), this._setFirstActiveOption()) : this._dropdownContainer = al(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    );
  }
  _updateDisabledState() {
    const t = d.findOne(ul, this._wrapper);
    this._element.hasAttribute("disabled") ? (this._config.disabled = true, t.setAttribute("disabled", ""), t.setAttribute(ro, "")) : (this._config.disabled = false, t.removeAttribute("disabled"), t.removeAttribute(ro));
  }
  _observeMutationObserver() {
    this._mutationObserver && this._mutationObserver.observe(this._element, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
  }
  _disconnectMutationObserver() {
    this.mutationObserver && (this._mutationObserver.disconnect(), this._mutationObserver = null);
  }
  _createSelectAllOption() {
    const t = this._selectAllId, e = null, i = true, n = "select-all", o = this._config.selectAllLabel, r = Vo(this.options), a = false, l = false, p = null, u = null, _ = null;
    return new rl(
      t,
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      p,
      u,
      _
    );
  }
  dispose() {
    this._removeComponentEvents(), this._destroyMaterialSelect(), this._listenToFocusChange(false), y.removeData(this._element, vi);
  }
  _removeComponentEvents() {
    c.off(this.input, "click"), c.off(this.wrapper, this._handleKeydown.bind(this)), c.off(this.clearButton, "click"), c.off(this.clearButton, "keydown"), c.off(window, "resize", this._handleWindowResize.bind(this));
  }
  _destroyMaterialSelect() {
    this._isOpen && this.close(), this._destroyMaterialTemplate();
  }
  _destroyMaterialTemplate() {
    const t = this._wrapper.parentNode, e = d.find("label", this._wrapper);
    t.appendChild(this._element), e.forEach((i) => {
      t.appendChild(i);
    }), e.forEach((i) => {
      i.removeAttribute(q);
    }), h.removeClass(this._element, this._classes.initialized), this._element.removeAttribute(hl), t.removeChild(this._wrapper);
  }
  setValue(t) {
    this.options.filter((i) => i.selected).forEach((i) => i.nativeOption.selected = false), Array.isArray(t) ? t.forEach((i) => {
      this._selectByValue(i);
    }) : this._selectByValue(t), this._updateSelections();
  }
  _selectByValue(t) {
    const e = this.options.find(
      (i) => i.value === t
    );
    return e ? (e.nativeOption.selected = true, true) : false;
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, vi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new __r(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, vi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var pb = ({ inputID: s, labelText: t }, e) => `<div data-te-chips-input-wrapper data-te-input-wrapper-init class="${e.chipsInputWrapper}">
      <input
          type="text"
          class="${e.chipsInput}"
          id="${s}"
          placeholder="Example label" />
        <label
          for="${s}"
          class="${e.chipsLabel}"
          >${t}
        </label>
      </div>
    </div>`;
var _b = ({ text: s, iconSVG: t }, e) => `<div data-te-chip-init data-te-ripple-init class="${e.chipElement}">
    <span data-te-chip-text>${s}</span> 
      <span data-te-chip-close class="${e.chipCloseIcon}">
        ${t}
      </span>
  </div>`;
var Gs = "chip";
var fb = `te.${Gs}`;
var rh = "data-te-chip-close";
var lo = `[${rh}]`;
var mb = "delete.te.chips";
var gb = "select.te.chip";
var bb = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>';
var vb = {
  text: "string",
  closeIcon: "boolean",
  img: "object",
  iconSVG: "string"
};
var Tb = {
  text: "",
  closeIcon: false,
  img: { path: "", alt: "" },
  iconSVG: bb
};
var Eb = {
  icon: "float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:text-[#8b8b8b] transition-all duration-200 ease-in-out",
  chipElement: "flex justify-between items-center h-[32px] leading-loose py-[5px] px-[12px] mr-4 my-[5px] text-[13px] font-normal text-[#4f4f4f] cursor-pointer bg-[#eceff1] dark:text-white dark:bg-neutral-600 rounded-[16px] transition-[opacity] duration-300 ease-linear [word-wrap: break-word] shadow-none normal-case hover:!shadow-none active:bg-[#cacfd1] inline-block font-medium leading-normal text-[#4f4f4f] text-center no-underline align-middle cursor-pointer select-none border-[.125rem] border-solid border-transparent py-1.5 px-3 text-xs rounded",
  chipCloseIcon: "w-4 float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:fill-[#8b8b8b] dark:fill-gray-400 dark:hover:fill-gray-100 transition-all duration-200 ease-in-out"
};
var Cb = {
  icon: "string",
  chipElement: "string",
  chipCloseIcon: "string"
};
var _i = class {
  constructor(t, e = {}, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i);
  }
  // Getters
  static get NAME() {
    return Gs;
  }
  // Public
  init() {
    this._appendCloseIcon(), this._handleDelete(), this._handleTextChip(), this._handleClickOnChip();
  }
  dispose() {
    this._element = null, this._options = null, c.off(this._element, "click");
  }
  appendChip() {
    const { text: t, closeIcon: e, iconSVG: i } = this._options;
    return _b({ text: t, closeIcon: e, iconSVG: i }, this._classes);
  }
  // Private
  _appendCloseIcon(t = this._element) {
    if (!(d.find(lo, this._element).length > 0) && this._options.closeIcon) {
      const e = $("span");
      e.classList = this._classes.icon, e.setAttribute(rh), e.innerHTML = this._options.iconSVG, t.insertAdjacentElement("beforeend", e);
    }
  }
  _handleClickOnChip() {
    c.on(this._element, "click", (t) => {
      const { textContent: e } = t.target, i = {};
      i.tag = e.trim(), c.trigger(gb, { event: t, obj: i });
    });
  }
  _handleDelete() {
    d.find(
      lo,
      this._element
    ).length !== 0 && c.on(this._element, "click", lo, () => {
      c.trigger(this._element, mb), this._element.remove();
    });
  }
  _handleTextChip() {
    this._element.innerText === "" && (this._element.innerText = this._options.text);
  }
  _getConfig(t) {
    const e = {
      ...Tb,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(Gs, e, vb), e;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Eb,
      ...e,
      ...t
    }, D(Gs, t, Cb), t;
  }
  static getInstance(t) {
    return y.getData(t, fb);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Li = "chips";
var Ki = `data-te-${Li}`;
var fl = `te.${Li}`;
var Ab = `${Ki}-input-init`;
var mt = `${Ki}-active`;
var ml = `${Ki}-initial`;
var ah = `${Ki}-placeholder`;
var yb = `${Ki}-input-wrapper`;
var Wo = "data-te-chip-init";
var lh = "data-te-chip-close";
var ch = "data-te-chip-text";
var wb = `[${mt}]`;
var Fo = `[${Wo}]`;
var kb = `${Fo}${wb}`;
var co = `[${lh}]`;
var xb = `[${yb}]`;
var Ob = `[${ch}]`;
var Sb = `[${ah}]`;
var Ib = "data-te-input-notch-leading-ref";
var Db = "data-te-input-notch-middle-ref";
var $b = `[${Ib}]`;
var Lb = `[${Db}]`;
var Se = "data-te-input-state-active";
var ho = "[data-te-input-notch-ref]";
var Nb = "add.te.chips";
var Mb = "arrowDown.te.chips";
var Rb = "arrowLeft.te.chips";
var Pb = "arrowRight.te.chips";
var Bb = "arrowUp.te.chips";
var gl = "delete.te.chips";
var bl = "select.te.chips";
var Hb = {
  inputID: "string",
  parentSelector: "string",
  initialValues: "array",
  editable: "boolean",
  labelText: "string",
  inputClasses: "object",
  inputOptions: "object"
};
var Vb = {
  inputID: rt("chips-input-"),
  parentSelector: "",
  initialValues: [{ tag: "init1" }, { tag: "init2" }],
  editable: false,
  labelText: "Example label",
  inputClasses: {},
  inputOptions: {}
};
var Wb = {
  opacity: "opacity-0",
  inputWrapperPadding: "p-[5px]",
  transition: "transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  contentEditable: "outline-none !border-[3px] !border-solid !border-[#b2b3b4]",
  chipsInputWrapper: "relative flex items-center flex-wrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  chipsInput: "peer block min-h-[auto] w-[150px] rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",
  chipsLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200"
};
var Fb = {
  opacity: "string",
  inputWrapperPadding: "string",
  transition: "string",
  contentEditable: "string",
  chipsInputWrapper: "string",
  chipsInput: "string",
  chipsLabel: "string"
};
var GC = class extends _i {
  constructor(e, i = {}, n) {
    super(e, i);
    yt(this, "_handleBlurInput", ({ target: e2 }) => {
      e2.value.length > 0 && this._handleCreateChip(e2, e2.value), this.allChips.length > 0 ? (e2.setAttribute(mt, ""), this.input.setAttribute(Se, ""), d.findOne(
        ho,
        this.input.parentNode
      ).setAttribute(Se, ""), this.chipsInputWrapper.classList.add(
        ...this._classes.inputWrapperPadding.split(" ")
      )) : (e2.removeAttribute(mt), this.input.removeAttribute(Se), d.findOne(
        ho,
        this.input.parentNode
      ).removeAttribute(Se), this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      )), this.allChips.forEach((i2) => i2.removeAttribute(mt));
    });
    this._element = e, this._inputInstance = null, this._element && y.setData(e, fl, this), this._options = this._getConfig(i), this._classes = this._getClasses(n), this.numberClicks = 0, this.init();
  }
  // Getters
  static get NAME() {
    return Li;
  }
  get activeChip() {
    return d.findOne(kb, this._element);
  }
  get input() {
    return d.findOne("input", this._element);
  }
  get allChips() {
    return d.find(Fo, this._element);
  }
  get chipsInputWrapper() {
    return d.findOne(xb, this._element);
  }
  // Public
  init() {
    this._setChipsClass(), this._appendInputToElement(ah), this._handleInitialValue(), this._handleInputText(), this._handleKeyboard(), this._handleChipsOnSelect(), this._handleEditable(), this._handleChipsFocus(), this._handleClicksOnChips(), this._inputInstance._getLabelWidth(), this._inputInstance._applyNotch();
  }
  dispose() {
    this._element = null, this._options = null;
  }
  // Private
  _getNotchData() {
    this._notchMiddle = d.findOne(
      Lb,
      this._element
    ), this._notchLeading = d.findOne(
      $b,
      this._element
    );
  }
  _setChipsClass() {
    this._element.setAttribute(Ab, "");
  }
  _handleDeleteEvents(e) {
    const [i] = this.allChips.slice(-1);
    if (this.activeChip === null)
      i.remove(), this._handleEvents(e, gl);
    else {
      const n = this.allChips.findIndex((a) => a === this.activeChip), o = this._handleActiveChipAfterRemove(n), r = [];
      if (this.activeChip === null)
        return;
      this.activeChip.remove(), this._handleEvents(e, gl), this.numberClicks = n, o.setAttribute(mt, ""), this.allChips.forEach((a) => {
        a.hasAttribute(mt) && (r.push(a), r.length > 1 && this.allChips.forEach((l) => l.remove()));
      });
    }
  }
  _handleUpEvents(e) {
    this.numberClicks += 1, this.numberClicks === this.allChips.length + 1 && (this.numberClicks = 0), this._handleRightKeyboardArrow(this.numberClicks), this._handleEvents(e, Pb), this._handleEvents(e, Bb);
  }
  _handleDownEvents(e) {
    this.numberClicks -= 1, this.numberClicks <= 0 && (this.numberClicks = this.allChips.length), this._handleLeftKeyboardArrow(this.numberClicks), this._handleEvents(e, Rb), this._handleEvents(e, Mb);
  }
  _keyboardEvents(e) {
    const { target: i, keyCode: n, ctrlKey: o } = e;
    i.value.length > 0 || this.allChips.length === 0 || (n === Nf || n === Mf ? this._handleDeleteEvents(e) : n === Ve || n === at ? this._handleUpEvents(e) : n === He || n === z ? this._handleDownEvents(e) : n === 65 && o && this._handleAddActiveClass());
  }
  _handleKeyboard() {
    c.on(
      this.input,
      "keydown",
      (e) => this._keyboardEvents(e)
    );
  }
  _handleEditable() {
    const { editable: e } = this._options;
    e && this.allChips.forEach((i) => {
      c.on(i, "dblclick", (n) => {
        const o = d.findOne(co, i);
        i.classList.add(...this._classes.contentEditable.split(" ")), i.contentEditable = true, i.focus(), setTimeout(() => {
          h.addStyle(o, { display: "none" });
        }, 200), o.classList.add(...this._classes.opacity.split(" ")), n.target.textContent, c.trigger(i, bl, {
          event: n,
          allChips: this.allChips
        });
      }), c.on(document, "click", ({ target: n }) => {
        const o = d.findOne(co, i), r = d.findOne(Ob, i), a = n === i, l = i && i.contains(n);
        !a && !l && (i.contentEditable = false, i.classList.remove(...this._classes.contentEditable.split(" ")), r.textContent !== "" && setTimeout(() => {
          h.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
        }, 160)), r.textContent === "" && (setTimeout(() => {
          i.classList.add(...this._classes.opacity.split(" "));
        }, 200), setTimeout(() => {
          i.remove();
        }, 300));
      });
    });
  }
  _handleRemoveActiveClass() {
    this.allChips.forEach((e) => e.removeAttribute(mt));
  }
  _handleAddActiveClass() {
    this.allChips.forEach((e) => e.setAttribute(mt, ""));
  }
  _handleRightKeyboardArrow(e) {
    this._handleRemoveActiveClass(), e === 0 && (e = 1), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleLeftKeyboardArrow(e) {
    this._handleRemoveActiveClass(), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleActiveChipAfterRemove(e) {
    const i = e === 0 ? 1 : e - 1;
    return this.allChips[i];
  }
  _handleClicksOnChips() {
    c.on(this._element, "click", () => {
      this.allChips.length === 0 && (this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      ), this.input.removeAttribute(mt));
    });
  }
  _handleTextContent() {
    const e = [];
    return this.allChips.forEach((i) => e.push({ tag: i.textContent.trim() })), e;
  }
  _handleEvents(e, i) {
    const n = this._handleTextContent(), o = this.allChips.filter(
      (r) => r.hasAttribute(mt) && r
    );
    c.trigger(this._element, i, {
      event: e,
      allChips: this.allChips,
      arrOfObjects: n,
      active: o,
      activeObj: {
        tag: o.length <= 0 ? "" : o[0].textContent.trim()
      }
    });
  }
  _handleChipsFocus() {
    c.on(this._element, "click", ({ target: { attributes: e } }) => {
      const i = [...e];
      i.includes(Wo) || i.includes(lh) || i.includes(ch) || this.input.focus();
    });
  }
  _handleInitialValue() {
    if (this._appendInputToElement(ml), this._element.hasAttribute(ml)) {
      const { initialValues: e } = this._options;
      e.forEach(
        ({ tag: i }) => this._handleCreateChip(this.input, i)
      ), d.findOne(
        ho,
        this.input.parentNode
      ).setAttribute(Se, ""), this.input.setAttribute(mt, ""), this.input.setAttribute(Se, "");
    }
    this.allChips.length > 0 && (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    ));
  }
  _handleKeysInputToElement(e) {
    const { keyCode: i, target: n } = e;
    if (n.hasAttribute(Wo)) {
      const o = d.findOne(co, n);
      i === ct && (n.contentEditable = false, n.classList.remove(...this._classes.contentEditable.split(" ")), n.textContent !== "" ? setTimeout(() => {
        h.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
      }, 160) : n.textContent === "" && (setTimeout(() => {
        n.classList.add(...this._classes.opacity.split(" "));
      }, 200), setTimeout(() => {
        n.remove();
      }, 300)));
      return;
    }
    if (i === ct) {
      if (n.value === "")
        return;
      this._handleCreateChip(n, n.value), this._handleRemoveActiveClass(), this.numberClicks = this.allChips.length + 1, this._handleEvents(e, Nb);
    }
    this.allChips.length > 0 ? (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    )) : this.chipsInputWrapper.classList.remove(
      ...this._classes.inputWrapperPadding.split(" ")
    );
  }
  _handleInputText() {
    const e = d.findOne(
      Sb,
      this._element
    );
    c.on(
      this._element,
      "keyup",
      e,
      (i) => this._handleKeysInputToElement(i)
    ), c.on(this.input, "blur", (i) => this._handleBlurInput(i));
  }
  _appendInputToElement(e) {
    if (!this._element.hasAttribute(e))
      return;
    const i = pb(this._options, this._classes);
    this._element.insertAdjacentHTML("beforeend", i);
    const n = d.findOne(
      "[data-te-chips-input-wrapper]",
      this._element
    );
    this._inputInstance = new V(
      n,
      this._options.inputOptions,
      this._options.inputClasses
    );
  }
  _handleCreateChip(e, i) {
    const n = $("div"), o = _i.getInstance(n), r = new _i(o, { text: i }, this._classes);
    this._options.parentSelector !== "" ? document.querySelector(this._options.parentSelector).insertAdjacentHTML("beforeend", r.appendChip()) : e.insertAdjacentHTML("beforebegin", r.appendChip()), e.value = "", d.find(Fo).forEach((a) => {
      let l = _i.getInstance(a);
      return l || (l = new _i(a, {}, this._classes)), l.init();
    }), this._handleEditable();
  }
  _handleChipsOnSelect() {
    this.allChips.forEach((e) => {
      c.on(this._element, "click", (i) => {
        c.trigger(e, bl, {
          event: i,
          allChips: this.allChips
        });
      });
    });
  }
  _handleAddActiveClassWithKebyboard(e) {
    let i;
    this.allChips[e - 1] === void 0 ? i = this.allChips[e - 2] : i = this.allChips[e - 1], i.setAttribute(mt);
  }
  _getConfig(e) {
    const i = {
      ...Vb,
      ...h.getDataAttributes(this._element),
      ...e
    };
    return D(Li, i, Hb), i;
  }
  _getClasses(e) {
    const i = h.getDataClassAttributes(this._element);
    return e = {
      ...Wb,
      ...i,
      ...e
    }, D(Li, e, Fb), e;
  }
  static getInstance(e) {
    return y.getData(e, fl);
  }
  static getOrCreateInstance(e, i = {}) {
    return this.getInstance(e) || new this(e, typeof i == "object" ? i : null);
  }
};
var zt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
};
var Ti = {
  line: {
    options: {
      ...zt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.0)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: true,
      legend: {
        display: true
      },
      tooltips: {
        intersect: false,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: false,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bar: {
    options: {
      ...zt,
      backgroundColor: "rgb(59, 112, 202)",
      borderWidth: 0,
      responsive: true,
      legend: {
        display: true
      },
      tooltips: {
        intersect: false,
        mode: "index"
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: true,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  pie: {
    options: {
      ...zt,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: true,
      legend: {
        display: true
      }
    }
  },
  doughnut: {
    options: {
      ...zt,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: true,
      legend: {
        display: true
      }
    }
  },
  polarArea: {
    options: {
      ...zt,
      elements: {
        arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" }
      },
      responsive: true,
      legend: {
        display: true
      }
    }
  },
  radar: {
    options: {
      ...zt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: true,
      legend: {
        display: true
      }
    }
  },
  scatter: {
    options: {
      ...zt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: true,
      legend: {
        display: true
      },
      tooltips: {
        intersect: false,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: false,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bubble: {
    options: {
      ...zt,
      elements: {
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: true,
      legend: {
        display: true
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  }
};
var Yb = function(t) {
  return jb(t) && !Kb(t);
};
function jb(s) {
  return !!s && typeof s == "object";
}
function Kb(s) {
  var t = Object.prototype.toString.call(s);
  return t === "[object RegExp]" || t === "[object Date]" || Xb(s);
}
var zb = typeof Symbol == "function" && Symbol.for;
var Ub = zb ? Symbol.for("react.element") : 60103;
function Xb(s) {
  return s.$$typeof === Ub;
}
function Gb(s) {
  return Array.isArray(s) ? [] : {};
}
function Bi(s, t) {
  return t.clone !== false && t.isMergeableObject(s) ? Qe(Gb(s), s, t) : s;
}
function qb(s, t, e) {
  return s.concat(t).map(function(i) {
    return Bi(i, e);
  });
}
function Zb(s, t) {
  if (!t.customMerge)
    return Qe;
  var e = t.customMerge(s);
  return typeof e == "function" ? e : Qe;
}
function Qb(s) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(s).filter(function(t) {
    return Object.propertyIsEnumerable.call(s, t);
  }) : [];
}
function vl(s) {
  return Object.keys(s).concat(Qb(s));
}
function hh(s, t) {
  try {
    return t in s;
  } catch {
    return false;
  }
}
function Jb(s, t) {
  return hh(s, t) && !(Object.hasOwnProperty.call(s, t) && Object.propertyIsEnumerable.call(s, t));
}
function tv(s, t, e) {
  var i = {};
  return e.isMergeableObject(s) && vl(s).forEach(function(n) {
    i[n] = Bi(s[n], e);
  }), vl(t).forEach(function(n) {
    Jb(s, n) || (hh(s, n) && e.isMergeableObject(t[n]) ? i[n] = Zb(n, e)(s[n], t[n], e) : i[n] = Bi(t[n], e));
  }), i;
}
function Qe(s, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || qb, e.isMergeableObject = e.isMergeableObject || Yb, e.cloneUnlessOtherwiseSpecified = Bi;
  var i = Array.isArray(t), n = Array.isArray(s), o = i === n;
  return o ? i ? e.arrayMerge(s, t, e) : tv(s, t, e) : Bi(t, e);
}
Qe.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, n) {
    return Qe(i, n, e);
  }, {});
};
var ev = Qe;
var Yo = ev;
var Tl = "chart";
var ys = "te.chart";
var iv = "chart";
var uo = (s, t, e) => {
  const i = (n, o, r) => {
    const a = n.slice();
    return o.forEach((l, p) => {
      typeof a[p] > "u" ? a[p] = r.cloneUnlessOtherwiseSpecified(
        l,
        r
      ) : r.isMergeableObject(l) ? a[p] = Yo(n[p], l, r) : n.indexOf(l) === -1 && a.push(l);
    }), a;
  };
  return Yo(e[t], s, {
    arrayMerge: i
  });
};
var sv = {
  darkTicksColor: "#fff",
  darkLabelColor: "#fff",
  darkGridLinesColor: "#555",
  darkmodeOff: "undefined",
  darkMode: null,
  darkBgColor: "#262626",
  darkBgColorLight: "#fff",
  options: null
};
var nv = {
  darkTicksColor: "string",
  darkLabelColor: "string",
  darkGridLinesColor: "string",
  darkmodeOff: "(string|null)",
  darkMode: "(string|null)",
  darkBgColor: "string",
  darkBgColorLight: "string",
  options: "(object|null)"
};
var dh = class _dh {
  constructor(t, e, i = {}, n = {}) {
    this._waitForCharts(t, e, i, n);
  }
  async _getChartjs() {
    const {
      Chart: t,
      ArcElement: e,
      LineElement: i,
      BarElement: n,
      PointElement: o,
      BarController: r,
      BubbleController: a,
      DoughnutController: l,
      LineController: p,
      PieController: u,
      PolarAreaController: _,
      RadarController: f,
      ScatterController: g,
      CategoryScale: m,
      LinearScale: b,
      LogarithmicScale: v,
      RadialLinearScale: C,
      TimeScale: w,
      TimeSeriesScale: E,
      Decimation: T,
      Filler: A,
      Legend: k,
      Title: I,
      Tooltip: O,
      SubTitle: x
    } = await import("./chart.es-A2JTKPLE.js").then((L) => L.f);
    return t.register(
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      p,
      u,
      _,
      f,
      g,
      m,
      b,
      v,
      C,
      w,
      E,
      T,
      A,
      k,
      I,
      O,
      x
    ), t;
  }
  async _getChartDataLabels() {
    return await import("./chartjs-plugin-datalabels.es-NS6CAF6M.js");
  }
  async _waitForCharts(t, e, i = {}, n = {}) {
    if (this._Chartjs = await this._getChartjs(), this._ChartDataLabels = await this._getChartDataLabels(), this._element = t, this._data = e, this._options = i, this._type = e.type, this._canvas = null, this._chart = null, this._darkOptions = this._getDarkConfig(n), this._darkModeClassContainer = document.querySelector("html"), this._prevConfig = null, this._observer = null, this._element && (y.setData(t, ys, this), h.addClass(this._element, iv), this._chartConstructor()), this._darkOptions.darkmodeOff !== null) {
      const o = this._darkOptions.darkMode === "dark" ? "dark" : this._darkOptions.darkMode === "light" ? "light" : this.systemColorMode;
      this._handleMode(o), this._observer = new MutationObserver(this._observerCallback.bind(this)), this._observer.observe(this._darkModeClassContainer, {
        attributes: true
      });
    }
  }
  // Getters
  static get NAME() {
    return Tl;
  }
  get systemColorMode() {
    return localStorage.theme || (this._darkModeClassContainer.classList.contains("dark") ? "dark" : "light");
  }
  // Public
  dispose() {
    this._observer.disconnect(), y.removeData(this._element, ys), this._element = null;
  }
  update(t, e) {
    t && (this._data = { ...this._data, ...t }, this._chart.data = this._data);
    const i = Object.prototype.hasOwnProperty.call(
      e,
      "options"
    ) ? e : { options: { ...e } };
    this._options = Yo(this._options, i), this._chart.options = uo(
      this._options,
      this._type,
      Ti
    ).options, this._chart.update();
  }
  setTheme(t) {
    t !== "dark" && t !== "light" || !this._data || this._handleMode(t);
  }
  // Private
  _getDarkConfig(t) {
    let e = {};
    const i = h.getDataAttributes(this._element);
    Object.keys(i).forEach(
      (p) => p.startsWith("dark") && (e[p] = i[p])
    ), e = {
      ...sv,
      ...e
    };
    const n = {
      y: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      },
      x: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      }
    }, o = {
      r: {
        ticks: {
          color: e.darkTicksColor,
          backdropColor: e.darkBgColor
        },
        grid: {
          color: e.darkGridLinesColor
        },
        pointLabels: {
          color: e.darkTicksColor
        }
      }
    }, l = {
      scales: ["pie", "doughnut", "polarArea", "radar"].includes(this._type) ? ["polarArea", "radar"].includes(this._type) ? o : {} : n,
      plugins: {
        legend: {
          labels: {
            color: e.darkLabelColor
          }
        }
      }
    };
    return t = {
      ...e,
      options: {
        ...l
      },
      ...t
    }, D(Tl, t, nv), t;
  }
  _chartConstructor() {
    if (this._data) {
      this._createCanvas();
      const t = uo(this._options, this._type, Ti), e = [];
      t.dataLabelsPlugin && e.push(this._ChartDataLabels.default), this._prevConfig = t, this._chart = new this._Chartjs(this._canvas, {
        ...this._data,
        ...t,
        plugins: e
      });
    }
  }
  _createCanvas() {
    this._canvas || (this._element.nodeName === "CANVAS" ? this._canvas = this._element : (this._canvas = $("canvas"), this._element.appendChild(this._canvas)));
  }
  _handleMode(t) {
    t === "dark" ? (this._changeDatasetBorderColor(), this.update(null, this._darkOptions.options)) : (this._changeDatasetBorderColor(false), this._prevConfig && this.update(null, this._prevConfig));
  }
  _observerCallback(t) {
    for (const e of t)
      e.type === "attributes" && this._handleMode(this.systemColorMode);
  }
  _changeDatasetBorderColor(t = true) {
    [...this._data.data.datasets].forEach(
      (e) => ["pie", "doughnut", "polarArea"].includes(this._type) && (e.borderColor = t ? this._darkOptions.darkBgColor : this._darkOptions.darkBgColorLight)
    );
  }
  static jQueryInterface(t, e, i) {
    return this.each(function() {
      let n = y.getData(this, ys);
      if (!(!n && /dispose/.test(t))) {
        if (!n) {
          const o = e ? uo(e, i, Ti) : Ti[i];
          n = new _dh(this, {
            ...t,
            ...o
          });
        }
        if (typeof t == "string") {
          if (typeof n[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          n[t](e, i);
        }
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, ys);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
function Lt(s) {
  return getComputedStyle(s);
}
function ot(s, t) {
  for (var e in t) {
    var i = t[e];
    typeof i == "number" && (i = i + "px"), s.style[e] = i;
  }
  return s;
}
function ws(s) {
  var t = document.createElement("div");
  return t.className = s, t;
}
var El = typeof Element < "u" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
function Qt(s, t) {
  if (!El)
    throw new Error("No element matching method supported");
  return El.call(s, t);
}
function Pe(s) {
  s.remove ? s.remove() : s.parentNode && s.parentNode.removeChild(s);
}
function Cl(s, t) {
  return Array.prototype.filter.call(
    s.children,
    function(e) {
      return Qt(e, t);
    }
  );
}
var j = {
  main: "ps",
  rtl: "ps__rtl",
  element: {
    thumb: function(s) {
      return "ps__thumb-" + s;
    },
    rail: function(s) {
      return "ps__rail-" + s;
    },
    consuming: "ps__child--consume"
  },
  state: {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function(s) {
      return "ps--active-" + s;
    },
    scrolling: function(s) {
      return "ps--scrolling-" + s;
    }
  }
};
var uh = { x: null, y: null };
function ph(s, t) {
  var e = s.element.classList, i = j.state.scrolling(t);
  e.contains(i) ? clearTimeout(uh[t]) : e.add(i);
}
function _h(s, t) {
  uh[t] = setTimeout(
    function() {
      return s.isAlive && s.element.classList.remove(j.state.scrolling(t));
    },
    s.settings.scrollingThreshold
  );
}
function ov(s, t) {
  ph(s, t), _h(s, t);
}
var zi = function(t) {
  this.element = t, this.handlers = {};
};
var fh = { isEmpty: { configurable: true } };
zi.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, false);
};
zi.prototype.unbind = function(t, e) {
  var i = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? true : (i.element.removeEventListener(t, n, false), false);
  });
};
zi.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
fh.isEmpty.get = function() {
  var s = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return s.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(zi.prototype, fh);
var si = function() {
  this.eventElements = [];
};
si.prototype.eventElement = function(t) {
  var e = this.eventElements.filter(function(i) {
    return i.element === t;
  })[0];
  return e || (e = new zi(t), this.eventElements.push(e)), e;
};
si.prototype.bind = function(t, e, i) {
  this.eventElement(t).bind(e, i);
};
si.prototype.unbind = function(t, e, i) {
  var n = this.eventElement(t);
  n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
};
si.prototype.unbindAll = function() {
  this.eventElements.forEach(function(t) {
    return t.unbindAll();
  }), this.eventElements = [];
};
si.prototype.once = function(t, e, i) {
  var n = this.eventElement(t), o = function(r) {
    n.unbind(e, o), i(r);
  };
  n.bind(e, o);
};
function ks(s) {
  if (typeof window.CustomEvent == "function")
    return new CustomEvent(s);
  var t = document.createEvent("CustomEvent");
  return t.initCustomEvent(s, false, false, void 0), t;
}
function on(s, t, e, i, n) {
  i === void 0 && (i = true), n === void 0 && (n = false);
  var o;
  if (t === "top")
    o = [
      "contentHeight",
      "containerHeight",
      "scrollTop",
      "y",
      "up",
      "down"
    ];
  else if (t === "left")
    o = [
      "contentWidth",
      "containerWidth",
      "scrollLeft",
      "x",
      "left",
      "right"
    ];
  else
    throw new Error("A proper axis should be provided");
  rv(s, e, o, i, n);
}
function rv(s, t, e, i, n) {
  var o = e[0], r = e[1], a = e[2], l = e[3], p = e[4], u = e[5];
  i === void 0 && (i = true), n === void 0 && (n = false);
  var _ = s.element;
  s.reach[l] = null, _[a] < 1 && (s.reach[l] = "start"), _[a] > s[o] - s[r] - 1 && (s.reach[l] = "end"), t && (_.dispatchEvent(ks("ps-scroll-" + l)), t < 0 ? _.dispatchEvent(ks("ps-scroll-" + p)) : t > 0 && _.dispatchEvent(ks("ps-scroll-" + u)), i && ov(s, l)), s.reach[l] && (t || n) && _.dispatchEvent(ks("ps-" + l + "-reach-" + s.reach[l]));
}
function W(s) {
  return parseInt(s, 10) || 0;
}
function av(s) {
  return Qt(s, "input,[contenteditable]") || Qt(s, "select,[contenteditable]") || Qt(s, "textarea,[contenteditable]") || Qt(s, "button,[contenteditable]");
}
function lv(s) {
  var t = Lt(s);
  return W(t.width) + W(t.paddingLeft) + W(t.paddingRight) + W(t.borderLeftWidth) + W(t.borderRightWidth);
}
var Ne = {
  isWebKit: typeof document < "u" && "WebkitAppearance" in document.documentElement.style,
  supportsTouch: typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: typeof navigator < "u" && navigator.msMaxTouchPoints,
  isChrome: typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent)
};
function Bt(s) {
  var t = s.element, e = Math.floor(t.scrollTop), i = t.getBoundingClientRect();
  s.containerWidth = Math.round(i.width), s.containerHeight = Math.round(i.height), s.contentWidth = t.scrollWidth, s.contentHeight = t.scrollHeight, t.contains(s.scrollbarXRail) || (Cl(t, j.element.rail("x")).forEach(
    function(n) {
      return Pe(n);
    }
  ), t.appendChild(s.scrollbarXRail)), t.contains(s.scrollbarYRail) || (Cl(t, j.element.rail("y")).forEach(
    function(n) {
      return Pe(n);
    }
  ), t.appendChild(s.scrollbarYRail)), !s.settings.suppressScrollX && s.containerWidth + s.settings.scrollXMarginOffset < s.contentWidth ? (s.scrollbarXActive = true, s.railXWidth = s.containerWidth - s.railXMarginWidth, s.railXRatio = s.containerWidth / s.railXWidth, s.scrollbarXWidth = Al(
    s,
    W(s.railXWidth * s.containerWidth / s.contentWidth)
  ), s.scrollbarXLeft = W(
    (s.negativeScrollAdjustment + t.scrollLeft) * (s.railXWidth - s.scrollbarXWidth) / (s.contentWidth - s.containerWidth)
  )) : s.scrollbarXActive = false, !s.settings.suppressScrollY && s.containerHeight + s.settings.scrollYMarginOffset < s.contentHeight ? (s.scrollbarYActive = true, s.railYHeight = s.containerHeight - s.railYMarginHeight, s.railYRatio = s.containerHeight / s.railYHeight, s.scrollbarYHeight = Al(
    s,
    W(s.railYHeight * s.containerHeight / s.contentHeight)
  ), s.scrollbarYTop = W(
    e * (s.railYHeight - s.scrollbarYHeight) / (s.contentHeight - s.containerHeight)
  )) : s.scrollbarYActive = false, s.scrollbarXLeft >= s.railXWidth - s.scrollbarXWidth && (s.scrollbarXLeft = s.railXWidth - s.scrollbarXWidth), s.scrollbarYTop >= s.railYHeight - s.scrollbarYHeight && (s.scrollbarYTop = s.railYHeight - s.scrollbarYHeight), cv(t, s), s.scrollbarXActive ? t.classList.add(j.state.active("x")) : (t.classList.remove(j.state.active("x")), s.scrollbarXWidth = 0, s.scrollbarXLeft = 0, t.scrollLeft = s.isRtl === true ? s.contentWidth : 0), s.scrollbarYActive ? t.classList.add(j.state.active("y")) : (t.classList.remove(j.state.active("y")), s.scrollbarYHeight = 0, s.scrollbarYTop = 0, t.scrollTop = 0);
}
function Al(s, t) {
  return s.settings.minScrollbarLength && (t = Math.max(t, s.settings.minScrollbarLength)), s.settings.maxScrollbarLength && (t = Math.min(t, s.settings.maxScrollbarLength)), t;
}
function cv(s, t) {
  var e = { width: t.railXWidth }, i = Math.floor(s.scrollTop);
  t.isRtl ? e.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth - t.contentWidth : e.left = s.scrollLeft, t.isScrollbarXUsingBottom ? e.bottom = t.scrollbarXBottom - i : e.top = t.scrollbarXTop + i, ot(t.scrollbarXRail, e);
  var n = { top: i, height: t.railYHeight };
  t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + s.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9 : n.right = t.scrollbarYRight - s.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + s.scrollLeft, ot(t.scrollbarYRail, n), ot(t.scrollbarX, {
    left: t.scrollbarXLeft,
    width: t.scrollbarXWidth - t.railBorderXWidth
  }), ot(t.scrollbarY, {
    top: t.scrollbarYTop,
    height: t.scrollbarYHeight - t.railBorderYWidth
  });
}
function hv(s) {
  s.element, s.event.bind(s.scrollbarY, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarYRail, "mousedown", function(t) {
    var e = t.pageY - window.pageYOffset - s.scrollbarYRail.getBoundingClientRect().top, i = e > s.scrollbarYTop ? 1 : -1;
    s.element.scrollTop += i * s.containerHeight, Bt(s), t.stopPropagation();
  }), s.event.bind(s.scrollbarX, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarXRail, "mousedown", function(t) {
    var e = t.pageX - window.pageXOffset - s.scrollbarXRail.getBoundingClientRect().left, i = e > s.scrollbarXLeft ? 1 : -1;
    s.element.scrollLeft += i * s.containerWidth, Bt(s), t.stopPropagation();
  });
}
function dv(s) {
  yl(s, [
    "containerWidth",
    "contentWidth",
    "pageX",
    "railXWidth",
    "scrollbarX",
    "scrollbarXWidth",
    "scrollLeft",
    "x",
    "scrollbarXRail"
  ]), yl(s, [
    "containerHeight",
    "contentHeight",
    "pageY",
    "railYHeight",
    "scrollbarY",
    "scrollbarYHeight",
    "scrollTop",
    "y",
    "scrollbarYRail"
  ]);
}
function yl(s, t) {
  var e = t[0], i = t[1], n = t[2], o = t[3], r = t[4], a = t[5], l = t[6], p = t[7], u = t[8], _ = s.element, f = null, g = null, m = null;
  function b(w) {
    w.touches && w.touches[0] && (w[n] = w.touches[0].pageY), _[l] = f + m * (w[n] - g), ph(s, p), Bt(s), w.stopPropagation(), w.type.startsWith("touch") && w.changedTouches.length > 1 && w.preventDefault();
  }
  function v() {
    _h(s, p), s[u].classList.remove(j.state.clicking), s.event.unbind(s.ownerDocument, "mousemove", b);
  }
  function C(w, E) {
    f = _[l], E && w.touches && (w[n] = w.touches[0].pageY), g = w[n], m = (s[i] - s[e]) / (s[o] - s[a]), E ? s.event.bind(s.ownerDocument, "touchmove", b) : (s.event.bind(s.ownerDocument, "mousemove", b), s.event.once(s.ownerDocument, "mouseup", v), w.preventDefault()), s[u].classList.add(j.state.clicking), w.stopPropagation();
  }
  s.event.bind(s[r], "mousedown", function(w) {
    C(w);
  }), s.event.bind(s[r], "touchstart", function(w) {
    C(w, true);
  });
}
function uv(s) {
  var t = s.element, e = function() {
    return Qt(t, ":hover");
  }, i = function() {
    return Qt(s.scrollbarX, ":focus") || Qt(s.scrollbarY, ":focus");
  };
  function n(o, r) {
    var a = Math.floor(t.scrollTop);
    if (o === 0) {
      if (!s.scrollbarYActive)
        return false;
      if (a === 0 && r > 0 || a >= s.contentHeight - s.containerHeight && r < 0)
        return !s.settings.wheelPropagation;
    }
    var l = t.scrollLeft;
    if (r === 0) {
      if (!s.scrollbarXActive)
        return false;
      if (l === 0 && o < 0 || l >= s.contentWidth - s.containerWidth && o > 0)
        return !s.settings.wheelPropagation;
    }
    return true;
  }
  s.event.bind(s.ownerDocument, "keydown", function(o) {
    if (!(o.isDefaultPrevented && o.isDefaultPrevented() || o.defaultPrevented) && !(!e() && !i())) {
      var r = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
      if (r) {
        if (r.tagName === "IFRAME")
          r = r.contentDocument.activeElement;
        else
          for (; r.shadowRoot; )
            r = r.shadowRoot.activeElement;
        if (av(r))
          return;
      }
      var a = 0, l = 0;
      switch (o.which) {
        case 37:
          o.metaKey ? a = -s.contentWidth : o.altKey ? a = -s.containerWidth : a = -30;
          break;
        case 38:
          o.metaKey ? l = s.contentHeight : o.altKey ? l = s.containerHeight : l = 30;
          break;
        case 39:
          o.metaKey ? a = s.contentWidth : o.altKey ? a = s.containerWidth : a = 30;
          break;
        case 40:
          o.metaKey ? l = -s.contentHeight : o.altKey ? l = -s.containerHeight : l = -30;
          break;
        case 32:
          o.shiftKey ? l = s.containerHeight : l = -s.containerHeight;
          break;
        case 33:
          l = s.containerHeight;
          break;
        case 34:
          l = -s.containerHeight;
          break;
        case 36:
          l = s.contentHeight;
          break;
        case 35:
          l = -s.contentHeight;
          break;
        default:
          return;
      }
      s.settings.suppressScrollX && a !== 0 || s.settings.suppressScrollY && l !== 0 || (t.scrollTop -= l, t.scrollLeft += a, Bt(s), n(a, l) && o.preventDefault());
    }
  });
}
function pv(s) {
  var t = s.element;
  function e(r, a) {
    var l = Math.floor(t.scrollTop), p = t.scrollTop === 0, u = l + t.offsetHeight === t.scrollHeight, _ = t.scrollLeft === 0, f = t.scrollLeft + t.offsetWidth === t.scrollWidth, g;
    return Math.abs(a) > Math.abs(r) ? g = p || u : g = _ || f, g ? !s.settings.wheelPropagation : true;
  }
  function i(r) {
    var a = r.deltaX, l = -1 * r.deltaY;
    return (typeof a > "u" || typeof l > "u") && (a = -1 * r.wheelDeltaX / 6, l = r.wheelDeltaY / 6), r.deltaMode && r.deltaMode === 1 && (a *= 10, l *= 10), a !== a && l !== l && (a = 0, l = r.wheelDelta), r.shiftKey ? [-l, -a] : [a, l];
  }
  function n(r, a, l) {
    if (!Ne.isWebKit && t.querySelector("select:focus"))
      return true;
    if (!t.contains(r))
      return false;
    for (var p = r; p && p !== t; ) {
      if (p.classList.contains(j.element.consuming))
        return true;
      var u = Lt(p);
      if (l && u.overflowY.match(/(scroll|auto)/)) {
        var _ = p.scrollHeight - p.clientHeight;
        if (_ > 0 && (p.scrollTop > 0 && l < 0 || p.scrollTop < _ && l > 0))
          return true;
      }
      if (a && u.overflowX.match(/(scroll|auto)/)) {
        var f = p.scrollWidth - p.clientWidth;
        if (f > 0 && (p.scrollLeft > 0 && a < 0 || p.scrollLeft < f && a > 0))
          return true;
      }
      p = p.parentNode;
    }
    return false;
  }
  function o(r) {
    var a = i(r), l = a[0], p = a[1];
    if (!n(r.target, l, p)) {
      var u = false;
      s.settings.useBothWheelAxes ? s.scrollbarYActive && !s.scrollbarXActive ? (p ? t.scrollTop -= p * s.settings.wheelSpeed : t.scrollTop += l * s.settings.wheelSpeed, u = true) : s.scrollbarXActive && !s.scrollbarYActive && (l ? t.scrollLeft += l * s.settings.wheelSpeed : t.scrollLeft -= p * s.settings.wheelSpeed, u = true) : (t.scrollTop -= p * s.settings.wheelSpeed, t.scrollLeft += l * s.settings.wheelSpeed), Bt(s), u = u || e(l, p), u && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
    }
  }
  typeof window.onwheel < "u" ? s.event.bind(t, "wheel", o) : typeof window.onmousewheel < "u" && s.event.bind(t, "mousewheel", o);
}
function _v(s) {
  if (!Ne.supportsTouch && !Ne.supportsIePointer)
    return;
  var t = s.element;
  function e(m, b) {
    var v = Math.floor(t.scrollTop), C = t.scrollLeft, w = Math.abs(m), E = Math.abs(b);
    if (E > w) {
      if (b < 0 && v === s.contentHeight - s.containerHeight || b > 0 && v === 0)
        return window.scrollY === 0 && b > 0 && Ne.isChrome;
    } else if (w > E && (m < 0 && C === s.contentWidth - s.containerWidth || m > 0 && C === 0))
      return true;
    return true;
  }
  function i(m, b) {
    t.scrollTop -= b, t.scrollLeft -= m, Bt(s);
  }
  var n = {}, o = 0, r = {}, a = null;
  function l(m) {
    return m.targetTouches ? m.targetTouches[0] : m;
  }
  function p(m) {
    return m.pointerType && m.pointerType === "pen" && m.buttons === 0 ? false : !!(m.targetTouches && m.targetTouches.length === 1 || m.pointerType && m.pointerType !== "mouse" && m.pointerType !== m.MSPOINTER_TYPE_MOUSE);
  }
  function u(m) {
    if (p(m)) {
      var b = l(m);
      n.pageX = b.pageX, n.pageY = b.pageY, o = (/* @__PURE__ */ new Date()).getTime(), a !== null && clearInterval(a);
    }
  }
  function _(m, b, v) {
    if (!t.contains(m))
      return false;
    for (var C = m; C && C !== t; ) {
      if (C.classList.contains(j.element.consuming))
        return true;
      var w = Lt(C);
      if (v && w.overflowY.match(/(scroll|auto)/)) {
        var E = C.scrollHeight - C.clientHeight;
        if (E > 0 && (C.scrollTop > 0 && v < 0 || C.scrollTop < E && v > 0))
          return true;
      }
      if (b && w.overflowX.match(/(scroll|auto)/)) {
        var T = C.scrollWidth - C.clientWidth;
        if (T > 0 && (C.scrollLeft > 0 && b < 0 || C.scrollLeft < T && b > 0))
          return true;
      }
      C = C.parentNode;
    }
    return false;
  }
  function f(m) {
    if (p(m)) {
      var b = l(m), v = { pageX: b.pageX, pageY: b.pageY }, C = v.pageX - n.pageX, w = v.pageY - n.pageY;
      if (_(m.target, C, w))
        return;
      i(C, w), n = v;
      var E = (/* @__PURE__ */ new Date()).getTime(), T = E - o;
      T > 0 && (r.x = C / T, r.y = w / T, o = E), e(C, w) && m.preventDefault();
    }
  }
  function g() {
    s.settings.swipeEasing && (clearInterval(a), a = setInterval(function() {
      if (s.isInitialized) {
        clearInterval(a);
        return;
      }
      if (!r.x && !r.y) {
        clearInterval(a);
        return;
      }
      if (Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01) {
        clearInterval(a);
        return;
      }
      if (!s.element) {
        clearInterval(a);
        return;
      }
      i(r.x * 30, r.y * 30), r.x *= 0.8, r.y *= 0.8;
    }, 10));
  }
  Ne.supportsTouch ? (s.event.bind(t, "touchstart", u), s.event.bind(t, "touchmove", f), s.event.bind(t, "touchend", g)) : Ne.supportsIePointer && (window.PointerEvent ? (s.event.bind(t, "pointerdown", u), s.event.bind(t, "pointermove", f), s.event.bind(t, "pointerup", g)) : window.MSPointerEvent && (s.event.bind(t, "MSPointerDown", u), s.event.bind(t, "MSPointerMove", f), s.event.bind(t, "MSPointerUp", g)));
}
var fv = function() {
  return {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1e3,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: false,
    suppressScrollY: false,
    swipeEasing: true,
    useBothWheelAxes: false,
    wheelPropagation: true,
    wheelSpeed: 1
  };
};
var mv = {
  "click-rail": hv,
  "drag-thumb": dv,
  keyboard: uv,
  wheel: pv,
  touch: _v
};
var Ui = function(t, e) {
  var i = this;
  if (e === void 0 && (e = {}), typeof t == "string" && (t = document.querySelector(t)), !t || !t.nodeName)
    throw new Error("no element is specified to initialize PerfectScrollbar");
  this.element = t, t.classList.add(j.main), this.settings = fv();
  for (var n in e)
    this.settings[n] = e[n];
  this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
  var o = function() {
    return t.classList.add(j.state.focus);
  }, r = function() {
    return t.classList.remove(j.state.focus);
  };
  this.isRtl = Lt(t).direction === "rtl", this.isRtl === true && t.classList.add(j.rtl), this.isNegativeScroll = function() {
    var p = t.scrollLeft, u = null;
    return t.scrollLeft = -1, u = t.scrollLeft < 0, t.scrollLeft = p, u;
  }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new si(), this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = ws(j.element.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = ws(j.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", o), this.event.bind(this.scrollbarX, "blur", r), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
  var a = Lt(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(a.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = false, this.scrollbarXTop = W(a.top)) : this.isScrollbarXUsingBottom = true, this.railBorderXWidth = W(a.borderLeftWidth) + W(a.borderRightWidth), ot(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = W(a.marginLeft) + W(a.marginRight), ot(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = ws(j.element.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = ws(j.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", o), this.event.bind(this.scrollbarY, "blur", r), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
  var l = Lt(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(l.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = false, this.scrollbarYLeft = W(l.left)) : this.isScrollbarYUsingRight = true, this.scrollbarYOuterWidth = this.isRtl ? lv(this.scrollbarY) : null, this.railBorderYWidth = W(l.borderTopWidth) + W(l.borderBottomWidth), ot(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = W(l.marginTop) + W(l.marginBottom), ot(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = {
    x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
    y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
  }, this.isAlive = true, this.settings.handlers.forEach(function(p) {
    return mv[p](i);
  }), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", function(p) {
    return i.onScroll(p);
  }), Bt(this);
};
Ui.prototype.update = function() {
  this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, ot(this.scrollbarXRail, { display: "block" }), ot(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = W(Lt(this.scrollbarXRail).marginLeft) + W(Lt(this.scrollbarXRail).marginRight), this.railYMarginHeight = W(Lt(this.scrollbarYRail).marginTop) + W(Lt(this.scrollbarYRail).marginBottom), ot(this.scrollbarXRail, { display: "none" }), ot(this.scrollbarYRail, { display: "none" }), Bt(this), on(this, "top", 0, false, true), on(this, "left", 0, false, true), ot(this.scrollbarXRail, { display: "" }), ot(this.scrollbarYRail, { display: "" }));
};
Ui.prototype.onScroll = function(t) {
  this.isAlive && (Bt(this), on(this, "top", this.element.scrollTop - this.lastScrollTop), on(
    this,
    "left",
    this.element.scrollLeft - this.lastScrollLeft
  ), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
};
Ui.prototype.destroy = function() {
  this.isAlive && (this.event.unbindAll(), Pe(this.scrollbarX), Pe(this.scrollbarY), Pe(this.scrollbarXRail), Pe(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = false);
};
Ui.prototype.removePsClasses = function() {
  this.element.className = this.element.className.split(" ").filter(function(t) {
    return !t.match(/^ps([-_].+|)$/);
  }).join(" ");
};
var po = "perfectScrollbar";
var gv = "perfect-scrollbar";
var xs = "te.perfectScrollbar";
var Ot = "te";
var St = "ps";
var _o = [
  { te: `scrollX.${Ot}.${St}`, ps: "ps-scroll-x" },
  { te: `scrollY.${Ot}.${St}`, ps: "ps-scroll-y" },
  { te: `scrollUp.${Ot}.${St}`, ps: "ps-scroll-up" },
  { te: `scrollDown.${Ot}.${St}`, ps: "ps-scroll-down" },
  { te: `scrollLeft.${Ot}.${St}`, ps: "ps-scroll-left" },
  { te: `scrollRight.${Ot}.${St}`, ps: "ps-scroll-right" },
  { te: `scrollXEnd.${Ot}.${St}`, ps: "ps-x-reach-end" },
  { te: `scrollYEnd.${Ot}.${St}`, ps: "ps-y-reach-end" },
  { te: `scrollXStart.${Ot}.${St}`, ps: "ps-x-reach-start" },
  { te: `scrollYStart.${Ot}.${St}`, ps: "ps-y-reach-start" }
];
var bv = {
  handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
  wheelSpeed: 1,
  wheelPropagation: true,
  swipeEasing: true,
  minScrollbarLength: null,
  maxScrollbarLength: null,
  scrollingThreshold: 1e3,
  useBothWheelAxes: false,
  suppressScrollX: false,
  suppressScrollY: false,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  positionRight: true
};
var vv = {
  handlers: "(string|array)",
  wheelSpeed: "number",
  wheelPropagation: "boolean",
  swipeEasing: "boolean",
  minScrollbarLength: "(number|null)",
  maxScrollbarLength: "(number|null)",
  scrollingThreshold: "number",
  useBothWheelAxes: "boolean",
  suppressScrollX: "boolean",
  suppressScrollY: "boolean",
  scrollXMarginOffset: "number",
  scrollYMarginOffset: "number",
  positionRight: "boolean"
};
var Tv = {
  ps: "group/ps overflow-hidden [overflow-anchor:none] touch-none",
  railX: "group/x absolute bottom-0 h-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-x]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-x]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none",
  railXColors: "group-[&.ps--active-x]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]",
  railXThumb: "absolute bottom-0.5 rounded-md h-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_height_.2s_ease-in-out] group-hover/x:h-[11px] group-focus/x:h-[0.6875rem] group-[&.ps--clicking]/x:bg-[#999] group-[&.ps--clicking]/x:h-[11px] outline-none",
  railXThumbColors: "bg-[#aaa] group-hover/x:bg-[#999] group-focus/x:bg-[#999]",
  railY: "group/y absolute right-0 w-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-y]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-y]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none",
  railYColors: "group-[&.ps--active-y]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]",
  railYThumb: "absolute right-0.5 rounded-md w-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_width_.2s_ease-in-out,_opacity] group-hover/y:w-[11px] group-focus/y:w-[0.6875rem] group-[&.ps--clicking]/y:w-[11px] outline-none",
  railYThumbColors: "bg-[#aaa] group-hover/y:bg-[#999] group-focus/y:bg-[#999] group-[&.ps--clicking]/y:bg-[#999]"
};
var Ev = {
  ps: "string",
  railX: "string",
  railXColors: "string",
  railXThumb: "string",
  railXThumbColors: "string",
  railY: "string",
  railYColors: "string",
  railYThumb: "string",
  railYThumbColors: "string"
};
var fr = class _fr {
  constructor(t, e = {}, i = {}) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this.perfectScrollbar = null, this._observer = null, this._psClasses = [
      {
        ps: "ps__rail-x",
        te: this._classes.railX,
        teColor: this._classes.railXColors
      },
      {
        ps: "ps__rail-y",
        te: this._classes.railY,
        teColor: this._classes.railYColors
      },
      {
        ps: "ps__thumb-x",
        te: this._classes.railXThumb,
        teColor: this._classes.railXThumbColors
      },
      {
        ps: "ps__thumb-y",
        te: this._classes.railYThumb,
        teColor: this._classes.railYThumbColors
      }
    ], this._element && (y.setData(t, xs, this), h.addClass(this._element, gv)), this.init();
  }
  // Getters
  static get NAME() {
    return po;
  }
  get railX() {
    return d.findOne(".ps__rail-x", this._element);
  }
  get railY() {
    return d.findOne(".ps__rail-y", this._element);
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return e.handlers !== void 0 && (e.handlers = e.handlers.split(" ")), t = {
      ...bv,
      ...e,
      ...t
    }, D(po, t, vv), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Tv,
      ...e,
      ...t
    }, D(po, t, Ev), t;
  }
  // Public
  dispose() {
    this._options.positionRight && this._observer.disconnect(), y.removeData(this._element, xs), this._element = null, this._dataAttrOptions = null, this._options = null, this.perfectScrollbar.destroy(), this.removeEvent(_o), this.perfectScrollbar = null;
  }
  init() {
    if (this.perfectScrollbar = new Ui(this._element, this._options), this._addPerfectScrollbarStyles(), this._updateScrollPosition(), this.perfectScrollbar.update(), this._initEvents(_o), this._options.positionRight) {
      this._observer = new ResizeObserver(() => {
        setTimeout(() => {
          this._updateScrollPosition();
        }, 100);
      });
      const t = {
        attributes: true,
        attributeFilter: ["class", "className"]
      };
      this._observer.observe(this._element, t);
    }
  }
  _updateScrollPosition() {
    const t = getComputedStyle(this._element).getPropertyValue("height"), e = getComputedStyle(this._element).getPropertyValue("width");
    this.railX && (this.railX.style.transform = `translateY(calc(-100% + ${this._canTransform(t) ? t : "0px"}))`), this.railY && (this.railY.style.transform = `translateX(calc(-100% + ${this._canTransform(e) ? e : "0px"}))`);
  }
  _canTransform(t) {
    return t && t.includes("px");
  }
  update() {
    return this.perfectScrollbar.update();
  }
  _initEvents(t = []) {
    t.forEach(
      ({ ps: e, te: i }) => c.on(
        this._element,
        e,
        (n) => c.trigger(this._element, i, { e: n })
      )
    );
  }
  _addPerfectScrollbarStyles() {
    this._psClasses.forEach((t) => {
      const e = d.findOne(`.${t.ps}`, this._element);
      h.addClass(e, t.te), h.addClass(e, t.teColor);
    }), h.addClass(this._element, this._classes.ps), h.removeClass(this._element, "ps");
  }
  removeEvent(t) {
    let e = [];
    typeof t == "string" && (e = _o.filter(({ te: i }) => i === t)), e.forEach(({ ps: i, te: n }) => {
      c.off(this._element, i), c.off(this._element, n);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, xs);
      const i = typeof t == "object" && t;
      if (!(!e && /dispose|hide/.test(t)) && (e || (e = new _fr(this, i)), typeof t == "string")) {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, xs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var mh = fr;
var Cv = "data-te-datatable-select-ref";
var Av = "data-te-datatable-pagination-nav-ref";
var yv = "data-te-datatable-pagination-right-ref";
var wv = "data-te-datatable-pagination-left-ref";
var kv = "data-te-datatable-pagination-start-ref";
var xv = "data-te-datatable-pagination-end-ref";
var Ov = ({
  text: s,
  entries: t,
  entriesOptions: e,
  fullPagination: i,
  rowsText: n,
  allText: o,
  paginationStartIconTemplate: r,
  paginationLeftIconTemplate: a,
  paginationRightIconTemplate: l,
  paginationEndIconTemplate: p,
  classes: u
}, _, f) => {
  const g = e.map((m) => m === "All" ? `<option value="${m}" ${m === t ? "selected" : ""}>${o}</option>` : `<option value="${m}" ${m === t ? "selected" : ""}>${m}</option>`).join(`
`);
  return `
<div class="${u.pagination} ${f ? `${u.paginationBordered}` : ""} ${u.borderColor} ${u.color}">
  <div class="${u.selectItemsWrapper}">  
    <p class="${u.paginationRowsText} ${_ ? `${u.loadingPaginationRowsText}` : ""}">${n}</p>
    <div class="${u.selectWrapper} ${_ ? `${u.loadingPaginationSelectWrapper}` : ""}">
      <select name="entries"
        ${_ ? "disabled" : ""} class="select" ${Cv}>
        ${g}
      </select>
    </div>
  </div>
  <div class="${u.paginationNav} ${_ ? `${u.loadingPaginationNav}` : ""}" ${Av}>
  ${s}
  </div>
  <div class="${u.paginationButtonsWrapper}">
    ${i ? `<button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationStartButton}" ${kv}>
           ${r}
          </button>` : ""}
    <button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationLeftButton}" ${wv}>
      ${a}
  </button>
    <button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationRightButton}" ${yv}>
      ${l}
  </button>
    ${i ? `<button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationEndButton}" ${xv}>
           ${p}
          </button>` : ""}
  </div>
</div>
`;
};
var Sv = "data-te-datatable-sort-icon-ref";
var Iv = "data-te-datatable-header-checkbox-ref";
var Dv = (s, t, e, i, n, o, r, a) => {
  const l = e ? `
  <th scope="col">
    <div class="${a.checkboxHeaderWrapper}">
      <input
        class="${a.checkboxHeader}"
        type="checkbox"
        value=""
        ${Iv}
        />
    </div>
  </th>
  ` : '<th scope="col"></th>', p = s.map((u, _) => {
    const f = u.fixed ? s.filter((g, m) => g.fixed === u.fixed && m < _).reduce((g, m) => g + m.width, 0) : null;
    return `<th class="${a.column} ${i ? `${a.tableBordered}` : ""} ${a.borderColor} ${n ? `${a.sm}` : ""} ${u.fixed ? `${a.fixedHeader} ${a.color}` : ""} ${o ? `${a.loadingColumn}` : ""}" style="${u.fixed ? `${u.fixed === "right" ? "right" : "left"}: ${f}px;` : ""}" scope="col">${u.sort ? `<div class="${a.sortIconWrapper}"><span class="${a.sortIcon} ${o ? "invisible" : ""}" data-te-sort="${u.field}" ${Sv}>${r}</span>` : ""} <span class="${u.sort ? "" : "pl-[18px]"}">${u.label}</span></div></th>`;
  });
  return [t ? l : "", ...p].join(`
`);
};
var $v = "data-te-datatable-row-ref";
var Lv = "data-te-datatable-row-checkbox-ref";
var Nv = "data-te-datatable-cell-ref";
var Mv = ({
  rows: s,
  columns: t,
  noFoundMessage: e,
  edit: i,
  selectable: n,
  loading: o,
  bordered: r,
  borderless: a,
  striped: l,
  hover: p,
  sm: u,
  classes: _
}) => {
  const f = s.map((g) => {
    const m = `
      <td data-te-field="checkbox" class="${r ? `${_.tableBordered} ${_.borderColor}` : ""}">
        <div class="${_.checkboxRowWrapper}">
          <input
            class="${_.checkboxRow}"
            type="checkbox"
            value=""
            data-te-row-index="${g.rowIndex}"  ${Lv}/>
        </div>
      </td>`, b = t.map((v, C) => {
      const w = {};
      if (v.width && (w["min-width"] = `${v.width - 1}px`, w["max-width"] = `${v.width}px`, w.width = `${v.width}px`), v.fixed) {
        const T = t.filter((A, k) => A.fixed === v.fixed && k < C).reduce((A, k) => A + k.width, 0);
        w[v.fixed === "right" ? "right" : "left"] = `${T}px`;
      }
      return `<td style="${Object.keys(w).map((T) => `${T}: ${w[T]}`).join("; ")}" class="${_.rowItem} ${_.borderColor} ${i ? `${_.edit}` : ""} ${r ? `${_.tableBordered}` : ""} ${u ? `${_.sm}` : ""} ${v.fixed ? `${_.fixedHeader} ${_.color}` : ""}" ${Nv} data-te-field="${v.field}" ${i && 'contenteditable="true"'}>${g[v.field]}</td>`;
    }).join("");
    return `<tr scope="row" class="${_.row} ${_.borderColor} ${_.rowAnimation} ${l ? `${_.striped}` : ""} ${a ? `${_.borderless}` : ""} ${p ? `${_.hoverRow}` : ""}" data-te-index="${g.rowIndex}" ${$v}>${n ? m : ""}${b}</tr>`;
  });
  return s.length > 0 || o ? f.join(`
`) : `<tr class="${_.noFoundMessageWrapper} ${_.borderColor}"><td class="${_.noFoundMessage}">${e}</td></tr>`;
};
var Rv = "data-te-datatable-inner-ref";
var Pv = "data-te-datatable-header-ref";
var wl = ({
  columns: s,
  rows: t,
  noFoundMessage: e,
  edit: i,
  multi: n,
  selectable: o,
  loading: r,
  loadingMessage: a,
  pagination: l,
  bordered: p,
  borderless: u,
  striped: _,
  hover: f,
  fixedHeader: g,
  sm: m,
  sortIconTemplate: b,
  classes: v
}) => {
  const C = Mv({
    rows: t,
    columns: s,
    noFoundMessage: e,
    edit: i,
    loading: r,
    selectable: o,
    bordered: p,
    borderless: u,
    striped: _,
    hover: f,
    sm: m,
    classes: v
  }), w = Dv(
    s,
    o,
    n,
    p,
    m,
    r,
    b,
    v
  );
  return { table: `
<div class="${v.color}" ${Rv}>
  <table class="${v.table}">
    <thead class="${v.tableHeader} ${p ? `${v.tableBordered}` : ""} ${u ? `${v.borderless}` : ""} ${v.borderColor}" ${Pv}>
      <tr>
        ${w}
      </tr>
    </thead>
    <tbody class="${g ? `${v.fixedHeaderBody}` : ""}">
      ${r ? "" : C}
    </tbody>
  </table>
</div>
${r ? `
  <div class="${v.loadingItemsWrapper}">
    <div class="${v.loadingProgressBarWrapper}">
      <div class="${v.loadingProgressBar}"></div>
    </div>
  </div>
<p class="${v.loadingMessage}">${a}</p>
` : ""}
${l.enable ? Ov(l, r, p) : ""}
  `, rows: C, column: w };
};
var Bv = ({ rows: s, field: t, order: e }) => s.sort((n, o) => {
  let r = n[t], a = o[t];
  return typeof r == "string" && (r = r.toLowerCase()), typeof a == "string" && (a = a.toLowerCase()), r < a ? e === "desc" ? 1 : -1 : r > a ? e === "desc" ? -1 : 1 : 0;
});
var Hv = (s, t, e) => {
  if (!t)
    return s;
  const i = (n) => {
    const o = document.createElement("div");
    return o.innerHTML = n, n = o.textContent || o.innerText || "", n.toString().toLowerCase().match(t.toLowerCase());
  };
  return s.filter((n) => {
    if (e && typeof e == "string")
      return i(n[e]);
    let o = Object.values(n);
    return e && Array.isArray(e) && (o = Object.keys(n).filter((r) => e.includes(r)).map((r) => n[r])), o.filter((r) => i(r)).length > 0;
  });
};
var kl = ({ rows: s, entries: t, activePage: e }) => {
  const i = e * t;
  return s.slice(i, i + Number(t));
};
var Ni = "datatable";
var ft = `data-te-${Ni}`;
var Ei = `te.${Ni}`;
var _n = `.${Ei}`;
var Vv = `[${ft}-inner-ref]`;
var fo = `[${ft}-cell-ref]`;
var Wv = `[${ft}-header-ref]`;
var Fv = `[${ft}-header-checkbox-ref]`;
var Yv = `[${ft}-pagination-right-ref]`;
var jv = `[${ft}-pagination-left-ref]`;
var Kv = `[${ft}-pagination-start-ref]`;
var zv = `[${ft}-pagination-end-ref]`;
var Uv = `[${ft}-pagination-nav-ref]`;
var Xv = `[${ft}-select-ref]`;
var mo = `[${ft}-sort-icon-ref]`;
var fi = `[${ft}-row-ref]`;
var go = `[${ft}-row-checkbox-ref]`;
var Gv = `selectRows${_n}`;
var xl = `render${_n}`;
var qv = `rowClick${_n}`;
var Zv = `update${_n}`;
var Qv = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg>`;
var Jv = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>`;
var tT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>`;
var eT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>`;
var iT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
</svg>`;
var sT = "border-neutral-200 dark:border-neutral-500";
var nT = "border-none";
var oT = "relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400";
var rT = "mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center";
var aT = "relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400";
var lT = "mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center";
var cT = "bg-white dark:bg-neutral-800";
var hT = "py-4 pl-1 text-clip overflow-hidden text-[#212529] dark:text-white";
var dT = "focus:outline-none";
var uT = "sticky top-0 z-30";
var pT = "sticky z-10 bg-inherit";
var _T = "hover:bg-neutral-100 dark:hover:bg-neutral-700";
var fT = "pointer-events-none cursor-none text-neutral-400 dark:text-neutral-300";
var mT = "h-[2px] relative w-full overflow-hidden";
var gT = "text-center text-neutral-500 font-ligh text-sm my-4 dark:text-neutral-400";
var bT = "text-neutral-500 dark:text-neutral-300";
var vT = "text-neutral-500 dark:text-neutral-300";
var TT = "pointer-events-none cursor-none";
var ET = "h-full w-[45%] bg-primary-400 dark:bg-primary-600";
var CT = "h-full animate-[progress_3s_ease-in-out_infinite]";
var AT = "pl-2 py-3 font-light text-sm dark:text-neutral-300";
var yT = "border-b";
var wT = "flex md:flex-row justify-end items-center py-2 space-x-4 text-sm flex-col leading-[1.6]";
var kT = "border border-t-0";
var xT = "order-1 my-3 md:order-none md:my-0 md:pr-1";
var OT = "inline-block rounded p-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600";
var ST = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600";
var IT = "font-normal order-2 mb-3 md:order-none md:mb-0";
var DT = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600";
var $T = "font-light";
var LT = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600";
var NT = "border-b";
var MT = "transition ease-in-out duration-300 motion-reduce:transition-none";
var RT = "whitespace-nowrap text-clip overflow-hidden px-[1.4rem] py-4";
var PT = "relative";
var BT = "!bg-neutral-100 dark:!bg-neutral-600";
var HT = "flex items-center space-x-4 order-3 md:order-none";
var VT = "w-[70px]";
var WT = "!py-2";
var FT = "w-[15px] h-[10px] origin-bottom font-black mr-1 opacity-0 text-neutral-500 group-hover:opacity-100 transition hover:ease-in-out transform ease-linear duration-300 motion-reduce:transition-none dark:text-neutral-400";
var YT = "flex flex-row group";
var jT = "[&:nth-child(odd)]:bg-neutral-50 [&:nth-child(odd)]:dark:bg-neutral-700";
var KT = "border";
var zT = "border-b font-normal px-[1.4rem]";
var UT = "text-left text-sm font-light w-full leading-[1.6]";
var XT = {
  bordered: "boolean",
  borderless: "boolean",
  clickableRows: "boolean",
  defaultValue: "string",
  edit: "boolean",
  entries: "(number|string)",
  entriesOptions: "array",
  fullPagination: "boolean",
  hover: "boolean",
  loading: "boolean",
  loadingMessage: "string",
  maxWidth: "(null|number|string)",
  maxHeight: "(null|number|string)",
  multi: "boolean",
  noFoundMessage: "string",
  pagination: "boolean",
  selectable: "boolean",
  sm: "boolean",
  sortField: "(null|string)",
  sortOrder: "string",
  fixedHeader: "boolean",
  striped: "boolean",
  rowsText: "string",
  ofText: "string",
  allText: "string",
  forceSort: "boolean",
  sortIconTemplate: "string",
  paginationStartIconTemplate: "string",
  paginationEndIconTemplate: "string",
  paginationLeftIconTemplate: "string",
  paginationRightIconTemplate: "string"
};
var GT = {
  bordered: false,
  borderless: false,
  clickableRows: false,
  defaultValue: "-",
  edit: false,
  entries: 10,
  entriesOptions: [10, 25, 50, 200],
  fixedHeader: false,
  fullPagination: false,
  hover: false,
  loading: false,
  loadingMessage: "Loading results...",
  maxWidth: null,
  maxHeight: null,
  multi: false,
  noFoundMessage: "No matching results found",
  pagination: true,
  selectable: false,
  sm: false,
  sortField: null,
  sortOrder: "asc",
  striped: false,
  rowsText: "Rows per page:",
  ofText: "of",
  allText: "All",
  forceSort: false,
  sortIconTemplate: Qv,
  paginationStartIconTemplate: Jv,
  paginationEndIconTemplate: iT,
  paginationLeftIconTemplate: tT,
  paginationRightIconTemplate: eT
};
var qT = {
  label: "string",
  field: "string",
  fixed: "(boolean|string)",
  format: "(function|null)",
  width: "(number|null)",
  sort: "boolean",
  columnIndex: "number"
};
var ZT = {
  label: "",
  field: "",
  fixed: false,
  format: null,
  width: null,
  sort: true,
  columnIndex: 0
};
var QT = {
  table: UT,
  tableHeader: zT,
  column: hT,
  pagination: wT,
  selectWrapper: VT,
  scroll: PT,
  tableBordered: KT,
  paginationBordered: kT,
  borderless: nT,
  checkboxRowWrapper: lT,
  checkboxRow: aT,
  checkboxHeaderWrapper: rT,
  checkboxHeader: oT,
  row: NT,
  rowItem: RT,
  striped: jT,
  sortIconWrapper: YT,
  sortIcon: FT,
  paginationRowsText: $T,
  paginationNav: IT,
  paginationButtonsWrapper: xT,
  hoverRow: _T,
  borderColor: sT,
  color: cT,
  fixedHeader: uT,
  fixedHeaderBody: pT,
  selectableRow: BT,
  rowAnimation: MT,
  sm: WT,
  edit: dT,
  selectItemsWrapper: HT,
  paginationStartButton: LT,
  paginationLeftButton: ST,
  paginationRightButton: DT,
  paginationEndButton: OT,
  loadingItemsWrapper: mT,
  loadingProgressBarWrapper: CT,
  loadingProgressBar: ET,
  loadingMessage: gT,
  loadingPaginationRowsText: vT,
  loadingPaginationSelectWrapper: TT,
  loadingPaginationNav: bT,
  loadingColumn: fT,
  noFoundMessageWrapper: yT,
  noFoundMessage: AT
};
var JT = {
  table: "string",
  tableHeader: "string",
  column: "string",
  pagination: "string",
  selectWrapper: "string",
  scroll: "string",
  tableBordered: "string",
  paginationBordered: "string",
  borderless: "string",
  checkboxRowWrapper: "string",
  checkboxRow: "string",
  checkboxHeaderWrapper: "string",
  checkboxHeader: "string",
  row: "string",
  rowItem: "string",
  striped: "string",
  sortIconWrapper: "string",
  sortIcon: "string",
  paginationRowsText: "string",
  paginationNav: "string",
  paginationButtonsWrapper: "string",
  hoverRow: "string",
  borderColor: "string",
  color: "string",
  fixedHeader: "string",
  fixedHeaderBody: "string",
  selectableRow: "string",
  rowAnimation: "string",
  sm: "string",
  edit: "string",
  selectItemsWrapper: "string",
  paginationStartButton: "string",
  paginationLeftButton: "string",
  paginationRightButton: "string",
  paginationEndButton: "string",
  loadingItemsWrapper: "string",
  loadingProgressBarWrapper: "string",
  loadingProgressBar: "string",
  loadingMessage: "string",
  loadingPaginationRowsText: "string",
  loadingPaginationSelectWrapper: "string",
  loadingPaginationNav: "string",
  loadingColumn: "string",
  noFoundMessageWrapper: "string",
  noFoundMessage: "string"
};
var gh = class _gh {
  constructor(t, e = {}, i = {}, n = {}) {
    this._element = t, this._options = this._getOptions(i), this._classes = this._getClasses(n), this._sortReverse = false, this._activePage = 0, this._search = "", this._searchColumn = null, this._paginationLeft = null, this._paginationRight = null, this._paginationStart = null, this._paginationEnd = null, this._select = null, this._selectInstance = null, this._selected = [], this._checkboxes = null, this._headerCheckbox = null, this._rows = this._getRows(e.rows), this._columns = this._getColumns(e.columns), this._element && (y.setData(t, Ei, this), this._perfectScrollbar = null, this._setup());
  }
  // Getters
  static get NAME() {
    return Ni;
  }
  get columns() {
    return this._columns.map((t, e) => {
      let i = {
        ...ZT,
        field: `field_${e}`,
        columnIndex: e
      };
      return typeof t == "string" ? i.label = t : typeof t == "object" && (i = {
        ...i,
        ...t
      }), D("column", i, qT), i;
    });
  }
  get rows() {
    return this._rows.map((t, e) => {
      const i = {
        rowIndex: e
      };
      return Array.isArray(t) ? this.columns.forEach((n, o) => {
        t[o] === 0 ? i[n.field] = t[o] : i[n.field] = t[o] || this._options.defaultValue;
      }) : typeof t == "object" && this.columns.forEach((n) => {
        t[n.field] === 0 ? i[n.field] = t[n.field] : i[n.field] = t[n.field] || this._options.defaultValue;
      }), i;
    });
  }
  get searchResult() {
    return Hv(this.rows, this._search, this._searchColumn);
  }
  get computedRows() {
    let t = [...this.searchResult];
    return this._options.sortOrder && (t = Bv({
      rows: t,
      field: this._options.sortField,
      order: this._options.sortOrder
    })), this._options.pagination && (this._options.entries === "All" ? t = kl({
      rows: t,
      entries: t.length,
      activePage: this._activePage
    }) : t = kl({
      rows: t,
      entries: this._options.entries,
      activePage: this._activePage
    })), t;
  }
  get pages() {
    return this._options.entries === "All" ? 1 : Math.ceil(this.searchResult.length / this._options.entries);
  }
  get navigationText() {
    const t = this._activePage * this._options.entries;
    return this.searchResult.length === 0 ? `0 ${this._options.ofText} 0` : this._options.entries === "All" ? `1 - ${this.searchResult.length} ${this._options.ofText} ${this.searchResult.length}` : `${t + 1} - ${this.computedRows.length + t} ${this._options.ofText} ${this.searchResult.length}`;
  }
  get tableOptions() {
    return {
      classes: this._classes,
      columns: this.columns,
      rows: this.computedRows,
      noFoundMessage: this._options.noFoundMessage,
      edit: this._options.edit,
      loading: this._options.loading,
      loaderClass: this._options.loaderClass,
      loadingMessage: this._options.loadingMessage,
      selectable: this._options.selectable,
      multi: this._options.multi,
      bordered: this._options.bordered,
      borderless: this._options.borderless,
      striped: this._options.striped,
      hover: this._options.hover,
      fixedHeader: this._options.fixedHeader,
      sm: this._options.sm,
      sortIconTemplate: this._options.sortIconTemplate,
      pagination: {
        enable: this._options.pagination,
        text: this.navigationText,
        entries: this._options.entries,
        entriesOptions: this._options.entriesOptions,
        fullPagination: this._options.fullPagination,
        rowsText: this._options.rowsText,
        ofText: this._options.ofText,
        allText: this._options.allText,
        paginationStartIconTemplate: this._options.paginationStartIconTemplate,
        paginationLeftIconTemplate: this._options.paginationLeftIconTemplate,
        paginationRightIconTemplate: this._options.paginationRightIconTemplate,
        paginationEndIconTemplate: this._options.paginationEndIconTemplate,
        classes: this._classes
      },
      forceSort: this._options.forceSort
    };
  }
  // Public
  update(t, e = {}) {
    t && t.rows && (this._rows = t.rows), t && t.columns && (this._columns = t.columns), this._clearClassList(e), this._options = this._getOptions({ ...this._options, ...e }), this._setup(), this._performSort();
  }
  dispose() {
    this._selectInstance && this._selectInstance.dispose(), y.removeData(this._element, Ei), this._removeEventListeners(), this._perfectScrollbar.destroy(), this._element = null;
  }
  search(t, e) {
    this._search = t, this._searchColumn = e, this._activePage = 0, this._options.pagination && this._toggleDisableState(), this._renderRows(), this._options.maxHeight && (this._perfectScrollbar.element.scrollTop = 0, this._perfectScrollbar.update());
  }
  sort(t, e = "asc") {
    this._options.sortOrder = e, typeof t == "string" ? this._options.sortField = this.columns.find(
      (n) => n.label === t
    ).field : this._options.sortField = t.field;
    const i = d.findOne(
      `[data-te-sort="${this._options.sortField}"]`,
      this._element
    );
    this._activePage = 0, this._toggleDisableState(), this._renderRows(), this._setActiveSortIcon(i);
  }
  setActivePage(t) {
    t < this.pages && this._changeActivePage(t);
  }
  // Private
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...QT,
      ...e,
      ...t
    }, D(Ni, t, JT), t;
  }
  _changeActivePage(t) {
    this._activePage = t, this._toggleDisableState(), this._renderRows();
  }
  _clearClassList(t) {
    ["hover", "bordered", "borderless", "sm", "striped"].forEach((e) => {
      this._options[e] && !t[e] && h.removeDataAttribute(`data-te-${e}`);
    });
  }
  _emitSelectEvent() {
    c.trigger(this._element, Gv, {
      selectedRows: this.rows.filter(
        (t) => this._selected.indexOf(t.rowIndex) !== -1
      ),
      selectedIndexes: this._selected,
      allSelected: this._selected.length === this.rows.length
    });
  }
  _getRows(t = []) {
    const e = d.findOne("tbody", this._element);
    return e ? [...d.find("tr", e).map((n) => d.find("td", n).map((o) => o.innerHTML)), ...t] : t;
  }
  _getColumns(t = []) {
    const e = d.findOne("thead", this._element);
    if (!e)
      return t;
    const i = d.findOne("tr", e);
    return [...d.find("th", i).map((o) => ({
      label: o.innerHTML,
      ...h.getDataAttributes(o)
    })), ...t];
  }
  _getCSSValue(t) {
    return typeof t == "string" ? t : `${t}px`;
  }
  _getOptions(t) {
    const e = {
      ...GT,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(Ni, e, XT), e;
  }
  _setActiveRows() {
    d.find(fi, this._element).forEach((t) => {
      this._selected.includes(h.getDataAttribute(t, "index")) ? h.addClass(t, `active ${this._classes.selectableRow}`) : h.removeClass(t, `active ${this._classes.selectableRow}`);
    });
  }
  _setEntries(t) {
    this._options = this._getOptions({
      ...this._options,
      entries: t.target.value
    }), this._activePage > this.pages - 1 && (this._activePage = this.pages - 1), this._toggleDisableState(), this._renderRows();
  }
  _setSelected() {
    d.find(go, this._element).forEach(
      (t) => {
        const e = h.getDataAttribute(t, "rowIndex");
        t.checked = this._selected.includes(e);
      }
    ), this._setActiveRows();
  }
  _setActiveSortIcon(t) {
    d.find(mo, this._element).forEach((e) => {
      const i = this._options.sortOrder === "desc" && e === t ? 180 : 0;
      h.style(e, {
        transform: `rotate(${i}deg)`
      }), e === t && this._options.sortOrder ? h.addClass(e, "opacity-100") : h.removeClass(e, "opacity-100");
    });
  }
  _setup() {
    this._renderTable(), this._options.pagination && this._setupPagination(), this._options.edit && this._setupEditable(), this._options.clickableRows && this._setupClickableRows(), this._options.selectable && this._setupSelectable(), this._setupScroll(), this._setupSort();
  }
  _setupClickableRows() {
    d.find(fi, this._element).forEach((t) => {
      const e = h.getDataAttribute(t, "index");
      h.addClass(t, "cursor-pointer"), c.on(t, "click", (i) => {
        d.matches(i.target, go) || c.trigger(this._element, qv, {
          index: e,
          row: this.rows[e]
        });
      });
    });
  }
  _setupEditable() {
    d.find(fi, this._element).forEach((t) => {
      const e = h.getDataAttribute(t, "index");
      d.find(fo, t).forEach((i) => {
        c.on(i, "input", (n) => this._updateRow(n, e));
      });
    });
  }
  _setupScroll() {
    const t = d.findOne(Vv, this._element), e = {};
    if (this._options.maxHeight && (e.maxHeight = this._getCSSValue(this._options.maxHeight)), this._options.maxWidth) {
      const i = this._getCSSValue(this._options.maxWidth);
      e.maxWidth = i, h.style(this._element, { maxWidth: i });
    }
    if (h.style(t, e), h.addClass(t, `${this._classes.scroll}`), this._options.fixedHeader) {
      let i = d.find(Wv, this._element);
      this._options.selectable && (i = i.filter((n, o) => (h.addClass(
        n,
        `${this._classes.fixedHeader} ${this._classes.color}`
      ), o !== 0))), i.forEach((n, o) => {
        h.addClass(
          n,
          `${this._classes.fixedHeader} ${this._classes.color}`
        ), this.columns[o].fixed && h.addClass(n, "!z-40");
      });
    }
    this._perfectScrollbar = new mh(t);
  }
  _setupSort() {
    d.find(mo, this._element).forEach((t) => {
      const e = h.getDataAttribute(t, "sort"), [i] = d.parents(t, "th");
      if (this.columns.sort)
        h.addClass(i, "cursor-pointer");
      else
        return;
      e === this._options.sortField && this._setActiveSortIcon(t), c.on(i, "click", () => {
        this._options.sortField === e && this._options.sortOrder === "asc" ? this._options.sortOrder = "desc" : this._options.sortField === e && this._options.sortOrder === "desc" ? this._options.sortOrder = this._options.forceSort ? "asc" : null : this._options.sortOrder = "asc", this._options.sortField = e, this._activePage = 0, this._performSort(), this._setActiveSortIcon(t);
      });
    });
  }
  _performSort() {
    this._toggleDisableState(), this._renderRows();
  }
  _setupSelectable() {
    this._checkboxes = d.find(go, this._element), this._headerCheckbox = d.findOne(
      Fv,
      this._element
    ), c.on(
      this._headerCheckbox,
      "input",
      (t) => this._toggleSelectAll(t)
    ), this._checkboxes.forEach((t) => {
      const e = h.getDataAttribute(t, "rowIndex");
      c.on(
        t,
        "input",
        (i) => this._toggleSelectRow(i, e)
      );
    });
  }
  _setupPagination() {
    this._paginationRight = d.findOne(
      Yv,
      this._element
    ), this._paginationLeft = d.findOne(
      jv,
      this._element
    ), c.on(
      this._paginationRight,
      "click",
      () => this._changeActivePage(this._activePage + 1)
    ), c.on(
      this._paginationLeft,
      "click",
      () => this._changeActivePage(this._activePage - 1)
    ), this._options.fullPagination && (this._paginationStart = d.findOne(
      Kv,
      this._element
    ), this._paginationEnd = d.findOne(
      zv,
      this._element
    ), c.on(
      this._paginationStart,
      "click",
      () => this._changeActivePage(0)
    ), c.on(
      this._paginationEnd,
      "click",
      () => this._changeActivePage(this.pages - 1)
    )), this._toggleDisableState(), this._setupPaginationSelect();
  }
  _setupPaginationSelect() {
    this._select = d.findOne(Xv, this._element), this._selectInstance = new _r(this._select), c.on(
      this._select,
      "valueChange.te.select",
      (t) => this._setEntries(t)
    );
  }
  _removeEventListeners() {
    this._options.pagination && (c.off(this._paginationRight, "click"), c.off(this._paginationLeft, "click"), c.off(this._select, "valueChange.te.select"), this._options.fullPagination && (c.off(this._paginationStart, "click"), c.off(this._paginationEnd, "click"))), this._options.edit && d.find(fo, this._element).forEach((t) => {
      c.off(t, "input");
    }), this._options.clickableRows && d.find(fi, this._element).forEach((t) => {
      c.off(t, "click");
    }), d.find(mo, this._element).forEach((t) => {
      const [e] = d.parents(t, "th");
      c.off(e, "click");
    }), this._options.selectable && (c.off(this._headerCheckbox, "input"), this._checkboxes.forEach((t) => {
      c.off(t, "input");
    }));
  }
  _renderTable() {
    this._element.innerHTML = wl(this.tableOptions).table, this._formatCells(), c.trigger(this._element, xl);
  }
  _renderRows() {
    const t = d.findOne("tbody", this._element);
    if (this._options.pagination) {
      const e = d.findOne(
        Uv,
        this._element
      );
      e.innerText = this.navigationText;
    }
    t.innerHTML = wl(this.tableOptions).rows, this._formatCells(), this._options.edit && this._setupEditable(), this._options.selectable && (this._setupSelectable(), this._setSelected()), this._options.clickableRows && this._setupClickableRows(), c.trigger(this._element, xl);
  }
  _formatCells() {
    d.find(fi, this._element).forEach((e) => {
      const i = h.getDataAttribute(e, "index");
      d.find(fo, e).forEach((o) => {
        const r = h.getDataAttribute(o, "field"), a = this.columns.find((l) => l.field === r);
        a && a.format !== null && a.format(o, this.rows[i][r]);
      });
    });
  }
  _toggleDisableState() {
    this._options.pagination !== false && (this._activePage === 0 || this._options.loading ? (this._paginationLeft.setAttribute("disabled", ""), this._options.fullPagination && this._paginationStart.setAttribute("disabled", "")) : (this._paginationLeft.removeAttribute("disabled"), this._options.fullPagination && this._paginationStart.removeAttribute("disabled")), this._activePage === this.pages - 1 || this._options.loading || this.pages === 0 ? (this._paginationRight.setAttribute("disabled", ""), this._options.fullPagination && this._paginationEnd.setAttribute("disabled", "")) : (this._paginationRight.removeAttribute("disabled"), this._options.fullPagination && this._paginationEnd.removeAttribute("disabled")));
  }
  _toggleSelectAll(t) {
    t.target.checked ? this._selected = this.rows.map((e) => e.rowIndex) : this._selected = [], this._setSelected(), this._emitSelectEvent();
  }
  _toggleSelectRow(t, e) {
    t.target.checked ? this._options.multi && !this._selected.includes(e) ? this._selected = [...this._selected, e] : (this._selected = [e], this._checkboxes.forEach((i) => {
      i !== t.target && (i.checked = false);
    })) : this._selected = this._selected.filter((i) => i !== e), this._options.multi && !t.target.checked && (this._headerCheckbox.checked = false), this._setActiveRows(), this._emitSelectEvent();
  }
  _updateRow(t, e) {
    const i = h.getDataAttribute(t.target, "field"), n = t.target.textContent, o = this._rows[e];
    if (Array.isArray(o)) {
      const a = this.columns.find((l) => l.field === i).columnIndex;
      o[a] = n;
    } else
      o[i] = n;
    c.trigger(this._element, Zv, {
      rows: this._rows,
      columns: this._columns
    });
  }
  static jQueryInterface(t, e, i) {
    return this.each(function() {
      let n = y.getData(this, Ei);
      const o = typeof t == "object" && t;
      if (!(!n && /dispose/.test(t)) && (n || (n = new _gh(this, o, e)), typeof t == "string")) {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](e, i);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, Ei);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Ol = "rating";
var qs = "te.rating";
var tE = "data-te-rating-init";
var eE = "[data-te-rating-icon-ref]";
var ni = `.${qs}`;
var iE = "ArrowLeft";
var sE = "ArrowRight";
var nE = {
  tooltip: "string",
  value: "(string|number)",
  readonly: "boolean",
  after: "string",
  before: "string",
  dynamic: "boolean",
  active: "string"
};
var oE = {
  tooltip: "top",
  value: "",
  readonly: false,
  after: "",
  before: "",
  dynamic: false,
  active: "fill-current"
};
var Sl = `onSelect${ni}`;
var rE = `onHover${ni}`;
var Il = `keyup${ni}`;
var Dl = `focusout${ni}`;
var $l = `keydown${ni}`;
var Ll = `mousedown${ni}`;
var qC = class {
  constructor(t, e) {
    this._element = t, this._icons = d.find(eE, this._element), this._options = this._getConfig(e), this._index = -1, this._savedIndex = null, this._originalClassList = [], this._originalIcons = [], this._fn = {}, this._tooltips = [], this._element && (y.setData(t, qs, this), this._init());
  }
  // Getters
  static get NAME() {
    return Ol;
  }
  dispose() {
    y.removeData(this._element, qs), this._options.readonly || (c.off(this._element, Il), c.off(this._element, Dl), c.off(this._element, $l), this._element.removeEventListener("mouseleave", this._fn.mouseleave), this._icons.forEach((t, e) => {
      c.off(t, Ll), t.removeEventListener("mouseenter", this._fn.mouseenter[e]), h.removeClass(t, "cursor-pointer");
    }), this._tooltips.forEach((t) => {
      t._element.removeAttribute(tE), t.dispose();
    }), this._icons.removeAttribute("tabIndex")), this._element = null;
  }
  // Private
  _init() {
    this._options.readonly || (this._bindMouseEnter(), this._bindMouseLeave(), this._bindMouseDown(), this._bindKeyDown(), this._bindKeyUp(), this._bindFocusLost(), this._icons.forEach((t) => {
      h.addClass(t, "cursor-pointer");
    })), this._options.dynamic && (this._saveOriginalClassList(), this._saveOriginalIcons()), this._setCustomText(), this._setToolTips(), this._options.value && (this._index = this._options.value - 1, this._updateRating(this._index));
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...oE,
      ...e,
      ...t
    }, D(Ol, t, nE), t;
  }
  _bindMouseEnter() {
    this._fn.mouseenter = [], this._icons.forEach((t, e) => {
      t.addEventListener(
        "mouseenter",
        // this._fn.mouseenter[i] is needed to create reference and unpin events after call dispose
        // prettier-ignore
        this._fn.mouseenter[e] = (i) => {
          this._index = this._icons.indexOf(i.target), this._updateRating(this._index), this._triggerEvents(t, rE);
        }
      );
    });
  }
  _bindMouseLeave() {
    this._element.addEventListener(
      "mouseleave",
      // this._fn.mouseleave is needed to create reference and unpin events after call dispose
      // prettier-ignore
      this._fn.mouseleave = () => {
        this._savedIndex !== null ? (this._updateRating(this._savedIndex), this._index = this._savedIndex) : this._options.value ? (this._updateRating(this._options.value - 1), this._index = this._options.value - 1) : (this._index = -1, this._clearRating());
      }
    );
  }
  _bindMouseDown() {
    this._icons.forEach((t) => {
      c.on(t, Ll, () => {
        this._setElementOutline("none"), this._savedIndex = this._index, this._triggerEvents(t, Sl);
      });
    });
  }
  _bindKeyDown() {
    this._element.tabIndex = 0, c.on(
      this._element,
      $l,
      (t) => this._updateAfterKeyDown(t)
    );
  }
  _bindKeyUp() {
    c.on(
      this._element,
      Il,
      () => this._setElementOutline("auto")
    );
  }
  _bindFocusLost() {
    c.on(
      this._element,
      Dl,
      () => this._setElementOutline("none")
    );
  }
  _setElementOutline(t) {
    this._element.style.outline = t;
  }
  _triggerEvents(t, e) {
    c.trigger(t, e, {
      value: this._index + 1
    });
  }
  _updateAfterKeyDown(t) {
    const e = this._icons.length - 1, i = this._index;
    t.key === sE && this._index < e && (this._index += 1), t.key === iE && this._index > -1 && (this._index -= 1), i !== this._index && (this._savedIndex = this._index, this._updateRating(this._savedIndex), this._triggerEvents(this._icons[this._savedIndex], Sl));
  }
  _updateRating(t) {
    this._clearRating(), this._options.dynamic && this._restoreOriginalIcon(t), this._icons.forEach((e, i) => {
      i <= t && h.addClass(e.querySelector("svg"), this._options.active);
    });
  }
  _clearRating() {
    this._icons.forEach((t, e) => {
      const i = t.querySelector("svg");
      this._options.dynamic && (t.classList = this._originalClassList[e], i.innerHTML = this._originalIcons[e]), h.removeClass(i, this._options.active);
    });
  }
  _setToolTips() {
    this._icons.forEach((t, e) => {
      const i = h.getDataAttribute(t, "toggle");
      t.title && !i && (h.setDataAttribute(t, "toggle", "tooltip"), this._tooltips[e] = new ii(t, {
        placement: this._options.tooltip
      }));
    });
  }
  _setCustomText() {
    this._icons.forEach((t) => {
      const e = h.getDataAttribute(t, "after"), i = h.getDataAttribute(t, "before");
      e && t.insertAdjacentHTML("afterEnd", e), i && t.insertAdjacentHTML("beforeBegin", i);
    });
  }
  _saveOriginalClassList() {
    this._icons.forEach((t) => {
      const e = t.classList.value;
      this._originalClassList.push(e);
    });
  }
  _saveOriginalIcons() {
    this._icons.forEach((t) => {
      const e = t.querySelector("svg").innerHTML;
      this._originalIcons.push(e);
    });
  }
  _restoreOriginalIcon(t) {
    const e = this._originalClassList[t], i = this._originalIcons[t];
    this._icons.forEach((n, o) => {
      if (o <= t) {
        const r = n.querySelector("svg");
        r.innerHTML = i, n.classList = e;
      }
    });
  }
  // Static
  static getInstance(t) {
    return y.getData(t, qs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var bo = "popconfirm";
var Ci = "te.popconfirm";
var bh = `.${Ci}`;
var aE = `cancel${bh}`;
var lE = `confirm${bh}`;
var cE = "[data-te-popconfirm-body]";
var vo = "data-te-popconfirm-popover";
var hE = "data-te-popconfirm-modal";
var Nl = "data-te-popconfirm-backdrop";
var dE = {
  popconfirmMode: "string",
  message: "string",
  cancelText: "(null|string)",
  okText: "(null|string)",
  popconfirmIconTemplate: "string",
  cancelLabel: "(null|string)",
  confirmLabel: "(null|string)",
  position: "(null|string)"
};
var uE = {
  popconfirmMode: "inline",
  message: "Are you sure?",
  cancelText: "Cancel",
  okText: "OK",
  popconfirmIconTemplate: "",
  cancelLabel: "Cancel",
  confirmLabel: "Confirm",
  position: "bottom"
};
var pE = {
  backdrop: "string",
  body: "string",
  btnCancel: "string",
  btnConfirm: "string",
  btnsContainer: "string",
  fade: "string",
  icon: "string",
  message: "string",
  messageText: "string",
  modal: "string",
  popover: "string"
};
var _E = {
  backdrop: "h-full w-full z-[1070] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center",
  body: "p-[1rem] bg-white rounded-[0.5rem] opacity-0 dark:bg-neutral-700",
  btnCancel: "inline-block rounded bg-primary-100 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200",
  btnConfirm: "inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
  btnsContainer: "flex justify-end space-x-2",
  fade: "transition-opacity duration-[150ms] ease-linear",
  icon: "pr-2",
  message: "flex mb-3",
  messageText: "text-neutral-600 dark:text-white",
  modal: "absolute w-[300px] z-[1080] shadow-sm rounded-[0.5rem]",
  popover: "w-[300px] border-0 rounded-[0.5rem] z-[1080] shadow-sm"
};
var vh = class _vh {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._popper = null, this._cancelButton = "", this._confirmButton = "", this._isOpen = false, this._uid = this._element.id ? `popconfirm-${this._element.id}` : rt("popconfirm-"), t && y.setData(t, Ci, this), this._clickHandler = this.open.bind(this), c.on(this._element, "click", this._clickHandler);
  }
  // Getters
  static get NAME() {
    return bo;
  }
  get container() {
    return d.findOne(`#${this._uid}`);
  }
  get popconfirmBody() {
    return d.findOne(
      cE,
      this.container
    );
  }
  // Public
  dispose() {
    (this._isOpen || this.container !== null) && this.close(), y.removeData(this._element, Ci), c.off(this._element, "click", this._clickHandler), this._element = null;
  }
  open() {
    this._isOpen || (this._options.popconfirmMode === "inline" ? this._openPopover(this._getPopoverTemplate()) : this._openModal(this._getModalTemplate()), this._handleCancelButtonClick(), this._handleConfirmButtonClick(), this._listenToEscapeKey(), this._listenToOutsideClick());
  }
  close() {
    if (this._isOpen) {
      if (this._popper !== null || d.findOne(`[${vo}]`) !== null)
        c.on(
          this.popconfirmBody,
          "transitionend",
          this._handlePopconfirmTransitionEnd.bind(this)
        ), h.removeClass(this.popconfirmBody, "opacity-100");
      else {
        const t = d.findOne(
          `[${Nl}]`
        );
        h.removeClass(this.popconfirmBody, "opacity-100"), document.body.removeChild(t), this._isOpen = false;
      }
      c.off(document, "click", this._handleOutsideClick.bind(this)), c.off(document, "keydown", this._handleEscapeKey.bind(this));
    }
  }
  _handlePopconfirmTransitionEnd(t) {
    if (t.target !== this.popconfirmBody)
      return;
    const e = d.findOne(
      `[${vo}]`
    );
    c.off(this.popconfirmBody, "transitionend"), this._isOpen && t && t.propertyName === "opacity" && (this._popper.destroy(), e && document.body.removeChild(e), this._isOpen = false);
  }
  // Private
  _getPopoverTemplate() {
    const t = $("div"), e = this._getPopconfirmTemplate();
    return t.setAttribute(vo, ""), h.addClass(t, this._classes.popover), t.id = this._uid, t.innerHTML = e, t;
  }
  _getModalTemplate() {
    const t = $("div"), e = this._getPopconfirmTemplate();
    return t.setAttribute(hE, ""), h.addClass(t, `${this._classes.modal}`), t.id = this._uid, t.innerHTML = e, t;
  }
  _getPopconfirmTemplate() {
    return `<div data-te-popconfirm-body class="${this._classes.body}">
      <p class="${this._classes.message}">
      ${this._options.popconfirmIconTemplate ? `<span class="${this._classes.icon}">${this._options.popconfirmIconTemplate}</span>` : ""}
      <span class="${this._classes.messageText}">${this._options.message}</span>
      </p>
      <div class="${this._classes.btnsContainer}">
      ${this._options.cancelText ? `<button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-cancel" aria-label="${this._options.cancelLabel}"
        class="${this._classes.btnCancel}">${this._options.cancelText}</button>` : ""}
      <button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-confirm"
      aria-label="${this._options.confirmLabel}"
      class="${this._classes.btnConfirm}">${this._options.okText ? this._options.okText : "Ok"}</button>
      </div>
    </div>`;
  }
  _getConfig(t) {
    return t = {
      ...uE,
      ...h.getDataAttributes(this._element),
      ...t
    }, D(bo, t, dE), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ..._E,
      ...e,
      ...t
    }, D(bo, t, pE), t;
  }
  _openPopover(t) {
    this._popper = Ce(this._element, t, {
      placement: this._translatePositionValue(),
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 5]
          }
        }
      ]
    }), document.body.appendChild(t), setTimeout(() => {
      h.addClass(
        this.popconfirmBody,
        `${this._classes.fade} opacity-100`
      ), this._isOpen = true;
    }, 0);
  }
  _openModal(t) {
    const e = $("div");
    e.setAttribute(Nl, ""), h.addClass(e, this._classes.backdrop), document.body.appendChild(e), e.appendChild(t), h.addClass(this.popconfirmBody, "opacity-100"), this._isOpen = true;
  }
  _handleCancelButtonClick() {
    const t = this.container;
    this._cancelButton = d.findOne(
      "#popconfirm-button-cancel",
      t
    ), Ze.getOrCreateInstance(this._cancelButton, { rippleColor: "light" }), this._cancelButton !== null && c.on(this._cancelButton, "click", () => {
      this.close(), c.trigger(this._element, aE);
    });
  }
  _handleConfirmButtonClick() {
    const t = this.container;
    this._confirmButton = d.findOne(
      "#popconfirm-button-confirm",
      t
    ), Ze.getOrCreateInstance(this._confirmButton, { rippleColor: "light" }), c.on(this._confirmButton, "click", () => {
      this.close(), c.trigger(this._element, lE);
    });
  }
  _listenToEscapeKey() {
    c.on(document, "keydown", this._handleEscapeKey.bind(this));
  }
  _handleEscapeKey(t) {
    t.keyCode === Fi && this.close();
  }
  _listenToOutsideClick() {
    c.on(document, "click", this._handleOutsideClick.bind(this));
  }
  _handleOutsideClick(t) {
    const e = this.container, i = t.target === e, n = e && e.contains(t.target), o = t.target === this._element, r = this._element && this._element.contains(t.target);
    !i && !n && !o && !r && this.close();
  }
  _translatePositionValue() {
    switch (this._options.position) {
      case "top left":
        return "top-end";
      case "top":
        return "top";
      case "top right":
        return "top-start";
      case "bottom left":
        return "bottom-end";
      case "bottom":
        return "bottom";
      case "bottom right":
        return "bottom-start";
      case "left":
        return "left";
      case "left top":
        return "left-end";
      case "left bottom":
        return "left-start";
      case "right":
        return "right";
      case "right top":
        return "right-end";
      case "right bottom":
        return "right-start";
      case void 0:
        return "bottom";
      default:
        return "bottom";
    }
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = y.getData(this, Ci), n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t))) {
        if (!i)
          return new _vh(this, n);
        if (typeof t == "string") {
          if (typeof i[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, Ci);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var To = "lightbox";
var Ai = "te.lightbox";
var fE = `.${Ai}`;
var mE = ".data-api";
var Ie = `click${fE}${mE}`;
var Th = "[data-te-lightbox-init]";
var gE = `${Th} img:not([data-te-lightbox-disabled])`;
var Ml = "data-te-lightbox-caption";
var bE = "data-te-lightbox-disabled";
var It = "data-te-lightbox-active";
var vE = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
`;
var TE = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
`;
var EE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
`;
var CE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
</svg>
`;
var AE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
</svg>
`;
var yE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
</svg>
`;
var wE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`;
var kE = {
  container: "string",
  zoomLevel: "(number|string)",
  prevIconTemplate: "string",
  nextIconTemplate: "string",
  showFullscreenIconTemplate: "string",
  hideFullscreenIconTemplate: "string",
  zoomInIconTemplate: "string",
  closeIconTemplate: "string",
  zoomOutIconTemplate: "string",
  spinnerContent: "string"
};
var xE = {
  container: "body",
  zoomLevel: 1,
  prevIconTemplate: vE,
  nextIconTemplate: TE,
  showFullscreenIconTemplate: EE,
  hideFullscreenIconTemplate: CE,
  zoomInIconTemplate: AE,
  zoomOutIconTemplate: yE,
  closeIconTemplate: wE,
  spinnerContent: "Loading..."
};
var OE = {
  caption: "text-white text-ellipsis overflow-hidden whitespace-nowrap mx-[10px] text-center",
  captionWrapper: "fixed left-0 bottom-0 w-full h-[50px] flex justify-center items-center",
  closeBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  fullscreenBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  gallery: "invisible fixed left-0 top-0 w-full h-full z-[1100] pointer-events-none opacity-0 bg-[#000000e6] transition-all duration-[400ms] motion-reduce:transition-none",
  galleryContent: "fixed top-[50px] left-[50px] w-[calc(100%-100px)] h-[calc(100%-100px)]",
  galleryCounter: "flex justify-center items-center px-[10px] mb-0 h-full text-[#b3b3b3]",
  img: "absolute left-0 top-0 w-full max-h-full h-auto cursor-pointer pointer-events-auto",
  imgWrapper: "absolute top-0 left-0 w-full h-full opacity-0 transform scale-[0.25] transition-all duration-[400ms] ease-out pointer-events-none motion-reduce:transition-none motion-reduce:transform-none",
  leftTools: "float-left h-full",
  loader: "fixed left-0 top-0 z-[2] w-full h-full text-neutral-50 opacity-1 flex justify-center items-center pointer-events-none transition-opacity duration-[1000ms] motion-reduce:transition-none",
  nextBtn: "border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  nextBtnWrapper: "fixed right-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none",
  prevBtn: "border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  prevBtnWrapper: "fixed left-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none",
  rightTools: "float-right",
  spinner: "inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]",
  spinnerContent: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
  toolbar: "absolute top-0 left-0 w-full h-[50px] z-20 transition-opacity duration-[400ms] motion-reduce:transition-none",
  vertical: "h-full max-h-full w-auto",
  zoomBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none"
};
var SE = {
  caption: "string",
  captionWrapper: "string",
  closeBtn: "string",
  fullscreenBtn: "string",
  gallery: "string",
  galleryContent: "string",
  galleryCounter: "string",
  img: "string",
  imgWrapper: "string",
  leftTools: "string",
  loader: "string",
  nextBtn: "string",
  nextBtnWrapper: "string",
  prevBtn: "string",
  prevBtnWrapper: "string",
  rightTools: "string",
  spinner: "string",
  spinnerContent: "string",
  toolbar: "string",
  vertical: "string",
  zoomBtn: "string"
};
var Zs = class _Zs {
  constructor(t, e = {}, i) {
    this._element = t, this._options = e, this._classes = this._getClasses(i), this._getContainer(), this._id = `lightbox-${Math.random().toString(36).substr(2, 9)}`, this._activeImg = 0, this._images = [], this._zoom = 1, this._gallery = null, this._galleryToolbar = null, this._galleryContent = null, this._loader = null, this._imgCounter = null, this._animating = false, this._fullscreen = false, this._zoomBtn = null, this._fullscreenBtn = null, this._toolsToggleTimer = 0, this._mousedown = false, this._mousedownPositionX = 0, this._mousedownPositionY = 0, this._originalPositionX = 0, this._originalPositionY = 0, this._positionX = 0, this._positionY = 0, this._zoomTimer = 0, this._tapCounter = 0, this._tapTime = 0, this._rightArrow = null, this._leftArrowWrapper = null, this._rightArrowWrapper = null, this._initiated = false, this._multitouch = false, this._touchZoomPosition = [], this._element && (y.setData(t, Ai, this), this.init());
  }
  // Getters
  static get NAME() {
    return To;
  }
  get activeImg() {
    return this._activeImg;
  }
  get currentImg() {
    return d.findOne(
      `[${It}]`,
      this._galleryContent
    );
  }
  get options() {
    const t = {
      ...xE,
      ...h.getDataAttributes(this._element),
      ...this._options
    };
    return D(To, t, kE), t;
  }
  // Public
  init() {
    this._initiated || (this._appendTemplate(), this._initiated = true);
  }
  open(t = 0) {
    this._getImages(), this._setActiveImg(t), this._sortImages(), this._triggerEvents("open", "opened"), this._loadImages().then((e) => {
      this._resizeImages(e), this._toggleTemplate(), this._addEvents(), this._focusFullscreenBtn();
    });
  }
  close() {
    this.reset(), this._removeEvents(), this._toggleTemplate(), this._triggerEvents("close", "closed");
  }
  slide(t = "right") {
    this._animating === true || this._images.length <= 1 || (this._triggerEvents("slide", "slided"), this._beforeSlideEvents(), t === "right" && this._slideHorizontally(t), t === "left" && this._slideHorizontally(t), t === "first" && this._slideToTarget(t), t === "last" && this._slideToTarget(t), this._afterSlideEvents());
  }
  zoomIn() {
    this._zoom >= 3 || (this._triggerEvents("zoomIn", "zoomedIn"), this._zoom += parseFloat(this.options.zoomLevel), h.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn());
  }
  zoomOut() {
    this._zoom <= 1 || (this._triggerEvents("zoomOut", "zoomedOut"), this._zoom -= parseFloat(this.options.zoomLevel), h.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn(), this._updateImgPosition());
  }
  toggleFullscreen() {
    this._fullscreen === false ? (this._fullscreenBtn.setAttribute(It, ""), this._fullscreenBtn.innerHTML = this.options.hideFullscreenIconTemplate, this._gallery.requestFullscreen && this._gallery.requestFullscreen(), this._fullscreen = true) : (this._fullscreenBtn.removeAttribute(It), document.exitFullscreen && document.exitFullscreen(), this._fullscreen = false);
  }
  reset() {
    this._restoreDefaultFullscreen(), this._restoreDefaultPosition(), this._restoreDefaultZoom(), clearTimeout(this._toolsToggleTimer), clearTimeout(this._doubleTapTimer);
  }
  dispose() {
    c.off(
      document,
      Ie,
      gE,
      this.toggle
    ), this._galleryContent && this._removeEvents(), this._gallery && this._gallery.remove(), y.removeData(this._element, Ai), this._element = null;
  }
  // Private
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...OE,
      ...e,
      ...t
    }, D(To, t, SE), t;
  }
  _getImages() {
    const e = d.find("img", this._element).filter(
      (i) => !i.hasAttribute(bE)
    );
    this._images = e;
  }
  _getContainer() {
    this._container = d.findOne(this.options.container);
  }
  _setActiveImg(t) {
    this._activeImg = typeof t == "number" ? t : this._images.indexOf(t.target);
  }
  _appendTemplate() {
    this._gallery = $("div"), h.addClass(this._gallery, `${this._classes.gallery}`), this._element.dataset.id = this._id, this._gallery.id = this._id, this._appendLoader(), this._appendToolbar(), this._appendContent(), this._appendArrows(), this._appendCaption(), this._container.append(this._gallery);
  }
  _appendToolbar() {
    this._galleryToolbar = $("div"), this._imgCounter = $("p"), this._fullscreenBtn = $("button"), this._zoomBtn = $("button");
    const t = $("button"), e = $("div"), i = $("div");
    h.addClass(this._galleryToolbar, `${this._classes.toolbar}`), h.addClass(this._imgCounter, `${this._classes.galleryCounter}`), h.addClass(this._fullscreenBtn, `${this._classes.fullscreenBtn}`), h.addClass(this._zoomBtn, `${this._classes.zoomInBtn}`), h.addClass(this._zoomBtn, this._classes.zoomBtn), h.addClass(e, `${this._classes.leftTools}`), h.addClass(i, `${this._classes.rightTools}`), h.addClass(t, `${this._classes.closeBtn}`), this._fullscreenBtn.innerHTML = this.options.showFullscreenIconTemplate, t.innerHTML = this.options.closeIconTemplate, this._zoomBtn.innerHTML = this.options.zoomInIconTemplate, this._fullscreenBtn.setAttribute("aria-label", "Toggle fullscreen"), this._zoomBtn.setAttribute("aria-label", "Zoom in"), t.setAttribute("aria-label", "Close"), c.on(
      this._fullscreenBtn,
      Ie,
      () => this.toggleFullscreen()
    ), c.on(
      this._zoomBtn,
      Ie,
      () => this._toggleZoom()
    ), c.on(t, Ie, () => this.close()), e.append(this._imgCounter), i.append(this._fullscreenBtn), i.append(this._zoomBtn), i.append(t), this._galleryToolbar.append(e), this._galleryToolbar.append(i), this._gallery.append(this._galleryToolbar);
  }
  _appendContent() {
    this._galleryContent = $("div"), h.addClass(
      this._galleryContent,
      `${this._classes.galleryContent}`
    ), this._gallery.append(this._galleryContent);
  }
  _appendLoader() {
    this._loader = $("div");
    const t = $("div"), e = $("span");
    h.addClass(this._loader, `${this._classes.loader}`), h.addClass(t, `${this._classes.spinner}`), h.addClass(e, `${this._classes.spinnerContent}`), t.setAttribute("role", "status"), e.innerHTML = this.options.spinnerContent, t.append(e), this._loader.append(t), this._gallery.append(this._loader);
  }
  _appendArrows() {
    this._leftArrowWrapper = $("div"), h.addClass(
      this._leftArrowWrapper,
      `${this._classes.prevBtnWrapper}`
    );
    const t = $("button");
    t.setAttribute("aria-label", "Previous"), h.addClass(t, `${this._classes.prevBtn}`), c.on(t, Ie, () => this.slide("left")), this._leftArrowWrapper.append(t), this._rightArrowWrapper = $("div"), h.addClass(
      this._rightArrowWrapper,
      `${this._classes.nextBtnWrapper}`
    ), this._rightArrow = $("button"), this._rightArrow.setAttribute("aria-label", "Next"), h.addClass(this._rightArrow, `${this._classes.nextBtn}`), c.on(this._rightArrow, Ie, () => this.slide()), this._rightArrowWrapper.append(this._rightArrow), this._rightArrow.innerHTML = this.options.nextIconTemplate, t.innerHTML = this.options.prevIconTemplate, this._getImages(), !(this._images.length <= 1) && (this._gallery.append(this._leftArrowWrapper), this._gallery.append(this._rightArrowWrapper));
  }
  _appendCaption() {
    const t = $("div"), e = $("p");
    e.setAttribute(Ml, ""), h.addClass(t, `${this._classes.captionWrapper}`), h.addClass(e, `${this._classes.caption}`), t.append(e), this._gallery.append(t);
  }
  _sortImages() {
    for (let t = 0; t < this._activeImg; t++)
      this._images.push(this._images.shift());
  }
  async _loadImages() {
    const t = [], e = [];
    this._galleryContent.innerHTML = "";
    let i = 0;
    return this._images.forEach((n, o) => {
      t.push(
        new Promise((r) => {
          const a = new Image(), l = $("div");
          h.addClass(l, `${this._classes.imgWrapper}`), h.addClass(a, `${this._classes.img}`), this._addImgStyles(a, l, i, o, n), l.append(a), this._galleryContent.append(l), a.onload = r, a.src = n.dataset.teImg || n.src, e.push(a), i += 100;
        })
      );
    }), await Promise.all(t), e;
  }
  _addImgStyles(t, e, i, n, o) {
    t.alt = o.alt, t.draggable = false, h.style(e, {
      position: "absolute",
      left: `${i}%`,
      top: 0
    }), (o.dataset.teCaption || o.dataset.teCaption === "") && (t.dataset.caption = o.dataset.teCaption), i === 0 ? (o.width < o.height && h.addClass(t, `${this._classes.vertical}`), h.style(e, { opacity: 1 }), t.setAttribute(It, "")) : t.removeAttribute(It), n === this._images.length - 1 && this._images.length > 1 && h.style(e, { left: "-100%" });
  }
  _resizeImages(t) {
    t.forEach((e) => {
      this._calculateImgSize(e);
    });
  }
  _calculateImgSize(t) {
    t.width >= t.height ? (t.style.width = "100%", t.style.maxWidth = "100%", t.style.height = "auto", t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`, t.style.left = 0) : (t.style.height = "100%", t.style.maxHeight = "100%", t.style.width = "auto", t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`, t.style.top = 0), t.width >= t.parentNode.offsetWidth && (t.style.width = `${t.parentNode.offsetWidth}px`, t.style.height = "auto", t.style.left = 0, t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`), t.height >= t.parentNode.offsetHeight && (t.style.height = `${t.parentNode.offsetHeight}px`, t.style.width = "auto", t.style.top = 0, t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`), this._positionX = parseFloat(t.style.left) || 0, this._positionY = parseFloat(t.style.top) || 0;
  }
  _onResize() {
    this._images = d.find("img", this._galleryContent), this._images.forEach((t) => {
      this._calculateImgSize(t);
    });
  }
  _onFullscreenChange() {
    (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) === void 0 && (this._fullscreen = false, this._fullscreenBtn.innerHTML = this.options.showFullscreenIconTemplate, this._fullscreenBtn.removeAttribute(It));
  }
  _beforeSlideEvents() {
    this._animationStart(), this._restoreDefaultZoom(), this._restoreDefaultPosition(), this._resetDoubleTap();
  }
  _slideHorizontally(t) {
    this._images = d.find("img", this._galleryContent), this._images.forEach((e) => {
      let i;
      t === "right" ? (i = parseInt(e.parentNode.style.left, 10) - 100, i < -100 && (i = (this._images.length - 2) * 100)) : (i = parseInt(e.parentNode.style.left, 10) + 100, i === (this._images.length - 1) * 100 && (i = -100)), this._slideImg(e, i);
    }), this._updateActiveImg(t);
  }
  _slideImg(t, e) {
    e === 0 ? (t.setAttribute(It, ""), h.style(t.parentNode, { opacity: 1, transform: "scale(1)" })) : (t.removeAttribute(It), h.style(t.parentNode, {
      opacity: 0,
      transform: "scale(0.25)"
    })), t.parentNode.style.left = `${e}%`;
  }
  _slideToTarget(t) {
    t === "first" && this._activeImg === 0 || t === "last" && this._activeImg === this._images.length - 1 || (this.reset(), this._removeEvents(), this._showLoader(), this._getImages(), this._activeImg = t === "first" ? 0 : this._images.length - 1, this._sortImages(), h.style(this.currentImg.parentNode, {
      transform: "scale(0.25)",
      opacity: 0
    }), setTimeout(() => {
      this._loadImages().then((e) => {
        this._resizeImages(e), this._addEvents(), this._updateCaption(), this._hideLoader(), setTimeout(() => {
          h.style(this.currentImg.parentNode, {
            transform: "scale(1)",
            opacity: 1
          });
        }, 10);
      });
    }, 400));
  }
  _updateActiveImg(t) {
    t === "right" && (this._activeImg === this._images.length - 1 ? this._activeImg = 0 : this._activeImg++), t === "left" && (this._activeImg === 0 ? this._activeImg = this._images.length - 1 : this._activeImg--);
  }
  _afterSlideEvents() {
    this._updateCounter(), this._updateCaption();
  }
  _updateCounter() {
    this._images.length <= 1 || setTimeout(() => {
      this._imgCounter.innerHTML = `${this._activeImg + 1} / ${this._images.length}`;
    }, 200);
  }
  _updateCaption() {
    setTimeout(() => {
      let t = this.currentImg.alt;
      (this.currentImg.dataset.caption || this.currentImg.dataset.caption === "") && (t = this.currentImg.dataset.caption), d.findOne(
        `[${Ml}]`,
        this._gallery
      ).innerHTML = t;
    }, 200);
  }
  _toggleTemplate() {
    this._gallery.style.visibility === "visible" ? (h.style(this.currentImg.parentNode, {
      transform: "scale(0.25)"
    }), setTimeout(() => {
      this._hideGallery(), this._enableScroll(), this._showLoader();
    }, 100)) : (this._showGallery(), this._disableScroll(), this._updateCounter(), this._updateCaption(), this._setToolsToggleTimout(), this._hideLoader());
  }
  _showLoader() {
    h.style(this._loader, { opacity: 1 });
  }
  _hideLoader() {
    h.style(this._loader, { opacity: 0 });
  }
  _hideGallery() {
    h.style(this._gallery, {
      opacity: 0,
      pointerEvents: "none",
      visibility: "hidden"
    });
  }
  _showGallery() {
    h.style(this._gallery, {
      opacity: 1,
      pointerEvents: "initial",
      visibility: "visible"
    }), setTimeout(() => {
      h.style(this.currentImg.parentNode, { transform: "scale(1)" });
    }, 50);
  }
  _toggleZoom() {
    this._zoom !== 1 ? this.zoomOut() : this.zoomIn();
  }
  _updateZoomBtn() {
    this._zoom > 1 ? (this._zoomBtn.setAttribute(It, ""), this._zoomBtn.setAttribute("aria-label", "Zoom out"), this._zoomBtn.innerHTML = this.options.zoomOutIconTemplate) : (this._zoomBtn.removeAttribute(It), this._zoomBtn.setAttribute("aria-label", "Zoom in"), this._zoomBtn.innerHTML = this.options.zoomInIconTemplate);
  }
  _updateImgPosition() {
    this._zoom === 1 && this._restoreDefaultPosition();
  }
  _addEvents() {
    const t = d.find("img", this._galleryContent);
    this._onWindowTouchmove = this._onWindowTouchmove.bind(this), this._onWindowTouchstart = this._onWindowTouchstart.bind(this), this._onImgMousedown = this._onMousedown.bind(this), this._onImgMousemove = this._onMousemove.bind(this), this._onImgWheel = this._onZoom.bind(this), this._onImgMouseup = this._onMouseup.bind(this), this._onImgTouchend = this._onTouchend.bind(this), this._onImgDoubleClick = this._onDoubleClick.bind(this), this._onWindowResize = this._onResize.bind(this), this._onWindowFullscreenChange = this._onFullscreenChange.bind(this), this._onAnyImgAction = this._resetToolsToggler.bind(this), this._onGalleryClick = this._onBackdropClick.bind(this), this._onKeyupEvent = this._onKeyup.bind(this), this._onRightArrowKeydownEvent = this._onRightArrowKeydown.bind(this), this._onFullscreenBtnKeydownEvent = this._onFullscreenBtnKeydown.bind(this), t.forEach((e) => {
      c.on(e, "mousedown", this._onImgMousedown, {
        passive: true
      }), c.on(e, "touchstart", this._onImgMousedown, {
        passive: true
      }), c.on(e, "mousemove", this._onImgMousemove, {
        passive: true
      }), c.on(e, "touchmove", this._onImgMousemove, {
        passive: true
      }), c.on(e, "wheel", this._onImgWheel, { passive: true }), c.on(e, "dblclick", this._onImgDoubleClick, {
        passive: true
      });
    }), document.addEventListener("touchmove", this._onWindowTouchmove, {
      passive: false
    }), c.on(window, "touchstart", this._onWindowTouchstart), c.on(window, "mouseup", this._onImgMouseup), c.on(window, "touchend", this._onImgTouchend), c.on(window, "resize", this._onWindowResize), c.on(window, "orientationchange", this._onWindowResize), c.on(window, "keyup", this._onKeyupEvent), c.on(window, "fullscreenchange", this._onWindowFullscreenChange), c.on(this._gallery, "mousemove", this._onAnyImgAction), c.on(this._gallery, "click", this._onGalleryClick), c.on(
      this._rightArrow,
      "keydown",
      this._onRightArrowKeydownEvent
    ), c.on(
      this._fullscreenBtn,
      "keydown",
      this._onFullscreenBtnKeydownEvent
    );
  }
  _removeEvents() {
    d.find("img", this._galleryContent).forEach((e) => {
      c.off(e, "mousedown", this._onImgMousedown), c.off(e, "touchstart", this._onImgMousedown), c.off(e, "mousemove", this._onImgMousemove), c.off(e, "touchmove", this._onImgMousemove), c.off(e, "wheel", this._onImgWheel), c.off(e, "dblclick", this._onImgDoubleClick);
    }), document.removeEventListener("touchmove", this._onWindowTouchmove, {
      passive: false
    }), c.off(window, "touchstart", this._onWindowTouchstart), c.off(window, "mouseup", this._onImgMouseup), c.off(window, "touchend", this._onImgTouchend), c.off(window, "resize", this._onWindowResize), c.off(window, "orientationchange", this._onWindowResize), c.off(window, "keyup", this._onKeyupEvent), c.off(
      window,
      "fullscreenchange",
      this._onWindowFullscreenChange
    ), c.off(this._gallery, "mousemove", this._onAnyImgAction), c.off(this._gallery, "click", this._onGalleryClick), c.off(
      this._rightArrow,
      "keydown",
      this._onRightArrowKeydownEvent
    ), c.off(
      this._fullscreenBtn,
      "keydown",
      this._onFullscreenBtnKeydownEvent
    );
  }
  _onMousedown(t) {
    const e = t.touches, i = e ? e[0].clientX : t.clientX, n = e ? e[0].clientY : t.clientY;
    this._originalPositionX = parseFloat(this.currentImg.style.left) || 0, this._originalPositionY = parseFloat(this.currentImg.style.top) || 0, this._positionX = this._originalPositionX, this._positionY = this._originalPositionY, this._mousedownPositionX = i * (1 / this._zoom) - this._positionX, this._mousedownPositionY = n * (1 / this._zoom) - this._positionY, this._mousedown = true, t.type === "touchstart" && t.touches.length > 1 && (this._multitouch = true, this._touchZoomPosition = t.touches);
  }
  _onMousemove(t) {
    if (!this._mousedown)
      return;
    const e = t.touches, i = e ? e[0].clientX : t.clientX, n = e ? e[0].clientY : t.clientY;
    if (e && this._resetToolsToggler(), !this._multitouch)
      if (this._zoom !== 1)
        this._positionX = i * (1 / this._zoom) - this._mousedownPositionX, this._positionY = n * (1 / this._zoom) - this._mousedownPositionY, h.style(this.currentImg, {
          left: `${this._positionX}px`,
          top: `${this._positionY}px`
        });
      else {
        if (this._images.length <= 1)
          return;
        this._positionX = i * (1 / this._zoom) - this._mousedownPositionX, h.style(this.currentImg, { left: `${this._positionX}px` });
      }
  }
  _onMouseup(t) {
    this._mousedown = false, this._moveImg(t.target);
  }
  _onTouchend(t) {
    this._mousedown = false, this._multitouch ? t.targetTouches.length === 0 && (this._multitouch = false, this._touchZoomPosition = []) : this._multitouch || (this._checkDoubleTap(t), this._moveImg(t.target));
  }
  _calculateTouchZoom(t) {
    const e = Math.hypot(
      this._touchZoomPosition[1].pageX - this._touchZoomPosition[0].pageX,
      this._touchZoomPosition[1].pageY - this._touchZoomPosition[0].pageY
    ), i = Math.hypot(
      t.touches[1].pageX - t.touches[0].pageX,
      t.touches[1].pageY - t.touches[0].pageY
    ), n = Math.abs(e - i), o = t.view.screen.width;
    n > o * 0.03 && (e <= i ? this.zoomIn() : this.zoomOut(), this._touchZoomPosition = t.touches);
  }
  _onWindowTouchstart(t) {
    t.touches.length > 1 && (this._multitouch = true, this._touchZoomPosition = t.touches);
  }
  _onWindowTouchmove(t) {
    t.preventDefault(), t.type === "touchmove" && t.targetTouches.length > 1 && this._calculateTouchZoom(t);
  }
  _onRightArrowKeydown(t) {
    switch (t.keyCode) {
      case 9:
        if (t.shiftKey)
          break;
        t.preventDefault(), this._focusFullscreenBtn();
        break;
    }
  }
  _onFullscreenBtnKeydown(t) {
    switch (t.keyCode) {
      case 9:
        if (!t.shiftKey)
          break;
        t.preventDefault(), this._focusRightArrow();
        break;
    }
  }
  _onKeyup(t) {
    switch (this._resetToolsToggler(), t.keyCode) {
      case 39:
        this.slide();
        break;
      case 37:
        this.slide("left");
        break;
      case 27:
        this.close();
        break;
      case 36:
        this.slide("first");
        break;
      case 35:
        this.slide("last");
        break;
      case 38:
        this.zoomIn();
        break;
      case 40:
        this.zoomOut();
        break;
    }
  }
  _focusFullscreenBtn() {
    setTimeout(() => {
      this._fullscreenBtn.focus();
    }, 100);
  }
  _focusRightArrow() {
    this._rightArrow.focus();
  }
  _moveImg(t) {
    if (this._multitouch || this._zoom !== 1 || t !== this.currentImg || this._images.length <= 1)
      return;
    const e = this._positionX - this._originalPositionX;
    e > 0 ? this.slide("left") : e < 0 && this.slide();
  }
  _checkDoubleTap(t) {
    clearTimeout(this._doubleTapTimer);
    const i = (/* @__PURE__ */ new Date()).getTime() - this._tapTime;
    this._tapCounter > 0 && i < 500 ? (this._onDoubleClick(t), this._doubleTapTimer = setTimeout(() => {
      this._tapTime = (/* @__PURE__ */ new Date()).getTime(), this._tapCounter = 0;
    }, 300)) : (this._tapCounter++, this._tapTime = (/* @__PURE__ */ new Date()).getTime());
  }
  _resetDoubleTap() {
    this._tapTime = 0, this._tapCounter = 0, clearTimeout(this._doubleTapTimer);
  }
  _onDoubleClick(t) {
    this._multitouch || (t.touches || this._setNewPositionOnZoomIn(t), this._zoom !== 1 ? this._restoreDefaultZoom() : this.zoomIn());
  }
  _onZoom(t) {
    if (t.deltaY > 0)
      this.zoomOut();
    else {
      if (this._zoom >= 3)
        return;
      this._setNewPositionOnZoomIn(t), this.zoomIn();
    }
  }
  _onBackdropClick(t) {
    this._resetToolsToggler(), t.target.tagName === "DIV" && this.close();
  }
  _setNewPositionOnZoomIn(t) {
    clearTimeout(this._zoomTimer), this._positionX = window.innerWidth / 2 - t.offsetX - 50, this._positionY = window.innerHeight / 2 - t.offsetY - 50, this.currentImg.style.transition = "all 0.5s ease-out", this.currentImg.style.left = `${this._positionX}px`, this.currentImg.style.top = `${this._positionY}px`, this._zoomTimer = setTimeout(() => {
      this.currentImg.style.transition = "none";
    }, 500);
  }
  _resetToolsToggler() {
    this._showTools(), clearTimeout(this._toolsToggleTimer), this._setToolsToggleTimout();
  }
  _setToolsToggleTimout() {
    this._toolsToggleTimer = setTimeout(() => {
      this._hideTools(), clearTimeout(this._toolsToggleTimer);
    }, 4e3);
  }
  _hideTools() {
    h.style(this._galleryToolbar, { opacity: 0 }), h.style(this._leftArrowWrapper, { opacity: 0 }), h.style(this._rightArrowWrapper, { opacity: 0 });
  }
  _showTools() {
    h.style(this._galleryToolbar, { opacity: 1 }), h.style(this._leftArrowWrapper, { opacity: 1 }), h.style(this._rightArrowWrapper, { opacity: 1 });
  }
  _disableScroll() {
    h.addClass(document.body, "overflow-y-hidden relative"), document.documentElement.scrollHeight > document.documentElement.clientHeight && h.addClass(document.body, "md:pr-[17px]");
  }
  _enableScroll() {
    setTimeout(() => {
      h.removeClass(document.body, "overflow-y-hidden relative"), h.removeClass(document.body, "md:pr-[17px]");
    }, 300);
  }
  _animationStart() {
    this._animating = true, setTimeout(() => {
      this._animating = false;
    }, 400);
  }
  _restoreDefaultZoom() {
    this._zoom !== 1 && (this._zoom = 1, h.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn(), this._updateImgPosition());
  }
  _restoreDefaultFullscreen() {
    this._fullscreen && this.toggleFullscreen();
  }
  _restoreDefaultPosition() {
    clearTimeout(this._zoomTimer);
    const t = this.currentImg;
    h.style(this.currentImg.parentNode, { left: 0, top: 0 }), h.style(this.currentImg, {
      transition: "all 0.5s ease-out",
      left: 0,
      top: 0
    }), this._calculateImgSize(t), setTimeout(() => {
      h.style(this.currentImg, { transition: "none" });
    }, 500);
  }
  async _triggerEvents(t, e) {
    c.trigger(this._element, `${t}.te.lightbox`), e && await setTimeout(() => {
      c.trigger(this._element, `${e}.te.lightbox`);
    }, 505);
  }
  static getInstance(t) {
    return y.getData(t, Ai);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static toggle() {
    return function(t) {
      const e = d.closest(
        t.target,
        `${Th}`
      );
      (_Zs.getInstance(e) || new _Zs(e)).open(t);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, Ai);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new _Zs(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
};
var IE = {
  isRequired: "This is required",
  isEmail: "Please enter a valid email address",
  isLongerThan: "This field must be longer than {length} characters",
  isShorterThan: "This field must be shorter than {length} characters",
  isChecked: "This is required",
  isPhone: "Please enter a valid phone number",
  isNumber: "Expected value with type Number",
  isString: "Expected value with type String",
  isBoolean: "Expected value with type Boolean",
  isDate: "Please enter a valid date",
  is12hFormat: "Please enter a valid time in 12h format",
  is24hFormat: "Please enter a valid time in 24h format"
};
var DE = {
  isRequired: (s, t) => (s == null ? void 0 : s.trim()) ? true : t,
  isEmail: (s, t) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s) ? true : t,
  isLongerThan: (s, t, e) => s.length > e ? true : t.replace("{length}", e),
  isShorterThan: (s, t, e) => s.length < e ? true : t.replace("{length}", e),
  isChecked: (s) => s ? true : "This is required",
  isPhone: (s, t) => s.length === 9 ? true : t,
  isNumber: (s, t) => s && !isNaN(Number(s)) ? true : t,
  isString: (s, t) => typeof s == "string" ? true : t,
  isBoolean: (s, t) => typeof s == "boolean" ? true : t,
  isDate: (s, t) => {
    const e = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
    return s.match(e) ? true : t;
  },
  is12hFormat: (s, t) => {
    const e = /^(0?[1-9]|1[0-2]):[0-5][0-9] [APap][mM]$/;
    return s.match(e) ? true : t;
  },
  is24hFormat: (s, t) => {
    const e = /^(?:[01]\d|2[0-3]):[0-5][0-9]$/;
    return s.match(e) ? true : t;
  }
};
var Eo = "validation";
var jo = "te.validation";
var fn = `.${jo}`;
var Eh = "data-te-validate";
var Os = "data-te-validated";
var Ss = "data-te-validation-state";
var Is = "data-te-validation-feedback";
var Co = "data-te-valid-feedback";
var Ds = "data-te-invalid-feedback";
var Rl = "data-te-validation-ruleset";
var $E = "data-te-submit-btn-ref";
var LE = `[${Eh}]`;
var NE = "[data-te-input-notch-ref] div";
var ME = `[${$E}]`;
var RE = `validated${fn}`;
var PE = `valid${fn}`;
var BE = `invalid${fn}`;
var HE = `changed${fn}`;
var VE = {
  validFeedback: "string",
  invalidFeedback: "string",
  disableFeedback: "boolean",
  customRules: "object",
  customErrorMessages: "object",
  activeValidation: "boolean",
  submitCallback: "(function|null)"
};
var Pl = {
  validFeedback: "Looks good!",
  invalidFeedback: "Something is wrong!",
  disableFeedback: false,
  customRules: {},
  customErrorMessages: {},
  activeValidation: false,
  submitCallback: null
};
var WE = {
  // default notch
  notchLeadingValid: "border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[-1px_0_0_#14a44d,_0_1px_0_0_#14a44d,_0_-1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]",
  notchMiddleValid: "border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[0_1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]",
  notchTrailingValid: "border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[1px_0_0_#14a44d,_0_-1px_0_0_#14a44d,_0_1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]",
  notchLeadingInvalid: "border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[-1px_0_0_#dc4c64,_0_1px_0_0_#dc4c64,_0_-1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]",
  notchMiddleInvalid: "border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[0_1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]",
  notchTrailingInvalid: "border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[1px_0_0_#dc4c64,_0_-1px_0_0_#dc4c64,_0_1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]",
  // basic inputs
  basicInputValid: "!border-[#14a44d] focus:!border-[#14a44d] focus:!shadow-[inset_0_0_0_1px_#14a44d]",
  basicInputInvalid: "!border-[#dc4c64] focus:!border-[#dc4c64] focus:!shadow-[inset_0_0_0_1px_#dc4c64]",
  // checkbox
  checkboxValid: "checked:!border-[#14a44d] checked:!bg-[#14a44d] checked:after:!bg-[#14a44d]",
  checkboxInvalid: "checked:!border-[#dc4c64] checked:!bg-[#dc4c64] checked:after:!bg-[#dc4c64]",
  radioValid: "checked:!border-[#14a44d] checked:after:!bg-[#14a44d]",
  radioInvalid: "checked:!border-[#dc4c64] checked:after:!bg-[#dc4c64]",
  // labels
  labelValid: "!text-[#14a44d]",
  labelInvalid: "!text-[#dc4c64]",
  // feedback
  validFeedback: "absolute top-full left-0 m-1 w-auto text-sm text-[#14a44d] animate-[fade-in_0.3s_both]",
  invalidFeedback: "absolute top-full left-0 m-1 w-auto text-sm text-[#dc4c64] animate-[fade-in_0.3s_both]",
  // element validated
  elementValidated: "mb-8"
};
var FE = {
  notchLeadingValid: "string",
  notchMiddleValid: "string",
  notchTrailingValid: "string",
  notchLeadingInvalid: "string",
  notchMiddleInvalid: "string",
  notchTrailingInvalid: "string",
  basicInputValid: "string",
  basicInputInvalid: "string",
  checkboxValid: "string",
  checkboxInvalid: "string",
  radioValid: "string",
  radioInvalid: "string",
  labelValid: "string",
  labelInvalid: "string",
  validFeedback: "string",
  invalidFeedback: "string",
  elementValidated: "string"
};
var Ch = class _Ch extends gt {
  constructor(t, e, i) {
    super(t), this._element = t, this._element && y.setData(t, jo, this), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._isValid = true, this._shouldApplyInputEvents = true, this._submitCallback = null, this._errorMessages = {
      ...IE,
      ...this._config.customErrorMessages
    }, this._validationElements = this._getValidationElements(), this._validationElements.forEach(({ element: n, input: o }) => {
      this._createFeedbackWrapper(n, o);
    }), this._validationObserver = this._watchForValidationChanges(), this._validationObserver.observe(this._element, { attributes: true }), this._submitButton = null, this._handleSubmitButton(), this._validationResult = [];
  }
  // Getters
  static get DefaultType() {
    return VE;
  }
  static get Default() {
    return Pl;
  }
  static get NAME() {
    return Eo;
  }
  // Public
  dispose() {
    var t;
    (t = this._validationObserver) == null || t.disconnect(), this._validationObserver = null, this._submitCallback = null, this._element.removeAttribute(Os), this._removeValidationTraces(), this._validationResult = [], this._submitButton && c.off(this._submitButton, "click"), this._config.activeValidation && (this._validationElements.forEach((e) => {
      const { input: i } = e;
      c.off(i, "input");
    }), this._shouldApplyInputEvents = true);
  }
  // Private
  _removeValidationTraces() {
    this._removeFeedbackWrapper(), this._validationElements.forEach(({ element: t, classes: e, initialHTML: i }) => {
      t.className = e, t.innerHTML = i, t.removeAttribute(Ss), t.removeAttribute(Ds), t.removeAttribute(Co);
    }), this._validationElements = [];
  }
  _getValidationElements() {
    return d.find(
      LE,
      this._element
    ).map((e) => {
      const i = d.findOne("input", e) || d.findOne("textarea", e);
      return {
        id: i.name || i.id || rt("validation-"),
        element: e,
        type: e.getAttribute(Eh),
        input: i,
        validFeedback: e.getAttribute(Co),
        invalidFeedback: e.getAttribute(Ds),
        classes: e.className,
        initialHTML: e.innerHTML,
        ruleset: e.getAttribute(Rl)
      };
    });
  }
  _createFeedbackWrapper(t, e) {
    if (t.querySelectorAll(`[${Is}]`).length > 0)
      return;
    const i = document.createElement("span");
    i.setAttribute(Is, ""), e.parentNode.appendChild(i);
  }
  _removeFeedbackWrapper() {
    d.find(
      `[${Is}]`,
      this._element
    ).forEach((e) => {
      e.remove();
    });
  }
  _watchForValidationChanges() {
    return new MutationObserver((e) => {
      e.forEach((i) => {
        const { attributeName: n } = i;
        n === Os && (this._handleValidation(), this._config.activeValidation && this._shouldApplyInputEvents && this._applyInputEvents());
      });
    });
  }
  _handleValidation() {
    this._element.getAttribute(Os) && (this._validationResult = [], this._isValid = true, this._validationElements.forEach(
      (t) => this._validateSingleElement(t)
    ), this._emitEvents(this._isValid), this._submitCallback && this._submitCallback(this._isValid));
  }
  _validateSingleElement(t) {
    var p;
    const { element: e, type: i, input: n, ruleset: o, id: r } = t;
    o && this._validateByRuleset(t);
    const a = e.getAttribute(Ss);
    if (a !== "valid" && a !== "invalid")
      return;
    const l = a.replace(
      a.charAt(0),
      a.charAt(0).toUpperCase()
    );
    i === "input" && this._restyleNotches(e, l), i === "basic" && this._restyleBasicInputs(n, l), (i === "checkbox" || i === "radio") && this._restyleCheckboxes(n, l, i), this._restyleLabels(e, l), a === "invalid" && (this._isValid = false), this._config.disableFeedback || this._applyFeedback(e, a), c.trigger(this._element, HE, {
      value: {
        name: r,
        result: a,
        validation: (p = this._validationResult[r]) == null ? void 0 : p.validation
      }
    });
  }
  _validateByRuleset({ element: t, type: e, invalidFeedback: i, input: n, id: o }) {
    const r = this._getRuleset(t);
    if (!r.length)
      return;
    const a = e === "checkbox" || e === "radio" ? n.checked : n.value;
    let l = "", p = [];
    for (const u of r) {
      const _ = u.callback(
        a,
        this._errorMessages[u.name] || this._config.invalidFeedback,
        u.parameter
      );
      p.push({
        result: _ === true,
        name: u.name,
        fullName: u.fullName
      }), typeof _ == "string" && !l && (l = _);
    }
    if (this._validationResult[o] = { element: t, validation: p }, !l) {
      t.setAttribute(Ss, "valid");
      return;
    }
    t.setAttribute(Ss, "invalid"), i || t.setAttribute(Ds, l);
  }
  _handleInputChange(t) {
    this._validateSingleElement(t);
  }
  _getRuleset(t) {
    const i = t.getAttribute(Rl).split("|");
    let n = [];
    const o = {
      ...DE,
      ...this._config.customRules
    };
    return i.forEach((r) => {
      const a = this._getRuleData(r, o);
      a.callback ? n.push(a) : console.warn(`Rule ${r} does not exist`);
    }), n;
  }
  _getRuleData(t, e) {
    const i = t.split("(");
    return {
      callback: e[i[0]],
      parameter: i[1] ? i[1].split(")")[0] : null,
      name: i[0],
      fullName: t
    };
  }
  _applyFeedback(t, e) {
    const i = d.findOne(
      `[${Is}]`,
      t
    ), n = t.getAttribute(Co) || this._config.validFeedback, o = t.getAttribute(Ds) || this._config.invalidFeedback;
    h.addClass(t, this._classes.elementValidated), i.textContent = e === "valid" ? n : o, i.className = this._classes[e === "valid" ? "validFeedback" : "invalidFeedback"];
  }
  _restyleCheckboxes(t, e, i) {
    h.removeClass(t, this._classes.checkboxValid), h.removeClass(t, this._classes.checkboxInvalid), h.addClass(t, this._classes[`${i}${e}`]);
  }
  _restyleBasicInputs(t, e) {
    h.removeClass(t, this._classes.basicInputValid), h.removeClass(t, this._classes.basicInputInvalid), h.addClass(t, this._classes[`basicInput${e}`]);
  }
  _restyleNotches(t, e) {
    d.find(NE, t).forEach((n, o) => {
      let r = o === 0 ? "notchLeading" : o === 1 ? "notchMiddle" : "notchTrailing";
      n.className = "", h.addClass(n, Kc[r]), r += e, h.addClass(n, this._classes[r]);
    });
  }
  _restyleLabels(t, e) {
    const i = d.find("label", t);
    i.length && i.forEach((n) => {
      h.removeClass(n, this._classes.labelValid), h.removeClass(n, this._classes.labelInvalid), h.addClass(n, this._classes[`label${e}`]);
    });
  }
  _emitEvents(t) {
    if (c.trigger(this._element, RE), t) {
      c.trigger(this._element, PE, {
        value: this._validationResult
      });
      return;
    }
    c.trigger(this._element, BE, {
      value: this._validationResult
    });
  }
  _applyInputEvents() {
    this._validationElements.forEach((t) => {
      const { input: e } = t;
      c.on(
        e,
        "input",
        () => this._handleInputChange(t)
      );
    }), this._shouldApplyInputEvents = false;
  }
  _handleSubmitButton() {
    this._submitButton = d.findOne(
      ME,
      this._element
    ), this._submitButton && c.on(
      this._submitButton,
      "click",
      (t) => this._handleSubmitButtonClick(t)
    );
  }
  _handleSubmitButtonClick(t) {
    if (this._element.setAttribute(Os, true), this._config.submitCallback) {
      this._submitCallback = (e) => this._config.submitCallback(t, e);
      return;
    }
  }
  _getConfig(t) {
    return t = {
      ...Pl,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, D(Eo, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...WE,
      ...e,
      ...t
    }, D(Eo, t, FE), t;
  }
  // Static
  static getInstance(t) {
    return y.getData(t, jo);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Ch.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
var Xi = class {
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection({ x: t, y: e }) {
    return {
      x: {
        direction: t < 0 ? "left" : "right",
        value: Math.abs(t)
      },
      y: {
        direction: e < 0 ? "up" : "down",
        value: Math.abs(e)
      }
    };
  }
  _getOrigin({ x: t, y: e }, { x: i, y: n }) {
    return {
      x: t - i,
      y: e - n
    };
  }
  _getDistanceBetweenTwoPoints(t, e, i, n) {
    return Math.hypot(e - t, n - i);
  }
  _getMidPoint({ x1: t, x2: e, y1: i, y2: n }) {
    return {
      x: (t + e) / 2,
      y: (i + n) / 2
    };
  }
  _getVectorLength({ x1: t, x2: e, y1: i, y2: n }) {
    return Math.sqrt((e - t) ** 2 + (n - i) ** 2);
  }
  _getRightMostTouch(t) {
    let e = null;
    const i = Number.MIN_VALUE;
    return t.forEach((n) => {
      n.clientX > i && (e = n);
    }), e;
  }
  _getAngle(t, e, i, n) {
    return Math.atan2(n - e, i - t);
  }
  _getAngularDistance(t, e) {
    return e - t;
  }
  _getCenterXY({ x1: t, x2: e, y1: i, y2: n }) {
    return {
      x: t + (e - t) / 2,
      y: i + (n - i) / 2
    };
  }
  _getPinchTouchOrigin(t) {
    const [e, i] = t, n = {
      x1: e.clientX,
      x2: i.clientX,
      y1: e.clientY,
      y2: i.clientY
    };
    return [this._getVectorLength(n), this._getCenterXY(n)];
  }
  _getPosition({ x1: t, x2: e, y1: i, y2: n }) {
    return { x1: t, x2: e, y1: i, y2: n };
  }
};
var Ao = "press";
var YE = "pressup";
var jE = {
  time: "number",
  pointers: "number"
};
var KE = {
  time: 250,
  pointers: 1
};
var zE = class extends Xi {
  constructor(t, e = {}) {
    super(), this._element = t, this._options = this._getConfig(e), this._timer = null;
  }
  // Getters
  static get NAME() {
    return Ao;
  }
  handleTouchStart(t) {
    const { time: e, pointers: i } = this._options;
    t.touches.length === i && (this._timer = setTimeout(() => {
      c.trigger(this._element, Ao, { touch: t, time: e }), c.trigger(this._element, YE, { touch: t });
    }, e));
  }
  handleTouchEnd() {
    clearTimeout(this._timer);
  }
  _getConfig(t) {
    const e = {
      ...KE,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(Ao, e, jE), e;
  }
};
var UE = "swipe";
var XE = {
  threshold: "number",
  direction: "string"
};
var GE = {
  threshold: 10,
  direction: "all"
};
var qE = class {
  constructor(t, e) {
    this._element = t, this._startPosition = null, this._options = this._getConfig(e);
  }
  handleTouchStart(t) {
    this._startPosition = this._getCoordinates(t);
  }
  handleTouchMove(t) {
    if (!this._startPosition)
      return;
    const e = this._getCoordinates(t), i = {
      x: e.x - this._startPosition.x,
      y: e.y - this._startPosition.y
    }, n = this._getDirection(i);
    if (this._options.direction === "all") {
      if (n.y.value < this._options.threshold && n.x.value < this._options.threshold)
        return;
      const r = n.y.value > n.x.value ? n.y.direction : n.x.direction;
      c.trigger(this._element, `swipe${r}`, { touch: t }), c.trigger(this._element, "swipe", { touch: t, direction: r }), this._startPosition = null;
      return;
    }
    const o = this._options.direction === "left" || this._options === "right" ? "x" : "y";
    n[o].direction === this._options.direction && n[o].value > this._options.threshold && (c.trigger(this._element, `swipe${n[o].direction}`, {
      touch: t
    }), this._startPosition = null);
  }
  handleTouchEnd() {
    this._startPosition = null;
  }
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection(t) {
    return {
      x: {
        direction: t.x < 0 ? "left" : "right",
        value: Math.abs(t.x)
      },
      y: {
        direction: t.y < 0 ? "up" : "down",
        value: Math.abs(t.y)
      }
    };
  }
  _getConfig(t) {
    const e = {
      ...GE,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(UE, e, XE), e;
  }
};
var qt = "pan";
var ZE = `${qt}start`;
var QE = `${qt}end`;
var JE = `${qt}move`;
var t0 = "left";
var e0 = "right";
var i0 = {
  threshold: "number",
  direction: "string",
  pointers: "number"
};
var s0 = {
  threshold: 20,
  direction: "all",
  pointers: 1
};
var n0 = class extends Xi {
  constructor(t, e = {}) {
    super(), this._element = t, this._options = this._getConfig(e), this._startTouch = null;
  }
  // Getters
  static get NAME() {
    return qt;
  }
  handleTouchStart(t) {
    this._startTouch = this._getCoordinates(t), this._movedTouch = t, c.trigger(this._element, ZE, { touch: t });
  }
  handleTouchMove(t) {
    t.type === "touchmove" && t.preventDefault();
    const { threshold: e, direction: i } = this._options, n = this._getCoordinates(t), o = this._getCoordinates(this._movedTouch), r = this._getOrigin(n, this._startTouch), a = this._getOrigin(n, o), l = this._getDirection(r), p = this._getDirection(a), { x: u, y: _ } = l;
    if (i === "all" && (_.value > e || u.value > e)) {
      const g = _.value > u.value ? _.direction : u.direction;
      c.trigger(this._element, `${qt}${g}`, { touch: t }), c.trigger(this._element, qt, {
        ...a,
        touch: t
      });
    }
    const f = i === t0 || i === e0 ? "x" : "y";
    p[f].direction === i && l[f].value > e && c.trigger(this._element, `${qt}${i}`, {
      touch: t,
      [f]: n[f] - o[f]
    }), this._movedTouch = t, c.trigger(this._element, JE, { touch: t });
  }
  handleTouchEnd(t) {
    t.type === "touchend" && t.preventDefault(), this._movedTouch = null, this._startTouch = null, c.trigger(this._element, QE, { touch: t });
  }
  _getConfig(t) {
    const e = {
      ...s0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(qt, e, i0), e;
  }
};
var Ye = "pinch";
var o0 = `${Ye}end`;
var r0 = `${Ye}start`;
var a0 = `${Ye}move`;
var l0 = {
  threshold: "number",
  pointers: "number"
};
var c0 = {
  threshold: 10,
  pointers: 2
};
var h0 = class extends Xi {
  constructor(t, e = {}) {
    super(), this._element = t, this._options = this._getConfig(e), this._startTouch = null, this._origin = null, this._touch = null, this._math = null, this._ratio = null;
  }
  // Getters
  static get NAME() {
    return Ye;
  }
  get isNumber() {
    return typeof this._startTouch == "number" && typeof this._touch == "number" && // eslint-disable-next-line no-restricted-globals
    !isNaN(this._startTouch) && // eslint-disable-next-line no-restricted-globals
    !isNaN(this._touch);
  }
  handleTouchStart(t) {
    if (t.touches.length !== this._options.pointers)
      return;
    t.type === "touchstart" && t.preventDefault();
    const [e, i] = this._getPinchTouchOrigin(t.touches);
    this._touch = e, this._origin = i, this._startTouch = this._touch, c.trigger(this._element, r0, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    });
  }
  handleTouchMove(t) {
    const { threshold: e, pointers: i } = this._options;
    t.touches.length === i && (t.type === "touchmove" && t.preventDefault(), this._touch = this._getPinchTouchOrigin(t.touches)[0], this._ratio = this._touch / this._startTouch, this.isNumber && (this._origin.x > e || this._origin.y > e) && (this._startTouch = this._touch, c.trigger(this._element, Ye, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    }), c.trigger(this._element, a0, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    })));
  }
  handleTouchEnd(t) {
    this.isNumber && (this._startTouch = null, c.trigger(this._element, o0, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    }));
  }
  _getConfig(t) {
    const e = {
      ...c0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(Ye, e, l0), e;
  }
};
var yo = "tap";
var d0 = {
  interval: "number",
  time: "number",
  taps: "number",
  pointers: "number"
};
var u0 = {
  interval: 500,
  time: 250,
  taps: 1,
  pointers: 1
};
var p0 = class extends Xi {
  constructor(t, e) {
    super(), this._element = t, this._options = this._getConfig(e), this._timer = null, this._tapCount = 0;
  }
  // Getters
  static get NAME() {
    return yo;
  }
  handleTouchStart(t) {
    const { x: e, y: i } = this._getCoordinates(t), { interval: n, taps: o, pointers: r } = this._options;
    return t.touches.length === r && (this._tapCount += 1, this._tapCount === 1 && (this._timer = setTimeout(() => {
      this._tapCount = 0;
    }, n)), this._tapCount === o && (clearTimeout(this._timer), this._tapCount = 0, c.trigger(this._element, yo, {
      touch: t,
      origin: {
        x: e,
        y: i
      }
    }))), t;
  }
  handleTouchEnd() {
  }
  handleTouchMove() {
  }
  _getConfig(t) {
    const e = {
      ...u0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(yo, e, d0), e;
  }
};
var Mi = "rotate";
var _0 = `${Mi}end`;
var f0 = `${Mi}start`;
var m0 = {
  angle: "number",
  pointers: "number"
};
var g0 = {
  angle: 0,
  pointers: 2
};
var b0 = class extends Xi {
  constructor(t, e) {
    super(), this._element = t, this._options = this._getConfig(e), this._origin = {};
  }
  // Getters
  static get NAME() {
    return Mi;
  }
  handleTouchStart(t) {
    t.type === "touchstart" && t.preventDefault(), !(t.touches.length < 2) && (this._startTouch = t, this._origin = {}, c.trigger(this._element, f0, { touch: t }));
  }
  handleTouchMove(t) {
    t.type === "touchmove" && t.preventDefault();
    let e, i;
    const n = t.touches;
    if (n.length === 1 && this._options.pointers === 1) {
      const { left: o, top: r, width: a, height: l } = this._element.getBoundingClientRect();
      e = {
        x: o + a / 2,
        y: r + l / 2
      }, i = n[0];
    } else if (t.touches.length === 2 && this._options.pointers === 2) {
      const [o, r] = t.touches, a = {
        x1: r.clientX,
        x2: o.clientX,
        y1: r.clientY,
        y2: o.clientY
      };
      e = this._getMidPoint(a), i = this._getRightMostTouch(t.touches);
    } else
      return;
    this.currentAngle = this._getAngle(
      e.x,
      e.y,
      i.clientX,
      i.clientY
    ), this._origin.initialAngle ? (this._origin.change = this._getAngularDistance(
      this._origin.previousAngle,
      this.currentAngle
    ), this._origin.distance += this._origin.change) : (this._origin.initialAngle = this._origin.previousAngle = this.currentAngle, this._origin.distance = this._origin.change = 0), this._origin.previousAngle = this.currentAngle, this.rotate = {
      currentAngle: this.currentAngle,
      distance: this._origin.distance,
      change: this._origin.change
    }, c.trigger(this._element, Mi, { ...this.rotate, touch: t });
  }
  handleTouchEnd(t) {
    t.type === "touchend" && t.preventDefault(), this._origin = {}, c.trigger(this._element, _0, { touch: t });
  }
  _getConfig(t) {
    const e = {
      ...g0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(Mi, e, m0), e;
  }
};
var Ko = "touch";
var wo = `te.${Ko}`;
var v0 = {
  event: "string"
};
var T0 = {
  event: "swipe"
};
var Ah = class _Ah {
  constructor(t, e = {}) {
    this._element = t, this._options = this._getConfig(e), this._event = this._options.event, this.swipe = this._event === "swipe" ? new qE(t, e) : null, this.press = this._event === "press" ? new zE(t, e) : null, this.pan = this._event === "pan" ? new n0(t, e) : null, this.pinch = this._event === "pinch" ? new h0(t, e) : null, this.tap = this._event === "tap" ? new p0(t, e) : null, this.rotate = this._event === "rotate" ? new b0(t, e) : null, this._touchStartHandler = (i) => this._handleTouchStart(i), this._touchMoveHandler = (i) => this._handleTouchMove(i), this._touchEndHandler = (i) => this._handleTouchEnd(i), c.on(this._element, "touchstart", this._touchStartHandler), c.on(this._element, "touchmove", this._touchMoveHandler), c.on(this._element, "touchend", this._touchEndHandler), this._element && y.setData(t, wo, this);
  }
  // Getters
  static get NAME() {
    return Ko;
  }
  dispose() {
    c.off(this._element, "touchstart", this._touchStartHandler), c.off(this._element, "touchmove", this._touchMoveHandler), c.off(this._element, "touchend", this._touchEndHandler), this.swipe = null, this.press = null, this.pan = null, this.pinch = null, this.tap = null, this.rotate = null;
  }
  _getConfig(t) {
    const e = {
      ...T0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(Ko, e, v0), e;
  }
  _handleTouchStart(t) {
    this[this._event].handleTouchStart(t);
  }
  _handleTouchMove(t) {
    this[this._event].handleTouchMove && this[this._event].handleTouchMove(t);
  }
  _handleTouchEnd(t) {
    this[this._event].handleTouchEnd(t);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, wo);
      const i = typeof t == "object" && t;
      if (!(!e && /dispose/.test(t)) && (e || (e = new _Ah(this, i)), typeof t == "string")) {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        return e[t];
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, wo);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var zo = "smoothScroll";
var yi = `te.${zo}`;
var mr = `.${yi}`;
var E0 = {
  container: "string",
  offset: "number",
  easing: "string",
  duration: "number"
};
var C0 = {
  container: "body",
  offset: 0,
  easing: "linear",
  duration: 500
};
var A0 = `scrollStart${mr}`;
var y0 = `scrollEnd${mr}`;
var w0 = `scrollCancel${mr}`;
var yh = class _yh {
  constructor(t, e = {}) {
    this._element = t, this._options = this._getConfig(e), this._href = this._element.getAttribute("href"), this.isCancel = false, this._element && (y.setData(t, yi, this), this._setup());
  }
  // getters
  static get NAME() {
    return zo;
  }
  get isWindow() {
    return this._options.container === "body";
  }
  get containerToScroll() {
    return this.isWindow ? document.documentElement : d.findOne(
      this._options.container,
      document.documentElement
    );
  }
  get elFromHrefExist() {
    return !!d.findOne(this._href, this.containerToScroll);
  }
  get offsetFromEl() {
    const t = this.containerToScroll.scrollTop, e = d.findOne(this._href, this.containerToScroll);
    if (this.isWindow)
      return h.offset(e).top - this._options.offset + t;
    const i = e.getBoundingClientRect().y, n = this.containerToScroll.getBoundingClientRect().y;
    return i - n - this._options.offset + t;
  }
  get easingFunction() {
    const t = this._options.easing, e = `_motion${t[0].toUpperCase()}${t.slice(1)}`;
    return this[e] ? this[e] : this._motionLinear;
  }
  // public
  dispose() {
    c.off(this._element, "click", this._handleClick), y.removeData(this._element, yi), this._element = null;
  }
  cancelScroll() {
    this.isCancel = true;
  }
  // private
  _getConfig(t) {
    const e = {
      ...C0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(zo, e, E0), e;
  }
  _inViewport() {
    if (this.isWindow)
      return true;
    const t = this.containerToScroll.getBoundingClientRect();
    return t.top >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
  _setup() {
    const t = typeof this._href < "u", e = this._href.includes("#");
    t && e && this.elFromHrefExist && (this._scrollOnClickEvent(), this._preventNativeScroll());
  }
  _scrollOnClickEvent() {
    c.on(this._element, "click", (t) => {
      this._handleClick(t);
    });
  }
  _handleClick(t) {
    t.preventDefault(), this.isCancel = false, c.trigger(this._element, A0);
    const e = this.containerToScroll, i = this.containerToScroll.scrollTop, n = this.offsetFromEl, o = 0, r = 1 / this._options.duration, a = 4.25, l = this.easingFunction;
    this._inViewport() ? this._scrollOnNextTick(
      e,
      i,
      n,
      o,
      r,
      a,
      l
    ) : (this._scrollOnNextTick(
      document.documentElement,
      document.documentElement.scrollTop,
      this.containerToScroll.offsetTop,
      o,
      r,
      a,
      l
    ), setTimeout(() => {
      this._scrollOnNextTick(
        e,
        i,
        n,
        o,
        r,
        a,
        l
      ), this.isCancel = false;
    }, this._options.duration));
  }
  _scrollOnNextTick(t, e, i, n, o, r, a) {
    const l = n < 0, p = n > 1, u = o <= 0;
    if (l || p || u || this.isCancel) {
      if (this.isCancel) {
        this.isInViewport && (this.isCancel = false), c.trigger(this._element, w0);
        return;
      }
      c.trigger(this._element, y0), t.scrollTop = i;
      return;
    }
    t.scrollTo({
      top: e - (e - i) * a(n)
    }), n += o * r, setTimeout(() => {
      this._scrollOnNextTick(
        t,
        e,
        i,
        n,
        o,
        r,
        a
      );
    });
  }
  _preventDefault(t) {
    t.preventDefault();
  }
  _preventNativeScroll() {
    let t = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: () => t = true
        })
      );
    } catch (n) {
      this._scrollError = n;
    }
    const e = t ? { passive: false } : false, i = "onwheel" in $("div") ? "wheel" : "mousewheel";
    this.isWindow && (this._deleteScrollOnStart(e, i), this._addScrollOnEnd(e, i), this._addScrollOnCancel(e, i));
  }
  _deleteScrollOnStart(t, e) {
    c.on(this._element, "scrollStart.te.smoothScroll", () => {
      window.addEventListener(e, this._preventDefault, t), window.addEventListener("touchmove", this._preventDefault, t);
    });
  }
  _addScrollOnEnd(t, e) {
    c.on(this._element, "scrollEnd.te.smoothScroll", () => {
      window.removeEventListener(e, this._preventDefault, t), window.removeEventListener("touchmove", this._preventDefault, t);
    });
  }
  _addScrollOnCancel(t, e) {
    c.on(this._element, "scrollCancel.te.smoothScroll", () => {
      window.removeEventListener(e, this._preventDefault, t), window.removeEventListener("touchmove", this._preventDefault, t);
    });
  }
  // Motions
  // Linear
  _motionLinear(t) {
    return t;
  }
  // Ease-In
  _motionEaseInQuad(t) {
    return t * t;
  }
  _motionEaseInCubic(t) {
    return t * t * t;
  }
  _motionEaseInQuart(t) {
    return t * t * t * t;
  }
  _motionEaseInQuint(t) {
    return t * t * t * t * t;
  }
  // Ease-In-Out
  _motionEaseInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  _motionEaseInOutCubic(t) {
    return t /= 0.5, t < 1 ? t * t * t / 2 : (t -= 2, (t * t * t + 2) / 2);
  }
  _motionEaseInOutQuart(t) {
    return t /= 0.5, t < 1 ? 0.5 * t * t * t * t : (t -= 2, -(t * t * t * t - 2) / 2);
  }
  _motionEaseInOutQuint(t) {
    return t /= 0.5, t < 1 ? t * t * t * t * t / 2 : (t -= 2, (t * t * t * t * t + 2) / 2);
  }
  // Ease-Out
  _motionEaseOutQuad(t) {
    return -t * (t - 2);
  }
  _motionEaseOutCubic(t) {
    return t--, t * t * t + 1;
  }
  _motionEaseOutQuart(t) {
    return t--, -(t * t * t * t - 1);
  }
  _motionEaseOutQuint(t) {
    return t--, t * t * t * t * t + 1;
  }
  // static
  static getInstance(t) {
    return y.getData(t, yi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, yi);
      const i = typeof t == "object" && t;
      if (e || (e = new _yh(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
var Bl = "lazyLoad";
var $s = "te.lazyLoad";
var k0 = "[data-te-lazy-load-init]";
var Hl = "data-te-lazy-load";
var x0 = "onLoad.te.lazy";
var O0 = "onError.te.lazy";
var Vl = ["img", "video"];
var S0 = {
  lazySrc: "(string|null)",
  lazyDelay: "number",
  lazyAnimation: "string",
  lazyOffset: "number",
  lazyPlaceholder: "(string|undefined)",
  lazyError: "(string|undefined)"
};
var I0 = {
  lazySrc: null,
  lazyDelay: 500,
  lazyAnimation: "[fade-in_1s_ease-in-out]",
  lazyOffset: 0
};
var Uo = class _Uo {
  constructor(t, e) {
    this._element = t, this._element && y.setData(t, $s, this), this._options = this._getConfig(e), this.scrollHandler = this._scrollHandler.bind(this), this.errorHandler = this._setElementError.bind(this), this._childrenInstances = null, this._init();
  }
  // Getters
  static get NAME() {
    return Bl;
  }
  get offsetValues() {
    return this._element.getBoundingClientRect();
  }
  get inViewport() {
    if (this.parent) {
      const t = this.parent.getBoundingClientRect();
      return t.y > 0 && t.y < window.innerHeight && this.offsetValues.y >= t.y && this.offsetValues.y <= t.y + t.height && this.offsetValues.y <= window.innerHeight;
    }
    return this.offsetValues.top + this._options.lazyOffset <= window.innerHeight && this.offsetValues.bottom >= 0;
  }
  get parent() {
    const [t] = d.parents(
      this._element,
      k0
    );
    return t;
  }
  get node() {
    return this._element.nodeName;
  }
  get isContainer() {
    return !d.matches(this._element, Vl);
  }
  // Public
  dispose() {
    y.removeData(this._element, $s), this._animation && (this._animation.dispose(), this._animation = null), this._element = null, this._childrenInstances && this._childrenInstances.forEach((t) => t.dispose());
  }
  // Private
  _init() {
    if (this._element.setAttribute(Hl, ""), this.isContainer) {
      this._setupContainer();
      return;
    }
    this._setupElement();
  }
  _setupElement() {
    c.one(this._element, "error", this.errorHandler), this._options.lazyPlaceholder && this._setPlaceholder(), this._animation = new pr(this._element, {
      animation: `${this._options.lazyAnimation}`,
      animationStart: "onLoad"
    }), c.one(this._element, "load", () => this._scrollHandler()), this.parent && c.on(this.parent, "scroll", this.scrollHandler), c.on(window, "scroll", this.scrollHandler);
  }
  _scrollHandler() {
    this.inViewport && (this._timeout = setTimeout(() => {
      this._setSrc(), this._element.removeAttribute(Hl), this._removeAttrs(), this._animation.init();
    }, this._options.lazyDelay), this.parent && c.off(this.parent, "scroll", this.scrollHandler), c.off(window, "scroll", this.scrollHandler));
  }
  _setElementError() {
    !this._options.lazyError || this._element.src === this._options.lazyError ? this._element.alt = "404 not found" : this._element.setAttribute("src", this._options.lazyError), c.trigger(this._element, O0);
  }
  _setSrc() {
    this._element.setAttribute("src", this._options.lazySrc), c.trigger(this._element, x0);
  }
  _setPlaceholder() {
    this.node === "IMG" ? this._element.setAttribute("src", this._options.lazyPlaceholder) : this.node === "VIDEO" && this._element.setAttribute("poster", this._options.lazyPlaceholder);
  }
  _removeAttrs() {
    ["src", "delay", "animation", "placeholder", "offset", "error"].forEach(
      (t) => {
        h.removeDataAttribute(this._element, `lazy-${t}`);
      }
    );
  }
  _setupContainer() {
    this._childrenInstances = d.children(
      this._element,
      Vl
    ).map((t) => new _Uo(t, this._options));
  }
  _getConfig(t) {
    const e = {
      ...I0,
      ...t,
      ...h.getDataAttributes(this._element)
    };
    return D(Bl, e, S0), e;
  }
  // Static
  static getInstance(t) {
    return y.getData(t, $s);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, $s);
      const i = typeof t == "object" && t;
      if (e || (e = new _Uo(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
var Wl = "clipboard";
var wi = "te.clipboard";
var D0 = `.${wi}`;
var $0 = {
  clipboardTarget: null
};
var L0 = {
  clipboardTarget: "null|string"
};
var N0 = `copy${D0}`;
var wh = class _wh {
  constructor(t, e = {}) {
    this._element = t, this._options = e, this._element && (y.setData(t, wi, this), this._initCopy = this._initCopy.bind(this), this._setup());
  }
  // Getters
  static get NAME() {
    return Wl;
  }
  get options() {
    const t = {
      ...$0,
      ...h.getDataAttributes(this._element),
      ...this._options
    };
    return D(Wl, t, L0), t;
  }
  get clipboardTarget() {
    return d.findOne(this.options.clipboardTarget);
  }
  get copyText() {
    const t = this.clipboardTarget.hasAttribute(
      "data-te-clipboard-text"
    ), e = this.clipboardTarget.value, i = this.clipboardTarget.textContent;
    return t ? this.clipboardTarget.getAttribute("data-te-clipboard-text") : e || i;
  }
  // Public
  dispose() {
    c.off(this._element, "click", this._initCopy), y.removeData(this._element, wi), this._element = null;
  }
  // Private
  _setup() {
    c.on(this._element, "click", this._initCopy);
  }
  _initCopy() {
    const t = this._createNewInput();
    document.body.appendChild(t), this._selectInput(t), c.trigger(this._element, N0, {
      copyText: this.copyText
    }), t.remove();
  }
  _createNewInput() {
    const t = this.clipboardTarget.tagName === "TEXTAREA" ? "textarea" : "input", e = $(t);
    return e.value = this.copyText, h.addClass(e, "-left-[9999px] absolute"), e;
  }
  _selectInput(t) {
    t.select(), t.focus(), t.setSelectionRange(0, 99999), document.execCommand("copy");
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, wi);
      const i = typeof t == "object" && t;
      if (e || (e = new _wh(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, wi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Xo = "infiniteScroll";
var Ls = `te.${Xo}`;
var M0 = {
  infiniteDirection: "y"
};
var R0 = {
  infiniteDirection: "string"
};
var kh = class _kh {
  constructor(t, e) {
    this._element = t, this._element && y.setData(t, Ls, this), this._options = this._getConfig(e), this.scrollHandler = this._scrollHandler.bind(this), this._init();
  }
  // Getters
  static get NAME() {
    return Xo;
  }
  get rect() {
    return this._element.getBoundingClientRect();
  }
  get condition() {
    return this._element === window ? Math.abs(
      window.scrollY + window.innerHeight - document.documentElement.scrollHeight
    ) < 1 : this._options.infiniteDirection === "x" ? this.rect.width + this._element.scrollLeft + 10 >= this._element.scrollWidth : Math.ceil(this.rect.height + this._element.scrollTop) >= this._element.scrollHeight;
  }
  // Public
  dispose() {
    c.off(this._element, "scroll", this.scrollHandler), y.removeData(this._element, Ls), this._element = null;
  }
  // Private
  _init() {
    c.on(this._element, "scroll", () => this._scrollHandler());
  }
  _scrollHandler() {
    this.condition && c.trigger(this._element, "complete.te.infiniteScroll"), c.off(this._element, "scroll", this.scrollHandler);
  }
  _getConfig(t) {
    const e = {
      ...M0,
      ...this._element !== window ? h.getDataAttributes(this._element) : {},
      ...t
    };
    return D(Xo, e, R0), e;
  }
  // Static
  static getInstance(t) {
    return y.getData(t, Ls);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, Ls);
      const i = typeof t == "object" && t;
      if (e || (e = new _kh(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
function P0({ backdropID: s }, t) {
  const e = $("div");
  return h.addClass(
    e,
    `${t.backdrop} ${t.backdropColor}`
  ), e.id = s, e;
}
var Ri = "loadingManagement";
var Ns = `te.${Ri}`;
var B0 = "[data-te-loading-icon-ref]";
var H0 = "[data-te-loading-text-ref]";
var V0 = `show.te.${Ri}`;
var W0 = {
  backdrop: "(null|boolean)",
  backdropID: "(null|string|number)",
  delay: "(null|number)",
  loader: "(null|string|number)",
  parentSelector: "(null|string)",
  loadingIcon: "boolean",
  loadingText: "boolean",
  scroll: "boolean"
};
var F0 = {
  backdrop: true,
  backdropID: null,
  delay: 0,
  loader: "",
  parentSelector: null,
  scroll: true,
  loadingText: true,
  loadingIcon: true
};
var Y0 = {
  loadingSpinner: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center z-40",
  spinnerColor: "text-primary dark:text-primary-400",
  backdrop: "w-full h-full fixed top-0 left-0 bottom-0 right-0 z-30",
  backdropColor: "bg-[rgba(0,0,0,0.4)]"
};
var j0 = {
  loadingSpinner: "string",
  spinnerColor: "string",
  backdrop: "string",
  backdropColor: "string"
};
var xh = class _xh {
  constructor(t, e = {}, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._element && y.setData(t, Ns, this), this._backdropElement = null, this._parentElement = d.findOne(this._options.parentSelector), this._loadingIcon = d.findOne(
      B0,
      this._element
    ), this._loadingText = d.findOne(
      H0,
      this._element
    ), this.init();
  }
  // Getters
  static get NAME() {
    return Ri;
  }
  // Public
  init() {
    const t = this._loadingIcon.cloneNode(true), e = this._loadingText.cloneNode(true);
    this._removeElementsOnStart(), setTimeout(() => {
      h.addClass(
        this._element,
        `${this._classes.loadingSpinner} ${this._classes.spinnerColor}`
      ), this._setBackdrop(), this._setLoadingIcon(t), this._setLoadingText(e), this._setScrollOption(), c.trigger(this._element, V0);
    }, this._options.delay);
  }
  dispose() {
    y.removeData(this._element, Ns), h.removeClass(
      this._element,
      `${this._classes.loadingSpinner} ${this._classes.spinnerColor}`
    );
    const t = this._options.delay;
    setTimeout(() => {
      this._removeBackdrop(), this._backdropElement = null, this._element = null, this._options = null;
    }, t);
  }
  // Private
  _setBackdrop() {
    const { backdrop: t } = this._options;
    t && (this._backdropElement = P0(this._options, this._classes), this._parentElement !== null ? (h.addClass(this._element, "absolute"), h.addClass(this._parentElement, "relative"), h.addClass(this._backdropElement, "absolute"), this._parentElement.appendChild(this._backdropElement)) : (h.addClass(this._element, "!fixed"), document.body.appendChild(this._backdropElement), document.body.appendChild(this._element)));
  }
  _removeBackdrop() {
    const { backdrop: t } = this._options;
    t && (this._parentElement !== null ? (h.removeClass(this._element, "absolute"), h.removeClass(this._parentElement, "relative"), this._backdropElement.remove()) : (this._backdropElement.remove(), this._element.remove()));
  }
  _setLoadingIcon(t) {
    if (!this._options.loadingIcon) {
      t.remove();
      return;
    }
    this._element.appendChild(t), t.id = this._options.loader;
  }
  _setLoadingText(t) {
    if (!this._options.loadingText) {
      t.remove();
      return;
    }
    this._element.appendChild(t);
  }
  _removeElementsOnStart() {
    this._element !== null && (this._loadingIcon.remove(), this._loadingText.remove());
  }
  _setScrollOption() {
    if (this._options.scroll) {
      if (this._parentElement === null) {
        h.addClass(document.body, "overflow-auto");
        return;
      }
      h.addClass(this._parentElement, "overflow-auto");
    } else {
      if (this._parentElement === null) {
        h.addClass(document.body, "overflow-hidden");
        return;
      }
      h.addClass(this._parentElement, "overflow-hidden");
    }
  }
  _getConfig(t) {
    const e = {
      ...F0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return D(Ri, e, W0), e;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Y0,
      ...e,
      ...t
    }, D(Ri, t, j0), t;
  }
  // Static
  static getInstance(t) {
    return y.getData(t, Ns);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, Ns);
      const i = typeof t == "object" && t;
      if (e || (e = new _xh(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
var K0 = (s) => {
  const t = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/, e = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;
  return s.match(t) || s.match(e);
};
var z0 = (s) => s && Object.prototype.toString.call(s) === "[object Date]" && !isNaN(s);
var U0 = (s) => s.getMonth();
var X0 = (s) => s.getFullYear();
var G0 = (s) => s.match(/[^(dmy)]{1,}/g);
var q0 = (s, t, e, i) => {
  let n;
  e[0] !== e[1] ? n = e[0] + e[1] : n = e[0];
  const o = new RegExp(`[${n}]`), r = s.split(o), a = t.split(o), l = t.indexOf("mmm") !== -1, p = [];
  for (let b = 0; b < a.length; b++)
    a[b].indexOf("yy") !== -1 && (p[0] = { value: r[b], format: a[b] }), a[b].indexOf("m") !== -1 && (p[1] = { value: r[b], format: a[b] }), a[b].indexOf("d") !== -1 && a[b].length <= 2 && (p[2] = { value: r[b], format: a[b] });
  let u;
  t.indexOf("mmmm") !== -1 ? u = i.monthsFull : u = i.monthsShort;
  const _ = Number(p[0].value), f = l ? Z0(p[1].value, u) : Number(p[1].value) - 1, g = Number(p[2].value);
  return Et(_, f, g);
};
var Z0 = (s, t) => t.findIndex((e) => e === s);
var Q0 = (s, t, e) => `
  <button type="button" class="${e.pickerIcon}" data-te-datepicker-toggle-button-ref>
    ${s}
  </button>
  <button type="button" class="${e.pickerIcon}" data-te-timepicker-toggle-button-ref>
    ${t}
  </button>
`;
var J0 = (s, t) => `
  <button type="button" class="${t.toggleButton}" data-te-date-timepicker-toggle-ref>
    ${s} 
  </button>
`;
var Qs = "datetimepicker";
var ki = `te.${Qs}`;
var gr = `.${ki}`;
var Oh = "data-te-datepicker-init";
var Sh = "data-te-timepicker-init";
var tC = "data-te-datepicker-header";
var eC = "data-te-datepicker-cancel-button-ref";
var iC = "data-te-datepicker-ok-button-ref";
var ko = "data-te-timepicker-wrapper";
var Fl = "data-te-timepicker-cancel";
var sC = "data-te-timepicker-submit";
var nC = "data-te-timepicker-clear";
var Yl = "data-te-buttons-timepicker";
var oC = "data-te-date-timepicker-toggle-ref";
var rC = "data-te-datepicker-toggle-button-ref";
var aC = "data-te-timepicker-toggle-button-ref";
var lC = `[${Sh}]`;
var cC = `[${Oh}]`;
var hC = `[${oC}]`;
var dC = `[${aC}]`;
var uC = "[data-te-input-notch-ref]";
var pC = "[data-te-date-timepicker-toggle-ref]";
var _C = "[data-te-timepicker-elements-wrapper]";
var fC = "[data-te-timepicker-clock-wrapper]";
var mC = `open${gr}`;
var gC = `close${gr}`;
var bC = `datetimeChange${gr}`;
var jl = "close.te.datepicker";
var Kl = "input.te.timepicker";
var De = $("div");
var zl = {
  inline: false,
  toggleButton: true,
  container: "body",
  disabled: false,
  disablePast: false,
  disableFuture: false,
  defaultTime: "",
  defaultDate: "",
  timepicker: {},
  datepicker: {},
  showFormat: false,
  dateTimepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
  </svg>`,
  datepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
  </svg>`,
  timepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`
};
var vC = {
  inline: "boolean",
  toggleButton: "boolean",
  container: "string",
  disabled: "boolean",
  disablePast: "boolean",
  disableFuture: "boolean",
  defaultTime: "(string|date|number)",
  defaultDate: "(string|date|number)",
  timepicker: "object",
  datepicker: "object",
  showFormat: "boolean",
  dateTimepickerToggleIconTemplate: "string",
  datepickerToggleIconTemplate: "string",
  timepickerToggleIconTemplate: "string"
};
var TC = {
  toggleButton: "flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200",
  pickerIcon: "[&>svg]:w-6 [&>svg]:h-6 [&>svg]:mx-auto [&>svg]:pointer-events-none w-1/2 px-1.5 py-[1px] rounded-[10px] min-h-[40px] cursor-pointer outline-none border-none text-white hover:bg-primary-600 dark:hover:bg-neutral-600",
  buttonsContainer: "flex justify-evenly items-end bg-primary dark:bg-zinc-800 dark:data-[te-buttons-timepicker]:bg-zinc-700",
  timepicker: {},
  datepicker: {}
};
var EC = {
  toggleButton: "string",
  pickerIcon: "string",
  buttonsContainer: "string",
  timepicker: "object",
  datepicker: "object"
};
var Ih = class _Ih {
  constructor(t, e, i) {
    this._element = t, this._input = d.findOne("input", this._element), this._options = this._getConfig(e), this._classes = this._getClasses(i), this._timepicker = null, this._datepicker = null, this._dateValue = this._options.defaultDate ? this._options.defaultDate : "", this._timeValue = this._options.defaultTime ? this._options.defaultTime : "", this._isInvalidTimeFormat = false, this._format = this._options.datepicker.format ? this._options.datepicker.format : "dd/mm/yyyy", this._cancel = false, this._scrollBar = new qe(), this._element && y.setData(t, ki, this), this._init();
  }
  // Getters
  static get NAME() {
    return Qs;
  }
  get toggleButton() {
    return d.findOne(hC, this._element);
  }
  get notch() {
    return d.findOne(uC, this._element);
  }
  dispose() {
    c.off(this._element, "click", this._openDatePicker), c.off(this._input, "input", this._handleInput), c.off(this._element, "click"), y.removeData(this._element, ki), this._removeTimePicker(), this._removeDatepicker(), this.toggleButton.remove(), this._options = zl, this._timepicker = null, this._datepicker = null, this._dateValue = null, this._timeValue = null, this._isInvalidTimeFormat = null;
  }
  update(t = {}) {
    const e = this._getConfig({ ...this._options, ...t });
    this.dispose(), this._options = e, this._init();
  }
  // Private
  _init() {
    this._addDatepicker(), this._addTimePicker(), this._appendToggleButton(), this._listenToToggleClick(), this._listenToUserInput(), this._disableInput(), this._setInitialDefaultInput(), this._applyFormatPlaceholder(), this._options.disablePast && this._handleTimepickerDisablePast(), this._options.disableFuture && this._handleTimepickerDisableFuture();
  }
  _removeDatepicker() {
    const t = this._element.querySelector(cC);
    t && t.remove();
  }
  _addDatepicker() {
    const t = $("div");
    t.id = this._element.id ? `datepicker-${this._element.id}` : rt("datepicker-");
    const e = '<input type="text">';
    t.innerHTML = e, t.setAttribute(Oh, ""), this._element.appendChild(t), h.addClass(t, "hidden");
    let i = {
      ...this._options.datepicker,
      container: this._options.container,
      disablePast: this._options.disablePast,
      disableFuture: this._options.disableFuture
    };
    (this._options.inline || this._options.datepicker.inline) && (i = { ...i, inline: true }), this._datepicker = new Nm(t, i, {
      ...this._classes.datepicker
    }), this._datepicker._input.value = this._dateValue;
  }
  _removeTimePicker() {
    const t = this._element.querySelector(lC);
    t && (t.remove(), this._scrollBar.reset());
  }
  _addTimePicker() {
    const t = $("div");
    t.id = this._element.id ? `timepicker-${this._element.id}` : rt("timepicker-");
    const e = '<input type="text">';
    t.innerHTML = e, t.setAttribute(Sh, ""), this._element.appendChild(t), h.addClass(t, "hidden");
    let i = {
      ...this._options.timepicker,
      container: this._options.container
    };
    (this._options.inline || this._options.timepicker.inline) && (i = { timepickerOptions: i, inline: true }), this._timepicker = new ng(t, i, {
      ...this._classes.timepicker
    }), this._timepicker.input.value = this._timeValue;
  }
  _addIconButtons() {
    if (h.addClass(De, this._classes.buttonsContainer), De.innerHTML = Q0(
      this._options.datepickerToggleIconTemplate,
      this._options.timepickerToggleIconTemplate,
      this._classes
    ), De.removeAttribute(Yl), !(this._options.inline || this._options.datepicker.inline)) {
      if (this._scrollBar.hide(), this._datepicker._isOpen)
        d.findOne(
          `[${tC}]`,
          document.body
        ).appendChild(De);
      else if (this._timepicker._modal && !this._options.timepicker.inline) {
        const t = d.findOne(
          _C,
          document.body
        ), e = d.findOne(
          fC,
          document.body
        );
        De.setAttribute(Yl, ""), t.insertBefore(De, e);
      }
    }
  }
  _enableOrDisableToggleButton() {
    this._options.disabled ? (this.toggleButton.disabled = true, h.addClass(this.toggleButton, "pointer-events-none")) : (this.toggleButton.disabled = false, h.removeClass(this.toggleButton, "pointer-events-none"));
  }
  _appendToggleButton() {
    this._options.toggleButton && (this._element.insertAdjacentHTML(
      "beforeend",
      J0(
        this._options.dateTimepickerToggleIconTemplate,
        this._classes
      )
    ), this._enableOrDisableToggleButton());
  }
  _applyFormatPlaceholder() {
    this._options.showFormat && (this._input.placeholder = this._format);
  }
  _listenToCancelClick() {
    const t = d.findOne(
      `[${eC}]`,
      document.body
    );
    c.one(t, "mousedown", () => {
      this._cancel = true, this._scrollBar.reset(), c.off(t, "mousedown");
    });
  }
  _listenToToggleClick() {
    c.on(this._element, "click", pC, (t) => {
      t.preventDefault(), this._openDatePicker();
    });
  }
  _listenToUserInput() {
    c.on(this._input, "input", (t) => {
      this._handleInput(t.target.value);
    });
  }
  _disableInput() {
    this._options.disabled && (this._input.disabled = "true");
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...zl,
      ...e,
      ...t
    }, D(Qs, t, vC), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...TC,
      ...e,
      ...t
    }, D(Qs, t, EC), t;
  }
  _handleInput(t) {
    const e = t.split(", "), i = G0(this._format), n = e[0], o = e[1] || "", r = q0(
      n,
      this._format,
      i,
      this._datepicker._options
    );
    e.length === 2 && (z0(r) && K0(o) ? (this._dateValue = n, this._timeValue = o, this._datepicker._input.value = this._dateValue, this._datepicker._activeDate = this._dateValue, this._datepicker._selectedYear = X0(r), this._datepicker._selectedMonth = U0(r), this._datepicker._headerDate = r, this._timepicker.input.value = this._timeValue, this._timepicker._isInvalidTimeFormat = false) : (this._datepicker._activeDate = /* @__PURE__ */ new Date(), this._datepicker._selectedDate = null, this._datepicker._selectedMonth = null, this._datepicker._selectedYear = null, this._datepicker._headerDate = null, this._datepicker._headerMonth = null, this._datepicker._headerYear = null, this._timepicker._isInvalidTimeFormat = true));
  }
  _openDatePicker() {
    if (c.trigger(this._element, mC).defaultPrevented)
      return;
    this._datepicker.open(), this._options.inline || this._scrollBar.hide(), (this._options.inline || this._options.datepicker.inline) && this._openDropdownDate(), this._addIconButtons(), this._listenToCancelClick(), this._options.inline && this._datepicker._isOpen && h.addClass(this.toggleButton, "pointer-events-none"), c.one(this._datepicker._element, jl, () => {
      if (this._dateValue = this._datepicker._input.value, this._updateInputValue(), this._cancel) {
        this._cancel = false;
        return;
      }
      c.on(this._datepicker.container, "click", (i) => {
        !this._datepicker._selectedDate && i.target.hasAttribute(iC) || this._openTimePicker();
      }), setTimeout(() => {
        d.findOne(
          `[${ko}]`,
          document.body
        ) || this._scrollBar.reset();
      }, 10), this._options.inline && h.removeClass(this.toggleButton, "pointer-events-none");
    });
    const e = d.findOne(
      dC,
      document.body
    );
    c.on(e, "click", () => {
      this._datepicker.close(), this._scrollBar.hide(), c.trigger(this._datepicker._element, jl);
    });
  }
  _handleTimepickerDisablePast() {
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0), c.on(
      this._datepicker._element,
      "dateChange.te.datepicker",
      () => {
        this._datepicker._selectedDate.getTime() === t.getTime() ? this._timepicker.update({ disablePast: true }) : this._timepicker.update({ disablePast: false });
      }
    );
  }
  _handleTimepickerDisableFuture() {
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0), c.on(
      this._datepicker._element,
      "dateChange.te.datepicker",
      () => {
        this._datepicker._selectedDate.getTime() === t.getTime() ? this._timepicker.update({ disableFuture: true }) : this._timepicker.update({ disableFuture: false });
      }
    );
  }
  _handleEscapeKey() {
    c.one(document.body, "keyup", () => {
      setTimeout(() => {
        d.findOne(
          `[${ko}]`,
          document.body
        ) || this._scrollBar.reset();
      }, 250);
    });
  }
  _handleCancelButton() {
    const t = d.findOne(
      `[${Fl}]`,
      document.body
    );
    c.one(t, "mousedown", () => {
      this._scrollBar.reset();
    });
  }
  _openDropdownDate() {
    const t = this._datepicker._popper;
    t.state.elements.reference = this._input, this._scrollBar.reset();
  }
  _openTimePicker() {
    c.trigger(this._timepicker.elementToggle, "click"), setTimeout(() => {
      if (this._addIconButtons(), (this._options.inline || this._options.timepicker.inline) && this._openDropdownTime(), this._timepicker._modal) {
        const t = d.findOne(
          `[${Fl}]`,
          document.body
        );
        this._handleEscapeKey(), this._handleCancelButton(), c.on(this._timepicker._modal, "click", (e) => {
          (e.target.hasAttribute(ko) || e.target.hasAttribute(sC)) && setTimeout(() => {
            this._scrollBar.reset();
          }, 200), e.target.hasAttribute(nC) && c.trigger(
            this._timepicker._element,
            Kl
          ), e.target.hasAttribute(rC) && (c.trigger(t, "click"), setTimeout(() => {
            this._openDatePicker(), this._scrollBar.hide();
          }, 200));
        });
      }
    }), c.one(this._timepicker._element, Kl, () => {
      this._timeValue = this._timepicker.input.value, this._updateInputValue(), c.trigger(this._element, gC);
    });
  }
  _openDropdownTime() {
    const t = this._timepicker._popper;
    t.state.elements.reference = this._input, t.update(), this._scrollBar.reset();
  }
  _setInitialDefaultInput() {
    (this._options.defaultDate || this._options.defaultTime) && this._updateInputValue();
  }
  _updateInputValue() {
    this._timeValue && this._dateValue && (this._input.value = `${this._dateValue}, ${this._timeValue}`, c.trigger(
      this._element,
      bC
    ).defaultPrevented) || (c.trigger(this._input, "focus"), this.notch && this.notch.removeAttribute("data-te-input-focused"));
  }
  // static
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, ki);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new _Ih(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, ki);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Js = "sticky";
var xi = `te.${Js}`;
var Dh = `.${xi}`;
var CC = `active${Dh}`;
var AC = `inactive${Dh}`;
var yC = {
  stickyAnimationSticky: "",
  stickyAnimationUnsticky: "",
  stickyBoundary: false,
  stickyDelay: 0,
  stickyDirection: "down",
  stickyMedia: 0,
  stickyOffset: 0,
  stickyPosition: "top",
  stickyZIndex: 100
};
var wC = {
  stickyAnimationSticky: "string",
  stickyAnimationUnsticky: "string",
  stickyBoundary: "(boolean|string)",
  stickyDelay: "number",
  stickyDirection: "string",
  stickyMedia: "number",
  stickyOffset: "number",
  stickyPosition: "string",
  stickyZIndex: "(string|number)"
};
var kC = {
  stickyActive: ""
};
var xC = {
  stickyActive: "string"
};
var $h = class _$h {
  constructor(t, e, i) {
    this._element = t, this._hiddenElement = null, this._elementPositionStyles = {}, this._scrollDirection = "", this._isSticked = false, this._elementOffsetTop = null, this._scrollTop = 0, this._pushPoint = "", this._manuallyDeactivated = false, this._element && (this._options = this._getConfig(e), this._classes = this._getClasses(i), y.setData(t, xi, this), this._init());
  }
  // Getters
  static get NAME() {
    return Js;
  }
  // Public
  dispose() {
    const { stickyAnimationUnsticky: t } = this._options;
    let { animationDuration: e } = getComputedStyle(this._element);
    e = t !== "" ? parseFloat(e) * 1e3 : 0, this._disableSticky(), setTimeout(() => {
      y.removeData(this._element, xi), this._element = null, this._options = null, this._hiddenElement = null, this._elementPositionStyles = null, this._scrollDirection = null, this._isSticked = null, this._elementOffsetTop = null, this._scrollTop = null, this._pushPoint = null, this._manuallyDeactivated = null;
    }, e);
  }
  active() {
    this._isSticked || (this._createHiddenElement(), this._enableSticky(), this._changeBoundaryPosition(), this._isSticked = true, this._manuallyDeactivated = false);
  }
  inactive() {
    this._isSticked && (this._disableSticky(), this._isSticked = false, this._manuallyDeactivated = true);
  }
  // Private
  _init() {
    this._userActivityListener();
  }
  _userActivityListener() {
    c.on(window, "resize", () => {
      this._updateElementPosition(), this._updateElementOffset();
    }), c.on(window, "scroll", () => {
      if (!this._element || window.innerWidth <= this._options.stickyMedia || this._manuallyDeactivated)
        return;
      const t = document.documentElement, { stickyDirection: e } = this._options, i = window.pageYOffset || t.scrollTop;
      this._updateElementOffset(), this._updatePushPoint(), this._updateScrollDirection(i), this._clearInProgressAnimations();
      const n = [this._scrollDirection, "both"].includes(
        e
      ), o = this._pushPoint <= i, r = o && !this._isSticked && n, a = (!o || !n) && this._isSticked;
      r && (this._createHiddenElement(), this._enableSticky(), this._changeBoundaryPosition(), this._isSticked = true), a && (this._disableSticky(), this._isSticked = false), this._isSticked && (this._updatePosition({ styles: this._elementPositionStyles }), this._changeBoundaryPosition()), this._scrollTop = i <= 0 ? 0 : i;
    });
  }
  _updatePushPoint() {
    this._options.stickyPosition === "top" ? this._pushPoint = this._elementOffsetTop - this._options.stickyDelay : this._pushPoint = this._elementOffsetTop + this._element.height - document.body.scrollHeight + this._options.stickyDelay;
  }
  _updateElementOffset() {
    this._hiddenElement ? this._elementOffsetTop = this._hiddenElement.offsetTop : this._elementOffsetTop = this._element.offsetTop, this._options.stickyAnimationUnsticky && (this._elementOffsetTop += this._element.height || 0);
  }
  _updateElementPosition() {
    if (this._hiddenElement) {
      const { left: t } = this._hiddenElement.getBoundingClientRect();
      this._elementPositionStyles = {
        left: `${t}px`
      };
    } else
      this._elementPositionStyles = {};
    this._setStyle(this._element, this._elementPositionStyles);
  }
  _updateScrollDirection(t) {
    t > this._scrollTop ? this._scrollDirection = "down" : this._scrollDirection = "up";
  }
  _clearInProgressAnimations() {
    const t = this._scrollDirection === "up", e = this._element.classList.contains(
      this._options.stickyAnimationUnsticky
    ), i = window.scrollY <= this._elementOffsetTop - this._element.height;
    t && e && i && (this._removeUnstickyAnimation(), this._resetStyles(), this._removeHiddenElement());
  }
  _enableSticky() {
    const {
      stickyAnimationSticky: t,
      stickyAnimationUnsticky: e,
      stickyOffset: i,
      stickyPosition: n,
      stickyZIndex: o
    } = this._options, { height: r, left: a, width: l } = this._element.getBoundingClientRect();
    t !== "" && this._toggleClass(
      t,
      e,
      this._element
    ), this._toggleClass(this._classes.stickyActive, "", this._element), this._setStyle(this._element, {
      top: n === "top" && `${0 + i}px`,
      bottom: n === "bottom" && `${0 + i}px`,
      height: `${r}px`,
      width: `${l}px`,
      left: `${a}px`,
      zIndex: `${o}`,
      position: "fixed"
    }), this._hiddenElement.hidden = false, c.trigger(this._element, CC);
  }
  _changeBoundaryPosition() {
    const { stickyPosition: t, stickyBoundary: e, stickyOffset: i } = this._options, { height: n } = this._element.getBoundingClientRect(), o = {
      height: this._element.parentElement.getBoundingClientRect().height,
      ...this._getOffset(this._element.parentElement)
    };
    let r;
    const a = d.findOne(e);
    a ? r = this._getOffset(a).top - n - i : r = o.height + o[t] - n - i;
    const l = t === "top", p = t === "bottom", u = e, _ = r < 0, f = r > o.height - n;
    let g;
    l && (_ && u ? g = { top: `${i + r}px` } : g = { top: `${i + 0}px` }), p && (_ && u ? g = { bottom: `${i + r}px` } : f && u ? g = { bottom: `${i + o.bottom}px` } : g = { bottom: `${i + 0}px` }), this._setStyle(this._element, g);
  }
  _disableSticky() {
    const { stickyAnimationUnsticky: t, stickyAnimationSticky: e } = this._options;
    let { animationDuration: i } = getComputedStyle(this._element);
    i = t !== "" ? parseFloat(i) * 1e3 : 0, this._options.stickyAnimationUnsticky !== "" && this._toggleClass(
      t,
      e,
      this._element
    ), setTimeout(() => {
      this._element.classList.contains(e) || (this._removeUnstickyAnimation(), this._resetStyles(), this._removeHiddenElement(), this._toggleClass("", this._classes.stickyActive, this._element), c.trigger(this._element, AC));
    }, i);
  }
  _createHiddenElement() {
    this._hiddenElement || (this._hiddenElement = this._copyElement(this._element));
  }
  _removeHiddenElement() {
    this._hiddenElement && (this._hiddenElement.remove(), this._hiddenElement = null);
  }
  _removeUnstickyAnimation() {
    this._toggleClass("", this._options.stickyAnimationUnsticky, this._element);
  }
  _resetStyles() {
    this._setStyle(this._element, {
      top: null,
      bottom: null,
      position: null,
      left: null,
      zIndex: null,
      width: null,
      height: null
    });
  }
  _updatePosition({ styles: t }) {
    this._setStyle(this._element, t);
  }
  _toggleClass(t, e, i) {
    t && h.addClass(i, t), e && h.removeClass(i, e);
  }
  _getOffset(t) {
    const e = h.offset(t), i = t.getBoundingClientRect(), n = e.left === 0 && e.top === 0 ? 0 : window.innerHeight - i.bottom;
    return {
      ...e,
      bottom: n
    };
  }
  _copyElement(t) {
    const { height: e, width: i } = t.getBoundingClientRect(), n = t.cloneNode(false);
    return n.hidden = true, this._setStyle(n, {
      height: `${e}px`,
      width: `${i}px`,
      opacity: "0"
    }), t.parentElement.insertBefore(n, t), n;
  }
  _getConfig(t = {}) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...yC,
      ...e,
      ...t
    }, D(Js, t, wC), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...kC,
      ...e,
      ...t
    }, D(Js, t, xC), t;
  }
  _setStyle(t, e) {
    Object.keys(e).forEach((i) => {
      t.style[i] = e[i];
    });
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, xi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose|hide/.test(t)) && (i || (i = new _$h(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, xi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var OC = (s) => {
  Zl(() => {
    const t = ql();
    if (t) {
      const e = s.NAME, i = t.fn[e];
      t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = i, s.jQueryInterface);
    }
  });
};
var SC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      e.preventDefault(), s.getOrCreateInstance(this).toggle();
    }
  );
};
var IC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), ge(this))
        return;
      s.getOrCreateInstance(this).show();
    }
  );
};
var DC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      const i = Jt(this);
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), ge(this))
        return;
      c.one(i, s.EVENT_HIDDEN, () => {
        Nt(this) && this.focus();
      });
      const n = d.findOne(s.OPEN_SELECTOR);
      n && n !== i && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
};
var $C = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}`,
    t,
    (e) => {
      e.preventDefault();
      const i = e.target.closest(t);
      s.getOrCreateInstance(i).toggle();
    }
  );
};
var LC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      const i = Jt(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(), c.one(i, s.EVENT_SHOW, (r) => {
        r.defaultPrevented || c.one(i, s.EVENT_HIDDEN, () => {
          Nt(this) && this.focus();
        });
      });
      const n = d.findOne(
        `[${s.OPEN_SELECTOR}="true"]`
      );
      n && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
};
var NC = (s, t) => {
  c.one(
    document,
    "mousedown",
    t,
    s.autoInitial(new s())
  );
};
var MC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
      const i = qo(this);
      d.find(i).forEach((o) => {
        s.getOrCreateInstance(o, { toggle: false }).toggle();
      });
    }
  );
};
var RC = (s, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(i) {
    return new s(i);
  });
};
var PC = (s, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(i) {
    return new s(i);
  });
};
var BC = (s, t) => {
  d.find(t).forEach((e) => {
    new s(e);
  }), c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    s.toggle()
  );
};
var HC = (s, t) => {
  const e = (o) => o[0] === "{" && o[o.length - 1] === "}" || o[0] === "[" && o[o.length - 1] === "]", i = (o) => typeof o != "string" ? o : e(o) ? JSON.parse(o.replace(/'/g, '"')) : o, n = (o) => {
    const r = {};
    return Object.keys(o).forEach((a) => {
      if (a.match(/dataset.*/)) {
        const l = a.slice(7, 8).toLowerCase().concat(a.slice(8));
        r[l] = i(o[a]);
      }
    }), r;
  };
  d.find(t).forEach((o) => {
    if (h.getDataAttribute(o, "chart") !== "bubble" && h.getDataAttribute(o, "chart") !== "scatter") {
      const r = h.getDataAttributes(o), a = {
        data: {
          datasets: [n(r)]
        }
      };
      return r.chart && (a.type = r.chart), r.labels && (a.data.labels = JSON.parse(r.labels.replace(/'/g, '"'))), new s(o, {
        ...a,
        ...Ti[a.type]
      });
    }
    return null;
  });
};
var VC = class {
  constructor() {
    this.inits = [];
  }
  get initialized() {
    return this.inits;
  }
  isInited(t) {
    return this.inits.includes(t);
  }
  add(t) {
    this.isInited(t) || this.inits.push(t);
  }
};
var Go = new VC();
var Oi = {
  alert: {
    name: "Alert",
    selector: "[data-te-alert-init]",
    isToggler: false
  },
  animation: {
    name: "Animate",
    selector: "[data-te-animation-init]",
    isToggler: false
  },
  carousel: {
    name: "Carousel",
    selector: "[data-te-carousel-init]",
    isToggler: false
  },
  chips: {
    name: "ChipsInput",
    selector: "[data-te-chips-input-init]",
    isToggler: false
  },
  chip: {
    name: "Chip",
    selector: "[data-te-chip-init]",
    isToggler: false,
    onInit: "init"
  },
  datepicker: {
    name: "Datepicker",
    selector: "[data-te-datepicker-init]",
    isToggler: false
  },
  datetimepicker: {
    name: "Datetimepicker",
    selector: "[data-te-date-timepicker-init]",
    isToggler: false
  },
  input: {
    name: "Input",
    selector: "[data-te-input-wrapper-init]",
    isToggler: false
  },
  perfectScrollbar: {
    name: "PerfectScrollbar",
    selector: "[data-te-perfect-scrollbar-init]",
    isToggler: false
  },
  rating: {
    name: "Rating",
    selector: "[data-te-rating-init]",
    isToggler: false
  },
  scrollspy: {
    name: "ScrollSpy",
    selector: "[data-te-spy='scroll']",
    isToggler: false
  },
  select: {
    name: "Select",
    selector: "[data-te-select-init]",
    isToggler: false
  },
  sidenav: {
    name: "Sidenav",
    selector: "[data-te-sidenav-init]",
    isToggler: false
  },
  stepper: {
    name: "Stepper",
    selector: "[data-te-stepper-init]",
    isToggler: false
  },
  timepicker: {
    name: "Timepicker",
    selector: "[data-te-timepicker-init]",
    isToggler: false
  },
  toast: {
    name: "Toast",
    selector: "[data-te-toast-init]",
    isToggler: false
  },
  datatable: {
    name: "Datatable",
    selector: "[data-te-datatable-init]"
  },
  popconfirm: {
    name: "Popconfirm",
    selector: "[data-te-toggle='popconfirm']"
  },
  validation: {
    name: "Validation",
    selector: "[data-te-validation-init]"
  },
  smoothScroll: {
    name: "SmoothScroll",
    selector: "a[data-te-smooth-scroll-init]"
  },
  lazyLoad: {
    name: "LazyLoad",
    selector: "[data-te-lazy-load-init]"
  },
  clipboard: {
    name: "Clipboard",
    selector: "[data-te-clipboard-init]"
  },
  infiniteScroll: {
    name: "InfiniteScroll",
    selector: "[data-te-infinite-scroll-init]"
  },
  loadingManagement: {
    name: "LoadingManagement",
    selector: "[data-te-loading-management-init]"
  },
  sticky: {
    name: "Sticky",
    selector: "[data-te-sticky-init]"
  },
  // advancedInits
  chart: {
    name: "Chart",
    selector: "[data-te-chart]",
    isToggler: false,
    advanced: HC
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: true,
    callback: $C
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: true,
    callback: MC
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: true,
    callback: SC
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: true,
    callback: LC
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: true,
    callback: NC
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: true,
    callback: DC
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: true,
    callback: IC
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: false,
    callback: RC
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: true,
    callback: PC
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: true,
    callback: BC
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
};
var WC = (s) => Oi[s.NAME] || null;
var FC = (s, t) => {
  if (!s || !t.allowReinits && Go.isInited(s.NAME))
    return;
  Go.add(s.NAME);
  const e = WC(s), i = (e == null ? void 0 : e.isToggler) || false;
  if (OC(s), e != null && e.advanced) {
    e == null || e.advanced(s, e == null ? void 0 : e.selector);
    return;
  }
  if (i) {
    e == null || e.callback(s, e == null ? void 0 : e.selector);
    return;
  }
  d.find(e == null ? void 0 : e.selector).forEach((n) => {
    let o = s.getInstance(n);
    o || (o = new s(n), e != null && e.onInit && o[e.onInit]());
  });
};
var YC = (s, t) => {
  s.forEach((e) => FC(e, t));
};
var jC = {
  allowReinits: false,
  checkOtherImports: false
};
var ZC = (s, t = {}) => {
  t = { ...jC, ...t };
  const e = Object.keys(Oi).map((i) => {
    if (!!document.querySelector(Oi[i].selector)) {
      const o = s[Oi[i].name];
      return !o && !Go.isInited(i) && t.checkOtherImports && console.warn(
        `Please import ${Oi[i].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), o;
    }
  });
  YC(e, t);
};
export {
  Lo as Alert,
  pr as Animate,
  rc as Button,
  Ut as Carousel,
  dh as Chart,
  _i as Chip,
  GC as ChipsInput,
  wh as Clipboard,
  Zt as Collapse,
  gh as Datatable,
  Nm as Datepicker,
  Ih as Datetimepicker,
  Dt as Dropdown,
  kh as InfiniteScroll,
  V as Input,
  Uo as LazyLoad,
  Zs as Lightbox,
  xh as LoadingManagement,
  No as Modal,
  Bs as Offcanvas,
  mh as PerfectScrollbar,
  vh as Popconfirm,
  Rc as Popover,
  qC as Rating,
  Ze as Ripple,
  Hc as ScrollSpy,
  _r as Select,
  gi as Sidenav,
  yh as SmoothScroll,
  XC as Stepper,
  $h as Sticky,
  Vc as Tab,
  ng as Timepicker,
  Ro as Toast,
  ii as Tooltip,
  Ah as Touch,
  Ch as Validation,
  ZC as initTE
};
/*! Bundled license information:

tw-elements/dist/js/tw-elements.es.min.js:
  (*!
  * Tailwind Elements 1.0.0
  * 
  * Tailwind Elements is an open-source UI kit of advanced components for TailwindCSS.
  * Copyright © 2023 MDBootstrap.com
  * 
  * Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
  * In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
  * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
  * 
  *)
  (*!
   * perfect-scrollbar v1.5.3
   * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
   * Licensed under MIT
   *)
*/
//# sourceMappingURL=tw-elements.js.map
