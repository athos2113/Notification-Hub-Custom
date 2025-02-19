/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/addNotificationLinks.ts":
/*!*******************************************!*\
  !*** ./src/forum/addNotificationLinks.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/utils/UserControls */ "flarum/forum/utils/UserControls");
/* harmony import */ var flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/SessionDropdown */ "flarum/forum/components/SessionDropdown");
/* harmony import */ var flarum_forum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NotificationUserModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NotificationUserModal */ "./src/forum/components/NotificationUserModal.ts");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3___default()), 'moderationControls', function (items, user) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.huseyinfilizNotificationUser()) {
      items.add('huseyinfiliz-notificationhub', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
        icon: 'fas fa-bell',
        onclick: function onclick() {
          flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_components_NotificationUserModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
            user: user
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('huseyinfiliz-notificationhub.forum.links.notification_individual')));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'items', function (items) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.huseyinfilizNotificationAll()) {
      items.add('huseyinfiliz-notificationuhb', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
        icon: 'fas fa-bell',
        onclick: function onclick() {
          flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_components_NotificationUserModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
            forAll: true
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('huseyinfiliz-notificationhub.forum.links.notification_all')));
    }
  });
  var userDirectory = flarum.extensions['fof-user-directory'];
  if (userDirectory && userDirectory.UserDirectoryPage) {
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)(userDirectory.UserDirectoryPage.prototype, 'actionItems', function (items) {
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.huseyinfilizNotificationAll()) {
        items.add('huseyinfiliz-notificationhub', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
          className: 'Button',
          icon: 'fas fa-bell',
          onclick: function onclick() {
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_components_NotificationUserModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
              forAll: true
            });
          }
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('huseyinfiliz-notificationhub.forum.links.notification_all')), 10);
      }
    });
  }
}

/***/ }),

/***/ "./src/forum/components/NotificationUserModal.ts":
/*!*******************************************************!*\
  !*** ./src/forum/components/NotificationUserModal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationUserModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/models/Group */ "flarum/common/models/Group");
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/KeyboardNavigatable */ "flarum/common/utils/KeyboardNavigatable");
/* harmony import */ var flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_11__);












