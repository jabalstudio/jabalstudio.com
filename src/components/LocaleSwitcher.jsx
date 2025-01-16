"use client";
  
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../i18n-config";

export function LocaleSwitcher() {
    
  
    const pathname = usePathname();
    const redirectedPathname = (locale) => {
      if (!pathname) return "/";
      const segments = pathname.split("/");
      segments[1] = locale;
      return segments.join("/");
    };
  
    return (
      <div>
        <p>Locale switcher:</p>
        <ul>
          {i18n.locales.map((locale) => {
            return (
              <li key={locale}>
                <Link href={redirectedPathname(locale)}>{locale}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }