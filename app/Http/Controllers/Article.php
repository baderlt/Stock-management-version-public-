<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB;


class Article extends Controller
{
    //
    function Ajoute_article(Request $request){
        $this->validate($request, [
            
            'nom_article' => ['required', 'string', 'max:255', 'unique:articles'],
          
        ]);
      
        $article=new \App\Models\Article;   
         $article->nom_article=$request->input('nom_article');
         $article->unite=$request->input('unite');
         $article->save();
         return back()->with('succes','operation validé');
    }
}
