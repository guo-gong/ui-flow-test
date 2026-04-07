"use client";

import React from 'react';
import { Search, User, MessageCircle, Star, History, Clock, Tv, Upload, Gamepad2, ShoppingBag, Trophy, Flame } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 lg:px-6 bg-white border-b border-gray-100 shadow-sm">
      {/* Left: Logo & Home */}
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Link href="/" className="text-brand-pink text-2xl font-bold italic tracking-tighter hover:opacity-80 transition-opacity">
          bilibili
        </Link>
        <nav className="hidden xl:flex items-center space-x-4 text-gray-700 text-[14px]">
          <Link href="/" className="hover:text-brand-pink flex items-center"><Tv size={18} className="mr-1" /> 首页</Link>
          <a href="#" className="hover:text-brand-pink">番剧</a>
          <a href="#" className="hover:text-brand-pink">直播</a>
          <a href="#" className="hover:text-brand-pink">游戏中心</a>
          <a href="#" className="hover:text-brand-pink">会员购</a>
          <a href="#" className="hover:text-brand-pink">漫画</a>
          <a href="#" className="hover:text-brand-pink">赛事</a>
        </nav>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search size={16} />
          </div>
          <input 
            type="text" 
            placeholder="Search Bilibili..." 
            className="w-full h-9 pl-10 pr-12 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-brand-pink transition-all text-sm"
          />
          <button className="absolute right-2 top-1 h-7 px-3 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded text-xs transition-colors">
            搜索
          </button>
        </div>
      </div>

      {/* Right: Icons & Profile */}
      <div className="flex items-center space-x-3 lg:space-x-5 text-gray-600">
        <div className="flex items-center space-x-3 lg:space-x-4">
          <div className="relative group cursor-pointer flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <User size={20} />
            </div>
            <span className="text-[10px] mt-0.5 whitespace-nowrap">登录</span>
          </div>
          
          <button className="hover:text-brand-pink flex flex-col items-center group">
            <div className="relative">
              <Flame size={20} className="group-hover:animate-pulse" />
              <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-[8px] px-1 rounded-full border border-white">Hot</span>
            </div>
            <span className="text-[10px] mt-0.5">大会员</span>
          </button>

          <button className="hover:text-brand-pink flex flex-col items-center">
            <MessageCircle size={20} />
            <span className="text-[10px] mt-0.5">消息</span>
          </button>
          
          <button className="hover:text-brand-pink flex flex-col items-center hidden sm:flex">
            <Star size={20} />
            <span className="text-[10px] mt-0.5">收藏</span>
          </button>
          
          <button className="hover:text-brand-pink flex flex-col items-center hidden sm:flex">
            <History size={20} />
            <span className="text-[10px] mt-0.5">历史</span>
          </button>
        </div>
        
        <button className="px-4 py-2 bg-brand-pink text-white rounded-lg flex items-center space-x-1 hover:bg-brand-pink_hover transition-shadow hover:shadow-md text-sm font-medium">
          <Upload size={16} />
          <span className="hidden lg:inline">投稿</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
