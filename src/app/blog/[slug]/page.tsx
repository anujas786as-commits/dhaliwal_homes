import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft, Heart, Award } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `https://dhaliwalhomes.com.au/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Dhaliwal Homes Blog`,
      description: post.summary,
      url: `https://dhaliwalhomes.com.au/blog/${slug}`,
      type: "article",
      images: [
        {
          url: post.img,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.img],
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get recent posts excluding the current one
  const recentPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      {/* Main Container */}
      <main className="bg-white pt-24 pb-24 text-charcoal">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-semibold text-gold hover:text-gold/80 uppercase tracking-wider mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog List
          </Link>

          {/* Article Header Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Article Body */}
            <article className="lg:col-span-8 space-y-8">
              
              {/* Header Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 gsap-hero-title">
                  <span className="text-xs text-gold font-semibold uppercase tracking-wider bg-gold/10 border border-gold/25 px-2.5 py-1 rounded-sm">
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/60 font-light flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-gold" /> {post.date}
                  </span>
                  <span className="text-xs text-foreground/60 font-light flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-gold" /> {post.readTime}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-5xl font-serif text-charcoal leading-tight gsap-hero-title">
                  {post.title}
                </h1>
                
                <div className="h-[1px] w-20 bg-gold gsap-hero-title" />
              </div>

              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-orange/15 rounded-sm shadow-xl reveal-on-scroll">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* HTML Rich Text Content */}
              <div
                className="prose prose-gold max-w-none text-foreground/85 font-light text-sm sm:text-base leading-relaxed space-y-6 pt-4 reveal-on-scroll"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Article Share Footer */}
              <div className="border-t border-orange/10 pt-8 mt-12 flex items-center justify-between">
                <span className="text-xs text-foreground/50">Shared by Dhaliwal Homes &bull; Established 2026</span>
                <div className="flex items-center space-x-3 text-gold text-xs font-semibold uppercase tracking-wider">
                  <Heart className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Melbourne Building Resource</span>
                </div>
              </div>
            </article>

            {/* Sidebar with Recent Articles & Leads */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
              
              {/* Author Info */}
              <div className="bg-beige border border-orange/15 p-6 rounded-sm text-center space-y-4 reveal-on-scroll">
                <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border border-orange/30">
                  <Image
                    src="/images/logo/WhatsApp Image 2026-06-09 at 10.54.35 AM.jpeg"
                    alt="Devinder Dhaliwal author profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-charcoal text-base font-semibold uppercase tracking-wider">Devinder Dhaliwal</h4>
                  <p className="text-gold text-xs font-medium uppercase tracking-widest mt-1">Founder & Lead Builder</p>
                </div>
                <p className="text-foreground/70 text-xs font-light leading-relaxed">
                  Devinder handles residential design-and-construct feasibility projects, building regulation checks, and worksite supervision.
                </p>
              </div>

              {/* Recent Posts List */}
              <div className="bg-white border border-orange/15 shadow-sm p-6 rounded-sm space-y-4 reveal-on-scroll delay-100">
                <h4 className="text-charcoal text-sm font-semibold uppercase tracking-widest border-l-2 border-gold pl-3">
                  Recent Insights
                </h4>
                <div className="space-y-4">
                  {recentPosts.map((rPost) => (
                    <Link
                      key={rPost.slug}
                      href={`/blog/${rPost.slug}`}
                      className="block group border-b border-gold/5 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-xs text-gold uppercase tracking-wider font-semibold block mb-1">
                        {rPost.category}
                      </span>
                      <h5 className="text-charcoal text-sm font-serif group-hover:text-gold transition-colors duration-200 leading-snug">
                        {rPost.title}
                      </h5>
                      <span className="text-xs text-foreground/50 font-light block mt-1">
                        {rPost.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Consultation CTA Box */}
              <div className="bg-white border border-orange/15 shadow-sm p-6 rounded-sm text-center space-y-4 reveal-on-scroll delay-200">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-orange/30 flex items-center justify-center text-gold mx-auto">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-charcoal text-sm font-semibold uppercase tracking-widest">Feasibility Consultation</h4>
                <p className="text-foreground/70 text-xs font-light leading-relaxed">
                  Have questions about planning zones, local setbacks, or building permit limits on your block?
                </p>
                <Link
                  href="/contact"
                  className="w-full text-center block bg-gold text-white font-bold uppercase tracking-widest text-xs py-3 rounded-sm hover:bg-gold/90 transition-colors"
                >
                  Book Assessment
                </Link>
              </div>

            </aside>

          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}
