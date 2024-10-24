import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categorys = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                categorys.map(categorey => <Category key={categorey.id} categorey={categorey}></Category> )
            }
        </div>
    );
};

export default Categorys;