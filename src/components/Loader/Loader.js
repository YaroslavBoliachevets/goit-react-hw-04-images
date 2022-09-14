import { LoaderWrapper } from './Loader.module';
import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return(
	<LoaderWrapper>
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  </LoaderWrapper>
  )
};

export default Loader;