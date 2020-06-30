/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-6-30 11:58:03
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-586c773e"],{5120:function(t,i,e){},"635a":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("el-dialog",{attrs:{title:t.title,visible:t.dialogFormVisible,width:"909px","before-close":t.handleClose,"close-on-click-modal":!1},on:{"update:visible":function(i){t.dialogFormVisible=i}}},[e("div",{staticClass:"upload"},[e("el-alert",{attrs:{closable:!1,title:"支持jpg、jpeg、png格式，单次可最多选择"+t.limit+"张图片，每张不可大于"+t.size+"M，如果大于"+t.size+"M会自动为您过滤",type:"info"}}),e("br"),e("el-upload",{ref:"upload",staticClass:"upload-content",attrs:{name:t.name,data:t.data,action:t.action,headers:t.headers,"on-change":t.handleChange,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"on-exceed":t.handleExceed,"on-success":t.handleSuccess,"on-progress":t.handleProgress,"on-error":t.handleError,"file-list":t.fileList,multiple:!0,"auto-upload":!1,accept:"image/png, image/jpeg",limit:t.limit,"list-type":"picture-card","close-on-click-modal":!1}},[e("i",{staticClass:"el-icon-plus",attrs:{slot:"trigger"},slot:"trigger"}),e("el-dialog",{attrs:{title:"查看大图","append-to-body":"",visible:t.dialogVisible},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("div",{staticStyle:{"padding-bottom":"20px !important"}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])])],1)],1),e("div",{staticClass:"dialog-footer",staticStyle:{position:"relative","padding-right":"15px","text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[t.show?e("div",{staticStyle:{position:"absolute",top:"10px",left:"15px",color:"#999"}},[t._v(" 正在上传中... 当前上传成功数:"+t._s(t.imgSuccessNum)+"张 当前上传失败数:"+t._s(t.imgErrorNum)+"张 ")]):t._e(),e("el-button",{attrs:{type:"primary"},on:{click:t.handleClose}},[t._v("关闭")]),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success",loading:t.loading},on:{click:t.submitUpload}},[t._v("开始上传 ")])],1)])},a=[],o=(e("b4fb"),e("2eeb"),e("ea69"),e("053b"),e("513c"),e("778c")),l={name:"VabUpload",props:{url:{type:String,default:"/upload",required:!0},name:{type:String,default:"file",required:!0},limit:{type:Number,default:50,required:!0},size:{type:Number,default:1,required:!0}},data:function(){return{show:!1,loading:!1,dialogVisible:!1,dialogImageUrl:"",action:"",headers:{},fileList:[],picture:"picture",imgNum:0,imgSuccessNum:0,imgErrorNum:0,typeList:null,title:"上传",dialogFormVisible:!1,data:{}}},computed:{percentage:function(){return 0==this.allImgNum?0:100*this.$baseLodash.round(this.imgNum/this.allImgNum,2)}},created:function(){this.api="".concat(window.location.protocol,"//").concat(window.location.host),this.action=this.api+this.url,this.headers[o["tokenName"]]=this.$baseAccessToken()},methods:{submitUpload:function(){this.$refs.upload.submit()},handleProgress:function(t,i,e){this.loading=!0,this.show=!0},handleChange:function(t,i){t.size>1048576*this.size?(i.map((function(e,s){e===t&&i.splice(s,1)})),this.fileList=i):this.allImgNum=i.length},handleSuccess:function(t,i,e){var s=this;this.imgNum=this.imgNum+1,this.imgSuccessNum=this.imgSuccessNum+1,e.length===this.imgNum&&setTimeout((function(){s.$emit("fetchDatas"),s.$baseMessage("上传完成! 共上传".concat(e.length,"张图片"),"success")}),1e3),setTimeout((function(){s.loading=!1,s.show=!1}),1e3)},handleError:function(t,i,e){var s=this;this.imgNum=this.imgNum+1,this.imgErrorNum=this.imgErrorNum+1,this.$baseMessage("文件[".concat(i.raw.name,"]上传失败,文件大小为").concat(this.$baseLodash.round(i.raw.size/1024,0),"KB"),"error"),setTimeout((function(){s.loading=!1,s.show=!1}),1e3)},handleRemove:function(t,i){this.imgNum=this.imgNum-1,this.allNum=this.allNum-1},handlePreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleExceed:function(t,i){this.$baseMessage("当前限制选择 ".concat(this.limit," 个文件，本次选择了\n             ").concat(t.length,"\n             个文件"),"error")},handleShow:function(t){this.title="上传",this.data=t,this.dialogFormVisible=!0},handleClose:function(){this.fileList=[],this.picture="picture",this.allImgNum=0,this.imgNum=0,this.imgSuccessNum=0,this.imgErrorNum=0,this.api="".concat(window.location.protocol,"//").concat(window.location.host),this.action=this.api+this.url,this.headers[o["tokenName"]]=this.$baseAccessToken(),this.dialogFormVisible=!1}}},n=l,r=(e("e612"),e("9ca4")),c=Object(r["a"])(n,s,a,!1,null,"6df7b65b",null);i["default"]=c.exports},"838f":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"upload-container"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("演示环境可能无法模拟上传 ")]),e("vab-upload",{ref:"vabUpload",attrs:{url:"/upload",name:"file",limit:50,size:2}}),e("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.handleShow({key:"value"})}}},[t._v("模拟上传 ")])],1)},a=[],o=e("635a"),l={name:"Upload",components:{VabUpload:o["default"]},data:function(){return{}},methods:{handleShow:function(t){this.$refs["vabUpload"].handleShow(t)}}},n=l,r=e("9ca4"),c=Object(r["a"])(n,s,a,!1,null,null,null);i["default"]=c.exports},e612:function(t,i,e){"use strict";var s=e("5120"),a=e.n(s);a.a}}]);