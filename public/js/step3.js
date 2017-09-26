/**
 * Created by rentao on 2017/9/25.
 */
define(["jquery", "template", "tools"], function ($, template, tools) {
    tools.sm("/course/course_add");
    var csId = tools.qs("cs_id");
    $.ajax({
        type:"get",
        url:"/api//course/lesson",
        dataType:"json",
        data:{cs_id:csId},
        success: function (data) {
            console.log(data);
            $("#cF").html(template("cI",data.result));
        }
    })
});