import illustration from '/illustration.png'; 

const Image = () =>{

    return(
        <div className="p-4 flex flex-col items-center mx-4">
        <div className="w-full max-w-md">
          <img src={illustration} alt="Illustration" className="w-full" /> {/* Add path to your illustration */}
        </div>
      </div>
    );
}

export default Image;