import trollface from '../../images/trollface.png'

export default function Nav() {
    return (
        <div className="w-full h-16 bg-gradient-to-r from-purple-300 to-purple-400 p-8 flex items-center justify-between">
            <div className="flex items-center">
                <img src={trollface} alt="trollface" className='w-10 h-auto'/>
                <h1 className='text-white font-extrabold ml-2 text-2xl'>Meme Generator</h1>
            </div>
            <span className='text-white font-medium'>React Course - Project 3</span>
        </div>
    )
}