(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{627:function(t,e,o){"use strict";o.r(e);var l=o(220),n=o(413),c=o(412),r=o(459),M=o(426),y=o(499),d=o(469),m=o(424),_=o(475),h=(o(31),o(25),o(38),o(41),{data:function(){return{dialog:!1,MyID:"",MyMsg:"",MyGroup:"",MyName:"",MyMsg_log:"",MyGroup_log:"",MyName_log:"",MyDate_log:"",labels:"メッセージ内容",labels2:"グループ",labels3:"お名前"}},methods:{fs_get:function(){var t=this;this.$fire.firestore.collection("Messages").doc(this.MyID).get().then((function(e){t.MyMsg=e.data().msg,t.MyGroup=e.data().group,t.MyName=e.data().name,t.MyMsg_log=e.data().msg,t.MyGroup_log=e.data().group,t.MyName_log=e.data().name,t.MyDate_log=e.data().date}))},fs_set:function(){console.log("こんにちはー"),this.$fire.firestore.collection("Messages_log").add({msgID:this.MyID,msg:this.MyMsg_log,group:this.MyGroup_log,name:this.MyName_log,date_log:this.MyDate_log,date:this.JikanHenkan_YYMMDDHMS()}),this.$fire.firestore.collection("Messages").doc(this.MyID).set({msg:this.MyMsg,group:this.MyGroup,name:this.MyName,date:this.JikanHenkan_YYMMDDHMS()}),console.log("こんにちはー２"),this.cancelDayo()},cancelDayo:function(){this.MyID="",this.MyMsg="",this.MyGroup="",this.MyName="",this.MyMsg_log="",this.MyGroup_log="",this.MyName_log="",this.dialog=!1},JikanHenkan_YYMMDDHMS:function(){var t=new Date,e="0"+t.getFullYear(),o="0"+Number(t.getMonth()+1),dd="0"+t.getDate(),l="0"+t.getHours(),n="0"+t.getMinutes();t.getSeconds();return console.log(t),"".concat(e.slice(-2),"/").concat(o.slice(-2),"/").concat(dd.slice(-2),"-").concat(l.slice(-2),":").concat(n.slice(-2))}}}),v=o(62),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{justify:"center"}},[e(y.a,{staticClass:"mt-20",attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,c=o.attrs;return[e(l.a,t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",c,!1),n),[t._v("\n        メッセージ編集\n      ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(n.a,[e(c.c,[e("span",{staticClass:"text-h5"},[t._v("メッセージ編集")])]),t._v(" "),e(c.b,[e(M.a,[e(d.a,[e(r.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"4"}},[e(_.a,{staticStyle:{"ime-mode":"inactive"},attrs:{label:"ここにIDを入力"},model:{value:t.MyID,callback:function(e){t.MyID=e},expression:"MyID"}})],1),t._v(" "),e(r.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"4"}},[e(l.a,{on:{click:t.fs_get}},[t._v("呼び出し")])],1)],1),t._v(" "),e(d.a,[e(r.a,{attrs:{cols:"6",sm:"6",md:"6"}},[e(_.a,{staticStyle:{"ime-mode":"active"},attrs:{label:t.labels2,required:""},model:{value:t.MyGroup,callback:function(e){t.MyGroup=e},expression:"MyGroup"}})],1),t._v(" "),e(r.a,{attrs:{cols:"6",sm:"6",md:"6"}},[e(_.a,{staticStyle:{"ime-mode":"active"},attrs:{label:t.labels3,required:""},model:{value:t.MyName,callback:function(e){t.MyName=e},expression:"MyName"}})],1)],1),t._v(" "),e(d.a,[e(r.a,{attrs:{cols:"12",sm:"12",md:"12"}},[e(_.a,{staticStyle:{"ime-mode":"active"},attrs:{label:t.labels,required:""},model:{value:t.MyMsg,callback:function(e){t.MyMsg=e},expression:"MyMsg"}})],1)],1)],1)],1),t._v(" "),e(c.a,[e(m.a),t._v(" "),e(l.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.cancelDayo}},[t._v("\n          Cancel\n        ")]),t._v(" "),e(l.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.fs_set}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);