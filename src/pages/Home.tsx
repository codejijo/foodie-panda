import { useState } from "react";
import { Items, Item_categories } from "../components/common/Data";
import Arrow from "../assets/icons/arrow.svg";


const Home = () => {

    const [open, setOpen] = useState(0);

    return (
        <div className="w-full h-auto container mx-auto p-4 sm:p-0 flex flex-col gap-y-4">
            {Item_categories.map(cat => (
                <div key={"Item Category " + cat.id} className="w-full h-auto bg-pri-black rounded-lg p-2 flex flex-col gap-y-2">
                    <h2 className="text-2xl font-semibold">Panda's {cat.name}</h2>
                    {Items.filter(e => e.category === cat).map(item => (
                        <>
                            <div key={"Food Items " + item.id} className="h-10 px-2 flex justify-between items-center"  onClick={() => setOpen(open === 0 ? item.id : 0)}>
                                <div className="">{item.name}</div>
                                {item.price.length === 1 ? (
                                    <div className="">{item.price[0].value}</div>
                                ) : (
                                    <img src={Arrow} alt="Arrow" className={`w-4 h-4 ${open === item.id ? "transform rotate-180" : ""}`} />
                                )}
                            </div>
                            {item.id === open && item.price.map(el => (
                                <div key={item.name + el.type} className="h-10 px-2 mx-2 flex justify-between items-center bg-pri-skyblue text-pri-black rounded-lg font-semibold">
                                    <div className="">{el.type}</div>
                                    <div className="">{el.value}</div>
                                </div>
                            ))}
                        </>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Home;