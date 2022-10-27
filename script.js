/*let data = newDate()
let usa = "2020-11-24T16:00-08:00"
let japon = "2020-11-24T16:00+09:00"
let russie = "2020-11-24T16:00+04:00"*/
//const anchoragetime = now.toLocalstring("fr-BE", { TimeZone: America / anchorage });


new Date().toLocaleString("fr-BE", { timeZone: 'Etc/GMT-3', dateStyle: 'medium', timeStyle: 'long', hourCycle: 'h24' })

var getBrusselsTime = function () {
    document.getElementById('Brussels').innerHTML = new Date().toLocaleString('BE', { timeZone: 'Europe/Brussels', timeStyle: "medium", hourCycle: 'h24' })
}

//console.log("getTimezoneOffset", now.getTimezoneOffset());

//console.log(birthday.toDateString);

var d = new Date();
var date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
console.log(date);

var d = new Date();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
console.log(hours);

const today = new Date();
const hour = today.getUTCHours();


let ddnss = new Date('2008-12-18')
let shan = new Date('2009-07-29')

console.log((ddnss.getTime() / 1000) + ' seconds have passed ddns  and 1/1/1970')
console.log((shan.getTime() - ddnss.getTime()) / (1000 * 60) + ' minutes have passed between 2009 and c')
var annee = new Date(2048, 1,0) 
console.log("année", annee);
console.log("année", annee.getTime());

    let dno = new Date(0,3,8);
    console.log("dno", hour);
    function display(){
    let disp = new Date();
    let enterr = document.getElementById("nbr");
    enterr.addEventListener('keyup',(event) => {
    console.log(event)
    })
}
 let hours = new Date().getTime();
 let updatedHours = new Date(hours + 80000 *1000 * 3600);
 const dates = updatedHours.toDateString();
 const time = updatedHours.toLocaleTimeString();
 console.log(dates);
 console.log(time);