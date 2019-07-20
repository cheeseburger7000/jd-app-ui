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

## Tips

### Token处理
- 存储：vuex 和 localStorage
- 拦截HTTP请求将token放入请求头中
- 拦截HTTP响应处理token过期