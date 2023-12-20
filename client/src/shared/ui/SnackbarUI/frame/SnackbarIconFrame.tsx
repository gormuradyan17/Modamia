import './style.scss'

const SnackbarIconFrame = ({ children, variant }: any) => {
  return (

    <div className='SnackbarFrameStyles'>
      <div className='SnackbarIconFrameStyles'>
        <div className='SnackbarIconStyles'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SnackbarIconFrame;
