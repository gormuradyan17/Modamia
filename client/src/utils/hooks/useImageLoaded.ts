import { useState } from 'react';
const useImageLoaded = (src: string) => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	
	if (src) {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setIsLoaded(true)
		};
	}
	return isLoaded
};

export default useImageLoaded;