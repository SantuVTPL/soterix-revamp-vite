import IconParkProvider from "./icon-park-provider"

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <IconParkProvider>
        { children }
    </IconParkProvider>
  )
}

export default Provider