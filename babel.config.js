module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  "plugins": [
    [
      "component",
      {
        "ext": ".scss",
        "libraryName": "element-ui",
        "styleLibraryName": "~node_modules/element-ui/packages/theme-chalk/src"
        // "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
