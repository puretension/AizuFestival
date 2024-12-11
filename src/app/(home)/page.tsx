import AboutGDSC from '@/components/home/aboutGDSC/AboutGDSC';
import AboutGDSCDGU from '@/components/home/aboutGDSCDGU/AboutGDSCDGU';
import Activity from '@/components/home/activity/Activity';
import { CardComponents } from "@/components/home/banner/CardComponents";
import FestivalTimetable from "@/components/home/banner/FestivalTimetable";
import HomeBanner from '@/components/home/banner/HomeBanner';
import MoreAbout from '@/components/home/moreAbout/MoreAbout';
import StoriesFrom from '@/components/home/storiesFrom/StoriesFrom';
import React from 'react';

const HomePage = () => {
  return (
    <main className="w-full overflow-hidden">
      {/* 배너 */}
      <HomeBanner />
      <CardComponents />
      <FestivalTimetable />
      {/* GDSC 소개 */}
      {/* <AboutGDSC /> */}
      {/* GDSC DGU 소개 */}
      {/* <AboutGDSCDGU /> */}
      {/* 사진 자랑 */}
      {/* <StoriesFrom /> */}
      {/* 활동 소개 */}
      {/* <Activity /> */}
      {/* 채널 소개 */}
      {/* <MoreAbout /> */}s
    </main>
  );
};

export default HomePage;
