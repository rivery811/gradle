var hostjoin_vue = hostjoin_vue || {}
hostjoin_vue = {
	hostjoin_body:()=>{
		return `<div id="host-container">
	<div style="solid black;">
		<div>
			<div id="host-header">
				<h1 align="center">업체 회원 가입</h1>
			</div>
			<form name="registerform">

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">아이디입력</label>
					<div class="col-sm-5">
						<input id="hid" type="text" class="form-control" name="hostid" 
						minlength="4" maxlength="10" autocomplete="off"
							value="" placeholder="4~10자리를 입력해 주세요" required="4">
						<input type="text" class="form-control" id="dupl_check"  value="" readonly="readonly">
					</div>
				</div>

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">패스워드입력</label>
					<div class="col-sm-5">
						<input id="pwd" type="password" class="form-control" name="userpwd" autocomplete="off"
						placeholder="6이상 20이하 글자를 입력해주세요" minlength="6" maxlength="20" value="" required>
					</div>
					<div class="col-sm-5">
						<input type="password" class="form-control" name="userpwd" maxlength="20" autocomplete="off"
							value="" required="">
					</div>
				</div>


				<div class="form-group row">
					<label for="hostName" class="col-sm-2 form-control-label">이름입력</label>
					<div class="col-sm-5">
						<input id="hname" type="text" class="form-control" name="hostName" maxlength="20" autocomplete="off"
							value="" required="">
					</div>
				</div>
				
				<div class="form-group row">
					<label for="ceoName" class="col-sm-2 form-control-label">CEO이름입력</label>
					<div class="col-sm-5">
						<input id="ceoname" type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="" required="">
					</div>
				</div>


				<div class="form-group row">
					<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
					<input type="hidden" class="form-control" name="hosttel" value="">
					<div class="col-sm-6 input-group" id="phoneIpt">
						<input id="tel1" type="text" class="form-control"  value="" maxlength="4" name="hostPhone1" required="">
						<span class="input-group-addon">-</span>
						<input id="tel2" type="text" class="form-control" value="" maxlength="4" name="hostPhone2" required="">
						<span class="input-group-addon">-</span>
						<input id="tel3" type="text" class="form-control"  value="" maxlength="4" name="hostPhone3" required="">
					</div>
				</div>


				<div class="form-group row">
					<label id="addr" for="managerTitle" class="col-sm-2 form-control-label">업체주소</label>
					<div class="col-sm-6">
						<input type="text" id="sample6_postcode" placeholder="우편번호" required="">
						<input type="button" id="addr_btn" value="우편번호 찾기" required="">
						<div>
						<input type="text" id="sample6_address" placeholder="주소" required=""><br>
						<input type="text" id="sample6_detailAddress" placeholder="상세주소" style="float: none;width: 78%;" required="">
						</div>
					</div>
				</div>


				<div class="form-group row">
					<label for="licensenum" class="col-sm-2 form-control-label">사업자등록번호</label>
					<div class="col-sm-5">
						<input id="licensenum" type="text" class="form-control" name="licensenum" maxlength="20" autocomplete="off"
							value="" required="">
					</div>
				</div>

				<div class="form-group row">
					<label id="companytype" for="userName" class="col-sm-2 form-control-label">업체종류 선택</label>
					<div class="col-sm-5">
						<input id="companytype1" type="radio" name="hosttype" value="숙박" alt="업체종류">숙박
						<input id="companytype2" type="radio" name="hosttype" value="음식점" alt="업체종류">음식점
						<input id="companytype3" type="radio" name="hosttype" value="교통" alt="업체종류">교통
						<input id="companytype4" type="radio" name="hosttype" value="기타" alt="업체종류">기타
						<input id="companytype5" type="text" placeholder="직접입력">
					</div>
				</div>

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">업체소개등록</label>
					<div class="col-sm-5">
						<textarea name="info" id="hostinfo" placeholder="간단한 업체 소개를 입력해 주세요" cols="30" rows="10"
							style="width: 95%;" maxlength="200" required=""></textarea><br />
					</div>
				</div>

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">업체사진등록</label>
					<div class="col-sm-5">
					<input id="fileup" style=" width:95%; height:100px; class="form-control" placeholder="사진을 드래그해서 올려주세요">          
					<div id="thumbnails"style="border: 1px solid #d4d4d4; width:95%; height:100px; padding:3px;writing-mode: vertical-lr;">
					</div>
					</div>
				</div>

				<div class="btnfield" style="text-align: center">
					<input id="hostjoin_btn" type="submit" value="회원가입">
				</div>
			</form>
		</div>
	</div>
</div>`
	}
}