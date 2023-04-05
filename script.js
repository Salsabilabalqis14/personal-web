const nav = document.querySelector('.container-navbar')

const onScroll = () => {
    const scrollPosition = window.scrollY

    nav.classList.toggle("scrolled-down", scrollPosition > 100)
}

document.addEventListener("scroll", onScroll, {passive : true})