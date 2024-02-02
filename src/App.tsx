import HelthBar from './components/Game/HelthBar';


function App() {

  return (
    <div 
      className="tw-flex tw-justify-between tw-items-center tw-w-screen tw-min-h-screen tw-flex-col" 
      style={{ background : 'url(\'./background/astral.jpg\')' , backgroundSize:'cover' , backgroundRepeat : 'no-repeat' , backgroundPosition: 'center' }}
    >
      
      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-px-1">
        <HelthBar />
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-px-1">
        <HelthBar />
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-px-1">
        <HelthBar />
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-px-1">
        <HelthBar />
      </div>

      

    </div>
  );
}

export default App;
