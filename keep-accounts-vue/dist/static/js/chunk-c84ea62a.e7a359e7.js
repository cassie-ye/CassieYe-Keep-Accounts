(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c84ea62a"],{1:function(t,e){},"193f":function(t,e,i){},2:function(t,e){},2403:function(t,e,i){},3:function(t,e){},"38b1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formData.formInline}},[i("el-form-item",{staticClass:"el-form-item",attrs:{label:"摊位号："}},[i("el-input",{attrs:{placeholder:"输入搜索关键词"},model:{value:t.formData.formInline.stallNo,callback:function(e){t.$set(t.formData.formInline,"stallNo",e)},expression:"formData.formInline.stallNo"}})],1),i("el-form-item",{staticClass:"el-form-item",attrs:{label:"采购商手机号："}},[i("el-input",{attrs:{placeholder:"输入搜索关键词"},model:{value:t.formData.formInline.purchaserPhoneNumber,callback:function(e){t.$set(t.formData.formInline,"purchaserPhoneNumber",e)},expression:"formData.formInline.purchaserPhoneNumber"}})],1),i("el-form-item",{staticClass:"el-form-item",attrs:{label:"商户名称："}},[i("el-input",{attrs:{placeholder:"输入搜索关键词"},model:{value:t.formData.formInline.businessName,callback:function(e){t.$set(t.formData.formInline,"businessName",e)},expression:"formData.formInline.businessName"}})],1),i("el-form-item",{staticClass:"el-form-item",attrs:{label:"商品名称："}},[i("el-input",{attrs:{placeholder:"输入搜索关键词"},model:{value:t.formData.formInline.goodsName,callback:function(e){t.$set(t.formData.formInline,"goodsName",e)},expression:"formData.formInline.goodsName"}})],1),i("el-form-item",{staticClass:"el-form-item",attrs:{label:"采购时间："}},[i("el-date-picker",{staticStyle:{"margin-top":"6px"},attrs:{format:"yyyy-MM-dd",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.formData.formInline.purchaseTime,callback:function(e){t.$set(t.formData.formInline,"purchaseTime",e)},expression:"formData.formInline.purchaseTime"}})],1),i("el-form-item",{staticClass:"button-group"},[i("el-button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("搜索")]),i("el-button",{staticClass:"reset-btn",attrs:{type:"primary"},on:{click:t.onReset}},[t._v("重置")]),i("el-button",{staticClass:"export-btn",attrs:{type:"primary"},on:{click:t.onExport}},[t._v("导出")])],1)],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-top":"15px"},attrs:{data:t.recordsList,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"采购时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticStyle:{"font-size":"15px",color:"#999999"}},[t._v(t._s(e.row.dealTime||"暂无"))])]}}])}),i("el-table-column",{attrs:{label:"采购商手机号"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.buyerMobileNo||"暂无"))])]}}])}),i("el-table-column",{attrs:{label:"摊位号"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.boothNo||"暂无"))])]}}])}),i("el-table-column",{attrs:{label:"商户名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.proprietorName||"暂无"))])]}}])}),i("el-table-column",{attrs:{label:"商品名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.goodsName||"暂无"))])]}}])}),i("el-table-column",{attrs:{label:"采购量"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.goodsWeight+e.row.unit||"暂无"))])]}}])}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){return t.openOperateDialog(e.row)}}},[t._v("食安链条")])]}}])})],1),t.infoVisible?i("foodSafetyChain",{ref:"info"}):t._e(),i("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{"current-page":t.formData.page,"page-sizes":[10,20,50,100],"page-size":t.formData.limit,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}})],1)},n=[],s=i("3835"),o=(i("d81d"),i("c19f"),i("ace4"),i("a9e3"),i("d3b7"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),i("a573"),i("5a0c")),l=i.n(o),r=i("1146"),c=i.n(r),m=i("21a6"),u=i.n(m),f=i("b775");function d(t){return Object(f["a"])({url:"/demo/demobase/goodsDealList",method:"GET",params:t})}function h(t){return Object(f["a"])({url:"/demo/demobase/queryChain/".concat(t),method:"GET"})}var p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:"食安链条",width:"40%","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[i("div",{staticClass:"timeline-container"},[i("el-timeline",[i("el-timeline-item",{attrs:{color:"#409eff",timestamp:t.purchaseObj.dealTime||"暂无",placement:"top"}},[i("el-card",[i("div",{staticClass:"card-content"},[i("div",{staticClass:"card-content-left"},[i("div",[i("i",{staticClass:"el-icon-mobile-phone"})]),i("div",{staticClass:"card-content-left-text"},[i("div",{staticClass:"first"},[t._v("采购商手机号："+t._s(t.purchaseObj.buyerMobileNo||"暂无"))]),i("div",{staticClass:"card-content-left-text-time"},[i("i",{staticClass:"el-icon-time"}),i("div",[t._v(t._s(t.purchaseObj.dealTime||"暂无"))])])])]),i("div",[t._v(" 采购 ")])])])],1),t.allocateList.length>0?t._l(t.allocateList,(function(e,a){return i("el-timeline-item",{key:a,attrs:{color:"#409eff",timestamp:e.dealTime||"暂无",placement:"top"}},[i("el-card",[i("div",{staticClass:"card-content"},[i("div",{staticClass:"card-content-left"},[i("div",[i("i",{staticClass:"el-icon-mobile-phone"})]),i("div",{staticClass:"card-content-left-text"},[i("div",{staticClass:"first"},[t._v("摊位号："+t._s(e.boothNo||"暂无"))]),i("div",[t._v("商户名称："+t._s(e.proprietorName||"暂无"))]),i("div",{staticClass:"card-content-left-text-time"},[i("i",{staticClass:"el-icon-time"}),i("div",[t._v(t._s(e.dealTime||"暂无"))])])])]),i("div",[t._v(" 配货 ")])])])],1)})):t._e(),i("el-timeline-item",{attrs:{color:"#409eff",timestamp:t.enterVenueObj.entranceTime||"暂无",placement:"top"}},[i("el-card",[i("div",{staticClass:"card-content"},[i("div",{staticClass:"card-content-left"},[i("div",[i("img",{attrs:{src:"https://axhub.im/ax9/31c4b1bb79511517/images/%E9%87%87%E8%B4%AD%E8%AE%B0%E5%BD%95_1/u95.svg",alt:"SVG Image"}})]),i("div",{staticClass:"card-content-left-text"},[i("div",{staticClass:"first"},[t._v("摊位号："+t._s(t.enterVenueObj.boothName||"暂无"))]),i("div",{staticClass:"first"},[t._v("商户名称："+t._s(t.enterVenueObj.proprietorName||"暂无"))]),i("div",{staticClass:"first"},[t._v("产地："+t._s(t.enterVenueObj.divisionName||"暂无"))]),i("div",{staticClass:"first pcNum"},[i("div",[t._v("批次号："+t._s(t.enterVenueObj.traceCode||"暂无"))]),i("div",{staticClass:"lookDetail",on:{click:function(e){return t.showBatchDetail()}}},[t._v("查看详情")])]),i("div",{staticClass:"card-content-left-text-time"},[i("i",{staticClass:"el-icon-time"}),i("div",[t._v(t._s(t.enterVenueObj.entranceTime||"暂无"))])])])]),i("div",[t._v(" 进场 ")])])])],1)],2)],1)]),t.entranceInfoDialogVisible?i("EntranceInfoDialog",{ref:"entranceInfo"}):t._e()],1)},v=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{top:"20vh",title:"进场信息",width:"35%","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"half"},[t._v(" 摊位号："+t._s(t.enterVenueObj.boothName||"暂无")+" ")]),i("div",{staticClass:"half"},[t._v(" 经营户："+t._s(t.enterVenueObj.proprietorName||"暂无")+" ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"half"},[t._v(" 商品名称："+t._s(t.enterVenueObj.goodsName||"暂无")+" ")]),i("div",{staticClass:"half"},[t._v(" 重量(KG)："+t._s(t.enterVenueObj.weight||"暂无")+" ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"half"},[t._v(" 产地："+t._s(t.enterVenueObj.divisionName||"暂无")+" ")]),i("div",{staticClass:"half"},[i("div",{staticStyle:{position:"relative","background-color":"pink",display:"inline-block"}},[i("div",{staticClass:"iconNumber"},[t._v(t._s(t.iconNumber))]),i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(e){return t.showProveFileDialog()}}},[t._v("查看证明文件")])],1)])])])]),t.proveFileDialogVisible?i("proveFileDialog",{ref:"proveFileDialog"}):t._e()],1)},g=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{top:"10vh",title:"证明文件",width:"55%","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[i("div",{staticClass:"full"},[i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("承诺达标合格证：")]),t.cndbhgzList.length>0?i("div",{staticClass:"columnImg"},t._l(t.cndbhgzList,(function(t,e){return i("img",{key:e,staticClass:"img",attrs:{src:t.picUrl,alt:""}})})),0):i("div",[t._v("暂无图片")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("进货凭证：")]),t.jhpzList.length>0?i("div",{staticClass:"columnImg"},t._l(t.jhpzList,(function(t,e){return i("img",{key:e,staticClass:"img",attrs:{src:t.picUrl,alt:""}})})),0):i("div",[t._v("暂无图片")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("其他证明：")]),t.qtzmList.length>0?i("div",{staticClass:"columnImg"},t._l(t.qtzmList,(function(t,e){return i("img",{key:e,staticClass:"img",attrs:{src:t.picUrl,alt:""}})})),0):i("div",[t._v("暂无图片")])])])])},D=[],C={data:function(){return{visible:!1,vmEntranceLicenceEntityList:[],cndbhgzList:[],jhpzList:[],qtzmList:[]}},created:function(){},methods:{init:function(t){var e=this;this.visible=!0,this.vmEntranceLicenceEntityList=t,this.vmEntranceLicenceEntityList.map((function(t){switch(t.licenceType){case 1:e.cndbhgzList.push(t);break;case 2:e.jhpzList.push(t);break;case 3:e.qtzmList.push(t);break;default:break}return t}))}}},N=C,y=(i("3e4c"),i("2877")),L=Object(y["a"])(N,_,D,!1,null,"e602c748",null),w=L.exports,I={components:{proveFileDialog:w},data:function(){return{visible:!1,proveFileDialogVisible:!1,enterVenueObj:{},iconNumber:null}},created:function(){},methods:{init:function(t){this.visible=!0,this.enterVenueObj=t,this.iconNumber=t.vmEntranceLicenceEntityList.length},showProveFileDialog:function(){var t=this;this.proveFileDialogVisible=!0,this.$nextTick((function(){t.$refs.proveFileDialog.init(t.enterVenueObj.vmEntranceLicenceEntityList)}))}}},k=I,j=(i("92a4"),Object(y["a"])(k,b,g,!1,null,"24ce59b6",null)),x=j.exports,E={components:{EntranceInfoDialog:x},data:function(){return{visible:!1,goodsDealDetailId:null,timelineData:[],purchaseObj:{},allocateList:[],enterVenueObj:{},entranceInfoDialogVisible:!1}},created:function(){},methods:{init:function(t){this.visible=!0,this.goodsDealDetailId=t,this.getFoodSafetyChainDetails(this.goodsDealDetailId)},getFoodSafetyChainDetails:function(t){var e=this;h(t).then((function(t){console.log("res",t),e.purchaseObj=t.buy,e.allocateList=t.sell,e.enterVenueObj=t.entrance,e.enterVenueObj.vmEntranceLicenceEntityList.length>0&&e.enterVenueObj.vmEntranceLicenceEntityList.map((function(t){return t.picUrl&&(t.picUrl="https://zsl.njnfwl.com/njzc_demo"+t.picUrl),t}))}))},showBatchDetail:function(){var t=this;this.entranceInfoDialogVisible=!0,this.$nextTick((function(){t.$refs.entranceInfo.init(t.enterVenueObj)}))}}},O=E,V=(i("536a"),Object(y["a"])(O,p,v,!1,null,"14cf3441",null)),T=V.exports,z={name:"ArticleList",components:{foodSafetyChain:T},data:function(){return{total:0,listLoading:!0,infoVisible:!1,recordsList:[],formData:{page:1,limit:10,formInline:{stallNo:"",purchaserPhoneNumber:"",businessName:"",goodsName:"",purchaseTime:null}}}},created:function(){this.getPurchaseRecordsManagementList()},methods:{getPurchaseRecordsManagementList:function(){var t=this;this.listLoading=!0;var e="",i="";if(this.formData.formInline.purchaseTime&&2===this.formData.formInline.purchaseTime.length){var a=Object(s["a"])(this.formData.formInline.purchaseTime,2),n=a[0],o=a[1];e=l()(n).format("YYYY-MM-DD"),i=l()(o).format("YYYY-MM-DD")}var r={limit:this.formData.limit,page:this.formData.page,boothNo:this.formData.formInline.stallNo,buyerMobileNo:this.formData.formInline.purchaserPhoneNumber,dealTimeStart:e,dealTimeEnd:i,goodsName:this.formData.formInline.goodsName,proprietorName:this.formData.formInline.businessName};d(r).then((function(e){t.recordsList=e.data,t.total=Number(e.count),t.listLoading=!1}))},openOperateDialog:function(t){var e=this;this.infoVisible=!0,this.$nextTick((function(){e.$refs.info.init(t.goodsDealDetailId)}))},sizeChangeHandle:function(t){this.formData.limit=t,this.formData.page=1,this.getPurchaseRecordsManagementList()},currentChangeHandle:function(t){this.formData.page=t,this.getPurchaseRecordsManagementList()},onSearch:function(){this.formData.page=1,this.getPurchaseRecordsManagementList()},onReset:function(){this.formData.formInline.stallNo="",this.formData.formInline.purchaserPhoneNumber="",this.formData.formInline.businessName="",this.formData.formInline.goodsName="",this.formData.formInline.purchaseTime=null,this.getPurchaseRecordsManagementList()},onExport:function(){var t=this,e={limit:999999,page:1,boothNo:"",buyerMobileNo:"",dealTimeStart:"",dealTimeEnd:"",goodsName:"",proprietorName:""};d(e).then((function(e){if(0===e.code&&e.data){var i=e.data.map((function(t){return{"采购时间":t.dealTime,"采购商手机号":t.buyerMobileNo,"摊位号":t.boothNo,"商户名称":t.proprietorName,"商品名称":t.goodsName,"采购量":t.goodsWeight+t.unit}}));t.generateExcel(i)}else t.$message.error("导出失败")}))},generateExcel:function(t){var e=c.a.utils.book_new(),i=c.a.utils.json_to_sheet(t),a=[{wch:30},{wch:30},{wch:30},{wch:30},{wch:30},{wch:30}];i["!cols"]=a,c.a.utils.book_append_sheet(e,i,"采购记录导出");for(var n=c.a.write(e,{bookType:"xlsx",type:"binary"}),s=new ArrayBuffer(n.length),o=new Uint8Array(s),l=0;l<n.length;l++)o[l]=255&n.charCodeAt(l);var r=new Blob([s],{type:"application/octet-stream"});u.a.saveAs(r,"采购记录导出.xlsx")}}},S=z,M=(i("a440"),Object(y["a"])(S,a,n,!1,null,"74021ad3",null));e["default"]=M.exports},"3e4c":function(t,e,i){"use strict";i("edd5")},"536a":function(t,e,i){"use strict";i("193f")},"92a4":function(t,e,i){"use strict";i("a701")},a440:function(t,e,i){"use strict";i("2403")},a701:function(t,e,i){},edd5:function(t,e,i){}}]);