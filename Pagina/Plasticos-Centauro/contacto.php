<?php
$nombre = $_POST['nombre'];
$email = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$para = 'plasticos_centauro@hotmail.com';
$titulo = 'Mensaje enviado desde la pagina web de Plasticos Centauros';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Telefono: $telefono\n Mensaje:\n $mensaje";
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = 'http://plasticoscentaurodgo.com/';
</script>";
} else {
echo 'Fallo el envio';
}
}
?>