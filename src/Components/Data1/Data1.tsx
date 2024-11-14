// Import images and videos for each champion
import twisted1 from '../../assets/TwistedFate_7.jpg';
import twisted2 from '../../assets/Skin_Splash_High_Noon_Twisted_Fate.webp';
import twisted3 from '../../assets/vjcz69i6qjg71.jpg';
import twistedplay from '../../assets/Twistedplay.webm';
import orianna1 from '../../assets/gh3pdtsaITB4QRevyI3ziYih1wKXySvSUr3sxQQz.webp';
import orianna2 from '../../assets/orianna_splash_uncentered_5.jpg';
import orianna3 from '../../assets/Orianna_PoolPartySkin.webp';
import oriannaplay from '../../assets/Ori-Play.webm';
import lissandra1 from '../../assets/Lissandra_0.jpg';
import lissandra2 from '../../assets/Lissandra_3.webp';
import lissandra3 from '../../assets/thumb-1920-977375.jpg';
import lissandraplay from '../../assets/Liss-play2.webm';

// Define the ChampionDetails interface
interface ChampionDetails {
  
  champion?: string;
  quote: string;
  title: string;
  story: string;
  skin1: string;
  skin2: string;
  skin3: string;
  play: string;
}

// Create the data array for each champion
const Data1: ChampionDetails[] = [
  {
    
    champion: 'TwistedFate',
    quote: "Never lost a fair game. Won't play one.",
    title: 'Card Master',
    story: 'Twisted Fate is the one character in League of Legends that truly represents me. I like to take gambles hypothetically and learn from them.',
    skin1: twisted1,
    skin2: twisted2,
    skin3: twisted3,
    play: twistedplay,
  },
  {
  
    champion: 'Orianna',
    quote: 'We will kill your enemies. That will be fun.',
    title: 'Lady of Clockwork',
    story: 'Orianna is my favorite blind pick in solo queue. She has a solid laning phase regardless of the matchup and scales well into the late game.',
    skin1: orianna1,
    skin2: orianna2,
    skin3: orianna3,
    play: oriannaplay,
  },
  {
   
    champion: 'Lissandra',
    quote: 'I will bury the world in ice.',
    title: 'Ice Witch',
    story: 'Lissandra is my most-played champion competitively, as she was always a high-priority pick back in the day due to her strong team-fighting abilities.',
    skin1: lissandra1,
    skin2: lissandra2,
    skin3: lissandra3,
    play: lissandraplay,
  }
];

export default Data1;