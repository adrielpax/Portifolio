---
title: "React Hooks Avançados"
excerpt: "Domine useReducer, useContext e crie hooks customizados poderosos."
date: "2025-11-19"
order: 3
slug: "react-hooks-advanced"
---

# React Hooks Avançados

Hooks são o coração do React moderno. Vamos explorar padrões avançados.

## useReducer para Lógica Complexa

Quando `useState` não é suficiente, `useReducer` oferece mais controle:

```typescript
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    default:
      return state;
  }
}
```

## Hooks Customizados

Extraia lógica em hooks reutilizáveis:

```typescript
function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading };
}
```

## Context + Hooks = Gerenciamento de Estado

Combine `useContext` com `useReducer` para criar uma solução robusta sem Redux:

```typescript
const AppContext = createContext<State | null>(null);

export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppState fora do provider');
  return ctx;
}
```

**Dica**: Hooks customizados tornam seu código mais testável e reutilizável!
