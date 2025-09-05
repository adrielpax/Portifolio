import { useState } from 'react';
import { FaTimes, FaSpinner, FaPaperPlane } from 'react-icons/fa';
import { ContactModalProps, ContactForm } from '@/src/types';
import { useContacts } from '@/src/hooks/useContacts';

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const { submitContact } = useContacts();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await submitContact(formData);
      
      if (success) {
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
         localStorage.setItem("contactSubmitted", "true");
         setFormData({ name: '', email: '', message: '' });
        onClose();
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const alreadySubmitted = typeof window !== "undefined" && localStorage.getItem("contactSubmitted") === "true";

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-cyan-400">Contato</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded"
            disabled={isSubmitting}
            aria-label="Fechar modal"
          >
            <FaTimes />
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nome *
            </label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mensagem *
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 text-white placeholder-gray-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Descreva seu projeto ou ideia..."
            />
          </div>
          
          <button 
            type="submit"
            disabled={!isFormValid || isSubmitting || alreadySubmitted}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Enviar Mensagem
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;