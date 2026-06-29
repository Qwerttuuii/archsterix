import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./Blog.css";

const posts = [
  {
    id: 1,
    category: "ARCHITECTURE & INNOVATION",
    title: "Parametricis: Architecture For A Complex World",
    excerpt: "Parametricism is a 21st century architectural and design style defined by the use of algorithms and computational processes. A rule based system where design elements are mutually adaptive, allowing for continous variation and complexity. ",
    date: "April 5, 2026",
    author: "citi Builders",
    image: "/blog/parametric.avif"
  },
  {
    id: 2,
    category: "SUSTAINABLE DESIGN & ARCHITECTURE",
    title: "How to Combine Luxury and Eco-Friendliness in Modern Home Design",
    excerpt: "The modern concept of luxury is no longer defined by wealth alone, it embraces quality, durability, timeless appeal, and a deep commitment to the environment.",
    date: "March 22, 2026",
    author: "citi Builders",
    image: "/blog/eco.avif"
  },
  {
    id: 3,
    category: "CONSTRUCTION",
    title: "The Chambery: Redefining Luxury Living In Abuja",
    excerpt: "A New Standard of Sophisticated Urban Living.",
    date: "March 10, 2026",
    author: "citi Builders",
    image: "/blog/chambery.avif"
  },
  {
    id: 4,
    category: "ARCHITECTURE & LIVING",
    title: "Modern Luxury Homes: 8 Defining Features That Set Them Apart",
    excerpt: "Luxury today is no longer defined by size alone. It is defined by experience, innovation, confort, and timeless architectural excellence.",
    date: "March 10, 2026",
    author: "citi Builders",
    image: "/blog/luxury.avif"
  }
];

const Blog = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Our Blog</h1>
          <p>Insights, guides, and industry perspectives from the Citi Builders team. On architecture, construction, craft and the long arc of building well</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts">
        <div className="posts-grid">
          {posts.map((post) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="post-card-link"
            >
              <article className="post-card">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="post-content">
                  <span className="post-category">{post.category}</span>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  
                  <div className="post-meta">
                    <span className="post-author">{post.author}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;