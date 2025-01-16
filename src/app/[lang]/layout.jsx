import { RootLayout } from '@/components/RootLayout'
import { i18n } from "../../../i18n-config";

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Jabal Studio',
    default: 'Jabal Studio - Creative studio proudly based in Morocco 🇲🇦',
  },
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Layout({ children, params }) {

  const parameters = await params;
  return (
    <html  lang={parameters.lang} className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
