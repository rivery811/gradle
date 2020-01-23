"use strict"
var hotelEnd = hotelEnd || {}
hotelEnd = (()=>{
	const WHEN_ERR = '호출하는 hotelEnd js를 찾을 수 없습니다 .'
		let context, js, routerjs, mainVuejs, hotelMainVuejs, hotelHomejs,hotelComparejs,hotelEndVuejs, hotelPayjs ;
	    let init=()=>{
	        context = $.ctx()
	        js = $.js()
	        routerjs = js+'/cmm/router.js'
	      	mainVuejs = js+'/vue/mainVue.js'
	      	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
	      	hotelHomejs = js+'/hotel/hotelHome.js'
	      	hotelComparejs = js+'/hotel/hotelCompare.js'
	      	hotelPayjs = js+'/hotel/hotelPay.js'
	      	hotelEndVuejs = js+'/hotel/hVue/hotelEndVue.js'
	    }
	    let onCreate=()=>{
	    	init();
	    	$.when(
	                $.getScript(mainVuejs),
	                $.getScript(routerjs),
	                $.getScript(hotelHomejs),
	                $.getScript(hotelComparejs),
	                $.getScript(hotelPayjs),
	                $.getScript(hotelComparejs),
	                $.getScript(hotelEndVuejs)
	           
	    	).done(()=>{
	            alert('hotelEnd 성공')
	            setContentView()
	           
	           
	    	}).fail(()=>{
	    		alert(WHEN_ERR)
	    	})	    	
	    }
	    let setContentView=()=>{
            let x = {css:$.css(),img:$.img()}
    		$('#mainbody').html(hotelEndVue.hEnd_body(x))
    		 $('html').scrollTop(0);
	    }
	    return {onCreate}
})();