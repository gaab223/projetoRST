# Sistema de Login com Firebase

**Desenvolvedor**: Gabriel Silva  
**Objetivo**: Criar um sistema de login utilizando Firebase para autenticação de usuários.

## Visão Geral do Projeto
O sistema de login foi desenvolvido para permitir que os usuários façam login com suas credenciais através de um formulário. O projeto utiliza o Firebase Authentication para garantir a segurança do processo de login, validando os dados de usuário e redirecionando para a página inicial após a autenticação bem-sucedida.

## Funcionalidades
- **Login com Email e Senha**: O sistema permite que o usuário faça login usando seu email e senha.
- **Redirecionamento após Login**: Após uma autenticação bem-sucedida, o usuário é redirecionado para a página principal (`index.html`).
- **Validação de Campos**: O sistema realiza validação simples para garantir que os campos de email e senha não estejam vazios.
- **Mensagens de Erro**: Caso haja falhas na autenticação, o sistema exibe mensagens de erro, informando o usuário sobre o problema.

## Arquitetura e Tecnologias
- **Firebase**: Utilizado para autenticação do usuário. O Firebase é uma plataforma desenvolvida pelo Google para a construção de aplicativos móveis e web. Ele fornece uma solução fácil para gerenciamento de autenticação.
- **HTML/CSS**: Utilizados para estruturar e estilizar as páginas de login.
- **JavaScript**: Responsável pela lógica do frontend, como validação de campos e integração com o Firebase.
- **Bootstrap**: Framework utilizado para criar uma interface responsiva e estilizada.

## Fluxo de Trabalho
1. O usuário acessa a página de login (`login.html`).
2. Preenche os campos de email e senha.
3. Ao clicar no botão "Entrar", o JavaScript envia as credenciais para o Firebase.
4. O Firebase autentica os dados e, em caso de sucesso, o usuário é redirecionado para `index.html`.
5. Caso ocorra algum erro, uma mensagem de erro será exibida.

## Estrutura de Arquivos


## Como Rodar o Projeto
1. **Firebase Setup**: 
   - Certifique-se de ter configurado o Firebase corretamente no console do Firebase.
   - Obtenha as credenciais do Firebase (como `apiKey`, `authDomain`, etc.) e insira no arquivo `firebase.js`.

2. **Instalação**:
   - Este projeto não depende de pacotes externos além dos mencionados (Bootstrap, Firebase).
   - Apenas abra os arquivos `.html` em um navegador para ver o sistema em funcionamento.

3. **Testar Login**:
   - Acesse a página `login.html`.
   - Insira um email e senha já cadastrados no Firebase para testar a autenticação.

## Possíveis Melhorias
- **Registro de Usuário**: Implementar a funcionalidade de registro para novos usuários.
- **Recuperação de Senha**: Adicionar uma funcionalidade para recuperação de senha, caso o usuário esqueça.
- **Validações Avançadas**: Implementar validações mais detalhadas para o campo de senha (ex: comprimento mínimo, caracteres especiais).
- **UX/UI**: Melhorar o design da interface para uma experiência mais fluida e agradável.

## Considerações Finais
Este sistema de login é uma implementação simples, mas eficaz, para autenticação de usuários utilizando Firebase. Ele pode ser expandido para adicionar mais funcionalidades, como o registro de novos usuários e a recuperação de senha.

## Desafios
Minha maior dificuldade foi organizar o código de forma clara e eficiente. Além disso, tive dificuldades para implementar o login e a integração com o Firebase, o que gerou alguns obstáculos ao longo do desenvolvimento. No entanto, com o tempo e prática, consegui superar esses desafios e aprender mais sobre essas tecnologias.

---
