import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
