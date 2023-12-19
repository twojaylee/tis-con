var 지정한태그
var 내용

지정한태그 = document.body;
내용 = `
<!-- 팝업광고 -->
<div class="popup-container2" id="popup2">
    <button class="popup-close2" id="popup-close-btn2">
        <img src="
        https://w7.pngwing.com/pngs/564/374/png-transparent-computer-icons-desktop-others-logo-button-icon-desktop-wallpaper-thumbnail.png
        " alt="닫기" /> 
    </button>

    <a href="http://iryan.kr/t7e3hatpv4">
        <img class="popup-img2" src="
        https://raw.githubusercontent.com/twojaylee/tis-con/main/images/allpo2.webp        
        ">
    </a>
</div>
`;
지정한태그.insertAdjacentHTML('afterbegin', 내용);

// 페이지 로딩 후 실행될 함수를 등록합니다.
window.onload = function() {
    // 팝업 닫기 버튼 클릭 시 이벤트 처리
    document.getElementById("popup-close-btn2").addEventListener("click", function() {
        document.getElementById("popup2").style.display = "none";
    });
};