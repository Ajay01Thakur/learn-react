
export default function RenderTestItem() {
    const fruits = [
        {tittle:'Apple' , isFruite: true, id:1},
        {tittle:'banana' , isFruite:true , id:2},
        {tittle:'tamato' , isFruite:false , id:3},
        {tittle:'mango' , isFruite:true ,id:4},
    ]

    const list = fruits.map( fruits=>
        <li key={fruits.id}
        style={{
            color:fruits.isFruite ? 'green' :'magenta'
        }}
        >
            {fruits.tittle}
        </li>
        
        );
    return(
        <>
          <ul>
            {list}
          </ul>
        </>
    );
}