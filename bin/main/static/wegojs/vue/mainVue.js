var mainVue = mainVue || {}
mainVue = {
	main_body: x => {
		return '<div id="mainbody"><body>'+
 '   <!-- banner part start-->'+
'    <section class="banner_part">'+
'        <div class="container">'+
'            <div class="row align-items-center justify-content-center">'+
'                <div class="col-lg-10">'+
'                    <div class="banner_text text-center">'+
'                        <div class="banner_text_iner">'+
'                            <h1> WeGo</h1>'+
'                            <a href="#" class="btn_1">Discover Now</a>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </section>'+
'    <!-- banner part start-->'+
 '   <!-- booking part start-->'+
'    <section class="booking_part">'+
'<section class="best_services section_padding">'+
'        <div class="container">'+
'<div class="section_tittle text-center">'+
 '                       <h2>Best Hotel and Play</h2>'+
  '                  </div>'+
'            <div class="row">'+
'<div class="col-lg-6 col-md-6">'+
'                    <div class="single_place">'+
'                        <img alt="" src="'+x.img+'/hotel1.jpg">'+
'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
'                            <div class="hover_text_iner">'+
'                                <a class="place_btn" href="#">travel</a>'+
'                                <h3>Hotel</h3>'+
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
'<div class="col-lg-6 col-md-6">'+
'                    <div class="single_place">'+
'                        <img alt="" src="'+x.img+'/play1.jpg">'+
'                        <div class="hover_Text d-flex align-items-end justify-content-between">'+
'                            <div class="hover_text_iner">'+
'                                <a class="place_btn" href="#">travel</a>'+
'                                <h3>Play</h3>'+
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
'    </section>'+
'    <!-- Header part end-->'+
 '   <!--top place start-->'+
'            </div>'+
'        </div>'+
'    </section>'+
'    <!--top place end-->'+
 '   <!--top place start-->'+
'    <!--top place end-->'+
 '   <!--::industries start::-->'+
'    <!--::industries end::-->'+
 '   <!--top place start-->'+
'    <!--top place end-->'+
'   <!--::industries start::-->'+
'</body></div>'
	},
	main_navi: x => {
		return	'  <header class="main_menu">'+
'        <div class="main_menu_iner">'+
'            <div class="container">'+
'                <div class="row align-items-center ">'+
'                    <div class="col-lg-12">'+
'                        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">'+
'                            <a class="navbar-brand" href=""> <img src="'+x.img+'/wego.png" alt="logo"> </a>'+
'                            <button class="navbar-toggler" type="button" data-toggle="collapse"'+
'                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"'+
'                                aria-expanded="false" aria-label="Toggle navigation">'+
'                                <span class="navbar-toggler-icon"></span>'+
'                            </button>'+
'                          <div class="collapse navbar-collapse main-menu-item justify-content-center"'+
'                                id="navbarSupportedContent">'+
'                                <ul class="navbar-nav">'+
'                                    <li  class="nav-item">'+
'                                        <a id="hotel_go" class="nav-link" href="#" style=" font-size: 26px;">HOTEL</a>'+
'                                    </li>'+
'                                    <li  class="nav-item">'+
'                                        <a id="tourismgo" class="nav-link" href="#" style=" font-size: 26px;">TOURISM</a>'+
'                                    </li>'+
// '                                  /*   <li id="trafficgo" class="nav-item">'+
// '                                        <a  id="trafficgo" class="nav-link" href="#" style=" font-size: 26px;">TRAFFIC</a>'+
// '                                    </li>'+ */
'                                    <li class="nav-item">'+
'                                        <a   id="reviewgo" class="nav-link" href="#" style=" font-size: 26px;">gostargram</a>'+
'                                    </li>'+
// '                                    <li class="nav-item dropdown">'+
// '                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"'+
// '                                            role="button" data-toggle="dropdown" aria-haspopup="true"'+
// '                                            aria-expanded="false">'+
// '                                            REVIEW'+
// '                                        </a>'+
// '                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
// '                                            <a class="dropdown-item" href="blog.html">리뷰</a>'+
// '                                            <a class="dropdown-item" href="single-blog.html">A</a>'+
// '                                        </div>'+
// '                                    </li>'+
// '                                    <li class="nav-item dropdown">'+
// '                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"'+
// '                                            role="button" data-toggle="dropdown" aria-haspopup="true"'+
// '                                            aria-expanded="false">'+
// '                                            TEAM'+
// '                                        </a>'+
// '                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown_1">'+
// '                                            <a class="dropdown-item" href="top_place.html">top place</a>'+
// '                                            <a class="dropdown-item" href="tour_details.html">tour details</a>'+
// '                                            <a class="dropdown-item" href="elements.html">Elements</a>'+
// '                                        </div>'+
// '                                    </li>'+ 
'                                    <li  class="nav-item">'+
'                                        <a id="mypage_btn" class="nav-link" href="#" style=" font-size: 26px;">MYPAGE</a>'+
'                                    </li>'+
'                                </ul>'+
'                            </div>'+
'                            <a id="login_btn" href="#"  class="btn_1 d-none d-lg-block" style="margin-left:10%; border-radius:3px;">Login</a>'+
'                            <a id="join_btn" href="#" class="btn_1 d-none d-lg-block" style="margin-left:1%; border-radius:3px;">Join</a>'+
'                        </nav>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </header>'
	},
	main_footer: () => {
		return '<footer class="footer-area">'+
'        <div class="container">'+
'            <div class="row justify-content-between">'+
'                <div class="col-sm-6 col-md-5">'+
'                    <div class="single-footer-widget">'+
'                        <h4>WEGO</h4>'+
'                        <ul>'+
'                            <li><a id ="introduce" href="#">wego 소개</a></li>'+
'                            <li><a id="crewid" href="#">CREW</a></li>'+
'                            <li><a href="#">London, UK</a></li>'+
'                            <li><a href="#">Saintmartine, Bangladesh</a></li>'+
'                        </ul>'+
 '                   </div>'+
'                </div>'+
'                <div class="col-sm-6 col-md-4">'+
'                    <div class="single-footer-widget">'+
'                        <h4>Subscribe Newsletter</h4>'+
'                        <div class="form-wrap" id="mc_embed_signup">'+
'                            <form class="form-inline" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" target="_blank" novalidate="true">'+
'                                <input name="EMAIL" class="form-control" required="" onfocus="this.placeholder = " this.placeholder = Your Email Address " type="email" placeholder="Your Email Address">'+
'                                <button class="click-btn btn btn-default text-uppercase"> <i class="far fa-paper-plane"></i>'+
'                                </button>'+
'                                <div style="position: absolute; left: -5000px;">'+
'                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" type="text" value="">'+
'                                </div>'+
'                              <div class="info"></div>'+
'                            </form>'+
'                        </div>'+
'                        <p>Subscribe our newsletter to get update news and offers</p>'+
'                    </div>'+
'                </div>'+
'                <div class="col-sm-6 col-md-3">'+
'                    <div class="single-footer-widget footer_icon">'+
'                        <h4>Contact Us</h4>'+
'                        <p>4156, New garden, New York, USA'+
'                                +880 362 352 783</p>'+
'                        <span>contact@martine.com</span>'+
'                        <div class="social-icons">'+
'                            <a href="#"><i class="ti-facebook"></i></a>'+
'                            <a href="#"><i class="ti-twitter-alt"></i></a>'+
'                            <a href="#"><i class="ti-pinterest"></i></a>'+
'                            <a href="#"><i class="ti-instagram"></i></a>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'        <div class="container-fluid">'+
'            <div class="row justify-content-center">'+
'                <div class="col-lg-12">'+
'                    <div class="copyright_part_text text-center">'+
'                        <p class="footer-text m-0">'+
'Copyright ©2020 All rights reserved | This is a training project.<i class="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">WeGo</a>'+
'</p>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </footer>'
	},

}