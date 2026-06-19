# 🚀 Pipeline de Integração Contínua com GitHub Actions

## 📌 Objetivo

Este projeto tem como objetivo implementar uma pipeline de **Integração Contínua (CI)** utilizando **GitHub Actions**, garantindo a automação de processos essenciais como:

* Validação de código
* Execução de testes automatizados
* Geração e armazenamento de relatórios

---

## ⚙️ Tecnologias Utilizadas

* **Node.js**
* **Mocha** (framework de testes)
* **Mochawesome** (geração de relatórios)
* **GitHub Actions** (CI/CD)

---

## 🔄 Tipos de Execução da Pipeline

A pipeline foi configurada para executar em três cenários:

### 🔹 Execução por Push

A pipeline é acionada automaticamente ao realizar push nas branches:

* `main`
* `feature/new-tests`

---

### 🔹 Execução Manual

É possível executar manualmente através da opção:

> **Run workflow** na aba **Actions** do GitHub

---

### 🔹 Execução Agendada (Schedule)

```yaml
schedule:
  - cron: '*/30 * * * *'   # a cada 30 minutos
  - cron: '0 0 * * 5'      # toda sexta-feira à meia-noite (UTC)
```

---

## 🧩 Estrutura da Pipeline

A pipeline é composta por 3 jobs principais:

---

### 🔍 Inspeção de Código (Lint)

Responsável por validar a qualidade do código:

* Instala dependências com `npm ci`
* Executa análise com:

```
npm run lint
```

---

### 🧪 Testes Unitários

Responsável por validar o funcionamento da aplicação:

* Executa testes com **Mocha**
* Gera relatório com **Mochawesome**

Comando utilizado:

```
npx mocha --reporter mochawesome
```

---

### 📦 Armazenamento do Relatório

Após a execução dos testes:

* O relatório é gerado na pasta:

```
mochawesome-report/
```

* O GitHub Actions armazena o relatório utilizando:

```
actions/upload-artifact
```

* O arquivo fica disponível para download na aba **Actions**

---

### 🚀 Deploy (Simulado)

Etapa final que simula um deploy:

```
echo 'Deploy sendo realizado...'
```

---

## 📊 Relatório de Testes

Os relatórios são gerados automaticamente a cada execução dos testes.

### 📍 Onde encontrar:

1. Acesse a aba **Actions**
2. Clique em uma execução da pipeline
3. Vá até a seção **Artifacts**
4. Baixe o arquivo **Relatorio-Testes**

---

## 💡 Conceitos Aplicados

### ✅ Integração Contínua (CI)

Execução automática de validações a cada alteração no código.

---

### ✅ Automação de Testes

Uso de testes unitários para garantir a qualidade da aplicação.

---

### ✅ Pipeline como Código

Toda a pipeline é definida em arquivo YAML dentro de:

```
.github/workflows/
```

---

### ✅ Artifacts

Arquivos gerados durante a pipeline que podem ser armazenados e baixados posteriormente.

---

### ✅ Linters

Ferramentas que ajudam a manter padrões de código e evitar erros.

---

## 📌 Conclusão

Essa pipeline garante:

* Maior confiabilidade no código
* Feedback rápido sobre falhas
* Automação do processo de testes
* Padronização do desenvolvimento

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo em CI/CD com GitHub Actions.
