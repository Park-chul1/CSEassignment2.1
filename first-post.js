import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>PARK CHUL</h1>
      <p> I'm 20 years old </p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
