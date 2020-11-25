window.$mount = function (config) {
  const configName = Object.keys(config)[0]
  window.$xlConfigs = window.$xlConfigs || {configs: []}
  window.$xlConfigs.configs.push(config[configName])
}
