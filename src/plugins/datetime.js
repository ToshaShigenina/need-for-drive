function format(date) {
    if (typeof date === 'object' && date) {
        const fullNumber = num => num < 10 ? '0' + num : num;
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = (Math.trunc(date.getMinutes() / 5) * 5) + 10;
        let newDate = new Date(year, month, day, hours, minutes);
        day = fullNumber(newDate.getDate());
        month = fullNumber(newDate.getMonth()+1);
        year = newDate.getFullYear();
        hours = fullNumber(newDate.getHours());
        minutes = fullNumber(newDate.getMinutes());
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
    return date;
}

function parse(dateString) {
    if (dateString && typeof dateString === 'string') {
        const str = dateString.split('.');
        return `${str[1]}.${str[0]}.${str[2]}`;
    }
    return dateString;
}

export {
    format,
    parse
}