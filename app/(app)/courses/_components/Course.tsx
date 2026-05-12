import './course.css';

export default function Course({title, onClick}:{title:string, onClick?: (course: any) => void,}) {
    return(
        <div className={"course-item"} onClick={onClick}>
            <div className={"course-head"}>
                <ul className={"tags-list"}>
                    <li className={"tag-item loading"}>
                        <p></p>
                    </li>
                </ul>
                <div className={"price loading"}>
                    <p></p>
                </div>
            </div>

            <div className={"course-content"}>
                <div className={"course-title loading"}>
                    <h1>{title}</h1>
                </div>
                <div className={"course-description loading"}>
                    <p></p>
                </div>
            </div>
            <div className={"course-footer"}>
                <div className={"lessons-count loading"}>
                    <p></p>
                </div>
                <div className={"participants-count loading"}>
                    <p></p>
                </div>
            </div>
        </div>
    )
}