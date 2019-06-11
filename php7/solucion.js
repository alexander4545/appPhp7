        <!DOCTYPE html>
<html lang="es-mx">
<head>
    <meta charset="UTF-8">
    <title>IntroPhp7 Grupo XA</title>
    <link rel="stylesheet" href="css/estilos.css"/>
    <link rel="stylesheet" href="css/menu.css"/>
    <link rel="stylesheet" href="css/problemas.css"/>
    <link href="https://fonts.googleapis.com/css?family=Rambla" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
</head>
<body>
   <section class="wrapper">
    <header>
      <h1 class="logo"><a href="index.php">IntroPHP7</a></h1>
      <nav>
      <ul>
        <li><a href="index.php" class="current">Inicio</a></li>
        <li><a href="#">Otros Ejemplos Php7</a></li>
      </ul>
      </nav>
    </header>
<section id="contenedor">
<section  class="problema">
  <h2>Alumno: Omar Alexander Sanchez Mejia   No. de control 16091217 <br>
Problema: ¿Cuantas veces es mas grande la tierra que: Mercurio, Venus y Marte?</h2>
  </section>
<section class="formulas">
<h2>Fórmulas</h2>
    Densidad = Masa/Volumen<br>
    Volumen=(4/3)pi*r*r*r
</section>
<section class="datos">
<h2>Datos:</h2>
<p>El radio de la Tierra es 6378 km <br>
  El radio de Mercurio es 2439.7 km <br>
  El radio de Venus es 6051.8 km <br>
  El radio de Marte es 3390 km </p>
</section>
<section class="calculos">
<h2>Solución</h2>
   <p>El area de la tierra es mas grande que Mercurio:<br>
     El area de la tierra es mas grande que Venus:<br>
     El area de la tierra es mas grande que Marte:
    </p>
</section>
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
</section>
</section>
    <footer class="pie">
     Creative Commons versión 3.0 SciSoft 2019
