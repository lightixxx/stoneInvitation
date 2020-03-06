
$(document).ready(function () {

	$('.slick-items').slick({
		autoplay: true,
		dots: false,
		speed: 700 /* 이미지가 슬라이딩시 걸리는 시간 */ ,
		infinite: true,
		autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */ ,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false
	});
});


var mapContainer = document.querySelector('.map'), // 지도를 표시할 div 
	mapOption = {
		center: new kakao.maps.LatLng(37.574949, 126.983926), // 지도의 중심좌표
		level: 3 // 지도의 확대 레벨
	};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc = './images/mapicon1.png', // 마커이미지의 주소입니다    
	imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
	imageOption = {
		offset: new kakao.maps.Point(27, 69)
	}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
	markerPosition = new kakao.maps.LatLng(37.574949, 126.983926); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
	position: markerPosition,
	image: markerImage // 마커이미지 설정 
});
var iwContent = '<div style="padding:10px;">강민성 전시장 <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:#8bd3c8; font-size: 12px;" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Welcome!,37.574949, 126.983926" style="color:#8bd3c8; font-size: 12px; margin-left: 10px;" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
	position: iwPosition,
	content: iwContent
});

// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
