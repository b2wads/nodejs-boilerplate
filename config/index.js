const envLoader = require('env-o-loader')
const fs = require('fs')

// eslint-disable-next-line security/detect-non-literal-fs-filename
const availableConfigs = fs
  .readdirSync(__dirname)
  .filter(
    fileName =>
      fileName.substring(fileName.length - 5, fileName.length) === '.yaml'
  )
  .reduce((acc, fileName) => {
    const fileNameWithoutExtension = fileName.substring(0, fileName.length - 5)
    // eslint-disable-next-line security/detect-object-injection
    acc[`${fileNameWithoutExtension}Config`] = envLoader(`./${fileName}`)
    return acc
  }, {})
module.exports = availableConfigs
