import store from '@/store'
import Vue from 'vue'

export const getSameUrl=(subUrl)=>{
	var url=''
	if(store.state.hasLogin){
		if(store.state.userInfo.roleId==Vue.prototype.$roleId2Code(1)){
			//采购商
			if(store.state.userInfo.operationMode==1){
				//泽鲜入驻模式
				url='/app/saleGoods'
			}else if(store.state.userInfo.operationMode==2){
				//菜云自营
				url='/app/selfOperatedSaleGoods'
			}
		}else{
			//暂时是  8 菜云采购 9 菜云财务
			url='/app/saleGoods'
		}
	}else{
		url="/app/noToken/saleGoods"
	}
	return url+subUrl
}

export const getSameUrlOrder=(subUrl)=>{
	var url=''
	if(store.state.hasLogin){
		if(store.state.userInfo.roleId==Vue.prototype.$roleId2Code(1)){
			//采购商
			if(store.state.userInfo.operationMode==1){
				//泽鲜入驻模式
				url='/app/order'
			}else if(store.state.userInfo.operationMode==2){
				//菜云自营
				url='/app/selfOperatedOrder'
			}
		}else{
			//暂时是  8 菜云采购 9 菜云财务
			url='/app/order'
		}
	}else{
		url="/app/noToken/order"
	}
	return url+subUrl
}