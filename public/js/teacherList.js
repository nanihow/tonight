/**
 * Created by rentao on 2017/9/20.
 */
define(["jquery", "template"], function ($, template) {
    $.ajax({
        type: "get",
        url: "/api/teacher",
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                $("#tL").html(template("tI", {result: data.result}));
                $(".doa").click(function () {
                    var that = $(this);
                    var td = $(this).parent();
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        url: "/api/teacher/handle",
                        data: {
                            tc_id: td.attr("data-id"),
                            tc_status: td.attr("data-status")
                        },
                        success: function (data) {
                            if (data.code == 200) {
                                td.attr("data-status", data.result.tc_status);
                                if(data.result.tc_status==0){
                                    $(that).text("open");
                                }else{
                                    $(that).text("close");
                                }
                            }
                        }
                    });
                    return false;
                });
            }
        }
    });
});