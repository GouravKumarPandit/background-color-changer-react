import './App.css';
import MainContainer from './components/MainContainer';
import BackgroundScreen from './components/BackgroundScreen';
import AllColorButton from './components/AllColorButton';

import { useState } from 'react'

function App() {
	const [bgColor, setBgColor] = useState("bg-amber-100")
    
    function changeBgColor(bgColor){
        setBgColor(bgColor);
    }

	return (
		<>
			<MainContainer bgColor={bgColor}>
				<BackgroundScreen bgColor={bgColor} />
				<AllColorButton  changeBgColor={changeBgColor} />
			</MainContainer>
		</>
	)
}

export default App
