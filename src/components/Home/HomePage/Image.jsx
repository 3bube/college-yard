import illustration from '/illustration.png'; 

const Image = () =>{

    return(
        <div className="p-4 flex flex-col items-center mx-4 z-0 ">
        <div className="w-full max-w-md mb-24">
          <img src={illustration} alt="Illustration" className="w-full" /> 
        </div>
      </div>
    );
}

export default Image;