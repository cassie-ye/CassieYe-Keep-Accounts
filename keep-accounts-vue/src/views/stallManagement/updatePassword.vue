<template>
  <div>
    <el-dialog title="修改密码" :visible.sync="dialogVisible" width="35%" :before-close="handleClose" center>
      <el-form ref="passwordForm" :model="formData" :rules="rules" label-width="100px">
        <el-form-item label="原密码" prop="oldPassword">
          <el-input v-model="formData.oldPassword" type="password" placeholder="请输入原密码" show-password />
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="formData.newPassword" type="password" placeholder="请输入新密码" show-password />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="formData.confirmPassword" type="password" placeholder="请再次输入新密码" show-password />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { updateStallPasswordAPI } from '@/api/stallManagement'
export default {
  name: 'UpdatePassword',
  props: {
    stallData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    // 验证确认密码是否一致
    const validateConfirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formData.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      // loading: false,
      formData: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      rules: {
        oldPassword: [
          { required: true, message: '请输入原密码', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' },
          { validator: validateConfirmPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    show() {
      this.dialogVisible = true
      if (this.$refs.passwordForm) {
        this.$refs.passwordForm.resetFields()
      }
    },
    handleClose() {
      this.dialogVisible = false
      if (this.$refs.passwordForm) {
        this.$refs.passwordForm.resetFields()
      }
    },

    handleSubmit() {
      this.$refs.passwordForm.validate(async(valid) => {
        if (valid) {
          const data = {
            baseId: this.stallData.baseId,
            oldPassword: this.formData.oldPassword,
            newPassword: this.formData.newPassword,
            newRepeatPassword: this.formData.confirmPassword
          }
          const res = await updateStallPasswordAPI(data)
          if (res.code === 0) {
            this.$message.success('密码修改成功')
            this.handleClose()
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  // width: 470px;
}

.dialog-footer {
  text-align: right;
  margin-top: 20px;
}
</style>
