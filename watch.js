let second = 0 + '0';
let minute = 0 + '0';
let hour = '0' + 1;
setInterval(() => {
    second++;
    second = converter(second);
    console.log(second);
    if (parseInt(second, 10) === 60) {
        second = '0' + 0;
        minute++;
        minute = converter(minute);
        if (parseInt(minute, 10) === 60) {
            minute = '0' + 0;
            hour++;
            hour = converter(hour);
            if (parseInt(hour, 10) === 13) {
                hour = '0' + 1;
            }
        }
    }
    console.log(hour, minute, second);
    const watchTimeSet = document.getElementById('watchTime');
    watchTimeSet.innerHTML = `<span>
    ${hour}ঃ${minute}ঃ${second}
    </span>`;
}, 1000);

function converter(parameter) {
    const parameterString = parameter.toString().split('');
    if (parameterString.length === 1) {
        parameterString.unshift('0');
        return parameterString.join('');
    }
    else return parameterString.join('');
}