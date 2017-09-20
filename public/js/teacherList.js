/**
 * Created by rentao on 2017/9/20.
 */
define(["jquery", "template", "cookie"], function ($, template) {
    $.ajax({
        type: "get",
        url: "/api/teacher",
        dataType: "json",
        success: function (data) {
            console.log(data);
            if (data.code == 200) {
                $("#tL").html(template("tI", {result: data.result}));
            }
        }
    });
});