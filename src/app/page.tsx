"use client";

import React, { useState } from "react";
import {
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
  Download,
  Share2,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
  HelpCircle,
  Smartphone,
  Tv,
  Laptop,
  Refrigerator,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

export default function ClaimReadyPage() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [emailInput, setEmailInput] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const toggleStep = (stepNumber: number) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber],
    }));
  };

  const completedCount = Object.values(checkedSteps).filter(Boolean).length;

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadChecklist = () => {
    const checklistContent = `CLAIM READY
A free checklist for anyone about to file a warranty claim.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS FOR THE PAGE
- 15 steps in the checklist.
- 4 records to keep before anything goes wrong.
- 1 rule: if it is not in writing, it did not happen.

FOOTER NOTE
Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
`;

    const blob = new Blob([checklistContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "claim-ready-checklist.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 4000);
      setEmailInput("");
    }
  };

  const tickerItems = [
    "15 STEPS IN THE CHECKLIST",
    "DECIDED ON RECORDS, IN WRITING",
    "KEEP YOUR INVOICE",
    "ASK FOR THE JOB SHEET",
    "IF NOT IN WRITING, IT DID NOT HAPPEN",
    "CALM, FACTUAL EVIDENCE",
    "FREE GENERAL CONSUMER GUIDE",
  ];

  return (
    <div className="min-h-screen bg-white text-[#363C47] font-sans antialiased selection:bg-[#DCF3EA] selection:text-[#065F43]">
      {/* 1. TICKER STRIP */}
      <aside aria-label="Key announcements" className="bg-[#EEFAF5] text-[#065F43] border-b border-[#B9E6D6] overflow-hidden select-none py-3">
        <div className="animate-ticker flex items-center whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 px-5">
              <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]/50 inline-block" />
            </div>
          ))}
        </div>
      </aside>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] h-[72px] transition-colors">
        <div className="max-w-[1180px] mx-auto h-full px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#087A58] focus-visible:outline-offset-2 rounded-lg">
            <div className="w-9 h-9 rounded-full bg-[#087A58] flex items-center justify-center text-white shadow-card group-hover:bg-[#066748] transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[19px] font-extrabold tracking-[-0.035em] text-[#0D1117] leading-none">
                CLAIM READY
              </span>
              <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#697382] font-medium mt-1">
                WARRANTY GUIDE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#5B6472]">
            <a href="#who-this-is-for" className="hover:text-[#087A58] transition-colors">
              Who This Is For
            </a>
            <a href="#before-fault" className="hover:text-[#087A58] transition-colors">
              Before Fault
            </a>
            <a href="#fault-appears" className="hover:text-[#087A58] transition-colors">
              Fault Appears
            </a>
            <a href="#technician-visit" className="hover:text-[#087A58] transition-colors">
              Technician
            </a>
            <a href="#if-refused" className="hover:text-[#087A58] transition-colors">
              If Refused
            </a>
            <a href="#key-numbers" className="hover:text-[#087A58] transition-colors">
              Key Numbers
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={handleDownloadChecklist}
              className="bg-[#0D1117] hover:bg-[#087A58] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full shadow-card transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Get Checklist</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#363C47] hover:bg-[#F7F8FA] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E7EAEF] px-5 py-4 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-2 text-[15px] font-medium text-[#363C47]">
              <a
                href="#who-this-is-for"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#EEFAF5] hover:text-[#087A58] transition-colors"
              >
                Who This Is For
              </a>
              <a
                href="#before-fault"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#EEFAF5] hover:text-[#087A58] transition-colors"
              >
                Before Anything Goes Wrong (1-4)
              </a>
              <a
                href="#fault-appears"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#EEFAF5] hover:text-[#087A58] transition-colors"
              >
                When The Fault Appears (5-7)
              </a>
              <a
                href="#technician-visit"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#EEFAF5] hover:text-[#087A58] transition-colors"
              >
                When A Technician Visits (8-10)
              </a>
              <a
                href="#if-refused"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#EEFAF5] hover:text-[#087A58] transition-colors"
              >
                If The Claim Is Refused (11-15)
              </a>
              <a
                href="#key-numbers"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#EEFAF5] hover:text-[#087A58] transition-colors"
              >
                Key Numbers
              </a>
              <a
                href="#call-to-action"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#EEFAF5] hover:text-[#087A58] transition-colors"
              >
                Take Action
              </a>
            </nav>
            <div className="pt-2 border-t border-[#E7EAEF]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadChecklist();
                }}
                className="w-full bg-[#087A58] hover:bg-[#066748] text-white text-[15px] font-semibold py-3 rounded-full flex items-center justify-center gap-2 shadow-raised"
              >
                <Download className="w-4 h-4" />
                <span>Download Free Checklist</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 3. HERO SECTION */}
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column (Copy ~55%) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Pill label */}
                <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                  <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                    FREE CONSUMER GUIDE
                  </span>
                </div>

                {/* Display Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                  CLAIM READY
                </h1>

                {/* Lead Paragraph */}
                <p className="text-[18px] sm:text-[20px] text-[#5B6472] leading-[1.72] max-w-[62ch]">
                  A free checklist for anyone about to file a warranty claim.
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#before-fault"
                    className="bg-[#087A58] hover:bg-[#066748] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-raised hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <span>Read The 15 Steps</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={handleDownloadChecklist}
                    className="bg-white hover:bg-[#F7F8FA] text-[#0D1117] border border-[#E7EAEF] text-[15px] font-semibold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4 text-[#5B6472]" />
                    <span>Download Checklist</span>
                  </button>
                </div>

                {/* Micro trust info */}
                <div className="pt-4 flex flex-wrap items-center gap-6 text-[13.5px] text-[#697382]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#087A58]" />
                    <span>15 Actionable Steps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#087A58]" />
                    <span>Works for Any Brand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#087A58]" />
                    <span>Based on Consumer Law</span>
                  </div>
                </div>
              </div>

              {/* Right Column (Document Card Visual ~45%) */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-6 sm:p-8 shadow-card hover:shadow-raised transition-all relative overflow-hidden">
                  {/* Decorative top strip */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#087A58]" />

                  {/* Header of the document card */}
                  <div className="flex items-center justify-between border-b border-[#E7EAEF] pb-4 mb-5">
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] block">
                        CASE FILE #CR-2026
                      </span>
                      <h2 className="text-[17px] font-extrabold text-[#0D1117] mt-0.5">
                        Warranty Record Vault
                      </h2>
                    </div>
                    <div className="bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] px-2.5 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase font-semibold">
                      VERIFIED
                    </div>
                  </div>

                  {/* Document Card Content */}
                  <div className="space-y-3.5">
                    <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[12px] p-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center font-bold text-xs">
                          01
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#0D1117] leading-tight">
                            Purchase Invoice & Bill
                          </p>
                          <span className="font-mono text-[10px] text-[#697382]">
                            PDF + ORIGINAL RECEIPT
                          </span>
                        </div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#087A58]" />
                    </div>

                    <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[12px] p-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center font-bold text-xs">
                          02
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#0D1117] leading-tight">
                            Online Brand Registration
                          </p>
                          <span className="font-mono text-[10px] text-[#697382]">
                            CONFIRMED SERIAL #
                          </span>
                        </div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#087A58]" />
                    </div>

                    <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[12px] p-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center font-bold text-xs">
                          03
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#0D1117] leading-tight">
                            Dated Fault Photos & Video
                          </p>
                          <span className="font-mono text-[10px] text-[#697382]">
                            TIMESTAMP PRESERVED
                          </span>
                        </div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#087A58]" />
                    </div>

                    <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[12px] p-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center font-bold text-xs">
                          04
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#0D1117] leading-tight">
                            Signed Technician Job Sheet
                          </p>
                          <span className="font-mono text-[10px] text-[#697382]">
                            EXACT DIAGNOSTIC LOG
                          </span>
                        </div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#087A58]" />
                    </div>
                  </div>

                  {/* Summary bar */}
                  <div className="mt-5 pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[13.5px]">
                    <span className="text-[#697382]">Checklist completion:</span>
                    <span className="font-mono font-bold text-[#087A58]">
                      {completedCount} / 15 steps tracked
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE IDEA IN ONE LINE (HEADLINE CARD - DESIGN SPEC COMPONENT) */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            <div className="bg-[#0D1117] text-[#34D399] rounded-[26px] p-8 sm:p-12 md:p-16 shadow-raised relative overflow-hidden scanline-pattern">
              {/* Pill label */}
              <div className="inline-flex items-center gap-2 bg-white/10 text-[#34D399] border border-white/20 px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                  THE IDEA IN ONE LINE
                </span>
              </div>

              {/* Heavy sentence in large mono/display type */}
              <blockquote className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#34D399] tracking-tight leading-[1.25] max-w-[800px]">
                “A warranty claim is decided on records. Keep yours, and ask for theirs in writing.”
              </blockquote>

              {/* Sub-context */}
              <div className="mt-6 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-white/70 text-[13.5px]">
                <span>The core principle of consumer protection.</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
                  RULE 01 / CLAIM READY
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO THIS IS FOR */}
        <section id="who-this-is-for" className="py-20 md:py-28 bg-[#F7F8FA] border-y border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Header stack */}
            <div className="max-w-[760px] mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                  AUDIENCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
                WHO THIS IS FOR
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72]">
                Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
                and who wants the claim to be decided on facts, in writing.
              </p>
            </div>

            {/* 4 Device Categories - Hairline Grid inside one rounded card */}
            <div className="bg-[#E7EAEF] p-[1px] rounded-[18px] overflow-hidden shadow-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
              {/* Phone */}
              <div className="bg-white p-7 sm:p-8 flex flex-col justify-between hover:bg-[#FBFCFD] transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center mb-6">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] block mb-1">
                    DEVICE TYPE 01
                  </span>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-2">
                    Phones & Tablets
                  </h3>
                  <p className="text-[14px] text-[#5B6472] leading-relaxed">
                    Dead screens, battery swelling, charging port failures, or update bootloops within the warranty window.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#087A58]">
                  KEEP BILL & IMEI PROOF
                </div>
              </div>

              {/* TV */}
              <div className="bg-white p-7 sm:p-8 flex flex-col justify-between hover:bg-[#FBFCFD] transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center mb-6">
                    <Tv className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] block mb-1">
                    DEVICE TYPE 02
                  </span>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-2">
                    Smart TVs & Panels
                  </h3>
                  <p className="text-[14px] text-[#5B6472] leading-relaxed">
                    Vertical display lines, backlight failure, motherboard power loss, or audio distortion.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#087A58]">
                  KEEP INSTALLATION LOG
                </div>
              </div>

              {/* Laptop */}
              <div className="bg-white p-7 sm:p-8 flex flex-col justify-between hover:bg-[#FBFCFD] transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center mb-6">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] block mb-1">
                    DEVICE TYPE 03
                  </span>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-2">
                    Laptops & Computers
                  </h3>
                  <p className="text-[14px] text-[#5B6472] leading-relaxed">
                    Hinge snaps, unexplained hardware crashes, keyboard dead zones, or SSD read errors.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#087A58]">
                  LOG SUPPORT TICKETS
                </div>
              </div>

              {/* Appliance */}
              <div className="bg-white p-7 sm:p-8 flex flex-col justify-between hover:bg-[#FBFCFD] transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center mb-6">
                    <Refrigerator className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] block mb-1">
                    DEVICE TYPE 04
                  </span>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-2">
                    Home Appliances
                  </h3>
                  <p className="text-[14px] text-[#5B6472] leading-relaxed">
                    Compressor breakdown, washing machine drum motor faults, inverter AC sensor issues.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#087A58]">
                  DEMAND VISIT JOB SHEET
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BEFORE ANYTHING GOES WRONG (Steps 1 to 4) */}
        <section id="before-fault" className="py-20 md:py-28 bg-white">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Header stack */}
            <div className="max-w-[760px] mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                  PHASE 01 — PREPARATION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
                BEFORE ANYTHING GOES WRONG
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72]">
                Four essential habits to protect your warranty rights the moment you bring a new product home.
              </p>
            </div>

            {/* Steps Grid: 2 columns from 640px */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Step 1 */}
              <div
                onClick={() => toggleStep(1)}
                className={`cursor-pointer rounded-[18px] p-7 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 ${
                  checkedSteps[1]
                    ? "bg-[#EEFAF5] border-[#B9E6D6] shadow-raised"
                    : "bg-white border-[#E7EAEF] shadow-card hover:shadow-raised"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                    1
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    checkedSteps[1] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                  }`}>
                    {checkedSteps[1] && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
                <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                  1. Keep the invoice.
                </h3>
                <p className="text-[16px] text-[#363C47] leading-[1.72]">
                  Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
                </p>
              </div>

              {/* Step 2 */}
              <div
                onClick={() => toggleStep(2)}
                className={`cursor-pointer rounded-[18px] p-7 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 ${
                  checkedSteps[2]
                    ? "bg-[#EEFAF5] border-[#B9E6D6] shadow-raised"
                    : "bg-white border-[#E7EAEF] shadow-card hover:shadow-raised"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                    2
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    checkedSteps[2] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                  }`}>
                    {checkedSteps[2] && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
                <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                  2. Register the product.
                </h3>
                <p className="text-[16px] text-[#363C47] leading-[1.72]">
                  Many brands ask you to register on their website or app; some add extra warranty when you do.
                </p>
              </div>

              {/* Step 3 */}
              <div
                onClick={() => toggleStep(3)}
                className={`cursor-pointer rounded-[18px] p-7 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 ${
                  checkedSteps[3]
                    ? "bg-[#EEFAF5] border-[#B9E6D6] shadow-raised"
                    : "bg-white border-[#E7EAEF] shadow-card hover:shadow-raised"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                    3
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    checkedSteps[3] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                  }`}>
                    {checkedSteps[3] && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
                <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                  3. Read the warranty card once.
                </h3>
                <p className="text-[16px] text-[#363C47] leading-[1.72]">
                  Note how long it lasts, what it covers, and what it excludes.
                </p>
              </div>

              {/* Step 4 */}
              <div
                onClick={() => toggleStep(4)}
                className={`cursor-pointer rounded-[18px] p-7 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 ${
                  checkedSteps[4]
                    ? "bg-[#EEFAF5] border-[#B9E6D6] shadow-raised"
                    : "bg-white border-[#E7EAEF] shadow-card hover:shadow-raised"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                    4
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    checkedSteps[4] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                  }`}>
                    {checkedSteps[4] && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
                <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                  4. Record the condition.
                </h3>
                <p className="text-[16px] text-[#363C47] leading-[1.72]">
                  Take a few dated photos of the product once it is installed or unboxed.
                </p>
              </div>
            </div>

            {/* Callout Card (Design System Component) */}
            <div className="bg-[#EEFAF5] border border-[#B9E6D6] rounded-[18px] p-7 sm:p-8 text-[#065F43] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase font-bold text-[#087A58] block">
                  ACTION ADVICE
                </span>
                <p className="text-[16px] font-semibold text-[#065F43]">
                  Keep a dedicated cloud folder named &quot;Warranties &amp; Invoices&quot; with these 4 items ready.
                </p>
              </div>
              <div className="font-mono text-[12px] bg-white text-[#087A58] px-4 py-2 rounded-full border border-[#B9E6D6] font-medium whitespace-nowrap">
                4 PRE-FAULT RECORDS
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHEN THE FAULT APPEARS (Steps 5 to 7) */}
        <section id="fault-appears" className="py-20 md:py-28 bg-[#F7F8FA] border-y border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Header stack */}
            <div className="max-w-[760px] mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                  PHASE 02 — FIRST RESPONSE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
                WHEN THE FAULT APPEARS
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72]">
                What you document during the first 24 hours of failure prevents the brand from claiming user damage.
              </p>
            </div>

            {/* 3 Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Step 5 */}
              <div
                onClick={() => toggleStep(5)}
                className={`cursor-pointer rounded-[18px] p-7 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between ${
                  checkedSteps[5]
                    ? "bg-[#EEFAF5] border-[#B9E6D6] shadow-raised"
                    : "bg-white border-[#E7EAEF] shadow-card hover:shadow-raised"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                      5
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[5] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                    }`}>
                      {checkedSteps[5] && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                    5. Record the fault.
                  </h3>
                  <p className="text-[16px] text-[#363C47] leading-[1.72]">
                    Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#697382]">
                  TIMESTAMPED PHOTO / VIDEO
                </div>
              </div>

              {/* Step 6 */}
              <div
                onClick={() => toggleStep(6)}
                className={`cursor-pointer rounded-[18px] p-7 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between ${
                  checkedSteps[6]
                    ? "bg-[#EEFAF5] border-[#B9E6D6] shadow-raised"
                    : "bg-white border-[#E7EAEF] shadow-card hover:shadow-raised"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                      6
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[6] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                    }`}>
                      {checkedSteps[6] && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                    6. Raise the complaint in writing.
                  </h3>
                  <p className="text-[16px] text-[#363C47] leading-[1.72]">
                    Use email, the brand&apos;s website or its app, not only a phone call, so there is a record.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#697382]">
                  EMAIL OR OFFICIAL APP
                </div>
              </div>

              {/* Step 7 */}
              <div
                onClick={() => toggleStep(7)}
                className={`cursor-pointer rounded-[18px] p-7 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between ${
                  checkedSteps[7]
                    ? "bg-[#EEFAF5] border-[#B9E6D6] shadow-raised"
                    : "bg-white border-[#E7EAEF] shadow-card hover:shadow-raised"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                      7
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[7] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                    }`}>
                      {checkedSteps[7] && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                    7. Note every reference number.
                  </h3>
                  <p className="text-[16px] text-[#363C47] leading-[1.72]">
                    Write down the complaint or ticket number, the date and the name of anyone you speak to.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#697382]">
                  TICKET # + DATE + AGENT NAME
                </div>
              </div>
            </div>

            {/* Document Card: Written Complaint Sample (Design Spec Component) */}
            <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-6 sm:p-8 shadow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7EAEF] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#087A58] font-bold">
                    DOCUMENT EVIDENCE CARD
                  </span>
                  <span className="text-[#697382]">•</span>
                  <span className="font-mono text-[11px] text-[#697382]">
                    TEMPLATE FOR STEP 6 &amp; 7
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#697382]">
                  FORMAT: WRITTEN NOTICE
                </span>
              </div>
              <blockquote className="font-mono text-[13.5px] sm:text-[14px] text-[#363C47] bg-[#F7F8FA] p-5 rounded-[12px] border border-[#E7EAEF] leading-relaxed">
                &ldquo;Product: [Model &amp; Serial Number] purchased on [Invoice Date]. Complaint raised on [Today&apos;s Date] regarding [Clear Fault Description]. Attached: photo and video evidence taken on [Fault Date]. Reference Ticket: [#XXXXXXXX]. Please confirm receipt in writing.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* 8. WHEN A TECHNICIAN VISITS (Steps 8 to 10) */}
        <section id="technician-visit" className="py-20 md:py-28 bg-white">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Header stack */}
            <div className="max-w-[760px] mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                  PHASE 03 — ON-SITE INSPECTION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
                WHEN A TECHNICIAN VISITS
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72]">
                Never let an engineer leave your home without a signed paper copy of what they inspected and diagnosed.
              </p>
            </div>

            {/* 3 Step Cards in an outline grid */}
            <div className="bg-[#E7EAEF] p-[1px] rounded-[18px] overflow-hidden shadow-card grid grid-cols-1 md:grid-cols-3 gap-[1px] mb-10">
              {/* Step 8 */}
              <div
                onClick={() => toggleStep(8)}
                className={`cursor-pointer p-7 sm:p-8 flex flex-col justify-between transition-colors ${
                  checkedSteps[8] ? "bg-[#EEFAF5]" : "bg-white hover:bg-[#FBFCFD]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                      8
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[8] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                    }`}>
                      {checkedSteps[8] && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                    8. Ask for the job sheet.
                  </h3>
                  <p className="text-[16px] text-[#363C47] leading-[1.72]">
                    Ask the technician for a copy of the visit report or job sheet before they leave.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#087A58]">
                  MANDATORY VISIT REPORT
                </div>
              </div>

              {/* Step 9 */}
              <div
                onClick={() => toggleStep(9)}
                className={`cursor-pointer p-7 sm:p-8 flex flex-col justify-between transition-colors ${
                  checkedSteps[9] ? "bg-[#EEFAF5]" : "bg-white hover:bg-[#FBFCFD]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                      9
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[9] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                    }`}>
                      {checkedSteps[9] && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                    9. Ask what was tested.
                  </h3>
                  <p className="text-[16px] text-[#363C47] leading-[1.72]">
                    Ask which test or instrument was used to reach the diagnosis.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#087A58]">
                  VERIFY TEST EQUIPMENT
                </div>
              </div>

              {/* Step 10 */}
              <div
                onClick={() => toggleStep(10)}
                className={`cursor-pointer p-7 sm:p-8 flex flex-col justify-between transition-colors ${
                  checkedSteps[10] ? "bg-[#EEFAF5]" : "bg-white hover:bg-[#FBFCFD]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center font-extrabold text-[16px]">
                      10
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[10] ? "bg-[#087A58] border-[#087A58] text-white" : "border-[#D6DBE3] bg-white"
                    }`}>
                      {checkedSteps[10] && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3">
                    10. Take your own photos.
                  </h3>
                  <p className="text-[16px] text-[#363C47] leading-[1.72]">
                    Photograph the product and anything the technician points to, during the visit.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7EAEF] text-[12px] font-mono text-[#087A58]">
                  RECORD DURING INSPECTION
                </div>
              </div>
            </div>

            {/* Warning Callout Box */}
            <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-6 sm:p-8 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#EEFAF5] text-[#087A58] flex-shrink-0 flex items-center justify-center mt-0.5">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#0D1117] mb-1">
                  Why the Job Sheet is Critical
                </h4>
                <p className="text-[14px] text-[#5B6472] leading-relaxed">
                  Companies often claim oral opinions cannot be substantiated. A physical or digital job sheet signed by the technician establishes uncontested proof of inspection and exact technician findings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. IF THE CLAIM IS REFUSED (DARK SECTION - DESIGN SYSTEM COMPONENT) */}
        <section id="if-refused" className="py-24 md:py-36 bg-[#0D1117] text-white">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Header stack */}
            <div className="max-w-[760px] mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 text-[#34D399] border border-white/20 px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                  PHASE 04 — DISPUTE RESOLUTION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-white tracking-[-0.035em] leading-[1.06] mb-5">
                IF THE CLAIM IS REFUSED
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-white/75 leading-[1.72]">
                Refusal is not the end of the road. Most initial rejections collapse when tested against rigorous written evidence.
              </p>
            </div>

            {/* 5 Step Cards on Dark Section: inner panels in white at 10% opacity */}
            <div className="space-y-4 mb-12">
              {/* Step 11 */}
              <div
                onClick={() => toggleStep(11)}
                className={`cursor-pointer rounded-[18px] p-6 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 ${
                  checkedSteps[11]
                    ? "bg-[#34D399]/15 border-[#34D399]/40"
                    : "bg-white/10 border-white/15 hover:bg-white/[0.14]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 text-[#34D399] border border-white/20 flex items-center justify-center font-extrabold text-[16px] flex-shrink-0">
                      11
                    </div>
                    <div>
                      <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white">
                        11. Ask for the reason in writing.
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-white/75 mt-1 leading-[1.6]">
                        Request a written explanation that names the exact cause and the evidence for it.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#34D399] uppercase tracking-wider hidden md:inline">
                      FORMAL DEMAND
                    </span>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[11] ? "bg-[#34D399] border-[#34D399] text-[#0D1117]" : "border-white/30 bg-transparent"
                    }`}>
                      {checkedSteps[11] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 12 */}
              <div
                onClick={() => toggleStep(12)}
                className={`cursor-pointer rounded-[18px] p-6 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 ${
                  checkedSteps[12]
                    ? "bg-[#34D399]/15 border-[#34D399]/40"
                    : "bg-white/10 border-white/15 hover:bg-white/[0.14]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 text-[#34D399] border border-white/20 flex items-center justify-center font-extrabold text-[16px] flex-shrink-0">
                      12
                    </div>
                    <div>
                      <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white">
                        12. Ask for the technical report.
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-white/75 mt-1 leading-[1.6]">
                        If the refusal rests on an inspection, ask for that inspection report.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#34D399] uppercase tracking-wider hidden md:inline">
                      LAB DIAGNOSTIC
                    </span>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[12] ? "bg-[#34D399] border-[#34D399] text-[#0D1117]" : "border-white/30 bg-transparent"
                    }`}>
                      {checkedSteps[12] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 13 */}
              <div
                onClick={() => toggleStep(13)}
                className={`cursor-pointer rounded-[18px] p-6 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 ${
                  checkedSteps[13]
                    ? "bg-[#34D399]/15 border-[#34D399]/40"
                    : "bg-white/10 border-white/15 hover:bg-white/[0.14]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 text-[#34D399] border border-white/20 flex items-center justify-center font-extrabold text-[16px] flex-shrink-0">
                      13
                    </div>
                    <div>
                      <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white">
                        13. Escalate inside the company.
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-white/75 mt-1 leading-[1.6]">
                        Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#34D399] uppercase tracking-wider hidden md:inline">
                      GRIEVANCE OFFICER
                    </span>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[13] ? "bg-[#34D399] border-[#34D399] text-[#0D1117]" : "border-white/30 bg-transparent"
                    }`}>
                      {checkedSteps[13] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 14 */}
              <div
                onClick={() => toggleStep(14)}
                className={`cursor-pointer rounded-[18px] p-6 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 ${
                  checkedSteps[14]
                    ? "bg-[#34D399]/15 border-[#34D399]/40"
                    : "bg-white/10 border-white/15 hover:bg-white/[0.14]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 text-[#34D399] border border-white/20 flex items-center justify-center font-extrabold text-[16px] flex-shrink-0">
                      14
                    </div>
                    <div>
                      <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white">
                        14. Keep it factual.
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-white/75 mt-1 leading-[1.6]">
                        Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#34D399] uppercase tracking-wider hidden md:inline">
                      LEGAL RIGOR
                    </span>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[14] ? "bg-[#34D399] border-[#34D399] text-[#0D1117]" : "border-white/30 bg-transparent"
                    }`}>
                      {checkedSteps[14] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 15 */}
              <div
                onClick={() => toggleStep(15)}
                className={`cursor-pointer rounded-[18px] p-6 sm:p-8 border transition-all duration-200 hover:-translate-y-0.5 ${
                  checkedSteps[15]
                    ? "bg-[#34D399]/15 border-[#34D399]/40"
                    : "bg-white/10 border-white/15 hover:bg-white/[0.14]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 text-[#34D399] border border-white/20 flex items-center justify-center font-extrabold text-[16px] flex-shrink-0">
                      15
                    </div>
                    <div>
                      <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white">
                        15. Know your consumer helpline.
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-white/75 mt-1 leading-[1.6]">
                        Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#34D399] uppercase tracking-wider hidden md:inline">
                      PUBLIC REDRESS
                    </span>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      checkedSteps[15] ? "bg-[#34D399] border-[#34D399] text-[#0D1117]" : "border-white/30 bg-transparent"
                    }`}>
                      {checkedSteps[15] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote / Bottom Banner in Dark Section */}
            <div className="border border-white/15 bg-white/5 rounded-[18px] p-6 sm:p-8 flex items-center justify-between gap-6 flex-wrap">
              <div className="space-y-1">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#34D399] font-semibold">
                  CONSUMER RIGHTS PRINCIPLE
                </span>
                <p className="text-[15px] text-white/80">
                  Written refusal reports handed to consumer authorities often trigger swift resolution before formal hearings.
                </p>
              </div>
              <button
                onClick={handleDownloadChecklist}
                className="bg-[#34D399] hover:bg-[#2bc48d] text-[#0D1117] text-[13.5px] font-bold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Save Refusal Guide</span>
              </button>
            </div>
          </div>
        </section>

        {/* 10. KEY NUMBERS FOR THE PAGE (DESIGN SYSTEM STAT GRID) */}
        <section id="key-numbers" className="py-20 md:py-28 bg-[#F7F8FA] border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Header stack */}
            <div className="max-w-[760px] mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                  AT A GLANCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
                KEY NUMBERS FOR THE PAGE
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72]">
                Three baseline metrics to remember before, during, and after any warranty conversation.
              </p>
            </div>

            {/* Stat Grid: 3 cells joined by 1px hairline gaps inside one rounded card */}
            {/* One "hot" cell uses emerald for the number (DESIGN.md specification) */}
            <div className="bg-[#E7EAEF] p-[1px] rounded-[18px] overflow-hidden shadow-card grid grid-cols-1 md:grid-cols-3 gap-[1px]">
              {/* Stat 1 */}
              <div className="bg-white p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] block mb-2">
                    COMPLETE WORKFLOW
                  </span>
                  <div className="text-5xl sm:text-6xl font-extrabold text-[#0D1117] tracking-[-0.035em] leading-none font-tabular mb-4">
                    15
                  </div>
                </div>
                <p className="text-[15px] sm:text-[17px] text-[#363C47] font-medium leading-relaxed border-t border-[#E7EAEF] pt-4">
                  steps in the checklist.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] block mb-2">
                    EARLY DEFENSE
                  </span>
                  <div className="text-5xl sm:text-6xl font-extrabold text-[#0D1117] tracking-[-0.035em] leading-none font-tabular mb-4">
                    4
                  </div>
                </div>
                <p className="text-[15px] sm:text-[17px] text-[#363C47] font-medium leading-relaxed border-t border-[#E7EAEF] pt-4">
                  records to keep before anything goes wrong.
                </p>
              </div>

              {/* Stat 3 (HOT CELL in Emerald #087A58!) */}
              <div className="bg-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#EEFAF5] rounded-bl-full -z-0 opacity-50" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#087A58] font-bold">
                      THE GOLDEN RULE
                    </span>
                    <span className="bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] px-2 py-0.5 rounded-full font-mono text-[9px] uppercase font-bold">
                      PRIMARY
                    </span>
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold text-[#087A58] tracking-[-0.035em] leading-none font-tabular mb-4">
                    1
                  </div>
                </div>
                <p className="text-[15px] sm:text-[17px] text-[#0D1117] font-semibold leading-relaxed border-t border-[#B9E6D6] pt-4 relative z-10">
                  rule: if it is not in writing, it did not happen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. CALL TO ACTION */}
        <section id="call-to-action" className="py-20 md:py-28 bg-white">
          <div className="max-w-[880px] mx-auto px-5 md:px-10">
            {/* Header stack (Narrow Shell) */}
            <div className="text-center max-w-[680px] mx-auto mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                  TAKE ACTION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
                CALL TO ACTION
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72]">
                Save these instructions before an emergency strikes, or pass them on to someone about to invest in new gear.
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Action 1 */}
              <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-8 flex flex-col justify-between shadow-card hover:shadow-raised transition-all">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center mb-6">
                    <Download className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] block mb-2">
                    ACTION 01
                  </span>
                  <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Download the checklist and keep it with your invoices.
                  </h3>
                  <p className="text-[15px] text-[#5B6472] leading-relaxed mb-6">
                    Get an offline text copy that you can store in your receipts folder or cloud storage for instant reference.
                  </p>
                </div>

                <button
                  onClick={handleDownloadChecklist}
                  className="w-full bg-[#087A58] hover:bg-[#066748] text-white text-[15px] font-semibold py-3.5 px-6 rounded-full shadow-raised hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free Checklist (.txt)</span>
                </button>
              </div>

              {/* Action 2 */}
              <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-8 flex flex-col justify-between shadow-card hover:shadow-raised transition-all">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#EEFAF5] text-[#087A58] border border-[#B9E6D6] flex items-center justify-center mb-6">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] block mb-2">
                    ACTION 02
                  </span>
                  <h3 className="text-[22px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Share it with a friend who just bought something expensive.
                  </h3>
                  <p className="text-[15px] text-[#5B6472] leading-relaxed mb-6">
                    Help your friends and family lock in their warranty rights from Day 1 so they never get caught unprepared.
                  </p>
                </div>

                <button
                  onClick={handleCopyLink}
                  className="w-full bg-white hover:bg-[#F7F8FA] text-[#0D1117] border border-[#E7EAEF] text-[15px] font-semibold py-3.5 px-6 rounded-full hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#087A58]" />
                      <span className="text-[#087A58]">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#5B6472]" />
                      <span>Copy Guide Link to Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Email reminder input form matching DESIGN.md input specification */}
            <div className="bg-[#F7F8FA] border border-[#E7EAEF] rounded-[18px] p-6 sm:p-8">
              <div className="max-w-[540px] mx-auto text-center space-y-4">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#697382] font-semibold block">
                  OPTIONAL BACKUP
                </span>
                <h4 className="text-[19px] font-extrabold text-[#0D1117]">
                  Send the checklist to your personal email
                </h4>
                <p className="text-[14px] text-[#5B6472]">
                  Keep a permanent copy in your inbox alongside your electronic store receipts.
                </p>

                {emailSubmitted ? (
                  <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] py-3 px-4 rounded-full text-[14px] font-medium flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Checklist sent! Check your inbox.</span>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="flex-1 bg-[#F2F4F7] text-[#0D1117] border border-[#D6DBE3] rounded-[12px] h-[44px] px-4 text-[15px] focus:outline-none focus:outline-2 focus:outline-[#087A58] focus:outline-offset-[3px] transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-[#0D1117] hover:bg-[#087A58] text-white text-[13.5px] font-medium h-[44px] px-6 rounded-full transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <span>Send Copy</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 12. FOOTER */}
      <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16 md:py-20 text-[#5B6472]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E7EAEF]">
            {/* Col 1: About */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#087A58] flex items-center justify-center text-white">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[18px] font-extrabold tracking-[-0.035em] text-[#0D1117]">
                  CLAIM READY
                </span>
              </div>
              <p className="text-[14px] text-[#5B6472] leading-relaxed max-w-[380px]">
                An editorial, calm, and evidence-driven guide empowering everyday consumers to protect their rights when appliances and electronics fail.
              </p>
              <div className="pt-2 font-mono text-[11px] text-[#697382]">
                STATUS: EMERALD EDITORIAL DESIGN SYSTEM
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-4 space-y-3">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#0D1117] font-bold block mb-4">
                CHECKLIST SECTIONS
              </span>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <a href="#who-this-is-for" className="hover:text-[#087A58] transition-colors">
                    Who This Is For
                  </a>
                </li>
                <li>
                  <a href="#before-fault" className="hover:text-[#087A58] transition-colors">
                    Before Anything Goes Wrong (Steps 1–4)
                  </a>
                </li>
                <li>
                  <a href="#fault-appears" className="hover:text-[#087A58] transition-colors">
                    When The Fault Appears (Steps 5–7)
                  </a>
                </li>
                <li>
                  <a href="#technician-visit" className="hover:text-[#087A58] transition-colors">
                    When A Technician Visits (Steps 8–10)
                  </a>
                </li>
                <li>
                  <a href="#if-refused" className="hover:text-[#087A58] transition-colors">
                    If The Claim Is Refused (Steps 11–15)
                  </a>
                </li>
                <li>
                  <a href="#key-numbers" className="hover:text-[#087A58] transition-colors">
                    Key Numbers For The Page
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Key Principles */}
            <div className="md:col-span-3 space-y-3">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#0D1117] font-bold block mb-4">
                CORE PRINCIPLES
              </span>
              <ul className="space-y-2 text-[13.5px] text-[#5B6472]">
                <li>• Always demand the job sheet</li>
                <li>• Keep paper bills and digital scans</li>
                <li>• Record dates and ticket numbers</li>
                <li>• Demand inspection reports in writing</li>
                <li>• Escalate to company grievance cells</li>
              </ul>
            </div>
          </div>

          {/* Legal Footer Note (Exact wording from content.txt) */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-[13px] text-[#697382] leading-relaxed max-w-[800px]">
              Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
            </p>
            <div className="font-mono text-[11px] text-[#697382] uppercase tracking-wider flex-shrink-0">
              © {new Date().getFullYear()} CLAIM READY
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
