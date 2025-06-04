import { LayoutProps } from 'react-admin';
import { NeuronDrawer } from './NeuronDrawer';
import NeuronHeader from './NeuronHeader';

// const CustomLayout = ({ children }: LayoutProps) => (
//   <div style={{ display: 'flex', backgroundColor: '#0f172a', minHeight: '100vh' }}>
//     <NeuronDrawer />
//     <div style={{ flex: 1, marginLeft: 260, padding: '16px' }}>
//       {children}
//     </div>
//   </div>
// );

// export default CustomLayout;
const CustomLayout = ({ children }: LayoutProps) => (
  <div style={{ display: 'flex', backgroundColor: '#0f172a', minHeight: '100vh' }}>
    <NeuronDrawer />
    <div style={{ flex: 1, marginLeft: 260 }}>
      <NeuronHeader />
      <div style={{ padding: '16px' }}>
        {children}
      </div>
    </div>
  </div>
);

export default CustomLayout;
