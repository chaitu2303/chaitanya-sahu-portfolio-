"use client";

import { motion } from "framer-motion";
import { Heart, MessageSquare, Share2, ExternalLink, Linkedin } from "lucide-react";
import { useState } from "react";

const posts = [
  {
    id: 1,
    content: "🚀 Just completed my Cybersecurity Internship at Symbiosys Technologies! Conducted penetration testing on 5+ vulnerable VMs, identified critical misconfigurations, and delivered structured risk analysis reports. #CyberSecurity #Internship #VAPT",
    date: "3 hours ago",
    likes: 94,
    comments: 17,
    link: "https://www.linkedin.com/in/chaitanya-kumar-sahu",
  },
  {
    id: 2,
    content: "✅ Built a Full-Stack Student Freelance Marketplace using React Native + Node.js + MongoDB. Features JWT auth, real-time notifications, and an admin panel. #FullStack #ReactNative #NodeJS #OpenToWork",
    date: "2 days ago",
    likes: 128,
    comments: 31,
    link: "https://www.linkedin.com/in/chaitanya-kumar-sahu",
  },
  {
    id: 3,
    content: "🎯 Participated in Smart India Hackathon 2025! Amazing experience working with a team to solve real national challenges under pressure. #SIH2025 #Hackathon #Innovation",
    date: "1 week ago",
    likes: 74,
    comments: 22,
    link: "https://www.linkedin.com/in/chaitanya-kumar-sahu",
  },
];

export const SocialFeed = () => {
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  return (
    <div className="section-padding container px-4 mx-auto">
      <div className="text-center mb-14">
        <p className="section-subtitle">Professional Activity</p>
        <h2 className="section-title">LinkedIn <span className="text-gradient">Feed</span></h2>
        <p className="text-slate-400 mt-4 text-base max-w-xl mx-auto">Latest updates from my professional network.</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            {/* Author */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-white text-sm md:text-base">Chaitanya Kumar Sahu</p>
                <p className="text-xs text-slate-500">Full-Stack Developer · {post.date}</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6">{post.content}</p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div className="flex gap-5">
                <button
                  onClick={() => setLiked(p => ({ ...p, [post.id]: !p[post.id] }))}
                  className={`flex items-center gap-2 text-sm font-bold transition-colors ${liked[post.id] ? "text-red-400" : "text-slate-500 hover:text-red-400"}`}
                >
                  <Heart className={`w-4 h-4 ${liked[post.id] ? "fill-red-400" : ""}`} />
                  {post.likes + (liked[post.id] ? 1 : 0)}
                </button>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-400 cursor-pointer transition-colors">
                  <Share2 className="w-4 h-4" />
                </div>
              </div>
              <a href={post.link} target="_blank" className="flex items-center gap-2 text-indigo-400 text-xs font-bold hover:underline whitespace-nowrap">
                View on LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}

        <div className="text-center pt-4">
          <a href="https://www.linkedin.com/in/chaitanya-kumar-sahu" target="_blank" className="btn-secondary inline-flex items-center gap-2">
            <Linkedin className="w-5 h-5" /> Follow on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
