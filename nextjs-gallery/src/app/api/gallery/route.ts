export const revalidate = 120

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=30")
  const data = await res.json()

  const updatedData = data.map((item: any) => ({
    ...item,
    thumbnailUrl: "https://placehold.co/300x300",
    url: "https://placehold.co/1000x1000"
  }))

  return Response.json(updatedData)
}