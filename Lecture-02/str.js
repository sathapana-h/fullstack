//1111111111111111111111111
const er_status = 400;
if (er_status === 200) {
//ok
}
else if(er_status  === 400){
//Error
}
else{
//Unknown
}

//22222222222222222
switch(er_status ) {
    case 200 :
        console.log("ssss");
        break;
    case 400 :
        console.log("aaaa");
        //Error
        break;
    default:
        //Unknoen
};

//33333333333333333333
const message = 
    (er_status  === 200)
    "? 'OK' :  'Error'";
    console.log(message)


//4444444444444444444
function findperimeter(length,width){
    const perimeter = (length + width) *2;
    return perimeter
}   
let result = findperimeter(10, 5); 
console.log('the find is : ${findperimeter(10, 5)}')


