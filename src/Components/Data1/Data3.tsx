import Despecableme1 from '../../assets/Movies/Despecable-me1.avif';
import Despecableme2 from '../../assets/Movies/Despecable-me2.png';
import Despecableme3 from '../../assets/Movies/Despecable-me3.avif';
import Despecableme4 from '../../assets/Movies/Despecable-me4.jpg';
import Despecableme5 from '../../assets/Movies/Despecable-me3.avif';
import ElMacho from '../../assets/Movies/ElMacho_1.mp4';
import Madagascarpenguings1 from '../../assets/Movies/Penguings-1.jpg';
import Madagascarpenguings2 from '../../assets/Movies/Penguings-2.jpg';
import Madagascarpenguings3 from '../../assets/Movies/Penguings-3.jpg';
import Madagascarpenguings4 from '../../assets/Movies/penguings12.jpg';
import Madagascarpenguings5 from '../../assets/Movies/Penguings-5.jpg';
import Penguinscene from '../../assets/Movies/Madagascar-penguings_1.mp4';
import Wreckitralph1 from '../../assets/Movies/Wreckit-ralph1.avif';
import Wreckitralph2 from '../../assets/Movies/Wreckit-ralph1.avif';
import Wreckitralph3 from '../../assets/Movies/Wreckit-Ralph2.avif';
import Wreckitralph4 from '../../assets/Movies/Wreckit-Ralph2.avif';
import Wreckitralph5 from '../../assets/Movies/Wreckit-Ralph2.avif';
import Wreckitscene from '../../assets/Movies/RalphBreaksTheInternet_1.mp4';

interface MovieData {
  name: string;

  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  video: string;
}

const Data3: MovieData[] = [
  {
    name: 'despecable me',
    
   
    image1: Despecableme1,
    image2: Despecableme2,
    image3: Despecableme3,
    image4: Despecableme4,
    image5: Despecableme5,
    video: ElMacho,
  },
  {
    name: 'madagascar penguins',

    image1: Madagascarpenguings1,
    image2: Madagascarpenguings2,
    image3: Madagascarpenguings3,
    image4: Madagascarpenguings4,
    image5: Madagascarpenguings5,
    video: Penguinscene,
  },
  {
    name: 'Ralph breaks the internet',

    image1: Wreckitralph1,
    image2: Wreckitralph2,
    image3: Wreckitralph3,
    image4: Wreckitralph4,
    image5: Wreckitralph5,
    video: Wreckitscene,
  },
];

export default Data3;
