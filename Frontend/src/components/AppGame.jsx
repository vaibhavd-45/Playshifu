import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import './AppGame.css';

const AppGame = () => {
     const appGames = [
        {
          id: 1,
          title: "Alpha Zoo",
          description: "Learn the alphabet with fun animal characters",
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-6.webp&w=640&q=75",
        },
        {
          id: 2,
          title: "Number Train",
          description: "Develop counting skills with engaging train adventure",
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-9.webp&w=640&q=75",
        },
        {
          id: 3,
          title: "Memory Match",
          description: "Enhance memory with classic matching game",
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fgames%2Fgame-5.webp&w=640&q=75",
        },
        {
          id: 4,
          title: "Word Builder",
          description: "Create words and improve vocabulary",
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-1.webp&w=640&q=75",
        },
        {
          id: 5,
          title: "Math Adventure",
          description: "Explore numbers and basic math concepts",
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-7.webp&w=640&q=75",
        },
        {
          id: 6,
          title: "Language Quest",
          description: "Master language skills through fun challenges",
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-6.webp&w=640&q=75",
        }
      ];

      const sliderRef = useRef(null);
      const [activeGame, setActiveGame] = useState(null);

      const scroll = (direction) => {
        const container = sliderRef.current;
        const scrollAmount = 256; // Width of card (240px) + gap (16px)
        
        if (container) {
          const currentScroll = container.scrollLeft;
          const newScroll = direction === 'left' 
            ? currentScroll - scrollAmount 
            : currentScroll + scrollAmount;
            
          container.scrollTo({
            left: newScroll,
            behavior: 'smooth'
          });
        }
      };

      const handleGameHover = (game) => {
        setActiveGame(game);
      };

      const handleGameLeave = () => {
        setActiveGame(null);
      };

    return (
        <div className="app-games">
          <div className="section-header">
            <h2 className="section-title">Free In-App Games</h2>
            <p className="section-subtitle">To play, download the complimentary Plugo app</p>
          </div>

          <div className="games-slider">
            <button className="slider-btn prev" onClick={() => scroll('left')}>
              <FaChevronLeft />
            </button>

            <div className="games-container" ref={sliderRef}>
              {appGames.map((game) => (
                <div 
                  key={game.id} 
                  className="game-card"
                  onMouseEnter={() => handleGameHover(game)}
                  onMouseLeave={handleGameLeave}
                >
                  <div className="game-icon">
                    <img src={game.image} alt={game.title} />
                  </div>
                  <div className="game-info">
                    <h3>{game.title}</h3>
                    <p>{game.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="slider-btn next" onClick={() => scroll('right')}>
              <FaChevronRight />
            </button>
          </div>

          {activeGame && (
            <div className="game-preview">
              <h3>{activeGame.title}</h3>
              <p>{activeGame.description}</p>
            </div>
          )}
        </div>
    )
}

export default AppGame;