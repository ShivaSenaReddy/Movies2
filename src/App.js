import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Navigation from './Navigation.js'
import Movie from './Movie.js'
import Data from './Data.js'
import TollywoodData from './TollywoodData.js'
import React from 'react'
function App() {
    let [hollywood, sethollywood] = React.useState(true);
    let [tollywood, settollywood] = React.useState(false)
    function changeIndustry(id) {
        sethollywood(prev => !prev)
        console.log('hollywood:' + hollywood)
        settollywood(prev => !prev)
        console.log('tollywood:'+tollywood)
        console.log('hi')
    }

    function changeTollywood() {
        sethollywood(false)
        settollywood(true)
        console.log('tollywood:' + tollywood)
        console.log('hollywood:' + hollywood)
    }
    function changeHollywood() {
        settollywood(false)
        sethollywood(true)
    }

    
    let hollywoodmovies = Data.map(item =>
        <Movie
            title={item.title}
            imgUrl={item.imgUrl}
            releaseDate={item.releaseDate}
            trailer={item.trailer}
            description={item.description}
        />)
    let tollywoodmovies = TollywoodData.map(item =>
        <Movie
            title={item.title}
            imgUrl={item.imgUrl}
            releaseDate={item.releaseDate}
            trailer={item.trailer}
            description={item.description}
        />)
  return (
      <div className="App">
          <Header />
          <Navigation changeTollywood={changeTollywood}
              changeHollywood={changeHollywood}/>
          {hollywood && hollywoodmovies}
          {tollywood && tollywoodmovies}
    </div>
  );
}

export default App;
