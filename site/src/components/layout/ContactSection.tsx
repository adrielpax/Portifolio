import { FaEnvelope, FaUserShield } from 'react-icons/fa';
import { ContactSectionProps } from '@/src/types';

const ContactSection: React.FC<ContactSectionProps> = ({ 
  onOpenContact, 
  onOpenAdmin, 
  showAdminButton 
}) => {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
          <FaEnvelope />
          Contato
        </h3>
        
        <div className="space-y-4">
          <p className="text-gray-300 text-sm">
            Interessado em trabalhar comigo? Tem algum projeto em mente? 
            Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade!
          </p>
          
          <button 
            onClick={onOpenContact}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            Entrar em Contato
          </button>
          
          {/* Admin Button (hidden by default) */}
          {showAdminButton && (
            <button 
              onClick={onOpenAdmin}
              className="w-full bg-red-600/80 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition-colors duration-300 flex items-center justify-center gap-2 border border-red-500/30 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            >
              <FaUserShield />
              Painel Admin
            </button>
          )}
          
          {/* Contact Info */}
          <div className="pt-4 border-t border-white/10">
            <div className="space-y-2 text-xs text-white">
              {/* <p className='text-white'>📧 ...@email.com</p>
              <p className='text-white'>📱 (31) 99999-9999</p> */}
              <p className='text-white'>📍 Betim, Minas Gerais</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;