import React from "react"
import { Header } from "./components/Header"
import { ReviewList } from "./components/Reviews"
function App() {
  return (
    <div className='App'>
      <Header />
      <ReviewList
        reviews={[
          {
            reviewer: "Leny Al",
            date: "May 9, 2021",
            rating: 4,
            comment: "It was quite helpful",
          },
          {
            reviewer: "Mary Linsha",
            date: "May 9, 2014",
            rating: 1,
            comment: "Not sure why the updates keep causing more glitches",
          },
          {
            reviewer: "Jeff the Brew",
            date: "May 9, 2022",
            rating: 5,
            comment: "Got my whole family this app for christmas",
          },
        ]}
      />
    </div>
  )
}

export default App
