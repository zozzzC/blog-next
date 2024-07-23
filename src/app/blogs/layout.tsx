import Navbar from "../_components/Navbar";

export default function Layout({ children } : { children: React.ReactNode}) { 
    return ( 
        <>
            <main>{ children }</main> 
        </>
    );
}