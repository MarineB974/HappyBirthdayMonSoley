import { useState } from 'react';
import './index.css';

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [enigme, setEnigme] = useState('');
  const [enigmeOk, setEnigmeOk] = useState(false);

  const handleCheckEnigme = () => {
    if (enigme.trim().toLowerCase() === 'sylvain durif') {
      setEnigmeOk(true);
    }
  };

  const pages = [
    {
      content: (
        <>
          <h1>Aujourd'hui, on célèbre un homme unique...</h1>
          <p>Un papa en or, un guitariste de cœur. Prêt pour la surprise ?</p>
        </>
      ),
    },
    {
      content: (
        <>
          <h2>Énigme – L’Élu des étoiles</h2>
          <p>
            On m’appelle parfois le Grand Monarque,<br />
            Entre cristal cosmique et lumière opaque.<br />
            Je ne suis ni dieu, ni roi, ni fou,<br />
            Pourtant sur YouTube, on me connaît beaucoup...<br />
            Mon prénom est forêt, mon nom… devine qui ?
          </p>
          {!enigmeOk && (
            <div style={{ marginTop: '1rem' }}>
              <input
                type="text"
                value={enigme}
                onChange={(e) => setEnigme(e.target.value)}
                placeholder="Ta réponse ici"
              />
              <button onClick={handleCheckEnigme}>Valider</button>
            </div>
          )}
          {enigmeOk && <p style={{ color: 'green' }}>Bonne réponse ! Tu peux continuer.</p>}
        </>
      ),
    },
    {
      content: (
        <>
          <h2>À toi, mon Soley</h2>
          <p>
            {/* Ton poème ici avec <br /> comme avant pour les sauts de ligne */}
            Depuis ce dix mars, sans prévenir, <br />
            Tu es entré dans mon avenir. <br />
            Un message, un regard, un instant,<br />
            Et très vite sont venus les appels… longs, vibrants.<br /><br />
            {/* etc. */}
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <h2>Un instant détente t’attend…</h2>
          <p>Voici ton bon massage bien mérité !</p>
          <img
            src="/massage.png"
            alt="Bon massage"
            style={{ maxWidth: '90%', marginTop: '1rem', borderRadius: '20px' }}
          />
        </>
      ),
    },
    {
      content: (
        <>
          <h2>Ce n’est que le début...</h2>
          <p>
            Bon Anniversaire mon Soley. Tu es le cœur préféré d'une Lionne à l'autre bout du monde.
          </p>
          <img
            src="/gateau.png"
            alt="Gâteau"
            style={{ maxWidth: '90%', marginTop: '2rem', borderRadius: '20px' }}
          />
        </>
      ),
    },
  ];

  const nextPage = () => {
    if (pageIndex === 1 && !enigmeOk) return;
    if (pageIndex < pages.length - 1) setPageIndex(pageIndex + 1);
  };

  const restart = () => setPageIndex(0);

  return (
    <div className="App">
      {/* musique youtube en fond */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/LqZXPN4bKyE?autoplay=1&loop=1&playlist=LqZXPN4bKyE"
        title="Musique"
        frameBorder="0"
        allow="autoplay"
      ></iframe>

      <div className="page">
        {pages[pageIndex].content}
        <div style={{ marginTop: '2rem' }}>
          {pageIndex === 0 && (
            <button onClick={nextPage}>Début du voyage</button>
          )}
          {pageIndex > 0 && pageIndex < pages.length - 1 && (
            <button onClick={nextPage}>Continuer le voyage</button>
          )}
          {pageIndex === pages.length - 1 && (
            <button onClick={restart}>Recommencer le voyage</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
