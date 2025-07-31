"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import TransitionLink from "@/components/TransitionLink"
import SharedImageTransition from "@/components/SharedImageTransition"
import 'swiper/css'
import './carousel-styles.css'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const allReports = [
    {
      year: "2024",
      title: "Community is Collaboration",
      description: "Highlighting partnerships and collective healing initiatives",
      href: "/annual-reports/2024",
      coverImage: "/annual-report-2024/FFCongressImpactReport2024-1.jpg"
    },
    {
      year: "2023",
      title: "Art as Civic Action",
      description: "Our comprehensive look at community engagement through artistic expression",
      href: "/annual-reports/2023",
      coverImage: "/placeholder.svg?height=600&width=400&text=2023"
    },
    {
      year: "2022",
      title: "Building Communities",
      description: "Previous year initiatives and community building",
      href: "/annual-reports/2022",
      coverImage: "/placeholder.svg?height=600&width=400&text=2022"
    },
    {
      year: "2021",
      title: "Resilience Through Art",
      description: "Navigating challenges through creative expression",
      href: "/annual-reports/2021",
      coverImage: "/placeholder.svg?height=600&width=400&text=2021"
    },
    {
      year: "2020",
      title: "Adapting & Growing",
      description: "Innovation in times of change",
      href: "/annual-reports/2020",
      coverImage: "/placeholder.svg?height=600&width=400&text=2020"
    },
    {
      year: "2019",
      title: "Expanding Horizons",
      description: "Reaching new communities and partnerships",
      href: "/annual-reports/2019",
      coverImage: "/placeholder.svg?height=600&width=400&text=2019"
    },
    {
      year: "2018",
      title: "Foundation Building",
      description: "Establishing core programs and initiatives",
      href: "/annual-reports/2018",
      coverImage: "/placeholder.svg?height=600&width=400&text=2018"
    },
    {
      year: "2017",
      title: "Early Impact",
      description: "First steps in civic engagement through art",
      href: "/annual-reports/2017",
      coverImage: "/placeholder.svg?height=600&width=400&text=2017"
    },
    {
      year: "2016",
      title: "The Beginning",
      description: "For Freedoms launches",
      href: "/annual-reports/2016",
      coverImage: "/placeholder.svg?height=600&width=400&text=2016"
    }
  ]

  const menuItems = [
    { title: "What We Do", href: "#work" },
    { title: "Who We Are", href: "#about" },
    { title: "Shop", href: "#shop" },
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
            <div className="hidden md:grid md:grid-cols-5 items-center w-full max-w-4xl mx-auto">
              <Link href="#work" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium text-center">
                What We Do
              </Link>
              <Link href="#about" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium text-center">
                Who We Are
              </Link>
              
              {/* Logo - Dead Center */}
              <div className="flex items-center justify-center">
                <img src="/Logo.svg" alt="FOR FREEDOMS" />
              </div>
              
              <Link href="#shop" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium text-center">
                Shop
              </Link>
              <Link href="#support" className="text-gray-900 hover:text-[#E91E63] transition-colors font-medium text-center">
                Support
              </Link>
            </div>
            
            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Mobile Logo */}
              <div className="flex-1 flex items-center justify-center">
                <img src="/Logo.svg" alt="FOR FREEDOMS" />
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

      {/* Annual Reports - Contact Sheet Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Annual Reports
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {allReports.map((report, index) => (
            <div key={report.year}>
              <TransitionLink href={report.href}>
                <div className="group cursor-pointer">
                  <SharedImageTransition 
                    layoutId={`report-image-${report.year}`}
                    className="aspect-[2550/1650] bg-gray-100 rounded-lg overflow-hidden mb-2"
                  >
                    <img
                      src={report.coverImage}
                      alt={`${report.year} Annual Report Cover`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </SharedImageTransition>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {report.year}
                    </div>
                    <div className="text-xs text-gray-600">
                      {report.title}
                    </div>
                  </div>
                </div>
              </TransitionLink>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Featured Projects
        </h2>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="featured-projects-carousel"
          >
            {[
              {
                id: 1,
                image: "/images/carousel_1.jpeg"
              },
              {
                id: 2,
                image: "/images/carousel_2.jpeg"
              },
              {
                id: 3,
                image: "/images/carousel_3.jpeg"
              },
              {
                id: 4,
                image: "/images/carousel_4.jpeg"
              },
              {
                id: 5,
                image: "/images/carousel_5.jpeg"
              },
              {
                id: 6,
                image: "/images/carousel_6.jpeg"
              }
            ].map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-gray-200 rounded-2xl aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Featured Project ${project.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
                What We Do
              </Link>
              <Link href="#about" className="hover:text-[#E91E63] transition-colors">
                Who We Are
              </Link>
              <Link href="/annual-reports" className="hover:text-[#E91E63] transition-colors">
                Annual Reports
              </Link>
              <Link href="#shop" className="hover:text-[#E91E63] transition-colors">
                Shop
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
