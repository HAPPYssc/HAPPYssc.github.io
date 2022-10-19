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

var z_shu = document.getElementById("z_shu");//获取全部商品个数元素

//获取元素
var quanxuan = document.getElementById("selectAll");
var cbs = document.getElementsByName("wd_goods");  

var jian1 = document.getElementById("jian1");
var shuliang1 =document.getElementById("shuliang1");
var jia1 = document.getElementById("jia1");
var zongjia1 = document.getElementById("zongjia1");
var delgoods1 = document.getElementById("delgoods1");
var num1 =Number(shuliang1.value);
var jian2 = document.getElementById("jian2");
var shuliang2 =document.getElementById("shuliang2");
var jia2 = document.getElementById("jia2");
var zongjia2 = document.getElementById("zongjia2");
var delgoods2 = document.getElementById("delgoods2");
var num2 =Number(shuliang2.value);
var pay = document.getElementById("pay");

//goods——1

jian1.onclick = function(){//加函数
    if(num1 > 1){
        num1--;
        shuliang1.value = num1;
        zongjia1.innerHTML = ("￥ "+12888*num1);
    }
    else
        alert("最少购买一件商品！");
}
jia1.onclick = function(){//减函数
    num1++;
    shuliang1.value = num1;
    zongjia1.innerHTML = ("￥ "+12888*num1);
}
delgoods1.onclick = function(){//删除商品
    var shoppingcar = delgoods1.parentNode.parentNode;
    var shopping_goods = delgoods1.parentNode;
    shoppingcar.removeChild(shopping_goods);
    z_shu.innerHTML = ("购物车(全部"+cbs.length+")");
}

//goods——2

jian2.onclick = function(){
    if(num2 > 1){
        num2--;
        shuliang2.value = num2;
        zongjia2.innerHTML = ("￥ "+55999*num2);
    }
    else
        alert("最少购买一件商品！");
}
jia2.onclick = function(){
    num2++;
    shuliang2.value = num2;
    zongjia2.innerHTML = ("￥ "+55999*num2);
}
delgoods2.onclick = function(){//删除商品
    var shoppingcar = delgoods2.parentNode.parentNode;
    var shopping_goods = delgoods2.parentNode;
    shoppingcar.removeChild(shopping_goods);
    z_shu.innerHTML = ("购物车(全部"+cbs.length+")");
}

z_shu.innerHTML = ("购物车(全部"+cbs.length+")");

//选择框
quanxuan.onclick = function(){    //全选
    for (var i = 0; i < cbs.length; i++) {    //2.遍历
        cbs[i].checked = this.checked;    //3.设置每一个cb的状态为选中  checked
    }
}
for(var i = 0; i< cbs.length; i++){
    cbs[i].onclick = function(){//每次点击复选框都要检测所有的框框是否都选中
        var flag = true;
        for(var i = 0;i< cbs.length; i++){
            if(!cbs[i].checked)
                flag = false;
        }
    quanxuan.checked = flag;
    }
}

//计算已选商品总金额函数
function pays(){
    var pays = 0.00;
    if(cbs[0].checked)
        pays+=(Number(document.getElementById("shuliang1").value)*12888);
    if(cbs[1].checked)
        pays+=(Number(document.getElementById("shuliang2").value)*55999);
    pay.innerHTML = (pays);
}
setInterval("pays()",1000);