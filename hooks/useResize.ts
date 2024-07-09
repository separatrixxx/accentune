import { useEffect, useState } from 'react';

export const useResizeW = (): number => {
	const [resizeW, setResizeW] = useState<number>(0);

	useEffect(() => {
		setResizeW(window.innerWidth);
		
		window.addEventListener('resize', function(){
            setResizeW(window.innerWidth);
        });
        
	}, []);

	return resizeW;
};

export const useResizeH = (): number => {
	const [resizeH, setResizeH] = useState<number>(0);

	useEffect(() => {
		setResizeH(window.innerHeight);
		
		window.addEventListener('resize', function(){
            setResizeH(window.innerHeight);
        });
        
	}, []);

	return resizeH;
};