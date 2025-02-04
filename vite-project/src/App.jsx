import './App.css';
import discordBackground from './assets/discord-background.png';
import discordLogo from './assets/discord-logo.png';
import menuIcon from './assets/menu-icon.png'

export default function App() {
  return (
    <>
      <img src={discordBackground} alt="Discord Background" />
      <img src={discordLogo} alt="Logo"/>
      <img src={menuIcon} alt="Menu"/>
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a worldwide art communitty.
         Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
         <button>Download for Mac</button>
         <button>Open Discord in your browser</button>
    </>
  );
}

