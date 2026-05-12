import Course from "@/(app)/courses/_components/Course";
import {useState} from "react";

export default function CardCourse() {

    const [selectedCourse, setSelectedCourse] = useState<any>(null)

    return (
        <>
            <li id={"card-course"} className={"flex flex-col w-full mt-[15px]"}>

                {!selectedCourse && (
                    <ul className="flex flex-wrap gap-[25px] items-center overflow-hidden justify-center ">
                        <li className="w-full md:w-[420px]"><Course onClick={setSelectedCourse}/></li>
                        <li className="w-full md:w-[420px]"><Course onClick={setSelectedCourse}/></li>
                        <li className="w-full md:w-[420px]"><Course onClick={setSelectedCourse}/></li>
                        <li className="w-full md:w-[420px]"><Course onClick={setSelectedCourse}/></li>
                    </ul>
                )}

                {selectedCourse && (
                    <div className={"flex justify-around items-center"}>

                        <div className={"flex w-full"}>
                            <ul className={"flex gap-[10px]"}>

                                <li className={"p-[7px] text-white rounded-[10px] bg-[#0f172a] cursor-pointer"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z"/></svg>
                                </li>
                                <li className={"p-[7px] text-white rounded-[10px] bg-[#0f172a] cursor-pointer"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z"/></svg>
                                </li>

                                <li className={"p-[7px] text-white rounded-[10px] bg-[#0f172a] cursor-pointer"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-120v-80h560v80H200Zm123-223q-56-63-56-167v-330h103v336q0 56 28 91t82 35q54 0 82-35t28-91v-336h103v330q0 104-56 167t-157 63q-101 0-157-63Z"/></svg>
                                </li>

                                <div className={"separator border-1 border-solid border-[#0f172a] "}></div>

                                <li className={"p-[7px] text-white rounded-[10px] bg-[#0f172a] cursor-pointer"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Z"/></svg>                            </li>

                                <li className={"p-[7px] text-white rounded-[10px] bg-[#0f172a] cursor-pointer"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z"/></svg>
                                </li>

                                <li className={"p-[7px] text-white rounded-[10px] bg-[#0f172a] cursor-pointer"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-760v-80h720v80H120Zm240 160v-80h480v80H360ZM120-440v-80h720v80H120Zm240 160v-80h480v80H360ZM120-120v-80h720v80H120Z"/></svg>
                                </li>

                                <li className={"p-[7px] text-white rounded-[10px] bg-[#0f172a] cursor-pointer"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-80h720v80H120Zm160-160v-80h400v80H280ZM120-440v-80h720v80H120Zm160-160v-80h400v80H280ZM120-760v-80h720v80H120Z"/></svg>
                                </li>

                                <div className={"separator border-1 border-solid border-[#0f172a] "}></div>

                                <li className={"p-[7px] text-white rounded-[10px] bg-[#0f172a] cursor-pointer"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>
                                </li>

                                <li className={"p-[7px] text-white rounded-[10px] bg-[#0f172a] cursor-pointer"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z"/></svg>
                                </li>


                            </ul>
                        </div>

                        <div className={"flex"}>
                            <button className={"button bg-[#0f172a] text-white"}>Sauvegarder</button>
                        </div>



                    </div>
                )}

            </li>
        </>
    )
}