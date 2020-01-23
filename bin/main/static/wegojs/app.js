"use strict";
var app = app || {};
app = (() => {
	const WHEN_ERR = 'app js를 찾을수 없습니다.'
	let context, js;
	let mainHomejs;
	let run = () => {
			onCreate();
	}
	let init = () => {
		context = '';
		js = '/wegojs';
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate = () => {
		init();
		$.when(
			$.getScript(mainHomejs)
		)
			.done(() => {
				alert('app js 진입성공')
				mainHome.onCreate()
			})
			.fail(() => {
				alert(WHEN_ERR)
			})
	}
	return { run }
})();