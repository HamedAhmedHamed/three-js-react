import CardContainer from "./components/CardContainer"
import Card from "./components/Card"

import AirPurifierCanvas from "./components/3d/canvas/AirPurifierCanvas"
import HeaterCanvas from "./components/3d/canvas/HeaterCanvas"
import HWM2Canvas from "./components/3d/canvas/HWM2Canvas"

function App() {
  return (
    <CardContainer>
      <Card
        canvas={<AirPurifierCanvas />} 
        title="air purifier"
        price={99.99}
      >
        Lorem ipsum dolor sit amet consectetur.
      </Card>

      <Card
        canvas={<HeaterCanvas />}
        title="heater"
        price={799.99}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </Card>

      <Card
        canvas={<HWM2Canvas />}
        title="washer"
        price={299.99}
      >
        Lorem ipsum dolor sit.
      </Card>
    </CardContainer>
  )
}

export default App
