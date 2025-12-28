import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import { DUAS } from './constants';
import { Prayer } from './types';
import { ChevronLeft, Download, Info, Moon, Sun, ArrowRight } from 'lucide-react';
import AudioPlayer from './components/AudioPlayer';

// Decorative divider for list view or sections
const IslamicDivider = () => (
  <div className="flex items-center justify-center my-6 opacity-40">
    <div className="h-px w-12 bg-islamic-gold"></div>
    <div className="mx-2 text-islamic-gold text-lg">✦</div>
    <div className="h-px w-12 bg-islamic-gold"></div>
  </div>
);

// Decorative Verse separator
const VerseSeparator = () => (
  <div className="text-islamic-gold/30 my-6 flex justify-center">
    <svg width="40" height="15" viewBox="0 0 40 10" fill="currentColor">
       <path d="M20 10C15 10 12 5 12 5C12 5 8 8 0 8V2C8 2 12 5 12 5C12 5 15 0 20 0C25 0 28 5 28 5C28 5 32 2 40 2V8C32 8 28 5 28 5C28 5 25 10 20 10Z" />
    </svg>
  </div>
);

const DuaList: React.FC<{ toggleDarkMode: () => void, isDarkMode: boolean }> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Dark Mode Toggle - Floating on Home */}
      <button 
        onClick={toggleDarkMode}
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-white/80 dark:bg-islamic-green/40 backdrop-blur shadow-md hover:shadow-lg transition-all text-islamic-dark dark:text-islamic-goldLight border border-transparent dark:border-white/10"
        title={isDarkMode ? 'حالت روز' : 'حالت شب'}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Elegant Intro Banner */}
      <div className="bg-islamic-green dark:bg-islamic-dark/50 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-lg border border-islamic-green dark:border-white/10 transition-colors duration-300">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-islamic-goldLight">گنجینه دعا</h2>
          <p className="text-islamic-goldLight/80 text-lg font-light max-w-xl mx-auto leading-relaxed">
            مجموعه‌ای از دعاهای منتخب با صوت دلنشین و ترجمه روان.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-islamic-goldLight/90 text-sm border border-white/10">
            <Download size={14} />
            <span>امکان دریافت متن تمامی دعاها با فرمت JSON</span>
          </div>
        </div>
      </div>

      <IslamicDivider />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {DUAS.map((dua) => (
          <Link 
            key={dua.id}
            to={`/dua/${dua.id}`}
            onClick={() => window.scrollTo(0, 0)}
            className="group bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm border border-stone-100 dark:border-white/5 hover:border-islamic-gold/40 dark:hover:border-islamic-gold/20 hover:shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden block"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-islamic-gold/5 dark:bg-islamic-gold/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-xl font-bold text-islamic-dark dark:text-gray-100 font-sans group-hover:text-islamic-green dark:group-hover:text-islamic-gold transition-colors">{dua.title}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-gray-500 tracking-wider">JSON</span>
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 pl-4">
                {dua.description}
              </p>
              
              <div className="flex items-center text-islamic-green dark:text-islamic-goldLight text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                <span>مشاهده و قرائت</span>
                <ChevronLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const DuaDetail: React.FC<{ toggleDarkMode: () => void, isDarkMode: boolean }> = ({ toggleDarkMode, isDarkMode }) => {
  const { duaId } = useParams<{ duaId: string }>();
  const navigate = useNavigate();
  const selectedDua = DUAS.find(d => d.id === duaId);

  if (!selectedDua) {
    return <div className="text-center py-20">دعایی یافت نشد.</div>;
  }

  const handleDownloadJson = (dua: Prayer) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dua, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${dua.id}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="animate-slide-up">
      {/* Refined Header */}
      <header className="bg-white/80 dark:bg-islamic-dark/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 border-b border-islamic-gold/20 dark:border-white/5 shadow-sm animate-fade-in transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 text-islamic-green dark:text-islamic-gold hover:bg-islamic-green/5 dark:hover:bg-white/5 rounded-full transition-colors">
              <ArrowRight size={22} />
            </button>
            <h1 className="text-xl font-bold text-islamic-dark dark:text-islamic-goldLight tracking-tight">
              {selectedDua.title}
            </h1>
          </div>
          <button 
            onClick={toggleDarkMode}
            className="text-islamic-gold hover:text-islamic-dark dark:hover:text-white transition-colors p-2"
            title={isDarkMode ? 'حالت روز' : 'حالت شب'}
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      </header>

      <div className="pt-20">
        {/* Action Bar */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-400 dark:text-gray-500 font-mono hidden md:inline-block">ID: {selectedDua.id.toUpperCase()}</span>
          <div className="flex gap-3 w-full md:w-auto justify-end">
            <button 
              onClick={() => handleDownloadJson(selectedDua)}
              className="flex items-center justify-center gap-2 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition"
            >
              <Download size={16} />
              <span>ذخیره JSON</span>
            </button>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-white/5 rounded-3xl shadow-sm border border-stone-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
          {/* Intro Section */}
          <div className="bg-stone-50 dark:bg-black/20 border-b border-stone-100 dark:border-white/5 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="bg-white dark:bg-white/10 p-3 rounded-full shadow-sm text-islamic-gold hidden md:block">
                <Info size={24} />
              </div>
              <div>
                <h3 className="font-bold text-islamic-dark dark:text-islamic-goldLight text-lg mb-2">درباره این دعا</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-8 text-justify opacity-90">
                  {selectedDua.benefits}
                </p>
              </div>
            </div>
          </div>

          {/* Verses */}
          <div className="p-6 md:p-12 space-y-10">
            <div className="text-center mb-12">
              <div className="inline-block relative">
                {/* Decorative Bismillah */}
                <h2 className="text-3xl md:text-4xl font-serif text-islamic-dark dark:text-islamic-goldLight mb-4">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h2>
                <div className="h-1 w-24 bg-islamic-gold mx-auto rounded-full opacity-40"></div>
              </div>
            </div>

            {selectedDua.verses.map((line, index) => (
              <div key={line.id} className="flex flex-col items-center text-center">
                {/* Arabic */}
                <p className="text-2xl md:text-4xl leading-[2.2] md:leading-[2.5] font-serif text-islamic-dark dark:text-gray-100 w-full mb-5 font-medium px-2" dir="rtl">
                  {line.arabic}
                  <span class="text-emerald-600 dark:text-emerald-400">﴿{(index + 1).toLocaleString('fa-IR')}﴾</span>
                </p>
                
                {/* Translation */}
                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-2xl px-4 border-r-2 border-islamic-gold/30 mr-4 md:mr-0 md:border-none">
                  {line.translation}
                </p>
                
                {index < selectedDua.verses.length - 1 && <VerseSeparator />}
              </div>
            ))}
            
            <div className="text-center mt-12 mb-4 opacity-50">
              <span className="text-islamic-gold text-2xl"> صدق الله العلی العظیم </span>
            </div>
          </div>
        </div>
        
        <div className="h-32"></div>

        {/* Audio Player Component */}
        {selectedDua.audio && <AudioPlayer src={selectedDua.audio} title={selectedDua.title} />}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen font-sans pb-24 selection:bg-islamic-gold selection:text-white dark:text-islamic-goldLight transition-colors duration-300">
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Routes>
          <Route path="/" element={<DuaList toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
          <Route path="/dua/:duaId" element={<DuaDetail toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;