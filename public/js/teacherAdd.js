/**
 * Created by rentao on 2017/9/20.
 */
define(["jquery"], function ($) {
    $("#t").click(function () {
        var place = 1;
        if ($("#admin").attr("selected") == "selected") {
            place = 0;
        }
        var gender = 0;
        if ($("#nv").attr("checked") == "checked") {
            gender = 1;
        }
        $.ajax({
            type: "post",
            url: "/api/teacher/add",
            dataType: "json",
            data: {
                tc_name: $("#ip1").val(),
                tc_pass: $("#ip2").val(),
                tc_join_date: $("#ip3").val(),
                tc_type: place,
                tc_gender: gender
            },
            success: function (data) {
                location.href="/views/advert/advert_list.html";
            }
        });
        return false;
    });
});