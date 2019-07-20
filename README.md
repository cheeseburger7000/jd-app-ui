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