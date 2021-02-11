// HTML要素を取得
const navToggle = document.getElementById(`nav-toggle`);
const navList = document.getElementById(`nav-list`);

// ハンバーガーメニューのボタンを押した時の処理
navToggle.addEventListener(`click`, () => {
    // メニューボタンとメニューリストの.menu-onを切り替える
    navToggle.classList.toggle(`menu-on`);
    navList.classList.toggle(`menu-on`);
});
