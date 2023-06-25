import {useState, useEffect} from 'react';
import './App.css';

function App() {
	const [answer, setAnswer] = useState('');
	const [hiddenMessage, setHiddenMessage] = useState('');

	useEffect(() => {
		console.log(
			'lugar interessante para se olhar, né? Talvez o nome da pagina te dê uma dica'
		);
	}, []);

	useEffect(() => {
		const correctAnswer = import.meta.env.VITE_ANSWER;
    const hiddenMessageVite = import.meta.env.VITE_HIDDEN_MESSAGE;
    const formattedAnswer = answer.toLowerCase().split(' ').join('').trim();

		if (formattedAnswer === correctAnswer) {
			return setHiddenMessage(hiddenMessageVite);
		}

		return setHiddenMessage('');
	}, [answer]);

	return hiddenMessage 
  ? <p>{hiddenMessage}</p>
  : (
			<main>
				<h1>Acróstico de amor</h1>
				<div>
					<span>Petite e graciosa, és uma joia rara</span>
					<span>Em teu sorriso, um brilho que não para</span>
					<span>Iluminada por uma luz interior</span>
					<span>Segues com coragem, sem temer o temor</span>
					<span>Harmônica essência, tão singular</span>
					<span>Yah! Tu és a personificação do encanto.</span>
          <span>ㅤ</span>
					<span>Independente, és uma alma livre.</span>
          <span>ㅤ</span>
					<span>Olhando o mundo com olhos de quem vive</span>
					<span>Trazendo consigo a força de um vulcão</span>
					<span>Admirável, és uma fonte de inspiração</span>
					<span>Inspiras coragem, determinação e fé</span>
					<span>Ilumina cada caminho que tu és.</span>
				</div>

				<section>
					<h2>O </h2> <h3>MANEQUIM</h3> <h2> é a chave</h2>
				</section>

				<input
					type="text"
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
				/>
			</main>
	);
}

export default App;
