<template>
  <view>
    <view>
      <u-cell-group>
        <u-cell title="头像">
          <view slot="value">
            <button class="avatar_wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
              <image class="avator" :src="userInfo.avatarUrl"></image>
            </button>
          </view>
        </u-cell>
        <u-cell title="昵称" >
          <view class="usernameView" slot="value">
            <input type="nickname" class="weui_input" :value="userInfo.username"   @input="onUsernameInput"  />
          </view>
        </u-cell>
        <u-cell title="注销账号" :isLink="true" arrow-direction="right"></u-cell>
      </u-cell-group>
      <view class="btn_box">
        <button class="cute-button">保存</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: '微信用户34583475',
        avatarUrl: "https://q1.itc.cn/q_70/images03/20240110/accd8372d0004f899469fdf7fa4768dc.jpeg"
      }
    }
  },
  methods: {
    onChooseAvatar(event) {
      const avatarUrl = event.detail.avatarUrl;
      this.userInfo.avatarUrl = avatarUrl
    },
    onUsernameInput(event) {
      const username = event.detail.value;
      this.userInfo.username = username
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar_wrapper {
  width: 90rpx;
  height: 90rpx;
  border-radius: 10rpx;
  padding: 0;
  .avator {
    width: 90rpx;
    height: 90rpx;
    border-radius: 10rpx;
    border: 2rpx solid pink;
  }
}

.btn_box {
  display: flex;
  justify-content: center;

  button {
    padding: 3rpx 220rpx;
    border: none;
    border-radius: 36rpx;
    background-color: pink;
    color: white;
    font-size: 30rpx;
    cursor: pointer;
    box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    margin-top: 180rpx;
  }
}
</style>
