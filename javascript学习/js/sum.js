x = funSum(1,2,3,4,5);
function funSum(){
    var i, sum = arguments[0];//arguments是隐式参数
    sum = sum || 0;//如果arguments[0]是未定义的，则sum=0，否则，sum就为arguments[0]
    if(arguments[0] < 2){
        return sum;
    }
    for( i = 0; i < arguments.length ;i++){
        sum += arguments[i];
    }
    return sum;
}