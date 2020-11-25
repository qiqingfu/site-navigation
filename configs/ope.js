/**
 * 项目相关配置
 */
const ope= {
  name: "运维导航",
  children: [
    {
      title: "开源运维平台", notice: "Spug开源运维平台", href: "https://demo.spug.dev", logo: "img/spug.png",
      buttons: [
        { title: "源码地址", href: "https://github.com/openspug/spug" },
      ]
    },
    {
      title: "监控系统", notice: "Grafana 监控平台", logo: "img/grafana.png",
      buttons: [
        { title: "帮助文档", href: "https://grafana.com/" },
      ]
    },
    { title: "监控报警", notice: "Zabbix监控报警平台", href: "https://www.zabbix.com/", logo: "img/zabbix.png"},
  ]
}

$mount({
  ope
})
