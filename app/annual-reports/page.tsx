"use client"

import { useState } from "react"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export default function AnnualReportsIndexPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const reports = [
    {
      year: "2023",
      title: "Art as Civic Action",
      description: "Our comprehensive look at community engagement through artistic expression",
      color: "#E91E63",
      href: "/annual-reports/2023",
    },
    {
      year: "2024",
      title: "Community is Collaboration",
      description: "Highlighting partnerships and collective healing initiatives",
      color: "#2196F3",
      href: "/annual-reports/2024",
    },
    {
      year: "2025",
      title: "Where Do We Go From Here?",
      description: "Looking forward to the future of civic engagement",
      color: "#FF5722",
      href: "/annual-reports/2025",
    },
  ]

  const menuItems = [
    { title: "Our Work", href: "/#work" },
    { title: "About Us", href: "/#about" },
    { title: "Our Shop", href: "/#shop" },
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
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/#work" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium">
                Our Work
              </Link>
              <Link href="/#about" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium">
                About Us
              </Link>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/Logo.svg" alt="FOR FREEDOMS" className="h-8" />
            </Link>

            {/* Desktop Navigation Right */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/#shop" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium">
                Our Shop
              </Link>
              <Link href="/#support" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium">
                Support
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gradient-to-br from-[#E91E63] to-[#2196F3] text-white">
                <div className="py-6">
                  <h2 className="text-xl font-bold mb-6">Navigation</h2>
                  <div className="space-y-4">
                    {menuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block py-3 px-4 rounded-lg hover:bg-white/20 transition-colors"
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
        </nav>
      </header>

      {/* Search Bar */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search reports"
            className="pl-10 py-3 bg-gray-50 border-0 rounded-full focus:ring-2 focus:ring-[#E91E63] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Annual Reports Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Annual Reports</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Link key={report.year} href={report.href}>
              <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer group">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-700 mb-2 group-hover:text-[#E91E63] transition-colors">
                    {report.year}
                  </div>
                  <div className="text-sm text-gray-600 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
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