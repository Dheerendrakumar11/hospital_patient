import Layout from '../component/layout';
import Image from 'next/image';
import main from '../../../public/doc.jpg'
import director from '../../../public/DIRECTOR.avif'
const About = () => {
  return (
    <Layout>
      <div className='mt-16 flex justify-center'>
        <span className='text-[30px] font-bold text-[#059669] '>OUR MANAGEMENT</span>

      </div>
      <div className=" h-[500px] w-full max-w-[1256px]  flex  gap-16 m-8">
        <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden ">
          <Image
            src={main}
            alt="photo"
            className="h-full  w-full object-cover rounded-t-lg"
          />
        </div>
        <div className=" mt-2">
          <snap className="text-[18px] md:text-[20px] font-bold text-[#059669]"> john thaoms</snap>
          <br />
          <snap className="font-light text-[12px]">SR. ADVISOR. HOSPITAL</snap>
          <p>john thaoms The Hospital Senior Advisor is a key member of the healthcare leadership team, providing expert guidance and strategic direction to improve the quality of patient care, operational efficiency, and financial performance. This role requires a deep understanding of healthcare systems, clinical practices, and regulatory requirements.
          </p>
        </div>
      </div>
      <div className=" h-[500px]   w-full max-w-[1256px]  flex  gap-16 m-8">
        <div className="h-full max-h-[300px] md:max-h-[400px] w-[600px] shadow-lg p-4 overflow-hidden ">
          <Image
            src={director}
            alt="photo"
            className="h-full  w-full object-cover rounded-t-lg"
          />
        </div>
        <div className=" mt-2">
          <snap className="text-[18px] md:text-[20px] font-bold text-[#059669]"> Abhishek singh</snap>
          <br />
          <snap className="font-light text-[12px]">DIRECTOR</snap>
          <p>john thaoms The Hospital Senior Advisor is a key member of the healthcare leadership team, providing expert guidance and strategic direction to improve the quality of patient care, operational efficiency, and financial performance. This role requires a deep understanding of healthcare systems, clinical practices, and regulatory requirements.
          </p>
        </div>
      </div>

    </Layout>
  );
};

export default About;
