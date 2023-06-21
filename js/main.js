// Girasol
document.querySelector('#submit').addEventListener('click', function () {

    var qtyBox = document.querySelector('.qtyBox').value;
    var nombre = document.getElementById('nombreproduc').innerHTML;
    console.log(nombre);

    let url = "https://api.whatsapp.com/send?phone=+573142564829&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox + " amigurumis de " + nombre;

    window.open(url);
});

// conteo girasol
let addBtn = document.querySelector('.add');
let subBtn = document.querySelector('.sub');
let qty = document.querySelector('.qtyBox');

addBtn.addEventListener('click', () => {
    qty.value = parseInt(qty.value) + 1;
});

subBtn.addEventListener('click', () => {
    if (qty.value <= 0) {
        qty.value = 0;
    }
    else {
        qty.value = parseInt(qty.value) - 1;
    }
});

// Girasol2
document.querySelector('#submit0').addEventListener('click', function () {

    var qtyBox0 = document.querySelector('.qtyBox0').value;
    var nombre0 = document.getElementById('nombreproducgir').innerHTML;
    console.log(nombre0);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox0 + " amigurumis de " + nombre0;

    window.open(url);
});

// conteo girasol2
let add0Btn = document.querySelector('.add0');
let sub0Btn = document.querySelector('.sub0');
let qty0 = document.querySelector('.qtyBox0');

add0Btn.addEventListener('click', () => {
    qty0.value = parseInt(qty0.value) + 1;
});

sub0Btn.addEventListener('click', () => {
    if (qty0.value <= 0) {
        qty0.value = 0;
    }
    else {
        qty0.value = parseInt(qty0.value) - 1;
    }
});

// margaritas
document.querySelector('#submit2').addEventListener('click', function () {

    var qtyBox2 = document.querySelector('.qtyBox2').value;
    var nombre2 = document.getElementById('nombreproducto').innerHTML;
    console.log(nombre2);

    let url = "https://api.whatsapp.com/send?phone=+573142564829&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox2 + " amigurumis de " + nombre2;

    window.open(url);
});
// conteo margaritas
let add2Btn = document.querySelector('.add2');
let sub2Btn = document.querySelector('.sub2');
let qty2 = document.querySelector('.qtyBox2');

add2Btn.addEventListener('click', () => {
    qty2.value = parseInt(qty2.value) + 1;
});

sub2Btn.addEventListener('click', () => {
    if (qty2.value <= 0) {
        qty2.value = 0;
    }
    else {
        qty2.value = parseInt(qty2.value) - 1;
    }
});
// margaritas2
document.querySelector('#submit221').addEventListener('click', function () {

    var qtyBox221 = document.querySelector('.qtyBox221').value;
    var nombre221 = document.getElementById('nombreproductomarga').innerHTML;
    console.log(nombre221);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox221 + " amigurumis de " + nombre221;

    window.open(url);
});
// conteo margaritas2
let add221Btn = document.querySelector('.add221');
let sub221Btn = document.querySelector('.sub221');
let qty221 = document.querySelector('.qtyBox221');

add221Btn.addEventListener('click', () => {
    qty221.value = parseInt(qty221.value) + 1;
});

sub221Btn.addEventListener('click', () => {
    if (qty221.value <= 0) {
        qty221.value = 0;
    }
    else {
        qty221.value = parseInt(qty221.value) - 1;
    }
});
// orquideas
document.querySelector('#submit3').addEventListener('click', function () {

    var qtyBox3 = document.querySelector('.qtyBox3').value;
    var nombre3 = document.getElementById('nombreorquidea').innerHTML;
    console.log(nombre3);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox3 + " amigurumis de " + nombre3;

    window.open(url);
});

// conteo orquideas
let add3Btn = document.querySelector('.add3');
let sub3Btn = document.querySelector('.sub3');
let qty3 = document.querySelector('.qtyBox3');

add3Btn.addEventListener('click', () => {
    qty3.value = parseInt(qty3.value) + 1;
});

sub3Btn.addEventListener('click', () => {
    if (qty3.value <= 0) {
        qty3.value = 0;
    }
    else {
        qty3.value = parseInt(qty3.value) - 1;
    }
});


// orquideas2
document.querySelector('#submit331').addEventListener('click', function () {

    var qtyBox331 = document.querySelector('.qtyBox331').value;
    var nombre331 = document.getElementById('nombreorquideas').innerHTML;
    console.log(nombre331);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox331 + " amigurumis de " + nombre331;

    window.open(url);
});

// conteo orquideas2
let add331Btn = document.querySelector('.add331');
let sub331Btn = document.querySelector('.sub331');
let qty331 = document.querySelector('.qtyBox331');

add331Btn.addEventListener('click', () => {
    qty331.value = parseInt(qty331.value) + 1;
});

sub331Btn.addEventListener('click', () => {
    if (qty331.value <= 0) {
        qty331.value = 0;
    }
    else {
        qty331.value = parseInt(qty331.value) - 1;
    }
});

// Cerdo
document.querySelector('#submit4').addEventListener('click', function () {

    var qtyBox4 = document.querySelector('.qtyBox4').value;
    var nombre4 = document.getElementById('nombrecerdo').innerHTML;
    console.log(nombre4);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox4 + " amigurumis de " + nombre4;

    window.open(url);
});

// conteo cerdo
let add4Btn = document.querySelector('.add4');
let sub4Btn = document.querySelector('.sub4');
let qty4 = document.querySelector('.qtyBox4');

add4Btn.addEventListener('click', () => {
    qty4.value = parseInt(qty4.value) + 1;
});

sub4Btn.addEventListener('click', () => {
    if (qty4.value <= 0) {
        qty4.value = 0;
    }
    else {
        qty4.value = parseInt(qty4.value) - 1;
    }
});
// Cerdo 2
document.querySelector('#submit441').addEventListener('click', function () {

    var qtyBox441 = document.querySelector('.qtyBox441').value;
    var nombre441 = document.getElementById('nombrecerdoo').innerHTML;
    console.log(nombre441);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox441 + " amigurumis de " + nombre441;

    window.open(url);
});

// conteo cerdo 2
let add441Btn = document.querySelector('.add441');
let sub441Btn = document.querySelector('.sub441');
let qty441 = document.querySelector('.qtyBox441');