var NotificationUserModal = /*#__PURE__*/function (_Modal) {
  function NotificationUserModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.sending = false;
    _this.recipients = [];
    _this.messageText = '';
    _this.notificationUrl = '';
    _this.notificationIcon = '';
    _this.searchIndex = 0;
    _this.navigator = new (flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_10___default())();
    _this.filter = '';
    _this.focused = false;
    _this.loadingResults = false;
    _this.searchResults = [];
    _this.searchTimeout = -1;
    _this.allUsersText = null;
    _this.notificationTypes = null;
    _this.selectedNotificationType = '';
    _this.loadingTypes = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationUserModal, _Modal);
  var _proto = NotificationUserModal.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Modal.prototype.oninit.call(this, vnode);
    this.recipients = [];
    if (this.attrs.user) {
      this.recipients.push(this.attrs.user);
    }
    if (this.attrs.forAll) {
      var membersGroup = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.getById('groups', (flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_7___default().MEMBER_ID));
      this.recipients.push(membersGroup);
    }
    if (this.attrs.forAll) {
      this.allUsersText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.preview_all_members');
    } else {
      this.allUsersText = null;
    }
    this.navigator.when(function (event) {
      return event.key !== 'Tab' || !!_this2.filter;
    }).onUp(function () {
      if (_this2.searchIndex > 0) {
        _this2.searchIndex--;
        m.redraw();
      }
    }).onDown(function () {
      if (_this2.searchIndex < _this2.searchResults.length - 1) {
        _this2.searchIndex++;
        m.redraw();
      }
    }).onSelect(function () {
      return _this2.selectResult(_this2.searchResults[_this2.searchIndex]);
    }).onRemove(function () {
      _this2.recipients.pop();
      m.redraw();
    });
    this.loadNotificationTypes();
  };
  _proto.loadNotificationTypes = /*#__PURE__*/function () {
    var _loadNotificationTypes = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var response, activeTypes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.loadingTypes = true;
            m.redraw();
            _context.prev = 2;
            _context.next = 5;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().request({
              method: 'GET',
              url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('apiUrl') + "/notification-types"
            });
          case 5:
            response = _context.sent;
            activeTypes = response.data.filter(function (item) {
              return item.attributes.is_active;
            });
            this.notificationTypes = activeTypes.sort(function (a, b) {
              var _a$attributes$sort_or, _a$attributes, _b$attributes$sort_or, _b$attributes;
              return ((_a$attributes$sort_or = (_a$attributes = a.attributes) == null ? void 0 : _a$attributes.sort_order) != null ? _a$attributes$sort_or : 0) - ((_b$attributes$sort_or = (_b$attributes = b.attributes) == null ? void 0 : _b$attributes.sort_order) != null ? _b$attributes$sort_or : 0);
            });
            if (this.notificationTypes.length > 0) {
              this.selectedNotificationType = this.notificationTypes[0].id;
              this.updateFields(this.notificationTypes[0]);
            }
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            console.error('Failed to load notification types:', _context.t0);
          case 14:
            _context.prev = 14;
            this.loadingTypes = false;
            m.redraw();
            return _context.finish(14);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[2, 11, 14, 18]]);
    }));
    function loadNotificationTypes() {
      return _loadNotificationTypes.apply(this, arguments);
    }
    return loadNotificationTypes;
  }();
  _proto.updateFields = function updateFields(type) {
    this.notificationUrl = type.attributes.default_url || '';
    this.notificationIcon = type.attributes.default_icon || '';
    this.messageText = type.attributes.default_message_key || '';
  };
  _proto.className = function className() {
    return 'huseyinfilizNotificationModal Modal--large';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.title_text');
  };
  _proto.onready = function onready() {
    this.$('form').find('.js-focus-on-load').first().focus().select();
  };
  _proto.recipientLabel = function recipientLabel(recipient) {
    switch (recipient.data.type) {
      case 'users':
        return m('.RecipientLabel', flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_8___default()(recipient));
      case 'groups':
        var group = recipient;
        return m('.RecipientLabel', group.color() ? {
          className: 'colored',
          style: {
            backgroundColor: group.color()
          }
        } : {}, [group.icon() ? [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default()(group.icon()), ' '] : null, group.namePlural()]);
    }
    return '[unknown]';
  };
  _proto.searchResultKind = function searchResultKind(recipient) {
    switch (recipient.data.type) {
      case 'users':
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.recipient_kinds.user');
      case 'groups':
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.recipient_kinds.group');
    }
    return '[unknown]';
  };
  _proto.selectResult = function selectResult(result) {
    if (!result) {
      return;
    }
    this.recipients.push(result);
    this.filter = '';
    this.searchResults = [];
    m.redraw();
  };
  _proto.content = function content() {
    var _this3 = this,
      _this$notificationTyp;
    var notificationTypeOptions = {};
    var notificationTypeSelect = "Custom";
    if (this.notificationTypes && this.notificationTypes.length > 0) {
      this.notificationTypes.forEach(function (type) {
        notificationTypeOptions[type.id] = type.attributes.name;
      });
      notificationTypeSelect = m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_11___default()), {
        options: notificationTypeOptions,
        value: this.selectedNotificationType,
        onchange: function onchange(value) {
          _this3.selectedNotificationType = value;
          var selectedType = _this3.notificationTypes.find(function (type) {
            return type.id === value;
          });
          if (selectedType) {
            _this3.updateFields(selectedType);
          }
        },
        disabled: this.sending
      });
    } else {
      notificationTypeSelect = m('p', flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.no_notification_types'));
    }
    return m('.Modal-body', m('form.Form', {
      onsubmit: this.onsubmit.bind(this)
    }, [m('.Form-group', [m('label', flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.recipients_label')), m('.RecipientsInput.FormControl', {
      className: this.focused ? 'focus' : ''
    }, [m('span.RecipientsInput-selected', this.recipients.map(function (recipient, index) {
      return m('span.RecipientsInput-recipient', {
        onclick: function onclick() {
          _this3.recipients.splice(index, 1);
          m.redraw();
        },
        title: _this3.searchResultKind(recipient)
      }, _this3.recipientLabel(recipient));
    })), m('input.FormControl', {
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.recipients_placeholder'),
      value: this.filter,
      oninput: function oninput(event) {
        _this3.filter = event.target.value;
        _this3.performNewSearch();
      },
      onkeydown: this.navigator.navigate.bind(this.navigator),
      onfocus: function onfocus() {
        _this3.focused = true;
      },
      onblur: function onblur() {
        _this3.focused = false;
      },
      disabled: this.sending
    }), this.loadingResults ? flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default().component({
      size: 'small'
    }) : null, this.searchResults.length ? m('ul.Dropdown-menu', this.searchResults.map(function (result, index) {
      return m('li', {
        className: _this3.searchIndex === index ? 'active' : '',
        onclick: function onclick() {
          _this3.selectResult(result);
        }
      }, m('button[type=button]', [m('span.SearchResultKind', _this3.searchResultKind(result)), _this3.recipientLabel(result)]));
    })) : null])]), m('.Form-group', [m('label', flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.notification_type_label')), this.loadingTypes ? m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default()), {
      size: 'small'
    }) : notificationTypeSelect]), m('.Form-group', [m('label', flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.message_label')), m('textarea.FormControl', {
      rows: 5,
      value: this.messageText,
      oninput: function oninput(event) {
        _this3.messageText = event.target.value;
      },
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.preview_message_placeholder'),
      disabled: this.sending
    })]), m('.Form-group', [m('label', flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.url_label')), m('input[type=text].FormControl', {
      value: this.notificationUrl,
      oninput: function oninput(event) {
        _this3.notificationUrl = event.target.value;
      },
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.url_placeholder'),
      disabled: this.sending
    })]), m('.Form-group', [m('label', flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.preview_title')), m('.NotificationPreview-content', m('ul.NotificationGroup-content', m('li', m('a.Notification.Notification--customNotification', [m('span.Avatar.Notification-avatar', {
      style: {
        '--avatar-bg': '#a4c0cd'
      }
    }, '#'), m('i.icon.Notification-icon', {
      className: this.notificationIcon ? "icon " + this.notificationIcon + " Notification-icon" : 'icon fas fa-bell Notification-icon'
    }), m('span.Notification-title', m('span.Notification-content', m('div.NotificationPreview-messageText', this.messageText || m('em', flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.preview_message_placeholder')))), m('span.Notification-title-spring')), m('div.Notification-excerpt', this.selectedNotificationType ? (_this$notificationTyp = this.notificationTypes) == null || (_this$notificationTyp = _this$notificationTyp.find(function (type) {
      return type.id === _this3.selectedNotificationType;
    })) == null ? void 0 : _this$notificationTyp.attributes.excerpt_key : "")]))))]), m('.Form-group', [flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
      type: 'submit',
      className: 'Button Button--primary SendNotificationModal-send',
      loading: this.sending,
      disabled: this.recipients.length === 0 || this.messageText === '' || !this.selectedNotificationType
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.submit_button'))])]));
  };
  _proto.performNewSearch = function performNewSearch() {
    var _this4 = this;
    this.searchIndex = 0;
    var query = this.filter.toLowerCase();
    this.buildSearchResults(query);
    clearTimeout(this.searchTimeout);
    if (query.length >= 3) {
      this.searchTimeout = setTimeout(function () {
        _this4.loadingResults = true;
        m.redraw();
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.find('users', {
          filter: {
            q: query
          },
          page: {
            limit: 5
          }
        }).then(function () {
          _this4.loadingResults = false;
          _this4.buildSearchResults(query);
          m.redraw();
        });
      }, 250);
    }
  };
  _proto.buildSearchResults = function buildSearchResults(query) {
    var _this5 = this;
    if (!query) {
      this.searchResults = [];
      return;
    }
    var results = [];
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.huseyinfilizNotificationAll()) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.all('groups').forEach(function (group) {
        if (group.id() === (flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_7___default().GUEST_ID)) {
          return;
        }
        if (group.nameSingular().toLowerCase().indexOf(query) !== -1 || group.namePlural().toLowerCase().indexOf(query) !== -1) {
          results.push(group);
        }
      });
    }
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.all('users').forEach(function (user) {
      if (user.username().toLowerCase().indexOf(query) !== -1) {
        results.push(user);
      }
    });
    this.searchResults = results.filter(function (result) {
      return !_this5.recipients.some(function (recipient) {
        return recipient.data.type === result.data.type && recipient.id() === result.id();
      });
    });
    m.redraw();
  };
  _proto.onsubmit = function onsubmit(event) {
    event.preventDefault();
    this.sending = true;
    m.redraw();
    var selectedUsers = this.recipients.filter(function (r) {
      return r.data.type === 'users';
    }).map(function (r) {
      return r.id();
    });
    var selectedGroups = this.recipients.filter(function (r) {
      return r.data.type === 'groups';
    }).map(function (r) {
      return r.id();
    });
    this.sendNotification(selectedUsers, selectedGroups);
  };
  _proto.sendNotification = function sendNotification(selectedUsers, selectedGroups) {
    var _this6 = this;
    this.sending = true;
    m.redraw();
    var requestBody = {
      message: this.messageText,
      userIds: selectedUsers,
      groupIds: selectedGroups,
      url: this.notificationUrl,
      icon: this.notificationIcon,
      subjectId: this.selectedNotificationType
    };
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().request({
      method: 'POST',
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('apiUrl') + '/notifications/send',
      body: requestBody
    }).then(function (response) {
      m.redraw();
      var successMessage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('huseyinfiliz-notificationhub.forum.modal_notification.notification_sent_message', {
        recipientsCount: response.recipientsCount
      });
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().alerts.show({
        type: 'success'
      }, successMessage);
      _this6.hide();
    }, function (response) {
      _this6.sending = false;
      m.redraw();
      _this6.onerror(response);
      console.error("Error", response);
    });
  };
  return NotificationUserModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/forum/components/customNotification.tsx":
