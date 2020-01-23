"use strict"
var hotelPay = hotelPay || {}
hotelPay = (()=>{
	const WHEN_ERR = '호출하는 hotelPay js를 찾을 수 없습니다 .'
	let context, js, routerjs, mainVuejs, hotelMainVuejs, hotelHomejs,hotelComparejs, hotelPayVuejs,hotelEndjs;
    let init=()=>{
        context = $.ctx()
        js = $.js()
        routerjs = js+'/cmm/router.js'
      	mainVuejs = js+'/vue/mainVue.js'
      	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
      	hotelHomejs = js+'/hotel/hotelHome.js'
      	hotelComparejs = js+'/hotel/hotelCompare.js'
      	hotelEndjs = js+'/hotel/hotelEnd.js'
      	hotelPayVuejs = js+'/hotel/hVue/hotelPayVue.js'
    }
    let onCreate=()=>{
    	init();
    	$.when(
                $.getScript(mainVuejs),
                $.getScript(routerjs),
                $.getScript(hotelHomejs),
                $.getScript(hotelComparejs),
                $.getScript(hotelEndjs),
                $.getScript(hotelPayVuejs)
    	).done(()=>{
            alert('hotelDetail 성공')
            setContentView()
            hotelEndgo()
           
    	}).fail(()=>{
    		alert(WHEN_ERR)
    	})
    	
    }
    let setContentView=()=>{
    	alert('hotelPay')
		 let x = {css:$.css(),img:$.img()}	
		$('#mainbody').html(hotelPayVue.hPay_body(x))
		 $('html').scrollTop(0);
    }
    let hotelEndgo=()=>{
		$('#book').click(e=>{
			e.preventDefault()
			hotelEnd.onCreate()
		})
	}
    return {onCreate}
})();