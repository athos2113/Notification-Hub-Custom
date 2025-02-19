/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/Pages/SettingsPage.tsx":
/*!******************************************!*\
  !*** ./src/admin/Pages/SettingsPage.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_9__);










var AddNotificationTypeModal = /*#__PURE__*/function (_Modal) {
  function AddNotificationTypeModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.formData = void 0;
    _this.sending = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(AddNotificationTypeModal, _Modal);
  var _proto = AddNotificationTypeModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    // Düzenleme modunda (notificationType varsa) formData'yı API'den gelen veriyle doldur
    if (this.attrs.notificationType) {
      this.formData = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.attrs.notificationType.attributes);
    } else {
      // Ekleme modundaysa varsayılan değerleri kullan
      this.formData = {
        name: '',
        excerpt_key: '',
        default_icon: 'fas fa-bell',
        default_message_key: null,
        description: null,
        is_active: true,
        sort_order: 1,
        permission: null,
        color: null,
        default_url: null,
        default_recipients: null
      };
    }
  };
  _proto.className = function className() {
    return 'NotificationTypeModal Modal--large';
  };
  _proto.title = function title() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('huseyinfiliz-notificationhub.admin.settings.' + (this.attrs.notificationType ? 'edit_notification_type' : 'add_notification_type'));
  };
  _proto.content = function content() {
    var _this2 = this;
    var t = function t(key) {
      return flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('huseyinfiliz-notificationhub.admin.settings.' + key);
    };
    return m('.Modal-body', [m('form.Form', {
      onsubmit: this.onsubmit.bind(this)
    }, [
    // Form grupları (artık düzenleme modunda devre dışı DEĞİL)
    this.buildFormGroup('name', 'text', t('fields.name')), this.buildFormGroup('default_icon', 'text', t('fields.icon')), this.buildFormGroup('default_message_key', 'text', t('fields.default_message_key')), this.buildFormGroup('default_url', 'text', t('fields.default_url')), this.buildFormGroup('excerpt_key', 'text', t('fields.excerpt_key')),
    //this.buildFormGroup('description', 'text', t('fields.description')),
    //this.buildFormGroup('permission', 'text', t('fields.permission')),
    //this.buildFormGroup('color', 'text', t('fields.color')),
    //this.buildFormGroup('default_recipients', 'text', t('fields.default_recipients')),
    //this.buildFormGroup('sort_order', 'number', t('fields.sort_order')),

    // Active checkbox (artık düzenleme modunda devre dışı DEĞİL)
    m('.Form-group', [m('label.checkbox', [m('input[type=checkbox]', {
      checked: this.formData.is_active,
      onchange: function onchange(e) {
        _this2.formData.is_active = e.target.checked;
      },
      disabled: this.sending // Sadece gönderme işlemi sırasında devre dışı
    }), ' ', t('fields.active')])]),
    // Submit button (artık düzenleme modunda devre dışı DEĞİL)
    m('.Form-group', [flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.sending,
      disabled: !this.formData.name // Sadece zorunlu alanlar boşsa devre dışı
    }, t('save'))])])]);
  }

  // buildFormGroup metodunda disabled parametresini kullanmıyoruz
  ;
  _proto.buildFormGroup = function buildFormGroup(field, type, label) {
    var _this3 = this;
    return m('.Form-group', [m('label', label), m('input.FormControl', {
      type: type,
      value: this.formData[field] || '',
      oninput: function oninput(e) {
        var value = e.target.value;
        _this3.formData[field] = type === 'number' ? parseInt(value, 10) : value; // parseInt ekledik.
      },
      disabled: this.sending // Sadece gönderme işlemi sırasında devre dışı
    })]);
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this$attrs$notificat,
      _this4 = this;
    e.preventDefault();
    this.sending = true;
    var isNew = !this.attrs.notificationType;
    var url = isNew ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('apiUrl') + "/notification-types-create" : flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('apiUrl') + "/notification-types/" + ((_this$attrs$notificat = this.attrs.notificationType) == null ? void 0 : _this$attrs$notificat.id); // Doğru ID kullanımı

    // API isteği
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().request({
      method: isNew ? 'POST' : 'PATCH',
      url: url,
      body: {
        data: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          type: 'notification-types',
          attributes: this.formData
        }, isNew ? {} : {
          id: this.attrs.notificationType.id
        })
      } // id'yi gönder (sadece güncelleme için)
    }).then(function (response) {
      // `any` tipini geçici olarak kullanıyoruz.
      // Başarılı
      _this4.attrs.onSave(response.data); // SettingsPage'deki onSave fonksiyonuna güncellenmiş veriyi gönder
      _this4.hide();
    })["catch"](function (error) {
      // Hata işleme
      _this4.sending = false; // Gönderme durumunu sıfırla
      console.error("Error saving notification type:", error);
      // Kullanıcıya hata mesajı göster (isteğe bağlı)
      m.redraw();
    });
  };
  return AddNotificationTypeModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_9___default()));
var SettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  function SettingsPage() {
    var _this5;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this5 = _ExtensionPage.call.apply(_ExtensionPage, [this].concat(args)) || this;
    _this5.notificationTypes = null;
    _this5.loading = false;
    _this5.error = null;
    return _this5;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(SettingsPage, _ExtensionPage);
  var _proto2 = SettingsPage.prototype;
  _proto2.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    this.loadNotificationTypes();
  };
  _proto2.content = function content() {
    var _this6 = this;
    return m('.NotificationHubSettingsPage', [m('.container', [m('.NotificationTypesPage-header', [m('h3', flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('huseyinfiliz-notificationhub.admin.title.page_title')),
    // Başlık eklendi
    flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
      className: 'Button Button--primary',
      onclick: function onclick() {
        return _this6.showAddModal();
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('huseyinfiliz-notificationhub.admin.settings.add_button'))]), this.buildContent()])]);
  };
  _proto2.buildContent = function buildContent() {
    var _this$notificationTyp,
      _this7 = this;
    if (this.loading) {
      return m('.NotificationTypesPage-loading', flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default().component());
    }
    if (this.error) {
      return m('.NotificationTypesPage-error', flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_7___default().component({
        type: 'error'
      }, this.error));
    }
    if (!((_this$notificationTyp = this.notificationTypes) != null && _this$notificationTyp.length)) {
      return m('.NotificationTypesPage-empty', flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('huseyinfiliz-notificationhub.admin.settings.no_data'));
    }
    return m('.NotificationTypesPage-list', [
    // Başlık satırı
    m('.NotificationTypeItem.NotificationTypeItem--header', [m('.NotificationTypeItem-name', flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('huseyinfiliz-notificationhub.admin.settings.fields.name')), m('.NotificationTypeItem-actions', flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('huseyinfiliz-notificationhub.admin.settings.fields.active') + ' / ' + flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('huseyinfiliz-notificationhub.admin.settings.fields.actions'))]),
    // Bildirim türleri listesi
    this.notificationTypes.map(function (type) {
      var _type$attributes, _type$attributes2, _type$attributes3, _type$attributes4;
      return m('.NotificationTypeItem', [m('.NotificationTypeItem-name', m('i', {
        className: ((_type$attributes = type.attributes) == null ? void 0 : _type$attributes.default_icon) || 'fas fa-bell'
      }), (_type$attributes2 = type.attributes) == null ? void 0 : _type$attributes2.name), m('.NotificationTypeItem-actions',
      // İşlemler (Aktif/Pasif, Düzenle, Sil)
      m('.ButtonGroup', [flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
        className: 'Button Button--icon',
        icon: (_type$attributes3 = type.attributes) != null && _type$attributes3.is_active ? 'fas fa-check' : 'fas fa-times',
        style: {
          color: (_type$attributes4 = type.attributes) != null && _type$attributes4.is_active ? 'green' : 'red'
        },
        disabled: true // Buton devre dışı (disable)
      }), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
        className: 'Button Button--icon Button--warning',
        icon: 'fas fa-edit',
        onclick: function onclick() {
          return _this7.showEditModal(type);
        }
      }), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
        className: 'Button Button--icon Button--danger',
        icon: 'fas fa-trash',
        onclick: function onclick() {
          return _this7.deleteNotificationType(type.id);
        }
      })]))]);
    })]);
  };
  _proto2.showAddModal = function showAddModal() {
    var _this8 = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().modal.show(AddNotificationTypeModal, {
      onSave: function onSave(type) {
        _this8.notificationTypes = [].concat(_this8.notificationTypes || [], [type]);
        m.redraw();
      }
    });
  };
  _proto2.showEditModal = function showEditModal(type) {
    var _this9 = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().modal.show(AddNotificationTypeModal, {
      notificationType: type,
      onSave: function onSave(updatedType) {
        _this9.notificationTypes = _this9.notificationTypes.map(function (item) {
          return item.id === updatedType.id ? updatedType : item;
        });
        m.redraw();
      }
    });
  };
  _proto2.loadNotificationTypes = /*#__PURE__*/function () {
    var _loadNotificationTypes = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.loading = true;
            this.error = null;
            m.redraw();
            _context.prev = 3;
            _context.next = 6;
            return flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().request({
              method: 'GET',
              url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('apiUrl') + "/notification-types"
            });
          case 6:
            response = _context.sent;
            this.notificationTypes = response.data;
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            this.error = _context.t0.message || 'Failed to load notification types';
          case 13:
            _context.prev = 13;
            this.loading = false;
            m.redraw();
            return _context.finish(13);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[3, 10, 13, 17]]);
    }));
    function loadNotificationTypes() {
      return _loadNotificationTypes.apply(this, arguments);
    }
    return loadNotificationTypes;
  }();
  _proto2.deleteNotificationType = /*#__PURE__*/function () {
    var _deleteNotificationType = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (confirm(flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('huseyinfiliz-notificationhub.admin.settings.delete_confirm'))) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            _context2.prev = 2;
            _context2.next = 5;
            return flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().request({
              method: 'DELETE',
              url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute('apiUrl') + "/notification-types-delete/" + id
            });
          case 5:
            this.notificationTypes = this.notificationTypes.filter(function (type) {
              return type.id !== id;
            });
            m.redraw();
            _context2.next = 13;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            this.error = _context2.t0.message || 'Failed to delete notification type';
            m.redraw();
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this, [[2, 9]]);
    }));
    function deleteNotificationType(_x) {
      return _deleteNotificationType.apply(this, arguments);
    }
    return deleteNotificationType;
  }();
  return SettingsPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5___default()));


/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/SettingsPage */ "./src/admin/Pages/SettingsPage.tsx");


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('huseyinfiliz-notificationhub', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('huseyinfiliz-notificationhub').registerPage(_Pages_SettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"]).registerPermission({
    icon: 'fas fa-bell',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('huseyinfiliz-notificationhub.admin.permissions.send_all'),
    permission: 'huseyinfiliz-notificationhub.send-all'
  }, 'moderate').registerPermission({
    icon: 'fas fa-bell',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('huseyinfiliz-notificationhub.admin.permissions.send_user'),
    permission: 'huseyinfiliz-notificationhub.send-user'
  }, 'moderate');
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map