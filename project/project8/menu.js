const menu =[
    {  
        id:1,
        title:'Burger',
        price:15.00,
        category:'breakfast',
        img:'image.png',
        desc:'Customers can check the preparation video through our youtube channel.',
    },
    {  
        id:2,
        title:'pancakes',
        category:'lunch',
        price:30.00,
        img:'image.png',
        desc:'Customers can check the preparation video through our youtube channel.',
    },
    {  
        id:1,
        title:'pizza',
        category:'shakes',
        price:40.00,
        img:'image.png',
        desc:'These are the food items made from my amma ,which will be tasted as your never forgeten.These food items are completely made of fully hygenic and no chemicals are used.Customers can check the preparation video through our youtube channel.',
    }
];
const sectioncenter=document.querySelector('.section-center');
const btncontainer=document.querySelector('.btn-container')
const filterbtns=document.querySelectorAll('.filter-btn')
window.addEventListener('DOMContentLoaded',function(){
    displaymenuitems(menu);
    // let displaymenu=menu.map(function(item){
    //     console.log(item)
    //     // return <h1>${item.id}</h1>;
    //     return `<article class="menu-item">
    //             <img src="${item.img}" alt="${item.title}" class="photo">
    //             <div class="item-info">
    //                 <header>
    //                     <h4>${item.title}</h4>
    //                     <h4 class="price">${item.price}15$</h4>
    //                 </header>
    //                 <p class="item-text">
    //                     ${item.desc}
    //                 </p>
    //             </div>
    //         </article>`
    // });
    // displaymenu=displaymenu.join('')
    // console.log(displaymenu)
    // sectioncenter.innerHTML=displaymenu;
});

filterbtns.forEach(function(btn){
    btn.addEventListener('click',function(){
        // console.log(e.currentTarget.dataset)
        const category=e.currentTarget.dataset.id;
        const menucategory=menu.filter(function(menuitems){
            // console.log(menuitems.category)
            if (menuitems.category == category){
                return menuitems
            }
        })
        if(category ==='all') {
            displaymenuitems(menu);
        }else{
            displaymenuitems(menucategory);
        }
    })
})
function displaymenuitems(menuitems){
    let displaymenu=menu.map(function(item){
        return `<article class="menu-item">
                <img src="${item.img}" alt="${item.title}" class="photo">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}15$</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </article>`
    });
    displaymenu=displaymenu.join('')
    console.log(displaymenu)
    sectioncenter.innerHTML=displaymenu;
}
