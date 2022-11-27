export default function Form({countOfMemes}) {
    const randomMeme = () => console.log(Math.round(Math.random() * countOfMemes))
    return (
        <div className="px-12 py-12">
            <form action="">
                <div className="flex items-center justify-between gap-6">
                    <input type="text" className="w-1/2 border border-gray rounded-md px-4 py-2" placeholder='Shut up*'
                           required/>
                    <input type="text" className="w-1/2 border border-gray rounded-md px-4 py-2"
                           placeholder='and take my money*' required/>
                </div>
                <button
                    className="w-full h-12 bg-gradient-to-r from-purple-300 to-purple-400 rounded-md text-center px-4 py-2 text-white mt-4 hover:text-xl font-extrabold transition-all"
                    onClick={randomMeme}>
                    Get a new meme image 🖼
                </button>
            </form>
        </div>
    )
}