class YsLayer{
  constructor (opt) {
    this.type = opt.type;
    if(this.type !== 'info' && this.type !== 'confirm' && this.type !== 'loading') {
      console.log('类型填写错误 只接收loading info confirm')
      return
    }

    this.config = opt.config;
    this.body = document.body;
    this.layerBox = document.createElement('div');
    this.init(this.config) //创建元素
  }
  init(config) {
    let layerBox = this.layerBox;
    //父盒子 默认样式
    layerBox.className = 'layerBox';
    layerBox.style.opacity = '0';
    layerBox.style.zIndex = '-1';

    // loading
    if(this.type === 'loading') {
      let {url = 'https://iknow-pic.cdn.bcebos.com/3bf33a87e950352adb732f175043fbf2b2118b9a', txt = '', isClickHide = false} = config;
        //注册点击隐藏loading事件
        isClickHide ? layerBox.onclick = this.fadeOut.bind(this, 400,) : layerBox.onclick = function() {};

        layerBox.innerHTML = ` <div class="ly-loading">
                                  <div class="loading-img-box">
                                    <img src="${url}" alt="">
                                  </div>
                                  <p>${txt}</p>
                                </div>`;
    }

    // info 信息框
    if(this.type === 'info') {
      let {txt, btn, success} = config;
        layerBox.innerHTML = `<div class="ly-info"">
                                <p>${txt}</p>
                                <div class="ly-info-btn" id="ly-info-btn">${btn}</div>
                              </div>`;

        layerBox.getElementsByClassName('ly-info-btn')[0].onclick = success;
    }

    // confirm 询问框
    if(this.type === 'confirm') {
      let {txt, success, error, btns} = config;
      layerBox.innerHTML = `<div class="ly-confirm">
                              <p>${txt}</p>
                              <div class="ly-confirm-btns">
                                <div class="ly-confirm-success">${btns[0]}</div>
                                <div class="ly-confirm-error">${btns[1]}</div>
                              </div>
                            </div>`;

      layerBox.getElementsByClassName('ly-confirm-success')[0].onclick = success;
      layerBox.getElementsByClassName('ly-confirm-error')[0].onclick = error;
    }

    this.body.appendChild(this.layerBox)
  }
  fadeIn(showTime) {
    let layerBox = this.layerBox,
        showT = showTime || 400;

    layerBox.style.zIndex = '99999';
    layerBox.style.transition = `opacity ${showT / 1000}s`;
    layerBox.style.opacity = '1';

    return this
  }

  fadeOut(hideTime) {
    let layerBox = this.layerBox,
        hideT = hideTime || 400;

    layerBox.style.transition = `opacity ${hideT / 1000}s`;
    layerBox.style.opacity = '0';
    setTimeout( () => {
      layerBox.style.zIndex = '-1';
    }, hideT)

    return this
  }
}