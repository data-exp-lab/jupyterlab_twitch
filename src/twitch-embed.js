!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.Twitch = t())
    : (e.Twitch = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 4))
    );
  })([
    function (e, t, n) {
      'use strict';
      var r = Object.prototype.hasOwnProperty,
        o = '~';
      function i() {}
      function a(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function l(e, t, n, r, i) {
        if ('function' != typeof n)
          throw new TypeError('The listener must be a function');
        var l = new a(n, r || e, i),
          s = o ? o + t : t;
        return (
          e._events[s]
            ? e._events[s].fn
              ? (e._events[s] = [e._events[s], l])
              : e._events[s].push(l)
            : ((e._events[s] = l), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
      }
      function u() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (o = !1)),
        (u.prototype.eventNames = function () {
          var e,
            t,
            n = [];
          if (0 === this._eventsCount) return n;
          for (t in (e = this._events))
            r.call(e, t) && n.push(o ? t.slice(1) : t);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(e))
            : n;
        }),
        (u.prototype.listeners = function (e) {
          var t = o ? o + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, i = n.length, a = new Array(i); r < i; r++)
            a[r] = n[r].fn;
          return a;
        }),
        (u.prototype.listenerCount = function (e) {
          var t = o ? o + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (u.prototype.emit = function (e, t, n, r, i, a) {
          var l = o ? o + e : e;
          if (!this._events[l]) return !1;
          var s,
            u,
            c = this._events[l],
            d = arguments.length;
          if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), d)) {
              case 1:
                return c.fn.call(c.context), !0;
              case 2:
                return c.fn.call(c.context, t), !0;
              case 3:
                return c.fn.call(c.context, t, n), !0;
              case 4:
                return c.fn.call(c.context, t, n, r), !0;
              case 5:
                return c.fn.call(c.context, t, n, r, i), !0;
              case 6:
                return c.fn.call(c.context, t, n, r, i, a), !0;
            }
            for (u = 1, s = new Array(d - 1); u < d; u++)
              s[u - 1] = arguments[u];
            c.fn.apply(c.context, s);
          } else {
            var p,
              f = c.length;
            for (u = 0; u < f; u++)
              switch (
                (c[u].once && this.removeListener(e, c[u].fn, void 0, !0), d)
              ) {
                case 1:
                  c[u].fn.call(c[u].context);
                  break;
                case 2:
                  c[u].fn.call(c[u].context, t);
                  break;
                case 3:
                  c[u].fn.call(c[u].context, t, n);
                  break;
                case 4:
                  c[u].fn.call(c[u].context, t, n, r);
                  break;
                default:
                  if (!s)
                    for (p = 1, s = new Array(d - 1); p < d; p++)
                      s[p - 1] = arguments[p];
                  c[u].fn.apply(c[u].context, s);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (e, t, n) {
          return l(this, e, t, n, !1);
        }),
        (u.prototype.once = function (e, t, n) {
          return l(this, e, t, n, !0);
        }),
        (u.prototype.removeListener = function (e, t, n, r) {
          var i = o ? o + e : e;
          if (!this._events[i]) return this;
          if (!t) return s(this, i), this;
          var a = this._events[i];
          if (a.fn)
            a.fn !== t ||
              (r && !a.once) ||
              (n && a.context !== n) ||
              s(this, i);
          else {
            for (var l = 0, u = [], c = a.length; l < c; l++)
              (a[l].fn !== t ||
                (r && !a[l].once) ||
                (n && a[l].context !== n)) &&
                u.push(a[l]);
            u.length
              ? (this._events[i] = 1 === u.length ? u[0] : u)
              : s(this, i);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = o ? o + e : e), this._events[t] && s(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = o),
        (u.EventEmitter = u),
        (e.exports = u);
    },
    function (e, t, n) {
      'use strict';
      var r = n(2),
        o = n(3);
      function i(e, t) {
        return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
      }
      (t.extract = function (e) {
        return e.split('?')[1] || '';
      }),
        (t.parse = function (e, t) {
          var n = (function (e) {
              var t;
              switch (e.arrayFormat) {
                case 'index':
                  return function (e, n, r) {
                    (t = /\[(\d*)\]$/.exec(e)),
                      (e = e.replace(/\[\d*\]$/, '')),
                      t
                        ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n))
                        : (r[e] = n);
                  };
                case 'bracket':
                  return function (e, n, r) {
                    (t = /(\[\])$/.exec(e)),
                      (e = e.replace(/\[\]$/, '')),
                      t
                        ? void 0 !== r[e]
                          ? (r[e] = [].concat(r[e], n))
                          : (r[e] = [n])
                        : (r[e] = n);
                  };
                default:
                  return function (e, t, n) {
                    void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                  };
              }
            })((t = o({ arrayFormat: 'none' }, t))),
            r = Object.create(null);
          return 'string' != typeof e
            ? r
            : (e = e.trim().replace(/^(\?|#|&)/, ''))
            ? (e.split('&').forEach(function (e) {
                var t = e.replace(/\+/g, ' ').split('='),
                  o = t.shift(),
                  i = t.length > 0 ? t.join('=') : void 0;
                (i = void 0 === i ? null : decodeURIComponent(i)),
                  n(decodeURIComponent(o), i, r);
              }),
              Object.keys(r)
                .sort()
                .reduce(function (e, t) {
                  var n = r[t];
                  return (
                    Boolean(n) && 'object' == typeof n && !Array.isArray(n)
                      ? (e[t] = (function e(t) {
                          return Array.isArray(t)
                            ? t.sort()
                            : 'object' == typeof t
                            ? e(Object.keys(t))
                                .sort(function (e, t) {
                                  return Number(e) - Number(t);
                                })
                                .map(function (e) {
                                  return t[e];
                                })
                            : t;
                        })(n))
                      : (e[t] = n),
                    e
                  );
                }, Object.create(null)))
            : r;
        }),
        (t.stringify = function (e, t) {
          var n = (function (e) {
            switch (e.arrayFormat) {
              case 'index':
                return function (t, n, r) {
                  return null === n
                    ? [i(t, e), '[', r, ']'].join('')
                    : [i(t, e), '[', i(r, e), ']=', i(n, e)].join('');
                };
              case 'bracket':
                return function (t, n) {
                  return null === n
                    ? i(t, e)
                    : [i(t, e), '[]=', i(n, e)].join('');
                };
              default:
                return function (t, n) {
                  return null === n
                    ? i(t, e)
                    : [i(t, e), '=', i(n, e)].join('');
                };
            }
          })((t = o({ encode: !0, strict: !0, arrayFormat: 'none' }, t)));
          return e
            ? Object.keys(e)
                .sort()
                .map(function (r) {
                  var o = e[r];
                  if (void 0 === o) return '';
                  if (null === o) return i(r, t);
                  if (Array.isArray(o)) {
                    var a = [];
                    return (
                      o.slice().forEach(function (e) {
                        void 0 !== e && a.push(n(r, e, a.length));
                      }),
                      a.join('&')
                    );
                  }
                  return i(r, t) + '=' + i(o, t);
                })
                .filter(function (e) {
                  return e.length > 0;
                })
                .join('&')
            : '';
        });
    },
    function (e, t, n) {
      'use strict';
      e.exports = function (e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      };
    },
    function (e, t, n) {
      'use strict';
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (null == e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              r[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, r)).join('')
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, l, s = a(e), u = 1; u < arguments.length; u++) {
              for (var c in (n = Object(arguments[u])))
                o.call(n, c) && (s[c] = n[c]);
              if (r) {
                l = r(n);
                for (var d = 0; d < l.length; d++)
                  i.call(n, l[d]) && (s[l[d]] = n[l[d]]);
              }
            }
            return s;
          };
    },
    function (e, t, n) {
      'use strict';
      n.r(t);
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      var a,
        l,
        s,
        u,
        c = n(0),
        d = 'twitch-embed';
      !(function (e) {
        e.UpdateState = 'UPDATE_STATE';
      })(a || (a = {})),
        (function (e) {
          (e.VideoWithChat = 'video-with-chat'), (e.Video = 'video');
        })(l || (l = {})),
        (function (e) {
          (e.AUTHENTICATE = 'authenticate'),
            (e.VIDEO_READY = 'video.ready'),
            (e.VIDEO_PLAY = 'video.play'),
            (e.VIDEO_PAUSE = 'video.pause'),
            (e.CAPTIONS = 'captions'),
            (e.ENDED = 'ended'),
            (e.ERROR = 'error'),
            (e.ONLINE = 'online'),
            (e.OFFLINE = 'offline'),
            (e.PAUSE = 'pause'),
            (e.PLAY = 'play'),
            (e.PLAYBACK_BLOCKED = 'playbackBlocked'),
            (e.PLAYING = 'playing'),
            (e.READY = 'ready');
        })(s || (s = {})),
        (function (e) {
          (e[(e.DisableCaptions = 0)] = 'DisableCaptions'),
            (e[(e.EnableCaptions = 1)] = 'EnableCaptions'),
            (e[(e.Pause = 2)] = 'Pause'),
            (e[(e.Play = 3)] = 'Play'),
            (e[(e.Seek = 4)] = 'Seek'),
            (e[(e.SetChannel = 5)] = 'SetChannel'),
            (e[(e.SetChannelID = 6)] = 'SetChannelID'),
            (e[(e.SetCollection = 7)] = 'SetCollection'),
            (e[(e.SetQuality = 8)] = 'SetQuality'),
            (e[(e.SetVideo = 9)] = 'SetVideo'),
            (e[(e.SetMuted = 10)] = 'SetMuted'),
            (e[(e.SetVolume = 11)] = 'SetVolume');
        })(u || (u = {}));
      var p,
        f,
        y,
        E,
        _,
        h,
        m,
        v,
        A,
        P,
        g,
        b = function () {};
      !(function (e) {
        (e.UNKNOWN = 'Unspecified'),
          (e.FILE = 'File'),
          (e.PLAYLIST = 'Playlist'),
          (e.SEGMENT = 'Segment'),
          (e.SOURCE = 'Source'),
          (e.DECODER = 'Decode'),
          (e.RENDERER = 'Render'),
          (e.MASTER_PLAYLIST = 'MasterPlaylist'),
          (e.MEDIA_PLAYLIST = 'MediaPlaylist');
      })(p || (p = {})),
        (function (e) {
          (e.GENERIC = 'Error'),
            (e.NOT_SUPPORTED = 'ErrorNotSupported'),
            (e.NO_SOURCE = 'ErrorNoSource'),
            (e.INVALID_DATA = 'ErrorInvalidData'),
            (e.INVALID_STATE = 'ErrorInvalidState'),
            (e.INVALID_PARAMETER = 'ErrorInvalidParameter'),
            (e.TIMEOUT = 'ErrorTimeout'),
            (e.INVALID_OUTPUT = 'ErrorInvalidOutput'),
            (e.INTERNAL = 'ErrorInternal'),
            (e.NETWORK = 'ErrorNetwork'),
            (e.NETWORK_IO = 'ErrorNetworkIO'),
            (e.AUTHORIZATION = 'ErrorAuthorization'),
            (e.NOT_AVAILABLE = 'ErrorNotAvailable');
        })(f || (f = {})),
        (function (e) {
          (e[(e.GEOBLOCKED = 1)] = 'GEOBLOCKED'),
            (e[(e.UNSUPPORTED_DEVICE = 2)] = 'UNSUPPORTED_DEVICE'),
            (e[(e.ANONYMIZER_BLOCKED = 3)] = 'ANONYMIZER_BLOCKED'),
            (e[(e.CELLULAR_NETWORK_PROHIBITED = 4)] =
              'CELLULAR_NETWORK_PROHIBITED'),
            (e[(e.UNAUTHORIZATION_ENTITLEMENTS = 5)] =
              'UNAUTHORIZATION_ENTITLEMENTS'),
            (e[(e.VOD_RESTRICTED = 6)] = 'VOD_RESTRICTED');
        })(y || (y = {})),
        (function (e) {
          (e.ID3 = 'MetaID3'), (e.CAPTION = 'MetaCaption');
        })(E || (E = {})),
        (function (e) {
          (e.INITIALIZED = 'PlayerInitialized'),
            (e.QUALITY_CHANGED = 'PlayerQualityChanged'),
            (e.AUTO_SWITCH_QUALITY_CHANGED = 'PlayerAutoSwitchQualityChanged'),
            (e.DURATION_CHANGED = 'PlayerDurationChanged'),
            (e.VOLUME_CHANGED = 'PlayerVolumeChanged'),
            (e.MUTED_CHANGED = 'PlayerMutedChanged'),
            (e.PLAYBACK_RATE_CHANGED = 'PlayerPlaybackRateChanged'),
            (e.REBUFFERING = 'PlayerRebuffering'),
            (e.AUDIO_BLOCKED = 'PlayerAudioBlocked'),
            (e.PLAYBACK_BLOCKED = 'PlayerPlaybackBlocked'),
            (e.ERROR = 'PlayerError'),
            (e.RECOVERABLE_ERROR = 'PlayerRecoverableError'),
            (e.ANALYTICS_EVENT = 'PlayerAnalyticsEvent'),
            (e.TIME_UPDATE = 'PlayerTimeUpdate'),
            (e.BUFFER_UPDATE = 'PlayerBufferUpdate'),
            (e.SEEK_COMPLETED = 'PlayerSeekCompleted'),
            (e.PROFILE = 'PlayerProfile'),
            (e.SESSION_DATA = 'PlayerSessionData'),
            (e.WORKER_ERROR = 'PlayerWorkerError'),
            (e.METADATA = 'PlayerMetadata');
        })(_ || (_ = {})),
        (function (e) {
          (e.PLAYER_LOADED_IN_WORKER = 'player_loaded_in_worker'),
            (e.HLS_MASTER_PLAYLIST_REQUEST = 'master_manifest_request'),
            (e.HLS_MASTER_PLAYLIST_READY = 'master_manifest_ready'),
            (e.HLS_MEDIA_PLAYLIST_REQUEST = 'variant_request'),
            (e.HLS_MEDIA_PLAYLIST_READY = 'variant_ready'),
            (e.MIN_BUFFER_READY = 'min_buffer_ready'),
            (e.VIDEO_ELEMENT_PLAY = 'video_element_play');
        })(h || (h = {})),
        (function (e) {
          (e.AVAILABLE = 'RemotePlayerAvailable'),
            (e.UNAVAILABLE = 'RemotePlayerUnavailable'),
            (e.SESSION_STARTED = 'RemotePlayerSessionStarted'),
            (e.SESSION_ENDED = 'RemotePlayerSessionEnded');
        })(m || (m = {})),
        (function (e) {
          (e.IDLE = 'Idle'),
            (e.READY = 'Ready'),
            (e.BUFFERING = 'Buffering'),
            (e.PLAYING = 'Playing'),
            (e.ENDED = 'Ended');
        })(v || (v = {})),
        (function (e) {
          (e.DEBUG = 'debug'),
            (e.INFO = 'info'),
            (e.WARN = 'warn'),
            (e.ERROR = 'error');
        })(A || (A = {})),
        (function (e) {
          (e[(e.GeoBlocked = 1)] = 'GeoBlocked'),
            (e[(e.UnsupportedDevice = 2)] = 'UnsupportedDevice'),
            (e[(e.AnonymizerBlocked = 3)] = 'AnonymizerBlocked'),
            (e[(e.CellularNetworkProhibited = 4)] =
              'CellularNetworkProhibited'),
            (e[(e.UnauthorizationEntitlements = 5)] =
              'UnauthorizationEntitlements'),
            (e[(e.VodRestricted = 6)] = 'VodRestricted'),
            (e[(e.LVSCCUCap = 509)] = 'LVSCCUCap'),
            (e[(e.Aborted = 1e3)] = 'Aborted'),
            (e[(e.Network = 2e3)] = 'Network'),
            (e[(e.CCUCapReached = 2001)] = 'CCUCapReached'),
            (e[(e.Decode = 3e3)] = 'Decode'),
            (e[(e.FormatNotSupported = 4e3)] = 'FormatNotSupported'),
            (e[(e.ContentNotAvailable = 5e3)] = 'ContentNotAvailable'),
            (e[(e.RendererNotAvailable = 6e3)] = 'RendererNotAvailable'),
            (e[(e.SafariUnsupportedDevice = 7004)] = 'SafariUnsupportedDevice'),
            (e[(e.Fatal = 8001)] = 'Fatal'),
            (e[(e.FatalAuth = 8003)] = 'FatalAuth'),
            (e[(e.Offline = 8002)] = 'Offline'),
            (e[(e.WarnAuth = 8004)] = 'WarnAuth');
        })(P || (P = {})),
        (function (e) {
          (e.PREMIUM_CONTENT_RESTRICTED = 'PREMIUM_CONTENT'),
            (e.VOD_RESTRICTED = 'vod_manifest_restricted');
        })(g || (g = {}));
      var O = (function (e) {
          function t(t) {
            var n = this.constructor,
              r = e.call(this, t) || this;
            return (
              Object.setPrototypeOf(r, n.prototype),
              (r.name = 'MissingParameterError'),
              r
            );
          }
          return o(t, e), t;
        })(Error),
        C = (function (e) {
          function t(t) {
            var n = this.constructor,
              r =
                e.call(this, 'Could not find the provided element: ' + t) ||
                this;
            return (
              Object.setPrototypeOf(r, n.prototype),
              (r.name = 'MissingElementError'),
              r
            );
          }
          return o(t, e), t;
        })(Error),
        S = n(1);
      function I(e, t) {
        var n =
            'https://' +
            t +
            '.twitch.tv' +
            '?' +
            S.stringify(
              i(i({}, e), {
                migration: !0,
                parent: R(e.parent),
                referrer: document.location.href
              })
            ),
          r = document.createElement('iframe');
        return (
          r.setAttribute('src', n),
          r.setAttribute('allowfullscreen', ''),
          r.setAttribute('scrolling', 'no'),
          r.setAttribute('frameborder', '0'),
          r.setAttribute('allow', 'autoplay; fullscreen'),
          r.setAttribute('title', 'Twitch'),
          e.width && r.setAttribute('width', String(e.width)),
          e.height && r.setAttribute('height', String(e.height)),
          r
        );
      }
      function R(e) {
        var t = document.domain;
        if (!e) return [t];
        var n = Array.isArray(e) ? e : [e];
        return -1 === n.indexOf(t) ? n.concat(t) : n;
      }
      var D = {
          channelName: '',
          channelID: '',
          collectionID: '',
          currentTime: 0,
          duration: 0,
          muted: !1,
          playback: v.IDLE,
          quality: '',
          qualitiesAvailable: [],
          stats: {
            videoStats: {
              backendVersion: '',
              bufferSize: 0,
              codecs: '',
              displayResolution: '',
              fps: 0,
              hlsLatencyBroadcaster: 0,
              latencyMode: '',
              playbackRate: 0,
              skippedFrames: 0,
              videoResolution: ''
            }
          },
          videoID: '',
          volume: 0,
          ended: !1
        },
        N = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t._embedWindow = null),
              (t._playerState = D),
              window.addEventListener('message', t._handleResponses.bind(t)),
              t
            );
          }
          return (
            o(t, e),
            (t.prototype._setWindowRef = function (e) {
              this._embedWindow = e;
            }),
            (t.prototype.disableCaptions = function () {
              this._sendCommand(u.DisableCaptions, null);
            }),
            (t.prototype.enableCaptions = function () {
              this._sendCommand(u.EnableCaptions, null);
            }),
            (t.prototype.pause = function () {
              this._sendCommand(u.Pause, null);
            }),
            (t.prototype.play = function () {
              this._sendCommand(u.Play, null);
            }),
            (t.prototype.seek = function (e) {
              this._sendCommand(u.Seek, e);
            }),
            (t.prototype.setChannel = function (e) {
              this._sendCommand(u.SetChannel, e);
            }),
            (t.prototype.setChannelId = function (e) {
              this._sendCommand(u.SetChannelID, e);
            }),
            (t.prototype.setCollection = function (e, t) {
              this._sendCommand(u.SetCollection, [e, t]);
            }),
            (t.prototype.setQuality = function (e) {
              this._sendCommand(u.SetQuality, e);
            }),
            (t.prototype.setVideo = function (e) {
              this._sendCommand(u.SetVideo, e);
            }),
            (t.prototype.setMuted = function (e) {
              var t = 'boolean' != typeof e || e;
              this._sendCommand(u.SetMuted, t);
            }),
            (t.prototype.setVolume = function (e) {
              this._sendCommand(u.SetVolume, e);
            }),
            (t.prototype.getMuted = function () {
              return this._playerState.muted;
            }),
            (t.prototype.getVolume = function () {
              return this._playerState.volume;
            }),
            (t.prototype.getChannel = function () {
              return this._playerState.channelName;
            }),
            (t.prototype.getChannelId = function () {
              return this._playerState.channelID;
            }),
            (t.prototype.getCollection = function () {
              return this._playerState.collectionID;
            }),
            (t.prototype.getCurrentTime = function () {
              return this._playerState.currentTime;
            }),
            (t.prototype.getDuration = function () {
              return this._playerState.duration;
            }),
            (t.prototype.getEnded = function () {
              return this._playerState.ended;
            }),
            (t.prototype.getPlaybackStats = function () {
              return this._playerState.stats.videoStats;
            }),
            (t.prototype.getQualities = function () {
              return this._playerState.qualitiesAvailable;
            }),
            (t.prototype.getQuality = function () {
              return this._playerState.quality;
            }),
            (t.prototype.getVideo = function () {
              return this._playerState.videoID;
            }),
            (t.prototype.isPaused = function () {
              return this._playerState.playback === v.IDLE;
            }),
            (t.prototype.getPlayerState = function () {
              return this._playerState;
            }),
            (t.prototype._sendCommand = function (e, t) {
              if (this._embedWindow) {
                var n = {
                  eventName: e,
                  params: t,
                  namespace: 'twitch-embed-player-proxy'
                };
                this._embedWindow.postMessage(n, '*');
              } else
                console.warn(
                  'Cannot send player commands before the video player is initialized.          Please wait for the VIDEO_READY event before using the player API.'
                );
            }),
            (t.prototype._handleResponses = function (e) {
              if (this._embedWindow) {
                var t = e.data,
                  n = e.source === this._embedWindow,
                  r = 'twitch-embed-player-proxy' === t.namespace,
                  o = t.eventName === a.UpdateState;
                n &&
                  r &&
                  o &&
                  (this._playerState = Object.assign(
                    {},
                    this._playerState,
                    t.params
                  ));
              }
            }),
            t
          );
        })(b);
      n.d(t, 'Embed', function () {
        return T;
      }),
        n.d(t, 'Player', function () {
          return L;
        });
      var T = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            (r._options = {}),
            (r._target = null),
            (r._player = new N()),
            (r._eventEmitter = null),
            (r._iframe = null),
            (r._forwardEmbedEvents = function (e) {
              if (r._iframe) {
                var t = e.data,
                  n = e.source === r._iframe.contentWindow,
                  o = t.namespace === d;
                n && o && r._eventEmitter.emit(t.eventName, t.params);
              }
            }),
            (r.disableCaptions = r
              .getPlayer()
              .disableCaptions.bind(r.getPlayer())),
            (r.enableCaptions = r
              .getPlayer()
              .enableCaptions.bind(r.getPlayer())),
            (r.pause = r.getPlayer().pause.bind(r.getPlayer())),
            (r.play = r.getPlayer().play.bind(r.getPlayer())),
            (r.seek = r.getPlayer().seek.bind(r.getPlayer())),
            (r.setChannel = r.getPlayer().setChannel.bind(r.getPlayer())),
            (r.setChannelId = r.getPlayer().setChannelId.bind(r.getPlayer())),
            (r.setCollection = r.getPlayer().setCollection.bind(r.getPlayer())),
            (r.setQuality = r.getPlayer().setQuality.bind(r.getPlayer())),
            (r.setVideo = r.getPlayer().setVideo.bind(r.getPlayer())),
            (r.setMuted = r.getPlayer().setMuted.bind(r.getPlayer())),
            (r.setVolume = r.getPlayer().setVolume.bind(r.getPlayer())),
            (r.getMuted = r.getPlayer().getMuted.bind(r.getPlayer())),
            (r.getVolume = r.getPlayer().getVolume.bind(r.getPlayer())),
            (r.getChannel = r.getPlayer().getChannel.bind(r.getPlayer())),
            (r.getChannelId = r.getPlayer().getChannelId.bind(r.getPlayer())),
            (r.getCollection = r.getPlayer().getCollection.bind(r.getPlayer())),
            (r.getCurrentTime = r
              .getPlayer()
              .getCurrentTime.bind(r.getPlayer())),
            (r.getDuration = r.getPlayer().getDuration.bind(r.getPlayer())),
            (r.getEnded = r.getPlayer().getEnded.bind(r.getPlayer())),
            (r.getPlaybackStats = r
              .getPlayer()
              .getPlaybackStats.bind(r.getPlayer())),
            (r.getPlayerState = r
              .getPlayer()
              .getPlayerState.bind(r.getPlayer())),
            (r.getQualities = r.getPlayer().getQualities.bind(r.getPlayer())),
            (r.getQuality = r.getPlayer().getQuality.bind(r.getPlayer())),
            (r.getVideo = r.getPlayer().getVideo.bind(r.getPlayer())),
            (r.isPaused = r.getPlayer().isPaused.bind(r.getPlayer())),
            (function (e) {
              var t =
                (null == e ? void 0 : e.channelId) &&
                (null == e ? void 0 : e.stream);
              if (!e || (!e.channel && !e.video && !e.collection && !t))
                throw new O(
                  'A channel, video, or collection id must be provided in options'
                );
            })(n),
            (r._options = n),
            (r._target = (function (e) {
              if (!e)
                throw new O('An element of type String or Element is required');
              var t = 'string' == typeof e ? document.getElementById(e) : e;
              if (!t) throw new C(e);
              if (1 !== t.nodeType)
                throw new O('An element of type String or Element is required');
              return t;
            })(t)),
            (r._eventEmitter = new c()),
            r.render(),
            r
          );
        }
        return (
          o(t, e),
          (t.prototype.addEventListener = function (e, t) {
            this._eventEmitter && this._eventEmitter.on(e, t);
          }),
          (t.prototype.removeEventListener = function (e, t) {
            this._eventEmitter && this._eventEmitter.removeListener(e, t);
          }),
          (t.prototype.getPlayer = function () {
            return this._player;
          }),
          (t.prototype.destroy = function () {
            var e, t;
            this._eventEmitter && this._eventEmitter.removeAllListeners(),
              window.removeEventListener('message', this._forwardEmbedEvents),
              null ===
                (t =
                  null === (e = this._iframe) || void 0 === e
                    ? void 0
                    : e.parentNode) ||
                void 0 === t ||
                t.removeChild(this._iframe),
              (this._eventEmitter = null),
              this._player._setWindowRef(null),
              (this._target = null),
              (this._iframe = null);
          }),
          (t.prototype.buildIframe = function () {
            return I(this._options, 'embed');
          }),
          (t.prototype.render = function () {
            if (this._target) {
              var e = this.buildIframe();
              this._target.appendChild(e),
                (this._iframe = e),
                window.addEventListener('message', this._forwardEmbedEvents),
                this._player._setWindowRef(this._iframe.contentWindow);
            }
          }),
          (t.AUTHENTICATE = s.AUTHENTICATE),
          (t.CAPTIONS = s.CAPTIONS),
          (t.ENDED = s.ENDED),
          (t.ERROR = s.ERROR),
          (t.OFFLINE = s.OFFLINE),
          (t.ONLINE = s.ONLINE),
          (t.PAUSE = s.PAUSE),
          (t.PLAY = s.PLAY),
          (t.PLAYBACK_BLOCKED = s.PLAYBACK_BLOCKED),
          (t.PLAYING = s.PLAYING),
          (t.VIDEO_PAUSE = s.VIDEO_PAUSE),
          (t.VIDEO_PLAY = s.VIDEO_PLAY),
          (t.VIDEO_READY = s.VIDEO_READY),
          (t.READY = s.READY),
          (t.Errors = i(
            {
              ABORTED: P.Aborted,
              NETWORK: P.Network,
              DECODE: P.Decode,
              FORMAT_NOT_SUPPORTED: P.FormatNotSupported,
              CONTENT_NOT_AVAILABLE: P.ContentNotAvailable,
              RENDERER_NOT_AVAILABLE: P.RendererNotAvailable
            },
            P
          )),
          t
        );
      })(b);
      var L = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        return (
          o(t, e),
          (t.prototype.buildIframe = function () {
            return I(this._options, 'player');
          }),
          t
        );
      })(T);
      t.default = { Embed: T, Player: L };
    }
  ]).default;
});
