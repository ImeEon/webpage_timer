var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;

var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');

var timer = function(){
    time=time+1;
    document.getElementById("time").innerHTML=time;
    localStorage.time=time;
}

var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {    
        console.log('页面激活');
        if(timing===null){
            timing = setInterval(timer,1000);
        }
        
    }else{
        console.log('页面非激活');
        if(timing!==null){
            clearInterval(timing);
            timing=null;
        }
        
    }
    document.title=document[hiddenProperty];

}

var time=0;

// --------------------------------------
if(localStorage.time!==undefined){
    time=parseInt(localStorage.time);
}

var timing=setInterval(timer,1000);

document.addEventListener(visibilityChangeEvent, onVisibilityChange);







// var hidden,state,visibilityChange;

// if(typeof document.hidden!=="undefined"){
//     hidden="hidden";
//     visibilityChange="visibilityChange";
//     state="visibilityState";
// } else if (typeof document.mozHidden !== "undefined") {
// 	hidden = "mozHidden";
// 	visibilityChange = "mozvisibilitychange";
// 	state = "mozVisibilityState";
// } else if (typeof document.msHidden !== "undefined") {
// 	hidden = "msHidden";
// 	visibilityChange = "msvisibilitychange";
// 	state = "msVisibilityState";
// } else if (typeof document.webkitHidden !== "undefined") {
// 	hidden = "webkitHidden";
// 	visibilityChange = "webkitvisibilitychange";
// 	state = "webkitVisibilityState";
// }

// document.addEventListener("visibilityChange",function(){
//     console.log("koko");
//     document.title=document[hidden];
// },false);

// document.title=document[hidden];
// console.log("koko");