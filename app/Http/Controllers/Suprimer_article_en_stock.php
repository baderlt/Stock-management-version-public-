<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Articles_en_stock;

class Suprimer_article_en_stock extends Controller
{
function Suprimer_article_en_stock($request){
    $request=json_decode($request);
    Articles_en_stock::where('id','=',$request->id_articles_en_stock)->delete();
    return 'Operation Validé';
     
}
}
