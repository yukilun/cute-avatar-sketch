import Template from '@/components/Template'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Template>
        <div>
            <div className='flex text-7xl justify-center items-center'>
                4
                <Image src='/avatar/avatar_4406.png' alt='0' height={100} width={100} className='object-contain'/>
                4
            </div>
            <div className='text-center text-xl'>Page Not Found!</div>
            <div className='text-center my-10 text-xl'>
                <Link href="/" className="inline-block p-3 bg-cyan-200 text-gray-800 rotate-2 scale-90 shadow-md dark:shadow-white transition-all duration-50 hover:rotate-0 hover:scale-100 ">
                    Go To Home
                </Link>
            </div>
        </div>
    </Template>
  )
}