add441Btn.addEventListener('click', () => {
    qty441.value = parseInt(qty441.value) + 1;
});

sub441Btn.addEventListener('click', () => {
    if (qty441.value <= 0) {
        qty441.value = 0;
    }
    else {
        qty441.value = parseInt(qty441.value) - 1;
    }
});

// stitch 
document.querySelector('#submit5').addEventListener('click', function () {

    var qtyBox5 = document.querySelector('.qtyBox5').value;
    var nombre5 = document.getElementById('nombresticht').innerHTML;
    console.log(nombre5);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox5 + " amigurumis de " + nombre5;

    window.open(url);
});

// stitch conteo 
let add5Btn = document.querySelector('.add5');
let sub5Btn = document.querySelector('.sub5');
let qty5 = document.querySelector('.qtyBox5');

add5Btn.addEventListener('click', () => {
    qty5.value = parseInt(qty5.value) + 1;
});

sub5Btn.addEventListener('click', () => {
    if (qty5.value <= 0) {
        qty5.value = 0;
    }
    else {
        qty5.value = parseInt(qty5.value) - 1;
    }
});

// stitch 2
document.querySelector('#submit551').addEventListener('click', function () {

    var qtyBox551 = document.querySelector('.qtyBox551').value;
    var nombre551 = document.getElementById('nombrestichts').innerHTML;
    console.log(nombre551);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox551 + " amigurumis de " + nombre551;

    window.open(url);
});

// stitch conteo 2
let add551Btn = document.querySelector('.add551');
let sub551Btn = document.querySelector('.sub551');
let qty551 = document.querySelector('.qtyBox551');

add551Btn.addEventListener('click', () => {
    qty551.value = parseInt(qty551.value) + 1;
});

sub551Btn.addEventListener('click', () => {
    if (qty551.value <= 0) {
        qty551.value = 0;
    }
    else {
        qty551.value = parseInt(qty551.value) - 1;
    }
});












// zorro 
document.querySelector('#submit6').addEventListener('click', function () {

    var qtyBox6 = document.querySelector('.qtyBox6').value;
    var nombre6 = document.getElementById('nombrezorro').innerHTML;
    console.log(nombre6);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox6 + " amigurumis de " + nombre6;

    window.open(url);
});

// zorro conteo 
let add6Btn = document.querySelector('.add6');
let sub6Btn = document.querySelector('.sub6');
let qty6 = document.querySelector('.qtyBox6');

add6Btn.addEventListener('click', () => {
    qty6.value = parseInt(qty6.value) + 1;
});

sub6Btn.addEventListener('click', () => {
    if (qty6.value <= 0) {
        qty6.value = 0;
    }
    else {
        qty6.value = parseInt(qty6.value) - 1;
    }
});

// zorro 2
document.querySelector('#submit661').addEventListener('click', function () {

    var qtyBox661 = document.querySelector('.qtyBox661').value;
    var nombre661 = document.getElementById('nombrezorron').innerHTML;
    console.log(nombre661);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox661 + " amigurumis de " + nombre661;

    window.open(url);
});

// zorro conteo 2
let add661Btn = document.querySelector('.add661');
let sub661Btn = document.querySelector('.sub661');
let qty661 = document.querySelector('.qtyBox661');

add661Btn.addEventListener('click', () => {
    qty661.value = parseInt(qty661.value) + 1;
});

sub661Btn.addEventListener('click', () => {
    if (qty661.value <= 0) {
        qty661.value = 0;
    }
    else {
        qty661.value = parseInt(qty661.value) - 1;
    }
});



// Batman
document.querySelector('#submit7').addEventListener('click', function () {

    var qtyBox7 = document.querySelector('.qtyBox7').value;
    var nombre7 = document.getElementById('nombrebatman').innerHTML;
    console.log(nombre7);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox7 + " amigurumis de " + nombre7;

    window.open(url);
});

// Batman conteo 
let add7Btn = document.querySelector('.add7');
let sub7Btn = document.querySelector('.sub7');
let qty7 = document.querySelector('.qtyBox7');

add7Btn.addEventListener('click', () => {
    qty7.value = parseInt(qty7.value) + 1;
});

sub7Btn.addEventListener('click', () => {
    if (qty7.value <= 0) {
        qty7.value = 0;
    }
    else {
        qty7.value = parseInt(qty7.value) - 1;
    }
});

// Batman2
document.querySelector('#submit771').addEventListener('click', function () {

    var qtyBox771 = document.querySelector('.qtyBox771').value;
    var nombre771 = document.getElementById('nombrebatmann').innerHTML;
    console.log(nombre771);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox771 + " amigurumis de " + nombre771;

    window.open(url);
});

// Batman conteo2 
let add771Btn = document.querySelector('.add771');
let sub771Btn = document.querySelector('.sub771');
let qty771 = document.querySelector('.qtyBox771');

add771Btn.addEventListener('click', () => {
    qty771.value = parseInt(qty771.value) + 1;
});

sub771Btn.addEventListener('click', () => {
    if (qty771.value <= 0) {
        qty771.value = 0;
    }
    else {
        qty771.value = parseInt(qty771.value) - 1;
    }
});

// Gato
document.querySelector('#submit8').addEventListener('click', function () {

    var qtyBox8 = document.querySelector('.qtyBox8').value;
    var nombre8 = document.getElementById('nombregato').innerHTML;
    console.log(nombre8);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox8 + " amigurumis de " + nombre8;

    window.open(url);
});

// Gato conteo 
let add8Btn = document.querySelector('.add8');
let sub8Btn = document.querySelector('.sub8');
let qty8 = document.querySelector('.qtyBox8');

add8Btn.addEventListener('click', () => {
    qty8.value = parseInt(qty8.value) + 1;
});

sub8Btn.addEventListener('click', () => {
    if (qty8.value <= 0) {
        qty8.value = 0;
    }
    else {
        qty8.value = parseInt(qty8.value) - 1;
    }
});
// Gato2
document.querySelector('#submit881').addEventListener('click', function () {

    var qtyBox881 = document.querySelector('.qtyBox881').value;
    var nombre881 = document.getElementById('nombregatoo').innerHTML;
    console.log(nombre881);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox881 + " amigurumis de " + nombre881;

    window.open(url);
});

