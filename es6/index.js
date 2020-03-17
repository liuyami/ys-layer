class ElasticLayer{
  constructor (opt) {
    let { type, config } = opt;  //会话类型
    
    if(type !== 'information' && type !== 'inquiry' && type !== 'loding') {
      console.log('类型填写错误 只接收loding information inquiry')
      return
    }

    this.type = type;
    this.layerBox = document.createElement('div');
    this.body = document.body;

    this.init(config) //创建元素
  }
  init(config) {
    let layerBox = this.layerBox;
    //父盒子 默认样式
    layerBox.className = 'layerBox';
    layerBox.style.opacity = '0';
    layerBox.style.zIndex = '-1';

    switch(this.type){
      case 'loding':
        let {url = 'https://iknow-pic.cdn.bcebos.com/3bf33a87e950352adb732f175043fbf2b2118b9a', txt = '', isClickHide = false} = config;

        isClickHide && layerBox.addEventListener('click', this.fadeOut.bind(this, 400,))

        layerBox.innerHTML = ` <div class="layerBox-loding">
                                  <div class="loding-img-box">
                                    <img src="${url}" alt="">
                                  </div>
                                  <p>${txt}</p>
                                </div>`;
        break;
      default:
        break;
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
    console.log(hideTime)
    layerBox.style.transition = `opacity ${hideT / 1000}s`;
    layerBox.style.opacity = '0';
    setTimeout( () => {
      layerBox.style.zIndex = '-1';
    }, hideT)
  }
}