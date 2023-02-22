import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate'
import {getBannerList} from '../api/api.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		bannerlist:[]
	},
	getters:{
		
	},
	mutations:{
		SETBANNERLIST(state, data){
			state.bannerlist = data
		}
	},
	actions:{
		async BannerList({commit},data){
			const res = await getBannerList()
			commit('SETBANNERLIST',res.data)
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