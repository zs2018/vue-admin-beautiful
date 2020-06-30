/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-6-30 11:58:03
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f519c01"],{"0139":function(t,e,a){"use strict";var n=a("be7c"),i=a.n(n);i.a},"24e5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-container"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-timeline",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{"element-loading-text":t.elementLoadingText}},t._l(t.newsList,(function(e,n){return a("el-timeline-item",{key:n,attrs:{timestamp:e.time||e.pubDate,placement:"top",type:"success"}},[a("el-card",{attrs:{shadow:"hover"}},[a("h4",[a("a",{attrs:{target:"_blank",href:e.link}},[t._v(" "+t._s(e.title)+" ")])])])],1)})),1)],1)],1),a("el-pagination",{attrs:{background:"","current-page":t.pagination.page,"page-size":t.pagination.pageSize,layout:"total, prev, pager, next",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),a("el-dialog",{attrs:{width:"60%",title:"新闻详情（爬取内容无法保证数据与页面格式完整性）",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.description)}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关闭")]),a("a",{staticStyle:{"margin-left":"10px"},attrs:{target:"_blank",href:t.link}},[a("el-button",{attrs:{type:"primary"}},[t._v(" 阅读原文 ")])],1)],1)])],1)},i=[],o=(a("f3dd"),a("0a51"),a("31a0"),a("9b6e")),s=(a("b449"),a("6648")),l=a("aa2a"),r={name:"News",data:function(){return{listLoading:!0,elementLoadingText:"正在加载...",dialogVisible:!1,description:"",link:"",options:[{value:"0",label:"前端艺术家"},{value:"1",label:"飞冰早报"}],value:"0",newsList:[],pagination:{total:0,page:1,pageSize:10}}},created:function(){this.fetchData()},mounted:function(){},methods:{handleDialog:function(t,e){this.dialogVisible=!0,this.description=t,this.link=e},handleChange:function(t){this.value=t,this.pagination.total=0,this.pagination.page=1,this.pagination.pageSize=10,this.fetchData()},fetchData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.listLoading=!0,e.t0=t.value,e.next="0"===e.t0?4:"1"===e.t0?10:16;break;case 4:return e.next=6,Object(l["getQdysjList"])(Object(o["a"])(Object(o["a"])({},t.pagination),{page:t.pagination.page-1}));case 6:return a=e.sent,t.pagination.total=a.total,t.newsList=a.data,e.abrupt("break",16);case 10:return e.next=12,Object(l["getFbzbList"])(Object(o["a"])(Object(o["a"])({},t.pagination),{page:t.pagination.page-1}));case 12:return n=e.sent,t.pagination.total=n.total,t.newsList=n.data,e.abrupt("break",16);case 16:setTimeout((function(){t.listLoading=!1}),500);case 17:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.pagination.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.pagination.page=t,this.fetchData()}}},c=r,u=(a("0139"),a("9ca4")),g=Object(u["a"])(c,n,i,!1,null,"2cc0210c",null);e["default"]=g.exports},aa2a:function(t,e,a){"use strict";a.r(e),a.d(e,"getQdysjList",(function(){return i})),a.d(e,"getFbzbList",(function(){return o}));var n=a("b775");function i(t){return Object(n["default"])({url:"http://jskou.com:3003/contents/list?type=0",method:"get",params:t})}function o(t){return Object(n["default"])({url:"http://jskou.com:3003/contents/list?type=1",method:"get",params:t})}},be7c:function(t,e,a){}}]);