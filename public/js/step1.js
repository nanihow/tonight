/**
 * Created by rentao on 2017/9/25.
 */
define(["jquery", "template", "tools", "ck"], function ($, template, tools) {
    tools.sm("/course/course_add");
    var csId = tools.qs("cs_id");
    var edit = tools.qs("edit");
    $.ajax({
        type: "get",
        url: "/api/course/basic",
        dataType: "json",
        data: {cs_id: csId},
        success: function (data) {
            data.result.ce_edit = edit;
            $("#cI").html(template("cAU", data.result));
            CKEDITOR.replace("ed");
            $("#level1").change(function () {
                var l1 = $(this).val();
                $.ajax({
                    type: "get",
                    url: "/api/category/child",
                    dataType: "json",
                    data: {cg_id:l1},
                    success: function (data) {
                        if(data.code==200){
                            $("#level2").html(template.render('<option value="">课程</option>{{each}}<option value="{{$value.cg_id}}" >{{$value.cg_name}} </option>{{/each}}',data.result));
                        }
                    }
                })
            })
        }


    })
});