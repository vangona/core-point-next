import "@/app/globals.css"
import { GeneralLayout } from '@/components/layout/general-layout'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '코어창업',
  description: '열쇠가 되겠습니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <GeneralLayout>
          {children}
        </GeneralLayout>
      </body>
    </html>
  )
}
