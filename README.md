# Desafio-Ford

# Objetivo:
Para garantir a confidencialidade dos clientes é necessário que os dados recebidos sejam criptografados.

# Como funciona?
Dado um VIN Number e uma Senha (Secret Key), as informações devem ser convertidas segundo a tabela ASCII. Cada caractere recebido é convertido e em seguida somado aos caracteres da Secret Key.

Ao final do processo o app retorna o VIN Number encriptado.

O usuário que possui a secret key consegue fazer também o processo reverso sendo que ao invés de somar seria subtraído.

As funções foram criadas em arquivos diferentes, um que faz a criptografia (Encrypt.js) e outro que realiza a descriptografia (Decrypt.js)

A função de encrypt recebe como parametros o VNUMBER e o Secret Key, faz a conversão para ASCII e soma ao também convertido SecretKey, cada caractere individualmente, caso a Secret Key seja menor que o VIN Number, ela é reduzida.

# Linguagem utilizada:
Javascript.
