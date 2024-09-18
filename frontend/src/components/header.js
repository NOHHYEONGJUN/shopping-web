import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="Background" style={{width: '100%', height: 36, paddingTop: 12, paddingBottom: 12, background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{color: 'white', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: 16, letterSpacing: 0.30}}>
        웍스아웃 신규가입 <span style={{color: '#DC2626', fontWeight: '700'}}>앱&오프라인 5% 할인</span> 쿠폰
      </div>
    </div>
    <nav className="Background" style={{width: '100%', height: 98, background: 'rgba(255, 255, 255, 0.95)'}}>
      <div className="Horizontalborder" style={{height: 61, borderBottom: '1px #F3F4F6 solid', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px'}}>
        <div style={{display: 'flex', gap: '24px'}}>
          <Link to="/notifications" style={{color: '#1F2937', fontSize: 12}}>알림센터</Link>
          <Link to="/raffles" style={{color: '#1F2937', fontSize: 12}}>응모</Link>
          <Link to="/stores" style={{color: '#1F2937', fontSize: 12}}>매장 정보</Link>
          <Link to="/editorial" style={{color: '#1F2937', fontSize: 12}}>에디토리얼</Link>
        </div>
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          WORKSOUT
        </div>
        <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 11L8.5 8.5M10 5.5C10 7.98528 7.98528 10 5.5 10C3.01472 10 1 7.98528 1 5.5C1 3.01472 3.01472 1 5.5 1C7.98528 1 10 3.01472 10 5.5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{color: '#1F2937', fontSize: 12}}>검색</span>
          </div>
          <Link to="/wishlist" style={{color: '#1F2937', fontSize: 12}}>관심목록</Link>
          <Link to="/cart" style={{color: '#1F2937', fontSize: 12}}>장바구니</Link>
          <Link to="/login" style={{color: '#1F2937', fontSize: 12}}>로그인</Link>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', gap: '48px', height: 36, alignItems: 'center'}}>
        <Link to="/men" style={{color: '#1F2937', fontSize: 12}}>남성</Link>
        <Link to="/women" style={{color: '#1F2937', fontSize: 12}}>여성</Link>
        <Link to="/lifestyle" style={{color: '#1F2937', fontSize: 12}}>생활</Link>
        <Link to="/saber-skate" style={{color: '#1F2937', fontSize: 12}}>세이버 스케이트</Link>
        <Link to="/brands" style={{color: '#1F2937', fontSize: 12}}>브랜드</Link>
        <Link to="/sale" style={{color: '#DC2626', fontSize: 12, fontWeight: 600}}>세일</Link>
      </div>
    </nav>
  </header>
);

export default Header;