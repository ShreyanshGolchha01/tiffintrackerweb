import { X, Check, AlertCircle } from 'lucide-react'
import './Problems.css'

const problems = [
  {
    problem: '"Kitne din tiffin liya yaad nahi rehta"',
    solution: 'Daily marking + Calendar history se solved!'
  },
  {
    problem: '"Sunday ka hamesha confusion"',
    solution: 'Flexible Sunday configuration - exactly jaisa tumhara plan!'
  },
  {
    problem: '"Tiffin wali ki chutti ka record nahi"',
    solution: 'Tiffin Leave feature with remarks!'
  },
  {
    problem: '"Month end calculation galat ho jata hai"',
    solution: 'Smart Calculator - exact math, no errors!'
  },
  {
    problem: '"Settlement ka proof nahi hota"',
    solution: 'Share bill as image - professional format!'
  }
]

function Problems() {
  return (
    <section className="problems" id="problems">
      <h2 className="section-title">
        <AlertCircle size={28} />
        Ye Problems Hain Na?
      </h2>
      
      <div className="problems-container">
        {problems.map((item, index) => (
          <div className="problem-item" key={index}>
            <div className="problem-icon">
              <X size={18} />
            </div>
            <div className="problem-content">
              <h4>{item.problem}</h4>
              <p className="solution">
                <Check size={16} />
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Problems
