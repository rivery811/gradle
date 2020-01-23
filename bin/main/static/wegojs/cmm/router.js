"use strict";

function User(s){
	sessionStorage.setItem('uname', s.uname);
	sessionStorage.setItem('nickname', s.nickname);
	sessionStorage.setItem('uid', s.uid);
	sessionStorage.setItem('pwd', s.pwd);
	sessionStorage.setItem('tel', s.tel);
	sessionStorage.setItem('birth', s.birth);
	sessionStorage.setItem('pettype', s.pettype);
   return{
		uname : () =>{return sessionStorage.getItem('uname');},
		uid : () =>{return sessionStorage.getItem('uid');},
		pwd : () =>{return sessionStorage.getItem('pwd');},
		nickname : () =>{return sessionStorage.getItem('nickname');},
		tel : () =>{return sessionStorage.getItem('tel');},
		birth : () =>{return sessionStorage.getItem('birth');},
      pettype : () =>{return sessionStorage.getItem('pettype');}
   }
}
 function Host(t){
	sessionStorage.setItem('hname',t.hname);
	sessionStorage.setItem('hid',t.hid);
	sessionStorage.setItem('pwd',t.pwd);
	sessionStorage.setItem('ceoname',t.ceoname);
	sessionStorage.setItem('tel',t.tel);
	sessionStorage.setItem('addr',t.addr);
	sessionStorage.setItem('licensenum',t.licensenum);
	sessionStorage.setItem('companytype',t.companytype);
	return{
		hname : ()=>{return sessionStorage.getItem('hname');},
		hid : ()=>{return sessionStorage.getItem('hid');},
		pwd : ()=>{return sessionStorage.getItem('pwd');},
		ceoname : ()=>{return sessionStorage.getItem('ceoname');},
		tel : ()=>{return sessionStorage.getItem('tel');},
		addr : ()=>{return sessionStorage.getItem('addr');},
		licensenum : ()=>{return sessionStorage.getItem('licensenum');},
		companytype : ()=>{return sessionStorage.getItem('companytype');}
	}
}
