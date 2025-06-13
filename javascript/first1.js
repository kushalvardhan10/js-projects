// let heading =document.getElementById('my_id');
// console.dir(heading)
// let headings=document.getElementsByClassName('my_class')
// console.dir(headings)
// console.log(headings)
// let parahs=document.getElementsByTagName('p');
// console.dir(parahs)
// let elements=document.querySelector('p')//paras
// console.dir(elements)
// let allelem=document.querySelectorAll('p')
// console.dir(allelem)

// let elements=document.querySelector('.my_class')
// console.dir(elements)//class
// let allelem=document.querySelectorAll('.my_class')
// console.dir(allelem)

// let elements=document.querySelector('#my_id')
// console.dir(elements)//id
// let allelem=document.querySelectorAll('#my_id')
// console.dir(allelem)
// let h2=document.querySelector('h2')
// console.dir(h2.innerText)
// h2.innerText=h2.innerText+' using html and  css';

// let divs=document.querySelectorAll('.box')//class
// console.log(divs[0])
// let idx=1;
// for(div of divs){
//     console.log(div.innerText)
//     div.innerText=`new uniqe value${idx}`
//     idx++
// }
// divs[0].innerText='new uniqe value1'

// let div=document.querySelector('div')
// console.log(div)
// let id=div.getAttribute('id')
// console.log(id)
// let name=div.getAttribute('name');
// console.log(name)
// let para =document.querySelector('p')
// console.log(para.getAttribute('class'))//to get attribute
// console.log(para.setAttribute('class','new class'))// to change attribute
// let div=document.querySelector('div')
// div.style.backgroundColor='green'
// //div.style.visibility='hidden'
// div.style.fontSize='26px'
// div.innerText='hello java script'

// let newBtn=document.createElement('button')
// newBtn.innerText='click me!'
// console.log(newBtn)
// let div=document.querySelector('div')
// div.append(newBtn)
// div.prepend(newBtn)
// div.before(newBtn)
// div.after(newBtn)

// let p=document.querySelector('p')
// p.after(newBtn)

// let newHeading=document.createElement("h1")
// newHeading.innerHTML="<i> hi,i am new! </i>";
// document.querySelector("body").prepend(newHeading)

// let para=document.querySelector('p')
// para.remove()
//question 1
// let newbtn=document.createElement('button')
// newbtn.innerText='click me!'
// newbtn.style.color='white'
// newbtn.style.backgroundColor='red'
// document.querySelector('body').prepend(newbtn)
// //question-2
// let para =document.querySelector('p')
let btn1=document.querySelector('#btn1');
// btn1.onclick = () => {
//     console.log('btn1 was clicked');
//     let a=25;
//     a++;
//     console.log(a);
// }
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
};

let div=document.querySelector('div');
div.onmouseover = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    console.log('you are inside div');
}
btn1.addEventListener('click', ()=>{
    console.log('button was clicked-handler1')
})
btn1.addEventListener('click', ()=>{
    console.log('button was clicked-handler2')
})
btn1.addEventListener('click', ()=>{
    console.log('button was clicked-handler3')
})
const handler4=()=>{
    console.log('button was clicked-handler4')
}
btn1.addEventListener('click',handler4);
btn1.removeEventListener('click',handler4);
//question
let modebtn=document.querySelector('#mode');
let currmode='light';//dark
modebtn.addEventListener('click', () => {
    if(currmode ==='light'){
        currmode='dark';
        document.querySelector('body').style.backgroundColor='black'
        //body.classList.add('light') if styling given in css
    }else{
        currmode='light'
        document.querySelector('body').style.backgroundColor='white'
        //body.classList.add('light')
    }
console.log(currmode)
});
modebtn.addEventListener('click', () => {
    console.log('you are trying to change mode');
});