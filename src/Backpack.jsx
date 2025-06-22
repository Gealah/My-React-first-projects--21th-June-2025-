import { useState } from 'react';
function Item({ name }) {
    const [pack, setPack] = useState(false);
    return (
        <li onClick={() => setPack(!pack)}>
            {name} {pack ? '✅' : '❌'}
        </li>
    );
}
export default function Backpack() {
    return (
        <>
            <h1>Backpack List</h1>
            <ol>
                <Item name="Water Bottle" />
                <Item name="Snacks" />
                <Item name="Sun glasses" />
                <Item name="Wallet" />
                <Item name="Clothes" />
            </ol>
        </>
    );
}