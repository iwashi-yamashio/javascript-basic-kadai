// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行し、text表記を変える
btn.addEventListener('click', () => {
  text.textContent = 'ボタンがクリックされました'
})