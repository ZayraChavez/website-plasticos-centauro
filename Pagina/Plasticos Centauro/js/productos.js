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
    document.getElementById('img-bolsas').src="img/Bolsas-Vertical.png";
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
});