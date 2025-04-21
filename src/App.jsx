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
          <h2>
