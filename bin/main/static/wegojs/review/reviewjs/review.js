var review = review || {};
review = (() => {
    const WHEN_ERR = '호출하는 리뷰 js를 찾을 수 없습니다 .'
    let context, js;
    let mainVuejs, detail, writejs, search;
    let reviewmainvue, detailvue;
    let init = () => {
        context = $.ctx()
        js = $.js()

        reviewmainvue = js + '/review/vue/main_vue.js'
        detailvue = js + '/review/vue/detail_vue.js'
        mainVuejs = js + '/vue/mainVue.js'
        detail = js + '/review/vue/detail_vue.js'
        search = js + '/review/vue/search_vue.js'
        writejs = js + '/review/reviewjs/write.js'

    }
    let onCreate = () => {
        init();
        $.when(
            $.getScript(mainVuejs),
            $.getScript(detail),
            $.getScript(detailvue),
            $.getScript(writejs),
            $.getScript(search),
            $.getScript(reviewmainvue)

        ).done(() => {
            setContentView()
            movewrite()
            movesearch()
            make()
            crw()
        }).fail(() => {
            alert(WHEN_ERR)
        })
    }
    let setContentView = () => {
        $('#mainbody').empty()
        $(main_vue.review()).appendTo('#mainbody')
        if (sessionStorage.getItem('uid') != null) {
            $(`<div style="padding-bottom: 20px;" >
              <button id = "gowrite" class="button rounded-0 primary-bg text-white w-100 btn_1" >Write</button>
             </div>`).appendTo('#writebtnspace')
        }
        recent_list({ pageNo: 1 })
        scroll()
        $(main_vue.head()).appendTo('head')
    }


    let scroll = () => {
        let count = 1;
        $(window).scroll(function () {
            if ($(document).height() - $(this).height() - 100 < $(this).scrollTop()) {
                count++;
                recent_list({ pageNo: count })
            }
        })
    }



    let recent_list = x => {

        $.getJSON(context + '/review/list/' + x.pageNo, d => {

            $.each(d.review, (i, j) => {
                $(`<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div id="id${j.artseq}" class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style="width:100%;"class="img-fluid" src=${j.img} alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${j.title}</h4>
          </div>
        </div>`).appendTo('#reviewbody')
                $('#id' + j.artseq).click(e => {
                    e.preventDefault()
                   
                    $('html').scrollTop(0);
                    $('#reviewbody').empty()
                    $(detail_vue.detail(j)).appendTo('#reviewbody')
                    $.getJSON(context + `/review/img/${j.artseq}`, d => {
                        $.each(d.img, (i, j) => {
                            
                            $(`<img class="img-fluid d-block mx-auto" src=${j.title} alt="">`).appendTo('#imgspace')
                        })
                    })

                    $(`<p class="item-intro text-muted">작성자 : ${j.uid} 님</p>`).appendTo('#writerid')
                    if (sessionStorage.getItem('uid') != null) {
                        $(`<a id = "commentbtn"href="#" class="genric-btn primary small" style="width:100%">댓글달기</a>`)
                            .appendTo('#commentbtnspace')
                    }
                    $.getJSON(context + `/review/comment/${j.artseq}`, d => {

                        $.each(d.comment, (i, j) => {
                            if (d.comment != null) {
                                $(`<li>${j.comments}</li>`).appendTo('#commentspace')
                            }
                        })
                    })

                    $.getJSON(context + `/review/likeimg/${j.artseq}/${sessionStorage.getItem('uid')}`, d => {
                        
                        if (d.likecheck == 0) {
                            $('#heart').attr('src', '/web/resources/wegoimg/reviewimg/beforeheart.png')
                        } else if (d.likecheck == null) {
                            $('#heart').attr('src', '/web/resources/wegoimg/reviewimg/beforeheart.png')
                        } else if (d.likecheck == 1) {
                            $('#heart').attr('src', '/web/resources/wegoimg/reviewimg/afterheart.png')
                        }

                    })



                    $('#commentbtn').click(e => {
                        e.preventDefault()
                        comment(j.artseq)
                    })
                    if (sessionStorage.getItem('uid') != null) {
                        $('#likebtn').on("click", function (e) {
                            $(this).find(">img").attr("src", function (index, attr) {
                                if (attr.match('beforeheart')) {
                                    return attr.replace("beforeheart.png", "afterheart.png")
                                } else {
                                    return attr.replace("afterheart.png", "beforeheart.png")
                                }
                            })
                            like(j.artseq)
                        })
                    }


                    $(window).unbind('scroll');
                })

            })

        })


    }

    let like = x => {
        $.getJSON(`${context}/review/like/${x}/${sessionStorage.getItem('uid')}`, d => {
            $('#likecount').html(`<h6 id ="likecount">${d.count}개</h6>`)
        })
    }


    let comment = x => {
        
        let json = {
            comments: $('#writecomment').val(),
            artseq: x,
            uid: sessionStorage.getItem('uid')
        }
        $.ajax({
            url: `${context}/review/${x}/comment`,
            type: 'POST',
            data: JSON.stringify(json),
            dataType: 'json',
            contentType: 'application/json',
            success: d => {
                
                $('#reviewbody').empty()
                recent_list({ pageNo: 1 })


            },
            error: e => { }
        })
    }



    let movewrite = () => {
        $('#gowrite').click(e => {
            e.preventDefault()
            write.onCreate()

        })
    }

    let movesearch = () => {

        $('#searchbtn').click(e => {
            e.preventDefault()

            $.getJSON(context + '/review/search/' + $('#searchword').val(), d => {
                $('#reviewbody').empty()
                $.each(d, (i, j) => {
                    $(`<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div id="id${i}" class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img style="width:100%;"class="img-fluid" src=${j.img} alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${j.title}</h4>
                    </div>
                    </div>`).appendTo('#reviewbody')
                    $('#id' + i).click(e => {
                        e.preventDefault()
                        $('#reviewbody').empty()
                        $(`<div style="display: block; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
                  <h2 class="text-uppercase">${j.title}</h2>
              <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img class="img-fluid d-block mx-auto" src=${j.img} alt="">
              <p>${j.content}</p>           
              <div style=" padding-left: 10px;">
                <input type="text" style="width:100%" />
                <a href="#" class="genric-btn primary small" style="width:100%">댓글달기</a>
              </div>
              <div style="text-align: initial; padding-left: 15px; padding-top: 9px; padding-bottom: 10px;">
                <li>a;lkdsjflakhgi;law</li>
                <li>ahgl;aksgk;lsadghlksadghs</li>
                <li>aldjghlaskdjhgljksadghsadkjgh</li>
              </div>                
              </div>`).appendTo('#reviewbody')

                    })
                    $(window).unbind('scroll');
                })



            })



        })
    }



    let make = () => {
        $('#create').click(() => {
            $.getJSON(context + '/review/create/table', d => {
               
            })
        })
        $('#createlike').click(() => {
            $.getJSON(context + '/review/create/tablelike', d => {
               
            })
        })
        $('#createcomment').click(() => {
            $.getJSON(context + '/review/create/tablecomment', d => {
                
            })
        })
        $('#createcomment').click(() => {
            $.getJSON(context + '/review/create/tableimg', d => {
               
            })
        })
    }

    let crw = () => {
        $('#crawling').click(() => {
            $.getJSON(context + '/review/crawler', d => {
               
            })
        })
    }


    return { onCreate }

})()