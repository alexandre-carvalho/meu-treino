module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
      '@babel/preset-typescript',
    ],

    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          envName: 'NODE_ENV',
          path: 'env/.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],

      ['babel-plugin-styled-components'],
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-proposal-async-generator-functions'],
      ['@babel/plugin-proposal-object-rest-spread'],
      ['@babel/plugin-transform-runtime'],
      ['@babel/plugin-proposal-decorators', {
        legacy: true
      }],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'src',
        },
      ],
    ],
  };
};