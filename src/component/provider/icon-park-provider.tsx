import { IconProvider, DEFAULT_ICON_CONFIGS } from '@icon-park/react'
import '@icon-park/react/styles/index.css'

const IconConfig = {...DEFAULT_ICON_CONFIGS, prefix: 'icon'}

function IconParkProvider({ children }: { children: React.ReactNode }) {
  return (
    <IconProvider value={IconConfig}>
        { children }
    </IconProvider>
  )
}

export default IconParkProvider