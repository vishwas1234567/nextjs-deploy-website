'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">VD</span>
            </div>
            <span className="text-lg font-semibold">Vayuputra</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('platform')} className="text-gray-300 hover:text-white transition text-sm">
              Platform
            </button>
            <button onClick={() => scrollToSection('capabilities')} className="text-gray-300 hover:text-white transition text-sm">
              Capabilities
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition text-sm">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition text-sm">
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2 rounded-md text-sm font-medium border border-white/20 hover:border-white/40 hover:bg-white/5 transition">
              Sign In
            </button>
            <button className="px-6 py-2 rounded-md text-sm font-medium bg-white text-black hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-white/5">
            <div className="px-6 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('platform')} className="text-gray-300 hover:text-white transition text-sm text-left">
                Platform
              </button>
              <button onClick={() => scrollToSection('capabilities')} className="text-gray-300 hover:text-white transition text-sm text-left">
                Capabilities
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition text-sm text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition text-sm text-left">
                Contact
              </button>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                <button className="w-full px-4 py-2 rounded-md text-sm font-medium border border-white/20 hover:border-white/40">
                  Sign In
                </button>
                <button className="w-full px-4 py-2 rounded-md text-sm font-medium bg-white text-black hover:bg-gray-100">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-wider uppercase">Next Generation Defense</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Advancing
            <span className="block text-white/80">Defense Through Technology</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Vayuputra Dynamics provides cutting-edge software solutions that enhance operational capabilities for modern defense organizations worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 group">
              Explore Solutions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-3 rounded-md border border-white/20 hover:border-white/40 hover:bg-white/5 transition font-semibold">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="text-left">
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-sm text-gray-500">Defense Operations</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold mb-2">150+</div>
              <div className="text-sm text-gray-500">Government Partners</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-gray-500">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 px-6 bg-white/2 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Overview</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Our integrated platform delivers real-time intelligence, autonomous coordination, and advanced analytics for defense operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Systems */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition">
              <div className="w-12 h-12 bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Core Systems</h3>
              <p className="text-gray-400 mb-4">
                Unified command, control, and communications infrastructure built for modern defense environments.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><span>✓</span> Real-time threat detection</li>
                <li className="flex gap-2"><span>✓</span> Integrated sensor networks</li>
                <li className="flex gap-2"><span>✓</span> Autonomous response systems</li>
              </ul>
            </div>

            {/* Advanced Analytics */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition">
              <div className="w-12 h-12 bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-400 mb-4">
                AI-powered intelligence processing for actionable insights and strategic decision support.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><span>✓</span> Predictive analysis models</li>
                <li className="flex gap-2"><span>✓</span> Pattern recognition engines</li>
                <li className="flex gap-2"><span>✓</span> Decision support systems</li>
              </ul>
            </div>

            {/* Autonomous Systems */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition">
              <div className="w-12 h-12 bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Systems</h3>
              <p className="text-gray-400 mb-4">
                Coordinated autonomous platforms with human-in-the-loop control and adaptive behaviors.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><span>✓</span> Multi-platform coordination</li>
                <li className="flex gap-2"><span>✓</span> Adaptive mission planning</li>
                <li className="flex gap-2"><span>✓</span> Fail-safe protocols</li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition">
              <div className="w-12 h-12 bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-gray-400 mb-4">
                Military-grade security with full compliance to defense regulations and standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><span>✓</span> End-to-end encryption</li>
                <li className="flex gap-2"><span>✓</span> FIPS 140-2 certified</li>
                <li className="flex gap-2"><span>✓</span> Audit trail management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Our platform provides the essential capabilities for next-generation defense operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Real-Time Processing', desc: 'Sub-millisecond latency for time-critical operations' },
              { title: 'AI Integration', desc: 'Machine learning models trained on defense data' },
              { title: 'Scalable Architecture', desc: 'Handles millions of data points per second' },
              { title: 'Multi-Domain', desc: 'Air, land, sea, cyber, and space capabilities' },
              { title: 'Human-AI Teaming', desc: 'Augmented decision-making with operator control' },
              { title: '24/7 Support', desc: 'Dedicated defense operations support teams' },
            ].map((capability, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition">
                <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
                <p className="text-gray-400 text-sm">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/2 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Built for Modern Threats</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                The modern defense landscape demands technologies that are faster, smarter, and more reliable than ever before. Vayuputra Dynamics was founded on the principle that cutting-edge software is the backbone of modern defense capabilities.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our team brings decades of experience in defense systems, artificial intelligence, and secure software architecture. We work directly with government agencies and defense contractors to understand their most pressing challenges and deliver solutions that make a difference.
              </p>
              <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition">
                Learn more about our mission
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-white/20 mb-2">VAYUPUTRA</div>
                <p className="text-gray-500">Advanced Defense Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join leading defense organizations already leveraging Vayuputra for advanced capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-100 transition">
              Schedule a Demo
            </button>
            <button className="px-8 py-3 rounded-md border border-white/20 hover:border-white/40 hover:bg-white/5 transition font-semibold">
              Request Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/5 bg-white/1 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">VD</span>
                </div>
                <span className="font-semibold">Vayuputra</span>
              </div>
              <p className="text-gray-500 text-sm">Advanced defense technology solutions.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Platform</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">News</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 Vayuputra Dynamics. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
