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
          <button
            style={{ marginTop: '1rem' }}
            onClick={() => document.getElementById("audio").play()}
          >
            Lancer la musique
          </button>
        </>
      ),
    },
    {
      content: (
        <>
          <h2>Énigme – L’Élu des étoiles</h2>
          <p>
            
            On m’appelle parfois le Grand Monarque,<br />
            Entre cristal cosmique et lumière opaque.<br /><br />
            Je ne suis ni dieu, ni roi, ni fou,<br />
            Pourtant sur YouTube, on me connaît beaucoup.<br /><br />
            Certains rient, d’autres croient,<br />
            Moi, je trace ma voie dans les lois de Gaïa.<br /><br />
            Cherche mon nom dans l’espace infini,<br />
            Qui suis-je ?
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
            Depuis ce dix mars, sans prévenir,<br />
            Tu es entré dans mon avenir.<br />
            Un message, un regard, un instant,<br />
            Et très vite sont venus les appels… longs, vibrants.<br /><br />
            Des heures à se parler sans voir le temps,<br />
            Comme si nos âmes savaient depuis longtemps.<br />
            Toi, le Lion de Douala, fier et vaillant,<br />
            Moi, la Lionne aux terres d’océan,<br /><br />
            Liés par un symbole, un rugissement,<br />
            Qui résonne entre nos deux continents.<br />
            Entre Marseille et la Réunion,<br />
            Nos pensées jouent à l’unisson.<br /><br />
            On s’écrit souvent, presque au même instant,<br />
            Comme deux esprits liés, dans le même courant.<br />
            Les mots se croisent, sans qu’on les programme,<br />
            Connexion subtile, sans câble ni drame.<br /><br />
            On a ri aux éclats, des délires sans fin,<br />
            Sur Goggins l’infernal, muscles et destin.<br />
            Puis Durif est venu, l’élu des étoiles,<br />
            Avec son cristal et ses grandes idées folles.<br /><br />
            Entre l’absurde et le vrai, on glisse sans effort,<br />
            Des clins d’œil cosmiques jusqu’aux barres de sport.<br />
            Ce n’est pas du hasard, c’est presque un refrain,<br />
            Deux âmes qui s’écrivent, au-delà du matin.<br /><br />
            Même les roux n’ont pas été épargnés,<br />
            À deux, nos délires savent voyager.<br /><br />
            Tu es tombé sur moi, ou moi sur toi ?<br />
            Peu importe, le cœur ne ment pas.<br />
            Nos âmes s’attirent, nos corps le savent,<br />
            Ce lien est fort, doux et brave.<br /><br />
            On s’écoute, on se comprend,<br />
            Chaque mot devient un fondement.<br />
            Tu respectes mes peurs, mes silences,<br />
            Et je célèbre ta force, ta présence.<br /><br />
            Le 5 mai approche, et avec lui,<br />
            Le frisson de te savoir ici.<br />
            Plus près de moi, plus près du feu,<br />
            Celui qu’on allume à deux, heureux.<br /><br />
            Alors aujourd’hui, je te célèbre,<br />
            Toi, l’homme qui fait battre mon être.<br />
            Bon anniversaire, mon Soley adoré,<br />
            Que cette histoire ne cesse de vibrer.
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
      <audio id="audio" autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

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
