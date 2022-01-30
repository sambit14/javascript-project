
const dataUserTemplate     =  document.querySelector("[data-user-template]")
 console.log(dataUserTemplate)
const dataUserCardContainer  =  document.querySelector('[data-user-card-container]');
console.log(dataUserCardContainer)
const dataSearch =   document.querySelector("[data-search]");
let userList = []
fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json().then(res =>{
    console.log(res)
    userList = res.map(user => {
        const card  =  dataUserTemplate.content.cloneNode(true).children[0]
        const dataHeader  =  card.querySelector("[data-header]");
        const dataBody  =  card.querySelector("[data-body]")
        console.log(dataHeader)
        console.log(dataBody)
        dataHeader.textContent  = user.name;
        dataBody.textContent  = user.email;
        dataUserCardContainer.append(card)
        return {name:user.name ,email:user.email,element:card}
    });
})).catch(error =>{
    console.log(error)
})

dataSearch.addEventListener('input',e =>{
        // console.log(userList)
        let value  =  e.target.value.toLowerCase();
        // console.log(value)
        userList.forEach(user => {
             let isVisible  =  user.name.toLowerCase().includes(value) ||  user.email.toLowerCase().includes(value);
             console.log(isVisible)
             console.log(user.element)
             user.element.classList.toggle('hide' ,!isVisible)
        });
})