export function getTime(ndate){
    const date=new Date(ndate);
    const hours=addZero(date.getHours());
    const minutes=addZero(date.getMinutes());
    return `${hours}:${minutes}`
}

function addZero(number){
    return number.toString().padStart(2,'0');
}