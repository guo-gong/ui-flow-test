"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-gray-900 font-bold mb-4">bilibili</h3>
          <ul className="text-sm text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-brand-pink">关于我们</a></li>
            <li><a href="#" className="hover:text-brand-pink">联系我们</a></li>
            <li><a href="#" className="hover:text-brand-pink">加入我们</a></li>
            <li><a href="#" className="hover:text-brand-pink">友情链接</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-900 font-bold mb-4">传送门</h3>
          <ul className="text-sm text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-brand-pink">帮助中心</a></li>
            <li><a href="#" className="hover:text-brand-pink">侵权申诉</a></li>
            <li><a href="#" className="hover:text-brand-pink">壁纸站</a></li>
            <li><a href="#" className="hover:text-brand-pink">高级弹幕</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-900 font-bold mb-4">协议与规则</h3>
          <ul className="text-sm text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-brand-pink">用户协议</a></li>
            <li><a href="#" className="hover:text-brand-pink">隐私政策</a></li>
            <li><a href="#" className="hover:text-brand-pink">社区规则</a></li>
            <li><a href="#" className="hover:text-brand-pink">儿童隐私保护</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center border-l border-gray-200 pl-8">
          <div className="text-brand-pink text-3xl font-bold italic mb-2">bilibili</div>
          <p className="text-xs text-gray-400 text-center">哔哩哔哩 (゜-゜)つロ 干杯~</p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-gray-200 text-[10px] text-gray-400 text-center">
        <p>© 2024 Bilibili Restoration Project. All rights reserved.</p>
        <p className="mt-1">京ICP备10000000号-1 | 沪网文[2024]0000-000号</p>
      </div>
    </footer>
  );
};

export default Footer;
