module.exports = getDate;


function getDate() {
    let todays = new Date();
    let option = {
        weekday: 'long',
        day: 'numeric', 
        month: 'long'
    }
    let dayOfWeek = todays.toLocaleDateString('en-US', option);
    return dayOfWeek;
}