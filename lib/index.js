'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sync = require('./sync');

var _sync2 = _interopRequireDefault(_sync);

var _reducer = require('./reducer');

var _actions = require('./actions');

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  syncHistoryWithStore: _sync2['default'],
  LOCATION_CHANGE: _reducer.LOCATION_CHANGE,
  routerReducer: _reducer.routerReducer,
  CALL_HISTORY_METHOD: _actions.CALL_HISTORY_METHOD,
  push: _actions.push,
  replace: _actions.replace,
  go: _actions.go,
  goBack: _actions.goBack,
  goForward: _actions.goForward,
  routerActions: _actions.routerActions,
  routerMiddleware: _middleware2['default']
};