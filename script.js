// 等待網頁內容載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 取得需要的元素
    const toggleBtn = document.getElementById('toggleBtn');
    const moreInfoSection = document.getElementById('moreInfo');

    // 2. 監聽按鈕的「點擊」事件
    toggleBtn.addEventListener('click', function() {
        
        // 3. 切換顯示狀態
        // 使用 CSS class 'show' 來控制顯示與隱藏
        if (moreInfoSection.classList.contains('show')) {
            // 如果已經顯示，就隱藏它
            moreInfoSection.classList.remove('show');
            toggleBtn.textContent = "了解更多細節"; // 改變按鈕文字
            toggleBtn.style.backgroundColor = "#3498db"; // 恢復按鈕顏色
        } else {
            // 如果是隱藏的，就顯示它
            moreInfoSection.classList.add('show');
            toggleBtn.textContent = "隱藏詳細資訊"; // 改變按鈕文字
            toggleBtn.style.backgroundColor = "#7f8c8d"; // 改變按鈕顏色為灰色
        }
    });
});