// Gato conteo 2
let add881Btn = document.querySelector('.add881');
let sub881Btn = document.querySelector('.sub881');
let qty881 = document.querySelector('.qtyBox881');

add881Btn.addEventListener('click', () => {
    qty881.value = parseInt(qty881.value) + 1;
});

sub881Btn.addEventListener('click', () => {
    if (qty881.value <= 0) {
        qty881.value = 0;
    }
    else {
        qty881.value = parseInt(qty881.value) - 1;
    }
});

// Loki
document.querySelector('#submit9').addEventListener('click', function () {

    var qtyBox9 = document.querySelector('.qtyBox9').value;
    var nombre9 = document.getElementById('nombreloki').innerHTML;
    console.log(nombre9);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox9 + " amigurumis de " + nombre9;

    window.open(url);
});

// Loki conteo 
let add9Btn = document.querySelector('.add9');
let sub9Btn = document.querySelector('.sub9');
let qty9 = document.querySelector('.qtyBox9');

add9Btn.addEventListener('click', () => {
    qty9.value = parseInt(qty9.value) + 1;
});

sub9Btn.addEventListener('click', () => {
    if (qty9.value <= 0) {
        qty9.value = 0;
    }
    else {
        qty9.value = parseInt(qty9.value) - 1;
    }
});

// Loki2
document.querySelector('#submit991').addEventListener('click', function () {

    var qtyBox991 = document.querySelector('.qtyBox991').value;
    var nombre991 = document.getElementById('nombreloki').innerHTML;
    console.log(nombre991);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox991 + " amigurumis de " + nombre991;

    window.open(url);
});

// Loki conteo 2
let add991Btn = document.querySelector('.add991');
let sub991Btn = document.querySelector('.sub991');
let qty991 = document.querySelector('.qtyBox991');

add991Btn.addEventListener('click', () => {
    qty991.value = parseInt(qty991.value) + 1;
});

sub991Btn.addEventListener('click', () => {
    if (qty991.value <= 0) {
        qty991.value = 0;
    }
    else {
        qty991.value = parseInt(qty991.value) - 1;
    }
});

// Luffy
document.querySelector('#submit10').addEventListener('click', function () {

    var qtyBox10 = document.querySelector('.qtyBox10').value;
    var nombre10 = document.getElementById('nombreluffy').innerHTML;
    console.log(nombre10);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox10 + " amigurumis de " + nombre10;

    window.open(url);
});

// Luffy conteo 
let add10Btn = document.querySelector('.add10');
let sub10Btn = document.querySelector('.sub10');
let qty10 = document.querySelector('.qtyBox10');

add10Btn.addEventListener('click', () => {
    qty10.value = parseInt(qty10.value) + 1;
});

sub10Btn.addEventListener('click', () => {
    if (qty10.value <= 0) {
        qty10.value = 0;
    }
    else {
        qty10.value = parseInt(qty10.value) - 1;
    }
});
// Luffy2
document.querySelector('#submit100').addEventListener('click', function () {

    var qtyBox100 = document.querySelector('.qtyBox100').value;
    var nombre100 = document.getElementById('nombreluffyy').innerHTML;
    console.log(nombre100);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox100 + " amigurumis de " + nombre100;

    window.open(url);
});

// Luffy conteo 2
let add100Btn = document.querySelector('.add100');
let sub100Btn = document.querySelector('.sub100');
let qty100 = document.querySelector('.qtyBox100');

add100Btn.addEventListener('click', () => {
    qty100.value = parseInt(qty100.value) + 1;
});

sub100Btn.addEventListener('click', () => {
    if (qty100.value <= 0) {
        qty100.value = 0;
    }
    else {
        qty100.value = parseInt(qty100.value) - 1;
    }
});

// Luka
document.querySelector('#submit11').addEventListener('click', function () {

    var qtyBox11 = document.querySelector('.qtyBox11').value;
    var nombre11 = document.getElementById('nombreluka').innerHTML;
    console.log(nombre11);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox11 + " amigurumis de " + nombre11;

    window.open(url);
});

// Luka conteo 
let add11Btn = document.querySelector('.add11');
let sub11Btn = document.querySelector('.sub11');
let qty11 = document.querySelector('.qtyBox11');

add11Btn.addEventListener('click', () => {
    qty11.value = parseInt(qty11.value) + 1;
});

sub11Btn.addEventListener('click', () => {
    if (qty11.value <= 0) {
        qty11.value = 0;
    }
    else {
        qty11.value = parseInt(qty11.value) - 1;
    }
});
// Luka2
document.querySelector('#submit111').addEventListener('click', function () {

    var qtyBox111 = document.querySelector('.qtyBox111').value;
    var nombre111 = document.getElementById('nombrelukaa').innerHTML;
    console.log(nombre111);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox111 + " amigurumis de " + nombre111;

    window.open(url);
});

// Luka conteo 2
let add111Btn = document.querySelector('.add111');
let sub111Btn = document.querySelector('.sub111');
let qty111 = document.querySelector('.qtyBox111');

add111Btn.addEventListener('click', () => {
    qty111.value = parseInt(qty111.value) + 1;
});

sub111Btn.addEventListener('click', () => {
    if (qty111.value <= 0) {
        qty111.value = 0;
    }
    else {
        qty111.value = parseInt(qty111.value) - 1;
    }
});

// conejo
document.querySelector('#submit12').addEventListener('click', function () {

    var qtyBox12 = document.querySelector('.qtyBox12').value;
    var nombre12 = document.getElementById('nombreconejo').innerHTML;
    console.log(nombre12);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox12 + " amigurumis de " + nombre12;

    window.open(url);
});

// conejo 
let add12Btn = document.querySelector('.add12');
let sub12Btn = document.querySelector('.sub12');
let qty12 = document.querySelector('.qtyBox12');

add12Btn.addEventListener('click', () => {
    qty12.value = parseInt(qty12.value) + 1;
});

sub12Btn.addEventListener('click', () => {
    if (qty12.value <= 0) {
        qty12.value = 0;
    }
    else {
        qty12.value = parseInt(qty12.value) - 1;
    }
});
// conejo
document.querySelector('#submit122').addEventListener('click', function () {

    var qtyBox122 = document.querySelector('.qtyBox122').value;
    var nombre122 = document.getElementById('nombreconejoo').innerHTML;
    console.log(nombre122);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox122 + " amigurumis de " + nombre122;

    window.open(url);
});

