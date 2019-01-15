x = funMin(1,2,3,4,5);
function funMin(){
    var i, min = arguments[0];//arguments是隐式参数
    min = min || 0;//如果arguments[0]是未定义的，则min=0，否则，min就为arguments[0]
    if(arguments.length < 2){
        return min;
    }
    for(i = 0 ; i < arguments.length ; i++){
        if(arguments[i] < min){
            min = arguments[i];
        } 
    }
    return min;
}