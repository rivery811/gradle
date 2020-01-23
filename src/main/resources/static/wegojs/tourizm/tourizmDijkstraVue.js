var tourizmDijkstraVue = tourizmDijkstraVue || {}
tourizmDijkstraVue = {
		tourizmDijkstraVue_body : () => {
			return `<div class ="container" style = "height: 1300px; width: 2000px;">
            <div class = "mainimg" style = "text-align: center;"><h2>최단거리 조회하기</h2><br>
            </div>
            <div class = "cl1" style = "margin-top: 2%;
		        width: 50%;
		        height: 80%;
		        float: left;
		        box-sizing: border-box;
		        border: 1px solid black;">
            </div>
            <div class = "cl2" style = "margin-top: 2%;
        width: 50%;
        height : 80%;
        float: right;
        box-sizing: border-box;
        border: 1px solid black;">
    <div id="map" style="margin-right:2%;margin-left:5%;margin-top:20%;width:500px;height:400px;"></div>
     </div>      
      </div>`
		}
}