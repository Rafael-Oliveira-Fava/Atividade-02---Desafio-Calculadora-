import { useState } from 'react'
import './FormCalculadora.css'

function FormCalculadora() {
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState(null)

  function limpar() {
    setNumero1('')
    setNumero2('')
    setResultado(null)
  }

  function calcular(operacaoSelecionada) {
    if (!numero1 || !numero2) {
      alert('Atenção! Todos os campos são obrigatórios.')
      return
    }

    const numero1Num = parseFloat(numero1)
    const numero2Num = parseFloat(numero2)

    if (Number.isNaN(numero1Num) || Number.isNaN(numero2Num)) {
      alert('Atenção! Por favor, insira apenas números válidos.')
      return
    }

    switch (operacaoSelecionada) {
      case 'Mais':
        setResultado(numero1Num + numero2Num)
        break
      case 'Menos':
        setResultado(numero1Num - numero2Num)
        break
      case 'Multiplicar':
        setResultado(numero1Num * numero2Num)
        break
      case 'Dividir':
        if (numero2Num === 0) {
          alert('Atenção! Não é possível dividir por zero.')
          return
        }
        setResultado(numero1Num / numero2Num)
        break
      default:
        alert('Selecione uma operação válida.')
    }
  }

  return (
    <div className="calculadora-container">
      <h2>Calculadora</h2>

      <div className="input-group">
        <input
          type="number"
          step="any"
          name="numero1"
          id="numero1"
          placeholder="Informe o primeiro número..."
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />
      </div>

      <div className="input-group">
        <input
          type="number"
          step="any"
          name="numero2"
          id="numero2"
          placeholder="Informe o segundo número..."
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
      </div>

      <div className="botoes-group">
        <button type="button" onClick={() => calcular('Mais')}>
          Mais
        </button>
        <button type="button" onClick={() => calcular('Menos')}>
          Menos
        </button>
        <button type="button" onClick={() => calcular('Multiplicar')}>
          Multiplicar
        </button>
        <button type="button" onClick={() => calcular('Dividir')}>
          Dividir
        </button>
        <button type="button" className="btn-limpar" onClick={limpar}>
          Limpar
        </button>
      </div>

      {resultado !== null && (
        <div className="resultado">
          <p>Resultado: {Number(resultado).toFixed(2)}</p>
        </div>
      )}
    </div>
  )
}

export default FormCalculadora