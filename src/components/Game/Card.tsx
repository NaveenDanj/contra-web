import Tilt from 'react-parallax-tilt';

function Card() {
  return (
    <div className='tw-flex tw-gap-5'>

      <Tilt>
        <div 
          style={{ background : 'url(\'./cards/Ace.png\')' , backgroundSize:'contain' , backgroundRepeat : 'no-repeat'}} 
          className="sm:tw-w-[190px] sm:tw-h-[235px] tw-w-[200px]  tw-h-[250px]"
        >
            
        </div>
      </Tilt>

    </div>
  );
}

export default Card;