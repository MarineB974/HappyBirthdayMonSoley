import { useState } from 'react';
import './index.css';

function App() {
  const [pageIndex, setPageIndex] = useState(0);

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
        </>
      ),
    },
    {
      content: (
        <>
          <h2>À toi, mon Soley</h2>
          <p>
            Depuis ce dix mars, sans prévenir,<br />
            Tu es entré dans mon avenir...<br />
            Le 5 mai approche, et avec lui, le feu qu'on allume à deux, heureux.
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <h2>Ce n'est que le début...</h2>
          <p>
            Bon Anniversaire mon Soley.<br />
            Tu es le cœur préféré d'une Lionne à l'autre bout du monde.
          </p>
        </>
      ),
    }
  ];

  return (
    <div>
      {pages[pageIndex].content}
      <div style={{ marginTop: '2rem' }}>
        {pageIndex < pages.length - 1 ? (
          <button onClick={() => setPageIndex(pageIndex + 1)}>Page suivante</button>
        ) : (
          <button onClick={() => setPageIndex(0)}>Recommencer</button>
        )}
      </div>
    </div>
  );
}

export default App;
