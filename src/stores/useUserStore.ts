import { create } from "zustand";

export type Role = "headquarters" | "dealership" | "admin";

interface UserState {
  role: Role;
  name: string;
  selectedRole: Role;
  setUser: (user: Partial<UserState>) => void;
  setSelectedRole: (role: Role) => void;
}

export const roleNames: Record<Role, string> = {
  headquarters: "본사",
  dealership: "대리점",
  admin: "관리자",
};

//@TODO 나중에 로그인 연결하면서 수정해야함! 대리점이 앞에 OO 대리점 이런식으로 수정해야함!
export const useUserStore = create<UserState>((set) => ({
  role: "admin",
  name: "안연아",
  selectedRole: "admin",
  setUser: (user) => set((state) => ({ ...state, ...user })),
  setSelectedRole: (role) => set({ selectedRole: role }),
}));
