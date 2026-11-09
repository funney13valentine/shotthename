import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — ShotTheName',
  description: 'ShotTheName Terms of Service: , license terms, usage rights, and support policies for macOS.',
};

export default function TermsPage() {
  return (
    <div class="bg-[#F5F0E8] text-[#1C2B27] antialiased min-h-screen flex flex-col justify-between font-sans selection:bg-[#1C2B27] selection:text-[#F5F0E8]">
      
      {/* FLOATING PILL NAVBAR */}
      <header class="fixed top-5 inset-x-0 z-50 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto nav-pill rounded-full px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 bg-[#F5F0E8]/80 backdrop-blur-md border border-[#1C2B27]/10 shadow-sm">
          
          {/* Logo Left */}
          <Link href="/" class="flex items-center gap-2.5 group">
            <img src="/assets/final_logo.png" alt="ShotTheName Logo" class="w-8 h-8 object-contain group-hover:scale-105 transition-transform" />
            <span class="font-sans font-bold text-base text-[#1C2B27] tracking-tight">ShotTheName</span>
          </Link>

          {/* Pill Nav Center Links */}
          <nav class="hidden md:flex items-center gap-1 bg-[#1C2B27]/5 p-1 rounded-full text-xs font-medium text-[#1C2B27]/70">
            <Link href="/#hero" class="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#1C2B27] transition-all">Overview</Link>
            <Link href="/#how-it-works" class="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#1C2B27] transition-all">How It Works</Link>
            <Link href="/#features" class="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#1C2B27] transition-all">Features</Link>
            <Link href="/#pricing" class="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#1C2B27] transition-all">Pricing</Link>
          </nav>

          {/* CTA Button Right */}
          <div class="flex items-center gap-3">
            <a href="https://funney13valentine.gumroad.com/l/shotthename" target="_blank" rel="noopener noreferrer" class="btn-dark text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 shadow-sm bg-[#1C2B27] text-[#F5F0E8] hover:bg-[#2A3F39] transition-all">
              <span>Download</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main class="relative z-10 pt-28 sm:pt-36 pb-20 flex-grow">
        <div class="max-w-4xl mx-auto px-6 sm:px-8">
          
          {/* Back Link & Header Badge */}
          <div class="flex items-center justify-between mb-8">
            <Link href="/" class="inline-flex items-center gap-2 text-xs font-mono text-[#1C2B27]/60 hover:text-[#1C2B27] transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to main site</span>
            </Link>

            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C2B27]/5 border border-[#1C2B27]/10 text-xs font-mono font-medium text-[#1C2B27]">
              <span class="w-2 h-2 rounded-full bg-[#34D399] animate-pulse"></span>
              <span>TERMS OF SERVICE</span>
            </div>
          </div>

          {/* Page Title */}
          <h1 class="text-4xl sm:text-6xl font-serif text-[#1C2B27] tracking-tight leading-tight mb-4">
            Terms of Service
          </h1>

          <p class="text-lg text-[#1C2B27]/75 font-sans mb-8">
            By purchasing or using ShotTheName, you agree to the following terms and conditions.
          </p>

          <div class="text-xs font-mono text-[#1C2B27]/50 mb-12 pb-6 border-b border-[#1C2B27]/10 flex items-center gap-2">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Last updated: September 2026</span>
          </div>

          {/* Policy Sections */}
          <div class="space-y-8 font-sans">

            {/* 1. License & Pricing */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>1. Software License & Pricing</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed mb-3">
                ShotTheName is available. There are no recurring subscriptions or hidden fees.
              </p>
              <ul class="space-y-2 text-xs sm:text-sm text-[#1C2B27]/75 list-disc list-inside">
                <li>A single purchase grants you a personal license to install and use ShotTheName on up to <strong>3 personal Mac devices</strong> owned by you.</li>
                <li>Free lifetime updates for minor and major point releases are included with your license.</li>
              </ul>
            </section>

            {/* 2. Permitted Use */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>2. Permitted Use</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed">
                You may use ShotTheName for personal or commercial purposes on your authorized Mac computers. You may not reverse engineer, decompile, redistribute, resell, or sublicense the software to third parties.
              </p>
            </section>

            {/* 3. Refund Policy */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>3. Refund Policy</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed">
                We offer a 14-day refund window through our payment processor, Gumroad. If ShotTheName does not meet your expectations or fails to run properly on your Mac, please contact us within 14 days of purchase for a full refund.
              </p>
            </section>

            {/* 4. Disclaimer of Warranties */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>4. Disclaimer of Warranties</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed">
                ShotTheName is provided &quot;as is&quot; without warranty of any kind. While we strive to ensure 100% accuracy in file renaming and text recognition, we are not liable for any data loss, accidental file renaming, or system issues resulting from software usage.
              </p>
            </section>

            {/* 5. Contact */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>5. Contact Support</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed mb-4">
                For support questions or license inquiries, reach out anytime:
              </p>
              <a href="mailto:mx13eet@gmail.com" class="btn-dark text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 shadow-sm bg-[#1C2B27] text-[#F5F0E8]">
                <span>mx13eet@gmail.com</span>
              </a>
            </section>

          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer class="stacked-section bg-[#1C2B27] text-[#F5F0E8] py-16 relative z-10 rounded-t-[2.5rem] sm:rounded-t-[3.5rem]">
        <div class="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo + Copyright */}
          <Link href="/" class="flex items-center gap-2.5">
            <img src="/assets/final_logo.png" alt="Logo" class="w-7 h-7 object-contain invert" />
            <span class="text-sm font-bold text-[#F5F0E8]">ShotTheName</span>
            <span class="text-xs text-[#F5F0E8]/40 font-mono">© 2026</span>
          </Link>

          <div class="text-xs font-mono text-[#F5F0E8]/50">
            Built for macOS ·
          </div>

          {/* Links */}
          <div class="flex items-center gap-6 text-xs text-[#F5F0E8]/70">
            <Link href="/privacy" class="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" class="hover:text-white transition-colors text-white font-semibold">Terms</Link>
            <a href="mailto:mx13eet@gmail.com" class="hover:text-white transition-colors">Support</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
