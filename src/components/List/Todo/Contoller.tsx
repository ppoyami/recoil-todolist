import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import Dropdown from '@components/Dropdown';
import { categories } from '../../../atoms';

interface IController {
  id: number;
  current: string;
}

export default function Contoller({ id, current }: IController) {
  const categoryList = useRecoilValue(categories);
  return (
    <Wrapper>
      <Dropdown id={id} current={current} items={categoryList} />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  position: 'absolute',
  bottom: '.5em',
  right: '.5em',
});
