var 지정한태그
var 내용

지정한태그 = document.body;
내용 = `
<div id="allpo">
    <!-- 레이어 팝업 -->
    <div class="popup-container" id="popup">
        <button class="popup-close" id="popup-close-btn">
            <img src="https://w7.pngwing.com/pngs/564/374/png-transparent-computer-icons-desktop-others-logo-button-icon-desktop-wallpaper-thumbnail.png" alt="닫기" /> 
        </button>
        <p></p>
        <a class="popup-font" href="https://tips.boodream.com/어차피-쓰는-돈-새카드로-결제하고-캐시백-현금-지원/"><br>카드발급 하고 12만원 받기</a>
    </div>
</div>
`;
지정한태그.insertAdjacentHTML('afterbegin', 내용);

// 페이지 로딩 후 실행될 함수를 등록합니다.
window.onload = function() {
    // 삭제할 div 요소의 클래스명을 지정합니다.
    var targetClass = "kakao_ad_area";
    // 해당 클래스명을 가진 요소를 찾습니다.
    var targetElements = document.querySelectorAll("." + targetClass);
    // 해당 클래스명을 가진 모든 요소를 순회하면서 부모 요소를 찾아서 삭제합니다.
    targetElements.forEach(function(targetElement) {
        var parentElement = targetElement.parentNode;
        parentElement.removeChild(targetElement);
    });
    // 팝업 닫기 버튼 클릭 시 이벤트 처리
    document.getElementById("popup-close-btn").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });
};
