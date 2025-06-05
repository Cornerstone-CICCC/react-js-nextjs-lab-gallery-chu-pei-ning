import { Photo } from "@/app/gallery/page";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{id: string}>
}

const page = async ({params}: Props) => {
  const { id } = await params
  const res = await fetch(`http:localhost:3000/api/gallery/${id}`)
  const data: Photo = await res.json() 

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex flex-col items-center justify-center">
      <Image
          src={data.url}
          alt={data.title}
          width={500}
          height={500}
        />
      <div className="flex gap-3">
        <Link href={"/gallery"} className="border-1 px-2 mt-1 inline-block rounded-md shadow-md bg-white">close</Link>
        <a href={`/gallery/${id}`} className="border-1 px-2 mt-1 inline-block rounded-md shadow-md bg-white">View Photo</a>
      </div>
    </div>
  )
}

export default page