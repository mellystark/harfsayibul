let metin = prompt("Lütfen bir metin giriniz : ");
let harf = prompt("Lütfen metinfe aramak istedipiniz harfi girin : ");

let sonuc = bul(harf);
alert("metinde " + harf + " harfinden " + sonuc + " tane var..");

function bul(harf)
{
    let toplam = 0;
    for(let i=0; i<metin.length; i++)
    {
        if (metin.charAt(i) == harf)
        {
           toplam++;
        }
    }
    return toplam;
}