
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface WPPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

export default function BlogArea() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://blog.orphicsolution.com/wp-json/wp/v2/posts?_embed');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError('Error loading blog posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center py-5 text-red-500">{error}</div>;

  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>our creative ideas and insights</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">Our articles</h1>

        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-page-wrap">
              {posts.map((post, i) => {
                const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'assets/images/blog/default.jpg';
                const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Blog';
                const date = new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

                return (
                  <div key={post.id} className={`wionblog-wrap mb-0 ${i !== 0 ? 'mt-50' : ''} aos-init`} data-aos-delay={400 + (i * 100)} data-aos="fade-up">
                    <div className="wionblog-thumb">
                      <Link to={`/blog/${post.id}`}>
                        <img src={imageUrl} alt={post.title.rendered} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                      </Link>
                      <Link to={`/blog/${post.id}`}>
                        <div className="wionblog-btn">{category}</div>
                      </Link>
                    </div>
                    <div className="wionblog-meta">
                      <ul>
                        <li>
                          <Link to={`/blog/${post.id}`}>{date} –</Link>
                        </li>
                        <li>5 min read</li>
                      </ul>
                    </div>
                    <div className="wionblog-title">
                      <Link to={`/blog/${post.id}`}>
                        <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      </Link>
                    </div>
                    <div className="wionblog-desc mt-3">
                      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wionblog-sidebar">
              <div className="wionblog-widgets">
                <h4>Search</h4>
                <form action="#">
                  <div className="wionsearch-box">
                    <input type="search" placeholder="Type keyword here..." />
                    <button id="wionsearch-btn" className="wiondefault-btn" type="button">
                      <span className="wionbutton-icon">
                        <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                        <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="wionblog-widgets">
                <h4>Categories:</h4>
                <div className="wionblog-categorie">
                  <ul>
                    <li><Link to="/single-blog">Business (24)</Link></li>
                    <li><Link to="/single-blog">Digital Marketing (16)</Link></li>
                    <li><Link to="/single-blog">Creative Agency (08)</Link></li>
                    <li><Link to="/single-blog">UI/UX Design (33)</Link></li>
                    <li><Link to="/single-blog">Web Development (05)</Link></li>
                  </ul>
                </div>
              </div>
              <div className="wionblog-widgets">
                <h4>Recent Posts</h4>
                <div className="wionrecent-post-item">
                  <div className="wionrecent-post-thumb">
                    <Link to="/single-blog">
                      <img src="assets/images/blog/b15.png" alt="" />
                    </Link>
                  </div>
                  <div className="wionrecent-post-content">
                    <div className="wionblog-meta recent-post-meta">
                      <ul>
                        <li>
                          <Link to="/single-blog">18 June 2025 –</Link>
                        </li>
                        <li>15 min read</li>
                      </ul>
                    </div>
                    <div className="wionrecent-post">
                      <Link to="/single-blog">
                        <h4>Build a creative agency website in 4 steps</h4>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="wionrecent-post-item">
                  <div className="wionrecent-post-thumb">
                    <Link to="/single-blog">
                      <img src="assets/images/blog/b16.png" alt="" />
                    </Link>
                  </div>
                  <div className="wionrecent-post-content">
                    <div className="wionblog-meta recent-post-meta">
                      <ul>
                        <li>
                          <Link to="/single-blog">18 June 2025 –</Link>
                        </li>
                        <li>6 min read</li>
                      </ul>
                    </div>
                    <div className="wionrecent-post">
                      <Link to="/single-blog">
                        <h4>What is click fraud and how to avoid it</h4>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="wionblog-widgets">
                <h4>Tags</h4>
                <div className="wionblog-tags">
                  <ul>
                    <li><Link to="/single-blog">Business</Link></li>
                    <li><Link to="/single-blog">Digital Marketing</Link></li>
                    <li><Link to="/single-blog">Web</Link></li>
                    <li><Link to="/single-blog">Creative Agency</Link></li>
                    <li><Link to="/single-blog">UI/UX</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
