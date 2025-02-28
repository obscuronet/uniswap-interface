import { useState } from 'react'
import styled from 'styled-components/macro'

import { useModalIsOpen } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/reducer'
import DefaultMenu from './DefaultMenu'
import LanguageMenu from './LanguageMenu'
import { TransactionHistoryMenu } from './TransactionMenu'

const WalletWrapper = styled.div`
  border-radius: 12px;
  width: 320px;
  max-height: 376px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  top: 60px;
  right: 70px;
  background-color: ${({ theme }) => theme.backgroundSurface};
  padding: 16px 0;
`

export enum MenuState {
  DEFAULT = 'DEFAULT',
  LANGUAGE = 'LANGUAGE',
  TRANSACTIONS = 'TRANSACTIONS',
}

const WalletDropdownWrapper = styled.div`
  position: absolute;
  top: 65px;
  right: 20px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xl}px`}) {
    top: unset;
    right: 50%;
    bottom: 45px;
    transform: translateX(50%);
  }
`

const WalletDropdown = () => {
  const [menu, setMenu] = useState<MenuState>(MenuState.DEFAULT)
  const walletDropdownOpen = useModalIsOpen(ApplicationModal.WALLET_DROPDOWN)

  return (
    <>
      {walletDropdownOpen && (
        <WalletDropdownWrapper>
          <WalletWrapper>
            {menu === MenuState.TRANSACTIONS && <TransactionHistoryMenu onClose={() => setMenu(MenuState.DEFAULT)} />}
            {menu === MenuState.LANGUAGE && <LanguageMenu onClose={() => setMenu(MenuState.DEFAULT)} />}
            {menu === MenuState.DEFAULT && <DefaultMenu setMenu={setMenu} />}
          </WalletWrapper>
        </WalletDropdownWrapper>
      )}
    </>
  )
}

export default WalletDropdown
