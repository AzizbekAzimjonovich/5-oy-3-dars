/**const button=document.getElementById('btn')
const list=document.getElementById('list')

const data=['olma','behi','nok','shaftoli']

 */
const list = document.getElementById('list');
const data = [
    {
        id: "1",
        imgSrc: "./img/bmw.jpeg",
        name: "BMW",
        price: 35000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
        delete:"delete"
    },
    {
        id: "2",
        imgSrc: "./img/mers.jpeg",
        name: "Mercedes",
        price: 40000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
        delete:"delete"

    },
    {
        id: "3",
        imgSrc: "./img/tesla.jpeg",
        name: "Tesla",
        price: 22000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
        delete:"delete"

    },
];

data.forEach(el => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="con1">
        <img src="${el.imgSrc}">
        <div class="con2">
        <h3>${el.name}</h3>
        <p>${el.price}</p>
        <p>${el.description}</p>
        </div>
        </div>
        <button>${el.delete}</button>
    `;
    list.appendChild(li)

    const deleteButton = li.querySelector('button');
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    list.appendChild(li);

})