var tourizmVue = tourizmVue || {}
tourizmVue = {
	tourizm_body: t => {
		return `<div><button id = "createtourizm">생성</button></div>
			<div><button id = "dummy">dummy</button></div>
			<div class ="container" style = "height: 1300px; width: 2000px;">
            <div class = "mainimg" style = "text-align: center;"><h2>관광지</h2><br>
                  <input type="text" id ="search" style = "height: 30px;
					border-radius: 50px;
					border : 2px solid black; text-align : center;" value="관광지 검색">
                        <div class = "manu" style = "display: inline-block;" >
                  추천순 : <input type="checkbox" name="best">
             
            </div>
            </div>
            
            
            <div class = "cl1" style = "margin-top: 2%;
		        width: 50%;
		        height: 80%;
		        float: left;
		        box-sizing: border-box;
		        border: 1px solid black;">
        
				<div id = "tourizmbody" style = "width: 100%; height : 60%; position: relative;">
				
				
				</div>
            </div>
            
            <div class = "cl2" style = "margin-top: 2%;
        width: 50%;
        height : 80%;
        float: right;
        box-sizing: border-box;
	  border: 1px solid black;"> 
	   <div class="stickycss" style="  display: inline-block;  position: sticky;   top: 20%;  width: 80px;  height: 80px; margin-left:5%;">	
	  <div id="map" style="margin-right:2%;margin-left:5%;margin-top:20%;width:500px;height:400px;"></div>
	<button id = "mapdb">db데이터넣기</button>
	    </div>
		</div>
     
           <div id = "dijkstra" style="
	text-align: center;
	position : center;
	margin-top : 10px;">
      	<button id = "dijkstra_btn">최단거리 조회하기</button>
		</div>
      </div>`
	}
}