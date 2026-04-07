"use client";

import React from 'react';
import Header from '@/components/Header';
import { Filter, SlidersHorizontal } from 'lucide-react';

const searchFilters = ["综合", "视频", "番剧", "影视", "直播", "专栏", "用户"];
const sortOptions = ["默认排序", "播放多", "新发布", "弹幕多"];

export default function SearchPage() {
  return (
    <main className="min-h-screen pt-16 bg-white">
      <Header />
      
      <div className="max-w-[1100px] mx-auto px-6 py-6">
        {/* Tabs */}
        <div className="flex items-center space-x-8 border-b border-gray-100 mb-6">
          {searchFilters.map((filter, i) => (
            <button key={filter} className={`pb-3 text-sm font-medium transition-colors relative ${i === 0 ? 'text-brand-pink' : 'text-gray-600 hover:text-brand-pink'}`}>
              {filter}
              {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-pink" />}
            </button>
          ))}
        </div>

        {/* Sort & Filter Bar */}
        <div className="flex items-center justify-between mb-8 text-[13px] text-gray-500">
          <div className="flex items-center space-x-6">
            {sortOptions.map((opt, i) => (
              <button key={opt} className={i === 0 ? 'text-brand-pink' : 'hover:text-brand-pink'}>
                {opt}
              </button>
            ))}
          </div>
          <button className="flex items-center space-x-1 hover:text-brand-pink">
            <SlidersHorizontal size={14} />
            <span>筛选</span>
          </button>
        </div>

        {/* Results List */}
        <div className="space-y-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex space-x-4 group cursor-pointer">
              <div className="relative w-64 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <img src={`https://picsum.photos/seed/search-${i}/400/225`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <span className="absolute bottom-2 right-2 px-1 py-0.5 bg-black/60 text-white text-xs rounded">15:45</span>
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-brand-pink transition-colors line-clamp-2">
                    这是一条搜索结果的标题示例，展示了搜索结果页面的布局效果 {i}
                  </h3>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1 hover:text-brand-pink">
                      UP主: 某位知名的UP
                    </span>
                    <span>•</span>
                    <span>2024-03-20</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex items-center space-x-4">
                  <span>12.4万播放</span>
                  <span>1523弹幕</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
