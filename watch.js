let second = 0 + '0';
let minute = 0 + '0';
let hour = '0' + 1;
setInterval(() => {
    second++;
    let secondString = second.toString().split('');
    if (secondString.length === 1) {
        secondString.unshift('0');
        second = secondString.join('');
    }
    // console.log(`second= ${second}`);
    if (parseInt(second, 10) === 60) {
        second = '0' + 0;
        minute++;
        let minString = minute.toString().split('');
        if (minString.length === 1) {
            minString.unshift('0');
            minute = minString.join('');
        }
        // console.log(`minute=${minute}`);
        if (parseInt(minute, 10) === 60) {
            minute = '0' + 0;
            hour++;
            let hourString = hour.toString().split('');
            if (hourString.length === 1) {
                hourString.unshift('0');
                hour = hourString.join('');
            }
            if (parseInt(hour, 10) === 13) {
                hour = '0' + 1;
            }
        }
    }
    // console.log(second);
    const sec = document.getElementById('second');
    sec.innerText = second;
    const mint = document.getElementById('minute');
    mint.innerText = minute;
    const hr = document.getElementById('hour');
    hr.innerText = hour;
}, 1000);