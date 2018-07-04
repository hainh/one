var path         = Npm.require('path'),
    mainModule   = global.process.mainModule,
    absPath      = mainModule.filename.split(path.sep).slice(0, -1).join(path.sep),
    require      = function(filePath) {
      return mainModule.require(path.resolve(absPath, filePath));
    },
    bundleType = process.env.QUALIA_ONE_BUNDLE_TYPE;
;

if (bundleType === 'modern' || bundleType === 'legacy') {
  var PlatformList = require('./project-context.js').PlatformList,
      getWebArchs  = PlatformList.prototype.getWebArchs,
      blacklist    = [
        bundleType === 'modern' ? 'web.browser.legacy' : 'web.browser'
      ]
  ;

  PlatformList.prototype.getWebArchs = function() {
    var archs = getWebArchs.apply(this, arguments);
    return archs.filter(arch => !blacklist.includes(arch));
  }
}
