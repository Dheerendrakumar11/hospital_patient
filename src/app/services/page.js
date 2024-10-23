import Layout from '../component/layout';
import Image from 'next/image'
import doc1 from '../../../public/doc1.jpg'
const About = () => {
  return (
    <Layout>
        <div className="pt-16 ">
         
          <div className="h-screen w-full max-h-5xl pt-4">
        <div className="text-center font-bold">
          <span className="text-[24px] md:text-[28px] underline text-[#059669]">
            OUR SERVICES
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-4 md:m-8 justify-center">
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              CARDIOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
            NEUROLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
            DERMATOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
            GYNAECOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
            NEPHROLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
            OPTOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              GASTROLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
         UROLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
        </div>
      </div>
      </div>

    </Layout>
  );
};

export default About;
