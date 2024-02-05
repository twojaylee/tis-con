window.addEventListener('load', function() {
    // 페이지가 로딩되면 실행될 코드
    removeKakaoAdAreaClass();
});

function removeKakaoAdAreaClass() {
    // kakao_ad_area 클래스를 가진 요소를 찾아 삭제
    var adAreaElements = document.querySelectorAll('.kakao_ad_area');
    
    adAreaElements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });
}