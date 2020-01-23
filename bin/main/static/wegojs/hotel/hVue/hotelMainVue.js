var hotelMainVue = hotelMainVue || {}
hotelMainVue = {
		hmain_body: x=>{
			return '<body>'+			
			'    <!-- breadcrumb start-->'+
			'    <section class="breadcrumb breadcrumb_bg">'+
			'        <div class="container">'+
			'            <div class="row">'+
			'                <div class="col-lg-12">'+
			'                    <div class="breadcrumb_iner">'+
			'                        <div class="breadcrumb_iner_item text-center">'+
			'                            <h2>Top Places</h2>'+
			'                            <p>home . Top Places</p>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'            </div>'+
			'        </div>'+
			'    </section>'+
			'    <!-- breadcrumb start-->'+
			'<div class="container">'+
			'		<div class="header">'+
			'			<select name="select" id="select" >'+
			'				<option value="option1">서울</option>'+
			'				<option value="option2">경기</option>'+
			'				<option value="option3">대구</option>'+
			'				<option value="option4">부산</option>'+
			'			</select>'+
			'			<input class="form-control mr-sm-2" type="text" placeholder="어디로 떠날까요?" aria-label="Search" size="62">'+
			'		<div class="calendar-container"><span class="time-tab"><label class="in">체크인</label><input type="text" class="focus-input show-hightlight" readonly="" value="12월 8일 (일)" data-key="2019/12/08"></span><span class="nights"><span>   <1박>   </span></span><span class="time-tab"><label class="out">체크아웃</label><input type="text" class="focus-input show-hightlight out-time" readonly="" value="12월 9일 (월)" data-key="2019/12/09"><button class="btn" type="submit" style="height:100%">검색</button></span></div>'+
			'    <!-- hotel list css start-->'+
			'    <section class="top_place section_padding">'+
			'        <div class="container">'+
			
/*			'            <div class="row justify-content-center">'+
			'                <div class="col-xl-6">'+
			'                    <div class="section_tittle text-center">'+
			'                        <h2>Top Places to visit</h2>'+
			'                        <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>'+
			'                    </div>'+
			'                </div>'+
			'            </div>'+*/
			'            <div class="row">'+
			'                <div class="col-lg-6 col-md-6">'+
			'                    <div class="single_place">'+
			'                        <img src="/web/resources/img/single_place_1.png" alt="">'+
			'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
			'                            <div class="hover_text_iner">'+
			'                                <a id="hotelDetail" href="#" class="place_btn">travel</a>'+
			'                                <h3>Saintmartine Iceland</h3>'+
			'                                <p>Technaf, Bangladesh</p>'+
			'                                <div class="place_review">'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <span>(210 review)</span>'+
			'                                </div>'+
			'                            </div>'+
			'                            <div class="details_icon text-right">'+
			'                                <i class="ti-share"></i>'+
			'                            </div>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'                <div class="col-lg-6 col-md-6">'+
			'                    <div class="single_place">'+
			'                        <a id="hotel_detail" href="#"><img src="/web/resources/img/single_place_2.png" alt=""></a>'+
			'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
			'                            <div class="hover_text_iner">'+
			'                                <a id="hotelDetail" href="#" class="place_btn">travel</a>'+
			'                                <h3>Saintmartine Iceland</h3>'+
			'                                <p>Technaf, Bangladesh</p>'+
			'                                <div class="place_review">'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <span>(210 review)</span>'+
			'                                </div>'+
			'                            </div>'+
			'                            <div class="details_icon text-right">'+
			'                                <i class="ti-share"></i>'+
			'                            </div>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'                <div class="col-lg-6 col-md-6">'+
			'                    <div class="single_place">'+
			'                        <img src="/web/resources/img/single_place_3.png" alt="">'+
			'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
			'                            <div class="hover_text_iner">'+
			'                                <a href="#" class="place_btn">travel</a>'+
			'                                <h3>Saintmartine Iceland</h3>'+
			'                                <p>Technaf, Bangladesh</p>'+
			'                                <div class="place_review">'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <span>(210 review)</span>'+
			'                                </div>'+
			'                            </div>'+
			'                            <div class="details_icon text-right">'+
			'                                <i class="ti-share"></i>'+
			'                            </div>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'                <div class="col-lg-6 col-md-6">'+
			'                    <div class="single_place">'+
			'                        <img src="/web/resources/img/single_place_4.png" alt="">'+
			'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
			'                            <div class="hover_text_iner">'+
			'                                <a href="#" class="place_btn">travel</a>'+
			'                                <h3>Saintmartine Iceland</h3>'+
			'                                <p>Technaf, Bangladesh</p>'+
			'                                <div class="place_review">'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <span>(210 review)</span>'+
			'                                </div>'+
			'                            </div>'+
			'                            <div class="details_icon text-right">'+
			'                                <i class="ti-share"></i>'+
			'                            </div>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'                <div class="col-lg-6 col-md-6">'+
			'                    <div class="single_place">'+
			'                        <img src="/web/resources/img/single_place_1.png" alt="">'+
			'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
			'                            <div class="hover_text_iner">'+
			'                                <a href="#" class="place_btn">travel</a>'+
			'                                <h3>Saintmartine Iceland</h3>'+
			'                                <p>Technaf, Bangladesh</p>'+
			'                                <div class="place_review">'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <span>(210 review)</span>'+
			'                                </div>'+
			'                            </div>'+
			'                            <div class="details_icon text-right">'+
			'                                <i class="ti-share"></i>'+
			'                            </div>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'                <div class="col-lg-6 col-md-6">'+
			'                    <div class="single_place">'+
			'                        <img src="/web/resources/img/single_place_2.png" alt="">'+
			'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
			'                            <div class="hover_text_iner">'+
			'                                <a href="#" class="place_btn">travel</a>'+
			'                                <h3>Saintmartine Iceland</h3>'+
			'                                <p>Technaf, Bangladesh</p>'+
			'                                <div class="place_review">'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <span>(210 review)</span>'+
			'                                </div>'+
			'                            </div>'+
			'                            <div class="details_icon text-right">'+
			'                                <i class="ti-share"></i>'+
			'                            </div>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'                <div class="col-lg-6 col-md-6">'+
			'                    <div class="single_place">'+
			'                        <img src="/web/resources/img/single_place_3.png" alt="">'+
			'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
			'                            <div class="hover_text_iner">'+
			'                                <a href="#" class="place_btn">travel</a>'+
			'                                <h3>Saintmartine Iceland</h3>'+
			'                                <p>Technaf, Bangladesh</p>'+
			'                                <div class="place_review">'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <span>(210 review)</span>'+
			'                                </div>'+
			'                            </div>'+
			'                            <div class="details_icon text-right">'+
			'                                <i class="ti-share"></i>'+
			'                            </div>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'                <div class="col-lg-6 col-md-6">'+
			'                    <div class="single_place">'+
			'                        <img src="/web/resources/img/single_place_4.png" alt="">'+
			'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
			'                            <div class="hover_text_iner">'+
			'                                <a href="#" class="place_btn">travel</a>'+
			'                                <h3>Saintmartine Iceland</h3>'+
			'                                <p>Technaf, Bangladesh</p>'+
			'                                <div class="place_review">'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <a href="#"><i class="fas fa-star"></i></a>'+
			'                                    <span>(210 review)</span>'+
			'                                </div>'+
			'                            </div>'+
			'                            <div class="details_icon text-right">'+
			'                                <i class="ti-share"></i>'+
			'                            </div>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'            </div>'+
			'        </div>'+
			'    </section>'+
			'    <!-- hotel list css end -->'+

			
			'</body>'
		}
}