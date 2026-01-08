import { useState, useEffect } from 'preact/hooks';
import './About.scss';

const IFPA_API_KEY = 'dbb1db78a643351f4eb9db5ac38fa0b9';
const PLAYER_ID = '63890';

export function About() {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const url = `/api/ifpa/v1/player/${PLAYER_ID}?api_key=${IFPA_API_KEY}`;
        console.log('Fetching from:', url);

        const response = await fetch(url);
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          throw new Error(`Failed to fetch player data: ${response.status}`);
        }

        const data = await response.json();
        console.log('Player data:', data);
        setPlayerData(data);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlayerData();
  }, []);

  if (loading) {
    return (
      <section className="about">
        <div className="about__container">
          <h2 className="about__title">About Me</h2>
          <div className="about__loading">Loading pinball stats...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="about">
        <div className="about__container">
          <h2 className="about__title">About Me</h2>
          <div className="about__error">Unable to load pinball stats</div>
        </div>
      </section>
    );
  }

  const stats = playerData?.player_stats;

  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>

        <div className="about__content">
          <div className="about__text">
            <p>
              I'm a systems technician and software engineer with a passion for building practical, well-designed solutions. 
              Outside of work, I enjoy developing tools, improving workflows, and working on long-term technical projects. I also compete in and help organize local pinball tournaments, which keeps me sharp and community-focused.            </p>
          </div>

          {stats && (
            <div className="about__pinball-card">
              <div className="about__pinball-header">
                <h3>Competitive Pinball Stats</h3>
                <a
                  href={`https://www.ifpapinball.com/player.php?p=${PLAYER_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__ifpa-link"
                >
                  View IFPA Profile
                </a>
              </div>

              <div className="about__stats-grid">
                <div className="about__stat">
                  <div className="about__stat-label">World Ranking</div>
                  <div className="about__stat-value">
                    #{parseInt(stats.current_wppr_rank).toLocaleString()}
                  </div>
                  {stats.last_month_rank && stats.last_month_rank !== stats.current_wppr_rank && (
                    <div className="about__stat-change">
                      {parseInt(stats.last_month_rank) > parseInt(stats.current_wppr_rank) ? '↑' : '↓'}
                      {' '}from #{parseInt(stats.last_month_rank).toLocaleString()}
                    </div>
                  )}
                </div>

                <div className="about__stat">
                  <div className="about__stat-label">WPPR Points</div>
                  <div className="about__stat-value">
                    {parseFloat(stats.current_wppr_value).toFixed(2)}
                  </div>
                </div>

                <div className="about__stat">
                  <div className="about__stat-label">Rating</div>
                  <div className="about__stat-value">
                    {parseFloat(stats.ratings_value).toFixed(2)}
                  </div>
                  <div className="about__stat-detail">
                    {parseFloat(stats.efficiency_value).toFixed(1)}% efficiency
                  </div>
                </div>

                <div className="about__stat">
                  <div className="about__stat-label">Tournaments Played</div>
                  <div className="about__stat-value">
                    {stats.total_active_events}
                  </div>
                  <div className="about__stat-detail">
                    {stats.best_finish && `Best finish: ${stats.best_finish}`}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
