"use strict"
var tourizm = tourizm || {}
tourizm = (() => {
	const WHEN_ERR = '호출하는 tourizm.js 를 찾을 수 없음 '
	let context, js
	let tourizm_Vuejs
	let mainHomejs
	let mainVuejs
	let tourizmDijkstrajs
	let mapjs
	let init = () => {
		context = $.ctx()
		js = $.js()
		tourizm_Vuejs = js + '/tourizm/tourizmVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		mainVuejs = js + '/vue/mainVue.js'
		tourizmDijkstrajs = js + '/tourizm/tourizmDijkstra.js'
		mapjs=js+'/crew/js/map.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(tourizm_Vuejs),
			$.getScript(tourizmDijkstrajs),
			$.getScript(mapjs)
		).done(() => {
			setContentView()
			heart()
			gotourizmDijkstra()
			createtable()
			inserttourizm()
			recent_list()
			map.onCreate()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$('#mainbody').html(tourizmVue.tourizm_body())
	}
	
	let heart=()=>{
		$('#heart1').on("click",function(){
			
			var $this = $(this);
			$this.find(">img").attr("src", function(index, attr) {
				if(attr.match=='beforeheart'){
					return attr.replace("beforeheart.png","afterheart.png")
				}else {
					return attr.replace("afterheart.png", "beforeheart.png")
				}
			})
		})
		}
	let createtable=()=>{
		$('#createtourizm').click(()=>{
			$.getJSON(context+'/tourizm/create/table',d=>{
				
			})
		})
	}
	let inserttourizm=()=>{
		$('#dummy').click(()=>{
			$.getJSON(context+'/tourizm/insert/dummy',d=>{
				
			})
		})
	}
	let gotourizmDijkstra = () => {
		$('#dijkstra_btn').click(() => {
			tourizmDijkstra.onCreate()
		})
	}
	let recent_list=()=>{
		
		$.getJSON(context+'/tourizm/list',d=>{
			
			let asd = d.list
			$.each(asd,(i,j)=>{
				$('<div class = "cl5" style = "margin-top: 2%;'+
					'                              margin-left: 1%;'+
					'                              box-sizing: border-box;'+
					'                          border: 1px solid black;'+
					'                          width : 32%;'+
					'                          height : 25.8%;'+
					'                          float:left;">'+
					'                        <div class = "climg1" style = "width: 100%;'+
					'                                    height : 60%;'+
					'                                    position: relative;">'+
					'                                    <img style="position : absolute;'+
					'										top: 2px;'+
					'										width: 95%; '+
					'										height: 100%; '+
					'										display: block; '+
					'										transform: translate(-50%, 0);" '+
					'										src = "'+j.IMG+'">'+
					'                                    </div>'+
					'                                    <div  style = "margin-top:3px; margin-left:3px;"><input type="checkbox" name="place" value="'+j.PLACE+'"></div>'+
					'                        <div class = "tx1" style = "position: relative; margin-left:3px;">'+j.PLACE+' '+
					'                              <div class="heart"  style="position: absolute;'+
					'                                                	right : 1px;'+
					'                                                	top : 0px;'+
					'                                                	width : 40px;'+
					'                                                	height : 80px;">'+
					'                                    <button id = "heart1" style ="height:45px; width:45px; background : none; border: none; float : right;">'+
					'                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"/></button>'+
					'                              </div>'+
					'                        </div>'+
					'                  </div>').appendTo('#tourizmbody')
			})
		})
	}
	return { onCreate }
})();