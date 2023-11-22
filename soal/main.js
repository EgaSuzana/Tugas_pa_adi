var soal1 = prompt("1. dimna ibu kota indonesia?")
var point = 0;

if(soal1 == "Jakarta"){
    point += 1;
    alert(`jawaban anda Benar, poin anda sekarang adalah ${point}`);
    var soal2 = prompt("2. 5 x 200")
    if(soal2 == "1000"){
        point += 1;
        alert(`jawaban anda Benar, poin anda sekarang adalah ${point}`);
        var soal3 = prompt("3. dimna kah skolah smkn4 berada?")
        if(soal3 == "Depok"){
            point += 1;
            alert(`jawaban anda Benar, poin anda sekarang adalah ${point}`);
            var soal4 = prompt("4. apa bahasa inggris nya kenapa")
            if(soal4 == "why"){
                point += 1;
                alert(`jawaban anda Benar, poin anda sekarang adalah ${point}`);
                var soal5 = prompt("5. Ada berapa tipe data dalam javascript?")
                if(soal5 == "6"){
                    point += 1;
                    alert(`jawaban anda Benar, poin anda sekarang adalah ${point}`);
                }
                else{
                    point += 0;
                    alert(`jawaban anda Salah, poin anda sekarang adalah ${point}`);
                }
            }
            else{
                point += 0;
                alert(`jawaban anda Salah, poin anda sekarang adalah ${point}`);
            }
        }
        else{
            point += 0;
            alert(`jawaban anda Salah, poin anda sekarang adalah ${point}`);
        }
    }else{
        point += 0;
        alert(`jawaban anda Salah, poin anda sekarang adalah ${point}`);
    }
}else{
    point += 0;
    alert(`jawaban anda Salah, poin anda sekarang adalah ${point}`);
}