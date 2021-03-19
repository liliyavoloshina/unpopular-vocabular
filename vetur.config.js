module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true
  },
  projects: [
    './client',
    {
      root: './client',
      package: './client/package.json'
    }
  ]
}
