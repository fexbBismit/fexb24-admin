function formatDate(date) {
    return formatMin10(date.getDate()) + '/' + formatMin10(date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + formatAMPM(date);
}

function formatMin10(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();    
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    hours %= 12;
    hours = hours || 12;    
    minutes = minutes < 10 ? `0${minutes}` : minutes;
  
    const strTime = `${hours}.${minutes} ${ampm}`;
  
    return strTime;
}


export default formatDate