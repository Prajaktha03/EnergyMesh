"use client";
import { useState } from "react";

export default function Home() {
  const [showResult, setShowResult] = useState(false);
  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-cyan-400 font-bold text-xl">EnergyMesh</div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#problem" className="hover:text-cyan-400 transition">
              Problem
            </a>

            <a href="#solution" className="hover:text-cyan-400 transition">
              Solution
            </a>

            <a href="#network" className="hover:text-cyan-400 transition">
              Network
            </a>

            <a href="#marketplace" className="hover:text-cyan-400 transition">
              Marketplace
            </a>

            <a href="#architecture" className="hover:text-cyan-400 transition">
              Architecture
            </a>

            <a href="#impact" className="hover:text-cyan-400 transition">
              Impact
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>
        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500 text-cyan-400 mb-8">
          Strait of Hormuz Design Challenge
        </div>
        <h1 className="text-7xl md:text-8xl font-bold text-cyan-400">
          EnergyMesh
        </h1>
        <p className="mt-6 text-2xl text-gray-300">
          The Energy Resilience Network
        </p>
        <p className="mt-10 max-w-3xl text-lg text-gray-400">
          A decentralized platform that dynamically builds alternative energy
          supply ecosystems whenever critical trade routes become unavailable.
        </p>
        <div className="mt-12 flex gap-4 flex-wrap justify-center">
          <div className="border border-slate-700 rounded-xl px-6 py-4">
            <p className="text-cyan-400 text-3xl font-bold">20%</p>
            <p className="text-gray-400 text-sm">Energy Trade Impacted</p>
          </div>
          <div className="border border-slate-700 rounded-xl px-6 py-4">
            <p className="text-green-400 text-3xl font-bold">276</p>
            <p className="text-gray-400 text-sm">Supply Chains Rebuilt</p>
          </div>
          <div className="border border-slate-700 rounded-xl px-6 py-4">
            <p className="text-orange-400 text-3xl font-bold">$1.2B</p>
            <p className="text-gray-400 text-sm">Potential Loss Avoided</p>
          </div>
        </div>
      </section>
      {/* Problem Section */}
      <section id="problem" className="py-24 px-10 border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">The Problem</h2>
        <p className="text-gray-300 max-w-4xl">
          A large portion of global oil and LNG trade flows through the Strait
          of Hormuz. If this critical corridor becomes unavailable, businesses
          face supply shortages, price spikes, and operational disruptions.
        </p>
      </section>
      {/* Insight Section */}
      <section id="solution" className="py-24 px-10 border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">Key Insight</h2>
        <p className="text-gray-300 max-w-4xl">
          The problem is not transportation. The problem is coordination.
          Suppliers, storage providers, and transport operators already exist
          but operate in disconnected ecosystems.
        </p>
      </section>
      {/* Network Builder Section */}
      <section
        id="network"
        className="relative py-32 px-6 md:px-10 border-t border-slate-800 overflow-hidden bg-gradient-to-b from-black to-slate-950"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              LIVE ALTERNATIVE ROUTE
            </div>

            <h2 className="text-4xl md:text-6xl font-bold">
              Alternative Network
              <span className="text-cyan-400"> Builder</span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
              EnergyMesh dynamically connects alternative suppliers, storage,
              transport and import infrastructure when critical routes are
              disrupted.
            </p>
          </div>

          {/* Network Diagram */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[700px]">
              {/* CONNECTION LINES */}
              <svg
                className="absolute inset-0 w-full h-full z-0"
                viewBox="0 0 1000 700"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Australia → Singapore */}
                <path
                  d="M500 105 C400 135 290 165 190 220"
                  stroke="#22d3ee"
                  strokeWidth="3"
                />

                {/* Australia → Tanker */}
                <path
                  d="M500 105 C600 135 710 165 810 220"
                  stroke="#22d3ee"
                  strokeWidth="3"
                />

                {/* Singapore → Mumbai */}
                <path
                  d="M190 255 C270 325 365 390 445 470"
                  stroke="#22c55e"
                  strokeWidth="3"
                />

                {/* Tanker → Mumbai */}
                <path
                  d="M810 255 C730 325 635 390 555 470"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />

                {/* Mumbai → Customer */}
                <path d="M500 545 L500 620" stroke="#a855f7" strokeWidth="4" />

                {/* Animated dots */}
                <circle r="5" fill="#22d3ee">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path="M500 105 C400 135 290 165 190 220"
                  />
                </circle>

                <circle r="5" fill="#22d3ee">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path="M500 105 C600 135 710 165 810 220"
                  />
                </circle>

                <circle r="5" fill="#22c55e">
                  <animateMotion
                    dur="2.5s"
                    repeatCount="indefinite"
                    path="M190 255 C270 325 365 390 445 470"
                  />
                </circle>

                <circle r="5" fill="#3b82f6">
                  <animateMotion
                    dur="2.5s"
                    repeatCount="indefinite"
                    path="M810 255 C730 325 635 390 555 470"
                  />
                </circle>

                <circle r="5" fill="#a855f7">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path="M500 545 L500 620"
                  />
                </circle>
              </svg>

              {/* AUSTRALIA LNG */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="w-[210px] rounded-2xl border border-cyan-400/70 bg-slate-950 px-6 py-5 shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                    <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                      Alternative Supply
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-center">
                    Australia LNG
                  </h3>

                  <p className="text-xs text-gray-500 text-center mt-1">
                    Supply source
                  </p>
                </div>
              </div>

              {/* SINGAPORE STORAGE */}
              <div className="absolute top-[185px] left-0 md:left-[3%] z-10">
                <div className="w-[205px] rounded-2xl border border-green-400/60 bg-slate-950 px-6 py-5 shadow-[0_0_30px_rgba(34,197,94,0.12)]">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-green-400 mb-2">
                    Storage Hub
                  </div>

                  <h3 className="text-lg font-semibold">Singapore Storage</h3>

                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Available capacity
                  </div>
                </div>
              </div>

              {/* TANKER FLEET */}
              <div className="absolute top-[185px] right-0 md:right-[3%] z-10">
                <div className="w-[205px] rounded-2xl border border-blue-400/60 bg-slate-950 px-6 py-5 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-blue-400 mb-2">
                    Transport
                  </div>

                  <h3 className="text-lg font-semibold">Tanker Fleet</h3>

                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Route available
                  </div>
                </div>
              </div>

              {/* ROUTING ENGINE */}
              <div className="absolute top-[340px] left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-slate-950/90">
                  <span className="text-cyan-400 text-xs">◆</span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                    EnergyMesh Routing Engine
                  </span>
                </div>
              </div>

              {/* MUMBAI PORT */}
              <div className="absolute top-[445px] left-1/2 -translate-x-1/2 z-10">
                <div className="w-[210px] rounded-2xl border border-purple-400/70 bg-slate-950 px-6 py-5 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                  <div className="text-center">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-purple-400 mb-2">
                      Import Gateway
                    </div>

                    <h3 className="text-xl font-semibold">Mumbai Port</h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Receiving terminal
                    </p>
                  </div>
                </div>
              </div>

              {/* CUSTOMER */}
              <div className="absolute top-[585px] left-1/2 -translate-x-1/2 z-10">
                <div className="w-[210px] rounded-2xl border border-orange-400/70 bg-slate-950 px-6 py-5 shadow-[0_0_35px_rgba(249,115,22,0.15)]">
                  <div className="text-center">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-orange-400 mb-2">
                      End Customer
                    </div>

                    <h3 className="text-lg font-semibold">Energy Demand</h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Continuous supply
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EXPLANATION CARDS */}
          <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <div className="text-cyan-400 text-sm font-semibold mb-2">
                01 — SOURCE
              </div>

              <p className="text-sm text-gray-400">
                Identify alternative energy suppliers outside the disrupted
                route.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <div className="text-green-400 text-sm font-semibold mb-2">
                02 — CONNECT
              </div>

              <p className="text-sm text-gray-400">
                Match storage and transport capacity to create a viable route.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <div className="text-purple-400 text-sm font-semibold mb-2">
                03 — DELIVER
              </div>

              <p className="text-sm text-gray-400">
                Route the energy through an available import gateway to the
                customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Dashboard */}
      <section className="py-32 px-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">
            Global Risk Command Center
          </h2>
          <p className="text-gray-400 mb-12">
            Monitor global energy disruptions and identify regions at risk.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
              <p className="text-gray-400">Risk Score</p>
              <p className="text-4xl font-bold text-red-400">72/100</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
              <p className="text-gray-400">Energy At Risk</p>
              <p className="text-4xl font-bold text-orange-400">18.2M</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
              <p className="text-gray-400">Alternative Capacity</p>
              <p className="text-4xl font-bold text-green-400">8.7M</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
              <p className="text-gray-400">Recovery Plans</p>
              <p className="text-4xl font-bold text-cyan-400">183</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6">Live Risk Alerts</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500">
                  🔴 Strait of Hormuz Closure
                </div>
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500">
                  🟠 LNG Supply Constraints
                </div>
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500">
                  🟡 Storage Capacity Tightening
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500">
                  🟢 Alternative Capacity Discovered
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6">Regional Status</h3>
              <div className="space-y-5">
                <div className="flex justify-between">
                  <span>Middle East</span>
                  <span className="text-red-400">High Risk</span>
                </div>
                <div className="flex justify-between">
                  <span>Asia</span>
                  <span className="text-orange-400">Monitoring</span>
                </div>
                <div className="flex justify-between">
                  <span>Europe</span>
                  <span className="text-yellow-400">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span>Americas</span>
                  <span className="text-green-400">Healthy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Supply Gap Analyzer */}
      <section className="py-32 px-10 border-t border-gray-800 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Supply Gap Analyzer</h2>
          <p className="text-gray-400 mb-12">
            Assess exposure and identify potential shortages caused by a major
            energy disruption.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Input Side */}
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-400">Country</label>
                  <input
                    value="India"
                    readOnly
                    className="w-full p-4 rounded-lg bg-slate-800"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-400">Fuel Type</label>
                  <input
                    value="LNG"
                    readOnly
                    className="w-full p-4 rounded-lg bg-slate-800"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-400">Quantity</label>
                  <input
                    value="50,000 Tons"
                    readOnly
                    className="w-full p-4 rounded-lg bg-slate-800"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-400">Duration</label>
                  <input
                    value="90 Days"
                    readOnly
                    className="w-full p-4 rounded-lg bg-slate-800"
                  />
                </div>
                <button
                  onClick={() => setShowResult(true)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-xl w-full"
                >
                  Analyze Risk
                </button>
              </div>
            </div>
            {/* Result Side */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 flex items-center justify-center">
              {!showResult ? (
                <p className="text-gray-500">
                  Run analysis to view disruption impact.
                </p>
              ) : (
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-8">Analysis Result</h3>
                  <div className="space-y-8">
                    <div>
                      <p className="text-gray-400">Supply Gap</p>
                      <p className="text-5xl font-bold text-red-400">
                        18,000 Tons
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Risk Level</p>
                      <p className="text-3xl font-bold text-orange-400">HIGH</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Price Impact</p>
                      <p className="text-3xl font-bold text-yellow-400">+14%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Dependency</p>
                      <p className="text-3xl font-bold text-cyan-400">62%</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Marketplace */}
      <section
        id="marketplace"
        className="py-32 px-10 border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Capacity Marketplace</h2>
          <p className="text-gray-400 mb-12">
            Discover and reserve alternative supply options during disruptions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Plan A</h3>
              <div className="space-y-3">
                <p>Australia LNG</p>
                <p>Reliability: 94%</p>
                <p>Lead Time: 11 Days</p>
                <p>Cost Impact: +12%</p>
              </div>
              <button className="mt-8 w-full bg-cyan-500 text-black py-3 rounded-xl font-semibold">
                Reserve Capacity
              </button>
            </div>
            {/* Option 2 */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Plan B</h3>
              <div className="space-y-3">
                <p>US LNG</p>
                <p>Reliability: 98%</p>
                <p>Lead Time: 18 Days</p>
                <p>Cost Impact: +18%</p>
              </div>
              <button className="mt-8 w-full bg-green-500 text-black py-3 rounded-xl font-semibold">
                Reserve Capacity
              </button>
            </div>
            {/* Option 3 */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">
                Plan C
              </h3>
              <div className="space-y-3">
                <p>West Africa LNG</p>
                <p>Reliability: 91%</p>
                <p>Lead Time: 13 Days</p>
                <p>Cost Impact: +15%</p>
              </div>
              <button className="mt-8 w-full bg-orange-500 text-black py-3 rounded-xl font-semibold">
                Reserve Capacity
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Architecture Section */}
      <section
        id="architecture"
        className="py-32 px-10 border-t border-gray-800 bg-slate-950"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">System Architecture</h2>

          <p className="text-gray-400 mb-16 max-w-4xl">
            EnergyMesh continuously monitors market signals and dynamically
            creates alternative supply ecosystems during major disruptions.
          </p>

          <div className="space-y-8 text-center">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl text-cyan-400 font-bold">
                External Signals
              </h3>

              <p className="mt-4 text-gray-300">
                News • Shipping Data • Weather • Ports • Energy Prices
              </p>
            </div>

            <div className="text-cyan-400 text-4xl">↓</div>

            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl text-orange-400 font-bold">
                Risk Intelligence Engine
              </h3>
            </div>

            <div className="text-cyan-400 text-4xl">↓</div>

            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl text-green-400 font-bold">
                Energy Asset Graph
              </h3>

              <p className="mt-4 text-gray-300">
                Suppliers • Storage • Transport • Terminals
              </p>
            </div>

            <div className="text-cyan-400 text-4xl">↓</div>

            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl text-purple-400 font-bold">
                Matching Engine
              </h3>
            </div>

            <div className="text-cyan-400 text-4xl">↓</div>

            <div className="bg-slate-900 p-8 rounded-xl border border-cyan-500">
              <h3 className="text-2xl text-cyan-400 font-bold">
                EnergyMesh Platform
              </h3>

              <p className="mt-4 text-gray-300">
                Dashboard • Analyzer • Network Builder • Marketplace
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Business Impact */}
      <section id="impact" className="py-32 px-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Business Impact</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Before EnergyMesh */}
            <div className="bg-red-500/10 border border-red-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-8">
                Before EnergyMesh
              </h3>

              <div className="space-y-4 text-lg">
                <p>❌ Weeks To Respond</p>
                <p>❌ Manual Coordination</p>
                <p>❌ Low Visibility</p>
                <p>❌ High Risk</p>
              </div>
            </div>

            {/* After EnergyMesh */}
            <div className="bg-green-500/10 border border-green-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-8">
                After EnergyMesh
              </h3>

              <div className="space-y-4 text-lg">
                <p>✅ Minutes To Respond</p>
                <p>✅ Automated Network Creation</p>
                <p>✅ Global Visibility</p>
                <p>✅ Business Continuity</p>
              </div>
            </div>
          </div>

          {/* Resilience Score */}
          <div className="mt-16 bg-slate-900 border border-slate-700 rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-6">Resilience Score</h3>

            <div className="text-6xl font-bold">
              <span className="text-red-400">42</span>
              <span className="mx-6 text-gray-500">→</span>
              <span className="text-green-400">98</span>
            </div>
          </div>
        </div>
      </section>
      {/* Vision */}
      <section className="py-40 px-10 border-t border-gray-800 text-center">
        <h2 className="text-6xl font-bold mb-10">
          The Future of Energy Resilience
        </h2>

        <p className="max-w-4xl mx-auto text-xl text-gray-400 leading-relaxed">
          EnergyMesh transforms fragmented global energy infrastructure into a
          connected resilience network. Instead of relying on a single trade
          route, businesses can dynamically discover, build, and execute
          alternative energy ecosystems whenever critical routes fail.
        </p>

        <div className="mt-16 text-cyan-400 text-3xl font-bold">
          When Energy Routes Fail — Business Continues.
        </div>
      </section>
    </main>
  );
}
