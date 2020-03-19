'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElasticLayer = function () {
  function ElasticLayer(opt) {
    _classCallCheck(this, ElasticLayer);

    this.type = opt.type;
    if (this.type !== 'information' && this.type !== 'inquiry' && this.type !== 'loding') {
      console.log('类型填写错误 只接收loding information inquiry');
      return;
    }

    this.config = opt.config;
    this.body = document.body;
    this.layerBox = document.createElement('div');
    this.init(this.config); //创建元素
  }

  _createClass(ElasticLayer, [{
    key: 'init',
    value: function init(config) {
      var layerBox = this.layerBox;
      //父盒子 默认样式
      layerBox.className = 'layerBox';
      layerBox.style.opacity = '0';
      layerBox.style.zIndex = '-1';

      // loding
      if (this.type === 'loding') {
        var _config$url = config.url,
            url = _config$url === undefined ? 'https://iknow-pic.cdn.bcebos.com/3bf33a87e950352adb732f175043fbf2b2118b9a' : _config$url,
            _config$txt = config.txt,
            txt = _config$txt === undefined ? '' : _config$txt,
            _config$isClickHide = config.isClickHide,
            isClickHide = _config$isClickHide === undefined ? false : _config$isClickHide;
        //注册点击隐藏loding事件

        isClickHide && layerBox.addEventListener('click', this.fadeOut.bind(this, 400));
        //添加node
        layerBox.innerHTML = ' <div class="ly-loding">\n                                  <div class="loding-img-box">\n                                    <img src="' + url + '" alt="">\n                                  </div>\n                                  <p>' + txt + '</p>\n                                </div>';
      }

      // information 信息框
      if (this.type === 'information') {
        var _txt = config.txt,
            success = config.success;

        layerBox.innerHTML = '<div class="ly-information"">\n                                <p>' + _txt + '</p>\n                                <div class="ly-info-btn" id="ly-info-btn">\u6309\u94AE</div>\n                              </div>';

        layerBox.getElementsByClassName('ly-info-btn')[0].onclick = success;
      }

      // inquiry 询问框
      if (this.type === 'inquiry') {
        var _txt2 = config.txt,
            _success = config.success,
            error = config.error;

        layerBox.innerHTML = '<div class="ly-inquiry">\n                              <p>' + _txt2 + '</p>\n                              <div class="ly-inquiry-btns">\n                                <div class="ly-inquiry-success">\u786E\u5B9A</div>\n                                <div class="ly-inquiry-error">\u53D6\u6D88</div>\n                              </div>\n                            </div>';
        console.log(layerBox);
        layerBox.getElementsByClassName('ly-inquiry-success')[0].onclick = _success;
        layerBox.getElementsByClassName('ly-inquiry-error')[0].onclick = error;
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

      layerBox.style.transition = 'opacity ' + hideT / 1000 + 's';
      layerBox.style.opacity = '0';
      setTimeout(function () {
        layerBox.style.zIndex = '-1';
      }, hideT);
    }
  }]);

  return ElasticLayer;
}();