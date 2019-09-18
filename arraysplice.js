//menambahkan value ke array
let bulan = ['januari', 'februari','maret', 'juni'];
bulan.splice(3, 0, 'april');
console.log(bulan);

//Replace value array berdasarkan index yang dipilih
bulan.splice(4, 1, 'mei');
console.log(bulan)

//Delete semua elemen sete;lah index ke 1
bulan.splice(1)
console.log(bulan)

//fish 
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
let removed = myFish.splice(0, 3, 'parrot', 'anemone', 'blue');
console.log(myFish);
