"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <header className="flex items-center justify-between p-6 shadow-md bg-white">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Tomakaka Logo"
            width={60}
            height={60}
          />
          <h1 className="text-xl font-bold">PT. Tomakaka Consultant Engineering</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-700">Tentang</a>
          <a href="#services" className="hover:text-blue-700">Layanan</a>
          <a href="#structure" className="hover:text-blue-700">Struktur</a>
          <a href="#contact" className="hover:text-blue-700">Kontak</a>
        </nav>
      </header>

      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Konsultan Teknik Kelautan & Infrastruktur Pesisir</h2>
          <p className="text-lg mb-6">
            Solusi profesional untuk perencanaan pelabuhan, survei batimetri, studi kelayakan, dan konstruksi maritim.
          </p>
          <Button className="bg-white text-blue-900 hover:bg-gray-200">Hubungi Kami</Button>
        </div>
      </section>

      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Tentang Kami</h2>
        <p className="mb-4">
          PT. Tomakaka Consultant Engineering adalah perusahaan yang bergerak di bidang perencanaan dan pembangunan infrastruktur pantai seperti pelabuhan, dermaga, breakwater, serta kegiatan teknik kelautan lainnya. Kami juga menyediakan jasa survei dan pemetaan seperti topografi, batimetri, survei kelautan, geoteknik, serta kajian lingkungan.
        </p>
        <p>
          Dilengkapi dengan tenaga ahli dan peralatan modern, kami memberikan hasil survei dan perencanaan yang akurat, efisien, dan andal.
        </p>
      </section>

      <section id="services" className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Perencanaan Pelabuhan & Dermaga",
              "Pemetaan Topografi & Batimetri",
              "Survei Geoteknik & Data Kelautan",
              "Kajian Lingkungan & Studi Kelayakan",
              "Manajemen Proyek Teknik Kelautan",
              "Pengawasan Pekerjaan Infrastruktur"
            ].map((service, index) => (
              <Card key={index} className="shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="structure" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Struktur Organisasi</h2>
        <div className="border rounded-xl p-6 bg-white shadow-md">
          <ul className="list-disc list-inside space-y-2">
            <li>Direktur Utama</li>
            <li>Komisaris</li>
            <li>Direktur Operasional</li>
            <li>Direktur Teknis</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Kontak Kami</h2>
        <p className="mb-2">Jl. [Nama Jalan], No. [XX], [Kota], [Provinsi], Indonesia</p>
        <p className="mb-2">Telepon: (XXX) XXXX-XXXX</p>
        <p className="mb-2">Email: info@tomakaka-eng.co.id</p>
        <Button className="mt-4 bg-white text-blue-900 hover:bg-gray-100">Kirim Pesan</Button>
      </section>
    </div>
  );
}
