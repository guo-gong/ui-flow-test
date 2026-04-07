"use client";

import React from 'react';
import { Search, User, MessageCircle, Star, History, Clock, Tv, Upload } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 bg-white border-b border-gray-100 shadow-sm">
      {/* Left: Logo & Home */}
      <div className="flex items-center space-x-6">
        <div className="text-brand-pink text-2xl font-bold italic tracking-tighter">
          bilibili
        </div>
        <nav className="hidden md:flex items-center space-x-4 text-gray-600 text-sm">
          <a href="/" className="hover:text-brand-pink">首页</a>
          <a href="#" className="hover:text-brand-pink">番剧</a>
          <a href="#" className="hover:text-brand-pink">直播</a>
          <a href="#" className="hover:text-brand-pink">游戏中心</a>
        </nav>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full h-9 px-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-brand-pink transition-all text-sm"
          />
          <button className="absolute right-2 top-1.5 p-1 text-gray-500 hover:text-brand-pink">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Right: Icons & Profile */}
      <div className="flex items-center space-x-6 text-gray-600">
        <div className="flex items-center space-x-4">
          <button className="hover:text-brand-pink flex flex-col items-center">
            <User size={20} />
            <span className="text-[10px] mt-0.5">登录</span>
          </button>
          <button className="hover:text-brand-pink flex flex-col items-center">
            <MessageCircle size={20} />
            <span className="text-[10px] mt-0.5">消息</span>
          </button>
          <button className="hover:text-brand-pink flex flex-col items-center">
            <Star size={20} />
            <span className="text-[10px] mt-0.5">收藏</span>
          </button>
          <button className="hover:text-brand-pink flex flex-col items-center">
            <History size={20} />
            <span className="text-[10px] mt-0.5">历史</span>
          </button>
        </div>
        <button className="px-4 py-1.5 bg-brand-pink text-white rounded-lg flex items-center space-x-1 hover:bg-brand-pink_hover transition-colors text-sm">
          <Upload size={16} />
          <span>投稿</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
