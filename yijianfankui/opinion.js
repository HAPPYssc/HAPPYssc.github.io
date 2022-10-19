var wenjian = document.getElementById("File");
var wenjian_div = document.getElementById("wenjiian_div");
var font_sl = document.getElementById("font_sl");
var btn_add = document.getElementById("btn_add");
var zaixiankefu = document.getElementById('zaixiankefu');

var flag = true;
zaixiankefu.onclick = function(){
    var kefu_qrcod = document.getElementById('kefu_qrcod');
    if(flag){
        flag = false
        kefu_qrcod.style = "display: block";
    }
    else{
        flag = true;
        kefu_qrcod.style = "display: none";
    }  
}


function clp(){
    return  wenjian.click();
}

function changes(){
    var num = wenjian.files.length;
    font_sl.innerText = ("已选择"+num+"个文件");
}
setInterval(changes,3000);

btn_add.onclick = function(){
    window.location.reload();
    alert("您已成功提交！")
}
