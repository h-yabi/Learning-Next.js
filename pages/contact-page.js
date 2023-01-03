import Layout from '../components/Layout'
import Image from 'next/image'
  
const Contact = () => {
  return (
    <Layout title='Contact'>
      <div className='bg-white text-center shadow-xl p-8 w-80 rounded'>
        <div className='mt-4'>
          <p className='font-bold'>Contact info</p>
        </div>
        <div className='flex justify-center'>
          <Image className='rounded-full' src='/avatar.jpg' width={60} height={60} alt="Avator" />

        </div>
        <div className='mt-4'>
          <p className='font-bold'>Email</p>
          <p>
            <a href='mailto:
            ' className='text-blue-500'>@gmail.com</a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
