// 等待 DOM 加載完成
document.addEventListener("DOMContentLoaded", function() {
    // 選取所有 .service-list 元素
    const serviceLists = document.querySelectorAll('.service-list');

    // 選取 id="target_image" 的元素
    const targetImage = document.getElementById('target_image');

    // 原始 class 用於在動畫播放完恢復
    const originalClass = targetImage.className;

    // 為每個 .service-list 元素添加點擊事件監聽器
    serviceLists.forEach(service => {
        service.addEventListener('click', function() {
            // 選取當前點擊元素內的 <h3> 元素
            const h3Element = service.querySelector('h6');

            // 取得 <h3> 元素的文本內容 (zoomOutDown, zoomOutLeft, etc.)
            const h3Value = h3Element.textContent.trim();

            // 將 class 設置為 animate__animated 和 animate__+<h3的值>
            targetImage.className = `animate__animated animate__${h3Value}`;
        });
    });

    // 當動畫結束時，恢復原始 class
    targetImage.addEventListener('animationend', function() {
        // 恢復原始的 class
        targetImage.className = originalClass;
    });
});
