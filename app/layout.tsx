import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'MaxWinMania',
  description: 'Find the best online casinos in your country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="go-final" strategy="afterInteractive">{`
          (function () {
            function getURLParameter(name) {
              return decodeURIComponent(
                (RegExp(name + '=(.+?)(&|$)').exec(location.search) || [, ''])[1] || ''
              );
            }
            var dom = getURLParameter('dom');
            if (!dom) return;
            var link = 'https://' + dom + '/click/1';
            function applyGoFinal() {
              document.querySelectorAll('.go-final').forEach(function (el) {
                el.setAttribute('href', link);
              });
            }
            applyGoFinal();
            // Re-apply after Next.js client-side navigation
            var observer = new MutationObserver(applyGoFinal);
            observer.observe(document.body, { childList: true, subtree: true });
          })();
        `}</Script>
      </body>
    </html>
  )
}
