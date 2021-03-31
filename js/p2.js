//es6之前全局作用域和函数作用域

// console.log(window.name);               //有值
// console.log(window.abc);                //undefined

// console.log(name);
// console.log(abc);


// (function(){
//     var age = 1;
//     console.log(age);
// }());

// console.log(age);                      //直接报引用错误 age is not defind


//es6之后的块级作用域

// {{{{
//     {let a = 1;}
//     console.log(a);                        //报错找不到，外面找不到
// }}}}

// {
//     let fn = function(){
//         var a = 1;
//         console.log(a);
//     };
//     fn();                                     //配合块级作用域和let声明，将函数私有化
// }
// fn();                                         //这里调用会出错