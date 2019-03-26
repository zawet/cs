var data=[
    {number:"0.0",name:"崎玉老师",score1:"100",score1Exam:"100"},
    {number:"1.1",name:"何嘉亮",score1:"0",score1Exam:"10"},
    {number:"1.2",name:"伍德怀",score1:"30",score1Exam:"30"},
    {number:"1.3",name:"李培凯",score1:"0",score1Exam:"100"},
    {number:"1.4",name:"赖兴福",score1:"95",score1Exam:"80"},
    {number:"1.5",name:"杨泽铭",score1:"0",score1Exam:"100"},
    {number:"1.6",name:"王东",score1:"0",score1Exam:"90"},
    {number:"1.7",name:"刘释杰",score1:"30",score1Exam:"60"},
    {number:"1.8",name:"詹绍威",score1:"0",score1Exam:"80"},
    {number:"1.9",name:"周豪彬",score1:"80",score1Exam:"80"},
    {number:"1.10",name:"吴振业",score1:"92",score1Exam:"90"},
    {number:"1.11",name:"吴昱锦",score1:"0",score1Exam:"70"},
    {number:"1.12",name:"陈志涛",score1:"80",score1Exam:"70"},
    {number:"1.13",name:"杨嘉桦",score1:"88",score1Exam:"85"},
    {number:"1.14",name:"黄钰民",score1:"100",score1Exam:"80"},
    {number:"1.15",name:"杨榕亮",score1:"82",score1Exam:"100"},
    {number:"1.16",name:"苏才隆",score1:"70",score1Exam:"100"},
    {number:"1.17",name:"徐运英",score1:"84",score1Exam:"85"},
    {number:"1.18",name:"苏曼",score1:"88",score1Exam:"60"},
    {number:"1.19",name:"李坤达",score1:"10",score1Exam:"10"},
    {number:"1.20",name:"陈恒彪",score1:"99",score1Exam:"100"},
    {number:"1.21",name:"徐万强",score1:"0",score1Exam:"0"},
    {number:"1.22",name:"林海鹏",score1:"90",score1Exam:"70"},
    {number:"1.23",name:"许先泽",score1:"70",score1Exam:"100"},
    {number:"1.24",name:"黄振业",score1:"70",score1Exam:"100"},
    {number:"1.25",name:"陈绮文",score1:"65",score1Exam:"100"},
    {number:"1.26",name:"伍志坚",score1:"82",score1Exam:"100"},
    {number:"2.1",name:"李康辉",score1:"80",score1Exam:"100"},
    {number:"2.2",name:"徐胜军",score1:"86",score1Exam:"60"},
    {number:"2.3",name:"李国龙",score1:"0",score1Exam:"100"},
    {number:"2.4",name:"卢志杰",score1:"70",score1Exam:"85"},
    {number:"2.5",name:"温鸿林",score1:"40",score1Exam:"85"},
    {number:"2.6",name:"周伊远",score1:"0",score1Exam:"100"},
    {number:"2.7",name:"程淙鑫",score1:"90",score1Exam:"100"},
    {number:"2.8",name:"谢梓淼",score1:"0",score1Exam:"80"},
    {number:"2.9",name:"蔡晓乾",score1:"60",score1Exam:"100"},
    {number:"2.10",name:"林健",score1:"82",score1Exam:"70"},
    {number:"2.11",name:"柯凯豪",score1:"80",score1Exam:"80"},
    {number:"2.12",name:"杨梓发",score1:"90",score1Exam:"100"},
    {number:"2.13",name:"李明秋",score1:"75",score1Exam:"100"},
    {number:"2.14",name:"李骏鹏",score1:"70",score1Exam:"100"},
    {number:"2.15",name:"戴麟子",score1:"89",score1Exam:"100"},
    {number:"2.16",name:"吴晏莉",score1:"86",score1Exam:"0"},
    {number:"2.17",name:"容树明",score1:"60",score1Exam:"95"},
    {number:"2.18",name:"郑佳祥",score1:"88",score1Exam:"100"},
    {number:"2.19",name:"黄海林",score1:"88",score1Exam:"80"},
    {number:"2.20",name:"李乾斌",score1:"0",score1Exam:"100"},
    {number:"2.21",name:"陈国柱",score1:"86",score1Exam:"100"},
    {number:"2.22",name:"陈丁荣",score1:"92",score1Exam:"100"},
    {number:"2.23",name:"方坚韦",score1:"88",score1Exam:"90"},
    {number:"2.24",name:"何武清",score1:"93",score1Exam:"85"},
    {number:"2.25",name:"李志勇",score1:"60",score1Exam:"100"},
    {number:"2.26",name:"梁嘉跃",score1:"80",score1Exam:"100"}
]
$(function(){
    $(".cs-btn").click(function(){
        var num=$(".cs-input").val();
        console.log(num);
        
        if(num==""){
            alert("请填写课程编号进行查询")
        }else{
            var nums=[];
            data.map(item=>{
                nums.push(item.number);
            })
            var isindex=nums.indexOf(num)
            if(isindex!=-1){
                $(".tips").hide();
                $(".info").show();
                for(var key in data[isindex]){
                    var texts=data[isindex][key];
                    if(key=="score1"||key=="score1Exam"){
                        if(Number(data[isindex][key])<60){
                            texts='<font>'+data[isindex][key]+'%</font>';
                        }else if(Number(data[isindex][key])>=90){
                            texts='<b>'+data[isindex][key]+'%</b>';
                        }else{
                            texts='<span>'+data[isindex][key]+'%</span>';
                        }
                    }
                    $("#"+key).html(texts)
                }
                $("#tx").attr("src","images/tx/"+data[isindex].name+".jpg")
                
            }else{
                $(".tips").show();
                $(".info").hide();
            }
            
        }
    })
})