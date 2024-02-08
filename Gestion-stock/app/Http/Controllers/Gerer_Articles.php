<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Gerer_Articles extends Controller
{
    //
    function Ajouter_Article(Request $req){

        $nouveauArticle=new \App\Models\Article;
        $nouveauArticle->nom_article=$req->nom_article;
        $nouveauArticle->unite=$req->unite_article;
        $nouveauArticle->save();

    }
    function Supprimer_Article(Request $req){
        $article=new \App\Models\Article;
        $article->where("id","=",$req->id_article)->delete();   
    }
}
