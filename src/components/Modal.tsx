import { useModal } from '@/context/modal-context';
import { forwardRef } from 'react';

export const Modal = forwardRef<HTMLDivElement>((_, ref) => {
  const { openModal, modalData } = useModal();

  if (!openModal) return null;

  return (
    <div className="absolute top-0 h-screen w-screen z-10 flex items-center justify-center bg-modal-overlay cursor-none">
      <div
        ref={ref}
        className="max-w-[calc(100%-100px)] max-h-[calc(100%-150px)] bg-bg-secondary-hover rounded-2xl p-4 overflow-auto flex flex-col gap-4"
      >
        <div className="flex items-center justify-between gap-6">
          <div>
            <h4 className="text-fg-primary">{modalData?.title}</h4>
            <p>{modalData?.description}</p>
          </div>
        </div>
        {modalData?.content}
      </div>
    </div>
  );
});
