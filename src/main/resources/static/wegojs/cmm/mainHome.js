"use strict";
var mainHome = mainHome || {};
mainHome = (() => {
    const WHEN_ERR = '호출하는 mainHome js를 찾을 수 없습니다 .'
    let context, js;
    let routerjs,mainVuejs; //메인
    let crewjs,introjs; //crew
    let tourizmjs; // tourizm
    let reviewjs; // review
    let loginjs,mypagejs,joinchoicejs;
    let hotelMainVuejs, hotelHomejs,hotelDetailjs;

    let init = () => {
        context = ''
        js ='/wegojs'
        routerjs = js + '/cmm/router.js'
      	mainVuejs = js +'/vue/mainVue.js'
        crewjs = js +'/crew/js/crew.js'
        introjs=js+'/crew/js/intro.js'
        tourizmjs =js+'/tourizm/tourizm.js'
        reviewjs = js +'/review/reviewjs/review.js'
        loginjs = js + '/withcs/login.js'
        mypagejs = js + '/withcs/mypage.js'
        joinchoicejs = js + '/withcs/joinchoice.js'
        hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
      	hotelHomejs = js+'/hotel/hotelHome.js'
      	hotelDetailjs = js+'/hotel/hotelDetail.js'
    }
    let onCreate = () => {
        init()
        $.when(
            $.getScript(mainVuejs),
            $.getScript(routerjs),
            $.getScript(crewjs),
            $.getScript(introjs),
            $.getScript(tourizmjs),
            $.getScript(reviewjs),
            $.getScript(loginjs),
            $.getScript(mypagejs),
            $.getScript(joinchoicejs),
             $.getScript(hotelMainVuejs),
            $.getScript(hotelHomejs),
            $.getScript(hotelDetailjs),
        ).done(() => {
            setContentView()
            btnVowel()
            
            
        }).fail(() => {
            alert(WHEN_ERR)
        })
    }
    let setContentView = () => {
        alert('좀떠라')
        alert(crew)
        let x = {css:'/css',img:'/img'}
        $('body').html(mainVue.main_navi(x))
             .append(mainVue.main_body(x))
             .append(mainVue.main_footer(x))
          
           
    }

    let btnVowel =()=>{
         alert('footer버튼')
            $('#introduce').click(e=>{
                e.preventDefault()
                  alert('introduce버튼')
                intro.onCreate()
                $('html').scrollTop(0);
            })
              
        $('#crewid').click(e=>{
            e.preventDefault()
            crew.onCreate()
               $('html').scrollTop(0);
        })
        
        $('#tourismgo').click(e=>{
            e.preventDefault()
            tourizm.onCreate()
               $('html').scrollTop(0);
        })
        $('#reviewgo').click(e=>{
            e.preventDefault()
            review.onCreate()
               $('html').scrollTop(0);
        })
        $('#mypage_btn').click(e=>{
            e.preventDefault()
             mypage.onCreate()
              $('html').scrollTop(0);
        })
        $('#login_btn').click(e=>{
            e.preventDefault
              login.onCreate()
              $('html').scrollTop(0);
        })
        $('#join_btn').click(e=>{
            e.preventDefault
             joinchoice.onCreate()
              $('html').scrollTop(0);
        })
           $('#hotel_go').click(e=>{
        	e.preventDefault()
        	hotelHome.onCreate()
        })
    }


    return { onCreate }

})();