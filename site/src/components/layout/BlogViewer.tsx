"use client";

import React, { useState } from "react";
import MarkdownRenderer from "@/src/components/MarkdownRenderer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface BlogPost {
  slug: string;
  title?: string | null;
  excerpt?: string | null;
  date?: string | null;
  content: string;
}

interface Props {
  posts: BlogPost[];
}

export default function BlogViewer({ posts }: Props) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(posts[0] || null);

  const currentIndex = selectedPost ? posts.findIndex(p => p.slug === selectedPost.slug) : 0;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedPost(posts[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < posts.length - 1) {
      setSelectedPost(posts[currentIndex + 1]);
    }
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-[875px] mx-auto">
        <div className="p-6 bg-white/5 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-300">Nenhum post encontrado.</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 text-white w-full py-8">
      <div className="max-w-[875px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-cyan-400">Blog</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="px-3 py-2 bg-white/5 rounded disabled:opacity-40 hover:bg-white/10 transition-colors"
            >
              <FaChevronLeft />
            </button>
            <span className="text-sm text-gray-300">{currentIndex + 1} / {posts.length}</span>
            <button
              onClick={goToNext}
              disabled={currentIndex === posts.length - 1}
              className="px-3 py-2 bg-white/5 rounded disabled:opacity-40 hover:bg-white/10 transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Post Display */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 mb-6">
          {selectedPost?.date && (
            <p className="text-xs text-gray-400 mb-2">📅 {selectedPost.date}</p>
          )}
          <MarkdownRenderer content={selectedPost?.content || ""} data={{ title: selectedPost?.title }} />
        </div>

        {/* Posts List */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-cyan-400 mb-4">Todos os Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto">
            {posts.map((post) => (
              <button
                key={post.slug}
                onClick={() => setSelectedPost(post)}
                className={`text-left px-4 py-3 rounded transition-colors ${
                  selectedPost?.slug === post.slug
                    ? 'bg-cyan-600/30 border border-cyan-400'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="font-semibold text-white">{post.title || post.slug}</div>
                {post.excerpt && <div className="text-xs text-gray-400 mt-1">{post.excerpt}</div>}
                {post.date && <div className="text-xs text-gray-500 mt-1">{post.date}</div>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
