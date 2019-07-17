
// 设置静态资源的线上路径
const publicPath = 'https://beatles-chameleon.github.io/cml-todomvc/dist';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
const path = require('path');
cml.config.merge({
  templateLang: 'cml',
  templateType: 'html',
  // builtinNpmName: 'cml-tt-ui-builtin',
  extPlatform: {
    tt: 'cml-tt-plugin',
  },
  babelPath: [
    path.join(__dirname,'node_modules/cml-tt-ui-builtin'),
    path.join(__dirname,'node_modules/cml-tt-runtime'),
    path.join(__dirname,'node_modules/cml-tt-api'),
    path.join(__dirname,'node_modules/cml-tt-ui'),
    path.join(__dirname,'node_modules/cml-tt-store'),
    path.join(__dirname,'node_modules/cml-tt-mixins'),
    path.join(__dirname,'node_modules/mobx'),
  ],
  baseStyle:{
    wx: true,
    web: true,
    weex: true,
    alipay: true,
    baidu: true,
    qq: true,
    tt:true,
  },
  platforms: ['web', 'weex', 'wx','tt'],
  buildInfo: {
    wxAppId: '123456',
    wxEntryPage: '',
    webPath: 'https://api.chameleon.com/h5/index'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix,
      hash: false
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

