<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Articles_en_stock;
use DB;


class Update_articles_en_stock extends Controller
{
    //
    function Update_article_en_stock($request){
        $request=json_decode($request);
        $update=Articles_en_stock::where('id_article', '=',$request->id_article)->where('id_stock','=',$request->id_stock)->first();
        $update->quantite_courant_article=$request->quantite_courant;
        $update->observation=$request->observation;
        $update->quantite_initiale_article=$request->quantite_initial;
        $update->save();
        return "Opération validé";
        
    }
}
