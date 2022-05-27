//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log('******* LOOPS IN ARRAYS ******');

const islemler = [-3000, 4500, -2200, -6000, 9000];

const islemlerToplami = () => {
  let yatirma = 0,
    cekme = 0;
  for (let i = 0; i < islemler.length; i++) {
    if (islemler[i] >= 0) {
      yatirma += islemler[i];
    } else {
      cekme += islemler[i];
    }
  }
  return `Toplam yatirma: ${yatirma}, Toplam Cekme:${-cekme}`;
};

console.log(islemlerToplami());

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//*--------------------------------------------------------

const ogrenciler = [
  'ahmet',
  'mehmet',
  'ismet',
  'saffet',
  'ahmet',
  'nur',
  'can',
  'nur',
  'mehmet',
  'cem',
];

const ogrenciBul = function (isim) {
  let sayac = 0;
  for (let i in ogrenciler) {
    if (ogrenciler[i] === isim) {
      sayac++;
    }
  }

  if (sayac === 0) {
    return `${isim} bulunamadi`;
  } else {
    return `${isim}, ${sayac} adet bulundu`;
  }
};

let ogrIsim = prompt('Ogrenci adini giriniz:').toLocaleLowerCase();
console.log(ogrenciBul(ogrIsim));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const ogrenciBulForOf = function (isim) {
  let sayac = 0;
  for (let ogrenci of ogrenciler) {
    if (ogrenci === isim) {
      sayac++;
    }
  }

  if (sayac === 0) {
    return `${isim} bulunamadi`;
  } else {
    return `${isim}, ${sayac} adet bulundu`;
  }
};

let ogrName = prompt('Ogrenci adini giriniz:').toLocaleLowerCase();
console.log(ogrenciBulForOf(ogrName));

//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log('****** ITERATION **********');
//*Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];

//*Dizideki herbir fiyati konsola bastiriniz.

fiyatlar.forEach(yazdir);

function yazdir(v) {
  console.log(v);
}

console.log('***************************');

//! Arraw function kullanılarak çözüm
fiyatlar.forEach((value) => console.log(value));

//** Fiyatlar dizisindekilerin toplamini konsola yazdiriniz */
let toplam = 0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log('Toplam:', toplam);

//! NOT: forEach metodu void bir metottur.
//! (Yani herhangi bir değer döndürmez.)
console.log(fiyatlar.forEach((fiyat) => (toplam += fiyat))); //!undefined

//*-------------- ÖRNEK -------------------

let toplam1 = 0;

fiyatlar.forEach((deger, indis, dizi) => {
  toplam1 += deger;
  console.log(`${indis}.iterasyon toplami:${toplam1}`);
  dizi[indis] = deger + 10;
});
console.log(fiyatlar);

//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//*-------------- ÖRNEK -------------------
//* isimler dizisin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const isimler = [
  'Ahmet',
  'mehmet',
  'ismet',
  'SAFFET',
  'Can',
  'Canan',
  'Cavidan',
];

console.log(isimler);
console.log(isimler.map((isim) => isim.toLocaleUpperCase()));

const kucukIsimler = isimler.map((isim) => isim.toLowerCase());

console.log(kucukIsimler);

//*-------------- ÖRNEK -------------------

const buyukIsimler = isimler.map((isim, i, dizi) => {
  dizi[i] = isim.toLocaleLowerCase(); //! Orjinal diziyi değiştirdik.
  return isim.toLocaleUpperCase();
});

console.log(buyukIsimler);

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================
//! Tüm isimleri büyük harfe çevirip konsolda yazdiriniz.
isimler
  .map((isim) => isim.toLocaleUpperCase())
  .forEach((name) => console.log(name));

// console.log(
//   isimler
//     .map((isim) => isim.toLocaleUpperCase())
//     .forEach((name) => console.log(name))
// );

//* map() metodundan sonra eğer forEach gibi bir terminal(consumer) işlemi
//* kullanılırsa yazılan ifade bir dizi döndürmemiş olur.

//* ======================================================
//*                       FILTER METHOD
//* ======================================================

//! Ahmet olanları seçip büyük harfe çevirip konsolda yazdiriniz.
isimler
  .filter((x) => x === 'ahmet')
  .map((x) => x.toLocaleUpperCase())
  .forEach((x) => console.log(x));

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.

const kucuk250 = fiyatlar.filter((f) => f < 250);
console.log(kucuk250);


//*-------------- ÖDEV -------------------
//* fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.


//* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

