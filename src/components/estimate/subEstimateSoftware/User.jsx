function User({processUser}){
    return(
        <div className="flex flex-wrap text-center">
            <div onClick={processUser()} className="w-80 text-white p-5 bg-gradient-to-r from-green-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:basis-3/12 rounded-lg border-2 border-slate-300 m-3">
                <p>Pribadi</p>
            </div>
            <div onClick={processUser()} className="w-80 text-white p-5 bg-gradient-to-r from-green-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:basis-3/12 rounded-lg border-2 border-slate-300 m-3">
                <p>Pendidikan</p>
            </div>
            <div onClick={processUser()} className="w-80 text-white p-5 bg-gradient-to-r from-green-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:basis-3/12 rounded-lg border-2 border-slate-300 m-3">
                <p>Perusahaan</p>
            </div>
        </div>
    )
}

export default User;