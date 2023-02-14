import { BrandNames } from "./BrandNames"
import { Titles } from "./Titles"

function App() {
  return (
    <div style={{ display: 'flex', }}>
      <div>
        <p>Brand Names:</p>
        <BrandNames />
      </div>
      <div>
        <p>Titles:</p>
        <Titles />
      </div>
    </div>
  )
}

export default App
