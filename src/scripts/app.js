document.addEventListener('click', (e) => {
    const el = e.target

    if(el.matches('.cta-sc__btn')) {
        confirmMsg()
    }

    if (el.matches('.social-media__link')) {
        alertMsg()
    }
})

function confirmMsg() {
    alert("Registration Successful!")
}

function alertMsg() {
    alert("Unfortunately this link doesn't exist yet")
}