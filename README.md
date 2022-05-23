# Desafio-Ford

# Objetivo:
Para garantir a confidencialidade dos clientes é necessário que os dados recebidos sejam criptografados.

# Como funciona?
O grupo verde concordou em criar uma aplicação que receba o VIN Number e uma Senha (Secret Key), as informações seriam convertidas segundo a tabela ASCII. Cada caractere recebido é convertido e em seguida somado aos caracteres da Secret Key.

Ao final do processo o app retorna o VIN Number encriptado.

O usuário que possui a secret key consegue fazer também o processo reverso sendo que ao invés de somar seria subtraído.

As funções foram criadas em arquivos diferentes, um que faz a criptografia (Encrypt.js) e outro que realiza a descriptografia (Decrpyt.js)

# Linguagem utilizada:
Javascript.
