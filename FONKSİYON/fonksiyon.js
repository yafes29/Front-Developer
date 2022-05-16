// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

console.log('****** FUNC DECLARATION *********');

//* Örnek1:
//****************************************************************/
yazdir(); //!invoke

//! Declaration
//! Paramatre almamış, bir şey döndürmek (void function)
function yazdir() {
  console.log('Merhaba');
}

yazdir(); //!invoke
yazdir(); //!invoke

console.log(typeof yazdir); //* function

//* Örnek2: Parametreli Fonksiyon
//***************************************************************/
//! Bir parametreyi çağırma sırasında kullanmaz isek onun yerine default paramtere atayabiliriz. Önrketek lastName paramterinin default değerine '' atanmıştır.

function selamla(name, lastName = '') {
  console.log(`Merhaba ${name}  ${lastName}`);
}

selamla('Erhan', 'Yılmaz');
selamla('Erol');
selamla('jason');

//* Örnek3: Parametreli, Dönüş değerli
//***************************************************************/

function yasHesapla(year, name) {
  // const mesaj = `${name} in yaşı ${2022 - year} dir `;
  const mesaj = `${name} in yaşı ${new Date().getFullYear() - year} dir `;
  return mesaj;
}

const mesaj1 = yasHesapla(2001, 'Elif');
console.log(mesaj1);


//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
console.log(tekCift(5));
console.log(tekCift(2));

function tekCift(number) {
  return number % 2 === 0 ? `${number} çifttir` : `${number} tekdir`;
}
console.log('******** 2- EXPRESSION*******');

//* Örnek1: Parametreli, Dönüş değerli
//**********************************************************/
// console.log(tekCift(5));
//! function expression yöntemiyle bir fnk tanımlandığında önce tanımlamanın yapılması gerekir yoksa Uncaught ReferenceError: Cannot access 'tekCift' before initialization hatası alınır
// const tekCift = function (number) {
//   return number % 2 === 0 ? `${number} çifttir` : `${number} tekdir`;
// };

console.log(tekCift(2));

//* Örnek2: 3 sayinin en büyüğünü bulan fonks.
//**********************************************************/
const buyukBul = function (x, y, z = -Number.MAX_VALUE) {
  let enBuyuk;
  if (x >= y && x >= z) {
    enBuyuk = x;
  } else if (y >= x && y >= z) {
    enBuyuk = y;
  } else if (z >= x && z >= y) {
    enBuyuk = z;
  } else {
    enBuyuk = x;
  }
  return enBuyuk;
};
console.log('En Büyük Sayi:', buyukBul(1, 3, 2));
console.log('En Büyük Sayi:', buyukBul(5, 2, 1));
console.log('En Büyük Sayi:', buyukBul(4, 6, 7));
console.log('En Büyük Sayi:', buyukBul(6, 6, 7));
console.log('En Büyük Sayi:', buyukBul(9, 8, 9));
console.log('En Büyük Sayi:', buyukBul(8, 9, 9));
console.log('En Büyük Sayi:', buyukBul(8, 9));
console.log('En Büyük Sayi:', buyukBul(-8, -9));

//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/

const hesapla = function (islem, s1, s2) {
  let sonuc;

  if (islem == '+') {
    sonuc = topla(s1, s2);
  } else if (islem == '-') {
    sonuc = cikar(s1, s2);
  } else if (islem == '*') {
    sonuc = carp(s1, s2);
  } else if (islem == '/') {
    sonuc = bol(s1, s2);
  }
  return sonuc;
};

const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};

console.log(hesapla('+', 3, 5));
console.log(hesapla('-', 3, 5));

console.log('****** 3- ARROW FUNCTIONS ******');

//* Örnek1:
//*************************************************************/

const topla = (x, y) => x + y;

//! Arrow fonksiynlarda eğer tek bir ifade kullanılrsa süslü paranteze
//! ihtiyaç olmaz ve dolayısla return gerekmek. aksi takdirde gerekir.
const usAl = (t, u) => {
  return t ** u;
};

const usAl2 = (t, u) => t ** u;

console.log('SONUC =', topla(5, 3));
console.log('US:', usAl(2, 3));
console.log('US:', usAl2(2, 3));

// ! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmalıyız. Ve lazımsa return yapmalıyız.
const menu = (times) => {
  console.log('============================');
  console.log(' JAVASCRIPT ÇOK KOLAYMIŞ');
  console.log('============================');
  return times * 2;
};

console.log(menu(2));

//* Örnek2:
//*************************************************************/

// const tekMi = (n) => (n % 2 === 1 ? 'TEKTIR' : 'CIFTIR');
const tekMi = (n) => (n % 2 ? 'TEKTIR' : 'CIFTIR');

console.log(tekMi(3));

//* Örnek2:
//*************************************************************/

const r = prompt('yarıçapı griniz');
const h = prompt('yukseklik giriniz');

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log('Silindirin hacmi :', Math.trunc(hacimHesapla(r, h)));
console.log('Silindirin hacmi :', hacimHesapla(r, h).toFixed(1));

                                FUNCTİON YOUTUBE//

function merhaba() {
  console.log("merhaba");
}
merhaba();

function selam(isim){
  console.log("Benim adım" + " " + isim);
}
selam("Mustafa");

const isim = (isim) => {
  console.log("Merhaba benim adım : " + " " + isim);
}
 isim("Mustafa");


 const mustafa = (name, otherName) => {
   console.log(`Benim ismim ${name} ${otherName}'dir.`);
 }
 mustafa("Mustafa", "Pala");

 const bilgilerim = (yas, okul, sehir) => {
   console.log(`Benim yasım ${yas} ve mezun oldugum okul ${okul}, yasadıgım sehir ise ${sehir}' dir.`);
 }
 bilgilerim(29, "GATA", "Ankara");

 const a = (name) => {
   console.log(`${name}`);
 }
 a(30);

 const ad = (isim = "Veli") => {
   console.log("merhaba benim adım " + isim);
 }
 ad();
const karekok = (a) => {
return Math.sqrt(a);
}
console.log(karekok(81));

const ustel = (b) => {
  return Math.log(b)
}
console.log(ustel(179803));

const asinn = (c) =>{
  return Math.sqrt(c)
}
console.log(asinn(9));


const dondur = (d) =>{
  return Math.random(d);
}
console.log(dondur(31));

// Hızlandırılmış fonksiyon kullanımı//


(function () {
  console.log("merhaba");
}) ();


 (() => {
  console.log("merhaba2");
} )();


(function () {
  console.log("selam");
} ) ();

// NESNE İCİNDE FUNCTİIN KULLANIMI//


const nesne = {
  ekle: function() {
    console.log("Ekle func calıstı");
  },
  guncelle: function(){
    console.log("guncelle fonc calıstı");
  }
};
nesne.ekle();
nesne.guncelle();
nesne.sil = function () {
 console.log("sil func calıstı.");
};
nesne.sil();



const bilgilerim = {

  yasım: function() {
    console.log("Yasım 24");
  },
  soyadım: function(){
    console.log("PALA");
  },
}
bilgilerim.yasım();
bilgilerim.soyadım();
bilgilerim.semt = function() {
  console.log("ANKARA");
}
bilgilerim.semt();




const ıd = {
  sehır: function () {
    console.log("ankara");
  },
  semt : function(){
    console.log("etlik");
  },
  mahalle: function(){
    console.log("ASagı eglence");
  }
}
ıd.bına = function () {
  console.log(22);
}

ıd.sehır();
ıd.semt();
ıd.mahalle();
ıd.bına();
console.log(ıd);

// İC İCE FONKSİYON //

function islem(a,b)  {
  function islem2(x) {
    return x * x;
  }
  return islem2(a) + islem2(b);
}
console.log(islem(3,8));



function math(c,d) {
  function result(x){
    return x ** 2;
  }
  return result(c) + result(d);
}
console.log(math(4,6));






function sin(m,p) {
  function hesapla(a) {
  return a + a;
}
return hesapla(m) * hesapla(p);
}
console.log(sin(3,5));


function toplama(q,w) {
  function result(a) {
    return a + a;
  }
  return result(q) * result(w);
}
console.log(toplama(2,3));





