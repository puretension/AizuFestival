'use client';

import React from 'react';

const timetableData = [
  { time: '8:00', event: '행사 시작' },
  { time: '8:30', event: '선조 추수감사절 식전' },
  { time: '9:30', event: '번공행렬 출진식 / 닛신칸동자행렬 / 고리대 퍼레이드 출발식' },
  { time: '10:00', event: '닛신칸동자행렬 / 고리대 퍼레이드 출발' },
  { time: '10:30', event: '번공행렬 출진 / 아이즈 마츠리 이벤트' },
  { time: '11:00', event: '닛신칸동자행렬 귀진식 / 아이즈 마츠리 이벤트' },
  { time: '11:30', event: '아이즈 사자의 춤 / 아이즈 마츠리 이벤트' },
  { time: '12:00', event: '교엔 음악연구회 / 아이즈 마츠리 이벤트' },
  { time: '12:30', event: '아이즈 민속무용 / 아이즈 마츠리 이벤트' },
  { time: '13:00', event: '아이즈 마츠리 이벤트' },
  { time: '13:30', event: '번공행렬 공개 귀환 / 아이즈 마츠리 이벤트' },
  { time: '14:00', event: '아이즈 마츠리 이벤트' },
  { time: '17:30', event: '등불행렬 출발식' },
  { time: '18:00', event: '등불행렬 출발' },
  { time: '19:00', event: '등불행렬 / 반다이산 춤' },
  { time: '20:00', event: '반다이산 춤' },
];

const FestivalTimetable = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-6 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-8">
        아이즈 축제 타임테이블
      </h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {timetableData.map((entry, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-gradient-to-r from-white via-indigo-100 to-indigo-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-lg font-semibold text-indigo-700 mb-2">
                {entry.time}
              </div>
              <div className={`text-gray-800 ${!entry.event ? 'italic text-gray-400' : ''}`}>
                {entry.event || '---'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FestivalTimetable;
