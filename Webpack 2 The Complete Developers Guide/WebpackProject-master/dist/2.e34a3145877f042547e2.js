webpackJsonp([2,5],{

/***/ 1517:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(11);

var _reduxForm = __webpack_require__(73);

var _actions = __webpack_require__(77);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArtistCreate = function (_Component) {
  _inherits(ArtistCreate, _Component);

  function ArtistCreate() {
    _classCallCheck(this, ArtistCreate);

    return _possibleConstructorReturn(this, (ArtistCreate.__proto__ || Object.getPrototypeOf(ArtistCreate)).apply(this, arguments));
  }

  _createClass(ArtistCreate, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.clearError();
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(formProps) {
      this.props.createArtist(formProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var handleSubmit = this.props.handleSubmit;


      return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit(this.onSubmit.bind(this)) },
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement(_reduxForm.Field, { name: 'name', component: 'input', placeholder: 'Name' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement(_reduxForm.Field, { name: 'age', component: 'input', placeholder: 'Age' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement(_reduxForm.Field, { name: 'yearsActive', component: 'input', placeholder: 'Years Active' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement(_reduxForm.Field, { name: 'genre', component: 'input', placeholder: 'Genre' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'has-error' },
          this.props.errorMessage
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn' },
          'Submit'
        )
      );
    }
  }]);

  return ArtistCreate;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    errorMessage: state.errors
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)((0, _reduxForm.reduxForm)({
  form: 'create'
})(ArtistCreate));

/***/ }

});