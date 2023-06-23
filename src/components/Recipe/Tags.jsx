import Tag from "./Tag"

export default function Tags({tags}) {
    return (
        <div className="flex gap-4 mt-4">
            {tags.map((tag, index)=> <Tag tag={tag} key={index}/>)}
        </div>
    )
}