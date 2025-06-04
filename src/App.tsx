// App.tsx
import fakeDataProvider from "ra-data-fakerest";
import { customDarkTheme } from "./theme";
import { Admin, Resource } from "react-admin";
import { SparkmeterV2Details } from "./SparkmeterV2Details";
import CustomLayoutV2 from "./CustomLayoutV2";


const dataProvider = fakeDataProvider({
  sparkmeters: Array.from({ length: 3241 }).map((_, id) => ({
    id,
    meterSerial: `SMRPI-01-00023${id}`,
    meterGUID: `guid-${id}`,
    meterState: "Assign",
    poleId: `63${id}34`,
    customerId: `64${id}01`,
  })),
});

const App = () => (
  <Admin theme={customDarkTheme} dataProvider={dataProvider} layout={CustomLayoutV2} >
    <Resource name="sparkmeters" list={SparkmeterV2Details} />
  </Admin>
);

export default App;
