'use client';

import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function SentinelPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Vayuputra
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition">
              Products
            </Link>
            <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
              Contact
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-900 bg-black/98 px-6 py-4 space-y-4">
            <Link href="/" className="block text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link href="#" className="block text-gray-300 hover:text-white transition">
              Products
            </Link>
            <button className="w-full px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto mt-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-balance">Sentinel</h1>
            <p className="text-2xl text-gray-300 mb-2">Real-Time Threat Intelligence Platform</p>
            <span className="inline-block px-4 py-2 border border-gray-700 text-gray-300 text-sm rounded">
              Defense Intelligence
            </span>
          </div>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Advanced intelligence processing and threat detection system designed for modern defense operations. Sentinel integrates multi-source data streams to deliver actionable intelligence in real time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-900">
            <div>
              <p className="text-gray-400 text-sm mb-2">Processing Speed</p>
              <p className="text-3xl font-bold">{'<'}100ms</p>
              <p className="text-gray-500 text-sm mt-1">End-to-end latency</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Data Sources</p>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-500 text-sm mt-1">Integrated feeds</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Accuracy</p>
              <p className="text-3xl font-bold">99.2%</p>
              <p className="text-gray-500 text-sm mt-1">Detection confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-6 md:px-12 py-20 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Core Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Real-Time Processing */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Real-Time Processing</h3>
              <p className="text-gray-400 leading-relaxed">
                Processes thousands of data points per second with minimal latency. Designed for split-second decision-making in high-tempo operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">Sub-100ms processing pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">Distributed architecture for scalability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">99.99% system uptime</span>
                </li>
              </ul>
            </div>

            {/* Multi-Source Integration */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Multi-Source Integration</h3>
              <p className="text-gray-400 leading-relaxed">
                Seamlessly integrates signals from sensors, satellites, communications, and third-party systems into unified intelligence picture.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">50+ data source connectors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">Automatic sensor fusion and correlation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">Secure federation with partner systems</span>
                </li>
              </ul>
            </div>

            {/* Advanced Analytics */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Advanced Analytics</h3>
              <p className="text-gray-400 leading-relaxed">
                AI-driven analysis identifies patterns, predicts threats, and surfaces critical insights from massive datasets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">Machine learning threat detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">Anomaly and pattern recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">Predictive intelligence modeling</span>
                </li>
              </ul>
            </div>

            {/* Command & Control Integration */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Command & Control Integration</h3>
              <p className="text-gray-400 leading-relaxed">
                Delivers intelligence directly into command workflows with customizable dashboards, alerts, and tactical recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">Custom operator dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">Real-time alert and notification system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span className="text-gray-300">NATO and national standard compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sentinel Variants */}
      <section className="px-6 md:px-12 py-20 border-t border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Sentinel Variants</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sentinel Core */}
            <div className="bg-black border border-gray-800 p-8 rounded-lg hover:border-gray-700 transition">
              <h3 className="text-2xl font-bold mb-4">Sentinel Core</h3>
              <p className="text-gray-400 mb-6">Enterprise-grade threat intelligence platform for command centers and operations hubs.</p>
              <ul className="space-y-2 text-gray-300 text-sm mb-8">
                <li>• On-premises deployment</li>
                <li>• Unlimited data ingestion</li>
                <li>• Custom analytics pipelines</li>
                <li>• Full federation support</li>
              </ul>
              <button className="w-full border border-gray-700 text-white py-2 hover:bg-gray-900 transition">
                Learn More
              </button>
            </div>

            {/* Sentinel Edge */}
            <div className="bg-black border border-gray-800 p-8 rounded-lg hover:border-gray-700 transition">
              <h3 className="text-2xl font-bold mb-4">Sentinel Edge</h3>
              <p className="text-gray-400 mb-6">Lightweight deployment for forward-operating units and disconnected environments.</p>
              <ul className="space-y-2 text-gray-300 text-sm mb-8">
                <li>• Minimal resource footprint</li>
                <li>• Offline-first architecture</li>
                <li>• Mobile-optimized interface</li>
                <li>• Network-agnostic operation</li>
              </ul>
              <button className="w-full border border-gray-700 text-white py-2 hover:bg-gray-900 transition">
                Learn More
              </button>
            </div>

            {/* Sentinel Cloud */}
            <div className="bg-black border border-gray-800 p-8 rounded-lg hover:border-gray-700 transition">
              <h3 className="text-2xl font-bold mb-4">Sentinel Cloud</h3>
              <p className="text-gray-400 mb-6">Managed SaaS platform for rapid deployment and elastic scaling.</p>
              <ul className="space-y-2 text-gray-300 text-sm mb-8">
                <li>• Zero-infrastructure deployment</li>
                <li>• Auto-scaling capabilities</li>
                <li>• Continuous updates</li>
                <li>• Multi-tenant security</li>
              </ul>
              <button className="w-full border border-gray-700 text-white py-2 hover:bg-gray-900 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="px-6 md:px-12 py-20 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Technical Specifications</h2>
          
          <div className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="px-8 py-6 font-bold text-gray-300">Processing Throughput</td>
                  <td className="px-8 py-6 text-gray-400">10K+ events per second</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-8 py-6 font-bold text-gray-300">Latency (P99)</td>
                  <td className="px-8 py-6 text-gray-400">{'<'}150ms end-to-end</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-8 py-6 font-bold text-gray-300">Data Retention</td>
                  <td className="px-8 py-6 text-gray-400">Configurable 1-10 years</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-8 py-6 font-bold text-gray-300">Supported Standards</td>
                  <td className="px-8 py-6 text-gray-400">NATO APP-6, NIST, FedRAMP</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 font-bold text-gray-300">Deployment Options</td>
                  <td className="px-8 py-6 text-gray-400">On-Prem, Cloud, Hybrid, Edge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy Sentinel?</h2>
          <p className="text-gray-400 text-xl mb-8">
            Contact our defense solutions team for a personalized demo and deployment consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-bold hover:bg-gray-100 transition">
              Request Demo
            </button>
            <button className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition">
              Technical Specs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 px-6 md:px-12 py-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold mb-4">Vayuputra</p>
              <p className="text-gray-500 text-sm">Advanced Defense Technology</p>
            </div>
            <div>
              <p className="font-bold mb-4">Products</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/products/sentinel" className="hover:text-white transition">Sentinel</Link></li>
                <li><Link href="/products/nexus" className="hover:text-white transition">Nexus</Link></li>
                <li><Link href="/products/forge" className="hover:text-white transition">Forge</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Company</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition">About</Link></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Legal</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 flex justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; 2025 Vayuputra Dynamics. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition text-sm">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-white transition text-sm">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