// conejo 
let add122Btn = document.querySelector('.add122');
let sub122Btn = document.querySelector('.sub122');
let qty122 = document.querySelector('.qtyBox122');

add122Btn.addEventListener('click', () => {
    qty122.value = parseInt(qty122.value) + 1;
});

sub122Btn.addEventListener('click', () => {
    if (qty122.value <= 0) {
        qty122.value = 0;
    }
    else {
        qty122.value = parseInt(qty122.value) - 1;
    }
});
// muñeca personaizada 1
document.querySelector('#submit13').addEventListener('click', function () {

    var qtyBox13 = document.querySelector('.qtyBox13').value;
    var nombre13 = document.getElementById('nombremu').innerHTML;
    console.log(nombre13);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox13 + " amigurumis de " + nombre13;

    window.open(url);
});

// muñeca personaizada 1 
let add13Btn = document.querySelector('.add13');
let sub13Btn = document.querySelector('.sub13');
let qty13 = document.querySelector('.qtyBox13');

add13Btn.addEventListener('click', () => {
    qty13.value = parseInt(qty13.value) + 1;
});

sub13Btn.addEventListener('click', () => {
    if (qty13.value <= 0) {
        qty13.value = 0;
    }
    else {
        qty13.value = parseInt(qty13.value) - 1;
    }
});
// muñeca personaizada 1.1
document.querySelector('#submit133').addEventListener('click', function () {

    var qtyBox133 = document.querySelector('.qtyBox133').value;
    var nombre133 = document.getElementById('nombremuu').innerHTML;
    console.log(nombre133);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox133 + " amigurumis de " + nombre133;

    window.open(url);
});

// muñeca personaizada 1.1
let add133Btn = document.querySelector('.add133');
let sub133Btn = document.querySelector('.sub133');
let qty133 = document.querySelector('.qtyBox133');

add133Btn.addEventListener('click', () => {
    qty133.value = parseInt(qty133.value) + 1;
});

sub133Btn.addEventListener('click', () => {
    if (qty133.value <= 0) {
        qty133.value = 0;
    }
    else {
        qty133.value = parseInt(qty133.value) - 1;
    }
});

// muñeca personaizada 2
document.querySelector('#submit14').addEventListener('click', function () {

    var qtyBox14 = document.querySelector('.qtyBox14').value;
    var nombre14 = document.getElementById('nombremuñe').innerHTML;
    console.log(nombre14);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox14 + " amigurumis de " + nombre14;

    window.open(url);
});

// muñeca personaizada 2 
let add14Btn = document.querySelector('.add14');
let sub14Btn = document.querySelector('.sub14');
let qty14 = document.querySelector('.qtyBox14');

add14Btn.addEventListener('click', () => {
    qty14.value = parseInt(qty14.value) + 1;
});

sub14Btn.addEventListener('click', () => {
    if (qty14.value <= 0) {
        qty14.value = 0;
    }
    else {
        qty14.value = parseInt(qty14.value) - 1;
    }
});
// muñeca personaizada 2.1
document.querySelector('#submit144').addEventListener('click', function () {

    var qtyBox144 = document.querySelector('.qtyBox144').value;
    var nombre144 = document.getElementById('nombremuñee').innerHTML;
    console.log(nombre144);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox144 + " amigurumis de " + nombre144;

    window.open(url);
});

// muñeca personaizada 2.1
let add144Btn = document.querySelector('.add144');
let sub144Btn = document.querySelector('.sub144');
let qty144 = document.querySelector('.qtyBox144');

add144Btn.addEventListener('click', () => {
    qty144.value = parseInt(qty144.value) + 1;
});

sub144Btn.addEventListener('click', () => {
    if (qty144.value <= 0) {
        qty144.value = 0;
    }
    else {
        qty144.value = parseInt(qty144.value) - 1;
    }
});

// muñeca personaizada 3
document.querySelector('#submit15').addEventListener('click', function () {

    var qtyBox15 = document.querySelector('.qtyBox15').value;
    var nombre15 = document.getElementById('nombremuñeca').innerHTML;
    console.log(nombre15);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox15 + " amigurumis de " + nombre15;

    window.open(url);
});

// muñeca personaizada 3 
let add15Btn = document.querySelector('.add15');
let sub15Btn = document.querySelector('.sub15');
let qty15 = document.querySelector('.qtyBox15');

add15Btn.addEventListener('click', () => {
    qty15.value = parseInt(qty15.value) + 1;
});

sub15Btn.addEventListener('click', () => {
    if (qty15.value <= 0) {
        qty15.value = 0;
    }
    else {
        qty15.value = parseInt(qty15.value) - 1;
    }
});
// muñeca personaizada 3.1
document.querySelector('#submit155').addEventListener('click', function () {

    var qtyBox155 = document.querySelector('.qtyBox155').value;
    var nombre155 = document.getElementById('nombremuñecaa').innerHTML;
    console.log(nombre155);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox155 + " amigurumis de " + nombre155;

    window.open(url);
});

// muñeca personaizada 3.1
let add155Btn = document.querySelector('.add155');
let sub155Btn = document.querySelector('.sub155');
let qty155 = document.querySelector('.qtyBox155');

add155Btn.addEventListener('click', () => {
    qty155.value = parseInt(qty155.value) + 1;
});

sub155Btn.addEventListener('click', () => {
    if (qty155.value <= 0) {
        qty155.value = 0;
    }
    else {
        qty155.value = parseInt(qty155.value) - 1;
    }
});

// puercosaurio
document.querySelector('#submit16').addEventListener('click', function () {

    var qtyBox16 = document.querySelector('.qtyBox16').value;
    var nombre16 = document.getElementById('nombresaurio').innerHTML;
    console.log(nombre16);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox16 + " amigurumis de " + nombre16;

    window.open(url);
});

// puercosaurio 
let add16Btn = document.querySelector('.add16');
let sub16Btn = document.querySelector('.sub16');
let qty16 = document.querySelector('.qtyBox16');

add16Btn.addEventListener('click', () => {
    qty16.value = parseInt(qty16.value) + 1;
});

sub16Btn.addEventListener('click', () => {
    if (qty16.value <= 0) {
        qty16.value = 0;
    }
    else {
        qty16.value = parseInt(qty16.value) - 1;
    }
});


