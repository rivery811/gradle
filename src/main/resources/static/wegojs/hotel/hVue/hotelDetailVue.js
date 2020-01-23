var hotelDetailVue = hotelDetailVue || {}
hotelDetailVue = {
		hDetail_body: x=>{
			return '<style>'+
			'.modal{'+
			'    display: grid;'+
			'/*      grid-template-columns: 20% 1fr; */'+
			'        grid-template-rows: 100px 630px;'+
			'        width: 50%'+
			'        height: 100%'+
			'        border: 1px solid black; '+
			'        text-align: center;'+
			'}'+
			'.detail{}'+
			'.title{'+
			'      width: inherit;'+
			'    height: 100%; '+
			'    text-align: center;'+
			'    float: left;'+
			'  border: 1px solid #bcbcbc; '+
			'    }'+
			'.head{'+
			'/*             display: grid;'+
			'grid-template-columns: 20% 1fr;'+
			'        grid-template-rows: 100px 630px; */'+
			'    display:inline-flex;'+
			'     width: 100%;'+
			'    height: 10%;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.main{'+
			'    display:inline-flex;'+
			'     width: 100%;'+
			'    height: 90%;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.content{'+
			'     display:inline-table;'+
			'     width: 100%;'+
			'    height: 100%;'+
			'   /*  float: left; */'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.con{'+
			'      width: inherit;'+
			'    height: 100%; '+
			'    text-align: center;'+
			'    float: left;'+
			'  border: 1px solid #bcbcbc;   '+
			'}'+
			
			'	.container{'+
			'		/* display: grid; */'+
			'		grid-template-columns: 0% 1fr;'+
			'		/* grid-template-rows: 50px 500px 50px; */'+
			'		height: 100%'+
			'		border: 1px solid #bcbcbc; '+
			'		grid-template-areas: '+
			'		"header header"'+
			'		"side main"'+
			'		"footer footer"}'+
			'	.header{'+
			'		grid-area: header;'+
			'		margin: 0 auto;'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			'		.main{'+
			'		grid-area: main;'+
			'		display: grid;'+
			'		grid-template-rows: 300px 50px 500px;'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			
			'.main1 {'+
			
			'	background-repeat: no-repeat;'+
			'	  background-attachment: fixed;'+
			'  background-size: 100% 100%;'+
			'          font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: rgba(255);'+
			'	border: 1px solid #bcbcbc;} ;'+
			'	.main2 {'+
			'	background-repeat: no-repeat;'+
			'	  background-attachment: fixed;'+
			'  background-size: 100% 100%;	'+
			'          font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: #ffffff;'+
			'        opacity: 0.9;'+
			'	border: 1px solid #bcbcbc; '+
			'	}'+
			'	.main3 {'+
			'	background-repeat: no-repeat;'+
			'	  background-attachment: fixed;'+
			'  background-size: 100% 100%;'+
			'        font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: #ffffff;'+
			'        opacity: 0.9;'+
			'	border: 1px solid #bcbcbc; '+
			'	}'+
			'.main_common1{'+
			'background-image: url(https://images.trvl-media.com/hotels/11000000/10560000/10554500/10554498/623758b9.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium);'+
			'	background-repeat: no-repeat;'+
			'/* 	  background-attachment: fixed; */'+
			'  background-size: 100% 100%;'+
			'    display:inline-table;'+
			'    float: left;'+
			'    width: 700px;'+
			'    height: 300px;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.main_common2{'+
			'    display:inline-table;'+
			'    float: left;'+
			'    width: 430px;'+
			'    height: 300px;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.main_common3{'+
			'    width: 100%;'+
			'    height: 100px;'+
			'    border: 1px solid #bcbcbc;'+
			'    margin-bottom: auto 0;'+
			'}'+
			'.calendar-container{'+
			'	 width: 100%;'+
			'    height: 100%;'+
			'}'+
			'.content1{'+
			'	grid-area: main3;'+
			'	display: grid;'+
			'	grid-template-rows: 250px 250px'+
			'    width: 50px;'+
			'    height: 50px; */'+
			'}'+
			'.content2{'+
			'	border: 1px solid black; '+
			'}'+
			'.inner {'+
			'	background-image: url(https://image.goodchoice.kr/resize_370x220/affiliate/2019/11/19/5dd3a0ef3a514.jpg);'+
			'	background-repeat: no-repeat;'+
			'/* 	  background-attachment: fixed; */'+
			'  background-size: 100% 100%;'+
			'    display:inline-table;'+
			'    display:inline-table;'+
			'     width: 50%;'+
			'    height: 100%;'+
			'    float: left;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'</style>'+
			'<body>'+
			'	<div class="container">'+
			'		<div class="header">'+
			
			
			'		<div class="main">'+
			'			<div class="main1">'+
			'				<div class="main_1 main_common1">'+
			'					<p class="content">호텔 사진</p>'+
			'					'+
			'				</div>'+
			'			    <div class="main_2 main_common2">'+
			'			    	<p class="content">호텔 이름</p>'+
			'			    	<p class="content">호텔 위치</p>'+
			'			    	<p class="content">호텔 상세설명</p>'+
			'			    	'+
			'					<div class="main_3 main_common3"><p>지도</p></div>'+
			'					<p class="content">평점</p>'+
			'			    </div>'+
			
			'</div>'+
			'		<div class="main2">'+
			'		<div class="calendar-container"><span class="time-tab"><label class="in">체크인</label><input type="text" class="focus-input show-hightlight" readonly="" value="12월 8일 (일)" data-key="2019/12/08"></span><span class="nights"><span>   <1박>   </span></span><span class="time-tab"><label class="out">체크아웃</label><input type="text" class="focus-input show-hightlight out-time" readonly="" value="12월 9일 (월)" data-key="2019/12/09"></span> '+
			'			<span class="time-tab"><label class="in">숙박인원</label><input type="text" class="focus-input show-hightlight" readonly="" value="객실 1개, 2명" data-key="2019/12/08"></span>'+
			'			<button class="btn" type="submit" style="height:100%">검색</button></span></div>'+
			'			<div></div>'+

			'	</div>'+
			'		<div class="main3">'+
			'			<div class="content1">'+
			'				<div class="content2">'+
			'				 <div class="inner"></div>'+
			'				 <strong class="title">[무료 룸UP] 스탠다드→디럭스 킹</strong>'+
			'				 <div class="price"><strong> 가격  </strong>'+
			'                                        <span> <p class="through_none" style="text-decoration: line-through; visibility: visible;"> 400,000원</p>'+
			'<p><b style="color: rgba(0,0,0,1)">357,500원</b> <!-- 표시금액 --></p></span>'+
			' <button type="button" onclick="pop_room_detail(239371);">객실 이용 안내</button> </div>'+
			'				 <button id="hPaygo" type="button"   onclick="location.href="/reservation?adcno=2&amp;ano=61931&amp;armgno=239371&amp;checkin_type=2&amp;checkin_date=2019-12-26&amp;checkout_date=2019-12-27";" class="gra_left_right_red" style="background-color: red;border-radius: 10px;font-size: xx-large;"> 예약</button>'+
			'				 </div>'+
			'				 <div class="content2">'+
			'				 <div class="inner"></div>'+
			'				 <strong class="title">[무료 룸UP] 디럭스 킹→프레지던트</strong>'+
			'				 <div class="price"><strong> 가격  </strong>'+
			'                                        <span> <p class="through_none" style="text-decoration: line-through; visibility: visible;"> 400,000원</p>'+
			'<p><b style="color: rgba(0,0,0,1)">357,500원</b> <!-- 표시금액 --></p></span>'+
			' <button type="button" onclick="pop_room_detail(239371);">객실 이용 안내</button> </div>'+
			'				 <button type="button" font-size: x-large; onclick="location.href="/reservation?adcno=2&amp;ano=61931&amp;armgno=239371&amp;checkin_type=2&amp;checkin_date=2019-12-26&amp;checkout_date=2019-12-27";" class="gra_left_right_red" style="background-color: red;border-radius: 10px;font-size: xx-large;"> 예약</button>'+
			'			 </div>'+
			'			</div>			'+
			'		</div>'+
		/*	상세 비교하기 모달창!!!!!!!!!!!!!!!!!*/
/* 			'  <div id="ex1" class="modal" aria-hidden="true";>'+
			'  <div class="detail"><h3>상세 비교하기</h3></div>'+
			'    <div class="content">'+
			'        <div class="head">'+
			'            <div class="title">'+
			'                <p>호텔이름</p>'+
			'            </div>'+
			'            <div class="title">'+
			'                <p>호텔이름</p>'+
			'            </div>'+
			'        </div>'+
			'        <div class="main" >'+
			'            <div class="con">'+
			'                <p>상세내용</p>'+
			'            </div>'+
			'             <div class="con">'+
			'                 <p>상세내용</p>'+
			'             </div>'+
			'        </div>'+
			'</div>'+
			'  <a href="#" rel="modal:close">닫기</a>'+
			'</div>'+
			'<p><a id="detailgo" href="#ex1" rel="modal:open">비교하기</a></p>  '+ */
			//상세 비교하기 모달 끝!!!!!!!!!!
			'</div>'
			'		</div>'+
			'		</div>'+
			'	</div>'+
			'</body>'
		}
}