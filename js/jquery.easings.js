/*! jQuery UI - v1.9.2 - 2014-03-21
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

jQuery.effects || function (e, t) {
    var i = e.uiBackCompat !== !1, a = "ui-effects-";
    e.effects = {effect: {}}, function (t, i) {
        function a(e, t, i) {
            var a = c[t.type] || {};
            return null == e ? i || !t.def ? null : t.def : (e = a.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : a.mod ? (e + a.mod) % a.mod : 0 > e ? 0 : e > a.max ? a.max : e)
        }

        function s(e) {
            var a = u(), s = a._rgba = [];
            return e = e.toLowerCase(), m(l, function (t, n) {
                var r, o = n.re.exec(e), h = o && n.parse(o), l = n.space || "rgba";
                return h ? (r = a[l](h), a[d[l].cache] = r[d[l].cache], s = a._rgba = r._rgba, !1) : i
            }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, r.transparent), a) : r[e]
        }

        function n(e, t, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
        }

        var r,
            o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
            h = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }], u = t.Color = function (e, i, a, s) {
                return new t.Color.fn.parse(e, i, a, s)
            }, d = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, c = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, p = u.support = {},
            f = t("<p>")[0], m = t.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = f.style.backgroundColor.indexOf("rgba") > -1, m(d, function (e, t) {
            t.cache = "_" + e, t.props.alpha = {idx: 3, type: "percent", def: 1}
        }), u.fn = t.extend(u.prototype, {
            parse: function (n, o, h, l) {
                if (n === i) return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = t(n).css(o), o = i);
                var c = this, p = t.type(n), f = this._rgba = [];
                return o !== i && (n = [n, o, h, l], p = "array"), "string" === p ? this.parse(s(n) || r._default) : "array" === p ? (m(d.rgba.props, function (e, t) {
                    f[t.idx] = a(n[t.idx], t)
                }), this) : "object" === p ? (n instanceof u ? m(d, function (e, t) {
                    n[t.cache] && (c[t.cache] = n[t.cache].slice())
                }) : m(d, function (t, i) {
                    var s = i.cache;
                    m(i.props, function (e, t) {
                        if (!c[s] && i.to) {
                            if ("alpha" === e || null == n[e]) return;
                            c[s] = i.to(c._rgba)
                        }
                        c[s][t.idx] = a(n[e], t, !0)
                    }), c[s] && 0 > e.inArray(null, c[s].slice(0, 3)) && (c[s][3] = 1, i.from && (c._rgba = i.from(c[s])))
                }), this) : i
            }, is: function (e) {
                var t = u(e), a = !0, s = this;
                return m(d, function (e, n) {
                    var r, o = t[n.cache];
                    return o && (r = s[n.cache] || n.to && n.to(s._rgba) || [], m(n.props, function (e, t) {
                        return null != o[t.idx] ? a = o[t.idx] === r[t.idx] : i
                    })), a
                }), a
            }, _space: function () {
                var e = [], t = this;
                return m(d, function (i, a) {
                    t[a.cache] && e.push(i)
                }), e.pop()
            }, transition: function (e, t) {
                var i = u(e), s = i._space(), n = d[s], r = 0 === this.alpha() ? u("transparent") : this,
                    o = r[n.cache] || n.to(r._rgba), h = o.slice();
                return i = i[n.cache], m(n.props, function (e, s) {
                    var n = s.idx, r = o[n], l = i[n], u = c[s.type] || {};
                    null !== l && (null === r ? h[n] = l : (u.mod && (l - r > u.mod / 2 ? r += u.mod : r - l > u.mod / 2 && (r -= u.mod)), h[n] = a((l - r) * t + r, s)))
                }), this[s](h)
            }, blend: function (e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), a = i.pop(), s = u(e)._rgba;
                return u(t.map(i, function (e, t) {
                    return (1 - a) * s[t] + a * e
                }))
            }, toRgbaString: function () {
                var e = "rgba(", i = t.map(this._rgba, function (e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            }, toHslaString: function () {
                var e = "hsla(", i = t.map(this.hsla(), function (e, t) {
                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            }, toHexString: function (e) {
                var i = this._rgba.slice(), a = i.pop();
                return e && i.push(~~(255 * a)), "#" + t.map(i, function (e) {
                    return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), u.fn.parse.prototype = u.fn, d.hsla.to = function (e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t, i, a = e[0] / 255, s = e[1] / 255, n = e[2] / 255, r = e[3], o = Math.max(a, s, n),
                h = Math.min(a, s, n), l = o - h, u = o + h, d = .5 * u;
            return t = h === o ? 0 : a === o ? 60 * (s - n) / l + 360 : s === o ? 60 * (n - a) / l + 120 : 60 * (a - s) / l + 240, i = 0 === d || 1 === d ? d : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == r ? 1 : r]
        }, d.hsla.from = function (e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t = e[0] / 360, i = e[1], a = e[2], s = e[3], r = .5 >= a ? a * (1 + i) : a + i - a * i, o = 2 * a - r;
            return [Math.round(255 * n(o, r, t + 1 / 3)), Math.round(255 * n(o, r, t)), Math.round(255 * n(o, r, t - 1 / 3)), s]
        }, m(d, function (e, s) {
            var n = s.props, r = s.cache, o = s.to, l = s.from;
            u.fn[e] = function (e) {
                if (o && !this[r] && (this[r] = o(this._rgba)), e === i) return this[r].slice();
                var s, h = t.type(e), d = "array" === h || "object" === h ? e : arguments, c = this[r].slice();
                return m(n, function (e, t) {
                    var i = d["object" === h ? e : t.idx];
                    null == i && (i = c[t.idx]), c[t.idx] = a(i, t)
                }), l ? (s = u(l(c)), s[r] = c, s) : u(c)
            }, m(n, function (i, a) {
                u.fn[i] || (u.fn[i] = function (s) {
                    var n, r = t.type(s), o = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e, l = this[o](),
                        u = l[a.idx];
                    return "undefined" === r ? u : ("function" === r && (s = s.call(this, u), r = t.type(s)), null == s && a.empty ? this : ("string" === r && (n = h.exec(s), n && (s = u + parseFloat(n[2]) * ("+" === n[1] ? 1 : -1))), l[a.idx] = s, this[o](l)))
                })
            })
        }), m(o, function (e, i) {
            t.cssHooks[i] = {
                set: function (e, a) {
                    var n, r, o = "";
                    if ("string" !== t.type(a) || (n = s(a))) {
                        if (a = u(n || a), !p.rgba && 1 !== a._rgba[3]) {
                            for (r = "backgroundColor" === i ? e.parentNode : e; ("" === o || "transparent" === o) && r && r.style;) try {
                                o = t.css(r, "backgroundColor"), r = r.parentNode
                            } catch (h) {
                            }
                            a = a.blend(o && "transparent" !== o ? o : "_default")
                        }
                        a = a.toRgbaString()
                    }
                    try {
                        e.style[i] = a
                    } catch (l) {
                    }
                }
            }, t.fx.step[i] = function (e) {
                e.colorInit || (e.start = u(e.elem, i), e.end = u(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
            }
        }), t.cssHooks.borderColor = {
            expand: function (e) {
                var t = {};
                return m(["Top", "Right", "Bottom", "Left"], function (i, a) {
                    t["border" + a + "Color"] = e
                }), t
            }
        }, r = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function () {
        function i() {
            var t, i,
                a = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                s = {};
            if (a && a.length && a[0] && a[a[0]]) for (i = a.length; i--;) t = a[i], "string" == typeof a[t] && (s[e.camelCase(t)] = a[t]); else for (t in a) "string" == typeof a[t] && (s[t] = a[t]);
            return s
        }

        function a(t, i) {
            var a, s, r = {};
            for (a in i) s = i[a], t[a] !== s && (n[a] || (e.fx.step[a] || !isNaN(parseFloat(s))) && (r[a] = s));
            return r
        }

        var s = ["add", "remove", "toggle"], n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
            e.fx.step[i] = function (e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, i, e.end), e.setAttr = !0)
            }
        }), e.effects.animateClass = function (t, n, r, o) {
            var h = e.speed(n, r, o);
            return this.queue(function () {
                var n, r = e(this), o = r.attr("class") || "", l = h.children ? r.find("*").andSelf() : r;
                l = l.map(function () {
                    var t = e(this);
                    return {el: t, start: i.call(this)}
                }), n = function () {
                    e.each(s, function (e, i) {
                        t[i] && r[i + "Class"](t[i])
                    })
                }, n(), l = l.map(function () {
                    return this.end = i.call(this.el[0]), this.diff = a(this.start, this.end), this
                }), r.attr("class", o), l = l.map(function () {
                    var t = this, i = e.Deferred(), a = jQuery.extend({}, h, {
                        queue: !1, complete: function () {
                            i.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, a), i.promise()
                }), e.when.apply(e, l.get()).done(function () {
                    n(), e.each(arguments, function () {
                        var t = this.el;
                        e.each(this.diff, function (e) {
                            t.css(e, "")
                        })
                    }), h.complete.call(r[0])
                })
            })
        }, e.fn.extend({
            _addClass: e.fn.addClass, addClass: function (t, i, a, s) {
                return i ? e.effects.animateClass.call(this, {add: t}, i, a, s) : this._addClass(t)
            }, _removeClass: e.fn.removeClass, removeClass: function (t, i, a, s) {
                return i ? e.effects.animateClass.call(this, {remove: t}, i, a, s) : this._removeClass(t)
            }, _toggleClass: e.fn.toggleClass, toggleClass: function (i, a, s, n, r) {
                return "boolean" == typeof a || a === t ? s ? e.effects.animateClass.call(this, a ? {add: i} : {remove: i}, s, n, r) : this._toggleClass(i, a) : e.effects.animateClass.call(this, {toggle: i}, a, s, n)
            }, switchClass: function (t, i, a, s, n) {
                return e.effects.animateClass.call(this, {add: i, remove: t}, a, s, n)
            }
        })
    }(), function () {
        function s(t, i, a, s) {
            return e.isPlainObject(t) && (i = t, t = t.effect), t = {effect: t}, null == i && (i = {}), e.isFunction(i) && (s = i, a = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = a, a = i, i = {}), e.isFunction(a) && (s = a, a = null), i && e.extend(t, i), a = a || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof a ? a : a in e.fx.speeds ? e.fx.speeds[a] : e.fx.speeds._default, t.complete = s || i.complete, t
        }

        function n(t) {
            return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? !1 : i && e.effects[t] ? !1 : !0
        }

        e.extend(e.effects, {
            version: "1.9.2", save: function (e, t) {
                for (var i = 0; t.length > i; i++) null !== t[i] && e.data(a + t[i], e[0].style[t[i]])
            }, restore: function (e, i) {
                var s, n;
                for (n = 0; i.length > n; n++) null !== i[n] && (s = e.data(a + i[n]), s === t && (s = ""), e.css(i[n], s))
            }, setMode: function (e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
            }, getBaseline: function (e, t) {
                var i, a;
                switch (e[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = e[0] / t.height
                }
                switch (e[1]) {
                    case"left":
                        a = 0;
                        break;
                    case"center":
                        a = .5;
                        break;
                    case"right":
                        a = 1;
                        break;
                    default:
                        a = e[1] / t.width
                }
                return {x: a, y: i}
            }, createWrapper: function (t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var i = {width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float")},
                    a = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), s = {width: t.width(), height: t.height()}, n = document.activeElement;
                try {
                    n.id
                } catch (r) {
                    n = document.body
                }
                return t.wrap(a), (t[0] === n || e.contains(t[0], n)) && e(n).focus(), a = t.parent(), "static" === t.css("position") ? (a.css({position: "relative"}), t.css({position: "relative"})) : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function (e, a) {
                    i[a] = t.css(a), isNaN(parseInt(i[a], 10)) && (i[a] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(s), a.css(i).show()
            }, removeWrapper: function (t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
            }, setTransition: function (t, i, a, s) {
                return s = s || {}, e.each(i, function (e, i) {
                    var n = t.cssUnit(i);
                    n[0] > 0 && (s[i] = n[0] * a + n[1])
                }), s
            }
        }), e.fn.extend({
            effect: function () {
                function t(t) {
                    function i() {
                        e.isFunction(n) && n.call(s[0]), e.isFunction(t) && t()
                    }

                    var s = e(this), n = a.complete, r = a.mode;
                    (s.is(":hidden") ? "hide" === r : "show" === r) ? i() : o.call(s[0], a, i)
                }

                var a = s.apply(this, arguments), n = a.mode, r = a.queue, o = e.effects.effect[a.effect],
                    h = !o && i && e.effects[a.effect];
                return e.fx.off || !o && !h ? n ? this[n](a.duration, a.complete) : this.each(function () {
                    a.complete && a.complete.call(this)
                }) : o ? r === !1 ? this.each(t) : this.queue(r || "fx", t) : h.call(this, {
                    options: a,
                    duration: a.duration,
                    callback: a.complete,
                    mode: a.mode
                })
            }, _show: e.fn.show, show: function (e) {
                if (n(e)) return this._show.apply(this, arguments);
                var t = s.apply(this, arguments);
                return t.mode = "show", this.effect.call(this, t)
            }, _hide: e.fn.hide, hide: function (e) {
                if (n(e)) return this._hide.apply(this, arguments);
                var t = s.apply(this, arguments);
                return t.mode = "hide", this.effect.call(this, t)
            }, __toggle: e.fn.toggle, toggle: function (t) {
                if (n(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                var i = s.apply(this, arguments);
                return i.mode = "toggle", this.effect.call(this, i)
            }, cssUnit: function (t) {
                var i = this.css(t), a = [];
                return e.each(["em", "px", "%", "pt"], function (e, t) {
                    i.indexOf(t) > 0 && (a = [parseFloat(i), t])
                }), a
            }
        })
    }(), function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
            t[i] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }, Circ: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            }, Elastic: function (e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            }, Back: function (e) {
                return e * e * (3 * e - 2)
            }, Bounce: function (e) {
                for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e;) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }), e.each(t, function (t, i) {
            e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                return 1 - i(1 - e)
            }, e.easing["easeInOut" + t] = function (e) {
                return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
            }
        })
    }()
}(jQuery);