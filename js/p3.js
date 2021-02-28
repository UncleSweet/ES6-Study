/*

//es6数组解构

//分行解构
// let info = ['kkk',20,'男'];
// let [user,age,sex] = info;

// let info = ['kkk',20,'男'],
//            [user,age,sex] = info;

//单行解构
//let [user,age,sex] = ['kkk',20,'男'];

//规范化解构
//let [user,[age,sex]] = ['kkk',[20,'男']];

//占位
// let [,,sex] = ['kkk',20,'男'];
// console.log(sex);

//默认值
//let [user,age,sex = '男'] = ['kkk',20];

//参数汇总
// let [user,...other] = ['kkk',20,'男'];
// console.log(user);
// console.log(other);     //以数组形式返回

// console.log(user);
// console.log(age);
// console.log(sex);

*/

/*
//对象解构

//分行解构
// let obj = {
//     user : 'kkk',
//     age  : 20,
//     sex  : '男'
// };
// let {user,age,sex} = obj;


// let obj = {
//     user : 'kkk',
//     age  : 20,
//     sex  : '男'
// },user = 'aaa';
// let {user,age,sex} = obj;      //这里声明let会造成前面user为死区
// ({user,age,sex} = obj);        //创建匿名对象进行解构


//单行解构
// let {user,age,sex} = {user : 'kkk',age : 20,sex : '男'};


//规范化解构
// let  obj = {
//     user : 'kkk',
//     age  : 20,
//     info : {
//         id : 1,
//         value : '这是1'
//     }
// };
// let {info : {id,value}} = obj;


//重命名
// let obj = {
//     user : 'kkk',
//     age  : 20,
//     info : {
//         id    : 1,
//         value : '这是1'
//     }
// }
// let {info : {id:myid,value:myvalue}} = obj;
// console.log(myid);
// console.log(myvalue);


//默认值
let {user,age,sex = '男'} = {user : 'kkk',age : 20};


//参数汇总
// let obj = {
//     user : 'kkk',
//     age  : 20,
//     info : {
//         id    : 1,
//         value : '这是1'
//     }
// }
// let {user,...other} = obj;
// console.log(other);


// console.log(user);
// console.log(age);
// console.log(sex);

*/


/* 
    总结：  数组解构不需要考虑命名的对应，而对象需要考虑命名对应。
            两者都需要一一对应
*/