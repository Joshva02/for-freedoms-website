"use client"

import { useState } from "react"
import { ArrowLeft, Download, ZoomIn, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"

export default function AnnualReportsPage() {
  const [selectedReport, setSelectedReport] = useState("2023")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const reports = {
    "2023": {
      title: "2023 Annual Report",
      subtitle: "Art as Civic Action",
      pages: [
        { id: 1, title: "Cover", description: "2023 Annual Report Cover" },
        { id: 2, title: "Letter from Leadership", description: "Message from our founders" },
        { id: 3, title: "Mission & Vision", description: "Our core values and mission" },
        { id: 4, title: "Community Impact", description: "How we've made a difference" },
        { id: 5, title: "Artist Collaborations", description: "Featured artist partnerships" },
        { id: 6, title: "Program Highlights", description: "Key programs and initiatives" },
        { id: 7, title: "Financial Overview", description: "Transparency in our funding" },
        { id: 8, title: "Looking Forward", description: "Our vision for the future" },
      ],
    },
    "2022": {
      title: "2022 Annual Report",
      subtitle: "Community is Collaboration",
      pages: [
        { id: 1, title: "Cover", description: "2022 Annual Report Cover" },
        { id: 2, title: "Year in Review", description: "Highlights from 2022" },
        { id: 3, title: "Civic Healing", description: "Our approach to community wellness" },
        { id: 4, title: "Creative Expression", description: "Celebrating artistic voices" },
        { id: 5, title: "Collective Care", description: "Supporting our communities" },
        { id: 6, title: "Impact Metrics", description: "Measuring our success" },
      ],
    },
    "2021": {
      title: "2021 Annual Report",
      subtitle: "Where Do We Go From Here?",
      pages: [
        { id: 1, title: "Cover", description: "2021 Annual Report Cover" },
        { id: 2, title: "Adapting to Change", description: "Navigating unprecedented times" },
        { id: 3, title: "Digital Transformation", description: "Moving art online" },
        { id: 4, title: "Community Resilience", description: "Supporting each other" },
        { id: 5, title: "Future Planning", description: "Building for tomorrow" },
      ],
    },
  }

  const tableOfContents = [
    { title: "2023 Report", href: "#", onClick: () => setSelectedReport("2023") },
    { title: "2022 Report", href: "#", onClick: () => setSelectedReport("2022") },
    { title: "2021 Report", href: "#", onClick: () => setSelectedReport("2021") },
    { title: "Archive", href: "#archive" },
    { title: "Back to Home", href: "/" },
  ]

  const currentReport = reports[selectedReport as keyof typeof reports]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="text-xl font-bold text-gray-900">Annual Reports</div>
          </div>

          {/* Desktop Report Selector */}
          <div className="hidden md:flex items-center space-x-4">
            {Object.keys(reports).map((year) => (
              <Button
                key={year}
                variant={selectedReport === year ? "default" : "outline"}
                onClick={() => setSelectedReport(year)}
                className={selectedReport === year ? "bg-[#E91E63] hover:bg-[#C2185B]" : ""}
              >
                {year}
              </Button>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gradient-to-br from-[#E91E63] to-[#2196F3] text-white">
              <div className="py-6">
                <h2 className="text-xl font-bold mb-6">Reports & Navigation</h2>
                <ScrollArea className="h-[calc(100vh-120px)]">
                  <div className="space-y-4">
                    {tableOfContents.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (item.onClick) item.onClick()
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-left py-3 px-4 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-20 pb-8 bg-gradient-to-br from-[#E91E63] to-[#2196F3] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{currentReport.title}</h1>
          <p className="text-xl opacity-90 mb-6">{currentReport.subtitle}</p>
          <Button className="bg-white text-[#E91E63] hover:bg-gray-100">
            <Download className="mr-2 h-4 w-4" />
            Download Full Report
          </Button>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 py-8">
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-8">
            {currentReport.pages.map((page, index) => (
              <div key={page.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Page {page.id}: {page.title}
                      </h3>
                      <p className="text-sm text-gray-600">{page.description}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <ZoomIn className="h-4 w-4 mr-2" />
                          View Full
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh]">
                        <div className="p-4">
                          <h4 className="text-xl font-bold mb-4">{page.title}</h4>
                          <div className="relative aspect-[8.5/11] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                            <Image
                              src={`/placeholder.svg?height=800&width=600&text=${encodeURIComponent(`${currentReport.title} - ${page.title}`)}`}
                              alt={`${page.title} - ${page.description}`}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div className="relative aspect-[8.5/11] bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={`/placeholder.svg?height=600&width=450&text=${encodeURIComponent(`${currentReport.title} - ${page.title}`)}`}
                    alt={`${page.title} - ${page.description}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">Page {page.id}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xl font-bold mb-4">
            FOR
            <span className="inline-block w-6 h-0.5 bg-white mx-2 align-middle"></span>
            FREEDOMS
          </div>
          <p className="text-gray-400">Transparency through art and community engagement</p>
        </div>
      </footer>
    </div>
  )
}
