import React from "react"

const ScrollContext = React.createContext()
function ScrollProvider({ children }) {
  const [height, setHeight] = React.useState(0)
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset)
    })
    return () => window.removeEventListener("scroll", () => {})
  })
  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    <ScrollContext.Provider value={{ height, scrollBackToTop }}>
      {children}
    </ScrollContext.Provider>
  )
}
export { ScrollProvider, ScrollContext }
