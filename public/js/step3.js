/**
 * Created by rentao on 2017/9/25.
 */
define(["jquery", "template", "tools", "bootstrap", "form"], function ($, template, tools) {
    tools.sm("/course/course_add");
    var csId = tools.qs("cs_id");
    $.ajax({
        type: "get",
        url: "/api/course/lesson",
        dataType: "json",
        data: {cs_id: csId},
        success: function (data) {
            $("#cF").html(template("cI", data.result));
            $(".up").click(function () {
                var ctId = $(this).attr("data-ct");
                $.ajax({
                    type: "get",
                    url: "/api//course/chapter/edit",
                    dataType: "json",
                    data: {ct_id: ctId},
                    success: function (data) {
                        data.result.title = "edit";
                        $("#chapterModal").html(template("dI", data.result)).modal();
                        $("#done").click(function () {
                            $("#chapterForm").ajaxSubmit({
                                type: "post",
                                url: "/api/course/chapter/modify",
                                dataType: "json",
                                data: {ct_id: ctId, ct_cs_id: csId},
                                success: function (data) {
                                    location.reload();
                                }
                            })
                        });
                    }
                })
            });
            $("#cA").click(function () {
                data.result.title = "new";
                $("#chapterModal").html(template("dI", data.result)).modal();
                $("#done").click(function () {
                    $("#chapterForm").ajaxSubmit({
                        type: "post",
                        url: "/api/course/chapter/add",
                        dataType: "json",
                        data: {ct_cs_id: csId},
                        success: function (data) {
                            location.reload();
                        }
                    })
                });
            });
        }
    })
});