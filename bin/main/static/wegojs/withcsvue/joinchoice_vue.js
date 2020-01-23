var joinchoice_vue = joinchoice_vue || {}
joinchoice_vue = {
	joinchoice_body:()=>{
		return `<div id="host-container"><div>
		<div align="center" style= "solid black;">
		<div>
		<div id="host-header">
		<div>WEGO에 오신 것을 환영합니다.</div>
		<div>지금 회원 가입하신 후 "WEGO" 만의 다양한 서비스를 경험해보세요!</div><br /></div>
		
		<div><button id = "createuser" >유저테이블생성</button></div>
		<div><button id = "createhost" >호스트테이블생성</button></div>
		<div><button id = "dumuser" >유저더미생성</button></div>

		<span>호텔</span> | <span>맛집</span> | <span>관광</span> | <span>교통</span>
		| <span>커뮤니티</span>
		<div>
				<h2>개인회원</h2>
			<div>wego 개인회원이 되시면 예약,커뮤니티등 다양한 혜택및 이벤트의 기회를 누릴수 있습니다</div>
			<span><button id="userjoin">회원가입</button></span>
		</div>
		<div>
				<h2>업체회원</h2>
			<div>wego 기업회원이 되시면 업체등록,관리및 다양한 관리기능을 사용할수 있습니다</div>
			<span><button id="hostjoin">회원가입</button></span>
		</div>
	</div></div></div></div>`
	}
}