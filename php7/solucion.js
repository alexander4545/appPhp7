<function calcula_densidad(){

        var radioT= 6378e3;
        var radioMe= 2439e3;
        var radioMa= 3390e3;
        var radioVe= 6051e3;
        var areaT= 4*Math.PI*radioT*radioT;
        var areaMe= 4*Math.PI*radioMe*radioMe;
        var areaMa= 4*Math.PI*radioMa*radioMa;
        var areaVe= 4*Math.PI*radioVe*radioVe;
        var mayorMe= areaT/areaMe;
        var mayorVe= areaT/areaVe;
        var mayorMa= areaT/areaMa;
        var d=document.getElementById("resultadoA");
        d.innerHTML=mayorMe + ' veces';
        var e=document.getElementById("resultadoB");
        e.innerHTML=mayorVe + ' veces';
        var f=document.getElementById("resultadoC");
        f.innerHTML=mayorMa + ' veces';
        }
