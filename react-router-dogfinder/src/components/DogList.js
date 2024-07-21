import { Link } from 'react-router-dom'; 
import whiskey from '../images/whiskey.jpg';
import duke from '../images/duke.jpg';
import perry from '../images/perry.jpg';

const imageMap = {
  whiskey,
  duke,
  perry
};

const DogList = ({dogs}) => {
  return (
    <div>
      <ul>
        {dogs.map(d => {
          const imageSrc = imageMap[d.src];
          return (
          <li key={d.name} id={d.name}>
            <Link to={`/dogs/${d.name}`}>
              <p>{d.name}</p>
            </Link>
            <p>{d.age}</p>
            <img src={imageSrc} alt={d.name}></img>
            {d.facts.map((f, idx) => {
              return (
              <p key={idx}>{f}</p>
              )
            })}
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DogList;