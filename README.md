# ys-layer
## 弹层插件使用    

## 引入 npm方式
npm安装： npm i ys-layer
```javascript
import 'ys-layer/ys-layer.css'        		//vue router中引入css
import YSLayer from 'ys-layer/ys-layer'     //页面中引入js
```


## cdn方式
```javascript

```
## 使用
## loading配置

```javascript
// loding 配置
    var loading = {
      type: 'loading',  		//必须 类型String  loading
      config: {
        // url: '',			    //可选 loading图片  提示！！！传空字符串 默认图不显示
        txt: '',  				//可选 默认为空  提示文字
        isClickHide: true, 		//可选  默认false  点击隐藏loading
      }
    };

var ysLayerloading = new YsLayer(loading);
//方法
ysLayerloading.fadeIn()      // 显示 接收一个Number时间参数（可选）  默认400 
ysLayerloading.fadeOut()     // 隐藏 接收一个Number时间参数（可选）  默认400 
ysLayerloading.init(config)  // 重置config
```



## info单选框配置  

```javascript
var info = {
      type: 'info',  						//必须 类型String  接收 info
      config: {
        txt: '确定关闭当前页面？',			  //必须  说明文字
        btn: '确定按钮',					 //必须  按钮
        success: function () {				//必须  回调函数
          ysLayerinfo.fadeOut()
        }
      }
    };

var ysLayerinfo = new YsLayer(info);
//方法
ysLayerinfo.fadeIn()      // 显示 接收一个Number时间参数（可选）  默认400 
ysLayerinfo.fadeOut()     // 隐藏 接收一个Number时间参数（可选）  默认400 
ysLayerinfo.init(config)  // 重置config

```

## confirm询问框对话

```javascript
var confirm = {
      type: 'confirm',						//必须 类型String  接收 confirm
      config: {
        txt: '是否关闭这个内容？',        	  //必须 类型String 
        btns: ['确定', '取消'],   	 	     //必须 Array
        success: function () {              //必须 确定按钮回调
          ysLayerconfirm.fadeOut()
        },
        error: function () {		        //必须 取消按钮回调
          ysLayerconfirm.fadeOut()
        }
      }
    }

var ysLayerconfirm = new YsLayer(confirm);

ysLayerconfirm.fadeIn()      // 显示 接收一个Number时间参数（可选）  默认400 
ysLayerconfirm.fadeOut()     // 隐藏 接收一个Number时间参数（可选）  默认400 
ysLayerconfirm.init(config)  // 重置config
```
