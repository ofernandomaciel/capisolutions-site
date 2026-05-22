<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitização e validação de dados
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_SPECIAL_CHARS);

    if (!$nome || !$email || !$mensagem) {
        echo json_encode(['success' => false, 'message' => 'Por favor, preencha todos os campos corretamente.']);
        exit;
    }

    $to = 'contato@capisolutions.com';
    $subject = '=?UTF-8?B?' . base64_encode('Novo Contato: ' . $nome) . '?=';
    
    // Corpo do e-mail
    $body = "Você recebeu uma nova mensagem de contato através do site CapiSolutions:\n\n";
    $body .= "Nome: " . html_entity_decode($nome, ENT_QUOTES, 'UTF-8') . "\n";
    $body .= "E-mail: " . $email . "\n\n";
    $body .= "Mensagem:\n" . html_entity_decode($mensagem, ENT_QUOTES, 'UTF-8') . "\n";

    // Cabeçalhos do e-mail (usando um e-mail do próprio domínio para evitar cair no spam)
    $headers = "From: CapiSolutions <contato@capisolutions.com>\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // Dispara o e-mail nativo do servidor Hostinger
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'O servidor de e-mail falhou ao enviar a mensagem.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método de requisição inválido.']);
}
