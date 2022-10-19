var deng_lu = document.getElementById("deng_lu");
var num = localStorage.getItem('namenum')
if (num == 1){
    deng_lu.innerText = "我不会写诗";
    deng_lu.href = "#";
}
else{
    deng_lu.innerText = "请登录！";
    deng_lu.href = "./denglu/denglu.html";
}
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