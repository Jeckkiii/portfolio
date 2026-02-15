import React, { useState } from 'react';
import { 
  Github, Mail, Phone, Instagram, Shield, Layout, 
  Code, Database, Globe, Cpu, Linkedin, Menu, X 
} from 'lucide-react';

// --- IMPORT ASSETS ---
import FotoProfil from './assets/pp.jpg';
import LogoEmpu from './assets/logo-mpu.jpg';
import FotoPrestasi1 from './assets/lomba2.png';
import FotoPrestasi2 from './assets/lomba1.png';

// Import Gambar Project (Ganti nama file sesuai aset kamu nanti)
import Proyek1 from './assets/layanan.png'; 
import Proyek2 from './assets/presensi.png';
import Proyek3 from './assets/erm.png';
import Proyek4 from './assets/enkrip.png';
import Proyek5 from './assets/yuki.png';
import Proyek6 from './assets/game.png';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const allProjects = [
    { 
      title: "Layanan RC", 
      cat: "Web Dev", 
      image: Proyek1, 
      desc: "Mendigitalisasi layanan pasien di RSU Rajawali Citra selama masa magang." 
    },
    { 
      title: "Presensi Mobile", 
      cat: "Mobile Dev", 
      image: Proyek2, 
      desc: "Aplikasi presensi karyawan berbasis mobile untuk fleksibilitas data di RSU RC." 
    },
    { 
      title: "Medical Records", 
      cat: "Java Desktop", 
      image: Proyek3, 
      desc: "Aplikasi rekam medis berbasis Java Swing untuk mencatat data pasien digital." 
    },
    { 
      title: "Encryption Tool", 
      cat: "Security", 
      image: Proyek4, 
      desc: "Aplikasi enkripsi teks Base64 dengan proteksi password menggunakan Python Tkinter." 
    },
    { 
      title: "Yuki Drink", 
      cat: "UI/UX", 
      image: Proyek5, 
      desc: "Perancangan antarmuka aplikasi mobile UMKM minuman Yuki Drink." 
    },
    { 
      title: "Virus Movement", 
      cat: "Java Game", 
      image: Proyek6, 
      desc: "Game sederhana yang dibuat menggunakan Java Greenfoot sebagai programmer." 
    }
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const currentProjects = allProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tools', href: '#tools' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-slate-900 text-white font-sans scroll-smooth selection:bg-blue-500">
      
      {/* --- FLOATING GLASS NAVBAR --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl animate-fadeIn">
        <div className="bg-slate-800/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex items-center justify-between md:justify-center gap-12 shadow-2xl">
          <div className="flex items-center gap-2 md:hidden">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm uppercase">M</div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-300 hover:text-white transition-all relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button className="md:hidden p-2 text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 bg-gradient-to-br from-blue-900 via-slate-900 to-black pt-20 text-center md:text-left">
        <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0 animate-fadeIn">
          <div className="w-full h-full rounded-3xl border-4 border-blue-500 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <img src={FotoProfil} alt="Miqdad Dzaki Nashiruddien" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 uppercase tracking-tighter italic">
            Miqdad Dzaki Nashiruddien
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed font-light italic">
            Mahasiswa Teknologi Informasi di Universitas 'Aisyiyah Yogyakarta dengan minat di bidang digital forensik, UI/UX, dan pengembangan front-end.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 uppercase">
            <span className="bg-blue-900/30 border border-blue-500/50 px-4 py-1 rounded-full text-[10px] font-black tracking-widest">Digital Forensics</span>
            <span className="bg-emerald-900/30 border border-emerald-500/50 px-4 py-1 rounded-full text-[10px] font-black tracking-widest">UI/UX Design</span>
            <span className="bg-purple-900/30 border border-purple-500/50 px-4 py-1 rounded-full text-[10px] font-black tracking-widest">Front-End Dev</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: TOOLS */}
      <section id="tools" className="min-h-screen flex flex-col justify-center bg-slate-800/50 px-6 py-20 border-y border-slate-700">
        <div className="max-w-6xl mx-auto w-full text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase italic underline decoration-blue-500 decoration-4 underline-offset-8">Tools Mastery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Cisco Packet Tracer", icon: <Globe size={32}/>, desc: "Simulasi dan perancangan jaringan komputer untuk konfigurasi." },
              { name: "VirtualBox", icon: <Cpu size={32}/>, desc: "Virtualisasi sistem operasi untuk pengujian lingkungan komputasi." },
              { name: "Ubuntu", icon: <Shield size={32}/>, desc: "OS Linux untuk pengembangan, server, dan keamanan siber." },
              { name: "Figma", icon: <Layout size={32}/>, desc: "Perancangan UI/UX dan prototyping desain yang kolaboratif." },
              { name: "MySQL", icon: <Database size={32}/>, desc: "Manajemen basis data relasional untuk pengolahan data." },
              { name: "VS Code", icon: <Code size={32}/>, desc: "Editor kode utama dengan dukungan ekstensi pengembangan web." }
            ].map((tool, i) => (
              <div key={i} className="group p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800 hover:border-blue-500 transition-all duration-500">
                <div className="text-blue-500 mb-6 flex justify-center group-hover:scale-125 transition-transform duration-500">{tool.icon}</div>
                <h3 className="text-lg font-black mb-4 uppercase tracking-tighter italic">{tool.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PORTFOLIO (WITH PROJECT IMAGES) */}
      <section id="portfolio" className="min-h-screen flex flex-col justify-center bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase italic underline decoration-blue-500 decoration-4 underline-offset-8">Project Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {currentProjects.map((proj, i) => (
              <div key={i} className="bg-slate-800 rounded-[2rem] overflow-hidden border border-slate-700 hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-2xl group">
                {/* --- GAMBAR PROYEK --- */}
                <div className="h-52 bg-slate-700 relative overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                {/* --- KONTEN TEKS --- */}
                <div className="p-8 flex-grow">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">{proj.cat}</span>
                  <h3 className="text-2xl font-black mt-2 mb-4 tracking-tighter uppercase italic">{proj.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-16">
            {[...Array(totalPages)].map((_, index) => (
              <button key={index} onClick={() => setCurrentPage(index)} className={`h-1 transition-all duration-700 ${currentPage === index ? "w-20 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" : "w-8 bg-slate-700 hover:bg-slate-500"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ACHIEVEMENTS */}
      <section id="achievements" className="min-h-screen flex flex-col justify-center bg-slate-800/30 px-6 py-20 border-y border-slate-700">
        <div className="max-w-5xl mx-auto w-full text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase italic underline decoration-blue-500 decoration-8 underline-offset-[12px]">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-[2.5rem] border border-blue-500/20 overflow-hidden hover:border-blue-500 transition-all duration-500 group flex flex-col shadow-2xl">
              <div className="h-[320px] bg-slate-800 relative overflow-hidden">
                <img src={FotoPrestasi1} alt="Silver Medal" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50"></div>
              </div>
              <div className="p-8 text-left border-t border-white/5">
                <h3 className="text-xl font-black tracking-tighter uppercase italic text-white mb-3">Silver Medal</h3>
                <p className="text-gray-400 text-sm font-light italic leading-relaxed">Meraih SILVER MEDAL pada kompetisi internasional INNOW 2025 yang diselenggarakan oleh FKAAB UTHM Malaysia.</p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[2.5rem] border border-blue-500/20 overflow-hidden hover:border-blue-500 transition-all duration-500 group flex flex-col shadow-2xl">
              <div className="h-[320px] bg-slate-800 relative overflow-hidden">
                <img src={FotoPrestasi2} alt="Innow 2025" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50"></div>
              </div>
              <div className="p-8 text-left border-t border-white/5">
                <h3 className="text-xl font-black tracking-tighter uppercase italic text-white mb-3 underline decoration-blue-500 decoration-2">Silver Medal</h3>
                <p className="text-gray-400 text-sm font-light italic leading-relaxed">Meraih MEDALI PERAK Kompetisi Mahasiswa Muhammadiyah (KMM) dan Program Kreativitas Mahasiswa Muhammadiyah (PKMM) AST-PTMA Tahun 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ACTIVITIES */}
      <section id="activities" className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff0000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 z-10 text-left">
          <div className="w-72 h-72 md:w-[450px] md:h-[450px] bg-slate-900 rounded-[3rem] border-2 border-red-600/20 flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(220,38,38,0.2)] group hover:border-red-600 transition-all duration-700">
            <img src={LogoEmpu} alt="Logo Empu Gandring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-10 uppercase leading-none">
              Empu <br /> <span className="text-red-600">Gandring</span>
            </h3>
            <div className="space-y-8 text-gray-400 text-xl font-light leading-relaxed italic border-l-4 border-red-600 pl-8">
              <p>Aktif sebagai anggota <span className="text-white font-bold tracking-wide">Empu Gandring</span>, sebuah komunitas riset <span className="text-red-500 underline underline-offset-8 italic text-white uppercase">Cyber Security</span> dan <span className="text-white font-bold tracking-wide uppercase italic">AI</span>.</p>
              <p>Partisipan aktif kompetisi <span className="text-blue-500 font-black tracking-widest uppercase italic">Capture The Flag (CTF)</span> untuk mengasah analisis keamanan siber.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: MINIMALIST CONTACT */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-slate-900 px-6 pt-20 pb-12">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl md:text-6xl font-black italic mb-4 tracking-tighter uppercase">Let's <span className="text-blue-500">Connect</span></h2>
          <p className="text-gray-400 font-light italic mb-16 tracking-widest uppercase text-xs">Ready for new opportunities and collaborations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col gap-6 items-center md:items-start justify-center">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-black rounded-lg border border-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl"><Mail size={18}/></div>
                <span className="text-sm font-medium tracking-wider">CSMIQDAD@GMAIL.COM</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-black rounded-lg border border-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xl"><Phone size={18}/></div>
                <span className="text-sm font-medium tracking-wider">0819-0766-2654</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-5">
              <a href="https://linkedin.com/in/miqdad-dzaki" target="_blank" rel="noopener noreferrer" className="aspect-square bg-black border border-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all group">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/Jeckkiii" target="_blank" rel="noopener noreferrer" className="aspect-square bg-black border border-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all group">
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com/dzakimiqdad_" target="_blank" rel="noopener noreferrer" className="aspect-square bg-black border border-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-500/50 transition-all group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12">
             <footer className="text-slate-800 text-[10px] font-black tracking-[1.5em] uppercase w-full">
               Dzaki Nashiruddien • 2026
             </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
