var findinfo_vue = findinfo_vue || {}
findinfo_vue = {
  findinfo_id: () => {
    return `<div id="host-container">
    <div>
    <form name="post">
    <div id="host-header">
				<h1 align="center">아이디찾기</h1>
			</div>
      <p><a href="/">홈으로</a></p>
<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">이름</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>        
      <div class="form-group row">
					<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
					<input type="hidden" class="form-control" name="hosttel" value="">
					<div class="col-sm-6 input-group" id="phoneIpt">
						<input type="text" class="form-control" id="userPhone1" value="">
						<span class="input-group-addon">-</span>
						<input type="text" class="form-control" id="userPhone2" value="">
						<span class="input-group-addon">-</span>
						<input type="text" class="form-control" id="userPhone3" value="">
					</div>
				</div>
      <div style="text-align: center">
          <input id="findid_btn" type="submit" value="아이디 찾기" />
          </div>
    </form>
  </div>
</div></div>`
  },
  findinfo_pwd: () => {
    return `<div id="host-container">
    <div>
    <form name="post">
    <div id="host-header">
				<h1 align="center">아이디찾기</h1>
			</div>
      <p><a href="/">홈으로</a></p>
<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">아이디</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>        
      <div class="form-group row">
					<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
					<input type="hidden" class="form-control" name="hosttel" value="">
					<div class="col-sm-6 input-group" id="phoneIpt">
						<input type="text" class="form-control" id="userPhone1" value="">
						<span class="input-group-addon">-</span>
						<input type="text" class="form-control" id="userPhone2" value="">
						<span class="input-group-addon">-</span>
						<input type="text" class="form-control" id="userPhone3" value="">
					</div>
				</div>
      <div style="text-align: center">
          <input id="findid_btn" type="submit" value="아이디 찾기" />
          </div>
    </form>
  </div>
</div></div>`
  }

}