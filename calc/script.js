



const outC = document.getElementById('C__output');
const outF = document.getElementById('F__output');

C__btn.addEventListener('click', function () {
   // получаем значение input
   let v1 = document.getElementById('C__input').value;
   if (/^[-+]?[0-9]*\.?[0-9]+$/.test(v1)) {
      let asw1 = (v1 - 32)/1.8;
      outC.innerHTML = `Ваш ответ => ${Math.round(parseFloat(asw1) * 100 / 100)}°C`  // если не число то 
   } else if (!/^[-+]?[0-9]*\.?[0-9]+$/.test(v1) || null || 0 === v1.length) {
      outC.innerHTML = `Не число, или пустая строка=> ${v1}` // если  число то
   } 
});

// получаем знаяени первого инпута, и выводим
F__btn.addEventListener('click', function () {
    // получаем значение input
   let v2 = document.getElementById('F__input').value;
   if (/^[-+]?[0-9]*\.?[0-9]+$/.test(v2)) {
      let asw2 = v2 * 1.8 + 32;
      outF.innerHTML = `Ваш ответ => ${asw2}°F`  // если не число то
   } else if (!/^[-+]?[0-9]*\.?[0-9]+$/.test(v2) || null || 0 === v2.length) {
      outF.innerHTML = `Не число, или пустая строка => ${v2}` // если  число то
   }
});
