# Gerador de Dietas API

API para geração de planos de dieta personalizados com integração à plataforma **Groq** (IA). A aplicação gera dietas de 7 dias com 3 refeições por dia (café da manhã, almoço e jantar), com base em dados do usuário.

## Tecnologias

- **Fastify** – servidor HTTP
- **Groq SDK** – integração com o modelo LLaMA para geração do plano
- **Zod** – validação de dados e variáveis de ambiente
- **TypeScript** – tipagem estática

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- Conta na [Groq](https://console.groq.com/) para obter uma API key

## Instalação

1. **Clone o repositório** (se ainda não tiver):

   ```bash
   cd gerador-dietas/backend
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:

   Copie o arquivo de exemplo e preencha com seus valores:

   ```bash
   cp .env.example .env
   ```

   Edite o `.env`:

   ```env
   PORT=3333
   GROQ_API_KEY="sua-chave-api-groq"
   ```

   - **PORT**: porta em que o servidor vai rodar (ex.: `3333`)
   - **GROQ_API_KEY**: chave obtida em [Groq Console](https://console.groq.com/keys)

## Uso

### Subir o servidor

Em modo desenvolvimento (com reload automático):

```bash
npm run dev
```

O servidor ficará disponível em `http://localhost:PORT` (ex.: `http://localhost:3333`).

### Endpoint: criar plano de dieta

**POST** `/plans`

Gera um plano de dieta de 7 dias em texto Markdown com base nos dados enviados.

**Corpo da requisição (JSON):**

| Campo             | Tipo   | Obrigatório | Descrição                                                                 |
|-------------------|--------|-------------|---------------------------------------------------------------------------|
| `nome`            | string | Sim         | Nome da pessoa (mín. 2 caracteres)                                       |
| `idade`           | number | Sim         | Idade em anos (positivo)                                                  |
| `altura_cm`       | number | Sim         | Altura em centímetros (positivo)                                          |
| `peso_kg`         | number | Sim         | Peso em quilogramas (positivo)                                            |
| `sexo`            | string | Sim         | `"masculino"` ou `"feminino"`                                             |
| `nivel_atividade` | string | Sim         | `"sedentario"`, `"levemente_ativo"`, `"moderadamente_ativo"`, `"muito_ativo"` |
| `objetivo`        | string | Sim         | `"perder_peso"`, `"ganhar_massa"` ou `"manter_peso"`                       |

**Exemplo de requisição (cURL):**

```bash
curl -X POST http://localhost:3333/plans \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Maria",
    "idade": 30,
    "altura_cm": 165,
    "peso_kg": 65,
    "sexo": "feminino",
    "nivel_atividade": "moderadamente_ativo",
    "objetivo": "perder_peso"
  }'
```

**Resposta (201):**

Corpo em texto (Markdown) com o plano de dieta de 7 dias e 3 refeições por dia.

## Estrutura do projeto

```
backend/
├── src/
│   ├── adapters/      # Integração com Groq
│   ├── config/        # Prompts do modelo
│   ├── controllers/   # Lógica das rotas
│   ├── env/           # Validação de variáveis de ambiente
│   ├── routes/        # Rotas da API
│   ├── schemas/       # Schemas Zod (validação)
│   └── server.ts      # Entrada do servidor
├── .env.example
├── package.json
└── tsconfig.json
```

## Licença

ISC
