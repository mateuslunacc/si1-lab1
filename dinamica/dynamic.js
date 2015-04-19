$(document).ready(function() {

    $("#list-addon").on("click", function() {
        $("#subject-table").append(
            "<tr><td>" +  $(".form-control").val() + "</td><td>" + "" + "</td></tr>");
    });
});