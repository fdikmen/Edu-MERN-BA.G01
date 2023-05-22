import Link from "next/link"
export default function Home() {
  return (
    <main>
      <h1>
        Welcome to Next.js!
      </h1>
      <Link href="/about">About</Link> <br />
      <Link href="/products/phone">Phones</Link> <br />
      <Link href="/contact">Contact</Link><br />
      <Link href={
        {
          pathname: '/products/laptop',
          query: {
            name: 'laptop',
            price: 1000,
          },
          // replace: false,
          prefetch: true,
        }
      }>Laptops</Link> <br />

      <Link href="/products/keyboards" replace={false}>Keyboards</Link> 
    </main>
  )
}
