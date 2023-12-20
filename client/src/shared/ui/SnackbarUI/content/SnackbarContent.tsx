import './style.scss'

const SnackbarContent = ({ children }: any) => {
  return (
    <div className='SnackbarContentWrapperStyles'>
      <div className='SnackbarContentStyles'>
        {children}
      </div>
    </div>
  );
};

export default SnackbarContent;
