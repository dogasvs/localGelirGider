let gelirgiderForm = document.querySelector('.gelirgider');
let gelir = document.querySelector('.gelirList');
let gider = document.querySelector('.giderList');
let sonucList = document.querySelector('.sonucList');
let sifirla = document.querySelector('.delete');

let gelirListesi = [];
let giderListesi = [];

if(typeof localStorage.gelirListesi !== 'undefined') {
  gelirListesi = JSON.parse(localStorage.gelirListesi);
  renderGelir();
}

if(typeof localStorage.giderListesi !== 'undefined') {
  giderListesi = JSON.parse(localStorage.giderListesi);
  renderGider();
}

function handleSubmitForm(e) {
  e.preventDefault();
  let formData = new FormData(gelirgiderForm);
  let formObj = Object.fromEntries(formData);
  gelirListesi.push(formObj);
  giderListesi.push(formObj);
  gelirgiderForm.reset();
  renderGelir();
  renderGider();
  saveGelir();
  saveGider();
}

gelirgiderForm.addEventListener('submit', handleSubmitForm);

function saveGelir() {
  localStorage.gelirListesi = JSON.stringify(gelirListesi);
}

function saveGider() {
  localStorage.giderListesi = JSON.stringify(giderListesi);
}

function renderGelir() {
  gelir.innerHTML = '';
  for(let i = 0; i < gelirListesi.length; i++) {
    gelir.innerHTML += ` <li> ${gelirListesi[i].gelir} </li> `;
  }
}

function renderGider() {
    gider.innerHTML = '';
  for(let i = 0; i < giderListesi.length; i++ ) {
    gider.innerHTML += ` <li> ${giderListesi[i].gider} </li> `;
  }
}

// function renderSonuc() {
//   let sonuc = gelir - gider;
//     sonucList.innerHTML = `<li> ${sonuc} </li> `;
// }

function clearForm() {
  localStorage.clear();
  giderListesi = [];
  gelirListesi = [];
  renderGelir();
  renderGider();
}

sifirla.addEventListener('click', clearForm);
