"use client";

import React from 'react';
import Header from '@/components/Header';
import { ThumbsUp, ThumbsDown, Star, Share2, MoreHorizontal, MessageSquare } from 'lucide-react';

export default function VideoDetail({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen pt-16 bg-white">
      <Header />
      
      <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Video & Comments */}
        <div className="lg:col-span-3">
          {/* Video Player Placeholder */}
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
              <div className="w-1/3 h-full bg-brand-pink" />
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-4">
            <h1 className="text-xl font-bold text-gray-900">
              【1080P+】这大概是 2024 年最震撼的视觉盛宴了 | 极致画质体验
            </h1>
            <div className="flex items-center justify-between mt-3 text-sm text-gray-500 border-b border-gray-100 pb-4">
              <div className="flex items-center space-x-4">
                <span>124.5万播放</span>
                <span>2024-04-07 16:30</span>
              </div>
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-1 hover:text-brand-pink transition-colors">
                  <ThumbsUp size={18} />
                  <span>5.2万</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-brand-pink transition-colors">
                  <ThumbsDown size={18} />
                  <span>不喜欢</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-brand-pink transition-colors">
                  <Star size={18} />
                  <span>1.8万</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-brand-pink transition-colors">
                  <Share2 size={18} />
                  <span>分享</span>
                </button>
              </div>
            </div>

            {/* Author & Description */}
            <div className="mt-6 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/seed/user/100/100" alt="Avatar" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">科技探险家</h3>
                    <p className="text-xs text-gray-500">2.4万粉丝 • 120视频</p>
                  </div>
                  <button className="px-6 py-1.5 bg-brand-pink text-white rounded-full text-sm font-medium hover:bg-brand-pink_hover transition-colors">
                    + 关注
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  本视频采用顶级设备拍摄，耗时三个月后期制作。希望大家能喜欢这种视觉冲击力。
                  喜欢的话记得三连支持一下！
                  素材来源：个人拍摄
                  音乐：Lofi Hip Hop
                </p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="text-lg font-bold flex items-center mb-6">
              2,845 评论
            </h2>
            <div className="flex space-x-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0" />
              <div className="flex-1">
                <textarea 
                  placeholder="发一条友善的评论" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-pink text-sm h-24"
                />
                <div className="mt-2 flex justify-end">
                  <button className="px-6 py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:opacity-90">
                    发表评论
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Related Videos */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-bold mb-4">相关推荐</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex space-x-3 group cursor-pointer">
                <div className="relative w-40 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                  <img src={`https://picsum.photos/seed/rel-${i}/200/112`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/60 text-white text-[10px] rounded">12:30</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium line-clamp-2 leading-tight group-hover:text-brand-pink">
                    推荐视频标题内容示例 - 第 {i} 个视频
                  </h3>
                  <p className="mt-1 text-[11px] text-gray-500">科技UP主</p>
                  <p className="text-[11px] text-gray-500">12.5万播放 • 2天前</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
