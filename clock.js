function showT() {
    let myDate = new Date()
    let hour = myDate.getHours()
    let minute = myDate.getMinutes()
    let second = myDate.getSeconds()
    let cTime = document.querySelector(".cTime");
    // cTime.innerHTML = myDate;

    cTime.innerHTML = `${hour} : ${minute} : ${second}`
    // console.log(myDate);
}

setInterval(showT, 1000)

// setInterval(() =>{
//     showT()
// }, 1000)

// console.log('hello');