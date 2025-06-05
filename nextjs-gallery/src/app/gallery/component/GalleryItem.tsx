"use client"

import { Photo } from "../page"
import Link from "next/link"
import Image from 'next/image'

type Props = {
  galleryItem: Photo
}

const GalleryItem = ({galleryItem}: Props) => {
  return (
    <li className="flex justify-center">
      <Link href={`gallery/${galleryItem.id}`}>
        <Image
          src={galleryItem.thumbnailUrl}
          alt={galleryItem.title}
          width={180}
          height={180}
        />
      </Link>
    </li>
  )
}

export default GalleryItem