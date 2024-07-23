import Link from "next/link";

interface Blog { 
    "slug" : string,
    "title" : string,
    "content" : string
}

export default async function Blog() { 
    const res = await fetch("https://wdcc-academy-mini-project.vercel.app/api/blogs");
    const r = (await res.json()) as Blog[];
    const link = "https://wdcc-academy-mini-project.vercel.app/api/blogs/";

    return (
        <>
        <h1 className="p-5 text-lg font-semibold">Blogs</h1>
        { r.map((t) => ( 
            <Link href={`/blogs/${t.slug}`} className="block p-5 text-m">{t.title}</Link>
        )) }

        </>
    );
}