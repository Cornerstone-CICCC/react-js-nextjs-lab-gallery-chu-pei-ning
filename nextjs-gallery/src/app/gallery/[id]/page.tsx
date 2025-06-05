import { Photo } from "../page";
import Image from "next/image";

type Props = {
  params: Promise<{id: string}>
}

const page = async ({params}: Props) => {
  const { id } = await params
  const res = await fetch( `http://localhost:3000/api/gallery/${id}`)
  const data: Photo = await res.json()

  return (
    <div className="flex flex-col place-self-center">
      <h1>Title: {data.title}</h1>
      <Image  
        src={data.url}
        alt={data.title}
        width={600}
        height={600}
      />
    </div>
  )
}

export default page