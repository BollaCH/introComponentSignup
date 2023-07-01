const btn = document.querySelector(".form__btn")
const label = document.querySelectorAll(".input-label")
const input = document.querySelectorAll(".form__input")



function formError() {

    input.forEach(item => {
        if (item.checkValidity() == false) {
            item.classList.add("input-error");

        } else {
            item.classList.remove("input-error");

        }
    })

}


btn.addEventListener('click', () => {
    formError()
})

