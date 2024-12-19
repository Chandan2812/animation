import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Section = {
  id: number;
  backgroundColor: string;
  content: React.ReactNode;
  image: string;
};

type AnimatedSectionProps = {
  section: Section;
  isReversed: boolean;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ section, isReversed }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,   // Trigger when 20% of the section is visible
  });

  return (
    <motion.div
      id="features"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row gap-9 w-11/12 mx-auto mb-20 rounded-xl h-fit ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center py-8 px-8 md:px-10 ${section.backgroundColor}`}
    >
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 text-black"
      >
        {section.content}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={section.image}
          alt={`Section ${section.id}`}
          className="rounded-lg shadow-lg w-full h-[25vh] md:h-[60vh]"
        />
      </motion.div>
    </motion.div>
  );
};

const Animation3: React.FC = () => {
  const sections: Section[] = [
    {
      id: 1,
      backgroundColor: "bg-yellow-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Social Media Campaign</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Ads
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          We create dynamic social media strategies that build your brand, engage your audience, and boost conversions. From content creation to ad campaigns, we handle it all so you can shine across platforms like Facebook, Instagram, LinkedIn, and more.
          </p>
        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0c75865ce04bc4a2f6962_features-1-p-800.webp",
    },
    {
      id: 2,
      backgroundColor: "bg-blue-200",
      content: (
        <>
         <h1 className="text-4xl font-bold">Marketing Strategy</h1>
        <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
          Tailored Solutions
        </div>
        <p className="mt-4 text-lg leading-relaxed text-justify">
          Success starts with a plan! Our team crafts data-driven marketing strategies
          tailored to your business goals. We analyze your market, identify opportunities, 
          and create a roadmap to boost your brand's visibility and profitability. With 
          multichannel campaign planning and performance tracking, we ensure every step is 
          optimized for growth.
        </p>

        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0c91de4d89a6bc9f7400e_features-2-p-800.webp",
    },
    {
      id: 3,
      backgroundColor: "bg-purple-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Creative Designs</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Stunning Visuals
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            First impressions matter, and our designs ensure they’re unforgettable. From 
            eye-catching logos and branding to social media graphics and UI/UX designs, 
            we create visually compelling materials that captivate your audience and leave 
            a lasting impact. Let your brand's identity shine with our creative expertise.
          </p>

        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0cff2b375cf7c08117505_features-3-p-800.webp",
    },
    {
      id: 4,
      backgroundColor: "bg-green-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">SEO</h1>
<div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
  Search Engine Optimization
</div>
<p className="mt-4 text-lg leading-relaxed text-justify">
  Elevate your online presence with our expert SEO solutions. We specialize in optimizing your website’s structure, content, and keyword strategy to boost search engine rankings. Through comprehensive on-page and off-page SEO techniques, we enhance your site’s visibility, improve user experience, and drive consistent, organic traffic growth. Our data-driven approach ensures continuous monitoring, refinement, and optimization of your SEO efforts, keeping you ahead of the competition and positioning you for long-term online success.
</p>


        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0cff2b375cf7c08117505_features-3-p-800.webp",
    },
  ];

  return (
    <div>
        <h1 className="text-center text-3xl font-bold my-10">Animation 3</h1>
      {sections.map((section, index) => (
        <AnimatedSection
          key={section.id}
          section={section}
          isReversed={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Animation3;