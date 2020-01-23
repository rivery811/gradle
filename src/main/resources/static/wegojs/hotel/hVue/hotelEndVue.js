var hotelEndVue = hotelEndVue || {}
hotelEndVue = {
		hEnd_body: x=>{
			return '<style>'+
			'	.container{		'+
			//'		display: grid;'+
			'/* 		grid-template-columns: 20% 1fr; */'+
			'		grid-template-rows: 100px 630px;'+
			'		width: 50%'+
			'		height: 100%'+
			'		border: 1px solid black; '+
			'		text-align: center;'+
			'				'+
			'}'+
			'.aside { '+
			'	border: 1px solid black; '+
			'  width: 300px; '+
			'  height: 400px;  '+
			'  float: right;'+
			'}  '+
			'.text{'+
			'border: 1px solid black ; '+
			'}'+
			'.info{'+
			
			'border: 1px solid black; '+
			'}'+
			'/* .main{'+
			'  width: 300px; '+
			'  height: 400px;  '+
			'	border: 1px solid black; '+
			'} */'+
			
			'</style>'+
			'<body>'+
			'	<div class="container">'+
			'		<div class="text">'+
			'			<h1>예약이 완료되었습니다.</h1>'+
			'		</div>'+
			'		<div class="info">'+
			'			<div class="main">'+
			'				<p>호텔 이름</p>'+
			'				<p>예약자 정보</p>'+
			'				<p>예약 날짜</p>'+
			'				<p>예약한 객실정보</p>'+
			'				<p>총 결제금액</p>'+
			'			<button>메인으로 돌아가기</button>'+
			'			</div>'+
			'		<div class="aside">'+
			'		<h3>OO님에게 알맞은 추천지</h3>'+
			'	</div>'+
			
			'	</div>'+
			
			'</div>'+
			
			'</body>'
		}
}