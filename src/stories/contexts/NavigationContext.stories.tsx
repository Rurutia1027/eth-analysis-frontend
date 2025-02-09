import { Meta, StoryObj } from '@storybook/react'; 
import { NavigationProvider, NavigationContext } from '../../contexts/NavigationContext';
import { useContext } from 'react';

export default {
    title: 'Context/NavigationProvider',
    component: NavigationProvider,
} satisfies Meta<typeof NavigationProvider>; 


const NavigationConsumerComponent = () => { 
    const { hidingNavigationPosition, changeHidingNavigationPosition, faqPosition, changeFaqPosition } = useContext(NavigationContext); 

    return (
        <div className='p-6 bg-gray-800 text-white rounded-lg'>
            <h2 className="text-xl font-bold mb-4">Navigation Context Demo</h2>
            <p className="mb-2">Hiding Navigation Position: {hidingNavigationPosition}</p>
            <p className="mb-4">FAQ Position: {faqPosition}</p>
            
            <div className='flex gap-4'>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => changeHidingNavigationPosition(hidingNavigationPosition + 1)}> Increase Hiding Navigation Position</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => changeFaqPosition(faqPosition + 100)}>Increase FAQ Position</button>
            </div>
        </div>
    )
}

export const Default: StoryObj<typeof NavigationProvider> = {
    render: () => (
        <NavigationProvider>
            <NavigationConsumerComponent/>
        </NavigationProvider>
    )
}