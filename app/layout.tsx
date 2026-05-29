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
            function applyGoFinal() {
              document.querySelectorAll('.go-final').forEach(function (el) {
                var original = el.getAttribute('href');
                if (!original) return;
                // Replace {trackingdomain} placeholder directly
                if (original.indexOf('{trackingdomain}') !== -1) {
                  el.setAttribute('href', original.replace('{trackingdomain}', dom));
                  return;
                }
                // Otherwise swap the hostname of a real URL
                try {
                  var parsed = new URL(original);
                  parsed.hostname = dom;
                  el.setAttribute('href', parsed.toString());
                } catch (e) {}
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
