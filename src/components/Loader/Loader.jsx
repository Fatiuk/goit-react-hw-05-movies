import { RingLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RingLoader color="#004d40" size={120} />
    </div>
  );
};

export default Loader;
