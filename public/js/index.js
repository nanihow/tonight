/**
 * Created by rentao on 2017/9/25.
 */
define(["jquery", "tools", "echarts"], function ($, tools, echarts) {
    tools.sm(location.pathname);
    var ec = echarts.init($("#main").get(0));
    ec.setOption({
        series : [
            {
                name: 'team3',
                type: 'pie',
                radius: '90%',
                data:[
                    {value:9, name:'张达'},
                    {value:11, name:'董永超'},
                    {value:9, name:'刘新文'},
                    {value:9, name:'吕喆'},
                    {value:9, name:'冯铁骊'},
                    {value:8, name:'魏晶'},
                    {value:10, name:'邰兰均'},
                    {value:10, name:'姜冬冬'},
                    {value:11, name:'邓尚辉'},
                    {value:8, name:'田晨阳'},
                    {value:10, name:'李锐'},
                    {value:1, name:'任韬'}
                ]
            }
        ]
    });


});