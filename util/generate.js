function Generate (configs) {
  if (!(this instanceof Generate)) {
    return new Generate(configs)
  }

  this.configs = configs
  this.$el = null
  this._removeTag = 'xi-ling-mark-class'
}

Generate.prototype.mount = function (el) {
  this.$el = typeof el === "string" ? document.querySelector(el) : el
  this.render(this.createHtml())
  this.removeAttr()
}

Generate.prototype.createHtml = function () {
  let result = ``
  this.configs.forEach(config => {
    result += this.createContainer(config)
  })

  return result
}

Generate.prototype.createContainer = function (config) {
  return `
      <div class="container">
      <div class="container-header">${config.name}</div>
        <div class="container-body">${this.createBlock(config.children)}</div>
  </div>
  `
}

Generate.prototype.createBlock = function (children) {
  let blockHtml = ``
  children.forEach(child => {
    const tag = child.href ? 'a' : 'div'
    blockHtml += `
     <div class="item-block">
      <${tag} class="${this._removeTag}" data-tag="${tag}" href="${child.href || '#'}" target="_blank">
        <div class="item-top">
          <div class="item-logo"><img src="${child.logo}"></div>
          <div class="item-body">
            <span class="title">${child.title}</span>
            <span class="notice">${child.notice}</span>
          </div>
        </div>
      </${tag}>
      ${this.createButton(child)}
    </div>
  `
  })
  return blockHtml
}

Generate.prototype.createButton = function (child) {
  let buttonHtml = ``
  child.buttons && child.buttons.forEach(button => {
    buttonHtml += `
        <a href="${button.href || '#'}" target="_blank">
          <div>${button.title}</div>
        </a>
    `
  })

  return buttonHtml.length ? this.createButtonWrapper(buttonHtml) : buttonHtml
}

Generate.prototype.createButtonWrapper = function (buttonHtml) {
  return `
    <div class="item-bottom">${buttonHtml}</div>
  `
}

Generate.prototype.render = function (html) {
  this.$el.innerHTML = html || `Empty`
}

Generate.prototype.removeAttr = function () {
  Array.from(document.querySelectorAll(`.${this._removeTag}`), el => {
    el.removeAttribute('class')
    if (el.dataset.tag === "div") {
      ['target', 'href'].some(attr => {
        el.removeAttribute(attr)
        return false
      })
    }
  })
}

/**
 * 实例化生成器对象, 将生成的 DOM 插入到指定的 body 容器
 */
Generate(window.$xlConfigs.configs || []).mount(document.getElementById("app"))