/*!*****************************************************!*\
  !*** ./src/forum/components/customNotification.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomNotification)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);


var CustomNotification = /*#__PURE__*/function (_Notification) {
  function CustomNotification() {
    return _Notification.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomNotification, _Notification);
  var _proto = CustomNotification.prototype;
  _proto.icon = function icon() {
    var _this$attrs$notificat;
    return (_this$attrs$notificat = this.attrs.notification) == null || (_this$attrs$notificat = _this$attrs$notificat.content()) == null ? void 0 : _this$attrs$notificat.icon;
  };
  _proto.href = function href() {
    var _this$attrs$notificat2;
    return (_this$attrs$notificat2 = this.attrs.notification) == null || (_this$attrs$notificat2 = _this$attrs$notificat2.content()) == null ? void 0 : _this$attrs$notificat2.url;
  };
  _proto.excerpt = function excerpt() {
    var _this$attrs$notificat3;
    return (_this$attrs$notificat3 = this.attrs.notification) == null || (_this$attrs$notificat3 = _this$attrs$notificat3.content()) == null ? void 0 : _this$attrs$notificat3.excerpt;
  };
  _proto.content = function content() {
    var _this$attrs$notificat4;
    var message = (_this$attrs$notificat4 = this.attrs.notification) == null || (_this$attrs$notificat4 = _this$attrs$notificat4.content()) == null ? void 0 : _this$attrs$notificat4.message;
    return m('div', message);
  };
  return CustomNotification;
}((flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/extend.ts":
/*!*****************************!*\
  !*** ./src/forum/extend.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/models/Forum */ "flarum/common/models/Forum");
/* harmony import */ var flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_NotificationType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/NotificationType */ "./src/forum/models/NotificationType.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Model)((flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_1___default())).attribute('huseyinfilizNotificationAll').attribute('huseyinfilizNotificationUser'), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Store)().add('notification-types', _models_NotificationType__WEBPACK_IMPORTED_MODULE_2__["default"])]);

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addNotificationLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNotificationLinks */ "./src/forum/addNotificationLinks.ts");
/* harmony import */ var _components_customNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/customNotification */ "./src/forum/components/customNotification.tsx");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extend */ "./src/forum/extend.ts");




flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('huseyinfiliz-notificationhub', function () {
  (0,_addNotificationLinks__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().notificationComponents).customNotification = _components_customNotification__WEBPACK_IMPORTED_MODULE_2__["default"];
});

/***/ }),

/***/ "./src/forum/models/NotificationType.ts":
/*!**********************************************!*\
  !*** ./src/forum/models/NotificationType.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var NotificationType = /*#__PURE__*/function (_Model) {
  function NotificationType() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('name');
    _this.excerpt_key = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('excerpt_key');
    _this.default_url = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('default_url');
    _this.default_icon = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('default_icon');
    _this.default_message_key = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('default_message_key');
    _this.is_active = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('is_active');
    _this.sort_order = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('sort_order');
    _this.createdAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('createdAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.updatedAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('updatedAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NotificationType, _Model);
  return NotificationType;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

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

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/models/Forum":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/models/Forum']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Forum'];

/***/ }),

/***/ "flarum/common/models/Group":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/models/Group']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Group'];

/***/ }),

/***/ "flarum/common/utils/KeyboardNavigatable":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/utils/KeyboardNavigatable']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/KeyboardNavigatable'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/Notification":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Notification']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Notification'];

/***/ }),

/***/ "flarum/forum/components/SessionDropdown":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SessionDropdown']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SessionDropdown'];

/***/ }),

/***/ "flarum/forum/utils/UserControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/UserControls']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/UserControls'];

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
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map