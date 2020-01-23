var hotelComVue = hotelComVue || {}
hotelComVue = {
		hCom_body: x => {
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
			'</style>'+
			'<body>'+
			'  <div id="ex1" class="modal">'+
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
			'        <div class="main">'+
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
			'<p><a href="#ex1" rel="modal:open">모달창띄우기</a></p>  '+
			'</body>'
		}
}
