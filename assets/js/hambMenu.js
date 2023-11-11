{/* <i class="bi bi-x-lg"></i> */}
let hambMenu = document.getElementById('hambMenu')
let hamMenuIcon = document.getElementById('hambMenuIcon')

hamMenuIcon.addEventListener('click' , ()=>{
    hamMenuIcon.classList.toggle('hambMenuIconChange')
    hambMenu.classList.toggle('hambMenuShow')
})