/**
 * Created by rentao on 2017/9/25.
 */
define(["jquery", "template", "tools", "ck", "validate", "form"], function ($, template, tools) {
    tools.sm("/course/course_add");
    var csId = tools.qs("cs_id");
    $.ajax({
        type: "get",
        url: "/api/course/basic",
        dataType: "json",
        data: {cs_id: csId},
        success: function (data) {
            data.result.flag = tools.qs("flag");
            $("#cI").html(template("cAU", data.result));
            $("#level1").change(function () {
                var l1 = $(this).val();
                $.ajax({
                    type: "get",
                    url: "/api/category/child",
                    dataType: "json",
                    data: {cg_id: l1},
                    success: function (data) {
                        if (data.code == 200) {
                            $("#level2").html(template.render('<option value="">课程</option>{{each}}<option value="{{$value.cg_id}}" >{{$value.cg_name}} </option>{{/each}}', data.result));
                        }
                    }
                })
            });
            CKEDITOR.replace("fwb");
            $("#s1Form").validate({
                sendForm: false,
                valid: function () {
                    for (var instance in CKEDITOR.instances) {
                        CKEDITOR.instances[instance].updateElement();
                    }
                    $(this).ajaxSubmit({
                        type: "post",
                        url: "/api/course/update/basic",
                        dataType: "json",
                        data: {cs_id: csId},
                        success: function (data) {
                            if(data.code==200){
                                location.href = "/course/course_add_step2?cs_id=" + data.result.cs_id;
                            }
                        }
                    })
                }
            })
        }
    })
});