export default function TituloContainer (props){


    return(
        <div className={` flex flex-col justify-center`} >
            <h1 className={` px-5 py-2 dark:text-gray-50
            
            `}>
                {props.children}
            </h1>
            <hr  className={` border-4 border-blue-500`}/>
        </div>

    )
}