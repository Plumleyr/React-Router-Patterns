import {useParams} from 'react-router-dom'
import whiskey from '../images/whiskey.jpg';
import duke from '../images/duke.jpg';
import perry from '../images/perry.jpg';

const imageMap = {
  whiskey,
  duke,
  perry
};

const DogDetails = ({dogs}) => {
  const {name} = useParams();
  const dog = dogs.find(d => d.name === name);
  const imageSrc = imageMap[dog.src];

  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <img src={imageSrc} alt={dog.name} />
      <ul>
        {dog.facts.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
    </div>
  )
}

export default DogDetails;