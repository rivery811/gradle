"use strict"
var hotelHome = hotelHome || {}
hotelHome = (()=>{
	const WHEN_ERR = '호출하는 hotelHome js를 찾을 수 없습니다 .'
	let context, js, routerjs, hotelMainVuejs, mainVuejs,hotelDetailjs;
	let init =()=>{
		context = $.ctx()
		js = $.js()
        routerjs = js+'/cmm/router.js'
      	mainVuejs = js+'/vue/mainVue.js'
      	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
      	hotelDetailjs = js+'/hotel/hotelDetail.js'
	}
	let onCreate=()=>{
		init();
		$.when(
			$.getScript(mainVuejs),
			$.getScript(routerjs),
			$.getScript(hotelDetailjs)
		).done(()=>{
			alert('hotelMain 성공')
			setContentView()
			hotelDetailgo()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		alert('호텔메인 제발제발')
        let x = {css:$.css(),img:$.img()}
		
		$('#mainbody').html(hotelMainVue.hmain_body())
		 $('html').scrollTop(0);
		
        		
	}
    let hotelDetailgo=()=>{
    	$('#hotelDetail').click(e=>{
    		e.preventDefault()
    		hotelDetail.onCreate()
    	})
    }

	return{onCreate}
		
})();
