function removeAssuntos () {
	$("td").each(function() {
		if($(this).attr("class") == 'info') {
			$(this).hide("slow", function() {
				$(this).remove();
			});
		}
	});
}



$(document).ready(function() {
	//Adicionar assunto
	$(".form-horizontal").submit(function(event) {
		$("#subjects").show("slow");

		$("#assuntos-para-estudar").append("<tr><td class='warning'>" + $(".form-control").val() + "</td></tr>");
		$("#assuntos-para-estudar tr:last").hide().show("slow");
		event.preventDefault();
		$("#subject-form").prop("value", ""); //limpa o campo após submeter
	});
	//Selecionar assunto
	$(document).on("click", "td", function() {
		//muda a cor do assunto
		var contentType = $(this).attr("class");
		var colorOfSubject = '';
		
		if(contentType != 'info') {
			colorOfSubject = "info";
		} else {
			if ($(this).parent().parent().attr("id") == 'assuntos-estudados'){
				colorOfSubject = "success";
			} else {
				colorOfSubject = "warning";
			}
		}
		$(this).prop("class", colorOfSubject);
		
		//ativa os botoes add e remove
		var selected = false;
		var selectedAStudied = false;
		$("#assuntos-estudados td").each(function() {
			if($(this).attr("class") == 'info') {
				selected = true;
				selectedAStudied = true;
				return false;
			}
		});
		if(selected == false) {
			$("#assuntos-para-estudar td").each(function() {
				if($(this).attr("class") == 'info') {
					selected = true;
					return false;
				}
			});
		}
		$("#remove-subject").prop("disabled", (selected == false));
		$("#add-to-studied").prop("disabled", (selected == false || selectedAStudied == true));
	});
	
	//Remover
	$("#remove-subject").on("click", function() {
		removeAssuntos();
		$("#remove-subject").prop("disabled", true);
	});

	//Adicionar para assuntos estudados
	$("#add-to-studied").on("click", function() {
		$("#assuntos-para-estudar td").each(function() {
			if($(this).attr("class") == 'info') {
				$("#assuntos-estudados").append("<tr><td class='success'>" + $(this).text() + "</td></tr>");
				$("#assuntos-estudados tr:last").hide().show("slow");
			}
		});
		removeAssuntos();
	});

});
