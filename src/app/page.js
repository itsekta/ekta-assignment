import './page.css';
import NavBar from '@/components/NavBar';
import HeaderSection from '@/components/HeaderSection';
import TimerSection from '@/components/TimerSection';
import EmailSection from '@/components/EmailSection';
import BlobAnimation from '@/components/BlobAnimation';
export default function Home() {
  return (
    <main className="min-h-screen main">
      <BlobAnimation />
      <NavBar />
      <div className="main-section">
        <HeaderSection />
        <div className="get-ready-text">Get Ready for the reveal!</div>
        <TimerSection />
        <EmailSection />
      </div>
    </main>
  );
}
