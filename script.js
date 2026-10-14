// 4. Live Clock 功能：製作即時電子時鐘
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    const now = new Date();
    
    // 獲取時、分、秒
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // 補零功能：如果小於 10 就在前面加 "0" (格式要求：HH : MM : SS)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // 渲染至網頁導覽列上
    clockElement.textContent = `${hours} : ${minutes} : ${seconds}`;
}

// 網頁載入時立刻執行一次
updateClock();

// 每隔 1 秒 (1000 毫秒) 自動更新一次時間
setInterval(updateClock, 1000);
