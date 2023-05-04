export default function Stack({ id, stack }) {

    return (
        <div className='card-stack'>
            {
                stack.map((stackItem, id) => {
                    return <span className='card-stack-item' key={id}>{stackItem}</span>
                })
            }
        </div>
    )
}
