import { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { FeedbackType } from '../data/types';
import { logger } from '../utils/logging';

interface FeedbackPopoverProps {
  questionId: number;
}

export function FeedbackPopover({ questionId }: FeedbackPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<FeedbackType | null>(null);
  const [customMessage, setCustomMessage] = useState('');
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        buttonRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = () => {
    if (!selectedType) return;

    logger.questionFeedback({
      questionId,
      feedbackType: selectedType,
      customMessage: selectedType === FeedbackType.OTHER ? customMessage : undefined,
    });

    // Reset and close
    setSelectedType(null);
    setCustomMessage('');
    setIsOpen(false);
  };

  const feedbackOptions = [
    {
      value: FeedbackType.WRONG_CORRECT_ANSWER,
      label: 'La réponse "correcte" selon l\'app n\'est pas vraiment la bonne réponse',
    },
    {
      value: FeedbackType.TOO_EVIDENT,
      label: 'La réponse correcte était trop évidente',
    },
    {
      value: FeedbackType.APPEARED_IN_EXAM,
      label: 'Cette question est apparue dans l\'examen réel',
    },
    {
      value: FeedbackType.OTHER,
      label: 'Autre',
    },
  ];

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
        title="Donner un avis"
        aria-label="Donner un avis"
      >
        <MessageCircle size={20} />
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Donner un avis
          </h3>

          <div className="space-y-2 mb-4">
            {feedbackOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-start space-x-2 cursor-pointer p-2 rounded hover:bg-gray-50"
              >
                <input
                  type="radio"
                  name="feedback-type"
                  value={option.value}
                  checked={selectedType === option.value}
                  onChange={() => setSelectedType(option.value)}
                  className="mt-1 flex-shrink-0"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>

          {selectedType === FeedbackType.OTHER && (
            <div className="mb-4">
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Décrivez le problème..."
                className="w-full p-2 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
          )}

          <div className="flex justify-end space-x-2">
            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedType(null);
                setCustomMessage('');
              }}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
            >
              Annuler
            </button>
            <button
              onClick={handleSubmit}
              disabled={
                !selectedType ||
                (selectedType === FeedbackType.OTHER && !customMessage.trim())
              }
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                selectedType &&
                (selectedType !== FeedbackType.OTHER || customMessage.trim())
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
