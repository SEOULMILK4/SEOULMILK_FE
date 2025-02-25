import File from "@/assets/icons/file.svg?react";
import Mail from "@/assets/icons/mail.svg?react";
import Clipboard from "@/assets/icons/clipboard.svg?react";
import FileSearch from "@/assets/icons/fileSearch.svg?react";
import Users from "@/assets/icons/users.svg?react";
import ListSearch from "@/assets/icons/listSearch.svg?react";

export const navigationItems = [
  {
    text: "계산서 목록",
    url: "/invoices",
    icon: File,
    roles: ["requester", "approver"],
  },
  {
    text: "홈택스 검증",
    url: "/hometax",
    icon: FileSearch,
    roles: ["requester", "approver"],
  },
  {
    text: "지급결의서 요청함",
    url: "/requests",
    icon: Mail,
    roles: ["requester", "approver"],
  },
  {
    text: "지급결의서 결재 현황",
    url: "/approvals",
    icon: Clipboard,
    roles: ["approver"],
  },
  { text: "사원정보관리", url: "/employees", icon: Users, roles: ["admin"] },
  { text: "통합목록조회", url: "/lists", icon: ListSearch, roles: ["admin"] },
  {
    text: "공동인증서 등록",
    url: "/certificates",
    icon: Users,
    roles: ["admin"],
  },
];
