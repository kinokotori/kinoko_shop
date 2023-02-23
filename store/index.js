import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate'
import {getBannerList,getNavList,getProList} from '../api/api.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		bannerList:[],
		navList:[],
		proList:[]
	},
	getters:{
		
	},
	mutations:{
		SETBANNERLIST(state, data){
			state.bannerList = data
		},
		SETNAVLIST(state, data){
			state.navList = data
		},
		SETPROLIST(state, data){
			state.proList = data
		}
		
	},
	actions:{
		async bannerList({commit},data){
			const res = await getBannerList()
			uni.stopPullDownRefresh()
			console.log(res.data)
			commit('SETBANNERLIST',res.data)
		},
		async navList({commit},data){
			const res = getNavList()
			uni.stopPullDownRefresh()
			commit('SETNAVLIST',res)
		},
		async proList({commit},data){
			const res = await getProList()
			uni.stopPullDownRefresh()
			commit('SETPROLIST',res.data)
		}
		
	},
	plugins:[
		persistedstate({
			storage: {
				getItem: key => uni.getStorageSync(key),
				setItem: (key,value) => uni.setStorageSync(key, value),
				removeItem: key => uni.removeStorageSync(key)
			}
		})
	]
})

export default store;