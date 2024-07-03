<template>
	<web-view class="yinsixieyi" :src="iframeUrl" allow></web-view>
</template>
<script>

	export default {
		components: {},
		data() {
			return {
				query: {},
				iframeUrl: '',
			}
		},
		onLoad(options) {
			this.iframeUrl = 'https://web.cailian.net/ys.html'
		},
		onShow() {

		},
		created() {},
		mounted() {

		},
	}
</script>
<style>
	.yinsixieyi {
		width: 100%;
		height: 100%;
	}
</style>