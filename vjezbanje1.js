//#1 audio 
var ad = document.getElementById ('ad');
var apusti = document.getElementById ('apusti');
var apauze = document.getElementById ('apauze');




apusti.addEventListener ('click',function () {
    
     ad.play();


});


apauze.addEventListener ('click', function () {
        
    ad.pause () ;
});



//#2 video

var vd = document.getElementById ('vd');
var vpusti = document.getElementById ('vpusti');
var vpauze = document.getElementById ('vpauze');

var vd = document.getElementById ('vd');


vpusti.addEventListener ('click',function () {
    
     vd.play();


});


vpauze.addEventListener ('click', function () {
        
    vd.pause () ;
});



//mijesano audio i video

var adm = document.getElementById ('adm');
var vdm = document.getElementById ('vdm');
var mpusti = document.getElementById ('mpusti');
var mpauze = document.getElementById ('mpauze');

mpusti.addEventListener ('click',function () {
    
    adm.play();
    vdm.play ();


});


mpauze.addEventListener ('click', function () {
    
    adm.pause () ;
   vdm.pause () ;
});