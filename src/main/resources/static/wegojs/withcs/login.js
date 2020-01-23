"use strict"
var login = login ||{}
login=(()=>{
	const WHEN_ERR = '호출하는 login 페이지가 없음'
	let context, js;
    let mainVuejs;
	let loginvuejs;
	let mainHomejs
	let routerjs
	let mypagejs
    let init = () => {
        context = $.ctx()
		js = $.js()
		loginvuejs = js + '/withcsvue/login_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		routerjs = js + '/cmm/router.js'
		mypagejs = js+ '/withcs/mypage.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(loginvuejs),
			$.getScript(mainHomejs),
			$.getScript(routerjs),
			$.getScript(mypagejs)
		).done(()=>{
			setContentView()
			gofind()
			login()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=x=>{
			$('#mainbody').html(login_vue.login_body())
		
	}
	let gofind=()=>{
		let x ='';
		$('#findid_btn').click(()=>{
				alert('아이디찾기클릭')
				x = 'id'
                findinfo.onCreate(x)
			})
		$('#findpwd_btn').click(()=>{
				alert('비밀번호찾기클릭')
				x = 'pw'
                findinfo.onCreate(x)
            })	
	}
	let login=()=>{

		$('#userlogin_btn').click(()=>{
			alert(`클릭`)
			$.ajax({
		          url : context+'/user/'+$('#uid').val(),
		          type : 'POST',
		          data : JSON.stringify({uid : $('#uid').val(), pwd : $('#pwd').val()}),
		          dataType : 'json',
		          contentType : 'application/json',
		          success: d =>{
					  let s = d.user
					  $.extend(new User(s))
					mainHome.onCreate()
				},
		          error : e => {
			    	alert('Loign AJAX 실패');
		          }
			})
		})
			$('#hostlogin_btn1').click(()=>{
				$('#mainbody').html(login_vue.hostlogin_body())
				$('#hostlogin_btn').click(()=>{
			alert(`호스트로그인클릭`)
			$.ajax({
		          url : context+'/host/'+$('#hid').val(),
		          type : 'POST',
		          data : JSON.stringify({hid : $('#hid').val(), pwd : $('#pwd').val()}),
		          dataType : 'json',
		          contentType : 'application/json',
		          success: d =>{
					/* mainHome.onCreate() */
					alert('host ajax 성공'+d.host)
					let t = d.host
					$.extend(new Host(t))
					alert('로그인성공'+t)
					mypage.onCreate()
				},
		          error : e => {
			    	alert('Loign AJAX 실패');
		          }
			})
		})
		})
	}
	return{onCreate}
})()
