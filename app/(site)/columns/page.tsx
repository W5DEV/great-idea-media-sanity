import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Columns',
};

export default function Columns() {
  return (
    <>
      <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-200 to-white'>
        Columns Page Goes Here.
      </div>
    </>
  );
}
