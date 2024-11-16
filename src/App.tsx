
import { AppProduct } from "./components/AppProduct/AppProduct"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { MiPrimerComponenente } from "./components/MiPrimerComponente/MiPrimerComponenente"


export const App = () => {

   
  return (
   <>
     {/* {/* <MiPrimerComponenente
    text={"Mi primer componente"}
    color="blue"
    fontSize={2}
    />
    <ComponentCounter/>
   <ComponentUseEffect/> }
   <FormComponent/> */}
   <AppProduct/>
   </>
  )
}
