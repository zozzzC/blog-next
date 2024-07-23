import Image from "next/image";
import Link from "next/link";
import profilePic from '/public/kavehbbg.png'

const Navbar = () => {
    return ( 
    <>
    <div className="flex p-5 object-scale-down bg-zinc-100 items-center overflow-auto">  
        <Image 
        src={profilePic}
        alt="Profile pic"
        className="object-contain rounded-full"
        height="50"
        width="50"
        />
        <Link href="/homepage" className="font-semibold p-5">Home</Link>
        <Link href="/blogs" className="font-semibold">Blogs</Link>
    </div>
    </> );
}
 
export default Navbar;