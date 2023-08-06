let countdown = () => {
    let futureDate = new Date("31 Dec 2023");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    console.log(days);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec=Math.floor(myDate/1000)%60;
    document.querySelector("#days").innerHTML= days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;

}
countdown();
setInterval(countdown, 1000);
