function removeAssuntos () {
	$("td").each(function() {
		if($(this).attr("class") == 'info') {
			if ($(this).parent().parent().attr("id") == 'assuntos-estudados'){
				$("#numOfSubjectsLearned").text(--numOfSubjectsLearned);
			} else {
				$("#numOfSubjectsToLearn").text(--numOfSubjectsToLearn);
			}
			$(this).hide("slow", function() {
				$(this).remove();
			});
		}
	});
	
	$("#remove-subject").prop("disabled", true);
	$("#add-to-studied").prop("disabled", true);
	$("#yt-search").prop("disabled", true);
}

var numOfSubjectsToLearn = 0;
var numOfSubjectsLearned = 0;

$(document).ready(function() {
	//Adicionar assunto
	$(".form-horizontal").submit(function(event) {
		$("#subjects").show("slow");
		
		$("#assuntos-para-estudar").append("<tr><td class='warning'>" + $(".form-control").val() + "</td></tr>");
		$("#assuntos-para-estudar tr:last").hide().show("slow"); //animação
		$("#numOfSubjectsToLearn").text(++numOfSubjectsToLearn); //adiciona o numero da lista
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
		var subjects = 0;
		if(selected == false) {
			$("#assuntos-para-estudar td").each(function() {
				if($(this).attr("class") == 'info') {
					if(selected == true) {
						subjects = 2;
						return false;
					}
					subjects = 1;
					selected = true;
				}
			});
		}
		$("#remove-subject").prop("disabled", (selected == false));
		$("#add-to-studied").prop("disabled", (selected == false || selectedAStudied == true));
		$("#yt-search").prop("disabled", subjects != 1);
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
				$("#numOfSubjectsLearned").text(++numOfSubjectsLearned); //adiciona o numero da lista
			}
		});
		removeAssuntos();
	});

	$("#yt-search").on("click", function() {
		var subject = '';
		$("#assuntos-para-estudar td").each(function() {
			if($(this).attr("class") == 'info') {
				subject = $(this).text();
				return false;
			}
		});
		window.open('http://www.youtube.com/results?search_query=' + subject, '_blank');
	});
});
