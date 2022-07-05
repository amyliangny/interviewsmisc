/*
Have the function  MostFreeTime(strArr) read the strArr 
parameter being passed which will represent a full day and will be filled with events that span from time X to time Y in the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be 
["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have to output the longest amount of free time available between the start of your first event and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and the latest event should be the latest event in the day. The output for the previous input would therefore be 01:30 (with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at least 3 events and the events may be out of order.
*/

// function MostFreeTime(times){
//     const range = [];
//     for (let i = 0; i < times.length; i++){
//         const [start,end] = times[i].split('-');
//         console.log(start);
//         let [sHour,sMin] = start.slice(0,5).split(':');
//         if (start[5] === "P") sHour = Number(sHour)+=12;
//         else sHour = Number(sHour);
//         let [eHour,eMin] = end.slice(0,5).split(':');
//         if (end[5] === "P") eHour = Number(eHour)+=12;
//         else eHour = Number(eHour);

//         [sMin, eMin] = [Number(sMin), Number(eMin)];

//         range.push((eHour - sHour)*60 + (eMin - sMin));
//     }
//     console.log(range);
//     return range;
// }


function MostFreeTime1(times){
    //convert dates into times
    let output='';
    const arr = [];
    let start = Infinity;
    let end = -Infinity;
    let duration = 0;
    // times.sort((a,b) => a)
    function convertToDate(times){
        for (let i = 0; i < times.length; i++){
            const [start,end] = times[i].split('-');

            let [sHour,sMin] = start.slice(0,5).split(':');
            // console.log(sHour, sMin, start[5])
            if (start[5] === "P" && Number(sHour) < 12) sHour = Number(sHour) + 12;
            const startDay =new Date(`Jan 1, 2022 ${sHour}:${sMin}`);

            let [eHour,eMin] = end.slice(0,5).split(':');
            if (end[5] === "P" && Number(eHour) < 12) eHour = Number(eHour) + 12;
            const endDay = new Date(`Jan 1, 2022 ${eHour}:${eMin}`);
            // console.log(eHour, eMin);

            arr.push([startDay.getTime(),endDay.getTime()]);
        }
    }
    convertToDate(times);
    console.log(arr)
    arr.sort((a,b) => a[0] - b[0])
    console.log(arr);
    for (let i = 1; i < arr.length; i++){
        let prev = arr[i-1];
        let curr = arr[i];
        duration = Math.max(duration, curr[0] - prev[1]);
    }
    console.log(duration/1000/60) //90 minutes
    duration = duration/1000/60
    if (duration >= 60 && duration <= 600){
        output+=`0${Math.floor(duration/60)}`
    } else output+=`${Math.floor(duration/60)}`
    output+=`:${duration % 60}`;
    console.log(output);
    // for (let time of arr){
    //     const [s,e] = time;
    //     start = Math.min(s, start);
    //     end = Math.max(e,end);
    // }
    // console.log(end,start)
    // duration = end - start; //duration in milliseconds
    // console.log(end - start)
    // for (let time of arr){
    //     // console.log(time)
    //     const [s,e] = time;
    //     console.log(e-s)
    //     if (s >= start && e <= end) duration -= (e-s);
    // }
    console.log(duration);
    console.log((duration)/1000/60)
}

  // keep this function call here 
  var test1 = ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"];
  // console.log('Test 1 passing: ' + (MostFreeTime(test1) == '00:30'));
  console.log(MostFreeTime1(test1));
  
  var test2 = ["12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"];
  // console.log('Test 2 passing: ' + (MostFreeTime(test2) == '00:04'));
  