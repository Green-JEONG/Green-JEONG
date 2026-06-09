"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "소개" },
  { href: "/career", label: "경력사항" },
  { href: "/projects", label: "프로젝트" },
  { href: "/awards", label: "수상실적" },
  { href: "/qualifications", label: "자격사항" },
  { href: "/activities", label: "활동사항" },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-10 px-5 py-5" aria-label="주요 메뉴">
      <ul className="flex items-center gap-1 rounded-full border border-[#e5e5ea] bg-[#f2f2f7] p-1.5">
        {navItems.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href} className="min-w-0 flex-1">
              <Link
                href={href}
                className={`block rounded-full px-2 py-2 text-center text-2xl leading-tight transition-colors ${
                  isActive
                    ? "bg-white font-bold text-black shadow-sm"
                    : "font-normal text-[#8e8e93] hover:text-[#636366]"
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
