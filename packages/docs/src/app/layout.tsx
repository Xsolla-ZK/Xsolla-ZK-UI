import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { NextTamaguiProvider } from '../features/provider';
import type { PropsWithChildren } from 'react';

export const metadata = {
  title: {
    default: 'Cross-platform UI Kit by Xsolla ZK',
    template: '%s - Cross-platform UI Kit by Xsolla ZK',
  },
  description: 'Your toolkit for building seamless, game-centric cross-platform interfaces 🚀',
  applicationName: 'Xsolla ZK UI',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Cross-platform UI Kit by Xsolla ZK',
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: {
      default: 'Cross-platform UI Kit by Xsolla ZK',
      template: '%s - Cross-platform UI Kit by Xsolla ZK',
    },
    description: 'Your toolkit for building seamless, game-centric cross-platform interfaces 🚀',
    url: 'https://ui-kit.xsollazk.com',
    siteName: 'Cross-platform UI Kit by Xsolla ZK',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cross-platform UI Kit by Xsolla ZK',
        type: 'image/png',
      },
    ],
  },
  icons: {
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/favicon/favicon.ico',
      },
    ],
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const navbar = (
    <Navbar
      logo={
        <span style={{ fontSize: 40 }}>
          <svg
            width="2.025em"
            height="1em"
            viewBox="0 0 243 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_4396)">
              <path d="M119.901 0H0V120H119.901V0Z" fill="#6939F9" />
              <path
                d="M60.2886 96.35H55.9695V81.5633H60.2886V96.35ZM66.539 96.35H62.2207V81.5633H66.539V96.35ZM89.9065 58.6586C94.4523 58.6586 98.0896 62.2987 98.0896 66.8484C98.2029 71.3981 94.4522 75.0375 89.9065 75.0375C85.3607 75.0375 81.6103 71.3981 81.6102 66.8484C81.6102 62.2987 85.3606 58.6586 89.9065 58.6586ZM41.3652 74.3172H23.1809L32.2726 58.6203L41.3652 74.3172ZM89.9065 62.8672C87.7466 62.8672 85.9293 64.6873 85.9293 66.8484C85.9294 69.0094 87.6332 70.7156 89.9065 70.7156C92.0654 70.7156 93.7703 69.0094 93.7705 66.8484C93.884 64.6873 92.0655 62.8672 89.9065 62.8672ZM30.2275 70.3359H34.3186L32.2726 66.8102L30.2275 70.3359ZM84.347 27.0711L80.1418 31.2797L85.5975 36.7391L78.3238 44.0188L75.2552 40.9477L79.4604 36.7391L74.0047 31.2797L77.0741 28.2086L81.2784 24L84.347 27.0711ZM51.2281 28.6633L46.0004 33.8953L51.2281 39.1273L48.1596 42.1992L42.9318 36.9664L37.7041 42.1992L34.6355 39.1273L39.8633 33.8953L34.6355 28.6633L37.7041 25.5922L42.9318 30.8242L48.1596 25.5922L51.2281 28.6633Z"
                fill="#F6FAFF"
              />
              <path
                d="M159.226 72.4238L148.968 86.0789H159.295V92H140.252V87.5167L151.163 73.2794H140.904V67.4612H159.226V72.4238ZM168.397 76.873L175.946 67.4612H183.357L175.878 76.736L183.666 92H176.701L171.383 81.1511L168.397 84.881V92H162.221V67.4612H168.397V76.873ZM171.288 34.0575C177.327 34.0575 179.969 36.693 180.553 40.6972H174.411C174.136 39.2598 173.072 38.5755 171.219 38.5755C169.298 38.5756 168.612 39.2944 168.612 40.2527C168.612 41.4845 170.293 41.6897 173.244 42.0662C174.994 42.3057 176.813 42.6479 178.322 43.4693C179.798 44.2906 180.793 45.66 180.793 47.9873C180.793 49.322 180.449 50.4859 179.797 51.5468C178.425 53.6 175.749 54.9003 171.597 54.9004C165.627 54.9004 162.436 52.2993 161.784 47.7132H168.235C168.646 49.3217 169.847 50.143 171.906 50.143C173.896 50.143 174.72 49.4929 174.72 48.3977C174.72 47.9529 174.514 47.6105 174.068 47.371C173.244 46.9261 171.734 46.7206 170.088 46.5495C168.372 46.3099 166.554 46.0018 165.078 45.1805C163.568 44.3933 162.607 43.0246 162.607 40.629C162.607 36.7274 165.627 34.0575 171.288 34.0575ZM192.661 34.0922C194.685 34.0923 196.401 34.4683 197.91 35.2553C200.93 36.8297 202.68 39.8417 202.68 44.2908V44.9071C202.68 47.0974 202.268 48.9455 201.445 50.4171C199.729 53.3946 196.71 54.8662 192.627 54.8663C186.142 54.8663 182.607 51.5466 182.607 44.9071V44.2908C182.607 42.032 183.054 40.1496 183.912 38.6437C185.627 35.6321 188.75 34.0922 192.661 34.0922ZM234.045 34.0922C236.241 34.0922 237.991 34.3999 239.295 35.0501C241.971 36.2822 243 38.6097 243 41.6898V54.3529H237.853L237.167 51.0334C236.035 53.292 233.907 54.8662 230.168 54.8663C225.845 54.8663 223.751 52.8129 223.751 49.5274C223.751 47.0976 224.746 45.5914 226.359 44.5989C226.908 44.2909 227.423 43.9826 227.972 43.8115C229.07 43.4008 230.442 43.1275 232.604 42.8195C235.623 42.4088 236.859 42.1006 236.859 40.8001C236.859 39.6365 236.206 38.8837 234.045 38.8837C231.883 38.8837 230.82 39.8417 230.717 41.758H224.369C224.678 37.1379 227.8 34.0923 234.045 34.0922ZM150.855 36.6243L154.903 29.8142H161.869L154.56 41.3817L162.521 54.3529H155.521L150.923 46.6183L146.325 54.3529H139.085L147.08 41.3817L139.909 29.8142H146.806L150.855 36.6243ZM211.658 54.3529H205.345V28H211.658V54.3529ZM221.442 54.3529H215.129V28H221.442V54.3529ZM236.893 45.1805C236.309 45.6254 235.417 45.8654 234.216 46.1049C232.501 46.4129 231.883 46.584 231.231 46.9947C230.682 47.4053 230.408 47.9187 230.408 48.5689C230.408 49.6982 231.197 50.3141 232.706 50.3142C233.53 50.3142 234.251 50.1433 234.902 49.7326C236.138 48.9455 236.893 47.6789 236.893 46.3783V45.1805ZM192.695 39.3623C190.362 39.3623 188.818 40.9369 188.818 44.2908V44.8382C188.818 47.9184 190.362 49.4933 192.661 49.4933C194.96 49.4933 196.47 47.9526 196.47 44.8382V44.2908C196.47 41.0395 195.131 39.3623 192.695 39.3623Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4396">
                <rect width="243" height="120" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      }
    />
  );
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Onest:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <NextTamaguiProvider>
          <Layout
            navbar={navbar}
            sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 2 }}
            footer={<Footer>MIT {new Date().getFullYear()} © Xsolla ZK.</Footer>}
            docsRepositoryBase="https://github.com/Xsolla-ZK/Xsolla-ZK-UI/blob/main/packages/docs"
            pageMap={pageMap}
            nextThemes={{
              forcedTheme: 'dark',
            }}
          >
            {children}
          </Layout>
        </NextTamaguiProvider>
      </body>
    </html>
  );
}
