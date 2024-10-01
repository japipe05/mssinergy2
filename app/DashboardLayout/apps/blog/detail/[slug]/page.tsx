
import BlogDetailData from '@/app/components/apps/blog/detail';
import React from 'react'
import { BlogProvider } from '@/app/context/BlogContext/index';
import type { Metadata } from "next";
import ThemeBreadcrumb from '@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb';
export const metadata: Metadata = {
  title: "Blog Details",
};

const BlogDetail = () => {
  return (
    <>
      <BlogProvider>
        <ThemeBreadcrumb title="Blog Detail" />
        <BlogDetailData />
      </BlogProvider>
    </>
  )
}

export default BlogDetail
