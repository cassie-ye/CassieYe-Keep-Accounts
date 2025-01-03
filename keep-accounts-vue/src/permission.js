import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

// 省略 import 引入的代码哦！

NProgress.configure({ showSpinner: false }) // 进度条设置，把转圈圈关掉

const whiteList = ['/login'] // 设置白名单

// 路由守卫
router.beforeEach(async(to, from, next) => {
  // 进度条开始
  NProgress.start()

  // 设置标题
  document.title = getPageTitle(to.meta.title)

  // 第一次登录后会把 token 存在 cookie 中，此处就是通过 cookie 拿 token
  const hasToken = getToken()

  if (hasToken) {
    /* 有 token，证明已成功登录 */

    if (to.path === '/login') {
      next({ path: '/' }) // 如果要去登录页，会自动跳转到首页，然后会再次进入这个路由守卫
      NProgress.done()
    } else {
      next() // 如果有 token 并且有权限，直接跳转
    }
  } else {
    /* 没有 token，证明 token 过期了或者未登录，*/

    if (whiteList.indexOf(to.path) !== -1) {
      next() // 如果是白名单，直接跳转
    } else {
      // 要去其他路由，先把路由地址赋值给跳转参数，登陆成功后拿出来跳转。
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 结束进度条
  NProgress.done()
})

