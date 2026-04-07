"use client";

import React from 'react';
import { Play, List } from 'lucide-react';
import Link from 'next/link';

interface VideoCardProps {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
  views: string;
  duration: string;
  date: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, thumbnail, title, author, views, duration, date }) => {
  return (
    <Link href={`/video/${id}`} className="group cursor-pointer block">
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Play size={20} className="text-white fill-white ml-1" />
          </div>
        </div>
        {/* Bottom bar info */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between text-white text-[10px]">
          <span className="flex items-center"><Play size={10} className="mr-1" /> {views}</span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-2">
        <h3 className="text-[14px] font-medium line-clamp-2 text-gray-900 group-hover:text-brand-pink transition-colors leading-snug">
          {title}
        </h3>
        <div className="mt-1.5 flex items-center text-[12px] text-gray-500 space-x-1">
          <span className="hover:text-brand-pink">{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
