 
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div>
     
     <Nav/>

      <Banner  /* title="NetflixOriginals" */ fetchUrl={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="Trending Movies" fetchUrl={requests.fetchTrending}/>

      <Row  title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
      
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
