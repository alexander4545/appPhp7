<!DOCTYPE html>
<html lang="es-mx">
<head>
    <meta charset="UTF-8">
    <title>IntroJS Grupo XB</title>
    <link rel="stylesheet" href="css/estilos.css"/>
    <link rel="stylesheet" href="css/menu.css"/>
    <link rel="stylesheet" href="css/problemas.css"/>
    <link rel="stylesheet" href="php7/solucion.js"/>
    <link href="https://fonts.googleapis.com/css?family=Rambla" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
    
</head>
<body>
   <section class="wrapper">
    <header>
      <h1 class="logo"><a href="index.html">IntroJS</a></h1>
      <nav>
      <ul>
        <li><a href="index.html" class="current">Inicio</a></li>
        <li><a href=basicoJS.html>Básica</a></li>
      </ul>
      </nav>
    </header>
<section id="contenedor">
<section  class="problema">
  <h2>Alumno: Omar Alexander Sanchez Mejia   No. de control 16091217 <br>
    Problema: ¿Cuantas veces es mas grande la tierra que: Mercurio, Venus y Marte?</h2>

</section>
<section class="formulas">
<h2>Fórmula</h2>
    Calcular Area=4*pi*r*r<br>
    Calcular Veces Mayor=Area1/Area2
</section>
<section class="datos">
<h2>Datos:</h2>
<p>Descripción:</p>
<p>El radio de la Tierra es 6378 km <br>
  El radio de Mercurio es 2439.7 km <br>
  El radio de Venus es 6051.8 km <br>
  El radio de Marte es 3390 km
</p>
</section>
<section class="calculos">
<h2>Solución</h2>
   <p>El area de la tierra es mas grande que Mercurio:<br>
     El area de la tierra es mas grande que Venus:<br>
     El area de la tierra es mas grande que Marte:
    </p>
    <button onclick="calcula_densidad();">Presiona para calcular</button>
</section>
<section class="resultado">
<h2>Resultado:</h2>
<div id="resultadoA"><br></div>
<div id="resultadoB"><br></div>
<div id="resultadoC"><br></div>
</section>
</section>
    <footer class="pie">
     Creative Commons versión 3.0 SciSoft 2019
    </footer>
   </section>
</body>
</html>
