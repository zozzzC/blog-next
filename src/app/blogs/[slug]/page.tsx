interface Blog { 
    "slug" : string,
    "title" : string,
    "content" : string
}

export default async function Blog({ params } : {params: {slug : string}}) { 
    const blogContent = await fetch("https://wdcc-academy-mini-project.vercel.app/api/blogs/" + params.slug);
    const res = (await blogContent.json()) as Blog;

    return (
    <>
    <h1 className="p-5 text-lg font-semibold">{res.title}</h1>
    <p className="p-5 text-m">{res.content}</p>
    </>
    );
}