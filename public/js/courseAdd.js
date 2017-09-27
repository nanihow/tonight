/**
 * Created by rentao on 2017/9/25.
 */
define(["jquery","tools","form"], function ($, tools) {
    tools.sm(location.pathname);
    $("#newCourse").click(function () {
        $("#courseForm").ajaxSubmit({
            type:"post",
            url:"/api/course/create",
            dataType:"json",
            success: function (data) {
                location.href="/course/course_add_step1?cs_id="+data.result.cs_id;
            }
        })
    })
});