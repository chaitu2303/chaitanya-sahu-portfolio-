import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Maximize2, Loader2, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export const CertificateModal = ({ isOpen, onClose, pdfUrl, title }: Props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state and lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      document.documentElement.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
    }
    return () => {
      document.documentElement.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-8 bg-black/95 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`w-full ${isFullScreen ? 'max-w-[1400px] h-[95vh]' : 'max-w-5xl h-[85vh]'} bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300`}
          >
            {/* Responsive Header */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between px-5 py-4 sm:px-6 sm:py-5 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md relative z-20 w-full">
              <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
                <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate w-full pr-4 sm:pr-0" title={title}>
                  {title}
                </h3>
              </div>
              
              <div className="flex items-center gap-2 justify-end w-full sm:w-auto border-t border-white/5 sm:border-t-0 pt-3 sm:pt-0">
                {/* Fullscreen Toggle (Hidden on small mobile viewports) */}
                <button 
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="hidden sm:flex p-2.5 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white transition-all border border-transparent hover:border-white/10"
                  title="Toggle Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <a 
                  href={pdfUrl} 
                  download 
                  className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all border border-indigo-500/20 flex items-center justify-center"
                  title="Download Certificate"
                >
                  <Download className="w-5 h-5" />
                </a>
                <div className="w-px h-6 bg-white/10 mx-1.5" />
                <button 
                  onClick={onClose}
                  className="p-2.5 rounded-xl hover:bg-red-500/10 text-zinc-500 hover:text-red-400 transition-all border border-transparent hover:border-red-500/20 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer Body */}
            <div className="flex-1 bg-zinc-900/30 p-2 relative w-full h-full">
              {/* Loading State Overlay */}
              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-sm">
                  <div className="relative">
                    <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
                    <div className="absolute inset-0 blur-xl bg-indigo-500/20 animate-pulse" />
                  </div>
                  <p className="mt-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] animate-pulse">Decrypting Asset...</p>
                </div>
              )}
              
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full rounded-2xl bg-white/5 border border-white/5 shadow-2xl"
                onLoad={() => setIsLoading(false)}
                title={title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
