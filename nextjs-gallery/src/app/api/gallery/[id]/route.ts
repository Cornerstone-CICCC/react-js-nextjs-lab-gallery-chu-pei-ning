export const revalidate = 120

export async function GET(
  request: Request,
  { params} : { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  const data = await res.json()

  const updatedData = {
    ...data,
    thumbnailUrl: `https://placehold.co/300x300`,
    url: `https://placehold.co/1000x1000`
  }

  return Response.json(updatedData)
}