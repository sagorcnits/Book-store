

const TotalBook = ({cart}) => {
// console.log(cart)

    return (
        <div className="p-3"> 
            <h1 className="text-center font-bold">Total Add Item</h1>
           
                <table className="w-full">
                    <thead >
                        <tr className="flex justify-between">
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {cart.map((cart,id)=> {
                            return (
                                 <tr key={id} className="flex justify-between mt-2 card">
                                        <td>{cart.title}</td>
                                        <td>${cart.price}</td>
                                   </tr>
                            
                            
                            )
                        })}
                    </tbody>
                    
                </table>
           
        </div>
    );
};

export default TotalBook;