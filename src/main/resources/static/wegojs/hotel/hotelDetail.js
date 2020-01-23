"use strict"
var hotelDetail = hotelDetail || {}
hotelDetail = (()=>{
	const WHEN_ERR = '호출하는 hotelDetail js를 찾을 수 없습니다 .'
	        let context, js;
	        let routerjs;
	        let mainVuejs, hotelMainVuejs, hotelHomejs,hotelComparejs, hotelPayjs;
	        let init=()=>{
	            context = $.ctx()
	            js = $.js()
	            routerjs = js+'/cmm/router.js'
	          	mainVuejs = js+'/vue/mainVue.js'
	          	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
	          	hotelHomejs = js+'/hotel/hotelHome.js'
	          	hotelComparejs = js+'/hotel/hotelCompare.js'
	          	hotelPayjs = js + '/hotel/hotelPay.js'
	        }
	        let onCreate=()=>{
	        	init();
	        	$.when(
	                    $.getScript(mainVuejs),
	                    $.getScript(routerjs),
	                    $.getScript(hotelHomejs),
	                    $.getScript(hotelComparejs),
	                    $.getScript(hotelPayjs)
	               
	        	).done(()=>{
	                alert('hotelDetail 성공')
	                setContentView()
	                hotelPaygo()
	               
	        	}).fail(()=>{
	        		alert(WHEN_ERR)
	        	})
	        }
	        let setContentView=()=>{
	        	alert('호텔상세 제발제발')
	            let x = {css:$.css(),img:$.img()}
	    		
	    		$('#mainbody').html(hotelDetailVue.hDetail_body(x))
	    		 $('html').scrollTop(0);
	    		//$('#ex1').remove()
	        }
	    	let hotelComparego=()=>{
	    		//let vue = document.getElementById('id01')
	    		$('#detailgo').click(e=>{
	    			e.preventDefault()
	    			

	    		})
	    	}
	    	let hotelPaygo=()=>{
	    		$('#hPaygo').click(e=>{
	    			e.preventDefault()
	    			hotelPay.onCreate()
	    		})
	    	}
	        return{onCreate}
})();