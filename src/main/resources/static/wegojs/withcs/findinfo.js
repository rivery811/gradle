"use strict"
var findinfo = findinfo||{}
findinfo=(()=>{
	const WHEN_ERR = '호출하는 findinfo 페이지가 없음'
	let context, js;
    let mainVuejs;
	let findinfovuejs;
	let loginjs
    let init = () => {
        context = $.ctx()
		js = $.js()
		findinfovuejs = js + '/withcsvue/findinfo_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		loginjs = js + '/withcs/login.js'
	}
	let onCreate=x=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(findinfovuejs),
			$.getScript(loginjs)
		).done(()=>{
			setContentView(x)
			gologin()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=x=>{
		if(x === 'id'){
			$('#mainbody').html(findinfo_vue.findinfo_id())
		}else{
			$('#mainbody').html(findinfo_vue.findinfo_pwd())
		}
		
	}
	let gologin=()=>{
		$('#findid_btn').click(()=>{
               
                login.onCreate()
			})
		$('#findpwd_btn').click(()=>{
			
			login.onCreate()
		})
	}

	return{onCreate}
})()