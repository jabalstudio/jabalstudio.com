"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../i18n-config";
import { Menu } from "@headlessui/react";

const localeEmojiMap = {
  en: '🇬🇧',
  fr: '🇫🇷',
  es: '🇪🇸',
  de: '🇩🇪',
  ar: '🇸🇦',
};

export function LocaleSwitcher({dictionary}) {
  const pathname = usePathname();

  const redirectedPathname = (locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex rounded-full p-0  font-semibold transition ease-in-out text-white hover:text-lg transition ">
        <span className="relative top-px">🌍</span>
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-fit rounded-md z-10 ">
        <div className="py-1">
          {i18n.locales.map((locale) => (
            <Menu.Item key={locale}>
              {({ active }) => (
                <Link
                  href={redirectedPathname(locale)}
                  className={`block text-center py-2 text-sm `}
                >
                  {localeEmojiMap[locale]}
                </Link>
              )}
            </Menu.Item>
          ))}
        </div> 
      </Menu.Items>
    </Menu>
  );
}
