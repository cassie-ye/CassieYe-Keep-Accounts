<template>
  <div class="home">
    <div class="title">
      众食链
    </div>
    <div class="loginFrame">
      <div class="subTitle">欢迎登录</div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        status-icon
        @keyup.enter.native="dataFormSubmit()"
      >
        <el-form-item class="elFormItem" prop="username">
          <el-input ref="username" v-model="loginForm.username" placeholder="帐号" />
        </el-form-item>
        <el-form-item class="elFormItem" prop="password">
          <el-input ref="password" v-model="loginForm.password" type="password" placeholder="密码" />
        </el-form-item>

        <el-form-item class="elFormItem">
          <el-button
            :loading="loading"
            type="primary"
            style="width:100%;margin-bottom:30px;background-color: #17b3a3;border: #17b3a3;"
            class="login-btn-submit"
            @click.native.prevent="handleLogin"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { test } from '@/api/user'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    this.testLogin()
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    testLogin() {
      const data = {
        'password': '123456',
        'username': 'admin'
      }
      test(data).then(res => {
        console.log(res)
      })
    },
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.loginForm.username === 'admin' && this.loginForm.password === 'Srit@2024') {
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm)
              .then(() => {
                this.$router.push({ path: '/stallManagement/list' })
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            this.$message({
              message: '账号或密码错误',
              type: 'error'
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  width: 100vw;
  height: 100vh;
  background: url(~@/assets/bg/login_bg2.png) no-repeat;
  background-size: 100% 100%;
  position: relative;

  .el-input {
    height: 47px;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

@font-face {
  font-family: "YouSheBiaoTiHei";
  src: url(~@/assets/fonts/YouSheBiaoTiHei.ttf);
}

.home {
  width: 100vw;
  height: 100vh;
  background: url(~@/assets/bg/login_bg2.png) no-repeat;
  background-size: 100% 100%;
  position: relative;

  .title {
    font-size: 3vw;
    font-family: YouSheBiaoTiHei;
    color: rgba(6, 110, 203, 1);
    position: absolute;
    letter-spacing: 5px;
    left: 24vw;
    top: 8vw;
  }

  .loginFrame {
    width: 526px;
    height: 540px;
    background: #FFFFFF;
    position: absolute;
    right: 16vw;
    top: 12vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .subTitle {
      font-size: 34px;
      font-weight: 600;
      color: #000000;
      letter-spacing: 1px;
      font-family: PingFang SC;
      margin-top: 86px;
      margin-bottom: 40px;
    }

    .login-main {
      position: absolute;
      top: 0;
      right: 0;
      padding: 150px 60px 180px;
      width: 470px;
      min-height: 100%;
      background-color: #fff;
    }

    .elFormItem {
      margin-bottom: 30px;
      width: 410px !important;
    }

    .login-title {
      font-size: 16px;
    }

    .login-captcha {
      overflow: hidden;

      >img {
        width: 100%;
        cursor: pointer;
      }
    }

    .login-btn-submit {
      width: 100%;
      margin-top: 38px;
    }
  }

  .footer {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    font-size: 18px;

    .corImg {
      height: 25px;
      margin-right: 15px;
    }
  }
}
</style>
