/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

const surucuYasi = 1;
if (surucuYasi > 18) {
  console.log(true);
} else {
  console.log(false);
}
/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
let birinciDeger = 0;
let ikinciDeger = 0;
if (birinciDeger > ikinciDeger) {
  birinciDeger = 1;
} console.log(birinciDeger);

/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/

let metin = "1999";
let sayi = Number(metin);
console.log(sayi);
/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/

function carpma(a, b) {
  return a * b;
};
console.log(carpma(7, 4));

/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(yas) {
   return yas * 7;
};

/* Görev 3
*/

function oyun(oyuncu, bilgisayar) {
  function bilgisayarinSecimi() {
    let bilgisayarSayi = Math.floor((Math.random() * 3) + 1);
    if (bilgisayarSayi === 1) {
      bilgisayar === "Taş";
    } else if (bilgisayarSayi === 2) {
      bilgisayar === "Kağıt";
    } else {
      bilgisayar === "Makas";
    } return bilgisayar;
  }
}
let oyuncu = prompt("Taş, Kağıt veya Makas seç.");
if (
   (oyuncu === "Taş" && bilgisayar === "Makas") ||
   (oyuncu === "Makas" && bilgisayar === "Kağıt") ||
   (oyuncu === "Kağıt" && bilgisayar === "Taş")
) {
  return "Kazandın!";
} else if (oyuncu === bilgisayar) {
  return "Beraberlik";
} else {
  return "Kaybettin!"
}
console.log(oyun("Makas", bilgisayarinSecimi()));

/* Görev 4 : Metrik Dönüştürücü */

function milDonusturucu(km) {
  let mil = km * 1.609344;
  return mil;
}

//Görev 4b - Santimetreden Feet

function feetDonusturucu(cm) {
  let feet = cm * 0.0328084;
  return feet;
}

/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk
*/

function cocukSarkisi(sayi) {
  for (let i = 3; i > 1; i--)
  return `${sayi} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"`;
};
console.log(cocukSarkisi());

/* Görev 6 : Not Hesaplayıcı */

function notHesapla(not) {
  if (not >= 90 && not <= 100) {
    return "A aldın";
  } else if (not >= 80) {
    return "B aldın";
  } else if (not >= 70) {
    return "C aldın";
  } else if (not >= 60) {
    return "D aldın";
  } else {
    return "F aldın";
  }
}

/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

function sesliHarfSayaci(metin) {
  for (let i = 0; i < metin.length; i++) {
    let kucuk = metin.toLowerCase();
    let bos = 0;
    if (
    (metin(i) === "a") ||
    (metin(i) === "e") ||
    (metin(i) === "ı") ||
    (metin(i) === "i") ||
    (metin(i) === "o") ||
    (metin(i) === "ö") ||
    (metin(i) === "u") ||
    (metin(i) === "ü")
    ) {
      bos = bos + 1;
    } return bos;
  }
}

/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
