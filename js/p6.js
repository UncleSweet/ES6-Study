//箭头函数和this


//简单的es6箭头格式
// let fn = (user,age,sex = '男') => [user,age,sex];
// console.log(fn('kkk',20));


//复杂的操作参数也是可以用快级区域来包括操作的
// let fn = (user,age = 20,sex) => {
//     return {
//         user : user,
//         age  : age,
//         sex  : sex
//     }
// };
// console.log(fn('kkk',undefined,'男'));


//传入对象函数
// let fn = ({user,age}) => user + ', ' + age;
// console.log(fn({user : 'kkk',age : 20}));


/*
//自我执行
//es5
(function(user){
    console.log(user);
})('kkk');

//es6
((user) => {
    console.log(user)
})('aaa');
*/

let obj = {
    user : 'kkk',
    age  : 20,
    sex  : '男',
    fn   : function(){
        setTimeout(() => {
            console.log(this);                  //这里解决了es5指向settimeout的问题,指向obj
            console.log(this.age);
        }, 100);
    }
}

obj.fn();


