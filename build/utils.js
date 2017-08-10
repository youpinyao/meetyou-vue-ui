var path = require('path')
var config = require('../config')
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const themePath = path.resolve(__dirname, config.theme);
const themeContent = fs.readFileSync(themePath, {
  encoding: 'utf-8',
});


exports.assetsPath = function(_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders('postcss', {
      ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
      plugins() {
        return [
          require('autoprefixer')({
            browsers: [
              '>1%',
              'last 2 versions',
              'Firefox ESR',
              'not ie < 9', // doesn't support IE8 anyway
            ]
          })
        ];
      }
    }),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true
    }),
    scss: generateLoaders('sass', {
      importer(url, prev, done) {
        const preThemePath = path.resolve(__dirname, url);

        if (/theme/g.test(preThemePath) && config.theme) {
          done({
            file: themePath,
            contents: themeContent,
          });
        } else {
          done();
        }
      },
    }),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
