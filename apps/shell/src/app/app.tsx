import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { Shell } from '@aprender/ui';

const Conjug8 = React.lazy(() => import('conjug8/Module'));

const Vocab = React.lazy(() => import('vocab/Module'));

export function App() {
  return (
    <Shell>
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<>Test</>} />

          <Route path="/conjug8" element={<Conjug8 />} />

          <Route path="/vocab" element={<Vocab />} />
        </Routes>
      </React.Suspense>
    </Shell>
  );
}

export default App;
