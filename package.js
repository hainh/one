Package.describe({
  name: 'qualia:one',
  version: '0.0.1',
  summary: 'Prevent two client bundles from being built.',
  git: 'http://github.com/qualialabs/one',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "qualia:one",
  sources: [
    'plugin.js',
  ],
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');

  api.use([
    'ecmascript',
    'underscore',
    'webapp',
  ], [ 'server' ]);

  api.mainModule('main.js', 'server');
});
