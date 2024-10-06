import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from '@/components/ui/tabs';

const MyPage = () => {
  const [activeTab, setActiveTab] = useState('전체 스토어');

  const userInfo = {
    name: '노형준',
    membership: 'BASIC',
    points: 0,
    coupons: 0
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">WORKSOUT</h1>
      
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>남성</li>
          <li>여성</li>
          <li>생활</li>
          <li>세일버 스케이트</li>
          <li>브랜드</li>
          <li className="text-red-500">세일</li>
        </ul>
      </nav>

      <div className="bg-gray-100 p-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">회원 이름</h2>
            <p>{userInfo.name}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">회원 등급</h2>
            <p>{userInfo.membership}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">적립금 & 예치금</h2>
            <p>{userInfo.points}원</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">쿠폰</h2>
            <p>{userInfo.coupons}개</p>
          </div>
        </div>
        <button className="mt-4 text-blue-600">내 정보 수정 &gt;</button>
      </div>

      <div className="flex">
        <aside className="w-1/4 pr-8">
          <h3 className="font-semibold mb-4">나의 주문</h3>
          <ul className="space-y-2">
            <li>전체 주문 내역</li>
            <li>결제 취소 내역</li>
            <li>반품 내역</li>
          </ul>

          <h3 className="font-semibold mt-8 mb-4">나의 정보</h3>
          <ul className="space-y-2">
            <li>내 정보 수정</li>
            <li>적립금 & 예치금</li>
            <li>쿠폰 현황</li>
            <li>응모 현황</li>
          </ul>

          <h3 className="font-semibold mt-8 mb-4">고객센터</h3>
          <ul className="space-y-2">
            <li>자주 묻는 질문</li>
            <li>로그아웃</li>
          </ul>
        </aside>

        <main className="w-3/4">
          <h2 className="text-2xl font-semibold mb-6">나의 주문</h2>
          <h3 className="text-xl mb-4">최근 주문 내역</h3>

          <Tabs>
            <TabList>
              <Tab onClick={() => setActiveTab('전체 스토어')}>전체 스토어</Tab>
              <Tab onClick={() => setActiveTab('온라인 스토어')}>온라인 스토어</Tab>
              <Tab onClick={() => setActiveTab('오프라인 스토어')}>오프라인 스토어</Tab>
              <Tab onClick={() => setActiveTab('라플 스토어')}>라플 스토어</Tab>
            </TabList>

            <TabPanel>
              {activeTab === '오프라인 스토어' && <p>주문내역이 없습니다.</p>}
              {/* 다른 탭에 대한 내용도 여기에 추가 */}
            </TabPanel>
          </Tabs>

          <div className="mt-8">
            <h3 className="text-xl mb-4">나의 정보</h3>
            {/* 나의 정보 섹션 내용 */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyPage;