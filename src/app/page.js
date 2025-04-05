import CoursesOffered from "./components/Home/CourseOffered";
import CTABanner from "./components/Home/CTABanner";
import FAQSection from "./components/Home/FAQSection";
import HeroSection from "./components/Home/HeroSection";
import MeetTrainer from "./components/Home/MeetTrainer";
import PlacementSupport from "./components/Home/PlacementSupport";
import Testimonials from "./components/Home/Testimonials";
import WhyChooseUs from "./components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <CoursesOffered />
      <Testimonials />
      <PlacementSupport />
      <MeetTrainer />
      <FAQSection />
      <CTABanner />
    </>
  );
}
