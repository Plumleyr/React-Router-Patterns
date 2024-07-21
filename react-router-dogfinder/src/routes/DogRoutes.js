import { Route, Routes } from 'react-router-dom'
import DogDetails from '../components/DogDetails'
import DogList from '../components/DogList'

const DogRoutes = ({ dogs }) => {
  return (
    <Routes>
      <Route
        path="/dogs"
        element={<DogList dogs={dogs} />}
      />
      <Route
        path="/dogs/:name"
        element={<DogDetails dogs={dogs} />}
      />
    </Routes>
  );
};

export default DogRoutes;