// puercosaurio2
document.querySelector('#submit166').addEventListener('click', function () {

    var qtyBox166 = document.querySelector('.qtyBox166').value;
    var nombre166 = document.getElementById('nombresaurioo').innerHTML;
    console.log(nombre166);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox166 + " amigurumis de " + nombre166;

    window.open(url);
});

// puercosaurio 2
let add166Btn = document.querySelector('.add166');
let sub166Btn = document.querySelector('.sub166');
let qty166 = document.querySelector('.qtyBox166');

add166Btn.addEventListener('click', () => {
    qty166.value = parseInt(qty166.value) + 1;
});

sub166Btn.addEventListener('click', () => {
    if (qty166.value <= 0) {
        qty166.value = 0;
    }
    else {
        qty166.value = parseInt(qty166.value) - 1;
    }
});


// Capibara
document.querySelector('#submit17').addEventListener('click', function () {

    var qtyBox17 = document.querySelector('.qtyBox17').value;
    var nombre17 = document.getElementById('nombrebara').innerHTML;
    console.log(nombre17);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox17 + " amigurumis de " + nombre17;

    window.open(url);
});

// Capibara 
let add17Btn = document.querySelector('.add17');
let sub17Btn = document.querySelector('.sub17');
let qty17 = document.querySelector('.qtyBox17');

add17Btn.addEventListener('click', () => {
    qty17.value = parseInt(qty17.value) + 1;
});

sub17Btn.addEventListener('click', () => {
    if (qty17.value <= 0) {
        qty17.value = 0;
    }
    else {
        qty17.value = parseInt(qty17.value) - 1;
    }
});

// Capibara2
document.querySelector('#submit177').addEventListener('click', function () {

    var qtyBox177 = document.querySelector('.qtyBox177').value;
    var nombre177 = document.getElementById('nombrebaraa').innerHTML;
    console.log(nombre177);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox177 + " amigurumis de " + nombre177;

    window.open(url);
});

// Capibara 2
let add177Btn = document.querySelector('.add177');
let sub177Btn = document.querySelector('.sub177');
let qty177 = document.querySelector('.qtyBox177');

add177Btn.addEventListener('click', () => {
    qty177.value = parseInt(qty177.value) + 1;
});

sub177Btn.addEventListener('click', () => {
    if (qty177.value <= 0) {
        qty177.value = 0;
    }
    else {
        qty177.value = parseInt(qty177.value) - 1;
    }
});

// Pollo
document.querySelector('#submit18').addEventListener('click', function () {

    var qtyBox18 = document.querySelector('.qtyBox18').value;
    var nombre18 = document.getElementById('nombrepollo').innerHTML;
    console.log(nombre18);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox18 + " amigurumis de " + nombre18;

    window.open(url);
});

// Pollo 
let add18Btn = document.querySelector('.add18');
let sub18Btn = document.querySelector('.sub18');
let qty18 = document.querySelector('.qtyBox18');

add18Btn.addEventListener('click', () => {
    qty18.value = parseInt(qty18.value) + 1;
});

sub18Btn.addEventListener('click', () => {
    if (qty18.value <= 0) {
        qty18.value = 0;
    }
    else {
        qty18.value = parseInt(qty18.value) - 1;
    }
});


// Pollo2
document.querySelector('#submit188').addEventListener('click', function () {

    var qtyBox188 = document.querySelector('.qtyBox188').value;
    var nombre188 = document.getElementById('nombrepolloo').innerHTML;
    console.log(nombre188);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox188 + " amigurumis de " + nombre188;

    window.open(url);
});

// Pollo 2
let add188Btn = document.querySelector('.add188');
let sub188Btn = document.querySelector('.sub188');
let qty188 = document.querySelector('.qtyBox188');

add188Btn.addEventListener('click', () => {
    qty188.value = parseInt(qty188.value) + 1;
});

sub188Btn.addEventListener('click', () => {
    if (qty188.value <= 0) {
        qty188.value = 0;
    }
    else {
        qty188.value = parseInt(qty188.value) - 1;
    }
});

//Ballenas
document.querySelector('#submit19').addEventListener('click', function () {

    var qtyBox19 = document.querySelector('.qtyBox19').value;
    var nombre19 = document.getElementById('nombreballena').innerHTML;
    console.log(nombre19);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox19 + " amigurumis de " + nombre19;

    window.open(url);
});

//Ballenas 
let add19Btn = document.querySelector('.add19');
let sub19Btn = document.querySelector('.sub19');
let qty19 = document.querySelector('.qtyBox19');

add19Btn.addEventListener('click', () => {
    qty19.value = parseInt(qty19.value) + 1;
});

sub19Btn.addEventListener('click', () => {
    if (qty19.value <= 0) {
        qty19.value = 0;
    }
    else {
        qty19.value = parseInt(qty19.value) - 1;
    }
});
//Ballenas2
document.querySelector('#submit199').addEventListener('click', function () {

    var qtyBox199 = document.querySelector('.qtyBox199').value;
    var nombre199 = document.getElementById('nombreballenaa').innerHTML;
    console.log(nombre199);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox199 + " amigurumis de " + nombre199;

    window.open(url);
});

//Ballenas 2
let add199Btn = document.querySelector('.add199');
let sub199Btn = document.querySelector('.sub199');
let qty199 = document.querySelector('.qtyBox199');

add199Btn.addEventListener('click', () => {
    qty199.value = parseInt(qty199.value) + 1;
});

sub199Btn.addEventListener('click', () => {
    if (qty199.value <= 0) {
        qty199.value = 0;
    }
    else {
        qty199.value = parseInt(qty199.value) - 1;
    }
});
//pulpos
document.querySelector('#submit20').addEventListener('click', function () {

    var qtyBox20 = document.querySelector('.qtyBox20').value;
    var nombre20 = document.getElementById('nombrepulpo').innerHTML;
    console.log(nombre20);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox20 + " amigurumis de " + nombre20;

    window.open(url);
});

//pulpos 
let add20Btn = document.querySelector('.add20');
let sub20Btn = document.querySelector('.sub20');
let qty20 = document.querySelector('.qtyBox20');

add20Btn.addEventListener('click', () => {
    qty20.value = parseInt(qty20.value) + 1;
});

