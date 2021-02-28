//箭头函数的扩展

//升序排序(默认)
//let fn = [3,1,2].sort();

//升序排序(es5)
// let fn = [3,1,2].sort(function (a,b){
//     return a - b;
// });
//升序排序(es6)
//let fn = [3,1,2].sort((a,b) => a - b);

//降序排序(es5)
// let fn = [3,1,2].sort(function (a,b){
//     return b - a;
// });
//降序排序(es6)
//let fn = [3,1,2].sort((a,b) => b - a);


//不确定参数操作
// let fn = (...other) => {
//     return other[0] + other[1];
// }
// console.log(fn(10,20));


//判断箭头函数
// let fn = () => {};
// console.log(typeof fn);
// console.log(fn instanceof Function);


/*
//使用严格模式优化尾调用(递归)

'use strict';           //开启严格模式

let fn = function(count){
    console.log(count);
    if(count <= 1){
        return 1;
    }
    return fn(count -1);
};

fn(10);
*/


//不确定参数
// es5
// let fn = function(...other){
//     return arguments[0] + arguments[1];
// }

// es6
// let fn = (...other) => {
//     return other[0] + other[1];
// };

//console.log(fn(1,2));
