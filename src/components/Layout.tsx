import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-4">
          <div className="w-full bg-[#f8f8f5] dark:bg-black" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto pt-6 sm:pt-0">{children}</main>
        <Footer />
      </div>
    </>
  )
}
