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
            Depuis ce dix mars, sans prévenir, 
            Tu es entré dans mon avenir. 
            Un message, un regard, un instant,
            Et très vite sont venus les appels… longs, vibrants.
            
            Des heures à se parler sans voir le temps,
            Comme si nos âmes savaient depuis longtemps.
            Toi, le Lion de Douala, fier et vaillant,
            Moi, la Lionne aux terres d’océan,
            
            Liés par un symbole, un rugissement,
            Qui résonne entre nos deux continents.
            Entre Marseille et la Réunion,
            Nos pensées jouent à l’unisson.
            
            Comme un murmure doux du destin,
            Tu m’écris, je t’écris... en même temps, c’est pas rien
            David Goggins et Sylvain Durif, 
            On a ri fort, c’était pas fictif.
            Même les roux n’ont pas été épargnés,
            À deux, nos délires savent voyager.
            
            Tu es tombé sur moi, ou moi sur toi ?
            Peu importe, le cœur ne ment pas.
            Nos âmes s’attirent, nos corps le savent,
            Ce lien est fort, doux et brave.
            
            On s’écoute, on se comprend,
            Chaque mot devient un fondement.
            Tu respectes mes peurs, mes silences,
            Et je célèbre ta force, ta présence.
            

            Le 5 mai approche, et avec lui,
            Le frisson de te savoir ici.
            Plus près de moi, plus près du feu,
            Celui qu’on allume à deux, heureux.
            
            Alors aujourd’hui, je te célèbre,
            Toi, l’homme qui fait battre mon être.
            Bon anniversaire, mon Soley adoré,
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
        src="/file_00000000c6586230856a6a831217ac63.png" 
        alt="Bon massage" 
        style={{ maxWidth: '90%', marginTop: '1rem', borderRadius: '20px' }} 
      />
    </>
  )
},
    {
  content: (
    <>
      <h2>Ce n’est que le début...</h2>
      <p>
        Bon Anniversaire mon Soley. Tu es le cœur préféré d'une Lionne à l'autre bout du monde.
      </p>
      <img 
        src="/file_00000000f55c61f7bca2a0709bd92e64~2.png" 
        alt="Gâteau Joyeux Anniversaire" 
        style={{ maxWidth: '90%', marginTop: '2rem', borderRadius: '20px' }} 
      />
    </>
  )
}
