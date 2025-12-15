const JoestarModal = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold text-center">{character.name}</h3>
            <p className="text-white/70 text-center">{character.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-2xl leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="mt-5 space-y-3 text-white/85">
          <p><span className="font-bold">Parents:</span> {character.parents}</p>
          <p><span className="font-bold">Partner:</span> {character.partner}</p>
          <p><span className="font-bold">Child:</span> {character.child}</p>
          <p><span className="font-bold">Part:</span> {character.part}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default JoestarModal;
