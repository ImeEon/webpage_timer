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
        // console.log('页面激活');
        if(timing===null){
            timing = setInterval(timer,1000);
        }
        
    }else{
        // console.log('页面非激活');
        if(timing!==null){
            clearInterval(timing);
            timing=null;
        }
        
    }
}

var time=0;

// --------------------------------------
if(localStorage.time!==undefined){
    time=parseInt(localStorage.time);
}

var timing=setInterval(timer,1000);

document.addEventListener(visibilityChangeEvent, onVisibilityChange);

