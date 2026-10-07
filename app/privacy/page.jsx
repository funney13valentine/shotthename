import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — ShotTheName',
  description: 'ShotTheName Privacy Policy: 100% local image processing on your Mac. No image collection, no tracking, no servers.',
};

export default function PrivacyPage() {
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
              <span>Download $11</span>
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
              <span>PRIVACY POLICY</span>
            </div>
          </div>

          {/* Page Title */}
          <h1 class="text-4xl sm:text-6xl font-serif text-[#1C2B27] tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>

          <p class="text-lg text-[#1C2B27]/75 font-sans mb-8">
            ShotTheName is built with total privacy by design. All image processing happens 100% locally on your Mac.
          </p>

          <div class="text-xs font-mono text-[#1C2B27]/50 mb-12 pb-6 border-b border-[#1C2B27]/10 flex items-center gap-2">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Last updated: September 2026</span>
          </div>

          {/* Highlights Banner */}
          <div class="bg-[#1C2B27] text-[#F5F0E8] rounded-3xl p-6 sm:p-8 mb-12 shadow-xl border border-[#1C2B27]">
            <div class="flex items-center gap-3 mb-4 text-[#34D399]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 class="text-lg font-bold font-sans text-white">Our 100% Privacy Guarantee</h2>
            </div>
            <p class="text-sm text-[#F5F0E8]/80 leading-relaxed mb-6">
              We believe your personal files and screenshots are private. ShotTheName processes everything locally using macOS native Vision frameworks and requires no internet connection to rename your files.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#F5F0E8]/10 text-xs font-mono text-[#34D399]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>100% On-Device OCR</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Zero Server Telemetry</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>No Tracking or Cookies</span>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div class="space-y-8 font-sans">

            {/* 1. Company Information */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>1. Company Information</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed">
                ShotTheName is developed and maintained by <strong>Meet (Independent Developer)</strong>. As an independent mac utility creator, my priority is delivering useful tools that treat user privacy with absolute respect.
              </p>
            </section>

            {/* 2. Local Image Processing */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>2. Local On-Device Image Processing</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed mb-3">
                All screenshot analysis, OCR text recognition, and file renaming happen <strong>100% locally on your Mac</strong> using Apple&apos;s Vision framework and Neural Engine.
              </p>
              <ul class="space-y-2 text-xs sm:text-sm text-[#1C2B27]/75 list-disc list-inside">
                <li>We do <strong>not</strong> collect, store, or transmit any of your screenshots or images.</li>
                <li>We do <strong>not</strong> have servers that receive your image data or extracted text.</li>
                <li>Your screenshot contents never leave your physical device.</li>
              </ul>
            </section>

            {/* 3. Purchases & Third-Party Processors */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>3. Purchase Information & Third-Party Processors</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed mb-3">
                When you purchase a license for ShotTheName, payments are handled securely by our payment partner, <strong>Gumroad</strong>.
              </p>
              <ul class="space-y-2 text-xs sm:text-sm text-[#1C2B27]/75 list-disc list-inside">
                <li>We only collect your <strong>name and email address</strong> when you purchase via Gumroad to send your license key and software updates.</li>
                <li>Your payment details (such as credit card numbers or billing addresses) are processed directly by Gumroad and are never accessible to us.</li>
              </ul>
            </section>

            {/* 4. Analytics, Tracking & Cookies */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>4. No Analytics, Tracking, or Cookies</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed">
                We use <strong>no analytics frameworks, no telemetry tracking, and no cookies</strong>. We do not track your usage inside the app or on this website. Your activity remains completely private to you.
              </p>
            </section>

            {/* 5. Contact Us */}
            <section class="bg-[#EFE8DD] rounded-2xl p-6 sm:p-8 border border-[#1C2B27]/10">
              <h3 class="text-xl font-serif text-[#1C2B27] font-bold mb-3 flex items-center gap-2.5">
                <span>5. Contact Us</span>
              </h3>
              <p class="text-sm text-[#1C2B27]/80 leading-relaxed mb-4">
                If you have any questions or feedback regarding this Privacy Policy, please feel free to contact us:
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
            Built for macOS · Privacy First
          </div>

          {/* Links */}
          <div class="flex items-center gap-6 text-xs text-[#F5F0E8]/70">
            <Link href="/privacy" class="hover:text-white transition-colors text-white font-semibold">Privacy</Link>
            <Link href="/terms" class="hover:text-white transition-colors">Terms</Link>
            <a href="mailto:mx13eet@gmail.com" class="hover:text-white transition-colors">Support</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
