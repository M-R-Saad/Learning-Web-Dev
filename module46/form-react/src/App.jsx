import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import FormAction from './components/FormAction/FormAction'
import ControlledField from './components/ControlledField/ControlledField'
import UncontrolledField from './components/UncontrolledField/UncontrolledField'
import HookForm from './components/HookForm/HookForm'
import ProductManagement from './components/ProductManagement/ProductManagement'
import FamilyTree from './components/FamilyTree/FamilyTree'

function App() {

  return (
    <>
      <h1 className='text-4xl text-center font-bold my-12'>Explore React Form</h1>
      <div className='grid grid-cols-2 gap-y-24 mb-12'>
        <SimpleForm></SimpleForm>
        <FormAction></FormAction>
        <ControlledField></ControlledField>
        <UncontrolledField></UncontrolledField>
        <HookForm></HookForm>
        <ProductManagement></ProductManagement>
      </div>
      <div className='my-12 flex justify-center'>
        <FamilyTree></FamilyTree>
      </div>
    </>
  )
}

export default App
