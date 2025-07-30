"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Download, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"
import { useParams } from "next/navigation"
import { annualReportImages } from "@/lib/annual-report-images"
import { cn } from "@/lib/utils"

export default function AnnualReportPage() {
  const params = useParams()
  const year = params.year as string
  const [showTOC, setShowTOC] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [imageMode, setImageMode] = useState<'viewport' | 'stacked'>('viewport')

  const reports = {
    "2023": {
      title: "2023 Annual Report",
      subtitle: "Art as Civic Action",
      color: "#E91E63",
      pages: annualReportImages[2023]
    },
    "2024": {
      title: "2024 Congress Impact Report",
      subtitle: "Community is Collaboration",
      color: "#2196F3",
      pages: annualReportImages[2024]
    },
    "2025": {
      title: "2025 Annual Report",
      subtitle: "Where Do We Go From Here?",
      color: "#FF5722",
      pages: annualReportImages[2025]
    },
  }

  const currentReport = reports[year as keyof typeof reports] || reports["2024"]

  // Check if images should be stacked based on viewport and image aspect ratio
  useEffect(() => {
    const checkImageMode = () => {
      // Get the first image to check its natural dimensions
      const img = new Image()
      img.onload = () => {
        const imageAspectRatio = img.naturalWidth / img.naturalHeight
        
        // Calculate what the image width would be if height = viewport height
        const imageWidthAtViewportHeight = window.innerHeight * imageAspectRatio
        
        // If the image would be wider than the viewport when at viewport height, switch to stacked mode
        if (imageWidthAtViewportHeight > window.innerWidth) {
          setImageMode('stacked')
        } else {
          setImageMode('viewport')
        }
      }
      
      if (currentReport.pages.length > 0) {
        img.src = currentReport.pages[0].src
      }
    }

    checkImageMode()
    window.addEventListener('resize', checkImageMode)
    return () => window.removeEventListener('resize', checkImageMode)
  }, [currentReport.pages])

  // Intersection observer for tracking visible page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageNum = parseInt(entry.target.getAttribute('data-page') || '1')
            setCurrentPage(pageNum)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    )

    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide) => observer.observe(slide))

    return () => observer.disconnect()
  }, [imageMode])

  const handleSlideToPage = (pageNumber: number) => {
    const element = document.getElementById(`page-${pageNumber}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setShowTOC(false)
    setCurrentPage(pageNumber)
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Back Button - Fixed Position */}
      <Link href="/" className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
        <Button variant="ghost" className="bg-white/80 backdrop-blur-sm hover:bg-gray-100 px-3 md:px-4">
          <ArrowLeft className="h-4 w-4 md:mr-2 text-black" />
          <span className="hidden md:inline text-black">Back</span>
        </Button>
      </Link>

      {/* Table of Contents Button - Fixed Position */}
      <Button
        variant="ghost"
        onClick={() => setShowTOC(!showTOC)}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-50 bg-white/80 backdrop-blur-sm hover:bg-gray-100 px-3 md:px-4"
      >
        <List className="h-4 w-4 md:mr-2 text-black" />
        <span className="hidden md:inline text-black">Contents</span>
      </Button>

      {/* Table of Contents Sidebar */}
      <Sheet open={showTOC} onOpenChange={setShowTOC}>
        <SheetContent side="right" className="w-80 max-w-[80vw] sm:max-w-[400px] bg-white text-gray-900 rounded-tl-2xl rounded-br-2xl">
          <SheetHeader className="sr-only">
            <SheetTitle>Table of Contents</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-6 py-8 border-b border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900">{currentReport.title}</h2>
              <p className="text-base text-gray-600 mt-2">{currentReport.subtitle}</p>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-2">
                {currentReport.pages.map((page, index) => (
                  <button
                    key={page.id}
                    onClick={() => handleSlideToPage(page.id)}
                    className={cn(
                      "group w-full text-left relative overflow-hidden rounded-lg transition-all duration-300",
                      currentPage === page.id 
                        ? "bg-gray-100" 
                        : "hover:bg-gray-50"
                    )}
                  >
                    <div className="relative z-10 px-4 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className={cn(
                            "text-xs font-medium uppercase tracking-wide",
                            currentPage === page.id ? "text-gray-700" : "text-gray-500"
                          )}>
                            Page {page.id}
                          </div>
                          <div className={cn(
                            "text-sm font-medium mt-0.5",
                            currentPage === page.id ? "text-gray-900" : "text-gray-700"
                          )}>
                            {index === 0 ? "Cover" : 
                             index === 1 ? "Table of Contents" :
                             index === 2 ? "Introduction" :
                             index === 3 ? "Letter from the Directors" :
                             index >= 4 && index <= 7 ? "Mission & Vision" :
                             index >= 8 && index <= 11 ? "Programs & Impact" :
                             index >= 12 && index <= 15 ? "Community Stories" :
                             index >= 16 && index <= 19 ? "Financial Overview" :
                             index >= 20 && index <= 23 ? "Looking Forward" :
                             `Page ${page.id}`}
                          </div>
                        </div>
                        {currentPage === page.id && (
                          <div className="ml-3">
                            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 py-5 border-t border-gray-100 mt-auto">
              <Button 
                variant="default"
                className="w-full !bg-black !text-white hover:!bg-gray-800 rounded-lg py-2.5 text-sm font-medium"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Full Report
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Page Counter */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 text-gray-700 bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base">
        {currentPage} / {currentReport.pages.length}
      </div>

      {/* PDF Viewer */}
      <div className="w-full">
        {imageMode === 'viewport' ? (
          // Viewport height mode with snap scrolling
          <div className="h-screen overflow-y-auto snap-y snap-mandatory">
            {currentReport.pages.map((page) => (
              <div
                key={page.id}
                id={`page-${page.id}`}
                data-page={page.id}
                className="slide h-screen w-full flex items-center justify-center snap-start snap-always"
              >
                <img
                  src={page.src}
                  alt={page.alt}
                  className="h-screen w-auto"
                />
              </div>
            ))}
          </div>
        ) : (
          // Stacked mode - images flow naturally one after another
          <div className="w-full">
            {currentReport.pages.map((page) => (
              <div
                key={page.id}
                id={`page-${page.id}`}
                data-page={page.id}
                className="slide w-full"
              >
                <img
                  src={page.src}
                  alt={page.alt}
                  className="w-full h-auto block"
                  style={{ display: 'block', margin: 0, padding: 0 }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}