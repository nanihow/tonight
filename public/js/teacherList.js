/**
 * Created by rentao on 2017/9/20.
 */
define(["jquery", "template","bootstrap"], function ($, template) {
    $.ajax({
        type: "get",
        url: "/api/teacher",
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                $("#tL").html(template("tI", {result: data.result}));
                $(".doa").click(function () {
                    var that = $(this);
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        url: "/api/teacher/handle",
                        data: {
                            tc_id: that.parent().attr("data-id"),
                            tc_status: that.parent().attr("data-status")
                        },
                        success: function (data) {
                            if (data.code == 200) {
                                that.parent().attr("data-status", data.result.tc_status);
                                if (data.result.tc_status == 0) {
                                    $(that).text("open");
                                } else {
                                    $(that).text("close");
                                }
                            }
                        }
                    });
                    return false;
                });
                $(".check").click(function () {
                    var that = $(this);
                    $.ajax({
                        type: "get",
                        dataType: "json",
                        url: "/api/teacher/view",
                        data:{tc_id:that.parent().attr("data-id")},
                        success: function (data) {
                            $("#tV").html(template("tIa", data.result));
                            $("#teacherModal").modal();
                        }
                    })
                });
            }
        }
    });
});