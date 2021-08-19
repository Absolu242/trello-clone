import React from "react"
import AddNewItem from "./components/AddNewItem"
import Card from "./components/Card"
import Column from "./components/Column"
import { AppContainer } from "./styles"

function App() {
  return (
    <AppContainer>
      <Column text='To Do'>
        <Card text='Build more ts/react apps' />
      </Column>
      <Column text='In Progress'>
        <Card text='Building a ts/react app' />
      </Column>
      <Column text='Done'>
        <Card text='Build my portfolio' />
      </Column>
      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
    </AppContainer>
  )
}

export default App
