function login() {
    const email = form.email().value;
    const password = form.password().value;

    // Valida o email e a senha
    if (!validateEmail(email)) {
        form.emailInvalidError().style.display = "block"; // Exibe o erro de email inválido
        form.emailRequiredError().style.display = email ? "none" : "block"; // Exibe o erro de campo obrigatório
        return; // Se o email for inválido, não prossegue com o login
    } else {
        form.emailInvalidError().style.display = "none"; // Oculta o erro de email inválido
    }

    if (password.length === 0) {
        form.passwordRequiredError().style.display = "block"; // Exibe o erro de senha obrigatória
        return; // Se a senha estiver vazia, não prossegue com o login
    } else {
        form.passwordRequiredError().style.display = "none"; // Oculta o erro de senha obrigatória
    }

    // Chama o Firebase para autenticar o usuário
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            console.log('Login bem-sucedido', response);
            window.location.href = "index.html";  // Redireciona para a página inicial após o login
        })
        .catch(error => {
            console.log('Erro no login', error);
            alert('Erro ao fazer login: ' + error.message); // Mostra uma mensagem de erro
        });
}

function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function registro() {
    window.location.href = "registro.html";  // Redireciona para a página de registro
}

function toggleEmailErrors() {
    const email = form.email().value;
    // Verifica se o email está vazio
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    // Verifica se o email é válido com regex
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    // Verifica se a senha está vazia
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();

    // Desabilita o botão "Recuperar Senha" se o email não for válido
    form.recoverPasswordButton().disabled = !emailValid;

    // Desabilita o botão "Entrar" se o email ou a senha não forem válidos
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email().value;
    // Se o campo de email estiver vazio ou inválido, retorna false
    return email && validateEmail(email);
}

function isPasswordValid() {
    const password = form.password().value;
    // Verifica se a senha não está vazia
    return password.length > 0;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
}

// Função de validação de email usando uma expressão regular
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
