
import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [fetcherIsWorking, setFetcherState] = useState(false)

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch('http://127.0.0.1:8080/api/articles');
      const data = await res.json();
      if (res.status === 200) setFetcherState(true);
      console.log('Fetched data from API platform');
      console.log(data);
    }
    fetcher()
  }, [])

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {
              fetcherIsWorking ?
                  'Fetch API platform is working'
                  :
                  "Fetch API platform isn't working"
            }
          </p>
          <p>See console.log()</p>
        </header>
      </div>
  );
}

export default App;