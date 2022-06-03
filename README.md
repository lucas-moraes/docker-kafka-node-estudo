# Apache Kafka - Docker e Node

</br>

### 🏁 Introdução

---

O repositório foi desenvolvido com o intuito de passar um caminho a ser seguido para os primeiros passos de entendimento da ferramenta como um todo.

 </br>

### 📘 Bibliotecas e ferramentas

---

<code> NodeJS</code>
</br>
<code> kafkaJS</code>
</br>
<code> Docker compose</code>

</br>

### 🚀 Subindo o sistema

---

- Instalar o node_modules <code>npm install</code>
- Iniciar os containers <code>docker compose up -d</code>
- verificar se os conteiners startaram <code>docker container ls </code>
- Acessar a interface kafdrop <code>http://localhost:19000</code>

</br>

---

<details>
<summary> [clique] ⚙️ Funcionamento geral </summary>

</br>

O sistema consiste em 3 containers:

1. Zookeeper
2. Kafka
3. kafDrop

O Kafka recebe os dados e os envia ao zookeeper para persistí-los, o kafdrop é a ferramenta gráfica que apresenta todos os dados persistidos.
Dentro do sistema kafka, há um broker que agrupa os topic's de forma paralela e dentro dos topic's existem partitions que são como subfilas ou assuntos.

Fora o sistema ternário apresentado, temos os entes que manipulam os dados:

1. Producer's
2. Consumer's
3. Administrator

Os producer's são encarregados de enviar os dados para o Kafka;
</br>
Os Consumer's são encarregados de ler os dados no kafka, eles também possuem uma propriedade de 'stand-by', ficam aguardando qualquer atualização do kafka para lerem novos dados;
</br>
O Administrador não aparece nas documentações mas serve para manipular as propriedades do kafka, como excluir e criar topicos;

</details>

---

<details>
<summary> [clique] ⚙️ Funcionamento do repositorio </summary>

</br>

### Pasta <code>runs</code> contem os arquivos que serão iniciados pelo node (Ex: <code>node run_adm_sany.js</code>)

### Pasta <code>src</code> contém os arquivos dos códigos de funcionamento.

### Acesse a pasta <code>runs</code> e emule um producer (Ex: <code>node run_producers_karina.js</code>), após isto emule ao mesmo tempo um consumer (Ex: <code>node run_consumer_leo.js</code>). No terminal pode ser visto o comportamento de envio e recebimento de dados.

### Acesse o <code>localhost:19000</code> pode ser visto o novo tópico e os dados persistidos

</details>

---
