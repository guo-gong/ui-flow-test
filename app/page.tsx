"use client";

import React from 'react';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { ChevronRight, ChevronLeft, RefreshCw } from 'lucide-react';

const categories = [
  "番剧", "国创", "综艺", "动画", "游戏", "娱乐", "生活", "科技", "时尚", "知识", "美食", "动物园", "汽车", "运动", "电影", "电视剧", "纪录片"
];

const mockVideos = [
  { id: '1', title: '【4K】2024最美夜色，走进不一样的上海', author: '夜色摄影师', views: '125.4万', duration: '08:45', date: '2小时前', thumbnail: 'https://picsum.photos/seed/v1/400/225' },
  { id: '2', title: '全网首发！新款电脑开箱评测', author: '数码达人', views: '89.2万', duration: '15:20', date: '5小时前', thumbnail: 'https://picsum.photos/seed/v2/400/225' },
  { id: '3', title: '猫咪迷惑行为大赏，看完笑翻了', author: '萌宠频道', views: '243.1万', duration: '05:30', date: '1天前', thumbnail: 'https://picsum.photos/seed/v3/400/225' },
  { id: '4', title: '挑战100元吃遍北京路，撑哭了', author: '美食探店', views: '56.7万', duration: '12:15', date: '3小时前', thumbnail: 'https://picsum.photos/seed/v4/400/225' },
  { id: '5', title: '十分钟掌握React最新特性', author: '前端小哥', views: '45.8万', duration: '10:00', date: '昨天', thumbnail: 'https://picsum.photos/seed/v5/400/225' },
  { id: '6', title: '绝美川西自驾游记，人生必去系列', author: '旅行者阿杰', views: '32.1万', duration: '22:40', date: '2天前', thumbnail: 'https://picsum.photos/seed/v6/400/225' },
  { id: '7', title: '【科普】为什么宇宙一直在膨胀？', author: '科学探索者', views: '78.5万', duration: '08:12', date: '4小时前', thumbnail: 'https://picsum.photos/seed/v7/400/225' },
  { id: '8', title: '新手小白必看的健身房器械指南', author: '肌肉大叔', views: '11.2万', duration: '18:30', date: '3天前', thumbnail: 'https://picsum.photos/seed/v8/400/225' },
  { id: '9', title: '深夜食堂：手把手教你做红烧肉', author: '中华小当家', views: '95.4万', duration: '06:50', date: '昨天', thumbnail: 'https://picsum.photos/seed/v9/400/225' },
  { id: '10', title: '英雄联盟S14赛季全球总决赛集锦', author: '电竞速报', views: '210.3万', duration: '14:25', date: '12小时前', thumbnail: 'https://picsum.photos/seed/v10/400/225' },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-100 bg-white">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar flex-1">
          <div className="flex flex-col items-center min-w-[40px] cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors">
              <RefreshCw size={20} />
            </div>
            <span className="text-[11px] mt-1 text-gray-700">动态</span>
          </div>
          <div className="w-[1px] h-10 bg-gray-200 mx-2" />
          <div className="flex items-center space-x-4">
            {categories.map((cat) => (
              <a key={cat} href="#" className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">
                {cat}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-6 pl-4 border-l border-gray-200 ml-4 text-[13px] text-gray-500 whitespace-nowrap">
          <a href="#" className="hover:text-brand-pink">专栏</a>
          <a href="#" className="hover:text-brand-pink">活动</a>
          <a href="#" className="hover:text-brand-pink">社区中心</a>
        </div>
      </div>

      {/* Hero Content (Carousel & Top Grid) */}
      <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Carousel Placeholder */}
        <div className="lg:col-span-2 relative aspect-video lg:aspect-auto rounded-xl overflow-hidden bg-gray-300 shadow-lg">
          <img 
            src="https://picsum.photos/seed/hero/800/450" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
            <h2 className="text-xl font-bold mb-2">2024 年度最受关注 UP 主名单揭晓！</h2>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-white opacity-100" />
              <div className="w-2 h-2 rounded-full bg-white opacity-40" />
              <div className="w-2 h-2 rounded-full bg-white opacity-40" />
            </div>
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 text-white rounded-full hover:bg-black/40">
            <ChevronLeft size={24} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 text-white rounded-full hover:bg-black/40">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Top 6 Videos */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {mockVideos.slice(0, 6).map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>

      {/* Main Video Grid */}
      <div className="max-w-[1440px] mx-auto px-6 py-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold flex items-center">
            <RefreshCw size={24} className="mr-2 text-brand-blue" />
            推荐
          </h2>
          <button className="flex items-center text-sm text-gray-500 hover:text-brand-pink transition-colors px-3 py-1.5 border border-gray-200 rounded-lg">
            <RefreshCw size={14} className="mr-2" />
            换一换
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {mockVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
          {mockVideos.map((video) => (
            <VideoCard key={`dup-${video.id}`} {...video} id={`dup-${video.id}`} />
          ))}
        </div>
      </div>
    </main>
  );
}
