//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals

const book1 = {
    title: 'The Brothers Karamazov',
    author: 'Dostoyevski',
    year: 1880,
    getSummary: function () {
      return `${this.title} was written by ${this.author} in ${this.year} `;
    },
  };
  
  console.log(book1);
  console.log(book1.getSummary());
  console.log(book1.toString()); //! Object nesnesinden miras yoluyla geldi.
  
  const book2 = {
    title: 'the lily of the valley',
    author: 'Honero de balzac',
    year: 1835,
    getSummary: function () {
      return `${this.title} was written by ${this.author} in ${this.year} `;
    },
  };
  
  console.log(book2);
  console.log(book2.getSummary());
  
  //? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
  //? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
  //? Cozum: Object Oriented Programming (ES5 and ES6)


  //* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date and Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
      return `${this.title} was written by ${this.author} in ${this.year} `;
    };
  }
  
  //? new keyword'u Book Constructor'ini parametereler ile cagirmaktadir.
  //? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
  //? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
  //? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
  //? her bir instance'a da hayat bulmus olur.
  
  const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
  const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
  
  console.log(book1);
  console.log(book2.getSummary());