sub20Btn.addEventListener('click', () => {
    if (qty20.value <= 0) {
        qty20.value = 0;
    }
    else {
        qty20.value = parseInt(qty20.value) - 1;
    }
});

//pulpos2
document.querySelector('#submit2000').addEventListener('click', function () {

    var qtyBox2000 = document.querySelector('.qtyBox2000').value;
    var nombre2000 = document.getElementById('nombrepulpoo').innerHTML;
    console.log(nombre2000);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox2000 + " amigurumis de " + nombre2000;

    window.open(url);
});

//pulpos 2
let add2000Btn = document.querySelector('.add2000');
let sub2000Btn = document.querySelector('.sub2000');
let qty2000 = document.querySelector('.qtyBox2000');

add2000Btn.addEventListener('click', () => {
    qty2000.value = parseInt(qty2000.value) + 1;
});

sub2000Btn.addEventListener('click', () => {
    if (qty2000.value <= 0) {
        qty2000.value = 0;
    }
    else {
        qty2000.value = parseInt(qty2000.value) - 1;
    }
});

//Gorro llavero
document.querySelector('#submit21').addEventListener('click', function () {

    var qtyBox21 = document.querySelector('.qtyBox21').value;
    var nombre21 = document.getElementById('nombregorro').innerHTML;
    console.log(nombre21);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox21 + " amigurumis de " + nombre21;

    window.open(url);
});

//Gorro llavero 
let add21Btn = document.querySelector('.add21');
let sub21Btn = document.querySelector('.sub21');
let qty21 = document.querySelector('.qtyBox21');

add21Btn.addEventListener('click', () => {
    qty21.value = parseInt(qty21.value) + 1;
});

sub21Btn.addEventListener('click', () => {
    if (qty21.value <= 0) {
        qty21.value = 0;
    }
    else {
        qty21.value = parseInt(qty21.value) - 1;
    }
});

//Gorro llavero2
document.querySelector('#submit211').addEventListener('click', function () {

    var qtyBox211 = document.querySelector('.qtyBox211').value;
    var nombre211 = document.getElementById('nombregorroo').innerHTML;
    console.log(nombre211);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox211 + " amigurumis de " + nombre211;

    window.open(url);
});

//Gorro llavero 2
let add211Btn = document.querySelector('.add211');
let sub211Btn = document.querySelector('.sub211');
let qty211 = document.querySelector('.qtyBox211');

add211Btn.addEventListener('click', () => {
    qty211.value = parseInt(qty211.value) + 1;
});

sub211Btn.addEventListener('click', () => {
    if (qty211.value <= 0) {
        qty211.value = 0;
    }
    else {
        qty211.value = parseInt(qty211.value) - 1;
    }
});

//Abeja llavero
document.querySelector('#submit22').addEventListener('click', function () {

    var qtyBox22 = document.querySelector('.qtyBox22').value;
    var nombre22 = document.getElementById('nombreabe').innerHTML;
    console.log(nombre22);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox22 + " amigurumis de " + nombre22;

    window.open(url);
});

//Abeja llavero 
let add22Btn = document.querySelector('.add22');
let sub22Btn = document.querySelector('.sub22');
let qty22 = document.querySelector('.qtyBox22');

add22Btn.addEventListener('click', () => {
    qty22.value = parseInt(qty22.value) + 1;
});

sub22Btn.addEventListener('click', () => {
    if (qty22.value <= 0) {
        qty22.value = 0;
    }
    else {
        qty22.value = parseInt(qty22.value) - 1;
    }
});
//Abeja llavero2
document.querySelector('#submit2222').addEventListener('click', function () {

    var qtyBox2222 = document.querySelector('.qtyBox2222').value;
    var nombre2222 = document.getElementById('nombreabee').innerHTML;
    console.log(nombre2222);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox2222 + " amigurumis de " + nombre2222;

    window.open(url);
});

//Abeja llavero 2
let add2222Btn = document.querySelector('.add2222');
let sub2222Btn = document.querySelector('.sub2222');
let qty2222 = document.querySelector('.qtyBox2222');

add2222Btn.addEventListener('click', () => {
    qty2222.value = parseInt(qty2222.value) + 1;
});

sub2222Btn.addEventListener('click', () => {
    if (qty2222.value <= 0) {
        qty2222.value = 0;
    }
    else {
        qty2222.value = parseInt(qty2222.value) - 1;
    }
});

//Gary
document.querySelector('#submit23').addEventListener('click', function () {

    var qtyBox23 = document.querySelector('.qtyBox23').value;
    var nombre23 = document.getElementById('nombreper').innerHTML;
    console.log(nombre23);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox23 + " amigurumis de " + nombre23;

    window.open(url);
});

//Gary 
let add23Btn = document.querySelector('.add23');
let sub23Btn = document.querySelector('.sub23');
let qty23 = document.querySelector('.qtyBox23');

add23Btn.addEventListener('click', () => {
    qty23.value = parseInt(qty23.value) + 1;
});

sub23Btn.addEventListener('click', () => {
    if (qty23.value <= 0) {
        qty23.value = 0;
    }
    else {
        qty23.value = parseInt(qty23.value) - 1;
    }
});

//Gary2
document.querySelector('#submit2333').addEventListener('click', function () {

    var qtyBox2333 = document.querySelector('.qtyBox2333').value;
    var nombre2333 = document.getElementById('nombregary').innerHTML;
    console.log(nombre2333);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox2333 + " amigurumis de " + nombre2333;

    window.open(url);
});

//Gary 2
let add2333Btn = document.querySelector('.add2333');
let sub2333Btn = document.querySelector('.sub2333');
let qty2333 = document.querySelector('.qtyBox2333');

add2333Btn.addEventListener('click', () => {
    qty2333.value = parseInt(qty2333.value) + 1;
});

sub2333Btn.addEventListener('click', () => {
    if (qty2333.value <= 0) {
        qty2333.value = 0;
    }
    else {
        qty2333.value = parseInt(qty2333.value) - 1;
    }
});

//Ratona
document.querySelector('#submit24').addEventListener('click', function () {

    var qtyBox24 = document.querySelector('.qtyBox24').value;
    var nombre24 = document.getElementById('nombrerat').innerHTML;
    console.log(nombre24);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox24 + " amigurumis de " + nombre24;

    window.open(url);
});

