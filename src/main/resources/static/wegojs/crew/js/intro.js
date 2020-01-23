"use strict"
var intro = intro || {}
intro = (()=>{
	const WHEN_ERR ='호출하는 intro js를 찾을수 없습니다.'
	let context,js;
	let introVuejs;
	let init=()=>{
		context = $.ctx()
		js = $.js()
		introVuejs = js+'/crew/vue/introVue.js'
	}
	let onCreate=()=>{
		init()
		
		$.when(
			$.getScript(introVuejs)
		).done(()=>{
			setContentView()
		}).fail(()=>{
			alert(WHEN_ERR)
		}) 
	}
	let setContentView =()=>{
		   let x = {css:$.css(),img:$.img()}
	 	 $('#mainbody').html(introVue.intro_body(x))
	}
	
	return{onCreate}
})();