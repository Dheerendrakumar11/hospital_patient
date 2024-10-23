import Layout from '../component/layout';
import Image from 'next/image';
import contact from '../../../public/contact.avif'

const About = () => {
  return (
    <Layout>
      <div className="pt-8">

        <div className='h-full max-h-[400px] w-full max-w-7xl mx-auto shadow-xl'>
          <Image src={contact} alt='contact' className="h-full max-h-[300px] w-full object-fit mt-16 " />
        </div>

        <div className='w-full h-full px-4 md:px-16 mt-16'>
          <div className="mb-8">
            <span className="text-[24px] font-bold text-[#059669]">ADDRESS</span>
            <br />
            <span className="text-[18px]">Hospital Badasah Nagar, Lucknow (U.P.) PIN - 277302</span>
          </div>
          
          <div>
            <span className="text-[24px] font-bold text-[#059669]">CONTACT DETAILS</span>
            <br />
            <span className="text-[18px]">Mobile- +919865321474</span>
            <br/>
            <span className="text-[18px]">Gmail- abcgj@gmail.com</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
