import imagesPathData from "../imagesPathData";

function Stack() {
   console.log(imagesPathData);
    const images = imagesPathData.map(imageItem => 
    <img 
        className="imgStack"
        src={imageItem.src}
        alt={imageItem.alt}
    />);

    return (
        <div className="stackSection">
            <div className="stack-images-container">
                {images}
            </div>
        </div>
    );
}

export default Stack;