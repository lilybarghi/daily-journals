$(document).ready( function() { 
    $("li").click(function() {
        let modal = $("#myModal");
        modal.css("display", "block");
        let day = this.innerHTML;
        $("#header-date").html("February " + day + ", 2019");
        console.log(day);
    });

    $(".close").click(function() {
        let modal = $("#myModal");
        modal.css("display", "none");
    })
})

