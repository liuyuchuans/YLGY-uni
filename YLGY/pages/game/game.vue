<template>
	<c-global>
		<view class="b_game" id="gamePage">
			<view class="b_header">
				<u-button @click="pageBack">返回</u-button>
				<u-button>块数：{{ clearBlockNum }} / {{ totalBlockNum }}</u-button>
			</view>
			<!-- 胜利 -->
			<view>
				<view v-if="gameStatus === 3" style="text-align: center">
					<h2>恭喜，你赢啦！🎉</h2>
				</view>
				<!-- view v-if="gameStatus === 2" style="text-align: center">
					<h2>你输了</h2>
				</view> -->
			</view>
			<!-- 分层选块 -->
			<view>
				<view v-show="gameStatus > 0" :style="levelBoardStyle" class="level-board">
					<view v-for="(block, idx) in levelBlocksVal" :key="idx">
						<view
							v-if="block.status === 0"
							class="block level-block"
							:class="{
								disabled: !isHolyLight && block.lowerThanBlocks.length > 0,
							}"
							:data-id="block.id"
							:style="{
								zIndex: 100 + block.level,
								left: block.x * widthUnit + 'px',
								top: block.y * heightUnit + 'px',
							}"
							@click="() => doClickBlock(block)"
						>
						{{ block.type }}
						</view>
					</view>
				</view>
			</view>
			<!-- 随机选块 -->
			<view class="random-board">
				<view
					v-for="(randomBlock, index) in randomBlocksVal"
					:key="index"
					class="random-area">
					<view
						v-if="randomBlock.length > 0"
						:data-id="randomBlock[0].id"
						class="block"
						@click="() => doClickBlock(randomBlock[0], index)">
						{{ randomBlock[0].type }}
					</view>
					<!-- 隐藏 -->
					<view
						v-for="num in Math.max(randomBlock.length - 1, 0)"
						:key="num"
						class="block disabled">
						<text v-if="canSeeRandom">
							{{ randomBlock[num].type }}
						</text>
					</view>
				</view>
			</view>
			<!-- 槽位 -->
			<view v-if="slotAreaVal.length > 0" class="slot-board">
				<view v-for="(slotBlock, index) in slotAreaVal" :key="index" class="block">
					{{ slotBlock?.type }}
				</view>
			</view>
			<!-- 技能 -->
			<view class="skill-board" v-show="gameStatus <= 1">
				<view class="b_operation">
					<!-- <u-button size="small" @click="doRevert">撤回</u-button> -->
					<u-button size="small" @click="doRemove">移出</u-button>
					<!-- <ad-rewarded-video
						adpid="1507000689"
						:loadnext="true" 
						v-slot:default="{loading, error}"
						> -->
						<u-button size="small" @click="doShuffle">洗牌</u-button>
					<!-- </ad-rewarded-video> -->
					
					<!-- <p></p> -->
					<u-button size="small" @click="doBroke">破坏</u-button>
					<u-button size="small" @click="doHolyLight">圣光</u-button>
					<u-button size="small" @click="doSeeRandom">透视</u-button>
				</view>
			</view>
		</view>
	</c-global>
</template>

<script setup>
	import useGame from "../../store/game";
	import CGlobal from "../../component/global.vue";
	import {
	    onLoad
	  } from "@dcloudio/uni-app";
	const {
	  gameStatus,
	  levelBlocksVal,
	  randomBlocksVal,
	  slotAreaVal,
	  widthUnit,
	  heightUnit,
	  totalBlockNum,
	  clearBlockNum,
	  isHolyLight,
	  canSeeRandom,
	  doClickBlock,
	  doStart,
	  doShuffle,
	  doBroke,
	  doRemove,
	  doRevert,
	  doHolyLight,
	  doSeeRandom,
	  levelBoardStyle
	} = useGame();
	console.log(levelBoardStyle)
	onLoad(()=>{
		doStart()
	})
	function pageBack(){
		uni.navigateBack();
	}
</script>

<style lang="scss" scoped>
	.b_game{
		box-sizing: border-box;
		padding: 6vw 2vw;
		.b_header{
			margin-bottom: 6vw;
			margin-top: 4vw;
			display: flex;
			gap: 10vw;
		}
		.level-board {
			position: relative;
			margin: 0 auto;
		    // height: 70vh;

		}
		
		.level-block {
			position: absolute;
		}
		
		.random-board {
			margin-top: 8px;
		}
		
		.random-area {
			margin-top: 8px;
		}
		
		.slot-board {
			  border: 10px solid saddlebrown;
			  margin: 16px auto;
			  width: fit-content;
		}
		
		.skill-board {
			text-align: center;
			.b_operation{
				display: flex;
				gap: 1.5vw;
			}
		}
		
		.block {
			  font-size: 28px;
			  width: 32px;
			  height: 32px;
			  line-height: 32px;
			  border: 1px solid #eee;
			  background: white;
			  text-align: center;
			  vertical-align: top;
			  display: inline-block;
		}
		
		.disabled {
			  background: grey;
			  cursor: not-allowed;
		}
	}
</style>
