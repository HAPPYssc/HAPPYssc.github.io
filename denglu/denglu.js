//登录
var enter = document.getElementById('enter');
localStorage.setItem('namenum',0);
function skip() {
    localStorage.setItem('namenum',1);
    location.href = "../index.html";
}
enter.onclick = function(){
    var user = document.getElementById('user');
    var ymh = user.value;
    var password = document.getElementById('password');
    var mima = password.value;
    if(ymh == '13297060665')
        if(mima == '123456')
            skip();
        else
          alert("密码错误");
    else
        alert("账号错误");
}
//  弹出二维码
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