import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Skull, TrendingDown, AlertTriangle, Brain, Gamepad2, CheckCircle2, Trash2, Heart, Crosshair, ShieldAlert, Zap } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks(prev => [...prev, newClick]);
      setTimeout(() => {
        setClicks(prev => prev.filter(c => c.id !== newClick.id));
      }, 1000);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 overflow-x-hidden">
      <AnimatePresence>
        {clicks.map(click => (
          <motion.div
            key={click.id}
            initial={{ opacity: 1, y: click.y - 20, x: click.x - 20, scale: 0.5 }}
            animate={{ opacity: 0, y: click.y - 100, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed pointer-events-none text-red-600 font-black text-4xl z-50 drop-shadow-[0_0_15px_rgba(220,38,38,1)]"
          >
            -25
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/40 via-black to-black -z-10"></div>
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 px-6 py-2 rounded-full border border-red-900/50 bg-red-950/30 text-red-400 font-bold tracking-widest uppercase text-sm md:text-base shadow-[0_0_15px_rgba(220,38,38,0.2)]"
        >
          Гайд от ЛехаIMMERSION
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 mb-6 uppercase tracking-tighter"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Как поднять рейтинг в Dota 2
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Гайд от человека, который прошёл через боль, лузстрики и тиммейтов 0/15
        </motion.p>
        <motion.div 
          className="text-lg md:text-xl text-gray-300 mb-16 space-y-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>Ты думаешь, что проблема в тебе?</p>
          <p>Спешу расстроить… и одновременно успокоить 😄</p>
        </motion.div>
        <motion.button 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-xl transition-colors shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.6)]"
        >
          Узнать правду
        </motion.button>
        
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 text-red-500/50"
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="py-32 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex flex-col items-center justify-center gap-6 mb-16">
            <AlertTriangle className="text-yellow-500" size={64} />
            <h2 className="text-4xl md:text-6xl font-black text-white text-center tracking-tight">Ты не один такой</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-gray-300 bg-zinc-900/50 p-8 md:p-12 rounded-[2rem] border border-zinc-800 shadow-2xl">
            <p className="flex items-center gap-4"><TrendingDown className="text-red-500 shrink-0" size={32}/> Лузстрик из 10 игр подряд</p>
            <p className="flex items-center gap-4"><Crosshair className="text-blue-500 shrink-0" size={32}/> Тиммейты, которые не знают, что такое карта</p>
            <p className="flex items-center gap-4"><ShieldAlert className="text-orange-500 shrink-0" size={32}/> Керри с ботинком на 25 минуте</p>
            <p className="flex items-center gap-4"><Zap className="text-yellow-400 shrink-0" size={32}/> Саппорт, который фармит больше тебя</p>
            
            <div className="mt-12 pt-12 border-t border-zinc-800 text-center">
              <p className="text-2xl italic text-zinc-500">И ты сидишь и думаешь:</p>
              <p className="text-3xl md:text-4xl font-bold text-white mt-4">«Ну как вообще поднимать рейтинг?»</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Section 3 */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex flex-col items-center justify-center gap-6 mb-16">
            <div className="p-6 bg-purple-900/20 rounded-full border border-purple-500/30">
              <Brain className="text-purple-500" size={64} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white text-center tracking-tight leading-tight">Система 50% существует.<br/><span className="text-red-500">И она тебя ненавидит.</span></h2>
          </div>
          
          <div className="bg-gradient-to-b from-purple-950/30 to-transparent p-8 md:p-12 rounded-[3rem] border border-purple-900/30">
            <p className="text-2xl text-zinc-400 mb-12 text-center">Есть теория (и она подозрительно похожа на правду):</p>
            
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="bg-black/80 p-8 rounded-3xl border border-purple-500/50 text-center mb-16 transform -rotate-2 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <p className="text-2xl md:text-3xl font-bold text-purple-400">👉 Игра старается удерживать тебя на 50% винрейта</p>
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Как это выглядит:</h3>
            <div className="space-y-4 text-xl text-zinc-300 max-w-2xl mx-auto">
              <div className="flex items-center gap-6 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800"><span className="text-green-500 font-black text-2xl">1.</span> выиграл 3–4 игры →</div>
              <div className="flex items-center gap-6 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800"><span className="text-yellow-500 font-black text-2xl">2.</span> получаешь команду из "гениев"</div>
              <div className="flex items-center gap-6 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800"><span className="text-red-500 font-black text-2xl">3.</span> ловишь лузстрик</div>
              <div className="flex items-center gap-6 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800"><span className="text-zinc-500 font-black text-2xl">4.</span> возвращаешься туда, где был</div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-2xl text-zinc-500 mb-4">Вывод:</p>
              <p className="text-3xl md:text-5xl font-black text-white leading-tight">Ты играешь не только против врагов…<br/><span className="text-red-500">но и против системы</span></p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Section 4 */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-20 tracking-tight">Причины <br/><span className="text-zinc-600 text-3xl md:text-5xl">(которые тебя бесят)</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -10, scale: 1.02 }} className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group shadow-lg">
              <div className="text-6xl mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">🤡</div>
              <h3 className="text-3xl font-bold text-white mb-4">1. Тиммейты</h3>
              <p className="text-zinc-400 text-xl">Ты стараешься, они — нет</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -10, scale: 1.02 }} className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 group shadow-lg">
              <div className="text-6xl mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">🌋</div>
              <h3 className="text-3xl font-bold text-white mb-4">2. Тильт</h3>
              <p className="text-zinc-400 text-xl">После 2 поражений мозг отключается</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -10, scale: 1.02 }} className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group shadow-lg">
              <div className="text-6xl mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">👑</div>
              <h3 className="text-3xl font-bold text-white mb-4">3. Переоценка себя</h3>
              <p className="text-zinc-400 text-xl">"Я всё делаю правильно" — нет 😄</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -10, scale: 1.02 }} className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group shadow-lg">
              <div className="text-6xl mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">🎲</div>
              <h3 className="text-3xl font-bold text-white mb-4">4. Система матчмейкинга</h3>
              <p className="text-zinc-400 text-xl">Иногда она просто говорит: "нет"</p>
            </motion.div>
          </div>
        </FadeIn>
      </section>

      {/* Section 5 */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="bg-red-950/20 p-10 md:p-16 rounded-[3rem] border border-red-900/30 relative overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.05)]">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-red-500 transform rotate-12">
              <Gamepad2 size={300} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12 relative z-10">Типичный матч:</h2>
            
            <div className="space-y-6 text-xl md:text-2xl text-zinc-300 relative z-10 font-mono bg-black/50 p-8 rounded-2xl border border-red-900/50">
              <p className="text-red-400">&gt; Мид умер 3 раза за 5 минут</p>
              <p className="text-orange-400">&gt; Оффлейнер ушёл в лес</p>
              <p className="text-yellow-400">&gt; Саппорт купил дагон</p>
              <p className="text-zinc-500">&gt; Керри пишет "gg" на 10 минуте</p>
            </div>
            
            <div className="mt-16 relative z-10 text-center">
              <p className="text-3xl text-zinc-400">И ты такой:</p>
              <p className="text-4xl md:text-5xl font-black text-white mt-4 italic">"Ну щас затащу..."</p>
              
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 0 }}
                className="mt-12 inline-block bg-black px-8 py-4 rounded-2xl border border-zinc-800 transform rotate-3 shadow-xl"
              >
                <p className="text-2xl text-zinc-400">Спойлер: <span className="text-red-500 font-black text-4xl ml-2">нет 😄</span></p>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Section 6 */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-20 tracking-tight">Популярные способы<br/><span className="text-red-500 text-3xl md:text-5xl mt-4 block">(которые НЕ работают)</span></h2>
          
          <div className="space-y-6">
            {[
              "Смотреть гайды про «как апнуть 10к ммр»",
              "Играть 10 игр подряд без перерыва",
              "Винить всех вокруг",
              "Менять роли каждую игру",
              "Играть «на расслабоне» в ранкеде"
            ].map((text, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 20, scale: 1.02 }}
                className="flex items-center gap-6 bg-zinc-900/80 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 border border-red-500/20">
                  <Trash2 size={24} />
                </div>
                <p className="text-xl md:text-2xl text-zinc-400 strike-through line-through decoration-red-500/50 decoration-4">{text}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Section 7 */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-20 tracking-tight">Если серьёзно <br/><span className="text-green-500 text-3xl md:text-5xl mt-4 block">(чуть-чуть пользы)</span></h2>
          
          <div className="bg-green-950/20 p-10 md:p-16 rounded-[3rem] border border-green-900/30 shadow-[0_0_50px_rgba(34,197,94,0.05)]">
            <div className="space-y-8">
              {[
                "Играть 1–2 роли",
                "Пул из 2–3 героев",
                "Не играть в тильте",
                "Делать перерывы",
                "Не писать в чат 😄"
              ].map((text, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 border border-green-500/20">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-2xl md:text-3xl font-medium text-zinc-200">{text}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 pt-12 border-t border-green-900/50 text-center">
              <p className="text-2xl text-zinc-500 mb-4">Важная мысль:</p>
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">Это может дать +200–300 ммр…</p>
              <p className="text-2xl text-zinc-500">но не спасёт от системы полностью</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Section 8 */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tight">Ты тратишь нервы… <br/><span className="text-zinc-700 mt-4 block">ради цифры</span></h2>
          
          <div className="text-3xl md:text-4xl font-bold text-zinc-500 space-y-6 mb-20">
            <p>Ты злишься</p>
            <p>Ты устаёшь</p>
            <p>Ты споришь с рандомами в интернете</p>
          </div>
          
          <p className="text-4xl md:text-5xl font-black text-white mb-12">Ради чего?</p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex flex-col items-start gap-6 text-3xl md:text-4xl font-mono bg-zinc-900/80 p-10 rounded-[2rem] border border-zinc-800 shadow-2xl"
          >
            <p className="text-green-500">👉 +25 ммр</p>
            <p className="text-red-500">👉 -25 ммр</p>
            <p className="text-zinc-600">👉 и так по кругу</p>
          </motion.div>
        </FadeIn>
      </section>

      {/* Section 9 */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tight">Как реально поднять "свой рейтинг"</h2>
          
          <div className="text-3xl md:text-4xl text-zinc-400 space-y-6 font-medium">
            <p>Есть один способ…</p>
            <p>самый эффективный</p>
            <motion.p 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              className="text-5xl md:text-7xl font-black text-green-500 mt-12 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              100% винрейт
            </motion.p>
          </div>
          
          <div className="mt-32 animate-bounce">
            <ChevronDown size={64} className="mx-auto text-zinc-700" />
          </div>
        </FadeIn>
      </section>

      {/* Section 10 */}
      <section className="min-h-screen flex flex-col items-center justify-center py-32 px-6 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/40 via-black to-black -z-10"></div>
        
        <FadeIn>
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-7xl md:text-9xl lg:text-[10rem] font-black text-red-600 mb-8 uppercase tracking-tighter drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]"
          >
            Удалить Dota 2
          </motion.h2>
          
          <p className="text-4xl text-zinc-500 mb-20 font-bold">Да-да 😄</p>
          
          <div className="bg-zinc-900/80 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-red-900/50 max-w-3xl mx-auto mb-20 text-left shadow-2xl">
            <p className="text-3xl font-black text-white mb-10">Самый быстрый способ:</p>
            <ul className="space-y-6 text-2xl text-zinc-300 mb-12 font-medium">
              <li className="flex items-center gap-4"><Skull className="text-red-500 shrink-0" size={32}/> не тильтовать</li>
              <li className="flex items-center gap-4"><Skull className="text-red-500 shrink-0" size={32}/> не страдать</li>
              <li className="flex items-center gap-4"><Skull className="text-red-500 shrink-0" size={32}/> не ругаться</li>
              <li className="flex items-center gap-4"><Skull className="text-red-500 shrink-0" size={32}/> не играть с "этими людьми"</li>
            </ul>
            
            <div className="bg-red-950/50 p-8 rounded-[2rem] border border-red-900 text-center transform rotate-1">
              <p className="text-3xl font-black text-white">👉 Просто удалить игру</p>
            </div>
          </div>
          
          <div className="text-3xl md:text-4xl text-zinc-300 space-y-6 mb-24 font-medium">
            <p className="text-zinc-600 mb-10 font-bold">И внезапно:</p>
            <p className="text-green-400 font-black drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">настроение лучше</p>
            <p className="text-green-400 font-black drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">времени больше</p>
            <p className="text-green-400 font-black drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">жизнь приятнее</p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              alert('Dota 2 успешно удалена (в твоих мечтах)');
            }}
            className="px-12 py-8 bg-red-600 hover:bg-red-700 text-white rounded-full font-black text-2xl md:text-4xl transition-all shadow-[0_0_60px_rgba(220,38,38,0.6)] hover:shadow-[0_0_100px_rgba(220,38,38,0.8)] uppercase tracking-widest"
          >
            Удалить Dota 2 <span className="block text-xl md:text-2xl mt-2 opacity-80">(сделай это)</span>
          </motion.button>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-zinc-900 bg-black">
        <div className="flex flex-col items-center justify-center gap-6">
          <Heart className="text-red-600" fill="currentColor" size={32} />
          <p className="text-zinc-500 text-xl font-medium">Этот гайд был написан<br/>человеком, который всё это пережил</p>
          <p className="text-2xl font-black text-white tracking-[0.3em] mt-4">ЛЁХАIMMERSION</p>
        </div>
      </footer>
    </div>
  );
}
