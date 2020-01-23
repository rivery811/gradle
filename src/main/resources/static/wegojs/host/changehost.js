"use strict"
var changehost = changehost ||{}
changehost=(()=>{
	const WHEN_ERR = '호출하는 changehost 페이지가 없음'
	let context, js;
    let mainVuejs;
	let changehostvuejs;
	let mainHomejs
    let init = () => {
        context = $.ctx()
		js = $.js()
		changehostvuejs = js + '/hostvue/changehost_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(changehostvuejs),
			$.getScript(mainHomejs)
		).done(()=>{
			setContentView()
			gomypage()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$('#mainbody').html(changehost_vue.changehost_body())
	}
	let gomypage=()=>{
		$('#myp_btn').click(()=>{
                mypage.onCreate()
            })
	}
	
	return{onCreate}
})()