const plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  [
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '~': './src',
        test: './test'
      }
    }
  ]
]

const presets = ['@babel/preset-flow', '@babel/preset-react']

const presetsByEnv = {
  development: [['@babel/preset-env', { targets: { chrome: 65 } }]],
  test: [['@babel/preset-env', { targets: { node: '8.5' } }]],
  production: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: "defaults"
      }
    ]
  ]
}

module.exports = {
  plugins,
  presets: [...presets, ...presetsByEnv[process.env.NODE_ENV || 'development']]
}
