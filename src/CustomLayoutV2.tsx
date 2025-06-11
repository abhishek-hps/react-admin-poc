import { Layout, LayoutProps } from "react-admin";
import { NeuronDrawer } from "./NeuronDrawer";
import NeuronAppBar from "./NeuronAppBar";
const CustomLayout = ({ children }: LayoutProps) => (
  <Layout appBar={() => <NeuronAppBar />}  sidebar={() => <NeuronDrawer />} >
    {children}
  </Layout>
);

export default CustomLayout;
