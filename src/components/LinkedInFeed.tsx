import { motion } from "framer-motion";
import { Linkedin, Heart, MessageCircle, ExternalLink, CalendarDays, RefreshCcw } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import postsData from "@/data/linkedin-posts.json";

export const LinkedInFeed = () => {
  return (
    <div className="space-y-6">
      {/* Synced Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-blue-500/5 border border-blue-500/10 rounded-xl mb-4">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
          <CheckCircle2 className="w-3 h-3" />
          LinkedIn Feed Synced
        </div>
        <div className="text-[10px] font-bold text-zinc-500 italic flex items-center gap-2">
          Last updated: 5 May 2025
          <RefreshCcw className="w-2.5 h-2.5 animate-spin-slow" />
        </div>
      </div>

      {postsData.map((post, i) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-6 border-blue-500/10 hover:border-blue-500/40 transition-all flex flex-col relative group overflow-hidden"
        >
          {/* Techy Accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
          
          {/* Header */}
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Chaitanya Kumar Sahu</h4>
                <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
                  <CalendarDays className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>
            <a href={post.url} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-zinc-500 hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Body Text */}
          <p className="text-sm text-zinc-300 leading-relaxed mb-6 flex-1 whitespace-pre-wrap relative z-10 font-medium">
            {post.text.split(/(#[a-zA-Z0-9_]+)/g).map((part, index) => 
              part.startsWith('#') 
                ? <span key={index} className="text-blue-400 font-bold hover:underline cursor-pointer">{part}</span> 
                : part
            )}
          </p>

          {/* Footer (Engagement) */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/5 text-xs font-black text-zinc-500 relative z-10">
            <div className="flex items-center gap-2 hover:text-pink-400 transition-colors cursor-pointer group/likes">
              <Heart className="w-4 h-4 group-hover/likes:fill-pink-400" />
              <span>{post.likes} <span className="hidden sm:inline">Likes</span></span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer group/comments">
              <MessageCircle className="w-4 h-4 group-hover/comments:fill-blue-400" />
              <span>{post.comments} <span className="hidden sm:inline">Comments</span></span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
