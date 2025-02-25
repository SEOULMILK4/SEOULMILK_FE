import { create } from "zustand";

type Role = "requester" | "approver" | "admin";

interface RoleState {
  role: Role;
  setRole: (role: Role) => void;
}

export const roleNames: Record<Role, string> = {
  requester: "결재요청자",
  approver: "결재자",
  admin: "관리자",
};

//@TODO 나중에 로그인 연결하면서 수정해야함!
export const useRoleStore = create<RoleState>((set) => ({
  role: "admin",
  setRole: (role) => set({ role }),
}));
