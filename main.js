let users = [
    {id:1, name: 'Vasya', surname: 'Ivanov', grade: '5B'},
    {id:2, name: 'Daniil', surname: 'Ivanov', grade: '9G'},
    {id:3, name: 'Petr', surname: 'Carpov', grade: 'childhouse'},
    {id:4, name: 'Maksim', surname: 'Pupkin', grade: '1kurs'},
]
let win = [2,6]
let nums = [1,2,3,4,5,6,7,8,9,10]
let elem = document.querySelector('.list')
for (let user of users) {
    elem.insertAdjacentHTML('beforeend',
        `
            <div class="card" id="${user.id}" onclick='hello(%{user.id})'>
                <h4 class="name">${user.name}</h4>
                <p class="surname">${user.surname}</p>
                <p class="grade">${user.grade}</p>
            </div>
    `
    )
}

function hello(id) {
    console.log(id)
    document.getElementById(id).hidden = true;
}

// let elem = document.createElement('input')
// elem.setAttribute('class', '.alert')
// elem.setAttribute('placeholder', 'Age')
// elem.setAttribute('name', 'Age')
// document.querySelector('.alert').before(elem)
// console.dir(elem.getAttribute('name'))
// elem.removeAttribute('placeholder')
// console.log(elem)
// console.log(elem.hasAttribute('placeholder'))

// let link = document.querySelector('.link');
// let input = document.querySelector('.input');
// console.log(link.href)
// input.value = 'Vasya'
// console.log(input.value)
// console.dir(input)

// let item = document.querySelector('ul').cloneNode(true);
// console.log(item)
// item.style.background = 'yellow';
// document.querySelector('h1').after(item)
// let elem = document.querySelector('p').nextElementSibling
// elem.style.cssText = `padding: 15px;
//                     border: 1px solid #d6e9c6;
//                     color: #3c4c2f;
//                     background-color: #e5eedd;`
// let elem2 = document.querySelector('.alert')
// console.log(elem2.className)
// setInterval(() => {
//     elem2.classList.toggle('new')
//     elem2.innerHTML = 'I love Python'
// })
// elem2.classList.remove('alert')
// console.log(getComputedStyle(elem2).backgroundColor)
// elem2.classList.remove('alert')
// let size = getComputedStyle(elem2, '::before').fontSize
// console.log(parseInt(size))
// size = parseInt(size)
// elem2.style.marginTop = size*3 + 'px'

// let elem = document.querySelector('.li')
// newElem.innerHTML = '<strong>Hello</strong> I love Python'
// document.querySelector('ui').replaceWith(newElem)
// console.log(newElem)


// let elem = document.querySelector('p')
// elem.remove()
//
// document.querySelector('ul').insertAdjacentHTML('afterbegin',
// '
//     <div hidden className="alert">
//         <strong>Hello</strong> I love JS
//     </div>
// '
// )
// let item = document.querySelector('ul');
// document.querySelector('h1').after()

// let elem = document.querySelector('p')
// setTimeout(() => elem.hidden = false, 1500);

// let elem = document.getElementById('num');
// elem.style.color = 'red';
// elem.innerHTML = '<h1>dsrtecwtwer</h1>';
// console.log(elem.innerHTML);

// let item = document.querySelector('item4')
// item.outerHTML = '<h4>New text</h4>'
// console.log(item)
// console.log(document.body.firstChild.data)
// item.innerHTML = document.body.firstChild.data;

// item.textContent = '<h2>My text</h2>'

// let elem = document.querySelector('.list')
// let item = elem.querySelector('.item4')
// console.log(item)

// let elem2 = document.querySelector('.list')
// console.log(elem2.firstElementChild.style.color = 'blue')
// console.log(elem2.firstElementChild)

// let elems = document.querySelectorAll('li')
// let elems = document.querySelectorAll('.item')
// for (let elem of elems){
//     console.log(elem)
// }

// let elem = document.getElementById('num')
// elem.previousElementSibling.style.color = 'red'
// console.log(elem)

// let elem = document.body.children;
// for (let elem of elems){
//     console.log(elem)
// }
// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.lastElementChild.previousElementSibling)
// console.log(document.body.lastElementChild.parentElement)