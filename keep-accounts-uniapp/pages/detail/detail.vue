<template>
  <view class="detail">
    <view class="title">小烨记账</view>
    <view class="content">
      <view class="category">
        <view class="all_type">
          <view>全部类型</view>
          <view class="solid"></view>
          <u-icon name="grid" color="#fff"></u-icon>
        </view>
        <view class="time">
          <view>2024年12月</view>
          <u-icon class="icon" name="arrow-down" size="14" color="#fff"></u-icon>
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

  }
}
</script>

<style lang="scss" scoped>
.detail {
  width: 750rpx;
  background-color: #F0C0CB;
  padding: 60rpx 30rpx;
  color: #fff;

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .content {
    width: 690rpx;
    margin-top: 60rpx;

    .category {
      width: 690rpx;
      display: flex;
      justify-content: space-between;

      .all_type {
        width: 250rpx;
        padding: 4rpx 4rpx;
        border-radius: 6rpx;
        background-color: rgba(255, 255, 255, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;

        .solid {
          width: 2rpx;
          height: 30rpx;
          background-color: #fff;
          margin: 0 16rpx;
        }
      }

      .time {
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          margin-left: 30rpx;
        }
      }
    }

  }

}
</style>