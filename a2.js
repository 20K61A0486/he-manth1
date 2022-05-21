let question001=["1.what is 1+1?<br/><br/><input onclick=option001() name=button001 type=radio />2<br><br><input onclick=option002() name=button001 type=radio />4<br><br><input onclick=option003() name=button001 type=radio />6<br><br><input onclick=option004() name=button001 type=radio />3<br><br>2.what is 1+5?<br><br><input onclick=option005() name=button002 type=radio />7<br><br><input onclick=option006() name=button002 type=radio />4<br><br><input onclick=option007() name=button002 type=radio />6<br><br><input onclick=option008() name=button002 type=radio />3<br><br>3.what is 13+5?<br/><br/><input onclick=option009() name=button003 type=radio />15<br><br><input onclick=option0010() name=button003 type=radio />18<br><br><input onclick=option0011() name=button003 type=radio />17<br><br><input onclick=option0012() name=button003 type=radio />20<br><br>4.what is 20+30?<br/><br/><input onclick=option0013() name=button004 type=radio />49<br><br><input onclick=option0014() name=button004 type=radio />51<br><br><input onclick=option0015() name=button004 type=radio />50<br><br><input onclick=option0016() name=button004 type=radio />52<br><br>5.what is 60+59?<br/><br/><input onclick=option0017() name=button005 type=radio />118<br><br><input onclick=option0018() name=button005 type=radio />114<br><br><input onclick=option0019() name=button005 type=radio />119<br><br><input onclick=option0020() name=button005 type=radio />113<br><br>"];
let a;
let b;
let z;
let c,d,e,f,g,h,i,j;
window.onload=function(){
    a=0;
    b=0;
    message001.innerHTML=question001;
    click001.innerHTML="<button onclick=submit001()>submit</button>"
}
function option001(){
    a=1;d=2;

}
function option002(){
    a=0;d=4;
}
function option003(){
    a=0;d=6;
}
function option004(){
    a=0;d=3;
}
function option005(){
    b=0;e=7;
}
function option006(){
    b=0;e=4;
}
function option007(){
    b=1;e=6;
}
function option008(){
    b=0;e=3;
}
function option009(){
    c=0;f=15;
}
function option0010(){
    c=1;f=18;
}
function option0011(){
   c=0;f=17;
}
function option0012(){
    c=0;f=20;
}
function option0013(){
    g=0;h=49;
}
function option0014(){
    g=0;h=51;
}
function option0015(){
    g=1;h=50;
}
function option0016(){
    g=0;h=52;
}
function option0017(){
    i=0;j=118;
}
function option0018(){
    i=0;j=114;
}
function option0019(){
    i=1;j=119;
}
function option0020(){
    i=0;j=113;
}
function submit001(){
    z=a+b+c+i+g;
    message001.innerHTML="End of quiz";
    alert("your score is "+z);
    click001.innerHTML="<button onclick=repeat001()>Repeat</button>";
}
function repeat001(){
    location.reload();
}