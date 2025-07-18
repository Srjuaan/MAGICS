<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos y sanitizar
    $nombre = strip_tags(trim($_POST['nombre']));
    $telefono = strip_tags(trim($_POST['telefono']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $mensaje = strip_tags(trim($_POST['mensaje']));
    $captcha = trim($_POST['captcha']);

    // Validar campos obligatorios
    if (empty($nombre) || empty($telefono) || empty($email) || empty($mensaje) || empty($captcha)) {
        echo "Por favor completa todos los campos.";
        exit;
    }

    // Validar el email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "El correo electrónico no es válido.";
        exit;
    }

    // Validar captcha
    if ($captcha !== "5") {
        echo "Respuesta de captcha incorrecta.";
        exit;
    }

    // Configurar destinatario
    $destino = "envioemail278@gmail.com"; // Cambia por tu correo real
    $asunto = "Nuevo mensaje de formulario de inscripción";

    // Contenido del mensaje
    $contenido = "Has recibido un nuevo mensaje:\n\n";
    $contenido .= "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Mensaje: $mensaje\n";

    // Cabeceras
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar el correo
    if (mail($destino, $asunto, $contenido, $headers)) {
        header("Location: gracias.html");
        exit;
    } else {
        echo "Error al enviar el mensaje. Intenta de nuevo.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>

