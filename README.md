[TOC]
# jd-app-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Token处理
- 存储：vuex 和 localStorage
- 拦截HTTP请求将token放入请求头中
- 拦截HTTP响应处理token过期

## Tips
- Token处理
- UI组件堆叠
- 嵌套路由
- 路由跳转时实现过渡效果
- 实现商品分类模块
- 根据不同的移动客户端, 设置滚动盒子
- 路由拦截+路由属性实现登录成功后, 重定向回原来访问的页面
- 购物车
- 项目打包
```
cnpm run build
```

## Vue面试题(高频, 深度)
### MVVM
- 数据驱动: VM监听到Vue实例(model)中数据变化之后, 就响应式地去控制视图的更新. 
- 因此开发者就可以专心于数据, 而不是操作DOM.
### 组件通信 
- 父子之间: props $emit **发布者订阅者**
- 非父子之间: 建立一个空实例进行传值, 中央事件总线机制
- 祖孙之间: provide-inject
- **Vuex**
    - 各种属性
 ### 关于单页应用首屏加载速度慢，出现白屏时间过长问题你怎么处理
- 将公用的JS库通过script标签在index.html进行外部引入，减少我们打包出来的js文件的大小，让浏览器并行下载资源文件，提高下载速度
- 在配置路由的时候进行**路由的懒加载**，在调用到改路由时再加载次路由相对应的js文件
- 加一个首屏loading图或骨架屏，提高用户的体验
- 尽可能使用CSS Sprites和字体图标库, 少用图片
- 图片的懒加载等
### 从输入网址到网页渲染完成经历了什么(google)
1. 输入网址按回车键或点击跳转
2. 发送到DNS服务器进行DNS解析，获取到我们对应web服务器对应的ip地址(DNS解析)
3. 与Web服务器建立TCP连接(三次握手)
4. 浏览器向web服务器发送http请求
5. Web服务器进行响应请求并返回指定的url数据（当然这里也可能是错误信息或者重定向到新的url地址等）
6. 浏览器下载web服务器返回的数据及解析html源文件
7. 根据文件生成DOM树和样式树合成我们的渲染树，解析js，最后渲染我们的页面然后显示出来(浏览器原理)
### 关于修改了数据，视图不更新的理解和处理方式
Vue中给data中的对象属性添加一个新的属性时会发生什么

经过打印发现数据是已经改变了，但是由于在Vue实例创建时， 新添加的属性并未声明，因此就没有被Vue转换为响应式的属性，自然就不会触发视图的更新，这时就需要使用Vue的全局api——> `$set()`

$set()使用方法：

$set(需要修改的对象，"对象的属性",值)
### 在vue里面你如何做数据的监听
1. watch里面监听

    - 第一种写法

    ​		watch:{
    ​				obj(newval,oldval){
    ​					console.log(newval,oldval)
    ​				},
    ​			}

    - 第二种写法可设置deep为true对数据进行深层遍历监听

    ​		watch:{
    ​				obj:{
    ​					handler(newval,oldval){
    ​						console.log(222)
    ​						console.log(newval,oldval)
    ​					},
    ​					deep:true
    ​				}
    ​			}

2. computed 里面监听

    - computed里面的依赖改变时，所计算的属性或作出事实的改变