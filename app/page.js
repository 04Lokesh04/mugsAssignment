import MainSection from "./components/MainSection/page";
import AboutMe from "./components/AboutME/pages";
import Services from "./components/Services/page";
import MyProjects from "./components/MyProjects/page";
import Testimonials from "./components/Testimonials/page";
import MailSection from "./components/MailSection/page";
import Contacts from './components/Contacts/page';

export default function Home() {
  return (
    <main className="main">
      <MainSection />
      <AboutMe />
      <Services />
      <MyProjects />
      <Testimonials />
      <MailSection />
      <Contacts />
    </main>
  );
}
