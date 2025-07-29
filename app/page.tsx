"use client"

import { useState } from "react"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './carousel-styles.css'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const latestReports = [
    {
      year: "2023",
      title: "Art as Civic Action",
      description: "Our comprehensive look at community engagement through artistic expression",
      href: "/annual-reports/2023",
    },
    {
      year: "2024",
      title: "Community is Collaboration",
      description: "Highlighting partnerships and collective healing initiatives",
      href: "/annual-reports/2024",
    },
    {
      year: "2025",
      title: "Where Do We Go From Here?",
      description: "Looking forward to the future of civic engagement",
      href: "/annual-reports/2025",
    },
  ]

  const menuItems = [
    { title: "Our Work", href: "#work" },
    { title: "About Us", href: "#about" },
    { title: "Our Shop", href: "#shop" },
    { title: "Support", href: "#support" },
    { title: "Annual Reports", href: "/annual-reports" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-100">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="#work" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium">
                Our Work
              </Link>
              <Link href="#about" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium">
                About Us
              </Link>
            </div>

            {/* Logo */}
            <div className="flex items-center">
                    <img src="/Logo.svg" alt="FOR FREEDOMS" />
               
            </div>

            {/* Desktop Navigation Right */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="#shop" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium">
                Our Shop
              </Link>
              <Link href="#support" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium">
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

        {/* Search Bar */}
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 py-3 bg-gray-50 border-0 rounded-full focus:ring-2 focus:ring-[#E91E63] focus:bg-white transition-all"
            />
          </div>
        </div>
      </header>

      {/* Latest Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest</h2>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="latest-carousel"
          >
            {latestReports.map((report) => (
              <SwiperSlide key={report.year}>
                <Link href={report.href}>
                  <div className="bg-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer group">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-700 mb-2 group-hover:text-[#E91E63] transition-colors">
                        {report.year}
                      </div>
                      <div className="text-sm text-gray-600 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        {report.title}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Collaborations</h2>

        <div className="bg-gray-200 rounded-2xl aspect-[16/9] flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer group">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700 mb-4 group-hover:text-[#E91E63] transition-colors">
              Artist Partnerships & Community Projects
            </div>
            <div className="text-gray-600 max-w-md mx-auto opacity-0 group-hover:opacity-100 transition-opacity">
              Explore our collaborative works with artists, communities, and organizations working toward civic
              engagement and social change.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
            <img src="/Logo.svg" alt="FOR FREEDOMS" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-4">FOR FREEDOMS</div>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Energizing the artist in everyone through civic engagement, community care, and collective healing.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <Link href="#work" className="hover:text-[#E91E63] transition-colors">
                Our Work
              </Link>
              <Link href="#about" className="hover:text-[#E91E63] transition-colors">
                About Us
              </Link>
              <Link href="/annual-reports" className="hover:text-[#E91E63] transition-colors">
                Annual Reports
              </Link>
              <Link href="#shop" className="hover:text-[#E91E63] transition-colors">
                Our Shop
              </Link>
              <Link href="#support" className="hover:text-[#E91E63] transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
