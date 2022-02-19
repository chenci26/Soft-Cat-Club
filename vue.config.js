/* eslint-disable global-require */
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

// const IS_PROD = process.env.NODE_ENV === 'production';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const vueConfig = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'));

    config
      .plugin('ScriptExtHtmlWebpackPlugin')
      .after('html')
      .use('script-ext-html-webpack-plugin', [
        {
          // 将 runtime 作为内联引入不单独存在
          inline: /runtime\..*\.js$/,
        },
      ])
      .end();

    config
      .plugin('define')
      .tap((definitions) => {
        definitions[0] = Object.assign(definitions[0], {
          __INTLIFY_PROD_DEVTOOLS__: false,
        });
        return definitions;
      });

    config
      .plugin('contextReplacement')
      .use(new webpack.ContextReplacementPlugin(
        /moment[/\\]locale$/,
        /zh-cn|vi|th|ja/,
      ));

    /* analyzer */

    // config
    //   .plugin('webpack-bundle-analyzer')
    //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);

    config.optimization.splitChunks({
      chunks: 'all',
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      minSize: 10000,
      maxSize: 250000,
      cacheGroups: {
        // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'),
          minChunks: 2, //  被至少用兩次以上打包分离
          priority: 5, // 优先级
          reuseExistingChunk: true, // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
        },
        node_vendors: {
          name: 'chunk-libs',
          chunks: 'initial', // 只打包初始时依赖的第三方
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
      },
    });

    // config.optimization
    //   .runtimeChunk('single');

    config.optimization
      .minimizer('TerserPlugin')
      .use(TerserPlugin, [{
        parallel: true,
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: false,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
        },
        extractComments: true,
      }]);
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/layout/_media.scss";
        `,
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#096fc9',
            'error-color': '#096fc9',
          },
        },
      },
    },
  },
  productionSourceMap: false,
  publicPath: './',
};

module.exports = vueConfig;
