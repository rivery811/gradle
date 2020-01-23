"use strict"
var hotelCompare = hotelCompare || {}
hotelCompare = (()=>{
	const WHEN_ERR = '호출하는 hotelCompare js를 찾을 수 없습니다 .'
		let context, js, routerjs, hotelMainVuejs, mainVuejs,hotelDetailjs,hotelComparejs;
	let init =()=>{
		context = $.ctx()
		js = $.js()
        routerjs = js+'/cmm/router.js'
      	mainVuejs = js+'/vue/mainVue.js'
      	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
      	hotelDetailjs = js+'/hotel/hotelDetail.js'

	}
	let onCreate=()=>{
		init()
			$.when(
			$.getScript(mainVuejs),
			$.getScript(routerjs),
			$.getScript(hotelDetailjs)
		).done(()=>{
			alert('hotelCompare 성공')
			setContentView()

		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		alert('hotelCompare')
		 let x = {css:$.css(),img:$.img()}	
		$('#mainbody').html(hotelComVue.hCom_body(x))
		 $('html').scrollTop(0);
		
	}

	return{onCreate}
})();