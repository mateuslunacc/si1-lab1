$(document).ready(function() {

    $(".form-horizontal").submit(function(event) {
        if($("input:first").val().length > 0){
            var inputFromForm = $(".form-control").val();

            if($("#para-estudar").is(":checked")){
                $("#assuntos-para-estudar").append(
                    "<tr><td class='warning'>" + inputFromForm + "</td></tr>");
            } else {
                $("#assuntos-estudados").append(
                    "<tr><td class='success'>" + inputFromForm + "</td></tr>");
            }
            event.preventDefault();
        }

    });

});