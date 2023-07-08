
export default function RenderItem() {
    const product = [
        { tittle: 'cabbage', isFruit: false, id: 1 },
        { tittle: 'apple', isFruit: true, id: 2 },
        { tittle: 'Garlic', isFruit: false, id: 3 },
    ]

    const list = product.map(product =>
        <li key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.tittle}
        </li>
    );
    return (
        <>
            <ol>{list}</ol>
        </>
    );
}