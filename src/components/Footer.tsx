import AlbaAvatar from '../assets/img/AlbaAvatar.jpeg';

export const Footer = () => (
  <div className="flex h-10 w-screen items-center justify-center md:h-16">
    <div className="flex items-center gap-4">
      <img
        className="h-6 rounded-full border-2 border-gray-200 shadow-inner md:h-8"
        src={AlbaAvatar}
        alt="Alba"
      />
      <p className="font-game text-[8px] text-blue-main md:text-[10px]">Alba Cardona 2025</p>
    </div>
  </div>
);
