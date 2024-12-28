<template>
	<view class="welcome">
		<view class="topPic">
			<image class="seventeen_avator" mode="widthFix" src="../../static/img/17-avator.jpg"></image>
			<view class="circle_border"></view>
		</view>
		<view class="welcome_text">欢迎来到小烨记账</view>
		<view class="btn_box">
			<!-- <u-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button> -->
			<button class="cute-button">登录</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
.welcome {
	// background-color: pink;

	.topPic {
		margin-top: 120rpx;
		position: relative;
		display: flex;
		justify-content: center;

		.seventeen_avator {
			width: 300rpx;
		}

		.circle_border {
			position: absolute;
			width: 250rpx;
			height: 250rpx;
			// border渐变色
			border: 2px solid rgb(250, 217, 222);
			box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.2);
			border-radius: 50%;
			top: 38rpx;
		}
	}

	.welcome_text {
		margin-top: 60rpx;
		display: flex;
		justify-content: center;
		font-size: 42rpx;
		font-weight: bold;
	}

	.btn_box {
		display: flex;
		justify-content: center;

		button {
			padding: 3rpx 80rpx;
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

}
</style>
