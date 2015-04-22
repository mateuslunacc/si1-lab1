$(document).ready(function() {

	$(".form-horizontal").submit(function(event){

        if($(".form-control").val().length > 0) {

            if($("#para-estudar").is(":checked")){
                $("#assuntos-para-estudar").append(
                    "<tr><td class='warning'>" +  $(".form-control").val() + "</td></tr>");
            } else {
                $("#assuntos-estudados").append(
                    "<tr><td class='success'>" +  $("input:first").val() + "</td></tr>");
            }
        }

	}





});
