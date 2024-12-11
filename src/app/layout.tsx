import '../styles/reset.css';
import '../styles/globals.css';
import clsx from 'clsx';
import Script from 'next/script';
import { NotoSans } from './fonts';
import Navigation from '@/components/navigation';
import Footer from "@/components/layout/footer/Footer";
import classNames from 'classnames';


const bgClass = classNames({
  'bg-[#F1DCBE]': true,
  'bg-[#FFFFFF]': false, // 필요에 따라 조건 추가
});

export const metadata = {
  title: {
    template: '%s | GDSC DGU',
    default: 'AIZU FESTIVAL',
  },

  description: '아이즈 축제는 전통적인 가치와 현대적인 즐거움을 함께 제공하는 후쿠시마의 대표적인 축제입니다. 다양한 프로그램과 이벤트로 가득',
  icons: {
    // icon: '/favicon-black.ico',
    icon:'favicon-aizu.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className="flex w-screen justify-center  bg-[#000] tablet:text-[16px] text-[14px] "
    >
      <body
        className={clsx(
          [NotoSans.className],
          //  max-w-[430px] mx-auto : 430px 이상일 때 가운데 정렬
          ['min-h-screen w-full'],
          ['shadow-xl'],
          // ['bg-[#F1DCBE]'],
          ['bg-indigo-50'],
        
          // ['bg-[#FFFFFF]'],
          ['text-white'],
        )}
      >
        <Navigation />
        <div className="pt-[5rem] flex justify-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
