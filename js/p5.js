//es6之前无法设置参数值，es6后可以设置参数值

//函数参数的默认值
// function fn(user,age=100,arr=[],obj={},callback=function(){}){
//     console.log(user);
//     console.log(age);
//     console.log(arr);
//     console.log(obj);
//     console.log(callback());
// }

//按顺序传值
// fn('kkk',200,[1,2,3],{id : 1},function(){
//     return '111';
// });

//使用undefined隔开传值直接调用默认值,null和空都不行
// fn('kkk',undefined,undefined,undefined,function(){
//     return '222';
// })
  

// //不确定参数
// function fn1(user,...other){
//     console.log(user);
//     console.log(other);
// }
// fn1('kkk',20,'男','大帅哥');

 





