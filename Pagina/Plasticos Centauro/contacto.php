<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$email = $_POST['telefono'];
$mensaje = $_POST['mensaje'];




$para = 'zayra.chavez@hotmail.com';
$titulo = 'Sitio Web Plásticos Centauro';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n Correo Electrónico: $email\n Teléfono: $telefono\n Mensaje: $mensaje";

if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = 'http://newbie.com.mx';
</script>";
} else {
echo 'Fall¨® el envio';
}
}
?>