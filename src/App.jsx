import React from 'react';
import { Phone, Laptop, Tablet, Watch, Battery, MapPin, Smartphone, Star, Clock, ThumbsUp, PhoneCall, MessageCircle, Menu, Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";

export default function App() {
  const servicios = [
    { 
      nombre: 'iPhone', 
      icono: Phone,
      imagen: '../public/iphone.jpg',
      descripcion: 'Nuestros servicios de reparación de iPhone están disponibles desde el iPhone 7 hasta el último.',
      fallas: [
        'Reparación de Batería', 'Reparación de Pantalla', 'Reparación de Face ID', 'Reparación Cristal Trasero',
        'Reparaciones Electrónicas', 'Aumento de Memoria', 'Reparación Cristal Cámara', 'Reparación Auricular',
        'Mantenimiento', 'Otro Tipo de Fallas'
      ]
    },
    { 
      nombre: 'iMac', 
      icono: Laptop,
      imagen: '../public/imac.jpg',
      descripcion: 'Nuestros servicios de reparación de iMac están disponibles desde el iMac A1418 (2012) hasta los últimos modelos.',
      fallas: [
        'Reparación Electrónica', 'Optimización y Mantenimiento', 'Cambio de Pantalla', 'Otro Tipo de Fallas'
      ]
    },
    { 
      nombre: 'MacBook', 
      icono: Laptop,
      imagen: '../public/macbook.standard',
      descripcion: 'Nuestros servicios de reparación de Macbook van desde la Macbook Pro A1278 (2012) hasta los últimos modelos.',
      fallas: [
        'Reparación Electrónica', 'Reparación Flex Gate', 'Cambio de Teclado', 'Cambio de Batería',
        'Optimización', 'Reemplazo Barra Touch Bar', 'Reemplazo LCD', 'Bisel de pantalla', 'Otro Tipo de Fallas'
      ]
    },
    { 
      nombre: 'iPad', 
      icono: Tablet,
      imagen: '../public/ipad.avif',
      descripcion: 'Nuestros servicios de reparación de iPad van desde el iPad 3 A1416 (2012) hasta el último modelo.',
      fallas: [
        'Reparación Electrónica', 'Reparación de Cristal', 'Cambio de Cristal Táctil', 'Cambio de Display',
        'Reparación de Face ID', 'Alineación de BackCover', 'Cambio de Batería', 'Otro tipo de Fallas'
      ]
    },
    { 
      nombre: 'Watch', 
      icono: Watch,
      imagen: '../public/watch.png',
      descripcion: 'Nuestros servicios de reparación de Apple Watch están disponibles desde la serie 4 hasta la serie Ultra 2 en reparación de pantallas partidas.',
      fallas: ['Reparación de Pantalla']
    },
    { 
      nombre: 'Cargadores', 
      icono: Battery,
      imagen: '../public/magsafe.medium',
      descripcion: 'Nuestros servicios de reparación de cargadores sólo están disponibles para los cargadores Magsafe 1 y Magsafe 2.',
      fallas: ['Reparación de Cargador']
    },
  ];

  const marcas = [
    { nombre: 'Apple', logo: '../public/apple.svg' },
    { nombre: 'Samsung', logo: '/../public/samsung.png' },
    { nombre: 'Huawei', logo: '../public/huawei.png' },
    { nombre: 'Xiaomi', logo: '../public/xiaomi.png' },
    { nombre: 'OnePlus', logo: '../public/oneplus.svg' },
    { nombre: 'Google', logo: '../public/pixel.png' },
  ];

  const caracteristicas = [
    { titulo: 'Calidad Garantizada', icono: Star, descripcion: 'Utilizamos piezas originales y ofrecemos garantía en nuestras reparaciones.' },
    { titulo: 'Servicio Rápido', icono: Clock, descripcion: 'La mayoría de las reparaciones se realizan el mismo día.' },
    { titulo: 'Técnicos Expertos', icono: ThumbsUp, descripcion: 'Nuestro equipo está altamente capacitado y certificado.' },
    { titulo: 'Satisfacción del Cliente', icono: ThumbsUp, descripcion: 'Miles de clientes satisfechos avalan nuestro servicio.' },
  ];

  const testimonios = [
    { nombre: 'María G.', texto: 'Excelente servicio. Repararon mi iPhone en menos de 2 horas.', rating: 5 },
    { nombre: 'Carlos P.', texto: 'Muy profesionales. Salvaron todos mis datos de mi MacBook dañado.', rating: 5 },
    { nombre: 'Ana L.', texto: 'Precios justos y trabajo de calidad. Totalmente recomendado.', rating: 4 },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen relative overflow-hidden">
      {/* Botón Flotante de WhatsApp */}
      <a href="https://wa.me/540123456789" className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 animate-bounce">
        <MessageCircle className="w-6 h-6" />
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-6">
          <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-yellow-500">
              <path d="M8 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              <path d="M12 11h.01" />
              <path d="M12 18h.01" />
            </svg>
            <span>Dr.Mobile</span>
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#sobre-nosotros" className="text-gray-600 hover:text-gray-800 transition-colors">Sobre Nosotros</a>
            <a href="#servicios" className="text-gray-600 hover:text-gray-800 transition-colors">Servicios</a>
            <a href="#testimonios" className="text-gray-600 hover:text-gray-800 transition-colors">Testimonios</a>
            <a href="#contacto" className="text-gray-600 hover:text-gray-800 transition-colors">Contacto</a>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600 transition-colors">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
          <Button className="md:hidden" variant="ghost">
            <Menu className="w-6 h-6" />
          </Button>
        </nav>

        {/* Hero Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">Centro de Reparación de Dispositivos Móviles</h1>
            <h2 className="text-2xl text-yellow-500">Especialistas en Apple y Android</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nuestro centro de reparaciones en Arequipa es uno de los mejores en servicios para dispositivos Apple y Android.
            </p>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600 transition-colors text-lg px-8 py-3">
              Agendar Ahora
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-100 rounded-full transform -rotate-6 scale-110"></div>
            <img src="../public/apple-productos.png" alt="Reparación de dispositivos móviles" className="relative z-10 w-full h-auto transform rotate-6 rounded-lg shadow-2xl transition-transform hover:scale-105 duration-300" />
          </div>
        </main>

        {/* ¿Por qué elegirnos? */}
        <section id="sobre-nosotros" className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caracteristicas.map((caracteristica, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  {caracteristica.icono && <caracteristica.icono className="w-16 h-16 mx-auto mb-4 text-yellow-500" />}
                  <h3 className="text-xl font-semibold mb-2">{caracteristica.titulo}</h3>
                  <p className="text-gray-600">{caracteristica.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <Card key={servicio.nombre} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={servicio.imagen} alt={servicio.nombre} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <servicio.icono className="w-8 h-8 mr-3 text-yellow-500" />
                    <h3 className="text-2xl font-semibold text-gray-800">{servicio.nombre}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                  <Accordion type="single" collapsible className="mb-4">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-yellow-500 hover:text-yellow-600">
                        ¿Tienes una falla?
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          {servicio.fallas.map((falla, index) => (
                            <li key={index}>{falla}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex justify-between mt-4">
                    <Button className="flex-1 mr-2 bg-gray-200 text-gray-800 hover:bg-gray-300">
                      <PhoneCall className="w-4 h-4 mr-2" />
                      Llamar
                    </Button>
                    <Button className="flex-1 ml-2 bg-green-500 text-white hover:bg-green-600">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Marcas (Carrusel) */}
        <section id="marcas" className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Marcas que reparamos</h2>
          <div className="flex justify-center items-center space-x-8">
            {marcas.map((marca, index) => (
              <div key={index} className="text-center">
                <img src={marca.logo} alt={marca.nombre} className="w-24 h-24 object-contain mb-2 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
                <p className="text-gray-600 text-sm">{marca.nombre}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonios */}
        <section  id="testimonios" className="py-16 bg-gray-50">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonio.texto}"</p>
                  <p className="text-gray-800 font-semibold">{testimonio.nombre}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Nuestra Ubicación</h3>
              <p className="text-gray-600 text-lg">Calle Principal 123, Arequipa, Perú</p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3941162438013!2d-71.53797668513684!3d-16.39844088867701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a59ffb8b4c1%3A0x9f7b8a7a8be2e4d7!2sPlaza%20de%20Armas%20de%20Arequipa!5e0!3m2!1ses-419!2spe!4v1635789876543!5m2!1ses-419!2spe" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
              <p className="text-gray-600 text-lg">Teléfono: (054) 123 4567</p>
              <p className="text-gray-600 text-lg">Email: info@drmobile.com</p>
              <h4 className="text-xl font-semibold mt-8 mb-4">Horario de Atención</h4>
              <p className="text-gray-600 text-lg">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-600 text-lg mb-8">Sábados: 10:00 AM - 3:00 PM</p>
              <Button className="w-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors text-lg py-3">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contáctanos por WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr.Mobile</h3>
              <p className="text-gray-400">Tu centro de confianza para reparaciones de dispositivos móviles en Arequipa.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Calle Principal 123, Arequipa</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> (054) 123 4567</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@drmobile.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2023 Dr.Mobile. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}