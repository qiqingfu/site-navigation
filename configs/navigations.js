/**
 * name: 大标题
 * children: 子项目
 *   logo: logo 图
 *   href: 点击跳转的链接
 *   title: 项目名字
 *   notice: 项目公告
 */

/**
 * 内部系统导航
 */
const navigations = {
  name: "系统导航",
  children: [
    {
      title: "Gitlab系统",
      notice: "Gitlab内部代码仓库",
      href: "https://about.gitlab.com/",
      logo: "img/gitlab.png",
      buttons: [
        { title: "帮助文档", href: "https://docs.gitlab.com/ee/README.html" },
      ]
    },
    { title: "WIKI系统", notice: "文档系统", href: "https://www.atlassian.com/", logo: "img/wiki.png"},
    { title: "禅道系统", notice: "项目管理系统", href: "https://www.zentao.net/", logo: "img/chandao.png"},
    { title: "账户系统", notice: "LDAP账号统一管理系统", href: "https://www.openldap.org/", logo: "img/ldap.svg"},
  ]
}

$mount({
  navigations
})
