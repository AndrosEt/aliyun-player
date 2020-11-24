// vue.config.js
// module.exports = process.env.NODE_ENV === 'production' ?
//     {
//       // options...
//       publicPath: 'https://whiter.cc/cached-assets'
//     } : {
//       publicPath: '/'
//     }
module.exports = {
  outputDir: 'docs'
  // options...
  // publicPath: 'https://whiter.cc/cached-assets'
  // publicPath: process.env.NODE_ENV === 'production'
  //     ? 'https://whiter.cc/cached-assets'
  //     : '/'
}
