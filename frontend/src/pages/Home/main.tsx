import { useNavigate } from 'react-router-dom';

/**
 * @page HomePage
 * @summary Welcome page for the TODO List application
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">TODO List</h1>
        <p className="text-xl text-gray-600 mb-8">Sistema de gerenciamento de tarefas</p>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funcionalidades</h2>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Criação e gerenciamento de tarefas</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Categorização e priorização</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Definição de prazos e lembretes</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Visualização em calendário</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Compartilhamento colaborativo</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Sincronização multiplataforma</span>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/tasks')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Começar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
