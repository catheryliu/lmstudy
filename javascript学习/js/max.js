x = funMax(1,2,3,4,5);
function funMax(){
    var i, max = arguments[0];//arguments是隐式参数
    max = max || 0;//如果arguments[0]是未定义的，则max=0，否则，max就为arguments[0]
    if(arguments.length <2){
        return max;
    }
    for(i = 0; i < arguments.length ; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
