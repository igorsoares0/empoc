# 📧 Email Builder SaaS — Spec Driven Development (SDD)

## 1. 📌 Overview

Este projeto consiste em um **email builder visual focado em templates bonitos**, com experiência moderna e intuitiva.

O sistema permitirá que usuários:
- Criem emails via drag-and-drop
- Editem conteúdo visualmente
- Utilizem templates premium
- Exportem HTML compatível com clientes de email

---

## 2. 🎯 Goals

### Objetivos principais
- Criar um builder simples e rápido
- Garantir compatibilidade com clientes de email
- Oferecer templates visualmente superiores
- Minimizar possibilidade de quebrar layout

### Não objetivos (por enquanto)
- Editor totalmente livre (tipo HTML bruto)
- Customizações ultra avançadas de baixo nível
- Integração com todos os provedores de email no MVP

---

## 3. 🧱 Core Architecture

### Stack
- Next.js (App Router)
- Zustand (state management)
- MJML (renderização de email)
- dnd-kit (drag and drop)

---

## 4. 🧠 Data Model (Single Source of Truth)

Toda a estrutura do email será baseada em uma árvore JSON.

```ts
type EmailNode = {
  id: string
  type: 'section' | 'column' | 'text' | 'image' | 'button'
  props: Record<string, any>
  children?: EmailNode[]
}
```

### Regras
- A árvore é a única fonte da verdade
- Nunca salvar HTML como fonte primária
- Todas as operações devem modificar a árvore

---

## 5. 🧩 Editor State (Zustand)

```ts
type EditorState = {
  tree: EmailNode[]
  selectedId: string | null

  addNode: (parentId: string, node: EmailNode) => void
  updateNode: (id: string, props: any) => void
  deleteNode: (id: string) => void
  selectNode: (id: string | null) => void
}
```

---

## 6. 🖥️ UI Layout

Estrutura de 3 colunas:

[ Blocos ] | [ Canvas ] | [ Propriedades ]

---

## 7. 🎨 Template System

```ts
type Template = {
  id: string
  name: string
  category: string
  thumbnail: string
  tree: EmailNode[]
}
```

---

## 8. 🔄 Rendering Pipeline

JSON Tree → MJML → HTML → Preview

---

## 9. 🧪 Preview System

- Utilizar iframe
- Isolar CSS
- Garantir fidelidade

---

## 10. 🧲 Drag and Drop

- dnd-kit
- Impedir estruturas inválidas

---

## 11. ✍️ Editing Experience

- Edição inline
- Seleção visual
- Sidebar

---

## 12. 🔁 Undo / Redo

- Histórico baseado em snapshots

---

## 13. 📤 Export

- HTML no MVP

---

## 14. ⚠️ Constraints

- CSS limitado
- Tabelas
- Outlook issues

---

## 15. 🧪 Validation Rules

- Section → Column → Content

---

## 16. 🚀 MVP Scope

Inclui:
- Drag-and-drop
- Templates
- Preview
- Export

---

## 17. 🔮 Future

- Variáveis
- Dark mode
- Mobile preview

---

## 18. 🧠 Principles

- Simplicidade > flexibilidade
- JSON como fonte única

---

## 19. 📁 Structure

/app
/components
/store
/lib
/templates
/types

---

## 20. ✅ Done

- Atualiza árvore
- Reflete no preview
- Não quebra layout
