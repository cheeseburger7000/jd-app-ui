module.exports = {
    configureWebpack: {
        devServer: {
            port: 8089,
            open: true,
            // Mock
            before(app) {
              // 模拟数据库中的用户数据
              let users = [
                {
                  userName: 'shaohsiung',
                  password: '123'
                },
                {
                  userName: 'yang',
                  password: '123'
                }
              ]
              // 注册API
              app.get('/api/register', (req, res) => {
                // ES6 解构
                const {userName, password} = req.query
                const result = users.filter(user => user.userName == userName).length
                if (result > 0) {
                  res.json({
                    code: 1000,
                    message: '用户名已存在'
                  })
                } else {
                  res.json({
                    code: 1001,
                    message: '注册成功'
                  })
                }
              })

              // 登录API
              let tokenKey = "pepsi"
              app.get('/api/login', (req, res) => {
                const {userName, password} = req.query
                if (userName == 'yang' && password == '123') {
                  res.json({
                    code: 1002,
                    message: '登录成功',
                    token: tokenKey + '.' + userName + '.' + (new Date().getTime() + 60 * 60 * 1000)
                  })
                } else {
                  res.json({
                    code: 1003,
                    message: '账号或密码错误'
                  })
                }
              })

              // 首页轮播图API
              app.get('/api/banner', (req, res) => {
                res.json({
                  data: [
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                    }
                  ]
                })
              })
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
