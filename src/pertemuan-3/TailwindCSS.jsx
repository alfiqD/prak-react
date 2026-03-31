// export default function TailwindCSS() {
//     return(
//         <div>
//             <FlexboxGrid/>
//             <h1 class="border m-4"> Belajar Tilwind CSS 4 </h1>
//             <button className="bg-blue-500 text-white
//                                px-4 py-2 mx-4 rounded-b-full
//                                shadow-lg">Click Me</button>
//             <Spacing title="judul card" content="ini Merupakan contoh penggunaan spacing"/>
//             <Typography/>
//             <BorderRadius/>
//             <BackgroundColors/>
//             <ShadowEffects/>
//         </div>
//     )
// }

// function Spacing(props){
//     return (
//         <div className="bg-gray-500 shadow-lg p-6 m-4 rounded-lg">
//             <h2 className="text-lg font-extrabold">{props.title}</h2>
//             <p className="mt-2 text-white">{props.content}</p>
//         </div>
//     )
// }

// function Typography(){
//     return (
//         <div className="ml-4">
//             <h1 className="text-3xl font-bold text-blue-900 underline">Tailwind Typography</h1>
//             <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
//         </div>
//     )
// }

// function BorderRadius(){
//     return (
//         <div>
//         <button className="ml-4 border-4 border-blue-500 text-blue-500 px-4 py-2 rounded-l-full"> Klik Saya </button>
//         <button className="ml-4 border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-r-full"> Klik Saya </button>
//         </div>
//     )
// }

// function BackgroundColors(){
//     return(
//         <div className="m-4 bg-green-600 text-white p-6 rounded-lg hover:shadow-lg">
//             <h3 className="text-xl font-bold">Tailwind Colors</h3>
//             <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
//         </div>
//     )
// }

// function FlexboxGrid(){
//     return (
//         <nav className="flex justify-between bg-gray-800 p-4 text-white">
//             <h1 className="text-lg font-bold">MyWebsite</h1>
//             <ul className="flex space-x-4">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//              <h1 className="text-lg font-bold">Login</h1>
//         </nav>
//     )
// }

// function ShadowEffects(){
//     return (
//         <div className="m-4 bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
//             <h3 className="text-xl font-semibold">Hover me!</h3>
//             <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
//         </div>
//     )
// }

export default function TailwindCSS() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10 font-sans text-gray-800">
      {/* 1. Navbar (Flexbox) */}
      <FlexboxGrid />

      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-8 border-b-2 border-blue-500 pb-4">
          <h1 className="text-4xl font-black text-blue-600">Tailwind Lab</h1>
        </header>

        {/* 2. Gabungan Border Radius & Buttons */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Button Variations</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-b-full shadow-lg active:scale-95 transition">
              Click Me
            </button>
            <BorderRadius />
          </div>
        </section>

        {/* 3. Komponen Baru: Responsive Card */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Real Example: Feature Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResponsiveCard 
              title="Modern Design" 
              desc="Menggunakan utility-first CSS untuk hasil yang cepat dan bersih."
              icon="🎨"
            />
            <ResponsiveCard 
              title="Fast Styling" 
              desc="Tidak perlu pindah file CSS, semua cukup di dalam class atribut."
              icon="⚡"
            />
          </div>
        </section>

        {/* 4. Dasar-dasar lainnya */}
        <div className="space-y-6">
          <Typography />
          <BackgroundColors />
          <ShadowEffects />
        </div>
      </div>
    </div>
  );
}

// --- Komponen Tambahan yang Menarik ---

function ResponsiveCard({title, desc, icon}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group">
      <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300 w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
      <button className="mt-4 text-blue-500 font-semibold hover:underline">Learn more →</button>
    </div>
  );
}

// --- Komponen Hasil Modifikasi dari Kodemu ---

function FlexboxGrid() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 text-white sticky top-0 z-50 shadow-md">
      <h1 className="text-xl font-bold tracking-tighter">MY<span className="text-blue-400">LAB</span></h1>
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">Components</li>
        <li className="hover:text-blue-400 cursor-pointer">Showcase</li>
      </ul>
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg text-sm font-bold transition">
        Login
      </button>
    </nav>
  );
}

function Typography() {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Tailwind Typography
      </h1>
      <p className="text-gray-500 italic mt-2">"Belajar Tailwind sangat menyenangkan dan cepat!"</p>
    </div>
  );
}

function BorderRadius() {
  return (
    <div className="flex gap-2">
      <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-l-full hover:bg-blue-50 transition"> Left Pill </button>
      <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-r-full hover:bg-blue-50 transition"> Right Pill </button>
    </div>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-700 text-white p-8 rounded-2xl shadow-lg transform hover:-rotate-6 transition">
      <h3 className="text-2xl font-bold">Tailwind Colors</h3>
      <p className="mt-2 opacity-90">Gunakan gradient untuk tampilan lebih modern.</p>
    </div>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white shadow-sm hover:shadow-2xl p-10 rounded-3xl text-center transition-all duration-500 border border-gray-50">
      <h3 className="text-xl font-semibold text-gray-400 group-hover:text-blue-500">Smooth Shadow</h3>
      <p className="text-gray-400 mt-2 text-sm text-balance">Efek bayangan halus memberikan kesan kedalaman yang elegan.</p>
    </div>
  );
}