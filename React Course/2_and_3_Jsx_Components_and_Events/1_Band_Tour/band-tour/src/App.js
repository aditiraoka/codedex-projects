import React from 'react';
import EventInvitation from './20_waterfest/EventInvitation';

export default function App(){
  return(<div>
    <EventInvitation />
  </div>);
}


/*import ZoomableImage from "./18_focus/ZoomableImage";
import VolumeControl from "./19_key_events/VolumeControl";
export default function App(){
  const imageUrl="https://upload.wikimedia.org/wikipedia/en/0/03/Prideandprejudiceposter.jpg"
  const zoomFactor=5
  return (
  <div>
    <ZoomableImage imageURL={imageUrl} zoomFactor={zoomFactor}/>
    <VolumeControl />
  </div>
  );
}
*/

/*import { useState } from "react";
import TrendingList from "./15_Trending/TrendingList";

export default function App() {
  const movieArray = [
    {
      title: "Hitchhiker's Guide to the Galaxy",
      releaseYear: 2005,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitchhikers_guide_to_the_galaxy.jpg"
    },
    {
      title: "Pride & Prejudice",
      releaseYear: 2005,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Prideandprejudiceposter.jpg"
    },
    {
      title: "Hum Saath-Saath Hain",
      releaseYear: 1999,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c3/Hum_Saath-Saath_Hain.jpg"
    }

  ];
  const [movieData, setMovieData] = useState(movieArray);

  return <div><TrendingList movies={movieArray}/></div>;
}
*/


/*import Notification from "./Notification.js";

function App() {
  const isRead1=true;
  const isRead2=false;
  return (
    <div>
      <h1>Notifications</h1>
      <Notification message="Fatima commented on your post." isRead={isRead1} />
      <Notification message="Daniel's birthday is today! 🎂" isRead={isRead2} />
      <Notification message="Rhea just posted on their feed!" isRead={isRead1} />
    </div>
  )
}

export default App;
*/

/*import './App.css';

function App() {
  const barcelonaImage = <img src={ "https://i.imgur.com/qaQNzqi.png" }  alt="Barcelona" />;
const tokyoImage = <img src={ "https://i.imgur.com/OAx1wzO.png" }  alt="Tokyo" />;
const ohioImage = <img src={ "https://i.imgur.com/CxJjltu.png" }  alt="Ohio" />;

  const imgArray = [ barcelonaImage, tokyoImage, ohioImage ]
  
  return <ul>
    { imgArray }
  </ul>;
}


export default App;
*/