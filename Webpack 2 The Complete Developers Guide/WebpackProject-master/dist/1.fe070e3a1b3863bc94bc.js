webpackJsonp([1,5],{

/***/ 1518:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(11);

var _reactRouter = __webpack_require__(53);

var _actions = __webpack_require__(77);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArtistDetail = function (_Component) {
  _inherits(ArtistDetail, _Component);

  function ArtistDetail() {
    _classCallCheck(this, ArtistDetail);

    return _possibleConstructorReturn(this, (ArtistDetail.__proto__ || Object.getPrototypeOf(ArtistDetail)).apply(this, arguments));
  }

  _createClass(ArtistDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.findArtist(this.props.params.id);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.params.id !== this.props.params.id) {
        this.props.findArtist(nextProps.params.id);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.resetArtist();
    }
  }, {
    key: 'onDeleteClick',
    value: function onDeleteClick() {
      this.props.deleteArtist(this.props.params.id);
    }
  }, {
    key: 'renderAlbums',
    value: function renderAlbums() {
      var albums = this.props.artist.albums;


      if (!albums || !albums.map) {
        return;
      }

      return albums.map(function (album) {
        return _react2.default.createElement(
          'div',
          { className: 'card album', key: album.title },
          _react2.default.createElement(
            'div',
            { className: 'card-image' },
            _react2.default.createElement('img', { src: album.image }),
            _react2.default.createElement(
              'span',
              { className: 'card-title' },
              _react2.default.createElement(
                'h4',
                null,
                album.title
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h5',
                null,
                album.copiesSold
              ),
              _react2.default.createElement(
                'i',
                null,
                'copies sold'
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h5',
                null,
                album.numberTracks
              ),
              _react2.default.createElement(
                'i',
                null,
                'tracks'
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.artist) {
        return _react2.default.createElement(
          'div',
          null,
          'Todo: implement "FindArtist" query'
        );
      }

      var _props$artist = this.props.artist,
          name = _props$artist.name,
          age = _props$artist.age,
          genre = _props$artist.genre,
          image = _props$artist.image,
          yearsActive = _props$artist.yearsActive,
          netWorth = _props$artist.netWorth,
          labelName = _props$artist.labelName,
          _id = _props$artist._id;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'spacer' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            'Back'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/artists/' + _id + '/edit' },
            'Edit'
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.onDeleteClick.bind(this) },
            'Delete'
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'collection artist-detail' },
          _react2.default.createElement(
            'li',
            { className: 'collection-item header' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h3',
                null,
                name
              ),
              _react2.default.createElement(
                'h5',
                null,
                'Master of ',
                genre
              )
            ),
            _react2.default.createElement('image', { src: image, className: 'right' })
          ),
          _react2.default.createElement(
            'li',
            { className: 'collection-item' },
            _react2.default.createElement(
              'h5',
              null,
              yearsActive
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'i',
                null,
                'Years Active'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'collection-item' },
            _react2.default.createElement(
              'h5',
              null,
              age
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'i',
                null,
                'Years Old'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'collection-item' },
            _react2.default.createElement(
              'h5',
              null,
              '$',
              netWorth
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'i',
                null,
                'Net Worth'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'collection-item' },
            _react2.default.createElement(
              'h5',
              null,
              labelName
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'i',
                null,
                'Label'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'flex wrap' },
            this.renderAlbums()
          )
        )
      );
    }
  }]);

  return ArtistDetail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var artists = _ref.artists;

  return { artist: artists.artist };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ArtistDetail);

/***/ }

});