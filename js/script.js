let doc = document

let tv = [
    {
        img: './img/artel1.jpg',
        name: 'artel',
        color: 'black',
        price: '300$',

    },
    {
        img: './img/artel2.png',
        name: 'artel',
        color: 'black',
        price: '400$',

    },
    {
        img: './img/artel3.jpg',
        name: 'artel',
        color: 'black',
        price: '500$',

    },
    {
        img: './img/artel4.jpg',
        name: 'artel',
        color: 'black',
        price: '600$',

    }
]

let phone = [

    {
        img: './img/iphon1.jpg',
        name: 'iphone11',
        color: 'black',
        price: '300$',

    },
    {
        img: './img/iphon2.jpg',
        name: 'iphone12',
        color: 'black',
        price: '300$',

    },
    {
        img: './img/iphon3.jpg',
        name: 'iphone13',
        color: 'black',
        price: '300$',

    },
    {
        img: './img/iphon4.jpg',
        name: 'iphone14',
        color: 'black',
        price: '300$',

    }
]

let car = [
    {
        img: './img/gentra.jpg',
        name: 'gentra',
        color: 'wite',
        price: '15000$'
    },
    {
        img: './img/kobalt.jpg',
        name: 'cobalt',
        color: 'wite',
        price: '17000$'
    },
    {
        img: './img/tesla.jpg',
        name: 'tesla',
        color: 'wite',
        price: '35000$'
    },
    {
        img: './img/damas.jpg',
        name: 'damas',
        color: 'wite',
        price: '9000$'
    },
]


let fridge = [
    {
        img: './img/xol1.webp',
        name: 'artel',
        color: 'wite',
        price: '600$',
    },
    {
        img: './img/xol2.webp',
        name: 'avalon',
        color: 'wite',
        price: '900$',
    },
    {
        img: './img/xol3.webp',
        name: 'opck',
        color: 'wite',
        price: '400$',
    },
    {
        img: './img/xol4.webp',
        name: 'picai',
        color: 'wite',
        price: '500$',
    },
]

let chocolate = [
    {
        img: './img/cho1.webp',
        name: 'alpenGold',
        color: 'dark',
        price: '2$',
    },
    {
        img: './img/cho2.webp',
        name: 'milka',
        color: 'dark',
        price: '2$',
    },
    {
        img: './img/cho3.webp',
        name: 'max-fun',
        color: 'dark',
        price: '2$',
    },
    {
        img: './img/cho4.webp',
        name: 'baunti',
        color: 'dark',
        price: '1$',
    },
]




//////функции
let tv_cart = doc.querySelector('.tv_cart')
function elem(arr) {
    tv_cart.innerHTML = ''

    for (let item of arr) {
        let cart = doc.createElement('div')
        let img = doc.createElement('img')
        let tv_name = doc.createElement('p')
        let tv_color = doc.createElement('p')
        let tv_price = doc.createElement('p')
        let btn = doc.createElement('button')
        let span = doc.createElement('span')

        cart.classList.add('cart')
        img.src = item.img
        tv_name.classList.add('name')
        tv_name.innerHTML = item.name
        tv_color.innerHTML = item.color
        tv_price.innerHTML = item.price
        btn.classList.add('btn')
        btn.innerHTML = "купить"

        tv_cart.append(cart)
        cart.append(img, tv_name, span, btn)
        span.append(tv_color, tv_price)
    }
}






//////селекторы


let tv2 = doc.querySelector('.tv')


let phone1= doc.querySelector('.phone')



let car1= doc.querySelector('.car')


let fridge1= doc.querySelector('.fridge')



let choco1= doc.querySelector('.chocolate')


////онклики
tv2.onclick = () =>{
    elem(tv)
    
}

phone1.onclick = () =>{
    elem(phone)
}

car1.onclick = () =>{
    elem(car)
}

fridge1.onclick = () =>{
    elem(fridge)
}

choco1.onclick = () =>{
    elem(chocolate)
}
