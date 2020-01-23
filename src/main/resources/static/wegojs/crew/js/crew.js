"use stric";
var crew = crew || {}
crew = (() => {
	const WHEN_ERR = '호출하는 crew js를 찾을수 없습니다.'
	let context, js;
	let crewVuejs;
	let init = () => {
		context = $.ctx()
		js = $.js()
		crewVuejs = js + '/crew/vue/crewVue.js'
		
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(crewVuejs)
		).done(() => {
			setContentView()
		}).fail(() => {
			alert(WHEN_ERR)
		})
	}
	let setContentView = () => {
		$('#mainbody').html(crewVue.crew_body())
	}
	return { onCreate }
})();