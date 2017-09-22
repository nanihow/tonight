/**
 * Created by rentao on 2017/9/22.
 */
define(["jquery", "template", "tools","datepicker","language"], function ($, template, tools) {
    var tcId = tools.qs("tc_id");
    if(tcId){
        $.ajax({
            type:"get",
            url:"/api/teacher/edit",
            dataType:"json",
            data:{tc_id:tcId},
            success: function (data) {
                data.result.title="信息修改";
                data.result.finish="修改完成";
                $("#tInfo").html(template("info",data.result));
                $("#uploadF").click(function () {
                    sF("/api/teacher/update");
                })
            }
        })
    }else{
        $("#tInfo").html(template("info",{title:"添加讲师",finish:"添加完成"}));
        $("#uploadF").click(function () {
            sF("/api/teacher/add");
        })
    }
    function sF(url){
        $.ajax({
            type:"post",
            url:url,
            dataType:"json",
            data:$("#teacherForm").serialize(),
            success: function (data) {
                if(data.code==200){
                    location.href="/teacher/teacher_list";
                }
            }
        })
    }
});