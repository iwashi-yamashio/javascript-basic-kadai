// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされた後、2秒後にtext表記を変える
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンがクリックされました';
  }, 2000);

})