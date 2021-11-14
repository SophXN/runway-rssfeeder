import React from "react"
import { Header } from "./components/Header"
import { ReviewList } from "./components/Reviews"
function App() {
  return (
    <div className='App'>
      <Header />
      <h1>
        Reviews for <u>Notability</u>
      </h1>
      <ReviewList
        reviews={[
          {
            reviewer: "Leny Al",
            date: "May 9, 1092",
            rating: 4,
            comment: "It was quite helpful",
          },
        ]}
      />
    </div>
  )
}

export default App
