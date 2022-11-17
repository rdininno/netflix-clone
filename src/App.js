import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>netflix clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNextlixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Hooror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
