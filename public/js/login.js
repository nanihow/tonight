/**
 * Created by rentao on 2017/9/20.
 */
define(["jquery","cookie"],function ($) {
    $("button[type='submit']").click(function () {
        $.ajax({
            type: "post",
            url: "/api/login",
            data: $("#theForm").serialize(),
            dataType: "json",
            success: function (data) {
                if (data.code == 200) {
                    $.cookie("log200", JSON.stringify(data.result), {path: "/"});
                    location.href = "/main/index";
                }
            }
        });
        return false;
    });
});