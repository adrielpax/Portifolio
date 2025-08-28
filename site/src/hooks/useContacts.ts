import { useState, useCallback } from 'react';
import { ContactForm, UseContactsReturn } from '@/src/types';

export const useContacts = (): UseContactsReturn => {
  const [contacts, setContacts] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadContacts = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/contacts');
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.contacts || []);
      } else {
        throw new Error(data.error || 'Erro ao carregar contatos');
      }
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
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toLocaleString('pt-BR')
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        return true;
      } else {
        throw new Error(result.error || 'Erro ao enviar mensagem');
      }
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