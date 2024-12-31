<template>
  <view class="my">
    <view class="topPink">
      <view class="userInfo">
        <image @click="gotoPersonalInfo()" class="avator"
          src="https://q1.itc.cn/q_70/images03/20240110/accd8372d0004f899469fdf7fa4768dc.jpeg">
        </image>
        <view @click="gotoPersonalInfo()" class="username">微信用户34583475</view>
      </view>
      <view class="count">
        <view class="item_count">
          <view class="number">0</view>
          <view class="key">使用天数</view>
        </view>
        <view class="item_count">
          <view class="number">0</view>
          <view class="key">使用天数</view>
        </view>
        <view class="item_count">
          <view class="number">0</view>
          <view class="key">使用天数</view>
        </view>
        <view class="item_count">
          <view class="number">0</view>
          <view class="key">使用天数</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    gotoPersonalInfo() {
      uni.navigateTo({
        url: '/pages/personalInfo/personalInfo'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my {
  width: 750rpx;

  .topPink {
    width: 750rpx;
    background-color: #FFC0CB;
    color: #fff;

    .userInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 80rpx;
      padding-bottom: 70rpx;

      .avator {
        width: 120rpx;
        height: 120rpx;
        border-radius: 10rpx;
        margin-bottom: 20rpx;
      }

      .username {
        font-weight: bold;
      }
    }

    .count {
      padding-bottom: 20rpx;
      padding-left: 30rpx;
      padding-right: 30rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 30rpx;

      .item_count {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>