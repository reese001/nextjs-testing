"use client";

import { useEffect, useState } from "react";
import { getJSONData } from "@/tools/Toolkit";
import { Orders, Order } from "@/tools/orders.model";
import LoadingOverlay from "./LoadingOverlay";
import OrderDetails from "./OrderDetails";

export default function OrdersReport({
    setAppState,
    appState,
}: {
    setAppState: Function;
    appState: number;
}) {
    // retrieve server sided script
    const RETRIEVE_SCRIPT: string =
        "https://www.seanmorrow.ca/_lessons/retrieveOrder.php";

    // ------------- private methods
    const getOrders = async () => {
        const data: Orders = await getJSONData(RETRIEVE_SCRIPT, false, true);
        console.log(data);
        // save it in a state variable - because it is used in JSX and needs to persist
        setOrders(data.orders);

        // data all loaded, change state of web app
        setAppState(3);
    };

    // ------------- use effects
    useEffect(() => {
        if (appState == 2) getOrders();
    }, [appState]);

    // ----------------------------- state variables
    const [orders, setOrders] = useState<Order[]>([]);

    if (appState == 1) {
        return <>No orders retrieved...</>;
    } else if (appState == 2) {
        return <LoadingOverlay show={appState == 2} bgColor="#EDEDED" />;
    } else if (appState == 3) {
        return (
            <>
                <div className="divide-dotted divide-red-700 divide-y-2">
                    {orders.map((order: Order, i: number) => (
                        <OrderDetails
                            key={i}
                            id={order.id}
                            name={order.name}
                            address={order.address}
                            city={order.city}
                            size={order.size}
                            delivered={order.delivered}
                            toppings={order.toppings}
                            notes={order.notes}
                        />
                    ))}
                </div>
            </>
        );
    }
}
