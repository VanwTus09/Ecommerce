import { create } from "zustand";
import type { Tour, User } from "../models";
export type ModalType =
  | "signupform"
  | "signinform"

interface ModalData {
    user : User,
    tour : Tour,

} 
interface ModalStore {
  type: ModalType | null;
  data?: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: undefined,
  onOpen: (type, data ) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));