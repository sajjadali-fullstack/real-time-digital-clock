
setInterval(currentTime, 1000)
function currentTime() {
    let date = new Date()
    date.getHours()
    //  remove date 



    let time = date.toLocaleString('en-US', { hour12: false })
    // let time = date.toLocaleString()
    document.getElementById("clock").innerHTML = time
    console.log(time);


}