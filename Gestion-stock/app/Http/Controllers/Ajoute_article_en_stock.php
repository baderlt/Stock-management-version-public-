<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Articles_en_stock;
use DB;
class Ajoute_article_en_stock extends Controller
{
    //

    function Ajoute_article_en_stock($request){
       
        $request=json_decode($request);
        $ajout=new \App\Models\Articles_en_stock;
        $ajout->id_stock=$request->id_stock;
        $ajout->id_article=$request->id_article;
        $ajout->quantite_initiale_article=$request->quantite_initiale_article;
        $ajout->quantite_courant_article=$request->quantite_initiale_article;
        $ajout->observation=$request->observation;
        $ajout->save();
         
        return 'Article Ajouté';




    }
}
