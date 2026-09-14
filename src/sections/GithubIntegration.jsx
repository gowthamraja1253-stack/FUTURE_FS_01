import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Users, BookOpen, AlertCircle, RefreshCw, ExternalLink, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const SKELETON_REPOS = [1, 2, 3, 4, 5, 6];

const GithubIntegration = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "gowthamraja1253-stack";

  const fetchGithubData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      ]);

      if (!profileRes.ok || !reposRes.ok) {
        if (profileRes.status === 403 || reposRes.status === 403) {
          throw new Error("GitHub API rate limit exceeded. Please try again later.");
        }
        throw new Error("Failed to fetch GitHub data.");
      }

      const profileData = await profileRes.json();
      const reposData = await reposRes.json();

      const langCount = {};
      let totalLangs = 0;
      reposData.forEach(repo => {
        if (repo.language) {
          langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          totalLangs++;
        }
      });

      const langArray = Object.keys(langCount).map(lang => ({
        name: lang,
        count: langCount[lang],
        percentage: Math.round((langCount[lang] / totalLangs) * 100)
      })).sort((a, b) => b.count - a.count).slice(0, 5);

      setProfile(profileData);
      setRepos(reposData);
      setLanguages(langArray);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  const getLanguageColor = (lang) => {
    const colors = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-orange-500',
      HTML: 'bg-red-500',
      CSS: 'bg-blue-400',
      'C++': 'bg-pink-500',
      C: 'bg-gray-400'
    };
    return colors[lang] || 'bg-accent1';
  };

  return (
    <section id="github" className="py-32 relative bg-surface border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16">
        
        {/* Left Side: Editorial Stats */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-6 text-primary">
              <FaGithub size={48} />
              <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tighter">Open<br/>Source.</h2>
            </div>
            
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent1 hover:text-primary transition-colors border-b border-accent1/30 pb-1"
            >
              View Profile <ExternalLink size={14} />
            </a>
          </motion.div>

          <div className="mt-16 space-y-10">
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Repositories", value: profile?.public_repos },
                { label: "Followers", value: profile?.followers },
                { label: "Following", value: profile?.following },
                { label: "Gists", value: profile?.public_gists }
              ].map((stat, idx) => (
                <div key={idx} className="border-l border-primary/20 pl-4">
                  {loading ? (
                    <div className="h-8 w-12 bg-primary/5 animate-pulse mb-1"></div>
                  ) : (
                    <h4 className="text-3xl font-serif font-bold text-primary">{stat.value}</h4>
                  )}
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-primary/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-6">Language Ecosystem</h3>
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map(i => <div key={i} className="h-4 bg-primary/5 animate-pulse"></div>)}
                </div>
              ) : languages.length > 0 ? (
                <div className="space-y-4">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${getLanguageColor(lang.name)}`}></div>
                        <span className="text-primary font-medium text-sm">{lang.name}</span>
                      </div>
                      <span className="text-secondary font-serif text-sm">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-secondary text-sm">No data available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Repositories List */}
        <div className="lg:col-span-8">
          {error ? (
            <div className="p-12 border border-red-500/20 text-center">
              <AlertCircle size={32} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-primary mb-2">Failed to load</h3>
              <p className="text-secondary mb-6">{error}</p>
              <button onClick={fetchGithubData} className="text-xs font-bold uppercase tracking-widest text-accent1 border-b border-accent1">Try Again</button>
            </div>
          ) : (
            <div className="flex flex-col border-t border-primary/20">
              {loading
                ? SKELETON_REPOS.map(i => (
                    <div key={i} className="py-8 border-b border-primary/10 animate-pulse flex flex-col gap-2">
                      <div className="h-6 w-1/3 bg-primary/5"></div>
                      <div className="h-4 w-2/3 bg-primary/5"></div>
                    </div>
                  ))
                : repos.map((repo, idx) => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-primary/20 hover:bg-primary/5 transition-colors px-4 -mx-4"
                    >
                      <div className="md:w-2/3 pr-4 mb-4 md:mb-0">
                        <h4 className="text-xl font-serif font-bold text-primary group-hover:text-accent2 transition-colors mb-2">
                          {repo.name}
                        </h4>
                        <p className="text-secondary text-sm font-light line-clamp-2">
                          {repo.description || "No description provided."}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-primary/60">
                        {repo.language && (
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></div>
                            {repo.language}
                          </div>
                        )}
                        <div className="flex items-center gap-1 group-hover:text-accent1 transition-colors">
                          <Star size={14} /> {repo.stargazers_count}
                        </div>
                        <div className="flex items-center gap-1 group-hover:text-accent1 transition-colors">
                          <GitFork size={14} /> {repo.forks_count}
                        </div>
                      </div>
                    </motion.a>
                  ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default GithubIntegration;
