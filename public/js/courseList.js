/**
 * Created by rentao on 2017/9/25.
 */
define(["jquery","template","tools"], function ($, template, tools) {
    tools.sm(location.pathname);
    $.ajax({
        type:"get",
        url:"/api/course",
        dataType:"json",
        success: function (data) {
            console.log(data);
            $("#cI").html(template("cL",data.result));
        }
    })
});