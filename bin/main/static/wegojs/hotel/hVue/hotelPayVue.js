var hotelPayVue = hotelPayVue || {}
hotelPayVue = {
		hPay_body: x=>{
			return '<style>'+
			'	.container{'+
			//'		display: grid;'+
			'		grid-template-columns: 20% 1fr;'+
			'		grid-template-rows: 50px 1500px 50px;'+
			'		height: 100%'+
			'		border: 1px solid #bcbcbc; '+
			'		grid-template-areas: '+
			'		"header header"'+
			'		"side main"'+
			'		"footer footer"'+
			
			'}'+
			'	.header{'+
			'		grid-area: header;'+
			'		margin: 0 auto;'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			'		.side{'+
			'		grid-area: side;'+
			'		text-align: center;'+
			'		border: 1px solid #bcbcbc; '+
			
			'}'+
			'	#img{'+
			'		width: 100%;'+
			'		height: 100%;'+
			'		display: inline-block;'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			'		.main{'+
			'		grid-area: main;'+
			'		display: grid;'+
			'		grid-template-rows: 500px 500px 500px;'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			
			'#main1 {'+
			'          font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: rgba(255);'+
			'/*         opacity: 0.9; */'+
			'	border: 1px solid #bcbcbc; '+
			
			'}'+
			'	#main2 {'+
			'        font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: #ffffff;'+
			'        opacity: 0.9;'+
			'	border: 1px solid #bcbcbc; '+
			'	}'+
			'	#main3 {'+
			
			'      font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: #ffffff;'+
			'        opacity: 0.9;'+
			'	border: 1px solid #bcbcbc; '+
			'	}'+
			'	#title{'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			'.cta{'+
			'	background-color: #156bc1;'+
			'    border: 1px solid #156bc1;'+
			'    border-radius: 2px;'+
			'    box-shadow: inset 0 -2px 0 #063665;'+
			'    color: #fff;'+
			'    cursor: pointer;'+
			'    display: inline-block;'+
			'    font-size: 14px;'+
			'    font-weight: bold;'+
			'    line-height: 1.5;'+
			'    margin: 0 2px 4px;'+
			'    overflow: hidden;'+
			'    padding: 4px 16px;'+
			'    position: relative;'+
			'    vertical-align: middle;'+
			'    width: auto;'+
			'    float: right;'+
			'    font-size : x-large;'+
			'}'+
			'.hotelInfo{'+
			'	border: 1px solid #bcbcbc; '+
			'}'+
			'.dateInfo{'+
			'		border: 1px solid #bcbcbc; '+
			'}'+
			'.roomProps{'+
			'	border: 1px solid #bcbcbc; '+
			'}'+
			'.priceDetail{'+
			'	border: 1px solid #bcbcbc; '+
			'}'+
			'.info{'+
			'	border: 1px solid #bcbcbc; '+
			'}'+
			'</style>'+
			'<body>'+
			'	<div class="container">'+
			'		<div class="header">'+
			'			<h2>OOO 호텔</h2>'+
			
			'	</div>'+
			'		<div class="side">'+
			'<div class="hotelInfo"><img id="img" src="https://dimg04.c-ctrip.com/images/220e190000017hafj064A_R_115_115.jpg"><div class="m-hotelInfo-desc"><h3>서울 신라호텔</h3><span type="star" count="5" class="u-level">★★★★★</span> <div class="scorePanel"><span class="score"><span>4.8</span>/5</span><span class="appraise">최고예요</span></div><div class="m-hotelInfo-address">대한민국 서울 중구 동호로 249, 4605</div></div></div>'+
			
			'<div class="dateInfo"><div class="m-checkInOut"><div class="m-checkInOut_time"><div class="timeLable"><h3>체크인</h3></div><div class="time">0000년 00월 00일(목)</div></div><div class="m-checkInOut_qty">'+
			'<h4>1박</h4></div><div class="m-checkInOut_time checkOut"><div class="timeLable"><h3>체크아웃</h3></div><div class="time">0000년 00월 00일(금)</div></div></div><div class="m-dateInfo_link"></div></div>'+
			
			'<div class="roomProps"><h3 class="m-roomProps_title">디럭스 퀸룸</h3><div class="m-roomProps_content"><ul class="propsList"><li class="propsItem"><span class="propsLable">객실 정원 (명)</span><span class="propsCell">2</span></li><li class="propsItem"><span class="propsLable">침대종류</span><span class="propsCell"><span class="tips">킹침대 1개</span></span></li><li class="propsItem"><span class="propsLable">식사 정보</span><span class="propsCell">조식 불포함</span></li></ul></div></div>'+
			
			'<div class="priceDetail"><div class="m-priceDetail_content"><ul class="priceList"><li><div class="priceItem"><span class="priceLable"><h4>객실 1개 x 1박	</h4></span><span class="priceCell"><div price="226046" currency="KRW" class="u-price"><span><span class="u-txt u-txt-warn u-price_num">000,000</span><span class="u-txt u-txt-warn u-price_currency">원</span></span></div></span></div></li><li><div class="priceItem"><span class="priceLable"><h4>세금&amp;서비스비용</h4><i type="prompt" class="u-icon u-icon-prompt"></i></span><span class="priceCell"><div price="47480" currency="KRW" class="u-price"><span><span class="u-txt u-txt-warn u-price_num">47,480</span><span class="u-txt u-txt-warn u-price_currency">원</span></span></div></span></div></li><li class="priceItem summary"><span class="priceLable"><h4>총 금액</h4></span><span class="priceCell"><h4>예상 환산금액</h4><div class="u-price" price="273526" currency="KRW"><span><span class="u-txt u-txt-warn u-price_num">273,526</span><span class="u-txt u-txt-warn u-price_currency">원</span></span></div></span></li></ul></div></div>'+
			
			'<div class="info">'+
			'	<h4>환불 불가</h4>'+
			'	<p>예약이 확정되면 취소/변경이 불가능합니다.체크인하지 않을 경우 노쇼(No-show)로 간주되며, 예약 총 금액(000,000원)이 부과됩니다.</p>'+
			'	<h4>결제방법</h4>'+
			'	<p>객실 확보를 위해 신용카드가 사전승인되거나, 객실 요금과 동일한 요금이 결제됩니다. 예약가능한 객실이 없는 경우에는 전액 환불됩니다.</p>'+
			'</div>'+
			'		</div>'+
			'		<div class="main">'+
			'		<div id="main1">'+
			'			<div id="title"><h2>1단계: 예약자 정보</h2></div>'+
			'			<p>이 객실의 숙박객 중 한 명의 이름을 입력해 주세요.</p>'+
			'			<h5>호텔 체크인 시 제시할 신분증에 나와 있는 대로 숙박객 이름을 입력해 주세요. 성을 2개 이상 사용하실 경우 모두 입력해 주세요.</h5>'+
			'			성 :  <input type="text" placeholder="영문으로 입력해주세요." size="50" style="font-size: larger";> </br>'+
			'			이름 : <input type="text" placeholder="영문으로 입력해주세요." size="50" style="font-size: larger";></br>'+
			'			<p>*특별 요청 사항(예: 간이 침대, 늦은 체크인)을 자세히 포함해 주세요. 요청하신 사항을 호텔이 제공할 수 있는지 확인 후 24시간 이내에 고객님께 메일로 알려드립니다. 24시간이 지나도록 메일을 받지 못하시면 호텔에 직접 문의하거나 호텔에서 다른 대안을 마련할 수 있도록 연락해 주세요. 특별 요청은 항상 보장되지는 않으며, 추가 요금이 발생할 수 있습니다.</p>'+
			'			<textarea id="room-details-room-0-special-request" name="pls" maxlength="500" size="100" data-error-title="특별 요청" style="margin: 0px; width: 1028px; height: 96px;"></textarea>'+
			'		</div>'+
			'		<div id="main2">'+
			'			<div id="title"><h2>2단계: 결제 세부 정보</h2></div>'+
			'			<p>영문으로만 입력해 주세요.*</p>'+
			'			성 : <input type="text" placeholder="영문으로 입력해주세요." size="50"> </br>'+
			'			이름 : <input type="text" placeholder="영문으로 입력해주세요." size="50"></br>'+
			'			<p>카드 종류*</p>'+
			'			<select id="payment-details-card-type-selector" name="payments.submittedPayments[0].paymentIdentifier" data-error-title="카드 종류" autocomplete="cc-type"><option value="">카드 종류</option><option value="CreditCard:AmericanExpress:AmericanExpress">American Express</option><option value="CreditCard:DinersClub:BC Card">BC Card</option><option value="CreditCard:DinersClub:Diners Club International">Diners Club International</option><option value="CreditCard:JCB:JCB">JCB</option><option value="CreditCard:MasterCard:MasterCard">Mastercard</option><option value="CreditCard:Visa:Visa">Visa</option></select>'+
			'			<p>카드 번호*</p>'+
			'			<input type="tel" id="payment-details-card-number" name="payments.submittedPayments[0].cardNumber" value="" autocomplete="cc-number" data-error-title="카드 번호" maxlength="23" placeholder="0000 0000 0000 0000">'+
			'			<p>만료 일자*</p>'+
			'			<span class="field-container di-ib mt-bee" data-for="expiry-month"><label for="expiry-month" class="fw-bold mb-tiny offscreen"><span class="c-hds-brand-1 fs-base fw-normal va-t">*</span></label><input type="tel" id="expiry-month" name="payments.submittedPayments[0].expiryMonth" value="" autocomplete="cc-exp-month" data-error-title="만료 월" maxlength="2" placeholder="월"></span><strong class="ph-tiny fs-med c-dark">  /  </strong><span class="field-container di-ib mt-bee" data-for="expiry-year"><label for="expiry-year" class="fw-bold mb-tiny offscreen"><span class="c-hds-brand-1 fs-base fw-normal va-t">*</span></label><input type="tel" id="expiry-year" name="payments.submittedPayments[0].expiryYear" value="" autocomplete="cc-exp-year" data-error-title="만료 연도" maxlength="2" placeholder="연도"></span>'+
			'			<p>보안 코드*</p>'+
			'			<input type="tel" id="payment-details-cvv" name="payments.submittedPayments[0].securityCode" value="" autocomplete="cc-csc" data-error-title="보안 코드" maxlength="4" placeholder="000">'+
			'		</div>'+
			'		<div id="main3">'+
			'			<div id="title"><h2>3단계: 취소 정책</h2></div>'+
			'			<p>디럭스 더블룸</p>'+
			'			<div class="widget-toggle cancellation-policy-penalty mb-base widget-toggle-done widget-toggle-open"><p class="widget-toggle-btn  widget-toggle-btn-icon widget-toggle-btn-open" type="button" aria-controls="widget-toggle-i1-e3" aria-expanded="true">*무료 취소 기한: 2020/01/01*</p><div class="widget-toggle-bd" data-widget-toggle-text="무료 취소 기한: 2020/01/01" data-widget-toggle-speed="normal" id="widget-toggle-i1-e3" aria-hidden="false" style="display: block;"><ul class="bullets mb-small"><li>2020/01/01, 오후 6:00(한국 표준시) 이후에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul><p class="mb-small cancellation-alternate">노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.</p></div></div>'+
			'			<h3>예약 약관</h3>'+
			'			<p>“예약” 버튼을 클릭하면 이용약관 및 개인정보 보호정책 을 읽었고 이에 동의하시는 것으로 간주됩니다.</p>'+
			'			<div class="field-container" data-for="agree-with-terms"><label class="option-label"><input type="checkbox" value="true" id="agree-with-terms" name="termsFormField.agreeToTerms" data-error-title="동의함"><span class="option-label-text">동의함</span><span class="c-hds-brand-1 fs-base fw-normal va-t">*</span></label><span class="state-indicator validation-state-indicator" data-for="agree-with-terms"></span></div>'+
			'			<div style="float: right" class="booking-details-travel-details-wrapper fs-base clear top-separator travel-details-bottom"><table class="travel-details w-full mt-mouse "><tbody><tr><td class="col-description va-t pv-tiny">체크인</td><td class="col-value va-t ta-r pv-tiny travel-dates-check-in fw-bold">목, 01/02, 2020</td></tr><tr><td class="col-description va-t pv-tiny">체크아웃</td><td class="col-value va-t ta-r pv-tiny travel-dates-check-out fw-bold">금, 01/03, 2020</td></tr><tr class="merged "><td colspan="2" class="col-merged va-t pv-tiny"><span class="booking-details-nights-to-stay fl-r mb-bee pv-bee ph-spider br-spider bs-solid bw-ant bdc-discount">1 박, 객실 1 개</span></td></tr></tbody></table></div> </br></br></br></br></br>'+
			'			<button type="submit" class="cta" id="book" title="구매를 완료하려면 클릭하세요." aria-controls="book-button-tooltip-container" tabindex="0" style="">예약</button>'+
			'		</div>'+
			'		</div>'+
			
			'</div>'+
			'</body>'
		}
}