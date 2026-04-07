"use client";

import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col pt-16 bg-white">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center mb-8">
          <div className="text-8xl">🤔</div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">哎呀，页面找不到了</h1>
        <p className="text-gray-500 mb-8">可能这个页面已经飞到了火星 🚀</p>
        <Link href="/" className="px-8 py-2 bg-brand-pink text-white rounded-lg font-medium hover:bg-brand-pink_hover transition-colors">
          回到首页
        </Link>
      </div>
    </main>
  );
}
