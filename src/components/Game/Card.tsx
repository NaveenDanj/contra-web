import Tilt from 'react-parallax-tilt';

function Card() {
  return (
    <div className='tw-flex tw-gap-5'>

      <Tilt>
        <div 
          style={{ background : 'url(\'./cards/Ace.png\')' , backgroundSize:'cover' , backgroundRepeat : 'no-repeat'}} 
          className="tw-w-[250px] tw-h-[320px] tw-p-1"
        >
            
        </div>
      </Tilt>

    </div>
  );
}

export default Card;