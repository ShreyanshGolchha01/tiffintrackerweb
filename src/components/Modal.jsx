import { X, PartyPopper } from 'lucide-react'
import './Modal.css'

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className="modal-icon">
          <PartyPopper size={40} />
        </div>
        
        <h3>Awesome!</h3>
        <p>Tumhe notification mil jayega jab app launch hoga!</p>
        
        <button className="modal-btn" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  )
}

export default Modal
