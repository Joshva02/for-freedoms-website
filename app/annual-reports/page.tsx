"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export default function AnnualReportsIndexPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const reports = [
    {
      year: "2024",
      title: "Community is Collaboration",
      description: "Highlighting partnerships and collective healing initiatives",
      color: "#2196F3",
      href: "/annual-reports/2024",
      coverImage: "/annual-report-2024/FFCongressImpactReport2024-1.jpg"
    },
    {
      year: "2023",
      title: "Art as Civic Action",
      description: "Our comprehensive look at community engagement through artistic expression",
      color: "#E91E63",
      href: "/annual-reports/2023",
      coverImage: "/placeholder.svg?height=600&width=400&text=2023"
    },
    {
      year: "2022",
      title: "Building Communities",
      description: "Previous year initiatives and community building",
      color: "#FF5722",
      href: "/annual-reports/2022",
      coverImage: "/placeholder.svg?height=600&width=400&text=2022"
    },
  ]

  const menuItems = [
    { title: "What We Do", href: "/#work" },
    { title: "Who We Are", href: "/#about" },
    { title: "Shop", href: "/#shop" },
    { title: "Support", href: "/#support" },
    { title: "Home", href: "/" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-100">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:grid md:grid-cols-5 items-center w-full max-w-4xl mx-auto">
              <Link href="/#work" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium text-center">
                What We Do
              </Link>
              <Link href="/#about" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium text-center">
                Who We Are
              </Link>
              
              {/* Logo - Dead Center */}
              <div className="flex items-center justify-center">
                <Link href="/">
                  <img src="/Logo.svg" alt="FOR FREEDOMS" className="h-8" />
                </Link>
              </div>
              
              <Link href="/#shop" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium text-center">
                Shop
              </Link>
              <Link href="/#support" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium text-center">
                Support
              </Link>
            </div>
            
            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Mobile Logo */}
              <div className="flex-1 flex items-center justify-center">
                <Link href="/">
                  <img src="/Logo.svg" alt="FOR FREEDOMS" className="h-8" />
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white text-black">
                  <div className="py-6">
                    <h2 className="text-xl font-bold mb-6 text-black">Navigation</h2>
                    <div className="space-y-4">
                      {menuItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-3 px-4 text-black hover:bg-gray-100 transition-colors rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>


      {/* Annual Reports Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Annual Reports</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Link key={report.year} href={report.href}>
              <div className="group cursor-pointer">
                <div className="aspect-[2550/1650] bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={report.coverImage}
                    alt={`${report.year} Annual Report Cover`}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {report.year}
                  </div>
                  <div className="text-sm text-gray-600">
                    {report.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/Logo.svg" alt="FOR FREEDOMS" className="h-6 mb-2" />
              <p className="text-sm text-gray-600">© 2024 For Freedoms. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}