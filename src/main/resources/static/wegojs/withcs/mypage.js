"use strict"
var mypage = mypage ||{}
mypage=(()=>{
	const WHEN_ERR = '호출하는 mypage 페이지가 없음'
	let context, js;
    let mainVuejs,mypagevuejs,mainHomejs,routerjs;

	let init = () => {
        context = $.ctx()
		js = $.js()
		mypagevuejs = js + '/withcsvue/mypage_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		routerjs = js + '/cmm/router.js'
	}
	let onCreate = ()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(mypagevuejs),
			$.getScript(mainHomejs),
			$.getScript(routerjs)
		).done(()=>{
			setContentView()
			godelete()
			gochange()
			golist() 
			
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		gomypage()
	}
	let godelete=()=>{
		$('#delete_btn').click(()=>{
                alert('탈퇴클릭')
                deleteinfo.onCreate()
            })
	}
	let gochange=()=>{
		$('#change_btn').click(()=>{
                alert('수정클릭')
                changehost.onCreate()
            })
	}
	let golist=()=>{
		$('#listhost_btn').click(()=>{
                alert('리스트클릭')
                listhost.onCreate()
            })
	}
	let gomypage =()=>{
		let x = {
			uid : sessionStorage.getItem('uid'),
			uname : sessionStorage.getItem('uname'),
			nickname : sessionStorage.getItem('nickname'),
			birth : sessionStorage.getItem('birth'),
			tel : sessionStorage.getItem('tel'),
			pettype : sessionStorage.getItem('pettype')
		}
		alert(x.uid+x.uname+x.tel)
		$(`#mainbody`).html(mypage_vue.mypage_body(x))
	} 

	/* let gomypage =()=>{
		if (login(d.uid)===uid){
		let x = {
			uid : sessionStorage.getItem('uid'),
			uname : sessionStorage.getItem('uname'),
			nickname : sessionStorage.getItem('nickname'),
			birth : sessionStorage.getItem('birth'),
			tel : sessionStorage.getItem('tel'),
			pettype : sessionStorage.getItem('pettype')
		}
		alert(x.uid+x.uname+x.tel)
		$(`#mainbody`).html(mypage_vue.mypage_body(x))
	}else{
		let z ={
			hname : sessionStorage.getItem('hname'),
			hid : sessionStorage.getItem('hid'),
			pwd : sessionStorage.getItem('pwd'),
			ceoname : sessionStorage.getItem('ceoname'),
			tel : sessionStorage.getItem('tel'),
			addr : sessionStorage.getItem('addr'),
			licensenum : sessionStorage.getItem('licensenum'),
			companytype : sessionStorage.getItem('companytype')
		}
		$(`#mainbody`).html(mypage_vue.hostmypage_body(z))
	}
	} */


	return{onCreate}
})()