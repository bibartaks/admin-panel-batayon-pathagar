import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container py-10'>
        <h1 className='mb-5 text-2xl font-medium text-center'>
          Welcome to Batayon Pathagar Admin Panel
        </h1>
        <h1 className='mb-4 text-2xl font-bold'>Science</h1>
        <h3 className='mb-3 font-semibold'>Choose a subject:</h3>
        <Link href='/physics_1' className='block mb-3 text-sm underline'>
          Physics First Paper
        </Link>
        <Link href='/physics_2' className='block mb-3 text-sm underline'>
          Physics Second Paper
        </Link>
        <Link href='/higher_math_1' className='block mb-3 text-sm underline'>
          Higher Math First Paper
        </Link>
        <Link href='/higher_math_2' className='block mb-3 text-sm underline'>
          Higher Math Second Paper
        </Link>
        <Link href='/chemistry_1' className='block mb-3 text-sm underline'>
          Chemistry First Paper
        </Link>
        <Link href='/chemistry_2' className='block mb-3 text-sm underline'>
          Chemistry Second Paper
        </Link>
        <Link href='/biology_1' className='block mb-3 text-sm underline'>
          Biology 1
        </Link>
        <Link href='/biology_2' className='block mb-3 text-sm underline'>
          Biology 2
        </Link>
        <Link href='/ict' className='block mb-3 text-sm underline'>
          ICT
        </Link>
        <h1 className='mb-4 text-2xl font-bold'>Humanities</h1>
        <Link href='/geography_1' className='block mb-3 text-sm underline'>
          Geography 1
        </Link>
        <Link href='/geography_2' className='block mb-3 text-sm underline'>
          Geography 2
        </Link>
        <Link href='/phychology_1' className='block mb-3 text-sm underline'>
          Phychology 1
        </Link>
        <Link href='/phychology_2' className='block mb-3 text-sm underline'>
          Phychology 2
        </Link>
      </div>
    </main>
  );
}
