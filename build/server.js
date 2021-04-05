"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _axios = _interopRequireDefault(require("axios"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.post('/api/summoner', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var summonerName, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            summonerName = req.body.summonerName; //console.log(encodeURI(summonerName))

            _context.prev = 1;
            _context.next = 4;
            return _axios["default"].get("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/".concat(encodeURI(summonerName), "?api_key=").concat(process.env.RIOT_API_KEY));

          case 4:
            result = _context.sent;

            if (result.status === 200) {
              res.json(result.data);
            } else if (result.status === 404) {
              res.json("Not Found");
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);
            res.json(404);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post('/api/league', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var summonerId, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            summonerId = req.body.summonerId; //console.log(summonerId);

            _context2.prev = 1;
            _context2.next = 4;
            return _axios["default"].get("https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/".concat(encodeURI(summonerId), "?api_key=").concat(process.env.RIOT_API_KEY));

          case 4:
            result = _context2.sent;
            res.json(result.data);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0.message);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.post('/api/matches', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var accountId, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            accountId = req.body.accountId; //console.log(accountId);

            _context3.prev = 1;
            _context3.next = 4;
            return _axios["default"].get("https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/".concat(accountId, "?api_key=").concat(process.env.RIOT_API_KEY));

          case 4:
            result = _context3.sent;
            res.json(result.data);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0.message);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.post('/api/match', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var gameId, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            gameId = req.body.gameId; //console.log(gameId)

            _context4.prev = 1;
            _context4.next = 4;
            return _axios["default"].get("https://kr.api.riotgames.com/lol/match/v4/matches/".concat(gameId, "?api_key=").concat(process.env.RIOT_API_KEY));

          case 4:
            result = _context4.sent;
            res.send(result.data);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0.message);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app.listen(PORT, function () {
  return console.log("\uD83D\uDE80 Express Server Running on http://localhost:".concat(PORT));
});