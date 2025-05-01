import {headerProps} from '../types/headerProps';

export default function Header({ onRefresh, disabled }: headerProps) {
  return (
    <header className="fixed top-0 w-full shadow p-4 flex justify-between items-center z-50 bg-gray-300">
      <h1 className="text-xl text-black">Карточки</h1>
      <button
        onClick={onRefresh}
        disabled={disabled}
        className={`active:outline-blue-500 px-4 py-2 rounded hover:bg-blue-600 
          ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}
          focus:outline-2 focus:outline-offset-2 focus:outline-blue-500`}
      >
        Обновить
      </button>
    </header>
  );
}
  