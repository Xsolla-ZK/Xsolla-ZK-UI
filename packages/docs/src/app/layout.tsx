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
            width="5.515625em"
            height="1em"
            viewBox="0 0 353 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.0238 31.4774H26.7429C25.8796 27.9319 22.6873 25.2999 18.8806 25.2998C14.4111 25.2999 10.7874 28.928 10.7874 33.4033C10.7874 37.8785 14.4111 41.5066 18.8806 41.5067C22.6837 41.5066 25.8737 38.8798 26.7406 35.3394H28.0238V59.5208C22.5677 59.5201 17.9672 55.8483 16.5478 50.8358C15.2855 46.4322 14.2697 45.482 9.82571 44.6258C4.24079 43.6299 0.000165586 38.739 0 32.8556C5.03209e-05 27.0131 4.18185 22.1501 9.70909 21.1072C14.1187 20.2703 15.2113 19.3702 16.4355 15.257L16.5547 14.8489C17.9818 9.84851 22.5762 6.18826 28.0238 6.1875V31.4774Z"
              fill="#80EAFF"
            />
            <path
              d="M28.0238 31.4774H26.7429C25.8796 27.9319 22.6873 25.2999 18.8806 25.2998C14.4111 25.2999 10.7874 28.928 10.7874 33.4033C10.7874 37.8785 14.4111 41.5066 18.8806 41.5067C22.6837 41.5066 25.8737 38.8798 26.7406 35.3394H28.0238V59.5208C22.5677 59.5201 17.9672 55.8483 16.5478 50.8358C15.2855 46.4322 14.2697 45.482 9.82571 44.6258C4.24079 43.6299 0.000165586 38.739 0 32.8556C5.03209e-05 27.0131 4.18185 22.1501 9.70909 21.1072C14.1187 20.2703 15.2113 19.3702 16.4355 15.257L16.5547 14.8489C17.9818 9.84851 22.5762 6.18826 28.0238 6.1875V31.4774Z"
              fill="#80EAFF"
            />
            <path
              d="M28.0286 6.1875C33.4761 6.18836 38.07 9.84858 39.4971 14.8489L39.6163 15.257C40.8406 19.3703 41.934 20.2701 46.3436 21.1069C51.8709 22.1497 56.0521 27.0131 56.0521 32.8556C56.0519 38.7398 51.8104 43.631 46.2244 44.6261C41.7821 45.4822 40.7661 46.4328 39.504 50.8358C38.0846 55.8481 33.4845 59.52 28.0286 59.5208V35.3394H29.4129C30.271 38.8872 33.4442 41.521 37.2282 41.5211C41.671 41.521 45.2727 37.8908 45.2728 33.4127C45.2727 28.9347 41.671 25.3045 37.2282 25.3044C33.4472 25.3045 30.2759 27.9339 29.415 31.4774H28.0286V6.1875Z"
              fill="#80EAFF"
            />
            <path
              d="M28.0286 6.1875C33.4761 6.18836 38.07 9.84858 39.4971 14.8489L39.6163 15.257C40.8406 19.3703 41.934 20.2701 46.3436 21.1069C51.8709 22.1497 56.0521 27.0131 56.0521 32.8556C56.0519 38.7398 51.8104 43.631 46.2244 44.6261C41.7821 45.4822 40.7661 46.4328 39.504 50.8358C38.0846 55.8481 33.4845 59.52 28.0286 59.5208V35.3394H29.4129C30.271 38.8872 33.4442 41.521 37.2282 41.5211C41.671 41.521 45.2727 37.8908 45.2728 33.4127C45.2727 28.9347 41.671 25.3045 37.2282 25.3044C33.4472 25.3045 30.2759 27.9339 29.415 31.4774H28.0286V6.1875Z"
              fill="#80EAFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M144.758 11.4053C156.58 11.4054 166.16 21.0073 166.16 32.8553C166.16 44.7034 156.58 54.305 144.758 54.305C132.936 54.305 123.356 44.7034 123.355 32.8553C123.356 21.0073 132.936 11.4053 144.758 11.4053ZM144.759 19.6159C137.801 19.6159 132.16 24.9954 132.16 32.8556C132.16 40.7158 137.801 46.0953 144.759 46.0953C151.717 46.0952 157.358 40.8412 157.358 32.8556C157.358 24.8701 151.717 19.616 144.759 19.6159Z"
              fill="#80EAFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M144.758 11.4053C156.58 11.4054 166.16 21.0073 166.16 32.8553C166.16 44.7034 156.58 54.305 144.758 54.305C132.936 54.305 123.356 44.7034 123.355 32.8553C123.356 21.0073 132.936 11.4053 144.758 11.4053ZM144.759 19.6159C137.801 19.6159 132.16 24.9954 132.16 32.8556C132.16 40.7158 137.801 46.0953 144.759 46.0953C151.717 46.0952 157.358 40.8412 157.358 32.8556C157.358 24.8701 151.717 19.616 144.759 19.6159Z"
              fill="#80EAFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M212.509 47.7228L229.818 12.3611H235.936L256 53.3507H209.754L205.608 53.3501L183.876 12.3611H193.566L212.509 47.7228ZM221.942 46.1513H243.594L232.768 23.0813L221.942 46.1513Z"
              fill="#80EAFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M212.509 47.7228L229.818 12.3611H235.936L256 53.3507H209.754L205.608 53.3501L183.876 12.3611H193.566L212.509 47.7228ZM221.942 46.1513H243.594L232.768 23.0813L221.942 46.1513Z"
              fill="#80EAFF"
            />
            <path
              d="M195.419 53.3501H185.504L163.772 12.3611H173.462L195.419 53.3501Z"
              fill="#80EAFF"
            />
            <path
              d="M195.419 53.3501H185.504L163.772 12.3611H173.462L195.419 53.3501Z"
              fill="#80EAFF"
            />
            <path
              d="M80.6342 25.9178L90.2226 12.3536H100.356L85.408 32.4182L101.077 53.3432H90.0048L80.178 39.5165L69.9482 53.3432H59.7062L75.4118 33.0394L60.1497 12.3536H70.9445L80.6342 25.9178Z"
              fill="#80EAFF"
            />
            <path
              d="M80.6342 25.9178L90.2226 12.3536H100.356L85.408 32.4182L101.077 53.3432H90.0048L80.178 39.5165L69.9482 53.3432H59.7062L75.4118 33.0394L60.1497 12.3536H70.9445L80.6342 25.9178Z"
              fill="#80EAFF"
            />
            <path
              d="M109.403 24.299L117.362 34.0201C119.463 37.024 119.949 38.2156 119.949 40.6319C119.949 43.0483 119.163 44.9865 117.568 46.9844L112.506 53.3366H101.696L112.08 41.2118L104.767 32.3743C102.552 29.2967 101.865 27.0761 101.865 25.0517C101.865 23.0274 102.272 20.9392 104.494 18.2432L109.282 12.3536H119.967L109.403 24.299Z"
              fill="#80EAFF"
            />
            <path
              d="M109.403 24.299L117.362 34.0201C119.463 37.024 119.949 38.2156 119.949 40.6319C119.949 43.0483 119.163 44.9865 117.568 46.9844L112.506 53.3366H101.696L112.08 41.2118L104.767 32.3743C102.552 29.2967 101.865 27.0761 101.865 25.0517C101.865 23.0274 102.272 20.9392 104.494 18.2432L109.282 12.3536H119.967L109.403 24.299Z"
              fill="#80EAFF"
            />
            <path d="M40.8473 37.0625H33.6071V29.7649H40.8473V37.0625Z" fill="#80EAFF" />
            <path d="M40.8473 37.0625H33.6071V29.7649H40.8473V37.0625Z" fill="#80EAFF" />
            <path d="M22.5203 37.0505H15.2366V29.7575H22.5203V37.0505Z" fill="#80EAFF" />
            <path d="M22.5203 37.0505H15.2366V29.7575H22.5203V37.0505Z" fill="#80EAFF" />
            <rect width="83" height="64" transform="translate(269.938)" fill="#80EAFF" />
            <path
              d="M287.218 45V40.48L301.778 22H287.658V16.68H309.338V21.16L294.738 39.72H309.098V45H287.218ZM312.825 45V16.68H318.545V28.44H322.545L329.905 16.68H336.465L327.345 30.44L336.465 45H329.745L322.785 33.72H318.545V45H312.825Z"
              fill="white"
            />
            <path
              d="M287.218 45V40.48L301.778 22H287.658V16.68H309.338V21.16L294.738 39.72H309.098V45H287.218ZM312.825 45V16.68H318.545V28.44H322.545L329.905 16.68H336.465L327.345 30.44L336.465 45H329.745L322.785 33.72H318.545V45H312.825Z"
              fill="black"
            />
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
