// HTMLの読み込みが終わってから処理
$( () => {
    // ハンバーガーメニューのボタンを押した時の処理
    $(`#nav-toggle`).on(`click`, () => {
        // メニューボタンとメニューリストの.menu-onを切り替える
        $(`#nav-toggle`).toggleClass(`menu-on`);
        $(`#nav-list`).toggleClass(`menu-on`);
    });
});
