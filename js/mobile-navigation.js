

const navigation = document.querySelector('.navigation');

document.querySelector('.toggle').onclick = function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

const mobileNavigation = document.querySelector('.mobile-submenu-item');

document.querySelector('.mobile-submenu-item').onclick = function () {
    this.classList.toggle('mSactive');
    navigation.classList.toggle('mSactive');
}