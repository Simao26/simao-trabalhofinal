$(document).ready(function() {
	$.getJSON("js/contactos.json", function(data){
		$("#morada").html(data.morada);
		$("#telefone").html(data.telefone);
		$("#email").html(data.email)
	})
})