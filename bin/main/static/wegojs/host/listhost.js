"use strict"
var listhost = listhost ||{}
listhost=(()=>{
	const WHEN_ERR = `호출하는 listhost 페이지가 없음`
	let context, js;
    let mainVuejs;
	let listhostvuejs;
	let mainHomejs
    let init = () => {
        context = $.ctx()
		js = $.js()
		listhostvuejs = js + '/hostvue/listhost_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(listhostvuejs),
			$.getScript(mainHomejs)
		).done(()=>{
			setContentView()
			gocreate()
			drawChart()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(listhost_vue.listhost_body())
	}
	let gocreate=()=>{
		$('#createhost_btn').click(()=>{
                createhost.onCreate()
            })
	}

	let drawChart=()=>{

		var data = google.visualization.arrayToDataTable([
          ['월별', '매출'],['01월',  1000],['02월',  1170],['03월',  660],
          ['04월',  1030],['05월',  1030],['06월',  1030],['07월',  1030],
          ['08월',  1030],['09월',  1030],['10월',  1030],['11월',  1030],
          ['12월',  1030]
        ]);

        var options = {
          title: '월별 매출 현황',
          hAxis: {title: '',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
	}


	return{onCreate}
})()