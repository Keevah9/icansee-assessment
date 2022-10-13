export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
            {
                type==='Button' ?
                (
                <button
                    type={action}
                    className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-[#67cd31] hover:bg-green-600 focus:outline-none focus:ring-2 font-bold focus:ring-offset-2 focus:ring-green-200 mt-12"
                    onSubmit={handleSubmit}
                >
                    {text}
                </button>
                )
                :
                ''
            }
        </>
    )
}