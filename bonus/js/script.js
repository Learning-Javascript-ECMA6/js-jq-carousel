//ESERCIZIO
//Creare lo slideshow/carousel

//funzione generale jquery
$( document ).ready(function() {

  $(".next").click(avanti);
  $(".prev").click(indietro);

  //aggiungo funzione per i comandi da tastiera avanti e indietro 
  $(window).on({
    keyup: function (k) {
      // console.log(k.keyCode);
      if (k.keyCode == '39') {
        avanti();
      }
      if (k.keyCode == '37') {
        indietro();
      }
    }
  });

  //aggiungo funzione per cambiare immagine anche cliccando sui pallini 
  $('i.fas.fa-circle').click(function () {
    //salvo i pallini presenti in pagina
    var pallini = $('i.fas.fa-circle');
    //  console.log($(this));
    for (var i = 0; i < pallini.length; i++) {
      //  console.log('entro nel for', pallini.eq(i));
      //se il pallino su cui clicco è uguale all'iesimo pallino cliccato allora il valore attuale 
      //del contatore i posso usarlo come indice per risalire all'immagine 
      if ($(this).is(pallini.eq(i))) {
        //   console.log('entro nell if ');
        $('.slider-wrapper .images  img.active').removeClass('active');
        $('img').eq(i).addClass('active');
      }
    }
    $('i.fas.fa-circle.active').removeClass('active');
    $(this).addClass('active');
  });

});

 // funzioni
 function avanti(){

   var posizioneImg = $(".slider-wrapper .images  img.active");
   var posizionePal = $(".nav i.active");

   posizioneImg.removeClass("active");
   posizionePal.removeClass("active");

   // se siamo all'utima img dello slider, ritorna ad essere attiva la prima
   if(posizioneImg.hasClass("last")){
       $(".slider-wrapper .images  img.first").addClass("active");
       $(".nav i.first").addClass("active");
   } else{
       //altrimenti passa semplicemente l'active alla prossima
       posizioneImg.next("img").addClass("active");
       posizionePal.next("i").addClass("active");
   }
 }

 function indietro(){

   var posizioneImg = $(".slider-wrapper .images  img.active");
   var posizionePal = $(".nav i.active");

   posizioneImg.removeClass("active");
   posizionePal.removeClass("active");

   // se siamo alla prima img dello slider, ritorna ad essere attiva l'ultima
   if(posizioneImg.hasClass("first")){
       $(".slider-wrapper .images  img.last").addClass("active");
       $(".nav i.last").addClass("active");
   } else{
       //altrimenti passa semplicemente l'active alla prossima
       posizioneImg.prev("img").addClass("active");
       posizionePal.prev("i").addClass("active");
   }
 }


