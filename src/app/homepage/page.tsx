import styles from "./homepage.module.css";

export default function Blog() { 
    return (
        <div className="flex content-stretch flex-1 flex-col h-full">
            <div>
                <p className="flex-col p-8 outline outline-pink-500 text-center">header</p>
            </div>
            <div className="flex h-full grow justify-center items-center text-center"> 
                {/* grow means that it will take the remaining space, since the headers take up the top, this means they will take the remainder */}
                <div className="flex outline-indigo-600 h-full outline items-center">
                    <p className="p-8 ">sidebar</p> 
                </div>
                <div className="flex-1 outline-cyan-400 flex h-full outline justify-center items-center">
                    <p className="p-8">main</p>
                </div>
            </div> 
        </div>
    );
}