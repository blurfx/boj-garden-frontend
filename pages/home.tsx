import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const HomePage = (): JSX.Element => (
  <>
    <Input type='text' placeholder='백준 온라인 저지 핸들을 입력해주세요' />
    <Button type='button'>검색</Button>
  </>
);

export default HomePage;
