$(document).ready(function() {
    $("#btn_cmt").click(function(event) {
        var content = $("#txt_cmt").val();
        var blogs = $(this).val();
        if (content != null) {
            $('#txt_cmt').val('');                   
            $.ajax({
                type: "POST",
                url: "/comments/create",
                data: { blogs: blogs, content: content },
                success: function(data) {
                    //em muốn nhận đối tượng user ở đây
                }
            });
        }

    });

});
