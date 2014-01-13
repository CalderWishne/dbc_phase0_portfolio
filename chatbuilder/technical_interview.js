function each(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

each([1,2,3], alert);

var arr = [1,2,3];

reduce(arr, function(sum, num){ return sum + num; }, 0); // 6

function reduce(arr, callback, value) {
    for(var i = 0; i < arr.length; i++){
        value = callback(value, arr[i]);
    }
    return value;
}

every([1,3,5], function(num){ return (num%2 === 1); }); // true
//every([1,3,6], function(num){ return num%2 === 1; }); // false

function every(arr, callback) {
    return reduce(arr, function(condition, num){ return condition && callback(num) }, true);
}

//    condition = true;
//    for(var i = 0; i < arr.length; i ++){
//        condition && fn(arr[i]);
//    }
//    return condition;
}
------

function getMessages(arr) {
    each(arr, Chat.display);
    //for(var i = 0; i < arr.length; i++) {
    //    Chat.display(arr[i]);
    //}
}

$(document).ready(function(){
    Chat.fetch(getMessages);
    
    setInterval(function() { Chat.fetch(refresh); }, 3000);
});

function refresh(arr) {
    $(".messages").remove();
    getMessages(arr);
}