import { useModal } from '@/context/modal-context';
import { forwardRef } from 'react';

export const Modal = forwardRef<HTMLDivElement>((_, ref) => {
  const { openModal, modalData } = useModal();

  if (!openModal) return null;

  return (
    <div className="absolute top-0 h-screen w-screen z-10 flex items-center justify-center bg-modal-overlay cursor-none">
      <div
        ref={ref}
        className="w-5/6 h-fit md:w2/3 max-w-3xl max-h-[calc(100%-150px)] bg-bg-primary rounded-2xl py-6 px-12 overflow-auto flex flex-col gap-12"
      >
        <div className="flex flex-col items-center justify-between gap-6">
          <h4 className="text-fg-primary text-3xl">{modalData?.title}</h4>
          <p className="text-fg-primary text-sm">{modalData?.description}</p>
        </div>
        {modalData?.content}
      </div>
    </div>
  );
});
