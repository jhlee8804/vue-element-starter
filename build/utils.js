'use strict'

const path = require('path')
const fs = require('fs')

module.exports = {
  resolve: function(dir) {
    return path.join(__dirname, '..', dir)
  },
  assetsPath: function(_path) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
  },
  getEntries: function() {
    const self = this,
      entries = {}

    fs.readdirSync(self.resolve('src/pages/')).forEach(function(name) {
      const jsIndex = self.resolve(`src/pages/${name}/index.js`),
        htmlIndex = self.resolve(`src/pages/${name}/index.html`)

      if (fs.existsSync(jsIndex)) {
        entries[name] = {}
        entries[name].js = jsIndex
      }

      if (fs.existsSync(htmlIndex)) {
        entries[name] = entries[name] || {}
        entries[name].html = htmlIndex
      }
    })

    return entries
  }
}
