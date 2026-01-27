"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { name: "Sobre", id: "sobre" },
    { name: "Tratamentos", id: "tratamentos" },
    { name: "Avaliações", id: "avaliacoes" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-[#371c13]/90 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/logo-nav.webp"
              alt="Logo Dr. Fábio Dolzany"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-[#FEE1CB] hover:text-white transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button 
             className="bg-[#B27454] hover:bg-[#8f5d43] text-white rounded-full px-6"
             asChild
          >
            <a href="http://wa.me/5593991668420" target="_blank" rel="noopener noreferrer">
              Agendar
            </a>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[#FEE1CB]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#371c13] border-t border-[#B27454]/20 p-4 flex flex-col gap-4 md:hidden shadow-xl animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-[#FEE1CB] hover:text-white transition-colors text-lg py-2 border-b border-[#B27454]/10"
              >
                {item.name}
              </a>
            ))}
            <Button 
               className="bg-[#B27454] hover:bg-[#8f5d43] text-white rounded-full w-full mt-2"
               asChild
            >
              <a href="http://wa.me/5593991668420" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
