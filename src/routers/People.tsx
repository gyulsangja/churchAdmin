import React from 'react';

const People = () => {
  return (
    <div className='flex'>
        <nav className='rounded-xl shadow-xl overflow-hidden'>
            <dl>
                <dt className='p-[10px] bg-[#e2f1f7]'>교적</dt>
                <dd className='p-[10px]'>목별</dd>
                <dd className='p-[10px]'>전별</dd>
                <dd className='p-[10px]'>청</dd>
                <dd className='p-[10px]'>학</dd>
            </dl>
        </nav>

      <section>
        <h2>제목</h2>
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>생년월일</th>
                    <th>직분</th>
                    <th>연락처</th>
                    <th>휴대전화</th>
                    <th>주소</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        </table>
      </section>
    </div>
  );
}

export default People;
