"use client";

import React from 'react';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { Settings, Share2, Mail } from 'lucide-react';

const userTabs = ["主页", "动态", "投稿", "合集和列表", "收藏", "订阅", "设置"];

export default function UserProfile() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <Header />
      
      {/* Banner */}
      <div className="w-full h-48 bg-gradient-to-r from-blue-300 to-pink-300 relative">
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* User Info & Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-[1280px] mx-auto px-6 relative">
          {/* Info Section */}
          <div className="flex items-end -mt-10 pb-6 relative z-10">
            <div className="w-20 h-20 rounded-full border-4 border-white bg-white overflow-hidden shadow-md">
              <img src="https://picsum.photos/seed/user-main/160/160" className="w-full h-full object-cover" />
            </div>
            <div className="ml-6 mb-2">
              <h1 className="text-xl font-bold text-gray-900 flex items-center">
                超级极客 UP 主
                <span className="ml-2 px-1.5 py-0.5 bg-brand-pink text-white text-[10px] rounded">Lv6</span>
              </h1>
              <p className="mt-1 text-xs text-gray-500">这是一段个性签名，欢迎关注我的频道！</p>
            </div>
            <div className="ml-auto mb-2 flex items-center space-x-3 text-xs">
              <div className="text-center">
                <div className="font-bold">1.2万</div>
                <div className="text-gray-400">关注</div>
              </div>
              <div className="text-center">
                <div className="font-bold">25.8万</div>
                <div className="text-gray-400">粉丝</div>
              </div>
              <div className="text-center">
                <div className="font-bold">124万</div>
                <div className="text-gray-400">获赞</div>
              </div>
              <button className="px-6 py-2 bg-brand-pink text-white rounded-lg font-medium hover:bg-brand-pink_hover transition-colors ml-4">
                + 关注
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center space-x-8 text-[13px]">
            {userTabs.map((tab, i) => (
              <button key={tab} className={`pb-3 transition-colors relative ${i === 0 ? 'text-brand-pink font-bold' : 'text-gray-600 hover:text-brand-pink'}`}>
                {tab}
                {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-pink" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content: User Videos */}
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-900">我的投稿</h2>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <button className="text-brand-blue">最新发布</button>
              <button className="hover:text-brand-blue">最多播放</button>
              <button className="hover:text-brand-blue">最多收藏</button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <VideoCard 
                key={i} 
                id={`${i}`}
                title={`用户上传的精彩视频示例 - 视频 ${i}`}
                author="超级极客 UP 主"
                views="2.4万"
                duration="08:20"
                date="3天前"
                thumbnail={`https://picsum.photos/seed/user-v-${i}/400/225`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