//Ratona 
let add24Btn = document.querySelector('.add24');
let sub24Btn = document.querySelector('.sub24');
let qty24 = document.querySelector('.qtyBox24');

add24Btn.addEventListener('click', () => {
    qty24.value = parseInt(qty24.value) + 1;
});

sub24Btn.addEventListener('click', () => {
    if (qty24.value <= 0) {
        qty24.value = 0;
    }
    else {
        qty24.value = parseInt(qty24.value) - 1;
    }
});

//Ratona2
document.querySelector('#submit244').addEventListener('click', function () {

    var qtyBox244 = document.querySelector('.qtyBox244').value;
    var nombre244 = document.getElementById('nombreratt').innerHTML;
    console.log(nombre244);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox244 + " amigurumis de " + nombre244;

    window.open(url);
});

//Ratona 2
let add244Btn = document.querySelector('.add244');
let sub244Btn = document.querySelector('.sub244');
let qty244 = document.querySelector('.qtyBox244');

add244Btn.addEventListener('click', () => {
    qty244.value = parseInt(qty244.value) + 1;
});

sub244Btn.addEventListener('click', () => {
    if (qty244.value <= 0) {
        qty244.value = 0;
    }
    else {
        qty244.value = parseInt(qty244.value) - 1;
    }
});

//Pochita
document.querySelector('#submit25').addEventListener('click', function () {

    var qtyBox25 = document.querySelector('.qtyBox25').value;
    var nombre25 = document.getElementById('nombrepochi').innerHTML;
    console.log(nombre25);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox25 + " amigurumis de " + nombre25;

    window.open(url);
});

//Pochita 
let add25Btn = document.querySelector('.add25');
let sub25Btn = document.querySelector('.sub25');
let qty25 = document.querySelector('.qtyBox25');

add25Btn.addEventListener('click', () => {
    qty25.value = parseInt(qty25.value) + 1;
});

sub25Btn.addEventListener('click', () => {
    if (qty25.value <= 0) {
        qty25.value = 0;
    }
    else {
        qty25.value = parseInt(qty25.value) - 1;
    }
});

//Pochita2
document.querySelector('#submit255').addEventListener('click', function () {

    var qtyBox255 = document.querySelector('.qtyBox255').value;
    var nombre255 = document.getElementById('nombrepochii').innerHTML;
    console.log(nombre255);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox255 + " amigurumis de " + nombre255;

    window.open(url);
});

//Pochita 2
let add255Btn = document.querySelector('.add255');
let sub255Btn = document.querySelector('.sub255');
let qty255 = document.querySelector('.qtyBox255');

add255Btn.addEventListener('click', () => {
    qty255.value = parseInt(qty255.value) + 1;
});

sub255Btn.addEventListener('click', () => {
    if (qty255.value <= 0) {
        qty255.value = 0;
    }
    else {
        qty255.value = parseInt(qty255.value) - 1;
    }
});

//Novia
document.querySelector('#submit26').addEventListener('click', function () {

    var qtyBox26 = document.querySelector('.qtyBox26').value;
    var nombre26 = document.getElementById('nombrenovia').innerHTML;
    console.log(nombre26);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox26 + " amigurumis de " + nombre26;

    window.open(url);
});

//Novia 
let add26Btn = document.querySelector('.add26');
let sub26Btn = document.querySelector('.sub26');
let qty26 = document.querySelector('.qtyBox26');

add26Btn.addEventListener('click', () => {
    qty26.value = parseInt(qty26.value) + 1;
});

sub26Btn.addEventListener('click', () => {
    if (qty26.value <= 0) {
        qty26.value = 0;
    }
    else {
        qty26.value = parseInt(qty26.value) - 1;
    }
});

//Novia2
document.querySelector('#submit266').addEventListener('click', function () {

    var qtyBox266 = document.querySelector('.qtyBox266').value;
    var nombre266 = document.getElementById('nombrenoviaa').innerHTML;
    console.log(nombre266);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox266 + " amigurumis de " + nombre266;

    window.open(url);
});

//Novia2 
let add266Btn = document.querySelector('.add266');
let sub266Btn = document.querySelector('.sub266');
let qty266 = document.querySelector('.qtyBox266');

add266Btn.addEventListener('click', () => {
    qty266.value = parseInt(qty266.value) + 1;
});

sub266Btn.addEventListener('click', () => {
    if (qty266.value <= 0) {
        qty266.value = 0;
    }
    else {
        qty266.value = parseInt(qty266.value) - 1;
    }
});

//Inosuke
document.querySelector('#submit27').addEventListener('click', function () {

    var qtyBox27 = document.querySelector('.qtyBox27').value;
    var nombre27 = document.getElementById('nombreinosu').innerHTML;
    console.log(nombre27);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox27 + " amigurumis de " + nombre27;

    window.open(url);
});

//Inosuke 
let add27Btn = document.querySelector('.add27');
let sub27Btn = document.querySelector('.sub27');
let qty27 = document.querySelector('.qtyBox27');

add27Btn.addEventListener('click', () => {
    qty27.value = parseInt(qty27.value) + 1;
});

sub27Btn.addEventListener('click', () => {
    if (qty27.value <= 0) {
        qty27.value = 0;
    }
    else {
        qty27.value = parseInt(qty27.value) - 1;
    }
});

//Inosuke2
document.querySelector('#submit277').addEventListener('click', function () {

    var qtyBox277 = document.querySelector('.qtyBox277').value;
    var nombre277 = document.getElementById('nombreinosuu').innerHTML;
    console.log(nombre277);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox277 + " amigurumis de " + nombre277;

    window.open(url);
});

//Inosuke2 
let add277Btn = document.querySelector('.add277');
let sub277Btn = document.querySelector('.sub277');
let qty277 = document.querySelector('.qtyBox277');

add277Btn.addEventListener('click', () => {
    qty277.value = parseInt(qty277.value) + 1;
});

sub277Btn.addEventListener('click', () => {
    if (qty277.value <= 0) {
        qty277.value = 0;
    }
    else {
        qty277.value = parseInt(qty277.value) - 1;
    }
});

//Coraline
document.querySelector('#submit28').addEventListener('click', function () {

    var qtyBox28 = document.querySelector('.qtyBox28').value;
    var nombre28 = document.getElementById('nombrecoral').innerHTML;
    console.log(nombre28);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox28 + " amigurumis de " + nombre28;

    window.open(url);
});

