
// const product={
// title:'ball pen',
// range:4,
// offer:5,
// price:270,
// };
// console.log(product)
// console.log(typeof(product))

// if-else statement
// let num=prompt('enter a number');
// if(num%5==0){
//     console.log(num,'is a multiple of 5 ');
// }else{
//     console.log(num,'is not a multiple of 5');
// }

// // if-else-if
// let score=prompt('enter ypur choive');
// let grade;
// if(score>=90 && score<=100){
//     grade='A';
// }else if(score>=70 && score<=89){
//     grade='B';
// }else if(score>=30 && score<=69){
//     grade='c';
// }else{
//     grade='fail'
// }
// console.log('score,yor grade:',grade)

// //for loop -sum of n natura numbers
// let n=prompt('sum of n number')
// let sum=0;
// for(i=0;i<=n;i++){
//     sum= sum+i;
// }
// console.log('sum=',sum)

// //while lop
// let k=prompt('sum of square of k numbers:')
// let sum1=0;
// i=0;
// while(i<=k){
//     sum1=sum1+(i);
//     console.log('sum:',sum1);
//     i++;
// }
// console.log('t sum=',sum1);

// //do while
// let i=0;
// do{
//     console.log('i:',i);
//     i++;
// }while(i<=10);

// //for-of loop
// let str='kushal';
// let size=0;
// for(let i of str){
//     console.log('i=',i);
//     size++;
// }
// console.log('string size:',size)

//for in loop
// let student={
//     name:'kushal',
//     age:20,
//     cgpa:7.5,
//     ispaas:true,
// };
// for(let key in student){
//     console.log('key=',key,'value=',student[key]);
// }
// //practice
// let fullname=prompt('enter your full name:');
// username='@'+fullname+123;
// console.log(username);

// //arrays
// let marks=[91,92,93,94,95,96,97,98,99];
// let sum=0;
// for (let val of marks){
//     sum+=val;
// }
// let avg =sum/marks.length;
// console.log(`avg marks of the class=${avg}`)

// let items=[250,645,300,900,50];
// let idx=0;
// for(let val of items){
//     console.log(`value at index ${idx}=${val}`);
//     idx++;
// }

// let food = ['chilly','potato','litchi','bananna','apple'];
// food.push('carrot','burgger')//push
// console.log(food);
// let deleteitem=food.pop();//pop
// console.log('deleteitem:',deleteitem);
// console.log('string',food.toString());//tostring
// let names=['k','u','s','h'];
// let total=food.concat(names);//conact
// console.log(total);
// let val=total.shift();//shift
// console.log('deleted:',val)
// let arr=[10,20,30,40,50];
// arr.splice(2,2,3,4);//splice
// console.log(arr)

// let compan=['del','lenovo','apple','moto']
// compan.shift()
// console.log(compan)
// compan.splice(2,1,'ola')
// compan.push('amazon');
// console.log(compan)

// //functions
// function sum(x,y){
//     s='x+y'
//     return s
// }
// sum(33,33)
// let val=sum(50,50)
// console.log(val)

// //arrow function
// function countvowels(str){
//     let count=0;
//     for (const char of str){
//         if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// const countvow=(str)=>{//array function
//     let count=0;
//     for (const char of str){
//         if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// //for each
// let arr=['pune','delhi','mumbai'];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(),idx,arr);
// });
// let nums=[2,3,4,5]
// nums.forEach((nums) => {
//     console.log(nums*nums)
// });
// nums.map((val)=> {//map method
//     console.log(val);
// })
// result=nums.map((val) =>{
//     return val*2;
// })
// console.log(result)
// //filter
// let arr1=[1,2,3,4,5,6,7,8]
// let evenarr=arr1.filter((val)=>{
//     return val % 2===0;
// })
// console.log(evenarr)//reduse
// const output=arr1.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(output)

// let marks=[97,79,96,69,93,94,88];
// let toppers=marks.filter((val)=>{
//     return val>90;
// });
// console.log(toppers)

// let n=prompt('enter a number:')
// let arr=[];
// for (let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((prev,curr)=>{
//      return prev +curr;
// });   
// console.log('sum:',sum)
// let product=arr.reduce((prev,curr)=>{//reduce-factorial
//     return prev * curr;
// })
// console.log('factorial:',product)
function getdata(dataid,getNextData){
    setTimeout(() => {
        console.log('dat',dataid);
        if(getNextData){
            getNextData();
    }
    },2000);
}
getdata(1,() => {
    getdata(2);
});