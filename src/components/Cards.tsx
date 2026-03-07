import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Music, Eye, Globe, User, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { Asset } from '../types';

interface CardProps {
  asset: Asset;
  onClick?: () => void;
}

export const VideoCard: React.FC<CardProps> = ({ asset, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
    className="group relative overflow-hidden rounded-2xl bg-lg-dark aspect-video cursor-pointer"
  >
    <img 
      src={asset.thumbnail} 
      alt={asset.title} 
      className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-2 bg-lg-red rounded-full shadow-[0_0_15px_rgba(165,0,52,0.5)]">
          <Play size={16} fill="white" className="text-white" />
        </div>
        <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">Strategy Video</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{asset.title}</h3>
      <p className="text-sm text-white/60 line-clamp-2 mb-4">{asset.description}</p>
      <div className="flex items-center gap-2 text-xs text-white/40">
        <User size={12} />
        <span>{asset.author}</span>
      </div>
    </div>
  </motion.div>
);

export const AudioCard: React.FC<CardProps> = ({ asset, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="flex gap-6 items-center">
        <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden group">
          <img 
            src={asset.thumbnail} 
            alt={asset.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play size={24} fill="white" className="text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 bg-lg-red/10 rounded-lg">
              <Music size={14} className="text-lg-red" />
            </div>
            <span className="text-[10px] font-bold text-lg-red uppercase tracking-tighter">Leader's Philosophy Track</span>
          </div>
          <h3 className="text-lg font-bold mb-1">{asset.title}</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">{asset.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] text-zinc-400">
              <User size={10} />
              <span>{asset.author}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ImageCard: React.FC<CardProps> = ({ asset, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
    className="group relative overflow-hidden rounded-2xl bg-zinc-100 aspect-square cursor-pointer"
  >
    <img 
      src={asset.thumbnail} 
      alt={asset.title} 
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-2 bg-lg-red rounded-full shadow-[0_0_15px_rgba(165,0,52,0.5)]">
          <Eye size={16} className="text-white" />
        </div>
        <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">Vision Board</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{asset.title}</h3>
      <p className="text-xs text-white/70 mb-4">{asset.description}</p>
      <div className="flex items-center gap-2 text-[10px] text-white/40">
        <User size={10} />
        <span>{asset.author}</span>
      </div>
    </div>
  </motion.div>
);

export const WebCard: React.FC<CardProps> = ({ asset, onClick }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    onClick={onClick}
    className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden cursor-pointer"
  >
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={asset.thumbnail} 
        alt={asset.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-black/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={16} className="text-lg-red" />
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-2 mb-2">
        <Globe size={14} className="text-zinc-400" />
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Web Portfolio</span>
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-lg-red transition-colors">{asset.title}</h3>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-2">{asset.description}</p>
      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
          <User size={10} />
          <span>{asset.author}</span>
        </div>
        <button className="text-[10px] font-bold text-lg-red flex items-center gap-1">
          VIEW PROJECT <ChevronRight size={12} />
        </button>
      </div>
    </div>
  </motion.div>
);
