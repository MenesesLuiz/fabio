"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Instagram, Star, CheckCircle, Award, Users, Clock, Shield } from "lucide-react"
import { SmartScrollAnimation, SmartStaggeredAnimation } from "@/components/smart-scroll-animation"
import { HoverAnimation, FloatingAnimation } from "@/components/hover-animations"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

// Componente para renderizar os widgets do Elfsight apenas quando visíveis
function ElfsightIntegration() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "100px" } // Carrega quando estiver a 100px de distância
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (shouldLoad) {
      const script = document.createElement('script')
      script.src = 'https://elfsightcdn.com/platform.js'
      script.defer = true
      document.head.appendChild(script)
      
      // Cleanup opcional: não remover o script imediatamente ao desmontar
      // pois pode quebrar outros widgets se o usuário navegar rápido
    }
  }, [shouldLoad])

  return (
    <div ref={containerRef} className="flex flex-col gap-8 w-full min-h-[400px]">
      {shouldLoad ? (
        <>
          <div className="elfsight-app-e5203ce8-0504-4557-8ca9-11ef4568f042" data-elfsight-app-lazy></div>
          <div className="elfsight-app-a1170993-c665-4d8e-9001-516b5cedb2ee" data-elfsight-app-lazy></div>
        </>
      ) : (
        <div className="w-full h-96 bg-[#FEE1CB]/20 rounded-lg flex items-center justify-center animate-pulse">
          <p className="text-[#371c13] font-light">Carregando avaliações...</p>
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#371c13] text-white">
      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <FloatingAnimation duration={4} intensity={8}>
          <HoverAnimation scale={1.1} y={-5}>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full shadow-lg animate-pulse"
              asChild
            >
              <a href="http://wa.me/5593991668420" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-2" />
                WhatsApp
              </a>
            </Button>
          </HoverAnimation>
        </FloatingAnimation>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagem-fabio.webp"
            alt="Dr. Fábio Dolzany"
            fill
            className="object-cover opacity-35"
            style={{
              filter: 'saturate(1.2) brightness(1.05)',
              objectPosition: 'center 30%'
            }}
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-[#371c13] opacity-30"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <SmartScrollAnimation direction="up" delay={0.4}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
              Dermatologia baseada em <span className="text-[#B27454]">ciência</span>,{" "}
              <span className="text-[#B27454]">cuidado</span> e <span className="text-[#B27454]">responsabilidade</span>
            </h1>
          </SmartScrollAnimation>

          <SmartScrollAnimation direction="fade" delay={0.6}>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Dr. Fábio Dolzany</h2>
              <p className="text-lg md:text-xl text-[#FEE1CB] font-light">
                Dermatologista Clínico, Estético e Capilar • CRM-PA
              </p>
            </div>
          </SmartScrollAnimation>

          <SmartScrollAnimation direction="up" delay={0.8}>
            <HoverAnimation scale={1.05} y={-3}>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-6 rounded-full"
                asChild
              >
                <a href="http://wa.me/5593991668420" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agende sua consulta pelo WhatsApp
                </a>
              </Button>
            </HoverAnimation>
          </SmartScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#FEE1CB]">
        <div className="container mx-auto max-w-6xl">
          <SmartScrollAnimation direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#371c13] mb-6">Quem é o Dr. Fábio</h2>
            </div>
          </SmartScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <SmartScrollAnimation direction="up" delay={0.2}>
              <div className="space-y-6 text-center">
                <blockquote className="text-lg md:text-xl text-[#371c13] italic leading-relaxed">
                  "Ser médico, pra mim, nunca foi sobre fórmulas prontas. Cada paciente tem uma história, uma rotina, um
                  limite. E meu papel é oferecer clareza, segurança e ciência — sem promessas, sem atalhos."
                </blockquote>

                <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl my-8">
                  <video
                    src="/video-site.mp4"
                    className="w-full h-auto"
                    controls
                    playsInline
                  />
                </div>

                <p className="text-[#371c13] leading-relaxed">
                  Sou dermatologista formado pela UEPA, professor da Universidade do Estado do Pará e membro da Sociedade
                  Brasileira de Dermatologia. Trabalho com base em evidências científicas e com escuta ativa. Porque
                  cuidar da pele começa por respeitar quem está dentro dela.
                </p>

                <div className="flex flex-col items-center mt-8">
                  <SmartStaggeredAnimation staggerDelay={0.15} direction="up" delay={0.4}>
                    {[
                      { icon: CheckCircle, text: "Atuação clínica contínua como dermatologista" },
                      { icon: Award, text: "Professor da UEPA" },
                      { icon: Users, text: "Atendimento humanizado com foco em clareza" },
                      { icon: Shield, text: "Protocolos com embasamento científico" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 mb-4">
                        <item.icon className="w-6 h-6 text-[#B27454] flex-shrink-0" />
                        <span className="text-[#371c13]">{item.text}</span>
                      </div>
                    ))}
                  </SmartStaggeredAnimation>
                </div>
              </div>
            </SmartScrollAnimation>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <SmartScrollAnimation direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tratamento com <span className="text-[#B27454]">responsabilidade</span>,
              <span className="text-[#B27454]"> ciência</span> e<span className="text-[#B27454]"> consciência</span>
            </h2>
          </SmartScrollAnimation>

          <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
            <SmartStaggeredAnimation staggerDelay={0.2} direction="fade">
              {[
                "Na minha consulta, você é ouvido. O cuidado começa pela escuta e segue com investigação, explicação e conduta baseada em evidência.",
                "Não indico o que está na moda. Indico o que funciona.",
                "Cada protocolo é pensado respeitando sua realidade, seu histórico e o que é cientificamente eficaz para o seu caso.",
                "Cuidar da pele é um processo. E esse processo precisa de parceria, orientação e verdade."
              ].map((text, index) => (
                <p key={index} className={index === 1 ? "text-[#B27454] font-semibold" : index === 3 ? "text-[#FEE1CB]" : ""}>
                  {text}
                </p>
              ))}
            </SmartStaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-[#FEE1CB]">
        <div className="container mx-auto max-w-6xl">
          <SmartScrollAnimation direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#371c13] mb-6">Áreas de Atuação</h2>
              <p className="text-lg text-[#371c13] max-w-3xl mx-auto">
                Tratamentos que realizo com base em evidência científica e protocolos individuais
              </p>
            </div>
          </SmartScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Acne (adulto e adolescente)",
              "Rosácea e dermatites",
              "Melasma e hiperpigmentações",
              "Calvície e queda capilar",
              "Hidradenite supurativa",
              "Psoríase",
              "Micoses",
              "Diagnóstico e tratamento de câncer de pele",
              "Dermatologia Estética",
              "Consulta investigativa completa",
            ].map((service, index) => (
              <SmartScrollAnimation 
                key={index} 
                direction="up" 
                delay={index * 0.1}
              >
                <Card className="bg-white border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#B27454] flex-shrink-0" />
                      <span className="text-[#371c13] font-medium">{service}</span>
                    </div>
                  </CardContent>
                </Card>
              </SmartScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SmartScrollAnimation direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Avaliações</h2>
            </div>
          </SmartScrollAnimation>

          <SmartScrollAnimation direction="up" delay={0.2}>
            <ElfsightIntegration />
          </SmartScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Award, text: "Professor de dermatologia na UEPA" },
              { icon: Users, text: "Participante regular de congressos científicos" },
              { icon: Clock, text: "Casos acompanhados de perto" },
              { icon: Shield, text: "Conteúdo educativo nas redes sociais" },
            ].map((item, index) => (
              <SmartScrollAnimation 
                key={index} 
                direction="up" 
                delay={index * 0.15}
              >
                <div className="text-center">
                  <item.icon className="w-8 h-8 text-[#B27454] mx-auto mb-3" />
                  <p className="text-sm text-[#FEE1CB]">{item.text}</p>
                </div>
              </SmartScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#FEE1CB]">
        <div className="container mx-auto max-w-4xl text-center">
          <SmartScrollAnimation direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#371c13] mb-6 text-balance">
              Você já tentou de tudo sozinho?
            </h2>
          </SmartScrollAnimation>

          <SmartStaggeredAnimation staggerDelay={0.2} direction="fade">
            {[
              "Talvez o que falta não seja mais um produto, e sim um plano real de tratamento. Se você sente que é hora de cuidar da sua pele com verdade, fale com a gente.",
              "Aqui, cada caso é tratado com responsabilidade, embasamento e respeito."
            ].map((text, index) => (
              <p key={index} className={`text-lg text-[#371c13] mb-8 ${index === 0 ? 'max-w-2xl mx-auto leading-relaxed' : ''}`}>
                {text}
              </p>
            ))}
          </SmartStaggeredAnimation>

          <SmartScrollAnimation direction="up" delay={0.6}>
            <HoverAnimation scale={1.05} y={-3}>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#1DA851] text-white text-lg px-8 py-4 rounded-full"
                asChild
              >
                <a href="http://wa.me/5593991668420" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com a equipe no WhatsApp
                </a>
              </Button>
            </HoverAnimation>
          </SmartScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#B27454]/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SmartScrollAnimation direction="right">
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <Image
                    src="/logo-rodape.webp"
                    alt="Dr. Fábio Dolzany - Logo"
                    width={500}
                    height={200}
                    className="h-40 w-auto"
                  />
                </div>
                <p className="text-[#FEE1CB] italic mb-6">"Dermatologia com ciência, verdade e humanidade."</p>

                <div className="flex justify-center md:justify-start items-center space-x-6">
                  <a
                    href="https://instagram.com/fabiodolzany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#B27454] hover:text-[#FEE1CB] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@fabiodolzany</span>
                  </a>
                </div>
              </div>
            </SmartScrollAnimation>

            <SmartScrollAnimation direction="left" delay={0.2}>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full h-[300px] rounded-lg overflow-hidden border border-[#B27454]/30 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.250351375716!2d-54.718152499999995!3d-2.4232820999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9288f9004b299a17%3A0xdabf974dde1522fb!2sDr.%20F%C3%A1bio%20Dolzany%20%7C%20Dermatologista%20em%20Santar%C3%A9m!5e0!3m2!1sen!2sbr!4v1767754739350!5m2!1sen!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-[#FEE1CB] text-sm text-center">
                  Tv. Moraes Sarmento, 480 - Centro, Santarém - PA, 68005-360, Brasil
                </p>
              </div>
            </SmartScrollAnimation>
          </div>

          <SmartScrollAnimation direction="up" delay={0.4}>
            <div className="mt-8 pt-8 border-t border-[#B27454]/20">
              <p className="text-sm text-[#FEE1CB]">© 2024 Dr. Fábio Dolzany. Todos os direitos reservados.</p>
            </div>
          </SmartScrollAnimation>
        </div>
      </footer>
    </div>
  )
}
