export default function Stats( {items} ) {
    if(!items.length) return <p className="stats"><em>Start adding some items to your packing list 🚀</em></p>;

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentPacked = Math.round(numPacked/numItems * 100);
    
    return(
        percentPacked === 100 ? <footer className="stats"> <em>You have everything! Ready to go ✈️</em></footer> : <footer className="stats">
            <em>💼You have {numItems} items on your list and you already packed {numPacked} items ({percentPacked}%)</em>
        </footer>
    );
}