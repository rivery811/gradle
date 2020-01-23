var listhost_vue = listhost_vue || {}
listhost_vue={
	listhost_body:()=>{
		return `<div>
	<form name="listhost_form">
	<div>
		<fieldset >
			<legend>내업체 보기</legend>
			<select name="hostlist" id="host" style="height: 21.5px;vertical-align: middle;">
				<option value="LargeDog">선택</option>
				<option value="LargeDog">업체1</option>
				<option value="SmallDog">업체2</option>
				<option value="cat">업체3</option>
				<option value="other">직접검색</option>
				<input type="text" placeholder="직접입력" style="float: none;width: 75%;">
				<button id="createhost_btn" style="width: 10%; float: right;">등록</button><br /><br />
			</select>
			<div>
				등록업체1
			</div>
			<div>
				등록업체2
			</div>
			<div>
				등록업체3
			</div>
		</fieldset>
		<fieldset >
            <legend>
              <h3>예약자명단</h3>
            </legend>
            <span class="container">
              <label class="col-lg-1 form-control-label">검색 </label>
              <select name="u.searchOption" class="col-lg-2 form-control">
                <option value="userName">이름</option>
                <option value="email">이메일</option>
                <option value="phone">전화번호</option>
              </select>
              <span class="col-lg-9 input-group">
                <input type="text" class="form-control" placeholder="" id="title" name="u.title" value="">
                <span class="input-group-btn">
                  <button type="submit" id="searchBtn" class="btn btn-primary">조회</button>
                </span>
              </span>
            </span>
          </fieldset>
          
          <div>
              <h3>매출현황</h3>
          <div id="chart_div" style="width: 100%; height: 500px;"></div>
          </div> >
		</div>
	</form>
</div>`
	}
}