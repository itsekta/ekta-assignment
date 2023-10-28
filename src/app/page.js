'use client';
import './page.css';
import NavBar from '@/components/NavBar';
import HeaderSection from '@/components/HeaderSection';
import TimerSection from '@/components/TimerSection';
import NotificationSection from '@/components/NotificationSection';
import BlobAnimation from '@/components/BlobAnimation';
export default function Home() {
  return (
    <main className="min-h-screen main">
      <BlobAnimation />
      <NavBar />
      <div className="main-section-wrapper">
        <div className="main-section">
          <HeaderSection />
          <div className="get-ready-text">Get Ready for the reveal!</div>
          <TimerSection />
          <NotificationSection />
        </div>
      </div>
    </main>
  );
}
