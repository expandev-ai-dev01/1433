# TODO List - Sistema de Gerenciamento de Tarefas

## Descrição

Sistema completo de gerenciamento de tarefas com funcionalidades avançadas de organização, colaboração e sincronização.

## Funcionalidades

- ✅ Criação e gerenciamento de tarefas
- ✅ Categorização e priorização
- ✅ Definição de prazos e lembretes
- ✅ Marcação de conclusão
- ✅ Busca de tarefas
- ✅ Notificações e lembretes
- ✅ Compartilhamento colaborativo
- ✅ Visualização em calendário
- ✅ Sincronização multiplataforma

## Tecnologias

- **Frontend**: React 18.3.1 + TypeScript 5.6.3
- **Build Tool**: Vite 5.4.11
- **Routing**: React Router DOM 6.26.2
- **State Management**: TanStack Query 5.59.20 + Zustand 5.0.1
- **Forms**: React Hook Form 7.53.1 + Zod 3.23.8
- **Styling**: Tailwind CSS 3.4.14
- **HTTP Client**: Axios 1.7.7

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Root component
│   ├── router.tsx         # Routing configuration
│   └── providers.tsx      # Context providers
├── core/                   # Componentes e utilitários globais
│   ├── components/        # Componentes reutilizáveis
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos globais
│   └── utils/            # Funções utilitárias
├── domain/                # Domínios de negócio
├── pages/                 # Páginas da aplicação
└── assets/               # Recursos estáticos
```

## Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Iniciar servidor de desenvolvimento
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa linter

## Variáveis de Ambiente

```env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Arquitetura

### Padrões de Código

- **Componentes**: Estrutura modular com separação de responsabilidades
- **Hooks**: Custom hooks para lógica reutilizável
- **Services**: Camada de serviços para comunicação com API
- **Types**: TypeScript para type safety

### Convenções de Nomenclatura

- **Componentes**: PascalCase (ex: `TaskList`)
- **Hooks**: camelCase com prefixo `use` (ex: `useTaskList`)
- **Arquivos**: kebab-case para diretórios, PascalCase para componentes
- **Tipos**: PascalCase com sufixo descritivo (ex: `TaskListProps`)

## Contribuição

Para contribuir com o projeto:

1. Crie uma branch para sua feature
2. Faça commit das mudanças
3. Abra um Pull Request

## Licença

MIT