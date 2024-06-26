/**
 * @popperjs/core v2.9.1 - MIT License
 */

"use strict";
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Popper =
          {})
      );
})(this, function (e) {
  function t(e) {
    return {
      width: (e = e.getBoundingClientRect()).width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top,
    };
  }
  function n(e) {
    return null == e
      ? window
      : "[object Window]" !== e.toString()
      ? ((e = e.ownerDocument) && e.defaultView) || window
      : e;
  }
  function o(e) {
    return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset };
  }
  function r(e) {
    return e instanceof n(e).Element || e instanceof Element;
  }
  function i(e) {
    return e instanceof n(e).HTMLElement || e instanceof HTMLElement;
  }
  function a(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  function s(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function f(e) {
    return (
      (r(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function p(e) {
    return t(f(e)).left + o(e).scrollLeft;
  }
  function c(e) {
    return n(e).getComputedStyle(e);
  }
  function l(e) {
    return (
      (e = c(e)),
      /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
    );
  }
  function u(e, r, a) {
    void 0 === a && (a = !1);
    var c = f(r);
    e = t(e);
    var u = i(r),
      d = { scrollLeft: 0, scrollTop: 0 },
      m = { x: 0, y: 0 };
    return (
      (u || (!u && !a)) &&
        (("body" !== s(r) || l(c)) &&
          (d =
            r !== n(r) && i(r)
              ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop }
              : o(r)),
        i(r)
          ? (((m = t(r)).x += r.clientLeft), (m.y += r.clientTop))
          : c && (m.x = p(c))),
      {
        x: e.left + d.scrollLeft - m.x,
        y: e.top + d.scrollTop - m.y,
        width: e.width,
        height: e.height,
      }
    );
  }
  function d(e) {
    var n = t(e),
      o = e.offsetWidth,
      r = e.offsetHeight;
    return (
      1 >= Math.abs(n.width - o) && (o = n.width),
      1 >= Math.abs(n.height - r) && (r = n.height),
      { x: e.offsetLeft, y: e.offsetTop, width: o, height: r }
    );
  }
  function m(e) {
    return "html" === s(e)
      ? e
      : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e);
  }
  function h(e) {
    return 0 <= ["html", "body", "#document"].indexOf(s(e))
      ? e.ownerDocument.body
      : i(e) && l(e)
      ? e
      : h(m(e));
  }
  function v(e, t) {
    var o;
    void 0 === t && (t = []);
    var r = h(e);
    return (
      (e = r === (null == (o = e.ownerDocument) ? void 0 : o.body)),
      (o = n(r)),
      (r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r),
      (t = t.concat(r)),
      e ? t : t.concat(v(m(r)))
    );
  }
  function g(e) {
    return i(e) && "fixed" !== c(e).position ? e.offsetParent : null;
  }
  function y(e) {
    for (
      var t = n(e), o = g(e);
      o &&
      0 <= ["table", "td", "th"].indexOf(s(o)) &&
      "static" === c(o).position;

    )
      o = g(o);
    if (
      o &&
      ("html" === s(o) || ("body" === s(o) && "static" === c(o).position))
    )
      return t;
    if (!o)
      e: {
        for (
          o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
            e = m(e);
          i(e) && 0 > ["html", "body"].indexOf(s(e));

        ) {
          var r = c(e);
          if (
            "none" !== r.transform ||
            "none" !== r.perspective ||
            "paint" === r.contain ||
            -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
            (o && "filter" === r.willChange) ||
            (o && r.filter && "none" !== r.filter)
          ) {
            o = e;
            break e;
          }
          e = e.parentNode;
        }
        o = null;
      }
    return o || t;
  }
  function b(e) {
    function t(e) {
      o.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            o.has(e) || ((e = n.get(e)) && t(e));
          }),
        r.push(e);
    }
    var n = new Map(),
      o = new Set(),
      r = [];
    return (
      e.forEach(function (e) {
        n.set(e.name, e);
      }),
      e.forEach(function (e) {
        o.has(e.name) || t(e);
      }),
      r
    );
  }
  function w(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (n) {
            Promise.resolve().then(function () {
              (t = void 0), n(e());
            });
          })),
        t
      );
    };
  }
  function x(e) {
    return e.split("-")[0];
  }
  function O(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && a(n))
      do {
        if (t && e.isSameNode(t)) return !0;
        t = t.parentNode || t.host;
      } while (t);
    return !1;
  }
  function j(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function E(e, r) {
    if ("viewport" === r) {
      r = n(e);
      var a = f(e);
      r = r.visualViewport;
      var s = a.clientWidth;
      a = a.clientHeight;
      var l = 0,
        u = 0;
      r &&
        ((s = r.width),
        (a = r.height),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
          ((l = r.offsetLeft), (u = r.offsetTop))),
        (e = j((e = { width: s, height: a, x: l + p(e), y: u })));
    } else i(r) ? (((e = t(r)).top += r.clientTop), (e.left += r.clientLeft), (e.bottom = e.top + r.clientHeight), (e.right = e.left + r.clientWidth), (e.width = r.clientWidth), (e.height = r.clientHeight), (e.x = e.left), (e.y = e.top)) : ((u = f(e)), (e = f(u)), (s = o(u)), (r = null == (a = u.ownerDocument) ? void 0 : a.body), (a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0)), (l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0)), (u = -s.scrollLeft + p(u)), (s = -s.scrollTop), "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), (e = j({ width: a, height: l, x: u, y: s })));
    return e;
  }
  function D(e, t, n) {
    return (
      (t =
        "clippingParents" === t
          ? (function (e) {
              var t = v(m(e)),
                n =
                  0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e)
                    ? y(e)
                    : e;
              return r(n)
                ? t.filter(function (e) {
                    return r(e) && O(e, n) && "body" !== s(e);
                  })
                : [];
            })(e)
          : [].concat(t)),
      ((n = (n = [].concat(t, [n])).reduce(function (t, n) {
        return (
          (n = E(e, n)),
          (t.top = _(n.top, t.top)),
          (t.right = U(n.right, t.right)),
          (t.bottom = U(n.bottom, t.bottom)),
          (t.left = _(n.left, t.left)),
          t
        );
      }, E(e, n[0]))).width = n.right - n.left),
      (n.height = n.bottom - n.top),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  function L(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
  }
  function P(e) {
    var t = e.reference,
      n = e.element,
      o = (e = e.placement) ? x(e) : null;
    e = e ? e.split("-")[1] : null;
    var r = t.x + t.width / 2 - n.width / 2,
      i = t.y + t.height / 2 - n.height / 2;
    switch (o) {
      case "top":
        r = { x: r, y: t.y - n.height };
        break;
      case "bottom":
        r = { x: r, y: t.y + t.height };
        break;
      case "right":
        r = { x: t.x + t.width, y: i };
        break;
      case "left":
        r = { x: t.x - n.width, y: i };
        break;
      default:
        r = { x: t.x, y: t.y };
    }
    if (null != (o = o ? L(o) : null))
      switch (((i = "y" === o ? "height" : "width"), e)) {
        case "start":
          r[o] -= t[i] / 2 - n[i] / 2;
          break;
        case "end":
          r[o] += t[i] / 2 - n[i] / 2;
      }
    return r;
  }
  function M(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function k(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function W(e, n) {
    void 0 === n && (n = {});
    var o = n;
    n = void 0 === (n = o.placement) ? e.placement : n;
    var i = o.boundary,
      a = void 0 === i ? "clippingParents" : i,
      s = void 0 === (i = o.rootBoundary) ? "viewport" : i;
    i = void 0 === (i = o.elementContext) ? "popper" : i;
    var p = o.altBoundary,
      c = void 0 !== p && p;
    o = M(
      "number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C)
    );
    var l = e.elements.reference;
    (p = e.rects.popper),
      (a = D(
        r((c = e.elements[c ? ("popper" === i ? "reference" : "popper") : i]))
          ? c
          : c.contextElement || f(e.elements.popper),
        a,
        s
      )),
      (c = P({
        reference: (s = t(l)),
        element: p,
        strategy: "absolute",
        placement: n,
      })),
      (p = j(Object.assign({}, p, c))),
      (s = "popper" === i ? p : s);
    var u = {
      top: a.top - s.top + o.top,
      bottom: s.bottom - a.bottom + o.bottom,
      left: a.left - s.left + o.left,
      right: s.right - a.right + o.right,
    };
    if (((e = e.modifiersData.offset), "popper" === i && e)) {
      var d = e[n];
      Object.keys(u).forEach(function (e) {
        var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
          n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
        u[e] += d[n] * t;
      });
    }
    return u;
  }
  function A() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function B(e) {
    void 0 === e && (e = {});
    var t = e.defaultModifiers,
      n = void 0 === t ? [] : t,
      o = void 0 === (e = e.defaultOptions) ? F : e;
    return function (e, t, i) {
      function a() {
        f.forEach(function (e) {
          return e();
        }),
          (f = []);
      }
      void 0 === i && (i = o);
      var s = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, F, o),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        f = [],
        p = !1,
        c = {
          state: s,
          setOptions: function (i) {
            return (
              a(),
              (s.options = Object.assign({}, o, s.options, i)),
              (s.scrollParents = {
                reference: r(e)
                  ? v(e)
                  : e.contextElement
                  ? v(e.contextElement)
                  : [],
                popper: v(t),
              }),
              (i = (function (e) {
                var t = b(e);
                return I.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    })
                  );
                }, []);
              })(
                (function (e) {
                  var t = e.reduce(function (e, t) {
                    var n = e[t.name];
                    return (
                      (e[t.name] = n
                        ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                })([].concat(n, s.options.modifiers))
              )),
              (s.orderedModifiers = i.filter(function (e) {
                return e.enabled;
              })),
              s.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options;
                (n = void 0 === n ? {} : n),
                  "function" == typeof (e = e.effect) &&
                    ((t = e({ state: s, name: t, instance: c, options: n })),
                    f.push(t || function () {}));
              }),
              c.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var e = s.elements,
                t = e.reference;
              if (A(t, (e = e.popper)))
                for (
                  s.rects = {
                    reference: u(t, y(e), "fixed" === s.options.strategy),
                    popper: d(e),
                  },
                    s.reset = !1,
                    s.placement = s.options.placement,
                    s.orderedModifiers.forEach(function (e) {
                      return (s.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    }),
                    t = 0;
                  t < s.orderedModifiers.length;
                  t++
                )
                  if (!0 === s.reset) (s.reset = !1), (t = -1);
                  else {
                    var n = s.orderedModifiers[t];
                    e = n.fn;
                    var o = n.options;
                    (o = void 0 === o ? {} : o),
                      (n = n.name),
                      "function" == typeof e &&
                        (s =
                          e({ state: s, options: o, name: n, instance: c }) ||
                          s);
                  }
            }
          },
          update: w(function () {
            return new Promise(function (e) {
              c.forceUpdate(), e(s);
            });
          }),
          destroy: function () {
            a(), (p = !0);
          },
        };
      return A(e, t)
        ? (c.setOptions(i).then(function (e) {
            !p && i.onFirstUpdate && i.onFirstUpdate(e);
          }),
          c)
        : c;
    };
  }
  function T(e) {
    var t,
      o = e.popper,
      r = e.popperRect,
      i = e.placement,
      a = e.offsets,
      s = e.position,
      p = e.gpuAcceleration,
      l = e.adaptive;
    if (!0 === (e = e.roundOffsets)) {
      e = a.y;
      var u = window.devicePixelRatio || 1;
      e = { x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0 };
    } else e = "function" == typeof e ? e(a) : a;
    (e = void 0 === (e = (u = e).x) ? 0 : e),
      (u = void 0 === (u = u.y) ? 0 : u);
    var d = a.hasOwnProperty("x");
    a = a.hasOwnProperty("y");
    var m,
      h = "left",
      v = "top",
      g = window;
    if (l) {
      var b = y(o),
        w = "clientHeight",
        x = "clientWidth";
      b === n(o) &&
        "static" !== c((b = f(o))).position &&
        ((w = "scrollHeight"), (x = "scrollWidth")),
        "top" === i &&
          ((v = "bottom"), (u -= b[w] - r.height), (u *= p ? 1 : -1)),
        "left" === i &&
          ((h = "right"), (e -= b[x] - r.width), (e *= p ? 1 : -1));
    }
    return (
      (o = Object.assign({ position: s }, l && J)),
      p
        ? Object.assign(
            {},
            o,
            (((m = {})[v] = a ? "0" : ""),
            (m[h] = d ? "0" : ""),
            (m.transform =
              2 > (g.devicePixelRatio || 1)
                ? "translate(" + e + "px, " + u + "px)"
                : "translate3d(" + e + "px, " + u + "px, 0)"),
            m)
          )
        : Object.assign(
            {},
            o,
            (((t = {})[v] = a ? u + "px" : ""),
            (t[h] = d ? e + "px" : ""),
            (t.transform = ""),
            t)
          )
    );
  }
  function H(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return $[e];
    });
  }
  function R(e) {
    return e.replace(/start|end/g, function (e) {
      return ee[e];
    });
  }
  function S(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function q(e) {
    return ["top", "right", "bottom", "left"].some(function (t) {
      return 0 <= e[t];
    });
  }
  var C = ["top", "bottom", "right", "left"],
    N = C.reduce(function (e, t) {
      return e.concat([t + "-start", t + "-end"]);
    }, []),
    V = [].concat(C, ["auto"]).reduce(function (e, t) {
      return e.concat([t, t + "-start", t + "-end"]);
    }, []),
    I =
      "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(
        " "
      ),
    _ = Math.max,
    U = Math.min,
    z = Math.round,
    F = { placement: "bottom", modifiers: [], strategy: "absolute" },
    X = { passive: !0 },
    Y = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          o = e.instance,
          r = (e = e.options).scroll,
          i = void 0 === r || r,
          a = void 0 === (e = e.resize) || e,
          s = n(t.elements.popper),
          f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          i &&
            f.forEach(function (e) {
              e.addEventListener("scroll", o.update, X);
            }),
          a && s.addEventListener("resize", o.update, X),
          function () {
            i &&
              f.forEach(function (e) {
                e.removeEventListener("scroll", o.update, X);
              }),
              a && s.removeEventListener("resize", o.update, X);
          }
        );
      },
      data: {},
    },
    G = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state;
        t.modifiersData[e.name] = P({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement,
        });
      },
      data: {},
    },
    J = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
    K = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = void 0 === (e = n.gpuAcceleration) || e;
        var o = n.adaptive;
        (o = void 0 === o || o),
          (n = void 0 === (n = n.roundOffsets) || n),
          (e = {
            placement: x(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: e,
          }),
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              T(
                Object.assign({}, e, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: o,
                  roundOffsets: n,
                })
              )
            )),
          null != t.modifiersData.arrow &&
            (t.styles.arrow = Object.assign(
              {},
              t.styles.arrow,
              T(
                Object.assign({}, e, {
                  offsets: t.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: n,
                })
              )
            )),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement,
          }));
      },
      data: {},
    },
    Q = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var n = t.styles[e] || {},
            o = t.attributes[e] || {},
            r = t.elements[e];
          i(r) &&
            s(r) &&
            (Object.assign(r.style, n),
            Object.keys(o).forEach(function (e) {
              var t = o[e];
              !1 === t
                ? r.removeAttribute(e)
                : r.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var o = t.elements[e],
                r = t.attributes[e] || {};
              (e = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {})),
                i(o) &&
                  s(o) &&
                  (Object.assign(o.style, e),
                  Object.keys(r).forEach(function (e) {
                    o.removeAttribute(e);
                  }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    },
    Z = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          o = void 0 === (e = e.options.offset) ? [0, 0] : e,
          r = (e = V.reduce(function (e, n) {
            var r = t.rects,
              i = x(n),
              a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
              s =
                "function" == typeof o
                  ? o(Object.assign({}, r, { placement: n }))
                  : o;
            return (
              (r = (r = s[0]) || 0),
              (s = ((s = s[1]) || 0) * a),
              (i =
                0 <= ["left", "right"].indexOf(i)
                  ? { x: s, y: r }
                  : { x: r, y: s }),
              (e[n] = i),
              e
            );
          }, {}))[t.placement],
          i = r.x;
        (r = r.y),
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += i),
            (t.modifiersData.popperOffsets.y += r)),
          (t.modifiersData[n] = e);
      },
    },
    $ = { left: "right", right: "left", bottom: "top", top: "bottom" },
    ee = { start: "end", end: "start" },
    te = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        if (((e = e.name), !t.modifiersData[e]._skip)) {
          var o = n.mainAxis;
          o = void 0 === o || o;
          var r = n.altAxis;
          r = void 0 === r || r;
          var i = n.fallbackPlacements,
            a = n.padding,
            s = n.boundary,
            f = n.rootBoundary,
            p = n.altBoundary,
            c = n.flipVariations,
            l = void 0 === c || c,
            u = n.allowedAutoPlacements;
          (c = x((n = t.options.placement))),
            (i =
              i ||
              (c !== n && l
                ? (function (e) {
                    if ("auto" === x(e)) return [];
                    var t = H(e);
                    return [R(e), t, R(t)];
                  })(n)
                : [H(n)]));
          var d = [n].concat(i).reduce(function (e, n) {
            return e.concat(
              "auto" === x(n)
                ? (function (e, t) {
                    void 0 === t && (t = {});
                    var n = t.boundary,
                      o = t.rootBoundary,
                      r = t.padding,
                      i = t.flipVariations,
                      a = t.allowedAutoPlacements,
                      s = void 0 === a ? V : a,
                      f = t.placement.split("-")[1];
                    0 ===
                      (i = (t = f
                        ? i
                          ? N
                          : N.filter(function (e) {
                              return e.split("-")[1] === f;
                            })
                        : C).filter(function (e) {
                        return 0 <= s.indexOf(e);
                      })).length && (i = t);
                    var p = i.reduce(function (t, i) {
                      return (
                        (t[i] = W(e, {
                          placement: i,
                          boundary: n,
                          rootBoundary: o,
                          padding: r,
                        })[x(i)]),
                        t
                      );
                    }, {});
                    return Object.keys(p).sort(function (e, t) {
                      return p[e] - p[t];
                    });
                  })(t, {
                    placement: n,
                    boundary: s,
                    rootBoundary: f,
                    padding: a,
                    flipVariations: l,
                    allowedAutoPlacements: u,
                  })
                : n
            );
          }, []);
          (n = t.rects.reference), (i = t.rects.popper);
          var m = new Map();
          c = !0;
          for (var h = d[0], v = 0; v < d.length; v++) {
            var g = d[v],
              y = x(g),
              b = "start" === g.split("-")[1],
              w = 0 <= ["top", "bottom"].indexOf(y),
              O = w ? "width" : "height",
              j = W(t, {
                placement: g,
                boundary: s,
                rootBoundary: f,
                altBoundary: p,
                padding: a,
              });
            if (
              ((b = w ? (b ? "right" : "left") : b ? "bottom" : "top"),
              n[O] > i[O] && (b = H(b)),
              (O = H(b)),
              (w = []),
              o && w.push(0 >= j[y]),
              r && w.push(0 >= j[b], 0 >= j[O]),
              w.every(function (e) {
                return e;
              }))
            ) {
              (h = g), (c = !1);
              break;
            }
            m.set(g, w);
          }
          if (c)
            for (
              o = function (e) {
                var t = d.find(function (t) {
                  if ((t = m.get(t)))
                    return t.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (h = t), "break";
              },
                r = l ? 3 : 1;
              0 < r && "break" !== o(r);
              r--
            );
          t.placement !== h &&
            ((t.modifiersData[e]._skip = !0),
            (t.placement = h),
            (t.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    },
    ne = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = e.name;
        var o = n.mainAxis,
          r = void 0 === o || o,
          i = void 0 !== (o = n.altAxis) && o;
        o = void 0 === (o = n.tether) || o;
        var a = n.tetherOffset,
          s = void 0 === a ? 0 : a,
          f = W(t, {
            boundary: n.boundary,
            rootBoundary: n.rootBoundary,
            padding: n.padding,
            altBoundary: n.altBoundary,
          });
        n = x(t.placement);
        var p = t.placement.split("-")[1],
          c = !p,
          l = L(n);
        (n = "x" === l ? "y" : "x"), (a = t.modifiersData.popperOffsets);
        var u = t.rects.reference,
          m = t.rects.popper,
          h =
            "function" == typeof s
              ? s(Object.assign({}, t.rects, { placement: t.placement }))
              : s;
        if (((s = { x: 0, y: 0 }), a)) {
          if (r || i) {
            var v = "y" === l ? "top" : "left",
              g = "y" === l ? "bottom" : "right",
              b = "y" === l ? "height" : "width",
              w = a[l],
              O = a[l] + f[v],
              j = a[l] - f[g],
              E = o ? -m[b] / 2 : 0,
              D = "start" === p ? u[b] : m[b];
            (p = "start" === p ? -m[b] : -u[b]),
              (m = t.elements.arrow),
              (m = o && m ? d(m) : { width: 0, height: 0 });
            var P = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 };
            (v = P[v]),
              (g = P[g]),
              (m = _(0, U(u[b], m[b]))),
              (D = c ? u[b] / 2 - E - m - v - h : D - m - v - h),
              (u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h),
              (c = t.elements.arrow && y(t.elements.arrow)),
              (h = t.modifiersData.offset
                ? t.modifiersData.offset[t.placement][l]
                : 0),
              (c =
                a[l] +
                D -
                h -
                (c ? ("y" === l ? c.clientTop || 0 : c.clientLeft || 0) : 0)),
              (u = a[l] + u - h),
              r &&
                ((r = o ? U(O, c) : O),
                (j = o ? _(j, u) : j),
                (r = _(r, U(w, j))),
                (a[l] = r),
                (s[l] = r - w)),
              i &&
                ((r = (i = a[n]) + f["x" === l ? "top" : "left"]),
                (f = i - f["x" === l ? "bottom" : "right"]),
                (r = o ? U(r, c) : r),
                (o = o ? _(f, u) : f),
                (o = _(r, U(i, o))),
                (a[n] = o),
                (s[n] = o - i));
          }
          t.modifiersData[e] = s;
        }
      },
      requiresIfExists: ["offset"],
    },
    oe = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          n = e.state,
          o = e.name,
          r = e.options,
          i = n.elements.arrow,
          a = n.modifiersData.popperOffsets,
          s = x(n.placement);
        if (
          ((e = L(s)),
          (s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width"),
          i && a)
        ) {
          r = M(
            "number" !=
              typeof (r =
                "function" == typeof (r = r.padding)
                  ? r(Object.assign({}, n.rects, { placement: n.placement }))
                  : r)
              ? r
              : k(r, C)
          );
          var f = d(i),
            p = "y" === e ? "top" : "left",
            c = "y" === e ? "bottom" : "right",
            l =
              n.rects.reference[s] +
              n.rects.reference[e] -
              a[e] -
              n.rects.popper[s];
          (a = a[e] - n.rects.reference[e]),
            (a =
              (i = (i = y(i))
                ? "y" === e
                  ? i.clientHeight || 0
                  : i.clientWidth || 0
                : 0) /
                2 -
              f[s] / 2 +
              (l / 2 - a / 2)),
            (s = _(r[p], U(a, i - f[s] - r[c]))),
            (n.modifiersData[o] =
              (((t = {})[e] = s), (t.centerOffset = s - a), t));
        }
      },
      effect: function (e) {
        var t = e.state;
        if (
          null !=
          (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)
        ) {
          if ("string" == typeof e && !(e = t.elements.popper.querySelector(e)))
            return;
          O(t.elements.popper, e) && (t.elements.arrow = e);
        }
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    },
    re = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state;
        e = e.name;
        var n = t.rects.reference,
          o = t.rects.popper,
          r = t.modifiersData.preventOverflow,
          i = W(t, { elementContext: "reference" }),
          a = W(t, { altBoundary: !0 });
        (n = S(i, n)),
          (o = S(a, o, r)),
          (r = q(n)),
          (a = q(o)),
          (t.modifiersData[e] = {
            referenceClippingOffsets: n,
            popperEscapeOffsets: o,
            isReferenceHidden: r,
            hasPopperEscaped: a,
          }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": r,
            "data-popper-escaped": a,
          }));
      },
    },
    ie = B({ defaultModifiers: [Y, G, K, Q] }),
    ae = [Y, G, K, Q, Z, te, ne, oe, re],
    se = B({ defaultModifiers: ae });
  (e.applyStyles = Q),
    (e.arrow = oe),
    (e.computeStyles = K),
    (e.createPopper = se),
    (e.createPopperLite = ie),
    (e.defaultModifiers = ae),
    (e.detectOverflow = W),
    (e.eventListeners = Y),
    (e.flip = te),
    (e.hide = re),
    (e.offset = Z),
    (e.popperGenerator = B),
    (e.popperOffsets = G),
    (e.preventOverflow = ne),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("@popperjs/core")))
    : "function" == typeof define && define.amd
    ? define(["@popperjs/core"], e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e(t.Popper));
})(this, function (t) {
  "use strict";
  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return (
      t &&
        Object.keys(t).forEach(function (s) {
          if ("default" !== s) {
            var i = Object.getOwnPropertyDescriptor(t, s);
            Object.defineProperty(
              e,
              s,
              i.get
                ? i
                : {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    },
                  }
            );
          }
        }),
      (e.default = t),
      Object.freeze(e)
    );
  }
  var s = e(t);
  const i = (t) => {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    n = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let s = t.getAttribute("href");
        if (!s || (!s.includes("#") && !s.startsWith("."))) return null;
        s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]),
          (e = s && "#" !== s ? s.trim() : null);
      }
      return e;
    },
    o = (t) => {
      const e = n(t);
      return e && document.querySelector(e) ? e : null;
    },
    r = (t) => {
      const e = n(t);
      return e ? document.querySelector(e) : null;
    },
    a = (t) => {
      if (!t) return 0;
      let { transitionDuration: e, transitionDelay: s } =
        window.getComputedStyle(t);
      const i = Number.parseFloat(e),
        n = Number.parseFloat(s);
      return i || n
        ? ((e = e.split(",")[0]),
          (s = s.split(",")[0]),
          1e3 * (Number.parseFloat(e) + Number.parseFloat(s)))
        : 0;
    },
    l = (t) => {
      t.dispatchEvent(new Event("transitionend"));
    },
    c = (t) => (t[0] || t).nodeType,
    h = (t, e) => {
      let s = !1;
      const i = e + 5;
      t.addEventListener("transitionend", function e() {
        (s = !0), t.removeEventListener("transitionend", e);
      }),
        setTimeout(() => {
          s || l(t);
        }, i);
    },
    d = (t, e, s) => {
      Object.keys(s).forEach((i) => {
        const n = s[i],
          o = e[i],
          r =
            o && c(o)
              ? "element"
              : null == (a = o)
              ? "" + a
              : {}.toString
                  .call(a)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var a;
        if (!new RegExp(n).test(r))
          throw new TypeError(
            t.toUpperCase() +
              ": " +
              `Option "${i}" provided type "${r}" ` +
              `but expected type "${n}".`
          );
      });
    },
    u = (t) => {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        const e = getComputedStyle(t),
          s = getComputedStyle(t.parentNode);
        return (
          "none" !== e.display &&
          "none" !== s.display &&
          "hidden" !== e.visibility
        );
      }
      return !1;
    },
    g = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    f = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? f(t.parentNode)
        : null;
    },
    p = () => function () {},
    m = (t) => t.offsetHeight,
    _ = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    b = () => "rtl" === document.documentElement.dir,
    v = (t, e) => {
      var s;
      (s = () => {
        const s = _();
        if (s) {
          const i = s.fn[t];
          (s.fn[t] = e.jQueryInterface),
            (s.fn[t].Constructor = e),
            (s.fn[t].noConflict = () => ((s.fn[t] = i), e.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", s)
          : s();
    },
    y = new Map();
  var w = {
    set(t, e, s) {
      y.has(t) || y.set(t, new Map());
      const i = y.get(t);
      i.has(e) || 0 === i.size
        ? i.set(e, s)
        : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(i.keys())[0]
            }.`
          );
    },
    get: (t, e) => (y.has(t) && y.get(t).get(e)) || null,
    remove(t, e) {
      if (!y.has(t)) return;
      const s = y.get(t);
      s.delete(e), 0 === s.size && y.delete(t);
    },
  };
  const E = /[^.]*(?=\..*)\.|.*/,
    T = /\..*/,
    A = /::\d+$/,
    L = {};
  let k = 1;
  const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
    D = new Set([
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
      "scroll",
    ]);
  function S(t, e) {
    return (e && `${e}::${k++}`) || t.uidEvent || k++;
  }
  function N(t) {
    const e = S(t);
    return (t.uidEvent = e), (L[e] = L[e] || {}), L[e];
  }
  function O(t, e, s = null) {
    const i = Object.keys(t);
    for (let n = 0, o = i.length; n < o; n++) {
      const o = t[i[n]];
      if (o.originalHandler === e && o.delegationSelector === s) return o;
    }
    return null;
  }
  function x(t, e, s) {
    const i = "string" == typeof e,
      n = i ? s : e;
    let o = t.replace(T, "");
    const r = C[o];
    return r && (o = r), D.has(o) || (o = t), [i, n, o];
  }
  function I(t, e, s, i, n) {
    if ("string" != typeof e || !t) return;
    s || ((s = i), (i = null));
    const [o, r, a] = x(e, s, i),
      l = N(t),
      c = l[a] || (l[a] = {}),
      h = O(c, r, o ? s : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = S(r, e.replace(E, "")),
      u = o
        ? (function (t, e, s) {
            return function i(n) {
              const o = t.querySelectorAll(e);
              for (let { target: e } = n; e && e !== this; e = e.parentNode)
                for (let r = o.length; r--; )
                  if (o[r] === e)
                    return (
                      (n.delegateTarget = e),
                      i.oneOff && P.off(t, n.type, s),
                      s.apply(e, [n])
                    );
              return null;
            };
          })(t, s, i)
        : (function (t, e) {
            return function s(i) {
              return (
                (i.delegateTarget = t),
                s.oneOff && P.off(t, i.type, e),
                e.apply(t, [i])
              );
            };
          })(t, s);
    (u.delegationSelector = o ? s : null),
      (u.originalHandler = r),
      (u.oneOff = n),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function j(t, e, s, i, n) {
    const o = O(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }
  const P = {
    on(t, e, s, i) {
      I(t, e, s, i, !1);
    },
    one(t, e, s, i) {
      I(t, e, s, i, !0);
    },
    off(t, e, s, i) {
      if ("string" != typeof e || !t) return;
      const [n, o, r] = x(e, s, i),
        a = r !== e,
        l = N(t),
        c = e.startsWith(".");
      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void j(t, l, r, o, n ? s : null);
      }
      c &&
        Object.keys(l).forEach((s) => {
          !(function (t, e, s, i) {
            const n = e[s] || {};
            Object.keys(n).forEach((o) => {
              if (o.includes(i)) {
                const i = n[o];
                j(t, e, s, i.originalHandler, i.delegationSelector);
              }
            });
          })(t, l, s, e.slice(1));
        });
      const h = l[r] || {};
      Object.keys(h).forEach((s) => {
        const i = s.replace(A, "");
        if (!a || e.includes(i)) {
          const e = h[s];
          j(t, l, r, e.originalHandler, e.delegationSelector);
        }
      });
    },
    trigger(t, e, s) {
      if ("string" != typeof e || !t) return null;
      const i = _(),
        n = e.replace(T, ""),
        o = e !== n,
        r = D.has(n);
      let a,
        l = !0,
        c = !0,
        h = !1,
        d = null;
      return (
        o &&
          i &&
          ((a = i.Event(e, s)),
          i(t).trigger(a),
          (l = !a.isPropagationStopped()),
          (c = !a.isImmediatePropagationStopped()),
          (h = a.isDefaultPrevented())),
        r
          ? ((d = document.createEvent("HTMLEvents")), d.initEvent(n, l, !0))
          : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
        void 0 !== s &&
          Object.keys(s).forEach((t) => {
            Object.defineProperty(d, t, { get: () => s[t] });
          }),
        h && d.preventDefault(),
        c && t.dispatchEvent(d),
        d.defaultPrevented && void 0 !== a && a.preventDefault(),
        d
      );
    },
  };
  class M {
    constructor(t) {
      (t = "string" == typeof t ? document.querySelector(t) : t) &&
        ((this._element = t),
        w.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      w.remove(this._element, this.constructor.DATA_KEY),
        (this._element = null);
    }
    static getInstance(t) {
      return w.get(t, this.DATA_KEY);
    }
    static get VERSION() {
      return "5.0.0-beta3";
    }
  }
  class H extends M {
    static get DATA_KEY() {
      return "bs.alert";
    }
    close(t) {
      const e = t ? this._getRootElement(t) : this._element,
        s = this._triggerCloseEvent(e);
      null === s || s.defaultPrevented || this._removeElement(e);
    }
    _getRootElement(t) {
      return r(t) || t.closest(".alert");
    }
    _triggerCloseEvent(t) {
      return P.trigger(t, "close.bs.alert");
    }
    _removeElement(t) {
      if ((t.classList.remove("show"), !t.classList.contains("fade")))
        return void this._destroyElement(t);
      const e = a(t);
      P.one(t, "transitionend", () => this._destroyElement(t)), h(t, e);
    }
    _destroyElement(t) {
      t.parentNode && t.parentNode.removeChild(t),
        P.trigger(t, "closed.bs.alert");
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, "bs.alert");
        e || (e = new H(this)), "close" === t && e[t](this);
      });
    }
    static handleDismiss(t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }
  }
  P.on(
    document,
    "click.bs.alert.data-api",
    '[data-bs-dismiss="alert"]',
    H.handleDismiss(new H())
  ),
    v("alert", H);
  class R extends M {
    static get DATA_KEY() {
      return "bs.button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, "bs.button");
        e || (e = new R(this)), "toggle" === t && e[t]();
      });
    }
  }
  function B(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function W(t) {
    return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
  }
  P.on(
    document,
    "click.bs.button.data-api",
    '[data-bs-toggle="button"]',
    (t) => {
      t.preventDefault();
      const e = t.target.closest('[data-bs-toggle="button"]');
      let s = w.get(e, "bs.button");
      s || (s = new R(e)), s.toggle();
    }
  ),
    v("button", R);
  const $ = {
      setDataAttribute(t, e, s) {
        t.setAttribute("data-bs-" + W(e), s);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute("data-bs-" + W(e));
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((s) => {
              let i = s.replace(/^bs/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (e[i] = B(t.dataset[s]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => B(t.getAttribute("data-bs-" + W(e))),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    U = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const s = [];
        let i = t.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
          i.matches(e) && s.push(i), (i = i.parentNode);
        return s;
      },
      prev(t, e) {
        let s = t.previousElementSibling;
        for (; s; ) {
          if (s.matches(e)) return [s];
          s = s.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let s = t.nextElementSibling;
        for (; s; ) {
          if (s.matches(e)) return [s];
          s = s.nextElementSibling;
        }
        return [];
      },
    },
    F = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    K = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    z = "next",
    Y = "prev",
    q = "left",
    Q = "right";
  class X extends M {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = U.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return F;
    }
    static get DATA_KEY() {
      return "bs.carousel";
    }
    next() {
      this._isSliding || this._slide(z);
    }
    nextWhenVisible() {
      !document.hidden && u(this._element) && this.next();
    }
    prev() {
      this._isSliding || this._slide(Y);
    }
    pause(t) {
      t || (this._isPaused = !0),
        U.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (l(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = U.findOne(".active.carousel-item", this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void P.one(this._element, "slid.bs.carousel", () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const s = t > e ? z : Y;
      this._slide(s, this._items[t]);
    }
    dispose() {
      P.off(this._element, ".bs.carousel"),
        (this._items = null),
        (this._config = null),
        (this._interval = null),
        (this._isPaused = null),
        (this._isSliding = null),
        (this._activeElement = null),
        (this._indicatorsElement = null),
        super.dispose();
    }
    _getConfig(t) {
      return (t = { ...F, ...t }), d("carousel", t, K), t;
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? Q : q);
    }
    _addEventListeners() {
      this._config.keyboard &&
        P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (P.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
          P.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) => {
          !this._pointerEvent ||
          ("pen" !== t.pointerType && "touch" !== t.pointerType)
            ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
            : (this.touchStartX = t.clientX);
        },
        e = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        s = (t) => {
          !this._pointerEvent ||
            ("pen" !== t.pointerType && "touch" !== t.pointerType) ||
            (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      U.find(".carousel-item img", this._element).forEach((t) => {
        P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (P.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
            P.on(this._element, "pointerup.bs.carousel", (t) => s(t)),
            this._element.classList.add("pointer-event"))
          : (P.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
            P.on(this._element, "touchmove.bs.carousel", (t) => e(t)),
            P.on(this._element, "touchend.bs.carousel", (t) => s(t)));
    }
    _keydown(t) {
      /input|textarea/i.test(t.target.tagName) ||
        ("ArrowLeft" === t.key
          ? (t.preventDefault(), this._slide(q))
          : "ArrowRight" === t.key && (t.preventDefault(), this._slide(Q)));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? U.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const s = t === z,
        i = t === Y,
        n = this._getItemIndex(e),
        o = this._items.length - 1;
      if (((i && 0 === n) || (s && n === o)) && !this._config.wrap) return e;
      const r = (n + (i ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r];
    }
    _triggerSlideEvent(t, e) {
      const s = this._getItemIndex(t),
        i = this._getItemIndex(
          U.findOne(".active.carousel-item", this._element)
        );
      return P.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: i,
        to: s,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = U.findOne(".active", this._indicatorsElement);
        e.classList.remove("active"), e.removeAttribute("aria-current");
        const s = U.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < s.length; e++)
          if (
            Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            s[e].classList.add("active"),
              s[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t =
        this._activeElement ||
        U.findOne(".active.carousel-item", this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const s = this._directionToOrder(t),
        i = U.findOne(".active.carousel-item", this._element),
        n = this._getItemIndex(i),
        o = e || this._getItemByOrder(s, i),
        r = this._getItemIndex(o),
        l = Boolean(this._interval),
        c = s === z,
        d = c ? "carousel-item-start" : "carousel-item-end",
        u = c ? "carousel-item-next" : "carousel-item-prev",
        g = this._orderToDirection(s);
      if (o && o.classList.contains("active")) this._isSliding = !1;
      else if (!this._triggerSlideEvent(o, g).defaultPrevented && i && o) {
        if (
          ((this._isSliding = !0),
          l && this.pause(),
          this._setActiveIndicatorElement(o),
          (this._activeElement = o),
          this._element.classList.contains("slide"))
        ) {
          o.classList.add(u), m(o), i.classList.add(d), o.classList.add(d);
          const t = a(i);
          P.one(i, "transitionend", () => {
            o.classList.remove(d, u),
              o.classList.add("active"),
              i.classList.remove("active", u, d),
              (this._isSliding = !1),
              setTimeout(() => {
                P.trigger(this._element, "slid.bs.carousel", {
                  relatedTarget: o,
                  direction: g,
                  from: n,
                  to: r,
                });
              }, 0);
          }),
            h(i, t);
        } else
          i.classList.remove("active"),
            o.classList.add("active"),
            (this._isSliding = !1),
            P.trigger(this._element, "slid.bs.carousel", {
              relatedTarget: o,
              direction: g,
              from: n,
              to: r,
            });
        l && this.cycle();
      }
    }
    _directionToOrder(t) {
      return [Q, q].includes(t)
        ? b()
          ? t === Q
            ? Y
            : z
          : t === Q
          ? z
          : Y
        : t;
    }
    _orderToDirection(t) {
      return [z, Y].includes(t)
        ? b()
          ? t === z
            ? q
            : Q
          : t === z
          ? Q
          : q
        : t;
    }
    static carouselInterface(t, e) {
      let s = w.get(t, "bs.carousel"),
        i = { ...F, ...$.getDataAttributes(t) };
      "object" == typeof e && (i = { ...i, ...e });
      const n = "string" == typeof e ? e : i.slide;
      if ((s || (s = new X(t, i)), "number" == typeof e)) s.to(e);
      else if ("string" == typeof n) {
        if (void 0 === s[n]) throw new TypeError(`No method named "${n}"`);
        s[n]();
      } else i.interval && i.ride && (s.pause(), s.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        X.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = r(this);
      if (!e || !e.classList.contains("carousel")) return;
      const s = { ...$.getDataAttributes(e), ...$.getDataAttributes(this) },
        i = this.getAttribute("data-bs-slide-to");
      i && (s.interval = !1),
        X.carouselInterface(e, s),
        i && w.get(e, "bs.carousel").to(i),
        t.preventDefault();
    }
  }
  P.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    X.dataApiClickHandler
  ),
    P.on(window, "load.bs.carousel.data-api", () => {
      const t = U.find('[data-bs-ride="carousel"]');
      for (let e = 0, s = t.length; e < s; e++)
        X.carouselInterface(t[e], w.get(t[e], "bs.carousel"));
    }),
    v("carousel", X);
  const V = { toggle: !0, parent: "" },
    G = { toggle: "boolean", parent: "(string|element)" };
  class Z extends M {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = U.find(
          `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
        ));
      const s = U.find('[data-bs-toggle="collapse"]');
      for (let t = 0, e = s.length; t < e; t++) {
        const e = s[t],
          i = o(e),
          n = U.find(i).filter((t) => t === this._element);
        null !== i &&
          n.length &&
          ((this._selector = i), this._triggerArray.push(e));
      }
      (this._parent = this._config.parent ? this._getParent() : null),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return V;
    }
    static get DATA_KEY() {
      return "bs.collapse";
    }
    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains("show"))
        return;
      let t, e;
      this._parent &&
        ((t = U.find(".show, .collapsing", this._parent).filter((t) =>
          "string" == typeof this._config.parent
            ? t.getAttribute("data-bs-parent") === this._config.parent
            : t.classList.contains("collapse")
        )),
        0 === t.length && (t = null));
      const s = U.findOne(this._selector);
      if (t) {
        const i = t.find((t) => s !== t);
        if (((e = i ? w.get(i, "bs.collapse") : null), e && e._isTransitioning))
          return;
      }
      if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      t &&
        t.forEach((t) => {
          s !== t && Z.collapseInterface(t, "hide"),
            e || w.set(t, "bs.collapse", null);
        });
      const i = this._getDimension();
      this._element.classList.remove("collapse"),
        this._element.classList.add("collapsing"),
        (this._element.style[i] = 0),
        this._triggerArray.length &&
          this._triggerArray.forEach((t) => {
            t.classList.remove("collapsed"),
              t.setAttribute("aria-expanded", !0);
          }),
        this.setTransitioning(!0);
      const n = "scroll" + (i[0].toUpperCase() + i.slice(1)),
        o = a(this._element);
      P.one(this._element, "transitionend", () => {
        this._element.classList.remove("collapsing"),
          this._element.classList.add("collapse", "show"),
          (this._element.style[i] = ""),
          this.setTransitioning(!1),
          P.trigger(this._element, "shown.bs.collapse");
      }),
        h(this._element, o),
        (this._element.style[i] = this._element[n] + "px");
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains("show"))
        return;
      if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] =
        this._element.getBoundingClientRect()[t] + "px"),
        m(this._element),
        this._element.classList.add("collapsing"),
        this._element.classList.remove("collapse", "show");
      const e = this._triggerArray.length;
      if (e > 0)
        for (let t = 0; t < e; t++) {
          const e = this._triggerArray[t],
            s = r(e);
          s &&
            !s.classList.contains("show") &&
            (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
        }
      this.setTransitioning(!0), (this._element.style[t] = "");
      const s = a(this._element);
      P.one(this._element, "transitionend", () => {
        this.setTransitioning(!1),
          this._element.classList.remove("collapsing"),
          this._element.classList.add("collapse"),
          P.trigger(this._element, "hidden.bs.collapse");
      }),
        h(this._element, s);
    }
    setTransitioning(t) {
      this._isTransitioning = t;
    }
    dispose() {
      super.dispose(),
        (this._config = null),
        (this._parent = null),
        (this._triggerArray = null),
        (this._isTransitioning = null);
    }
    _getConfig(t) {
      return (
        ((t = { ...V, ...t }).toggle = Boolean(t.toggle)),
        d("collapse", t, G),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height";
    }
    _getParent() {
      let { parent: t } = this._config;
      c(t)
        ? (void 0 === t.jquery && void 0 === t[0]) || (t = t[0])
        : (t = U.findOne(t));
      const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
      return (
        U.find(e, t).forEach((t) => {
          const e = r(t);
          this._addAriaAndCollapsedClass(e, [t]);
        }),
        t
      );
    }
    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const s = t.classList.contains("show");
      e.forEach((t) => {
        s ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
          t.setAttribute("aria-expanded", s);
      });
    }
    static collapseInterface(t, e) {
      let s = w.get(t, "bs.collapse");
      const i = {
        ...V,
        ...$.getDataAttributes(t),
        ...("object" == typeof e && e ? e : {}),
      };
      if (
        (!s &&
          i.toggle &&
          "string" == typeof e &&
          /show|hide/.test(e) &&
          (i.toggle = !1),
        s || (s = new Z(t, i)),
        "string" == typeof e)
      ) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        Z.collapseInterface(this, t);
      });
    }
  }
  P.on(
    document,
    "click.bs.collapse.data-api",
    '[data-bs-toggle="collapse"]',
    function (t) {
      ("A" === t.target.tagName ||
        (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
        t.preventDefault();
      const e = $.getDataAttributes(this),
        s = o(this);
      U.find(s).forEach((t) => {
        const s = w.get(t, "bs.collapse");
        let i;
        s
          ? (null === s._parent &&
              "string" == typeof e.parent &&
              ((s._config.parent = e.parent), (s._parent = s._getParent())),
            (i = "toggle"))
          : (i = e),
          Z.collapseInterface(t, i);
      });
    }
  ),
    v("collapse", Z);
  const J = new RegExp("ArrowUp|ArrowDown|Escape"),
    tt = b() ? "top-end" : "top-start",
    et = b() ? "top-start" : "top-end",
    st = b() ? "bottom-end" : "bottom-start",
    it = b() ? "bottom-start" : "bottom-end",
    nt = b() ? "left-start" : "right-start",
    ot = b() ? "right-start" : "left-start",
    rt = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    at = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
    };
  class lt extends M {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar()),
        this._addEventListeners();
    }
    static get Default() {
      return rt;
    }
    static get DefaultType() {
      return at;
    }
    static get DATA_KEY() {
      return "bs.dropdown";
    }
    toggle() {
      if (
        this._element.disabled ||
        this._element.classList.contains("disabled")
      )
        return;
      const t = this._element.classList.contains("show");
      lt.clearMenus(), t || this.show();
    }
    show() {
      if (
        this._element.disabled ||
        this._element.classList.contains("disabled") ||
        this._menu.classList.contains("show")
      )
        return;
      const t = lt.getParentFromElement(this._element),
        e = { relatedTarget: this._element };
      if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
        if (this._inNavbar) $.setDataAttribute(this._menu, "popper", "none");
        else {
          if (void 0 === s)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let e = this._element;
          "parent" === this._config.reference
            ? (e = t)
            : c(this._config.reference)
            ? ((e = this._config.reference),
              void 0 !== this._config.reference.jquery &&
                (e = this._config.reference[0]))
            : "object" == typeof this._config.reference &&
              (e = this._config.reference);
          const i = this._getPopperConfig(),
            n = i.modifiers.find(
              (t) => "applyStyles" === t.name && !1 === t.enabled
            );
          (this._popper = s.createPopper(e, this._menu, i)),
            n && $.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement &&
          !t.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.on(t, "mouseover", null, function () {})),
          this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.toggle("show"),
          this._element.classList.toggle("show"),
          P.trigger(this._element, "shown.bs.dropdown", e);
      }
    }
    hide() {
      if (
        this._element.disabled ||
        this._element.classList.contains("disabled") ||
        !this._menu.classList.contains("show")
      )
        return;
      const t = { relatedTarget: this._element };
      P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        (this._popper && this._popper.destroy(),
        this._menu.classList.toggle("show"),
        this._element.classList.toggle("show"),
        $.removeDataAttribute(this._menu, "popper"),
        P.trigger(this._element, "hidden.bs.dropdown", t));
    }
    dispose() {
      P.off(this._element, ".bs.dropdown"),
        (this._menu = null),
        this._popper && (this._popper.destroy(), (this._popper = null)),
        super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _addEventListeners() {
      P.on(this._element, "click.bs.dropdown", (t) => {
        t.preventDefault(), this.toggle();
      });
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...$.getDataAttributes(this._element),
          ...t,
        }),
        d("dropdown", t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !c(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          "dropdown".toUpperCase() +
            ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
        );
      return t;
    }
    _getMenuElement() {
      return U.next(this._element, ".dropdown-menu")[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return nt;
      if (t.classList.contains("dropstart")) return ot;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? et : tt) : e ? it : st;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    static dropdownInterface(t, e) {
      let s = w.get(t, "bs.dropdown");
      if (
        (s || (s = new lt(t, "object" == typeof e ? e : null)),
        "string" == typeof e)
      ) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        lt.dropdownInterface(this, t);
      });
    }
    static clearMenus(t) {
      if (t) {
        if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
        if (/input|select|textarea|form/i.test(t.target.tagName)) return;
      }
      const e = U.find('[data-bs-toggle="dropdown"]');
      for (let s = 0, i = e.length; s < i; s++) {
        const i = w.get(e[s], "bs.dropdown"),
          n = { relatedTarget: e[s] };
        if ((t && "click" === t.type && (n.clickEvent = t), !i)) continue;
        const o = i._menu;
        if (e[s].classList.contains("show")) {
          if (t) {
            if ([i._element].some((e) => t.composedPath().includes(e)))
              continue;
            if ("keyup" === t.type && "Tab" === t.key && o.contains(t.target))
              continue;
          }
          P.trigger(e[s], "hide.bs.dropdown", n).defaultPrevented ||
            ("ontouchstart" in document.documentElement &&
              []
                .concat(...document.body.children)
                .forEach((t) => P.off(t, "mouseover", null, function () {})),
            e[s].setAttribute("aria-expanded", "false"),
            i._popper && i._popper.destroy(),
            o.classList.remove("show"),
            e[s].classList.remove("show"),
            $.removeDataAttribute(o, "popper"),
            P.trigger(e[s], "hidden.bs.dropdown", n));
        }
      }
    }
    static getParentFromElement(t) {
      return r(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? "Space" === t.key ||
            ("Escape" !== t.key &&
              (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                t.target.closest(".dropdown-menu")))
          : !J.test(t.key)
      )
        return;
      if (
        (t.preventDefault(),
        t.stopPropagation(),
        this.disabled || this.classList.contains("disabled"))
      )
        return;
      const e = lt.getParentFromElement(this),
        s = this.classList.contains("show");
      if ("Escape" === t.key)
        return (
          (this.matches('[data-bs-toggle="dropdown"]')
            ? this
            : U.prev(this, '[data-bs-toggle="dropdown"]')[0]
          ).focus(),
          void lt.clearMenus()
        );
      if (!s && ("ArrowUp" === t.key || "ArrowDown" === t.key))
        return void (
          this.matches('[data-bs-toggle="dropdown"]')
            ? this
            : U.prev(this, '[data-bs-toggle="dropdown"]')[0]
        ).click();
      if (!s || "Space" === t.key) return void lt.clearMenus();
      const i = U.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        e
      ).filter(u);
      if (!i.length) return;
      let n = i.indexOf(t.target);
      "ArrowUp" === t.key && n > 0 && n--,
        "ArrowDown" === t.key && n < i.length - 1 && n++,
        (n = -1 === n ? 0 : n),
        i[n].focus();
    }
  }
  P.on(
    document,
    "keydown.bs.dropdown.data-api",
    '[data-bs-toggle="dropdown"]',
    lt.dataApiKeydownHandler
  ),
    P.on(
      document,
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      lt.dataApiKeydownHandler
    ),
    P.on(document, "click.bs.dropdown.data-api", lt.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", lt.clearMenus),
    P.on(
      document,
      "click.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      function (t) {
        t.preventDefault(), lt.dropdownInterface(this);
      }
    ),
    v("dropdown", lt);
  const ct = { backdrop: !0, keyboard: !0, focus: !0 },
    ht = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    };
  class dt extends M {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = U.findOne(".modal-dialog", this._element)),
        (this._backdrop = null),
        (this._isShown = !1),
        (this._isBodyOverflowing = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollbarWidth = 0);
    }
    static get Default() {
      return ct;
    }
    static get DATA_KEY() {
      return "bs.modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      this._isAnimated() && (this._isTransitioning = !0);
      const e = P.trigger(this._element, "show.bs.modal", { relatedTarget: t });
      this._isShown ||
        e.defaultPrevented ||
        ((this._isShown = !0),
        this._checkScrollbar(),
        this._setScrollbar(),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.on(
          this._element,
          "click.dismiss.bs.modal",
          '[data-bs-dismiss="modal"]',
          (t) => this.hide(t)
        ),
        P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
          P.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide(t) {
      if ((t && t.preventDefault(), !this._isShown || this._isTransitioning))
        return;
      if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      if (
        (e && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.off(document, "focusin.bs.modal"),
        this._element.classList.remove("show"),
        P.off(this._element, "click.dismiss.bs.modal"),
        P.off(this._dialog, "mousedown.dismiss.bs.modal"),
        e)
      ) {
        const t = a(this._element);
        P.one(this._element, "transitionend", (t) => this._hideModal(t)),
          h(this._element, t);
      } else this._hideModal();
    }
    dispose() {
      [window, this._element, this._dialog].forEach((t) =>
        P.off(t, ".bs.modal")
      ),
        super.dispose(),
        P.off(document, "focusin.bs.modal"),
        (this._config = null),
        (this._dialog = null),
        (this._backdrop = null),
        (this._isShown = null),
        (this._isBodyOverflowing = null),
        (this._ignoreBackdropClick = null),
        (this._isTransitioning = null),
        (this._scrollbarWidth = null);
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _getConfig(t) {
      return (t = { ...ct, ...t }), d("modal", t, ht), t;
    }
    _showElement(t) {
      const e = this._isAnimated(),
        s = U.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.appendChild(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        s && (s.scrollTop = 0),
        e && m(this._element),
        this._element.classList.add("show"),
        this._config.focus && this._enforceFocus();
      const i = () => {
        this._config.focus && this._element.focus(),
          (this._isTransitioning = !1),
          P.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
      };
      if (e) {
        const t = a(this._dialog);
        P.one(this._dialog, "transitionend", i), h(this._dialog, t);
      } else i();
    }
    _enforceFocus() {
      P.off(document, "focusin.bs.modal"),
        P.on(document, "focusin.bs.modal", (t) => {
          document === t.target ||
            this._element === t.target ||
            this._element.contains(t.target) ||
            this._element.focus();
        });
    }
    _setEscapeEvent() {
      this._isShown
        ? P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
            this._config.keyboard && "Escape" === t.key
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                "Escape" !== t.key ||
                this._triggerBackdropTransition();
          })
        : P.off(this._element, "keydown.dismiss.bs.modal");
    }
    _setResizeEvent() {
      this._isShown
        ? P.on(window, "resize.bs.modal", () => this._adjustDialog())
        : P.off(window, "resize.bs.modal");
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._showBackdrop(() => {
          document.body.classList.remove("modal-open"),
            this._resetAdjustments(),
            this._resetScrollbar(),
            P.trigger(this._element, "hidden.bs.modal");
        });
    }
    _removeBackdrop() {
      this._backdrop.parentNode.removeChild(this._backdrop),
        (this._backdrop = null);
    }
    _showBackdrop(t) {
      const e = this._isAnimated();
      if (this._isShown && this._config.backdrop) {
        if (
          ((this._backdrop = document.createElement("div")),
          (this._backdrop.className = "modal-backdrop"),
          e && this._backdrop.classList.add("fade"),
          document.body.appendChild(this._backdrop),
          P.on(this._element, "click.dismiss.bs.modal", (t) => {
            this._ignoreBackdropClick
              ? (this._ignoreBackdropClick = !1)
              : t.target === t.currentTarget &&
                ("static" === this._config.backdrop
                  ? this._triggerBackdropTransition()
                  : this.hide());
          }),
          e && m(this._backdrop),
          this._backdrop.classList.add("show"),
          !e)
        )
          return void t();
        const s = a(this._backdrop);
        P.one(this._backdrop, "transitionend", t), h(this._backdrop, s);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove("show");
        const s = () => {
          this._removeBackdrop(), t();
        };
        if (e) {
          const t = a(this._backdrop);
          P.one(this._backdrop, "transitionend", s), h(this._backdrop, t);
        } else s();
      } else t();
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const t =
        this._element.scrollHeight > document.documentElement.clientHeight;
      t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add("modal-static");
      const e = a(this._dialog);
      P.off(this._element, "transitionend"),
        P.one(this._element, "transitionend", () => {
          this._element.classList.remove("modal-static"),
            t ||
              (P.one(this._element, "transitionend", () => {
                this._element.style.overflowY = "";
              }),
              h(this._element, e));
        }),
        h(this._element, e),
        this._element.focus();
    }
    _adjustDialog() {
      const t =
        this._element.scrollHeight > document.documentElement.clientHeight;
      ((!this._isBodyOverflowing && t && !b()) ||
        (this._isBodyOverflowing && !t && b())) &&
        (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
        ((this._isBodyOverflowing && !t && !b()) ||
          (!this._isBodyOverflowing && t && b())) &&
          (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    _checkScrollbar() {
      const t = document.body.getBoundingClientRect();
      (this._isBodyOverflowing =
        Math.round(t.left + t.right) < window.innerWidth),
        (this._scrollbarWidth = this._getScrollbarWidth());
    }
    _setScrollbar() {
      this._isBodyOverflowing &&
        (this._setElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight",
          (t) => t + this._scrollbarWidth
        ),
        this._setElementAttributes(
          ".sticky-top",
          "marginRight",
          (t) => t - this._scrollbarWidth
        ),
        this._setElementAttributes(
          "body",
          "paddingRight",
          (t) => t + this._scrollbarWidth
        )),
        document.body.classList.add("modal-open");
    }
    _setElementAttributes(t, e, s) {
      U.find(t).forEach((t) => {
        if (
          t !== document.body &&
          window.innerWidth > t.clientWidth + this._scrollbarWidth
        )
          return;
        const i = t.style[e],
          n = window.getComputedStyle(t)[e];
        $.setDataAttribute(t, e, i),
          (t.style[e] = s(Number.parseFloat(n)) + "px");
      });
    }
    _resetScrollbar() {
      this._resetElementAttributes(
        ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        "paddingRight"
      ),
        this._resetElementAttributes(".sticky-top", "marginRight"),
        this._resetElementAttributes("body", "paddingRight");
    }
    _resetElementAttributes(t, e) {
      U.find(t).forEach((t) => {
        const s = $.getDataAttribute(t, e);
        void 0 === s && t === document.body
          ? (t.style[e] = "")
          : ($.removeDataAttribute(t, e), (t.style[e] = s));
      });
    }
    _getScrollbarWidth() {
      const t = document.createElement("div");
      (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
      const e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        let s = w.get(this, "bs.modal");
        const i = {
          ...ct,
          ...$.getDataAttributes(this),
          ...("object" == typeof t && t ? t : {}),
        };
        if ((s || (s = new dt(this, i)), "string" == typeof t)) {
          if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
          s[t](e);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = r(this);
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault(),
        P.one(e, "show.bs.modal", (t) => {
          t.defaultPrevented ||
            P.one(e, "hidden.bs.modal", () => {
              u(this) && this.focus();
            });
        });
      let s = w.get(e, "bs.modal");
      if (!s) {
        const t = { ...$.getDataAttributes(e), ...$.getDataAttributes(this) };
        s = new dt(e, t);
      }
      s.toggle(this);
    }
  ),
    v("modal", dt);
  const ut = () => {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    },
    gt = (t, e, s) => {
      const i = ut();
      U.find(t).forEach((t) => {
        if (t !== document.body && window.innerWidth > t.clientWidth + i)
          return;
        const n = t.style[e],
          o = window.getComputedStyle(t)[e];
        $.setDataAttribute(t, e, n),
          (t.style[e] = s(Number.parseFloat(o)) + "px");
      });
    },
    ft = (t, e) => {
      U.find(t).forEach((t) => {
        const s = $.getDataAttribute(t, e);
        void 0 === s && t === document.body
          ? t.style.removeProperty(e)
          : ($.removeDataAttribute(t, e), (t.style[e] = s));
      });
    },
    pt = { backdrop: !0, keyboard: !0, scroll: !1 },
    mt = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  class _t extends M {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        this._addEventListeners();
    }
    static get Default() {
      return pt;
    }
    static get DATA_KEY() {
      return "bs.offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._config.backdrop &&
          document.body.classList.add("offcanvas-backdrop"),
        this._config.scroll ||
          ((t = ut()) => {
            (document.body.style.overflow = "hidden"),
              gt(
                ".fixed-top, .fixed-bottom, .is-fixed",
                "paddingRight",
                (e) => e + t
              ),
              gt(".sticky-top", "marginRight", (e) => e - t),
              gt("body", "paddingRight", (e) => e + t);
          })(),
        this._element.classList.add("offcanvas-toggling"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show"),
        setTimeout(() => {
          this._element.classList.remove("offcanvas-toggling"),
            P.trigger(this._element, "shown.bs.offcanvas", {
              relatedTarget: t,
            }),
            this._enforceFocusOnElement(this._element);
        }, a(this._element)));
    }
    hide() {
      this._isShown &&
        (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._element.classList.add("offcanvas-toggling"),
          P.off(document, "focusin.bs.offcanvas"),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.remove("show"),
          setTimeout(() => {
            this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._element.style.visibility = "hidden"),
              this._config.backdrop &&
                document.body.classList.remove("offcanvas-backdrop"),
              this._config.scroll ||
                ((document.body.style.overflow = "auto"),
                ft(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"),
                ft(".sticky-top", "marginRight"),
                ft("body", "paddingRight")),
              P.trigger(this._element, "hidden.bs.offcanvas"),
              this._element.classList.remove("offcanvas-toggling");
          }, a(this._element))));
    }
    _getConfig(t) {
      return (
        (t = {
          ...pt,
          ...$.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        d("offcanvas", t, mt),
        t
      );
    }
    _enforceFocusOnElement(t) {
      P.off(document, "focusin.bs.offcanvas"),
        P.on(document, "focusin.bs.offcanvas", (e) => {
          document === e.target ||
            t === e.target ||
            t.contains(e.target) ||
            t.focus();
        }),
        t.focus();
    }
    _addEventListeners() {
      P.on(
        this._element,
        "click.dismiss.bs.offcanvas",
        '[data-bs-dismiss="offcanvas"]',
        () => this.hide()
      ),
        P.on(document, "keydown", (t) => {
          this._config.keyboard && "Escape" === t.key && this.hide();
        }),
        P.on(document, "click.bs.offcanvas.data-api", (t) => {
          const e = U.findOne(o(t.target));
          this._element.contains(t.target) ||
            e === this._element ||
            this.hide();
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e =
          w.get(this, "bs.offcanvas") ||
          new _t(this, "object" == typeof t ? t : {});
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = r(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), g(this)))
        return;
      P.one(e, "hidden.bs.offcanvas", () => {
        u(this) && this.focus();
      });
      const s = U.findOne(".offcanvas.show, .offcanvas-toggling");
      (s && s !== e) || (w.get(e, "bs.offcanvas") || new _t(e)).toggle(this);
    }
  ),
    P.on(window, "load.bs.offcanvas.data-api", () => {
      U.find(".offcanvas.show").forEach((t) =>
        (w.get(t, "bs.offcanvas") || new _t(t)).show()
      );
    }),
    v("offcanvas", _t);
  const bt = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    vt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    yt =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    wt = (t, e) => {
      const s = t.nodeName.toLowerCase();
      if (e.includes(s))
        return (
          !bt.has(s) || Boolean(vt.test(t.nodeValue) || yt.test(t.nodeValue))
        );
      const i = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = i.length; t < e; t++) if (i[t].test(s)) return !0;
      return !1;
    };
  function Et(t, e, s) {
    if (!t.length) return t;
    if (s && "function" == typeof s) return s(t);
    const i = new window.DOMParser().parseFromString(t, "text/html"),
      n = Object.keys(e),
      o = [].concat(...i.body.querySelectorAll("*"));
    for (let t = 0, s = o.length; t < s; t++) {
      const s = o[t],
        i = s.nodeName.toLowerCase();
      if (!n.includes(i)) {
        s.parentNode.removeChild(s);
        continue;
      }
      const r = [].concat(...s.attributes),
        a = [].concat(e["*"] || [], e[i] || []);
      r.forEach((t) => {
        wt(t, a) || s.removeAttribute(t.nodeName);
      });
    }
    return i.body.innerHTML;
  }
  const Tt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    At = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Lt = {
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
      popperConfig: "(null|object|function)",
    },
    kt = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: b() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: b() ? "right" : "left",
    },
    Ct = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
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
        ul: [],
      },
      popperConfig: null,
    },
    Dt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    };
  class St extends M {
    constructor(t, e) {
      if (void 0 === s)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this.config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return Ct;
    }
    static get NAME() {
      return "tooltip";
    }
    static get DATA_KEY() {
      return "bs.tooltip";
    }
    static get Event() {
      return Dt;
    }
    static get EVENT_KEY() {
      return ".bs.tooltip";
    }
    static get DefaultType() {
      return Lt;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains("show"))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(this._element, this.constructor.EVENT_KEY),
        P.off(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.tip &&
          this.tip.parentNode &&
          this.tip.parentNode.removeChild(this.tip),
        (this._isEnabled = null),
        (this._timeout = null),
        (this._hoverState = null),
        (this._activeTrigger = null),
        this._popper && this._popper.destroy(),
        (this._popper = null),
        (this.config = null),
        (this.tip = null),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.Event.SHOW),
        e = f(this._element),
        n =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !n) return;
      const o = this.getTipElement(),
        r = i(this.constructor.NAME);
      o.setAttribute("id", r),
        this._element.setAttribute("aria-describedby", r),
        this.setContent(),
        this.config.animation && o.classList.add("fade");
      const l =
          "function" == typeof this.config.placement
            ? this.config.placement.call(this, o, this._element)
            : this.config.placement,
        c = this._getAttachment(l);
      this._addAttachmentClass(c);
      const d = this._getContainer();
      w.set(o, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (d.appendChild(o),
          P.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = s.createPopper(
              this._element,
              o,
              this._getPopperConfig(c)
            )),
        o.classList.add("show");
      const u =
        "function" == typeof this.config.customClass
          ? this.config.customClass()
          : this.config.customClass;
      u && o.classList.add(...u.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            P.on(t, "mouseover", function () {});
          });
      const g = () => {
        const t = this._hoverState;
        (this._hoverState = null),
          P.trigger(this._element, this.constructor.Event.SHOWN),
          "out" === t && this._leave(null, this);
      };
      if (this.tip.classList.contains("fade")) {
        const t = a(this.tip);
        P.one(this.tip, "transitionend", g), h(this.tip, t);
      } else g();
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement(),
        e = () => {
          this._isWithActiveTrigger() ||
            ("show" !== this._hoverState &&
              t.parentNode &&
              t.parentNode.removeChild(t),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            P.trigger(this._element, this.constructor.Event.HIDDEN),
            this._popper && (this._popper.destroy(), (this._popper = null)));
        };
      if (
        !P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      ) {
        if (
          (t.classList.remove("show"),
          "ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((t) => P.off(t, "mouseover", p)),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1),
          this.tip.classList.contains("fade"))
        ) {
          const s = a(t);
          P.one(t, "transitionend", e), h(t, s);
        } else e();
        this._hoverState = "";
      }
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      return (
        (t.innerHTML = this.config.template),
        (this.tip = t.children[0]),
        this.tip
      );
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(U.findOne(".tooltip-inner", t), this.getTitle()),
        t.classList.remove("fade", "show");
    }
    setElementContent(t, e) {
      if (null !== t)
        return "object" == typeof e && c(e)
          ? (e.jquery && (e = e[0]),
            void (this.config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
              : (t.textContent = e.textContent)))
          : void (this.config.html
              ? (this.config.sanitize &&
                  (e = Et(e, this.config.allowList, this.config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      let t = this._element.getAttribute("data-bs-original-title");
      return (
        t ||
          (t =
            "function" == typeof this.config.title
              ? this.config.title.call(this._element)
              : this.config.title),
        t
      );
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      const s = this.constructor.DATA_KEY;
      return (
        (e = e || w.get(t.delegateTarget, s)) ||
          ((e = new this.constructor(
            t.delegateTarget,
            this._getDelegateConfig()
          )),
          w.set(t.delegateTarget, s, e)),
        e
      );
    }
    _getOffset() {
      const { offset: t } = this.config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: {
              altBoundary: !0,
              fallbackPlacements: this.config.fallbackPlacements,
            },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this.config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this.config.popperConfig
          ? this.config.popperConfig(e)
          : this.config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-tooltip-" + this.updateAttachment(t)
      );
    }
    _getContainer() {
      return !1 === this.config.container
        ? document.body
        : c(this.config.container)
        ? this.config.container
        : U.findOne(this.config.container);
    }
    _getAttachment(t) {
      return kt[t.toUpperCase()];
    }
    _setListeners() {
      this.config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          P.on(
            this._element,
            this.constructor.Event.CLICK,
            this.config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              "hover" === t
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            s =
              "hover" === t
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          P.on(this._element, e, this.config.selector, (t) => this._enter(t)),
            P.on(this._element, s, this.config.selector, (t) => this._leave(t));
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        P.on(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.config.selector
          ? (this.config = { ...this.config, trigger: "manual", selector: "" })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
        e.getTipElement().classList.contains("show") || "show" === e._hoverState
          ? (e._hoverState = "show")
          : (clearTimeout(e._timeout),
            (e._hoverState = "show"),
            e.config.delay && e.config.delay.show
              ? (e._timeout = setTimeout(() => {
                  "show" === e._hoverState && e.show();
                }, e.config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = "out"),
          e.config.delay && e.config.delay.hide
            ? (e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide();
              }, e.config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = $.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          At.has(t) && delete e[t];
        }),
        t &&
          "object" == typeof t.container &&
          t.container.jquery &&
          (t.container = t.container[0]),
        "number" ==
          typeof (t = {
            ...this.constructor.Default,
            ...e,
            ...("object" == typeof t && t ? t : {}),
          }).delay && (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        d("tooltip", t, this.constructor.DefaultType),
        t.sanitize && (t.template = Et(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      if (this.config)
        for (const e in this.config)
          this.constructor.Default[e] !== this.config[e] &&
            (t[e] = this.config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(Tt);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, "bs.tooltip");
        const s = "object" == typeof t && t;
        if (
          (e || !/dispose|hide/.test(t)) &&
          (e || (e = new St(this, s)), "string" == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v("tooltip", St);
  const Nt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Ot = {
      ...St.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    xt = { ...St.DefaultType, content: "(string|element|function)" },
    It = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class jt extends St {
    static get Default() {
      return Ot;
    }
    static get NAME() {
      return "popover";
    }
    static get DATA_KEY() {
      return "bs.popover";
    }
    static get Event() {
      return It;
    }
    static get EVENT_KEY() {
      return ".bs.popover";
    }
    static get DefaultType() {
      return xt;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(U.findOne(".popover-header", t), this.getTitle());
      let e = this._getContent();
      "function" == typeof e && (e = e.call(this._element)),
        this.setElementContent(U.findOne(".popover-body", t), e),
        t.classList.remove("fade", "show");
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-popover-" + this.updateAttachment(t)
      );
    }
    _getContent() {
      return (
        this._element.getAttribute("data-bs-content") || this.config.content
      );
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(Nt);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, "bs.popover");
        const s = "object" == typeof t ? t : null;
        if (
          (e || !/dispose|hide/.test(t)) &&
          (e || ((e = new jt(this, s)), w.set(this, "bs.popover", e)),
          "string" == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v("popover", jt);
  const Pt = { offset: 10, method: "auto", target: "" },
    Mt = { offset: "number", method: "string", target: "(string|element)" };
  class Ht extends M {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Pt;
    }
    static get DATA_KEY() {
      return "bs.scrollspy";
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window
            ? "offset"
            : "position",
        e = "auto" === this._config.method ? t : this._config.method,
        s = "position" === e ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        U.find(this._selector)
          .map((t) => {
            const i = o(t),
              n = i ? U.findOne(i) : null;
            if (n) {
              const t = n.getBoundingClientRect();
              if (t.width || t.height) return [$[e](n).top + s, i];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      super.dispose(),
        P.off(this._scrollElement, ".bs.scrollspy"),
        (this._scrollElement = null),
        (this._config = null),
        (this._selector = null),
        (this._offsets = null),
        (this._targets = null),
        (this._activeTarget = null),
        (this._scrollHeight = null);
    }
    _getConfig(t) {
      if (
        "string" !=
          typeof (t = { ...Pt, ...("object" == typeof t && t ? t : {}) })
            .target &&
        c(t.target)
      ) {
        let { id: e } = t.target;
        e || ((e = i("scrollspy")), (t.target.id = e)), (t.target = "#" + e);
      }
      return d("scrollspy", t, Mt), t;
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        s = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= s)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = this._selector
          .split(",")
          .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
        s = U.findOne(e.join(","));
      s.classList.contains("dropdown-item")
        ? (U.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add(
            "active"
          ),
          s.classList.add("active"))
        : (s.classList.add("active"),
          U.parents(s, ".nav, .list-group").forEach((t) => {
            U.prev(t, ".nav-link, .list-group-item").forEach((t) =>
              t.classList.add("active")
            ),
              U.prev(t, ".nav-item").forEach((t) => {
                U.children(t, ".nav-link").forEach((t) =>
                  t.classList.add("active")
                );
              });
          })),
        P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t,
        });
    }
    _clear() {
      U.find(this._selector)
        .filter((t) => t.classList.contains("active"))
        .forEach((t) => t.classList.remove("active"));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, "bs.scrollspy");
        if (
          (e || (e = new Ht(this, "object" == typeof t && t)),
          "string" == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, "load.bs.scrollspy.data-api", () => {
    U.find('[data-bs-spy="scroll"]').forEach(
      (t) => new Ht(t, $.getDataAttributes(t))
    );
  }),
    v("scrollspy", Ht);
  class Rt extends M {
    static get DATA_KEY() {
      return "bs.tab";
    }
    show() {
      if (
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          this._element.classList.contains("active")) ||
        g(this._element)
      )
        return;
      let t;
      const e = r(this._element),
        s = this._element.closest(".nav, .list-group");
      if (s) {
        const e =
          "UL" === s.nodeName || "OL" === s.nodeName
            ? ":scope > li > .active"
            : ".active";
        (t = U.find(e, s)), (t = t[t.length - 1]);
      }
      const i = t
        ? P.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        P.trigger(this._element, "show.bs.tab", { relatedTarget: t })
          .defaultPrevented ||
        (null !== i && i.defaultPrevented)
      )
        return;
      this._activate(this._element, s);
      const n = () => {
        P.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
          P.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, n) : n();
    }
    _activate(t, e, s) {
      const i = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? U.children(e, ".active")
            : U.find(":scope > li > .active", e)
        )[0],
        n = s && i && i.classList.contains("fade"),
        o = () => this._transitionComplete(t, i, s);
      if (i && n) {
        const t = a(i);
        i.classList.remove("show"), P.one(i, "transitionend", o), h(i, t);
      } else o();
    }
    _transitionComplete(t, e, s) {
      if (e) {
        e.classList.remove("active");
        const t = U.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove("active"),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add("active"),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        m(t),
        t.classList.contains("fade") && t.classList.add("show"),
        t.parentNode &&
          t.parentNode.classList.contains("dropdown-menu") &&
          (t.closest(".dropdown") &&
            U.find(".dropdown-toggle").forEach((t) =>
              t.classList.add("active")
            ),
          t.setAttribute("aria-expanded", !0)),
        s && s();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = w.get(this, "bs.tab") || new Rt(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      t.preventDefault(), (w.get(this, "bs.tab") || new Rt(this)).show();
    }
  ),
    v("tab", Rt);
  const Bt = { animation: "boolean", autohide: "boolean", delay: "number" },
    Wt = { animation: !0, autohide: !0, delay: 5e3 };
  class $t extends M {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        this._setListeners();
    }
    static get DefaultType() {
      return Bt;
    }
    static get Default() {
      return Wt;
    }
    static get DATA_KEY() {
      return "bs.toast";
    }
    show() {
      if (P.trigger(this._element, "show.bs.toast").defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      const t = () => {
        this._element.classList.remove("showing"),
          this._element.classList.add("show"),
          P.trigger(this._element, "shown.bs.toast"),
          this._config.autohide &&
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay));
      };
      if (
        (this._element.classList.remove("hide"),
        m(this._element),
        this._element.classList.add("showing"),
        this._config.animation)
      ) {
        const e = a(this._element);
        P.one(this._element, "transitionend", t), h(this._element, e);
      } else t();
    }
    hide() {
      if (!this._element.classList.contains("show")) return;
      if (P.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
      const t = () => {
        this._element.classList.add("hide"),
          P.trigger(this._element, "hidden.bs.toast");
      };
      if ((this._element.classList.remove("show"), this._config.animation)) {
        const e = a(this._element);
        P.one(this._element, "transitionend", t), h(this._element, e);
      } else t();
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains("show") &&
          this._element.classList.remove("show"),
        P.off(this._element, "click.dismiss.bs.toast"),
        super.dispose(),
        (this._config = null);
    }
    _getConfig(t) {
      return (
        (t = {
          ...Wt,
          ...$.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        d("toast", t, this.constructor.DefaultType),
        t
      );
    }
    _setListeners() {
      P.on(
        this._element,
        "click.dismiss.bs.toast",
        '[data-bs-dismiss="toast"]',
        () => this.hide()
      );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, "bs.toast");
        if (
          (e || (e = new $t(this, "object" == typeof t && t)),
          "string" == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    v("toast", $t),
    {
      Alert: H,
      Button: R,
      Carousel: X,
      Collapse: Z,
      Dropdown: lt,
      Modal: dt,
      Offcanvas: _t,
      Popover: jt,
      ScrollSpy: Ht,
      Tab: Rt,
      Toast: $t,
      Tooltip: St,
    }
  );
});
//# sourceMappingURL=bootstrap.min.js.map

/**
 * Swiper 6.6.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 19, 2021
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
        t());
})(this, function () {
  "use strict";
  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function t() {
    return (t =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];
          for (var i in a)
            Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  function a(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function i(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      Object.keys(t).forEach(function (s) {
        void 0 === e[s]
          ? (e[s] = t[s])
          : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
      });
  }
  var s = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: "" },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function r() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, s), e;
  }
  var n = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function l() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, n), e;
  }
  function o(e) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function d(e, t) {
    return (d =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function u(e, t, a) {
    return (u = p()
      ? Reflect.construct
      : function (e, t, a) {
          var i = [null];
          i.push.apply(i, t);
          var s = new (Function.bind.apply(e, i))();
          return a && d(s, a.prototype), s;
        }).apply(null, arguments);
  }
  function c(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (c = function (e) {
      if (
        null === e ||
        ((a = e), -1 === Function.toString.call(a).indexOf("[native code]"))
      )
        return e;
      var a;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }
      function i() {
        return u(e, arguments, o(this).constructor);
      }
      return (
        (i.prototype = Object.create(e.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        d(i, e)
      );
    })(e);
  }
  var h = (function (e) {
    var t, a;
    function i(t) {
      var a, i, s;
      return (
        (a = e.call.apply(e, [this].concat(t)) || this),
        (i = (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(a)),
        (s = i.__proto__),
        Object.defineProperty(i, "__proto__", {
          get: function () {
            return s;
          },
          set: function (e) {
            s.__proto__ = e;
          },
        }),
        a
      );
    }
    return (
      (a = e),
      ((t = i).prototype = Object.create(a.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = a),
      i
    );
  })(c(Array));
  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return (
      e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
      }),
      t
    );
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    var a = l(),
      i = r(),
      s = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(s);
    if ("string" == typeof e) {
      var n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"),
          0 === n.indexOf("<tr") && (o = "tbody"),
          (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (o = "tr"),
          0 === n.indexOf("<tbody") && (o = "table"),
          0 === n.indexOf("<option") && (o = "select");
        var d = i.createElement(o);
        d.innerHTML = n;
        for (var p = 0; p < d.childNodes.length; p += 1)
          s.push(d.childNodes[p]);
      } else
        s = (function (e, t) {
          if ("string" != typeof e) return [e];
          for (
            var a = [], i = t.querySelectorAll(e), s = 0;
            s < i.length;
            s += 1
          )
            a.push(i[s]);
          return a;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      s = e;
    }
    return new h(
      (function (e) {
        for (var t = [], a = 0; a < e.length; a += 1)
          -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
      })(s)
    );
  }
  m.fn = h.prototype;
  var g,
    b,
    y,
    w = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, i);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, i);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          f(this, function (e) {
            return (
              i.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var a = 0; a < this.length; a += 1)
          if (2 === arguments.length) this[a].setAttribute(e, t);
          else
            for (var i in e) (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var a = e.target.dom7EventData || [];
            if ((a.indexOf(e) < 0 && a.unshift(e), m(t).is(s))) r.apply(t, a);
            else
              for (var i = m(t).parents(), n = 0; n < i.length; n += 1)
                m(i[n]).is(s) && r.apply(i[n], a);
          }
        }
        function o(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1);
        for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
          var c = this[u];
          if (s)
            for (d = 0; d < p.length; d += 1) {
              var h = p[d];
              c.dom7LiveListeners || (c.dom7LiveListeners = {}),
                c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []),
                c.dom7LiveListeners[h].push({ listener: r, proxyListener: l }),
                c.addEventListener(h, l, n);
            }
          else
            for (d = 0; d < p.length; d += 1) {
              var v = p[d];
              c.dom7Listeners || (c.dom7Listeners = {}),
                c.dom7Listeners[v] || (c.dom7Listeners[v] = []),
                c.dom7Listeners[v].push({ listener: r, proxyListener: o }),
                c.addEventListener(v, o, n);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1);
        for (var l = i.split(" "), o = 0; o < l.length; o += 1)
          for (var d = l[o], p = 0; p < this.length; p += 1) {
            var u = this[p],
              c = void 0;
            if (
              (!s && u.dom7Listeners
                ? (c = u.dom7Listeners[d])
                : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]),
              c && c.length)
            )
              for (var h = c.length - 1; h >= 0; h -= 1) {
                var v = c[h];
                (r && v.listener === r) ||
                (r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r)
                  ? (u.removeEventListener(d, v.proxyListener, n),
                    c.splice(h, 1))
                  : r ||
                    (u.removeEventListener(d, v.proxyListener, n),
                    c.splice(h, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (
          var e = l(), t = arguments.length, a = new Array(t), i = 0;
          i < t;
          i++
        )
          a[i] = arguments[i];
        for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)
          for (var o = s[n], d = 0; d < this.length; d += 1) {
            var p = this[d];
            if (e.CustomEvent) {
              var u = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0,
              });
              (p.dom7EventData = a.filter(function (e, t) {
                return t > 0;
              })),
                p.dispatchEvent(u),
                (p.dom7EventData = []),
                delete p.dom7EventData;
            }
          }
        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return (
          e &&
            t.on("transitionend", function a(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", a));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = l(),
            t = r(),
            a = this[0],
            i = a.getBoundingClientRect(),
            s = t.body,
            n = a.clientTop || s.clientTop || 0,
            o = a.clientLeft || s.clientLeft || 0,
            d = a === e ? e.scrollY : a.scrollTop,
            p = a === e ? e.scrollX : a.scrollLeft;
          return { top: i.top + d - n, left: i.left + p - o };
        }
        return null;
      },
      css: function (e, t) {
        var a,
          i = l();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1)
              for (var s in e) this[a].style[s] = e[s];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach(function (t, a) {
              e.apply(t, [t, a]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          a,
          i = l(),
          s = r(),
          n = this[0];
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (t = m(e), a = 0; a < t.length; a += 1) if (t[a] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === i) return n === i;
        if (e.nodeType || e instanceof h) {
          for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
            if (t[a] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);
        if (e < 0) {
          var a = t + e;
          return m(a < 0 ? [] : [this[a]]);
        }
        return m([this[e]]);
      },
      append: function () {
        for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
          e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
          for (var i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              var s = t.createElement("div");
              for (s.innerHTML = e; s.firstChild; )
                this[i].appendChild(s.firstChild);
            } else if (e instanceof h)
              for (var n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);
            else this[i].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          a,
          i = r();
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            var s = i.createElement("div");
            for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1)
              this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
          } else if (e instanceof h)
            for (a = 0; a < e.length; a += 1)
              this[t].insertBefore(e[a], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
              ? m([this[0].nextElementSibling])
              : m([])
            : this[0].nextElementSibling
            ? m([this[0].nextElementSibling])
            : m([])
          : m([]);
      },
      nextAll: function (e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.nextElementSibling; ) {
          var i = a.nextElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
        }
        return m(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && m(t.previousElementSibling).is(e)
              ? m([t.previousElementSibling])
              : m([])
            : t.previousElementSibling
            ? m([t.previousElementSibling])
            : m([]);
        }
        return m([]);
      },
      prevAll: function (e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.previousElementSibling; ) {
          var i = a.previousElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
        }
        return m(t);
      },
      parent: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          null !== this[a].parentNode &&
            (e
              ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode)
              : t.push(this[a].parentNode));
        return m(t);
      },
      parents: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var i = this[a].parentNode; i; )
            e ? m(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        return m(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          try {
            var i = this[a].querySelectorAll(e);
          } catch (t) {
            console.log(e);
          }
          for (var s = 0; s < i.length; s += 1) t.push(i[s]);
        }
        return m(t);
      },
      children: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var i = this[a].children, s = 0; s < i.length; s += 1)
            (e && !m(i[s]).is(e)) || t.push(i[s]);
        return m(t);
      },
      filter: function (e) {
        return m(f(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function x() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    var a,
      i,
      s,
      r = l(),
      n = (function (e) {
        var t,
          a = l();
        return (
          a.getComputedStyle && (t = a.getComputedStyle(e, null)),
          !t && e.currentStyle && (t = e.currentStyle),
          t || (t = e.style),
          t
        );
      })(e);
    return (
      r.WebKitCSSMatrix
        ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
            (i = i
              .split(", ")
              .map(function (e) {
                return e.replace(",", ".");
              })
              .join(", ")),
          (s = new r.WebKitCSSMatrix("none" === i ? "" : i)))
        : (a = (s =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,"))
            .toString()
            .split(",")),
      "x" === t &&
        (i = r.WebKitCSSMatrix
          ? s.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
        (i = r.WebKitCSSMatrix
          ? s.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function C(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function S() {
    for (
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"],
        a = 1;
      a < arguments.length;
      a += 1
    ) {
      var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (null != i)
        for (
          var s = Object.keys(Object(i)).filter(function (e) {
              return t.indexOf(e) < 0;
            }),
            r = 0,
            n = s.length;
          r < n;
          r += 1
        ) {
          var l = s[r],
            o = Object.getOwnPropertyDescriptor(i, l);
          void 0 !== o &&
            o.enumerable &&
            (C(e[l]) && C(i[l])
              ? i[l].__swiper__
                ? (e[l] = i[l])
                : S(e[l], i[l])
              : !C(e[l]) && C(i[l])
              ? ((e[l] = {}), i[l].__swiper__ ? (e[l] = i[l]) : S(e[l], i[l]))
              : (e[l] = i[l]));
        }
    }
    return e;
  }
  function M(e, t) {
    Object.keys(t).forEach(function (a) {
      C(t[a]) &&
        Object.keys(t[a]).forEach(function (i) {
          "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
        }),
        (e[a] = t[a]);
    });
  }
  function z(e) {
    return (
      void 0 === e && (e = ""),
      "." +
        e
          .trim()
          .replace(/([\.:\/])/g, "\\$1")
          .replace(/ /g, ".")
    );
  }
  function P() {
    return (
      g ||
        (g = (function () {
          var e = l(),
            t = r();
          return {
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            pointerEvents:
              !!e.PointerEvent &&
              "maxTouchPoints" in e.navigator &&
              e.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
            passiveListener: (function () {
              var t = !1;
              try {
                var a = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, a);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      g
    );
  }
  function k(e) {
    return (
      void 0 === e && (e = {}),
      b ||
        (b = (function (e) {
          var t = (void 0 === e ? {} : e).userAgent,
            a = P(),
            i = l(),
            s = i.navigator.platform,
            r = t || i.navigator.userAgent,
            n = { ios: !1, android: !1 },
            o = i.screen.width,
            d = i.screen.height,
            p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
            u = r.match(/(iPad).*OS\s([\d_]+)/),
            c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            v = "Win32" === s,
            f = "MacIntel" === s;
          return (
            !u &&
              f &&
              a.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(o + "x" + d) >= 0 &&
              ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]),
              (f = !1)),
            p && !v && ((n.os = "android"), (n.android = !0)),
            (u || h || c) && ((n.os = "ios"), (n.ios = !0)),
            n
          );
        })(e)),
      b
    );
  }
  function $() {
    return (
      y ||
        (y = (function () {
          var e,
            t = l();
          return {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
              ((e = t.navigator.userAgent.toLowerCase()),
              e.indexOf("safari") >= 0 &&
                e.indexOf("chrome") < 0 &&
                e.indexOf("android") < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            ),
          };
        })()),
      y
    );
  }
  Object.keys(w).forEach(function (e) {
    Object.defineProperty(m.fn, e, { value: w[e], writable: !0 });
  });
  var L = {
      name: "resize",
      create: function () {
        var e = this;
        S(e, {
          resize: {
            observer: null,
            createObserver: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                ((e.resize.observer = new ResizeObserver(function (t) {
                  var a = e.width,
                    i = e.height,
                    s = a,
                    r = i;
                  t.forEach(function (t) {
                    var a = t.contentBoxSize,
                      i = t.contentRect,
                      n = t.target;
                    (n && n !== e.el) ||
                      ((s = i ? i.width : (a[0] || a).inlineSize),
                      (r = i ? i.height : (a[0] || a).blockSize));
                  }),
                    (s === a && r === i) || e.resize.resizeHandler();
                })),
                e.resize.observer.observe(e.el));
            },
            removeObserver: function () {
              e.resize.observer &&
                e.resize.observer.unobserve &&
                e.el &&
                (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
            },
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function (e) {
          var t = l();
          e.params.resizeObserver && void 0 !== l().ResizeObserver
            ? e.resize.createObserver()
            : (t.addEventListener("resize", e.resize.resizeHandler),
              t.addEventListener(
                "orientationchange",
                e.resize.orientationChangeHandler
              ));
        },
        destroy: function (e) {
          var t = l();
          e.resize.removeObserver(),
            t.removeEventListener("resize", e.resize.resizeHandler),
            t.removeEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
        },
      },
    },
    I = {
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = l(),
          i = this,
          s = new (a.MutationObserver || a.WebkitMutationObserver)(function (
            e
          ) {
            if (1 !== e.length) {
              var t = function () {
                i.emit("observerUpdate", e[0]);
              };
              a.requestAnimationFrame
                ? a.requestAnimationFrame(t)
                : a.setTimeout(t, 0);
            } else i.emit("observerUpdate", e[0]);
          });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(s);
      },
      init: function () {
        var e = this;
        if (e.support.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    O = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        M(this, { observer: t({}, I, { observers: [] }) });
      },
      on: {
        init: function (e) {
          e.observer.init();
        },
        destroy: function (e) {
          e.observer.destroy();
        },
      },
    };
  function A(e) {
    var t = this,
      a = r(),
      i = l(),
      s = t.touchEventsData,
      n = t.params,
      o = t.touches;
    if (t.enabled && (!t.animating || !n.preventInteractionOnTransition)) {
      var d = e;
      d.originalEvent && (d = d.originalEvent);
      var p = m(d.target);
      if ("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length)
        if (
          ((s.isTouchEvent = "touchstart" === d.type),
          s.isTouchEvent || !("which" in d) || 3 !== d.which)
        )
          if (!(!s.isTouchEvent && "button" in d && d.button > 0))
            if (!s.isTouched || !s.isMoved)
              if (
                (!!n.noSwipingClass &&
                  "" !== n.noSwipingClass &&
                  d.target &&
                  d.target.shadowRoot &&
                  e.path &&
                  e.path[0] &&
                  (p = m(e.path[0])),
                n.noSwiping &&
                  p.closest(
                    n.noSwipingSelector
                      ? n.noSwipingSelector
                      : "." + n.noSwipingClass
                  )[0])
              )
                t.allowClick = !0;
              else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
                (o.currentX =
                  "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
                  (o.currentY =
                    "touchstart" === d.type
                      ? d.targetTouches[0].pageY
                      : d.pageY);
                var u = o.currentX,
                  c = o.currentY,
                  h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                  v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (h && (u <= v || u >= i.innerWidth - v)) {
                  if ("prevent" !== h) return;
                  e.preventDefault();
                }
                if (
                  (S(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (o.startX = u),
                  (o.startY = c),
                  (s.touchStartTime = x()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  n.threshold > 0 && (s.allowThresholdMove = !1),
                  "touchstart" !== d.type)
                ) {
                  var f = !0;
                  p.is(s.formElements) && (f = !1),
                    a.activeElement &&
                      m(a.activeElement).is(s.formElements) &&
                      a.activeElement !== p[0] &&
                      a.activeElement.blur();
                  var g = f && t.allowTouchMove && n.touchStartPreventDefault;
                  (!n.touchStartForcePreventDefault && !g) ||
                    p[0].isContentEditable ||
                    d.preventDefault();
                }
                t.emit("touchStart", d);
              }
    }
  }
  function D(e) {
    var t = r(),
      a = this,
      i = a.touchEventsData,
      s = a.params,
      n = a.touches,
      l = a.rtlTranslate;
    if (a.enabled) {
      var o = e;
      if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
        if (!i.isTouchEvent || "touchmove" === o.type) {
          var d =
              "touchmove" === o.type &&
              o.targetTouches &&
              (o.targetTouches[0] || o.changedTouches[0]),
            p = "touchmove" === o.type ? d.pageX : o.pageX,
            u = "touchmove" === o.type ? d.pageY : o.pageY;
          if (o.preventedByNestedSwiper)
            return (n.startX = p), void (n.startY = u);
          if (!a.allowTouchMove)
            return (
              (a.allowClick = !1),
              void (
                i.isTouched &&
                (S(n, { startX: p, startY: u, currentX: p, currentY: u }),
                (i.touchStartTime = x()))
              )
            );
          if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
            if (a.isVertical()) {
              if (
                (u < n.startY && a.translate <= a.maxTranslate()) ||
                (u > n.startY && a.translate >= a.minTranslate())
              )
                return (i.isTouched = !1), void (i.isMoved = !1);
            } else if (
              (p < n.startX && a.translate <= a.maxTranslate()) ||
              (p > n.startX && a.translate >= a.minTranslate())
            )
              return;
          if (
            i.isTouchEvent &&
            t.activeElement &&
            o.target === t.activeElement &&
            m(o.target).is(i.formElements)
          )
            return (i.isMoved = !0), void (a.allowClick = !1);
          if (
            (i.allowTouchCallbacks && a.emit("touchMove", o),
            !(o.targetTouches && o.targetTouches.length > 1))
          ) {
            (n.currentX = p), (n.currentY = u);
            var c = n.currentX - n.startX,
              h = n.currentY - n.startY;
            if (
              !(
                a.params.threshold &&
                Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold
              )
            ) {
              var v;
              if (void 0 === i.isScrolling)
                (a.isHorizontal() && n.currentY === n.startY) ||
                (a.isVertical() && n.currentX === n.startX)
                  ? (i.isScrolling = !1)
                  : c * c + h * h >= 25 &&
                    ((v =
                      (180 * Math.atan2(Math.abs(h), Math.abs(c))) / Math.PI),
                    (i.isScrolling = a.isHorizontal()
                      ? v > s.touchAngle
                      : 90 - v > s.touchAngle));
              if (
                (i.isScrolling && a.emit("touchMoveOpposite", o),
                void 0 === i.startMoving &&
                  ((n.currentX === n.startX && n.currentY === n.startY) ||
                    (i.startMoving = !0)),
                i.isScrolling)
              )
                i.isTouched = !1;
              else if (i.startMoving) {
                (a.allowClick = !1),
                  !s.cssMode && o.cancelable && o.preventDefault(),
                  s.touchMoveStopPropagation &&
                    !s.nested &&
                    o.stopPropagation(),
                  i.isMoved ||
                    (s.loop && a.loopFix(),
                    (i.startTranslate = a.getTranslate()),
                    a.setTransition(0),
                    a.animating &&
                      a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    (i.allowMomentumBounce = !1),
                    !s.grabCursor ||
                      (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) ||
                      a.setGrabCursor(!0),
                    a.emit("sliderFirstMove", o)),
                  a.emit("sliderMove", o),
                  (i.isMoved = !0);
                var f = a.isHorizontal() ? c : h;
                (n.diff = f),
                  (f *= s.touchRatio),
                  l && (f = -f),
                  (a.swipeDirection = f > 0 ? "prev" : "next"),
                  (i.currentTranslate = f + i.startTranslate);
                var g = !0,
                  b = s.resistanceRatio;
                if (
                  (s.touchReleaseOnEdges && (b = 0),
                  f > 0 && i.currentTranslate > a.minTranslate()
                    ? ((g = !1),
                      s.resistance &&
                        (i.currentTranslate =
                          a.minTranslate() -
                          1 +
                          Math.pow(
                            -a.minTranslate() + i.startTranslate + f,
                            b
                          )))
                    : f < 0 &&
                      i.currentTranslate < a.maxTranslate() &&
                      ((g = !1),
                      s.resistance &&
                        (i.currentTranslate =
                          a.maxTranslate() +
                          1 -
                          Math.pow(
                            a.maxTranslate() - i.startTranslate - f,
                            b
                          ))),
                  g && (o.preventedByNestedSwiper = !0),
                  !a.allowSlideNext &&
                    "next" === a.swipeDirection &&
                    i.currentTranslate < i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  !a.allowSlidePrev &&
                    "prev" === a.swipeDirection &&
                    i.currentTranslate > i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  a.allowSlidePrev ||
                    a.allowSlideNext ||
                    (i.currentTranslate = i.startTranslate),
                  s.threshold > 0)
                ) {
                  if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
                    return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove)
                    return (
                      (i.allowThresholdMove = !0),
                      (n.startX = n.currentX),
                      (n.startY = n.currentY),
                      (i.currentTranslate = i.startTranslate),
                      void (n.diff = a.isHorizontal()
                        ? n.currentX - n.startX
                        : n.currentY - n.startY)
                    );
                }
                s.followFinger &&
                  !s.cssMode &&
                  ((s.freeMode ||
                    s.watchSlidesProgress ||
                    s.watchSlidesVisibility) &&
                    (a.updateActiveIndex(), a.updateSlidesClasses()),
                  s.freeMode &&
                    (0 === i.velocities.length &&
                      i.velocities.push({
                        position: n[a.isHorizontal() ? "startX" : "startY"],
                        time: i.touchStartTime,
                      }),
                    i.velocities.push({
                      position: n[a.isHorizontal() ? "currentX" : "currentY"],
                      time: x(),
                    })),
                  a.updateProgress(i.currentTranslate),
                  a.setTranslate(i.currentTranslate));
              }
            }
          }
        }
      } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
    }
  }
  function N(e) {
    var t = this,
      a = t.touchEventsData,
      i = t.params,
      s = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      l = t.slidesGrid,
      o = t.snapGrid;
    if (t.enabled) {
      var d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        a.allowTouchCallbacks && t.emit("touchEnd", d),
        (a.allowTouchCallbacks = !1),
        !a.isTouched)
      )
        return (
          a.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (a.isMoved = !1),
          void (a.startMoving = !1)
        );
      i.grabCursor &&
        a.isMoved &&
        a.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      var p,
        u = x(),
        c = u - a.touchStartTime;
      if (
        (t.allowClick &&
          (t.updateClickedSlide(d),
          t.emit("tap click", d),
          c < 300 &&
            u - a.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d)),
        (a.lastClickTime = x()),
        E(function () {
          t.destroyed || (t.allowClick = !0);
        }),
        !a.isTouched ||
          !a.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          a.currentTranslate === a.startTranslate)
      )
        return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
      if (
        ((a.isTouched = !1),
        (a.isMoved = !1),
        (a.startMoving = !1),
        (p = i.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -a.currentTranslate),
        !i.cssMode)
      )
        if (i.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate())
            return void (t.slides.length < o.length
              ? t.slideTo(o.length - 1)
              : t.slideTo(t.slides.length - 1));
          if (i.freeModeMomentum) {
            if (a.velocities.length > 1) {
              var h = a.velocities.pop(),
                v = a.velocities.pop(),
                f = h.position - v.position,
                m = h.time - v.time;
              (t.velocity = f / m),
                (t.velocity /= 2),
                Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (m > 150 || x() - h.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= i.freeModeMomentumVelocityRatio),
              (a.velocities.length = 0);
            var g = 1e3 * i.freeModeMomentumRatio,
              b = t.velocity * g,
              y = t.translate + b;
            r && (y = -y);
            var w,
              T,
              C = !1,
              S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate())
              i.freeModeMomentumBounce
                ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                  (w = t.maxTranslate()),
                  (C = !0),
                  (a.allowMomentumBounce = !0))
                : (y = t.maxTranslate()),
                i.loop && i.centeredSlides && (T = !0);
            else if (y > t.minTranslate())
              i.freeModeMomentumBounce
                ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                  (w = t.minTranslate()),
                  (C = !0),
                  (a.allowMomentumBounce = !0))
                : (y = t.minTranslate()),
                i.loop && i.centeredSlides && (T = !0);
            else if (i.freeModeSticky) {
              for (var M, z = 0; z < o.length; z += 1)
                if (o[z] > -y) {
                  M = z;
                  break;
                }
              y = -(y =
                Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) ||
                "next" === t.swipeDirection
                  ? o[M]
                  : o[M - 1]);
            }
            if (
              (T &&
                t.once("transitionEnd", function () {
                  t.loopFix();
                }),
              0 !== t.velocity)
            ) {
              if (
                ((g = r
                  ? Math.abs((-y - t.translate) / t.velocity)
                  : Math.abs((y - t.translate) / t.velocity)),
                i.freeModeSticky)
              ) {
                var P = Math.abs((r ? -y : y) - t.translate),
                  k = t.slidesSizesGrid[t.activeIndex];
                g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
              }
            } else if (i.freeModeSticky) return void t.slideToClosest();
            i.freeModeMomentumBounce && C
              ? (t.updateProgress(w),
                t.setTransition(g),
                t.setTranslate(y),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                n.transitionEnd(function () {
                  t &&
                    !t.destroyed &&
                    a.allowMomentumBounce &&
                    (t.emit("momentumBounce"),
                    t.setTransition(i.speed),
                    setTimeout(function () {
                      t.setTranslate(w),
                        n.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        });
                    }, 0));
                }))
              : t.velocity
              ? (t.updateProgress(y),
                t.setTransition(g),
                t.setTranslate(y),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(y)),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else {
            if (i.freeModeSticky) return void t.slideToClosest();
            i.freeMode && t.emit("_freeModeNoMomentumRelease");
          }
          (!i.freeModeMomentum || c >= i.longSwipesMs) &&
            (t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses());
        } else {
          for (
            var $ = 0, L = t.slidesSizesGrid[0], I = 0;
            I < l.length;
            I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
          ) {
            var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== l[I + O]
              ? p >= l[I] && p < l[I + O] && (($ = I), (L = l[I + O] - l[I]))
              : p >= l[I] && (($ = I), (L = l[l.length - 1] - l[l.length - 2]));
          }
          var A = (p - l[$]) / L,
            D = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          if (c > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (A >= i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)),
              "prev" === t.swipeDirection &&
                (A > 1 - i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation &&
            (d.target === t.navigation.nextEl ||
              d.target === t.navigation.prevEl)
              ? d.target === t.navigation.nextEl
                ? t.slideTo($ + D)
                : t.slideTo($)
              : ("next" === t.swipeDirection && t.slideTo($ + D),
                "prev" === t.swipeDirection && t.slideTo($));
          }
        }
    }
  }
  function G() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  function B(e) {
    var t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function H() {
    var e = this,
      t = e.wrapperEl,
      a = e.rtlTranslate;
    if (e.enabled) {
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = a
              ? t.scrollWidth - t.offsetWidth - t.scrollLeft
              : -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      var i = e.maxTranslate() - e.minTranslate();
      (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
        e.updateProgress(a ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
  }
  var X = !1;
  function Y() {}
  var R = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      enabled: !0,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    },
    W = {
      modular: {
        useParams: function (e) {
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              var i = t.modules[a];
              i.params && S(e, i.params);
            });
        },
        useModules: function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              var i = t.modules[a],
                s = e[a] || {};
              i.on &&
                t.on &&
                Object.keys(i.on).forEach(function (e) {
                  t.on(e, i.on[e]);
                }),
                i.create && i.create.bind(t)(s);
            });
        },
      },
      eventsEmitter: {
        on: function (e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          var s = a ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][s](t);
            }),
            i
          );
        },
        once: function (e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          function s() {
            i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
            for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
              r[n] = arguments[n];
            t.apply(i, r);
          }
          return (s.__emitterProxy = t), i.on(e, s, a);
        },
        onAny: function (e, t) {
          var a = this;
          if ("function" != typeof e) return a;
          var i = t ? "unshift" : "push";
          return (
            a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var a = t.eventsAnyListeners.indexOf(e);
          return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
        },
        off: function (e, t) {
          var a = this;
          return a.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                void 0 === t
                  ? (a.eventsListeners[e] = [])
                  : a.eventsListeners[e] &&
                    a.eventsListeners[e].forEach(function (i, s) {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        a.eventsListeners[e].splice(s, 1);
                    });
              }),
              a)
            : a;
        },
        emit: function () {
          var e,
            t,
            a,
            i = this;
          if (!i.eventsListeners) return i;
          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n];
          "string" == typeof r[0] || Array.isArray(r[0])
            ? ((e = r[0]), (t = r.slice(1, r.length)), (a = i))
            : ((e = r[0].events), (t = r[0].data), (a = r[0].context || i)),
            t.unshift(a);
          var l = Array.isArray(e) ? e : e.split(" ");
          return (
            l.forEach(function (e) {
              i.eventsAnyListeners &&
                i.eventsAnyListeners.length &&
                i.eventsAnyListeners.forEach(function (i) {
                  i.apply(a, [e].concat(t));
                }),
                i.eventsListeners &&
                  i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach(function (e) {
                    e.apply(a, t);
                  });
            }),
            i
          );
        },
      },
      update: {
        updateSize: function () {
          var e,
            t,
            a = this,
            i = a.$el;
          (e =
            void 0 !== a.params.width && null !== a.params.width
              ? a.params.width
              : i[0].clientWidth),
            (t =
              void 0 !== a.params.height && null !== a.params.height
                ? a.params.height
                : i[0].clientHeight),
            (0 === e && a.isHorizontal()) ||
              (0 === t && a.isVertical()) ||
              ((e =
                e -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              S(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function a(e, a) {
            return parseFloat(e.getPropertyValue(t(a)) || 0);
          }
          var i = e.params,
            s = e.$wrapperEl,
            r = e.size,
            n = e.rtlTranslate,
            l = e.wrongRTL,
            o = e.virtual && i.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = s.children("." + e.params.slideClass),
            u = o ? e.virtual.slides.length : p.length,
            c = [],
            h = [],
            v = [],
            f = i.slidesOffsetBefore;
          "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
          var m = i.slidesOffsetAfter;
          "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            b = e.slidesGrid.length,
            y = i.spaceBetween,
            w = -f,
            E = 0,
            x = 0;
          if (void 0 !== r) {
            var T, C;
            "string" == typeof y &&
              y.indexOf("%") >= 0 &&
              (y = (parseFloat(y.replace("%", "")) / 100) * r),
              (e.virtualSize = -y),
              n
                ? p.css({ marginLeft: "", marginTop: "" })
                : p.css({ marginRight: "", marginBottom: "" }),
              i.slidesPerColumn > 1 &&
                ((T =
                  Math.floor(u / i.slidesPerColumn) ===
                  u / e.params.slidesPerColumn
                    ? u
                    : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn),
                "auto" !== i.slidesPerView &&
                  "row" === i.slidesPerColumnFill &&
                  (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
            for (
              var M,
                z,
                P,
                k = i.slidesPerColumn,
                $ = T / k,
                L = Math.floor(u / i.slidesPerColumn),
                I = 0;
              I < u;
              I += 1
            ) {
              C = 0;
              var O = p.eq(I);
              if (i.slidesPerColumn > 1) {
                var A = void 0,
                  D = void 0,
                  N = void 0;
                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                  var G = Math.floor(
                      I / (i.slidesPerGroup * i.slidesPerColumn)
                    ),
                    B = I - i.slidesPerColumn * i.slidesPerGroup * G,
                    H =
                      0 === G
                        ? i.slidesPerGroup
                        : Math.min(
                            Math.ceil((u - G * k * i.slidesPerGroup) / k),
                            i.slidesPerGroup
                          );
                  (A =
                    (D =
                      B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) +
                    (N * T) / k),
                    O.css({
                      "-webkit-box-ordinal-group": A,
                      "-moz-box-ordinal-group": A,
                      "-ms-flex-order": A,
                      "-webkit-order": A,
                      order: A,
                    });
                } else
                  "column" === i.slidesPerColumnFill
                    ? ((N = I - (D = Math.floor(I / k)) * k),
                      (D > L || (D === L && N === k - 1)) &&
                        (N += 1) >= k &&
                        ((N = 0), (D += 1)))
                    : (D = I - (N = Math.floor(I / $)) * $);
                O.css(
                  t("margin-top"),
                  0 !== N && i.spaceBetween && i.spaceBetween + "px"
                );
              }
              if ("none" !== O.css("display")) {
                if ("auto" === i.slidesPerView) {
                  var X = getComputedStyle(O[0]),
                    Y = O[0].style.transform,
                    R = O[0].style.webkitTransform;
                  if (
                    (Y && (O[0].style.transform = "none"),
                    R && (O[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    C = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                  else {
                    var W = a(X, "width"),
                      V = a(X, "padding-left"),
                      F = a(X, "padding-right"),
                      _ = a(X, "margin-left"),
                      q = a(X, "margin-right"),
                      j = X.getPropertyValue("box-sizing");
                    if (j && "border-box" === j) C = W + _ + q;
                    else {
                      var U = O[0],
                        K = U.clientWidth;
                      C = W + V + F + _ + q + (U.offsetWidth - K);
                    }
                  }
                  Y && (O[0].style.transform = Y),
                    R && (O[0].style.webkitTransform = R),
                    i.roundLengths && (C = Math.floor(C));
                } else
                  (C = (r - (i.slidesPerView - 1) * y) / i.slidesPerView),
                    i.roundLengths && (C = Math.floor(C)),
                    p[I] && (p[I].style[t("width")] = C + "px");
                p[I] && (p[I].swiperSlideSize = C),
                  v.push(C),
                  i.centeredSlides
                    ? ((w = w + C / 2 + E / 2 + y),
                      0 === E && 0 !== I && (w = w - r / 2 - y),
                      0 === I && (w = w - r / 2 - y),
                      Math.abs(w) < 0.001 && (w = 0),
                      i.roundLengths && (w = Math.floor(w)),
                      x % i.slidesPerGroup == 0 && c.push(w),
                      h.push(w))
                    : (i.roundLengths && (w = Math.floor(w)),
                      (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                        e.params.slidesPerGroup ==
                        0 && c.push(w),
                      h.push(w),
                      (w = w + C + y)),
                  (e.virtualSize += C + y),
                  (E = C),
                  (x += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + m),
              n &&
                l &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                s.css({ width: e.virtualSize + i.spaceBetween + "px" }),
              i.setWrapperSize)
            )
              s.css(
                (((z = {})[t("width")] = e.virtualSize + i.spaceBetween + "px"),
                z)
              );
            if (i.slidesPerColumn > 1)
              if (
                ((e.virtualSize = (C + i.spaceBetween) * T),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / i.slidesPerColumn) -
                  i.spaceBetween),
                s.css(
                  (((P = {})[t("width")] =
                    e.virtualSize + i.spaceBetween + "px"),
                  P)
                ),
                i.centeredSlides)
              ) {
                M = [];
                for (var Z = 0; Z < c.length; Z += 1) {
                  var J = c[Z];
                  i.roundLengths && (J = Math.floor(J)),
                    c[Z] < e.virtualSize + c[0] && M.push(J);
                }
                c = M;
              }
            if (!i.centeredSlides) {
              M = [];
              for (var Q = 0; Q < c.length; Q += 1) {
                var ee = c[Q];
                i.roundLengths && (ee = Math.floor(ee)),
                  c[Q] <= e.virtualSize - r && M.push(ee);
              }
              (c = M),
                Math.floor(e.virtualSize - r) - Math.floor(c[c.length - 1]) >
                  1 && c.push(e.virtualSize - r);
            }
            if ((0 === c.length && (c = [0]), 0 !== i.spaceBetween)) {
              var te,
                ae = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
              p.filter(function (e, t) {
                return !i.cssMode || t !== p.length - 1;
              }).css((((te = {})[ae] = y + "px"), te));
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              var ie = 0;
              v.forEach(function (e) {
                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
              });
              var se = (ie -= i.spaceBetween) - r;
              c = c.map(function (e) {
                return e < 0 ? -f : e > se ? se + m : e;
              });
            }
            if (i.centerInsufficientSlides) {
              var re = 0;
              if (
                (v.forEach(function (e) {
                  re += e + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (re -= i.spaceBetween) < r)
              ) {
                var ne = (r - re) / 2;
                c.forEach(function (e, t) {
                  c[t] = e - ne;
                }),
                  h.forEach(function (e, t) {
                    h[t] = e + ne;
                  });
              }
            }
            S(e, { slides: p, snapGrid: c, slidesGrid: h, slidesSizesGrid: v }),
              u !== d && e.emit("slidesLengthChange"),
              c.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== b && e.emit("slidesGridLengthChange"),
              (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            a = this,
            i = [],
            s = a.virtual && a.params.virtual.enabled,
            r = 0;
          "number" == typeof e
            ? a.setTransition(e)
            : !0 === e && a.setTransition(a.params.speed);
          var n = function (e) {
            return s
              ? a.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : a.slides.eq(e)[0];
          };
          if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
            if (a.params.centeredSlides)
              a.visibleSlides.each(function (e) {
                i.push(e);
              });
            else
              for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                var l = a.activeIndex + t;
                if (l > a.slides.length && !s) break;
                i.push(n(l));
              }
          else i.push(n(a.activeIndex));
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var o = i[t].offsetHeight;
              r = o > r ? o : r;
            }
          r && a.$wrapperEl.css("height", r + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            a = t.params,
            i = t.slides,
            s = t.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            var r = -e;
            s && (r = e),
              i.removeClass(a.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var n = 0; n < i.length; n += 1) {
              var l = i[n],
                o =
                  (r +
                    (a.centeredSlides ? t.minTranslate() : 0) -
                    l.swiperSlideOffset) /
                  (l.swiperSlideSize + a.spaceBetween);
              if (
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)
              ) {
                var d = -(r - l.swiperSlideOffset),
                  p = d + t.slidesSizesGrid[n];
                ((d >= 0 && d < t.size - 1) ||
                  (p > 1 && p <= t.size) ||
                  (d <= 0 && p >= t.size)) &&
                  (t.visibleSlides.push(l),
                  t.visibleSlidesIndexes.push(n),
                  i.eq(n).addClass(a.slideVisibleClass));
              }
              l.progress = s ? -o : o;
            }
            t.visibleSlides = m(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if (void 0 === e) {
            var a = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * a) || 0;
          }
          var i = t.params,
            s = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            n = t.isBeginning,
            l = t.isEnd,
            o = n,
            d = l;
          0 === s
            ? ((r = 0), (n = !0), (l = !0))
            : ((n = (r = (e - t.minTranslate()) / s) <= 0), (l = r >= 1)),
            S(t, { progress: r, isBeginning: n, isEnd: l }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !o && t.emit("reachBeginning toEdge"),
            l && !d && t.emit("reachEnd toEdge"),
            ((o && !n) || (d && !l)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            a = t.slides,
            i = t.params,
            s = t.$wrapperEl,
            r = t.activeIndex,
            n = t.realIndex,
            l = t.virtual && i.virtual.enabled;
          a.removeClass(
            i.slideActiveClass +
              " " +
              i.slideNextClass +
              " " +
              i.slidePrevClass +
              " " +
              i.slideDuplicateActiveClass +
              " " +
              i.slideDuplicateNextClass +
              " " +
              i.slideDuplicatePrevClass
          ),
            (e = l
              ? t.$wrapperEl.find(
                  "." + i.slideClass + '[data-swiper-slide-index="' + r + '"]'
                )
              : a.eq(r)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var o = e
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
          var d = e
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
              d.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            s = a.slidesGrid,
            r = a.snapGrid,
            n = a.params,
            l = a.activeIndex,
            o = a.realIndex,
            d = a.snapIndex,
            p = e;
          if (void 0 === p) {
            for (var u = 0; u < s.length; u += 1)
              void 0 !== s[u + 1]
                ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2
                  ? (p = u)
                  : i >= s[u] && i < s[u + 1] && (p = u + 1)
                : i >= s[u] && (p = u);
            n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
          }
          if (r.indexOf(i) >= 0) t = r.indexOf(i);
          else {
            var c = Math.min(n.slidesPerGroupSkip, p);
            t = c + Math.floor((p - c) / n.slidesPerGroup);
          }
          if ((t >= r.length && (t = r.length - 1), p !== l)) {
            var h = parseInt(
              a.slides.eq(p).attr("data-swiper-slide-index") || p,
              10
            );
            S(a, {
              snapIndex: t,
              realIndex: h,
              previousIndex: l,
              activeIndex: p,
            }),
              a.emit("activeIndexChange"),
              a.emit("snapIndexChange"),
              o !== h && a.emit("realIndexChange"),
              (a.initialized || a.params.runCallbacksOnInit) &&
                a.emit("slideChange");
          } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            a = this,
            i = a.params,
            s = m(e.target).closest("." + i.slideClass)[0],
            r = !1;
          if (s)
            for (var n = 0; n < a.slides.length; n += 1)
              if (a.slides[n] === s) {
                (r = !0), (t = n);
                break;
              }
          if (!s || !r)
            return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
          (a.clickedSlide = s),
            a.virtual && a.params.virtual.enabled
              ? (a.clickedIndex = parseInt(
                  m(s).attr("data-swiper-slide-index"),
                  10
                ))
              : (a.clickedIndex = t),
            i.slideToClickedSlide &&
              void 0 !== a.clickedIndex &&
              a.clickedIndex !== a.activeIndex &&
              a.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            a = t.params,
            i = t.rtlTranslate,
            s = t.translate,
            r = t.$wrapperEl;
          if (a.virtualTranslate) return i ? -s : s;
          if (a.cssMode) return s;
          var n = T(r[0], e);
          return i && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          var a = this,
            i = a.rtlTranslate,
            s = a.params,
            r = a.$wrapperEl,
            n = a.wrapperEl,
            l = a.progress,
            o = 0,
            d = 0;
          a.isHorizontal() ? (o = i ? -e : e) : (d = e),
            s.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
            s.cssMode
              ? (n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  a.isHorizontal() ? -o : -d)
              : s.virtualTranslate ||
                r.transform("translate3d(" + o + "px, " + d + "px, 0px)"),
            (a.previousTranslate = a.translate),
            (a.translate = a.isHorizontal() ? o : d);
          var p = a.maxTranslate() - a.minTranslate();
          (0 === p ? 0 : (e - a.minTranslate()) / p) !== l &&
            a.updateProgress(e),
            a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, a, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0),
            void 0 === i && (i = !0);
          var r = this,
            n = r.params,
            l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
            d = r.minTranslate(),
            p = r.maxTranslate();
          if (
            ((o = i && e > d ? d : i && e < p ? p : e),
            r.updateProgress(o),
            n.cssMode)
          ) {
            var u,
              c = r.isHorizontal();
            if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;
            else if (l.scrollTo)
              l.scrollTo(
                (((u = {})[c ? "left" : "top"] = -o),
                (u.behavior = "smooth"),
                u)
              );
            else l[c ? "scrollLeft" : "scrollTop"] = -o;
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(o),
                a &&
                  (r.emit("beforeTransitionStart", t, s),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(o),
                a &&
                  (r.emit("beforeTransitionStart", t, s),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        a && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          var a = this;
          a.params.cssMode || a.$wrapperEl.transition(e),
            a.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.params,
            r = a.previousIndex;
          if (!s.cssMode) {
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (
              (n || (n = i > r ? "next" : i < r ? "prev" : "reset"),
              a.emit("transitionStart"),
              e && i !== r)
            ) {
              if ("reset" === n)
                return void a.emit("slideResetTransitionStart");
              a.emit("slideChangeTransitionStart"),
                "next" === n
                  ? a.emit("slideNextTransitionStart")
                  : a.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.previousIndex,
            r = a.params;
          if (((a.animating = !1), !r.cssMode)) {
            a.setTransition(0);
            var n = t;
            if (
              (n || (n = i > s ? "next" : i < s ? "prev" : "reset"),
              a.emit("transitionEnd"),
              e && i !== s)
            ) {
              if ("reset" === n) return void a.emit("slideResetTransitionEnd");
              a.emit("slideChangeTransitionEnd"),
                "next" === n
                  ? a.emit("slideNextTransitionEnd")
                  : a.emit("slidePrevTransitionEnd");
            }
          }
        },
      },
      slide: {
        slideTo: function (e, t, a, i, s) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                typeof e +
                "] given."
            );
          if ("string" == typeof e) {
            var r = parseInt(e, 10);
            if (!isFinite(r))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                  e +
                  "] given."
              );
            e = r;
          }
          var n = this,
            l = e;
          l < 0 && (l = 0);
          var o = n.params,
            d = n.snapGrid,
            p = n.slidesGrid,
            u = n.previousIndex,
            c = n.activeIndex,
            h = n.rtlTranslate,
            v = n.wrapperEl,
            f = n.enabled;
          if (
            (n.animating && o.preventInteractionOnTransition) ||
            (!f && !i && !s)
          )
            return !1;
          var m = Math.min(n.params.slidesPerGroupSkip, l),
            g = m + Math.floor((l - m) / n.params.slidesPerGroup);
          g >= d.length && (g = d.length - 1),
            (c || o.initialSlide || 0) === (u || 0) &&
              a &&
              n.emit("beforeSlideChangeStart");
          var b,
            y = -d[g];
          if ((n.updateProgress(y), o.normalizeSlideIndex))
            for (var w = 0; w < p.length; w += 1) {
              var E = -Math.floor(100 * y),
                x = Math.floor(100 * p[w]),
                T = Math.floor(100 * p[w + 1]);
              void 0 !== p[w + 1]
                ? E >= x && E < T - (T - x) / 2
                  ? (l = w)
                  : E >= x && E < T && (l = w + 1)
                : E >= x && (l = w);
            }
          if (n.initialized && l !== c) {
            if (!n.allowSlideNext && y < n.translate && y < n.minTranslate())
              return !1;
            if (
              !n.allowSlidePrev &&
              y > n.translate &&
              y > n.maxTranslate() &&
              (c || 0) !== l
            )
              return !1;
          }
          if (
            ((b = l > c ? "next" : l < c ? "prev" : "reset"),
            (h && -y === n.translate) || (!h && y === n.translate))
          )
            return (
              n.updateActiveIndex(l),
              o.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              "slide" !== o.effect && n.setTranslate(y),
              "reset" !== b && (n.transitionStart(a, b), n.transitionEnd(a, b)),
              !1
            );
          if (o.cssMode) {
            var C,
              S = n.isHorizontal(),
              M = -y;
            if ((h && (M = v.scrollWidth - v.offsetWidth - M), 0 === t))
              v[S ? "scrollLeft" : "scrollTop"] = M;
            else if (v.scrollTo)
              v.scrollTo(
                (((C = {})[S ? "left" : "top"] = M), (C.behavior = "smooth"), C)
              );
            else v[S ? "scrollLeft" : "scrollTop"] = M;
            return !0;
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(y),
                n.updateActiveIndex(l),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, i),
                n.transitionStart(a, b),
                n.transitionEnd(a, b))
              : (n.setTransition(t),
                n.setTranslate(y),
                n.updateActiveIndex(l),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, i),
                n.transitionStart(a, b),
                n.animating ||
                  ((n.animating = !0),
                  n.onSlideToWrapperTransitionEnd ||
                    (n.onSlideToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        (n.onSlideToWrapperTransitionEnd = null),
                        delete n.onSlideToWrapperTransitionEnd,
                        n.transitionEnd(a, b));
                    }),
                  n.$wrapperEl[0].addEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    n.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e, t, a, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
          var s = this,
            r = e;
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
        },
        slideNext: function (e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating;
          if (!i.enabled) return i;
          var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return i.slideTo(i.activeIndex + n, e, t, a);
        },
        slidePrev: function (e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating,
            n = i.snapGrid,
            l = i.slidesGrid,
            o = i.rtlTranslate;
          if (!i.enabled) return i;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var p = d(o ? i.translate : -i.translate),
            u = n.map(function (e) {
              return d(e);
            });
          n[u.indexOf(p)];
          var c,
            h = n[u.indexOf(p) - 1];
          return (
            void 0 === h &&
              s.cssMode &&
              n.forEach(function (e) {
                !h && p >= e && (h = e);
              }),
            void 0 !== h && (c = l.indexOf(h)) < 0 && (c = i.activeIndex - 1),
            i.slideTo(c, e, t, a)
          );
        },
        slideReset: function (e, t, a) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, a)
          );
        },
        slideToClosest: function (e, t, a, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          var s = this,
            r = s.activeIndex,
            n = Math.min(s.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / s.params.slidesPerGroup),
            o = s.rtlTranslate ? s.translate : -s.translate;
          if (o >= s.snapGrid[l]) {
            var d = s.snapGrid[l];
            o - d > (s.snapGrid[l + 1] - d) * i &&
              (r += s.params.slidesPerGroup);
          } else {
            var p = s.snapGrid[l - 1];
            o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, s.slidesGrid.length - 1)),
            s.slideTo(r, e, t, a)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            s =
              "auto" === a.slidesPerView
                ? t.slidesPerViewDynamic()
                : a.slidesPerView,
            r = t.clickedIndex;
          if (a.loop) {
            if (t.animating) return;
            (e = parseInt(
              m(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              a.centeredSlides
                ? r < t.loopedSlides - s / 2 ||
                  r > t.slides.length - t.loopedSlides + s / 2
                  ? (t.loopFix(),
                    (r = i
                      .children(
                        "." +
                          a.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          a.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    E(function () {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - s
                ? (t.loopFix(),
                  (r = i
                    .children(
                      "." +
                        a.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        a.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  E(function () {
                    t.slideTo(r);
                  }))
                : t.slideTo(r);
          } else t.slideTo(r);
        },
      },
      loop: {
        loopCreate: function () {
          var e = this,
            t = r(),
            a = e.params,
            i = e.$wrapperEl;
          i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
          var s = i.children("." + a.slideClass);
          if (a.loopFillGroupWithBlank) {
            var n = a.slidesPerGroup - (s.length % a.slidesPerGroup);
            if (n !== a.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement("div")).addClass(
                  a.slideClass + " " + a.slideBlankClass
                );
                i.append(o);
              }
              s = i.children("." + a.slideClass);
            }
          }
          "auto" !== a.slidesPerView ||
            a.loopedSlides ||
            (a.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(a.loopedSlides || a.slidesPerView, 10)
            )),
            (e.loopedSlides += a.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
          var d = [],
            p = [];
          s.each(function (t, a) {
            var i = m(t);
            a < e.loopedSlides && p.push(t),
              a < s.length && a >= s.length - e.loopedSlides && d.push(t),
              i.attr("data-swiper-slide-index", a);
          });
          for (var u = 0; u < p.length; u += 1)
            i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
          for (var c = d.length - 1; c >= 0; c -= 1)
            i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            a = e.activeIndex,
            i = e.slides,
            s = e.loopedSlides,
            r = e.allowSlidePrev,
            n = e.allowSlideNext,
            l = e.snapGrid,
            o = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var d = -l[a] - e.getTranslate();
          if (a < s)
            (t = i.length - 3 * s + a),
              (t += s),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d);
          else if (a >= i.length - s) {
            (t = -i.length + a + s),
              (t += s),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = n), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides;
          t
            .children(
              "." +
                a.slideClass +
                "." +
                a.slideDuplicateClass +
                ",." +
                a.slideClass +
                "." +
                a.slideBlankClass
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          var t = this;
          if (
            !(
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
          ) {
            var a = t.el;
            (a.style.cursor = "move"),
              (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (a.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          var e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.el.style.cursor = "");
        },
      },
      manipulation: {
        appendSlide: function (e) {
          var t = this,
            a = t.$wrapperEl,
            i = t.params;
          if (
            (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          )
            for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
          else a.append(e);
          i.loop && t.loopCreate(),
            (i.observer && t.support.observer) || t.update();
        },
        prependSlide: function (e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop && t.loopDestroy();
          var r = s + 1;
          if ("object" == typeof e && "length" in e) {
            for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
            r = s + e.length;
          } else i.prepend(e);
          a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
            t.slideTo(r, 0, !1);
        },
        addSlide: function (e, t) {
          var a = this,
            i = a.$wrapperEl,
            s = a.params,
            r = a.activeIndex;
          s.loop &&
            ((r -= a.loopedSlides),
            a.loopDestroy(),
            (a.slides = i.children("." + s.slideClass)));
          var n = a.slides.length;
          if (e <= 0) a.prependSlide(t);
          else if (e >= n) a.appendSlide(t);
          else {
            for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
              var p = a.slides.eq(d);
              p.remove(), o.unshift(p);
            }
            if ("object" == typeof t && "length" in t) {
              for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
              l = r > e ? r + t.length : r;
            } else i.append(t);
            for (var c = 0; c < o.length; c += 1) i.append(o[c]);
            s.loop && a.loopCreate(),
              (s.observer && a.support.observer) || a.update(),
              s.loop
                ? a.slideTo(l + a.loopedSlides, 0, !1)
                : a.slideTo(l, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop &&
            ((s -= t.loopedSlides),
            t.loopDestroy(),
            (t.slides = i.children("." + a.slideClass)));
          var r,
            n = s;
          if ("object" == typeof e && "length" in e) {
            for (var l = 0; l < e.length; l += 1)
              (r = e[l]),
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1);
            n = Math.max(n, 0);
          } else
            (r = e),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1),
              (n = Math.max(n, 0));
          a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
            a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      events: {
        attachEvents: function () {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support;
          (e.onTouchStart = A.bind(e)),
            (e.onTouchMove = D.bind(e)),
            (e.onTouchEnd = N.bind(e)),
            a.cssMode && (e.onScroll = H.bind(e)),
            (e.onClick = B.bind(e));
          var d = !!a.nested;
          if (!o.touch && o.pointerEvents)
            s.addEventListener(i.start, e.onTouchStart, !1),
              t.addEventListener(i.move, e.onTouchMove, d),
              t.addEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (o.touch) {
              var p = !(
                "touchstart" !== i.start ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.addEventListener(i.start, e.onTouchStart, p),
                s.addEventListener(
                  i.move,
                  e.onTouchMove,
                  o.passiveListener ? { passive: !1, capture: d } : d
                ),
                s.addEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p),
                X || (t.addEventListener("touchstart", Y), (X = !0));
            }
            ((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (s.addEventListener("mousedown", e.onTouchStart, !1),
              t.addEventListener("mousemove", e.onTouchMove, d),
              t.addEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) &&
            s.addEventListener("click", e.onClick, !0),
            a.cssMode && n.addEventListener("scroll", e.onScroll),
            a.updateOnWindowResize
              ? e.on(
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  G,
                  !0
                )
              : e.on("observerUpdate", G, !0);
        },
        detachEvents: function () {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support,
            d = !!a.nested;
          if (!o.touch && o.pointerEvents)
            s.removeEventListener(i.start, e.onTouchStart, !1),
              t.removeEventListener(i.move, e.onTouchMove, d),
              t.removeEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (o.touch) {
              var p = !(
                "onTouchStart" !== i.start ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.removeEventListener(i.start, e.onTouchStart, p),
                s.removeEventListener(i.move, e.onTouchMove, d),
                s.removeEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
            }
            ((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (s.removeEventListener("mousedown", e.onTouchStart, !1),
              t.removeEventListener("mousemove", e.onTouchMove, d),
              t.removeEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) &&
            s.removeEventListener("click", e.onClick, !0),
            a.cssMode && n.removeEventListener("scroll", e.onScroll),
            e.off(
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              G
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides,
            s = void 0 === i ? 0 : i,
            r = e.params,
            n = e.$el,
            l = r.breakpoints;
          if (l && (!l || 0 !== Object.keys(l).length)) {
            var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
            if (o && e.currentBreakpoint !== o) {
              var d = o in l ? l[o] : void 0;
              d &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach(function (e) {
                  var t = d[e];
                  void 0 !== t &&
                    (d[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              var p = d || e.originalParams,
                u = r.slidesPerColumn > 1,
                c = p.slidesPerColumn > 1,
                h = r.enabled;
              u && !c
                ? (n.removeClass(
                    r.containerModifierClass +
                      "multirow " +
                      r.containerModifierClass +
                      "multirow-column"
                  ),
                  e.emitContainerClasses())
                : !u &&
                  c &&
                  (n.addClass(r.containerModifierClass + "multirow"),
                  "column" === p.slidesPerColumnFill &&
                    n.addClass(r.containerModifierClass + "multirow-column"),
                  e.emitContainerClasses());
              var v = p.direction && p.direction !== r.direction,
                f = r.loop && (p.slidesPerView !== r.slidesPerView || v);
              v && a && e.changeDirection(), S(e.params, p);
              var m = e.params.enabled;
              S(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                h && !m ? e.disable() : !h && m && e.enable(),
                (e.currentBreakpoint = o),
                e.emit("_beforeBreakpoint", p),
                f &&
                  a &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - s + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", p);
            }
          }
        },
        getBreakpoint: function (e, t, a) {
          if ((void 0 === t && (t = "window"), e && ("container" !== t || a))) {
            var i = !1,
              s = l(),
              r = "window" === t ? s.innerWidth : a.clientWidth,
              n = "window" === t ? s.innerHeight : a.clientHeight,
              o = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: n * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var d = 0; d < o.length; d += 1) {
              var p = o[d],
                u = p.point;
              p.value <= r && (i = u);
            }
            return i || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.params,
            a = e.isLocked,
            i =
              e.slides.length > 0 &&
              t.slidesOffsetBefore +
                t.spaceBetween * (e.slides.length - 1) +
                e.slides[0].offsetWidth * e.slides.length;
          t.slidesOffsetBefore && t.slidesOffsetAfter && i
            ? (e.isLocked = i <= e.size)
            : (e.isLocked = 1 === e.snapGrid.length),
            (e.allowSlideNext = !e.isLocked),
            (e.allowSlidePrev = !e.isLocked),
            a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
            a &&
              a !== e.isLocked &&
              ((e.isEnd = !1), e.navigation && e.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e,
            t,
            a,
            i = this,
            s = i.classNames,
            r = i.params,
            n = i.rtl,
            l = i.$el,
            o = i.device,
            d = i.support,
            p =
              ((e = [
                "initialized",
                r.direction,
                { "pointer-events": d.pointerEvents && !d.touch },
                { "free-mode": r.freeMode },
                { autoheight: r.autoHeight },
                { rtl: n },
                { multirow: r.slidesPerColumn > 1 },
                {
                  "multirow-column":
                    r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill,
                },
                { android: o.android },
                { ios: o.ios },
                { "css-mode": r.cssMode },
              ]),
              (t = r.containerModifierClass),
              (a = []),
              e.forEach(function (e) {
                "object" == typeof e
                  ? Object.keys(e).forEach(function (i) {
                      e[i] && a.push(t + i);
                    })
                  : "string" == typeof e && a.push(t + e);
              }),
              a);
          s.push.apply(s, p),
            l.addClass([].concat(s).join(" ")),
            i.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            a = e.classNames;
          t.removeClass(a.join(" ")), e.emitContainerClasses();
        },
      },
      images: {
        loadImage: function (e, t, a, i, s, r) {
          var n,
            o = l();
          function d() {
            r && r();
          }
          m(e).parent("picture")[0] || (e.complete && s)
            ? d()
            : t
            ? (((n = new o.Image()).onload = d),
              (n.onerror = d),
              i && (n.sizes = i),
              a && (n.srcset = a),
              t && (n.src = t))
            : d();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    V = {},
    F = (function () {
      function t() {
        for (
          var e, a, i = arguments.length, s = new Array(i), r = 0;
          r < i;
          r++
        )
          s[r] = arguments[r];
        if (
          (1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (a = s[0])
            : ((e = s[0]), (a = s[1])),
          a || (a = {}),
          (a = S({}, a)),
          e && !a.el && (a.el = e),
          a.el && m(a.el).length > 1)
        ) {
          var n = [];
          return (
            m(a.el).each(function (e) {
              var i = S({}, a, { el: e });
              n.push(new t(i));
            }),
            n
          );
        }
        var l = this;
        (l.__swiper__ = !0),
          (l.support = P()),
          (l.device = k({ userAgent: a.userAgent })),
          (l.browser = $()),
          (l.eventsListeners = {}),
          (l.eventsAnyListeners = []),
          void 0 === l.modules && (l.modules = {}),
          Object.keys(l.modules).forEach(function (e) {
            var t = l.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                s = t.params[i];
              if ("object" != typeof s || null === s) return;
              if (!(i in a) || !("enabled" in s)) return;
              !0 === a[i] && (a[i] = { enabled: !0 }),
                "object" != typeof a[i] ||
                  "enabled" in a[i] ||
                  (a[i].enabled = !0),
                a[i] || (a[i] = { enabled: !1 });
            }
          });
        var o,
          d,
          p = S({}, R);
        return (
          l.useParams(p),
          (l.params = S({}, p, V, a)),
          (l.originalParams = S({}, l.params)),
          (l.passedParams = S({}, a)),
          l.params &&
            l.params.on &&
            Object.keys(l.params.on).forEach(function (e) {
              l.on(e, l.params.on[e]);
            }),
          l.params && l.params.onAny && l.onAny(l.params.onAny),
          (l.$ = m),
          S(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: m(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return "horizontal" === l.params.direction;
            },
            isVertical: function () {
              return "vertical" === l.params.direction;
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEvents:
              ((o = ["touchstart", "touchmove", "touchend", "touchcancel"]),
              (d = ["mousedown", "mousemove", "mouseup"]),
              l.support.pointerEvents &&
                (d = ["pointerdown", "pointermove", "pointerup"]),
              (l.touchEventsTouch = {
                start: o[0],
                move: o[1],
                end: o[2],
                cancel: o[3],
              }),
              (l.touchEventsDesktop = { start: d[0], move: d[1], end: d[2] }),
              l.support.touch || !l.params.simulateTouch
                ? l.touchEventsTouch
                : l.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements:
                "input, select, option, textarea, button, video, label",
              lastClickTime: x(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          l.useModules(),
          l.emit("_swiper"),
          l.params.init && l.init(),
          l
        );
      }
      var a,
        i,
        s,
        r = t.prototype;
      return (
        (r.enable = function () {
          var e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }),
        (r.disable = function () {
          var e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }),
        (r.setProgress = function (e, t) {
          var a = this;
          e = Math.min(Math.max(e, 0), 1);
          var i = a.minTranslate(),
            s = (a.maxTranslate() - i) * e + i;
          a.translateTo(s, void 0 === t ? 0 : t),
            a.updateActiveIndex(),
            a.updateSlidesClasses();
        }),
        (r.emitContainerClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = e.el.className.split(" ").filter(function (t) {
              return (
                0 === t.indexOf("swiper-container") ||
                0 === t.indexOf(e.params.containerModifierClass)
              );
            });
            e.emit("_containerClasses", t.join(" "));
          }
        }),
        (r.getSlideClasses = function (e) {
          var t = this;
          return e.className
            .split(" ")
            .filter(function (e) {
              return (
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
              );
            })
            .join(" ");
        }),
        (r.emitSlidesClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = [];
            e.slides.each(function (a) {
              var i = e.getSlideClasses(a);
              t.push({ slideEl: a, classNames: i }),
                e.emit("_slideClass", a, i);
            }),
              e.emit("_slideClasses", t);
          }
        }),
        (r.slidesPerViewDynamic = function () {
          var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1;
          if (t.centeredSlides) {
            for (
              var l, o = a[r].swiperSlideSize, d = r + 1;
              d < a.length;
              d += 1
            )
              a[d] &&
                !l &&
                ((n += 1), (o += a[d].swiperSlideSize) > s && (l = !0));
            for (var p = r - 1; p >= 0; p -= 1)
              a[p] &&
                !l &&
                ((n += 1), (o += a[p].swiperSlideSize) > s && (l = !0));
          } else
            for (var u = r + 1; u < a.length; u += 1)
              i[u] - i[r] < s && (n += 1);
          return n;
        }),
        (r.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              a = e.params;
            a.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (i(), e.params.autoHeight && e.updateAutoHeight())
                : (("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
              a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          function i() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
          }
        }),
        (r.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var a = this,
            i = a.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (a.$el
                .removeClass("" + a.params.containerModifierClass + i)
                .addClass("" + a.params.containerModifierClass + e),
              a.emitContainerClasses(),
              (a.params.direction = e),
              a.slides.each(function (t) {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              a.emit("changeDirection"),
              t && a.update()),
            a
          );
        }),
        (r.mount = function (e) {
          var t = this;
          if (t.mounted) return !0;
          var a,
            i = m(e || t.params.el);
          return (
            !!(e = i[0]) &&
            ((e.swiper = t),
            e && e.shadowRoot && e.shadowRoot.querySelector
              ? ((a = m(
                  e.shadowRoot.querySelector("." + t.params.wrapperClass)
                )).children = function (e) {
                  return i.children(e);
                })
              : (a = i.children("." + t.params.wrapperClass)),
            S(t, {
              $el: i,
              el: e,
              $wrapperEl: a,
              wrapperEl: a[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
              wrongRTL: "-webkit-box" === a.css("display"),
            }),
            !0)
          );
        }),
        (r.init = function (e) {
          var t = this;
          return (
            t.initialized ||
              !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }),
        (r.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var a,
            i = this,
            s = i.params,
            r = i.$el,
            n = i.$wrapperEl,
            l = i.slides;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                r.removeAttr("style"),
                n.removeAttr("style"),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (a = i),
                Object.keys(a).forEach(function (e) {
                  try {
                    a[e] = null;
                  } catch (e) {}
                  try {
                    delete a[e];
                  } catch (e) {}
                })),
              (i.destroyed = !0)),
            null
          );
        }),
        (t.extendDefaults = function (e) {
          S(V, e);
        }),
        (t.installModule = function (e) {
          t.prototype.modules || (t.prototype.modules = {});
          var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
          t.prototype.modules[a] = e;
        }),
        (t.use = function (e) {
          return Array.isArray(e)
            ? (e.forEach(function (e) {
                return t.installModule(e);
              }),
              t)
            : (t.installModule(e), t);
        }),
        (a = t),
        (s = [
          {
            key: "extendedDefaults",
            get: function () {
              return V;
            },
          },
          {
            key: "defaults",
            get: function () {
              return R;
            },
          },
        ]),
        (i = null) && e(a.prototype, i),
        s && e(a, s),
        t
      );
    })();
  Object.keys(W).forEach(function (e) {
    Object.keys(W[e]).forEach(function (t) {
      F.prototype[t] = W[e][t];
    });
  }),
    F.use([L, O]);
  var _ = {
      update: function (e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          u = d.to,
          c = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          b,
          y = t.activeIndex || 0;
        (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((g = Math.floor(i / 2) + s + o), (b = Math.floor(i / 2) + s + l))
            : ((g = i + (s - 1) + o), (b = s + l));
        var w = Math.max((y || 0) - b, 0),
          E = Math.min((y || 0) + g, c.length - 1),
          x = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
        function T() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (S(t.virtual, {
            from: w,
            to: E,
            offset: x,
            slidesGrid: t.slidesGrid,
          }),
          p === w && u === E && !e)
        )
          return (
            t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: x,
              from: w,
              to: E,
              slides: (function () {
                for (var e = [], t = w; t <= E; t += 1) e.push(c[t]);
                return e;
              })(),
            }),
            void (t.params.virtual.renderExternalUpdate && T())
          );
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var z = p; z <= u; z += 1)
            (z < w || z > E) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    z +
                    '"]'
                )
                .remove();
        for (var P = 0; P < c.length; P += 1)
          P >= w &&
            P <= E &&
            (void 0 === u || e
              ? M.push(P)
              : (P > u && M.push(P), P < p && C.push(P)));
        M.forEach(function (e) {
          t.$wrapperEl.append(v(c[e], e));
        }),
          C.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(v(c[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(m, x + "px"),
          T();
      },
      renderSlide: function (e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide
          ? m(i.renderSlide.call(a, e, t))
          : m(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", t),
          i.cache && (a.virtual.cache[t] = s),
          s
        );
      },
      appendSlide: function (e) {
        var t = this;
        if ("object" == typeof e && "length" in e)
          for (var a = 0; a < e.length; a += 1)
            e[a] && t.virtual.slides.push(e[a]);
        else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1)
            e[r] && t.virtual.slides.unshift(e[r]);
          (i = a + e.length), (s = e.length);
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            l = {};
          Object.keys(n).forEach(function (e) {
            var t = n[e],
              a = t.attr("data-swiper-slide-index");
            a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1),
              (l[parseInt(e, 10) + s] = t);
          }),
            (t.virtual.cache = l);
        }
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function (e) {
        var t = this;
        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < a && (a -= 1),
                (a = Math.max(a, 0));
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < a && (a -= 1),
              (a = Math.max(a, 0));
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function () {
        var e = this;
        (e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0);
      },
    },
    q = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        M(this, {
          virtual: t({}, _, { slides: this.params.virtual.slides, cache: {} }),
        });
      },
      on: {
        beforeInit: function (e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = { watchSlidesProgress: !0 };
            S(e.params, t),
              S(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function (e) {
          e.params.virtual.enabled && e.virtual.update();
        },
      },
    },
    j = {
      handle: function (e) {
        var t = this;
        if (t.enabled) {
          var a = l(),
            i = r(),
            s = t.rtlTranslate,
            n = e;
          n.originalEvent && (n = n.originalEvent);
          var o = n.keyCode || n.charCode,
            d = t.params.keyboard.pageUpDown,
            p = d && 33 === o,
            u = d && 34 === o,
            c = 37 === o,
            h = 39 === o,
            v = 38 === o,
            f = 40 === o;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && h) || (t.isVertical() && f) || u)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && c) || (t.isVertical() && v) || p)
          )
            return !1;
          if (
            !(
              n.shiftKey ||
              n.altKey ||
              n.ctrlKey ||
              n.metaKey ||
              (i.activeElement &&
                i.activeElement.nodeName &&
                ("input" === i.activeElement.nodeName.toLowerCase() ||
                  "textarea" === i.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (p || u || c || h || v || f)
            ) {
              var m = !1;
              if (
                t.$el.parents("." + t.params.slideClass).length > 0 &&
                0 === t.$el.parents("." + t.params.slideActiveClass).length
              )
                return;
              var g = t.$el,
                b = g[0].clientWidth,
                y = g[0].clientHeight,
                w = a.innerWidth,
                E = a.innerHeight,
                x = t.$el.offset();
              s && (x.left -= t.$el[0].scrollLeft);
              for (
                var T = [
                    [x.left, x.top],
                    [x.left + b, x.top],
                    [x.left, x.top + y],
                    [x.left + b, x.top + y],
                  ],
                  C = 0;
                C < T.length;
                C += 1
              ) {
                var S = T[C];
                if (S[0] >= 0 && S[0] <= w && S[1] >= 0 && S[1] <= E) {
                  if (0 === S[0] && 0 === S[1]) continue;
                  m = !0;
                }
              }
              if (!m) return;
            }
            t.isHorizontal()
              ? ((p || u || c || h) &&
                  (n.preventDefault
                    ? n.preventDefault()
                    : (n.returnValue = !1)),
                (((u || h) && !s) || ((p || c) && s)) && t.slideNext(),
                (((p || c) && !s) || ((u || h) && s)) && t.slidePrev())
              : ((p || u || v || f) &&
                  (n.preventDefault
                    ? n.preventDefault()
                    : (n.returnValue = !1)),
                (u || f) && t.slideNext(),
                (p || v) && t.slidePrev()),
              t.emit("keyPress", o);
          }
        }
      },
      enable: function () {
        var e = this,
          t = r();
        e.keyboard.enabled ||
          (m(t).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
      },
      disable: function () {
        var e = this,
          t = r();
        e.keyboard.enabled &&
          (m(t).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
      },
    },
    U = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create: function () {
        M(this, { keyboard: t({ enabled: !1 }, j) });
      },
      on: {
        init: function (e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function (e) {
          e.keyboard.enabled && e.keyboard.disable();
        },
      },
    };
  var K = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return l().navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              var e = r(),
                t = "onwheel",
                a = t in e;
              if (!a) {
                var i = e.createElement("div");
                i.setAttribute(t, "return;"),
                  (a = "function" == typeof i.onwheel);
              }
              return (
                !a &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature("", "") &&
                  (a = e.implementation.hasFeature("Events.wheel", "3.0")),
                a
              );
            })()
          ? "wheel"
          : "mousewheel";
      },
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return (
          "detail" in e && (a = e.detail),
          "wheelDelta" in e && (a = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          "deltaY" in e && (s = e.deltaY),
          "deltaX" in e && (i = e.deltaX),
          e.shiftKey && !i && ((i = s), (s = 0)),
          (i || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        );
      },
      handleMouseEnter: function () {
        this.enabled && (this.mouseEntered = !0);
      },
      handleMouseLeave: function () {
        this.enabled && (this.mouseEntered = !1);
      },
      handle: function (e) {
        var t = e,
          a = this;
        if (a.enabled) {
          var i = a.params.mousewheel;
          a.params.cssMode && t.preventDefault();
          var s = a.$el;
          if (
            ("container" !== a.params.mousewheel.eventsTarget &&
              (s = m(a.params.mousewheel.eventsTarget)),
            !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges)
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
            n = a.rtlTranslate ? -1 : 1,
            l = K.normalize(t);
          if (i.forceToAxis)
            if (a.isHorizontal()) {
              if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
              r = -l.pixelX * n;
            } else {
              if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
              r = -l.pixelY;
            }
          else
            r =
              Math.abs(l.pixelX) > Math.abs(l.pixelY)
                ? -l.pixelX * n
                : -l.pixelY;
          if (0 === r) return !0;
          i.invert && (r = -r);
          var o = a.getTranslate() + r * i.sensitivity;
          if (
            (o >= a.minTranslate() && (o = a.minTranslate()),
            o <= a.maxTranslate() && (o = a.maxTranslate()),
            (!!a.params.loop ||
              !(o === a.minTranslate() || o === a.maxTranslate())) &&
              a.params.nested &&
              t.stopPropagation(),
            a.params.freeMode)
          ) {
            var d = { time: x(), delta: Math.abs(r), direction: Math.sign(r) },
              p = a.mousewheel.lastEventBeforeSnap,
              u =
                p &&
                d.time < p.time + 500 &&
                d.delta <= p.delta &&
                d.direction === p.direction;
            if (!u) {
              (a.mousewheel.lastEventBeforeSnap = void 0),
                a.params.loop && a.loopFix();
              var c = a.getTranslate() + r * i.sensitivity,
                h = a.isBeginning,
                v = a.isEnd;
              if (
                (c >= a.minTranslate() && (c = a.minTranslate()),
                c <= a.maxTranslate() && (c = a.maxTranslate()),
                a.setTransition(0),
                a.setTranslate(c),
                a.updateProgress(),
                a.updateActiveIndex(),
                a.updateSlidesClasses(),
                ((!h && a.isBeginning) || (!v && a.isEnd)) &&
                  a.updateSlidesClasses(),
                a.params.freeModeSticky)
              ) {
                clearTimeout(a.mousewheel.timeout),
                  (a.mousewheel.timeout = void 0);
                var f = a.mousewheel.recentWheelEvents;
                f.length >= 15 && f.shift();
                var g = f.length ? f[f.length - 1] : void 0,
                  b = f[0];
                if (
                  (f.push(d),
                  g && (d.delta > g.delta || d.direction !== g.direction))
                )
                  f.splice(0);
                else if (
                  f.length >= 15 &&
                  d.time - b.time < 500 &&
                  b.delta - d.delta >= 1 &&
                  d.delta <= 6
                ) {
                  var y = r > 0 ? 0.8 : 0.2;
                  (a.mousewheel.lastEventBeforeSnap = d),
                    f.splice(0),
                    (a.mousewheel.timeout = E(function () {
                      a.slideToClosest(a.params.speed, !0, void 0, y);
                    }, 0));
                }
                a.mousewheel.timeout ||
                  (a.mousewheel.timeout = E(function () {
                    (a.mousewheel.lastEventBeforeSnap = d),
                      f.splice(0),
                      a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (u || a.emit("scroll", t),
                a.params.autoplay &&
                  a.params.autoplayDisableOnInteraction &&
                  a.autoplay.stop(),
                c === a.minTranslate() || c === a.maxTranslate())
              )
                return !0;
            }
          } else {
            var w = {
                time: x(),
                delta: Math.abs(r),
                direction: Math.sign(r),
                raw: e,
              },
              T = a.mousewheel.recentWheelEvents;
            T.length >= 2 && T.shift();
            var C = T.length ? T[T.length - 1] : void 0;
            if (
              (T.push(w),
              C
                ? (w.direction !== C.direction ||
                    w.delta > C.delta ||
                    w.time > C.time + 150) &&
                  a.mousewheel.animateSlider(w)
                : a.mousewheel.animateSlider(w),
              a.mousewheel.releaseScroll(w))
            )
              return !0;
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          );
        }
      },
      animateSlider: function (e) {
        var t = this,
          a = l();
        return (
          !(
            this.params.mousewheel.thresholdDelta &&
            e.delta < this.params.mousewheel.thresholdDelta
          ) &&
          !(
            this.params.mousewheel.thresholdTime &&
            x() - t.mousewheel.lastScrollTime <
              this.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), t.emit("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), t.emit("scroll", e.raw)),
            (t.mousewheel.lastScrollTime = new a.Date().getTime()),
            !1))
        );
      },
      releaseScroll: function (e) {
        var t = this,
          a = t.params.mousewheel;
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function () {
        var e = this,
          t = K.event();
        if (e.params.cssMode)
          return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        var a = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarget &&
            (a = m(e.params.mousewheel.eventsTarget)),
          a.on("mouseenter", e.mousewheel.handleMouseEnter),
          a.on("mouseleave", e.mousewheel.handleMouseLeave),
          a.on(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = this,
          t = K.event();
        if (e.params.cssMode)
          return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        var a = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarget &&
            (a = m(e.params.mousewheel.eventsTarget)),
          a.off(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        );
      },
    },
    Z = {
      toggleEl: function (e, t) {
        e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
      },
      update: function () {
        var e = this,
          t = e.params.navigation,
          a = e.navigation.toggleEl;
        if (!e.params.loop) {
          var i = e.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
          r &&
            r.length > 0 &&
            (e.isBeginning ? a(r, !0) : a(r, !1),
            e.params.watchOverflow &&
              e.enabled &&
              r[e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
            s &&
              s.length > 0 &&
              (e.isEnd ? a(s, !0) : a(s, !1),
              e.params.watchOverflow &&
                e.enabled &&
                s[e.isLocked ? "addClass" : "removeClass"](t.lockClass));
        }
      },
      onPrevClick: function (e) {
        var t = this;
        e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
      },
      onNextClick: function (e) {
        var t = this;
        e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
      },
      init: function () {
        var e,
          t,
          a = this,
          i = a.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = m(i.nextEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              e.length > 1 &&
              1 === a.$el.find(i.nextEl).length &&
              (e = a.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = m(i.prevEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              t.length > 1 &&
              1 === a.$el.find(i.prevEl).length &&
              (t = a.$el.find(i.prevEl))),
          e && e.length > 0 && e.on("click", a.navigation.onNextClick),
          t && t.length > 0 && t.on("click", a.navigation.onPrevClick),
          S(a.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }),
          a.enabled ||
            (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a &&
          a.length &&
          (a.off("click", e.navigation.onNextClick),
          a.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass));
      },
    },
    J = {
      update: function () {
        var e = this,
          t = e.rtl,
          a = e.params.pagination;
        if (
          a.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var i,
            s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            r = e.pagination.$el,
            n = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((i = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 && "bullets" !== e.params.paginationType && (i = n + i))
              : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === a.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            var l,
              o,
              d,
              p = e.pagination.bullets;
            if (
              (a.dynamicBullets &&
                ((e.pagination.bulletSize = p
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"
                ),
                a.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                  e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        a.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (l = i - e.pagination.dynamicBulletIndex),
                (d =
                  ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) +
                    l) /
                  2)),
              p.removeClass(
                a.bulletActiveClass +
                  " " +
                  a.bulletActiveClass +
                  "-next " +
                  a.bulletActiveClass +
                  "-next-next " +
                  a.bulletActiveClass +
                  "-prev " +
                  a.bulletActiveClass +
                  "-prev-prev " +
                  a.bulletActiveClass +
                  "-main"
              ),
              r.length > 1)
            )
              p.each(function (e) {
                var t = m(e),
                  s = t.index();
                s === i && t.addClass(a.bulletActiveClass),
                  a.dynamicBullets &&
                    (s >= l &&
                      s <= o &&
                      t.addClass(a.bulletActiveClass + "-main"),
                    s === l &&
                      t
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev-prev"),
                    s === o &&
                      t
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next"));
              });
            else {
              var u = p.eq(i),
                c = u.index();
              if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1)
                  p.eq(f).addClass(a.bulletActiveClass + "-main");
                if (e.params.loop)
                  if (c >= p.length - a.dynamicMainBullets) {
                    for (var g = a.dynamicMainBullets; g >= 0; g -= 1)
                      p.eq(p.length - g).addClass(
                        a.bulletActiveClass + "-main"
                      );
                    p.eq(p.length - a.dynamicMainBullets - 1).addClass(
                      a.bulletActiveClass + "-prev"
                    );
                  } else
                    h
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev-prev"),
                      v
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next");
                else
                  h
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev-prev"),
                    v
                      .next()
                      .addClass(a.bulletActiveClass + "-next")
                      .next()
                      .addClass(a.bulletActiveClass + "-next-next");
              }
            }
            if (a.dynamicBullets) {
              var b = Math.min(p.length, a.dynamicMainBullets + 4),
                y =
                  (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 -
                  d * e.pagination.bulletSize,
                w = t ? "right" : "left";
              p.css(e.isHorizontal() ? w : "top", y + "px");
            }
          }
          if (
            ("fraction" === a.type &&
              (r.find(z(a.currentClass)).text(a.formatFractionCurrent(i + 1)),
              r.find(z(a.totalClass)).text(a.formatFractionTotal(n))),
            "progressbar" === a.type)
          ) {
            var E;
            E = a.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            var x = (i + 1) / n,
              T = 1,
              C = 1;
            "horizontal" === E ? (T = x) : (C = x),
              r
                .find(z(a.progressbarFillClass))
                .transform(
                  "translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")"
                )
                .transition(e.params.speed);
          }
          "custom" === a.type && a.renderCustom
            ? (r.html(a.renderCustom(e, i + 1, n)),
              e.emit("paginationRender", r[0]))
            : e.emit("paginationUpdate", r[0]),
            e.params.watchOverflow &&
              e.enabled &&
              r[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            var r = e.params.loop
              ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode && !e.params.loop && r > a && (r = a);
            for (var n = 0; n < r; n += 1)
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(s), (e.pagination.bullets = i.find(z(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var a = m(t.el);
          0 !== a.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              a.length > 1 &&
              (a = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && a.addClass(t.clickableClass),
            a.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (a.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              a.addClass(t.progressbarOppositeClass),
            t.clickable &&
              a.on("click", z(t.bulletClass), function (t) {
                t.preventDefault();
                var a = m(this).index() * e.params.slidesPerGroup;
                e.params.loop && (a += e.loopedSlides), e.slideTo(a);
              }),
            S(e.pagination, { $el: a, el: a[0] }),
            e.enabled || a.addClass(t.lockClass));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && a.off("click", z(t.bulletClass));
        }
      },
    },
    Q = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            l = t.$el,
            o = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a
            ? (p = -p) > 0
              ? ((d = s - p), (p = 0))
              : -p + s > r && (d = r + p)
            : p < 0
            ? ((d = s + p), (p = 0))
            : p + s > r && (d = r - p),
            e.isHorizontal()
              ? (n.transform("translate3d(" + p + "px, 0, 0)"),
                (n[0].style.width = d + "px"))
              : (n.transform("translate3d(0px, " + p + "px, 0)"),
                (n[0].style.height = d + "px")),
            o.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (l[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (l[0].style.opacity = 0), l.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        var t = this;
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          t.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          (a[0].style.width = ""), (a[0].style.height = "");
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (r / e.size);
          (s =
            "auto" === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + "px")
              : (a[0].style.height = s + "px"),
            (i[0].style.display = n >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            S(t, { trackSize: r, divider: n, moveDivider: l, dragSize: s }),
            e.params.watchOverflow &&
              e.enabled &&
              t.$el[e.isLocked ? "addClass" : "removeClass"](
                e.params.scrollbar.lockClass
              );
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          l = i.trackSize,
          o = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            r.offset()[a.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : n / 2)) /
          (l - n)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(d),
          a.setTranslate(d),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        (t.scrollbar.isTouched = !0),
          (t.scrollbar.dragStartPos =
            e.target === n[0] || e.target === n
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css("opacity", 1),
          t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
        t.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          a.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          r.transition(0),
          t.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = E(function () {
              r.css("opacity", 0), r.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          o &&
            (l.touch
              ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d),
                o.addEventListener(i.move, e.scrollbar.onDragMove, d),
                o.addEventListener(i.end, e.scrollbar.onDragEnd, p))
              : (o.addEventListener(s.start, e.scrollbar.onDragStart, d),
                t.addEventListener(s.move, e.scrollbar.onDragMove, d),
                t.addEventListener(s.end, e.scrollbar.onDragEnd, p)));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          o &&
            (l.touch
              ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d),
                o.removeEventListener(i.move, e.scrollbar.onDragMove, d),
                o.removeEventListener(i.end, e.scrollbar.onDragEnd, p))
              : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d),
                t.removeEventListener(s.move, e.scrollbar.onDragMove, d),
                t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)));
        }
      },
      init: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = m(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            s.length > 1 &&
            1 === a.find(i.el).length &&
            (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length &&
            ((r = m(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(r)),
            S(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable(),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    ee = {
      setTransform: function (e, t) {
        var a = this.rtl,
          i = m(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          l = i.attr("data-swiper-parallax-y"),
          o = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (
          (n || l
            ? ((n = n || "0"), (l = l || "0"))
            : this.isHorizontal()
            ? ((n = r), (l = "0"))
            : ((l = r), (n = "0")),
          (n =
            n.indexOf("%") >= 0
              ? parseInt(n, 10) * t * s + "%"
              : n * t * s + "px"),
          (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
          null != d)
        ) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }
        if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");
        else {
          var u = o - (o - 1) * (1 - Math.abs(t));
          i.transform(
            "translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")"
          );
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          a = e.slides,
          i = e.progress,
          s = e.snapGrid;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t) {
            e.parallax.setTransform(t, i);
          }),
          a.each(function (t, a) {
            var r = t.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (r += Math.ceil(a / 2) - i * (s.length - 1)),
              (r = Math.min(Math.max(r, -1), 1)),
              m(t)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (t) {
                  e.parallax.setTransform(t, r);
                });
          });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t) {
            var a = m(t),
              i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (i = 0), a.transition(i);
          });
      },
    },
    te = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function (e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (
          ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !a.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureTouched = !0),
            (r.scaleStart = te.getDistanceBetweenTouches(e));
        }
        (r.$slideEl && r.$slideEl.length) ||
        ((r.$slideEl = m(e.target).closest("." + t.params.slideClass)),
        0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
        (r.$imageEl = r.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        )),
        (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
        (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
        0 !== r.$imageWrapEl.length)
          ? (r.$imageEl && r.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (r.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (!a.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureMoved = !0),
            (r.scaleMove = te.getDistanceBetweenTouches(e));
        }
        r.$imageEl && 0 !== r.$imageEl.length
          ? (a.gestures
              ? (s.scale = e.scale * s.currentScale)
              : (s.scale = (r.scaleMove / r.scaleStart) * s.currentScale),
            s.scale > r.maxRatio &&
              (s.scale =
                r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, 0.5)),
            s.scale < i.minRatio &&
              (s.scale =
                i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
            r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")"))
          : "gesturechange" === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function (e) {
        var t = this,
          a = t.device,
          i = t.support,
          s = t.params.zoom,
          r = t.zoom,
          n = r.gesture;
        if (!i.gestures) {
          if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !a.android)
          )
            return;
          (r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1);
        }
        n.$imageEl &&
          0 !== n.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio)),
          n.$imageEl
            .transition(t.params.speed)
            .transform("translate3d(0,0,0) scale(" + r.scale + ")"),
          (r.currentScale = r.scale),
          (r.isScaling = !1),
          1 === r.scale && (n.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.device,
          a = this.zoom,
          i = a.gesture,
          s = a.image;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
            (t.android && e.cancelable && e.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = T(i.$imageWrapEl[0], "x") || 0),
            (s.startY = T(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var n = s.width * a.scale,
            l = s.height * a.scale;
          if (!(n < i.slideWidth && l < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - l / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1);
          (a.isTouched = !1), (a.isMoved = !1);
          var s = 300,
            r = 300,
            n = i.x * s,
            l = a.currentX + n,
            o = i.y * r,
            d = a.currentY + o;
          0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          (a.currentX = l), (a.currentY = d);
          var u = a.width * e.scale,
            c = a.height * e.scale;
          (a.minX = Math.min(t.slideWidth / 2 - u / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
            (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(
                "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this,
          t = e.zoom,
          a = t.gesture;
        a.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"),
          (t.scale = 1),
          (t.currentScale = 1),
          (a.$slideEl = void 0),
          (a.$imageEl = void 0),
          (a.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          o,
          d,
          p,
          u,
          c,
          h,
          v,
          f,
          m,
          g,
          b = this,
          y = l(),
          w = b.zoom,
          E = b.params.zoom,
          x = w.gesture,
          T = w.image;
        (x.$slideEl ||
          (b.params.virtual && b.params.virtual.enabled && b.virtual
            ? (x.$slideEl = b.$wrapperEl.children(
                "." + b.params.slideActiveClass
              ))
            : (x.$slideEl = b.slides.eq(b.activeIndex)),
          (x.$imageEl = x.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (x.$imageWrapEl = x.$imageEl.parent("." + E.containerClass))),
        x.$imageEl &&
          0 !== x.$imageEl.length &&
          x.$imageWrapEl &&
          0 !== x.$imageWrapEl.length) &&
          (x.$slideEl.addClass("" + E.zoomedSlideClass),
          void 0 === T.touchesStart.x && e
            ? ((t =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = T.touchesStart.x), (a = T.touchesStart.y)),
          (w.scale = x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
          (w.currentScale =
            x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
          e
            ? ((m = x.$slideEl[0].offsetWidth),
              (g = x.$slideEl[0].offsetHeight),
              (i = x.$slideEl.offset().left + y.scrollX + m / 2 - t),
              (s = x.$slideEl.offset().top + y.scrollY + g / 2 - a),
              (o = x.$imageEl[0].offsetWidth),
              (d = x.$imageEl[0].offsetHeight),
              (p = o * w.scale),
              (u = d * w.scale),
              (v = -(c = Math.min(m / 2 - p / 2, 0))),
              (f = -(h = Math.min(g / 2 - u / 2, 0))),
              (r = i * w.scale) < c && (r = c),
              r > v && (r = v),
              (n = s * w.scale) < h && (n = h),
              n > f && (n = f))
            : ((r = 0), (n = 0)),
          x.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + r + "px, " + n + "px,0)"),
          x.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + w.scale + ")"));
      },
      out: function () {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (i.$slideEl = e.$wrapperEl.children(
                "." + e.params.slideActiveClass
              ))
            : (i.$slideEl = e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            i.$imageWrapEl &&
            0 !== i.$imageWrapEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      toggleGestures: function (e) {
        var t = this,
          a = t.zoom,
          i = a.slideSelector,
          s = a.passiveListener;
        t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s),
          t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s),
          t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
      },
      enableGestures: function () {
        this.zoom.gesturesEnabled ||
          ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
      },
      disableGestures: function () {
        this.zoom.gesturesEnabled &&
          ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
      },
      enable: function () {
        var e = this,
          t = e.support,
          a = e.zoom;
        if (!a.enabled) {
          a.enabled = !0;
          var i = !(
              "touchstart" !== e.touchEvents.start ||
              !t.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !t.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          (e.zoom.passiveListener = i),
            (e.zoom.slideSelector = r),
            t.gestures
              ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i),
                e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i))
              : "touchstart" === e.touchEvents.start &&
                (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i),
                e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s),
                e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i),
                e.touchEvents.cancel &&
                  e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)),
            e.$wrapperEl.on(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              a.onTouchMove,
              s
            );
        }
      },
      disable: function () {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          var a = e.support;
          e.zoom.enabled = !1;
          var i = !(
              "touchstart" !== e.touchEvents.start ||
              !a.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !a.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          a.gestures
            ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i),
              e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i),
              e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s),
              e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i),
              e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)),
            e.$wrapperEl.off(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove,
              s
            );
        }
      },
    },
    ae = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var a = this,
          i = a.params.lazy;
        if (void 0 !== e && 0 !== a.slides.length) {
          var s =
              a.virtual && a.params.virtual.enabled
                ? a.$wrapperEl.children(
                    "." +
                      a.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : a.slides.eq(e),
            r = s.find(
              "." +
                i.elementClass +
                ":not(." +
                i.loadedClass +
                "):not(." +
                i.loadingClass +
                ")"
            );
          !s.hasClass(i.elementClass) ||
            s.hasClass(i.loadedClass) ||
            s.hasClass(i.loadingClass) ||
            r.push(s[0]),
            0 !== r.length &&
              r.each(function (e) {
                var r = m(e);
                r.addClass(i.loadingClass);
                var n = r.attr("data-background"),
                  l = r.attr("data-src"),
                  o = r.attr("data-srcset"),
                  d = r.attr("data-sizes"),
                  p = r.parent("picture");
                a.loadImage(r[0], l || n, o, d, !1, function () {
                  if (null != a && a && (!a || a.params) && !a.destroyed) {
                    if (
                      (n
                        ? (r.css("background-image", 'url("' + n + '")'),
                          r.removeAttr("data-background"))
                        : (o &&
                            (r.attr("srcset", o), r.removeAttr("data-srcset")),
                          d && (r.attr("sizes", d), r.removeAttr("data-sizes")),
                          p.length &&
                            p.children("source").each(function (e) {
                              var t = m(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          l && (r.attr("src", l), r.removeAttr("data-src"))),
                      r.addClass(i.loadedClass).removeClass(i.loadingClass),
                      s.find("." + i.preloaderClass).remove(),
                      a.params.loop && t)
                    ) {
                      var e = s.attr("data-swiper-slide-index");
                      if (s.hasClass(a.params.slideDuplicateClass)) {
                        var u = a.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            a.params.slideDuplicateClass +
                            ")"
                        );
                        a.lazy.loadInSlide(u.index(), !1);
                      } else {
                        var c = a.$wrapperEl.children(
                          "." +
                            a.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        a.lazy.loadInSlide(c.index(), !1);
                      }
                    }
                    a.emit("lazyImageReady", s[0], r[0]),
                      a.params.autoHeight && a.updateAutoHeight();
                  }
                }),
                  a.emit("lazyImageLoad", s[0], r[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides,
          s = e.activeIndex,
          r = e.virtual && a.virtual.enabled,
          n = a.lazy,
          l = a.slidesPerView;
        function o(e) {
          if (r) {
            if (
              t.children(
                "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (i[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + a.slideVisibleClass).each(function (t) {
            var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
            e.lazy.loadInSlide(a);
          });
        else if (l > 1)
          for (var p = s; p < s + l; p += 1) o(p) && e.lazy.loadInSlide(p);
        else e.lazy.loadInSlide(s);
        if (n.loadPrevNext)
          if (l > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            for (
              var u = n.loadPrevNextAmount,
                c = l,
                h = Math.min(s + c + Math.max(u, c), i.length),
                v = Math.max(s - Math.max(c, u), 0),
                f = s + l;
              f < h;
              f += 1
            )
              o(f) && e.lazy.loadInSlide(f);
            for (var g = v; g < s; g += 1) o(g) && e.lazy.loadInSlide(g);
          } else {
            var b = t.children("." + a.slideNextClass);
            b.length > 0 && e.lazy.loadInSlide(d(b));
            var y = t.children("." + a.slidePrevClass);
            y.length > 0 && e.lazy.loadInSlide(d(y));
          }
      },
      checkInViewOnLoad: function () {
        var e = l(),
          t = this;
        if (t && !t.destroyed) {
          var a = t.params.lazy.scrollingElement
              ? m(t.params.lazy.scrollingElement)
              : m(e),
            i = a[0] === e,
            s = i ? e.innerWidth : a[0].offsetWidth,
            r = i ? e.innerHeight : a[0].offsetHeight,
            n = t.$el.offset(),
            o = !1;
          t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
          for (
            var d = [
                [n.left, n.top],
                [n.left + t.width, n.top],
                [n.left, n.top + t.height],
                [n.left + t.width, n.top + t.height],
              ],
              p = 0;
            p < d.length;
            p += 1
          ) {
            var u = d[p];
            if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
              if (0 === u[0] && 0 === u[1]) continue;
              o = !0;
            }
          }
          o
            ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad))
            : t.lazy.scrollHandlerAttached ||
              ((t.lazy.scrollHandlerAttached = !0),
              a.on("scroll", t.lazy.checkInViewOnLoad));
        }
      },
    },
    ie = {
      LinearSpline: function (e, t) {
        var a,
          i,
          s,
          r,
          n,
          l = function (e, t) {
            for (i = -1, a = e.length; a - i > 1; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
            return a;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = l(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new ie.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new ie.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control,
          n = s.constructor;
        function l(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by &&
            (s.controller.getInterpolateFunction(e),
            (i = -s.controller.spline.interpolate(-t))),
            (i && "container" !== s.params.controller.by) ||
              ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (i = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (i = e.maxTranslate() - i),
            e.updateProgress(i),
            e.setTranslate(i, s),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof n && l(r[o]);
        else r instanceof n && t !== r && l(r);
      },
      setTransition: function (e, t) {
        var a,
          i = this,
          s = i.constructor,
          r = i.controller.control;
        function n(t) {
          t.setTransition(e, i),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                E(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                r &&
                  (t.params.loop &&
                    "slide" === i.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(r))
          for (a = 0; a < r.length; a += 1)
            r[a] !== t && r[a] instanceof s && n(r[a]);
        else r instanceof s && t !== r && n(r);
      },
    },
    se = {
      getRandomNumber: function (e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function (e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function (e, t) {
        return e.attr("aria-roledescription", t), e;
      },
      addElControls: function (e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function (e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function (e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterOrSpaceKey: function (e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          var t = this,
            a = t.params.a11y,
            i = m(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(a.lastSlideMessage)
              : t.a11y.notify(a.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(a.firstSlideMessage)
                : t.a11y.notify(a.prevSlideMessage)),
            t.pagination &&
              i.is(z(t.params.pagination.bulletClass)) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop && e.navigation) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i &&
            i.length > 0 &&
            (e.isBeginning
              ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i))
              : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
            a &&
              a.length > 0 &&
              (e.isEnd
                ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a))
                : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (a) {
            var i = m(a);
            e.a11y.makeElFocusable(i),
              e.params.pagination.renderBullet ||
                (e.a11y.addElRole(i, "button"),
                e.a11y.addElLabel(
                  i,
                  t.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    i.index() + 1
                  )
                ));
          });
      },
      init: function () {
        var e = this,
          t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var a = e.$el;
        t.containerRoleDescriptionMessage &&
          e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage),
          t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
        var i,
          s,
          r = e.$wrapperEl,
          n = r.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
          l = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        e.a11y.addElId(r, n),
          e.a11y.addElLive(r, l),
          t.itemRoleDescriptionMessage &&
            e.a11y.addElRoleDescription(
              m(e.slides),
              t.itemRoleDescriptionMessage
            ),
          e.a11y.addElRole(m(e.slides), t.slideRole),
          e.slides.each(function (a) {
            var i = m(a),
              s = t.slideLabelMessage
                .replace(/\{\{index\}\}/, i.index() + 1)
                .replace(/\{\{slidesLength\}\}/, e.slides.length);
            e.a11y.addElLabel(i, s);
          }),
          e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
          i &&
            i.length &&
            (e.a11y.makeElFocusable(i),
            "BUTTON" !== i[0].tagName &&
              (e.a11y.addElRole(i, "button"),
              i.on("keydown", e.a11y.onEnterOrSpaceKey)),
            e.a11y.addElLabel(i, t.nextSlideMessage),
            e.a11y.addElControls(i, n)),
          s &&
            s.length &&
            (e.a11y.makeElFocusable(s),
            "BUTTON" !== s[0].tagName &&
              (e.a11y.addElRole(s, "button"),
              s.on("keydown", e.a11y.onEnterOrSpaceKey)),
            e.a11y.addElLabel(s, t.prevSlideMessage),
            e.a11y.addElControls(s, n)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              z(e.params.pagination.bulletClass),
              e.a11y.onEnterOrSpaceKey
            );
      },
      destroy: function () {
        var e,
          t,
          a = this;
        a.a11y.liveRegion &&
          a.a11y.liveRegion.length > 0 &&
          a.a11y.liveRegion.remove(),
          a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
          a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
          e && e.off("keydown", a.a11y.onEnterOrSpaceKey),
          t && t.off("keydown", a.a11y.onEnterOrSpaceKey),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.off(
              "keydown",
              z(a.params.pagination.bulletClass),
              a.a11y.onEnterOrSpaceKey
            );
      },
    },
    re = {
      init: function () {
        var e = this,
          t = l();
        if (e.params.history) {
          if (!t.history || !t.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          var a = e.history;
          (a.initialized = !0),
            (a.paths = re.getPathValues(e.params.url)),
            (a.paths.key || a.paths.value) &&
              (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                t.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function () {
        var e = l();
        this.params.history.replaceState ||
          e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        var e = this;
        (e.history.paths = re.getPathValues(e.params.url)),
          e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
      },
      getPathValues: function (e) {
        var t = l(),
          a = (e ? new URL(e) : t.location).pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          i = a.length;
        return { key: a[i - 2], value: a[i - 1] };
      },
      setHistory: function (e, t) {
        var a = this,
          i = l();
        if (a.history.initialized && a.params.history.enabled) {
          var s;
          s = a.params.url ? new URL(a.params.url) : i.location;
          var r = a.slides.eq(t),
            n = re.slugify(r.attr("data-history"));
          if (a.params.history.root.length > 0) {
            var o = a.params.history.root;
            "/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)),
              (n = o + "/" + e + "/" + n);
          } else s.pathname.includes(e) || (n = e + "/" + n);
          var d = i.history.state;
          (d && d.value === n) ||
            (a.params.history.replaceState
              ? i.history.replaceState({ value: n }, null, n)
              : i.history.pushState({ value: n }, null, n));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (
              re.slugify(n.attr("data-history")) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var l = n.index();
              i.slideTo(l, e, a);
            }
          }
        else i.slideTo(0, e, a);
      },
    },
    ne = {
      onHashCange: function () {
        var e = this,
          t = r();
        e.emit("hashChange");
        var a = t.location.hash.replace("#", "");
        if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var i = e.$wrapperEl
            .children("." + e.params.slideClass + '[data-hash="' + a + '"]')
            .index();
          if (void 0 === i) return;
          e.slideTo(i);
        }
      },
      setHash: function () {
        var e = this,
          t = l(),
          a = r();
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            t.history &&
            t.history.replaceState
          )
            t.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            ),
              e.emit("hashSet");
          else {
            var i = e.slides.eq(e.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            (a.location.hash = s || ""), e.emit("hashSet");
          }
      },
      init: function () {
        var e = this,
          t = r(),
          a = l();
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0;
          var i = t.location.hash.replace("#", "");
          if (i)
            for (var s = 0, n = e.slides.length; s < n; s += 1) {
              var o = e.slides.eq(s);
              if (
                (o.attr("data-hash") || o.attr("data-history")) === i &&
                !o.hasClass(e.params.slideDuplicateClass)
              ) {
                var d = o.index();
                e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
              }
            }
          e.params.hashNavigation.watchState &&
            m(a).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        var e = l();
        this.params.hashNavigation.watchState &&
          m(e).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    le = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = E(function () {
            var t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    e.emit("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                e.autoplay.run();
          }, a));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                  t.$wrapperEl[0].addEventListener(
                    e,
                    t.autoplay.onTransitionEnd
                  );
                })
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
      onVisibilityChange: function () {
        var e = this,
          t = r();
        "hidden" === t.visibilityState &&
          e.autoplay.running &&
          e.autoplay.pause(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (e.autoplay.run(), (e.autoplay.paused = !1));
      },
      onTransitionEnd: function (e) {
        var t = this;
        t &&
          !t.destroyed &&
          t.$wrapperEl &&
          e.target === t.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
            t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
          }),
          (t.autoplay.paused = !1),
          t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
      },
      onMouseEnter: function () {
        var e = this;
        e.autoplay.pause(),
          ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
            e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
          });
      },
      onMouseLeave: function () {
        (this.autoplay.paused = !1), this.autoplay.run();
      },
      attachMouseEvents: function () {
        var e = this;
        e.params.autoplay.pauseOnMouseEnter &&
          (e.$el.on("mouseenter", e.autoplay.onMouseEnter),
          e.$el.on("mouseleave", e.autoplay.onMouseLeave));
      },
      detachMouseEvents: function () {
        var e = this;
        e.$el.off("mouseenter", e.autoplay.onMouseEnter),
          e.$el.off("mouseleave", e.autoplay.onMouseLeave);
      },
    },
    oe = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = s), (s = 0));
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: n }).transform(
            "translate3d(" + s + "px, " + r + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.$wrapperEl;
        if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              (s = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                i.trigger(e[a]);
            }
          });
        }
      },
    },
    de = {
      setTranslate: function () {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          p = t.params.cubeEffect,
          u = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          h = 0;
        p.shadow &&
          (u
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = m('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + "px" }))
            : 0 === (e = a.find(".swiper-cube-shadow")).length &&
              ((e = m('<div class="swiper-cube-shadow"></div>')), a.append(e)));
        for (var v = 0; v < s.length; v += 1) {
          var f = s.eq(v),
            g = v;
          c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
          var b = 90 * g,
            y = Math.floor(b / 360);
          l && ((b = -b), (y = Math.floor(-b / 360)));
          var w = Math.max(Math.min(f[0].progress, 1), -1),
            E = 0,
            x = 0,
            T = 0;
          g % 4 == 0
            ? ((E = 4 * -y * o), (T = 0))
            : (g - 1) % 4 == 0
            ? ((E = 0), (T = 4 * -y * o))
            : (g - 2) % 4 == 0
            ? ((E = o + 4 * y * o), (T = o))
            : (g - 3) % 4 == 0 && ((E = -o), (T = 3 * o + 4 * o * y)),
            l && (E = -E),
            u || ((x = E), (E = 0));
          var C =
            "rotateX(" +
            (u ? 0 : -b) +
            "deg) rotateY(" +
            (u ? b : 0) +
            "deg) translate3d(" +
            E +
            "px, " +
            x +
            "px, " +
            T +
            "px)";
          if (
            (w <= 1 &&
              w > -1 &&
              ((h = 90 * g + 90 * w), l && (h = 90 * -g - 90 * w)),
            f.transform(C),
            p.slideShadows)
          ) {
            var S = u
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              M = u
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              ((S = m(
                '<div class="swiper-slide-shadow-' +
                  (u ? "left" : "top") +
                  '"></div>'
              )),
              f.append(S)),
              0 === M.length &&
                ((M = m(
                  '<div class="swiper-slide-shadow-' +
                    (u ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(M)),
              S.length && (S[0].style.opacity = Math.max(-w, 0)),
              M.length && (M[0].style.opacity = Math.max(w, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
            "transform-origin": "50% 50% -" + o / 2 + "px",
          }),
          p.shadow)
        )
          if (u)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + p.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                p.shadowScale +
                ")"
            );
          else {
            var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
              P =
                1.5 -
                (Math.sin((2 * z * Math.PI) / 360) / 2 +
                  Math.cos((2 * z * Math.PI) / 360) / 2),
              k = p.shadowScale,
              $ = p.shadowScale / P,
              L = p.shadowOffset;
            e.transform(
              "scale3d(" +
                k +
                ", 1, " +
                $ +
                ") translate3d(0px, " +
                (n / 2 + L) +
                "px, " +
                -n / 2 / $ +
                "px) rotateX(-90deg)"
            );
          }
        var I = d.isSafari || d.isWebView ? -o / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            I +
            "px) rotateX(" +
            (t.isHorizontal() ? 0 : h) +
            "deg) rotateY(" +
            (t.isHorizontal() ? -h : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this,
          a = t.$el;
        t.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          t.params.cubeEffect.shadow &&
            !t.isHorizontal() &&
            a.find(".swiper-cube-shadow").transition(e);
      },
    },
    pe = {
      setTranslate: function () {
        for (
          var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
          i < t.length;
          i += 1
        ) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            l = 0,
            o = -s[0].swiperSlideOffset,
            d = 0;
          if (
            (e.isHorizontal()
              ? a && (n = -n)
              : ((d = o), (o = 0), (l = -n), (n = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            var p = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              u = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === p.length &&
              ((p = m(
                '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(p)),
              0 === u.length &&
                ((u = m(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(u)),
              p.length && (p[0].style.opacity = Math.max(-r, 0)),
              u.length && (u[0].style.opacity = Math.max(r, 0));
          }
          s.transform(
            "translate3d(" +
              o +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              l +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;
        if (
          (a
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                s.trigger(e[a]);
            }
          });
        }
      },
    },
    ue = {
      setTranslate: function () {
        for (
          var e = this,
            t = e.width,
            a = e.height,
            i = e.slides,
            s = e.slidesSizesGrid,
            r = e.params.coverflowEffect,
            n = e.isHorizontal(),
            l = e.translate,
            o = n ? t / 2 - l : a / 2 - l,
            d = n ? r.rotate : -r.rotate,
            p = r.depth,
            u = 0,
            c = i.length;
          u < c;
          u += 1
        ) {
          var h = i.eq(u),
            v = s[u],
            f = ((o - h[0].swiperSlideOffset - v / 2) / v) * r.modifier,
            g = n ? d * f : 0,
            b = n ? 0 : d * f,
            y = -p * Math.abs(f),
            w = r.stretch;
          "string" == typeof w &&
            -1 !== w.indexOf("%") &&
            (w = (parseFloat(r.stretch) / 100) * v);
          var E = n ? 0 : w * f,
            x = n ? w * f : 0,
            T = 1 - (1 - r.scale) * Math.abs(f);
          Math.abs(x) < 0.001 && (x = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(T) < 0.001 && (T = 0);
          var C =
            "translate3d(" +
            x +
            "px," +
            E +
            "px," +
            y +
            "px)  rotateX(" +
            b +
            "deg) rotateY(" +
            g +
            "deg) scale(" +
            T +
            ")";
          if (
            (h.transform(C),
            (h[0].style.zIndex = 1 - Math.abs(Math.round(f))),
            r.slideShadows)
          ) {
            var S = n
                ? h.find(".swiper-slide-shadow-left")
                : h.find(".swiper-slide-shadow-top"),
              M = n
                ? h.find(".swiper-slide-shadow-right")
                : h.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              ((S = m(
                '<div class="swiper-slide-shadow-' +
                  (n ? "left" : "top") +
                  '"></div>'
              )),
              h.append(S)),
              0 === M.length &&
                ((M = m(
                  '<div class="swiper-slide-shadow-' +
                    (n ? "right" : "bottom") +
                    '"></div>'
                )),
                h.append(M)),
              S.length && (S[0].style.opacity = f > 0 ? f : 0),
              M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
          }
        }
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    ce = {
      init: function () {
        var e = this,
          t = e.params.thumbs;
        if (e.thumbs.initialized) return !1;
        e.thumbs.initialized = !0;
        var a = e.constructor;
        return (
          t.swiper instanceof a
            ? ((e.thumbs.swiper = t.swiper),
              S(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              S(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : C(t.swiper) &&
              ((e.thumbs.swiper = new a(
                S({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
          !0
        );
      },
      onThumbClick: function () {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide;
          if (
            !(
              (i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
              null == a
            )
          ) {
            var s;
            if (
              ((s = t.params.loop
                ? parseInt(
                    m(t.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : a),
              e.params.loop)
            ) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (r = e.activeIndex));
              var n = e.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                l = e.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
            }
            e.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i =
              "auto" === a.params.slidesPerView
                ? a.slidesPerViewDynamic()
                : a.params.slidesPerView,
            s = t.params.thumbs.autoScrollOffset,
            r = s && !a.params.loop;
          if (t.realIndex !== a.realIndex || r) {
            var n,
              l,
              o = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(o).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                (o = a.activeIndex));
              var d = a.slides
                  .eq(o)
                  .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index(),
                p = a.slides
                  .eq(o)
                  .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index();
              (n =
                void 0 === d
                  ? p
                  : void 0 === p
                  ? d
                  : p - o == o - d
                  ? o
                  : p - o < o - d
                  ? p
                  : d),
                (l = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
            r && (n += "next" === l ? s : -1 * s),
              a.visibleSlidesIndexes &&
                a.visibleSlidesIndexes.indexOf(n) < 0 &&
                (a.params.centeredSlides
                  ? (n =
                      n > o
                        ? n - Math.floor(i / 2) + 1
                        : n + Math.floor(i / 2) - 1)
                  : n > o && (n = n - i + 1),
                a.slideTo(n, e ? 0 : void 0));
          }
          var u = 1,
            c = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (u = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (u = 1),
            (u = Math.floor(u)),
            a.slides.removeClass(c),
            a.params.loop || (a.params.virtual && a.params.virtual.enabled))
          )
            for (var h = 0; h < u; h += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (t.realIndex + h) + '"]'
                )
                .addClass(c);
          else
            for (var v = 0; v < u; v += 1)
              a.slides.eq(t.realIndex + v).addClass(c);
        }
      },
    },
    he = [
      q,
      U,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        },
        create: function () {
          M(this, {
            mousewheel: {
              enabled: !1,
              lastScrollTime: x(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
              enable: K.enable,
              disable: K.disable,
              handle: K.handle,
              handleMouseEnter: K.handleMouseEnter,
              handleMouseLeave: K.handleMouseLeave,
              animateSlider: K.animateSlider,
              releaseScroll: K.releaseScroll,
            },
          });
        },
        on: {
          init: function (e) {
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable();
          },
          destroy: function (e) {
            e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          M(this, { navigation: t({}, Z) });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          "enable disable": function (e) {
            var t = e.navigation,
              a = t.$nextEl,
              i = t.$prevEl;
            a &&
              a[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              i &&
                i[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          },
          click: function (e, t) {
            var a = e.navigation,
              i = a.$nextEl,
              s = a.$prevEl,
              r = t.target;
            if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === r || e.pagination.el.contains(r))
              )
                return;
              var n;
              i
                ? (n = i.hasClass(e.params.navigation.hiddenClass))
                : s && (n = s.hasClass(e.params.navigation.hiddenClass)),
                !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                s && s.toggleClass(e.params.navigation.hiddenClass);
            }
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          M(this, { pagination: t({ dynamicBulletIndex: 0 }, J) });
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function (e) {
            e.pagination.destroy();
          },
          "enable disable": function (e) {
            var t = e.pagination.$el;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          },
          click: function (e, t) {
            var a = t.target;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !m(a).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                  (e.navigation.prevEl && a === e.navigation.prevEl))
              )
                return;
              !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit("paginationShow")
                : e.emit("paginationHide"),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
            }
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          M(this, {
            scrollbar: t(
              { isTouched: !1, timeout: null, dragTimeout: null },
              Q
            ),
          });
        },
        on: {
          init: function (e) {
            e.scrollbar.init(),
              e.scrollbar.updateSize(),
              e.scrollbar.setTranslate();
          },
          update: function (e) {
            e.scrollbar.updateSize();
          },
          resize: function (e) {
            e.scrollbar.updateSize();
          },
          observerUpdate: function (e) {
            e.scrollbar.updateSize();
          },
          setTranslate: function (e) {
            e.scrollbar.setTranslate();
          },
          setTransition: function (e, t) {
            e.scrollbar.setTransition(t);
          },
          "enable disable": function (e) {
            var t = e.scrollbar.$el;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
          },
          destroy: function (e) {
            e.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          M(this, { parallax: t({}, ee) });
        },
        on: {
          beforeInit: function (e) {
            e.params.parallax.enabled &&
              ((e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          init: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTranslate: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTransition: function (e, t) {
            e.params.parallax.enabled && e.parallax.setTransition(t);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var e = this;
          M(e, {
            zoom: t(
              {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              },
              te
            ),
          });
          var a = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function () {
              return a;
            },
            set: function (t) {
              if (a !== t) {
                var i = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  s = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, i, s);
              }
              a = t;
            },
          });
        },
        on: {
          init: function (e) {
            e.params.zoom.enabled && e.zoom.enable();
          },
          destroy: function (e) {
            e.zoom.disable();
          },
          touchStart: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchStart(t);
          },
          touchEnd: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchEnd(t);
          },
          doubleTap: function (e, t) {
            !e.animating &&
              e.params.zoom.enabled &&
              e.zoom.enabled &&
              e.params.zoom.toggle &&
              e.zoom.toggle(t);
          },
          transitionEnd: function (e) {
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange: function (e) {
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          M(this, { lazy: t({ initialImageLoaded: !1 }, ae) });
        },
        on: {
          beforeInit: function (e) {
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init: function (e) {
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              (e.params.lazy.checkInView
                ? e.lazy.checkInViewOnLoad()
                : e.lazy.load());
          },
          scroll: function (e) {
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart: function (e) {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function (e) {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          },
          slideChange: function (e) {
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          M(this, {
            controller: t({ control: this.params.controller.control }, ie),
          });
        },
        on: {
          update: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          resize: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          observerUpdate: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          setTranslate: function (e, t, a) {
            e.controller.control && e.controller.setTranslate(t, a);
          },
          setTransition: function (e, t, a) {
            e.controller.control && e.controller.setTransition(t, a);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
          },
        },
        create: function () {
          M(this, {
            a11y: t({}, se, {
              liveRegion: m(
                '<span class="' +
                  this.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            }),
          });
        },
        on: {
          afterInit: function (e) {
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
          },
          toEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          fromEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          paginationUpdate: function (e) {
            e.params.a11y.enabled && e.a11y.updatePagination();
          },
          destroy: function (e) {
            e.params.a11y.enabled && e.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: {
          history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
        },
        create: function () {
          M(this, { history: t({}, re) });
        },
        on: {
          init: function (e) {
            e.params.history.enabled && e.history.init();
          },
          destroy: function (e) {
            e.params.history.enabled && e.history.destroy();
          },
          "transitionEnd _freeModeNoMomentumRelease": function (e) {
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
          slideChange: function (e) {
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          M(this, { hashNavigation: t({ initialized: !1 }, ne) });
        },
        on: {
          init: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.init();
          },
          destroy: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
          },
          "transitionEnd _freeModeNoMomentumRelease": function (e) {
            e.hashNavigation.initialized && e.hashNavigation.setHash();
          },
          slideChange: function (e) {
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        },
        create: function () {
          M(this, { autoplay: t({}, le, { running: !1, paused: !1 }) });
        },
        on: {
          init: function (e) {
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              r().addEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              ),
              e.autoplay.attachMouseEvents());
          },
          beforeTransitionStart: function (e, t, a) {
            e.autoplay.running &&
              (a || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(t)
                : e.autoplay.stop());
          },
          sliderFirstMove: function (e) {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd: function (e) {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy: function (e) {
            e.autoplay.detachMouseEvents(),
              e.autoplay.running && e.autoplay.stop(),
              r().removeEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          M(this, { fadeEffect: t({}, oe) });
        },
        on: {
          beforeInit: function (e) {
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "fade" === e.params.effect && e.fadeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "fade" === e.params.effect && e.fadeEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          M(this, { cubeEffect: t({}, de) });
        },
        on: {
          beforeInit: function (e) {
            if ("cube" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "cube"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "cube" === e.params.effect && e.cubeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "cube" === e.params.effect && e.cubeEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          M(this, { flipEffect: t({}, pe) });
        },
        on: {
          beforeInit: function (e) {
            if ("flip" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "flip"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "flip" === e.params.effect && e.flipEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "flip" === e.params.effect && e.flipEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          M(this, { coverflowEffect: t({}, ue) });
        },
        on: {
          beforeInit: function (e) {
            "coverflow" === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + "coverflow"),
              e.classNames.push(e.params.containerModifierClass + "3d"),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function (e) {
            "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "coverflow" === e.params.effect &&
              e.coverflowEffect.setTransition(t);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          M(this, { thumbs: t({ swiper: null, initialized: !1 }, ce) });
        },
        on: {
          beforeInit: function (e) {
            var t = e.params.thumbs;
            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
          },
          slideChange: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          update: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          resize: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          observerUpdate: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          setTransition: function (e, t) {
            var a = e.thumbs.swiper;
            a && a.setTransition(t);
          },
          beforeDestroy: function (e) {
            var t = e.thumbs.swiper;
            t && e.thumbs.swiperCreated && t && t.destroy();
          },
        },
      },
    ];
  return F.use(he), F;
});
//# sourceMappingURL=swiper-bundle.min.js.map

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/* nice mp4 video playlist with jQuery 
   created by: Menni Mehdi
   in : 23/01/2016
   license : if you like it use it
*/

$(document).ready(function () {
  var vid = $("#myvid");

  //default video source
  $(vid).attr("src", $("a.link:first").attr("href"));

  // addClass playing to first video link
  $("a.link:first").addClass("playing");

  $("a.link").on("click", function (event) {
    // prevent link default
    event.preventDefault();

    // change video source
    $(vid).attr("src", $(this).attr("href"));

    // remouve class playing from unplayed video href
    $(".vids a").removeClass("playing");

    // add class playing to video href
    $(this).addClass("playing");

    // add class paused to give the play/pause button the right look
    $(".btnPlay").addClass("paused");

    // play the video
    vid[0].play();

    // adjust prev button state
    if ($("a.link:first").hasClass("playing")) {
      $(".prevvid").addClass("disabled");
    } else {
      $(".prevvid").removeClass("disabled");
    }

    // adjust next button state
    if ($("a.link:last").hasClass("playing")) {
      $(".nextvid").addClass("disabled");
    } else {
      $(".nextvid").removeClass("disabled");
    }
  });

  //VIDEO EVENTS
  //video canplay event
  vid.on("canplay", function () {
    $(".loading").fadeOut(100);
  });

  //video canplaythrough event
  //solve Chrome cache issue
  var completeloaded = false;
  vid.on("canplaythrough", function () {
    completeloaded = true;
  });

  //video ended event
  vid.on("ended", function () {
    $(".btnPlay").removeClass("paused");
    vid[0].pause();
  });

  //video seeking event
  vid.on("seeking", function () {
    //if video fully loaded, ignore loading screen
    if (!completeloaded) {
      $(".loading").fadeIn(200);
    }
  });

  //video seeked event
  vid.on("seeked", function () {});

  //video waiting for more data event
  vid.on("waiting", function () {
    $(".loading").fadeIn(200);
  });

  /*controllers*/
  //before everything get started
  vid.on("loadedmetadata", function () {
    //set video properties
    $(".current").text(timeFormat(0));
    $(".duration").text(timeFormat(vid[0].duration));
    if (vid[0].muted) {
      updateVolume(0, 0);
    } else {
      updateVolume(0, 0.7);
    }
  });

  //display video buffering bar
  var startBuffer = function () {
    var currentBuffer = vid[0].buffered.end(0);
    var maxduration = vid[0].duration;
    var perc = (100 * currentBuffer) / maxduration;
    $(".bufferBar").css("width", perc + "%");

    if (currentBuffer < maxduration) {
      setTimeout(startBuffer, 500);
    }
  };

  //display current video play time
  vid.on("timeupdate", function () {
    var currentPos = vid[0].currentTime;
    var maxduration = vid[0].duration;
    var perc = (100 * currentPos) / maxduration;
    $(".timeBar").css("width", perc + "%");
    $(".current").text(timeFormat(currentPos));
  });

  //CONTROLS EVENTS
  //video screen and play button clicked
  vid.on("click", function () {
    playpause();
  });
  $(".btnPlay").on("click", function () {
    playpause();
  });
  var playpause = function () {
    if (vid[0].paused || vid[0].ended) {
      $(".btnPlay").addClass("paused");
      vid[0].play();
    } else {
      $(".btnPlay").removeClass("paused");
      vid[0].pause();
    }
  };

  //VIDEO PROGRESS BAR
  //when video timebar clicked
  var timeDrag = false; /* check for drag event */
  $(".progress").on("mousedown", function (e) {
    timeDrag = true;
    updatebar(e.pageX);
  });
  $(document).on("mouseup", function (e) {
    if (timeDrag) {
      timeDrag = false;
      updatebar(e.pageX);
    }
  });
  $(document).on("mousemove", function (e) {
    if (timeDrag) {
      updatebar(e.pageX);
    }
  });
  var updatebar = function (x) {
    var progress = $(".progress");

    //calculate drag position
    //and update video currenttime
    //as well as progress bar
    var maxduration = vid[0].duration;
    var position = x - progress.offset().left;
    var percentage = (100 * position) / progress.width();
    if (percentage > 100) {
      percentage = 100;
    }
    if (percentage < 0) {
      percentage = 0;
    }
    $(".timeBar").css("width", percentage + "%");
    vid[0].currentTime = (maxduration * percentage) / 100;
  };
  //sound button clicked
  $(".sound").click(function () {
    vid[0].muted = !vid[0].muted;
    $(this).toggleClass("muted");
    if (vid[0].muted) {
      $(".volumeBar").css("width", 0);
    } else {
      $(".volumeBar").css("width", vid[0].volume * 100 + "%");
    }
  });

  //VOLUME BAR
  //volume bar event
  var volumeDrag = false;
  $(".volume").on("mousedown", function (e) {
    volumeDrag = true;
    vid[0].muted = false;
    $(".sound").removeClass("muted");
    updateVolume(e.pageX);
  });
  $(document).on("mouseup", function (e) {
    if (volumeDrag) {
      volumeDrag = false;
      updateVolume(e.pageX);
    }
  });
  $(document).on("mousemove", function (e) {
    if (volumeDrag) {
      updateVolume(e.pageX);
    }
  });
  var updateVolume = function (x, vol) {
    var volume = $(".volume");
    var percentage;
    //if only volume have specificed
    //then direct update volume
    if (vol) {
      percentage = vol * 100;
    } else {
      var position = x - volume.offset().left;
      percentage = (100 * position) / volume.width();
    }

    if (percentage > 100) {
      percentage = 100;
    }
    if (percentage < 0) {
      percentage = 0;
    }

    //update volume bar and video volume
    $(".volumeBar").css("width", percentage + "%");
    vid[0].volume = percentage / 100;

    //change sound icon based on volume
    if (vid[0].volume == 0) {
      $(".sound").removeClass("sound2").addClass("muted");
    } else if (vid[0].volume > 0.5) {
      $(".sound").removeClass("muted").addClass("sound2");
    } else {
      $(".sound").removeClass("muted").removeClass("sound2");
    }
  };

  //speed text clicked
  $(".spdx50").on("click", function () {
    fastfowrd(this, 1.5);
  });
  $(".spdx25").on("click", function () {
    fastfowrd(this, 1.25);
  });
  $(".spdx1").on("click", function () {
    fastfowrd(this, 1);
  });
  $(".spdx050").on("click", function () {
    fastfowrd(this, 0.5);
  });
  var fastfowrd = function (obj, spd) {
    $(".speedcnt li").removeClass("selected");
    $(obj).addClass("selected");
    vid[0].playbackRate = spd;
    vid[0].play();
    $("ul.speedcnt").fadeOut("fast");
    $(".btnPlay").addClass("paused");
  };
  $(".btnspeed").click(function () {
    $("ul.speedcnt").slideToggle(100);
  });

  //fullscreen button clicked
  $(".btnFS").on("click", function () {
    if ($.isFunction(vid[0].webkitEnterFullscreen)) {
      vid[0].webkitEnterFullscreen();
    } else if ($.isFunction(vid[0].mozRequestFullScreen)) {
      vid[0].mozRequestFullScreen();
    } else {
      alert("Your browsers doesn't support fullscreen");
    }
  });

  //light bulb button clicked
  $(".btnLight").click(function () {
    $(this).toggleClass("lighton");

    //if lightoff, create an overlay
    if (!$(this).hasClass("lighton")) {
      $("body").append('<div class="overlay"></div>');
      $(".overlay").css({
        position: "absolute",
        width: 100 + "%",
        height: $(document).height(),
        background: "#000",
        opacity: 0.9,
        top: 0,
        left: 0,
        "z-index": 999,
      });
      $(".vidcontainer").css({
        "z-index": 1000,
      });
    }
    //if lighton, remove overlay
    else {
      $(".overlay").remove();
    }
  });

  //hide pause button if video onplaying
  //if (vid.onplaying = true) { $('.btnPlay').addClass('paused'); };

  //previous video button
  $(".prevvid").click(function () {
    $(vid).attr("src", $(".playing").prev().attr("href"));
    vid[0].play();
    $(".playing").prev().addClass("playing");
    $(".playing:last").removeClass("playing");
    $(".btnPlay").addClass("paused");
    $(".nextvid").removeClass("disabled");
    if ($("a.link:first").hasClass("playing")) {
      $(this).addClass("disabled");
    } else {
      $(this).removeClass("disabled");
    }
  });

  //previous video button
  $(".nextvid").click(function () {
    $(vid).attr("src", $(".playing").next().attr("href"));
    vid[0].play();
    $(".playing").next().addClass("playing");
    $(".playing:first").removeClass("playing");
    $(".btnPlay").addClass("paused");
    $(".prevvid").removeClass("disabled");
    if ($("a.link:last").hasClass("playing")) {
      $(this).addClass("disabled");
    } else {
      $(this).removeClass("disabled");
    }
  });

  //Time format converter - 00:00
  var timeFormat = function (seconds) {
    var m =
      Math.floor(seconds / 60) < 10
        ? "0" + Math.floor(seconds / 60)
        : Math.floor(seconds / 60);
    var s =
      Math.floor(seconds - m * 60) < 10
        ? "0" + Math.floor(seconds - m * 60)
        : Math.floor(seconds - m * 60);
    return m + ":" + s;
  };
  $(".closeme , .bigplay").click(function () {
    $("this,.ads,.bigplay").fadeOut(200);
    vid[0].play();
    $(".btnPlay").addClass("paused");
  });
  //end
});

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data("display");
          s.find("ul").append(
            e("<li></li>")
              .attr("data-value", n.val())
              .attr("data-display", i || null)
              .addClass(
                "option" +
                  (n.is(":selected") ? " selected" : "") +
                  (n.is(":disabled") ? " disabled" : "")
              )
              .html(n.text())
          );
        });
    }
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
              n.length && (n.remove(), s(t), i && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"))
            : s.focus();
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            n = s.closest(".nice-select");
          n.find(".selected").removeClass("selected"), s.addClass("selected");
          var i = s.data("display") || s.text();
          n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change");
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var i = n.nextAll(".option:not(.disabled)").first();
            i.length > 0 &&
              (s.find(".focus").removeClass("focus"), i.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var l = n.prevAll(".option:not(.disabled)").first();
            l.length > 0 &&
              (s.find(".focus").removeClass("focus"), l.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var n = document.createElement("a").style;
    return (
      (n.cssText = "pointer-events:auto"),
      "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);

$(function () {
  // Get the form.
  var form = $("#contact-form");

  // Get the messages div.
  var formMessages = $(".form-message");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $("#contact-form input,#contact-form textarea").val("");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occured and your message could not be sent."
          );
        }
      });
  });
});
