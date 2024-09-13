document.addEventListener('DOMContentLoaded', function() {
    try {
        const contentsStyle = document.querySelector('.contents_style');
        const existingToc = document.getElementById('toc-ym');
        if (contentsStyle && !existingToc) {
            htmlTableOfContents();
        } else {
            return false;
        }
    } catch (error) {
        console.log('Error creating table of contents:', error);
    }
});

function htmlTableOfContents(doc) {
    var doc = doc || document;
    const tocDiv = document.createElement('div');
    tocDiv.setAttribute('id', 'toc-ym');
    const contentsStyle = document.querySelector('.contents_style');
    
    var xpathResult = "//p[contains(text(),'[목차여기]')]";
    var tocPlaceholder = document.evaluate(xpathResult, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    let insertionPoint;
    if (tocPlaceholder) {
        insertionPoint = tocPlaceholder;
        insertionPoint.innerHTML = '';
        insertionPoint.appendChild(tocDiv);
    } else {
        insertionPoint = contentsStyle.firstElementChild;
        if (insertionPoint.classList.contains('revenue_unit_wrap') || insertionPoint.classList.contains('tt_adsense_top')) {
            contentsStyle.insertBefore(tocDiv, insertionPoint.nextSibling);
        } else {
            insertionPoint.parentNode.insertBefore(tocDiv, insertionPoint);
        }
    }

    const toc = document.getElementById('toc-ym');
    const headings = [].slice.call(contentsStyle.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const tocItems = [];

    for (i = 0; i < headings.length; i++) {
        if (headings[i].textContent.trim() === '') continue;
        if (headings[i].classList.contains('another_category')) continue;
        if (headings[i].parentNode.classList.contains('another_category')) continue;
        tocItems.push(headings[i]);
    }

    if (tocItems.length === 0) {
        // 목차 항목이 없으면 목차를 생성하지 않음
        if (toc) {
            toc.parentNode.removeChild(toc);
        }
        return;
    }

    tocItems.forEach(function(el, i) {
        var link = 'link' + i;
        if (el.hasAttribute('id')) {
            link = el.getAttribute('id');
        } else {
            el.setAttribute('id', link);
        }

        var div = doc.createElement('div');
        div.setAttribute('class', el.tagName.toLowerCase());

        var a = doc.createElement('a');
        a.setAttribute('href', '#' + link);
        a.textContent = '• ' + el.textContent;

        div.appendChild(a);
        toc.appendChild(div);
    });
//twojaylee
    const tocStyles = `
    #toc-ym div.h1 { margin-left: 0em }
    #toc-ym div.h2 { margin-left: 0.5em }
    #toc-ym div.h3 { margin-left: 1em }
    #toc-ym div.h4 { margin-left: 1.5em }
    #toc-ym div.h5 { margin-left: 2em }
    #toc-ym div.h6 { margin-left: 2.5em }
    
    #toc-ym {
      margin: 30px 0px 30px 0px;
      padding: 20px 20px 10px 15px;
      border: 1px solid #dadada;
      background-color: #ffffff;
    }
    #toc-ym::before {
      content: "목  차";
      display: block;
      width: 120px;
      background-color: rgb(255, 255, 255);
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      margin: -40px auto 0px;
      padding: 5px 0px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(218, 218, 218);
      border-image: initial;
    }
    #toc-ym div{
      margin: 5px 0px;
    }
    #toc-ym div:first-child{
      margin-top: 15px;
    }
    #toc-ym div:last-child{
      margin-bottom: 15px;
    }
    #toc-ym div a {
      text-decoration: none;
      color: #337ab7;
      transition: all ease 0.2s;
    }
    #toc-ym div a:hover {
      color: #333333;
      background-color: #ecc7ff;
    }`;

    const styleElement = document.createElement('style');
    styleElement.innerHTML = tocStyles;
    contentsStyle.insertBefore(styleElement, insertionPoint);
}