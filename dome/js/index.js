'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var YsLayer = function () {
  function YsLayer(opt) {
    _classCallCheck(this, YsLayer);

    this.type = opt.type;
    if (this.type !== 'info' && this.type !== 'confirm' && this.type !== 'loading') {
      console.log('类型填写错误 只接收loading info confirm');
      return;
    }

    this.config = opt.config;
    this.body = document.body;
    this.layerBox = document.createElement('div');
    this.init(this.config); //创建元素
  }

  _createClass(YsLayer, [{
    key: 'init',
    value: function init(config) {
      var layerBox = this.layerBox;
      //父盒子 默认样式
      layerBox.className = 'layerBox';
      layerBox.style.opacity = '0';
      layerBox.style.zIndex = '-1';

      // loading
      if (this.type === 'loading') {
        var _config$url = config.url,
            url = _config$url === undefined ? 'https://iknow-pic.cdn.bcebos.com/3bf33a87e950352adb732f175043fbf2b2118b9a' : _config$url,
            _config$txt = config.txt,
            txt = _config$txt === undefined ? '' : _config$txt,
            _config$isClickHide = config.isClickHide,
            isClickHide = _config$isClickHide === undefined ? false : _config$isClickHide;
        //注册点击隐藏loading事件

        isClickHide ? layerBox.onclick = this.fadeOut.bind(this, 400) : layerBox.onclick = function () {};

        layerBox.innerHTML = ' <div class="ly-loading">\n                                  <div class="loading-img-box">\n                                    <img src="' + url + '" alt="">\n                                  </div>\n                                  <p>' + txt + '</p>\n                                </div>';
      }

      // info 信息框
      if (this.type === 'info') {
        var _txt = config.txt,
            btn = config.btn,
            success = config.success;

        layerBox.innerHTML = '<div class="ly-info"">\n                                <p>' + _txt + '</p>\n                                <div class="ly-info-btn" id="ly-info-btn">' + btn + '</div>\n                              </div>';

        layerBox.getElementsByClassName('ly-info-btn')[0].onclick = success;
      }

      // confirm 询问框
      if (this.type === 'confirm') {
        var _txt2 = config.txt,
            _success = config.success,
            error = config.error,
            btns = config.btns;

        layerBox.innerHTML = '<div class="ly-confirm">\n                              <p>' + _txt2 + '</p>\n                              <div class="ly-confirm-btns">\n                                <div class="ly-confirm-success">' + btns[0] + '</div>\n                                <div class="ly-confirm-error">' + btns[1] + '</div>\n                              </div>\n                            </div>';

        layerBox.getElementsByClassName('ly-confirm-success')[0].onclick = _success;
        layerBox.getElementsByClassName('ly-confirm-error')[0].onclick = error;
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

      return this;
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

      return this;
    }
  }]);

  return YsLayer;
}();