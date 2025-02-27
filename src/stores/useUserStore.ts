import { create } from "zustand";

type Role = "requester" | "approver" | "admin";

interface UserState {
  role: Role;
  name: string;
  profileImage: string;
  setUser: (user: Partial<UserState>) => void;
}

export const roleNames: Record<Role, string> = {
  requester: "결재요청자",
  approver: "결재자",
  admin: "관리자",
};

//@TODO 나중에 로그인 연결하면서 수정해야함!
export const useUserStore = create<UserState>((set) => ({
  role: "admin",
  name: "안연아",
  profileImage: "https://github.com/shadcn.png",
  setUser: (user) => set((state) => ({ ...state, ...user })),
}));
