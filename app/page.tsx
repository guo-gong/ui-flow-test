"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { ChevronRight, ChevronLeft, RefreshCw, Trophy, Flame, Play, Clock, Monitor, Gamepad2, Music, Ghost, Smartphone, Palette } from 'lucide-react';

const categories = [
  "番剧", "国创", "综艺", "动画", "游戏", "娱乐", "生活", "科技", "时尚", "知识", "美食", "动物园", "汽车", "运动", "电影", "电视剧", "纪录片"
];

const mockVideos = [
  { id: '1', title: '【4K】2024最美夜色，走进不一样的上海', author: '夜色摄影师', views: '125.4万', duration: '08:45', date: '2小时前', thumbnail: 'https://picsum.photos/seed/v1/400/225' },
  { id: '2', title: '全网首发！新款电脑开箱评测 - 性能炸裂', author: '数码达人', views: '89.2万', duration: '15:20', date: '5小时前', thumbnail: 'https://picsum.photos/seed/v2/400/225' },
  { id: '3', title: '猫咪迷惑行为大赏，看完笑翻了', author: '萌宠频道', views: '243.1万', duration: '05:30', date: '1天前', thumbnail: 'https://picsum.photos/seed/v3/400/225' },
  { id: '4', title: '挑战100元吃遍北京路，撑哭了', author: '美食探店', views: '56.7万', duration: '12:15', date: '3小时前', thumbnail: 'https://picsum.photos/seed/v4/400/225' },
  { id: '5', title: '十分钟掌握React最新特性，小白也能听懂', author: '前端小哥', views: '45.8万', duration: '10:00', date: '昨天', thumbnail: 'https://picsum.photos/seed/v5/400/225' },
  { id: '6', title: '绝美川西自驾游记，人生必去系列', author: '旅行者阿杰', views: '32.1万', duration: '22:40', date: '2天前', thumbnail: 'https://picsum.photos/seed/v6/400/225' },
  { id: '7', title: '【科普】为什么宇宙一直在膨胀？', author: '科学探索者', views: '78.5万', duration: '08:12', date: '4小时前', thumbnail: 'https://picsum.photos/seed/v7/400/225' },
  { id: '8', title: '新手小白必看的健身房器械指南', author: '肌肉大叔', views: '11.2万', duration: '18:30', date: '3天前', thumbnail: 'https://picsum.photos/seed/v8/400/225' },
  { id: '9', title: '深夜食堂：手把手教你做顶级红烧肉', author: '中华小当家', views: '95.4万', duration: '06:50', date: '昨天', thumbnail: 'https://picsum.photos/seed/v9/400/225' },
  { id: '10', title: '英雄联盟S14赛季全球总决赛集锦', author: '电竞速报', views: '210.3万', duration: '14:25', date: '12小时前', thumbnail: 'https://picsum.photos/seed/v10/400/225' },
  { id: '11', title: '【原神】4.5版本全角色抽取建议', author: '提瓦特助手', views: '52.1万', duration: '12:30', date: '1小时前', thumbnail: 'https://picsum.photos/seed/v11/400/225' },
  { id: '12', title: '世界级钢琴演奏：贝多芬第九交响曲', author: '古典音乐馆', views: '15.6万', duration: '45:00', date: '4天前', thumbnail: 'https://picsum.photos/seed/v12/400/225' },
];

const sidebarItems = [
  { icon: Flame, label: "热门", color: "text-red-500" },
  { icon: Clock, label: "历史", color: "text-blue-400" },
  { icon: Gamepad2, label: "游戏", color: "text-green-500" },
  { icon: Music, label: "音乐", color: "text-orange-400" },
  { icon: Monitor, label: "科技", color: "text-cyan-500" },
  { icon: Palette, label: "艺术", color: "text-purple-400" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("推荐");

  return (
    <main className="min-h-screen pt-16 bg-white">
      <Header />

      {/* Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-4 flex items-center justify-between border-b border-gray-100 sticky top-16 z-30 bg-white">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar flex-1">
          <div className="flex flex-col items-center min-w-[40px] cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors">
              <RefreshCw size={20} />
            </div>
            <span className="text-[11px] mt-1 text-gray-700">动态</span>
          </div>
          <div className="w-[1px] h-10 bg-gray-200 mx-2 flex-shrink-0" />
          <div className="flex items-center space-x-2 lg:space-x-3">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs transition-colors ${activeCategory === cat ? 'bg-brand-pink text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 pl-4 border-l border-gray-200 ml-4 text-[13px] text-gray-500 whitespace-nowrap">
          <a href="#" className="hover:text-brand-pink">专栏</a>
          <a href="#" className="hover:text-brand-pink">活动</a>
          <a href="#" className="hover:text-brand-pink">社区中心</a>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-6 flex">
        {/* Left Sidebar (Desktop Only) */}
        <aside className="hidden xl:flex flex-col w-16 mr-6 space-y-8 sticky top-40 h-fit">
          {sidebarItems.map((item) => (
            <button key={item.label} className="flex flex-col items-center group">
              <div className={`p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors ${item.color}`}>
                <item.icon size={24} />
              </div>
              <span className="text-[10px] mt-1 text-gray-500 group-hover:text-brand-pink">{item.label}</span>
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          {/* Hero Content (Carousel & Top Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
            {/* Carousel */}
            <div className="lg:col-span-2 relative aspect-video lg:aspect-auto rounded-xl overflow-hidden bg-gray-900 shadow-xl group">
              <img 
                src="https://picsum.photos/seed/hero-bili/800/450" 
                alt="Hero" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="inline-block px-2 py-0.5 bg-brand-pink text-white text-[10px] rounded mb-3 w-fit">活动</div>
                <h2 className="text-xl lg:text-2xl font-bold mb-2">2024 年度最受关注 UP 主名单揭晓！</h2>
                <p className="text-sm text-gray-300 line-clamp-1 mb-4">快来看看你关注的创作者是否上榜，还有神秘礼券等你领取。</p>
                <div className="flex space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === 0 ? 'bg-white w-4' : 'bg-white/40'}`} />
                  ))}
                </div>
              </div>
              <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronLeft size={24} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Top 6 Videos */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-6">
              {mockVideos.slice(0, 6).map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>

          {/* Section: Trending */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Flame size={24} className="mr-2 text-orange-500" />
                热门推荐
              </h2>
              <button className="flex items-center text-sm text-gray-500 hover:text-brand-pink transition-colors px-3 py-1.5 border border-gray-200 rounded-lg group">
                <RefreshCw size={14} className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
                换一换
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 lg:gap-x-6 gap-y-10">
              {mockVideos.map((video) => (
                <VideoCard key={`trend-${video.id}`} {...video} id={`trend-${video.id}`} />
              ))}
            </div>
          </div>

          {/* Section: Category (Game) */}
          <div className="mb-12 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Gamepad2 size={24} className="mr-2 text-green-500" />
                游戏大厅
              </h2>
              <a href="#" className="text-sm text-brand-blue flex items-center hover:opacity-80">
                查看更多 <ChevronRight size={16} />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 lg:gap-x-6 gap-y-10">
              {mockVideos.slice(6, 11).map((video) => (
                <VideoCard key={`game-${video.id}`} {...video} id={`game-${video.id}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

