$( document ).ready(function() {
   // termicos
    $("#img-termico").hover(function() {
    document.getElementById('img-termico').src="img/Termicos-Vertical-Hover.jpg";
  	}, function() {
    document.getElementById('img-termico').src="img/termicos.jpg";
  	});
    //plasticos
    $("#img-plasticos").hover(function() {
    document.getElementById('img-plasticos').src="img/Plastico-Vertical-Hover.jpg";
    }, function() {
    document.getElementById('img-plasticos').src="img/Plastico-Vertical.png";
    });
    //bolsas
    $("#img-bolsas").hover(function() {
    document.getElementById('img-bolsas').src="img/Bolsas-Vertical-Hover.jpg";
    }, function() {
    document.getElementById('img-bolsas').src="img/Bolsas-Vertical.jpg";
    });
    //saborizantes
    $("#img-saborizantes").hover(function() {
    document.getElementById('img-saborizantes').src="img/Saborizantes-Vertical-Hover.jpg";
    }, function() {
    document.getElementById('img-saborizantes').src="img/Saborizantes-Vertical.png";
    });
    //domos
    $("#img-domos").hover(function() {
    document.getElementById('img-domos').src="img/Domos-Vertical-Hover.jpg";
    }, function() {
    document.getElementById('img-domos').src="img/Domos-Vertical.png";
    });
    //especias
    $("#img-especias").hover(function() {
    document.getElementById('img-especias').src="img/Especias-Vertical-Hover.jpg";
    }, function() {
    document.getElementById('img-especias').src="img/Especias-Vertical.jpg";
    });

    // Animaciones de tablet
    // termico
    $("#img-termico-1").click(function(){
        $('#horizontal-termicos').fadeOut(100, function() {
        $('#horizontal-termicos').attr("src","img/Termico-Horizontal-Hover.png");
        $('#horizontal-termicos').fadeIn(100);
    });
    });
    //plasticos
    $("#img-plastico-1").click(function(){
        $('#horizontal-plasticos').fadeOut(100, function() {
        $('#horizontal-plasticos').attr("src","img/Plastico-Horizontal-Hover.png");
        $('#horizontal-plasticos').fadeIn(100);
    });
    });
    //bolsas
    $("#img-bolsas-1").click(function(){
        $('#horizontal-bolsas').fadeOut(100, function() {
        $('#horizontal-bolsas').attr("src","img/Bolsas-Horizontal-Hover.png");
        $('#horizontal-bolsas').fadeIn(100);
    });
    });
    //saborizantes
    $("#img-saborizantes-1").click(function(){
        $('#horizontal-saborizantes').fadeOut(100, function() {
        $('#horizontal-saborizantes').attr("src","img/Saborizantes-Horizontal-Hover.png");
        $('#horizontal-saborizantes').fadeIn(100);
    });
    });
    //domos
    $("#img-domos-1").click(function(){
        $('#horizontal-domos').fadeOut(100, function() {
        $('#horizontal-domos').attr("src","img/Domos-Horizontal-Hover.png");
        $('#horizontal-domos').fadeIn(100);
    });
    });
    //especias
    $("#img-especias-1").click(function(){
        $('#horizontal-especias').fadeOut(100, function() {
        $('#horizontal-especias').attr("src","img/Especias-Horizontal-Hover.png");
        $('#horizontal-especias').fadeIn(100);
    });
    });


});