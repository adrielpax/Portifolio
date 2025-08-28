import { ReactElement, useEffect } from 'react';
import { 
  FaTimes, 
  FaSpinner, 
  FaExclamationTriangle, 
  FaInbox, 
  FaSyncAlt,
  FaUserShield,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import { AdminPanelProps, ContactForm } from '@/src/types';
import { useContacts } from '@/src/hooks/useContacts';

interface ContactCardProps {
  contact: ContactForm;
  index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, index }) => (
  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
    <div className="flex justify-between items-start mb-2">
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-cyan-400 truncate">{contact.name}</h4>
        <p className="text-blue-400 text-sm truncate flex items-center gap-1 mt-1">
          <FaEnvelope className="text-xs" />
          {contact.email}
        </p>
      </div>
      <div className="flex items-center gap-2 ml-2 flex-shrink-0">
        <span className="bg-blue-600 text-xs px-2 py-1 rounded">#{index + 1}</span>
        {contact.timestamp && (
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <FaClock />
            {contact.timestamp}
          </span>
        )}
      </div>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed mt-2 bg-black/30 p-3 rounded border-l-2 border-green-500">
      {contact.message}
    </p>
  </div>
);

const LoadingState: React.FC = () => (
  <div className="text-center text-gray-400 py-12">
    <FaSpinner className="animate-spin text-3xl mb-4 mx-auto" />
    <p className="text-lg">Carregando contatos...</p>
    <p className="text-sm mt-1">Aguarde um momento</p>
  </div>
);

interface ErrorStateProps {
  onRetry: () => void;
  error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ onRetry, error }) => (
  <div className="text-center text-red-400 py-12">
    <FaExclamationTriangle className="text-3xl mb-4 mx-auto" />
    <p className="text-lg mb-2">Erro ao carregar contatos</p>
    <p className="text-sm text-gray-400 mb-4">{error}</p>
    <button 
      onClick={onRetry}
      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
    >
      Tentar novamente
    </button>
  </div>
);

const EmptyState: React.FC = () => (
  <div className="text-center text-gray-400 py-12">
    <FaInbox className="text-3xl mb-4 mx-auto" />
    <p className="text-lg">Nenhum contato encontrado</p>
    <p className="text-sm mt-1">Os contatos aparecerão aqui quando enviados</p>
  </div>
);

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const { contacts, loading, error, loadContacts } = useContacts();

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const renderContent = (): ReactElement => {
    if (loading) return <LoadingState />;
    if (error) return <ErrorState onRetry={loadContacts} error={error} />;
    if (contacts.length === 0) return <EmptyState />;

    return (
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} index={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg">
              <FaUserShield className="text-xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-cyan-400">Painel Administrativo</h2>
              <p className="text-gray-400 text-sm">Gestão de contatos recebidos</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors p-2 hover:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            aria-label="Fechar painel"
          >
            <FaTimes />
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total de Contatos</p>
                <p className="text-2xl font-bold text-white">{contacts.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded">
                <FaClock />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Último Contato</p>
                <p className="text-sm font-medium text-white">
                  {contacts.length > 0 ? contacts[0]?.timestamp || 'N/A' : 'Nenhum'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={loadContacts}
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 p-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                aria-label="Atualizar contatos"
              >
                <FaSyncAlt className={loading ? 'animate-spin' : ''} />
              </button>
              <div>
                <p className="text-gray-400 text-sm">Atualizar Dados</p>
                <p className="text-sm font-medium text-white">Clique para recarregar</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="bg-black/80 border border-white/10 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Contatos Recebidos</h3>
            <span className="text-sm text-gray-400">
              {contacts.length} {contacts.length === 1 ? 'contato' : 'contatos'}
            </span>
          </div>
          
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;