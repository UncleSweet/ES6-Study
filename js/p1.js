//let var const 的区别和使用

//定义一个数组
//var list = [];

//每个数组下标为一个函数，并且输出下标
// for (let i = 0; i < 10; i++) {
//     list[i] = function(){
//         console.log(i);
//     }
// }

// console.log(typeof i);          //undefined，i再循环内定义了,但值拿不出来

//遍历数组的值
// for (var i = 0; i < 10; i++){
//     list[i](); 
// } 

// console.log(typeof i);          //number，i提升为全局遍历，值也直接调用出来


//声明常量
// const PI = 3.14;
// console.log(PI);

if(true){
    let i = 1;
}
