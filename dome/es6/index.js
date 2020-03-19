class ElasticLayer{
  constructor (opt) {
    this.type = opt.type;
    if(this.type !== 'information' && this.type !== 'inquiry' && this.type !== 'loding') {
      console.log('类型填写错误 只接收loding information inquiry')
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

    // loding
    if(this.type === 'loding') {
      let {url = 'https://iknow-pic.cdn.bcebos.com/3bf33a87e950352adb732f175043fbf2b2118b9a', txt = '', isClickHide = false} = config;
        //注册点击隐藏loding事件
        isClickHide && layerBox.addEventListener('click', this.fadeOut.bind(this, 400,))
        //添加node
        layerBox.innerHTML = ` <div class="ly-loding">
                                  <div class="loding-img-box">
                                    <img src="${url}" alt="">
                                  </div>
                                  <p>${txt}</p>
                                </div>`;
    }

    // information 信息框
    if(this.type === 'information') {
      let {txt, success} = config;
        layerBox.innerHTML = `<div class="ly-information"">
                                <p>${txt}</p>
                                <div class="ly-info-btn" id="ly-info-btn">按钮</div>
                              </div>`;

        layerBox.getElementsByClassName('ly-info-btn')[0].onclick = success;
    }

    // inquiry 询问框
    if(this.type === 'inquiry') {
      let {txt, success, error} = config;
      layerBox.innerHTML = `<div class="ly-inquiry">
                              <p>${txt}</p>
                              <div class="ly-inquiry-btns">
                                <div class="ly-inquiry-success">确定</div>
                                <div class="ly-inquiry-error">取消</div>
                              </div>
                            </div>`;
      console.log(layerBox)
      layerBox.getElementsByClassName('ly-inquiry-success')[0].onclick = success;
      layerBox.getElementsByClassName('ly-inquiry-error')[0].onclick = error;
    }


    this.body.appendChild(this.layerBox)
  }
  fadeIn(showTime) {
    let layerBox = this.layerBox,
        showT = showTime || 400;

    layerBox.style.zIndex = '99999';
    layerBox.style.transition = `opacity ${showT / 1000}s`;
    layerBox.style.opacity = '1';
  }

  fadeOut(hideTime) {
    let layerBox = this.layerBox,
        hideT = hideTime || 400;

    layerBox.style.transition = `opacity ${hideT / 1000}s`;
    layerBox.style.opacity = '0';
    setTimeout( () => {
      layerBox.style.zIndex = '-1';
    }, hideT)
  }
}