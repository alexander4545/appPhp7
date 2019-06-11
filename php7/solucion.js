<?php
     function calcula_densidad(){
	$Pi= 3.141592;
        $radioT= 6378e3;
        $radioMe= 2439e3;
        $areaT= 4*$Pi*$radioT*$radioT;
        $areaMe= 4*$Pi*$radioMe*$radioMe;
        $mayorMe= $areaT/$areaMe;
        return $mayorMe;
     }
function calcula_densidad2(){
	$Pi= 3.141592;
        $radioT= 6378e3;
        $radioMa= 3390e3;
        $areaT= 4*$Pi*$radioT*$radioT;
        $areaMa= 4*$Pi*$radioMa*$radioMa;
        $mayorMa= $areaT/$areaMa;
        return $mayorMa;
     }
function calcula_densidad3(){
	$Pi= 3.141592;
        $radioT= 6378e3;
        $radioVe= 6051e3;
        $areaT= 4*$Pi*$radioT*$radioT;
        $areaVe= 4*$Pi*$radioVe*$radioVe;
        $mayorVe= $areaT/$areaVe;
        return $mayorVe;
     }
?>
<section class="resultado">
<h2>Resultado:</h2>
<div id="resultado"></div>
<?php
 print "<h1>".calcula_densidad()." veces<br>"
 .calcula_densidad3()." veces<br>"
 .calcula_densidad2()." veces</h1>";
?>
