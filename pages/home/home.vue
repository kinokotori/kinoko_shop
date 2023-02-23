<template>
	<view>
		<swiper circular indicator-dots indicator-active-color='#f66' autoplay interval="2000">
			<swiper-item v-for="item in bannerList" :key="item.bannerid">
				<image class="banner-img" src="item.img" ></image>
			</swiper-item>
		</swiper>
		
		<view style="height: 40px;"></view>
		
		<u-grid :border="false" col="5">
			<u-grid-item v-for="item in navList" :key="item.navid">
				<u-icon :customStyle="{paddingTop: 40+'rpx'}" :name="item.imgurl" :size="36"></u-icon>
				<text class="grid-text">{{ item.title }}</text>
			</u-grid-item>
		</u-grid>
		
		<u-cell-group>
				<u-cell>
					
				</u-cell>
		</u-cell-group>
		
		<u-cell-group>
			<u-cell v-for="item in proList" :key="item.proid" :value='item.proname'>
				<u-avatar slot="icon" size="86" shape="square" :src="item.img1"></u-avatar>
				<!-- <view slot="value">{{ item.proname }}</view> -->
			</u-cell>
		</u-cell-group>
		
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		onLoad(){
				this.$store.dispatch('bannerList')
			if(this.navList == [])
				this.$store.dispatch('navList')
			if(this.proList == [])
				this.$store.dispatch('proList')
			
		},
		onPullDownRefresh(){
			this.$store.dispatch('bannerList')
			this.$store.dispatch('navList')
			this.$store.dispatch('proList')

		},
		methods: {
			
		},
		computed: {
			...mapState({
				bannerList:(state) => state.bannerList || [],
				navList:(state) => state.navList || [],
				proList:(state) => state.proList || []
			})
		}
	}
</script>

<style scoped lang="scss">
	.banner-img {
		width: 100%;
		overflow: hidden;
	}
	.grid-text {
		font-size: 14rpx;
		margin-top: 10rpx;
	}
	.backTop {
		position: fixed;
		bottom: 60px;
		right: 16px;
		background-color: white;
		border-radius: 50%;
		border: 1px solid gray;
		padding: 5px;
	}
</style>
