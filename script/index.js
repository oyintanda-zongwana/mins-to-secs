function convertToMinutes() {
    const minutes = document.getElementById('Minutes').value;
    const seconds = (minutes * 60); //mins to secs formula
    document.getElementById('result').innerHTML = minutes + "min is equal to    " + seconds.toFixed(2) + "s";
}