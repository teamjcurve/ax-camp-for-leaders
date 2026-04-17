import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoginScreenProps {
  onLogin: (id: string, password: string) => Promise<void>;
  error: string | null;
  isLoading: boolean;
} 
     
export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, error, isLoading }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id.trim() || !password.trim() || isLoading) return;
    onLogin(id.trim(), password);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950 px-4"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lg-red/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-8 md:p-10">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              AX Camp for Leaders
            </h1>
            <p className="text-sm text-zinc-500 mt-2 font-medium">
              접근하려면 로그인이 필요합니다
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="아이디"
                autoComplete="username"
                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 text-sm font-medium focus:outline-none focus:border-lg-red/50 focus:ring-1 focus:ring-lg-red/30 transition-all"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                autoComplete="current-password"
                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 text-sm font-medium focus:outline-none focus:border-lg-red/50 focus:ring-1 focus:ring-lg-red/30 transition-all"
              />
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-red-400 text-sm font-medium text-center"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading || !id.trim() || !password.trim()}
              className="w-full py-3.5 bg-lg-red text-white font-bold rounded-xl text-sm tracking-wide transition-all duration-300 hover:bg-lg-red/90 hover:shadow-lg hover:shadow-lg-red/20 disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  확인 중...
                </span>
              ) : (
                '로그인'
              )}
            </button>
          </form>
        </div>

        {/* Footer text */}
        <p className="text-center text-xs text-zinc-600 mt-6 font-medium tracking-wider">
          LG AI Research &middot; Augmenting Leadership with AI
        </p>
      </motion.div>
    </motion.div>
  );
};
