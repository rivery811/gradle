"use strict"
var userjoin = userjoin ||{}
userjoin=(()=>{
	const WHEN_ERR = '호출하는 userjoin 페이지가 없음'
	let context, js;
	let mainVuejs;
	let userjoinvuejs
	let mainHomejs
	let loginjs
	let init = () => {
        context = $.ctx()
		js = $.js()
		userjoinvuejs = js + '/user/userjoin_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		loginjs =js+'/withcs/login.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(userjoinvuejs),
			$.getScript(mainHomejs),
			$.getScript(loginjs)
		).done(()=>{
			setContentView()
			gologin()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(userjoin_vue.userjoin_body())
	}
	let gologin=()=>{
		$('#uid').keyup(() => {
			if ($('#uid').val().length > 3) {
				$.ajax({
					url: context+'/user/'+$('#uid').val()+'/existId',
					contentType: 'application/json',
					success: d => { 
						if (d.msg === 'SUCCESS') {
							$('#dupl_check')
								.val('사용가능한 아이디입니다.')
								.css('color', 'blue')
						} else {
							$('#dupl_check')
								.val('중복된 아이디  입니다')
								.css('color', 'red')
						}
					}
				})
			}
		})

		$('#userjoin_btn').click(e=>{
			e.preventDefault()
		let data = {uid:$(`#uid`).val(),pwd:$(`#pwd`).val(),uname:$(`#uname`).val(),
					nickname:$(`#nickname`).val(),birth:$(`#birth`).val(),
					tel:($(`#tel1`).val()+$(`#tel2`).val()+$(`#tel3`).val()),
					pettype:($(`input[name="pettype"]:checked`).val()+$(`#pettype5`).val())}
            $.ajax({
	    	url : context+'/user/',
	    	type : 'POST',
	    	dataType : 'json',
	    	data : JSON.stringify(data),
	    	contentType : 'application/json',
	    	success : d => {
	    		
	    			if(d.msg === 'SUCCESS'){
	    				login.onCreate()
	    			}else
	    				alert('회원가입 실패')
	    	},
	    	error : e => {
	    		alert('AJAX 실패');
	    	}
		})
			})
	}

	return {onCreate}
})()