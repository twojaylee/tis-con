var 지정한태그 = document.querySelectorAll('s_permalink_article_rep')[1]; // 두 번째 태그를 선택합니다.
    
var 내용 = '
<div id="tdad" style="text-align: center; margin-bottom: 9px;">
<ins class="adsbygoogle dad1"
    data-ad-client="ca-pub-8864202517500914"
    data-ad-slot="1611298289"
    data-ad-format="rectangle"
    data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
<ins class="adsbygoogle dad2"
    data-ad-client="ca-pub-8864202517500914"
    data-ad-slot="7985134946"
    data-ad-format="rectangle"
    data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>
';
var 새로운텍스트 = document.createTextNode(내용);
// 태그 뒤에 텍스트를 추가합니다.
지정한태그.appendChild(새로운텍스트);


지정한태그 = document.querySelectorAll('body')[0];
내용 = '
<div id="allpo">
<!-- 레이어 팝업 -->
<div class="popup-container" id="popup">
    <button class="popup-close" id="popup-close-btn">
        <img src="https://w7.pngwing.com/pngs/564/374/png-transparent-computer-icons-desktop-others-logo-button-icon-desktop-wallpaper-thumbnail.png" alt="닫기" /> 
    </button>
    <p></p>
    <a class="popup-font" href="https://tips.boodream.com/어차피-쓰는-돈-새카드로-결제하고-캐시백-현금-지원/"><br>카드발급 하고 12만원 받기</a>
</div>
<script>
    // JavaScript
    document.addEventListener("DOMContentLoaded", function() {
        // 팝업 닫기 버튼 클릭 시 이벤트 처리
        document.getElementById("popup-close-btn").addEventListener("click", function() {
            document.getElementById("popup").style.display = "none";
        });
    });
</script>
</div>
';
새로운텍스트 = document.createTextNode(내용);
지정한태그.appendChild(새로운텍스트);

        
내용 = '
<script id="blkaad">
    // 페이지 로딩이 완료된 후에 실행될 함수를 등록합니다.
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
    };
</script>
';
새로운텍스트 = document.createTextNode(내용);
지정한태그.appendChild(새로운텍스트);         
        