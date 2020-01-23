"use strict"

var tourizmDijkstra = tourizmDijkstra || {}
tourizmDijkstra = (()=>{
	const WHEN_ERR = '호출하는 tourizmDijkstrajs 를 찾을 수 없습니다.'
		let context, js
		let tourizm_Vuejs
		let mainHomejs
		let mainVuejs
		let tourizmDijkstraVuejs
		let mapjs
		let init = () =>{
			context = $.ctx()
			js = $.js() 
			tourizm_Vuejs = js + '/tourizm/tourizmVue.js'
			mainHomejs = js + '/cmm/mainHome.js'
			mainVuejs = js + '/vue/mainVue.js'
			tourizmDijkstraVuejs = js + '/tourizm/tourizmDijkstraVue.js'
			mapjs = js + '/crew/js/map.js'
		}
		
		let onCreate = () =>{
			init()
			$.when(
					$.getScript(mainVuejs),
					$.getScript(tourizm_Vuejs),
					$.getScript(tourizmDijkstraVuejs),
					$.getScript(mapjs)

			).done(()=>{
				setContentView()
				map.onCreate()
			}).fail(()=>{
				alert(WHEN_ERR)
			})
		}
		
		let setContentView = () =>{
			$('#mainbody').html(tourizmDijkstraVue.tourizmDijkstraVue_body())
			$('html').scrollTop(0)
		}
		return {onCreate}
})()