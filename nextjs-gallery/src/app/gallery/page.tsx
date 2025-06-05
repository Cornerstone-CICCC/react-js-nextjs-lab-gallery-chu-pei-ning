import React from 'react'
import GalleryItem from './component/GalleryItem'

export interface Photo {
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

const fetchPhotos = async () => {
  const res = await fetch("http://localhost:3000/api/gallery")
  const data = await res.json()
  return data
}

const page = async () => {
  const photos: Photo[] = await fetchPhotos()

  return (
    <div>
      <h1 className='flex justify-center'>Gallery</h1>
      <ul className='grid grid-cols-7 gap-4 m-3'>
        {photos.map(p => (
          <GalleryItem key={p.id} galleryItem={p}/>
        ))}
      </ul>
    </div>
  )
}

export default page