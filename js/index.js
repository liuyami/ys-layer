'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElasticLayer = function () {
  function ElasticLayer(opt) {
    _classCallCheck(this, ElasticLayer);

    var type = opt.type,
        config = opt.config; //会话类型

    if (type !== 'information' && type !== 'inquiry' && type !== 'loding') {
      console.log('类型填写错误 只接收loding information inquiry');
      return;
    }

    this.type = type;
    this.layerBox = document.createElement('div');
    this.body = document.body;

    this.init(config); //创建元素
  }

  _createClass(ElasticLayer, [{
    key: 'init',
    value: function init(config) {
      var layerBox = this.layerBox;
      //父盒子 默认样式
      layerBox.className = 'layerBox';
      layerBox.style.opacity = '0';
      layerBox.style.zIndex = '-1';

      switch (this.type) {
        case 'loding':
          var _config$url = config.url,
              url = _config$url === undefined ? 'https://iknow-pic.cdn.bcebos.com/3bf33a87e950352adb732f175043fbf2b2118b9a' : _config$url,
              _config$txt = config.txt,
              txt = _config$txt === undefined ? '' : _config$txt,
              _config$isClickHide = config.isClickHide,
              isClickHide = _config$isClickHide === undefined ? false : _config$isClickHide;


          isClickHide && layerBox.addEventListener('click', this.fadeOut.bind(this, 400));

          layerBox.innerHTML = ' <div class="layerBox-loding">\n                                  <div class="loding-img-box">\n                                    <img src="' + url + '" alt="">\n                                  </div>\n                                  <p>' + txt + '</p>\n                                </div>';
          break;
        default:
          break;
      }

      this.body.appendChild(this.layerBox);
    }
  }, {
    key: 'fadeIn',
    value: function fadeIn(showTime) {
      var layerBox = this.layerBox,
          showT = showTime || 400;

      layerBox.style.zIndex = '99999';
      layerBox.style.transition = 'opacity ' + showT / 1000 + 's';
      layerBox.style.opacity = '1';
    }
  }, {
    key: 'fadeOut',
    value: function fadeOut(hideTime) {
      var layerBox = this.layerBox,
          hideT = hideTime || 400;
      console.log(hideTime);
      layerBox.style.transition = 'opacity ' + hideT / 1000 + 's';
      layerBox.style.opacity = '0';
      setTimeout(function () {
        layerBox.style.zIndex = '-1';
      }, hideT);
    }
  }]);

  return ElasticLayer;
}();