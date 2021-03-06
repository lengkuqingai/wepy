const path = require('path');
var prod = process.env.NODE_ENV === 'production'
var fs = require('fs');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');

module.exports = {
  wpyExt: '.wpy',
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    modules: ['node_modules']
  },
  eslint: false,
  compilers: {
    less: {
      compress: true,
      plugins: [new LessPluginAutoPrefix({browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6']})]
    },
    sass: {
      outputStyle: 'compressed'
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        'syntax-export-extensions'
      ]
    }
  },
  plugins: {
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {
  deleteTarget("dist");
  
  delete module.exports.compilers.babel.sourcesMap;
  // 压缩sass
  module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩less
  // module.exports.compilers['less'] = {compress: true}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
// 删除目标文件夹或文件
function deleteTarget(fileUrl) {
  // 如果当前url不存在，则退出
  if (!fs.existsSync(fileUrl)) return;
  // 当前文件为文件夹时
  if (fs.statSync(fileUrl).isDirectory()) {
    var files = fs.readdirSync(fileUrl);
    var len = files.length,
      removeNumber = 0;
    if (len > 0) {
      files.forEach(function(file) {
        removeNumber++;
        var stats = fs.statSync(fileUrl + '/' + file);
        var url = fileUrl + '/' + file;
        if (fs.statSync(url).isDirectory()) {
          deleteTarget(url);
        } else {
          fs.unlinkSync(url);
        }

      });
      if (removeNumber === len) {
        // 删除当前文件夹下的所有文件后，删除当前空文件夹（注：所有的都采用同步删除）
        fs.rmdirSync(fileUrl);
        console.log('删除文件夹' + fileUrl + '成功');
      }
    } else {
      fs.rmdirSync(fileUrl)
    }
  } else {
    // 当前文件为文件时
    fs.unlinkSync(fileUrl);
    console.log('删除文件' + fileUrl + '成功');
  }
}