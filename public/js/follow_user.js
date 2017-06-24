$(document).ready(function(){
     $(".follow_user").click(function(event){
        $(this).hide();
        var value = $(this).attr("id");
        $.ajax({
            type: "POST",
            url: "/users/follow",
            data: {id: value},
            success: function(data){
                //em muốn nhận đối tượng user ở đây
            }
        });
    });

});