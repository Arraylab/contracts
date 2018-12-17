import {versions} from 'common/js/utl'

var bridge = {
  share: function (e) {
    this.postMessage('share', e)
  },
  score: function () {
    this.postMessage('score')
  },
  signature: function (t) {
    this.postMessage('signature', t)
  },
  signatureCallBack: function (cb) {
    this.onMessage('signatureCallBack', cb)
  },
  postMessage: function (e, t) {
    window.webkit.messageHandlers['yyets.' + e].postMessage(t)
  },
  onMessage: function (e, t) {
    window.yyets[e] = t
  },
  init: function () {
    var e = this
    'yyets' in window || (window.yyets = {}),
    versions.android && (this.postMessage = function (e, t) {
        window.yyets[e](t || '')
      }
    )
  }
}

// var bridge = {
//   share: function(e) {
//     this.postMessage("share", e)
//   },
//   postMessage: function(e, t) {
//     window.yyets[e](t || "")
//   },
//   onMessage: function(e, t) {
//     window.yyets[e] = t
//   },
//   init: function() {
//     var e = this;
//     "yyets"in window || (window.yyets = {})
//   }
// };
bridge.init()

export default bridge
