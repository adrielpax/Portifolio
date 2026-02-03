import { useState, useCallback } from 'react';
import { ContactForm, UseContactsReturn } from '@/src/types';

export const useContacts = (): UseContactsReturn => {
  const [contacts, setContacts] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);


const loadContacts = useCallback(async (): Promise<void> => {
  try {
    setLoading(true);
    setError(null);

    const response = await fetch('/api/contacts'); // <-- ajuste aqui também
    const data = await response.json().catch(() => null);

    if (!response.ok) throw new Error(data?.error || `Erro HTTP: ${response.status}`);

    if (data?.success) setContacts(data.contacts || []);
    else throw new Error(data?.error || 'Erro ao carregar contatos');

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
    console.error('Erro ao carregar contatos:', errorMessage);
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
}, []);


  const submitContact = useCallback(async (data: ContactForm): Promise<boolean> => {
  try {
    setError(null);

    const response = await fetch('/api/contacts', { // <-- ajuste o path aqui
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toLocaleString('pt-BR'),
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(result?.error || `Erro HTTP: ${response.status}`);
    }

    if (result?.success) {
      setSubmitted(true);
      return true;
    }

    throw new Error(result?.error || 'Erro ao enviar mensagem');
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
    console.error('Erro ao enviar contato:', errorMessage);
    setError(errorMessage);
    return false;
  }
}, []);

  return {
    contacts,
    loading,
    error,
    loadContacts,
    submitContact,
  };
};
