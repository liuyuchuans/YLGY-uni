<template>
	<view class="b_login">
		<view class="header">
			<view class="welcome">
				<view>Hello,</view>
				<view>欢迎登录</view>
			</view>
		</view>
		<u--form
			labelPosition="left"
			:model="userInfo"
			:rules="rules"
			ref="uForm">
			<u-form-item
				label="帐号"
				prop="accouets"
				borderBottom
				ref="item1">
				<u--input
					v-model="userInfo.accouets"
					border="none"
				></u--input>
			</u-form-item>
			<u-form-item
				label="密码"
				prop="password"
				borderBottom
				ref="item2">
				<u--input
					v-model="userInfo.password"
					border="none"
					type="password"
				></u--input>
			</u-form-item>
			<u-form-item
				ref="item3">
				<u-checkbox-group v-model="userInfo.ysxy">
					<u-checkbox
						name="1">
					</u-checkbox>
				</u-checkbox-group>
				<u--text 
					@click="goYsxy('/pages/login/ysxy')"
					type="primary" 
					text="隐私协议">
				</u--text>
			</u-form-item>
		</u--form>
		<u-button 
			type="primary"
			:disabled="!userInfo.ysxy[0]"
			@click="submit">
			提交
		</u-button>
		<!-- <u-popup 
			:show="show" 
			mode="bottom">
			<web-view
				class="yinsixieyi" :src="iframeUrl" allow></web-view>
		</u-popup> -->
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				userInfo: {
					accouets: '',
					password: '',
					ysxy: []
				},
				rules: {
					'accouets': {
						type: 'string',
						required: true,
						message: '请填写账号',
						trigger: ['blur', 'change']
					},
					'password':  {
						type: 'string',
						required: true,
						message: '请填写密码',
						trigger: ['blur', 'change']
					}
				},
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate().then(res => {
					if(this.userInfo.accouets.indexOf('ylgy') != -1 && this.userInfo.password.indexOf('123456') != -1){
						uni.redirectTo({
							url: '/pages/index/index'
						})
					}else{
						uni.$u.toast('账号密码错误！')
					}
				})
			},
			goYsxy(url){
				uni.navigateTo({
					url
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.b_login {
		box-sizing: border-box;
		height: 100vh;
		width: 100vw;
		background-image: url('../../static/bg.jpg');
		display: flex;
		flex-direction: column;
		& > .header {
			height: 380rpx;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
	
			& > .welcome {
				width: 448rpx;
				height: 176rpx;
				font-size: 56rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #2f3032;
				line-height: 88rpx;
				transform: translateY(-118rpx) translateX(30rpx);
			}
		}
		padding: 2vw;
		.yinsixieyi {
			width: 100vw;
			height: 80vh;
		}
	}
</style>