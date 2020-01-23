var createhost_vue=createhost_vue||{}
createhost_vue ={
	createhost_body:()=>{
		return `<div id="host-container">
      <div id="host-header">
        <h1 align = "center">업체등록</h1>
        <select name="change" id="changehost" style="float: right;width: 10%;">
          <option value="선택">선택</option>
          <option value="등록된업체">등록된업체</option>
        </select>
      </div>
      <div id="host-content">
        <h2>업체소개등록</h2>
        <textarea name="info" id="hostinfo" placeholder="업체 소개를 입력해 주세요" cols="30" rows="10" style="width: 100%;"></textarea>
        <br/><br/>
      </div>
      <div id="host-sidebar">
        <div style="border: 2px solid #bcbcbc; float: left; width: 100%; height:100%">
		<a href="#" style="text-align: center;"><h1>이미지변경</h1></a></div>
      </div>
      <div id="host-footer">
        <div style="margin-top: 1%; height: 31.5%;border: 1px groove #bcbcbc;">
              <span><h3>담당자 등록</h3><br/>
                <input type="text" name="pwd" size="20" placeholder="담당자 입력" style="float: none;width: 78%;"></span>
         </div>
        
          <div style="margin-top: 1%; height: 31.5%;border: 1px groove #bcbcbc;">
              <h3>연락처 등록</h3><br/>
              <div>
                    <select id="mPhone1" name="mPhone1">
                        <option value="02" selected>02</option>
                        <option value="031">031</option>
                        <option value="032">032</option>
                        <option value="직접입력">직접입력</option>
                    </select>
                    <input id="mPhone1" name="mPhone1" list="domains" style="float: none;width: 5%;">-
                    <input type="number" value="" size="4" maxlength="4" autocomplete="off" style="float: none;width: 15%;">-
                    <input type="number" value="" size="4" maxlength="4" autocomplete="off" style="float: none;width: 15%;">
                </div>
           </div>
           <div style="margin-top: 1%; height: 31.5%;border: 1px groove #bcbcbc;">
              <h3>e-mail 등록</h3><br/>
              <div><input type="text" id="email01" name="email01" size="20" maxlength="20" value=""
                        autocomplete="off"><span>@</span>
                    <input id="email02" name="email02" list="domains" placeholder="도메인입력/선택">
                    <select id="domains" style="height: 21.5px;vertical-align: middle;">
                        <option value="직접입력">직접입력</option>
                        <option value="naver.com">naver.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="yahoo.co.kr">yahoo.co.kr</option>
                    </select>
                </div>
           </div>
           <div style="margin-top: 1%; height: 31.5%;border: 1px groove #bcbcbc;">
              <span><h3>업체주소 등록</h3><br/>
                <input type="text" name="pwd" size="20" placeholder="시/도 입력 " autocomplete="address-level1">
                <input type="text" name="pwd" size="20" placeholder="시/군/구 입력" autocomplete="address-level2">
                <input type="text" name="pwd" size="20" placeholder="상세주소 입력" autocomplete="address-line1"
                    style="float: none;width: 40%;"></span>
           </div>
           <div style="margin-top: 1%; height: 31.5%;border: 1px groove #bcbcbc;">
              <span><h3>사업자등록번호 등록</h3><br/>
                <input type="text" name="pwd" size="20" placeholder="사업자등록번호 입력" style="float: none;width: 78%;"></span>
           </div>
           <button id="listgo_btn" style="width: 10%; float: right;">등록</button><br/><br/>
      </div>
    </div>`
	}
}