import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      
        <div className="w-full h-full max-h-[700px]">
          <nav className="bg-emerald-600 w-full px-2 py-2 fixed top-0 grid justify-items-center">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      <Link href="/" className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium">
                        Home
                      </Link>
                      <Link href="/about" className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium">
                        About
                      </Link>
                      <Link href="/services" className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium">
                        Services
                      </Link>
                      <Link href="/contact" className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium">
                        Contact
                      </Link>
                      <Link href="/emergency" className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium">
                        Emergency
                      </Link>
                      <Link href="/achievement" className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium">
                        Achievement
                      </Link>
                      <Link href="/media" className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium">
                        Media
                      </Link>
                      <Link href="/career" className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium">
                        Career
                      </Link>
                      <Link href="/appointment" className="bg-white text-emerald-600 rounded-xl px-3 py-2 text-sm font-medium ml-auto">
                        Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/about" className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                  About
                </Link>
                <Link href="/" className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                  Home
                </Link>
                <Link href="/services" className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                  Services
                </Link>
                <Link href="/contact" className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                  Contact
                </Link>
                <Link href="/emergency" className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                  Emergency
                </Link>
                <Link href="/achievement" className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                  Achievement
                </Link>
                <Link href="/media" className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                  Media
                </Link>
                <Link href="/career" className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                  Career
                </Link>
              </div>
            </div>
          </nav>
          <main>{children}</main>
          

        </div>
      
    </>
  );
}
