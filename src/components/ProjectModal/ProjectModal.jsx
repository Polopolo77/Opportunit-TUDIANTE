import { useState, useEffect } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => { onClose(); setIsClosing(false); }, 300);
  };

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = 'auto'; }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-900 border border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20 w-full max-w-lg transform transition-transform duration-300 ${isClosing ? 'animate-out' : 'animate-in'}`}
      >
        <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-t-2xl" />
        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button onClick={handleClose} className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mt-2 -mr-2">
              <FiX size={24} />
            </button>
          </div>

          {/* Badge de section */}
          {project.badge && (
            <span className="inline-block bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm font-semibold w-fit border border-violet-500/30">
              {project.badge}
            </span>
          )}

          <p className="text-zinc-300 text-base leading-relaxed">{project.fullDescription}</p>

          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">{tag}</span>
              ))}
            </div>
          )}

          {/* Résultat chiffré */}
          {project.result && (
            <div className="px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <p className="text-sm font-semibold text-emerald-400">📈 {project.result}</p>
            </div>
          )}

          {project.url && project.url !== '#' && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 font-semibold bg-violet-600 p-3 px-5 rounded-full w-full cursor-pointer border border-transparent hover:bg-violet-700 transition-colors text-white"
            >
              <FiExternalLink />
              <span>Voir le projet</span>
            </a>
          )}
        </div>
      </div>
      <style>{`
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-in { animation: scaleIn 0.3s ease-out forwards; }
        @keyframes scaleOut { from { transform: scale(1); opacity: 1; } to { transform: scale(0.95); opacity: 0; } }
        .animate-out { animation: scaleOut 0.3s ease-in forwards; }
      `}</style>
    </div>
  );
};

export default ProjectModal;
