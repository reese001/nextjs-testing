"use client";

import { Order, Topping, Note } from "@/tools/orders.model";

export default function OrderDetails({
    id,
    name,
    address,
    city,
    size,
    delivered,
    toppings,
    notes,
}: Order) {
    console.log(name);
    return (
        <div>
            <div className="mt-3">
                <h2 className="text-2xl text-red-700 font-bold mb-3">
                    Order #{id}:
                </h2>
            </div>
            <div className="mb-2">
                <h2 className="font-bold text-sm">
                    <i className="fa-solid fa-circle-info pr-1 text-sm"></i>
                    Customer Information
                </h2>
                <p className="text-sm leading-4">{name}</p>
                <p className="text-sm leading-4">{address}</p>
                <p className="text-sm leading-4">{city}</p>
            </div>
            <div className="mb-2">
                <h2 className="font-bold text-sm">
                    <i className="fa-solid fa-pizza-slice pr-1 text-sm"></i>
                    Pizza Size
                </h2>
                <p className="text-sm">{size}</p>
            </div>
            <div className="mb-2">
                <h2 className="font-bold text-sm">
                    <i className="fa-solid fa-list pr-1 text-sm"></i>Order
                    Details
                </h2>
                {toppings.map((topping: Topping, i: number) => (
                    <p className="text-sm leading-4" key={i}>
                        {topping.topping}
                    </p>
                ))}
            </div>
            <div className="mb-5">
                <h2 className="font-bold text-sm">
                    <i className="fa-solid fa-note-sticky pr-1 text-sm"></i>
                    Order Notes
                </h2>
                {notes.map((note: Note, i: number) => (
                    <p className="text-sm leading-4" key={i}>
                        {note.note}
                    </p>
                ))}
            </div>
        </div>
    );
}
