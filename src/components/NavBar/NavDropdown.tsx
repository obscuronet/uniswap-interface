import { Box } from 'nft/components/Box'
import { ReactNode } from 'react'

import * as styles from './NavDropdown.css'

interface NavDropdownProps {
  top: number
  right?: number
  leftAligned?: boolean
  horizontalPadding?: boolean
  centerHorizontally?: boolean
  paddingBottom?: number
  paddingTop?: number
  children: ReactNode
}

export const NavDropdown = ({
  top,
  centerHorizontally,
  leftAligned,
  horizontalPadding,
  paddingBottom,
  paddingTop,
  children,
}: NavDropdownProps) => {
  return (
    <Box
      paddingX={horizontalPadding ? '16' : undefined}
      style={{
        top: `${top}px`,
        left: centerHorizontally ? '50%' : leftAligned ? '0px' : 'auto',
        right: centerHorizontally || leftAligned ? 'auto' : '0px',
        transform: centerHorizontally ? 'translateX(-50%)' : 'unset',
        paddingBottom: paddingBottom ?? '24px',
        paddingTop: paddingTop ?? '24px',
        zIndex: 3,
      }}
      className={styles.NavDropdown}
    >
      {children}
    </Box>
  )
}
