import { useState, useEffect } from 'preact/hooks';
import './About.scss';

const IFPA_API_KEY = 'dbb1db78a643351f4eb9db5ac38fa0b9';
const PLAYER_ID = '63890';

function getOrdinal(n) {
  const num = parseInt(n);
  const suffix = ['th', 'st', 'nd', 'rd'];
  const v = num % 100;
  return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
}

export function About() {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const url = `/api/ifpa/player/${PLAYER_ID}?api_key=${IFPA_API_KEY}`;
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

        // The current API returns data nested under player[0]
        const playerInfo = data.player?.[0];
        setPlayerData(playerInfo);
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
      <section id="about" className="about">
        <div className="about__container">
          <h2 className="about__title">About Me</h2>
          <div className="about__loading">Loading pinball stats...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="about" className="about">
        <div className="about__container">
          <h2 className="about__title">About Me</h2>
          <div className="about__error">Unable to load pinball stats</div>
        </div>
      </section>
    );
  }

  // Current API nests stats under system.open
  const stats = playerData?.player_stats?.system?.open;

  return (
    <section id="about" className="about">
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
                    #{parseInt(stats.current_rank).toLocaleString()}
                  </div>
                  {stats.last_month_rank && stats.last_month_rank !== stats.current_rank && (
                    <div className="about__stat-change">
                      {parseInt(stats.last_month_rank) > parseInt(stats.current_rank) ? '↑' : '↓'}
                      {' '}from #{parseInt(stats.last_month_rank).toLocaleString()}
                    </div>
                  )}
                </div>

                <div className="about__stat">
                  <div className="about__stat-label">WPPR Points</div>
                  <div className="about__stat-value">
                    {parseFloat(stats.current_points).toFixed(2)}
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
                    {stats.total_events_all_time}
                  </div>
                  <div className="about__stat-detail">
                    {stats.best_finish && `Best finish: ${getOrdinal(stats.best_finish)}`}
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
