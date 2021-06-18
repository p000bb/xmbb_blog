import ElementUI from 'element-ui';
import axios from './http/axios';
import 'element-ui/lib/theme-chalk/index.css';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  const url = router.history._startLocation;
  const name = router.history.name
  const arrayRouter = router.options.routes
  const find = arrayRouter.findIndex(item =>item.redirect === url || item.name === name)
  if(find === -1){
    router.replace(' ')
  }
  Vue.use(ElementUI);
  Vue.prototype.axios = axios;
  console.log(document.querySelector('.logo'))
}
