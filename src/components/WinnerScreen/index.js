import React, { useState } from 'react'
import { STATE_WINNER } from 'utils/minimax'
import './style.scss'
import CloseSVG from 'components/CloseSVG'

const WinnerScreen = ({ winner }) => {
  const [modalIsOpen,setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    window.location.reload()
  }

  return (
    <>
      {modalIsOpen && 
      <section className="modal-background">
        <div className="modal-container">
          <div className="header-modal">
            <button onClick={closeModal}>
              <CloseSVG className="close-container"
                width="20px" 
                height="20px" />
            </button>
          </div>
          <div className="main-modal">
            { winner === STATE_WINNER.HUMAN && <span>Winner: Player 1</span> }
            { winner === STATE_WINNER.IA && <span>Winner: IA</span> }
            { winner === STATE_WINNER.NONE && <span>Not Winner</span> }
          </div>
        </div>
      </section> }
    </>
  )
}

export default WinnerScreen
