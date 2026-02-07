import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';

// --- Content ---
const letterSegments = [
  {
    text: "I’m not writing this with a plan. I just want to say it the way it feels.",
    type: 'opening'
  },
  {
    text: "I’ve been quiet about this for a long time. Not because I didn’t feel anything, but because I kept thinking maybe some feelings are better left unsaid. Maybe they settle down on their own. Maybe they don’t need words.",
    type: 'regular'
  },
  {
    text: "But this one stayed.",
    type: 'emphasis'
  },
  {
    text: "I kept stopping myself, calling it overthinking. I trusted time to fix it. It just stayed.",
    type: 'regular'
  },
  {
    text: "I don’t know when it began. I don’t have a clear starting point. What I do know is that, during a time when I felt emotionally distant from everything, you made things feel lighter, more real, without me trying.",
    type: 'regular'
  },
  {
    text: "We’re different, and I’ve always been aware of that. Strangely, it never felt wrong to me. If anything, it’s something I appreciated. At the same time, it’s also what made me hesitate and question myself.",
    type: 'regular'
  },
  {
    text: "I doubt myself a lot. I always think there are people better than me — more confident, more certain. That’s probably why I stayed quiet for so long. Even now, I’m not asking for anything. I just didn’t want silence to say something that wasn’t true.",
    type: 'regular'
  },
  {
    text: "So here it is: at some point, without trying to, I started caring about you more than I expected.",
    type: 'emphasis'
  },
  {
    text: "Whatever this means to you is entirely yours. There’s no pressure here and no hidden expectation. I respect you enough to let it be whatever it needs to be.",
    type: 'regular'
  },
  {
    text: "This wasn’t sudden or confusing. I gave myself time. I questioned it. I tried to step away from it. But it stayed — quietly — and that told me it mattered.",
    type: 'regular'
  },
  {
    text: "And yes, I did get attached.",
    type: 'emphasis'
  },
  {
    text: "When I was emotionally Numb and don't know what to do next...",
    type: 'regular'
  },
  {
    text: "then you were the first person who made me feel alive again.",
    type: 'emphasis'
  },
  {
    text: "", // Placeholder for the final closure screen
    type: 'closing'
  }
];

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentSegment, setCurrentSegment] = useState(0);

  // --- Styles & Theme ---
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:wght@300;400;500;600&family=Homemade+Apple&display=swap');
    
    :root {
      /* Rich Mahogany & Gold Palette */
      --bg-color: #1a0b0b; 
      --bg-gradient: linear-gradient(to bottom, #1a0b0b, #2d1212);
      --text-color: #2c1810; /* Dark Ink Color for Paper */
      --paper-color: #f2ebe0; /* Parchment */
      --highlight-color: #ffbf80; /* Golden Amber */
      --accent-red: #8b0000; /* Wax Seal Red */
    }

    body, html {
      margin: 0;
      padding: 0;
      background-color: var(--bg-color);
      background-image: var(--bg-gradient);
      color: #e6dcca;
      font-family: 'Playfair Display', serif;
      overflow: hidden;
    }

    /* Subtle Texture Overlay */
    .texture-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 50;
        opacity: 0.4;
        background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
        mix-blend-mode: soft-light;
    }

    .paper-shadow {
      box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset;
    }
  `;

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <style>{styles}</style>

      <div className="texture-overlay" />
      <EmberBackground />

      <div className="relative z-10 w-full max-w-5xl p-6 flex flex-col items-center justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {!hasStarted ? (
            <OpeningPage key="opening" onStart={() => setHasStarted(true)} />
          ) : (
            <LetterReader 
              key="reader"
              currentSegment={currentSegment}
              setCurrentSegment={setCurrentSegment}
              segments={letterSegments}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Views ---

const OpeningPage = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      transition={{ duration: 1 }}
      className="text-center flex flex-col items-center justify-center"
    >
      <div className="w-[1px] h-16 bg-[#ffbf80] mb-8 opacity-40"></div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-5xl md:text-7xl font-normal text-[#f2ebe0] mb-6 leading-tight"
      >
        Words I've Been <br />
        <span className="italic text-[#d6c4b0] opacity-80">Holding Back</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button
          onClick={onStart}
          className="group relative px-12 py-5 bg-[#f2ebe0] text-[#2c1810] font-serif text-xl rounded-sm shadow-xl hover:bg-[#fff] transition-all duration-500 paper-shadow"
        >
          <span className="flex items-center gap-3">
             <Mail size={20} className="text-[#8b0000]" /> Open Letter
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
};

const LetterReader = ({ currentSegment, setCurrentSegment, segments }) => {
  // Logic check: isLast is only true when we are on the hidden trigger segment
  const isLast = currentSegment === segments.length - 1;

  const handleNext = () => {
    if (currentSegment < segments.length - 1) {
      setCurrentSegment(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSegment > 0) {
      setCurrentSegment(prev => prev - 1);
    }
  };

  return (
    <div className="w-full flex items-center justify-center gap-4 md:gap-8">
      
      {/* Previous Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: currentSegment > 0 ? 1 : 0, x: 0, pointerEvents: currentSegment > 0 ? 'auto' : 'none' }}
        onClick={handlePrev}
        className="p-3 rounded-full border border-[#ffbf80]/30 text-[#ffbf80] hover:bg-[#ffbf80]/10 transition-colors hidden md:block"
      >
        <ChevronLeft size={32} />
      </motion.button>

      {/* Main Letter Area */}
      <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center">
        
        {/* Progress Dots */}
        <div className="flex gap-2 mb-8">
          {segments.map((_, idx) => (
            <motion.div
              key={idx}
              animate={{ 
                scale: idx === currentSegment ? 1.2 : 0.8,
                opacity: idx === currentSegment ? 1 : 0.3,
                backgroundColor: idx === currentSegment ? "#ffbf80" : "#ab9898"
              }}
              className="w-2 h-2 rounded-full transition-all duration-300"
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <PaperLetter 
            key={currentSegment} 
            data={segments[currentSegment]} 
            isLast={isLast}
          />
        </AnimatePresence>

        {/* Mobile Navigation / Tap Area */}
        <div className="mt-8 flex gap-4 items-center justify-center w-full md:hidden">
             <button 
                onClick={handlePrev} 
                disabled={currentSegment === 0}
                className={`p-2 border border-[#ffbf80]/30 rounded-full text-[#ffbf80] ${currentSegment === 0 ? 'opacity-0' : 'opacity-100'}`}
             >
                <ChevronLeft size={24} />
             </button>
             <button 
                onClick={handleNext}
                disabled={isLast}
                className={`px-6 py-2 bg-[#ffbf80]/10 border border-[#ffbf80]/30 rounded-full text-[#ffbf80] font-sans text-sm tracking-widest uppercase ${isLast ? 'opacity-0' : 'opacity-100'}`}
             >
                Tap to Continue
             </button>
        </div>

        {/* Desktop Hint */}
        {!isLast && (
           <motion.button
             onClick={handleNext}
             className="hidden md:block mt-8 px-8 py-3 border border-[#ffbf80]/40 text-[#ffbf80] font-sans text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-[#ffbf80]/10 hover:border-[#ffbf80] transition-all"
           >
             Continue Reading
           </motion.button>
        )}

      </div>

      {/* Next Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: !isLast ? 1 : 0, x: 0, pointerEvents: !isLast ? 'auto' : 'none' }}
        onClick={handleNext}
        className="p-3 rounded-full border border-[#ffbf80]/30 text-[#ffbf80] hover:bg-[#ffbf80]/10 transition-colors hidden md:block"
      >
        <ChevronRight size={32} />
      </motion.button>

    </div>
  );
};

const PaperLetter = ({ data, isLast }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scaleY: 0.1, // Start folded
        y: 20
      }}
      animate={{ 
        opacity: 1, 
        scaleY: 1, // Unfold
        y: 0 
      }}
      exit={{ 
        opacity: 0, 
        scale: 0.9,
        transition: { duration: 0.3 } 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        delay: 0.1 // Slight delay for the "new letter" feel
      }}
      className="w-full bg-[#f2ebe0] relative paper-shadow rounded-sm overflow-hidden"
    >
        {/* Paper Texture Pattern */}
        <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`
            }} 
        />
        
        {/* Fold Line (Visual Detail) */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10 z-10" />
        
        <div className="relative z-20 p-8 md:p-12 flex flex-col items-center justify-center min-h-[300px] text-center">
            
            {/* Typewriter/Ink Effect for Text */}
            {isLast ? (
                <ClosingContent />
            ) : (
                <TextContent data={data} />
            )}
            
        </div>
    </motion.div>
  );
};

const TextContent = ({ data }) => {
    let styleClass = "text-[#2c1810] text-xl md:text-3xl font-normal";
    
    if (data.type === 'opening') {
        styleClass = "text-[#8b0000] text-3xl md:text-4xl italic font-serif leading-tight";
    } else if (data.type === 'emphasis') {
        styleClass = "text-[#2c1810] text-2xl md:text-4xl font-semibold tracking-wide font-serif";
    }

    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className={`${styleClass} leading-relaxed font-serif`}
        >
            {data.text}
        </motion.p>
    );
};

const ClosingContent = () => {
    return (
        <div className="flex flex-col items-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-6xl md:text-8xl mb-6"
            >
                💌
            </motion.div>
            
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[#2c1810] text-2xl md:text-3xl font-serif italic mb-8"
            >
                That's everything I needed to say.
            </motion.p>
            
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ delay: 1, duration: 1 }}
                className="h-[2px] bg-[#8b0000] mb-8"
            />
            
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-[#593d3d] font-serif text-lg md:text-xl"
            >
                No matter what happens next,<br/>
                <span className="text-[#8b0000] font-semibold">I'm glad you know.</span>
            </motion.p>
        </div>
    );
};


// --- Background Effect (Reused Mahogany/Ember) ---
const EmberBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Deep Red/Orange Gradient Orbs */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.4, 0.3], 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#4a1212] blur-[150px] opacity-30" 
        />
        
        <motion.div 
             animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-10%] right-[10%] w-[70vw] h-[70vw] rounded-full bg-[#3d0e0e] blur-[160px] opacity-30" 
        />
        
        {/* Floating "Embers" */}
        {Array.from({ length: 20 }).map((_, i) => (
           <Ember key={i} delay={i * 0.5} /> 
        ))}
    </div>
  );
};

const Ember = ({ delay }) => {
    return (
        <motion.div
            initial={{ y: "110vh", opacity: 0, x: Math.random() * 100 + "vw" }}
            animate={{ 
                y: "-10vh", 
                opacity: [0, 0.8, 0],
                x: (Math.random() * 20 - 10) + "vw" // Slight drift
            }}
            transition={{ 
                duration: Math.random() * 15 + 15, 
                repeat: Infinity, 
                delay: delay,
                ease: "linear"
            }}
            className="absolute bg-[#ffcc99] rounded-full blur-[1px]"
            style={{ 
                width: Math.random() * 3 + 1 + 'px', 
                height: Math.random() * 3 + 1 + 'px' 
            }}
        />
    )
}

export default App;