import {
  Chart3DComponent,
  Chart3DSeriesCollectionDirective,
  Chart3DSeriesDirective,
  Category3D,
  Inject,
  Legend3D,
  DataLabel3D,
  Tooltip3D,
  BarSeries3D,
  Highlight3D,
} from "@syncfusion/ej2-react-charts";
import * as React from "react";
import * as ReactDOM from "react-dom";
export default function Chart3d({ data2 }) {
  return (
    <Chart3DComponent
      id="charts"
      wallColor="transparent"
      enableRotation={true}
      rotation={7}
      tilt={10}
      depth={100}
    >
      <Inject
        services={[
          BarSeries3D,
          Category3D,
          Legend3D,
          Tooltip3D,
          DataLabel3D,
          Highlight3D,
        ]}
      />
      <Chart3DSeriesCollectionDirective>
        <Chart3DSeriesDirective
          dataSource={data2} // Use data2 passed as prop
          xName="country"
          yName="gold"
          type="Bar"
          columnFacet="Cylinder"
        />
      </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>
  );
}
/**
 * 
 * returns 
function MyButton() {
  return (
    <button>
    I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
    <h1>Welcome to my app</h1>
    <MyButton />
    </div>
  );
}

*/