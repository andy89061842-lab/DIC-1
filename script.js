function updateDashboard() {
    const now = new Date();

    // 1. 即時時鐘處理 (HH:MM:SS)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById('live-clock').textContent = `${hours}:${minutes}:${seconds}`;

    // 2. 日期處理 (YYYY/MM/DD)
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    
    document.getElementById('live-date').textContent = `${year}/${month}/${date}`;

    // 3. 星期處理 (Day of Week)
    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById('day-of-week').textContent = daysArray[now.getDay()];

    // 4. 計算今年第幾天 (Day in Year)
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayInYear = Math.floor(diff / oneDay);
    document.getElementById('day-in-year').textContent = dayInYear;
}

// 立即執行一次，避免畫面空白閃爍
updateDashboard();

// 每秒鐘自動循環更新一次
setInterval(updateDashboard, 1000);
