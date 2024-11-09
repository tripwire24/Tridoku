import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const CongratulationsModal = ({ score, onNextGame, onClose, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-sm w-full animate-fade-in">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Congratulations! 🎉
          </h2>
          <p className="text-gray-600 mb-4">
            You've completed the puzzle!
          </p>
          <p className="text-lg font-semibold text-purple-500 mb-6">
            Score: {score} points
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={onNextGame}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              Next Game
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200"
            >
              Stay Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;
