import { create } from "zustand";

interface ModalState {
  isUploadOpen: boolean;
  isProcessingOpen: boolean;
  isConvertOpen: boolean;
  isSuccessOpen: boolean;
  isFailOpen: boolean;
  isEditOpen: boolean;
  isSaveCheckOpen: boolean;

  openUpload: () => void;
  closeUpload: () => void;

  openProcessing: () => void;
  closeProcessing: () => void;

  openConvert: () => void;
  closeConvert: () => void;

  openSuccess: () => void;
  closeSuccess: () => void;

  openFail: () => void;
  closeFail: () => void;

  openEdit: () => void;
  closeEdit: () => void;

  openSaveCheck: () => void;
  closeSaveCheck: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isUploadOpen: false,
  isProcessingOpen: false,
  isConvertOpen: false,
  isSuccessOpen: false,
  isFailOpen: false,
  isEditOpen: false,
  isSaveCheckOpen: false,

  openUpload: () => set((state) => ({ ...state, isUploadOpen: true })),
  closeUpload: () => set((state) => ({ ...state, isUploadOpen: false })),

  openProcessing: () => set((state) => ({ ...state, isProcessingOpen: true })),
  closeProcessing: () =>
    set((state) => ({ ...state, isProcessingOpen: false })),

  openConvert: () => set((state) => ({ ...state, isConvertOpen: true })),
  closeConvert: () => set((state) => ({ ...state, isConvertOpen: false })),

  openSuccess: () => set((state) => ({ ...state, isSuccessOpen: true })),
  closeSuccess: () => set((state) => ({ ...state, isSuccessOpen: false })),

  openFail: () => set((state) => ({ ...state, isFailOpen: true })),
  closeFail: () => set((state) => ({ ...state, isFailOpen: false })),

  openEdit: () => set((state) => ({ ...state, isEditOpen: true })),
  closeEdit: () => set((state) => ({ ...state, isEditOpen: false })),

  openSaveCheck: () => set((state) => ({ ...state, isSaveCheckOpen: true })),
  closeSaveCheck: () => set((state) => ({ ...state, isSaveCheckOpen: false })),
}));

export default useModalStore;
