$(document).ready(function() {

    $("#addtolist").on("click", function() {
        if($(".form-control").val().length > 0) {

            if($("#para-estudar").is(":checked")){
                $("#assuntos-para-estudar").append(
                    "<tr><td class='warning'>" +  $(".form-control").val() + "</td></tr>");
            } else {
                $("#assuntos-estudados").append(
                    "<tr><td class='success'>" +  $(".form-control").val() + "</td></tr>");
            }
        }

    });

});