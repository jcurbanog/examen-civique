import { Info, ExternalLink, AlertTriangle, Code, Shield, FileText } from 'lucide-react';

export function AboutView() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Info className="text-blue-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">À propos</h1>
        </div>
        <p className="text-gray-600 text-lg">
          Application de préparation à l'examen civique pour la naturalisation française
        </p>
      </div>

      {/* Source Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-start space-x-3 mb-4">
          <FileText className="text-blue-600 mt-1" size={24} />
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Source des questions</h2>
            <p className="text-gray-700 mb-3">
              Les questions de cette application proviennent des ressources officielles fournies par les autorités françaises pour la préparation à l'examen civique, mention naturalisation :
            </p>
            <a
              href="https://www.service-public.gouv.fr/particuliers/vosdroits/F39426"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <span>Naturalisation française : comment passer l'examen civique ?</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Important Warning */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="text-amber-600 mt-1 flex-shrink-0" size={24} />
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Avertissement important</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Origine des contenus :</strong> Bien que les énoncés des questions proviennent des ressources officielles, les options de réponse multiples (y compris les réponses marquées comme "correctes") ont été générées par intelligence artificielle (Gemini) et <strong className="text-amber-700">peuvent contenir des erreurs ou ne pas représenter fidèlement l'examen réel</strong>.
              </p>
              <p>
                <strong>Utilisation recommandée :</strong> Cette application doit être utilisée uniquement comme un outil complémentaire de préparation. Elle ne remplace pas l'étude des documents officiels fournis par les autorités françaises.
              </p>
              <p>
                <strong>Public cible :</strong> Cette application est destinée à la préparation de l'<strong>examen civique, mention naturalisation</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-start space-x-3 mb-4">
          <Shield className="text-red-600 mt-1" size={24} />
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Clause de non-responsabilité</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                L'auteur de cette application décline toute responsabilité quant aux préjudices qui pourraient résulter de l'utilisation exclusive de cet outil pour la préparation à l'examen civique.
              </p>
              <p>
                <strong>La préparation à l'examen relève de la responsabilité individuelle de chaque candidat.</strong> L'auteur n'a aucun lien avec les autorités officielles et ne dispose pas d'un accès privilégié aux questions ou réponses de l'examen réel.
              </p>
              <p>
                Cette application est fournie "en l'état", sans garantie d'aucune sorte, expresse ou implicite. En utilisant cette application, vous reconnaissez et acceptez que :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Les informations peuvent contenir des inexactitudes ou des erreurs</li>
                <li>L'application ne garantit pas le succès à l'examen officiel</li>
                <li>Vous devez consulter les sources officielles pour une préparation complète</li>
                <li>L'auteur ne peut être tenu responsable des résultats obtenus à l'examen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Open Source Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-start space-x-3 mb-4">
          <Code className="text-green-600 mt-1" size={24} />
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Licence et code source</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Cette application est <strong>gratuite</strong> et son code source est disponible en ligne sous licence open source.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Code source disponible sur :</p>
                <p className="text-gray-500 italic">[Lien GitHub à ajouter après publication]</p>
              </div>
              <p className="text-sm text-gray-600">
                Les contributions et suggestions d'amélioration sont les bienvenues via le dépôt GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Legal Info */}
      <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Informations légales complémentaires</h2>
        <div className="space-y-3 text-gray-700 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Protection des données</h3>
            <p>
              Cette application ne collecte aucune donnée personnelle. Toutes les informations (historique des tentatives d'examen) sont stockées localement dans votre navigateur via le localStorage et ne sont jamais transmises à des serveurs externes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Propriété intellectuelle</h3>
            <p>
              Les questions proviennent de sources gouvernementales françaises officielles et sont dans le domaine public. Les options de réponse générées et le code de l'application sont fournis sous licence open source.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Utilisation</h3>
            <p>
              Cette application est destinée à un usage personnel et éducatif uniquement. Toute utilisation commerciale est interdite sans autorisation préalable.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Modification et mise à jour</h3>
            <p>
              L'auteur se réserve le droit de modifier, mettre à jour ou interrompre l'application à tout moment sans préavis.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Ressources officielles recommandées</h2>
        <p className="text-gray-700 mb-3">
          Pour une préparation complète, consultez les ressources officielles suivantes :
        </p>
        <ul className="space-y-2">
          <li>
            <a
              href="https://www.service-public.gouv.fr/particuliers/vosdroits/F39426"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Guide officiel de l'examen civique</span>
              <ExternalLink size={14} />
            </a>
          </li>
          <li>
            <a
              href="https://www.immigration.interieur.gouv.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Ministère de l'Intérieur - Immigration</span>
              <ExternalLink size={14} />
            </a>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 mb-4 text-gray-500 text-sm">
        <p>Version 1.0.0 - Janvier 2026</p>
      </div>
    </div>
  );
}

