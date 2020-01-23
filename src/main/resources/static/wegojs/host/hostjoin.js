"use strict"
var hostjoin = hostjoin ||{}
hostjoin=(()=>{
	const WHEN_ERR = '호출하는 host joinchoice 페이지가 없음'
	let context, js;
	let mainVuejs;
	let hostjoinvuejs
	let mainHomejs
	let loginjs,joinchoicejs
	let init = () => {
        context = $.ctx()
		js = $.js()
		hostjoinvuejs = js + '/hostvue/hostjoin_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		loginjs =js+'/withcs/login.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(hostjoinvuejs),
			$.getScript(mainHomejs),
			$.getScript(loginjs)
		).done(()=>{
			setContentView()
			gohostjoin()
			addr()
			
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(hostjoin_vue.hostjoin_body())
		fileupload()
	}

	
	let gohostjoin=()=>{
		$('#hid').keyup(() => {
			if ($('#hid').val().length > 3) {
				$.ajax({
					url: context + '/host/' + $('#hid').val() + '/existId',
					contentType: 'application/json',
					success: d => { 
						if (d.msg === 'SUCCESS') {
							$('#dupl_check')
								.val('사용가능한 아이디입니다.')
								.css('color', 'blue')
						} else {
							$('#dupl_check')
								.val('중복된 아이디  입니다')
								.css('color', 'red')
						}
					}
				})
			}
		})
		
		$('#hostjoin_btn').click(e=>{
			e.preventDefault() 
		let data = {hid:$(`#hid`).val(),pwd:$(`#pwd`).val(),hname:$(`#hname`).val(),ceoname:$(`#ceoname`).val()
					,companytype:($(`input[name="hosttype"]:checked`).val()+$(`#companytype5`).val()),
					tel:($(`#tel1`).val()+$(`#tel2`).val()+$(`#tel3`).val())
					,addr:($(`#sample6_address`).val()+$(`#sample6_detailAddress`).val())
					,licensenum:$(`#licensenum`).val(),hostinfo:$(`#hostinfo`).val()}
		
			$.ajax({
	    	url : context+'/host/',
	    	type : 'POST',
	    	dataType : 'json',
	    	data : JSON.stringify(data),
	    	contentType : 'application/json',
	    	success : d => {
	    			if(d.msg === 'SUCCESS'){
	    				login.onCreate()
	    			}else
	    				alert('회원가입 실패')
	    	},
	    	error : e => {
	    		alert('AJAX 실패');
	    	}
		})
		
			})
	}

	let fileupload=()=>{
		$(window).unbind('scroll');
		var uploadFiles = [];
		$("#fileup").on('dragenter', function(e) { //드래그 요소가 들어왔을떄
			$(this).addClass('drag-over');
		}).on('dragleave', function(e) { //드래그 요소가 나갔을때
			$(this).removeClass('drag-over');
		}).on('dragover', function(e) {
			e.stopPropagation();
			e.preventDefault();
		}).on('drop', function(e) { //드래그한 항목을 떨어뜨렸을때
			e.preventDefault();
			$(this).removeClass('drag-over');
			var files = e.originalEvent.dataTransfer.files; //드래그&드랍 항목
			for(var i = 0; i < files.length; i++) {
			var file = files[i];
			var size = uploadFiles.push(file); //업로드 목록에 추가
				preview(file, size - 1); //미리보기 만들기
			}

			$('#hostjoin_btn').click(e=>{
			e.preventDefault();
			let json = {
  				title : $('#form_write input[name="title"]').val(),
				content : $('#form_write textarea[name="content"]').val()
			}
			$.ajax({
				url:context+'/host/',
				type:'POST',
				data:JSON.stringify(json),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
				let formData = new FormData()
				formData.append('uploadFile',file)
				$.ajax({
					url: context+'/host/fileupload',
					data : formData,
					type : 'POST',
					contentType : false,
					processData: false,
					success : d=> {
					}
				})
					login.onCreate()
				},
				error:e=>{
					alert(' 회원가입 실패')
				}
			})
		})

		function preview(file, idx) {
			var reader = new FileReader();
			reader.onload = (function(f, idx) {
			return function(e) {
			var div = `<div class="thumb" style="width:100px; height:80px"> <div class="close" data-idx=${idx}>X</div> 
				<img src=${e.target.result} style="width:50px; height:50px" /> </div>`;
			$(div).appendTo('#thumbnails')
			};
			})(file, idx);
			reader.readAsDataURL(file);
		}
	
	});
		$("#thumbnails").on("click", ".close", function(e) {
		var $target = $(e.target);
		var idx = $target.attr('data-idx');
		uploadFiles[idx].upload = 'disable'; //삭제된 항목은 업로드하지 않기 위해 플래그 생성
		$target.parent().remove(); //프리뷰 삭제
		});


	}

	let addr=()=>{
		$(`#addr_btn`).click(()=>{
			new daum.Postcode({
            oncomplete: function(data) {
                var addr = ''; 
                var extraAddr = '';
                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }
                if(data.userSelectedType === 'R'){
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                document.getElementById("sample6_detailAddress").focus();
            }
        }).open();
		})

	}
	return{onCreate}
})()
