import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots color="#7be8ea;" />
    </LoaderContainer>
  );
};
export default Loader;
