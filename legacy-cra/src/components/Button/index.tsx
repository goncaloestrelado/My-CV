import styled from "styled-components";

interface Props {
  children: any;
}

export function Button({ children }: Props) {
  return (
    <Container className="h-12 rounded-full hover:outline-none hover:ring-2 hover:ring-slate-400 hover:ring-offset-2 hover:ring-offset-slate-50">
      <Outline className="animate-[spin_2s_linear_infinite]" />
      <Fill className="rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </Fill>
    </Container>
  );
}

const Container = styled.button`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  padding: 1px;
`;

const Outline = styled.span`
  position: absolute;
  inset: -1000%;
  background: conic-gradient(from 90deg at 50% 50%, #0ea5e9 0%, #6366f1 50%, #0ea5e9 100%);
`;

const Fill = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
