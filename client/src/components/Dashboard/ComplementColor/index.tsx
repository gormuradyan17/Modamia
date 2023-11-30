import HeadingUI from "shared/ui/HeadingUI/HeadingUI"




const ComplementColor=()=>{
    const data=[
        {
            id:1,
            img:"image/complement_1.webp",
            title:"Collection title"
        },
        {
            id:2,
            img:"image/complement_2.webp",
            title:"Collection title"
        },
        {
            id:3,
            img:"image/complement_3.webp",
            title:"Collection title"
        },
    ]
    return(
        <section className="complement_container">
            <HeadingUI text="COLORS THAT COMPLEMENT YOU"/>
          <div className="complement_content">  
            {data.map(i=>(
                <div key={i.id} className="complement_block">
                   <img src={i.img} alt=""/>
                   <p>{i.title}</p>
                </div>
            ))}
        </div>
        </section>
    )
}

export default ComplementColor