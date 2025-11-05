# TODO List - Backend API

Sistema de gerenciamento de tarefas - Backend REST API

## Tecnologias

- Node.js
- TypeScript
- Express.js
- Zod (validação)

## Estrutura do Projeto

```
src/
├── api/                    # API Controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Configuração

1. Instalar dependências:
```bash
npm install
```

2. Configurar variáveis de ambiente:
```bash
cp .env.example .env
```

3. Editar `.env` com suas configurações

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Compila TypeScript para JavaScript
- `npm start` - Inicia servidor de produção
- `npm test` - Executa testes
- `npm run lint` - Verifica código com ESLint
- `npm run lint:fix` - Corrige problemas de lint automaticamente

## Endpoints da API

### Health Check
- `GET /health` - Verifica status do servidor

### API v1
- Base URL: `/api/v1`
- External (público): `/api/v1/external/...`
- Internal (autenticado): `/api/v1/internal/...`

## Desenvolvimento

### Adicionando Novos Recursos

1. Criar estrutura de diretórios em `src/api/v1/internal/[feature]/`
2. Implementar controller em `controller.ts`
3. Adicionar rotas em `src/routes/v1/internalRoutes.ts`
4. Implementar lógica de negócio em `src/services/[feature]/`
5. Adicionar testes colocados junto aos arquivos fonte

### Padrões de Código

- Use TypeScript strict mode
- Siga convenções de nomenclatura do projeto
- Documente código com TSDoc
- Escreva testes para novas funcionalidades
- Use Zod para validação de dados

## Licença

ISC