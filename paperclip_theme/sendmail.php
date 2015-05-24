<?php
require_once('config.php');
require_once('recaptcha/recaptchalib.php');

$json = array();
$email = isset( $_POST['email'] ) ? $_POST['email'] : '';
$name = isset( $_POST['name'] ) ? $_POST['name'] : '';
$message = isset( $_POST['message'] ) ? $_POST['message'] : '';

if( !$name ) {
    $json['error']['name'] = 'Please enter your full name.';
}
if( !$message ) {
    $json['error']['message'] = 'Please enter your message.';
}
if( !$email || !preg_match('/^[^\@]+@.*\.[a-z]{2,6}$/i', $email ) ) {
    $json['error']['email'] = 'Please enter your email address.';
}
// Checking reCaptcha
# the response from reCAPTCHA
$resp = null;
# the error code from reCAPTCHA, if any
$error = null;
# was there a reCAPTCHA response?
if ($_POST["recaptcha_response_field"]) {
    $resp = recaptcha_check_answer ($privatekey,
        $_SERVER["REMOTE_ADDR"],
        $_POST["recaptcha_challenge_field"],
        $_POST["recaptcha_response_field"]
    );
    // if reCaptcha is invalid
    if (!$resp->is_valid) {
        # set the error code so that we can display it
        $error = $resp->error;
        $json['error']['recaptcha'] = 'Incorrect code. Please try again.';
    }
} else {
    $json['error']['recaptcha'] = 'Please enter the text from reCaptcha.';
}
$json['recaptcha'] = recaptcha_get_html( $publickey, $error );

// If no errors
if( !isset( $json['error'] ) ) {
    // Email text
    $mail_message = "From: " . $name . "\r\n\r\n";
    $mail_message .= "E-mail: " . $email . "\r\n\r\n";
    $mail_message .= "Message:\r\n\r\n" . $message . "";
    // Email title
    $mail_headers  = "Content-type: text/plain; charset=utf-8\r\n";
    $mail_headers .= "From: {$mail_sender}\r\n";
    // Sending email
    mail( $to_email, $mail_subject, $mail_message, $mail_headers );
    $json['success'] = 'Your message was sent successfully!';
}

echo json_encode( $json );
?>