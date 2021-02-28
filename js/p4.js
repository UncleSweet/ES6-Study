//常用解构

//互相转换
// let key = 1,value = 'kkk';
// [value,key] = [key,value];
// console.log(value);


//函数返回数组解构
// function fn_array(){
//     return ['kkk',20,'男'];
// }
// let [user,age,sex] = fn_array();
// console.log(user);


//函数返回对象解构
// function fn_obj(){
//     return {
//         user : 'kkk',
//         age  : 20,
//         sex  : '男'
//     };
// }
// let {user,age,sex} = fn_obj();
// console.log(user);


//函数参数数组解构
// function fn_array1([user,age,sex]){
//     console.log(user);
// }
// fn_array1(['kkk',20,'男']);


//函数对象数组解构
// function fn_obj1({user,age,sex}){
//     console.log(user);
// }
// fn_obj1({
//     user : 'kkk',
//     age : 20,
//     sex : '男'
// });


//字符串解构
// let [x,y,z] = 'abc';
// console.log(x);

//字符串属性的解构
// let {length : len} = 'bcd';
// console.log(len);