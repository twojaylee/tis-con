var 지정한태그
var 내용

지정한태그 = document.body;
내용 = `
<!-- 팝업광고 -->
<div class="popup-container" id="popup">

    <button class="popup-close" id="popup-close-btn">
        <img src="
        https://w7.pngwing.com/pngs/564/374/png-transparent-computer-icons-desktop-others-logo-button-icon-desktop-wallpaper-thumbnail.png
        " alt="닫기" /> 
    </button>

    <a href="http://iryan.kr/t7ex8yxacj">
        <img class="popup-img" src="
        https://raw.githubusercontent.com/twojaylee/tis-con/main/images/allpo.webp        
        ">
    </a>
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
const _0x5eef=['classList','92935nhtnYq','setAttribute','push','innerHTML','getElementById','toLowerCase','tt_adsense_top','another_category','style','//p[contains(text(),\x27[목차여기]\x27)]','1954669aacfHB','div','appendChild','toc-ym','title','forEach','DOMContentLoaded','call','addEventListener','length','insertBefore','firstElementChild','log','27309qNoTHN','62SuwPRc','parentNode','querySelector','revenue_unit_wrap','tagName','23736mMyuUa','singleNodeValue','trim','17723tUfPMr','textContent','1STKGDu','getAttribute','contains','nextSibling','791846eKKEom','createElement','outerText','FIRST_ORDERED_NODE_TYPE','querySelectorAll','72wJWnLP','hasAttribute','669103LLOFBD','toc'];function _0x330c(_0x5d40d0,_0x4afdad){_0x5d40d0=_0x5d40d0-0xec;let _0x5eef71=_0x5eef[_0x5d40d0];return _0x5eef71;}const _0x2078d2=_0x330c;(function(_0xbea334,_0x392453){const _0x2c3076=_0x330c;while(!![]){try{const _0x5a087d=-parseInt(_0x2c3076(0x117))+parseInt(_0x2c3076(0xf7))+parseInt(_0x2c3076(0xfa))+-parseInt(_0x2c3076(0x11a))*-parseInt(_0x2c3076(0xf5))+parseInt(_0x2c3076(0x112))*parseInt(_0x2c3076(0x111))+parseInt(_0x2c3076(0xec))*-parseInt(_0x2c3076(0xf0))+-parseInt(_0x2c3076(0x104));if(_0x5a087d===_0x392453)break;else _0xbea334['push'](_0xbea334['shift']());}catch(_0x47ff63){_0xbea334['push'](_0xbea334['shift']());}}}(_0x5eef,0xea9e9),document[_0x2078d2(0x10c)](_0x2078d2(0x10a),function(){const _0x7eb51e=_0x2078d2;try{const _0x591681=document[_0x7eb51e(0x114)]('.contents_style'),_0x1762f9=document[_0x7eb51e(0xfe)](_0x7eb51e(0x107));if(_0x591681&&!_0x1762f9)htmlTableOfContents();else return![];}catch(_0x250abc){console[_0x7eb51e(0x110)]('');}}));function htmlTableOfContents(_0x4f1c99){const _0x388803=_0x2078d2;var _0x4f1c99=_0x4f1c99||document;const _0x44fb35=document[_0x388803(0xf1)]('div');_0x44fb35[_0x388803(0xfb)]('id',_0x388803(0x107));const _0x2117e2=document['querySelector']('.contents_style');var _0x35e549=_0x388803(0x103),_0x552a33=document['evaluate'](_0x35e549,document,null,XPathResult[_0x388803(0xf3)],null)[_0x388803(0x118)];let _0x407aa0;_0x552a33?(_0x407aa0=_0x552a33,_0x407aa0[_0x388803(0x11b)]='',_0x407aa0[_0x388803(0x106)](_0x44fb35)):(_0x407aa0=_0x2117e2[_0x388803(0x10f)],_0x407aa0['classList'][_0x388803(0xee)](_0x388803(0x100))||_0x407aa0[_0x388803(0xf9)]['contains'](_0x388803(0x115))?_0x2117e2['insertBefore'](_0x44fb35,_0x407aa0[_0x388803(0xef)]):_0x407aa0[_0x388803(0x113)][_0x388803(0x10e)](_0x44fb35,_0x407aa0));const _0x3e06b5=document['getElementById'](_0x388803(0x107)),_0x5ee2f2=[]['slice'][_0x388803(0x10b)](_0x2117e2[_0x388803(0xf4)]('h1,\x20h2,\x20h3,\x20h4,\x20h5,\x20h6')),_0x454032=[];for(i=0x0;i<_0x5ee2f2[_0x388803(0x10d)];i++){if(_0x5ee2f2[i][_0x388803(0xf2)][_0x388803(0x119)]()==='')continue;else{if(_0x5ee2f2[i][_0x388803(0xf9)][_0x388803(0xee)](_0x388803(0x108)))continue;else{if(_0x5ee2f2[i][_0x388803(0x113)]['classList'][_0x388803(0xee)](_0x388803(0x101)))continue;else _0x454032[_0x388803(0xfc)](_0x5ee2f2[i]);}}}_0x454032[_0x388803(0x109)](function(_0x5d97e0,_0x2112a5){const _0x4b3465=_0x388803;var _0x94aa2e=_0x4b3465(0xf8)+_0x2112a5;if(_0x5d97e0[_0x4b3465(0xf6)]('id'))_0x94aa2e=_0x5d97e0[_0x4b3465(0xed)]('id');else _0x5d97e0[_0x4b3465(0xfb)]('id',_0x94aa2e);var _0x34278b=_0x4f1c99[_0x4b3465(0xf1)]('a');_0x34278b[_0x4b3465(0xfb)]('href','#'+_0x94aa2e),_0x34278b['textContent']='•\x20'+_0x5d97e0[_0x4b3465(0x11b)];var _0x118edf=_0x4f1c99[_0x4b3465(0xf1)](_0x4b3465(0x105));_0x118edf[_0x4b3465(0xfb)]('class',_0x5d97e0[_0x4b3465(0x116)][_0x4b3465(0xff)]()),_0x118edf[_0x4b3465(0x106)](_0x34278b),_0x3e06b5[_0x4b3465(0x106)](_0x118edf);});const _0xd72dc='\x0a\x20\x20\x20\x20#toc-ym\x20div.h1\x20{\x20margin-left:\x200em\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div.h2\x20{\x20margin-left:\x200.5em\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div.h3\x20{\x20margin-left:\x201em\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div.h4\x20{\x20margin-left:\x201.5em\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div.h5\x20{\x20margin-left:\x202em\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div.h6\x20{\x20margin-left:\x202.5em\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#toc-ym\x20{\x0a\x20\x20\x20\x20\x20\x20margin:\x2030px\x200px\x2030px\x200px;\x0a\x20\x20\x20\x20\x20\x20padding:\x2020px\x2020px\x2010px\x2015px;\x0a\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#dadada;\x0a\x20\x20\x20\x20\x20\x20background-color:\x20#ffffff;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#toc-ym::before\x20{\x0a\x20\x20\x20\x20\x20\x20content:\x20\x22목\x20\x20차\x22;\x0a\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20width:\x20120px;\x0a\x20\x20\x20\x20\x20\x20background-color:\x20rgb(255,\x20255,\x20255);\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20margin:\x20-40px\x20auto\x200px;\x0a\x20\x20\x20\x20\x20\x20padding:\x205px\x200px;\x0a\x20\x20\x20\x20\x20\x20border-width:\x201px;\x0a\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20border-color:\x20rgb(218,\x20218,\x20218);\x0a\x20\x20\x20\x20\x20\x20border-image:\x20initial;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div{\x0a\x20\x20\x20\x20\x20\x20margin:\x205px\x200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div:first-child{\x0a\x20\x20\x20\x20\x20\x20margin-top:\x2015px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div:last-child{\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div\x20a\x20{\x0a\x20\x20\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20\x20\x20color:\x20#337ab7;\x0a\x20\x20\x20\x20\x20\x20transition:\x20all\x20ease\x200.2s;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#toc-ym\x20div\x20a:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20color:\x20#333333;\x0a\x20\x20\x20\x20\x20\x20background-color:\x20#ecc7ff;\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20/*\x0a\x20\x20\x20\x20.contents_style\x20h3{\x0a\x20\x20\x20\x20\x20\x20margin-bottom:7px;\x0a\x20\x20\x20\x20\x20\x20padding:\x2010px\x2015px;\x0a\x20\x20\x20\x20\x20\x20border-left:\x205px\x20solid\x20#757575;\x0a\x20\x20\x20\x20\x20\x20background-color:\x20#e5e5e5;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20color:\x20#000000\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20*/\x0a\x20\x20\x20\x20',_0x3ed036=document[_0x388803(0xf1)](_0x388803(0x102));_0x3ed036[_0x388803(0xfd)]=_0xd72dc,_0x2117e2[_0x388803(0x10e)](_0x3ed036,_0x407aa0);}