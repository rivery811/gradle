"use strict"
var createhost = createhost ||{}
createhost=(()=>{
	const WHEN_ERR = `호출하는 mypage 페이지가 없음`
	let context, js;
    let mainVuejs,createhostvuejs,mainHomejs;

	let init = () => {
        context = $.ctx()
		js = $.js()
		createhostvuejs = js + '/hostvue/createhost_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate = ()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(createhostvuejs),
			$.getScript(mainHomejs)
		).done(()=>{
			setContentView()
			gogolist() 
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(createhost_vue.createhost_body())
	}
	let gogolist=()=>{
		$('#listgo_btn').click(()=>{
                listhost.onCreate()
            })
	}

	return{onCreate}
})()