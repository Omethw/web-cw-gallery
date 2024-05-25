const nav = document.querySelector('.navbar_links');
const openSideBar = document.querySelector('#side_nav_toggle_open');
const closeSideBar = document.querySelector('#side_nav_toggle_close');

const openSide = () => {
    nav.style.display = 'flex';
    openSideBar.style.display = 'none';
    closeSideBar.style.display = 'inline-block';
}

openSideBar.addEventListener('click', openSide)

const closeSide = () => {
    nav.style.display = 'none';
    openSideBar.style.display = 'inline-block';
    closeSideBar.style.display = 'none';
}

closeSideBar.addEventListener('click', closeSide)
