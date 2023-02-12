import CoreFeatures from "./CoreFeatures";
import Header from "./Header";
import PhotoShowcase from "./PhotoShowcase";
import ProjectsInHomePage from "./Projects";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Testimonials from "./Testimonials";
import VideoSection from "./VideoSection";
import VolunteerSection from "./VolunteerSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <CoreFeatures />
      <VolunteerSection />
      <ProjectsInHomePage />
      <VideoSection />
      <Testimonials />
      <PhotoShowcase />
    </>
  );
};

export default HomePage;
