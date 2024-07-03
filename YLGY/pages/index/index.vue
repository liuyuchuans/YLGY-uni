<template>
	<c-global>
		<view class="content">
			<h2>Y了个Y</h2>
			<view class="b_tips">游戏仅供消遣</view>
			
			<u-button @click="toGamePage('easyGameConfig')">简单模式</u-button>
			<u-button @click="toGamePage('middleGameConfig')">中等模式</u-button>
			<u-button @click="toGamePage('hardGameConfig')">困难模式</u-button>
			<u-button @click="toGamePage('lunaticGameConfig')">地狱模式</u-button>
			<u-button @click="toGamePage('skyGameConfig')">天狱模式</u-button>
			<u-button @click="toGamePage('yangGameConfig')">羊了个羊模式</u-button>
			
			<!-- <view>
			    <ad-rewarded-video ref="adRewardedVideo" adpid="1507000689" :preload="false" :loadnext="false" :disabled="true"
			      v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
			      <view class="ad-error" v-if="error">{{error}}</view>
			    </ad-rewarded-video>
			    <button type="primary" :disabled="isLoading" :loading="isLoading" @click="showAd">显示广告</button>
			  </view> -->
		</view>
	</c-global>
</template>

<script>
	import { useGlobalStore } from "../../store/globalStore";
	import * as config from "../../store/gameConfig";
	import CGlobal from "../../component/global.vue";
	export default {
		data() {
			return {
				title: 'Hello',
				 isLoading: false
			}
		},
		 onReady() {
		      this.isLoading = true;
		      this.$refs.adRewardedVideo.load();
		    },
		onLoad() {

		},
		components:{
			CGlobal
		},
		methods: {
			toGamePage(configKey){
				if (config[configKey]) {
					const global = useGlobalStore();
					global.setGameConfig(config[configKey]);
					uni.navigateTo({
						url: '/pages/game/game'
					})
				} 
			},
			showAd() {
				if (this.isLoading) {
					return
				}
				this.$refs.adRewardedVideo.show();
			},
			onadload(e) {
				this.isLoading = false;
				console.log('广告数据加载成功');
			},
			onadclose(e) {
				const detail = e.detail
				// 用户点击了【关闭广告】按钮
				if (detail && detail.isEnded) {
				  // 正常播放结束
				  console.log("onClose " + detail.isEnded);
				} else {
				  // 播放中途退出
				  console.log("onClose " + detail.isEnded);
				}
				//this.isLoading = true;
				//this.$refs.adRewardedVideo.load();
			},
			onaderror(e) {
				// 广告加载失败
				console.log(e.detail);
				this.isLoading = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	 .ad-error {
	    color: orangered;
	    margin-top: 5px;
	  }
	.content{
		box-sizing: border-box;
		padding: 2vw;
		text-align: center;
		h2{
			margin-top: 8vw;
		}
		.b_tips{
			margin: 16px 0;
		}
		.u-button{
			margin-bottom: 16px;
		}
	}
</style>
