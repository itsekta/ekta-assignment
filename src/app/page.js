'use client';
import './page.css';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import HeaderSection from '@/components/HeaderSection';
import TimerSection from '@/components/TimerSection';
import NotificationSection from '@/components/NotificationSection';
import BlobAnimation from '@/components/BlobAnimation';
import PageSection from '@/components/PageSection';
import TimerPopup from '@/components/TimerPopup';
export default function Home() {
  const [childData, setChildData] = useState('');
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  const handleChildData = data => {
    setShowAnotherComponent(data);
  };
  return (
    <main className="min-h-screen main">
      <BlobAnimation />
      <NavBar />
      <PageSection>
        <div className="main-section-wrapper">
          {!showAnotherComponent && (
            <div className="main-section">
              <HeaderSection />
              <div className="get-ready-text">Get Ready for the reveal!</div>
              <TimerSection isTimerActive={true} initialHours={0} initialMinutes={0} initialSeconds={5} onTimerCompletion={handleChildData} />
              {showAnotherComponent}
              <NotificationSection />
            </div>
          )}
          {showAnotherComponent ? <TimerPopup /> : null}
        </div>
      </PageSection>
    </main>
  );
}
