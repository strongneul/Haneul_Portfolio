document.getElementById('canvaLink').addEventListener('click', function() {
    window.open('https://www.canva.com/design/DAGCiEFwJyA/iT2EbLuy1Mc_BgBEqI9XXw/edit?utm_content=DAGCiEFwJyA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', '_blank');
    window.open('./인구소멸위기지역 시각화 및 인구소멸위기 원인 분석.pdf', '_blank');
});

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const textToType = "안녕하세요, 신입 프론트 엔드 개발자 강하늘입니다.";

    let i = 0;
    function type() {
        if (i < textToType.length) {
            textElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(type, 112);
        }
    }
    type();
});