"use strict"
var map = map || {}
map = (() => {
    const WHEN_ERR = '찾는 mapjs를 호출할수 없스니다.'
    let context, js;
    let init = () => {
        context = $.ctx()
        js = $.js()
    }
    let onCreate = () => {
        init()
        mapfun()
        mapsDBinsert()
    }
    let mapfun = () => {
        var mapContainer = document.getElementById('map'),
            mapOption = {
                center: new kakao.maps.LatLng(37.5048086, 127.050147), 
                level: 3 
            };
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        var markerPosition = new kakao.maps.LatLng(37.5048086, 127.050147);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }
    let mapsDBinsert = () => {
        $('#mapdb').click(e => {
            e.preventDefault
            $.getJSON(context + '/maps/map/create/', d => {
                alert("성공!!" + d.msg)

                $.getJSON(context + '/maps/insert/mapDB', d => {
                    alert("성공!!" + d.msg)
                })
            })

        })
    }
    return { onCreate }

})();