//Coraline 
let add28Btn = document.querySelector('.add28');
let sub28Btn = document.querySelector('.sub28');
let qty28 = document.querySelector('.qtyBox28');

add28Btn.addEventListener('click', () => {
    qty28.value = parseInt(qty28.value) + 1;
});

sub28Btn.addEventListener('click', () => {
    if (qty28.value <= 0) {
        qty28.value = 0;
    }
    else {
        qty28.value = parseInt(qty28.value) - 1;
    }
});

//Coraline2
document.querySelector('#submit288').addEventListener('click', function () {

    var qtyBox288 = document.querySelector('.qtyBox288').value;
    var nombre288 = document.getElementById('nombrecorall').innerHTML;
    console.log(nombre288);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox288 + " amigurumis de " + nombre288;

    window.open(url);
});

//Coraline 2
let add288Btn = document.querySelector('.add288');
let sub288Btn = document.querySelector('.sub288');
let qty288 = document.querySelector('.qtyBox288');

add288Btn.addEventListener('click', () => {
    qty288.value = parseInt(qty288.value) + 1;
});

sub288Btn.addEventListener('click', () => {
    if (qty288.value <= 0) {
        qty288.value = 0;
    }
    else {
        qty288.value = parseInt(qty288.value) - 1;
    }
});

//Increibles
document.querySelector('#submit29').addEventListener('click', function () {

    var qtyBox29 = document.querySelector('.qtyBox29').value;
    var nombre29 = document.getElementById('nombreincre').innerHTML;
    console.log(nombre29);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox29 + " amigurumis de " + nombre29;

    window.open(url);
});

//Increibles 
let add29Btn = document.querySelector('.add29');
let sub29Btn = document.querySelector('.sub29');
let qty29 = document.querySelector('.qtyBox29');

add29Btn.addEventListener('click', () => {
    qty29.value = parseInt(qty29.value) + 1;
});

sub29Btn.addEventListener('click', () => {
    if (qty29.value <= 0) {
        qty29.value = 0;
    }
    else {
        qty29.value = parseInt(qty29.value) - 1;
    }
});

//Increibles2
document.querySelector('#submit299').addEventListener('click', function () {

    var qtyBox299 = document.querySelector('.qtyBox299').value;
    var nombre299 = document.getElementById('nombreincree').innerHTML;
    console.log(nombre299);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox299 + " amigurumis de " + nombre299;

    window.open(url);
});

//Increibles 2
let add299Btn = document.querySelector('.add299');
let sub299Btn = document.querySelector('.sub299');
let qty299 = document.querySelector('.qtyBox299');

add299Btn.addEventListener('click', () => {
    qty299.value = parseInt(qty299.value) + 1;
});

sub299Btn.addEventListener('click', () => {
    if (qty299.value <= 0) {
        qty299.value = 0;
    }
    else {
        qty299.value = parseInt(qty299.value) - 1;
    }
});

//Donald
document.querySelector('#submit30').addEventListener('click', function () {

    var qtyBox30 = document.querySelector('.qtyBox30').value;
    var nombre30 = document.getElementById('nombredona').innerHTML;
    console.log(nombre30);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox30 + " amigurumis de " + nombre30;

    window.open(url);
});

//Donald 
let add30Btn = document.querySelector('.add30');
let sub30Btn = document.querySelector('.sub30');
let qty30 = document.querySelector('.qtyBox30');

add30Btn.addEventListener('click', () => {
    qty30.value = parseInt(qty30.value) + 1;
});

sub30Btn.addEventListener('click', () => {
    if (qty30.value <= 0) {
        qty30.value = 0;
    }
    else {
        qty30.value = parseInt(qty30.value) - 1;
    }
});

//Donald2
document.querySelector('#submit300').addEventListener('click', function () {

    var qtyBox300 = document.querySelector('.qtyBox300').value;
    var nombre300 = document.getElementById('nombredonaa').innerHTML;
    console.log(nombre300);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox300 + " amigurumis de " + nombre300;

    window.open(url);
});

//Donald 2
let add300Btn = document.querySelector('.add300');
let sub300Btn = document.querySelector('.sub300');
let qty300 = document.querySelector('.qtyBox300');

add300Btn.addEventListener('click', () => {
    qty300.value = parseInt(qty300.value) + 1;
});

sub300Btn.addEventListener('click', () => {
    if (qty300.value <= 0) {
        qty300.value = 0;
    }
    else {
        qty300.value = parseInt(qty300.value) - 1;
    }
});

//Miel
document.querySelector('#submit31').addEventListener('click', function () {

    var qtyBox31 = document.querySelector('.qtyBox31').value;
    var nombre31 = document.getElementById('nombremiel').innerHTML;
    console.log(nombre31);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox31 + " amigurumis de " + nombre31;

    window.open(url);
});

//Miel 
let add31Btn = document.querySelector('.add31');
let sub31Btn = document.querySelector('.sub31');
let qty31 = document.querySelector('.qtyBox31');

add31Btn.addEventListener('click', () => {
    qty31.value = parseInt(qty31.value) + 1;
});

sub31Btn.addEventListener('click', () => {
    if (qty31.value <= 0) {
        qty31.value = 0;
    }
    else {
        qty31.value = parseInt(qty31.value) - 1;
    }
});

//Miel2
document.querySelector('#submit311').addEventListener('click', function () {

    var qtyBox311 = document.querySelector('.qtyBox311').value;
    var nombre311 = document.getElementById('nombremiell').innerHTML;
    console.log(nombre311);

    let url = "https://api.whatsapp.com/send?phone=+573142564828&text=Hola! Estuve viendo tu pagina y me interesan " + qtyBox311 + " amigurumis de " + nombre311;

    window.open(url);
});

//Miel 2
let add311Btn = document.querySelector('.add311');
let sub311Btn = document.querySelector('.sub311');
let qty311 = document.querySelector('.qtyBox311');

add311Btn.addEventListener('click', () => {
    qty311.value = parseInt(qty311.value) + 1;
});

sub311Btn.addEventListener('click', () => {
    if (qty311.value <= 0) {
        qty311.value = 0;
    }
    else {
        qty311.value = parseInt(qty311.value) - 1;
    }
});