<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$email = $_POST['telefono'];
$mensaje = $_POST['mensaje'];




$para = 'zayra.chavez@hotmail.com';
$titulo = 'Sitio Web Pl�sticos Centauro';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n Correo Electr�nico: $email\n Tel�fono: $telefono\n Mensaje: $mensaje";

if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = 'http://newbie.com.mx';
</script>";
} else {
echo 'Fall�� el envio';
}
}
?>