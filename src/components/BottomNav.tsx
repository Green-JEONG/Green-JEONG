"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "소개" },
  { href: "/career", label: "경력" },
  { href: "/activities", label: "활동" },
  { href: "/projects", label: "프로젝트" },
  { href: "/awards", label: "수상" },
  { href: "/qualifications", label: "자격" },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky bottom-0 z-10 border-t border-gray-200 bg-[#fefef9]/95 backdrop-blur-sm"
      aria-label="주요 메뉴"
    >
      <ul className="flex">
        {navItems.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex items-center justify-center py-3 text-xs font-medium transition-colors ${
                  isActive
                    ? "text-emerald-700"
                    : "text-gray-500 hover:text-gray-800"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
