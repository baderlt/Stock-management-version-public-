export default function MainDashboardAjouterProduit(props){
    return(
        <div>
            <div className="px-10 border-b border-gray-200">
            <h1 class="text-2xl gap-x-4 items-center py-2 text-gray-500 leading-relaxed text-gray-800">Ajouter un nouveau produit </h1>
            <p class="text-sm  text-gray-500">
                Ajouter un nouveau produit à la base de données
            </p>
        </div>
            <form action="/ajoute_article" method="POST" className="p-10">

            <div className="items-center border-b border-teal-500 py-2">
                    <input className=" text-xl appearance-none bg-transparent w-full border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="nom_article" placeholder="Nom d'article"/>
                </div>

                <div className="items-center border-b border-teal-500 py-2">
                    <input className=" text-xl appearance-none bg-transparent w-full border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="unite" placeholder="Unité" />
                </div>
    
                <br />
                <button class=" flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 border-4 text-white py-1 px-2 rounded text-xl " type="submit">
                    Ajouter Article
                </button>&ensp;
                <button class="outline outline-1 flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 py-1 px-2 rounded text-xl" type="reset">
                    Annuler
                </button>
            </form>
            
        </div>
    )
}