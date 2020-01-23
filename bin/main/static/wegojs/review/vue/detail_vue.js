var detail_vue = detail_vue || {}
detail_vue = {
	detail:j=>{return `<div style="display: block; padding-top:20px; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
                  <h2 class="text-uppercase">${j.title}</h2>
                  <div id = "writerid"></div>
                  
              <div id ="imgspace"><img class="img-fluid d-block mx-auto" src=${j.img} alt=""></div>
              <p>${j.content}</p>   
              <div class="likelike" style="padding-bottom: 20px;">   
                <button id = "likebtn" style ="height:60px; width:60px; background : none; border: none; float : right;">
                <h6 id ="likecount">${j.likecnt}개</h6><img id="heart" src = "/web/resources/wegoimg/reviewimg/beforeheart.png"></button>
              </div>     
              <div style=" padding-left: 10px; padding-top: 20px;">
                <input id ="writecomment" type="text" style="width:100%" placeholder="리플을 달려면 로그인해주세요"/>
                <div id="commentbtnspace"></div>
              </div>
          
              <div style="text-align: initial; padding-left: 15px; padding-top: 9px; padding-bottom: 10px;">
                <li id = "commentspace"></li>
              </div>                
              </div>`



	}
}