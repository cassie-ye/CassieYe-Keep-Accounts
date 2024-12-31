import { baseURL } from '@/config/index.js';

/**
 * GET请求
 * @param {*} params 
 * @returns 
 */
export const getRequest = (params) => {
	const baseUrl = baseURL;
	return new Promise((resolve, reject) => {
		uni.request({
			...params,
			url: baseUrl + params.url,
			header: {
				// 'token':uni.getStorageSync('userInfo') ? uni.getStorageSync('userInfo').token : ''
			},
			success: (result) => {
				// if(result.data.code==401){
				// 	store.commit('logout')
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:'登录过期，请重新登录'
				// 	})
				// 	setTimeout(()=>{
				// 		uni.reLaunch({
				// 			url:'/pages/index/blank'
				// 		})
				// 		reject(result)
				// 	},2000)
				// }else{

				// }
				resolve(result)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

/**
 * application/json格式的POST请求
 * @param {*} params 
 * @returns 
 */
export const postRequest = (params) => {
	const baseUrl = baseURL;
	return new Promise((resolve, reject) => {
		uni.request({
			...params,
			method: 'POST',
			header: {
				// 'content-type': 'application/x-www-form-urlencoded',
				'content-type': 'application/json',
				// 'token':uni.getStorageSync('userInfo') ? uni.getStorageSync('userInfo').token : ''
			},
			url: baseUrl + params.url,
			success: (result) => {
				// if(result.data.code==401){
				// 	store.commit('logout')
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:'登录过期，请重新登录'
				// 	})
				// 	setTimeout(()=>{
				// 		uni.reLaunch({
				// 			url:'/pages/index/blank'
				// 		})

				// 	},2000)
				// }else{
				// 	resolve(result)
				// }
				resolve(result)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

/**
 * application/x-www-form-urlencoded 格式的POST请求
 * @param {*} params 
 * @returns 
 */
export const postWwwRequest = (params) => {
	const baseUrl = baseURL;
	return new Promise((resolve, reject) => {
		uni.request({
			...params,
			method: 'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				// 'content-type': 'application/json',
				// 'token':uni.getStorageSync('userInfo') ? uni.getStorageSync('userInfo').token : ''
			},
			url: baseUrl + params.url,
			success: (result) => {
				// if(result.data.code==401){
				// 	store.commit('logout')
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:'登录过期，请重新登录'
				// 	})
				// 	setTimeout(()=>{
				// 		uni.reLaunch({
				// 			url:'/pages/index/blank'
				// 		})

				// 	},2000)
				// }else{
				// 	resolve(result)
				// }
				resolve(result)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}