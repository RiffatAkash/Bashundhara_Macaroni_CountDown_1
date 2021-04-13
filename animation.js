var displayCounter = document.querySelector('.patch_countdown');


var iftarSet = [
    "18:31","18:31","18:31","18:32",
    "18:32","18:33","18:33","18:34","18:34",
    "18:35","18:35","18:36","18:36","18:36",
    "18:23","18:24","18:24","18:24","18:25",
    "18:25","18:26","18:26","18:27","18:27",
    "18:28","18:28","18:29","18:29","18:29",
    "18:30","18:30"
];
 

setInterval(function () {
    var today = new Date();
    var curDate = today.getDate();
    var curTime = today.getHours()*60*60+ today.getMinutes()*60+today.getSeconds();

    var checkIftar = iftarSet[curDate].split(":");
    var timeIftar = checkIftar[0]*60*60 + checkIftar[1]*60;
    checkIftarTime(curDate, curTime);

},1e3);


function checkIftarTime(todayDate, curTime) {
    var time = iftarSet[todayDate].split(":");
    var setTime = time[0]*60*60 + time[1]*60;
    var diffTime = setTime - curTime;
    if (diffTime<setTime && diffTime>=0){
        displayCounter.innerHTML = printTimer(diffTime);
    } 
    else {
        var lastTime = setTime+24*60*60;
        var iftariEnd = lastTime - curTime;
        displayCounter.innerHTML = printTimer(iftariEnd);
    }
}


function printTimer(sec) {
    hr = Math.floor(sec / 3600) % 24;
    mm = Math.floor(sec / 60) % 60;
    ss = sec % 60;

    var x = hr < 10? "0"+hr : hr;
    var y = mm < 10? "0"+mm : mm;
    var z = ss < 10? "0"+ss : ss;
    return `<span class="hour absolute">${translteNum(x)}</span> <span class="minute absolute">${translteNum(y)}</span> <span class="second absolute">${translteNum(z)}</span>`;
}

function translteNum(num_str){
        var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        var changed_nun='';
        num_str.toString().split('').forEach(l => {
          if(isNaN(l)){changed_nun +=l;}else{changed_nun += bengali[l];}
        });
        return changed_nun;
}
