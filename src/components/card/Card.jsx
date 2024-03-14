import "./card.css";

const Card = ({book,addItem}) => {
    const { id,img,title,price,rating} = book;
    // console.log(book)
    return (
        <div className="card space-y-4">                 
                <div className="space-y-4 h-[250px]">
                <figure className=" h-[130px] mx-auto">
                    <img className="w-full h-full rounded-lg" src={img} alt="Shoes" />
                </figure>                   
                    <h2 className="font-bold">{title}</h2>
                    <p className="font-bold text-red-500"> Price : ${price}</p>
                    <p>Rating : {rating}</p>                
                </div>
             <button onClick={()=>addItem(book)} className="cardBtn">Buy Now</button>         
        </div>
    );
};

export default Card;