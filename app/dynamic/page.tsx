"use client";

import React from 'react';
import Header from '@/components/Header';
import { MessageSquare, Heart, Share2, MoreHorizontal, Image as ImageIcon } from 'lucide-react';

const mockPosts = [
  {
    id: 1,
    author: "科技探险家",
    avatar: "https://picsum.photos/seed/user1/100/100",
    time: "2小时前",
    content: "今天新买的相机到了，画质真的没话说！正在准备测评视频，大家期待一下！📸",
    image: "https://picsum.photos/seed/post1/600/400",
    likes: "1.2万",
    comments: 456
  },
  {
    id: 2,
    author: "数码达人",
    avatar: "https://picsum.photos/seed/user2/100/100",
    time: "5小时前",
    content: "分享一个最近发现的实用前端技巧：在 Next.js 中使用 Tailwind CSS 动画非常方便。详细代码如下...",
    likes: "892",
    comments: 124
  },
  {
    id: 3,
    author: "萌宠频道",
    avatar: "https://picsum.photos/seed/user3/100/100",
    time: "1天前",
    content: "家里的猫主子又在搞怪了，哈哈哈哈，真的看一次笑一次。你们家猫也这样吗？😺",
    image: "https://picsum.photos/seed/post2/600/400",
    likes: "5.4万",
    comments: 2103
  }
];

export default function DynamicPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <Header />
      
      <div className="max-w-[1280px] mx-auto px-6 py-8 flex gap-8">
        {/* Left: Feed */}
        <div className="flex-1 max-w-[800px]">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6">
            <textarea 
              placeholder="有什么想和大家分享的？" 
              className="w-full p-4 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-pink text-sm h-24"
            />
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-4 text-gray-500">
                <button className="flex items-center space-x-1 hover:text-brand-pink">
                  <ImageIcon size={20} />
                  <span className="text-sm">图片</span>
                </button>
              </div>
              <button className="px-6 py-1.5 bg-brand-pink text-white rounded-lg text-sm font-medium hover:bg-brand-pink_hover">
                发布
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {mockPosts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img src={post.avatar} className="w-12 h-12 rounded-full" alt="Avatar" />
                    <div>
                      <h3 className="font-bold text-gray-900">{post.author}</h3>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
                <div className="text-[15px] text-gray-800 leading-relaxed mb-4">
                  {post.content}
                </div>
                {post.image && (
                  <div className="rounded-lg overflow-hidden border border-gray-100 mb-4">
                    <img src={post.image} className="w-full object-cover max-h-[500px]" alt="Post" />
                  </div>
                )}
                <div className="flex items-center space-x-8 text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-brand-pink transition-colors">
                    <Share2 size={18} />
                    <span className="text-xs">转发</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-brand-pink transition-colors">
                    <MessageSquare size={18} />
                    <span className="text-xs">{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-brand-pink transition-colors">
                    <Heart size={18} />
                    <span className="text-xs">{post.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: User Info & Trending */}
        <div className="hidden lg:block w-[320px] space-y-6 sticky top-24 h-fit">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden" />
              <div>
                <h3 className="font-bold text-gray-900">未登录用户</h3>
                <p className="text-xs text-gray-500">登录开启精彩世界</p>
              </div>
            </div>
            <button className="w-full py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:opacity-90">
              立即登录
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">话题榜</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm text-gray-700 group-hover:text-brand-pink"># 话题名称示例 {i} #</span>
                  <span className="text-[10px] text-gray-400">12.5万点赞</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
