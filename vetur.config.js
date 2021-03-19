module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true
  },
  projects: [
    './front-end',
    {
      root: './front-end',
      package: './front-end/package.json'
    }
  ]
}
