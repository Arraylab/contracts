/*! For license information please see LICENSES */
webpackJsonp([3], {
  "21It": function (t, n, e) {
    "use strict";
    var a = e("FtD3");
    t.exports = function (t, n, e) {
      var r = e.config.validateStatus;
      e.status && r && !r(e.status) ? n(a("Request failed with status code " + e.status, e.config, null, e.request, e)) : t(e)
    }
  }, "53xx": function (t, n, e) {
    var a = e("Cm2g");
    "string" == typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
    (0, e("rjj0").default)("57ca64d1", a, !1, {sourceMap: !1})
  }, "5VQ+": function (t, n, e) {
    "use strict";
    var a = e("cGG2");
    t.exports = function (t, n) {
      a.forEach(t, function (e, a) {
        a !== n && a.toUpperCase() === n.toUpperCase() && (t[n] = e, delete t[a])
      })
    }
  }, "7+ql": function (t, n, e) {
    var a = e("O1Kc");
    "string" == typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
    (0, e("rjj0").default)("7fcdc331", a, !1, {sourceMap: !1})
  }, "7GwW": function (t, n, e) {
    "use strict";
    var a = e("cGG2"), r = e("21It"), i = e("DQCr"), o = e("oJlt"), s = e("GHBc"), c = e("FtD3"),
      l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || e("thJu");
    t.exports = function (t) {
      return new Promise(function (n, p) {
        var u = t.data, d = t.headers;
        a.isFormData(u) && delete d["Content-Type"];
        var f = new XMLHttpRequest, b = "onreadystatechange", m = !1;
        if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || s(t.url) || (f = new window.XDomainRequest, b = "onload", m = !0, f.onprogress = function () {
        }, f.ontimeout = function () {
        }), t.auth) {
          var g = t.auth.username || "", h = t.auth.password || "";
          d.Authorization = "Basic " + l(g + ":" + h)
        }
        if (f.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0), f.timeout = t.timeout, f[b] = function () {
          if (f && (4 === f.readyState || m) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
            var e = "getAllResponseHeaders" in f ? o(f.getAllResponseHeaders()) : null, a = {
              data: t.responseType && "text" !== t.responseType ? f.response : f.responseText,
              status: 1223 === f.status ? 204 : f.status,
              statusText: 1223 === f.status ? "No Content" : f.statusText,
              headers: e,
              config: t,
              request: f
            };
            r(n, p, a), f = null
          }
        }, f.onerror = function () {
          p(c("Network Error", t, null, f)), f = null
        }, f.ontimeout = function () {
          p(c("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", f)), f = null
        }, a.isStandardBrowserEnv()) {
          var x = e("p1b6"),
            v = (t.withCredentials || s(t.url)) && t.xsrfCookieName ? x.read(t.xsrfCookieName) : void 0;
          v && (d[t.xsrfHeaderName] = v)
        }
        if ("setRequestHeader" in f && a.forEach(d, function (t, n) {
          void 0 === u && "content-type" === n.toLowerCase() ? delete d[n] : f.setRequestHeader(n, t)
        }), t.withCredentials && (f.withCredentials = !0), t.responseType) try {
          f.responseType = t.responseType
        } catch (n) {
          if ("json" !== t.responseType) throw n
        }
        "function" == typeof t.onDownloadProgress && f.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && f.upload && f.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function (t) {
          f && (f.abort(), p(t), f = null)
        }), void 0 === u && (u = null), f.send(u)
      })
    }
  }, "7pyN": function (t, n, e) {
    (t.exports = e("FZ+f")(!1)).push([t.i, "\n.ranking-table-comp {\n  background-color: #1c233f;\n  position: relative;\n  border-radius: 2px;\n  overflow: hidden;\n  top: 7px;\n  z-index: 3;\n  margin: -17px auto 0;\n}\n.ranking-table-comp h2 {\n  text-align: center;\n  color: #fff;\n  font-size: 19px;\n  padding: 19px 0;\n  margin: 0;\n}\n.ranking-table-comp > ul.table-list.data {\n  height: 500px;\n  overflow-y: auto;\n}\n.ranking-table-comp > ul.table-list.data::-webkit-scrollbar {\n  width: 9px;\n  height: 9px;\n}\n.ranking-table-comp > ul.table-list.data::-webkit-scrollbar-track-piece {\n  background-color: #1c233f;\n}\n.ranking-table-comp > ul.table-list.data::-webkit-scrollbar-thumb {\n  background-color: #3c4771;\n  background-clip: padding-box;\n  min-height: 28px;\n  border-radius: 4px;\n}\n.ranking-table-comp > ul.table-list.data#is-dice {\n  height: 302px;\n}\n.ranking-table-comp > ul.table-list.user {\n  padding-top: 6px;\n  padding-right: 22px;\n}\n.ranking-table-comp > ul.table-list,\n.ranking-table-comp > ul.table-header {\n  margin: 0;\n  padding: 0 0px;\n}\n.ranking-table-comp > ul.table-list li,\n.ranking-table-comp > ul.table-header li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a2a4a6;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-bottom: 5px;\n  border-radius: 3px;\n  height: 45px;\n  padding-left: 7px;\n}\n.ranking-table-comp > ul.table-list li span,\n.ranking-table-comp > ul.table-header li span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 0 5px;\n  color: #bebec3;\n  max-width: 190px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ranking-table-comp > ul.table-list li span:first-child,\n.ranking-table-comp > ul.table-header li span:first-child {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 52px;\n          flex: 0 0 52px;\n}\n.ranking-table-comp > ul.table-list li.items,\n.ranking-table-comp > ul.table-header li.items {\n  border-bottom: 1px solid #343852;\n}\n.ranking-table-comp > ul.table-list li.items span:first-child,\n.ranking-table-comp > ul.table-header li.items span:first-child {\n  height: 48px;\n  line-height: 48px;\n  font-weight: 600;\n  text-align: center;\n  font-size: 15px;\n  color: #ddd;\n  background: url(/img/top0.png) 9px 4px no-repeat;\n  margin-left: 15px;\n}\n.ranking-table-comp > ul.table-list li.top1 span:first-child,\n.ranking-table-comp > ul.table-header li.top1 span:first-child {\n  background: url(/img/top1.png) 4px 4px no-repeat;\n}\n.ranking-table-comp > ul.table-list li.top2 span:first-child,\n.ranking-table-comp > ul.table-header li.top2 span:first-child {\n  background: url(/img/top2.png) 4px 4px no-repeat;\n}\n.ranking-table-comp > ul.table-list li.top3 span:first-child,\n.ranking-table-comp > ul.table-header li.top3 span:first-child {\n  background: url(/img/top3.png) 4px 4px no-repeat;\n}\n.ranking-table-comp > ul.table-list li.top1 span:first-child,\n.ranking-table-comp > ul.table-header li.top1 span:first-child,\n.ranking-table-comp > ul.table-list li.top2 span:first-child,\n.ranking-table-comp > ul.table-header li.top2 span:first-child,\n.ranking-table-comp > ul.table-list li.top3 span:first-child,\n.ranking-table-comp > ul.table-header li.top3 span:first-child {\n  color: transparent;\n  height: 48px;\n}\n.ranking-table-comp > ul.table-list li.t-header,\n.ranking-table-comp > ul.table-header li.t-header {\n  background: #222847;\n}\n.ranking-table-comp > ul.table-list li.t-header span,\n.ranking-table-comp > ul.table-header li.t-header span {\n  color: #fff;\n}\n.ranking-table-comp > ul.table-list li.items.user,\n.ranking-table-comp > ul.table-header li.items.user {\n  background: #212a4b;\n  height: 58px;\n}\n.ranking-table-comp .btn-ctrl {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n.ranking-table-comp div.flag {\n  width: 97px;\n  height: 97px;\n  background: url(/img/flag_ranking.png) no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ranking-table-comp div.flag .msg {\n  color: #fff;\n  -webkit-transform: rotate(-45deg) translate(-22%, -25%);\n          transform: rotate(-45deg) translate(-22%, -25%);\n}\n.ranking-table-comp div.flag .msg p {\n  margin: 0;\n  text-align: center;\n  font-size: 12px;\n}\n.ranking-table-comp div.flag .msg p:first-child {\n  font-weight: 600;\n  font-size: 19px;\n}\n@media screen and (max-width: 500px) {\n.ranking-table-comp h2 .fa {\n    display: none;\n}\n.ranking-table-comp > ul.table-list,\n  .ranking-table-comp > ul.table-header {\n    padding-right: 6px;\n}\n.ranking-table-comp > ul.table-list.user {\n    padding-right: 15px;\n}\n.ranking-table-comp h2 {\n    text-align: center;\n    color: #fff;\n    font-size: 16px;\n    padding: 19px 0;\n    margin: 0;\n}\n.ranking-table-comp span.mobile-hid {\n    display: none;\n}\n}\n", ""])
  }, "9hVS": function (t, n, e) {
    (t.exports = e("FZ+f")(!1)).push([t.i, '\n.game-comp-dice[data-v-4bb3f238] {\n  background: url(/img/bg_77.jpg) center 0px no-repeat;\n  background-color: #161933;\n  min-height: 800px;\n  padding-bottom: 50px;\n}\n.game-comp-dice .center-view[data-v-4bb3f238] {\n  max-width: 1180px;\n  margin: 0 auto;\n  position: relative;\n}\n.game-comp-dice .center-view .ranking-container[data-v-4bb3f238] {\n  position: absolute;\n  top: 20px;\n  right: 0px;\n  width: 500px;\n}\n.game-comp-dice .ctrl-board[data-v-4bb3f238] {\n  max-width: 650px;\n  padding: 28px 0 50px;\n  color: #ffffff;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.game-comp-dice .ctrl-board .tab-btns[data-v-4bb3f238] {\n  text-align: center;\n  padding: 6px 0 18px;\n}\n.game-comp-dice .ctrl-board .tab-btns button[data-v-4bb3f238] {\n  background-repeat: no-repeat;\n  background-position-x: 10px;\n  background-position-y: center;\n  background-size: 20px;\n  padding: 6px 15px ;\n  padding-left: 34px;\n  border-radius: 6px;\n  margin: 0 5px;\n  background-color: #252e51;\n  color: #fff;\n}\n.game-comp-dice .ctrl-board .tab-btns button.active[data-v-4bb3f238] {\n  background-color: #f1940f;\n}\n.game-comp-dice .ctrl-board > ul.row-1[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2[data-v-4bb3f238] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 15px;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 > li[data-v-4bb3f238] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li > ol[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 > li > ol[data-v-4bb3f238] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: #1c233f;\n  font-size: 14px;\n  padding: 4px;\n  border-radius: 3px;\n  height: 44px;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li > ol > li[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 > li > ol > li[data-v-4bb3f238] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  line-height: 36px;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li > ol > li.first[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 > li > ol > li.first[data-v-4bb3f238] {\n  -webkit-box-flex: 3.6;\n      -ms-flex: 3.6;\n          flex: 3.6;\n  border-radius: 3px;\n  padding-left: 40px;\n  padding-right: 50px;\n  background-color: #3b435c;\n  margin-right: 2px;\n  position: relative;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li > ol > li.first input[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 > li > ol > li.first input[data-v-4bb3f238] {\n  width: 100%;\n  height: 98%;\n  background-color: transparent;\n  text-align: center;\n  border: none;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li > ol > li.first span[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 > li > ol > li.first span[data-v-4bb3f238] {\n  position: absolute;\n  right: 6px;\n  top: 3px;\n  font-size: 0.7em;\n  text-align: right;\n  color: #999;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li > ol > li.btns[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 > li > ol > li.btns[data-v-4bb3f238] {\n  cursor: pointer;\n  border-radius: 3px;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li > ol > li.btns[data-v-4bb3f238]:hover,\n.game-comp-dice .ctrl-board > ul.row-2 > li > ol > li.btns[data-v-4bb3f238]:hover {\n  background-color: #3c435b;\n  text-shadow: 0 0 5px #fff;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li[data-v-4bb3f238]:first-child,\n.game-comp-dice .ctrl-board > ul.row-2 > li[data-v-4bb3f238]:first-child {\n  -webkit-box-flex: 1.2;\n      -ms-flex: 1.2;\n          flex: 1.2;\n  margin-right: 2.2%;\n}\n.game-comp-dice .ctrl-board > ul.row-1 div.title[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 div.title[data-v-4bb3f238] {\n  font-size: 13px;\n  color: #898a8c;\n}\n.game-comp-dice .ctrl-board > ul.row-1 div.title.one[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 div.title.one[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-1 div.title.two[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 div.title.two[data-v-4bb3f238] {\n  padding: 7px 0 4px;\n  padding-left: 33px;\n}\n.game-comp-dice .ctrl-board > ul.row-1 div.title.one[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 div.title.one[data-v-4bb3f238] {\n  background: url(/img/round2.png) 5px center no-repeat;\n}\n.game-comp-dice .ctrl-board > ul.row-1 div.title.two[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 div.title.two[data-v-4bb3f238] {\n  background: url(/img/goldcoin.png) 5px center no-repeat;\n}\n.game-comp-dice .ctrl-board > ul.row-1 .tokens-icon[data-v-4bb3f238],\n.game-comp-dice .ctrl-board > ul.row-2 .tokens-icon[data-v-4bb3f238] {\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: 10px center;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li[data-v-4bb3f238]:first-child {\n  -webkit-box-flex: 1.5;\n      -ms-flex: 1.5;\n          flex: 1.5;\n}\n.game-comp-dice .ctrl-board > ul.row-2[data-v-4bb3f238] {\n  background-color: #1c233f;\n  padding: 25px 0;\n  border-radius: 3px;\n  text-align: center;\n}\n.game-comp-dice .ctrl-board > ul.row-2 .content[data-v-4bb3f238] {\n  font-size: 34px;\n  font-weight: 600;\n}\n.game-comp-dice .ctrl-board li.add-line[data-v-4bb3f238] {\n  position: relative;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n.game-comp-dice .ctrl-board li.add-line[data-v-4bb3f238]:after,\n.game-comp-dice .ctrl-board li.add-line[data-v-4bb3f238]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  background-color: #181e3a;\n  width: 1px;\n  height: 18px;\n  top: 9px;\n}\n.game-comp-dice .ctrl-board li.add-line[data-v-4bb3f238]:after {\n  left: -1px;\n}\n.game-comp-dice .ctrl-board li.add-line[data-v-4bb3f238]:before {\n  right: -1px;\n}\n.game-comp-dice .ctrl-board > ul.row-2 li.add-line[data-v-4bb3f238]:after,\n.game-comp-dice .ctrl-board > ul.row-2 li.add-line[data-v-4bb3f238]:before {\n  height: 55px;\n  top: 5px;\n}\n.game-comp-dice .ctrl-board .min50 > i[data-v-4bb3f238] {\n  display: inline-block;\n  width: 12px;\n  height: 16px;\n  background: url(/img/xiajiantou.png) 0px 0px no-repeat;\n  position: relative;\n  top: 1px;\n}\n.game-comp-dice .ctrl-board .btn-bar[data-v-4bb3f238] {\n  position: relative;\n}\n.game-comp-dice .ctrl-board .btn-bar .current-eos[data-v-4bb3f238] {\n  position: absolute;\n  left: 0px;\n  font-size: 22px;\n  font-weight: 600;\n  top: 2%;\n  padding: 7px 0;\n  padding-left: 36px;\n  background-repeat: no-repeat;\n  background-position: 4px center;\n  background-size: 34px;\n}\n.game-comp-dice .ctrl-board .btn-bar .current-eos .move-num[data-v-4bb3f238] {\n  position: absolute;\n  top: 80px;\n  left: 42px;\n  color: lime;\n  font-size: 22px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  display: none;\n}\n.game-comp-dice .ctrl-board .btn-bar .current-eos.dice[data-v-4bb3f238] {\n  left: auto;\n  right: 0px;\n  padding-left: 35px;\n}\n.game-comp-dice .ctrl-board .btn-bar .current-eos.dice i[data-v-4bb3f238] {\n  color: #6a6a6a;\n  cursor: pointer;\n}\n.game-comp-dice .ctrl-board .btn-bar .current-eos.dice i[data-v-4bb3f238]:hover {\n  color: #aaa;\n}\n.game-comp-dice .ctrl-board .btn-bar button[data-v-4bb3f238] {\n  display: block;\n  margin: 0 auto;\n  min-width: 132px;\n  height: 48px;\n  line-height: 46px;\n  background-color: #28b6e4;\n  border: none;\n  border-radius: 6px;\n  padding: 0 5px;\n  font-size: 18px;\n  font-weight: 600;\n  overflow: hidden;\n}\n.game-comp-dice .ctrl-board .btn-bar button[data-v-4bb3f238]:hover {\n  background-color: #20abd7;\n}\n.game-comp-dice .ctrl-board .btn-bar button.login[data-v-4bb3f238] {\n  border-radius: 23px;\n}\n.game-comp-dice .ctrl-board .loading-cover[data-v-4bb3f238] {\n  position: absolute;\n  width: 110%;\n  height: 100%;\n  z-index: 9;\n  top: 0;\n  left: -5%;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(23, 26, 51, .88)), color-stop(rgba(23, 26, 51, .98)), color-stop(rgba(23, 26, 51, .98)), to(rgba(23, 26, 51, .88)));\n  background: linear-gradient(to right, rgba(23, 26, 51, .88), rgba(23, 26, 51, .98), rgba(23, 26, 51, .98), rgba(23, 26, 51, .88));\n}\n.game-comp-dice .ctrl-board .loading-cover ul[data-v-4bb3f238] {\n  width: 220px;\n  height: 220px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -110px;\n  margin-left: -110px;\n}\n.game-comp-dice .ctrl-board .loading-cover ul li[data-v-4bb3f238] {\n  color: #fff;\n  font-size: 22px;\n  font-weight: 600;\n  padding: 2px 0;\n  text-align: center;\n}\n.game-comp-dice .ctrl-board .loading-cover ul li[data-v-4bb3f238]:first-child {\n  width: 112px;\n  height: 91px;\n  background: url(/img/loading.gif);\n  margin: 0 auto;\n}\n.game-comp-dice .ctrl-board .loading-cover ul li[data-v-4bb3f238]:last-child {\n  color: #a1a1a1;\n  font-size: 14px;\n  font-weight: 400;\n}\n.game-comp-dice .ctrl-board .auto-ctrl[data-v-4bb3f238] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 22px;\n  margin-top: -20px;\n}\n.game-comp-dice .ctrl-board .auto-ctrl > span[data-v-4bb3f238] {\n  position: relative;\n  color: #a0a8c4;\n  top: 2px;\n  padding: 0 6px;\n}\n.game-comp-dice .ctrl-board .auto-ctrl > i[data-v-4bb3f238] {\n  font-size: 22px;\n  position: relative;\n  color: #6a6a6a;\n  top: 2px;\n  padding: 0 6px;\n  cursor: pointer;\n}\n.game-comp-dice .ctrl-board .auto-ctrl > i[data-v-4bb3f238]:hover {\n  color: #aaaaaa;\n}\n.game-comp-dice .ctrl-board .auto-ctrl > i:hover em[data-v-4bb3f238] {\n  display: block;\n}\n.game-comp-dice .ctrl-board .auto-ctrl > i em[data-v-4bb3f238] {\n  display: none;\n  position: absolute;\n  top: 0;\n  -webkit-transform: translate(0, -115%);\n          transform: translate(0, -115%);\n  right: 15px;\n  width: 180px;\n  font-size: 12px;\n  background-color: #444;\n  color: #ccc;\n  font-size: 15px;\n  padding: 10px;\n  border-radius: 4px 4px  0 4px;\n  z-index: 5;\n}\n.game-comp-dice .ctrl-board .auto-ctrl > i em[data-v-4bb3f238]:after {\n  position: absolute;\n  display: block;\n  content: "";\n  height: 0;\n  width: 0;\n  border: 6px solid #444;\n  right: 0px;\n  bottom: -4px;\n  border-bottom: none;\n  border-left-color: transparent;\n  border-right-color: transparent;\n}\n.game-comp-dice .ctrl-board .auto-ctrl > span[data-v-4bb3f238]:last-child {\n  color: #f4f4f4;\n  min-width: 62px;\n}\n.game-comp-dice .ctrl-board #win-currency[data-v-4bb3f238] {\n  padding-left: 55px;\n  padding-right: 10px;\n  text-align: left;\n}\n.game-comp-dice .tips-message[data-v-4bb3f238] {\n  max-width: 650px;\n}\n.game-comp-dice .tips-message ul[data-v-4bb3f238] {\n  background: url(/img/dice_msg.png) 26px 17px no-repeat;\n  max-width: 430px;\n  height: 76px;\n  background-color: #1c233f;\n  border-radius: 38px;\n  padding-left: 90px;\n  padding-top: 8px;\n  margin: 0 auto 40px;\n  font-size: 13px;\n  position: relative;\n}\n.game-comp-dice .tips-message ul li[data-v-4bb3f238]:nth-of-type(1) {\n  color: #fff;\n}\n.game-comp-dice .tips-message ul li:nth-of-type(1) em[data-v-4bb3f238] {\n  font-size: 1.9em;\n  font-weight: 600;\n}\n.game-comp-dice .tips-message ul li[data-v-4bb3f238]:nth-of-type(2) {\n  color: #ff8831;\n}\n.game-comp-dice .tips-message ul i[data-v-4bb3f238] {\n  position: absolute;\n  right: 10px;\n  top: 26px;\n  font-size: 24px;\n  color: #777;\n  cursor: pointer;\n}\n.game-comp-dice .tips-message ul i[data-v-4bb3f238]:hover {\n  color: #aaa;\n}\n.game-comp-dice .table-list[data-v-4bb3f238] {\n  margin-bottom: 40px;\n  background-color: #1c233f;\n}\n.game-comp-dice .table-list ul.tabs[data-v-4bb3f238] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #1c233f;\n  border-bottom: 1px solid #333853;\n}\n.game-comp-dice .table-list ul.tabs li[data-v-4bb3f238] {\n  margin-left: 25px;\n  font-size: 17px;\n  color: #97989a;\n  padding: 17px 5px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.game-comp-dice .table-list ul.tabs li + li[data-v-4bb3f238] {\n  margin-left: 1.4em;\n}\n.game-comp-dice .table-list ul.tabs li.active[data-v-4bb3f238] {\n  color: #fff;\n  font-weight: 580;\n  border-bottom: 2px solid #fff;\n}\n.game-comp-dice .table-list table[data-v-4bb3f238],\n.game-comp-dice .table-list th[data-v-4bb3f238],\n.game-comp-dice .table-list td[data-v-4bb3f238],\n.game-comp-dice .table-list tr[data-v-4bb3f238] {\n  border: none;\n  background-color: transparent;\n  padding: 0;\n}\n.game-comp-dice .table-list td[data-v-4bb3f238] {\n  color: #fff;\n  max-width: 265px;\n  padding: 15px 4px;\n  font-size: 15px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.game-comp-dice .table-list th[data-v-4bb3f238] {\n  background-color: #1d233e;\n  color: #989a99;\n  height: 45px;\n  line-height: 45px;\n}\n.game-comp-dice .table-list th[data-v-4bb3f238],\n.game-comp-dice .table-list td[data-v-4bb3f238] {\n  text-align: center;\n}\n.game-comp-dice .table-list tbody tr[data-v-4bb3f238] {\n  background-color: #4c2d2e;\n}\n.game-comp-dice .table-list tbody tr td[data-v-4bb3f238] {\n  position: relative;\n  padding-top: 16px;\n}\n.game-comp-dice .table-list tbody tr td > em[data-v-4bb3f238] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #c02020;\n}\n.game-comp-dice .table-list tbody tr td[data-v-4bb3f238]:last-child {\n  color: #e90062;\n}\n.game-comp-dice .table-list tbody tr.win[data-v-4bb3f238] {\n  background-color: #334e47;\n}\n.game-comp-dice .table-list tbody tr.win td > em[data-v-4bb3f238] {\n  background-color: #17ae5f;\n}\n.game-comp-dice .table-list tbody tr.win td[data-v-4bb3f238]:last-child {\n  color: #2bf094;\n}\n.game-comp-dice .table-list tbody tr.add-flag td[data-v-4bb3f238] {\n  position: relative;\n}\n.game-comp-dice .table-list tbody tr.add-flag td i[data-v-4bb3f238] {\n  display: block;\n  height: 46px;\n  width: 46px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: url(/img/user_flag.png) -1px no-repeat;\n}\n@media screen and (max-width: 1180px) {\n.game-comp-dice .center-view .ranking-container[data-v-4bb3f238] {\n    padding-top: 10px;\n    position: relative;\n    top: 0;\n    right: 0;\n    width: 100%;\n    max-width: 768px;\n    margin: 0 auto 20px;\n}\n.game-comp-dice .ctrl-board[data-v-4bb3f238] {\n    margin: 0 auto;\n}\n.game-comp-dice .tips-message[data-v-4bb3f238] {\n    max-width: 100%;\n}\n}\n@media screen and (max-width: 768px) {\n.game-comp-dice .ctrl-board[data-v-4bb3f238] {\n    padding-top: 15px;\n    padding-bottom: 0px;\n}\n.game-comp-dice .ctrl-board .tab-btns[data-v-4bb3f238] {\n    padding: 0px 0 6px;\n}\n.game-comp-dice .ctrl-board > ul.row-1[data-v-4bb3f238],\n  .game-comp-dice .ctrl-board > ul.row-2[data-v-4bb3f238] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li[data-v-4bb3f238],\n  .game-comp-dice .ctrl-board > ul.row-2 > li[data-v-4bb3f238] {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    margin-bottom: 8px;\n}\n.game-comp-dice .ctrl-board > ul.row-1 > li[data-v-4bb3f238]:first-child,\n  .game-comp-dice .ctrl-board > ul.row-2 > li[data-v-4bb3f238]:first-child {\n    margin-right: 0;\n}\n.game-comp-dice .ctrl-board > ul.row-2[data-v-4bb3f238] {\n    padding: 12px 0 2px ;\n    margin-top: -10px;\n}\n.game-comp-dice .ctrl-board > ul.row-2 li[data-v-4bb3f238] {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 49.5%;\n            flex: 0 0 49.5%;\n    margin-bottom: 0;\n}\n.game-comp-dice .ctrl-board > ul.row-2 li[data-v-4bb3f238]:first-child {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    border-bottom: 1px solid #191c35;\n}\n.game-comp-dice .ctrl-board > ul.row-2 li[data-v-4bb3f238]:nth-of-type(2),\n  .game-comp-dice .ctrl-board > ul.row-2 li[data-v-4bb3f238]:nth-of-type(3) {\n    padding-top: 6px;\n}\n.game-comp-dice .ctrl-board > ul.row-2 li[data-v-4bb3f238]:nth-of-type(3) {\n    border-left: 1px solid #191c35;\n}\n.game-comp-dice .ctrl-board > ul.row-2 .content[data-v-4bb3f238] {\n    font-size: 22px;\n}\n.game-comp-dice .ctrl-board li.add-line[data-v-4bb3f238]:after {\n    display: none;\n}\n.game-comp-dice .ctrl-board li.add-line[data-v-4bb3f238]:before {\n    display: none;\n}\n.game-comp-dice .ctrl-board > ul.row-2 li.add-line[data-v-4bb3f238]:after,\n  .game-comp-dice .ctrl-board > ul.row-2 li.add-line[data-v-4bb3f238]:before {\n    height: 55px;\n    top: 5px;\n}\n.game-comp-dice .ctrl-board .prog-bar[data-v-4bb3f238] {\n    padding: 0 18px;\n}\n.game-comp-dice .ctrl-board .btn-bar[data-v-4bb3f238] {\n    position: relative;\n    padding-bottom: 15px;\n    max-width: 430px;\n    margin: 0 auto 0;\n    padding-left: 27px;\n}\n.game-comp-dice .ctrl-board .btn-bar .current-eos[data-v-4bb3f238] {\n    position: relative;\n    left: 0;\n    top: 0;\n    height: 40px;\n    margin-top: 0px;\n    font-size: 19px;\n    background-size: 20px;\n    background-position-y: 6px;\n}\n.game-comp-dice .ctrl-board .btn-bar .current-eos.dice[data-v-4bb3f238] {\n    left: 3px;\n    background-size: 24px;\n    background-position-y: 8px;\n}\n.game-comp-dice .ctrl-board .btn-bar button[data-v-4bb3f238] {\n    margin-bottom: 10px;\n    height: 42px;\n    line-height: 40px;\n}\n.game-comp-dice .table-list ul.tabs[data-v-4bb3f238] {\n    overflow-x: scroll;\n}\n.game-comp-dice .table-list ul.tabs li[data-v-4bb3f238] {\n    font-size: 15px;\n    margin-left: 16px;\n}\n.game-comp-dice .table-list td[data-v-4bb3f238] {\n    max-width: 31vw;\n}\n.game-comp-dice .table-list tbody tr.add-flag td[data-v-4bb3f238] {\n    font-size: 13px;\n}\n.game-comp-dice .table-list tbody tr.add-flag td i[data-v-4bb3f238] {\n    height: 25px;\n    width: 25px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: url(/img/user_flag.png) -1px no-repeat;\n    background-size: cover;\n}\n.game-comp-dice .only-pc[data-v-4bb3f238] {\n    display: none;\n}\n}\n@media screen and (max-width: 575px) {\n.game-comp-dice .table-list ul.tabs li + li[data-v-4bb3f238] {\n    margin-left: 4px;\n}\n.game-comp-dice .tips-message ul[data-v-4bb3f238] {\n    padding-left: 88px;\n    padding-top: 17px;\n}\n.game-comp-dice .tips-message ul li[data-v-4bb3f238]:nth-of-type(1) {\n    color: #fff;\n}\n.game-comp-dice .tips-message ul li:nth-of-type(1) em[data-v-4bb3f238] {\n    font-size: 1.3em;\n    font-weight: 600;\n}\n.game-comp-dice .tips-message ul li[data-v-4bb3f238]:nth-of-type(2) {\n    color: #ff8831;\n    font-size: 0.9em;\n}\n}\n@media screen and (max-width: 360px) {\n.game-comp-dice .table-list tbody tr.add-flag td[data-v-4bb3f238] {\n    font-size: 12px;\n}\n}\n', ""])
  }, Bnif: function (t, n, e) {
    var a = e("9hVS");
    "string" == typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
    (0, e("rjj0").default)("4a8bfabc", a, !1, {sourceMap: !1})
  }, CV1q: function (t, n, e) {
    "use strict";
    var a = e("Xxa5"), r = e.n(a), i = e("exGp"), o = e.n(i), s = e("mtWM"), c = e.n(s), l = e("PJh5"), p = e.n(l),
      u = e("KX8D");
    n.a = {
      data: function () {
        return {
          rankList: [],
          user: null,
          $moment: null,
          interval: null,
          interval2: null,
          rank: {
            maxWager: {key: "maxBet"},
            maxPayout: {key: "maxPayout"},
            netProfit: {key: "netProfit"},
            totalWager: {key: "wagered"},
            totalPayout: {key: "payout"},
            playCount: {key: "count"}
          }
        }
      },
      computed: {},
      props: ["activeRankKey", "tableHeadName"],
      watch: {"$store.state.currentCurrency": "getData", activeRankKey: "getData"},
      methods: {
        formatNumber: function (t) {
          var n = t.split(".")[1], e = n ? n.length : 0;
          return Number(t).toLocaleString(void 0, {minimumFractionDigits: e})
        }, getData: function () {
          var t = o()(r.a.mark(function t() {
            var n, e, a, i;
            return r.a.wrap(function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  return n = this.activeRankKey, e = this.$store.state.currentCurrency, a = u.a.contest.event2.url + "/" + n + "/" + e, t.prev = 3, t.next = 6, c.a.get(a, {params: {}});
                case 6:
                  i = t.sent, this.rankList = i.data || [], t.next = 13;
                  break;
                case 10:
                  t.prev = 10, t.t0 = t.catch(3), console.log("get rankData error!", t.t0);
                case 13:
                case"end":
                  return t.stop()
              }
            }, t, this, [[3, 10]])
          }));
          return function () {
            return t.apply(this, arguments)
          }
        }(), init: function () {
          var t = this;
          this.getData(), this.interval = setInterval(function () {
            t.getData()
          }, 1e4)
        }
      },
      beforeMount: function () {
        this.init()
      },
      created: function () {
        this.$moment = p.a
      },
      beforeDestroy: function () {
        this.interval && clearInterval(this.interval), this.interval2 && clearInterval(this.interval2)
      }
    }
  }, Cm2g: function (t, n, e) {
    (t.exports = e("FZ+f")(!1)).push([t.i, "\n.notification-comp {\n  max-width: 386px;\n  width: 100%;\n  min-height: 65px;\n  position: fixed;\n  top: 40px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-top: 4px solid #29f294;\n  border-radius: 2px 2px 5px 5px;\n  background-color: #51585e;\n  padding: 5px 12px;\n  text-align: center;\n  z-index: 8;\n}\n.notification-comp h5 {\n  color: #29f296;\n  font-size: 16px;\n}\n.notification-comp p {\n  color: #fff;\n}\n.notification-comp.error {\n  border-top: 4px solid #fc3e3e;\n}\n.notification-comp.error h5 {\n  color: #fc3e3e;\n}\n@media screen and (max-width: 400px) {\n.notification-comp {\n    width: 95%;\n}\n}\n", ""])
  }, CtMv: function (t, n, e) {
    "use strict";
    var a = e("jeQS"), r = e("Rmx5"), i = !1;
    var o = function (t) {
      i || e("53xx")
    }, s = e("VU/8")(a.a, r.a, !1, o, null, null);
    s.options.__file = "components/common/notification.vue", n.a = s.exports
  }, DQCr: function (t, n, e) {
    "use strict";
    var a = e("cGG2");

    function r(t) {
      return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    t.exports = function (t, n, e) {
      if (!n) return t;
      var i;
      if (e) i = e(n); else if (a.isURLSearchParams(n)) i = n.toString(); else {
        var o = [];
        a.forEach(n, function (t, n) {
          null !== t && void 0 !== t && (a.isArray(t) && (n += "[]"), a.isArray(t) || (t = [t]), a.forEach(t, function (t) {
            a.isDate(t) ? t = t.toISOString() : a.isObject(t) && (t = JSON.stringify(t)), o.push(r(n) + "=" + r(t))
          }))
        }), i = o.join("&")
      }
      return i && (t += (-1 === t.indexOf("?") ? "?" : "&") + i), t
    }
  }, EbHG: function (t, n, e) {
    var a = e("FF9Z");
    "string" == typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
    (0, e("rjj0").default)("18cb1b5b", a, !1, {sourceMap: !1})
  }, FF9Z: function (t, n, e) {
    (t.exports = e("FZ+f")(!1)).push([t.i, "", ""])
  }, Fb4T: function (t, n, e) {
    "use strict";
    var a = e("CV1q"), r = e("ILlW"), i = !1;
    var o = function (t) {
      i || e("MhB7")
    }, s = e("VU/8")(a.a, r.a, !1, o, null, null);
    s.options.__file = "components/dice/dice_ranking.vue", n.a = s.exports
  }, Fm9D: function (t, n, e) {
    "use strict";
    var a = e("h6WD"), r = e("uece"), i = !1;
    var o = function (t) {
      i || (e("Bnif"), e("N5GP"))
    }, s = e("VU/8")(a.a, r.a, !1, o, "data-v-4bb3f238", null);
    s.options.__file = "components/dice/dice.vue", n.a = s.exports
  }, FtD3: function (t, n, e) {
    "use strict";
    var a = e("t8qj");
    t.exports = function (t, n, e, r, i) {
      var o = new Error(t);
      return a(o, n, e, r, i)
    }
  }, GHBc: function (t, n, e) {
    "use strict";
    var a = e("cGG2");
    t.exports = a.isStandardBrowserEnv() ? function () {
      var t, n = /(msie|trident)/i.test(navigator.userAgent), e = document.createElement("a");

      function r(t) {
        var a = t;
        return n && (e.setAttribute("href", a), a = e.href), e.setAttribute("href", a), {
          href: e.href,
          protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
          host: e.host,
          search: e.search ? e.search.replace(/^\?/, "") : "",
          hash: e.hash ? e.hash.replace(/^#/, "") : "",
          hostname: e.hostname,
          port: e.port,
          pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname
        }
      }

      return t = r(window.location.href), function (n) {
        var e = a.isString(n) ? r(n) : n;
        return e.protocol === t.protocol && e.host === t.host
      }
    }() : function () {
      return !0
    }
  }, HqG3: function (t, n, e) {
    "use strict";
    var a = e("Xxa5"), r = e.n(a), i = e("exGp"), o = e.n(i), s = e("mtWM"), c = e.n(s), l = e("PJh5"), p = e.n(l),
      u = e("KX8D");
    n.a = {
      data: function () {
        return {
          rankList: [],
          user: null,
          $moment: null,
          currentDate: p.a.utc().startOf("date"),
          todayDate: p.a.utc().startOf("date"),
          payoutRankDate: p.a.utc("2018-11-03", "YYYY-MM-DD").startOf("date"),
          minDate: p.a.utc("2018-10-10", "YYYY-MM-DD").startOf("date"),
          interval: null,
          interval2: null,
          timeLeft: "",
          isMore: !1,
          giveAwayPrize: 8800
        }
      },
      computed: {},
      watch: {currentDate: "getData", "$store.state.account.name": "getData"},
      methods: {
        formatNumber: function (t) {
          var n = t.split(".")[1], e = n ? n.length : 0;
          return Number(t).toLocaleString(void 0, {minimumFractionDigits: e})
        }, getData: function () {
          var t = o()(r.a.mark(function t(n) {
            var e, a, i, o, s;
            return r.a.wrap(function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  return e = p.a.utc().startOf("date"), this.todayDate.isSame(this.currentDate) && !this.todayDate.isSame(e) && (this.currentDate = e), this.todayDate = e, this.giveAwayPrize = 8800, a = this.currentDate.format("YYYY-MM-DD"), i = this.$store.state.account.name || "", o = u.a.contest.event1.url + "/" + a + "/" + i, t.prev = 7, t.next = 10, c.a.get(o, {params: {}});
                case 10:
                  s = t.sent, this.rankList = s.data.list, s.data.user.rank ? this.user = s.data.user : this.user = null, t.next = 17;
                  break;
                case 15:
                  t.prev = 15, t.t0 = t.catch(7);
                case 17:
                case"end":
                  return t.stop()
              }
            }, t, this, [[7, 15]])
          }));
          return function (n) {
            return t.apply(this, arguments)
          }
        }(), clickHandle: function (t) {
          "next" === t ? this.currentDate.isBefore(this.todayDate) && (this.currentDate = p()(this.currentDate.add(1, "days"))) : this.currentDate.isAfter(this.minDate) && (this.currentDate = p()(this.currentDate.add(-1, "days")))
        }
      },
      beforeDestroy: function () {
        this.interval && clearInterval(this.interval), this.interval2 && clearInterval(this.interval2)
      },
      beforeMount: function () {
        var t = this;
        this.$moment = p.a, this.currentDate = p.a.utc().startOf("date"), this.todayDate = p.a.utc().startOf("date"), this.getData(), this.interval = setInterval(function () {
          t.getData()
        }, 1e4), this.interval2 = setInterval(function () {
          var n = p.a.duration(p()(t.todayDate).add(1, "days").diff(p.a.utc()));
          n < 0 ? t.getData() : t.timeLeft = [n.hours().toString().padStart(2, "0"), n.minutes().toString().padStart(2, "0"), n.seconds().toString().padStart(2, "0")].join(":")
        }, 1e3)
      }
    }
  }, "I+ED": function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    var a = e("Ip5G"), r = e("RU4B"), i = !1;
    var o = function (t) {
      i || e("EbHG")
    }, s = e("VU/8")(a.a, r.a, !1, o, "data-v-57280228", null);
    s.options.__file = "pages/index/index.vue", n.default = s.exports
  }, ILlW: function (t, n, e) {
    "use strict";
    var a = function () {
      var t = this, n = t.$createElement, e = t._self._c || n;
      return e("div", {staticClass: "ranking-table-comp"}, [e("ul", {
        staticClass: "table-header",
        staticStyle: {margin: "0", padding: "0"}
      }, [e("li", {
        staticClass: "t-header",
        staticStyle: {height: "46px", padding: "6px 20px 0", "padding-top": "6px"}
      }, [e("span", {
        staticStyle: {
          "text-align": "center",
          flex: "0 0 52px",
          display: "inline-block"
        }
      }, [t._v(t._s(t.$store.state.currentLang.ranking_table[6]))]), e("span", [t._v(t._s(t.$store.state.currentLang.ranking_table[7]))]), e("span", [t._v(t._s(t.tableHeadName))])])]), e("ul", {staticClass: "table-list data"}, t._l(t.rankList instanceof Array ? t.rankList : [], function (n, a) {
        return e("li", {
          key: a,
          class: "items top" + n.rank
        }, [e("span", [t._v(t._s(n.rank))]), e("span", [t._v(t._s(n.name))]), e("span", [e("em", {staticStyle: {"font-weight": "600"}}, [t._v(t._s(t.formatNumber(n.value.split(" ")[0])))]), e("em", {
          staticStyle: {
            "font-size": "12px",
            "padding-left": "4px"
          }
        }, [t._v(t._s(n.value.split(" ")[1]))])])])
      })), e("div", {staticStyle: {height: "40px"}})])
    };
    a._withStripped = !0;
    var r = {render: a, staticRenderFns: []};
    n.a = r
  }, Ip5G: function (t, n, e) {
    "use strict";
    var a = e("Fm9D");
    n.a = {
      data: function () {
        return {}
      }, components: {GameDice: a.a}, watch: {}, computed: {}
    }
  }, "JP+z": function (t, n, e) {
    "use strict";
    t.exports = function (t, n) {
      return function () {
        for (var e = new Array(arguments.length), a = 0; a < e.length; a++) e[a] = arguments[a];
        return t.apply(n, e)
      }
    }
  }, JnAZ: function (t, n, e) {
    "use strict";
    n.a = {
      data: function () {
        return {val: 0, isPC: !0}
      }, props: ["value", "result"], watch: {
        val: function () {
          this.$emit("currentValue", this.val)
        }
      }, computed: {
        roll: function () {
          return this.result || ""
        }
      }, methods: {
        clacProgress: function (t) {
          var n = document.querySelector(".my-progress .leve1").getBoundingClientRect();
          this.val = Math.max(this.$store.state.rollLimit.min, Math.min(Math.floor((t - n.left) / n.width * 100), this.$store.state.rollLimit.max))
        }, clickHandler: function (t) {
          var n = void 0;
          n = this.isPC ? t.clientX : t.touches[0].clientX, "EM" !== t.target.nodeName && (this.clacProgress(n), t.stopPropagation())
        }, moveHandler: function (t) {
          var n = void 0;
          n = this.isPC ? t.clientX : t.touches[0].clientX, this.clacProgress(n)
        }, mousedownHandler: function (t) {
          var n = this;
          t.target.style.background = "#cfd6d7", this.isPC ? (document.addEventListener("mousemove", this.moveHandler, !1), document.addEventListener("mouseup", function () {
            t.target.style.background = "#f4f4f4", document.removeEventListener("mousemove", n.moveHandler, !1)
          })) : (document.addEventListener("touchmove", this.moveHandler, !1), document.addEventListener("touchstart", function () {
            t.target.style.background = "#f4f4f4", document.removeEventListener("touchmove", n.moveHandler, !1)
          })), t.stopPropagation()
        }
      }, mounted: function () {
        var t = document.querySelector(".my-progress .leve1"), n = document.querySelector(".my-progress .leve1 i");
        this.isPC ? (t.addEventListener("mousedown", this.clickHandler), n.addEventListener("mousedown", this.mousedownHandler)) : (t.addEventListener("touchstart", this.clickHandler), n.addEventListener("touchstart", this.mousedownHandler))
      }, created: function () {
        this.val = this.value, navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? this.isPC = !1 : this.isPC = !0
      }
    }
  }, KCLY: function (t, n, e) {
    "use strict";
    (function (n) {
      var a = e("cGG2"), r = e("5VQ+"), i = {"Content-Type": "application/x-www-form-urlencoded"};

      function o(t, n) {
        !a.isUndefined(t) && a.isUndefined(t["Content-Type"]) && (t["Content-Type"] = n)
      }

      var s = {
        adapter: function () {
          var t;
          return "undefined" != typeof XMLHttpRequest ? t = e("7GwW") : void 0 !== n && (t = e("7GwW")), t
        }(),
        transformRequest: [function (t, n) {
          return r(n, "Content-Type"), a.isFormData(t) || a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) ? t : a.isArrayBufferView(t) ? t.buffer : a.isURLSearchParams(t) ? (o(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : a.isObject(t) ? (o(n, "application/json;charset=utf-8"), JSON.stringify(t)) : t
        }],
        transformResponse: [function (t) {
          if ("string" == typeof t) try {
            t = JSON.parse(t)
          } catch (t) {
          }
          return t
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function (t) {
          return t >= 200 && t < 300
        },
        headers: {common: {Accept: "application/json, text/plain, */*"}}
      };
      a.forEach(["delete", "get", "head"], function (t) {
        s.headers[t] = {}
      }), a.forEach(["post", "put", "patch"], function (t) {
        s.headers[t] = a.merge(i)
      }), t.exports = s
    }).call(n, e("W2nU"))
  }, KKa7: function (t, n, e) {
    "use strict";
    var a = e("JnAZ"), r = e("NhIz"), i = !1;
    var o = function (t) {
      i || e("pop+")
    }, s = e("VU/8")(a.a, r.a, !1, o, null, null);
    s.options.__file = "components/common/progress.vue", n.a = s.exports
  }, MhB7: function (t, n, e) {
    var a = e("7pyN");
    "string" == typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
    (0, e("rjj0").default)("2965978f", a, !1, {sourceMap: !1})
  }, N5GP: function (t, n, e) {
    var a = e("jK8q");
    "string" == typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
    (0, e("rjj0").default)("66490bfa", a, !1, {sourceMap: !1})
  }, NhIz: function (t, n, e) {
    "use strict";
    var a = function () {
      var t = this, n = t.$createElement, e = t._self._c || n;
      return e("div", {staticClass: "my-progress"}, [e("div", {staticClass: "leve1"}, [e("div", {
        staticClass: "leve2",
        style: "width:" + t.val + "%"
      }, [e("i"), e("em", [t._v(t._s(t.val))])]), t.roll ? e("div", {
        class: "leve2-roll " + (Number(t.roll) >= t.val ? "lost" : ""),
        style: "width:" + t.roll + "%"
      }, [e("em", [t._v(t._s(t.roll))])]) : t._e()]), t._m(0)])
    };
    a._withStripped = !0;
    var r = {
      render: a, staticRenderFns: [function () {
        var t = this.$createElement, n = this._self._c || t;
        return n("ul", {staticClass: "scale"}, [n("li", [n("span", {staticStyle: {"padding-left": "1px"}}, [this._v("1")])]), n("li", [n("span", {
          staticStyle: {
            position: "relative",
            left: "-7px"
          }
        }, [this._v("25")])]), n("li", [n("span", {
          staticStyle: {
            position: "relative",
            left: "-7px"
          }
        }, [this._v("50")])]), n("li", [n("span", {
          staticStyle: {
            position: "relative",
            left: "-7px"
          }
        }, [this._v("75")]), n("span", {
          staticStyle: {
            "padding-right": "0px",
            position: "relative",
            right: "-8px"
          }
        }, [this._v("100")])])])
      }]
    };
    n.a = r
  }, O1Kc: function (t, n, e) {
    (t.exports = e("FZ+f")(!1)).push([t.i, "\n.ranking-comp {\n  max-width: 768px;\n  background-color: #1c233f;\n  position: relative;\n  border-radius: 2px;\n  overflow: hidden;\n  top: 7px;\n  z-index: 3;\n}\n.ranking-comp h2 {\n  text-align: center;\n  color: #fff;\n  font-size: 19px;\n  padding: 19px 0;\n  margin: 0;\n}\n.ranking-comp > ul.table-list.data {\n  height: 360px;\n  overflow-y: auto;\n}\n.ranking-comp > ul.table-list.data::-webkit-scrollbar {\n  width: 9px;\n  height: 9px;\n}\n.ranking-comp > ul.table-list.data::-webkit-scrollbar-track-piece {\n  background-color: #1c233f;\n}\n.ranking-comp > ul.table-list.data::-webkit-scrollbar-thumb {\n  background-color: #3c4771;\n  background-clip: padding-box;\n  min-height: 28px;\n  border-radius: 4px;\n}\n.ranking-comp > ul.table-list.data#is-dice {\n  height: 245px;\n}\n.ranking-comp > ul.table-list.user {\n  padding-top: 6px;\n  padding-right: 22px;\n}\n.ranking-comp > ul.table-list,\n.ranking-comp > ul.table-header {\n  margin: 0;\n  padding: 0 13px;\n  border-top: 2px solid #21294c;\n}\n.ranking-comp > ul.table-list li,\n.ranking-comp > ul.table-header li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a2a4a6;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 5px;\n  border-radius: 3px;\n  height: 45px;\n  padding-left: 7px;\n}\n.ranking-comp > ul.table-list li span,\n.ranking-comp > ul.table-header li span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 0 5px;\n  color: #bebec3;\n  max-width: 130px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ranking-comp > ul.table-list li span:first-child,\n.ranking-comp > ul.table-header li span:first-child {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 52px;\n          flex: 0 0 52px;\n}\n.ranking-comp > ul.table-list li.items span:first-child,\n.ranking-comp > ul.table-header li.items span:first-child {\n  height: 48px;\n  line-height: 48px;\n  font-weight: 600;\n  text-align: center;\n  font-size: 15px;\n  color: #ddd;\n  background: url(/img/top0.png) 9px 4px no-repeat;\n}\n.ranking-comp > ul.table-list li.top1 span:first-child,\n.ranking-comp > ul.table-header li.top1 span:first-child {\n  background: url(/img/top1.png) 4px 4px no-repeat;\n}\n.ranking-comp > ul.table-list li.top2 span:first-child,\n.ranking-comp > ul.table-header li.top2 span:first-child {\n  background: url(/img/top2.png) 4px 4px no-repeat;\n}\n.ranking-comp > ul.table-list li.top3 span:first-child,\n.ranking-comp > ul.table-header li.top3 span:first-child {\n  background: url(/img/top3.png) 4px 4px no-repeat;\n}\n.ranking-comp > ul.table-list li.top1 span:first-child,\n.ranking-comp > ul.table-header li.top1 span:first-child,\n.ranking-comp > ul.table-list li.top2 span:first-child,\n.ranking-comp > ul.table-header li.top2 span:first-child,\n.ranking-comp > ul.table-list li.top3 span:first-child,\n.ranking-comp > ul.table-header li.top3 span:first-child {\n  color: transparent;\n  height: 48px;\n}\n.ranking-comp > ul.table-list li.t-header li,\n.ranking-comp > ul.table-header li.t-header li {\n  padding: 0;\n}\n.ranking-comp > ul.table-list li.t-header span,\n.ranking-comp > ul.table-header li.t-header span {\n  color: #fff;\n}\n.ranking-comp > ul.table-list li.items,\n.ranking-comp > ul.table-header li.items {\n  background: #171c32;\n}\n.ranking-comp > ul.table-list li.items.user,\n.ranking-comp > ul.table-header li.items.user {\n  background: #212a4b;\n  height: 58px;\n}\n.ranking-comp .btn-ctrl {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n.ranking-comp div.flag {\n  width: 97px;\n  height: 97px;\n  background: url(/img/flag_ranking.png) no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ranking-comp div.flag .msg {\n  color: #fff;\n  -webkit-transform: rotate(-45deg) translate(-22%, -25%);\n          transform: rotate(-45deg) translate(-22%, -25%);\n}\n.ranking-comp div.flag .msg p {\n  margin: 0;\n  text-align: center;\n  font-size: 12px;\n}\n.ranking-comp div.flag .msg p:first-child {\n  font-weight: 600;\n  font-size: 19px;\n}\n@media screen and (max-width: 768px) {\n.ranking-comp > ul.table-list.data {\n    height: 150px;\n}\n.ranking-comp > ul.table-list.data#is-dice {\n    height: 150px;\n}\n.ranking-comp > ul.table-list.data.show-more#is-dice,\n  .ranking-comp > ul.table-list.data.show-more {\n    height: 446px;\n}\n.ranking-comp div.info-font {\n    display: none;\n}\n.ranking-comp div.info-font.show-more {\n    display: block;\n}\n.ranking-comp > ul.table-list,\n  .ranking-comp > ul.table-header {\n    display: none;\n}\n.ranking-comp > ul.table-list.user {\n    display: block;\n    margin: 0 -16px;\n}\n.ranking-comp > ul.table-list.user.show-more {\n    display: block;\n    margin: 0 0px;\n}\n.ranking-comp > ul.table-list.show-more,\n  .ranking-comp > ul.table-header.show-more {\n    display: block;\n}\n.ranking-comp .btn-ctrl {\n    display: none;\n}\n.ranking-comp .btn-ctrl.show-more {\n    display: block;\n    right: 0;\n}\n}\n@media screen and (max-width: 500px) {\n.ranking-comp h2 .fa {\n    display: none;\n}\n.ranking-comp > ul.table-list,\n  .ranking-comp > ul.table-header {\n    padding-right: 6px;\n}\n.ranking-comp > ul.table-list.user {\n    padding-right: 15px;\n}\n.ranking-comp h2 {\n    text-align: center;\n    color: #fff;\n    font-size: 17px;\n    padding: 19px 0;\n    margin: 0;\n}\n}\n@-webkit-keyframes neon1 {\nfrom {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;\n}\nto {\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;\n}\n}\n", ""])
  }, QSGC: function (t, n, e) {
    "use strict";
    var a = e("KX8D");
    n.a = {
      getSymbolByExtendedSymbol: function (t) {
        for (var n in a.a.tokens) if (a.a.tokens[n].extendedSymbol == t) return n
      }, getZeroByPrecision: function () {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4, n = "0.", e = 0; e < t; e++) n += "0";
        return n
      }, float4: function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        return parseFloat(t).toFixed(n)
      }, errorHandler: function (t) {
        var n = "";
        if ("[object Error]" === Object.prototype.toString.call(t) && (t = t.message), "string" == typeof t) try {
          var e = JSON.parse(t);
          n = e.details ? e.details[0].message || "unknown error" : e.error ? (n = e.error).details ? n.details[0].message : n.message : e.message
        } catch (e) {
          n = t
        } else n = t.message || "unknown error";
        return -1 !== n.indexOf("Transaction exceeded the current") && (n = this.$store.state.currentLang.notification[5]), n
      }, randomString: function (t) {
        for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890", e = "", a = 0; a < t; a++) e += n.charAt(Math.floor(Math.random() * n.length));
        return e
      }, randomLetter: function (t) {
        for (var n = "", e = 0; e < t; e++) n += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * "abcdefghijklmnopqrstuvwxyz".length));
        return n
      }, getRandomNumber: function (t, n) {
        return Math.floor(Math.random() * (n - t + 1) + t)
      }
    }
  }, RU4B: function (t, n, e) {
    "use strict";
    var a = function () {
      var t = this.$createElement;
      return (this._self._c || t)("GameDice")
    };
    a._withStripped = !0;
    var r = {render: a, staticRenderFns: []};
    n.a = r
  }, Re3r: function (t, n) {
    function e(t) {
      return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }

    t.exports = function (t) {
      return null != t && (e(t) || function (t) {
        return "function" == typeof t.readFloatLE && "function" == typeof t.slice && e(t.slice(0, 0))
      }(t) || !!t._isBuffer)
    }
  }, Rmx5: function (t, n, e) {
    "use strict";
    var a = function () {
      var t = this, n = t.$createElement, e = t._self._c || n;
      return t.notification.show ? e("div", {class: "notification-comp " + t.notification.type}, [e("h5", [t._v(t._s(t.notification.title))]), e("p", [t._v(t._s(t.notification.body))])]) : t._e()
    };
    a._withStripped = !0;
    var r = {render: a, staticRenderFns: []};
    n.a = r
  }, TNV1: function (t, n, e) {
    "use strict";
    var a = e("cGG2");
    t.exports = function (t, n, e) {
      return a.forEach(e, function (e) {
        t = e(t, n)
      }), t
    }
  }, XmWM: function (t, n, e) {
    "use strict";
    var a = e("KCLY"), r = e("cGG2"), i = e("fuGk"), o = e("xLtR"), s = e("dIwP"), c = e("qRfI");

    function l(t) {
      this.defaults = t, this.interceptors = {request: new i, response: new i}
    }

    l.prototype.request = function (t) {
      "string" == typeof t && (t = r.merge({url: arguments[0]}, arguments[1])), (t = r.merge(a, this.defaults, {method: "get"}, t)).method = t.method.toLowerCase(), t.baseURL && !s(t.url) && (t.url = c(t.baseURL, t.url));
      var n = [o, void 0], e = Promise.resolve(t);
      for (this.interceptors.request.forEach(function (t) {
        n.unshift(t.fulfilled, t.rejected)
      }), this.interceptors.response.forEach(function (t) {
        n.push(t.fulfilled, t.rejected)
      }); n.length;) e = e.then(n.shift(), n.shift());
      return e
    }, r.forEach(["delete", "get", "head", "options"], function (t) {
      l.prototype[t] = function (n, e) {
        return this.request(r.merge(e || {}, {method: t, url: n}))
      }
    }), r.forEach(["post", "put", "patch"], function (t) {
      l.prototype[t] = function (n, e, a) {
        return this.request(r.merge(a || {}, {method: t, url: n, data: e}))
      }
    }), t.exports = l
  }, cGG2: function (t, n, e) {
    "use strict";
    var a = e("JP+z"), r = e("Re3r"), i = Object.prototype.toString;

    function o(t) {
      return "[object Array]" === i.call(t)
    }

    function s(t) {
      return null !== t && "object" == typeof t
    }

    function c(t) {
      return "[object Function]" === i.call(t)
    }

    function l(t, n) {
      if (null !== t && void 0 !== t) if ("object" == typeof t || o(t) || (t = [t]), o(t)) for (var e = 0, a = t.length; e < a; e++) n.call(null, t[e], e, t); else for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.call(null, t[r], r, t)
    }

    t.exports = {
      isArray: o, isArrayBuffer: function (t) {
        return "[object ArrayBuffer]" === i.call(t)
      }, isBuffer: r, isFormData: function (t) {
        return "undefined" != typeof FormData && t instanceof FormData
      }, isArrayBufferView: function (t) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
      }, isString: function (t) {
        return "string" == typeof t
      }, isNumber: function (t) {
        return "number" == typeof t
      }, isObject: s, isUndefined: function (t) {
        return void 0 === t
      }, isDate: function (t) {
        return "[object Date]" === i.call(t)
      }, isFile: function (t) {
        return "[object File]" === i.call(t)
      }, isBlob: function (t) {
        return "[object Blob]" === i.call(t)
      }, isFunction: c, isStream: function (t) {
        return s(t) && c(t.pipe)
      }, isURLSearchParams: function (t) {
        return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
      }, isStandardBrowserEnv: function () {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
      }, forEach: l, merge: function t() {
        var n = {};

        function e(e, a) {
          "object" == typeof n[a] && "object" == typeof e ? n[a] = t(n[a], e) : n[a] = e
        }

        for (var a = 0, r = arguments.length; a < r; a++) l(arguments[a], e);
        return n
      }, extend: function (t, n, e) {
        return l(n, function (n, r) {
          t[r] = e && "function" == typeof n ? a(n, e) : n
        }), t
      }, trim: function (t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "")
      }
    }
  }, cWxy: function (t, n, e) {
    "use strict";
    var a = e("dVOP");

    function r(t) {
      if ("function" != typeof t) throw new TypeError("executor must be a function.");
      var n;
      this.promise = new Promise(function (t) {
        n = t
      });
      var e = this;
      t(function (t) {
        e.reason || (e.reason = new a(t), n(e.reason))
      })
    }

    r.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }, r.source = function () {
      var t;
      return {
        token: new r(function (n) {
          t = n
        }), cancel: t
      }
    }, t.exports = r
  }, dIwP: function (t, n, e) {
    "use strict";
    t.exports = function (t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
  }, dVOP: function (t, n, e) {
    "use strict";

    function a(t) {
      this.message = t
    }

    a.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "")
    }, a.prototype.__CANCEL__ = !0, t.exports = a
  }, ddaO: function (t, n, e) {
    (t.exports = e("FZ+f")(!1)).push([t.i, '\n.my-progress {\n  max-width: 768px;\n  padding-top: 45px;\n  padding-bottom: 35px;\n}\n.my-progress .leve1,\n.my-progress .leve2 {\n  height: 14px;\n  border-radius: 7px;\n}\n.my-progress .leve1 {\n  background-color: #ee0060;\n  cursor: pointer;\n}\n.my-progress .leve2 {\n  background-color: #29f294;\n  -webkit-box-shadow: 0 0 7px #29f294;\n          box-shadow: 0 0 7px #29f294;\n  position: relative;\n}\n.my-progress .leve2 i {\n  display: block;\n  height: 22px;\n  width: 22px;\n  position: absolute;\n  right: -11px;\n  top: -6px;\n  background-color: #f4f4f4;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 5px #fff;\n          box-shadow: 0 0 5px #fff;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n  z-index: 2;\n}\n.my-progress .leve2 i:after {\n  content: "";\n  display: block;\n  height: 28px;\n  width: 28px;\n  position: absolute;\n  left: -3px;\n  top: -3px;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 12px #fff inset;\n          box-shadow: 0 0 12px #fff inset;\n}\n.my-progress .leve2 em {\n  width: 58px;\n  height: 28px;\n  line-height: 28px;\n  font-size: 17px;\n  font-weight: 600;\n  color: #fff;\n  position: absolute;\n  top: -42px;\n  right: -29px;\n  background-color: #5b5f62;\n  border-radius: 3px;\n  text-align: center;\n}\n.my-progress .leve2 em:after {\n  content: "";\n  display: block;\n  position: absolute;\n  left: 24px;\n  bottom: -5px;\n  border-top: 5px solid #5b5f62;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.my-progress .leve2-roll {\n  height: 0;\n  position: relative;\n  border-right: 1px solid #41f396;\n  z-index: 1;\n}\n.my-progress .leve2-roll em {\n  position: absolute;\n  top: 5px;\n  right: -18px;\n  height: 36px;\n  width: 36px;\n  line-height: 30px;\n  border-radius: 8px;\n  background-color: #344e47;\n  font-size: 1.3em;\n  font-weight: 600;\n  border: 3px solid #41f396;\n  color: #41f396;\n  text-align: center;\n}\n.my-progress .leve2-roll em:after {\n  content: "";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  border: 5px solid transparent;\n  border-bottom-color: #41f396;\n  top: -13px;\n  left: 10px;\n}\n.my-progress .leve2-roll.lost {\n  border-right: 1px solid #e90062;\n}\n.my-progress .leve2-roll.lost em {\n  border: 3px solid #e90062;\n  background-color: #4b2d2e;\n  color: #e90062;\n}\n.my-progress .leve2-roll.lost em:after {\n  border-bottom-color: #e90062;\n}\n.my-progress ul.scale {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 12px;\n}\n.my-progress ul.scale li {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 13px;\n  color: #949496;\n}\n.my-progress ul.scale li:last-child {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (max-width: 768px) {\n.my-progress .leve1,\n  .my-progress .leve2 {\n    height: 16px;\n    border-radius: 8px;\n}\n.my-progress .leve2 i {\n    height: 24px;\n    width: 24px;\n    position: absolute;\n    right: -12px;\n    top: -6px;\n    border-radius: 50%;\n}\n.my-progress .leve2 i:after {\n    content: "";\n    height: 30px;\n    width: 30px;\n    left: -3px;\n    top: -3px;\n}\n.my-progress .leve2 em {\n    top: -42px;\n}\n}\n', ""])
  }, fuGk: function (t, n, e) {
    "use strict";
    var a = e("cGG2");

    function r() {
      this.handlers = []
    }

    r.prototype.use = function (t, n) {
      return this.handlers.push({fulfilled: t, rejected: n}), this.handlers.length - 1
    }, r.prototype.eject = function (t) {
      this.handlers[t] && (this.handlers[t] = null)
    }, r.prototype.forEach = function (t) {
      a.forEach(this.handlers, function (n) {
        null !== n && t(n)
      })
    }, t.exports = r
  }, h6WD: function (t, n, e) {
    "use strict";
    var a = e("woOf"), r = e.n(a), i = e("mvHQ"), o = e.n(i), s = e("//Fk"), c = e.n(s), l = e("Xxa5"), p = e.n(l),
      u = e("exGp"), d = e.n(u), f = e("fZjL"), b = e.n(f), m = e("KKa7"), g = e("CtMv"), h = e("PJh5"), x = e.n(h),
      v = e("KX8D"), y = (e("/5sW"), e("QSGC")), k = e("Fb4T"), w = e("mD8w");
    n.a = {
      data: function () {
        return {
          float4: null,
          logining: !1,
          notification: {},
          tab: "all",
          loading: !1,
          waitingResult: !1,
          clickSubmit: !1,
          clickInvite: !1,
          progressValue: 50,
          showModal: "gameExplain",
          rollUnder: 60,
          quota: 1,
          quotaMax: "500",
          quotaMin: "0.0001",
          isFocus: !1,
          maxCount: 30,
          current: {seed: "", betAsset: "", payoutAsset: "0.0000 EOS", diceNumber: "", payRatio: "", betReceipt: null},
          fee: 0,
          data: [],
          userData: [],
          tableRows: null,
          giveRatio: 100,
          freeQuantity: "",
          initQuota: 1,
          rollingNumber: 5,
          scatter: null,
          rollResult: "",
          icon: {},
          contract_eos: null,
          contract_dice: null,
          contract_login: null,
          contract_stake: null,
          count: 0,
          timer: null,
          timer1: null,
          timer2: null,
          timer3: null,
          timer4: null,
          rank: {
            maxWager: {key: "maxBet"},
            maxPayout: {key: "maxPayout"},
            netProfit: {key: "netProfit"},
            totalWager: {key: "wagered"},
            totalPayout: {key: "payout"},
            playCount: {key: "count"}
          },
          activeRankKey: "",
          tableHeadName: "",
          openAuto: !1,
          showAutoTip: !1
        }
      },
      components: {Progress: m.a, RankingTableComp: k.a, RankingComp: w.a, NotificationComp: g.a},
      watch: {
        showAutoTip: function () {
          var t = this;
          this.showAutoTip && setTimeout(function () {
            t.showAutoTip = !1
          }, 2200)
        },
        quota: function () {
          this.openAuto = !1, this.quotaHandler()
        },
        isFocus: function (t) {
          t || this.quotaHandler()
        },
        "$store.state.houseBalance": {
          handler: function () {
            this.updateQuotaMax(), this.quotaHandler()
          }, deep: !0
        },
        "$store.state.currentCurrency": "changeCurrencyHandle",
        "$store.state.currentLang": "setRankTitle",
        rollUnder: function () {
          this.openAuto = !1
        }
      },
      computed: {
        tableData: function () {
          return "all" === this.tab ? this.data : "my" === this.tab ? this.userData : void 0
        }, account: function () {
          return this.$store.state.account || {}
        }, winChance: function () {
          return this.rollUnder - 1
        }, payRatio: function () {
          return 1 / ((this.rollUnder - 1) / 100) * (100 - this.fee) / 100
        }, winQuota: function () {
          return Math.floor(this.payRatio * this.quota * 1e4) / 1e4
        }
      },
      methods: {
        setRankTitle: function () {
          var t = this;
          try {
            var n = this.$store.state.currentLang.ranking_table;
            b()(this.rank).forEach(function (e, a) {
              t.rank[e].title = n[a], t.activeRankKey && t.activeRankKey === t.rank[e].key && (t.tableHeadName = t.rank[e].title)
            })
          } catch (t) {
            console.log("setRankTitle error!", t)
          }
        }, userLogin: function () {
          this.$store.commit("setGoLogin")
        }, receiveDICE: function () {
          var t = d()(p.a.mark(function t() {
            return p.a.wrap(function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, this.contract_dice.signup({
                    owner: this.$store.state.account.name,
                    quantity: v.a.tokens.DICE.freeQuantity
                  }, {authorization: this.$store.state.account.name + "@" + this.$store.state.account.authority});
                case 3:
                  this.$store.commit("setShowModal", "receiveDice"), this.$getCurrency(), t.next = 11;
                  break;
                case 7:
                  t.prev = 7, t.t0 = t.catch(0), console.log("e:", t.t0), this.$message({
                    showClose: !0,
                    message: this.errorHandler(t.t0),
                    type: "error",
                    duration: 1800
                  });
                case 11:
                case"end":
                  return t.stop()
              }
            }, t, this, [[0, 7]])
          }));
          return function () {
            return t.apply(this, arguments)
          }
        }(), updateHouseBalance: function () {
          var t = d()(p.a.mark(function t() {
            var n, e, a, r, i, o, s = this;
            return p.a.wrap(function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  for (i in n = void 0, t.prev = 1, e = [], a = [], r = [], this.$config.tokens) e.push(this.eos.getCurrencyBalance(this.$config.tokens[i].key, this.$config.transfer.name, this.$config.tokens[i].name)), a.push(this.$config.tokens[i].name), r.push(this.$config.tokens[i].precision);
                  return t.next = 8, c.a.all(e);
                case 8:
                  n = t.sent, o = {}, n.forEach(function (t, n) {
                    t[0] ? o[a[n]] = t[0] : o[a[n]] = s.$utils.getZeroByPrecision(r[n]) + " " + a[n]
                  }), this.$store.commit("updateHouseBalance", o), t.next = 17;
                  break;
                case 14:
                  return t.prev = 14, t.t0 = t.catch(1), t.abrupt("return");
                case 17:
                case"end":
                  return t.stop()
              }
            }, t, this, [[1, 14]])
          }));
          return function () {
            return t.apply(this, arguments)
          }
        }(), updateQuotaMax: function () {
          if (this.$store.state.houseBalance[this.$store.state.currentCurrency]) {
            var t = this.$store.state.houseBalance[this.$store.state.currentCurrency].split(" ")[0],
              n = (this.rollUnder - 1) / 100, e = t / Math.floor(Math.log(1e-10) / Math.log(n)) * n / (1 - n) * .9;
            this.quotaMax = e, this.quotaHandler()
          }
        }, quotaHandler: function () {
          var t = this.quota.toString();
          if (this.isFocus) {
            var n = (t = t.replace(/[^\d.]/g, "").replace(/^\./, "")).indexOf(".");
            if (n > -1) {
              var e = t.indexOf(".", n + 1);
              e > -1 ? t = t.substr(0, e) : t.split(".")[1].length > 4 && (t = this.float4(t, this.$config.tokens[this.$store.state.currentCurrency].precision))
            }
            t = Number(t) > this.quotaMax ? this.quotaMax : t
          } else t = Number(t) > this.quotaMax ? this.quotaMax : t, t = Number(t) < this.quotaMin ? this.quotaMin : t, t = this.float4(t, this.$config.tokens[this.$store.state.currentCurrency].precision);
          "EOS" === this.$store.state.currentCurrency && this.$store.state.account.EOS ? Number(t) > this.$store.state.account.EOS.split(" ")[0] && (t = this.$store.state.account.EOS.split(" ")[0], Number(t) < this.quotaMin && (t = this.float4(this.quotaMin, this.$config.tokens[this.$store.state.currentCurrency].precision))) : "DICE" === this.$store.state.currentCurrency && this.$store.state.account.DICE ? Number(t) > this.$store.state.account.DICE.split(" ")[0] && (t = this.$store.state.account.DICE.split(" ")[0], Number(t) < this.quotaMin && (t = this.float4(this.quotaMin, this.$config.tokens[this.$store.state.currentCurrency].precision))) : this.$store.state.account[this.$store.state.currentCurrency] && Number(t) > this.$store.state.account[this.$store.state.currentCurrency].split(" ")[0] && (t = this.$store.state.account[this.$store.state.currentCurrency].split(" ")[0], Number(t) < this.quotaMin && (t = this.float4(this.quotaMin, this.$config.tokens[this.$store.state.currentCurrency].precision))), this.quota = t
        }, getRollUnder: function (t) {
          this.rollUnder = t, this.updateQuotaMax()
        }, rollBonuses: function () {
          var t = d()(p.a.mark(function t() {
            var n;
            return p.a.wrap(function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  if (!this.$store.state.bonuses.clicked) {
                    t.next = 2;
                    break
                  }
                  return t.abrupt("return");
                case 2:
                  return this.$store.commit("setBonuses", {clicked: !0}), t.prev = 3, t.next = 6, generateChecksum(this);
                case 6:
                  return n = t.sent, t.next = 9, this.contract_login.draw({
                    from: this.$store.state.account.name,
                    b: n.b,
                    c: n.c
                  }, {authorization: this.$store.state.account.name + "@" + this.$store.state.account.authority});
                case 9:
                  this.$store.commit("setBonuses", {loading: !0}), t.next = 17;
                  break;
                case 12:
                  t.prev = 12, t.t0 = t.catch(3), console.log("e:", t.t0), this.$store.commit("setBonuses", {clicked: !1}), this.$message({
                    showClose: !0,
                    message: this.$errorHandler(t.t0),
                    type: "error",
                    duration: 1800
                  });
                case 17:
                case"end":
                  return t.stop()
              }
            }, t, this, [[3, 12]])
          }));
          return function () {
            return t.apply(this, arguments)
          }
        }(), hasBetResult: function () {
          return this.current.betReceipt && this.current.betReceipt.seed == this.current.seed
        }, setBetReceipt: function (t) {
          this.current.betReceipt = t
        }, tryShowBetResult: function () {
          var t = this;
          if (this.loading && this.hasBetResult()) {
            this.clickSubmit = !1, this.loading = !1, clearTimeout(this.timer3), this.openAuto && setTimeout(function () {
              console.log("auto start ...."), t.submit()
            }, 1500), this.current.payoutAsset = this.current.betReceipt.payoutAsset, this.current.diceNumber = this.current.betReceipt.diceNumber, this.rollResult = this.current.betReceipt.diceNumber;
            var n = this.current.payoutAsset.split(" ")[0] > 0;
            this.notification = n ? {
              title: this.$store.state.currentLang.notification[0] + " " + this.current.betAsset,
              body: this.$store.state.currentLang.notification[1] + " " + this.current.diceNumber + "，" + this.$store.state.currentLang.notification[2] + " " + this.current.payoutAsset,
              type: "success",
              show: !0
            } : {
              title: this.$store.state.currentLang.notification[3] + " " + this.current.betAsset,
              body: this.$store.state.currentLang.notification[1] + " " + this.current.diceNumber + "，" + this.$store.state.currentLang.notification[4] + " " + this.current.betAsset,
              type: "error",
              show: !0
            }, setTimeout(function () {
              t.$getCurrency()
            }, 2e3), this.$getCurrency(function (e) {
              var a = t.$store.state.currentCurrency;
              "EOS" !== a && "DICE" !== a && console.log("error:Params type error"), t.numberMoveAnimation(a, n).then(function (n) {
                var a = JSON.parse(o()(t.$store.state.account));
                for (var r in e) a[r] = e[r];
                t.$store.commit("setAccount", a)
              })
            })
          }
        }, numberMoveAnimation: function (t, n, e) {
          var a = this;
          return new c.a(function (r, i) {
            var o = void 0;
            "EOS" === t ? (a.numberMoveAnimation("DICE", !0, "eos"), (o = document.querySelector("#move-num-1")).innerHTML = n ? a.current.payoutAsset : a.quota + "EOS") : (o = document.querySelector("#move-num-2")).innerHTML = "eos" == e ? a.float4(a.quota * (a.giveRatio / 100), a.$config.tokens[a.$store.state.currentCurrency].precision) + t : n ? a.current.payoutAsset : a.quota + t;
            try {
              o.style.transition = "none", o.style.opacity = "1", n ? (o.style.top = "90px", o.style.color = "#42e775") : (o.style.top = "9px", o.style.color = "#bc1b26"), o.style.display = "block", o.style.transition = "all .9s", setTimeout(function () {
                o.style.top = n ? "9px" : "90px", o.style.opacity = ".15", setTimeout(function () {
                  o.style.display = "none", r()
                }, 900)
              }, 10)
            } catch (t) {
              r()
            }
          })
        }, submit: function () {
          var t = d()(p.a.mark(function t() {
            var n, e, a, r, i, o = this;
            return p.a.wrap(function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  if (console.log("accoutn:", this.$store.state.account), !this.$store.state.account[this.$store.state.currentCurrency]) {
                    t.next = 12;
                    break
                  }
                  if (t.prev = 2, !(Number(this.quota) > this.$store.state.account[this.$store.state.currentCurrency].split(" ")[0])) {
                    t.next = 5;
                    break
                  }
                  return t.abrupt("return", this.$message({
                    showClose: !0,
                    message: this.$store.state.currentCurrency + " " + this.$store.state.currentLang.message[0],
                    type: "warning",
                    duration: 2300
                  }));
                case 5:
                  t.next = 10;
                  break;
                case 7:
                  return t.prev = 7, t.t0 = t.catch(2), t.abrupt("return", console.log("submit error!", t.t0));
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  return t.abrupt("return", console.log("读取account余额失败"));
                case 13:
                  if (!this.eos) {
                    t.next = 31;
                    break
                  }
                  if (!this.clickSubmit) {
                    t.next = 16;
                    break
                  }
                  return t.abrupt("return");
                case 16:
                  if (this.clickSubmit = !0, n = this.$store.state.account.name, e = this.randomString(18), a = this.quota + " " + this.$store.state.currentCurrency, r = void 0, !this.$contract || !this.$contract[this.$store.state.currentCurrency]) {
                    t.next = 25;
                    break
                  }
                  r = this.$contract[this.$store.state.currentCurrency], t.next = 26;
                  break;
                case 25:
                  return t.abrupt("return", console.log("提取合约失败"));
                case 26:
                  i = this.getRef(this.$store.state.account.name), console.log("ref", i), this.current.seed = e, this.current.betAsset = a, r.transfer({
                    from: n,
                    to: v.a.transfer.name,
                    quantity: a,
                    memo: "action:bet,seed:" + e + ",rollUnder:" + this.rollUnder + i
                  }, {authorization: this.$store.state.account.name + "@" + this.$store.state.account.authority}).then(function (t) {
                    o.loading = !0, clearTimeout(o.timer3), o.timer3 = setTimeout(function () {
                      o.clickSubmit = !1, o.loading = !1;
                      var t = "https://www.myeoskit.com/account/" + o.$store.state.account.name,
                        n = o.$store.state.currentLang.modal[3][0] + t + o.$store.state.currentLang.modal[3][1];
                      o.$alert(n, "", {
                        dangerouslyUseHTMLString: !0,
                        confirmButtonText: o.$store.state.currentLang.modal[3][2]
                      })
                    }, 3e4), o.tryShowBetResult()
                  }).catch(function (t) {
                    clearTimeout(o.timer3), o.loading = !1, o.clickSubmit = !1, o.$message({
                      showClose: !0,
                      message: o.$errorHandler(t),
                      duration: 2500
                    }), console.log("error:", t), o.openAuto && setTimeout(function () {
                      console.log("auto start ...."), o.submit()
                    }, 1500)
                  });
                case 31:
                case"end":
                  return t.stop()
              }
            }, t, this, [[2, 7]])
          }));
          return function () {
            return t.apply(this, arguments)
          }
        }(), randomString: function (t) {
          for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890", e = "", a = 0; a < t; a++) e += n.charAt(Math.floor(Math.random() * n.length));
          return e
        }, runRollingNumber: function () {
          var t = this;
          setInterval(function () {
            t.rollingNumber = Math.floor(97 * Math.random() + 2)
          }, 50)
        }, changeCurrencyHandle: function () {
          var t = this;
          this.openAuto = !1, this.tableRows && (v.a.tokens[this.$store.state.currentCurrency] ? this.tableRows.forEach(function (n, e) {
            n.contractName == v.a.tokens[t.$store.state.currentCurrency].contractName && n.symbolType == v.a.tokens[t.$store.state.currentCurrency].symbolType && (t.fee = n.fee / 100, t.quotaMin = n.min / Math.pow(10, v.a.tokens[t.$store.state.currentCurrency].precision), t.quota = t.initQuota)
          }) : console.log("config信息可能存在错误"), this.updateQuotaMax())
        }, init: function () {
          var t = d()(p.a.mark(function t() {
            var n, e, a, i = this;
            return p.a.wrap(function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  return this.updateHouseBalance(), setInterval(function () {
                    i.updateHouseBalance()
                  }, 5e3), t.prev = 2, t.next = 5, c.a.all([this.eos.getTableRows(v.a.table.symbolvar), this.eos.getTableRows(v.a.table.globalvar), this.eos.getTableRows(r()(r()({}, v.a.table.globalvar), {lower_bound: 3}))]);
                case 5:
                  n = t.sent, this.tableRows = n[0].rows, this.changeCurrencyHandle(), this.giveRatio = n[1].rows[0].value, e = n[2], a = {}, e.rows.forEach(function (t, n) {
                    3 === t.id ? a.min = t.value : 4 === t.id && (a.max = t.value)
                  }), a.min && a.max ? this.$store.commit("setRollLimit", a) : console.log("roll上下限度 获取失败！"), t.next = 19;
                  break;
                case 15:
                  return t.prev = 15, t.t0 = t.catch(2), console.log("getTableRows failed", t.t0), t.abrupt("return");
                case 19:
                case"end":
                  return t.stop()
              }
            }, t, this, [[2, 15]])
          }));
          return function () {
            return t.apply(this, arguments)
          }
        }()
      },
      mounted: function () {
        var t = this;
        document.addEventListener("click", function () {
          t.notification = !1, t.rollResult = ""
        }), this.runRollingNumber(), window.addEventListener("blur", function () {
        })
      },
      beforeDestroy: function () {
        this.openAuto = !1;
        var t = {quota: this.quota, rollUnder: this.rollUnder};
        window.sessionStorage.setItem("diceRecord", o()(t))
      },
      beforeMount: function () {
        var t = this;
        this.$socket && this.$socket.on("betReceipt", function (n) {
          if ("betReceipt" === n.type && (t.data.unshift(n.payload.receipt), t.data.length > t.maxCount && (t.data = t.data.slice(0, t.maxCount)), t.$store.state.account.name && t.$store.state.account.name === n.payload.receipt.accountName)) {
            if (t.userData.unshift(n.payload.receipt), t.userData.length > t.maxCount && (t.userData = t.userData.slice(0, t.maxCount)), t.current.seed !== n.payload.receipt.seed) return;
            t.setBetReceipt(n.payload.receipt), t.tryShowBetResult()
          }
        }), this.init()
      },
      created: function () {
        if (this.$moment = x.a, this.float4 = y.a.float4, this.freeQuantity = v.a.tokens.DICE.freeQuantity, this.setRankTitle(), window.sessionStorage.getItem("diceRecord")) {
          var t = JSON.parse(window.sessionStorage.getItem("diceRecord"));
          this.quota = t.quota, this.rollUnder = t.rollUnder, this.progressValue = t.rollUnder
        }
      }
    }
  }, jK8q: function (t, n, e) {
    (t.exports = e("FZ+f")(!1)).push([t.i, "\n.game-comp-dice .el-switch__core {\r\n    width: 55px !important;\r\n    height: 26px;\r\n    border-radius: 14px;\n}\n.game-comp-dice  .el-switch__core:after {\r\n    width: 20px;\r\n    height: 20px;\n}\n.game-comp-dice  .el-switch.is-checked .el-switch__core::after {\r\n    left: 100%;\r\n    margin-left: -22px;\r\n    top:2px;\n}\n.no-spin::-webkit-inner-spin-button, .no-spin::-webkit-outer-spin-button {\r\n    -webkit-appearance: none !important;\r\n    margin: 0 !important;\r\n    -moz-appearance:textfield !important;\n}\r\n", ""])
  }, jeQS: function (t, n, e) {
    "use strict";
    n.a = {
      data: function () {
        return {}
      }, props: ["data"], computed: {
        notification: function () {
          return this.data || {}
        }
      }
    }
  }, mD8w: function (t, n, e) {
    "use strict";
    var a = e("HqG3"), r = e("wmcP"), i = !1;
    var o = function (t) {
      i || e("7+ql")
    }, s = e("VU/8")(a.a, r.a, !1, o, null, null);
    s.options.__file = "components/common/ranking.vue", n.a = s.exports
  }, mtWM: function (t, n, e) {
    t.exports = e("tIFN")
  }, oJlt: function (t, n, e) {
    "use strict";
    var a = e("cGG2");
    t.exports = function (t) {
      var n, e, r, i = {};
      return t ? (a.forEach(t.split("\n"), function (t) {
        r = t.indexOf(":"), n = a.trim(t.substr(0, r)).toLowerCase(), e = a.trim(t.substr(r + 1)), n && (i[n] = i[n] ? i[n] + ", " + e : e)
      }), i) : i
    }
  }, p1b6: function (t, n, e) {
    "use strict";
    var a = e("cGG2");
    t.exports = a.isStandardBrowserEnv() ? {
      write: function (t, n, e, r, i, o) {
        var s = [];
        s.push(t + "=" + encodeURIComponent(n)), a.isNumber(e) && s.push("expires=" + new Date(e).toGMTString()), a.isString(r) && s.push("path=" + r), a.isString(i) && s.push("domain=" + i), !0 === o && s.push("secure"), document.cookie = s.join("; ")
      }, read: function (t) {
        var n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null
      }, remove: function (t) {
        this.write(t, "", Date.now() - 864e5)
      }
    } : {
      write: function () {
      }, read: function () {
        return null
      }, remove: function () {
      }
    }
  }, pBtG: function (t, n, e) {
    "use strict";
    t.exports = function (t) {
      return !(!t || !t.__CANCEL__)
    }
  }, "pop+": function (t, n, e) {
    var a = e("ddaO");
    "string" == typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
    (0, e("rjj0").default)("a1076bc4", a, !1, {sourceMap: !1})
  }, pxG4: function (t, n, e) {
    "use strict";
    t.exports = function (t) {
      return function (n) {
        return t.apply(null, n)
      }
    }
  }, qRfI: function (t, n, e) {
    "use strict";
    t.exports = function (t, n) {
      return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t
    }
  }, t8qj: function (t, n, e) {
    "use strict";
    t.exports = function (t, n, e, a, r) {
      return t.config = n, e && (t.code = e), t.request = a, t.response = r, t
    }
  }, tIFN: function (t, n, e) {
    "use strict";
    var a = e("cGG2"), r = e("JP+z"), i = e("XmWM"), o = e("KCLY");

    function s(t) {
      var n = new i(t), e = r(i.prototype.request, n);
      return a.extend(e, i.prototype, n), a.extend(e, n), e
    }

    var c = s(o);
    c.Axios = i, c.create = function (t) {
      return s(a.merge(o, t))
    }, c.Cancel = e("dVOP"), c.CancelToken = e("cWxy"), c.isCancel = e("pBtG"), c.all = function (t) {
      return Promise.all(t)
    }, c.spread = e("pxG4"), t.exports = c, t.exports.default = c
  }, thJu: function (t, n, e) {
    "use strict";
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function r() {
      this.message = "String contains an invalid character"
    }

    r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", t.exports = function (t) {
      for (var n, e, i = String(t), o = "", s = 0, c = a; i.charAt(0 | s) || (c = "=", s % 1); o += c.charAt(63 & n >> 8 - s % 1 * 8)) {
        if ((e = i.charCodeAt(s += .75)) > 255) throw new r;
        n = n << 8 | e
      }
      return o
    }
  }, uece: function (t, n, e) {
    "use strict";
    var a = function () {
      var t = this, n = t.$createElement, e = t._self._c || n;
      return e("div", {staticClass: "game-comp-dice"}, [e("div", {staticClass: "center-view"}, [e("div", {staticClass: "ranking-container"}, [e("RankingComp")], 1), e("div", {staticClass: "ctrl-board"}, [t._e(), e("ul", {staticClass: "row-1"}, [e("li", [e("div", {staticClass: "title one"}, [t._v(t._s(t.$store.state.currentLang.dice[0]))]), e("ol", [e("li", {
        staticClass: "tokens-icon",
        class: "first",
        style: "background-image:url(" + t.$config.tokens[t.$store.state.currentCurrency].icon + ");font-size:20px;font-weight:600"
      }, [e("i", {}), e("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: t.quota,
          expression: "quota"
        }], staticClass: "no-spin", attrs: {spellcheck: "false"}, domProps: {value: t.quota}, on: {
          focus: function (n) {
            t.isFocus = !0
          }, blur: function (n) {
            t.isFocus = !1
          }, input: function (n) {
            n.target.composing || (t.quota = n.target.value)
          }
        }
      }), e("span", [t._v(t._s(t.$store.state.currentCurrency))])]), e("li", {
        staticClass: "btns",
        on: {
          click: function (n) {
            t.quota = t.quota / 2
          }
        }
      }, [t._v("1/2")]), e("li", {
        staticClass: "btns add-line", on: {
          click: function (n) {
            t.quota = 2 * t.quota
          }
        }
      }, [t._v("2X")]), e("li", {
        staticClass: "btns", on: {
          click: function (n) {
            t.quota = t.quotaMax
          }
        }
      }, [t._v("MAX")])])]), e("li", [e("div", {staticClass: "title two tokens-icon"}, [t._v(t._s(t.$store.state.currentLang.dice[1]))]), e("ol", [e("li", {
        staticClass: "tokens-icon",
        style: "background-image:url(" + t.$config.tokens[t.$store.state.currentCurrency].icon + "); font-size:20px;font-weight:600",
        attrs: {id: "win-currency"}
      }, [t._v(t._s(t.float4(t.winQuota, t.$config.tokens[t.$store.state.currentCurrency].precision))), e("em", {
        staticStyle: {
          "margin-left": "5px",
          "font-size": ".7em",
          color: "#999"
        }
      }, [t._v(t._s(this.$store.state.currentCurrency))])])])])]), e("ul", {staticClass: "row-2"}, [e("li", [e("div", {staticClass: "title"}, [t._v(t._s(t.$store.state.currentLang.dice[2]))]), e("div", {staticClass: "content min50"}, [t._v(t._s(t.rollUnder) + " "), e("i")])]), e("li", {staticClass: "add-line"}, [e("div", {staticClass: "title"}, [t._v(t._s(t.$store.state.currentLang.dice[3]))]), e("div", {staticClass: "content"}, [t._v(t._s(Math.floor(1e3 * t.payRatio) / 1e3) + "x")])]), e("li", [e("div", {staticClass: "title"}, [t._v(t._s(t.$store.state.currentLang.dice[4]))]), e("div", {staticClass: "content"}, [t._v(t._s(t.winChance) + "%")])])]), e("div", {staticClass: "prog-bar"}, [e("Progress", {
        attrs: {
          value: t.progressValue,
          result: t.rollResult
        }, on: {currentValue: t.getRollUnder}
      })], 1), e("div", {staticClass: "auto-ctrl"}, [e("span", [t._v(t._s(t.$store.state.currentLang.dice[19]))]), e("el-switch", {
        staticStyle: {display: "inline-block"},
        attrs: {"active-color": "#13ce66", "inactive-color": "#525471", "active-text": "", "inactive-text": ""},
        model: {
          value: t.openAuto, callback: function (n) {
            t.openAuto = n
          }, expression: "openAuto"
        }
      }), e("span", {
        staticStyle: {
          color: "#fff",
          "font-weight": "600"
        }
      }, [t._v(t._s(t.openAuto ? t.$store.state.currentLang.dice[20] : t.$store.state.currentLang.dice[21]))]), e("i", {
        staticClass: "el-icon-question",
        on: {
          click: function (n) {
            t.showAutoTip = !0
          }
        }
      }, [e("em", {style: "display:" + (t.showAutoTip ? "block" : "")}, [t._v(t._s(t.$store.state.currentLang.dice[22]))])])], 1), e("div", {staticClass: "btn-bar"}, [t.account.EOS ? e("div", [t.loading ? e("button", {staticStyle: {"font-size": "24px"}}, [t._v(t._s(t.rollingNumber))]) : e("button", {on: {click: t.submit}}, [t._v(t._s(t.$store.state.currentLang.dice[5]) + " "), t.clickSubmit ? e("i", {staticClass: "el-icon-loading"}) : t._e()])]) : e("div", [e("button", {
        staticClass: "login",
        on: {click: t.userLogin}
      }, [t._v(t._s(t.$store.state.currentLang.dice[18])), t.logining ? e("i", {staticClass: "el-icon-loading"}) : t._e()])]), t.account.EOS ? e("div", {
        staticClass: "current-eos ",
        style: "background-image:url(" + t.$config.tokens.EOS.icon + ");"
      }, [t._v("\r\n                    " + t._s(t.account.EOS ? t.account.EOS.split(" ")[0] : "") + " "), e("span", {
        staticStyle: {
          "font-size": ".7em",
          color: "#999"
        }
      }, [t._v("EOS")]), e("div", {
        staticClass: "move-num",
        attrs: {id: "move-num-1"}
      }, [t._v(t._s("EOS" === t.$store.state.currentCurrency ? this.current.payoutAsset : ""))])]) : t._e(), t.account.DICE ? e("div", {
        staticClass: "current-eos dice tokens-icon",
        style: "background-image:url(" + ("EOS" === t.$store.state.currentCurrency ? t.$config.tokens.DICE.icon : t.$config.tokens[t.$store.state.currentCurrency].icon) + ");"
      }, [t._v("\r\n                    " + t._s("EOS" === t.$store.state.currentCurrency ? t.account.DICE.split(" ")[0] : t.account[t.$store.state.currentCurrency] ? t.account[t.$store.state.currentCurrency].split(" ")[0] : "N/A") + " "), e("span", {
        staticStyle: {
          "font-size": ".7em",
          color: "#999"
        }
      }, [t._v(t._s("EOS" === this.$store.state.currentCurrency ? "DICE" : this.$store.state.currentCurrency) + " ")]), "DICE" === t.$store.state.currentCurrency || "EOS" === t.$store.state.currentCurrency ? e("i", {
        staticClass: "el-icon-question",
        on: {
          click: function (n) {
            t.$store.commit("setShowModal", "openDiceMessage")
          }
        }
      }) : t._e(), e("div", {
        staticClass: "move-num",
        attrs: {id: "move-num-2"}
      }, [t._v(t._s("DICE" === t.$store.state.currentCurrency ? this.current.payoutAsset : t.float4(t.quota * (this.giveRatio / 100), t.$config.tokens[t.$store.state.currentCurrency].precision) + "DICE"))])]) : t._e()]), t._e()]), "EOS" === t.$store.state.currentCurrency ? e("div", {staticClass: "tips-message"}, [e("ul", [e("li", [t._v(t._s(t.$store.state.currentLang.dice[8])), e("em", [t._v(t._s(t.float4(t.quota * (this.giveRatio / 100), t.$config.tokens.DICE.precision)))]), t._v(" DICE")]), e("li", [t._v(t._s(t.$store.state.currentLang.dice[9]) + " " + t._s(this.giveRatio > 100 ? this.giveRatio / 100 + "x" : this.giveRatio + "%") + "   DICE ")]), e("i", {
        staticClass: "el-icon-question",
        on: {
          click: function (n) {
            t.$store.commit("setShowModal", "openDiceMessage")
          }
        }
      })])]) : t._e(), e("div", {
        staticClass: "table-list",
        staticStyle: {"text-align": "left", "min-height": "550px"}
      }, [e("ul", {staticClass: "tabs"}, [e("li", {
        class: "all" === t.tab ? "active" : "", on: {
          click: function (n) {
            t.tab = "all"
          }
        }
      }, [t._v(t._s(t.$store.state.currentLang.dice[10]))]), e("li", {
        class: "my" === t.tab ? "active" : "",
        on: {
          click: function (n) {
            t.tab = "my"
          }
        }
      }, [t._v(t._s(t.$store.state.currentLang.dice[11]))]), t._l(Object.keys(t.rank), function (n, a) {
        return e("li", {
          key: a, class: t.tab === t.rank[n].key ? "active" : "", on: {
            click: function (e) {
              t.activeRankKey = t.tab = t.rank[n].key, t.tableHeadName = t.rank[n].title
            }
          }
        }, [t._v(t._s(t.rank[n].title))])
      })], 2), "all" === t.tab || "my" === t.tab ? e("table", {
        staticClass: "table table-striped table-bordered",
        attrs: {cellspacing: "0"}
      }, [e("thead", [e("tr", [e("th", {staticStyle: {width: "14%"}}, [t._v(t._s(t.$store.state.currentLang.dice[12]))]), e("th", {staticStyle: {width: "8%"}}, [t._v(t._s(t.$store.state.currentLang.dice[13]))]), e("th", {
        staticClass: "only-pc",
        staticStyle: {width: "12%"}
      }, [t._v(t._s(t.$store.state.currentLang.dice[14]))]), e("th", {
        staticClass: "only-pc",
        staticStyle: {width: "12%"}
      }, [t._v(t._s(t.$store.state.currentLang.dice[15]))]), e("th", {
        staticClass: "only-pc",
        staticStyle: {width: "8%"}
      }, [t._v(t._s(t.$store.state.currentLang.dice[16]))]), e("th", {staticStyle: {width: "15%"}}, [t._v(t._s(t.$store.state.currentLang.dice[17]))])])]), e("tbody", t._l(t.tableData, function (n, a) {
        return e("tr", {
          key: a,
          class: (n.accountName === t.account.name ? "add-flag" : "") + (n.rollUnder > n.diceNumber ? " win" : "")
        }, [e("td", [t._v(t._s(t.$moment(1e3 * n.now).format("HH:mm:ss"))), e("i"), e("em")]), e("td", [t._v(t._s(n.accountName)), e("em")]), e("td", {staticClass: "only-pc"}, [t._v(t._s(n.rollUnder)), e("em")]), e("td", {staticClass: "only-pc"}, [t._v(t._s(n.betAsset)), e("em")]), e("td", {staticClass: "only-pc"}, [t._v(t._s(n.diceNumber)), e("em")]), e("td", [t._v(t._s(n.rollUnder > n.diceNumber ? n.payoutAsset : "")), e("em")])])
      }))]) : e("div", {staticClass: "table-ranking"}, [e("RankingTableComp", {
        attrs: {
          activeRankKey: t.activeRankKey,
          tableHeadName: t.tableHeadName
        }
      })], 1), e("div", {staticStyle: {height: "20px"}})])]), e("NotificationComp", {attrs: {data: t.notification}})], 1)
    };
    a._withStripped = !0;
    var r = {render: a, staticRenderFns: []};
    n.a = r
  }, wmcP: function (t, n, e) {
    "use strict";
    var a = function () {
      var t = this, n = t.$createElement, e = t._self._c || n;
      return e("div", {staticClass: "ranking-comp"}, [t.todayDate.isSame(t.currentDate) ? e("h2", {
        on: {
          click: function (n) {
            t.isMore = !t.isMore
          }
        }
      }, [e("i", {staticClass: "fa fa-bar-chart-o"}), t._v(" " + t._s(t.$store.state.currentLang.ranking[0]) + t._s(t.$store.state.currentLang.ranking[1]) + " (" + t._s(t.timeLeft) + ")")]) : e("h2", {
        on: {
          click: function (n) {
            t.isMore = !t.isMore
          }
        }
      }, [e("i", {staticClass: "fa fa-bar-chart-o"}), t._v(" " + t._s(t.currentDate.format("YYYY-MM-DD")) + t._s(t.$store.state.currentLang.ranking[1]))]), e("ul", {
        class: "table-header " + (t.isMore ? "show-more" : ""),
        staticStyle: {margin: "0", padding: "0"}
      }, [e("li", {
        staticClass: "t-header",
        staticStyle: {height: "40px", padding: "6px 20px 0", "padding-top": "6px"}
      }, [e("span", {
        staticStyle: {
          "text-align": "center",
          flex: "0 0 52px",
          display: "inline-block"
        }
      }, [t._v(t._s(t.$store.state.currentLang.ranking[5]))]), e("span", [t._v(t._s(t.$store.state.currentLang.ranking[2]))]), e("span", [t._v(t._s(t.currentDate >= t.payoutRankDate ? t.$store.state.currentLang.ranking[8] : t.$store.state.currentLang.ranking[3]))]), e("span", [t._v(t._s(t.$store.state.currentLang.ranking[4]))])])]), e("ul", {
        class: "table-list data " + (t.isMore ? "show-more" : ""),
        attrs: {id: "EOS" === t.$store.state.currentCurrency ? "" : "is-dice"}
      }, t._l(t.rankList instanceof Array ? t.rankList : [], function (n, a) {
        return e("li", {
          key: a,
          class: "items top" + n.rank
        }, [e("span", [t._v(t._s(n.rank))]), e("span", [t._v(t._s(n.name))]), e("span", [e("em", {staticStyle: {"font-weight": "600"}}, [t._v(t._s(t.formatNumber(n.wager.split(" ")[0])))]), e("em", {
          staticStyle: {
            "font-size": "12px",
            "padding-left": "4px"
          }
        }, [t._v(t._s(n.wager.split(" ")[1]))])]), -1 !== n.prize.indexOf(" ") ? e("span", [e("em", {
          staticStyle: {
            "font-weight": "600",
            color: "#29e08d"
          }
        }, [t._v(t._s(n.prize.split(" ")[0]))]), e("em", {
          staticStyle: {
            "font-size": "12px",
            "padding-left": "4px"
          }
        }, [t._v(t._s(n.prize.split(" ")[1]))])]) : e("span", [e("em", {
          staticStyle: {
            "font-size": "12px",
            "padding-left": "4px"
          }
        }, [t._v(t._s(n.prize))])])])
      })), e("ul", {class: "table-list user " + (t.isMore ? "show-more" : "")}, [t.user ? e("li", {class: "items user top" + t.user.rank}, [e("span", [t._v(t._s(t.user.rank))]), e("span", [t._v(t._s(t.user.name))]), e("span", [e("em", {staticStyle: {"font-weight": "600"}}, [t._v(t._s(t.formatNumber(t.user.wager.split(" ")[0])))]), e("em", {
        staticStyle: {
          "font-size": "12px",
          "padding-left": "4px"
        }
      }, [t._v(t._s(t.user.wager.split(" ")[1]))])]), e("span", [e("em", {
        staticStyle: {
          "font-weight": "600",
          color: "#29e08d"
        }
      }, [t._v(t._s(t.user.prize.split(" ")[0]))]), e("em", {
        staticStyle: {
          "font-size": "12px",
          "padding-left": "4px"
        }
      }, [t._v(t._s(t.user.prize.split(" ")[1]))])])]) : e("li", {staticClass: "items user"}, [e("span", [t._v("-")]), e("span", [t._v("-")]), t._m(0), e("span")])]), e("div", {
        class: "info-font " + (t.isMore ? "show-more" : ""),
        staticStyle: {"padding-left": "15px", "padding-bottom": "5px", color: "#BBB", "font-size": "13px"}
      }, [t._v(t._s(t.$store.state.currentLang.ranking[7]))]), e("div", {staticClass: "flag"}, [e("div", {staticClass: "msg"}, [e("p", {
        staticClass: "neon1",
        staticStyle: {
          color: "#e91e63",
          "-webkit-animation": "neon1 0.75s ease-in-out infinite alternate",
          "-moz-animation": "neon1 0.75s ease-in-out infinite alternate",
          animation: "neon1 0.75s ease-in-out infinite alternate"
        }
      }, [t._v("\n                    " + t._s(t.giveAwayPrize) + "\n                ")]), e("p", [t._v(t._s(t.$store.state.currentLang.ranking[6]))])])]), e("div", {class: "btn-ctrl " + (t.isMore ? "show-more" : "")}, [t.currentDate.isSameOrBefore(t.minDate) ? e("el-button", {
        staticStyle: {
          background: "transparent",
          cursor: "auto",
          opacity: ".2"
        }, attrs: {type: "info", icon: "el-icon-arrow-left", circle: "", size: "mini"}
      }) : e("el-button", {
        staticStyle: {background: "transparent"},
        attrs: {type: "info", icon: "el-icon-arrow-left", circle: "", size: "mini"},
        on: {
          click: function (n) {
            t.clickHandle("prev")
          }
        }
      }), t.currentDate.isSameOrAfter(t.todayDate) ? e("el-button", {
        staticStyle: {
          background: "transparent",
          cursor: "auto",
          opacity: ".2"
        }, attrs: {type: "info", icon: "el-icon-arrow-right", circle: "", size: "mini"}
      }) : e("el-button", {
        staticStyle: {background: "transparent"},
        attrs: {type: "info", icon: "el-icon-arrow-right", circle: "", size: "mini"},
        on: {
          click: function (n) {
            t.clickHandle("next")
          }
        }
      })], 1)])
    };
    a._withStripped = !0;
    var r = {
      render: a, staticRenderFns: [function () {
        var t = this.$createElement, n = this._self._c || t;
        return n("span", [n("em", {staticStyle: {"font-weight": "600"}}, [this._v("0.0000")]), n("em", {
          staticStyle: {
            "font-size": "12px",
            "padding-left": "4px"
          }
        }, [this._v("EOS")])])
      }]
    };
    n.a = r
  }, xLtR: function (t, n, e) {
    "use strict";
    var a = e("cGG2"), r = e("TNV1"), i = e("pBtG"), o = e("KCLY");

    function s(t) {
      t.cancelToken && t.cancelToken.throwIfRequested()
    }

    t.exports = function (t) {
      return s(t), t.headers = t.headers || {}, t.data = r(t.data, t.headers, t.transformRequest), t.headers = a.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (n) {
        delete t.headers[n]
      }), (t.adapter || o.adapter)(t).then(function (n) {
        return s(t), n.data = r(n.data, n.headers, t.transformResponse), n
      }, function (n) {
        return i(n) || (s(t), n && n.response && (n.response.data = r(n.response.data, n.response.headers, t.transformResponse))), Promise.reject(n)
      })
    }
  }
});
